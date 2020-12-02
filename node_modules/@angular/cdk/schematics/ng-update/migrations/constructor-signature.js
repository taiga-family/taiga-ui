/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/cdk/schematics/ng-update/migrations/constructor-signature", ["require", "exports", "typescript", "@angular/cdk/schematics/update-tool/migration", "@angular/cdk/schematics/update-tool/version-changes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = require("typescript");
    const migration_1 = require("@angular/cdk/schematics/update-tool/migration");
    const version_changes_1 = require("@angular/cdk/schematics/update-tool/version-changes");
    /**
     * List of diagnostic codes that refer to pre-emit diagnostics which indicate invalid
     * new expression or super call signatures. See the list of diagnostics here:
     *
     * https://github.com/Microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json
     */
    const signatureErrorDiagnostics = [
        // Type not assignable error diagnostic.
        2345,
        // Constructor argument length invalid diagnostics
        2554,
        2555,
        2556,
        2557,
    ];
    /**
     * Migration that visits every TypeScript new expression or super call and checks if
     * the parameter type signature is invalid and needs to be updated manually.
     */
    class ConstructorSignatureMigration extends migration_1.Migration {
        constructor() {
            super(...arguments);
            // Note that the data for this rule is not distinguished based on the target version because
            // we don't keep track of the new signature and don't want to update incrementally.
            // See: https://github.com/angular/components/pull/12970#issuecomment-418337566
            this.data = version_changes_1.getAllChanges(this.upgradeData.constructorChecks);
            // Only enable the migration rule if there is upgrade data.
            this.enabled = this.data.length !== 0;
        }
        visitNode(node) {
            if (ts.isSourceFile(node)) {
                this._visitSourceFile(node);
            }
        }
        /**
         * Method that will be called for each source file of the upgrade project. In order to
         * properly determine invalid constructor signatures, we take advantage of the pre-emit
         * diagnostics from TypeScript.
         *
         * By using the diagnostics, the migration can handle type assignability. Not using
         * diagnostics would mean that we need to use simple type equality checking which is
         * too strict. See related issue: https://github.com/Microsoft/TypeScript/issues/9879
         */
        _visitSourceFile(sourceFile) {
            // List of classes of which the constructor signature has changed.
            const diagnostics = ts.getPreEmitDiagnostics(this.program, sourceFile)
                .filter(diagnostic => signatureErrorDiagnostics.includes(diagnostic.code))
                .filter(diagnostic => diagnostic.start !== undefined);
            for (const diagnostic of diagnostics) {
                const node = findConstructorNode(diagnostic, sourceFile);
                if (!node) {
                    continue;
                }
                const classType = this.typeChecker.getTypeAtLocation(node.expression);
                const className = classType.symbol && classType.symbol.name;
                const isNewExpression = ts.isNewExpression(node);
                // Determine the class names of the actual construct signatures because we cannot assume that
                // the diagnostic refers to a constructor of the actual expression. In case the constructor
                // is inherited, we need to detect that the owner-class of the constructor is added to the
                // constructor checks upgrade data. e.g. `class CustomCalendar extends MatCalendar {}`.
                const signatureClassNames = classType.getConstructSignatures()
                    .map(signature => getClassDeclarationOfSignature(signature))
                    .map(declaration => declaration && declaration.name ? declaration.name.text : null)
                    .filter(Boolean);
                // Besides checking the signature class names, we need to check the actual class name because
                // there can be classes without an explicit constructor.
                if (!this.data.includes(className) &&
                    !signatureClassNames.some(name => this.data.includes(name))) {
                    continue;
                }
                const classSignatures = classType.getConstructSignatures().map(signature => getParameterTypesFromSignature(signature, this.typeChecker));
                const expressionName = isNewExpression ? `new ${className}` : 'super';
                const signatures = classSignatures.map(signature => signature.map(t => this.typeChecker.typeToString(t)))
                    .map(signature => `${expressionName}(${signature.join(', ')})`)
                    .join(' or ');
                this.createFailureAtNode(node, `Found "${className}" constructed with ` +
                    `an invalid signature. Please manually update the ${expressionName} expression to ` +
                    `match the new signature${classSignatures.length > 1 ? 's' : ''}: ${signatures}`);
            }
        }
    }
    exports.ConstructorSignatureMigration = ConstructorSignatureMigration;
    /** Resolves the type for each parameter in the specified signature. */
    function getParameterTypesFromSignature(signature, typeChecker) {
        return signature.getParameters().map(param => typeChecker.getTypeAtLocation(param.declarations[0]));
    }
    /**
     * Walks through each node of a source file in order to find a new-expression node or super-call
     * expression node that is captured by the specified diagnostic.
     */
    function findConstructorNode(diagnostic, sourceFile) {
        let resolvedNode = null;
        const _visitNode = (node) => {
            // Check whether the current node contains the diagnostic. If the node contains the diagnostic,
            // walk deeper in order to find all constructor expression nodes.
            if (node.getStart() <= diagnostic.start && node.getEnd() >= diagnostic.start) {
                if (ts.isNewExpression(node) ||
                    (ts.isCallExpression(node) && node.expression.kind === ts.SyntaxKind.SuperKeyword)) {
                    resolvedNode = node;
                }
                ts.forEachChild(node, _visitNode);
            }
        };
        ts.forEachChild(sourceFile, _visitNode);
        return resolvedNode;
    }
    /** Determines the class declaration of the specified construct signature. */
    function getClassDeclarationOfSignature(signature) {
        let node = signature.getDeclaration();
        // Handle signatures which don't have an actual declaration. This happens if a class
        // does not have an explicitly written constructor.
        if (!node) {
            return null;
        }
        while (!ts.isSourceFile(node = node.parent)) {
            if (ts.isClassDeclaration(node)) {
                return node;
            }
        }
        return null;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RydWN0b3Itc2lnbmF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9taWdyYXRpb25zL2NvbnN0cnVjdG9yLXNpZ25hdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILGlDQUFpQztJQUNqQyw2RUFBc0Q7SUFDdEQseUZBQWdFO0lBR2hFOzs7OztPQUtHO0lBQ0gsTUFBTSx5QkFBeUIsR0FBRztRQUNoQyx3Q0FBd0M7UUFDeEMsSUFBSTtRQUNKLGtEQUFrRDtRQUNsRCxJQUFJO1FBQ0osSUFBSTtRQUNKLElBQUk7UUFDSixJQUFJO0tBQ0wsQ0FBQztJQUVGOzs7T0FHRztJQUNILE1BQWEsNkJBQThCLFNBQVEscUJBQXNCO1FBQXpFOztZQUNFLDRGQUE0RjtZQUM1RixtRkFBbUY7WUFDbkYsK0VBQStFO1lBQy9FLFNBQUksR0FBRywrQkFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUV6RCwyREFBMkQ7WUFDM0QsWUFBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQW9FbkMsQ0FBQztRQWxFQyxTQUFTLENBQUMsSUFBYTtZQUNyQixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtRQUNILENBQUM7UUFFRDs7Ozs7Ozs7V0FRRztRQUNLLGdCQUFnQixDQUFDLFVBQXlCO1lBQ2hELGtFQUFrRTtZQUNsRSxNQUFNLFdBQVcsR0FDYixFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7aUJBQzdDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLHlC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QUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvQixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge01pZ3JhdGlvbn0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvbWlncmF0aW9uJztcbmltcG9ydCB7Z2V0QWxsQ2hhbmdlc30gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvdmVyc2lvbi1jaGFuZ2VzJztcbmltcG9ydCB7VXBncmFkZURhdGF9IGZyb20gJy4uL3VwZ3JhZGUtZGF0YSc7XG5cbi8qKlxuICogTGlzdCBvZiBkaWFnbm9zdGljIGNvZGVzIHRoYXQgcmVmZXIgdG8gcHJlLWVtaXQgZGlhZ25vc3RpY3Mgd2hpY2ggaW5kaWNhdGUgaW52YWxpZFxuICogbmV3IGV4cHJlc3Npb24gb3Igc3VwZXIgY2FsbCBzaWduYXR1cmVzLiBTZWUgdGhlIGxpc3Qgb2YgZGlhZ25vc3RpY3MgaGVyZTpcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi9tYXN0ZXIvc3JjL2NvbXBpbGVyL2RpYWdub3N0aWNNZXNzYWdlcy5qc29uXG4gKi9cbmNvbnN0IHNpZ25hdHVyZUVycm9yRGlhZ25vc3RpY3MgPSBbXG4gIC8vIFR5cGUgbm90IGFzc2lnbmFibGUgZXJyb3IgZGlhZ25vc3RpYy5cbiAgMjM0NSxcbiAgLy8gQ29uc3RydWN0b3IgYXJndW1lbnQgbGVuZ3RoIGludmFsaWQgZGlhZ25vc3RpY3NcbiAgMjU1NCxcbiAgMjU1NSxcbiAgMjU1NixcbiAgMjU1Nyxcbl07XG5cbi8qKlxuICogTWlncmF0aW9uIHRoYXQgdmlzaXRzIGV2ZXJ5IFR5cGVTY3JpcHQgbmV3IGV4cHJlc3Npb24gb3Igc3VwZXIgY2FsbCBhbmQgY2hlY2tzIGlmXG4gKiB0aGUgcGFyYW1ldGVyIHR5cGUgc2lnbmF0dXJlIGlzIGludmFsaWQgYW5kIG5lZWRzIHRvIGJlIHVwZGF0ZWQgbWFudWFsbHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb25zdHJ1Y3RvclNpZ25hdHVyZU1pZ3JhdGlvbiBleHRlbmRzIE1pZ3JhdGlvbjxVcGdyYWRlRGF0YT4ge1xuICAvLyBOb3RlIHRoYXQgdGhlIGRhdGEgZm9yIHRoaXMgcnVsZSBpcyBub3QgZGlzdGluZ3Vpc2hlZCBiYXNlZCBvbiB0aGUgdGFyZ2V0IHZlcnNpb24gYmVjYXVzZVxuICAvLyB3ZSBkb24ndCBrZWVwIHRyYWNrIG9mIHRoZSBuZXcgc2lnbmF0dXJlIGFuZCBkb24ndCB3YW50IHRvIHVwZGF0ZSBpbmNyZW1lbnRhbGx5LlxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2NvbXBvbmVudHMvcHVsbC8xMjk3MCNpc3N1ZWNvbW1lbnQtNDE4MzM3NTY2XG4gIGRhdGEgPSBnZXRBbGxDaGFuZ2VzKHRoaXMudXBncmFkZURhdGEuY29uc3RydWN0b3JDaGVja3MpO1xuXG4gIC8vIE9ubHkgZW5hYmxlIHRoZSBtaWdyYXRpb24gcnVsZSBpZiB0aGVyZSBpcyB1cGdyYWRlIGRhdGEuXG4gIGVuYWJsZWQgPSB0aGlzLmRhdGEubGVuZ3RoICE9PSAwO1xuXG4gIHZpc2l0Tm9kZShub2RlOiB0cy5Ob2RlKTogdm9pZCB7XG4gICAgaWYgKHRzLmlzU291cmNlRmlsZShub2RlKSkge1xuICAgICAgdGhpcy5fdmlzaXRTb3VyY2VGaWxlKG5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgdGhhdCB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaCBzb3VyY2UgZmlsZSBvZiB0aGUgdXBncmFkZSBwcm9qZWN0LiBJbiBvcmRlciB0b1xuICAgKiBwcm9wZXJseSBkZXRlcm1pbmUgaW52YWxpZCBjb25zdHJ1Y3RvciBzaWduYXR1cmVzLCB3ZSB0YWtlIGFkdmFudGFnZSBvZiB0aGUgcHJlLWVtaXRcbiAgICogZGlhZ25vc3RpY3MgZnJvbSBUeXBlU2NyaXB0LlxuICAgKlxuICAgKiBCeSB1c2luZyB0aGUgZGlhZ25vc3RpY3MsIHRoZSBtaWdyYXRpb24gY2FuIGhhbmRsZSB0eXBlIGFzc2lnbmFiaWxpdHkuIE5vdCB1c2luZ1xuICAgKiBkaWFnbm9zdGljcyB3b3VsZCBtZWFuIHRoYXQgd2UgbmVlZCB0byB1c2Ugc2ltcGxlIHR5cGUgZXF1YWxpdHkgY2hlY2tpbmcgd2hpY2ggaXNcbiAgICogdG9vIHN0cmljdC4gU2VlIHJlbGF0ZWQgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvOTg3OVxuICAgKi9cbiAgcHJpdmF0ZSBfdmlzaXRTb3VyY2VGaWxlKHNvdXJjZUZpbGU6IHRzLlNvdXJjZUZpbGUpIHtcbiAgICAvLyBMaXN0IG9mIGNsYXNzZXMgb2Ygd2hpY2ggdGhlIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBoYXMgY2hhbmdlZC5cbiAgICBjb25zdCBkaWFnbm9zdGljcyA9XG4gICAgICAgIHRzLmdldFByZUVtaXREaWFnbm9zdGljcyh0aGlzLnByb2dyYW0sIHNvdXJjZUZpbGUpXG4gICAgICAgICAgICAuZmlsdGVyKGRpYWdub3N0aWMgPT4gc2lnbmF0dXJlRXJyb3JEaWFnbm9zdGljcy5pbmNsdWRlcyhkaWFnbm9zdGljLmNvZGUpKVxuICAgICAgICAgICAgLmZpbHRlcihkaWFnbm9zdGljID0+IGRpYWdub3N0aWMuc3RhcnQgIT09IHVuZGVmaW5lZCk7XG5cbiAgICBmb3IgKGNvbnN0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBmaW5kQ29uc3RydWN0b3JOb2RlKGRpYWdub3N0aWMsIHNvdXJjZUZpbGUpO1xuXG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsYXNzVHlwZSA9IHRoaXMudHlwZUNoZWNrZXIuZ2V0VHlwZUF0TG9jYXRpb24obm9kZS5leHByZXNzaW9uKTtcbiAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzVHlwZS5zeW1ib2wgJiYgY2xhc3NUeXBlLnN5bWJvbC5uYW1lO1xuICAgICAgY29uc3QgaXNOZXdFeHByZXNzaW9uID0gdHMuaXNOZXdFeHByZXNzaW9uKG5vZGUpO1xuXG4gICAgICAvLyBEZXRlcm1pbmUgdGhlIGNsYXNzIG5hbWVzIG9mIHRoZSBhY3R1YWwgY29uc3RydWN0IHNpZ25hdHVyZXMgYmVjYXVzZSB3ZSBjYW5ub3QgYXNzdW1lIHRoYXRcbiAgICAgIC8vIHRoZSBkaWFnbm9zdGljIHJlZmVycyB0byBhIGNvbnN0cnVjdG9yIG9mIHRoZSBhY3R1YWwgZXhwcmVzc2lvbi4gSW4gY2FzZSB0aGUgY29uc3RydWN0b3JcbiAgICAgIC8vIGlzIGluaGVyaXRlZCwgd2UgbmVlZCB0byBkZXRlY3QgdGhhdCB0aGUgb3duZXItY2xhc3Mgb2YgdGhlIGNvbnN0cnVjdG9yIGlzIGFkZGVkIHRvIHRoZVxuICAgICAgLy8gY29uc3RydWN0b3IgY2hlY2tzIHVwZ3JhZGUgZGF0YS4gZS5nLiBgY2xhc3MgQ3VzdG9tQ2FsZW5kYXIgZXh0ZW5kcyBNYXRDYWxlbmRhciB7fWAuXG4gICAgICBjb25zdCBzaWduYXR1cmVDbGFzc05hbWVzID1cbiAgICAgICAgICBjbGFzc1R5cGUuZ2V0Q29uc3RydWN0U2lnbmF0dXJlcygpXG4gICAgICAgICAgICAgIC5tYXAoc2lnbmF0dXJlID0+IGdldENsYXNzRGVjbGFyYXRpb25PZlNpZ25hdHVyZShzaWduYXR1cmUpKVxuICAgICAgICAgICAgICAubWFwKGRlY2xhcmF0aW9uID0+IGRlY2xhcmF0aW9uICYmIGRlY2xhcmF0aW9uLm5hbWUgPyBkZWNsYXJhdGlvbi5uYW1lLnRleHQgOiBudWxsKVxuICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICAvLyBCZXNpZGVzIGNoZWNraW5nIHRoZSBzaWduYXR1cmUgY2xhc3MgbmFtZXMsIHdlIG5lZWQgdG8gY2hlY2sgdGhlIGFjdHVhbCBjbGFzcyBuYW1lIGJlY2F1c2VcbiAgICAgIC8vIHRoZXJlIGNhbiBiZSBjbGFzc2VzIHdpdGhvdXQgYW4gZXhwbGljaXQgY29uc3RydWN0b3IuXG4gICAgICBpZiAoIXRoaXMuZGF0YS5pbmNsdWRlcyhjbGFzc05hbWUpICYmXG4gICAgICAgICAgIXNpZ25hdHVyZUNsYXNzTmFtZXMuc29tZShuYW1lID0+IHRoaXMuZGF0YS5pbmNsdWRlcyhuYW1lISkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjbGFzc1NpZ25hdHVyZXMgPSBjbGFzc1R5cGUuZ2V0Q29uc3RydWN0U2lnbmF0dXJlcygpLm1hcChcbiAgICAgICAgICBzaWduYXR1cmUgPT4gZ2V0UGFyYW1ldGVyVHlwZXNGcm9tU2lnbmF0dXJlKHNpZ25hdHVyZSwgdGhpcy50eXBlQ2hlY2tlcikpO1xuXG4gICAgICBjb25zdCBleHByZXNzaW9uTmFtZSA9IGlzTmV3RXhwcmVzc2lvbiA/IGBuZXcgJHtjbGFzc05hbWV9YCA6ICdzdXBlcic7XG4gICAgICBjb25zdCBzaWduYXR1cmVzID1cbiAgICAgICAgICBjbGFzc1NpZ25hdHVyZXMubWFwKHNpZ25hdHVyZSA9PiBzaWduYXR1cmUubWFwKHQgPT4gdGhpcy50eXBlQ2hlY2tlci50eXBlVG9TdHJpbmcodCkpKVxuICAgICAgICAgICAgICAubWFwKHNpZ25hdHVyZSA9PiBgJHtleHByZXNzaW9uTmFtZX0oJHtzaWduYXR1cmUuam9pbignLCAnKX0pYClcbiAgICAgICAgICAgICAgLmpvaW4oJyBvciAnKTtcblxuICAgICAgdGhpcy5jcmVhdGVGYWlsdXJlQXROb2RlKFxuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgYEZvdW5kIFwiJHtjbGFzc05hbWV9XCIgY29uc3RydWN0ZWQgd2l0aCBgICtcbiAgICAgICAgICAgICAgYGFuIGludmFsaWQgc2lnbmF0dXJlLiBQbGVhc2UgbWFudWFsbHkgdXBkYXRlIHRoZSAke2V4cHJlc3Npb25OYW1lfSBleHByZXNzaW9uIHRvIGAgK1xuICAgICAgICAgICAgICBgbWF0Y2ggdGhlIG5ldyBzaWduYXR1cmUke2NsYXNzU2lnbmF0dXJlcy5sZW5ndGggPiAxID8gJ3MnIDogJyd9OiAke3NpZ25hdHVyZXN9YCk7XG4gICAgfVxuICB9XG59XG5cblxuLyoqIFJlc29sdmVzIHRoZSB0eXBlIGZvciBlYWNoIHBhcmFtZXRlciBpbiB0aGUgc3BlY2lmaWVkIHNpZ25hdHVyZS4gKi9cbmZ1bmN0aW9uIGdldFBhcmFtZXRlclR5cGVzRnJvbVNpZ25hdHVyZShcbiAgICBzaWduYXR1cmU6IHRzLlNpZ25hdHVyZSwgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyKTogdHMuVHlwZVtdIHtcbiAgcmV0dXJuIHNpZ25hdHVyZS5nZXRQYXJhbWV0ZXJzKCkubWFwKFxuICAgICAgcGFyYW0gPT4gdHlwZUNoZWNrZXIuZ2V0VHlwZUF0TG9jYXRpb24ocGFyYW0uZGVjbGFyYXRpb25zWzBdKSk7XG59XG5cbi8qKlxuICogV2Fsa3MgdGhyb3VnaCBlYWNoIG5vZGUgb2YgYSBzb3VyY2UgZmlsZSBpbiBvcmRlciB0byBmaW5kIGEgbmV3LWV4cHJlc3Npb24gbm9kZSBvciBzdXBlci1jYWxsXG4gKiBleHByZXNzaW9uIG5vZGUgdGhhdCBpcyBjYXB0dXJlZCBieSB0aGUgc3BlY2lmaWVkIGRpYWdub3N0aWMuXG4gKi9cbmZ1bmN0aW9uIGZpbmRDb25zdHJ1Y3Rvck5vZGUoXG4gICAgZGlhZ25vc3RpYzogdHMuRGlhZ25vc3RpYywgc291cmNlRmlsZTogdHMuU291cmNlRmlsZSk6IHRzLkNhbGxFeHByZXNzaW9ufHRzLk5ld0V4cHJlc3Npb258bnVsbCB7XG4gIGxldCByZXNvbHZlZE5vZGU6IHRzLk5vZGV8bnVsbCA9IG51bGw7XG5cbiAgY29uc3QgX3Zpc2l0Tm9kZSA9IChub2RlOiB0cy5Ob2RlKSA9PiB7XG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCBub2RlIGNvbnRhaW5zIHRoZSBkaWFnbm9zdGljLiBJZiB0aGUgbm9kZSBjb250YWlucyB0aGUgZGlhZ25vc3RpYyxcbiAgICAvLyB3YWxrIGRlZXBlciBpbiBvcmRlciB0byBmaW5kIGFsbCBjb25zdHJ1Y3RvciBleHByZXNzaW9uIG5vZGVzLlxuICAgIGlmIChub2RlLmdldFN0YXJ0KCkgPD0gZGlhZ25vc3RpYy5zdGFydCEgJiYgbm9kZS5nZXRFbmQoKSA+PSBkaWFnbm9zdGljLnN0YXJ0ISkge1xuICAgICAgaWYgKHRzLmlzTmV3RXhwcmVzc2lvbihub2RlKSB8fFxuICAgICAgICAgICh0cy5pc0NhbGxFeHByZXNzaW9uKG5vZGUpICYmIG5vZGUuZXhwcmVzc2lvbi5raW5kID09PSB0cy5TeW50YXhLaW5kLlN1cGVyS2V5d29yZCkpIHtcbiAgICAgICAgcmVzb2x2ZWROb2RlID0gbm9kZTtcbiAgICAgIH1cblxuICAgICAgdHMuZm9yRWFjaENoaWxkKG5vZGUsIF92aXNpdE5vZGUpO1xuICAgIH1cbiAgfTtcblxuICB0cy5mb3JFYWNoQ2hpbGQoc291cmNlRmlsZSwgX3Zpc2l0Tm9kZSk7XG5cbiAgcmV0dXJuIHJlc29sdmVkTm9kZTtcbn1cblxuLyoqIERldGVybWluZXMgdGhlIGNsYXNzIGRlY2xhcmF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgY29uc3RydWN0IHNpZ25hdHVyZS4gKi9cbmZ1bmN0aW9uIGdldENsYXNzRGVjbGFyYXRpb25PZlNpZ25hdHVyZShzaWduYXR1cmU6IHRzLlNpZ25hdHVyZSk6IHRzLkNsYXNzRGVjbGFyYXRpb258bnVsbCB7XG4gIGxldCBub2RlOiB0cy5Ob2RlID0gc2lnbmF0dXJlLmdldERlY2xhcmF0aW9uKCk7XG4gIC8vIEhhbmRsZSBzaWduYXR1cmVzIHdoaWNoIGRvbid0IGhhdmUgYW4gYWN0dWFsIGRlY2xhcmF0aW9uLiBUaGlzIGhhcHBlbnMgaWYgYSBjbGFzc1xuICAvLyBkb2VzIG5vdCBoYXZlIGFuIGV4cGxpY2l0bHkgd3JpdHRlbiBjb25zdHJ1Y3Rvci5cbiAgaWYgKCFub2RlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgd2hpbGUgKCF0cy5pc1NvdXJjZUZpbGUobm9kZSA9IG5vZGUucGFyZW50KSkge1xuICAgIGlmICh0cy5pc0NsYXNzRGVjbGFyYXRpb24obm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdfQ==
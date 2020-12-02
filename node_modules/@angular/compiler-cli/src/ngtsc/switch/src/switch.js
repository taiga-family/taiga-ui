/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
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
        define("@angular/compiler-cli/src/ngtsc/switch/src/switch", ["require", "exports", "tslib", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var IVY_SWITCH_PRE_SUFFIX = '__PRE_R3__';
    var IVY_SWITCH_POST_SUFFIX = '__POST_R3__';
    function ivySwitchTransform(_) {
        return flipIvySwitchInFile;
    }
    exports.ivySwitchTransform = ivySwitchTransform;
    function flipIvySwitchInFile(sf) {
        // To replace the statements array, it must be copied. This only needs to happen if a statement
        // must actually be replaced within the array, so the newStatements array is lazily initialized.
        var newStatements = undefined;
        // Iterate over the statements in the file.
        for (var i = 0; i < sf.statements.length; i++) {
            var statement = sf.statements[i];
            // Skip over everything that isn't a variable statement.
            if (!ts.isVariableStatement(statement) || !hasIvySwitches(statement)) {
                continue;
            }
            // This statement needs to be replaced. Check if the newStatements array needs to be lazily
            // initialized to a copy of the original statements.
            if (newStatements === undefined) {
                newStatements = tslib_1.__spread(sf.statements);
            }
            // Flip any switches in the VariableStatement. If there were any, a new statement will be
            // returned; otherwise the old statement will be.
            newStatements[i] = flipIvySwitchesInVariableStatement(statement, sf.statements);
        }
        // Only update the statements in the SourceFile if any have changed.
        if (newStatements !== undefined) {
            sf = ts.getMutableClone(sf);
            sf.statements = ts.createNodeArray(newStatements);
        }
        return sf;
    }
    /**
     * Look for the ts.Identifier of a ts.Declaration with this name.
     *
     * The real identifier is needed (rather than fabricating one) as TypeScript decides how to
     * reference this identifier based on information stored against its node in the AST, which a
     * synthetic node would not have. In particular, since the post-switch variable is often exported,
     * TypeScript needs to know this so it can write `exports.VAR` instead of just `VAR` when emitting
     * code.
     *
     * Only variable, function, and class declarations are currently searched.
     */
    function findPostSwitchIdentifier(statements, name) {
        var e_1, _a;
        try {
            for (var statements_1 = tslib_1.__values(statements), statements_1_1 = statements_1.next(); !statements_1_1.done; statements_1_1 = statements_1.next()) {
                var stmt = statements_1_1.value;
                if (ts.isVariableStatement(stmt)) {
                    var decl = stmt.declarationList.declarations.find(function (decl) { return ts.isIdentifier(decl.name) && decl.name.text === name; });
                    if (decl !== undefined) {
                        return decl.name;
                    }
                }
                else if (ts.isFunctionDeclaration(stmt) || ts.isClassDeclaration(stmt)) {
                    if (stmt.name !== undefined && ts.isIdentifier(stmt.name) && stmt.name.text === name) {
                        return stmt.name;
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (statements_1_1 && !statements_1_1.done && (_a = statements_1.return)) _a.call(statements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    }
    /**
     * Flip any Ivy switches which are discovered in the given ts.VariableStatement.
     */
    function flipIvySwitchesInVariableStatement(stmt, statements) {
        // Build a new list of variable declarations. Specific declarations that are initialized to a
        // pre-switch identifier will be replaced with a declaration initialized to the post-switch
        // identifier.
        var newDeclarations = tslib_1.__spread(stmt.declarationList.declarations);
        for (var i = 0; i < newDeclarations.length; i++) {
            var decl = newDeclarations[i];
            // Skip declarations that aren't initialized to an identifier.
            if (decl.initializer === undefined || !ts.isIdentifier(decl.initializer)) {
                continue;
            }
            // Skip declarations that aren't Ivy switches.
            if (!decl.initializer.text.endsWith(IVY_SWITCH_PRE_SUFFIX)) {
                continue;
            }
            // Determine the name of the post-switch variable.
            var postSwitchName = decl.initializer.text.replace(IVY_SWITCH_PRE_SUFFIX, IVY_SWITCH_POST_SUFFIX);
            // Find the post-switch variable identifier. If one can't be found, it's an error. This is
            // reported as a thrown error and not a diagnostic as transformers cannot output diagnostics.
            var newIdentifier = findPostSwitchIdentifier(statements, postSwitchName);
            if (newIdentifier === null) {
                throw new Error("Unable to find identifier " + postSwitchName + " in " + stmt.getSourceFile().fileName + " for the Ivy switch.");
            }
            // Copy the identifier with updateIdentifier(). This copies the internal information which
            // allows TS to write a correct reference to the identifier.
            newIdentifier = ts.updateIdentifier(newIdentifier);
            newDeclarations[i] = ts.updateVariableDeclaration(
            /* node */ decl, 
            /* name */ decl.name, 
            /* type */ decl.type, 
            /* initializer */ newIdentifier);
        }
        var newDeclList = ts.updateVariableDeclarationList(
        /* declarationList */ stmt.declarationList, 
        /* declarations */ newDeclarations);
        var newStmt = ts.updateVariableStatement(
        /* statement */ stmt, 
        /* modifiers */ stmt.modifiers, 
        /* declarationList */ newDeclList);
        return newStmt;
    }
    /**
     * Check whether the given VariableStatement has any Ivy switch variables.
     */
    function hasIvySwitches(stmt) {
        return stmt.declarationList.declarations.some(function (decl) { return decl.initializer !== undefined && ts.isIdentifier(decl.initializer) &&
            decl.initializer.text.endsWith(IVY_SWITCH_PRE_SUFFIX); });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL3NyYy9uZ3RzYy9zd2l0Y2gvc3JjL3N3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwrQkFBaUM7SUFFakMsSUFBTSxxQkFBcUIsR0FBRyxZQUFZLENBQUM7SUFDM0MsSUFBTSxzQkFBc0IsR0FBRyxhQUFhLENBQUM7SUFFN0MsU0FBZ0Isa0JBQWtCLENBQUMsQ0FBMkI7UUFDNUQsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBRkQsZ0RBRUM7SUFFRCxTQUFTLG1CQUFtQixDQUFDLEVBQWlCO1FBQzVDLCtGQUErRjtRQUMvRixnR0FBZ0c7UUFDaEcsSUFBSSxhQUFhLEdBQTZCLFNBQVMsQ0FBQztRQUV4RCwyQ0FBMkM7UUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkMsd0RBQXdEO1lBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BFLFNBQVM7YUFDVjtZQUVELDJGQUEyRjtZQUMzRixvREFBb0Q7WUFDcEQsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO2dCQUMvQixhQUFhLG9CQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNwQztZQUVELHlGQUF5RjtZQUN6RixpREFBaUQ7WUFDakQsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsVUFB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QUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVuRCxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QjtZQUM3QyxVQUFVLENBQUMsSUFBSTtZQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNwQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDcEIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsNkJBQTZCO1FBQ2hELHFCQUFxQixDQUFDLElBQUksQ0FBQyxlQUFlO1FBQzFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXhDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUI7UUFDdEMsZUFBZSxDQUFDLElBQUk7UUFDcEIsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTO1FBQzlCLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZDLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsY0FBYyxDQUFDLElBQTBCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUN6QyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2RSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFEakQsQ0FDaUQsQ0FBQyxDQUFDO0lBQ2pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5jb25zdCBJVllfU1dJVENIX1BSRV9TVUZGSVggPSAnX19QUkVfUjNfXyc7XG5jb25zdCBJVllfU1dJVENIX1BPU1RfU1VGRklYID0gJ19fUE9TVF9SM19fJztcblxuZXhwb3J0IGZ1bmN0aW9uIGl2eVN3aXRjaFRyYW5zZm9ybShfOiB0cy5UcmFuc2Zvcm1hdGlvbkNvbnRleHQpOiB0cy5UcmFuc2Zvcm1lcjx0cy5Tb3VyY2VGaWxlPiB7XG4gIHJldHVybiBmbGlwSXZ5U3dpdGNoSW5GaWxlO1xufVxuXG5mdW5jdGlvbiBmbGlwSXZ5U3dpdGNoSW5GaWxlKHNmOiB0cy5Tb3VyY2VGaWxlKTogdHMuU291cmNlRmlsZSB7XG4gIC8vIFRvIHJlcGxhY2UgdGhlIHN0YXRlbWVudHMgYXJyYXksIGl0IG11c3QgYmUgY29waWVkLiBUaGlzIG9ubHkgbmVlZHMgdG8gaGFwcGVuIGlmIGEgc3RhdGVtZW50XG4gIC8vIG11c3QgYWN0dWFsbHkgYmUgcmVwbGFjZWQgd2l0aGluIHRoZSBhcnJheSwgc28gdGhlIG5ld1N0YXRlbWVudHMgYXJyYXkgaXMgbGF6aWx5IGluaXRpYWxpemVkLlxuICBsZXQgbmV3U3RhdGVtZW50czogdHMuU3RhdGVtZW50W118dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgc3RhdGVtZW50cyBpbiB0aGUgZmlsZS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZi5zdGF0ZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc2Yuc3RhdGVtZW50c1tpXTtcblxuICAgIC8vIFNraXAgb3ZlciBldmVyeXRoaW5nIHRoYXQgaXNuJ3QgYSB2YXJpYWJsZSBzdGF0ZW1lbnQuXG4gICAgaWYgKCF0cy5pc1ZhcmlhYmxlU3RhdGVtZW50KHN0YXRlbWVudCkgfHwgIWhhc0l2eVN3aXRjaGVzKHN0YXRlbWVudCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIFRoaXMgc3RhdGVtZW50IG5lZWRzIHRvIGJlIHJlcGxhY2VkLiBDaGVjayBpZiB0aGUgbmV3U3RhdGVtZW50cyBhcnJheSBuZWVkcyB0byBiZSBsYXppbHlcbiAgICAvLyBpbml0aWFsaXplZCB0byBhIGNvcHkgb2YgdGhlIG9yaWdpbmFsIHN0YXRlbWVudHMuXG4gICAgaWYgKG5ld1N0YXRlbWVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3U3RhdGVtZW50cyA9IFsuLi5zZi5zdGF0ZW1lbnRzXTtcbiAgICB9XG5cbiAgICAvLyBGbGlwIGFueSBzd2l0Y2hlcyBpbiB0aGUgVmFyaWFibGVTdGF0ZW1lbnQuIElmIHRoZXJlIHdlcmUgYW55LCBhIG5ldyBzdGF0ZW1lbnQgd2lsbCBiZVxuICAgIC8vIHJldHVybmVkOyBvdGhlcndpc2UgdGhlIG9sZCBzdGF0ZW1lbnQgd2lsbCBiZS5cbiAgICBuZXdTdGF0ZW1lbnRzW2ldID0gZmxpcEl2eVN3aXRjaGVzSW5WYXJpYWJsZVN0YXRlbWVudChzdGF0ZW1lbnQsIHNmLnN0YXRlbWVudHMpO1xuICB9XG5cbiAgLy8gT25seSB1cGRhdGUgdGhlIHN0YXRlbWVudHMgaW4gdGhlIFNvdXJjZUZpbGUgaWYgYW55IGhhdmUgY2hhbmdlZC5cbiAgaWYgKG5ld1N0YXRlbWVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHNmID0gdHMuZ2V0TXV0YWJsZUNsb25lKHNmKTtcbiAgICBzZi5zdGF0ZW1lbnRzID0gdHMuY3JlYXRlTm9kZUFycmF5KG5ld1N0YXRlbWVudHMpO1xuICB9XG4gIHJldHVybiBzZjtcbn1cblxuLyoqXG4gKiBMb29rIGZvciB0aGUgdHMuSWRlbnRpZmllciBvZiBhIHRzLkRlY2xhcmF0aW9uIHdpdGggdGhpcyBuYW1lLlxuICpcbiAqIFRoZSByZWFsIGlkZW50aWZpZXIgaXMgbmVlZGVkIChyYXRoZXIgdGhhbiBmYWJyaWNhdGluZyBvbmUpIGFzIFR5cGVTY3JpcHQgZGVjaWRlcyBob3cgdG9cbiAqIHJlZmVyZW5jZSB0aGlzIGlkZW50aWZpZXIgYmFzZWQgb24gaW5mb3JtYXRpb24gc3RvcmVkIGFnYWluc3QgaXRzIG5vZGUgaW4gdGhlIEFTVCwgd2hpY2ggYVxuICogc3ludGhldGljIG5vZGUgd291bGQgbm90IGhhdmUuIEluIHBhcnRpY3VsYXIsIHNpbmNlIHRoZSBwb3N0LXN3aXRjaCB2YXJpYWJsZSBpcyBvZnRlbiBleHBvcnRlZCxcbiAqIFR5cGVTY3JpcHQgbmVlZHMgdG8ga25vdyB0aGlzIHNvIGl0IGNhbiB3cml0ZSBgZXhwb3J0cy5WQVJgIGluc3RlYWQgb2YganVzdCBgVkFSYCB3aGVuIGVtaXR0aW5nXG4gKiBjb2RlLlxuICpcbiAqIE9ubHkgdmFyaWFibGUsIGZ1bmN0aW9uLCBhbmQgY2xhc3MgZGVjbGFyYXRpb25zIGFyZSBjdXJyZW50bHkgc2VhcmNoZWQuXG4gKi9cbmZ1bmN0aW9uIGZpbmRQb3N0U3dpdGNoSWRlbnRpZmllcihcbiAgICBzdGF0ZW1lbnRzOiBSZWFkb25seUFycmF5PHRzLlN0YXRlbWVudD4sIG5hbWU6IHN0cmluZyk6IHRzLklkZW50aWZpZXJ8bnVsbCB7XG4gIGZvciAoY29uc3Qgc3RtdCBvZiBzdGF0ZW1lbnRzKSB7XG4gICAgaWYgKHRzLmlzVmFyaWFibGVTdGF0ZW1lbnQoc3RtdCkpIHtcbiAgICAgIGNvbnN0IGRlY2wgPSBzdG10LmRlY2xhcmF0aW9uTGlzdC5kZWNsYXJhdGlvbnMuZmluZChcbiAgICAgICAgICBkZWNsID0+IHRzLmlzSWRlbnRpZmllcihkZWNsLm5hbWUpICYmIGRlY2wubmFtZS50ZXh0ID09PSBuYW1lKTtcbiAgICAgIGlmIChkZWNsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlY2wubmFtZSBhcyB0cy5JZGVudGlmaWVyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHMuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKHN0bXQpIHx8IHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihzdG10KSkge1xuICAgICAgaWYgKHN0bXQubmFtZSAhPT0gdW5kZWZpbmVkICYmIHRzLmlzSWRlbnRpZmllcihzdG10Lm5hbWUpICYmIHN0bXQubmFtZS50ZXh0ID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiBzdG10Lm5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEZsaXAgYW55IEl2eSBzd2l0Y2hlcyB3aGljaCBhcmUgZGlzY292ZXJlZCBpbiB0aGUgZ2l2ZW4gdHMuVmFyaWFibGVTdGF0ZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGZsaXBJdnlTd2l0Y2hlc0luVmFyaWFibGVTdGF0ZW1lbnQoXG4gICAgc3RtdDogdHMuVmFyaWFibGVTdGF0ZW1lbnQsIHN0YXRlbWVudHM6IFJlYWRvbmx5QXJyYXk8dHMuU3RhdGVtZW50Pik6IHRzLlZhcmlhYmxlU3RhdGVtZW50IHtcbiAgLy8gQnVpbGQgYSBuZXcgbGlzdCBvZiB2YXJpYWJsZSBkZWNsYXJhdGlvbnMuIFNwZWNpZmljIGRlY2xhcmF0aW9ucyB0aGF0IGFyZSBpbml0aWFsaXplZCB0byBhXG4gIC8vIHByZS1zd2l0Y2ggaWRlbnRpZmllciB3aWxsIGJlIHJlcGxhY2VkIHdpdGggYSBkZWNsYXJhdGlvbiBpbml0aWFsaXplZCB0byB0aGUgcG9zdC1zd2l0Y2hcbiAgLy8gaWRlbnRpZmllci5cbiAgY29uc3QgbmV3RGVjbGFyYXRpb25zID0gWy4uLnN0bXQuZGVjbGFyYXRpb25MaXN0LmRlY2xhcmF0aW9uc107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3RGVjbGFyYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGVjbCA9IG5ld0RlY2xhcmF0aW9uc1tpXTtcblxuICAgIC8vIFNraXAgZGVjbGFyYXRpb25zIHRoYXQgYXJlbid0IGluaXRpYWxpemVkIHRvIGFuIGlkZW50aWZpZXIuXG4gICAgaWYgKGRlY2wuaW5pdGlhbGl6ZXIgPT09IHVuZGVmaW5lZCB8fCAhdHMuaXNJZGVudGlmaWVyKGRlY2wuaW5pdGlhbGl6ZXIpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBTa2lwIGRlY2xhcmF0aW9ucyB0aGF0IGFyZW4ndCBJdnkgc3dpdGNoZXMuXG4gICAgaWYgKCFkZWNsLmluaXRpYWxpemVyLnRleHQuZW5kc1dpdGgoSVZZX1NXSVRDSF9QUkVfU1VGRklYKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBuYW1lIG9mIHRoZSBwb3N0LXN3aXRjaCB2YXJpYWJsZS5cbiAgICBjb25zdCBwb3N0U3dpdGNoTmFtZSA9XG4gICAgICAgIGRlY2wuaW5pdGlhbGl6ZXIudGV4dC5yZXBsYWNlKElWWV9TV0lUQ0hfUFJFX1NVRkZJWCwgSVZZX1NXSVRDSF9QT1NUX1NVRkZJWCk7XG5cbiAgICAvLyBGaW5kIHRoZSBwb3N0LXN3aXRjaCB2YXJpYWJsZSBpZGVudGlmaWVyLiBJZiBvbmUgY2FuJ3QgYmUgZm91bmQsIGl0J3MgYW4gZXJyb3IuIFRoaXMgaXNcbiAgICAvLyByZXBvcnRlZCBhcyBhIHRocm93biBlcnJvciBhbmQgbm90IGEgZGlhZ25vc3RpYyBhcyB0cmFuc2Zvcm1lcnMgY2Fubm90IG91dHB1dCBkaWFnbm9zdGljcy5cbiAgICBsZXQgbmV3SWRlbnRpZmllciA9IGZpbmRQb3N0U3dpdGNoSWRlbnRpZmllcihzdGF0ZW1lbnRzLCBwb3N0U3dpdGNoTmFtZSk7XG4gICAgaWYgKG5ld0lkZW50aWZpZXIgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGZpbmQgaWRlbnRpZmllciAke3Bvc3RTd2l0Y2hOYW1lfSBpbiAke1xuICAgICAgICAgIHN0bXQuZ2V0U291cmNlRmlsZSgpLmZpbGVOYW1lfSBmb3IgdGhlIEl2eSBzd2l0Y2guYCk7XG4gICAgfVxuXG4gICAgLy8gQ29weSB0aGUgaWRlbnRpZmllciB3aXRoIHVwZGF0ZUlkZW50aWZpZXIoKS4gVGhpcyBjb3BpZXMgdGhlIGludGVybmFsIGluZm9ybWF0aW9uIHdoaWNoXG4gICAgLy8gYWxsb3dzIFRTIHRvIHdyaXRlIGEgY29ycmVjdCByZWZlcmVuY2UgdG8gdGhlIGlkZW50aWZpZXIuXG4gICAgbmV3SWRlbnRpZmllciA9IHRzLnVwZGF0ZUlkZW50aWZpZXIobmV3SWRlbnRpZmllcik7XG5cbiAgICBuZXdEZWNsYXJhdGlvbnNbaV0gPSB0cy51cGRhdGVWYXJpYWJsZURlY2xhcmF0aW9uKFxuICAgICAgICAvKiBub2RlICovIGRlY2wsXG4gICAgICAgIC8qIG5hbWUgKi8gZGVjbC5uYW1lLFxuICAgICAgICAvKiB0eXBlICovIGRlY2wudHlwZSxcbiAgICAgICAgLyogaW5pdGlhbGl6ZXIgKi8gbmV3SWRlbnRpZmllcik7XG4gIH1cblxuICBjb25zdCBuZXdEZWNsTGlzdCA9IHRzLnVwZGF0ZVZhcmlhYmxlRGVjbGFyYXRpb25MaXN0KFxuICAgICAgLyogZGVjbGFyYXRpb25MaXN0ICovIHN0bXQuZGVjbGFyYXRpb25MaXN0LFxuICAgICAgLyogZGVjbGFyYXRpb25zICovIG5ld0RlY2xhcmF0aW9ucyk7XG5cbiAgY29uc3QgbmV3U3RtdCA9IHRzLnVwZGF0ZVZhcmlhYmxlU3RhdGVtZW50KFxuICAgICAgLyogc3RhdGVtZW50ICovIHN0bXQsXG4gICAgICAvKiBtb2RpZmllcnMgKi8gc3RtdC5tb2RpZmllcnMsXG4gICAgICAvKiBkZWNsYXJhdGlvbkxpc3QgKi8gbmV3RGVjbExpc3QpO1xuXG4gIHJldHVybiBuZXdTdG10O1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIGdpdmVuIFZhcmlhYmxlU3RhdGVtZW50IGhhcyBhbnkgSXZ5IHN3aXRjaCB2YXJpYWJsZXMuXG4gKi9cbmZ1bmN0aW9uIGhhc0l2eVN3aXRjaGVzKHN0bXQ6IHRzLlZhcmlhYmxlU3RhdGVtZW50KSB7XG4gIHJldHVybiBzdG10LmRlY2xhcmF0aW9uTGlzdC5kZWNsYXJhdGlvbnMuc29tZShcbiAgICAgIGRlY2wgPT4gZGVjbC5pbml0aWFsaXplciAhPT0gdW5kZWZpbmVkICYmIHRzLmlzSWRlbnRpZmllcihkZWNsLmluaXRpYWxpemVyKSAmJlxuICAgICAgICAgIGRlY2wuaW5pdGlhbGl6ZXIudGV4dC5lbmRzV2l0aChJVllfU1dJVENIX1BSRV9TVUZGSVgpKTtcbn1cbiJdfQ==
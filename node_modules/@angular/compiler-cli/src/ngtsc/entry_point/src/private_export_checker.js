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
        define("@angular/compiler-cli/src/ngtsc/entry_point/src/private_export_checker", ["require", "exports", "tslib", "typescript", "@angular/compiler-cli/src/ngtsc/diagnostics"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    var diagnostics_1 = require("@angular/compiler-cli/src/ngtsc/diagnostics");
    /**
     * Produce `ts.Diagnostic`s for classes that are visible from exported types (e.g. directives
     * exposed by exported `NgModule`s) that are not themselves exported.
     *
     * This function reconciles two concepts:
     *
     * A class is Exported if it's exported from the main library `entryPoint` file.
     * A class is Visible if, via Angular semantics, a downstream consumer can import an Exported class
     * and be affected by the class in question. For example, an Exported NgModule may expose a
     * directive class to its consumers. Consumers that import the NgModule may have the directive
     * applied to elements in their templates. In this case, the directive is considered Visible.
     *
     * `checkForPrivateExports` attempts to verify that all Visible classes are Exported, and report
     * `ts.Diagnostic`s for those that aren't.
     *
     * @param entryPoint `ts.SourceFile` of the library's entrypoint, which should export the library's
     * public API.
     * @param checker `ts.TypeChecker` for the current program.
     * @param refGraph `ReferenceGraph` tracking the visibility of Angular types.
     * @returns an array of `ts.Diagnostic`s representing errors when visible classes are not exported
     * properly.
     */
    function checkForPrivateExports(entryPoint, checker, refGraph) {
        var diagnostics = [];
        // Firstly, compute the exports of the entry point. These are all the Exported classes.
        var topLevelExports = new Set();
        // Do this via `ts.TypeChecker.getExportsOfModule`.
        var moduleSymbol = checker.getSymbolAtLocation(entryPoint);
        if (moduleSymbol === undefined) {
            throw new Error("Internal error: failed to get symbol for entrypoint");
        }
        var exportedSymbols = checker.getExportsOfModule(moduleSymbol);
        // Loop through the exported symbols, de-alias if needed, and add them to `topLevelExports`.
        // TODO(alxhub): use proper iteration when build.sh is removed. (#27762)
        exportedSymbols.forEach(function (symbol) {
            if (symbol.flags & ts.SymbolFlags.Alias) {
                symbol = checker.getAliasedSymbol(symbol);
            }
            var decl = symbol.valueDeclaration;
            if (decl !== undefined) {
                topLevelExports.add(decl);
            }
        });
        // Next, go through each exported class and expand it to the set of classes it makes Visible,
        // using the `ReferenceGraph`. For each Visible class, verify that it's also Exported, and queue
        // an error if it isn't. `checkedSet` ensures only one error is queued per class.
        var checkedSet = new Set();
        // Loop through each Exported class.
        // TODO(alxhub): use proper iteration when the legacy build is removed. (#27762)
        topLevelExports.forEach(function (mainExport) {
            // Loop through each class made Visible by the Exported class.
            refGraph.transitiveReferencesOf(mainExport).forEach(function (transitiveReference) {
                // Skip classes which have already been checked.
                if (checkedSet.has(transitiveReference)) {
                    return;
                }
                checkedSet.add(transitiveReference);
                // Verify that the Visible class is also Exported.
                if (!topLevelExports.has(transitiveReference)) {
                    // This is an error, `mainExport` makes `transitiveReference` Visible, but
                    // `transitiveReference` is not Exported from the entrypoint. Construct a diagnostic to
                    // give to the user explaining the situation.
                    var descriptor = getDescriptorOfDeclaration(transitiveReference);
                    var name_1 = getNameOfDeclaration(transitiveReference);
                    // Construct the path of visibility, from `mainExport` to `transitiveReference`.
                    var visibleVia = 'NgModule exports';
                    var transitivePath = refGraph.pathFrom(mainExport, transitiveReference);
                    if (transitivePath !== null) {
                        visibleVia = transitivePath.map(function (seg) { return getNameOfDeclaration(seg); }).join(' -> ');
                    }
                    var diagnostic = tslib_1.__assign(tslib_1.__assign({ category: ts.DiagnosticCategory.Error, code: diagnostics_1.ngErrorCode(diagnostics_1.ErrorCode.SYMBOL_NOT_EXPORTED), file: transitiveReference.getSourceFile() }, getPosOfDeclaration(transitiveReference)), { messageText: "Unsupported private " + descriptor + " " + name_1 + ". This " + descriptor + " is visible to consumers via " + visibleVia + ", but is not exported from the top-level library entrypoint." });
                    diagnostics.push(diagnostic);
                }
            });
        });
        return diagnostics;
    }
    exports.checkForPrivateExports = checkForPrivateExports;
    function getPosOfDeclaration(decl) {
        var node = getIdentifierOfDeclaration(decl) || decl;
        return {
            start: node.getStart(),
            length: node.getEnd() + 1 - node.getStart(),
        };
    }
    function getIdentifierOfDeclaration(decl) {
        if ((ts.isClassDeclaration(decl) || ts.isVariableDeclaration(decl) ||
            ts.isFunctionDeclaration(decl)) &&
            decl.name !== undefined && ts.isIdentifier(decl.name)) {
            return decl.name;
        }
        else {
            return null;
        }
    }
    function getNameOfDeclaration(decl) {
        var id = getIdentifierOfDeclaration(decl);
        return id !== null ? id.text : '(unnamed)';
    }
    function getDescriptorOfDeclaration(decl) {
        switch (decl.kind) {
            case ts.SyntaxKind.ClassDeclaration:
                return 'class';
            case ts.SyntaxKind.FunctionDeclaration:
                return 'function';
            case ts.SyntaxKind.VariableDeclaration:
                return 'variable';
            case ts.SyntaxKind.EnumDeclaration:
                return 'enum';
            default:
                return 'declaration';
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZV9leHBvcnRfY2hlY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvZW50cnlfcG9pbnQvc3JjL3ByaXZhdGVfZXhwb3J0X2NoZWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsK0JBQWlDO0lBRWpDLDJFQUF5RDtJQUl6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUJHO0lBQ0gsU0FBZ0Isc0JBQXNCLENBQ2xDLFVBQXlCLEVBQUUsT0FBdUIsRUFBRSxRQUF3QjtRQUM5RSxJQUFNLFdBQVcsR0FBb0IsRUFBRSxDQUFDO1FBRXhDLHVGQUF1RjtRQUN2RixJQUFNLGVBQWUsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUVsRCxtREFBbUQ7UUFDbkQsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdELElBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFakUsNEZBQTRGO1FBQzVGLHdFQUF3RTtRQUN4RSxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUM1QixJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDM0M7WUFDRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7WUFDckMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUN0QixlQUFl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Q0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELFNBQVMsb0JBQW9CLENBQUMsSUFBb0I7UUFDaEQsSUFBTSxFQUFFLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELFNBQVMsMEJBQTBCLENBQUMsSUFBb0I7UUFDdEQsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0I7Z0JBQ2pDLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUI7Z0JBQ3BDLE9BQU8sVUFBVSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUI7Z0JBQ3BDLE9BQU8sVUFBVSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlO2dCQUNoQyxPQUFPLE1BQU0sQ0FBQztZQUNoQjtnQkFDRSxPQUFPLGFBQWEsQ0FBQztTQUN4QjtJQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0Vycm9yQ29kZSwgbmdFcnJvckNvZGV9IGZyb20gJy4uLy4uL2RpYWdub3N0aWNzJztcblxuaW1wb3J0IHtSZWZlcmVuY2VHcmFwaH0gZnJvbSAnLi9yZWZlcmVuY2VfZ3JhcGgnO1xuXG4vKipcbiAqIFByb2R1Y2UgYHRzLkRpYWdub3N0aWNgcyBmb3IgY2xhc3NlcyB0aGF0IGFyZSB2aXNpYmxlIGZyb20gZXhwb3J0ZWQgdHlwZXMgKGUuZy4gZGlyZWN0aXZlc1xuICogZXhwb3NlZCBieSBleHBvcnRlZCBgTmdNb2R1bGVgcykgdGhhdCBhcmUgbm90IHRoZW1zZWx2ZXMgZXhwb3J0ZWQuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZWNvbmNpbGVzIHR3byBjb25jZXB0czpcbiAqXG4gKiBBIGNsYXNzIGlzIEV4cG9ydGVkIGlmIGl0J3MgZXhwb3J0ZWQgZnJvbSB0aGUgbWFpbiBsaWJyYXJ5IGBlbnRyeVBvaW50YCBmaWxlLlxuICogQSBjbGFzcyBpcyBWaXNpYmxlIGlmLCB2aWEgQW5ndWxhciBzZW1hbnRpY3MsIGEgZG93bnN0cmVhbSBjb25zdW1lciBjYW4gaW1wb3J0IGFuIEV4cG9ydGVkIGNsYXNzXG4gKiBhbmQgYmUgYWZmZWN0ZWQgYnkgdGhlIGNsYXNzIGluIHF1ZXN0aW9uLiBGb3IgZXhhbXBsZSwgYW4gRXhwb3J0ZWQgTmdNb2R1bGUgbWF5IGV4cG9zZSBhXG4gKiBkaXJlY3RpdmUgY2xhc3MgdG8gaXRzIGNvbnN1bWVycy4gQ29uc3VtZXJzIHRoYXQgaW1wb3J0IHRoZSBOZ01vZHVsZSBtYXkgaGF2ZSB0aGUgZGlyZWN0aXZlXG4gKiBhcHBsaWVkIHRvIGVsZW1lbnRzIGluIHRoZWlyIHRlbXBsYXRlcy4gSW4gdGhpcyBjYXNlLCB0aGUgZGlyZWN0aXZlIGlzIGNvbnNpZGVyZWQgVmlzaWJsZS5cbiAqXG4gKiBgY2hlY2tGb3JQcml2YXRlRXhwb3J0c2AgYXR0ZW1wdHMgdG8gdmVyaWZ5IHRoYXQgYWxsIFZpc2libGUgY2xhc3NlcyBhcmUgRXhwb3J0ZWQsIGFuZCByZXBvcnRcbiAqIGB0cy5EaWFnbm9zdGljYHMgZm9yIHRob3NlIHRoYXQgYXJlbid0LlxuICpcbiAqIEBwYXJhbSBlbnRyeVBvaW50IGB0cy5Tb3VyY2VGaWxlYCBvZiB0aGUgbGlicmFyeSdzIGVudHJ5cG9pbnQsIHdoaWNoIHNob3VsZCBleHBvcnQgdGhlIGxpYnJhcnknc1xuICogcHVibGljIEFQSS5cbiAqIEBwYXJhbSBjaGVja2VyIGB0cy5UeXBlQ2hlY2tlcmAgZm9yIHRoZSBjdXJyZW50IHByb2dyYW0uXG4gKiBAcGFyYW0gcmVmR3JhcGggYFJlZmVyZW5jZUdyYXBoYCB0cmFja2luZyB0aGUgdmlzaWJpbGl0eSBvZiBBbmd1bGFyIHR5cGVzLlxuICogQHJldHVybnMgYW4gYXJyYXkgb2YgYHRzLkRpYWdub3N0aWNgcyByZXByZXNlbnRpbmcgZXJyb3JzIHdoZW4gdmlzaWJsZSBjbGFzc2VzIGFyZSBub3QgZXhwb3J0ZWRcbiAqIHByb3Blcmx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JQcml2YXRlRXhwb3J0cyhcbiAgICBlbnRyeVBvaW50OiB0cy5Tb3VyY2VGaWxlLCBjaGVja2VyOiB0cy5UeXBlQ2hlY2tlciwgcmVmR3JhcGg6IFJlZmVyZW5jZUdyYXBoKTogdHMuRGlhZ25vc3RpY1tdIHtcbiAgY29uc3QgZGlhZ25vc3RpY3M6IHRzLkRpYWdub3N0aWNbXSA9IFtdO1xuXG4gIC8vIEZpcnN0bHksIGNvbXB1dGUgdGhlIGV4cG9ydHMgb2YgdGhlIGVudHJ5IHBvaW50LiBUaGVzZSBhcmUgYWxsIHRoZSBFeHBvcnRlZCBjbGFzc2VzLlxuICBjb25zdCB0b3BMZXZlbEV4cG9ydHMgPSBuZXcgU2V0PHRzLkRlY2xhcmF0aW9uPigpO1xuXG4gIC8vIERvIHRoaXMgdmlhIGB0cy5UeXBlQ2hlY2tlci5nZXRFeHBvcnRzT2ZNb2R1bGVgLlxuICBjb25zdCBtb2R1bGVTeW1ib2wgPSBjaGVja2VyLmdldFN5bWJvbEF0TG9jYXRpb24oZW50cnlQb2ludCk7XG4gIGlmIChtb2R1bGVTeW1ib2wgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW50ZXJuYWwgZXJyb3I6IGZhaWxlZCB0byBnZXQgc3ltYm9sIGZvciBlbnRyeXBvaW50YCk7XG4gIH1cbiAgY29uc3QgZXhwb3J0ZWRTeW1ib2xzID0gY2hlY2tlci5nZXRFeHBvcnRzT2ZNb2R1bGUobW9kdWxlU3ltYm9sKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGV4cG9ydGVkIHN5bWJvbHMsIGRlLWFsaWFzIGlmIG5lZWRlZCwgYW5kIGFkZCB0aGVtIHRvIGB0b3BMZXZlbEV4cG9ydHNgLlxuICAvLyBUT0RPKGFseGh1Yik6IHVzZSBwcm9wZXIgaXRlcmF0aW9uIHdoZW4gYnVpbGQuc2ggaXMgcmVtb3ZlZC4gKCMyNzc2MilcbiAgZXhwb3J0ZWRTeW1ib2xzLmZvckVhY2goc3ltYm9sID0+IHtcbiAgICBpZiAoc3ltYm9sLmZsYWdzICYgdHMuU3ltYm9sRmxhZ3MuQWxpYXMpIHtcbiAgICAgIHN5bWJvbCA9IGNoZWNrZXIuZ2V0QWxpYXNlZFN5bWJvbChzeW1ib2wpO1xuICAgIH1cbiAgICBjb25zdCBkZWNsID0gc3ltYm9sLnZhbHVlRGVjbGFyYXRpb247XG4gICAgaWYgKGRlY2wgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdG9wTGV2ZWxFeHBvcnRzLmFkZChkZWNsKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIE5leHQsIGdvIHRocm91Z2ggZWFjaCBleHBvcnRlZCBjbGFzcyBhbmQgZXhwYW5kIGl0IHRvIHRoZSBzZXQgb2YgY2xhc3NlcyBpdCBtYWtlcyBWaXNpYmxlLFxuICAvLyB1c2luZyB0aGUgYFJlZmVyZW5jZUdyYXBoYC4gRm9yIGVhY2ggVmlzaWJsZSBjbGFzcywgdmVyaWZ5IHRoYXQgaXQncyBhbHNvIEV4cG9ydGVkLCBhbmQgcXVldWVcbiAgLy8gYW4gZXJyb3IgaWYgaXQgaXNuJ3QuIGBjaGVja2VkU2V0YCBlbnN1cmVzIG9ubHkgb25lIGVycm9yIGlzIHF1ZXVlZCBwZXIgY2xhc3MuXG4gIGNvbnN0IGNoZWNrZWRTZXQgPSBuZXcgU2V0PHRzLkRlY2xhcmF0aW9uPigpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCBlYWNoIEV4cG9ydGVkIGNsYXNzLlxuICAvLyBUT0RPKGFseGh1Yik6IHVzZSBwcm9wZXIgaXRlcmF0aW9uIHdoZW4gdGhlIGxlZ2FjeSBidWlsZCBpcyByZW1vdmVkLiAoIzI3NzYyKVxuICB0b3BMZXZlbEV4cG9ydHMuZm9yRWFjaChtYWluRXhwb3J0ID0+IHtcbiAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBjbGFzcyBtYWRlIFZpc2libGUgYnkgdGhlIEV4cG9ydGVkIGNsYXNzLlxuICAgIHJlZkdyYXBoLnRyYW5zaXRpdmVSZWZlcmVuY2VzT2YobWFpbkV4cG9ydCkuZm9yRWFjaCh0cmFuc2l0aXZlUmVmZXJlbmNlID0+IHtcbiAgICAgIC8vIFNraXAgY2xhc3NlcyB3aGljaCBoYXZlIGFscmVhZHkgYmVlbiBjaGVja2VkLlxuICAgICAgaWYgKGNoZWNrZWRTZXQuaGFzKHRyYW5zaXRpdmVSZWZlcmVuY2UpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNoZWNrZWRTZXQuYWRkKHRyYW5zaXRpdmVSZWZlcmVuY2UpO1xuXG4gICAgICAvLyBWZXJpZnkgdGhhdCB0aGUgVmlzaWJsZSBjbGFzcyBpcyBhbHNvIEV4cG9ydGVkLlxuICAgICAgaWYgKCF0b3BMZXZlbEV4cG9ydHMuaGFzKHRyYW5zaXRpdmVSZWZlcmVuY2UpKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYW4gZXJyb3IsIGBtYWluRXhwb3J0YCBtYWtlcyBgdHJhbnNpdGl2ZVJlZmVyZW5jZWAgVmlzaWJsZSwgYnV0XG4gICAgICAgIC8vIGB0cmFuc2l0aXZlUmVmZXJlbmNlYCBpcyBub3QgRXhwb3J0ZWQgZnJvbSB0aGUgZW50cnlwb2ludC4gQ29uc3RydWN0IGEgZGlhZ25vc3RpYyB0b1xuICAgICAgICAvLyBnaXZlIHRvIHRoZSB1c2VyIGV4cGxhaW5pbmcgdGhlIHNpdHVhdGlvbi5cblxuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gZ2V0RGVzY3JpcHRvck9mRGVjbGFyYXRpb24odHJhbnNpdGl2ZVJlZmVyZW5jZSk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBnZXROYW1lT2ZEZWNsYXJhdGlvbih0cmFuc2l0aXZlUmVmZXJlbmNlKTtcblxuICAgICAgICAvLyBDb25zdHJ1Y3QgdGhlIHBhdGggb2YgdmlzaWJpbGl0eSwgZnJvbSBgbWFpbkV4cG9ydGAgdG8gYHRyYW5zaXRpdmVSZWZlcmVuY2VgLlxuICAgICAgICBsZXQgdmlzaWJsZVZpYSA9ICdOZ01vZHVsZSBleHBvcnRzJztcbiAgICAgICAgY29uc3QgdHJhbnNpdGl2ZVBhdGggPSByZWZHcmFwaC5wYXRoRnJvbShtYWluRXhwb3J0LCB0cmFuc2l0aXZlUmVmZXJlbmNlKTtcbiAgICAgICAgaWYgKHRyYW5zaXRpdmVQYXRoICE9PSBudWxsKSB7XG4gICAgICAgICAgdmlzaWJsZVZpYSA9IHRyYW5zaXRpdmVQYXRoLm1hcChzZWcgPT4gZ2V0TmFtZU9mRGVjbGFyYXRpb24oc2VnKSkuam9pbignIC0+ICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGlhZ25vc3RpYzogdHMuRGlhZ25vc3RpYyA9IHtcbiAgICAgICAgICBjYXRlZ29yeTogdHMuRGlhZ25vc3RpY0NhdGVnb3J5LkVycm9yLFxuICAgICAgICAgIGNvZGU6IG5nRXJyb3JDb2RlKEVycm9yQ29kZS5TWU1CT0xfTk9UX0VYUE9SVEVEKSxcbiAgICAgICAgICBmaWxlOiB0cmFuc2l0aXZlUmVmZXJlbmNlLmdldFNvdXJjZUZpbGUoKSxcbiAgICAgICAgICAuLi5nZXRQb3NPZkRlY2xhcmF0aW9uKHRyYW5zaXRpdmVSZWZlcmVuY2UpLFxuICAgICAgICAgIG1lc3NhZ2VUZXh0OiBgVW5zdXBwb3J0ZWQgcHJpdmF0ZSAke2Rlc2NyaXB0b3J9ICR7bmFtZX0uIFRoaXMgJHtcbiAgICAgICAgICAgICAgZGVzY3JpcHRvcn0gaXMgdmlzaWJsZSB0byBjb25zdW1lcnMgdmlhICR7XG4gICAgICAgICAgICAgIHZpc2libGVWaWF9LCBidXQgaXMgbm90IGV4cG9ydGVkIGZyb20gdGhlIHRvcC1sZXZlbCBsaWJyYXJ5IGVudHJ5cG9pbnQuYCxcbiAgICAgICAgfTtcblxuICAgICAgICBkaWFnbm9zdGljcy5wdXNoKGRpYWdub3N0aWMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGlhZ25vc3RpY3M7XG59XG5cbmZ1bmN0aW9uIGdldFBvc09mRGVjbGFyYXRpb24oZGVjbDogdHMuRGVjbGFyYXRpb24pOiB7c3RhcnQ6IG51bWJlciwgbGVuZ3RoOiBudW1iZXJ9IHtcbiAgY29uc3Qgbm9kZTogdHMuTm9kZSA9IGdldElkZW50aWZpZXJPZkRlY2xhcmF0aW9uKGRlY2wpIHx8IGRlY2w7XG4gIHJldHVybiB7XG4gICAgc3RhcnQ6IG5vZGUuZ2V0U3RhcnQoKSxcbiAgICBsZW5ndGg6IG5vZGUuZ2V0RW5kKCkgKyAxIC0gbm9kZS5nZXRTdGFydCgpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJZGVudGlmaWVyT2ZEZWNsYXJhdGlvbihkZWNsOiB0cy5EZWNsYXJhdGlvbik6IHRzLklkZW50aWZpZXJ8bnVsbCB7XG4gIGlmICgodHMuaXNDbGFzc0RlY2xhcmF0aW9uKGRlY2wpIHx8IHRzLmlzVmFyaWFibGVEZWNsYXJhdGlvbihkZWNsKSB8fFxuICAgICAgIHRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihkZWNsKSkgJiZcbiAgICAgIGRlY2wubmFtZSAhPT0gdW5kZWZpbmVkICYmIHRzLmlzSWRlbnRpZmllcihkZWNsLm5hbWUpKSB7XG4gICAgcmV0dXJuIGRlY2wubmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXROYW1lT2ZEZWNsYXJhdGlvbihkZWNsOiB0cy5EZWNsYXJhdGlvbik6IHN0cmluZyB7XG4gIGNvbnN0IGlkID0gZ2V0SWRlbnRpZmllck9mRGVjbGFyYXRpb24oZGVjbCk7XG4gIHJldHVybiBpZCAhPT0gbnVsbCA/IGlkLnRleHQgOiAnKHVubmFtZWQpJztcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY3JpcHRvck9mRGVjbGFyYXRpb24oZGVjbDogdHMuRGVjbGFyYXRpb24pOiBzdHJpbmcge1xuICBzd2l0Y2ggKGRlY2wua2luZCkge1xuICAgIGNhc2UgdHMuU3ludGF4S2luZC5DbGFzc0RlY2xhcmF0aW9uOlxuICAgICAgcmV0dXJuICdjbGFzcyc7XG4gICAgY2FzZSB0cy5TeW50YXhLaW5kLkZ1bmN0aW9uRGVjbGFyYXRpb246XG4gICAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgICBjYXNlIHRzLlN5bnRheEtpbmQuVmFyaWFibGVEZWNsYXJhdGlvbjpcbiAgICAgIHJldHVybiAndmFyaWFibGUnO1xuICAgIGNhc2UgdHMuU3ludGF4S2luZC5FbnVtRGVjbGFyYXRpb246XG4gICAgICByZXR1cm4gJ2VudW0nO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ2RlY2xhcmF0aW9uJztcbiAgfVxufVxuIl19
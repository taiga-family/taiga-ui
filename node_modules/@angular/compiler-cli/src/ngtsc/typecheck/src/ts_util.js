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
        define("@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util", ["require", "exports", "tslib", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var ts = require("typescript");
    /**
     * A `Set` of `ts.SyntaxKind`s of `ts.Expression` which are safe to wrap in a `ts.AsExpression`
     * without needing to be wrapped in parentheses.
     *
     * For example, `foo.bar()` is a `ts.CallExpression`, and can be safely cast to `any` with
     * `foo.bar() as any`. however, `foo !== bar` is a `ts.BinaryExpression`, and attempting to cast
     * without the parentheses yields the expression `foo !== bar as any`. This is semantically
     * equivalent to `foo !== (bar as any)`, which is not what was intended. Thus,
     * `ts.BinaryExpression`s need to be wrapped in parentheses before casting.
     */
    //
    var SAFE_TO_CAST_WITHOUT_PARENS = new Set([
        // Expressions which are already parenthesized can be cast without further wrapping.
        ts.SyntaxKind.ParenthesizedExpression,
        // Expressions which form a single lexical unit leave no room for precedence issues with the cast.
        ts.SyntaxKind.Identifier,
        ts.SyntaxKind.CallExpression,
        ts.SyntaxKind.NonNullExpression,
        ts.SyntaxKind.ElementAccessExpression,
        ts.SyntaxKind.PropertyAccessExpression,
        ts.SyntaxKind.ArrayLiteralExpression,
        ts.SyntaxKind.ObjectLiteralExpression,
        // The same goes for various literals.
        ts.SyntaxKind.StringLiteral,
        ts.SyntaxKind.NumericLiteral,
        ts.SyntaxKind.TrueKeyword,
        ts.SyntaxKind.FalseKeyword,
        ts.SyntaxKind.NullKeyword,
        ts.SyntaxKind.UndefinedKeyword,
    ]);
    function tsCastToAny(expr) {
        // Wrap `expr` in parentheses if needed (see `SAFE_TO_CAST_WITHOUT_PARENS` above).
        if (!SAFE_TO_CAST_WITHOUT_PARENS.has(expr.kind)) {
            expr = ts.createParen(expr);
        }
        // The outer expression is always wrapped in parentheses.
        return ts.createParen(ts.createAsExpression(expr, ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)));
    }
    exports.tsCastToAny = tsCastToAny;
    /**
     * Create an expression which instantiates an element by its HTML tagName.
     *
     * Thanks to narrowing of `document.createElement()`, this expression will have its type inferred
     * based on the tag name, including for custom elements that have appropriate .d.ts definitions.
     */
    function tsCreateElement(tagName) {
        var createElement = ts.createPropertyAccess(
        /* expression */ ts.createIdentifier('document'), 'createElement');
        return ts.createCall(
        /* expression */ createElement, 
        /* typeArguments */ undefined, 
        /* argumentsArray */ [ts.createLiteral(tagName)]);
    }
    exports.tsCreateElement = tsCreateElement;
    /**
     * Create a `ts.VariableStatement` which declares a variable without explicit initialization.
     *
     * The initializer `null!` is used to bypass strict variable initialization checks.
     *
     * Unlike with `tsCreateVariable`, the type of the variable is explicitly specified.
     */
    function tsDeclareVariable(id, type) {
        var decl = ts.createVariableDeclaration(
        /* name */ id, 
        /* type */ type, 
        /* initializer */ ts.createNonNullExpression(ts.createNull()));
        return ts.createVariableStatement(
        /* modifiers */ undefined, 
        /* declarationList */ [decl]);
    }
    exports.tsDeclareVariable = tsDeclareVariable;
    /**
     * Create a `ts.VariableStatement` that initializes a variable with a given expression.
     *
     * Unlike with `tsDeclareVariable`, the type of the variable is inferred from the initializer
     * expression.
     */
    function tsCreateVariable(id, initializer) {
        var decl = ts.createVariableDeclaration(
        /* name */ id, 
        /* type */ undefined, 
        /* initializer */ initializer);
        return ts.createVariableStatement(
        /* modifiers */ undefined, 
        /* declarationList */ [decl]);
    }
    exports.tsCreateVariable = tsCreateVariable;
    /**
     * Construct a `ts.CallExpression` that calls a method on a receiver.
     */
    function tsCallMethod(receiver, methodName, args) {
        if (args === void 0) { args = []; }
        var methodAccess = ts.createPropertyAccess(receiver, methodName);
        return ts.createCall(
        /* expression */ methodAccess, 
        /* typeArguments */ undefined, 
        /* argumentsArray */ args);
    }
    exports.tsCallMethod = tsCallMethod;
    function checkIfClassIsExported(node) {
        // A class is exported if one of two conditions is met:
        // 1) it has the 'export' modifier.
        // 2) it's declared at the top level, and there is an export statement for the class.
        if (node.modifiers !== undefined &&
            node.modifiers.some(function (mod) { return mod.kind === ts.SyntaxKind.ExportKeyword; })) {
            // Condition 1 is true, the class has an 'export' keyword attached.
            return true;
        }
        else if (node.parent !== undefined && ts.isSourceFile(node.parent) &&
            checkIfFileHasExport(node.parent, node.name.text)) {
            // Condition 2 is true, the class is exported via an 'export {}' statement.
            return true;
        }
        return false;
    }
    exports.checkIfClassIsExported = checkIfClassIsExported;
    function checkIfFileHasExport(sf, name) {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = tslib_1.__values(sf.statements), _d = _c.next(); !_d.done; _d = _c.next()) {
                var stmt = _d.value;
                if (ts.isExportDeclaration(stmt) && stmt.exportClause !== undefined &&
                    ts.isNamedExports(stmt.exportClause)) {
                    try {
                        for (var _e = (e_2 = void 0, tslib_1.__values(stmt.exportClause.elements)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var element = _f.value;
                            if (element.propertyName === undefined && element.name.text === name) {
                                // The named declaration is directly exported.
                                return true;
                            }
                            else if (element.propertyName !== undefined && element.propertyName.text == name) {
                                // The named declaration is exported via an alias.
                                return true;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    }
    function checkIfGenericTypesAreUnbound(node) {
        if (node.typeParameters === undefined) {
            return true;
        }
        return node.typeParameters.every(function (param) { return param.constraint === undefined; });
    }
    exports.checkIfGenericTypesAreUnbound = checkIfGenericTypesAreUnbound;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNfdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvdHlwZWNoZWNrL3NyYy90c191dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQUdqQzs7Ozs7Ozs7O09BU0c7SUFDSCxFQUFFO0lBQ0YsSUFBTSwyQkFBMkIsR0FBdUIsSUFBSSxHQUFHLENBQUM7UUFDOUQsb0ZBQW9GO1FBQ3BGLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCO1FBRXJDLGtHQUFrRztRQUNsRyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQVU7UUFDeEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjO1FBQzVCLEVBQUUsQ0FBQyxVQUFVLENBQUMsaUJBQWlCO1FBQy9CLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCO1FBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUMsd0JBQXdCO1FBQ3RDLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCO1FBQ3BDLEVBQUUsQ0FBQyxVQUFVLENBQUMsdUJBQXVCO1FBRXJDLHNDQUFzQztRQUN0QyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWE7UUFDM0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFjO1FBQzVCLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVztRQUN6QixFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVk7UUFDMUIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1FBQ3pCLEVBQUUsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCO0tBQy9CLENBQUMsQ0FBQztJQUVILFNBQWdCLFdBQVcsQ0FBQyxJQUFtQjtRQUM3QyxrRkFBa0Y7UUFDbEYsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxHQUFHLEVB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QUksT0FBQSxLQUFLLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFORCxzRUFNQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgdHMgZnJvbSAndHlwZXNjcmlwdCc7XG5pbXBvcnQge0NsYXNzRGVjbGFyYXRpb259IGZyb20gJy4uLy4uL3JlZmxlY3Rpb24nO1xuXG4vKipcbiAqIEEgYFNldGAgb2YgYHRzLlN5bnRheEtpbmRgcyBvZiBgdHMuRXhwcmVzc2lvbmAgd2hpY2ggYXJlIHNhZmUgdG8gd3JhcCBpbiBhIGB0cy5Bc0V4cHJlc3Npb25gXG4gKiB3aXRob3V0IG5lZWRpbmcgdG8gYmUgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYGZvby5iYXIoKWAgaXMgYSBgdHMuQ2FsbEV4cHJlc3Npb25gLCBhbmQgY2FuIGJlIHNhZmVseSBjYXN0IHRvIGBhbnlgIHdpdGhcbiAqIGBmb28uYmFyKCkgYXMgYW55YC4gaG93ZXZlciwgYGZvbyAhPT0gYmFyYCBpcyBhIGB0cy5CaW5hcnlFeHByZXNzaW9uYCwgYW5kIGF0dGVtcHRpbmcgdG8gY2FzdFxuICogd2l0aG91dCB0aGUgcGFyZW50aGVzZXMgeWllbGRzIHRoZSBleHByZXNzaW9uIGBmb28gIT09IGJhciBhcyBhbnlgLiBUaGlzIGlzIHNlbWFudGljYWxseVxuICogZXF1aXZhbGVudCB0byBgZm9vICE9PSAoYmFyIGFzIGFueSlgLCB3aGljaCBpcyBub3Qgd2hhdCB3YXMgaW50ZW5kZWQuIFRodXMsXG4gKiBgdHMuQmluYXJ5RXhwcmVzc2lvbmBzIG5lZWQgdG8gYmUgd3JhcHBlZCBpbiBwYXJlbnRoZXNlcyBiZWZvcmUgY2FzdGluZy5cbiAqL1xuLy9cbmNvbnN0IFNBRkVfVE9fQ0FTVF9XSVRIT1VUX1BBUkVOUzogU2V0PHRzLlN5bnRheEtpbmQ+ID0gbmV3IFNldChbXG4gIC8vIEV4cHJlc3Npb25zIHdoaWNoIGFyZSBhbHJlYWR5IHBhcmVudGhlc2l6ZWQgY2FuIGJlIGNhc3Qgd2l0aG91dCBmdXJ0aGVyIHdyYXBwaW5nLlxuICB0cy5TeW50YXhLaW5kLlBhcmVudGhlc2l6ZWRFeHByZXNzaW9uLFxuXG4gIC8vIEV4cHJlc3Npb25zIHdoaWNoIGZvcm0gYSBzaW5nbGUgbGV4aWNhbCB1bml0IGxlYXZlIG5vIHJvb20gZm9yIHByZWNlZGVuY2UgaXNzdWVzIHdpdGggdGhlIGNhc3QuXG4gIHRzLlN5bnRheEtpbmQuSWRlbnRpZmllcixcbiAgdHMuU3ludGF4S2luZC5DYWxsRXhwcmVzc2lvbixcbiAgdHMuU3ludGF4S2luZC5Ob25OdWxsRXhwcmVzc2lvbixcbiAgdHMuU3ludGF4S2luZC5FbGVtZW50QWNjZXNzRXhwcmVzc2lvbixcbiAgdHMuU3ludGF4S2luZC5Qcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24sXG4gIHRzLlN5bnRheEtpbmQuQXJyYXlMaXRlcmFsRXhwcmVzc2lvbixcbiAgdHMuU3ludGF4S2luZC5PYmplY3RMaXRlcmFsRXhwcmVzc2lvbixcblxuICAvLyBUaGUgc2FtZSBnb2VzIGZvciB2YXJpb3VzIGxpdGVyYWxzLlxuICB0cy5TeW50YXhLaW5kLlN0cmluZ0xpdGVyYWwsXG4gIHRzLlN5bnRheEtpbmQuTnVtZXJpY0xpdGVyYWwsXG4gIHRzLlN5bnRheEtpbmQuVHJ1ZUtleXdvcmQsXG4gIHRzLlN5bnRheEtpbmQuRmFsc2VLZXl3b3JkLFxuICB0cy5TeW50YXhLaW5kLk51bGxLZXl3b3JkLFxuICB0cy5TeW50YXhLaW5kLlVuZGVmaW5lZEtleXdvcmQsXG5dKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRzQ2FzdFRvQW55KGV4cHI6IHRzLkV4cHJlc3Npb24pOiB0cy5FeHByZXNzaW9uIHtcbiAgLy8gV3JhcCBgZXhwcmAgaW4gcGFyZW50aGVzZXMgaWYgbmVlZGVkIChzZWUgYFNBRkVfVE9fQ0FTVF9XSVRIT1VUX1BBUkVOU2AgYWJvdmUpLlxuICBpZiAoIVNBRkVfVE9fQ0FTVF9XSVRIT1VUX1BBUkVOUy5oYXMoZXhwci5raW5kKSkge1xuICAgIGV4cHIgPSB0cy5jcmVhdGVQYXJlbihleHByKTtcbiAgfVxuXG4gIC8vIFRoZSBvdXRlciBleHByZXNzaW9uIGlzIGFsd2F5cyB3cmFwcGVkIGluIHBhcmVudGhlc2VzLlxuICByZXR1cm4gdHMuY3JlYXRlUGFyZW4oXG4gICAgICB0cy5jcmVhdGVBc0V4cHJlc3Npb24oZXhwciwgdHMuY3JlYXRlS2V5d29yZFR5cGVOb2RlKHRzLlN5bnRheEtpbmQuQW55S2V5d29yZCkpKTtcbn1cblxuXG4vKipcbiAqIENyZWF0ZSBhbiBleHByZXNzaW9uIHdoaWNoIGluc3RhbnRpYXRlcyBhbiBlbGVtZW50IGJ5IGl0cyBIVE1MIHRhZ05hbWUuXG4gKlxuICogVGhhbmtzIHRvIG5hcnJvd2luZyBvZiBgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgpYCwgdGhpcyBleHByZXNzaW9uIHdpbGwgaGF2ZSBpdHMgdHlwZSBpbmZlcnJlZFxuICogYmFzZWQgb24gdGhlIHRhZyBuYW1lLCBpbmNsdWRpbmcgZm9yIGN1c3RvbSBlbGVtZW50cyB0aGF0IGhhdmUgYXBwcm9wcmlhdGUgLmQudHMgZGVmaW5pdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0c0NyZWF0ZUVsZW1lbnQodGFnTmFtZTogc3RyaW5nKTogdHMuRXhwcmVzc2lvbiB7XG4gIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSB0cy5jcmVhdGVQcm9wZXJ0eUFjY2VzcyhcbiAgICAgIC8qIGV4cHJlc3Npb24gKi8gdHMuY3JlYXRlSWRlbnRpZmllcignZG9jdW1lbnQnKSwgJ2NyZWF0ZUVsZW1lbnQnKTtcbiAgcmV0dXJuIHRzLmNyZWF0ZUNhbGwoXG4gICAgICAvKiBleHByZXNzaW9uICovIGNyZWF0ZUVsZW1lbnQsXG4gICAgICAvKiB0eXBlQXJndW1lbnRzICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIGFyZ3VtZW50c0FycmF5ICovW3RzLmNyZWF0ZUxpdGVyYWwodGFnTmFtZSldKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBgdHMuVmFyaWFibGVTdGF0ZW1lbnRgIHdoaWNoIGRlY2xhcmVzIGEgdmFyaWFibGUgd2l0aG91dCBleHBsaWNpdCBpbml0aWFsaXphdGlvbi5cbiAqXG4gKiBUaGUgaW5pdGlhbGl6ZXIgYG51bGwhYCBpcyB1c2VkIHRvIGJ5cGFzcyBzdHJpY3QgdmFyaWFibGUgaW5pdGlhbGl6YXRpb24gY2hlY2tzLlxuICpcbiAqIFVubGlrZSB3aXRoIGB0c0NyZWF0ZVZhcmlhYmxlYCwgdGhlIHR5cGUgb2YgdGhlIHZhcmlhYmxlIGlzIGV4cGxpY2l0bHkgc3BlY2lmaWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHNEZWNsYXJlVmFyaWFibGUoaWQ6IHRzLklkZW50aWZpZXIsIHR5cGU6IHRzLlR5cGVOb2RlKTogdHMuVmFyaWFibGVTdGF0ZW1lbnQge1xuICBjb25zdCBkZWNsID0gdHMuY3JlYXRlVmFyaWFibGVEZWNsYXJhdGlvbihcbiAgICAgIC8qIG5hbWUgKi8gaWQsXG4gICAgICAvKiB0eXBlICovIHR5cGUsXG4gICAgICAvKiBpbml0aWFsaXplciAqLyB0cy5jcmVhdGVOb25OdWxsRXhwcmVzc2lvbih0cy5jcmVhdGVOdWxsKCkpKTtcbiAgcmV0dXJuIHRzLmNyZWF0ZVZhcmlhYmxlU3RhdGVtZW50KFxuICAgICAgLyogbW9kaWZpZXJzICovIHVuZGVmaW5lZCxcbiAgICAgIC8qIGRlY2xhcmF0aW9uTGlzdCAqL1tkZWNsXSk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYHRzLlZhcmlhYmxlU3RhdGVtZW50YCB0aGF0IGluaXRpYWxpemVzIGEgdmFyaWFibGUgd2l0aCBhIGdpdmVuIGV4cHJlc3Npb24uXG4gKlxuICogVW5saWtlIHdpdGggYHRzRGVjbGFyZVZhcmlhYmxlYCwgdGhlIHR5cGUgb2YgdGhlIHZhcmlhYmxlIGlzIGluZmVycmVkIGZyb20gdGhlIGluaXRpYWxpemVyXG4gKiBleHByZXNzaW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHNDcmVhdGVWYXJpYWJsZShcbiAgICBpZDogdHMuSWRlbnRpZmllciwgaW5pdGlhbGl6ZXI6IHRzLkV4cHJlc3Npb24pOiB0cy5WYXJpYWJsZVN0YXRlbWVudCB7XG4gIGNvbnN0IGRlY2wgPSB0cy5jcmVhdGVWYXJpYWJsZURlY2xhcmF0aW9uKFxuICAgICAgLyogbmFtZSAqLyBpZCxcbiAgICAgIC8qIHR5cGUgKi8gdW5kZWZpbmVkLFxuICAgICAgLyogaW5pdGlhbGl6ZXIgKi8gaW5pdGlhbGl6ZXIpO1xuICByZXR1cm4gdHMuY3JlYXRlVmFyaWFibGVTdGF0ZW1lbnQoXG4gICAgICAvKiBtb2RpZmllcnMgKi8gdW5kZWZpbmVkLFxuICAgICAgLyogZGVjbGFyYXRpb25MaXN0ICovW2RlY2xdKTtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3QgYSBgdHMuQ2FsbEV4cHJlc3Npb25gIHRoYXQgY2FsbHMgYSBtZXRob2Qgb24gYSByZWNlaXZlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRzQ2FsbE1ldGhvZChcbiAgICByZWNlaXZlcjogdHMuRXhwcmVzc2lvbiwgbWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzOiB0cy5FeHByZXNzaW9uW10gPSBbXSk6IHRzLkNhbGxFeHByZXNzaW9uIHtcbiAgY29uc3QgbWV0aG9kQWNjZXNzID0gdHMuY3JlYXRlUHJvcGVydHlBY2Nlc3MocmVjZWl2ZXIsIG1ldGhvZE5hbWUpO1xuICByZXR1cm4gdHMuY3JlYXRlQ2FsbChcbiAgICAgIC8qIGV4cHJlc3Npb24gKi8gbWV0aG9kQWNjZXNzLFxuICAgICAgLyogdHlwZUFyZ3VtZW50cyAqLyB1bmRlZmluZWQsXG4gICAgICAvKiBhcmd1bWVudHNBcnJheSAqLyBhcmdzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZDbGFzc0lzRXhwb3J0ZWQobm9kZTogQ2xhc3NEZWNsYXJhdGlvbik6IGJvb2xlYW4ge1xuICAvLyBBIGNsYXNzIGlzIGV4cG9ydGVkIGlmIG9uZSBvZiB0d28gY29uZGl0aW9ucyBpcyBtZXQ6XG4gIC8vIDEpIGl0IGhhcyB0aGUgJ2V4cG9ydCcgbW9kaWZpZXIuXG4gIC8vIDIpIGl0J3MgZGVjbGFyZWQgYXQgdGhlIHRvcCBsZXZlbCwgYW5kIHRoZXJlIGlzIGFuIGV4cG9ydCBzdGF0ZW1lbnQgZm9yIHRoZSBjbGFzcy5cbiAgaWYgKG5vZGUubW9kaWZpZXJzICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIG5vZGUubW9kaWZpZXJzLnNvbWUobW9kID0+IG1vZC5raW5kID09PSB0cy5TeW50YXhLaW5kLkV4cG9ydEtleXdvcmQpKSB7XG4gICAgLy8gQ29uZGl0aW9uIDEgaXMgdHJ1ZSwgdGhlIGNsYXNzIGhhcyBhbiAnZXhwb3J0JyBrZXl3b3JkIGF0dGFjaGVkLlxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKFxuICAgICAgbm9kZS5wYXJlbnQgIT09IHVuZGVmaW5lZCAmJiB0cy5pc1NvdXJjZUZpbGUobm9kZS5wYXJlbnQpICYmXG4gICAgICBjaGVja0lmRmlsZUhhc0V4cG9ydChub2RlLnBhcmVudCwgbm9kZS5uYW1lLnRleHQpKSB7XG4gICAgLy8gQ29uZGl0aW9uIDIgaXMgdHJ1ZSwgdGhlIGNsYXNzIGlzIGV4cG9ydGVkIHZpYSBhbiAnZXhwb3J0IHt9JyBzdGF0ZW1lbnQuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmRmlsZUhhc0V4cG9ydChzZjogdHMuU291cmNlRmlsZSwgbmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGZvciAoY29uc3Qgc3RtdCBvZiBzZi5zdGF0ZW1lbnRzKSB7XG4gICAgaWYgKHRzLmlzRXhwb3J0RGVjbGFyYXRpb24oc3RtdCkgJiYgc3RtdC5leHBvcnRDbGF1c2UgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0cy5pc05hbWVkRXhwb3J0cyhzdG10LmV4cG9ydENsYXVzZSkpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBzdG10LmV4cG9ydENsYXVzZS5lbGVtZW50cykge1xuICAgICAgICBpZiAoZWxlbWVudC5wcm9wZXJ0eU5hbWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtZW50Lm5hbWUudGV4dCA9PT0gbmFtZSkge1xuICAgICAgICAgIC8vIFRoZSBuYW1lZCBkZWNsYXJhdGlvbiBpcyBkaXJlY3RseSBleHBvcnRlZC5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQucHJvcGVydHlOYW1lLnRleHQgPT0gbmFtZSkge1xuICAgICAgICAgIC8vIFRoZSBuYW1lZCBkZWNsYXJhdGlvbiBpcyBleHBvcnRlZCB2aWEgYW4gYWxpYXMuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tJZkdlbmVyaWNUeXBlc0FyZVVuYm91bmQobm9kZTogQ2xhc3NEZWNsYXJhdGlvbjx0cy5DbGFzc0RlY2xhcmF0aW9uPik6XG4gICAgYm9vbGVhbiB7XG4gIGlmIChub2RlLnR5cGVQYXJhbWV0ZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gbm9kZS50eXBlUGFyYW1ldGVycy5ldmVyeShwYXJhbSA9PiBwYXJhbS5jb25zdHJhaW50ID09PSB1bmRlZmluZWQpO1xufVxuIl19
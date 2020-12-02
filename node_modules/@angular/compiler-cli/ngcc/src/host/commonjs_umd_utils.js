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
        define("@angular/compiler-cli/ngcc/src/host/commonjs_umd_utils", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    /**
     * Return the "namespace" of the specified `ts.Identifier` if the identifier is the RHS of a
     * property access expression, i.e. an expression of the form `<namespace>.<id>` (in which case a
     * `ts.Identifier` corresponding to `<namespace>` will be returned). Otherwise return `null`.
     */
    function findNamespaceOfIdentifier(id) {
        return id.parent && ts.isPropertyAccessExpression(id.parent) &&
            ts.isIdentifier(id.parent.expression) ?
            id.parent.expression :
            null;
    }
    exports.findNamespaceOfIdentifier = findNamespaceOfIdentifier;
    /**
     * Return the `RequireCall` that is used to initialize the specified `ts.Identifier`, if the
     * specified indentifier was indeed initialized with a require call in a declaration of the form:
     * `var <id> = require('...')`
     */
    function findRequireCallReference(id, checker) {
        var symbol = checker.getSymbolAtLocation(id) || null;
        var declaration = symbol && symbol.valueDeclaration;
        var initializer = declaration && ts.isVariableDeclaration(declaration) && declaration.initializer || null;
        return initializer && isRequireCall(initializer) ? initializer : null;
    }
    exports.findRequireCallReference = findRequireCallReference;
    /**
     * Check whether the specified `ts.Statement` is an export statement, i.e. an expression statement
     * of the form: `export.<foo> = <bar>`
     */
    function isExportStatement(stmt) {
        return ts.isExpressionStatement(stmt) && ts.isBinaryExpression(stmt.expression) &&
            (stmt.expression.operatorToken.kind === ts.SyntaxKind.EqualsToken) &&
            ts.isPropertyAccessExpression(stmt.expression.left) &&
            ts.isIdentifier(stmt.expression.left.expression) &&
            stmt.expression.left.expression.text === 'exports';
    }
    exports.isExportStatement = isExportStatement;
    /**
     * Check whether the specified `ts.Statement` is a re-export statement, i.e. an expression statement
     * of one of the following forms:
     * - `__export(<foo>)`
     * - `__exportStar(<foo>)`
     * - `tslib.__export(<foo>, exports)`
     * - `tslib.__exportStar(<foo>, exports)`
     */
    function isReexportStatement(stmt) {
        // Ensure it is a call expression statement.
        if (!ts.isExpressionStatement(stmt) || !ts.isCallExpression(stmt.expression)) {
            return false;
        }
        // Get the called function identifier.
        // NOTE: Currently, it seems that `__export()` is used when emitting helpers inline and
        //       `__exportStar()` when importing them
        //       ([source](https://github.com/microsoft/TypeScript/blob/d7c83f023/src/compiler/transformers/module/module.ts#L1796-L1797)).
        //       So, theoretically, we only care about the formats `__export(<foo>)` and
        //       `tslib.__exportStar(<foo>, exports)`.
        //       The current implementation accepts the other two formats (`__exportStar(...)` and
        //       `tslib.__export(...)`) as well to be more future-proof (given that it is unlikely that
        //       they will introduce false positives).
        var fnName = null;
        if (ts.isIdentifier(stmt.expression.expression)) {
            // Statement of the form `someFn(...)`.
            fnName = stmt.expression.expression.text;
        }
        else if (ts.isPropertyAccessExpression(stmt.expression.expression) &&
            ts.isIdentifier(stmt.expression.expression.name)) {
            // Statement of the form `tslib.someFn(...)`.
            fnName = stmt.expression.expression.name.text;
        }
        // Ensure the called function is either `__export()` or `__exportStar()`.
        if ((fnName !== '__export') && (fnName !== '__exportStar')) {
            return false;
        }
        // Ensure there is at least one argument.
        // (The first argument is the exported thing and there will be a second `exports` argument in the
        // case of imported helpers).
        return stmt.expression.arguments.length > 0;
    }
    exports.isReexportStatement = isReexportStatement;
    /**
     * Check whether the specified `ts.Node` represents a `require()` call, i.e. an call expression of
     * the form: `require('<foo>')`
     */
    function isRequireCall(node) {
        return ts.isCallExpression(node) && ts.isIdentifier(node.expression) &&
            node.expression.text === 'require' && node.arguments.length === 1 &&
            ts.isStringLiteral(node.arguments[0]);
    }
    exports.isRequireCall = isRequireCall;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uanNfdW1kX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2hvc3QvY29tbW9uanNfdW1kX3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgsK0JBQWlDO0lBMENqQzs7OztPQUlHO0lBQ0gsU0FBZ0IseUJBQXlCLENBQUMsRUFBaUI7UUFDekQsT0FBTyxFQUFFLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ3BELEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUxELDhEQUtDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQWdCLHdCQUF3QixDQUFDLEVBQWlCLEVBQUUsT0FBdUI7UUFFakYsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUN2RCxJQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ3RELElBQU0sV0FBVyxHQUNiLFdBQVcsSUFBSSxFQUFFLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDNUYsT0FBTyxXQUFXLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RSxDQUFDO0lBUEQsNERBT0M7SUFFRDs7O09BR0c7SUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxJQUFrQjtRQUNsRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUMzRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUNsRSxFQUFFLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDbkQsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7SUFDekQsQ0FBQztJQU5ELDhDQU1DO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILFNBQWdCLG1CQUFtQixDQUFDLElBQWtCO1FBQ3BELDRDQUE0QztRQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUM1RSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsc0NBQXNDO1FBQ3RDLHVGQUF1RjtRQUN2Riw2Q0FBNkM7UUFDN0MsbUlBQW1JO1FBQ25JLGdGQUFnRjtRQUNoRiw4Q0FBOEM7UUFDOUMsMEZBQTBGO1FBQzFGLCtGQUErRjtRQUMvRiw4Q0FBOEM7UUFDOUMsSUFBSSxNQUFNLEdBQWdCLElBQUksQ0FBQztRQUMvQixJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQyx1Q0FBdUM7WUFDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztTQUMxQzthQUFNLElBQ0gsRUFBRSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1lBQ3pELEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsNkNBQTZDO1lBQzdDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQy9DO1FBRUQseUVBQXlFO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssY0FBYyxDQUFDLEVBQUU7WUFDMUQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELHlDQUF5QztRQUN6QyxpR0FBaUc7UUFDakcsNkJBQTZCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBbkNELGtEQW1DQztJQUVEOzs7T0FHRztJQUNILFNBQWdCLGFBQWEsQ0FBQyxJQUFhO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNqRSxFQUFFLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSkQsc0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtEZWNsYXJhdGlvbn0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL3JlZmxlY3Rpb24nO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0RGVjbGFyYXRpb24ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlY2xhcmF0aW9uOiBEZWNsYXJhdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHBvcnRTdGF0ZW1lbnQgZXh0ZW5kcyB0cy5FeHByZXNzaW9uU3RhdGVtZW50IHtcbiAgZXhwcmVzc2lvbjogdHMuQmluYXJ5RXhwcmVzc2lvbiZ7XG4gICAgbGVmdDogdHMuUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uICZcbiAgICAgICAge1xuICAgICAgICAgIGV4cHJlc3Npb246IHRzLklkZW50aWZpZXJcbiAgICAgICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEEgQ29tbW9uSlMgb3IgVU1EIHJlLWV4cG9ydCBzdGF0ZW1lbnQuXG4gKlxuICogSW4gQ29tbW9uSlMvVU1ELCByZS1leHBvcnQgc3RhdGVtZW50cyBjYW4gaGF2ZSBzZXZlcmFsIGZvcm1zIChkZXBlbmRpbmcsIGZvciBleGFtcGxlLCBvbiB3aGV0aGVyXG4gKiB0aGUgVHlwZVNjcmlwdCBoZWxwZXJzIGFyZSBpbXBvcnRlZCBvciBlbWl0dGVkIGlubGluZSkuIFRoZSBleHByZXNzaW9uIGNhbiBoYXZlIG9uZSBvZiB0aGVcbiAqIGZvbGxvd2luZyBmb3JtczpcbiAqIC0gYF9fZXhwb3J0KGZpcnN0QXJnKWBcbiAqIC0gYF9fZXhwb3J0U3RhcihmaXJzdEFyZylgXG4gKiAtIGB0c2xpYi5fX2V4cG9ydChmaXJzdEFyZywgZXhwb3J0cylgXG4gKiAtIGB0c2xpYi5fX2V4cG9ydFN0YXIoZmlyc3RBcmcsIGV4cG9ydHMpYFxuICpcbiAqIEluIGFsbCBjYXNlcywgd2Ugb25seSBjYXJlIGFib3V0IGBmaXJzdEFwcGAsIHdoaWNoIGlzIHRoZSBmaXJzdCBhcmd1bWVudCBvZiB0aGUgcmUtZXhwb3J0IGNhbGxcbiAqIGV4cHJlc3Npb24gYW5kIGNhbiBiZSBlaXRoZXIgYSBgcmVxdWlyZSgnLi4uJylgIGNhbGwgb3IgYW4gaWRlbnRpZmllciAoaW5pdGlhbGl6ZWQgdmlhIGFcbiAqIGByZXF1aXJlKCcuLi4nKWAgY2FsbCkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVleHBvcnRTdGF0ZW1lbnQgZXh0ZW5kcyB0cy5FeHByZXNzaW9uU3RhdGVtZW50IHtcbiAgZXhwcmVzc2lvbjogdHMuQ2FsbEV4cHJlc3Npb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWlyZUNhbGwgZXh0ZW5kcyB0cy5DYWxsRXhwcmVzc2lvbiB7XG4gIGFyZ3VtZW50czogdHMuQ2FsbEV4cHJlc3Npb25bJ2FyZ3VtZW50cyddJlt0cy5TdHJpbmdMaXRlcmFsXTtcbn1cblxuXG4vKipcbiAqIFJldHVybiB0aGUgXCJuYW1lc3BhY2VcIiBvZiB0aGUgc3BlY2lmaWVkIGB0cy5JZGVudGlmaWVyYCBpZiB0aGUgaWRlbnRpZmllciBpcyB0aGUgUkhTIG9mIGFcbiAqIHByb3BlcnR5IGFjY2VzcyBleHByZXNzaW9uLCBpLmUuIGFuIGV4cHJlc3Npb24gb2YgdGhlIGZvcm0gYDxuYW1lc3BhY2U+LjxpZD5gIChpbiB3aGljaCBjYXNlIGFcbiAqIGB0cy5JZGVudGlmaWVyYCBjb3JyZXNwb25kaW5nIHRvIGA8bmFtZXNwYWNlPmAgd2lsbCBiZSByZXR1cm5lZCkuIE90aGVyd2lzZSByZXR1cm4gYG51bGxgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE5hbWVzcGFjZU9mSWRlbnRpZmllcihpZDogdHMuSWRlbnRpZmllcik6IHRzLklkZW50aWZpZXJ8bnVsbCB7XG4gIHJldHVybiBpZC5wYXJlbnQgJiYgdHMuaXNQcm9wZXJ0eUFjY2Vzc0V4cHJlc3Npb24oaWQucGFyZW50KSAmJlxuICAgICAgICAgIHRzLmlzSWRlbnRpZmllcihpZC5wYXJlbnQuZXhwcmVzc2lvbikgP1xuICAgICAgaWQucGFyZW50LmV4cHJlc3Npb24gOlxuICAgICAgbnVsbDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGBSZXF1aXJlQ2FsbGAgdGhhdCBpcyB1c2VkIHRvIGluaXRpYWxpemUgdGhlIHNwZWNpZmllZCBgdHMuSWRlbnRpZmllcmAsIGlmIHRoZVxuICogc3BlY2lmaWVkIGluZGVudGlmaWVyIHdhcyBpbmRlZWQgaW5pdGlhbGl6ZWQgd2l0aCBhIHJlcXVpcmUgY2FsbCBpbiBhIGRlY2xhcmF0aW9uIG9mIHRoZSBmb3JtOlxuICogYHZhciA8aWQ+ID0gcmVxdWlyZSgnLi4uJylgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUmVxdWlyZUNhbGxSZWZlcmVuY2UoaWQ6IHRzLklkZW50aWZpZXIsIGNoZWNrZXI6IHRzLlR5cGVDaGVja2VyKTogUmVxdWlyZUNhbGx8XG4gICAgbnVsbCB7XG4gIGNvbnN0IHN5bWJvbCA9IGNoZWNrZXIuZ2V0U3ltYm9sQXRMb2NhdGlvbihpZCkgfHwgbnVsbDtcbiAgY29uc3QgZGVjbGFyYXRpb24gPSBzeW1ib2wgJiYgc3ltYm9sLnZhbHVlRGVjbGFyYXRpb247XG4gIGNvbnN0IGluaXRpYWxpemVyID1cbiAgICAgIGRlY2xhcmF0aW9uICYmIHRzLmlzVmFyaWFibGVEZWNsYXJhdGlvbihkZWNsYXJhdGlvbikgJiYgZGVjbGFyYXRpb24uaW5pdGlhbGl6ZXIgfHwgbnVsbDtcbiAgcmV0dXJuIGluaXRpYWxpemVyICYmIGlzUmVxdWlyZUNhbGwoaW5pdGlhbGl6ZXIpID8gaW5pdGlhbGl6ZXIgOiBudWxsO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBgdHMuU3RhdGVtZW50YCBpcyBhbiBleHBvcnQgc3RhdGVtZW50LCBpLmUuIGFuIGV4cHJlc3Npb24gc3RhdGVtZW50XG4gKiBvZiB0aGUgZm9ybTogYGV4cG9ydC48Zm9vPiA9IDxiYXI+YFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFeHBvcnRTdGF0ZW1lbnQoc3RtdDogdHMuU3RhdGVtZW50KTogc3RtdCBpcyBFeHBvcnRTdGF0ZW1lbnQge1xuICByZXR1cm4gdHMuaXNFeHByZXNzaW9uU3RhdGVtZW50KHN0bXQpICYmIHRzLmlzQmluYXJ5RXhwcmVzc2lvbihzdG10LmV4cHJlc3Npb24pICYmXG4gICAgICAoc3RtdC5leHByZXNzaW9uLm9wZXJhdG9yVG9rZW4ua2luZCA9PT0gdHMuU3ludGF4S2luZC5FcXVhbHNUb2tlbikgJiZcbiAgICAgIHRzLmlzUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKHN0bXQuZXhwcmVzc2lvbi5sZWZ0KSAmJlxuICAgICAgdHMuaXNJZGVudGlmaWVyKHN0bXQuZXhwcmVzc2lvbi5sZWZ0LmV4cHJlc3Npb24pICYmXG4gICAgICBzdG10LmV4cHJlc3Npb24ubGVmdC5leHByZXNzaW9uLnRleHQgPT09ICdleHBvcnRzJztcbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgYHRzLlN0YXRlbWVudGAgaXMgYSByZS1leHBvcnQgc3RhdGVtZW50LCBpLmUuIGFuIGV4cHJlc3Npb24gc3RhdGVtZW50XG4gKiBvZiBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtczpcbiAqIC0gYF9fZXhwb3J0KDxmb28+KWBcbiAqIC0gYF9fZXhwb3J0U3Rhcig8Zm9vPilgXG4gKiAtIGB0c2xpYi5fX2V4cG9ydCg8Zm9vPiwgZXhwb3J0cylgXG4gKiAtIGB0c2xpYi5fX2V4cG9ydFN0YXIoPGZvbz4sIGV4cG9ydHMpYFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNSZWV4cG9ydFN0YXRlbWVudChzdG10OiB0cy5TdGF0ZW1lbnQpOiBzdG10IGlzIFJlZXhwb3J0U3RhdGVtZW50IHtcbiAgLy8gRW5zdXJlIGl0IGlzIGEgY2FsbCBleHByZXNzaW9uIHN0YXRlbWVudC5cbiAgaWYgKCF0cy5pc0V4cHJlc3Npb25TdGF0ZW1lbnQoc3RtdCkgfHwgIXRzLmlzQ2FsbEV4cHJlc3Npb24oc3RtdC5leHByZXNzaW9uKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEdldCB0aGUgY2FsbGVkIGZ1bmN0aW9uIGlkZW50aWZpZXIuXG4gIC8vIE5PVEU6IEN1cnJlbnRseSwgaXQgc2VlbXMgdGhhdCBgX19leHBvcnQoKWAgaXMgdXNlZCB3aGVuIGVtaXR0aW5nIGhlbHBlcnMgaW5saW5lIGFuZFxuICAvLyAgICAgICBgX19leHBvcnRTdGFyKClgIHdoZW4gaW1wb3J0aW5nIHRoZW1cbiAgLy8gICAgICAgKFtzb3VyY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9ibG9iL2Q3YzgzZjAyMy9zcmMvY29tcGlsZXIvdHJhbnNmb3JtZXJzL21vZHVsZS9tb2R1bGUudHMjTDE3OTYtTDE3OTcpKS5cbiAgLy8gICAgICAgU28sIHRoZW9yZXRpY2FsbHksIHdlIG9ubHkgY2FyZSBhYm91dCB0aGUgZm9ybWF0cyBgX19leHBvcnQoPGZvbz4pYCBhbmRcbiAgLy8gICAgICAgYHRzbGliLl9fZXhwb3J0U3Rhcig8Zm9vPiwgZXhwb3J0cylgLlxuICAvLyAgICAgICBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBhY2NlcHRzIHRoZSBvdGhlciB0d28gZm9ybWF0cyAoYF9fZXhwb3J0U3RhciguLi4pYCBhbmRcbiAgLy8gICAgICAgYHRzbGliLl9fZXhwb3J0KC4uLilgKSBhcyB3ZWxsIHRvIGJlIG1vcmUgZnV0dXJlLXByb29mIChnaXZlbiB0aGF0IGl0IGlzIHVubGlrZWx5IHRoYXRcbiAgLy8gICAgICAgdGhleSB3aWxsIGludHJvZHVjZSBmYWxzZSBwb3NpdGl2ZXMpLlxuICBsZXQgZm5OYW1lOiBzdHJpbmd8bnVsbCA9IG51bGw7XG4gIGlmICh0cy5pc0lkZW50aWZpZXIoc3RtdC5leHByZXNzaW9uLmV4cHJlc3Npb24pKSB7XG4gICAgLy8gU3RhdGVtZW50IG9mIHRoZSBmb3JtIGBzb21lRm4oLi4uKWAuXG4gICAgZm5OYW1lID0gc3RtdC5leHByZXNzaW9uLmV4cHJlc3Npb24udGV4dDtcbiAgfSBlbHNlIGlmIChcbiAgICAgIHRzLmlzUHJvcGVydHlBY2Nlc3NFeHByZXNzaW9uKHN0bXQuZXhwcmVzc2lvbi5leHByZXNzaW9uKSAmJlxuICAgICAgdHMuaXNJZGVudGlmaWVyKHN0bXQuZXhwcmVzc2lvbi5leHByZXNzaW9uLm5hbWUpKSB7XG4gICAgLy8gU3RhdGVtZW50IG9mIHRoZSBmb3JtIGB0c2xpYi5zb21lRm4oLi4uKWAuXG4gICAgZm5OYW1lID0gc3RtdC5leHByZXNzaW9uLmV4cHJlc3Npb24ubmFtZS50ZXh0O1xuICB9XG5cbiAgLy8gRW5zdXJlIHRoZSBjYWxsZWQgZnVuY3Rpb24gaXMgZWl0aGVyIGBfX2V4cG9ydCgpYCBvciBgX19leHBvcnRTdGFyKClgLlxuICBpZiAoKGZuTmFtZSAhPT0gJ19fZXhwb3J0JykgJiYgKGZuTmFtZSAhPT0gJ19fZXhwb3J0U3RhcicpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRW5zdXJlIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC5cbiAgLy8gKFRoZSBmaXJzdCBhcmd1bWVudCBpcyB0aGUgZXhwb3J0ZWQgdGhpbmcgYW5kIHRoZXJlIHdpbGwgYmUgYSBzZWNvbmQgYGV4cG9ydHNgIGFyZ3VtZW50IGluIHRoZVxuICAvLyBjYXNlIG9mIGltcG9ydGVkIGhlbHBlcnMpLlxuICByZXR1cm4gc3RtdC5leHByZXNzaW9uLmFyZ3VtZW50cy5sZW5ndGggPiAwO1xufVxuXG4vKipcbiAqIENoZWNrIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBgdHMuTm9kZWAgcmVwcmVzZW50cyBhIGByZXF1aXJlKClgIGNhbGwsIGkuZS4gYW4gY2FsbCBleHByZXNzaW9uIG9mXG4gKiB0aGUgZm9ybTogYHJlcXVpcmUoJzxmb28+JylgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlcXVpcmVDYWxsKG5vZGU6IHRzLk5vZGUpOiBub2RlIGlzIFJlcXVpcmVDYWxsIHtcbiAgcmV0dXJuIHRzLmlzQ2FsbEV4cHJlc3Npb24obm9kZSkgJiYgdHMuaXNJZGVudGlmaWVyKG5vZGUuZXhwcmVzc2lvbikgJiZcbiAgICAgIG5vZGUuZXhwcmVzc2lvbi50ZXh0ID09PSAncmVxdWlyZScgJiYgbm9kZS5hcmd1bWVudHMubGVuZ3RoID09PSAxICYmXG4gICAgICB0cy5pc1N0cmluZ0xpdGVyYWwobm9kZS5hcmd1bWVudHNbMF0pO1xufVxuIl19
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
        define("@angular/compiler-cli/src/ngtsc/reflection/src/util", ["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ts = require("typescript");
    function isNamedClassDeclaration(node) {
        return ts.isClassDeclaration(node) && (node.name !== undefined);
    }
    exports.isNamedClassDeclaration = isNamedClassDeclaration;
    function isNamedFunctionDeclaration(node) {
        return ts.isFunctionDeclaration(node) && (node.name !== undefined);
    }
    exports.isNamedFunctionDeclaration = isNamedFunctionDeclaration;
    function isNamedVariableDeclaration(node) {
        return ts.isVariableDeclaration(node) && (node.name !== undefined);
    }
    exports.isNamedVariableDeclaration = isNamedVariableDeclaration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvcmVmbGVjdGlvbi9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILCtCQUFpQztJQUdqQyxTQUFnQix1QkFBdUIsQ0FBQyxJQUFhO1FBRW5ELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBSEQsMERBR0M7SUFFRCxTQUFnQiwwQkFBMEIsQ0FBQyxJQUFhO1FBRXRELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBSEQsZ0VBR0M7SUFFRCxTQUFnQiwwQkFBMEIsQ0FBQyxJQUFhO1FBRXRELE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBSEQsZ0VBR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtDbGFzc0RlY2xhcmF0aW9ufSBmcm9tICcuL2hvc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOYW1lZENsYXNzRGVjbGFyYXRpb24obm9kZTogdHMuTm9kZSk6XG4gICAgbm9kZSBpcyBDbGFzc0RlY2xhcmF0aW9uPHRzLkNsYXNzRGVjbGFyYXRpb24+IHtcbiAgcmV0dXJuIHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihub2RlKSAmJiAobm9kZS5uYW1lICE9PSB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOYW1lZEZ1bmN0aW9uRGVjbGFyYXRpb24obm9kZTogdHMuTm9kZSk6XG4gICAgbm9kZSBpcyBDbGFzc0RlY2xhcmF0aW9uPHRzLkZ1bmN0aW9uRGVjbGFyYXRpb24+IHtcbiAgcmV0dXJuIHRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihub2RlKSAmJiAobm9kZS5uYW1lICE9PSB1bmRlZmluZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOYW1lZFZhcmlhYmxlRGVjbGFyYXRpb24obm9kZTogdHMuTm9kZSk6XG4gICAgbm9kZSBpcyBDbGFzc0RlY2xhcmF0aW9uPHRzLlZhcmlhYmxlRGVjbGFyYXRpb24+IHtcbiAgcmV0dXJuIHRzLmlzVmFyaWFibGVEZWNsYXJhdGlvbihub2RlKSAmJiAobm9kZS5uYW1lICE9PSB1bmRlZmluZWQpO1xufVxuIl19
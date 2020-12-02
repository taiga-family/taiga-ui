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
        define("@angular/compiler-cli/src/ngtsc/reflection", ["require", "exports", "tslib", "@angular/compiler-cli/src/ngtsc/reflection/src/host", "@angular/compiler-cli/src/ngtsc/reflection/src/type_to_value", "@angular/compiler-cli/src/ngtsc/reflection/src/typescript", "@angular/compiler-cli/src/ngtsc/reflection/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    tslib_1.__exportStar(require("@angular/compiler-cli/src/ngtsc/reflection/src/host"), exports);
    var type_to_value_1 = require("@angular/compiler-cli/src/ngtsc/reflection/src/type_to_value");
    exports.typeNodeToValueExpr = type_to_value_1.typeNodeToValueExpr;
    var typescript_1 = require("@angular/compiler-cli/src/ngtsc/reflection/src/typescript");
    exports.TypeScriptReflectionHost = typescript_1.TypeScriptReflectionHost;
    exports.filterToMembersWithDecorator = typescript_1.filterToMembersWithDecorator;
    exports.reflectIdentifierOfDeclaration = typescript_1.reflectIdentifierOfDeclaration;
    exports.reflectNameOfDeclaration = typescript_1.reflectNameOfDeclaration;
    exports.reflectObjectLiteral = typescript_1.reflectObjectLiteral;
    exports.reflectTypeEntityToDeclaration = typescript_1.reflectTypeEntityToDeclaration;
    var util_1 = require("@angular/compiler-cli/src/ngtsc/reflection/src/util");
    exports.isNamedClassDeclaration = util_1.isNamedClassDeclaration;
    exports.isNamedFunctionDeclaration = util_1.isNamedFunctionDeclaration;
    exports.isNamedVariableDeclaration = util_1.isNamedVariableDeclaration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci1jbGkvc3JjL25ndHNjL3JlZmxlY3Rpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsOEZBQTJCO0lBQzNCLDhGQUF3RDtJQUFoRCw4Q0FBQSxtQkFBbUIsQ0FBQTtJQUMzQix3RkFBd007SUFBaE0sZ0RBQUEsd0JBQXdCLENBQUE7SUFBRSxvREFBQSw0QkFBNEIsQ0FBQTtJQUFFLHNEQUFBLDhCQUE4QixDQUFBO0lBQUUsZ0RBQUEsd0JBQXdCLENBQUE7SUFBRSw0Q0FBQSxvQkFBb0IsQ0FBQTtJQUFFLHNEQUFBLDhCQUE4QixDQUFBO0lBQzlLLDRFQUEyRztJQUFuRyx5Q0FBQSx1QkFBdUIsQ0FBQTtJQUFFLDRDQUFBLDBCQUEwQixDQUFBO0lBQUUsNENBQUEsMEJBQTBCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL2hvc3QnO1xuZXhwb3J0IHt0eXBlTm9kZVRvVmFsdWVFeHByfSBmcm9tICcuL3NyYy90eXBlX3RvX3ZhbHVlJztcbmV4cG9ydCB7VHlwZVNjcmlwdFJlZmxlY3Rpb25Ib3N0LCBmaWx0ZXJUb01lbWJlcnNXaXRoRGVjb3JhdG9yLCByZWZsZWN0SWRlbnRpZmllck9mRGVjbGFyYXRpb24sIHJlZmxlY3ROYW1lT2ZEZWNsYXJhdGlvbiwgcmVmbGVjdE9iamVjdExpdGVyYWwsIHJlZmxlY3RUeXBlRW50aXR5VG9EZWNsYXJhdGlvbn0gZnJvbSAnLi9zcmMvdHlwZXNjcmlwdCc7XG5leHBvcnQge2lzTmFtZWRDbGFzc0RlY2xhcmF0aW9uLCBpc05hbWVkRnVuY3Rpb25EZWNsYXJhdGlvbiwgaXNOYW1lZFZhcmlhYmxlRGVjbGFyYXRpb259IGZyb20gJy4vc3JjL3V0aWwnO1xuIl19
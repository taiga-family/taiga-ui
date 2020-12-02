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
        define("@angular/compiler-cli/src/ngtsc/modulewithproviders/src/scanner", ["require", "exports", "tslib", "@angular/compiler", "typescript", "@angular/compiler-cli/src/ngtsc/imports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compiler_1 = require("@angular/compiler");
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var ModuleWithProvidersScanner = /** @class */ (function () {
        function ModuleWithProvidersScanner(host, evaluator, emitter) {
            this.host = host;
            this.evaluator = evaluator;
            this.emitter = emitter;
        }
        ModuleWithProvidersScanner.prototype.scan = function (sf, dts) {
            var e_1, _a;
            try {
                for (var _b = tslib_1.__values(sf.statements), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var stmt = _c.value;
                    this.visitStatement(dts, stmt);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        ModuleWithProvidersScanner.prototype.visitStatement = function (dts, stmt) {
            var e_2, _a;
            // Detect whether a statement is exported, which is used as one of the hints whether to look
            // more closely at possible MWP functions within. This is a syntactic check, not a semantic
            // check, so it won't detect cases like:
            //
            // var X = ...;
            // export {X}
            //
            // This is intentional, because the alternative is slow and this will catch 99% of the cases we
            // need to handle.
            var isExported = stmt.modifiers !== undefined &&
                stmt.modifiers.some(function (mod) { return mod.kind === ts.SyntaxKind.ExportKeyword; });
            if (!isExported) {
                return;
            }
            if (ts.isClassDeclaration(stmt)) {
                try {
                    for (var _b = tslib_1.__values(stmt.members), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var member = _c.value;
                        if (!ts.isMethodDeclaration(member) || !isStatic(member)) {
                            continue;
                        }
                        this.visitFunctionOrMethodDeclaration(dts, member);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else if (ts.isFunctionDeclaration(stmt)) {
                this.visitFunctionOrMethodDeclaration(dts, stmt);
            }
        };
        ModuleWithProvidersScanner.prototype.visitFunctionOrMethodDeclaration = function (dts, decl) {
            // First, some sanity. This should have a method body with a single return statement.
            if (decl.body === undefined || decl.body.statements.length !== 1) {
                return;
            }
            var retStmt = decl.body.statements[0];
            if (!ts.isReturnStatement(retStmt) || retStmt.expression === undefined) {
                return;
            }
            var retValue = retStmt.expression;
            // Now, look at the return type of the method. Maybe bail if the type is already marked, or if
            // it's incompatible with a MWP function.
            var returnType = this.returnTypeOf(decl);
            if (returnType === ReturnType.OTHER || returnType === ReturnType.MWP_WITH_TYPE) {
                // Don't process this declaration, it either already declares the right return type, or an
                // incompatible one.
                return;
            }
            var value = this.evaluator.evaluate(retValue);
            if (!(value instanceof Map) || !value.has('ngModule')) {
                // The return value does not provide sufficient information to be able to add a generic type.
                return;
            }
            if (returnType === ReturnType.INFERRED && !isModuleWithProvidersType(value)) {
                // The return type is inferred but the returned object is not of the correct shape, so we
                // shouldn's modify the return type to become `ModuleWithProviders`.
                return;
            }
            // The return type has been verified to represent the `ModuleWithProviders` type, but either the
            // return type is inferred or the generic type argument is missing. In both cases, a new return
            // type is created where the `ngModule` type is included as generic type argument.
            var ngModule = value.get('ngModule');
            if (!(ngModule instanceof imports_1.Reference) || !ts.isClassDeclaration(ngModule.node)) {
                return;
            }
            var ngModuleExpr = this.emitter.emit(ngModule, decl.getSourceFile(), imports_1.ImportFlags.ForceNewImport);
            var ngModuleType = new compiler_1.ExpressionType(ngModuleExpr);
            var mwpNgType = new compiler_1.ExpressionType(new compiler_1.ExternalExpr(compiler_1.R3Identifiers.ModuleWithProviders), /* modifiers */ null, [ngModuleType]);
            dts.addTypeReplacement(decl, mwpNgType);
        };
        ModuleWithProvidersScanner.prototype.returnTypeOf = function (decl) {
            if (decl.type === undefined) {
                return ReturnType.INFERRED;
            }
            else if (!ts.isTypeReferenceNode(decl.type)) {
                return ReturnType.OTHER;
            }
            // Try to figure out if the type is of a familiar form, something that looks like it was
            // imported.
            var typeId;
            if (ts.isIdentifier(decl.type.typeName)) {
                // def: ModuleWithProviders
                typeId = decl.type.typeName;
            }
            else if (ts.isQualifiedName(decl.type.typeName) && ts.isIdentifier(decl.type.typeName.left)) {
                // def: i0.ModuleWithProviders
                typeId = decl.type.typeName.right;
            }
            else {
                return ReturnType.OTHER;
            }
            var importDecl = this.host.getImportOfIdentifier(typeId);
            if (importDecl === null || importDecl.from !== '@angular/core' ||
                importDecl.name !== 'ModuleWithProviders') {
                return ReturnType.OTHER;
            }
            if (decl.type.typeArguments === undefined || decl.type.typeArguments.length === 0) {
                // The return type is indeed ModuleWithProviders, but no generic type parameter was found.
                return ReturnType.MWP_NO_TYPE;
            }
            else {
                // The return type is ModuleWithProviders, and the user has already specified a generic type.
                return ReturnType.MWP_WITH_TYPE;
            }
        };
        return ModuleWithProvidersScanner;
    }());
    exports.ModuleWithProvidersScanner = ModuleWithProvidersScanner;
    var ReturnType;
    (function (ReturnType) {
        ReturnType[ReturnType["INFERRED"] = 0] = "INFERRED";
        ReturnType[ReturnType["MWP_NO_TYPE"] = 1] = "MWP_NO_TYPE";
        ReturnType[ReturnType["MWP_WITH_TYPE"] = 2] = "MWP_WITH_TYPE";
        ReturnType[ReturnType["OTHER"] = 3] = "OTHER";
    })(ReturnType || (ReturnType = {}));
    /** Whether the resolved value map represents a ModuleWithProviders object */
    function isModuleWithProvidersType(value) {
        var ngModule = value.has('ngModule');
        var providers = value.has('providers');
        return ngModule && (value.size === 1 || (providers && value.size === 2));
    }
    function isStatic(node) {
        return node.modifiers !== undefined &&
            node.modifiers.some(function (mod) { return mod.kind === ts.SyntaxKind.StaticKeyword; });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyLWNsaS9zcmMvbmd0c2MvbW9kdWxld2l0aHByb3ZpZGVycy9zcmMvc2Nhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCw4Q0FBbUc7SUFDbkcsK0JBQWlDO0lBRWpDLG1FQUF1RTtJQVF2RTtRQUNFLG9DQUNZLElBQW9CLEVBQVUsU0FBMkIsRUFDekQsT0FBeUI7WUFEekIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7WUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtZQUN6RCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUFHLENBQUM7UUFFekMseUNBQUksR0FBSixVQUFLLEVBQWlCLEVBQUUsR0FBZTs7O2dCQUNyQyxLQUFtQixJQUFBLEtBQUEsaUJBQUEsRUFBRSxDQUFDLFVBQVUsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBN0IsSUFBTSxJQUFJLFdBQUE7b0JBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2hDOzs7Ozs7Ozs7UUFDSCxDQUFDO1FBRU8sbURBQWMsR0FBdEIsVUFBdUIsR0FBZSxFQUFFLElBQWtCOztZQUN4RCw0RkFBNEY7WUFDNUYsMkZBQTJGO1lBQzNGLHdDQUF3QztZQUN4QyxFQUFFO1lBQ0YsZUFBZTtZQUNmLGFBQWE7WUFDYixFQUFFO1lBQ0YsK0ZBQStGO1lBQy9GLGtCQUFrQjtZQUNsQixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVM7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO1lBRXpF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bnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0V4cHJlc3Npb25UeXBlLCBFeHRlcm5hbEV4cHIsIFIzSWRlbnRpZmllcnMgYXMgSWRlbnRpZmllcnMsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyJztcbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge0ltcG9ydEZsYWdzLCBSZWZlcmVuY2UsIFJlZmVyZW5jZUVtaXR0ZXJ9IGZyb20gJy4uLy4uL2ltcG9ydHMnO1xuaW1wb3J0IHtQYXJ0aWFsRXZhbHVhdG9yLCBSZXNvbHZlZFZhbHVlTWFwfSBmcm9tICcuLi8uLi9wYXJ0aWFsX2V2YWx1YXRvcic7XG5pbXBvcnQge1JlZmxlY3Rpb25Ib3N0fSBmcm9tICcuLi8uLi9yZWZsZWN0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBEdHNIYW5kbGVyIHtcbiAgYWRkVHlwZVJlcGxhY2VtZW50KG5vZGU6IHRzLkRlY2xhcmF0aW9uLCB0eXBlOiBUeXBlKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIE1vZHVsZVdpdGhQcm92aWRlcnNTY2FubmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGhvc3Q6IFJlZmxlY3Rpb25Ib3N0LCBwcml2YXRlIGV2YWx1YXRvcjogUGFydGlhbEV2YWx1YXRvcixcbiAgICAgIHByaXZhdGUgZW1pdHRlcjogUmVmZXJlbmNlRW1pdHRlcikge31cblxuICBzY2FuKHNmOiB0cy5Tb3VyY2VGaWxlLCBkdHM6IER0c0hhbmRsZXIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHN0bXQgb2Ygc2Yuc3RhdGVtZW50cykge1xuICAgICAgdGhpcy52aXNpdFN0YXRlbWVudChkdHMsIHN0bXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmlzaXRTdGF0ZW1lbnQoZHRzOiBEdHNIYW5kbGVyLCBzdG10OiB0cy5TdGF0ZW1lbnQpOiB2b2lkIHtcbiAgICAvLyBEZXRlY3Qgd2hldGhlciBhIHN0YXRlbWVudCBpcyBleHBvcnRlZCwgd2hpY2ggaXMgdXNlZCBhcyBvbmUgb2YgdGhlIGhpbnRzIHdoZXRoZXIgdG8gbG9va1xuICAgIC8vIG1vcmUgY2xvc2VseSBhdCBwb3NzaWJsZSBNV1AgZnVuY3Rpb25zIHdpdGhpbi4gVGhpcyBpcyBhIHN5bnRhY3RpYyBjaGVjaywgbm90IGEgc2VtYW50aWNcbiAgICAvLyBjaGVjaywgc28gaXQgd29uJ3QgZGV0ZWN0IGNhc2VzIGxpa2U6XG4gICAgLy9cbiAgICAvLyB2YXIgWCA9IC4uLjtcbiAgICAvLyBleHBvcnQge1h9XG4gICAgLy9cbiAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsLCBiZWNhdXNlIHRoZSBhbHRlcm5hdGl2ZSBpcyBzbG93IGFuZCB0aGlzIHdpbGwgY2F0Y2ggOTklIG9mIHRoZSBjYXNlcyB3ZVxuICAgIC8vIG5lZWQgdG8gaGFuZGxlLlxuICAgIGNvbnN0IGlzRXhwb3J0ZWQgPSBzdG10Lm1vZGlmaWVycyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIHN0bXQubW9kaWZpZXJzLnNvbWUobW9kID0+IG1vZC5raW5kID09PSB0cy5TeW50YXhLaW5kLkV4cG9ydEtleXdvcmQpO1xuXG4gICAgaWYgKCFpc0V4cG9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihzdG10KSkge1xuICAgICAgZm9yIChjb25zdCBtZW1iZXIgb2Ygc3RtdC5tZW1iZXJzKSB7XG4gICAgICAgIGlmICghdHMuaXNNZXRob2REZWNsYXJhdGlvbihtZW1iZXIpIHx8ICFpc1N0YXRpYyhtZW1iZXIpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpc2l0RnVuY3Rpb25Pck1ldGhvZERlY2xhcmF0aW9uKGR0cywgbWVtYmVyKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihzdG10KSkge1xuICAgICAgdGhpcy52aXNpdEZ1bmN0aW9uT3JNZXRob2REZWNsYXJhdGlvbihkdHMsIHN0bXQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdmlzaXRGdW5jdGlvbk9yTWV0aG9kRGVjbGFyYXRpb24oXG4gICAgICBkdHM6IER0c0hhbmRsZXIsIGRlY2w6IHRzLk1ldGhvZERlY2xhcmF0aW9ufHRzLkZ1bmN0aW9uRGVjbGFyYXRpb24pOiB2b2lkIHtcbiAgICAvLyBGaXJzdCwgc29tZSBzYW5pdHkuIFRoaXMgc2hvdWxkIGhhdmUgYSBtZXRob2QgYm9keSB3aXRoIGEgc2luZ2xlIHJldHVybiBzdGF0ZW1lbnQuXG4gICAgaWYgKGRlY2wuYm9keSA9PT0gdW5kZWZpbmVkIHx8IGRlY2wuYm9keS5zdGF0ZW1lbnRzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXRTdG10ID0gZGVjbC5ib2R5LnN0YXRlbWVudHNbMF07XG4gICAgaWYgKCF0cy5pc1JldHVyblN0YXRlbWVudChyZXRTdG10KSB8fCByZXRTdG10LmV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZXRWYWx1ZSA9IHJldFN0bXQuZXhwcmVzc2lvbjtcblxuICAgIC8vIE5vdywgbG9vayBhdCB0aGUgcmV0dXJuIHR5cGUgb2YgdGhlIG1ldGhvZC4gTWF5YmUgYmFpbCBpZiB0aGUgdHlwZSBpcyBhbHJlYWR5IG1hcmtlZCwgb3IgaWZcbiAgICAvLyBpdCdzIGluY29tcGF0aWJsZSB3aXRoIGEgTVdQIGZ1bmN0aW9uLlxuICAgIGNvbnN0IHJldHVyblR5cGUgPSB0aGlzLnJldHVyblR5cGVPZihkZWNsKTtcbiAgICBpZiAocmV0dXJuVHlwZSA9PT0gUmV0dXJuVHlwZS5PVEhFUiB8fCByZXR1cm5UeXBlID09PSBSZXR1cm5UeXBlLk1XUF9XSVRIX1RZUEUpIHtcbiAgICAgIC8vIERvbid0IHByb2Nlc3MgdGhpcyBkZWNsYXJhdGlvbiwgaXQgZWl0aGVyIGFscmVhZHkgZGVjbGFyZXMgdGhlIHJpZ2h0IHJldHVybiB0eXBlLCBvciBhblxuICAgICAgLy8gaW5jb21wYXRpYmxlIG9uZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZXZhbHVhdG9yLmV2YWx1YXRlKHJldFZhbHVlKTtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE1hcCkgfHwgIXZhbHVlLmhhcygnbmdNb2R1bGUnKSkge1xuICAgICAgLy8gVGhlIHJldHVybiB2YWx1ZSBkb2VzIG5vdCBwcm92aWRlIHN1ZmZpY2llbnQgaW5mb3JtYXRpb24gdG8gYmUgYWJsZSB0byBhZGQgYSBnZW5lcmljIHR5cGUuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJldHVyblR5cGUgPT09IFJldHVyblR5cGUuSU5GRVJSRUQgJiYgIWlzTW9kdWxlV2l0aFByb3ZpZGVyc1R5cGUodmFsdWUpKSB7XG4gICAgICAvLyBUaGUgcmV0dXJuIHR5cGUgaXMgaW5mZXJyZWQgYnV0IHRoZSByZXR1cm5lZCBvYmplY3QgaXMgbm90IG9mIHRoZSBjb3JyZWN0IHNoYXBlLCBzbyB3ZVxuICAgICAgLy8gc2hvdWxkbidzIG1vZGlmeSB0aGUgcmV0dXJuIHR5cGUgdG8gYmVjb21lIGBNb2R1bGVXaXRoUHJvdmlkZXJzYC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgcmV0dXJuIHR5cGUgaGFzIGJlZW4gdmVyaWZpZWQgdG8gcmVwcmVzZW50IHRoZSBgTW9kdWxlV2l0aFByb3ZpZGVyc2AgdHlwZSwgYnV0IGVpdGhlciB0aGVcbiAgICAvLyByZXR1cm4gdHlwZSBpcyBpbmZlcnJlZCBvciB0aGUgZ2VuZXJpYyB0eXBlIGFyZ3VtZW50IGlzIG1pc3NpbmcuIEluIGJvdGggY2FzZXMsIGEgbmV3IHJldHVyblxuICAgIC8vIHR5cGUgaXMgY3JlYXRlZCB3aGVyZSB0aGUgYG5nTW9kdWxlYCB0eXBlIGlzIGluY2x1ZGVkIGFzIGdlbmVyaWMgdHlwZSBhcmd1bWVudC5cbiAgICBjb25zdCBuZ01vZHVsZSA9IHZhbHVlLmdldCgnbmdNb2R1bGUnKTtcbiAgICBpZiAoIShuZ01vZHVsZSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkgfHwgIXRzLmlzQ2xhc3NEZWNsYXJhdGlvbihuZ01vZHVsZS5ub2RlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5nTW9kdWxlRXhwciA9XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KG5nTW9kdWxlLCBkZWNsLmdldFNvdXJjZUZpbGUoKSwgSW1wb3J0RmxhZ3MuRm9yY2VOZXdJbXBvcnQpO1xuICAgIGNvbnN0IG5nTW9kdWxlVHlwZSA9IG5ldyBFeHByZXNzaW9uVHlwZShuZ01vZHVsZUV4cHIpO1xuICAgIGNvbnN0IG13cE5nVHlwZSA9IG5ldyBFeHByZXNzaW9uVHlwZShcbiAgICAgICAgbmV3IEV4dGVybmFsRXhwcihJZGVudGlmaWVycy5Nb2R1bGVXaXRoUHJvdmlkZXJzKSwgLyogbW9kaWZpZXJzICovIG51bGwsIFtuZ01vZHVsZVR5cGVdKTtcblxuICAgIGR0cy5hZGRUeXBlUmVwbGFjZW1lbnQoZGVjbCwgbXdwTmdUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmV0dXJuVHlwZU9mKGRlY2w6IHRzLkZ1bmN0aW9uRGVjbGFyYXRpb258dHMuTWV0aG9kRGVjbGFyYXRpb258XG4gICAgICAgICAgICAgICAgICAgICAgIHRzLlZhcmlhYmxlRGVjbGFyYXRpb24pOiBSZXR1cm5UeXBlIHtcbiAgICBpZiAoZGVjbC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBSZXR1cm5UeXBlLklORkVSUkVEO1xuICAgIH0gZWxzZSBpZiAoIXRzLmlzVHlwZVJlZmVyZW5jZU5vZGUoZGVjbC50eXBlKSkge1xuICAgICAgcmV0dXJuIFJldHVyblR5cGUuT1RIRVI7XG4gICAgfVxuXG4gICAgLy8gVHJ5IHRvIGZpZ3VyZSBvdXQgaWYgdGhlIHR5cGUgaXMgb2YgYSBmYW1pbGlhciBmb3JtLCBzb21ldGhpbmcgdGhhdCBsb29rcyBsaWtlIGl0IHdhc1xuICAgIC8vIGltcG9ydGVkLlxuICAgIGxldCB0eXBlSWQ6IHRzLklkZW50aWZpZXI7XG4gICAgaWYgKHRzLmlzSWRlbnRpZmllcihkZWNsLnR5cGUudHlwZU5hbWUpKSB7XG4gICAgICAvLyBkZWY6IE1vZHVsZVdpdGhQcm92aWRlcnNcbiAgICAgIHR5cGVJZCA9IGRlY2wudHlwZS50eXBlTmFtZTtcbiAgICB9IGVsc2UgaWYgKHRzLmlzUXVhbGlmaWVkTmFtZShkZWNsLnR5cGUudHlwZU5hbWUpICYmIHRzLmlzSWRlbnRpZmllcihkZWNsLnR5cGUudHlwZU5hbWUubGVmdCkpIHtcbiAgICAgIC8vIGRlZjogaTAuTW9kdWxlV2l0aFByb3ZpZGVyc1xuICAgICAgdHlwZUlkID0gZGVjbC50eXBlLnR5cGVOYW1lLnJpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUmV0dXJuVHlwZS5PVEhFUjtcbiAgICB9XG5cbiAgICBjb25zdCBpbXBvcnREZWNsID0gdGhpcy5ob3N0LmdldEltcG9ydE9mSWRlbnRpZmllcih0eXBlSWQpO1xuICAgIGlmIChpbXBvcnREZWNsID09PSBudWxsIHx8IGltcG9ydERlY2wuZnJvbSAhPT0gJ0Bhbmd1bGFyL2NvcmUnIHx8XG4gICAgICAgIGltcG9ydERlY2wubmFtZSAhPT0gJ01vZHVsZVdpdGhQcm92aWRlcnMnKSB7XG4gICAgICByZXR1cm4gUmV0dXJuVHlwZS5PVEhFUjtcbiAgICB9XG5cbiAgICBpZiAoZGVjbC50eXBlLnR5cGVBcmd1bWVudHMgPT09IHVuZGVmaW5lZCB8fCBkZWNsLnR5cGUudHlwZUFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFRoZSByZXR1cm4gdHlwZSBpcyBpbmRlZWQgTW9kdWxlV2l0aFByb3ZpZGVycywgYnV0IG5vIGdlbmVyaWMgdHlwZSBwYXJhbWV0ZXIgd2FzIGZvdW5kLlxuICAgICAgcmV0dXJuIFJldHVyblR5cGUuTVdQX05PX1RZUEU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSByZXR1cm4gdHlwZSBpcyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBhbmQgdGhlIHVzZXIgaGFzIGFscmVhZHkgc3BlY2lmaWVkIGEgZ2VuZXJpYyB0eXBlLlxuICAgICAgcmV0dXJuIFJldHVyblR5cGUuTVdQX1dJVEhfVFlQRTtcbiAgICB9XG4gIH1cbn1cblxuZW51bSBSZXR1cm5UeXBlIHtcbiAgSU5GRVJSRUQsXG4gIE1XUF9OT19UWVBFLFxuICBNV1BfV0lUSF9UWVBFLFxuICBPVEhFUixcbn1cblxuLyoqIFdoZXRoZXIgdGhlIHJlc29sdmVkIHZhbHVlIG1hcCByZXByZXNlbnRzIGEgTW9kdWxlV2l0aFByb3ZpZGVycyBvYmplY3QgKi9cbmZ1bmN0aW9uIGlzTW9kdWxlV2l0aFByb3ZpZGVyc1R5cGUodmFsdWU6IFJlc29sdmVkVmFsdWVNYXApOiBib29sZWFuIHtcbiAgY29uc3QgbmdNb2R1bGUgPSB2YWx1ZS5oYXMoJ25nTW9kdWxlJyk7XG4gIGNvbnN0IHByb3ZpZGVycyA9IHZhbHVlLmhhcygncHJvdmlkZXJzJyk7XG5cbiAgcmV0dXJuIG5nTW9kdWxlICYmICh2YWx1ZS5zaXplID09PSAxIHx8IChwcm92aWRlcnMgJiYgdmFsdWUuc2l6ZSA9PT0gMikpO1xufVxuXG5mdW5jdGlvbiBpc1N0YXRpYyhub2RlOiB0cy5Ob2RlKTogYm9vbGVhbiB7XG4gIHJldHVybiBub2RlLm1vZGlmaWVycyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBub2RlLm1vZGlmaWVycy5zb21lKG1vZCA9PiBtb2Qua2luZCA9PT0gdHMuU3ludGF4S2luZC5TdGF0aWNLZXl3b3JkKTtcbn1cbiJdfQ==
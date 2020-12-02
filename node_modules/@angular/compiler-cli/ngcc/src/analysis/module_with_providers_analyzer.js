(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/compiler-cli/ngcc/src/analysis/module_with_providers_analyzer", ["require", "exports", "typescript", "@angular/compiler-cli/src/ngtsc/imports", "@angular/compiler-cli/src/ngtsc/partial_evaluator", "@angular/compiler-cli/src/ngtsc/reflection", "@angular/compiler-cli/ngcc/src/utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var ts = require("typescript");
    var imports_1 = require("@angular/compiler-cli/src/ngtsc/imports");
    var partial_evaluator_1 = require("@angular/compiler-cli/src/ngtsc/partial_evaluator");
    var reflection_1 = require("@angular/compiler-cli/src/ngtsc/reflection");
    var utils_1 = require("@angular/compiler-cli/ngcc/src/utils");
    exports.ModuleWithProvidersAnalyses = Map;
    var ModuleWithProvidersAnalyzer = /** @class */ (function () {
        function ModuleWithProvidersAnalyzer(host, typeChecker, referencesRegistry, processDts) {
            this.host = host;
            this.typeChecker = typeChecker;
            this.referencesRegistry = referencesRegistry;
            this.processDts = processDts;
            this.evaluator = new partial_evaluator_1.PartialEvaluator(this.host, this.typeChecker, null);
        }
        ModuleWithProvidersAnalyzer.prototype.analyzeProgram = function (program) {
            var _this = this;
            var analyses = new exports.ModuleWithProvidersAnalyses();
            var rootFiles = this.getRootFiles(program);
            rootFiles.forEach(function (f) {
                var fns = _this.getModuleWithProvidersFunctions(f);
                fns && fns.forEach(function (fn) {
                    if (fn.ngModule.bestGuessOwningModule === null) {
                        // Record the usage of an internal module as it needs to become an exported symbol
                        _this.referencesRegistry.add(fn.ngModule.node, new imports_1.Reference(fn.ngModule.node));
                    }
                    // Only when processing the dts files do we need to determine which declaration to update.
                    if (_this.processDts) {
                        var dtsFn = _this.getDtsModuleWithProvidersFunction(fn);
                        var dtsFnType = dtsFn.declaration.type;
                        var typeParam = dtsFnType && ts.isTypeReferenceNode(dtsFnType) &&
                            dtsFnType.typeArguments && dtsFnType.typeArguments[0] ||
                            null;
                        if (!typeParam || isAnyKeyword(typeParam)) {
                            var dtsFile = dtsFn.declaration.getSourceFile();
                            var analysis = analyses.has(dtsFile) ? analyses.get(dtsFile) : [];
                            analysis.push(dtsFn);
                            analyses.set(dtsFile, analysis);
                        }
                    }
                });
            });
            return analyses;
        };
        ModuleWithProvidersAnalyzer.prototype.getRootFiles = function (program) {
            return program.getRootFileNames().map(function (f) { return program.getSourceFile(f); }).filter(utils_1.isDefined);
        };
        ModuleWithProvidersAnalyzer.prototype.getModuleWithProvidersFunctions = function (f) {
            var _this = this;
            var exports = this.host.getExportsOfModule(f);
            if (!exports)
                return [];
            var infos = [];
            exports.forEach(function (declaration) {
                if (declaration.node === null) {
                    return;
                }
                if (_this.host.isClass(declaration.node)) {
                    _this.host.getMembersOfClass(declaration.node).forEach(function (member) {
                        if (member.isStatic) {
                            var info = _this.parseForModuleWithProviders(member.name, member.node, member.implementation, declaration.node);
                            if (info) {
                                infos.push(info);
                            }
                        }
                    });
                }
                else {
                    if (utils_1.hasNameIdentifier(declaration.node)) {
                        var info = _this.parseForModuleWithProviders(declaration.node.name.text, declaration.node);
                        if (info) {
                            infos.push(info);
                        }
                    }
                }
            });
            return infos;
        };
        /**
         * Parse a function/method node (or its implementation), to see if it returns a
         * `ModuleWithProviders` object.
         * @param name The name of the function.
         * @param node the node to check - this could be a function, a method or a variable declaration.
         * @param implementation the actual function expression if `node` is a variable declaration.
         * @param container the class that contains the function, if it is a method.
         * @returns info about the function if it does return a `ModuleWithProviders` object; `null`
         * otherwise.
         */
        ModuleWithProvidersAnalyzer.prototype.parseForModuleWithProviders = function (name, node, implementation, container) {
            if (implementation === void 0) { implementation = node; }
            if (container === void 0) { container = null; }
            if (implementation === null ||
                (!ts.isFunctionDeclaration(implementation) && !ts.isMethodDeclaration(implementation) &&
                    !ts.isFunctionExpression(implementation))) {
                return null;
            }
            var declaration = implementation;
            var definition = this.host.getDefinitionOfFunction(declaration);
            if (definition === null) {
                return null;
            }
            var body = definition.body;
            if (body === null || body.length === 0) {
                return null;
            }
            // Get hold of the return statement expression for the function
            var lastStatement = body[body.length - 1];
            if (!ts.isReturnStatement(lastStatement) || lastStatement.expression === undefined) {
                return null;
            }
            // Evaluate this expression and extract the `ngModule` reference
            var result = this.evaluator.evaluate(lastStatement.expression);
            if (!(result instanceof Map) || !result.has('ngModule')) {
                return null;
            }
            var ngModuleRef = result.get('ngModule');
            if (!(ngModuleRef instanceof imports_1.Reference)) {
                return null;
            }
            if (!reflection_1.isNamedClassDeclaration(ngModuleRef.node) &&
                !reflection_1.isNamedVariableDeclaration(ngModuleRef.node)) {
                throw new Error("The identity given by " + ngModuleRef.debugName + " referenced in \"" + declaration.getText() + "\" doesn't appear to be a \"class\" declaration.");
            }
            var ngModule = ngModuleRef;
            return { name: name, ngModule: ngModule, declaration: declaration, container: container };
        };
        ModuleWithProvidersAnalyzer.prototype.getDtsModuleWithProvidersFunction = function (fn) {
            var dtsFn = null;
            var containerClass = fn.container && this.host.getClassSymbol(fn.container);
            if (containerClass) {
                var dtsClass = this.host.getDtsDeclaration(containerClass.declaration.valueDeclaration);
                // Get the declaration of the matching static method
                dtsFn = dtsClass && ts.isClassDeclaration(dtsClass) ?
                    dtsClass.members.find(function (member) { return ts.isMethodDeclaration(member) && ts.isIdentifier(member.name) &&
                        member.name.text === fn.name; }) :
                    null;
            }
            else {
                dtsFn = this.host.getDtsDeclaration(fn.declaration);
            }
            if (!dtsFn) {
                throw new Error("Matching type declaration for " + fn.declaration.getText() + " is missing");
            }
            if (!isFunctionOrMethod(dtsFn)) {
                throw new Error("Matching type declaration for " + fn.declaration.getText() + " is not a function: " + dtsFn.getText());
            }
            var container = containerClass ? containerClass.declaration.valueDeclaration : null;
            var ngModule = this.resolveNgModuleReference(fn);
            return { name: fn.name, container: container, declaration: dtsFn, ngModule: ngModule };
        };
        ModuleWithProvidersAnalyzer.prototype.resolveNgModuleReference = function (fn) {
            var ngModule = fn.ngModule;
            // For external module references, use the declaration as is.
            if (ngModule.bestGuessOwningModule !== null) {
                return ngModule;
            }
            // For internal (non-library) module references, redirect the module's value declaration
            // to its type declaration.
            var dtsNgModule = this.host.getDtsDeclaration(ngModule.node);
            if (!dtsNgModule) {
                throw new Error("No typings declaration can be found for the referenced NgModule class in " + fn.declaration.getText() + ".");
            }
            if (!reflection_1.isNamedClassDeclaration(dtsNgModule)) {
                throw new Error("The referenced NgModule in " + fn.declaration
                    .getText() + " is not a named class declaration in the typings program; instead we get " + dtsNgModule.getText());
            }
            return new imports_1.Reference(dtsNgModule, null);
        };
        return ModuleWithProvidersAnalyzer;
    }());
    exports.ModuleWithProvidersAnalyzer = ModuleWithProvidersAnalyzer;
    function isFunctionOrMethod(declaration) {
        return ts.isFunctionDeclaration(declaration) || ts.isMethodDeclaration(declaration);
    }
    function isAnyKeyword(typeParam) {
        return typeParam.kind === ts.SyntaxKind.AnyKeyword;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlX3dpdGhfcHJvdmlkZXJzX2FuYWx5emVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXItY2xpL25nY2Mvc3JjL2FuYWx5c2lzL21vZHVsZV93aXRoX3Byb3ZpZGVyc19hbmFseXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBOzs7Ozs7T0FNRztJQUNILCtCQUFpQztJQUdqQyxtRUFBcUQ7SUFDckQsdUZBQXNFO0lBQ3RFLHlFQUFvSDtJQUVwSCw4REFBc0Q7SUEyQnpDLFFBQUEsMkJBQTJCLEdBQUcsR0FBRyxDQUFDO0lBRS9DO1FBR0UscUNBQ1ksSUFBd0IsRUFBVSxXQUEyQixFQUM3RCxrQkFBc0MsRUFBVSxVQUFtQjtZQURuRSxTQUFJLEdBQUosSUFBSSxDQUFvQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtZQUM3RCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1lBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUztZQUp2RSxjQUFTLEdBQUcsSUFBSSxvQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFJTSxDQUFDO1FBRW5GLG9EQUFjLEdBQWQsVUFBZSxPQUFtQjtZQUFsQyxpQkE0QkM7WUEzQkMsSUFBTSxRQUFRLEdBQWdDLElBQUksbUNBQTJCLEVBQUUsQ0FBQztZQUNoRixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNqQixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTtvQkFDbkIsSUFBSSxFQUFFLENB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QUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxTQUFTLFlBQVksQ0FBQyxTQUFzQjtRQUMxQyxPQUFPLFNBQVMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuXG5pbXBvcnQge1JlZmVyZW5jZXNSZWdpc3RyeX0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL2Fubm90YXRpb25zJztcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tICcuLi8uLi8uLi9zcmMvbmd0c2MvaW1wb3J0cyc7XG5pbXBvcnQge1BhcnRpYWxFdmFsdWF0b3J9IGZyb20gJy4uLy4uLy4uL3NyYy9uZ3RzYy9wYXJ0aWFsX2V2YWx1YXRvcic7XG5pbXBvcnQge0NsYXNzRGVjbGFyYXRpb24sIGlzTmFtZWRDbGFzc0RlY2xhcmF0aW9uLCBpc05hbWVkVmFyaWFibGVEZWNsYXJhdGlvbn0gZnJvbSAnLi4vLi4vLi4vc3JjL25ndHNjL3JlZmxlY3Rpb24nO1xuaW1wb3J0IHtOZ2NjUmVmbGVjdGlvbkhvc3R9IGZyb20gJy4uL2hvc3QvbmdjY19ob3N0JztcbmltcG9ydCB7aGFzTmFtZUlkZW50aWZpZXIsIGlzRGVmaW5lZH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIEEgc3RydWN0dXJlIHJldHVybmVkIGZyb20gYGdldE1vZHVsZVdpdGhQcm92aWRlcnNGdW5jdGlvbnMoKWAgdGhhdCBkZXNjcmliZXMgZnVuY3Rpb25zXG4gKiB0aGF0IHJldHVybiBNb2R1bGVXaXRoUHJvdmlkZXJzIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlV2l0aFByb3ZpZGVyc0luZm8ge1xuICAvKipcbiAgICogVGhlIG5hbWUgb2YgdGhlIGRlY2xhcmVkIGZ1bmN0aW9uLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRlY2xhcmF0aW9uIG9mIHRoZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGBNb2R1bGVXaXRoUHJvdmlkZXJzYCBvYmplY3QuXG4gICAqL1xuICBkZWNsYXJhdGlvbjogdHMuU2lnbmF0dXJlRGVjbGFyYXRpb247XG4gIC8qKlxuICAgKiBEZWNsYXJhdGlvbiBvZiB0aGUgY29udGFpbmluZyBjbGFzcyAoaWYgdGhpcyBpcyBhIG1ldGhvZClcbiAgICovXG4gIGNvbnRhaW5lcjogdHMuRGVjbGFyYXRpb258bnVsbDtcbiAgLyoqXG4gICAqIFRoZSBkZWNsYXJhdGlvbiBvZiB0aGUgY2xhc3MgdGhhdCB0aGUgYG5nTW9kdWxlYCBwcm9wZXJ0eSBvbiB0aGUgYE1vZHVsZVdpdGhQcm92aWRlcnNgIG9iamVjdFxuICAgKiByZWZlcnMgdG8uXG4gICAqL1xuICBuZ01vZHVsZTogUmVmZXJlbmNlPENsYXNzRGVjbGFyYXRpb24+O1xufVxuXG5leHBvcnQgdHlwZSBNb2R1bGVXaXRoUHJvdmlkZXJzQW5hbHlzZXMgPSBNYXA8dHMuU291cmNlRmlsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc0luZm9bXT47XG5leHBvcnQgY29uc3QgTW9kdWxlV2l0aFByb3ZpZGVyc0FuYWx5c2VzID0gTWFwO1xuXG5leHBvcnQgY2xhc3MgTW9kdWxlV2l0aFByb3ZpZGVyc0FuYWx5emVyIHtcbiAgcHJpdmF0ZSBldmFsdWF0b3IgPSBuZXcgUGFydGlhbEV2YWx1YXRvcih0aGlzLmhvc3QsIHRoaXMudHlwZUNoZWNrZXIsIG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBob3N0OiBOZ2NjUmVmbGVjdGlvbkhvc3QsIHByaXZhdGUgdHlwZUNoZWNrZXI6IHRzLlR5cGVDaGVja2VyLFxuICAgICAgcHJpdmF0ZSByZWZlcmVuY2VzUmVnaXN0cnk6IFJlZmVyZW5jZXNSZWdpc3RyeSwgcHJpdmF0ZSBwcm9jZXNzRHRzOiBib29sZWFuKSB7fVxuXG4gIGFuYWx5emVQcm9ncmFtKHByb2dyYW06IHRzLlByb2dyYW0pOiBNb2R1bGVXaXRoUHJvdmlkZXJzQW5hbHlzZXMge1xuICAgIGNvbnN0IGFuYWx5c2VzOiBNb2R1bGVXaXRoUHJvdmlkZXJzQW5hbHlzZXMgPSBuZXcgTW9kdWxlV2l0aFByb3ZpZGVyc0FuYWx5c2VzKCk7XG4gICAgY29uc3Qgcm9vdEZpbGVzID0gdGhpcy5nZXRSb290RmlsZXMocHJvZ3JhbSk7XG4gICAgcm9vdEZpbGVzLmZvckVhY2goZiA9PiB7XG4gICAgICBjb25zdCBmbnMgPSB0aGlzLmdldE1vZHVsZVdpdGhQcm92aWRlcnNGdW5jdGlvbnMoZik7XG4gICAgICBmbnMgJiYgZm5zLmZvckVhY2goZm4gPT4ge1xuICAgICAgICBpZiAoZm4ubmdNb2R1bGUuYmVzdEd1ZXNzT3duaW5nTW9kdWxlID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gUmVjb3JkIHRoZSB1c2FnZSBvZiBhbiBpbnRlcm5hbCBtb2R1bGUgYXMgaXQgbmVlZHMgdG8gYmVjb21lIGFuIGV4cG9ydGVkIHN5bWJvbFxuICAgICAgICAgIHRoaXMucmVmZXJlbmNlc1JlZ2lzdHJ5LmFkZChmbi5uZ01vZHVsZS5ub2RlLCBuZXcgUmVmZXJlbmNlKGZuLm5nTW9kdWxlLm5vZGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgd2hlbiBwcm9jZXNzaW5nIHRoZSBkdHMgZmlsZXMgZG8gd2UgbmVlZCB0byBkZXRlcm1pbmUgd2hpY2ggZGVjbGFyYXRpb24gdG8gdXBkYXRlLlxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzRHRzKSB7XG4gICAgICAgICAgY29uc3QgZHRzRm4gPSB0aGlzLmdldER0c01vZHVsZVdpdGhQcm92aWRlcnNGdW5jdGlvbihmbik7XG4gICAgICAgICAgY29uc3QgZHRzRm5UeXBlID0gZHRzRm4uZGVjbGFyYXRpb24udHlwZTtcbiAgICAgICAgICBjb25zdCB0eXBlUGFyYW0gPSBkdHNGblR5cGUgJiYgdHMuaXNUeXBlUmVmZXJlbmNlTm9kZShkdHNGblR5cGUpICYmXG4gICAgICAgICAgICAgICAgICBkdHNGblR5cGUudHlwZUFyZ3VtZW50cyAmJiBkdHNGblR5cGUudHlwZUFyZ3VtZW50c1swXSB8fFxuICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgIGlmICghdHlwZVBhcmFtIHx8IGlzQW55S2V5d29yZCh0eXBlUGFyYW0pKSB7XG4gICAgICAgICAgICBjb25zdCBkdHNGaWxlID0gZHRzRm4uZGVjbGFyYXRpb24uZ2V0U291cmNlRmlsZSgpO1xuICAgICAgICAgICAgY29uc3QgYW5hbHlzaXMgPSBhbmFseXNlcy5oYXMoZHRzRmlsZSkgPyBhbmFseXNlcy5nZXQoZHRzRmlsZSkhIDogW107XG4gICAgICAgICAgICBhbmFseXNpcy5wdXNoKGR0c0ZuKTtcbiAgICAgICAgICAgIGFuYWx5c2VzLnNldChkdHNGaWxlLCBhbmFseXNpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYW5hbHlzZXM7XG4gIH1cblxuICBwcml2YXRlIGdldFJvb3RGaWxlcyhwcm9ncmFtOiB0cy5Qcm9ncmFtKTogdHMuU291cmNlRmlsZVtdIHtcbiAgICByZXR1cm4gcHJvZ3JhbS5nZXRSb290RmlsZU5hbWVzKCkubWFwKGYgPT4gcHJvZ3JhbS5nZXRTb3VyY2VGaWxlKGYpKS5maWx0ZXIoaXNEZWZpbmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TW9kdWxlV2l0aFByb3ZpZGVyc0Z1bmN0aW9ucyhmOiB0cy5Tb3VyY2VGaWxlKTogTW9kdWxlV2l0aFByb3ZpZGVyc0luZm9bXSB7XG4gICAgY29uc3QgZXhwb3J0cyA9IHRoaXMuaG9zdC5nZXRFeHBvcnRzT2ZNb2R1bGUoZik7XG4gICAgaWYgKCFleHBvcnRzKSByZXR1cm4gW107XG4gICAgY29uc3QgaW5mb3M6IE1vZHVsZVdpdGhQcm92aWRlcnNJbmZvW10gPSBbXTtcbiAgICBleHBvcnRzLmZvckVhY2goKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBpZiAoZGVjbGFyYXRpb24ubm9kZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5ob3N0LmlzQ2xhc3MoZGVjbGFyYXRpb24ubm9kZSkpIHtcbiAgICAgICAgdGhpcy5ob3N0LmdldE1lbWJlcnNPZkNsYXNzKGRlY2xhcmF0aW9uLm5vZGUpLmZvckVhY2gobWVtYmVyID0+IHtcbiAgICAgICAgICBpZiAobWVtYmVyLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5wYXJzZUZvck1vZHVsZVdpdGhQcm92aWRlcnMoXG4gICAgICAgICAgICAgICAgbWVtYmVyLm5hbWUsIG1lbWJlci5ub2RlLCBtZW1iZXIuaW1wbGVtZW50YXRpb24sIGRlY2xhcmF0aW9uLm5vZGUpO1xuICAgICAgICAgICAgaWYgKGluZm8pIHtcbiAgICAgICAgICAgICAgaW5mb3MucHVzaChpbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGhhc05hbWVJZGVudGlmaWVyKGRlY2xhcmF0aW9uLm5vZGUpKSB7XG4gICAgICAgICAgY29uc3QgaW5mbyA9XG4gICAgICAgICAgICAgIHRoaXMucGFyc2VGb3JNb2R1bGVXaXRoUHJvdmlkZXJzKGRlY2xhcmF0aW9uLm5vZGUubmFtZS50ZXh0LCBkZWNsYXJhdGlvbi5ub2RlKTtcbiAgICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaW5mb3MucHVzaChpbmZvKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaW5mb3M7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBmdW5jdGlvbi9tZXRob2Qgbm9kZSAob3IgaXRzIGltcGxlbWVudGF0aW9uKSwgdG8gc2VlIGlmIGl0IHJldHVybnMgYVxuICAgKiBgTW9kdWxlV2l0aFByb3ZpZGVyc2Agb2JqZWN0LlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBub2RlIHRoZSBub2RlIHRvIGNoZWNrIC0gdGhpcyBjb3VsZCBiZSBhIGZ1bmN0aW9uLCBhIG1ldGhvZCBvciBhIHZhcmlhYmxlIGRlY2xhcmF0aW9uLlxuICAgKiBAcGFyYW0gaW1wbGVtZW50YXRpb24gdGhlIGFjdHVhbCBmdW5jdGlvbiBleHByZXNzaW9uIGlmIGBub2RlYCBpcyBhIHZhcmlhYmxlIGRlY2xhcmF0aW9uLlxuICAgKiBAcGFyYW0gY29udGFpbmVyIHRoZSBjbGFzcyB0aGF0IGNvbnRhaW5zIHRoZSBmdW5jdGlvbiwgaWYgaXQgaXMgYSBtZXRob2QuXG4gICAqIEByZXR1cm5zIGluZm8gYWJvdXQgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgcmV0dXJuIGEgYE1vZHVsZVdpdGhQcm92aWRlcnNgIG9iamVjdDsgYG51bGxgXG4gICAqIG90aGVyd2lzZS5cbiAgICovXG4gIHByaXZhdGUgcGFyc2VGb3JNb2R1bGVXaXRoUHJvdmlkZXJzKFxuICAgICAgbmFtZTogc3RyaW5nLCBub2RlOiB0cy5Ob2RlfG51bGwsIGltcGxlbWVudGF0aW9uOiB0cy5Ob2RlfG51bGwgPSBub2RlLFxuICAgICAgY29udGFpbmVyOiB0cy5EZWNsYXJhdGlvbnxudWxsID0gbnVsbCk6IE1vZHVsZVdpdGhQcm92aWRlcnNJbmZvfG51bGwge1xuICAgIGlmIChpbXBsZW1lbnRhdGlvbiA9PT0gbnVsbCB8fFxuICAgICAgICAoIXRzLmlzRnVuY3Rpb25EZWNsYXJhdGlvbihpbXBsZW1lbnRhdGlvbikgJiYgIXRzLmlzTWV0aG9kRGVjbGFyYXRpb24oaW1wbGVtZW50YXRpb24pICYmXG4gICAgICAgICAhdHMuaXNGdW5jdGlvbkV4cHJlc3Npb24oaW1wbGVtZW50YXRpb24pKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gaW1wbGVtZW50YXRpb247XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuaG9zdC5nZXREZWZpbml0aW9uT2ZGdW5jdGlvbihkZWNsYXJhdGlvbik7XG4gICAgaWYgKGRlZmluaXRpb24gPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBkZWZpbml0aW9uLmJvZHk7XG4gICAgaWYgKGJvZHkgPT09IG51bGwgfHwgYm9keS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEdldCBob2xkIG9mIHRoZSByZXR1cm4gc3RhdGVtZW50IGV4cHJlc3Npb24gZm9yIHRoZSBmdW5jdGlvblxuICAgIGNvbnN0IGxhc3RTdGF0ZW1lbnQgPSBib2R5W2JvZHkubGVuZ3RoIC0gMV07XG4gICAgaWYgKCF0cy5pc1JldHVyblN0YXRlbWVudChsYXN0U3RhdGVtZW50KSB8fCBsYXN0U3RhdGVtZW50LmV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gRXZhbHVhdGUgdGhpcyBleHByZXNzaW9uIGFuZCBleHRyYWN0IHRoZSBgbmdNb2R1bGVgIHJlZmVyZW5jZVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZXZhbHVhdG9yLmV2YWx1YXRlKGxhc3RTdGF0ZW1lbnQuZXhwcmVzc2lvbik7XG4gICAgaWYgKCEocmVzdWx0IGluc3RhbmNlb2YgTWFwKSB8fCAhcmVzdWx0LmhhcygnbmdNb2R1bGUnKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbmdNb2R1bGVSZWYgPSByZXN1bHQuZ2V0KCduZ01vZHVsZScpITtcbiAgICBpZiAoIShuZ01vZHVsZVJlZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghaXNOYW1lZENsYXNzRGVjbGFyYXRpb24obmdNb2R1bGVSZWYubm9kZSkgJiZcbiAgICAgICAgIWlzTmFtZWRWYXJpYWJsZURlY2xhcmF0aW9uKG5nTW9kdWxlUmVmLm5vZGUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBpZGVudGl0eSBnaXZlbiBieSAke25nTW9kdWxlUmVmLmRlYnVnTmFtZX0gcmVmZXJlbmNlZCBpbiBcIiR7XG4gICAgICAgICAgZGVjbGFyYXRpb24hLmdldFRleHQoKX1cIiBkb2Vzbid0IGFwcGVhciB0byBiZSBhIFwiY2xhc3NcIiBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZ01vZHVsZSA9IG5nTW9kdWxlUmVmIGFzIFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPjtcbiAgICByZXR1cm4ge25hbWUsIG5nTW9kdWxlLCBkZWNsYXJhdGlvbiwgY29udGFpbmVyfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RHRzTW9kdWxlV2l0aFByb3ZpZGVyc0Z1bmN0aW9uKGZuOiBNb2R1bGVXaXRoUHJvdmlkZXJzSW5mbyk6IE1vZHVsZVdpdGhQcm92aWRlcnNJbmZvIHtcbiAgICBsZXQgZHRzRm46IHRzLkRlY2xhcmF0aW9ufG51bGwgPSBudWxsO1xuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzID0gZm4uY29udGFpbmVyICYmIHRoaXMuaG9zdC5nZXRDbGFzc1N5bWJvbChmbi5jb250YWluZXIpO1xuICAgIGlmIChjb250YWluZXJDbGFzcykge1xuICAgICAgY29uc3QgZHRzQ2xhc3MgPSB0aGlzLmhvc3QuZ2V0RHRzRGVjbGFyYXRpb24oY29udGFpbmVyQ2xhc3MuZGVjbGFyYXRpb24udmFsdWVEZWNsYXJhdGlvbik7XG4gICAgICAvLyBHZXQgdGhlIGRlY2xhcmF0aW9uIG9mIHRoZSBtYXRjaGluZyBzdGF0aWMgbWV0aG9kXG4gICAgICBkdHNGbiA9IGR0c0NsYXNzICYmIHRzLmlzQ2xhc3NEZWNsYXJhdGlvbihkdHNDbGFzcykgP1xuICAgICAgICAgIGR0c0NsYXNzLm1lbWJlcnMuZmluZChcbiAgICAgICAgICAgICAgbWVtYmVyID0+IHRzLmlzTWV0aG9kRGVjbGFyYXRpb24obWVtYmVyKSAmJiB0cy5pc0lkZW50aWZpZXIobWVtYmVyLm5hbWUpICYmXG4gICAgICAgICAgICAgICAgICBtZW1iZXIubmFtZS50ZXh0ID09PSBmbi5uYW1lKSBhcyB0cy5EZWNsYXJhdGlvbiA6XG4gICAgICAgICAgbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZHRzRm4gPSB0aGlzLmhvc3QuZ2V0RHRzRGVjbGFyYXRpb24oZm4uZGVjbGFyYXRpb24pO1xuICAgIH1cbiAgICBpZiAoIWR0c0ZuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1hdGNoaW5nIHR5cGUgZGVjbGFyYXRpb24gZm9yICR7Zm4uZGVjbGFyYXRpb24uZ2V0VGV4dCgpfSBpcyBtaXNzaW5nYCk7XG4gICAgfVxuICAgIGlmICghaXNGdW5jdGlvbk9yTWV0aG9kKGR0c0ZuKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNYXRjaGluZyB0eXBlIGRlY2xhcmF0aW9uIGZvciAke1xuICAgICAgICAgIGZuLmRlY2xhcmF0aW9uLmdldFRleHQoKX0gaXMgbm90IGEgZnVuY3Rpb246ICR7ZHRzRm4uZ2V0VGV4dCgpfWApO1xuICAgIH1cbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJDbGFzcyA/IGNvbnRhaW5lckNsYXNzLmRlY2xhcmF0aW9uLnZhbHVlRGVjbGFyYXRpb24gOiBudWxsO1xuICAgIGNvbnN0IG5nTW9kdWxlID0gdGhpcy5yZXNvbHZlTmdNb2R1bGVSZWZlcmVuY2UoZm4pO1xuICAgIHJldHVybiB7bmFtZTogZm4ubmFtZSwgY29udGFpbmVyLCBkZWNsYXJhdGlvbjogZHRzRm4sIG5nTW9kdWxlfTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzb2x2ZU5nTW9kdWxlUmVmZXJlbmNlKGZuOiBNb2R1bGVXaXRoUHJvdmlkZXJzSW5mbyk6IFJlZmVyZW5jZTxDbGFzc0RlY2xhcmF0aW9uPiB7XG4gICAgY29uc3QgbmdNb2R1bGUgPSBmbi5uZ01vZHVsZTtcblxuICAgIC8vIEZvciBleHRlcm5hbCBtb2R1bGUgcmVmZXJlbmNlcywgdXNlIHRoZSBkZWNsYXJhdGlvbiBhcyBpcy5cbiAgICBpZiAobmdNb2R1bGUuYmVzdEd1ZXNzT3duaW5nTW9kdWxlICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbmdNb2R1bGU7XG4gICAgfVxuXG4gICAgLy8gRm9yIGludGVybmFsIChub24tbGlicmFyeSkgbW9kdWxlIHJlZmVyZW5jZXMsIHJlZGlyZWN0IHRoZSBtb2R1bGUncyB2YWx1ZSBkZWNsYXJhdGlvblxuICAgIC8vIHRvIGl0cyB0eXBlIGRlY2xhcmF0aW9uLlxuICAgIGNvbnN0IGR0c05nTW9kdWxlID0gdGhpcy5ob3N0LmdldER0c0RlY2xhcmF0aW9uKG5nTW9kdWxlLm5vZGUpO1xuICAgIGlmICghZHRzTmdNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gdHlwaW5ncyBkZWNsYXJhdGlvbiBjYW4gYmUgZm91bmQgZm9yIHRoZSByZWZlcmVuY2VkIE5nTW9kdWxlIGNsYXNzIGluICR7XG4gICAgICAgICAgZm4uZGVjbGFyYXRpb24uZ2V0VGV4dCgpfS5gKTtcbiAgICB9XG4gICAgaWYgKCFpc05hbWVkQ2xhc3NEZWNsYXJhdGlvbihkdHNOZ01vZHVsZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHJlZmVyZW5jZWQgTmdNb2R1bGUgaW4gJHtcbiAgICAgICAgICBmbi5kZWNsYXJhdGlvblxuICAgICAgICAgICAgICAuZ2V0VGV4dCgpfSBpcyBub3QgYSBuYW1lZCBjbGFzcyBkZWNsYXJhdGlvbiBpbiB0aGUgdHlwaW5ncyBwcm9ncmFtOyBpbnN0ZWFkIHdlIGdldCAke1xuICAgICAgICAgIGR0c05nTW9kdWxlLmdldFRleHQoKX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWZlcmVuY2UoZHRzTmdNb2R1bGUsIG51bGwpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gaXNGdW5jdGlvbk9yTWV0aG9kKGRlY2xhcmF0aW9uOiB0cy5EZWNsYXJhdGlvbik6IGRlY2xhcmF0aW9uIGlzIHRzLkZ1bmN0aW9uRGVjbGFyYXRpb258XG4gICAgdHMuTWV0aG9kRGVjbGFyYXRpb24ge1xuICByZXR1cm4gdHMuaXNGdW5jdGlvbkRlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKSB8fCB0cy5pc01ldGhvZERlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKTtcbn1cblxuZnVuY3Rpb24gaXNBbnlLZXl3b3JkKHR5cGVQYXJhbTogdHMuVHlwZU5vZGUpOiB0eXBlUGFyYW0gaXMgdHMuS2V5d29yZFR5cGVOb2RlIHtcbiAgcmV0dXJuIHR5cGVQYXJhbS5raW5kID09PSB0cy5TeW50YXhLaW5kLkFueUtleXdvcmQ7XG59XG4iXX0=
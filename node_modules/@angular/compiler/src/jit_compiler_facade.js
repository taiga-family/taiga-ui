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
        define("@angular/compiler/src/jit_compiler_facade", ["require", "exports", "tslib", "@angular/compiler/src/constant_pool", "@angular/compiler/src/identifiers", "@angular/compiler/src/injectable_compiler_2", "@angular/compiler/src/ml_parser/interpolation_config", "@angular/compiler/src/output/output_ast", "@angular/compiler/src/output/output_jit", "@angular/compiler/src/parse_util", "@angular/compiler/src/render3/r3_factory", "@angular/compiler/src/render3/r3_jit", "@angular/compiler/src/render3/r3_module_compiler", "@angular/compiler/src/render3/r3_pipe_compiler", "@angular/compiler/src/render3/view/compiler", "@angular/compiler/src/render3/view/template", "@angular/compiler/src/resource_loader", "@angular/compiler/src/schema/dom_element_schema_registry"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var constant_pool_1 = require("@angular/compiler/src/constant_pool");
    var identifiers_1 = require("@angular/compiler/src/identifiers");
    var injectable_compiler_2_1 = require("@angular/compiler/src/injectable_compiler_2");
    var interpolation_config_1 = require("@angular/compiler/src/ml_parser/interpolation_config");
    var output_ast_1 = require("@angular/compiler/src/output/output_ast");
    var output_jit_1 = require("@angular/compiler/src/output/output_jit");
    var parse_util_1 = require("@angular/compiler/src/parse_util");
    var r3_factory_1 = require("@angular/compiler/src/render3/r3_factory");
    var r3_jit_1 = require("@angular/compiler/src/render3/r3_jit");
    var r3_module_compiler_1 = require("@angular/compiler/src/render3/r3_module_compiler");
    var r3_pipe_compiler_1 = require("@angular/compiler/src/render3/r3_pipe_compiler");
    var compiler_1 = require("@angular/compiler/src/render3/view/compiler");
    var template_1 = require("@angular/compiler/src/render3/view/template");
    var resource_loader_1 = require("@angular/compiler/src/resource_loader");
    var dom_element_schema_registry_1 = require("@angular/compiler/src/schema/dom_element_schema_registry");
    var CompilerFacadeImpl = /** @class */ (function () {
        function CompilerFacadeImpl(jitEvaluator) {
            if (jitEvaluator === void 0) { jitEvaluator = new output_jit_1.JitEvaluator(); }
            this.jitEvaluator = jitEvaluator;
            this.R3ResolvedDependencyType = r3_factory_1.R3ResolvedDependencyType;
            this.R3FactoryTarget = r3_factory_1.R3FactoryTarget;
            this.ResourceLoader = resource_loader_1.ResourceLoader;
            this.elementSchemaRegistry = new dom_element_schema_registry_1.DomElementSchemaRegistry();
        }
        CompilerFacadeImpl.prototype.compilePipe = function (angularCoreEnv, sourceMapUrl, facade) {
            var metadata = {
                name: facade.name,
                type: wrapReference(facade.type),
                internalType: new output_ast_1.WrappedNodeExpr(facade.type),
                typeArgumentCount: facade.typeArgumentCount,
                deps: convertR3DependencyMetadataArray(facade.deps),
                pipeName: facade.pipeName,
                pure: facade.pure,
            };
            var res = r3_pipe_compiler_1.compilePipeFromMetadata(metadata);
            return this.jitExpression(res.expression, angularCoreEnv, sourceMapUrl, []);
        };
        CompilerFacadeImpl.prototype.compileInjectable = function (angularCoreEnv, sourceMapUrl, facade) {
            var _a = injectable_compiler_2_1.compileInjectable({
                name: facade.name,
                type: wrapReference(facade.type),
                internalType: new output_ast_1.WrappedNodeExpr(facade.type),
                typeArgumentCount: facade.typeArgumentCount,
                providedIn: computeProvidedIn(facade.providedIn),
                useClass: wrapExpression(facade, USE_CLASS),
                useFactory: wrapExpression(facade, USE_FACTORY),
                useValue: wrapExpression(facade, USE_VALUE),
                useExisting: wrapExpression(facade, USE_EXISTING),
                userDeps: convertR3DependencyMetadataArray(facade.userDeps) || undefined,
            }), expression = _a.expression, statements = _a.statements;
            return this.jitExpression(expression, angularCoreEnv, sourceMapUrl, statements);
        };
        CompilerFacadeImpl.prototype.compileInjector = function (angularCoreEnv, sourceMapUrl, facade) {
            var meta = {
                name: facade.name,
                type: wrapReference(facade.type),
                internalType: new output_ast_1.WrappedNodeExpr(facade.type),
                deps: convertR3DependencyMetadataArray(facade.deps),
                providers: new output_ast_1.WrappedNodeExpr(facade.providers),
                imports: facade.imports.map(function (i) { return new output_ast_1.WrappedNodeExpr(i); }),
            };
            var res = r3_module_compiler_1.compileInjector(meta);
            return this.jitExpression(res.expression, angularCoreEnv, sourceMapUrl, res.statements);
        };
        CompilerFacadeImpl.prototype.compileNgModule = function (angularCoreEnv, sourceMapUrl, facade) {
            var meta = {
                type: wrapReference(facade.type),
                internalType: new output_ast_1.WrappedNodeExpr(facade.type),
                adjacentType: new output_ast_1.WrappedNodeExpr(facade.type),
                bootstrap: facade.bootstrap.map(wrapReference),
                declarations: facade.declarations.map(wrapReference),
                imports: facade.imports.map(wrapReference),
                exports: facade.exports.map(wrapReference),
                emitInline: true,
                containsForwardDecls: false,
                schemas: facade.schemas ? facade.schemas.map(wrapReference) : null,
                id: facade.id ? new output_ast_1.WrappedNodeExpr(facade.id) : null,
            };
            var res = r3_module_compiler_1.compileNgModule(meta);
            return this.jitExpression(res.expression, angularCoreEnv, sourceMapUrl, []);
        };
        CompilerFacadeImpl.prototype.compileDirective = function (angularCoreEnv, sourceMapUrl, facade) {
            var constantPool = new constant_pool_1.ConstantPool();
            var bindingParser = template_1.makeBindingParser();
            var meta = convertDirectiveFacadeToMetadata(facade);
            var res = compiler_1.compileDirectiveFromMetadata(meta, constantPool, bindingParser);
            return this.jitExpression(res.expression, angularCoreEnv, sourceMapUrl, constantPool.statements);
        };
        CompilerFacadeImpl.prototype.compileComponent = function (angularCoreEnv, sourceMapUrl, facade) {
            // The ConstantPool is a requirement of the JIT'er.
            var constantPool = new constant_pool_1.ConstantPool();
            var interpolationConfig = facade.interpolation ?
                interpolation_config_1.InterpolationConfig.fromArray(facade.interpolation) :
                interpolation_config_1.DEFAULT_INTERPOLATION_CONFIG;
            // Parse the template and check for errors.
            var template = template_1.parseTemplate(facade.template, sourceMapUrl, { preserveWhitespaces: facade.preserveWhitespaces, interpolationConfig: interpolationConfig });
            if (template.errors !== undefined) {
                var errors = template.errors.map(function (err) { return err.toString(); }).join(', ');
                throw new Error("Errors during JIT compilation of template for " + facade.name + ": " + errors);
            }
            // Compile the component metadata, including template, into an expression.
            // TODO(alxhub): implement inputs, outputs, queries, etc.
            var metadata = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, facade), convertDirectiveFacadeToMetadata(facade)), { selector: facade.selector || this.elementSchemaRegistry.getDefaultComponentElementName(), template: template, wrapDirectivesAndPipesInClosure: false, styles: tslib_1.__spread(facade.styles, template.styles), encapsulation: facade.encapsulation, interpolation: interpolationConfig, changeDetection: facade.changeDetection, animations: facade.animations != null ? new output_ast_1.WrappedNodeExpr(facade.animations) : null, viewProviders: facade.viewProviders != null ? new output_ast_1.WrappedNodeExpr(facade.viewProviders) :
                    null, relativeContextFilePath: '', i18nUseExternalIds: true });
            var res = compiler_1.compileComponentFromMetadata(metadata, constantPool, template_1.makeBindingParser(interpolationConfig));
            var jitExpressionSourceMap = "ng:///" + facade.name + ".js";
            return this.jitExpression(res.expression, angularCoreEnv, jitExpressionSourceMap, constantPool.statements);
        };
        CompilerFacadeImpl.prototype.compileFactory = function (angularCoreEnv, sourceMapUrl, meta) {
            var factoryRes = r3_factory_1.compileFactoryFunction({
                name: meta.name,
                type: wrapReference(meta.type),
                internalType: new output_ast_1.WrappedNodeExpr(meta.type),
                typeArgumentCount: meta.typeArgumentCount,
                deps: convertR3DependencyMetadataArray(meta.deps),
                injectFn: meta.injectFn === 'directiveInject' ? identifiers_1.Identifiers.directiveInject :
                    identifiers_1.Identifiers.inject,
                target: meta.target,
            });
            return this.jitExpression(factoryRes.factory, angularCoreEnv, sourceMapUrl, factoryRes.statements);
        };
        CompilerFacadeImpl.prototype.createParseSourceSpan = function (kind, typeName, sourceUrl) {
            return parse_util_1.r3JitTypeSourceSpan(kind, typeName, sourceUrl);
        };
        /**
         * JIT compiles an expression and returns the result of executing that expression.
         *
         * @param def the definition which will be compiled and executed to get the value to patch
         * @param context an object map of @angular/core symbol names to symbols which will be available
         * in the context of the compiled expression
         * @param sourceUrl a URL to use for the source map of the compiled expression
         * @param preStatements a collection of statements that should be evaluated before the expression.
         */
        CompilerFacadeImpl.prototype.jitExpression = function (def, context, sourceUrl, preStatements) {
            // The ConstantPool may contain Statements which declare variables used in the final expression.
            // Therefore, its statements need to precede the actual JIT operation. The final statement is a
            // declaration of $def which is set to the expression being compiled.
            var statements = tslib_1.__spread(preStatements, [
                new output_ast_1.DeclareVarStmt('$def', def, undefined, [output_ast_1.StmtModifier.Exported]),
            ]);
            var res = this.jitEvaluator.evaluateStatements(sourceUrl, statements, new r3_jit_1.R3JitReflector(context), /* enableSourceMaps */ true);
            return res['$def'];
        };
        return CompilerFacadeImpl;
    }());
    exports.CompilerFacadeImpl = CompilerFacadeImpl;
    var USE_CLASS = Object.keys({ useClass: null })[0];
    var USE_FACTORY = Object.keys({ useFactory: null })[0];
    var USE_VALUE = Object.keys({ useValue: null })[0];
    var USE_EXISTING = Object.keys({ useExisting: null })[0];
    var wrapReference = function (value) {
        var wrapped = new output_ast_1.WrappedNodeExpr(value);
        return { value: wrapped, type: wrapped };
    };
    function convertToR3QueryMetadata(facade) {
        return tslib_1.__assign(tslib_1.__assign({}, facade), { predicate: Array.isArray(facade.predicate) ? facade.predicate :
                new output_ast_1.WrappedNodeExpr(facade.predicate), read: facade.read ? new output_ast_1.WrappedNodeExpr(facade.read) : null, static: facade.static });
    }
    function convertDirectiveFacadeToMetadata(facade) {
        var inputsFromMetadata = parseInputOutputs(facade.inputs || []);
        var outputsFromMetadata = parseInputOutputs(facade.outputs || []);
        var propMetadata = facade.propMetadata;
        var inputsFromType = {};
        var outputsFromType = {};
        var _loop_1 = function (field) {
            if (propMetadata.hasOwnProperty(field)) {
                propMetadata[field].forEach(function (ann) {
                    if (isInput(ann)) {
                        inputsFromType[field] =
                            ann.bindingPropertyName ? [ann.bindingPropertyName, field] : field;
                    }
                    else if (isOutput(ann)) {
                        outputsFromType[field] = ann.bindingPropertyName || field;
                    }
                });
            }
        };
        for (var field in propMetadata) {
            _loop_1(field);
        }
        return tslib_1.__assign(tslib_1.__assign({}, facade), { typeSourceSpan: facade.typeSourceSpan, type: wrapReference(facade.type), internalType: new output_ast_1.WrappedNodeExpr(facade.type), deps: convertR3DependencyMetadataArray(facade.deps), host: extractHostBindings(facade.propMetadata, facade.typeSourceSpan, facade.host), inputs: tslib_1.__assign(tslib_1.__assign({}, inputsFromMetadata), inputsFromType), outputs: tslib_1.__assign(tslib_1.__assign({}, outputsFromMetadata), outputsFromType), queries: facade.queries.map(convertToR3QueryMetadata), providers: facade.providers != null ? new output_ast_1.WrappedNodeExpr(facade.providers) : null, viewQueries: facade.viewQueries.map(convertToR3QueryMetadata), fullInheritance: false });
    }
    function wrapExpression(obj, property) {
        if (obj.hasOwnProperty(property)) {
            return new output_ast_1.WrappedNodeExpr(obj[property]);
        }
        else {
            return undefined;
        }
    }
    function computeProvidedIn(providedIn) {
        if (providedIn == null || typeof providedIn === 'string') {
            return new output_ast_1.LiteralExpr(providedIn);
        }
        else {
            return new output_ast_1.WrappedNodeExpr(providedIn);
        }
    }
    function convertR3DependencyMetadata(facade) {
        var tokenExpr;
        if (facade.token === null) {
            tokenExpr = new output_ast_1.LiteralExpr(null);
        }
        else if (facade.resolved === r3_factory_1.R3ResolvedDependencyType.Attribute) {
            tokenExpr = new output_ast_1.LiteralExpr(facade.token);
        }
        else {
            tokenExpr = new output_ast_1.WrappedNodeExpr(facade.token);
        }
        return {
            token: tokenExpr,
            attribute: null,
            resolved: facade.resolved,
            host: facade.host,
            optional: facade.optional,
            self: facade.self,
            skipSelf: facade.skipSelf,
        };
    }
    function convertR3DependencyMetadataArray(facades) {
        return facades == null ? null : facades.map(convertR3DependencyMetadata);
    }
    function extractHostBindings(propMetadata, sourceSpan, host) {
        // First parse the declarations from the metadata.
        var bindings = compiler_1.parseHostBindings(host || {});
        // After that check host bindings for errors
        var errors = compiler_1.verifyHostBindings(bindings, sourceSpan);
        if (errors.length) {
            throw new Error(errors.map(function (error) { return error.msg; }).join('\n'));
        }
        var _loop_2 = function (field) {
            if (propMetadata.hasOwnProperty(field)) {
                propMetadata[field].forEach(function (ann) {
                    if (isHostBinding(ann)) {
                        bindings.properties[ann.hostPropertyName || field] = field;
                    }
                    else if (isHostListener(ann)) {
                        bindings.listeners[ann.eventName || field] = field + "(" + (ann.args || []).join(',') + ")";
                    }
                });
            }
        };
        // Next, loop over the properties of the object, looking for @HostBinding and @HostListener.
        for (var field in propMetadata) {
            _loop_2(field);
        }
        return bindings;
    }
    function isHostBinding(value) {
        return value.ngMetadataName === 'HostBinding';
    }
    function isHostListener(value) {
        return value.ngMetadataName === 'HostListener';
    }
    function isInput(value) {
        return value.ngMetadataName === 'Input';
    }
    function isOutput(value) {
        return value.ngMetadataName === 'Output';
    }
    function parseInputOutputs(values) {
        return values.reduce(function (map, value) {
            var _a = tslib_1.__read(value.split(',').map(function (piece) { return piece.trim(); }), 2), field = _a[0], property = _a[1];
            map[field] = property || field;
            return map;
        }, {});
    }
    function publishFacade(global) {
        var ng = global.ng || (global.ng = {});
        ng.ɵcompilerFacade = new CompilerFacadeImpl();
    }
    exports.publishFacade = publishFacade;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaml0X2NvbXBpbGVyX2ZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9qaXRfY29tcGlsZXJfZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7OztJQUlILHFFQUE2QztJQUU3QyxpRUFBMEM7SUFDMUMscUZBQTBEO0lBQzFELDZGQUFtRztJQUNuRyxzRUFBc0g7SUFDdEgsc0VBQWlEO0lBQ2pELCtEQUE4RTtJQUM5RSx1RUFBNkg7SUFDN0gsK0RBQWdEO0lBQ2hELHVGQUFzSDtJQUN0SCxtRkFBbUY7SUFHbkYsd0VBQThKO0lBQzlKLHdFQUF5RTtJQUN6RSx5RUFBaUQ7SUFDakQsd0dBQThFO0lBRTlFO1FBTUUsNEJBQW9CLFlBQWlDO1lBQWpDLDZCQUFBLEVBQUEsbUJBQW1CLHlCQUFZLEVBQUU7WUFBakMsaUJBQVksR0FBWixZQUFZLENBQXFCO1lBTHJELDZCQUF3QixHQUFHLHFDQUErQixDQUFDO1lBQzNELG9CQUFlLEdBQUcsNEJBQXNCLENBQUM7WUFDekMsbUJBQWMsR0FBRyxnQ0FBYyxDQUFDO1lBQ3hCLDBCQUFxQixHQUFHLElBQUksc0RBQXdCLEVBQUUsQ0FBQztRQUVQLENBQUM7UUFFekQsd0NBQVcsR0FBWCxVQUFZLGNBQStCLEVBQUUsWUFBb0IsRUFBRSxNQUE0QjtZQUU3RixJQUFNLFFBQVEsR0FBbUI7Z0JBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtnQkFDakIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQyxZQUFZLEVBQUUsSUFBSSw0QkFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzlDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxpQkFBaUI7Z0JBQzNDLElBQUksRUFBRSxnQ0FBZ0MsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNu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QUFDO0lBRUQsU0FBUyxhQUFhLENBQUMsS0FBVTtRQUMvQixPQUFPLEtBQUssQ0FBQyxjQUFjLEtBQUssYUFBYSxDQUFDO0lBQ2hELENBQUM7SUFFRCxTQUFTLGNBQWMsQ0FBQyxLQUFVO1FBQ2hDLE9BQU8sS0FBSyxDQUFDLGNBQWMsS0FBSyxjQUFjLENBQUM7SUFDakQsQ0FBQztJQUdELFNBQVMsT0FBTyxDQUFDLEtBQVU7UUFDekIsT0FBTyxLQUFLLENBQUMsY0FBYyxLQUFLLE9BQU8sQ0FBQztJQUMxQyxDQUFDO0lBRUQsU0FBUyxRQUFRLENBQUMsS0FBVTtRQUMxQixPQUFPLEtBQUssQ0FBQyxjQUFjLEtBQUssUUFBUSxDQUFDO0lBQzNDLENBQUM7SUFFRCxTQUFTLGlCQUFpQixDQUFDLE1BQWdCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLO1lBQ3hCLElBQUEsdUZBQStELEVBQTlELGFBQUssRUFBRSxnQkFBdUQsQ0FBQztZQUN0RSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxJQUFJLEtBQUssQ0FBQztZQUMvQixPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsRUFBRSxFQUFlLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsU0FBZ0IsYUFBYSxDQUFDLE1BQVc7UUFDdkMsSUFBTSxFQUFFLEdBQTJCLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLEVBQUUsQ0FBQyxlQUFlLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFIRCxzQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0NvbXBpbGVyRmFjYWRlLCBDb3JlRW52aXJvbm1lbnQsIEV4cG9ydGVkQ29tcGlsZXJGYWNhZGUsIFIzQ29tcG9uZW50TWV0YWRhdGFGYWNhZGUsIFIzRGVwZW5kZW5jeU1ldGFkYXRhRmFjYWRlLCBSM0RpcmVjdGl2ZU1ldGFkYXRhRmFjYWRlLCBSM0ZhY3RvcnlEZWZNZXRhZGF0YUZhY2FkZSwgUjNJbmplY3RhYmxlTWV0YWRhdGFGYWNhZGUsIFIzSW5qZWN0b3JNZXRhZGF0YUZhY2FkZSwgUjNOZ01vZHVsZU1ldGFkYXRhRmFjYWRlLCBSM1BpcGVNZXRhZGF0YUZhY2FkZSwgUjNRdWVyeU1ldGFkYXRhRmFjYWRlLCBTdHJpbmdNYXAsIFN0cmluZ01hcFdpdGhSZW5hbWV9IGZyb20gJy4vY29tcGlsZXJfZmFjYWRlX2ludGVyZmFjZSc7XG5pbXBvcnQge0NvbnN0YW50UG9vbH0gZnJvbSAnLi9jb25zdGFudF9wb29sJztcbmltcG9ydCB7SG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgVHlwZX0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7SWRlbnRpZmllcnN9IGZyb20gJy4vaWRlbnRpZmllcnMnO1xuaW1wb3J0IHtjb21waWxlSW5qZWN0YWJsZX0gZnJvbSAnLi9pbmplY3RhYmxlX2NvbXBpbGVyXzInO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge0RlY2xhcmVWYXJTdG10LCBFeHByZXNzaW9uLCBMaXRlcmFsRXhwciwgU3RhdGVtZW50LCBTdG10TW9kaWZpZXIsIFdyYXBwZWROb2RlRXhwcn0gZnJvbSAnLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge0ppdEV2YWx1YXRvcn0gZnJvbSAnLi9vdXRwdXQvb3V0cHV0X2ppdCc7XG5pbXBvcnQge1BhcnNlRXJyb3IsIFBhcnNlU291cmNlU3BhbiwgcjNKaXRUeXBlU291cmNlU3Bhbn0gZnJvbSAnLi9wYXJzZV91dGlsJztcbmltcG9ydCB7Y29tcGlsZUZhY3RvcnlGdW5jdGlvbiwgUjNEZXBlbmRlbmN5TWV0YWRhdGEsIFIzRmFjdG9yeVRhcmdldCwgUjNSZXNvbHZlZERlcGVuZGVuY3lUeXBlfSBmcm9tICcuL3JlbmRlcjMvcjNfZmFjdG9yeSc7XG5pbXBvcnQge1IzSml0UmVmbGVjdG9yfSBmcm9tICcuL3JlbmRlcjMvcjNfaml0JztcbmltcG9ydCB7Y29tcGlsZUluamVjdG9yLCBjb21waWxlTmdNb2R1bGUsIFIzSW5qZWN0b3JNZXRhZGF0YSwgUjNOZ01vZHVsZU1ldGFkYXRhfSBmcm9tICcuL3JlbmRlcjMvcjNfbW9kdWxlX2NvbXBpbGVyJztcbmltcG9ydCB7Y29tcGlsZVBpcGVGcm9tTWV0YWRhdGEsIFIzUGlwZU1ldGFkYXRhfSBmcm9tICcuL3JlbmRlcjMvcjNfcGlwZV9jb21waWxlcic7XG5pbXBvcnQge1IzUmVmZXJlbmNlfSBmcm9tICcuL3JlbmRlcjMvdXRpbCc7XG5pbXBvcnQge1IzRGlyZWN0aXZlTWV0YWRhdGEsIFIzUXVlcnlNZXRhZGF0YX0gZnJvbSAnLi9yZW5kZXIzL3ZpZXcvYXBpJztcbmltcG9ydCB7Y29tcGlsZUNvbXBvbmVudEZyb21NZXRhZGF0YSwgY29tcGlsZURpcmVjdGl2ZUZyb21NZXRhZGF0YSwgUGFyc2VkSG9zdEJpbmRpbmdzLCBwYXJzZUhvc3RCaW5kaW5ncywgdmVyaWZ5SG9zdEJpbmRpbmdzfSBmcm9tICcuL3JlbmRlcjMvdmlldy9jb21waWxlcic7XG5pbXBvcnQge21ha2VCaW5kaW5nUGFyc2VyLCBwYXJzZVRlbXBsYXRlfSBmcm9tICcuL3JlbmRlcjMvdmlldy90ZW1wbGF0ZSc7XG5pbXBvcnQge1Jlc291cmNlTG9hZGVyfSBmcm9tICcuL3Jlc291cmNlX2xvYWRlcic7XG5pbXBvcnQge0RvbUVsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnLi9zY2hlbWEvZG9tX2VsZW1lbnRfc2NoZW1hX3JlZ2lzdHJ5JztcblxuZXhwb3J0IGNsYXNzIENvbXBpbGVyRmFjYWRlSW1wbCBpbXBsZW1lbnRzIENvbXBpbGVyRmFjYWRlIHtcbiAgUjNSZXNvbHZlZERlcGVuZGVuY3lUeXBlID0gUjNSZXNvbHZlZERlcGVuZGVuY3lUeXBlIGFzIGFueTtcbiAgUjNGYWN0b3J5VGFyZ2V0ID0gUjNGYWN0b3J5VGFyZ2V0IGFzIGFueTtcbiAgUmVzb3VyY2VMb2FkZXIgPSBSZXNvdXJjZUxvYWRlcjtcbiAgcHJpdmF0ZSBlbGVtZW50U2NoZW1hUmVnaXN0cnkgPSBuZXcgRG9tRWxlbWVudFNjaGVtYVJlZ2lzdHJ5KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqaXRFdmFsdWF0b3IgPSBuZXcgSml0RXZhbHVhdG9yKCkpIHt9XG5cbiAgY29tcGlsZVBpcGUoYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIGZhY2FkZTogUjNQaXBlTWV0YWRhdGFGYWNhZGUpOlxuICAgICAgYW55IHtcbiAgICBjb25zdCBtZXRhZGF0YTogUjNQaXBlTWV0YWRhdGEgPSB7XG4gICAgICBuYW1lOiBmYWNhZGUubmFtZSxcbiAgICAgIHR5cGU6IHdyYXBSZWZlcmVuY2UoZmFjYWRlLnR5cGUpLFxuICAgICAgaW50ZXJuYWxUeXBlOiBuZXcgV3JhcHBlZE5vZGVFeHByKGZhY2FkZS50eXBlKSxcbiAgICAgIHR5cGVBcmd1bWVudENvdW50OiBmYWNhZGUudHlwZUFyZ3VtZW50Q291bnQsXG4gICAgICBkZXBzOiBjb252ZXJ0UjNEZXBlbmRlbmN5TWV0YWRhdGFBcnJheShmYWNhZGUuZGVwcyksXG4gICAgICBwaXBlTmFtZTogZmFjYWRlLnBpcGVOYW1lLFxuICAgICAgcHVyZTogZmFjYWRlLnB1cmUsXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBjb21waWxlUGlwZUZyb21NZXRhZGF0YShtZXRhZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuaml0RXhwcmVzc2lvbihyZXMuZXhwcmVzc2lvbiwgYW5ndWxhckNvcmVFbnYsIHNvdXJjZU1hcFVybCwgW10pO1xuICB9XG5cbiAgY29tcGlsZUluamVjdGFibGUoXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZyxcbiAgICAgIGZhY2FkZTogUjNJbmplY3RhYmxlTWV0YWRhdGFGYWNhZGUpOiBhbnkge1xuICAgIGNvbnN0IHtleHByZXNzaW9uLCBzdGF0ZW1lbnRzfSA9IGNvbXBpbGVJbmplY3RhYmxlKHtcbiAgICAgIG5hbWU6IGZhY2FkZS5uYW1lLFxuICAgICAgdHlwZTogd3JhcFJlZmVyZW5jZShmYWNhZGUudHlwZSksXG4gICAgICBpbnRlcm5hbFR5cGU6IG5ldyBXcmFwcGVkTm9kZUV4cHIoZmFjYWRlLnR5cGUpLFxuICAgICAgdHlwZUFyZ3VtZW50Q291bnQ6IGZhY2FkZS50eXBlQXJndW1lbnRDb3VudCxcbiAgICAgIHByb3ZpZGVkSW46IGNvbXB1dGVQcm92aWRlZEluKGZhY2FkZS5wcm92aWRlZEluKSxcbiAgICAgIHVzZUNsYXNzOiB3cmFwRXhwcmVzc2lvbihmYWNhZGUsIFVTRV9DTEFTUyksXG4gICAgICB1c2VGYWN0b3J5OiB3cmFwRXhwcmVzc2lvbihmYWNhZGUsIFVTRV9GQUNUT1JZKSxcbiAgICAgIHVzZVZhbHVlOiB3cmFwRXhwcmVzc2lvbihmYWNhZGUsIFVTRV9WQUxVRSksXG4gICAgICB1c2VFeGlzdGluZzogd3JhcEV4cHJlc3Npb24oZmFjYWRlLCBVU0VfRVhJU1RJTkcpLFxuICAgICAgdXNlckRlcHM6IGNvbnZlcnRSM0RlcGVuZGVuY3lNZXRhZGF0YUFycmF5KGZhY2FkZS51c2VyRGVwcykgfHwgdW5kZWZpbmVkLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaml0RXhwcmVzc2lvbihleHByZXNzaW9uLCBhbmd1bGFyQ29yZUVudiwgc291cmNlTWFwVXJsLCBzdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIGNvbXBpbGVJbmplY3RvcihcbiAgICAgIGFuZ3VsYXJDb3JlRW52OiBDb3JlRW52aXJvbm1lbnQsIHNvdXJjZU1hcFVybDogc3RyaW5nLFxuICAgICAgZmFjYWRlOiBSM0luamVjdG9yTWV0YWRhdGFGYWNhZGUpOiBhbnkge1xuICAgIGNvbnN0IG1ldGE6IFIzSW5qZWN0b3JNZXRhZGF0YSA9IHtcbiAgICAgIG5hbWU6IGZhY2FkZS5uYW1lLFxuICAgICAgdHlwZTogd3JhcFJlZmVyZW5jZShmYWNhZGUudHlwZSksXG4gICAgICBpbnRlcm5hbFR5cGU6IG5ldyBXcmFwcGVkTm9kZUV4cHIoZmFjYWRlLnR5cGUpLFxuICAgICAgZGVwczogY29udmVydFIzRGVwZW5kZW5jeU1ldGFkYXRhQXJyYXkoZmFjYWRlLmRlcHMpLFxuICAgICAgcHJvdmlkZXJzOiBuZXcgV3JhcHBlZE5vZGVFeHByKGZhY2FkZS5wcm92aWRlcnMpLFxuICAgICAgaW1wb3J0czogZmFjYWRlLmltcG9ydHMubWFwKGkgPT4gbmV3IFdyYXBwZWROb2RlRXhwcihpKSksXG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBjb21waWxlSW5qZWN0b3IobWV0YSk7XG4gICAgcmV0dXJuIHRoaXMuaml0RXhwcmVzc2lvbihyZXMuZXhwcmVzc2lvbiwgYW5ndWxhckNvcmVFbnYsIHNvdXJjZU1hcFVybCwgcmVzLnN0YXRlbWVudHMpO1xuICB9XG5cbiAgY29tcGlsZU5nTW9kdWxlKFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsXG4gICAgICBmYWNhZGU6IFIzTmdNb2R1bGVNZXRhZGF0YUZhY2FkZSk6IGFueSB7XG4gICAgY29uc3QgbWV0YTogUjNOZ01vZHVsZU1ldGFkYXRhID0ge1xuICAgICAgdHlwZTogd3JhcFJlZmVyZW5jZShmYWNhZGUudHlwZSksXG4gICAgICBpbnRlcm5hbFR5cGU6IG5ldyBXcmFwcGVkTm9kZUV4cHIoZmFjYWRlLnR5cGUpLFxuICAgICAgYWRqYWNlbnRUeXBlOiBuZXcgV3JhcHBlZE5vZGVFeHByKGZhY2FkZS50eXBlKSxcbiAgICAgIGJvb3RzdHJhcDogZmFjYWRlLmJvb3RzdHJhcC5tYXAod3JhcFJlZmVyZW5jZSksXG4gICAgICBkZWNsYXJhdGlvbnM6IGZhY2FkZS5kZWNsYXJhdGlvbnMubWFwKHdyYXBSZWZlcmVuY2UpLFxuICAgICAgaW1wb3J0czogZmFjYWRlLmltcG9ydHMubWFwKHdyYXBSZWZlcmVuY2UpLFxuICAgICAgZXhwb3J0czogZmFjYWRlLmV4cG9ydHMubWFwKHdyYXBSZWZlcmVuY2UpLFxuICAgICAgZW1pdElubGluZTogdHJ1ZSxcbiAgICAgIGNvbnRhaW5zRm9yd2FyZERlY2xzOiBmYWxzZSxcbiAgICAgIHNjaGVtYXM6IGZhY2FkZS5zY2hlbWFzID8gZmFjYWRlLnNjaGVtYXMubWFwKHdyYXBSZWZlcmVuY2UpIDogbnVsbCxcbiAgICAgIGlkOiBmYWNhZGUuaWQgPyBuZXcgV3JhcHBlZE5vZGVFeHByKGZhY2FkZS5pZCkgOiBudWxsLFxuICAgIH07XG4gICAgY29uc3QgcmVzID0gY29tcGlsZU5nTW9kdWxlKG1ldGEpO1xuICAgIHJldHVybiB0aGlzLmppdEV4cHJlc3Npb24ocmVzLmV4cHJlc3Npb24sIGFuZ3VsYXJDb3JlRW52LCBzb3VyY2VNYXBVcmwsIFtdKTtcbiAgfVxuXG4gIGNvbXBpbGVEaXJlY3RpdmUoXG4gICAgICBhbmd1bGFyQ29yZUVudjogQ29yZUVudmlyb25tZW50LCBzb3VyY2VNYXBVcmw6IHN0cmluZyxcbiAgICAgIGZhY2FkZTogUjNEaXJlY3RpdmVNZXRhZGF0YUZhY2FkZSk6IGFueSB7XG4gICAgY29uc3QgY29uc3RhbnRQb29sID0gbmV3IENvbnN0YW50UG9vbCgpO1xuICAgIGNvbnN0IGJpbmRpbmdQYXJzZXIgPSBtYWtlQmluZGluZ1BhcnNlcigpO1xuXG4gICAgY29uc3QgbWV0YTogUjNEaXJlY3RpdmVNZXRhZGF0YSA9IGNvbnZlcnREaXJlY3RpdmVGYWNhZGVUb01ldGFkYXRhKGZhY2FkZSk7XG4gICAgY29uc3QgcmVzID0gY29tcGlsZURpcmVjdGl2ZUZyb21NZXRhZGF0YShtZXRhLCBjb25zdGFudFBvb2wsIGJpbmRpbmdQYXJzZXIpO1xuICAgIHJldHVybiB0aGlzLmppdEV4cHJlc3Npb24oXG4gICAgICAgIHJlcy5leHByZXNzaW9uLCBhbmd1bGFyQ29yZUVudiwgc291cmNlTWFwVXJsLCBjb25zdGFudFBvb2wuc3RhdGVtZW50cyk7XG4gIH1cblxuICBjb21waWxlQ29tcG9uZW50KFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsXG4gICAgICBmYWNhZGU6IFIzQ29tcG9uZW50TWV0YWRhdGFGYWNhZGUpOiBhbnkge1xuICAgIC8vIFRoZSBDb25zdGFudFBvb2wgaXMgYSByZXF1aXJlbWVudCBvZiB0aGUgSklUJ2VyLlxuICAgIGNvbnN0IGNvbnN0YW50UG9vbCA9IG5ldyBDb25zdGFudFBvb2woKTtcblxuICAgIGNvbnN0IGludGVycG9sYXRpb25Db25maWcgPSBmYWNhZGUuaW50ZXJwb2xhdGlvbiA/XG4gICAgICAgIEludGVycG9sYXRpb25Db25maWcuZnJvbUFycmF5KGZhY2FkZS5pbnRlcnBvbGF0aW9uKSA6XG4gICAgICAgIERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUc7XG4gICAgLy8gUGFyc2UgdGhlIHRlbXBsYXRlIGFuZCBjaGVjayBmb3IgZXJyb3JzLlxuICAgIGNvbnN0IHRlbXBsYXRlID0gcGFyc2VUZW1wbGF0ZShcbiAgICAgICAgZmFjYWRlLnRlbXBsYXRlLCBzb3VyY2VNYXBVcmwsXG4gICAgICAgIHtwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWNhZGUucHJlc2VydmVXaGl0ZXNwYWNlcywgaW50ZXJwb2xhdGlvbkNvbmZpZ30pO1xuICAgIGlmICh0ZW1wbGF0ZS5lcnJvcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZXJyb3JzID0gdGVtcGxhdGUuZXJyb3JzLm1hcChlcnIgPT4gZXJyLnRvU3RyaW5nKCkpLmpvaW4oJywgJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9ycyBkdXJpbmcgSklUIGNvbXBpbGF0aW9uIG9mIHRlbXBsYXRlIGZvciAke2ZhY2FkZS5uYW1lfTogJHtlcnJvcnN9YCk7XG4gICAgfVxuXG4gICAgLy8gQ29tcGlsZSB0aGUgY29tcG9uZW50IG1ldGFkYXRhLCBpbmNsdWRpbmcgdGVtcGxhdGUsIGludG8gYW4gZXhwcmVzc2lvbi5cbiAgICAvLyBUT0RPKGFseGh1Yik6IGltcGxlbWVudCBpbnB1dHMsIG91dHB1dHMsIHF1ZXJpZXMsIGV0Yy5cbiAgICBjb25zdCBtZXRhZGF0YSA9IHtcbiAgICAgIC4uLmZhY2FkZSBhcyBSM0NvbXBvbmVudE1ldGFkYXRhRmFjYWRlTm9Qcm9wQW5kV2hpdGVzcGFjZSxcbiAgICAgIC4uLmNvbnZlcnREaXJlY3RpdmVGYWNhZGVUb01ldGFkYXRhKGZhY2FkZSksXG4gICAgICBzZWxlY3RvcjogZmFjYWRlLnNlbGVjdG9yIHx8IHRoaXMuZWxlbWVudFNjaGVtYVJlZ2lzdHJ5LmdldERlZmF1bHRDb21wb25lbnRFbGVtZW50TmFtZSgpLFxuICAgICAgdGVtcGxhdGUsXG4gICAgICB3cmFwRGlyZWN0aXZlc0FuZFBpcGVzSW5DbG9zdXJlOiBmYWxzZSxcbiAgICAgIHN0eWxlczogWy4uLmZhY2FkZS5zdHlsZXMsIC4uLnRlbXBsYXRlLnN0eWxlc10sXG4gICAgICBlbmNhcHN1bGF0aW9uOiBmYWNhZGUuZW5jYXBzdWxhdGlvbiBhcyBhbnksXG4gICAgICBpbnRlcnBvbGF0aW9uOiBpbnRlcnBvbGF0aW9uQ29uZmlnLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBmYWNhZGUuY2hhbmdlRGV0ZWN0aW9uLFxuICAgICAgYW5pbWF0aW9uczogZmFjYWRlLmFuaW1hdGlvbnMgIT0gbnVsbCA/IG5ldyBXcmFwcGVkTm9kZUV4cHIoZmFjYWRlLmFuaW1hdGlvbnMpIDogbnVsbCxcbiAgICAgIHZpZXdQcm92aWRlcnM6IGZhY2FkZS52aWV3UHJvdmlkZXJzICE9IG51bGwgPyBuZXcgV3JhcHBlZE5vZGVFeHByKGZhY2FkZS52aWV3UHJvdmlkZXJzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgIHJlbGF0aXZlQ29udGV4dEZpbGVQYXRoOiAnJyxcbiAgICAgIGkxOG5Vc2VFeHRlcm5hbElkczogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGNvbXBpbGVDb21wb25lbnRGcm9tTWV0YWRhdGEoXG4gICAgICAgIG1ldGFkYXRhLCBjb25zdGFudFBvb2wsIG1ha2VCaW5kaW5nUGFyc2VyKGludGVycG9sYXRpb25Db25maWcpKTtcbiAgICBjb25zdCBqaXRFeHByZXNzaW9uU291cmNlTWFwID0gYG5nOi8vLyR7ZmFjYWRlLm5hbWV9LmpzYDtcbiAgICByZXR1cm4gdGhpcy5qaXRFeHByZXNzaW9uKFxuICAgICAgICByZXMuZXhwcmVzc2lvbiwgYW5ndWxhckNvcmVFbnYsIGppdEV4cHJlc3Npb25Tb3VyY2VNYXAsIGNvbnN0YW50UG9vbC5zdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIGNvbXBpbGVGYWN0b3J5KFxuICAgICAgYW5ndWxhckNvcmVFbnY6IENvcmVFbnZpcm9ubWVudCwgc291cmNlTWFwVXJsOiBzdHJpbmcsIG1ldGE6IFIzRmFjdG9yeURlZk1ldGFkYXRhRmFjYWRlKSB7XG4gICAgY29uc3QgZmFjdG9yeVJlcyA9IGNvbXBpbGVGYWN0b3J5RnVuY3Rpb24oe1xuICAgICAgbmFtZTogbWV0YS5uYW1lLFxuICAgICAgdHlwZTogd3JhcFJlZmVyZW5jZShtZXRhLnR5cGUpLFxuICAgICAgaW50ZXJuYWxUeXBlOiBuZXcgV3JhcHBlZE5vZGVFeHByKG1ldGEudHlwZSksXG4gICAgICB0eXBlQXJndW1lbnRDb3VudDogbWV0YS50eXBlQXJndW1lbnRDb3VudCxcbiAgICAgIGRlcHM6IGNvbnZlcnRSM0RlcGVuZGVuY3lNZXRhZGF0YUFycmF5KG1ldGEuZGVwcyksXG4gICAgICBpbmplY3RGbjogbWV0YS5pbmplY3RGbiA9PT0gJ2RpcmVjdGl2ZUluamVjdCcgPyBJZGVudGlmaWVycy5kaXJlY3RpdmVJbmplY3QgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmllcnMuaW5qZWN0LFxuICAgICAgdGFyZ2V0OiBtZXRhLnRhcmdldCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5qaXRFeHByZXNzaW9uKFxuICAgICAgICBmYWN0b3J5UmVzLmZhY3RvcnksIGFuZ3VsYXJDb3JlRW52LCBzb3VyY2VNYXBVcmwsIGZhY3RvcnlSZXMuc3RhdGVtZW50cyk7XG4gIH1cblxuICBjcmVhdGVQYXJzZVNvdXJjZVNwYW4oa2luZDogc3RyaW5nLCB0eXBlTmFtZTogc3RyaW5nLCBzb3VyY2VVcmw6IHN0cmluZyk6IFBhcnNlU291cmNlU3BhbiB7XG4gICAgcmV0dXJuIHIzSml0VHlwZVNvdXJjZVNwYW4oa2luZCwgdHlwZU5hbWUsIHNvdXJjZVVybCk7XG4gIH1cblxuICAvKipcbiAgICogSklUIGNvbXBpbGVzIGFuIGV4cHJlc3Npb24gYW5kIHJldHVybnMgdGhlIHJlc3VsdCBvZiBleGVjdXRpbmcgdGhhdCBleHByZXNzaW9uLlxuICAgKlxuICAgKiBAcGFyYW0gZGVmIHRoZSBkZWZpbml0aW9uIHdoaWNoIHdpbGwgYmUgY29tcGlsZWQgYW5kIGV4ZWN1dGVkIHRvIGdldCB0aGUgdmFsdWUgdG8gcGF0Y2hcbiAgICogQHBhcmFtIGNvbnRleHQgYW4gb2JqZWN0IG1hcCBvZiBAYW5ndWxhci9jb3JlIHN5bWJvbCBuYW1lcyB0byBzeW1ib2xzIHdoaWNoIHdpbGwgYmUgYXZhaWxhYmxlXG4gICAqIGluIHRoZSBjb250ZXh0IG9mIHRoZSBjb21waWxlZCBleHByZXNzaW9uXG4gICAqIEBwYXJhbSBzb3VyY2VVcmwgYSBVUkwgdG8gdXNlIGZvciB0aGUgc291cmNlIG1hcCBvZiB0aGUgY29tcGlsZWQgZXhwcmVzc2lvblxuICAgKiBAcGFyYW0gcHJlU3RhdGVtZW50cyBhIGNvbGxlY3Rpb24gb2Ygc3RhdGVtZW50cyB0aGF0IHNob3VsZCBiZSBldmFsdWF0ZWQgYmVmb3JlIHRoZSBleHByZXNzaW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBqaXRFeHByZXNzaW9uKFxuICAgICAgZGVmOiBFeHByZXNzaW9uLCBjb250ZXh0OiB7W2tleTogc3RyaW5nXTogYW55fSwgc291cmNlVXJsOiBzdHJpbmcsXG4gICAgICBwcmVTdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSk6IGFueSB7XG4gICAgLy8gVGhlIENvbnN0YW50UG9vbCBtYXkgY29udGFpbiBTdGF0ZW1lbnRzIHdoaWNoIGRlY2xhcmUgdmFyaWFibGVzIHVzZWQgaW4gdGhlIGZpbmFsIGV4cHJlc3Npb24uXG4gICAgLy8gVGhlcmVmb3JlLCBpdHMgc3RhdGVtZW50cyBuZWVkIHRvIHByZWNlZGUgdGhlIGFjdHVhbCBKSVQgb3BlcmF0aW9uLiBUaGUgZmluYWwgc3RhdGVtZW50IGlzIGFcbiAgICAvLyBkZWNsYXJhdGlvbiBvZiAkZGVmIHdoaWNoIGlzIHNldCB0byB0aGUgZXhwcmVzc2lvbiBiZWluZyBjb21waWxlZC5cbiAgICBjb25zdCBzdGF0ZW1lbnRzOiBTdGF0ZW1lbnRbXSA9IFtcbiAgICAgIC4uLnByZVN0YXRlbWVudHMsXG4gICAgICBuZXcgRGVjbGFyZVZhclN0bXQoJyRkZWYnLCBkZWYsIHVuZGVmaW5lZCwgW1N0bXRNb2RpZmllci5FeHBvcnRlZF0pLFxuICAgIF07XG5cbiAgICBjb25zdCByZXMgPSB0aGlzLmppdEV2YWx1YXRvci5ldmFsdWF0ZVN0YXRlbWVudHMoXG4gICAgICAgIHNvdXJjZVVybCwgc3RhdGVtZW50cywgbmV3IFIzSml0UmVmbGVjdG9yKGNvbnRleHQpLCAvKiBlbmFibGVTb3VyY2VNYXBzICovIHRydWUpO1xuICAgIHJldHVybiByZXNbJyRkZWYnXTtcbiAgfVxufVxuXG4vLyBUaGlzIHNlZW1zIHRvIGJlIG5lZWRlZCB0byBwbGFjYXRlIFRTIHYzLjAgb25seVxudHlwZSBSM0NvbXBvbmVudE1ldGFkYXRhRmFjYWRlTm9Qcm9wQW5kV2hpdGVzcGFjZSA9IFBpY2s8XG4gICAgUjNDb21wb25lbnRNZXRhZGF0YUZhY2FkZSxcbiAgICBFeGNsdWRlPEV4Y2x1ZGU8a2V5b2YgUjNDb21wb25lbnRNZXRhZGF0YUZhY2FkZSwgJ3ByZXNlcnZlV2hpdGVzcGFjZXMnPiwgJ3Byb3BNZXRhZGF0YSc+PjtcblxuY29uc3QgVVNFX0NMQVNTID0gT2JqZWN0LmtleXMoe3VzZUNsYXNzOiBudWxsfSlbMF07XG5jb25zdCBVU0VfRkFDVE9SWSA9IE9iamVjdC5rZXlzKHt1c2VGYWN0b3J5OiBudWxsfSlbMF07XG5jb25zdCBVU0VfVkFMVUUgPSBPYmplY3Qua2V5cyh7dXNlVmFsdWU6IG51bGx9KVswXTtcbmNvbnN0IFVTRV9FWElTVElORyA9IE9iamVjdC5rZXlzKHt1c2VFeGlzdGluZzogbnVsbH0pWzBdO1xuXG5jb25zdCB3cmFwUmVmZXJlbmNlID0gZnVuY3Rpb24odmFsdWU6IGFueSk6IFIzUmVmZXJlbmNlIHtcbiAgY29uc3Qgd3JhcHBlZCA9IG5ldyBXcmFwcGVkTm9kZUV4cHIodmFsdWUpO1xuICByZXR1cm4ge3ZhbHVlOiB3cmFwcGVkLCB0eXBlOiB3cmFwcGVkfTtcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb1IzUXVlcnlNZXRhZGF0YShmYWNhZGU6IFIzUXVlcnlNZXRhZGF0YUZhY2FkZSk6IFIzUXVlcnlNZXRhZGF0YSB7XG4gIHJldHVybiB7XG4gICAgLi4uZmFjYWRlLFxuICAgIHByZWRpY2F0ZTogQXJyYXkuaXNBcnJheShmYWNhZGUucHJlZGljYXRlKSA/IGZhY2FkZS5wcmVkaWNhdGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBXcmFwcGVkTm9kZUV4cHIoZmFjYWRlLnByZWRpY2F0ZSksXG4gICAgcmVhZDogZmFjYWRlLnJlYWQgPyBuZXcgV3JhcHBlZE5vZGVFeHByKGZhY2FkZS5yZWFkKSA6IG51bGwsXG4gICAgc3RhdGljOiBmYWNhZGUuc3RhdGljXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREaXJlY3RpdmVGYWNhZGVUb01ldGFkYXRhKGZhY2FkZTogUjNEaXJlY3RpdmVNZXRhZGF0YUZhY2FkZSk6IFIzRGlyZWN0aXZlTWV0YWRhdGEge1xuICBjb25zdCBpbnB1dHNGcm9tTWV0YWRhdGEgPSBwYXJzZUlucHV0T3V0cHV0cyhmYWNhZGUuaW5wdXRzIHx8IFtdKTtcbiAgY29uc3Qgb3V0cHV0c0Zyb21NZXRhZGF0YSA9IHBhcnNlSW5wdXRPdXRwdXRzKGZhY2FkZS5vdXRwdXRzIHx8IFtdKTtcbiAgY29uc3QgcHJvcE1ldGFkYXRhID0gZmFjYWRlLnByb3BNZXRhZGF0YTtcbiAgY29uc3QgaW5wdXRzRnJvbVR5cGU6IFN0cmluZ01hcFdpdGhSZW5hbWUgPSB7fTtcbiAgY29uc3Qgb3V0cHV0c0Zyb21UeXBlOiBTdHJpbmdNYXAgPSB7fTtcbiAgZm9yIChjb25zdCBmaWVsZCBpbiBwcm9wTWV0YWRhdGEpIHtcbiAgICBpZiAocHJvcE1ldGFkYXRhLmhhc093blByb3BlcnR5KGZpZWxkKSkge1xuICAgICAgcHJvcE1ldGFkYXRhW2ZpZWxkXS5mb3JFYWNoKGFubiA9PiB7XG4gICAgICAgIGlmIChpc0lucHV0KGFubikpIHtcbiAgICAgICAgICBpbnB1dHNGcm9tVHlwZVtmaWVsZF0gPVxuICAgICAgICAgICAgICBhbm4uYmluZGluZ1Byb3BlcnR5TmFtZSA/IFthbm4uYmluZGluZ1Byb3BlcnR5TmFtZSwgZmllbGRdIDogZmllbGQ7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNPdXRwdXQoYW5uKSkge1xuICAgICAgICAgIG91dHB1dHNGcm9tVHlwZVtmaWVsZF0gPSBhbm4uYmluZGluZ1Byb3BlcnR5TmFtZSB8fCBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5mYWNhZGUgYXMgUjNEaXJlY3RpdmVNZXRhZGF0YUZhY2FkZU5vUHJvcEFuZFdoaXRlc3BhY2UsXG4gICAgdHlwZVNvdXJjZVNwYW46IGZhY2FkZS50eXBlU291cmNlU3BhbixcbiAgICB0eXBlOiB3cmFwUmVmZXJlbmNlKGZhY2FkZS50eXBlKSxcbiAgICBpbnRlcm5hbFR5cGU6IG5ldyBXcmFwcGVkTm9kZUV4cHIoZmFjYWRlLnR5cGUpLFxuICAgIGRlcHM6IGNvbnZlcnRSM0RlcGVuZGVuY3lNZXRhZGF0YUFycmF5KGZhY2FkZS5kZXBzKSxcbiAgICBob3N0OiBleHRyYWN0SG9zdEJpbmRpbmdzKGZhY2FkZS5wcm9wTWV0YWRhdGEsIGZhY2FkZS50eXBlU291cmNlU3BhbiwgZmFjYWRlLmhvc3QpLFxuICAgIGlucHV0czogey4uLmlucHV0c0Zyb21NZXRhZGF0YSwgLi4uaW5wdXRzRnJvbVR5cGV9LFxuICAgIG91dHB1dHM6IHsuLi5vdXRwdXRzRnJvbU1ldGFkYXRhLCAuLi5vdXRwdXRzRnJvbVR5cGV9LFxuICAgIHF1ZXJpZXM6IGZhY2FkZS5xdWVyaWVzLm1hcChjb252ZXJ0VG9SM1F1ZXJ5TWV0YWRhdGEpLFxuICAgIHByb3ZpZGVyczogZmFjYWRlLnByb3ZpZGVycyAhPSBudWxsID8gbmV3IFdyYXBwZWROb2RlRXhwcihmYWNhZGUucHJvdmlkZXJzKSA6IG51bGwsXG4gICAgdmlld1F1ZXJpZXM6IGZhY2FkZS52aWV3UXVlcmllcy5tYXAoY29udmVydFRvUjNRdWVyeU1ldGFkYXRhKSxcbiAgICBmdWxsSW5oZXJpdGFuY2U6IGZhbHNlLFxuICB9O1xufVxuXG4vLyBUaGlzIHNlZW1zIHRvIGJlIG5lZWRlZCB0byBwbGFjYXRlIFRTIHYzLjAgb25seVxudHlwZSBSM0RpcmVjdGl2ZU1ldGFkYXRhRmFjYWRlTm9Qcm9wQW5kV2hpdGVzcGFjZSA9XG4gICAgUGljazxSM0RpcmVjdGl2ZU1ldGFkYXRhRmFjYWRlLCBFeGNsdWRlPGtleW9mIFIzRGlyZWN0aXZlTWV0YWRhdGFGYWNhZGUsICdwcm9wTWV0YWRhdGEnPj47XG5cbmZ1bmN0aW9uIHdyYXBFeHByZXNzaW9uKG9iajogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogV3JhcHBlZE5vZGVFeHByPGFueT58dW5kZWZpbmVkIHtcbiAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZWROb2RlRXhwcihvYmpbcHJvcGVydHldKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVQcm92aWRlZEluKHByb3ZpZGVkSW46IFR5cGV8c3RyaW5nfG51bGx8dW5kZWZpbmVkKTogRXhwcmVzc2lvbiB7XG4gIGlmIChwcm92aWRlZEluID09IG51bGwgfHwgdHlwZW9mIHByb3ZpZGVkSW4gPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsRXhwcihwcm92aWRlZEluKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZWROb2RlRXhwcihwcm92aWRlZEluKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0UjNEZXBlbmRlbmN5TWV0YWRhdGEoZmFjYWRlOiBSM0RlcGVuZGVuY3lNZXRhZGF0YUZhY2FkZSk6IFIzRGVwZW5kZW5jeU1ldGFkYXRhIHtcbiAgbGV0IHRva2VuRXhwcjtcbiAgaWYgKGZhY2FkZS50b2tlbiA9PT0gbnVsbCkge1xuICAgIHRva2VuRXhwciA9IG5ldyBMaXRlcmFsRXhwcihudWxsKTtcbiAgfSBlbHNlIGlmIChmYWNhZGUucmVzb2x2ZWQgPT09IFIzUmVzb2x2ZWREZXBlbmRlbmN5VHlwZS5BdHRyaWJ1dGUpIHtcbiAgICB0b2tlbkV4cHIgPSBuZXcgTGl0ZXJhbEV4cHIoZmFjYWRlLnRva2VuKTtcbiAgfSBlbHNlIHtcbiAgICB0b2tlbkV4cHIgPSBuZXcgV3JhcHBlZE5vZGVFeHByKGZhY2FkZS50b2tlbik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW5FeHByLFxuICAgIGF0dHJpYnV0ZTogbnVsbCxcbiAgICByZXNvbHZlZDogZmFjYWRlLnJlc29sdmVkLFxuICAgIGhvc3Q6IGZhY2FkZS5ob3N0LFxuICAgIG9wdGlvbmFsOiBmYWNhZGUub3B0aW9uYWwsXG4gICAgc2VsZjogZmFjYWRlLnNlbGYsXG4gICAgc2tpcFNlbGY6IGZhY2FkZS5za2lwU2VsZixcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29udmVydFIzRGVwZW5kZW5jeU1ldGFkYXRhQXJyYXkoZmFjYWRlczogUjNEZXBlbmRlbmN5TWV0YWRhdGFGYWNhZGVbXXxudWxsfFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkKTogUjNEZXBlbmRlbmN5TWV0YWRhdGFbXXxudWxsIHtcbiAgcmV0dXJuIGZhY2FkZXMgPT0gbnVsbCA/IG51bGwgOiBmYWNhZGVzLm1hcChjb252ZXJ0UjNEZXBlbmRlbmN5TWV0YWRhdGEpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SG9zdEJpbmRpbmdzKFxuICAgIHByb3BNZXRhZGF0YToge1trZXk6IHN0cmluZ106IGFueVtdfSwgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIGhvc3Q/OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSk6IFBhcnNlZEhvc3RCaW5kaW5ncyB7XG4gIC8vIEZpcnN0IHBhcnNlIHRoZSBkZWNsYXJhdGlvbnMgZnJvbSB0aGUgbWV0YWRhdGEuXG4gIGNvbnN0IGJpbmRpbmdzID0gcGFyc2VIb3N0QmluZGluZ3MoaG9zdCB8fCB7fSk7XG5cbiAgLy8gQWZ0ZXIgdGhhdCBjaGVjayBob3N0IGJpbmRpbmdzIGZvciBlcnJvcnNcbiAgY29uc3QgZXJyb3JzID0gdmVyaWZ5SG9zdEJpbmRpbmdzKGJpbmRpbmdzLCBzb3VyY2VTcGFuKTtcbiAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JzLm1hcCgoZXJyb3I6IFBhcnNlRXJyb3IpID0+IGVycm9yLm1zZykuam9pbignXFxuJykpO1xuICB9XG5cbiAgLy8gTmV4dCwgbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBvYmplY3QsIGxvb2tpbmcgZm9yIEBIb3N0QmluZGluZyBhbmQgQEhvc3RMaXN0ZW5lci5cbiAgZm9yIChjb25zdCBmaWVsZCBpbiBwcm9wTWV0YWRhdGEpIHtcbiAgICBpZiAocHJvcE1ldGFkYXRhLmhhc093blByb3BlcnR5KGZpZWxkKSkge1xuICAgICAgcHJvcE1ldGFkYXRhW2ZpZWxkXS5mb3JFYWNoKGFubiA9PiB7XG4gICAgICAgIGlmIChpc0hvc3RCaW5kaW5nKGFubikpIHtcbiAgICAgICAgICBiaW5kaW5ncy5wcm9wZXJ0aWVzW2Fubi5ob3N0UHJvcGVydHlOYW1lIHx8IGZpZWxkXSA9IGZpZWxkO1xuICAgICAgICB9IGVsc2UgaWYgKGlzSG9zdExpc3RlbmVyKGFubikpIHtcbiAgICAgICAgICBiaW5kaW5ncy5saXN0ZW5lcnNbYW5uLmV2ZW50TmFtZSB8fCBmaWVsZF0gPSBgJHtmaWVsZH0oJHsoYW5uLmFyZ3MgfHwgW10pLmpvaW4oJywnKX0pYDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJpbmRpbmdzO1xufVxuXG5mdW5jdGlvbiBpc0hvc3RCaW5kaW5nKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBIb3N0QmluZGluZyB7XG4gIHJldHVybiB2YWx1ZS5uZ01ldGFkYXRhTmFtZSA9PT0gJ0hvc3RCaW5kaW5nJztcbn1cblxuZnVuY3Rpb24gaXNIb3N0TGlzdGVuZXIodmFsdWU6IGFueSk6IHZhbHVlIGlzIEhvc3RMaXN0ZW5lciB7XG4gIHJldHVybiB2YWx1ZS5uZ01ldGFkYXRhTmFtZSA9PT0gJ0hvc3RMaXN0ZW5lcic7XG59XG5cblxuZnVuY3Rpb24gaXNJbnB1dCh2YWx1ZTogYW55KTogdmFsdWUgaXMgSW5wdXQge1xuICByZXR1cm4gdmFsdWUubmdNZXRhZGF0YU5hbWUgPT09ICdJbnB1dCc7XG59XG5cbmZ1bmN0aW9uIGlzT3V0cHV0KHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBPdXRwdXQge1xuICByZXR1cm4gdmFsdWUubmdNZXRhZGF0YU5hbWUgPT09ICdPdXRwdXQnO1xufVxuXG5mdW5jdGlvbiBwYXJzZUlucHV0T3V0cHV0cyh2YWx1ZXM6IHN0cmluZ1tdKTogU3RyaW5nTWFwIHtcbiAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoKG1hcCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBbZmllbGQsIHByb3BlcnR5XSA9IHZhbHVlLnNwbGl0KCcsJykubWFwKHBpZWNlID0+IHBpZWNlLnRyaW0oKSk7XG4gICAgbWFwW2ZpZWxkXSA9IHByb3BlcnR5IHx8IGZpZWxkO1xuICAgIHJldHVybiBtYXA7XG4gIH0sIHt9IGFzIFN0cmluZ01hcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdWJsaXNoRmFjYWRlKGdsb2JhbDogYW55KSB7XG4gIGNvbnN0IG5nOiBFeHBvcnRlZENvbXBpbGVyRmFjYWRlID0gZ2xvYmFsLm5nIHx8IChnbG9iYWwubmcgPSB7fSk7XG4gIG5nLsm1Y29tcGlsZXJGYWNhZGUgPSBuZXcgQ29tcGlsZXJGYWNhZGVJbXBsKCk7XG59XG4iXX0=
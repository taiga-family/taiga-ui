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
        define("@angular/compiler/src/aot/static_reflector", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata", "@angular/compiler/src/core", "@angular/compiler/src/util", "@angular/compiler/src/aot/formatted_error", "@angular/compiler/src/aot/static_symbol"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    var core_1 = require("@angular/compiler/src/core");
    var util_1 = require("@angular/compiler/src/util");
    var formatted_error_1 = require("@angular/compiler/src/aot/formatted_error");
    var static_symbol_1 = require("@angular/compiler/src/aot/static_symbol");
    var ANGULAR_CORE = '@angular/core';
    var ANGULAR_ROUTER = '@angular/router';
    var HIDDEN_KEY = /^\$.*\$$/;
    var IGNORE = {
        __symbolic: 'ignore'
    };
    var USE_VALUE = 'useValue';
    var PROVIDE = 'provide';
    var REFERENCE_SET = new Set([USE_VALUE, 'useFactory', 'data', 'id', 'loadChildren']);
    var TYPEGUARD_POSTFIX = 'TypeGuard';
    var USE_IF = 'UseIf';
    function shouldIgnore(value) {
        return value && value.__symbolic == 'ignore';
    }
    /**
     * A static reflector implements enough of the Reflector API that is necessary to compile
     * templates statically.
     */
    var StaticReflector = /** @class */ (function () {
        function StaticReflector(summaryResolver, symbolResolver, knownMetadataClasses, knownMetadataFunctions, errorRecorder) {
            var _this = this;
            if (knownMetadataClasses === void 0) { knownMetadataClasses = []; }
            if (knownMetadataFunctions === void 0) { knownMetadataFunctions = []; }
            this.summaryResolver = summaryResolver;
            this.symbolResolver = symbolResolver;
            this.errorRecorder = errorRecorder;
            this.annotationCache = new Map();
            this.shallowAnnotationCache = new Map();
            this.propertyCache = new Map();
            this.parameterCache = new Map();
            this.methodCache = new Map();
            this.staticCache = new Map();
            this.conversionMap = new Map();
            this.resolvedExternalReferences = new Map();
            this.annotationForParentClassWithSummaryKind = new Map();
            this.initializeConversionMap();
            knownMetadataClasses.forEach(function (kc) { return _this._registerDecoratorOrConstructor(_this.getStaticSymbol(kc.filePath, kc.name), kc.ctor); });
            knownMetadataFunctions.forEach(function (kf) { return _this._registerFunction(_this.getStaticSymbol(kf.filePath, kf.name), kf.fn); });
            this.annotationForParentClassWithSummaryKind.set(compile_metadata_1.CompileSummaryKind.Directive, [core_1.createDirective, core_1.createComponent]);
            this.annotationForParentClassWithSummaryKind.set(compile_metadata_1.CompileSummaryKind.Pipe, [core_1.createPipe]);
            this.annotationForParentClassWithSummaryKind.set(compile_metadata_1.CompileSummaryKind.NgModule, [core_1.createNgModule]);
            this.annotationForParentClassWithSummaryKind.set(compile_metadata_1.CompileSummaryKind.Injectable, [core_1.createInjectable, core_1.createPipe, core_1.createDirective, core_1.createComponent, core_1.createNgModule]);
        }
        StaticReflector.prototype.componentModuleUrl = function (typeOrFunc) {
            var staticSymbol = this.findSymbolDeclaration(typeOrFunc);
            return this.symbolResolver.getResourcePath(staticSymbol);
        };
        /**
         * Invalidate the specified `symbols` on program change.
         * @param symbols
         */
        StaticReflector.prototype.invalidateSymbols = function (symbols) {
            var e_1, _a;
            try {
                for (var symbols_1 = tslib_1.__values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                    var symbol = symbols_1_1.value;
                    this.annotationCache.delete(symbol);
                    this.shallowAnnotationCache.delete(symbol);
                    this.propertyCache.delete(symbol);
                    this.parameterCache.delete(symbol);
                    this.methodCache.delete(symbol);
                    this.staticCache.delete(symbol);
                    this.conversionMap.delete(symbol);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        StaticReflector.prototype.resolveExternalReference = function (ref, containingFile) {
            var key = undefined;
            if (!containingFile) {
                key = ref.moduleName + ":" + ref.name;
                var declarationSymbol_1 = this.resolvedExternalReferences.get(key);
                if (declarationSymbol_1)
                    return declarationSymbol_1;
            }
            var refSymbol = this.symbolResolver.getSymbolByModule(ref.moduleName, ref.name, containingFile);
            var declarationSymbol = this.findSymbolDeclaration(refSymbol);
            if (!containingFile) {
                this.symbolResolver.recordModuleNameForFileName(refSymbol.filePath, ref.moduleName);
                this.symbolResolver.recordImportAs(declarationSymbol, refSymbol);
            }
            if (key) {
                this.resolvedExternalReferences.set(key, declarationSymbol);
            }
            return declarationSymbol;
        };
        StaticReflector.prototype.findDeclaration = function (moduleUrl, name, containingFile) {
            return this.findSymbolDeclaration(this.symbolResolver.getSymbolByModule(moduleUrl, name, containingFile));
        };
        StaticReflector.prototype.tryFindDeclaration = function (moduleUrl, name, containingFile) {
            var _this = this;
            return this.symbolResolver.ignoreErrorsFor(function () { return _this.findDeclaration(moduleUrl, name, containingFile); });
        };
        StaticReflector.prototype.findSymbolDeclaration = function (symbol) {
            var resolvedSymbol = this.symbolResolver.resolveSymbol(symbol);
            if (resolvedSymbol) {
                var resolvedMetadata = resolvedSymbol.metadata;
                if (resolvedMetadata && resolvedMetadata.__symbolic === 'resolved') {
                    resolvedMetadata = resolvedMetadata.symbol;
                }
                if (resolvedMetadata instanceof static_symbol_1.StaticSymbol) {
                    return this.findSymbolDeclaration(resolvedSymbol.metadata);
                }
            }
            return symbol;
        };
        StaticReflector.prototype.tryAnnotations = function (type) {
            var originalRecorder = this.errorRecorder;
            this.errorRecorder = function (error, fileName) { };
            try {
                return this.annotations(type);
            }
            finally {
                this.errorRecorder = originalRecorder;
            }
        };
        StaticReflector.prototype.annotations = function (type) {
            var _this = this;
            return this._annotations(type, function (type, decorators) { return _this.simplify(type, decorators); }, this.annotationCache);
        };
        StaticReflector.prototype.shallowAnnotations = function (type) {
            var _this = this;
            return this._annotations(type, function (type, decorators) { return _this.simplify(type, decorators, true); }, this.shallowAnnotationCache);
        };
        StaticReflector.prototype._annotations = function (type, simplify, annotationCache) {
            var annotations = annotationCache.get(type);
            if (!annotations) {
                annotations = [];
                var classMetadata = this.getTypeMetadata(type);
                var parentType = this.findParentType(type, classMetadata);
                if (parentType) {
                    var parentAnnotations = this.annotations(parentType);
                    annotations.push.apply(annotations, tslib_1.__spread(parentAnnotations));
                }
                var ownAnnotations_1 = [];
                if (classMetadata['decorators']) {
                    ownAnnotations_1 = simplify(type, classMetadata['decorators']);
                    if (ownAnnotations_1) {
                        annotations.push.apply(annotations, tslib_1.__spread(ownAnnotations_1));
                    }
                }
                if (parentType && !this.summaryResolver.isLibraryFile(type.filePath) &&
                    this.summaryResolver.isLibraryFile(parentType.filePath)) {
                    var summary = this.summaryResolver.resolveSummary(parentType);
                    if (summary && summary.type) {
                        var requiredAnnotationTypes = this.annotationForParentClassWithSummaryKind.get(summary.type.summaryKind);
                        var typeHasRequiredAnnotation = requiredAnnotationTypes.some(function (requiredType) { return ownAnnotations_1.some(function (ann) { return requiredType.isTypeOf(ann); }); });
                        if (!typeHasRequiredAnnotation) {
                            this.reportError(formatMetadataError(metadataError("Class " + type.name + " in " + type.filePath + " extends from a " + compile_metadata_1.CompileSummaryKind[summary.type.summaryKind] + " in another compilation unit without duplicating the decorator", 
                            /* summary */ undefined, "Please add a " + requiredAnnotationTypes.map(function (type) { return type.ngMetadataName; })
                                .join(' or ') + " decorator to the class"), type), type);
                        }
                    }
                }
                annotationCache.set(type, annotations.filter(function (ann) { return !!ann; }));
            }
            return annotations;
        };
        StaticReflector.prototype.propMetadata = function (type) {
            var _this = this;
            var propMetadata = this.propertyCache.get(type);
            if (!propMetadata) {
                var classMetadata = this.getTypeMetadata(type);
                propMetadata = {};
                var parentType = this.findParentType(type, classMetadata);
                if (parentType) {
                    var parentPropMetadata_1 = this.propMetadata(parentType);
                    Object.keys(parentPropMetadata_1).forEach(function (parentProp) {
                        propMetadata[parentProp] = parentPropMetadata_1[parentProp];
                    });
                }
                var members_1 = classMetadata['members'] || {};
                Object.keys(members_1).forEach(function (propName) {
                    var propData = members_1[propName];
                    var prop = propData
                        .find(function (a) { return a['__symbolic'] == 'property' || a['__symbolic'] == 'method'; });
                    var decorators = [];
                    if (propMetadata[propName]) {
                        decorators.push.apply(decorators, tslib_1.__spread(propMetadata[propName]));
                    }
                    propMetadata[propName] = decorators;
                    if (prop && prop['decorators']) {
                        decorators.push.apply(decorators, tslib_1.__spread(_this.simplify(type, prop['decorators'])));
                    }
                });
                this.propertyCache.set(type, propMetadata);
            }
            return propMetadata;
        };
        StaticReflector.prototype.parameters = function (type) {
            var _this = this;
            if (!(type instanceof static_symbol_1.StaticSymbol)) {
                this.reportError(new Error("parameters received " + JSON.stringify(type) + " which is not a StaticSymbol"), type);
                return [];
            }
            try {
                var parameters_1 = this.parameterCache.get(type);
                if (!parameters_1) {
                    var classMetadata = this.getTypeMetadata(type);
                    var parentType = this.findParentType(type, classMetadata);
                    var members = classMetadata ? classMetadata['members'] : null;
                    var ctorData = members ? members['__ctor__'] : null;
                    if (ctorData) {
                        var ctor = ctorData.find(function (a) { return a['__symbolic'] == 'constructor'; });
                        var rawParameterTypes = ctor['parameters'] || [];
                        var parameterDecorators_1 = this.simplify(type, ctor['parameterDecorators'] || []);
                        parameters_1 = [];
                        rawParameterTypes.forEach(function (rawParamType, index) {
                            var nestedResult = [];
                            var paramType = _this.trySimplify(type, rawParamType);
                            if (paramType)
                                nestedResult.push(paramType);
                            var decorators = parameterDecorators_1 ? parameterDecorators_1[index] : null;
                            if (decorators) {
                                nestedResult.push.apply(nestedResult, tslib_1.__spread(decorators));
                            }
                            parameters_1.push(nestedResult);
                        });
                    }
                    else if (parentType) {
                        parameters_1 = this.parameters(parentType);
                    }
                    if (!parameters_1) {
                        parameters_1 = [];
                    }
                    this.parameterCache.set(type, parameters_1);
                }
                return parameters_1;
            }
            catch (e) {
                console.error("Failed on type " + JSON.stringify(type) + " with error " + e);
                throw e;
            }
        };
        StaticReflector.prototype._methodNames = function (type) {
            var methodNames = this.methodCache.get(type);
            if (!methodNames) {
                var classMetadata = this.getTypeMetadata(type);
                methodNames = {};
                var parentType = this.findParentType(type, classMetadata);
                if (parentType) {
                    var parentMethodNames_1 = this._methodNames(parentType);
                    Object.keys(parentMethodNames_1).forEach(function (parentProp) {
                        methodNames[parentProp] = parentMethodNames_1[parentProp];
                    });
                }
                var members_2 = classMetadata['members'] || {};
                Object.keys(members_2).forEach(function (propName) {
                    var propData = members_2[propName];
                    var isMethod = propData.some(function (a) { return a['__symbolic'] == 'method'; });
                    methodNames[propName] = methodNames[propName] || isMethod;
                });
                this.methodCache.set(type, methodNames);
            }
            return methodNames;
        };
        StaticReflector.prototype._staticMembers = function (type) {
            var staticMembers = this.staticCache.get(type);
            if (!staticMembers) {
                var classMetadata = this.getTypeMetadata(type);
                var staticMemberData = classMetadata['statics'] || {};
                staticMembers = Object.keys(staticMemberData);
                this.staticCache.set(type, staticMembers);
            }
            return staticMembers;
        };
        StaticReflector.prototype.findParentType = function (type, classMetadata) {
            var parentType = this.trySimplify(type, classMetadata['extends']);
            if (parentType instanceof static_symbol_1.StaticSymbol) {
                return parentType;
            }
        };
        StaticReflector.prototype.hasLifecycleHook = function (type, lcProperty) {
            if (!(type instanceof static_symbol_1.StaticSymbol)) {
                this.reportError(new Error("hasLifecycleHook received " + JSON.stringify(type) + " which is not a StaticSymbol"), type);
            }
            try {
                return !!this._methodNames(type)[lcProperty];
            }
            catch (e) {
                console.error("Failed on type " + JSON.stringify(type) + " with error " + e);
                throw e;
            }
        };
        StaticReflector.prototype.guards = function (type) {
            var e_2, _a;
            if (!(type instanceof static_symbol_1.StaticSymbol)) {
                this.reportError(new Error("guards received " + JSON.stringify(type) + " which is not a StaticSymbol"), type);
                return {};
            }
            var staticMembers = this._staticMembers(type);
            var result = {};
            try {
                for (var staticMembers_1 = tslib_1.__values(staticMembers), staticMembers_1_1 = staticMembers_1.next(); !staticMembers_1_1.done; staticMembers_1_1 = staticMembers_1.next()) {
                    var name_1 = staticMembers_1_1.value;
                    if (name_1.endsWith(TYPEGUARD_POSTFIX)) {
                        var property = name_1.substr(0, name_1.length - TYPEGUARD_POSTFIX.length);
                        var value = void 0;
                        if (property.endsWith(USE_IF)) {
                            property = name_1.substr(0, property.length - USE_IF.length);
                            value = USE_IF;
                        }
                        else {
                            value = this.getStaticSymbol(type.filePath, type.name, [name_1]);
                        }
                        result[property] = value;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (staticMembers_1_1 && !staticMembers_1_1.done && (_a = staticMembers_1.return)) _a.call(staticMembers_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return result;
        };
        StaticReflector.prototype._registerDecoratorOrConstructor = function (type, ctor) {
            this.conversionMap.set(type, function (context, args) { return new (ctor.bind.apply(ctor, tslib_1.__spread([void 0], args)))(); });
        };
        StaticReflector.prototype._registerFunction = function (type, fn) {
            this.conversionMap.set(type, function (context, args) { return fn.apply(undefined, args); });
        };
        StaticReflector.prototype.initializeConversionMap = function () {
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Injectable'), core_1.createInjectable);
            this.injectionToken = this.findDeclaration(ANGULAR_CORE, 'InjectionToken');
            this.opaqueToken = this.findDeclaration(ANGULAR_CORE, 'OpaqueToken');
            this.ROUTES = this.tryFindDeclaration(ANGULAR_ROUTER, 'ROUTES');
            this.ANALYZE_FOR_ENTRY_COMPONENTS =
                this.findDeclaration(ANGULAR_CORE, 'ANALYZE_FOR_ENTRY_COMPONENTS');
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Host'), core_1.createHost);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Self'), core_1.createSelf);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'SkipSelf'), core_1.createSkipSelf);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Inject'), core_1.createInject);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Optional'), core_1.createOptional);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Attribute'), core_1.createAttribute);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ContentChild'), core_1.createContentChild);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ContentChildren'), core_1.createContentChildren);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ViewChild'), core_1.createViewChild);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ViewChildren'), core_1.createViewChildren);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Input'), core_1.createInput);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Output'), core_1.createOutput);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Pipe'), core_1.createPipe);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'HostBinding'), core_1.createHostBinding);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'HostListener'), core_1.createHostListener);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Directive'), core_1.createDirective);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Component'), core_1.createComponent);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'NgModule'), core_1.createNgModule);
            // Note: Some metadata classes can be used directly with Provider.deps.
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Host'), core_1.createHost);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Self'), core_1.createSelf);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'SkipSelf'), core_1.createSkipSelf);
            this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Optional'), core_1.createOptional);
        };
        /**
         * getStaticSymbol produces a Type whose metadata is known but whose implementation is not loaded.
         * All types passed to the StaticResolver should be pseudo-types returned by this method.
         *
         * @param declarationFile the absolute path of the file where the symbol is declared
         * @param name the name of the type.
         */
        StaticReflector.prototype.getStaticSymbol = function (declarationFile, name, members) {
            return this.symbolResolver.getStaticSymbol(declarationFile, name, members);
        };
        /**
         * Simplify but discard any errors
         */
        StaticReflector.prototype.trySimplify = function (context, value) {
            var originalRecorder = this.errorRecorder;
            this.errorRecorder = function (error, fileName) { };
            var result = this.simplify(context, value);
            this.errorRecorder = originalRecorder;
            return result;
        };
        /** @internal */
        StaticReflector.prototype.simplify = function (context, value, lazy) {
            if (lazy === void 0) { lazy = false; }
            var self = this;
            var scope = BindingScope.empty;
            var calling = new Map();
            var rootContext = context;
            function simplifyInContext(context, value, depth, references) {
                function resolveReferenceValue(staticSymbol) {
                    var resolvedSymbol = self.symbolResolver.resolveSymbol(staticSymbol);
                    return resolvedSymbol ? resolvedSymbol.metadata : null;
                }
                function simplifyEagerly(value) {
                    return simplifyInContext(context, value, depth, 0);
                }
                function simplifyLazily(value) {
                    return simplifyInContext(context, value, depth, references + 1);
                }
                function simplifyNested(nestedContext, value) {
                    if (nestedContext === context) {
                        // If the context hasn't changed let the exception propagate unmodified.
                        return simplifyInContext(nestedContext, value, depth + 1, references);
                    }
                    try {
                        return simplifyInContext(nestedContext, value, depth + 1, references);
                    }
                    catch (e) {
                        if (isMetadataError(e)) {
                            // Propagate the message text up but add a message to the chain that explains how we got
                            // here.
                            // e.chain implies e.symbol
                            var summaryMsg = e.chain ? 'references \'' + e.symbol.name + '\'' : errorSummary(e);
                            var summary = "'" + nestedContext.name + "' " + summaryMsg;
                            var chain = { message: summary, position: e.position, next: e.chain };
                            // TODO(chuckj): retrieve the position information indirectly from the collectors node
                            // map if the metadata is from a .ts file.
                            self.error({
                                message: e.message,
                                advise: e.advise,
                                context: e.context,
                                chain: chain,
                                symbol: nestedContext
                            }, context);
                        }
                        else {
                            // It is probably an internal error.
                            throw e;
                        }
                    }
                }
                function simplifyCall(functionSymbol, targetFunction, args, targetExpression) {
                    if (targetFunction && targetFunction['__symbolic'] == 'function') {
                        if (calling.get(functionSymbol)) {
                            self.error({
                                message: 'Recursion is not supported',
                                summary: "called '" + functionSymbol.name + "' recursively",
                                value: targetFunction
                            }, functionSymbol);
                        }
                        try {
                            var value_1 = targetFunction['value'];
                            if (value_1 && (depth != 0 || value_1.__symbolic != 'error')) {
                                var parameters = targetFunction['parameters'];
                                var defaults = targetFunction.defaults;
                                args = args.map(function (arg) { return simplifyNested(context, arg); })
                                    .map(function (arg) { return shouldIgnore(arg) ? undefined : arg; });
                                if (defaults && defaults.length > args.length) {
                                    args.push.apply(args, tslib_1.__spread(defaults.slice(args.length).map(function (value) { return simplify(value); })));
                                }
                                calling.set(functionSymbol, true);
                                var functionScope = BindingScope.build();
                                for (var i = 0; i < parameters.length; i++) {
                                    functionScope.define(parameters[i], args[i]);
                                }
                                var oldScope = scope;
                                var result_1;
                                try {
                                    scope = functionScope.done();
                                    result_1 = simplifyNested(functionSymbol, value_1);
                                }
                                finally {
                                    scope = oldScope;
                                }
                                return result_1;
                            }
                        }
                        finally {
                            calling.delete(functionSymbol);
                        }
                    }
                    if (depth === 0) {
                        // If depth is 0 we are evaluating the top level expression that is describing element
                        // decorator. In this case, it is a decorator we don't understand, such as a custom
                        // non-angular decorator, and we should just ignore it.
                        return IGNORE;
                    }
                    var position = undefined;
                    if (targetExpression && targetExpression.__symbolic == 'resolved') {
                        var line = targetExpression.line;
                        var character = targetExpression.character;
                        var fileName = targetExpression.fileName;
                        if (fileName != null && line != null && character != null) {
                            position = { fileName: fileName, line: line, column: character };
                        }
                    }
                    self.error({
                        message: FUNCTION_CALL_NOT_SUPPORTED,
                        context: functionSymbol,
                        value: targetFunction,
                        position: position
                    }, context);
                }
                function simplify(expression) {
                    var e_3, _a, e_4, _b;
                    if (isPrimitive(expression)) {
                        return expression;
                    }
                    if (Array.isArray(expression)) {
                        var result_2 = [];
                        try {
                            for (var _c = tslib_1.__values(expression), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var item = _d.value;
                                // Check for a spread expression
                                if (item && item.__symbolic === 'spread') {
                                    // We call with references as 0 because we require the actual value and cannot
                                    // tolerate a reference here.
                                    var spreadArray = simplifyEagerly(item.expression);
                                    if (Array.isArray(spreadArray)) {
                                        try {
                                            for (var spreadArray_1 = (e_4 = void 0, tslib_1.__values(spreadArray)), spreadArray_1_1 = spreadArray_1.next(); !spreadArray_1_1.done; spreadArray_1_1 = spreadArray_1.next()) {
                                                var spreadItem = spreadArray_1_1.value;
                                                result_2.push(spreadItem);
                                            }
                                        }
                                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                        finally {
                                            try {
                                                if (spreadArray_1_1 && !spreadArray_1_1.done && (_b = spreadArray_1.return)) _b.call(spreadArray_1);
                                            }
                                            finally { if (e_4) throw e_4.error; }
                                        }
                                        continue;
                                    }
                                }
                                var value_2 = simplify(item);
                                if (shouldIgnore(value_2)) {
                                    continue;
                                }
                                result_2.push(value_2);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return result_2;
                    }
                    if (expression instanceof static_symbol_1.StaticSymbol) {
                        // Stop simplification at builtin symbols or if we are in a reference context and
                        // the symbol doesn't have members.
                        if (expression === self.injectionToken || self.conversionMap.has(expression) ||
                            (references > 0 && !expression.members.length)) {
                            return expression;
                        }
                        else {
                            var staticSymbol = expression;
                            var declarationValue = resolveReferenceValue(staticSymbol);
                            if (declarationValue != null) {
                                return simplifyNested(staticSymbol, declarationValue);
                            }
                            else {
                                return staticSymbol;
                            }
                        }
                    }
                    if (expression) {
                        if (expression['__symbolic']) {
                            var staticSymbol = void 0;
                            switch (expression['__symbolic']) {
                                case 'binop':
                                    var left = simplify(expression['left']);
                                    if (shouldIgnore(left))
                                        return left;
                                    var right = simplify(expression['right']);
                                    if (shouldIgnore(right))
                                        return right;
                                    switch (expression['operator']) {
                                        case '&&':
                                            return left && right;
                                        case '||':
                                            return left || right;
                                        case '|':
                                            return left | right;
                                        case '^':
                                            return left ^ right;
                                        case '&':
                                            return left & right;
                                        case '==':
                                            return left == right;
                                        case '!=':
                                            return left != right;
                                        case '===':
                                            return left === right;
                                        case '!==':
                                            return left !== right;
                                        case '<':
                                            return left < right;
                                        case '>':
                                            return left > right;
                                        case '<=':
                                            return left <= right;
                                        case '>=':
                                            return left >= right;
                                        case '<<':
                                            return left << right;
                                        case '>>':
                                            return left >> right;
                                        case '+':
                                            return left + right;
                                        case '-':
                                            return left - right;
                                        case '*':
                                            return left * right;
                                        case '/':
                                            return left / right;
                                        case '%':
                                            return left % right;
                                    }
                                    return null;
                                case 'if':
                                    var condition = simplify(expression['condition']);
                                    return condition ? simplify(expression['thenExpression']) :
                                        simplify(expression['elseExpression']);
                                case 'pre':
                                    var operand = simplify(expression['operand']);
                                    if (shouldIgnore(operand))
                                        return operand;
                                    switch (expression['operator']) {
                                        case '+':
                                            return operand;
                                        case '-':
                                            return -operand;
                                        case '!':
                                            return !operand;
                                        case '~':
                                            return ~operand;
                                    }
                                    return null;
                                case 'index':
                                    var indexTarget = simplifyEagerly(expression['expression']);
                                    var index = simplifyEagerly(expression['index']);
                                    if (indexTarget && isPrimitive(index))
                                        return indexTarget[index];
                                    return null;
                                case 'select':
                                    var member = expression['member'];
                                    var selectContext = context;
                                    var selectTarget = simplify(expression['expression']);
                                    if (selectTarget instanceof static_symbol_1.StaticSymbol) {
                                        var members = selectTarget.members.concat(member);
                                        selectContext =
                                            self.getStaticSymbol(selectTarget.filePath, selectTarget.name, members);
                                        var declarationValue = resolveReferenceValue(selectContext);
                                        if (declarationValue != null) {
                                            return simplifyNested(selectContext, declarationValue);
                                        }
                                        else {
                                            return selectContext;
                                        }
                                    }
                                    if (selectTarget && isPrimitive(member))
                                        return simplifyNested(selectContext, selectTarget[member]);
                                    return null;
                                case 'reference':
                                    // Note: This only has to deal with variable references, as symbol references have
                                    // been converted into 'resolved'
                                    // in the StaticSymbolResolver.
                                    var name_2 = expression['name'];
                                    var localValue = scope.resolve(name_2);
                                    if (localValue != BindingScope.missing) {
                                        return localValue;
                                    }
                                    break;
                                case 'resolved':
                                    try {
                                        return simplify(expression.symbol);
                                    }
                                    catch (e) {
                                        // If an error is reported evaluating the symbol record the position of the
                                        // reference in the error so it can
                                        // be reported in the error message generated from the exception.
                                        if (isMetadataError(e) && expression.fileName != null &&
                                            expression.line != null && expression.character != null) {
                                            e.position = {
                                                fileName: expression.fileName,
                                                line: expression.line,
                                                column: expression.character
                                            };
                                        }
                                        throw e;
                                    }
                                case 'class':
                                    return context;
                                case 'function':
                                    return context;
                                case 'new':
                                case 'call':
                                    // Determine if the function is a built-in conversion
                                    staticSymbol = simplifyInContext(context, expression['expression'], depth + 1, /* references */ 0);
                                    if (staticSymbol instanceof static_symbol_1.StaticSymbol) {
                                        if (staticSymbol === self.injectionToken || staticSymbol === self.opaqueToken) {
                                            // if somebody calls new InjectionToken, don't create an InjectionToken,
                                            // but rather return the symbol to which the InjectionToken is assigned to.
                                            // OpaqueToken is supported too as it is required by the language service to
                                            // support v4 and prior versions of Angular.
                                            return context;
                                        }
                                        var argExpressions = expression['arguments'] || [];
                                        var converter = self.conversionMap.get(staticSymbol);
                                        if (converter) {
                                            var args = argExpressions.map(function (arg) { return simplifyNested(context, arg); })
                                                .map(function (arg) { return shouldIgnore(arg) ? undefined : arg; });
                                            return converter(context, args);
                                        }
                                        else {
                                            // Determine if the function is one we can simplify.
                                            var targetFunction = resolveReferenceValue(staticSymbol);
                                            return simplifyCall(staticSymbol, targetFunction, argExpressions, expression['expression']);
                                        }
                                    }
                                    return IGNORE;
                                case 'error':
                                    var message = expression.message;
                                    if (expression['line'] != null) {
                                        self.error({
                                            message: message,
                                            context: expression.context,
                                            value: expression,
                                            position: {
                                                fileName: expression['fileName'],
                                                line: expression['line'],
                                                column: expression['character']
                                            }
                                        }, context);
                                    }
                                    else {
                                        self.error({ message: message, context: expression.context }, context);
                                    }
                                    return IGNORE;
                                case 'ignore':
                                    return expression;
                            }
                            return null;
                        }
                        return mapStringMap(expression, function (value, name) {
                            if (REFERENCE_SET.has(name)) {
                                if (name === USE_VALUE && PROVIDE in expression) {
                                    // If this is a provider expression, check for special tokens that need the value
                                    // during analysis.
                                    var provide = simplify(expression.provide);
                                    if (provide === self.ROUTES || provide == self.ANALYZE_FOR_ENTRY_COMPONENTS) {
                                        return simplify(value);
                                    }
                                }
                                return simplifyLazily(value);
                            }
                            return simplify(value);
                        });
                    }
                    return IGNORE;
                }
                return simplify(value);
            }
            var result;
            try {
                result = simplifyInContext(context, value, 0, lazy ? 1 : 0);
            }
            catch (e) {
                if (this.errorRecorder) {
                    this.reportError(e, context);
                }
                else {
                    throw formatMetadataError(e, context);
                }
            }
            if (shouldIgnore(result)) {
                return undefined;
            }
            return result;
        };
        StaticReflector.prototype.getTypeMetadata = function (type) {
            var resolvedSymbol = this.symbolResolver.resolveSymbol(type);
            return resolvedSymbol && resolvedSymbol.metadata ? resolvedSymbol.metadata :
                { __symbolic: 'class' };
        };
        StaticReflector.prototype.reportError = function (error, context, path) {
            if (this.errorRecorder) {
                this.errorRecorder(formatMetadataError(error, context), (context && context.filePath) || path);
            }
            else {
                throw error;
            }
        };
        StaticReflector.prototype.error = function (_a, reportingContext) {
            var message = _a.message, summary = _a.summary, advise = _a.advise, position = _a.position, context = _a.context, value = _a.value, symbol = _a.symbol, chain = _a.chain;
            this.reportError(metadataError(message, summary, advise, position, symbol, context, chain), reportingContext);
        };
        return StaticReflector;
    }());
    exports.StaticReflector = StaticReflector;
    var METADATA_ERROR = 'ngMetadataError';
    function metadataError(message, summary, advise, position, symbol, context, chain) {
        var error = util_1.syntaxError(message);
        error[METADATA_ERROR] = true;
        if (advise)
            error.advise = advise;
        if (position)
            error.position = position;
        if (summary)
            error.summary = summary;
        if (context)
            error.context = context;
        if (chain)
            error.chain = chain;
        if (symbol)
            error.symbol = symbol;
        return error;
    }
    function isMetadataError(error) {
        return !!error[METADATA_ERROR];
    }
    var REFERENCE_TO_NONEXPORTED_CLASS = 'Reference to non-exported class';
    var VARIABLE_NOT_INITIALIZED = 'Variable not initialized';
    var DESTRUCTURE_NOT_SUPPORTED = 'Destructuring not supported';
    var COULD_NOT_RESOLVE_TYPE = 'Could not resolve type';
    var FUNCTION_CALL_NOT_SUPPORTED = 'Function call not supported';
    var REFERENCE_TO_LOCAL_SYMBOL = 'Reference to a local symbol';
    var LAMBDA_NOT_SUPPORTED = 'Lambda not supported';
    function expandedMessage(message, context) {
        switch (message) {
            case REFERENCE_TO_NONEXPORTED_CLASS:
                if (context && context.className) {
                    return "References to a non-exported class are not supported in decorators but " + context.className + " was referenced.";
                }
                break;
            case VARIABLE_NOT_INITIALIZED:
                return 'Only initialized variables and constants can be referenced in decorators because the value of this variable is needed by the template compiler';
            case DESTRUCTURE_NOT_SUPPORTED:
                return 'Referencing an exported destructured variable or constant is not supported in decorators and this value is needed by the template compiler';
            case COULD_NOT_RESOLVE_TYPE:
                if (context && context.typeName) {
                    return "Could not resolve type " + context.typeName;
                }
                break;
            case FUNCTION_CALL_NOT_SUPPORTED:
                if (context && context.name) {
                    return "Function calls are not supported in decorators but '" + context.name + "' was called";
                }
                return 'Function calls are not supported in decorators';
            case REFERENCE_TO_LOCAL_SYMBOL:
                if (context && context.name) {
                    return "Reference to a local (non-exported) symbols are not supported in decorators but '" + context.name + "' was referenced";
                }
                break;
            case LAMBDA_NOT_SUPPORTED:
                return "Function expressions are not supported in decorators";
        }
        return message;
    }
    function messageAdvise(message, context) {
        switch (message) {
            case REFERENCE_TO_NONEXPORTED_CLASS:
                if (context && context.className) {
                    return "Consider exporting '" + context.className + "'";
                }
                break;
            case DESTRUCTURE_NOT_SUPPORTED:
                return 'Consider simplifying to avoid destructuring';
            case REFERENCE_TO_LOCAL_SYMBOL:
                if (context && context.name) {
                    return "Consider exporting '" + context.name + "'";
                }
                break;
            case LAMBDA_NOT_SUPPORTED:
                return "Consider changing the function expression into an exported function";
        }
        return undefined;
    }
    function errorSummary(error) {
        if (error.summary) {
            return error.summary;
        }
        switch (error.message) {
            case REFERENCE_TO_NONEXPORTED_CLASS:
                if (error.context && error.context.className) {
                    return "references non-exported class " + error.context.className;
                }
                break;
            case VARIABLE_NOT_INITIALIZED:
                return 'is not initialized';
            case DESTRUCTURE_NOT_SUPPORTED:
                return 'is a destructured variable';
            case COULD_NOT_RESOLVE_TYPE:
                return 'could not be resolved';
            case FUNCTION_CALL_NOT_SUPPORTED:
                if (error.context && error.context.name) {
                    return "calls '" + error.context.name + "'";
                }
                return "calls a function";
            case REFERENCE_TO_LOCAL_SYMBOL:
                if (error.context && error.context.name) {
                    return "references local variable " + error.context.name;
                }
                return "references a local variable";
        }
        return 'contains the error';
    }
    function mapStringMap(input, transform) {
        if (!input)
            return {};
        var result = {};
        Object.keys(input).forEach(function (key) {
            var value = transform(input[key], key);
            if (!shouldIgnore(value)) {
                if (HIDDEN_KEY.test(key)) {
                    Object.defineProperty(result, key, { enumerable: false, configurable: true, value: value });
                }
                else {
                    result[key] = value;
                }
            }
        });
        return result;
    }
    function isPrimitive(o) {
        return o === null || (typeof o !== 'function' && typeof o !== 'object');
    }
    var BindingScope = /** @class */ (function () {
        function BindingScope() {
        }
        BindingScope.build = function () {
            var current = new Map();
            return {
                define: function (name, value) {
                    current.set(name, value);
                    return this;
                },
                done: function () {
                    return current.size > 0 ? new PopulatedScope(current) : BindingScope.empty;
                }
            };
        };
        BindingScope.missing = {};
        BindingScope.empty = { resolve: function (name) { return BindingScope.missing; } };
        return BindingScope;
    }());
    var PopulatedScope = /** @class */ (function (_super) {
        tslib_1.__extends(PopulatedScope, _super);
        function PopulatedScope(bindings) {
            var _this = _super.call(this) || this;
            _this.bindings = bindings;
            return _this;
        }
        PopulatedScope.prototype.resolve = function (name) {
            return this.bindings.has(name) ? this.bindings.get(name) : BindingScope.missing;
        };
        return PopulatedScope;
    }(BindingScope));
    function formatMetadataMessageChain(chain, advise) {
        var expanded = expandedMessage(chain.message, chain.context);
        var nesting = chain.symbol ? " in '" + chain.symbol.name + "'" : '';
        var message = "" + expanded + nesting;
        var position = chain.position;
        var next = chain.next ?
            formatMetadataMessageChain(chain.next, advise) :
            advise ? { message: advise } : undefined;
        return { message: message, position: position, next: next ? [next] : undefined };
    }
    function formatMetadataError(e, context) {
        if (isMetadataError(e)) {
            // Produce a formatted version of the and leaving enough information in the original error
            // to recover the formatting information to eventually produce a diagnostic error message.
            var position = e.position;
            var chain = {
                message: "Error during template compile of '" + context.name + "'",
                position: position,
                next: { message: e.message, next: e.chain, context: e.context, symbol: e.symbol }
            };
            var advise = e.advise || messageAdvise(e.message, e.context);
            return formatted_error_1.formattedError(formatMetadataMessageChain(chain, advise));
        }
        return e;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3JlZmxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9hb3Qvc3RhdGljX3JlZmxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7SUFFSCwyRUFBdUQ7SUFFdkQsbURBQWlXO0lBR2pXLG1EQUFvQztJQUVwQyw2RUFBd0U7SUFDeEUseUVBQTZDO0lBRzdDLElBQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQztJQUNyQyxJQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztJQUV6QyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFFOUIsSUFBTSxNQUFNLEdBQUc7UUFDYixVQUFVLEVBQUUsUUFBUTtLQUNyQixDQUFDO0lBRUYsSUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQzdCLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMxQixJQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLElBQU0saUJBQWlCLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUV2QixTQUFTLFlBQVksQ0FBQyxLQUFVO1FBQzlCLE9BQU8sS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSDtRQW9CRSx5QkFDWSxlQUE4QyxFQUM5QyxjQUFvQyxFQUM1QyxvQkFBd0UsRUFDeEUsc0JBQXdFLEVBQ2hFLGFBQXVEO1lBTG5FLGlCQW1CQztZQWhCRyxxQ0FBQSxFQUFBLHlCQUF3RTtZQUN4RSx1Q0FBQSxFQUFBLDJCQUF3RTtZQUhoRSxvQkFBZSxHQUFmLGVBQWUsQ0FBK0I7WUFDOUMsbUJBQWMs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OzRDQUNQLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQzt3Q0FDdkIsS0FBSyxLQUFLOzRDQUNSLE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQzt3Q0FDeEIsS0FBSyxLQUFLOzRDQUNSLE9BQU8sSUFBSSxLQUFLLEtBQUssQ0FBQzt3Q0FDeEIsS0FBSyxHQUFHOzRDQUNOLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQzt3Q0FDdEIsS0FBSyxHQUFHOzRDQUNOLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQzt3Q0FDdEIsS0FBSyxJQUFJOzRDQUNQLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQzt3Q0FDdkIsS0FBSyxJQUFJOzRDQUNQLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQzt3Q0FDdkIsS0FBSyxJQUFJOzRDQUNQLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQzt3Q0FDdkIsS0FBSyxJQUFJOzRDQUNQLE9BQU8sSUFBSSxJQUFJLEtBQUssQ0FBQzt3Q0FDdkIsS0FBSyxHQUFHOzRDQUNOLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQzt3Q0FDdEIsS0FBSyxHQUFHOzRDQUNOLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQzt3Q0FDdEIsS0FBSyxHQUFHOzRDQUNOLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQzt3Q0FDdEIsS0FBSyxHQUFHOzRDQUNOLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQzt3Q0FDdEIsS0FBSyxHQUFHOzRDQUNOLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQztxQ0FDdkI7b0NBQ0QsT0FBTyxJQUFJLENBQUM7Z0NBQ2QsS0FBSyxJQUFJO29DQUNQLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQ0FDbEQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ3hDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dDQUM1RCxLQUFL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LyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBpbGVTdW1tYXJ5S2luZH0gZnJvbSAnLi4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4uL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7Y3JlYXRlQXR0cmlidXRlLCBjcmVhdGVDb21wb25lbnQsIGNyZWF0ZUNvbnRlbnRDaGlsZCwgY3JlYXRlQ29udGVudENoaWxkcmVuLCBjcmVhdGVEaXJlY3RpdmUsIGNyZWF0ZUhvc3QsIGNyZWF0ZUhvc3RCaW5kaW5nLCBjcmVhdGVIb3N0TGlzdGVuZXIsIGNyZWF0ZUluamVjdCwgY3JlYXRlSW5qZWN0YWJsZSwgY3JlYXRlSW5wdXQsIGNyZWF0ZU5nTW9kdWxlLCBjcmVhdGVPcHRpb25hbCwgY3JlYXRlT3V0cHV0LCBjcmVhdGVQaXBlLCBjcmVhdGVTZWxmLCBjcmVhdGVTa2lwU2VsZiwgY3JlYXRlVmlld0NoaWxkLCBjcmVhdGVWaWV3Q2hpbGRyZW4sIE1ldGFkYXRhRmFjdG9yeX0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7U3VtbWFyeVJlc29sdmVyfSBmcm9tICcuLi9zdW1tYXJ5X3Jlc29sdmVyJztcbmltcG9ydCB7c3ludGF4RXJyb3J9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge2Zvcm1hdHRlZEVycm9yLCBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW59IGZyb20gJy4vZm9ybWF0dGVkX2Vycm9yJztcbmltcG9ydCB7U3RhdGljU3ltYm9sfSBmcm9tICcuL3N0YXRpY19zeW1ib2wnO1xuaW1wb3J0IHtTdGF0aWNTeW1ib2xSZXNvbHZlcn0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sX3Jlc29sdmVyJztcblxuY29uc3QgQU5HVUxBUl9DT1JFID0gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgQU5HVUxBUl9ST1VURVIgPSAnQGFuZ3VsYXIvcm91dGVyJztcblxuY29uc3QgSElEREVOX0tFWSA9IC9eXFwkLipcXCQkLztcblxuY29uc3QgSUdOT1JFID0ge1xuICBfX3N5bWJvbGljOiAnaWdub3JlJ1xufTtcblxuY29uc3QgVVNFX1ZBTFVFID0gJ3VzZVZhbHVlJztcbmNvbnN0IFBST1ZJREUgPSAncHJvdmlkZSc7XG5jb25zdCBSRUZFUkVOQ0VfU0VUID0gbmV3IFNldChbVVNFX1ZBTFVFLCAndXNlRmFjdG9yeScsICdkYXRhJywgJ2lkJywgJ2xvYWRDaGlsZHJlbiddKTtcbmNvbnN0IFRZUEVHVUFSRF9QT1NURklYID0gJ1R5cGVHdWFyZCc7XG5jb25zdCBVU0VfSUYgPSAnVXNlSWYnO1xuXG5mdW5jdGlvbiBzaG91bGRJZ25vcmUodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuX19zeW1ib2xpYyA9PSAnaWdub3JlJztcbn1cblxuLyoqXG4gKiBBIHN0YXRpYyByZWZsZWN0b3IgaW1wbGVtZW50cyBlbm91Z2ggb2YgdGhlIFJlZmxlY3RvciBBUEkgdGhhdCBpcyBuZWNlc3NhcnkgdG8gY29tcGlsZVxuICogdGVtcGxhdGVzIHN0YXRpY2FsbHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0aWNSZWZsZWN0b3IgaW1wbGVtZW50cyBDb21waWxlUmVmbGVjdG9yIHtcbiAgcHJpdmF0ZSBhbm5vdGF0aW9uQ2FjaGUgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgYW55W10+KCk7XG4gIHByaXZhdGUgc2hhbGxvd0Fubm90YXRpb25DYWNoZSA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBhbnlbXT4oKTtcbiAgcHJpdmF0ZSBwcm9wZXJ0eUNhY2hlID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIHtba2V5OiBzdHJpbmddOiBhbnlbXX0+KCk7XG4gIHByaXZhdGUgcGFyYW1ldGVyQ2FjaGUgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgYW55W10+KCk7XG4gIHByaXZhdGUgbWV0aG9kQ2FjaGUgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwge1trZXk6IHN0cmluZ106IGJvb2xlYW59PigpO1xuICBwcml2YXRlIHN0YXRpY0NhY2hlID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIHN0cmluZ1tdPigpO1xuICBwcml2YXRlIGNvbnZlcnNpb25NYXAgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgKGNvbnRleHQ6IFN0YXRpY1N5bWJvbCwgYXJnczogYW55W10pID0+IGFueT4oKTtcbiAgcHJpdmF0ZSByZXNvbHZlZEV4dGVybmFsUmVmZXJlbmNlcyA9IG5ldyBNYXA8c3RyaW5nLCBTdGF0aWNTeW1ib2w+KCk7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIGluamVjdGlvblRva2VuITogU3RhdGljU3ltYm9sO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBvcGFxdWVUb2tlbiE6IFN0YXRpY1N5bWJvbDtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIFJPVVRFUyE6IFN0YXRpY1N5bWJvbDtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyE6IFN0YXRpY1N5bWJvbDtcbiAgcHJpdmF0ZSBhbm5vdGF0aW9uRm9yUGFyZW50Q2xhc3NXaXRoU3VtbWFyeUtpbmQgPVxuICAgICAgbmV3IE1hcDxDb21waWxlU3VtbWFyeUtpbmQsIE1ldGFkYXRhRmFjdG9yeTxhbnk+W10+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIHN1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPFN0YXRpY1N5bWJvbD4sXG4gICAgICBwcml2YXRlIHN5bWJvbFJlc29sdmVyOiBTdGF0aWNTeW1ib2xSZXNvbHZlcixcbiAgICAgIGtub3duTWV0YWRhdGFDbGFzc2VzOiB7bmFtZTogc3RyaW5nLCBmaWxlUGF0aDogc3RyaW5nLCBjdG9yOiBhbnl9W10gPSBbXSxcbiAgICAgIGtub3duTWV0YWRhdGFGdW5jdGlvbnM6IHtuYW1lOiBzdHJpbmcsIGZpbGVQYXRoOiBzdHJpbmcsIGZuOiBhbnl9W10gPSBbXSxcbiAgICAgIHByaXZhdGUgZXJyb3JSZWNvcmRlcj86IChlcnJvcjogYW55LCBmaWxlTmFtZT86IHN0cmluZykgPT4gdm9pZCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnZlcnNpb25NYXAoKTtcbiAgICBrbm93bk1ldGFkYXRhQ2xhc3Nlcy5mb3JFYWNoKFxuICAgICAgICAoa2MpID0+IHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGljU3ltYm9sKGtjLmZpbGVQYXRoLCBrYy5uYW1lKSwga2MuY3RvcikpO1xuICAgIGtub3duTWV0YWRhdGFGdW5jdGlvbnMuZm9yRWFjaChcbiAgICAgICAgKGtmKSA9PiB0aGlzLl9yZWdpc3RlckZ1bmN0aW9uKHRoaXMuZ2V0U3RhdGljU3ltYm9sKGtmLmZpbGVQYXRoLCBrZi5uYW1lKSwga2YuZm4pKTtcbiAgICB0aGlzLmFubm90YXRpb25Gb3JQYXJlbnRDbGFzc1dpdGhTdW1tYXJ5S2luZC5zZXQoXG4gICAgICAgIENvbXBpbGVTdW1tYXJ5S2luZC5EaXJlY3RpdmUsIFtjcmVhdGVEaXJlY3RpdmUsIGNyZWF0ZUNvbXBvbmVudF0pO1xuICAgIHRoaXMuYW5ub3RhdGlvbkZvclBhcmVudENsYXNzV2l0aFN1bW1hcnlLaW5kLnNldChDb21waWxlU3VtbWFyeUtpbmQuUGlwZSwgW2NyZWF0ZVBpcGVdKTtcbiAgICB0aGlzLmFubm90YXRpb25Gb3JQYXJlbnRDbGFzc1dpdGhTdW1tYXJ5S2luZC5zZXQoQ29tcGlsZVN1bW1hcnlLaW5kLk5nTW9kdWxlLCBbY3JlYXRlTmdNb2R1bGVdKTtcbiAgICB0aGlzLmFubm90YXRpb25Gb3JQYXJlbnRDbGFzc1dpdGhTdW1tYXJ5S2luZC5zZXQoXG4gICAgICAgIENvbXBpbGVTdW1tYXJ5S2luZC5JbmplY3RhYmxlLFxuICAgICAgICBbY3JlYXRlSW5qZWN0YWJsZSwgY3JlYXRlUGlwZSwgY3JlYXRlRGlyZWN0aXZlLCBjcmVhdGVDb21wb25lbnQsIGNyZWF0ZU5nTW9kdWxlXSk7XG4gIH1cblxuICBjb21wb25lbnRNb2R1bGVVcmwodHlwZU9yRnVuYzogU3RhdGljU3ltYm9sKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdGF0aWNTeW1ib2wgPSB0aGlzLmZpbmRTeW1ib2xEZWNsYXJhdGlvbih0eXBlT3JGdW5jKTtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xSZXNvbHZlci5nZXRSZXNvdXJjZVBhdGgoc3RhdGljU3ltYm9sKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlIHRoZSBzcGVjaWZpZWQgYHN5bWJvbHNgIG9uIHByb2dyYW0gY2hhbmdlLlxuICAgKiBAcGFyYW0gc3ltYm9sc1xuICAgKi9cbiAgaW52YWxpZGF0ZVN5bWJvbHMoc3ltYm9sczogU3RhdGljU3ltYm9sW10pIHtcbiAgICBmb3IgKGNvbnN0IHN5bWJvbCBvZiBzeW1ib2xzKSB7XG4gICAgICB0aGlzLmFubm90YXRpb25DYWNoZS5kZWxldGUoc3ltYm9sKTtcbiAgICAgIHRoaXMuc2hhbGxvd0Fubm90YXRpb25DYWNoZS5kZWxldGUoc3ltYm9sKTtcbiAgICAgIHRoaXMucHJvcGVydHlDYWNoZS5kZWxldGUoc3ltYm9sKTtcbiAgICAgIHRoaXMucGFyYW1ldGVyQ2FjaGUuZGVsZXRlKHN5bWJvbCk7XG4gICAgICB0aGlzLm1ldGhvZENhY2hlLmRlbGV0ZShzeW1ib2wpO1xuICAgICAgdGhpcy5zdGF0aWNDYWNoZS5kZWxldGUoc3ltYm9sKTtcbiAgICAgIHRoaXMuY29udmVyc2lvbk1hcC5kZWxldGUoc3ltYm9sKTtcbiAgICB9XG4gIH1cblxuICByZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UocmVmOiBvLkV4dGVybmFsUmVmZXJlbmNlLCBjb250YWluaW5nRmlsZT86IHN0cmluZyk6IFN0YXRpY1N5bWJvbCB7XG4gICAgbGV0IGtleTogc3RyaW5nfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcbiAgICBpZiAoIWNvbnRhaW5pbmdGaWxlKSB7XG4gICAgICBrZXkgPSBgJHtyZWYubW9kdWxlTmFtZX06JHtyZWYubmFtZX1gO1xuICAgICAgY29uc3QgZGVjbGFyYXRpb25TeW1ib2wgPSB0aGlzLnJlc29sdmVkRXh0ZXJuYWxSZWZlcmVuY2VzLmdldChrZXkpO1xuICAgICAgaWYgKGRlY2xhcmF0aW9uU3ltYm9sKSByZXR1cm4gZGVjbGFyYXRpb25TeW1ib2w7XG4gICAgfVxuICAgIGNvbnN0IHJlZlN5bWJvbCA9XG4gICAgICAgIHRoaXMuc3ltYm9sUmVzb2x2ZXIuZ2V0U3ltYm9sQnlNb2R1bGUocmVmLm1vZHVsZU5hbWUhLCByZWYubmFtZSEsIGNvbnRhaW5pbmdGaWxlKTtcbiAgICBjb25zdCBkZWNsYXJhdGlvblN5bWJvbCA9IHRoaXMuZmluZFN5bWJvbERlY2xhcmF0aW9uKHJlZlN5bWJvbCk7XG4gICAgaWYgKCFjb250YWluaW5nRmlsZSkge1xuICAgICAgdGhpcy5zeW1ib2xSZXNvbHZlci5yZWNvcmRNb2R1bGVOYW1lRm9yRmlsZU5hbWUocmVmU3ltYm9sLmZpbGVQYXRoLCByZWYubW9kdWxlTmFtZSEpO1xuICAgICAgdGhpcy5zeW1ib2xSZXNvbHZlci5yZWNvcmRJbXBvcnRBcyhkZWNsYXJhdGlvblN5bWJvbCwgcmVmU3ltYm9sKTtcbiAgICB9XG4gICAgaWYgKGtleSkge1xuICAgICAgdGhpcy5yZXNvbHZlZEV4dGVybmFsUmVmZXJlbmNlcy5zZXQoa2V5LCBkZWNsYXJhdGlvblN5bWJvbCk7XG4gICAgfVxuICAgIHJldHVybiBkZWNsYXJhdGlvblN5bWJvbDtcbiAgfVxuXG4gIGZpbmREZWNsYXJhdGlvbihtb2R1bGVVcmw6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjb250YWluaW5nRmlsZT86IHN0cmluZyk6IFN0YXRpY1N5bWJvbCB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFN5bWJvbERlY2xhcmF0aW9uKFxuICAgICAgICB0aGlzLnN5bWJvbFJlc29sdmVyLmdldFN5bWJvbEJ5TW9kdWxlKG1vZHVsZVVybCwgbmFtZSwgY29udGFpbmluZ0ZpbGUpKTtcbiAgfVxuXG4gIHRyeUZpbmREZWNsYXJhdGlvbihtb2R1bGVVcmw6IHN0cmluZywgbmFtZTogc3RyaW5nLCBjb250YWluaW5nRmlsZT86IHN0cmluZyk6IFN0YXRpY1N5bWJvbCB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sUmVzb2x2ZXIuaWdub3JlRXJyb3JzRm9yKFxuICAgICAgICAoKSA9PiB0aGlzLmZpbmREZWNsYXJhdGlvbihtb2R1bGVVcmwsIG5hbWUsIGNvbnRhaW5pbmdGaWxlKSk7XG4gIH1cblxuICBmaW5kU3ltYm9sRGVjbGFyYXRpb24oc3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBTdGF0aWNTeW1ib2wge1xuICAgIGNvbnN0IHJlc29sdmVkU3ltYm9sID0gdGhpcy5zeW1ib2xSZXNvbHZlci5yZXNvbHZlU3ltYm9sKHN5bWJvbCk7XG4gICAgaWYgKHJlc29sdmVkU3ltYm9sKSB7XG4gICAgICBsZXQgcmVzb2x2ZWRNZXRhZGF0YSA9IHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhO1xuICAgICAgaWYgKHJlc29sdmVkTWV0YWRhdGEgJiYgcmVzb2x2ZWRNZXRhZGF0YS5fX3N5bWJvbGljID09PSAncmVzb2x2ZWQnKSB7XG4gICAgICAgIHJlc29sdmVkTWV0YWRhdGEgPSByZXNvbHZlZE1ldGFkYXRhLnN5bWJvbDtcbiAgICAgIH1cbiAgICAgIGlmIChyZXNvbHZlZE1ldGFkYXRhIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRTeW1ib2xEZWNsYXJhdGlvbihyZXNvbHZlZFN5bWJvbC5tZXRhZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzeW1ib2w7XG4gIH1cblxuICBwdWJsaWMgdHJ5QW5ub3RhdGlvbnModHlwZTogU3RhdGljU3ltYm9sKTogYW55W10ge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkZXIgPSB0aGlzLmVycm9yUmVjb3JkZXI7XG4gICAgdGhpcy5lcnJvclJlY29yZGVyID0gKGVycm9yOiBhbnksIGZpbGVOYW1lPzogc3RyaW5nKSA9PiB7fTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5ub3RhdGlvbnModHlwZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuZXJyb3JSZWNvcmRlciA9IG9yaWdpbmFsUmVjb3JkZXI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFubm90YXRpb25zKHR5cGU6IFN0YXRpY1N5bWJvbCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fYW5ub3RhdGlvbnMoXG4gICAgICAgIHR5cGUsICh0eXBlOiBTdGF0aWNTeW1ib2wsIGRlY29yYXRvcnM6IGFueSkgPT4gdGhpcy5zaW1wbGlmeSh0eXBlLCBkZWNvcmF0b3JzKSxcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uQ2FjaGUpO1xuICB9XG5cbiAgcHVibGljIHNoYWxsb3dBbm5vdGF0aW9ucyh0eXBlOiBTdGF0aWNTeW1ib2wpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fubm90YXRpb25zKFxuICAgICAgICB0eXBlLCAodHlwZTogU3RhdGljU3ltYm9sLCBkZWNvcmF0b3JzOiBhbnkpID0+IHRoaXMuc2ltcGxpZnkodHlwZSwgZGVjb3JhdG9ycywgdHJ1ZSksXG4gICAgICAgIHRoaXMuc2hhbGxvd0Fubm90YXRpb25DYWNoZSk7XG4gIH1cblxuICBwcml2YXRlIF9hbm5vdGF0aW9ucyhcbiAgICAgIHR5cGU6IFN0YXRpY1N5bWJvbCwgc2ltcGxpZnk6ICh0eXBlOiBTdGF0aWNTeW1ib2wsIGRlY29yYXRvcnM6IGFueSkgPT4gYW55LFxuICAgICAgYW5ub3RhdGlvbkNhY2hlOiBNYXA8U3RhdGljU3ltYm9sLCBhbnlbXT4pOiBhbnlbXSB7XG4gICAgbGV0IGFubm90YXRpb25zID0gYW5ub3RhdGlvbkNhY2hlLmdldCh0eXBlKTtcbiAgICBpZiAoIWFubm90YXRpb25zKSB7XG4gICAgICBhbm5vdGF0aW9ucyA9IFtdO1xuICAgICAgY29uc3QgY2xhc3NNZXRhZGF0YSA9IHRoaXMuZ2V0VHlwZU1ldGFkYXRhKHR5cGUpO1xuICAgICAgY29uc3QgcGFyZW50VHlwZSA9IHRoaXMuZmluZFBhcmVudFR5cGUodHlwZSwgY2xhc3NNZXRhZGF0YSk7XG4gICAgICBpZiAocGFyZW50VHlwZSkge1xuICAgICAgICBjb25zdCBwYXJlbnRBbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnMocGFyZW50VHlwZSk7XG4gICAgICAgIGFubm90YXRpb25zLnB1c2goLi4ucGFyZW50QW5ub3RhdGlvbnMpO1xuICAgICAgfVxuICAgICAgbGV0IG93bkFubm90YXRpb25zOiBhbnlbXSA9IFtdO1xuICAgICAgaWYgKGNsYXNzTWV0YWRhdGFbJ2RlY29yYXRvcnMnXSkge1xuICAgICAgICBvd25Bbm5vdGF0aW9ucyA9IHNpbXBsaWZ5KHR5cGUsIGNsYXNzTWV0YWRhdGFbJ2RlY29yYXRvcnMnXSk7XG4gICAgICAgIGlmIChvd25Bbm5vdGF0aW9ucykge1xuICAgICAgICAgIGFubm90YXRpb25zLnB1c2goLi4ub3duQW5ub3RhdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocGFyZW50VHlwZSAmJiAhdGhpcy5zdW1tYXJ5UmVzb2x2ZXIuaXNMaWJyYXJ5RmlsZSh0eXBlLmZpbGVQYXRoKSAmJlxuICAgICAgICAgIHRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUocGFyZW50VHlwZS5maWxlUGF0aCkpIHtcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMuc3VtbWFyeVJlc29sdmVyLnJlc29sdmVTdW1tYXJ5KHBhcmVudFR5cGUpO1xuICAgICAgICBpZiAoc3VtbWFyeSAmJiBzdW1tYXJ5LnR5cGUpIHtcbiAgICAgICAgICBjb25zdCByZXF1aXJlZEFubm90YXRpb25UeXBlcyA9XG4gICAgICAgICAgICAgIHRoaXMuYW5ub3RhdGlvbkZvclBhcmVudENsYXNzV2l0aFN1bW1hcnlLaW5kLmdldChzdW1tYXJ5LnR5cGUuc3VtbWFyeUtpbmQhKSE7XG4gICAgICAgICAgY29uc3QgdHlwZUhhc1JlcXVpcmVkQW5ub3RhdGlvbiA9IHJlcXVpcmVkQW5ub3RhdGlvblR5cGVzLnNvbWUoXG4gICAgICAgICAgICAgIChyZXF1aXJlZFR5cGUpID0+IG93bkFubm90YXRpb25zLnNvbWUoYW5uID0+IHJlcXVpcmVkVHlwZS5pc1R5cGVPZihhbm4pKSk7XG4gICAgICAgICAgaWYgKCF0eXBlSGFzUmVxdWlyZWRBbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9ydEVycm9yKFxuICAgICAgICAgICAgICAgIGZvcm1hdE1ldGFkYXRhRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgQ2xhc3MgJHt0eXBlLm5hbWV9IGluICR7dHlwZS5maWxlUGF0aH0gZXh0ZW5kcyBmcm9tIGEgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21waWxlU3VtbWFyeUtpbmRbc3VtbWFyeS50eXBlLnN1bW1hcnlLaW5kIVxuICAgICAgICAgICAgXX0gaW4gYW5vdGhlciBjb21waWxhdGlvbiB1bml0IHdpdGhvdXQgZHVwbGljYXRpbmcgdGhlIGRlY29yYXRvcmAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBzdW1tYXJ5ICovIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGBQbGVhc2UgYWRkIGEgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZEFubm90YXRpb25UeXBlcy5tYXAoKHR5cGUpID0+IHR5cGUubmdNZXRhZGF0YU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcgb3IgJyl9IGRlY29yYXRvciB0byB0aGUgY2xhc3NgKSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZSksXG4gICAgICAgICAgICAgICAgdHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhbm5vdGF0aW9uQ2FjaGUuc2V0KHR5cGUsIGFubm90YXRpb25zLmZpbHRlcihhbm4gPT4gISFhbm4pKTtcbiAgICB9XG4gICAgcmV0dXJuIGFubm90YXRpb25zO1xuICB9XG5cbiAgcHVibGljIHByb3BNZXRhZGF0YSh0eXBlOiBTdGF0aWNTeW1ib2wpOiB7W2tleTogc3RyaW5nXTogYW55W119IHtcbiAgICBsZXQgcHJvcE1ldGFkYXRhID0gdGhpcy5wcm9wZXJ0eUNhY2hlLmdldCh0eXBlKTtcbiAgICBpZiAoIXByb3BNZXRhZGF0YSkge1xuICAgICAgY29uc3QgY2xhc3NNZXRhZGF0YSA9IHRoaXMuZ2V0VHlwZU1ldGFkYXRhKHR5cGUpO1xuICAgICAgcHJvcE1ldGFkYXRhID0ge307XG4gICAgICBjb25zdCBwYXJlbnRUeXBlID0gdGhpcy5maW5kUGFyZW50VHlwZSh0eXBlLCBjbGFzc01ldGFkYXRhKTtcbiAgICAgIGlmIChwYXJlbnRUeXBlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFByb3BNZXRhZGF0YSA9IHRoaXMucHJvcE1ldGFkYXRhKHBhcmVudFR5cGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJlbnRQcm9wTWV0YWRhdGEpLmZvckVhY2goKHBhcmVudFByb3ApID0+IHtcbiAgICAgICAgICBwcm9wTWV0YWRhdGEhW3BhcmVudFByb3BdID0gcGFyZW50UHJvcE1ldGFkYXRhW3BhcmVudFByb3BdO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVtYmVycyA9IGNsYXNzTWV0YWRhdGFbJ21lbWJlcnMnXSB8fCB7fTtcbiAgICAgIE9iamVjdC5rZXlzKG1lbWJlcnMpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BEYXRhID0gbWVtYmVyc1twcm9wTmFtZV07XG4gICAgICAgIGNvbnN0IHByb3AgPSAoPGFueVtdPnByb3BEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKGEgPT4gYVsnX19zeW1ib2xpYyddID09ICdwcm9wZXJ0eScgfHwgYVsnX19zeW1ib2xpYyddID09ICdtZXRob2QnKTtcbiAgICAgICAgY29uc3QgZGVjb3JhdG9yczogYW55W10gPSBbXTtcbiAgICAgICAgaWYgKHByb3BNZXRhZGF0YSFbcHJvcE5hbWVdKSB7XG4gICAgICAgICAgZGVjb3JhdG9ycy5wdXNoKC4uLnByb3BNZXRhZGF0YSFbcHJvcE5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9wTWV0YWRhdGEhW3Byb3BOYW1lXSA9IGRlY29yYXRvcnM7XG4gICAgICAgIGlmIChwcm9wICYmIHByb3BbJ2RlY29yYXRvcnMnXSkge1xuICAgICAgICAgIGRlY29yYXRvcnMucHVzaCguLi50aGlzLnNpbXBsaWZ5KHR5cGUsIHByb3BbJ2RlY29yYXRvcnMnXSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvcGVydHlDYWNoZS5zZXQodHlwZSwgcHJvcE1ldGFkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BNZXRhZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBwYXJhbWV0ZXJzKHR5cGU6IFN0YXRpY1N5bWJvbCk6IGFueVtdIHtcbiAgICBpZiAoISh0eXBlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSkge1xuICAgICAgdGhpcy5yZXBvcnRFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoYHBhcmFtZXRlcnMgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeSh0eXBlKX0gd2hpY2ggaXMgbm90IGEgU3RhdGljU3ltYm9sYCksXG4gICAgICAgICAgdHlwZSk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsZXQgcGFyYW1ldGVycyA9IHRoaXMucGFyYW1ldGVyQ2FjaGUuZ2V0KHR5cGUpO1xuICAgICAgaWYgKCFwYXJhbWV0ZXJzKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTWV0YWRhdGEgPSB0aGlzLmdldFR5cGVNZXRhZGF0YSh0eXBlKTtcbiAgICAgICAgY29uc3QgcGFyZW50VHlwZSA9IHRoaXMuZmluZFBhcmVudFR5cGUodHlwZSwgY2xhc3NNZXRhZGF0YSk7XG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBjbGFzc01ldGFkYXRhID8gY2xhc3NNZXRhZGF0YVsnbWVtYmVycyddIDogbnVsbDtcbiAgICAgICAgY29uc3QgY3RvckRhdGEgPSBtZW1iZXJzID8gbWVtYmVyc1snX19jdG9yX18nXSA6IG51bGw7XG4gICAgICAgIGlmIChjdG9yRGF0YSkge1xuICAgICAgICAgIGNvbnN0IGN0b3IgPSAoPGFueVtdPmN0b3JEYXRhKS5maW5kKGEgPT4gYVsnX19zeW1ib2xpYyddID09ICdjb25zdHJ1Y3RvcicpO1xuICAgICAgICAgIGNvbnN0IHJhd1BhcmFtZXRlclR5cGVzID0gPGFueVtdPmN0b3JbJ3BhcmFtZXRlcnMnXSB8fCBbXTtcbiAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJEZWNvcmF0b3JzID0gPGFueVtdPnRoaXMuc2ltcGxpZnkodHlwZSwgY3RvclsncGFyYW1ldGVyRGVjb3JhdG9ycyddIHx8IFtdKTtcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gW107XG4gICAgICAgICAgcmF3UGFyYW1ldGVyVHlwZXMuZm9yRWFjaCgocmF3UGFyYW1UeXBlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmVzdGVkUmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1UeXBlID0gdGhpcy50cnlTaW1wbGlmeSh0eXBlLCByYXdQYXJhbVR5cGUpO1xuICAgICAgICAgICAgaWYgKHBhcmFtVHlwZSkgbmVzdGVkUmVzdWx0LnB1c2gocGFyYW1UeXBlKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY29yYXRvcnMgPSBwYXJhbWV0ZXJEZWNvcmF0b3JzID8gcGFyYW1ldGVyRGVjb3JhdG9yc1tpbmRleF0gOiBudWxsO1xuICAgICAgICAgICAgaWYgKGRlY29yYXRvcnMpIHtcbiAgICAgICAgICAgICAgbmVzdGVkUmVzdWx0LnB1c2goLi4uZGVjb3JhdG9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbWV0ZXJzIS5wdXNoKG5lc3RlZFJlc3VsdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyZW50VHlwZSkge1xuICAgICAgICAgIHBhcmFtZXRlcnMgPSB0aGlzLnBhcmFtZXRlcnMocGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJzKSB7XG4gICAgICAgICAgcGFyYW1ldGVycyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyYW1ldGVyQ2FjaGUuc2V0KHR5cGUsIHBhcmFtZXRlcnMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIG9uIHR5cGUgJHtKU09OLnN0cmluZ2lmeSh0eXBlKX0gd2l0aCBlcnJvciAke2V9YCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX21ldGhvZE5hbWVzKHR5cGU6IGFueSk6IHtba2V5OiBzdHJpbmddOiBib29sZWFufSB7XG4gICAgbGV0IG1ldGhvZE5hbWVzID0gdGhpcy5tZXRob2RDYWNoZS5nZXQodHlwZSk7XG4gICAgaWYgKCFtZXRob2ROYW1lcykge1xuICAgICAgY29uc3QgY2xhc3NNZXRhZGF0YSA9IHRoaXMuZ2V0VHlwZU1ldGFkYXRhKHR5cGUpO1xuICAgICAgbWV0aG9kTmFtZXMgPSB7fTtcbiAgICAgIGNvbnN0IHBhcmVudFR5cGUgPSB0aGlzLmZpbmRQYXJlbnRUeXBlKHR5cGUsIGNsYXNzTWV0YWRhdGEpO1xuICAgICAgaWYgKHBhcmVudFR5cGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50TWV0aG9kTmFtZXMgPSB0aGlzLl9tZXRob2ROYW1lcyhwYXJlbnRUeXBlKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50TWV0aG9kTmFtZXMpLmZvckVhY2goKHBhcmVudFByb3ApID0+IHtcbiAgICAgICAgICBtZXRob2ROYW1lcyFbcGFyZW50UHJvcF0gPSBwYXJlbnRNZXRob2ROYW1lc1twYXJlbnRQcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lbWJlcnMgPSBjbGFzc01ldGFkYXRhWydtZW1iZXJzJ10gfHwge307XG4gICAgICBPYmplY3Qua2V5cyhtZW1iZXJzKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wRGF0YSA9IG1lbWJlcnNbcHJvcE5hbWVdO1xuICAgICAgICBjb25zdCBpc01ldGhvZCA9ICg8YW55W10+cHJvcERhdGEpLnNvbWUoYSA9PiBhWydfX3N5bWJvbGljJ10gPT0gJ21ldGhvZCcpO1xuICAgICAgICBtZXRob2ROYW1lcyFbcHJvcE5hbWVdID0gbWV0aG9kTmFtZXMhW3Byb3BOYW1lXSB8fCBpc01ldGhvZDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tZXRob2RDYWNoZS5zZXQodHlwZSwgbWV0aG9kTmFtZXMpO1xuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kTmFtZXM7XG4gIH1cblxuICBwcml2YXRlIF9zdGF0aWNNZW1iZXJzKHR5cGU6IFN0YXRpY1N5bWJvbCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgc3RhdGljTWVtYmVycyA9IHRoaXMuc3RhdGljQ2FjaGUuZ2V0KHR5cGUpO1xuICAgIGlmICghc3RhdGljTWVtYmVycykge1xuICAgICAgY29uc3QgY2xhc3NNZXRhZGF0YSA9IHRoaXMuZ2V0VHlwZU1ldGFkYXRhKHR5cGUpO1xuICAgICAgY29uc3Qgc3RhdGljTWVtYmVyRGF0YSA9IGNsYXNzTWV0YWRhdGFbJ3N0YXRpY3MnXSB8fCB7fTtcbiAgICAgIHN0YXRpY01lbWJlcnMgPSBPYmplY3Qua2V5cyhzdGF0aWNNZW1iZXJEYXRhKTtcbiAgICAgIHRoaXMuc3RhdGljQ2FjaGUuc2V0KHR5cGUsIHN0YXRpY01lbWJlcnMpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGljTWVtYmVycztcbiAgfVxuXG5cbiAgcHJpdmF0ZSBmaW5kUGFyZW50VHlwZSh0eXBlOiBTdGF0aWNTeW1ib2wsIGNsYXNzTWV0YWRhdGE6IGFueSk6IFN0YXRpY1N5bWJvbHx1bmRlZmluZWQge1xuICAgIGNvbnN0IHBhcmVudFR5cGUgPSB0aGlzLnRyeVNpbXBsaWZ5KHR5cGUsIGNsYXNzTWV0YWRhdGFbJ2V4dGVuZHMnXSk7XG4gICAgaWYgKHBhcmVudFR5cGUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgIHJldHVybiBwYXJlbnRUeXBlO1xuICAgIH1cbiAgfVxuXG4gIGhhc0xpZmVjeWNsZUhvb2sodHlwZTogYW55LCBsY1Byb3BlcnR5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoISh0eXBlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSkge1xuICAgICAgdGhpcy5yZXBvcnRFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBoYXNMaWZlY3ljbGVIb29rIHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkodHlwZSl9IHdoaWNoIGlzIG5vdCBhIFN0YXRpY1N5bWJvbGApLFxuICAgICAgICAgIHR5cGUpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgcmV0dXJuICEhdGhpcy5fbWV0aG9kTmFtZXModHlwZSlbbGNQcm9wZXJ0eV07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIG9uIHR5cGUgJHtKU09OLnN0cmluZ2lmeSh0eXBlKX0gd2l0aCBlcnJvciAke2V9YCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGd1YXJkcyh0eXBlOiBhbnkpOiB7W2tleTogc3RyaW5nXTogU3RhdGljU3ltYm9sfSB7XG4gICAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKGBndWFyZHMgcmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeSh0eXBlKX0gd2hpY2ggaXMgbm90IGEgU3RhdGljU3ltYm9sYCksIHR5cGUpO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBjb25zdCBzdGF0aWNNZW1iZXJzID0gdGhpcy5fc3RhdGljTWVtYmVycyh0eXBlKTtcbiAgICBjb25zdCByZXN1bHQ6IHtba2V5OiBzdHJpbmddOiBTdGF0aWNTeW1ib2x9ID0ge307XG4gICAgZm9yIChsZXQgbmFtZSBvZiBzdGF0aWNNZW1iZXJzKSB7XG4gICAgICBpZiAobmFtZS5lbmRzV2l0aChUWVBFR1VBUkRfUE9TVEZJWCkpIHtcbiAgICAgICAgbGV0IHByb3BlcnR5ID0gbmFtZS5zdWJzdHIoMCwgbmFtZS5sZW5ndGggLSBUWVBFR1VBUkRfUE9TVEZJWC5sZW5ndGgpO1xuICAgICAgICBsZXQgdmFsdWU6IGFueTtcbiAgICAgICAgaWYgKHByb3BlcnR5LmVuZHNXaXRoKFVTRV9JRikpIHtcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5hbWUuc3Vic3RyKDAsIHByb3BlcnR5Lmxlbmd0aCAtIFVTRV9JRi5sZW5ndGgpO1xuICAgICAgICAgIHZhbHVlID0gVVNFX0lGO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXRTdGF0aWNTeW1ib2wodHlwZS5maWxlUGF0aCwgdHlwZS5uYW1lLCBbbmFtZV0pO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3Rvcih0eXBlOiBTdGF0aWNTeW1ib2wsIGN0b3I6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY29udmVyc2lvbk1hcC5zZXQodHlwZSwgKGNvbnRleHQ6IFN0YXRpY1N5bWJvbCwgYXJnczogYW55W10pID0+IG5ldyBjdG9yKC4uLmFyZ3MpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZ2lzdGVyRnVuY3Rpb24odHlwZTogU3RhdGljU3ltYm9sLCBmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jb252ZXJzaW9uTWFwLnNldCh0eXBlLCAoY29udGV4dDogU3RhdGljU3ltYm9sLCBhcmdzOiBhbnlbXSkgPT4gZm4uYXBwbHkodW5kZWZpbmVkLCBhcmdzKSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVDb252ZXJzaW9uTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnSW5qZWN0YWJsZScpLCBjcmVhdGVJbmplY3RhYmxlKTtcbiAgICB0aGlzLmluamVjdGlvblRva2VuID0gdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnSW5qZWN0aW9uVG9rZW4nKTtcbiAgICB0aGlzLm9wYXF1ZVRva2VuID0gdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnT3BhcXVlVG9rZW4nKTtcbiAgICB0aGlzLlJPVVRFUyA9IHRoaXMudHJ5RmluZERlY2xhcmF0aW9uKEFOR1VMQVJfUk9VVEVSLCAnUk9VVEVTJyk7XG4gICAgdGhpcy5BTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTID1cbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUycpO1xuXG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0hvc3QnKSwgY3JlYXRlSG9zdCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ1NlbGYnKSwgY3JlYXRlU2VsZik7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdTa2lwU2VsZicpLCBjcmVhdGVTa2lwU2VsZik7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdJbmplY3QnKSwgY3JlYXRlSW5qZWN0KTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ09wdGlvbmFsJyksIGNyZWF0ZU9wdGlvbmFsKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0F0dHJpYnV0ZScpLCBjcmVhdGVBdHRyaWJ1dGUpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnQ29udGVudENoaWxkJyksIGNyZWF0ZUNvbnRlbnRDaGlsZCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdDb250ZW50Q2hpbGRyZW4nKSwgY3JlYXRlQ29udGVudENoaWxkcmVuKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ1ZpZXdDaGlsZCcpLCBjcmVhdGVWaWV3Q2hpbGQpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnVmlld0NoaWxkcmVuJyksIGNyZWF0ZVZpZXdDaGlsZHJlbik7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0lucHV0JyksIGNyZWF0ZUlucHV0KTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ091dHB1dCcpLCBjcmVhdGVPdXRwdXQpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3Rvcih0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdQaXBlJyksIGNyZWF0ZVBpcGUpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnSG9zdEJpbmRpbmcnKSwgY3JlYXRlSG9zdEJpbmRpbmcpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnSG9zdExpc3RlbmVyJyksIGNyZWF0ZUhvc3RMaXN0ZW5lcik7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdEaXJlY3RpdmUnKSwgY3JlYXRlRGlyZWN0aXZlKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0NvbXBvbmVudCcpLCBjcmVhdGVDb21wb25lbnQpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnTmdNb2R1bGUnKSwgY3JlYXRlTmdNb2R1bGUpO1xuXG4gICAgLy8gTm90ZTogU29tZSBtZXRhZGF0YSBjbGFzc2VzIGNhbiBiZSB1c2VkIGRpcmVjdGx5IHdpdGggUHJvdmlkZXIuZGVwcy5cbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IodGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnSG9zdCcpLCBjcmVhdGVIb3N0KTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IodGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnU2VsZicpLCBjcmVhdGVTZWxmKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ1NraXBTZWxmJyksIGNyZWF0ZVNraXBTZWxmKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ09wdGlvbmFsJyksIGNyZWF0ZU9wdGlvbmFsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXRTdGF0aWNTeW1ib2wgcHJvZHVjZXMgYSBUeXBlIHdob3NlIG1ldGFkYXRhIGlzIGtub3duIGJ1dCB3aG9zZSBpbXBsZW1lbnRhdGlvbiBpcyBub3QgbG9hZGVkLlxuICAgKiBBbGwgdHlwZXMgcGFzc2VkIHRvIHRoZSBTdGF0aWNSZXNvbHZlciBzaG91bGQgYmUgcHNldWRvLXR5cGVzIHJldHVybmVkIGJ5IHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0gZGVjbGFyYXRpb25GaWxlIHRoZSBhYnNvbHV0ZSBwYXRoIG9mIHRoZSBmaWxlIHdoZXJlIHRoZSBzeW1ib2wgaXMgZGVjbGFyZWRcbiAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHR5cGUuXG4gICAqL1xuICBnZXRTdGF0aWNTeW1ib2woZGVjbGFyYXRpb25GaWxlOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgbWVtYmVycz86IHN0cmluZ1tdKTogU3RhdGljU3ltYm9sIHtcbiAgICByZXR1cm4gdGhpcy5zeW1ib2xSZXNvbHZlci5nZXRTdGF0aWNTeW1ib2woZGVjbGFyYXRpb25GaWxlLCBuYW1lLCBtZW1iZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaW1wbGlmeSBidXQgZGlzY2FyZCBhbnkgZXJyb3JzXG4gICAqL1xuICBwcml2YXRlIHRyeVNpbXBsaWZ5KGNvbnRleHQ6IFN0YXRpY1N5bWJvbCwgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgY29uc3Qgb3JpZ2luYWxSZWNvcmRlciA9IHRoaXMuZXJyb3JSZWNvcmRlcjtcbiAgICB0aGlzLmVycm9yUmVjb3JkZXIgPSAoZXJyb3I6IGFueSwgZmlsZU5hbWU/OiBzdHJpbmcpID0+IHt9O1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2ltcGxpZnkoY29udGV4dCwgdmFsdWUpO1xuICAgIHRoaXMuZXJyb3JSZWNvcmRlciA9IG9yaWdpbmFsUmVjb3JkZXI7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgcHVibGljIHNpbXBsaWZ5KGNvbnRleHQ6IFN0YXRpY1N5bWJvbCwgdmFsdWU6IGFueSwgbGF6eTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBsZXQgc2NvcGUgPSBCaW5kaW5nU2NvcGUuZW1wdHk7XG4gICAgY29uc3QgY2FsbGluZyA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBib29sZWFuPigpO1xuICAgIGNvbnN0IHJvb3RDb250ZXh0ID0gY29udGV4dDtcblxuICAgIGZ1bmN0aW9uIHNpbXBsaWZ5SW5Db250ZXh0KFxuICAgICAgICBjb250ZXh0OiBTdGF0aWNTeW1ib2wsIHZhbHVlOiBhbnksIGRlcHRoOiBudW1iZXIsIHJlZmVyZW5jZXM6IG51bWJlcik6IGFueSB7XG4gICAgICBmdW5jdGlvbiByZXNvbHZlUmVmZXJlbmNlVmFsdWUoc3RhdGljU3ltYm9sOiBTdGF0aWNTeW1ib2wpOiBhbnkge1xuICAgICAgICBjb25zdCByZXNvbHZlZFN5bWJvbCA9IHNlbGYuc3ltYm9sUmVzb2x2ZXIucmVzb2x2ZVN5bWJvbChzdGF0aWNTeW1ib2wpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWRTeW1ib2wgPyByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YSA6IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNpbXBsaWZ5RWFnZXJseSh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuIHNpbXBsaWZ5SW5Db250ZXh0KGNvbnRleHQsIHZhbHVlLCBkZXB0aCwgMCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNpbXBsaWZ5TGF6aWx5KHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICByZXR1cm4gc2ltcGxpZnlJbkNvbnRleHQoY29udGV4dCwgdmFsdWUsIGRlcHRoLCByZWZlcmVuY2VzICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNpbXBsaWZ5TmVzdGVkKG5lc3RlZENvbnRleHQ6IFN0YXRpY1N5bWJvbCwgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChuZXN0ZWRDb250ZXh0ID09PSBjb250ZXh0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGNvbnRleHQgaGFzbid0IGNoYW5nZWQgbGV0IHRoZSBleGNlcHRpb24gcHJvcGFnYXRlIHVubW9kaWZpZWQuXG4gICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5SW5Db250ZXh0KG5lc3RlZENvbnRleHQsIHZhbHVlLCBkZXB0aCArIDEsIHJlZmVyZW5jZXMpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5SW5Db250ZXh0KG5lc3RlZENvbnRleHQsIHZhbHVlLCBkZXB0aCArIDEsIHJlZmVyZW5jZXMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaWYgKGlzTWV0YWRhdGFFcnJvcihlKSkge1xuICAgICAgICAgICAgLy8gUHJvcGFnYXRlIHRoZSBtZXNzYWdlIHRleHQgdXAgYnV0IGFkZCBhIG1lc3NhZ2UgdG8gdGhlIGNoYWluIHRoYXQgZXhwbGFpbnMgaG93IHdlIGdvdFxuICAgICAgICAgICAgLy8gaGVyZS5cbiAgICAgICAgICAgIC8vIGUuY2hhaW4gaW1wbGllcyBlLnN5bWJvbFxuICAgICAgICAgICAgY29uc3Qgc3VtbWFyeU1zZyA9IGUuY2hhaW4gPyAncmVmZXJlbmNlcyBcXCcnICsgZS5zeW1ib2whLm5hbWUgKyAnXFwnJyA6IGVycm9yU3VtbWFyeShlKTtcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnkgPSBgJyR7bmVzdGVkQ29udGV4dC5uYW1lfScgJHtzdW1tYXJ5TXNnfWA7XG4gICAgICAgICAgICBjb25zdCBjaGFpbiA9IHttZXNzYWdlOiBzdW1tYXJ5LCBwb3NpdGlvbjogZS5wb3NpdGlvbiwgbmV4dDogZS5jaGFpbn07XG4gICAgICAgICAgICAvLyBUT0RPKGNodWNraik6IHJldHJpZXZlIHRoZSBwb3NpdGlvbiBpbmZvcm1hdGlvbiBpbmRpcmVjdGx5IGZyb20gdGhlIGNvbGxlY3RvcnMgbm9kZVxuICAgICAgICAgICAgLy8gbWFwIGlmIHRoZSBtZXRhZGF0YSBpcyBmcm9tIGEgLnRzIGZpbGUuXG4gICAgICAgICAgICBzZWxmLmVycm9yKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgIGFkdmlzZTogZS5hZHZpc2UsXG4gICAgICAgICAgICAgICAgICBjb250ZXh0OiBlLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICBjaGFpbixcbiAgICAgICAgICAgICAgICAgIHN5bWJvbDogbmVzdGVkQ29udGV4dFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0IGlzIHByb2JhYmx5IGFuIGludGVybmFsIGVycm9yLlxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2ltcGxpZnlDYWxsKFxuICAgICAgICAgIGZ1bmN0aW9uU3ltYm9sOiBTdGF0aWNTeW1ib2wsIHRhcmdldEZ1bmN0aW9uOiBhbnksIGFyZ3M6IGFueVtdLCB0YXJnZXRFeHByZXNzaW9uOiBhbnkpIHtcbiAgICAgICAgaWYgKHRhcmdldEZ1bmN0aW9uICYmIHRhcmdldEZ1bmN0aW9uWydfX3N5bWJvbGljJ10gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChjYWxsaW5nLmdldChmdW5jdGlvblN5bWJvbCkpIHtcbiAgICAgICAgICAgIHNlbGYuZXJyb3IoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlY3Vyc2lvbiBpcyBub3Qgc3VwcG9ydGVkJyxcbiAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IGBjYWxsZWQgJyR7ZnVuY3Rpb25TeW1ib2wubmFtZX0nIHJlY3Vyc2l2ZWx5YCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiB0YXJnZXRGdW5jdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25TeW1ib2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0YXJnZXRGdW5jdGlvblsndmFsdWUnXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiAoZGVwdGggIT0gMCB8fCB2YWx1ZS5fX3N5bWJvbGljICE9ICdlcnJvcicpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcmFtZXRlcnM6IHN0cmluZ1tdID0gdGFyZ2V0RnVuY3Rpb25bJ3BhcmFtZXRlcnMnXTtcbiAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdHM6IGFueVtdID0gdGFyZ2V0RnVuY3Rpb24uZGVmYXVsdHM7XG4gICAgICAgICAgICAgIGFyZ3MgPSBhcmdzLm1hcChhcmcgPT4gc2ltcGxpZnlOZXN0ZWQoY29udGV4dCwgYXJnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGFyZyA9PiBzaG91bGRJZ25vcmUoYXJnKSA/IHVuZGVmaW5lZCA6IGFyZyk7XG4gICAgICAgICAgICAgIGlmIChkZWZhdWx0cyAmJiBkZWZhdWx0cy5sZW5ndGggPiBhcmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCguLi5kZWZhdWx0cy5zbGljZShhcmdzLmxlbmd0aCkubWFwKCh2YWx1ZTogYW55KSA9PiBzaW1wbGlmeSh2YWx1ZSkpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYWxsaW5nLnNldChmdW5jdGlvblN5bWJvbCwgdHJ1ZSk7XG4gICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uU2NvcGUgPSBCaW5kaW5nU2NvcGUuYnVpbGQoKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbWV0ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25TY29wZS5kZWZpbmUocGFyYW1ldGVyc1tpXSwgYXJnc1tpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3Qgb2xkU2NvcGUgPSBzY29wZTtcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdDogYW55O1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNjb3BlID0gZnVuY3Rpb25TY29wZS5kb25lKCk7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2ltcGxpZnlOZXN0ZWQoZnVuY3Rpb25TeW1ib2wsIHZhbHVlKTtcbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG9sZFNjb3BlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGNhbGxpbmcuZGVsZXRlKGZ1bmN0aW9uU3ltYm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAvLyBJZiBkZXB0aCBpcyAwIHdlIGFyZSBldmFsdWF0aW5nIHRoZSB0b3AgbGV2ZWwgZXhwcmVzc2lvbiB0aGF0IGlzIGRlc2NyaWJpbmcgZWxlbWVudFxuICAgICAgICAgIC8vIGRlY29yYXRvci4gSW4gdGhpcyBjYXNlLCBpdCBpcyBhIGRlY29yYXRvciB3ZSBkb24ndCB1bmRlcnN0YW5kLCBzdWNoIGFzIGEgY3VzdG9tXG4gICAgICAgICAgLy8gbm9uLWFuZ3VsYXIgZGVjb3JhdG9yLCBhbmQgd2Ugc2hvdWxkIGp1c3QgaWdub3JlIGl0LlxuICAgICAgICAgIHJldHVybiBJR05PUkU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvc2l0aW9uOiBQb3NpdGlvbnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICh0YXJnZXRFeHByZXNzaW9uICYmIHRhcmdldEV4cHJlc3Npb24uX19zeW1ib2xpYyA9PSAncmVzb2x2ZWQnKSB7XG4gICAgICAgICAgY29uc3QgbGluZSA9IHRhcmdldEV4cHJlc3Npb24ubGluZTtcbiAgICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSB0YXJnZXRFeHByZXNzaW9uLmNoYXJhY3RlcjtcbiAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IHRhcmdldEV4cHJlc3Npb24uZmlsZU5hbWU7XG4gICAgICAgICAgaWYgKGZpbGVOYW1lICE9IG51bGwgJiYgbGluZSAhPSBudWxsICYmIGNoYXJhY3RlciAhPSBudWxsKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHtmaWxlTmFtZSwgbGluZSwgY29sdW1uOiBjaGFyYWN0ZXJ9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmVycm9yKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBGVU5DVElPTl9DQUxMX05PVF9TVVBQT1JURUQsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IGZ1bmN0aW9uU3ltYm9sLFxuICAgICAgICAgICAgICB2YWx1ZTogdGFyZ2V0RnVuY3Rpb24sXG4gICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNpbXBsaWZ5KGV4cHJlc3Npb246IGFueSk6IGFueSB7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZShleHByZXNzaW9uKSkge1xuICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4cHJlc3Npb24pKSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiAoPGFueT5leHByZXNzaW9uKSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGEgc3ByZWFkIGV4cHJlc3Npb25cbiAgICAgICAgICAgIGlmIChpdGVtICYmIGl0ZW0uX19zeW1ib2xpYyA9PT0gJ3NwcmVhZCcpIHtcbiAgICAgICAgICAgICAgLy8gV2UgY2FsbCB3aXRoIHJlZmVyZW5jZXMgYXMgMCBiZWNhdXNlIHdlIHJlcXVpcmUgdGhlIGFjdHVhbCB2YWx1ZSBhbmQgY2Fubm90XG4gICAgICAgICAgICAgIC8vIHRvbGVyYXRlIGEgcmVmZXJlbmNlIGhlcmUuXG4gICAgICAgICAgICAgIGNvbnN0IHNwcmVhZEFycmF5ID0gc2ltcGxpZnlFYWdlcmx5KGl0ZW0uZXhwcmVzc2lvbik7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNwcmVhZEFycmF5KSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3ByZWFkSXRlbSBvZiBzcHJlYWRBcnJheSkge1xuICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc3ByZWFkSXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHNpbXBsaWZ5KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHNob3VsZElnbm9yZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4cHJlc3Npb24gaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgICAgICAvLyBTdG9wIHNpbXBsaWZpY2F0aW9uIGF0IGJ1aWx0aW4gc3ltYm9scyBvciBpZiB3ZSBhcmUgaW4gYSByZWZlcmVuY2UgY29udGV4dCBhbmRcbiAgICAgICAgICAvLyB0aGUgc3ltYm9sIGRvZXNuJ3QgaGF2ZSBtZW1iZXJzLlxuICAgICAgICAgIGlmIChleHByZXNzaW9uID09PSBzZWxmLmluamVjdGlvblRva2VuIHx8IHNlbGYuY29udmVyc2lvbk1hcC5oYXMoZXhwcmVzc2lvbikgfHxcbiAgICAgICAgICAgICAgKHJlZmVyZW5jZXMgPiAwICYmICFleHByZXNzaW9uLm1lbWJlcnMubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb247XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY1N5bWJvbCA9IGV4cHJlc3Npb247XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvblZhbHVlID0gcmVzb2x2ZVJlZmVyZW5jZVZhbHVlKHN0YXRpY1N5bWJvbCk7XG4gICAgICAgICAgICBpZiAoZGVjbGFyYXRpb25WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzaW1wbGlmeU5lc3RlZChzdGF0aWNTeW1ib2wsIGRlY2xhcmF0aW9uVmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRpY1N5bWJvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICBpZiAoZXhwcmVzc2lvblsnX19zeW1ib2xpYyddKSB7XG4gICAgICAgICAgICBsZXQgc3RhdGljU3ltYm9sOiBTdGF0aWNTeW1ib2w7XG4gICAgICAgICAgICBzd2l0Y2ggKGV4cHJlc3Npb25bJ19fc3ltYm9saWMnXSkge1xuICAgICAgICAgICAgICBjYXNlICdiaW5vcCc6XG4gICAgICAgICAgICAgICAgbGV0IGxlZnQgPSBzaW1wbGlmeShleHByZXNzaW9uWydsZWZ0J10pO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmUobGVmdCkpIHJldHVybiBsZWZ0O1xuICAgICAgICAgICAgICAgIGxldCByaWdodCA9IHNpbXBsaWZ5KGV4cHJlc3Npb25bJ3JpZ2h0J10pO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmUocmlnaHQpKSByZXR1cm4gcmlnaHQ7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChleHByZXNzaW9uWydvcGVyYXRvciddKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICYmIHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnfHwnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCB8fCByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3wnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCB8IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnXic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IF4gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICcmJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgJiByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPT0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICE9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgIT09IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IDwgcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPiByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPD0gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID49IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnPDwnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA8PCByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJz4+JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPj4gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgKyByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAtIHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICogcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgLyByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAlIHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgY2FzZSAnaWYnOlxuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSBzaW1wbGlmeShleHByZXNzaW9uWydjb25kaXRpb24nXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbiA/IHNpbXBsaWZ5KGV4cHJlc3Npb25bJ3RoZW5FeHByZXNzaW9uJ10pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltcGxpZnkoZXhwcmVzc2lvblsnZWxzZUV4cHJlc3Npb24nXSk7XG4gICAgICAgICAgICAgIGNhc2UgJ3ByZSc6XG4gICAgICAgICAgICAgICAgbGV0IG9wZXJhbmQgPSBzaW1wbGlmeShleHByZXNzaW9uWydvcGVyYW5kJ10pO1xuICAgICAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmUob3BlcmFuZCkpIHJldHVybiBvcGVyYW5kO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXhwcmVzc2lvblsnb3BlcmF0b3InXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYW5kO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtb3BlcmFuZDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIW9wZXJhbmQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICd+JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIH5vcGVyYW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIGxldCBpbmRleFRhcmdldCA9IHNpbXBsaWZ5RWFnZXJseShleHByZXNzaW9uWydleHByZXNzaW9uJ10pO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHNpbXBsaWZ5RWFnZXJseShleHByZXNzaW9uWydpbmRleCddKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhUYXJnZXQgJiYgaXNQcmltaXRpdmUoaW5kZXgpKSByZXR1cm4gaW5kZXhUYXJnZXRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlciA9IGV4cHJlc3Npb25bJ21lbWJlciddO1xuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0VGFyZ2V0ID0gc2ltcGxpZnkoZXhwcmVzc2lvblsnZXhwcmVzc2lvbiddKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0VGFyZ2V0IGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXJzID0gc2VsZWN0VGFyZ2V0Lm1lbWJlcnMuY29uY2F0KG1lbWJlcik7XG4gICAgICAgICAgICAgICAgICBzZWxlY3RDb250ZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdldFN0YXRpY1N5bWJvbChzZWxlY3RUYXJnZXQuZmlsZVBhdGgsIHNlbGVjdFRhcmdldC5uYW1lLCBtZW1iZXJzKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY2xhcmF0aW9uVmFsdWUgPSByZXNvbHZlUmVmZXJlbmNlVmFsdWUoc2VsZWN0Q29udGV4dCk7XG4gICAgICAgICAgICAgICAgICBpZiAoZGVjbGFyYXRpb25WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaW1wbGlmeU5lc3RlZChzZWxlY3RDb250ZXh0LCBkZWNsYXJhdGlvblZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RDb250ZXh0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0VGFyZ2V0ICYmIGlzUHJpbWl0aXZlKG1lbWJlcikpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2ltcGxpZnlOZXN0ZWQoc2VsZWN0Q29udGV4dCwgc2VsZWN0VGFyZ2V0W21lbWJlcl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICBjYXNlICdyZWZlcmVuY2UnOlxuICAgICAgICAgICAgICAgIC8vIE5vdGU6IFRoaXMgb25seSBoYXMgdG8gZGVhbCB3aXRoIHZhcmlhYmxlIHJlZmVyZW5jZXMsIGFzIHN5bWJvbCByZWZlcmVuY2VzIGhhdmVcbiAgICAgICAgICAgICAgICAvLyBiZWVuIGNvbnZlcnRlZCBpbnRvICdyZXNvbHZlZCdcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGUgU3RhdGljU3ltYm9sUmVzb2x2ZXIuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZTogc3RyaW5nID0gZXhwcmVzc2lvblsnbmFtZSddO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVmFsdWUgPSBzY29wZS5yZXNvbHZlKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbFZhbHVlICE9IEJpbmRpbmdTY29wZS5taXNzaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3Jlc29sdmVkJzpcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5KGV4cHJlc3Npb24uc3ltYm9sKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAvLyBJZiBhbiBlcnJvciBpcyByZXBvcnRlZCBldmFsdWF0aW5nIHRoZSBzeW1ib2wgcmVjb3JkIHRoZSBwb3NpdGlvbiBvZiB0aGVcbiAgICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZSBpbiB0aGUgZXJyb3Igc28gaXQgY2FuXG4gICAgICAgICAgICAgICAgICAvLyBiZSByZXBvcnRlZCBpbiB0aGUgZXJyb3IgbWVzc2FnZSBnZW5lcmF0ZWQgZnJvbSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgICAgICAgaWYgKGlzTWV0YWRhdGFFcnJvcihlKSAmJiBleHByZXNzaW9uLmZpbGVOYW1lICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uLmxpbmUgIT0gbnVsbCAmJiBleHByZXNzaW9uLmNoYXJhY3RlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IGV4cHJlc3Npb24uZmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluZTogZXhwcmVzc2lvbi5saW5lLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogZXhwcmVzc2lvbi5jaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICAgICAgICAgICAgY2FzZSAnbmV3JzpcbiAgICAgICAgICAgICAgY2FzZSAnY2FsbCc6XG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBmdW5jdGlvbiBpcyBhIGJ1aWx0LWluIGNvbnZlcnNpb25cbiAgICAgICAgICAgICAgICBzdGF0aWNTeW1ib2wgPSBzaW1wbGlmeUluQ29udGV4dChcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCwgZXhwcmVzc2lvblsnZXhwcmVzc2lvbiddLCBkZXB0aCArIDEsIC8qIHJlZmVyZW5jZXMgKi8gMCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRpY1N5bWJvbCBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHN0YXRpY1N5bWJvbCA9PT0gc2VsZi5pbmplY3Rpb25Ub2tlbiB8fCBzdGF0aWNTeW1ib2wgPT09IHNlbGYub3BhcXVlVG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgc29tZWJvZHkgY2FsbHMgbmV3IEluamVjdGlvblRva2VuLCBkb24ndCBjcmVhdGUgYW4gSW5qZWN0aW9uVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCByYXRoZXIgcmV0dXJuIHRoZSBzeW1ib2wgdG8gd2hpY2ggdGhlIEluamVjdGlvblRva2VuIGlzIGFzc2lnbmVkIHRvLlxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wYXF1ZVRva2VuIGlzIHN1cHBvcnRlZCB0b28gYXMgaXQgaXMgcmVxdWlyZWQgYnkgdGhlIGxhbmd1YWdlIHNlcnZpY2UgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gc3VwcG9ydCB2NCBhbmQgcHJpb3IgdmVyc2lvbnMgb2YgQW5ndWxhci5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCBhcmdFeHByZXNzaW9uczogYW55W10gPSBleHByZXNzaW9uWydhcmd1bWVudHMnXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgIGxldCBjb252ZXJ0ZXIgPSBzZWxmLmNvbnZlcnNpb25NYXAuZ2V0KHN0YXRpY1N5bWJvbCk7XG4gICAgICAgICAgICAgICAgICBpZiAoY29udmVydGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBhcmdFeHByZXNzaW9ucy5tYXAoYXJnID0+IHNpbXBsaWZ5TmVzdGVkKGNvbnRleHQsIGFyZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChhcmcgPT4gc2hvdWxkSWdub3JlKGFyZykgPyB1bmRlZmluZWQgOiBhcmcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udmVydGVyKGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBmdW5jdGlvbiBpcyBvbmUgd2UgY2FuIHNpbXBsaWZ5LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRGdW5jdGlvbiA9IHJlc29sdmVSZWZlcmVuY2VWYWx1ZShzdGF0aWNTeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2ltcGxpZnlDYWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3ltYm9sLCB0YXJnZXRGdW5jdGlvbiwgYXJnRXhwcmVzc2lvbnMsIGV4cHJlc3Npb25bJ2V4cHJlc3Npb24nXSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBJR05PUkU7XG4gICAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGV4cHJlc3Npb24ubWVzc2FnZTtcbiAgICAgICAgICAgICAgICBpZiAoZXhwcmVzc2lvblsnbGluZSddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IGV4cHJlc3Npb24uY29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBleHByZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IGV4cHJlc3Npb25bJ2ZpbGVOYW1lJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IGV4cHJlc3Npb25bJ2xpbmUnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uOiBleHByZXNzaW9uWydjaGFyYWN0ZXInXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNlbGYuZXJyb3Ioe21lc3NhZ2UsIGNvbnRleHQ6IGV4cHJlc3Npb24uY29udGV4dH0sIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gSUdOT1JFO1xuICAgICAgICAgICAgICBjYXNlICdpZ25vcmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXBTdHJpbmdNYXAoZXhwcmVzc2lvbiwgKHZhbHVlLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoUkVGRVJFTkNFX1NFVC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgICAgaWYgKG5hbWUgPT09IFVTRV9WQUxVRSAmJiBQUk9WSURFIGluIGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcHJvdmlkZXIgZXhwcmVzc2lvbiwgY2hlY2sgZm9yIHNwZWNpYWwgdG9rZW5zIHRoYXQgbmVlZCB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAvLyBkdXJpbmcgYW5hbHlzaXMuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvdmlkZSA9IHNpbXBsaWZ5KGV4cHJlc3Npb24ucHJvdmlkZSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3ZpZGUgPT09IHNlbGYuUk9VVEVTIHx8IHByb3ZpZGUgPT0gc2VsZi5BTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gc2ltcGxpZnkodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gc2ltcGxpZnlMYXppbHkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5KHZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSUdOT1JFO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2ltcGxpZnkodmFsdWUpO1xuICAgIH1cblxuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gc2ltcGxpZnlJbkNvbnRleHQoY29udGV4dCwgdmFsdWUsIDAsIGxhenkgPyAxIDogMCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHRoaXMuZXJyb3JSZWNvcmRlcikge1xuICAgICAgICB0aGlzLnJlcG9ydEVycm9yKGUsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZm9ybWF0TWV0YWRhdGFFcnJvcihlLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNob3VsZElnbm9yZShyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUeXBlTWV0YWRhdGEodHlwZTogU3RhdGljU3ltYm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIGNvbnN0IHJlc29sdmVkU3ltYm9sID0gdGhpcy5zeW1ib2xSZXNvbHZlci5yZXNvbHZlU3ltYm9sKHR5cGUpO1xuICAgIHJldHVybiByZXNvbHZlZFN5bWJvbCAmJiByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YSA/IHJlc29sdmVkU3ltYm9sLm1ldGFkYXRhIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19zeW1ib2xpYzogJ2NsYXNzJ307XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydEVycm9yKGVycm9yOiBFcnJvciwgY29udGV4dDogU3RhdGljU3ltYm9sLCBwYXRoPzogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZXJyb3JSZWNvcmRlcikge1xuICAgICAgdGhpcy5lcnJvclJlY29yZGVyKFxuICAgICAgICAgIGZvcm1hdE1ldGFkYXRhRXJyb3IoZXJyb3IsIGNvbnRleHQpLCAoY29udGV4dCAmJiBjb250ZXh0LmZpbGVQYXRoKSB8fCBwYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlcnJvcihcbiAgICAgIHttZXNzYWdlLCBzdW1tYXJ5LCBhZHZpc2UsIHBvc2l0aW9uLCBjb250ZXh0LCB2YWx1ZSwgc3ltYm9sLCBjaGFpbn06IHtcbiAgICAgICAgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgICBzdW1tYXJ5Pzogc3RyaW5nLFxuICAgICAgICBhZHZpc2U/OiBzdHJpbmcsXG4gICAgICAgIHBvc2l0aW9uPzogUG9zaXRpb24sXG4gICAgICAgIGNvbnRleHQ/OiBhbnksXG4gICAgICAgIHZhbHVlPzogYW55LFxuICAgICAgICBzeW1ib2w/OiBTdGF0aWNTeW1ib2wsXG4gICAgICAgIGNoYWluPzogTWV0YWRhdGFNZXNzYWdlQ2hhaW5cbiAgICAgIH0sXG4gICAgICByZXBvcnRpbmdDb250ZXh0OiBTdGF0aWNTeW1ib2wpIHtcbiAgICB0aGlzLnJlcG9ydEVycm9yKFxuICAgICAgICBtZXRhZGF0YUVycm9yKG1lc3NhZ2UsIHN1bW1hcnksIGFkdmlzZSwgcG9zaXRpb24sIHN5bWJvbCwgY29udGV4dCwgY2hhaW4pLFxuICAgICAgICByZXBvcnRpbmdDb250ZXh0KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUG9zaXRpb24ge1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBsaW5lOiBudW1iZXI7XG4gIGNvbHVtbjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgTWV0YWRhdGFNZXNzYWdlQ2hhaW4ge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHN1bW1hcnk/OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogUG9zaXRpb247XG4gIGNvbnRleHQ/OiBhbnk7XG4gIHN5bWJvbD86IFN0YXRpY1N5bWJvbDtcbiAgbmV4dD86IE1ldGFkYXRhTWVzc2FnZUNoYWluO1xufVxuXG50eXBlIE1ldGFkYXRhRXJyb3IgPSBFcnJvciZ7XG4gIHBvc2l0aW9uPzogUG9zaXRpb247XG4gIGFkdmlzZT86IHN0cmluZztcbiAgc3VtbWFyeT86IHN0cmluZztcbiAgY29udGV4dD86IGFueTtcbiAgc3ltYm9sPzogU3RhdGljU3ltYm9sO1xuICBjaGFpbj86IE1ldGFkYXRhTWVzc2FnZUNoYWluO1xufTtcblxuY29uc3QgTUVUQURBVEFfRVJST1IgPSAnbmdNZXRhZGF0YUVycm9yJztcblxuZnVuY3Rpb24gbWV0YWRhdGFFcnJvcihcbiAgICBtZXNzYWdlOiBzdHJpbmcsIHN1bW1hcnk/OiBzdHJpbmcsIGFkdmlzZT86IHN0cmluZywgcG9zaXRpb24/OiBQb3NpdGlvbiwgc3ltYm9sPzogU3RhdGljU3ltYm9sLFxuICAgIGNvbnRleHQ/OiBhbnksIGNoYWluPzogTWV0YWRhdGFNZXNzYWdlQ2hhaW4pOiBNZXRhZGF0YUVycm9yIHtcbiAgY29uc3QgZXJyb3IgPSBzeW50YXhFcnJvcihtZXNzYWdlKSBhcyBNZXRhZGF0YUVycm9yO1xuICAoZXJyb3IgYXMgYW55KVtNRVRBREFUQV9FUlJPUl0gPSB0cnVlO1xuICBpZiAoYWR2aXNlKSBlcnJvci5hZHZpc2UgPSBhZHZpc2U7XG4gIGlmIChwb3NpdGlvbikgZXJyb3IucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgaWYgKHN1bW1hcnkpIGVycm9yLnN1bW1hcnkgPSBzdW1tYXJ5O1xuICBpZiAoY29udGV4dCkgZXJyb3IuY29udGV4dCA9IGNvbnRleHQ7XG4gIGlmIChjaGFpbikgZXJyb3IuY2hhaW4gPSBjaGFpbjtcbiAgaWYgKHN5bWJvbCkgZXJyb3Iuc3ltYm9sID0gc3ltYm9sO1xuICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGlzTWV0YWRhdGFFcnJvcihlcnJvcjogRXJyb3IpOiBlcnJvciBpcyBNZXRhZGF0YUVycm9yIHtcbiAgcmV0dXJuICEhKGVycm9yIGFzIGFueSlbTUVUQURBVEFfRVJST1JdO1xufVxuXG5jb25zdCBSRUZFUkVOQ0VfVE9fTk9ORVhQT1JURURfQ0xBU1MgPSAnUmVmZXJlbmNlIHRvIG5vbi1leHBvcnRlZCBjbGFzcyc7XG5jb25zdCBWQVJJQUJMRV9OT1RfSU5JVElBTElaRUQgPSAnVmFyaWFibGUgbm90IGluaXRpYWxpemVkJztcbmNvbnN0IERFU1RSVUNUVVJFX05PVF9TVVBQT1JURUQgPSAnRGVzdHJ1Y3R1cmluZyBub3Qgc3VwcG9ydGVkJztcbmNvbnN0IENPVUxEX05PVF9SRVNPTFZFX1RZUEUgPSAnQ291bGQgbm90IHJlc29sdmUgdHlwZSc7XG5jb25zdCBGVU5DVElPTl9DQUxMX05PVF9TVVBQT1JURUQgPSAnRnVuY3Rpb24gY2FsbCBub3Qgc3VwcG9ydGVkJztcbmNvbnN0IFJFRkVSRU5DRV9UT19MT0NBTF9TWU1CT0wgPSAnUmVmZXJlbmNlIHRvIGEgbG9jYWwgc3ltYm9sJztcbmNvbnN0IExBTUJEQV9OT1RfU1VQUE9SVEVEID0gJ0xhbWJkYSBub3Qgc3VwcG9ydGVkJztcblxuZnVuY3Rpb24gZXhwYW5kZWRNZXNzYWdlKG1lc3NhZ2U6IHN0cmluZywgY29udGV4dDogYW55KTogc3RyaW5nIHtcbiAgc3dpdGNoIChtZXNzYWdlKSB7XG4gICAgY2FzZSBSRUZFUkVOQ0VfVE9fTk9ORVhQT1JURURfQ0xBU1M6XG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LmNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gYFJlZmVyZW5jZXMgdG8gYSBub24tZXhwb3J0ZWQgY2xhc3MgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gZGVjb3JhdG9ycyBidXQgJHtcbiAgICAgICAgICAgIGNvbnRleHQuY2xhc3NOYW1lfSB3YXMgcmVmZXJlbmNlZC5gO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBWQVJJQUJMRV9OT1RfSU5JVElBTElaRUQ6XG4gICAgICByZXR1cm4gJ09ubHkgaW5pdGlhbGl6ZWQgdmFyaWFibGVzIGFuZCBjb25zdGFudHMgY2FuIGJlIHJlZmVyZW5jZWQgaW4gZGVjb3JhdG9ycyBiZWNhdXNlIHRoZSB2YWx1ZSBvZiB0aGlzIHZhcmlhYmxlIGlzIG5lZWRlZCBieSB0aGUgdGVtcGxhdGUgY29tcGlsZXInO1xuICAgIGNhc2UgREVTVFJVQ1RVUkVfTk9UX1NVUFBPUlRFRDpcbiAgICAgIHJldHVybiAnUmVmZXJlbmNpbmcgYW4gZXhwb3J0ZWQgZGVzdHJ1Y3R1cmVkIHZhcmlhYmxlIG9yIGNvbnN0YW50IGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGVjb3JhdG9ycyBhbmQgdGhpcyB2YWx1ZSBpcyBuZWVkZWQgYnkgdGhlIHRlbXBsYXRlIGNvbXBpbGVyJztcbiAgICBjYXNlIENPVUxEX05PVF9SRVNPTFZFX1RZUEU6XG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiBgQ291bGQgbm90IHJlc29sdmUgdHlwZSAke2NvbnRleHQudHlwZU5hbWV9YDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRlVOQ1RJT05fQ0FMTF9OT1RfU1VQUE9SVEVEOlxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5uYW1lKSB7XG4gICAgICAgIHJldHVybiBgRnVuY3Rpb24gY2FsbHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gZGVjb3JhdG9ycyBidXQgJyR7Y29udGV4dC5uYW1lfScgd2FzIGNhbGxlZGA7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ0Z1bmN0aW9uIGNhbGxzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGRlY29yYXRvcnMnO1xuICAgIGNhc2UgUkVGRVJFTkNFX1RPX0xPQ0FMX1NZTUJPTDpcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQubmFtZSkge1xuICAgICAgICByZXR1cm4gYFJlZmVyZW5jZSB0byBhIGxvY2FsIChub24tZXhwb3J0ZWQpIHN5bWJvbHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gZGVjb3JhdG9ycyBidXQgJyR7XG4gICAgICAgICAgICBjb250ZXh0Lm5hbWV9JyB3YXMgcmVmZXJlbmNlZGA7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIExBTUJEQV9OT1RfU1VQUE9SVEVEOlxuICAgICAgcmV0dXJuIGBGdW5jdGlvbiBleHByZXNzaW9ucyBhcmUgbm90IHN1cHBvcnRlZCBpbiBkZWNvcmF0b3JzYDtcbiAgfVxuICByZXR1cm4gbWVzc2FnZTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZUFkdmlzZShtZXNzYWdlOiBzdHJpbmcsIGNvbnRleHQ6IGFueSk6IHN0cmluZ3x1bmRlZmluZWQge1xuICBzd2l0Y2ggKG1lc3NhZ2UpIHtcbiAgICBjYXNlIFJFRkVSRU5DRV9UT19OT05FWFBPUlRFRF9DTEFTUzpcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBgQ29uc2lkZXIgZXhwb3J0aW5nICcke2NvbnRleHQuY2xhc3NOYW1lfSdgO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBERVNUUlVDVFVSRV9OT1RfU1VQUE9SVEVEOlxuICAgICAgcmV0dXJuICdDb25zaWRlciBzaW1wbGlmeWluZyB0byBhdm9pZCBkZXN0cnVjdHVyaW5nJztcbiAgICBjYXNlIFJFRkVSRU5DRV9UT19MT0NBTF9TWU1CT0w6XG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Lm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGBDb25zaWRlciBleHBvcnRpbmcgJyR7Y29udGV4dC5uYW1lfSdgO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBMQU1CREFfTk9UX1NVUFBPUlRFRDpcbiAgICAgIHJldHVybiBgQ29uc2lkZXIgY2hhbmdpbmcgdGhlIGZ1bmN0aW9uIGV4cHJlc3Npb24gaW50byBhbiBleHBvcnRlZCBmdW5jdGlvbmA7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXJyb3JTdW1tYXJ5KGVycm9yOiBNZXRhZGF0YUVycm9yKTogc3RyaW5nIHtcbiAgaWYgKGVycm9yLnN1bW1hcnkpIHtcbiAgICByZXR1cm4gZXJyb3Iuc3VtbWFyeTtcbiAgfVxuICBzd2l0Y2ggKGVycm9yLm1lc3NhZ2UpIHtcbiAgICBjYXNlIFJFRkVSRU5DRV9UT19OT05FWFBPUlRFRF9DTEFTUzpcbiAgICAgIGlmIChlcnJvci5jb250ZXh0ICYmIGVycm9yLmNvbnRleHQuY2xhc3NOYW1lKSB7XG4gICAgICAgIHJldHVybiBgcmVmZXJlbmNlcyBub24tZXhwb3J0ZWQgY2xhc3MgJHtlcnJvci5jb250ZXh0LmNsYXNzTmFtZX1gO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBWQVJJQUJMRV9OT1RfSU5JVElBTElaRUQ6XG4gICAgICByZXR1cm4gJ2lzIG5vdCBpbml0aWFsaXplZCc7XG4gICAgY2FzZSBERVNUUlVDVFVSRV9OT1RfU1VQUE9SVEVEOlxuICAgICAgcmV0dXJuICdpcyBhIGRlc3RydWN0dXJlZCB2YXJpYWJsZSc7XG4gICAgY2FzZSBDT1VMRF9OT1RfUkVTT0xWRV9UWVBFOlxuICAgICAgcmV0dXJuICdjb3VsZCBub3QgYmUgcmVzb2x2ZWQnO1xuICAgIGNhc2UgRlVOQ1RJT05fQ0FMTF9OT1RfU1VQUE9SVEVEOlxuICAgICAgaWYgKGVycm9yLmNvbnRleHQgJiYgZXJyb3IuY29udGV4dC5uYW1lKSB7XG4gICAgICAgIHJldHVybiBgY2FsbHMgJyR7ZXJyb3IuY29udGV4dC5uYW1lfSdgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGBjYWxscyBhIGZ1bmN0aW9uYDtcbiAgICBjYXNlIFJFRkVSRU5DRV9UT19MT0NBTF9TWU1CT0w6XG4gICAgICBpZiAoZXJyb3IuY29udGV4dCAmJiBlcnJvci5jb250ZXh0Lm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGByZWZlcmVuY2VzIGxvY2FsIHZhcmlhYmxlICR7ZXJyb3IuY29udGV4dC5uYW1lfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYHJlZmVyZW5jZXMgYSBsb2NhbCB2YXJpYWJsZWA7XG4gIH1cbiAgcmV0dXJuICdjb250YWlucyB0aGUgZXJyb3InO1xufVxuXG5mdW5jdGlvbiBtYXBTdHJpbmdNYXAoaW5wdXQ6IHtba2V5OiBzdHJpbmddOiBhbnl9LCB0cmFuc2Zvcm06ICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZykgPT4gYW55KTpcbiAgICB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gIGlmICghaW5wdXQpIHJldHVybiB7fTtcbiAgY29uc3QgcmVzdWx0OiB7W2tleTogc3RyaW5nXTogYW55fSA9IHt9O1xuICBPYmplY3Qua2V5cyhpbnB1dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0cmFuc2Zvcm0oaW5wdXRba2V5XSwga2V5KTtcbiAgICBpZiAoIXNob3VsZElnbm9yZSh2YWx1ZSkpIHtcbiAgICAgIGlmIChISURERU5fS0VZLnRlc3Qoa2V5KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzdWx0LCBrZXksIHtlbnVtZXJhYmxlOiBmYWxzZSwgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWV9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNQcmltaXRpdmUobzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiBvID09PSBudWxsIHx8ICh0eXBlb2YgbyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgbyAhPT0gJ29iamVjdCcpO1xufVxuXG5pbnRlcmZhY2UgQmluZGluZ1Njb3BlQnVpbGRlciB7XG4gIGRlZmluZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBCaW5kaW5nU2NvcGVCdWlsZGVyO1xuICBkb25lKCk6IEJpbmRpbmdTY29wZTtcbn1cblxuYWJzdHJhY3QgY2xhc3MgQmluZGluZ1Njb3BlIHtcbiAgYWJzdHJhY3QgcmVzb2x2ZShuYW1lOiBzdHJpbmcpOiBhbnk7XG4gIHB1YmxpYyBzdGF0aWMgbWlzc2luZyA9IHt9O1xuICBwdWJsaWMgc3RhdGljIGVtcHR5OiBCaW5kaW5nU2NvcGUgPSB7cmVzb2x2ZTogbmFtZSA9PiBCaW5kaW5nU2NvcGUubWlzc2luZ307XG5cbiAgcHVibGljIHN0YXRpYyBidWlsZCgpOiBCaW5kaW5nU2NvcGVCdWlsZGVyIHtcbiAgICBjb25zdCBjdXJyZW50ID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmaW5lOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBjdXJyZW50LnNldChuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSxcbiAgICAgIGRvbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudC5zaXplID4gMCA/IG5ldyBQb3B1bGF0ZWRTY29wZShjdXJyZW50KSA6IEJpbmRpbmdTY29wZS5lbXB0eTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIFBvcHVsYXRlZFNjb3BlIGV4dGVuZHMgQmluZGluZ1Njb3BlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBiaW5kaW5nczogTWFwPHN0cmluZywgYW55Pikge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZXNvbHZlKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuYmluZGluZ3MuaGFzKG5hbWUpID8gdGhpcy5iaW5kaW5ncy5nZXQobmFtZSkgOiBCaW5kaW5nU2NvcGUubWlzc2luZztcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXRhZGF0YU1lc3NhZ2VDaGFpbihcbiAgICBjaGFpbjogTWV0YWRhdGFNZXNzYWdlQ2hhaW4sIGFkdmlzZTogc3RyaW5nfHVuZGVmaW5lZCk6IEZvcm1hdHRlZE1lc3NhZ2VDaGFpbiB7XG4gIGNvbnN0IGV4cGFuZGVkID0gZXhwYW5kZWRNZXNzYWdlKGNoYWluLm1lc3NhZ2UsIGNoYWluLmNvbnRleHQpO1xuICBjb25zdCBuZXN0aW5nID0gY2hhaW4uc3ltYm9sID8gYCBpbiAnJHtjaGFpbi5zeW1ib2wubmFtZX0nYCA6ICcnO1xuICBjb25zdCBtZXNzYWdlID0gYCR7ZXhwYW5kZWR9JHtuZXN0aW5nfWA7XG4gIGNvbnN0IHBvc2l0aW9uID0gY2hhaW4ucG9zaXRpb247XG4gIGNvbnN0IG5leHQ6IEZvcm1hdHRlZE1lc3NhZ2VDaGFpbnx1bmRlZmluZWQgPSBjaGFpbi5uZXh0ID9cbiAgICAgIGZvcm1hdE1ldGFkYXRhTWVzc2FnZUNoYWluKGNoYWluLm5leHQsIGFkdmlzZSkgOlxuICAgICAgYWR2aXNlID8ge21lc3NhZ2U6IGFkdmlzZX0gOiB1bmRlZmluZWQ7XG4gIHJldHVybiB7bWVzc2FnZSwgcG9zaXRpb24sIG5leHQ6IG5leHQgPyBbbmV4dF0gOiB1bmRlZmluZWR9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNZXRhZGF0YUVycm9yKGU6IEVycm9yLCBjb250ZXh0OiBTdGF0aWNTeW1ib2wpOiBFcnJvciB7XG4gIGlmIChpc01ldGFkYXRhRXJyb3IoZSkpIHtcbiAgICAvLyBQcm9kdWNlIGEgZm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGFuZCBsZWF2aW5nIGVub3VnaCBpbmZvcm1hdGlvbiBpbiB0aGUgb3JpZ2luYWwgZXJyb3JcbiAgICAvLyB0byByZWNvdmVyIHRoZSBmb3JtYXR0aW5nIGluZm9ybWF0aW9uIHRvIGV2ZW50dWFsbHkgcHJvZHVjZSBhIGRpYWdub3N0aWMgZXJyb3IgbWVzc2FnZS5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGUucG9zaXRpb247XG4gICAgY29uc3QgY2hhaW46IE1ldGFkYXRhTWVzc2FnZUNoYWluID0ge1xuICAgICAgbWVzc2FnZTogYEVycm9yIGR1cmluZyB0ZW1wbGF0ZSBjb21waWxlIG9mICcke2NvbnRleHQubmFtZX0nYCxcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIG5leHQ6IHttZXNzYWdlOiBlLm1lc3NhZ2UsIG5leHQ6IGUuY2hhaW4sIGNvbnRleHQ6IGUuY29udGV4dCwgc3ltYm9sOiBlLnN5bWJvbH1cbiAgICB9O1xuICAgIGNvbnN0IGFkdmlzZSA9IGUuYWR2aXNlIHx8IG1lc3NhZ2VBZHZpc2UoZS5tZXNzYWdlLCBlLmNvbnRleHQpO1xuICAgIHJldHVybiBmb3JtYXR0ZWRFcnJvcihmb3JtYXRNZXRhZGF0YU1lc3NhZ2VDaGFpbihjaGFpbiwgYWR2aXNlKSk7XG4gIH1cbiAgcmV0dXJuIGU7XG59XG4iXX0=
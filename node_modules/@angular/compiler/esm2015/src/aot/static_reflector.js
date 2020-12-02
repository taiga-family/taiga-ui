/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { CompileSummaryKind } from '../compile_metadata';
import { createAttribute, createComponent, createContentChild, createContentChildren, createDirective, createHost, createHostBinding, createHostListener, createInject, createInjectable, createInput, createNgModule, createOptional, createOutput, createPipe, createSelf, createSkipSelf, createViewChild, createViewChildren } from '../core';
import { syntaxError } from '../util';
import { formattedError } from './formatted_error';
import { StaticSymbol } from './static_symbol';
const ANGULAR_CORE = '@angular/core';
const ANGULAR_ROUTER = '@angular/router';
const HIDDEN_KEY = /^\$.*\$$/;
const IGNORE = {
    __symbolic: 'ignore'
};
const USE_VALUE = 'useValue';
const PROVIDE = 'provide';
const REFERENCE_SET = new Set([USE_VALUE, 'useFactory', 'data', 'id', 'loadChildren']);
const TYPEGUARD_POSTFIX = 'TypeGuard';
const USE_IF = 'UseIf';
function shouldIgnore(value) {
    return value && value.__symbolic == 'ignore';
}
/**
 * A static reflector implements enough of the Reflector API that is necessary to compile
 * templates statically.
 */
export class StaticReflector {
    constructor(summaryResolver, symbolResolver, knownMetadataClasses = [], knownMetadataFunctions = [], errorRecorder) {
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
        knownMetadataClasses.forEach((kc) => this._registerDecoratorOrConstructor(this.getStaticSymbol(kc.filePath, kc.name), kc.ctor));
        knownMetadataFunctions.forEach((kf) => this._registerFunction(this.getStaticSymbol(kf.filePath, kf.name), kf.fn));
        this.annotationForParentClassWithSummaryKind.set(CompileSummaryKind.Directive, [createDirective, createComponent]);
        this.annotationForParentClassWithSummaryKind.set(CompileSummaryKind.Pipe, [createPipe]);
        this.annotationForParentClassWithSummaryKind.set(CompileSummaryKind.NgModule, [createNgModule]);
        this.annotationForParentClassWithSummaryKind.set(CompileSummaryKind.Injectable, [createInjectable, createPipe, createDirective, createComponent, createNgModule]);
    }
    componentModuleUrl(typeOrFunc) {
        const staticSymbol = this.findSymbolDeclaration(typeOrFunc);
        return this.symbolResolver.getResourcePath(staticSymbol);
    }
    /**
     * Invalidate the specified `symbols` on program change.
     * @param symbols
     */
    invalidateSymbols(symbols) {
        for (const symbol of symbols) {
            this.annotationCache.delete(symbol);
            this.shallowAnnotationCache.delete(symbol);
            this.propertyCache.delete(symbol);
            this.parameterCache.delete(symbol);
            this.methodCache.delete(symbol);
            this.staticCache.delete(symbol);
            this.conversionMap.delete(symbol);
        }
    }
    resolveExternalReference(ref, containingFile) {
        let key = undefined;
        if (!containingFile) {
            key = `${ref.moduleName}:${ref.name}`;
            const declarationSymbol = this.resolvedExternalReferences.get(key);
            if (declarationSymbol)
                return declarationSymbol;
        }
        const refSymbol = this.symbolResolver.getSymbolByModule(ref.moduleName, ref.name, containingFile);
        const declarationSymbol = this.findSymbolDeclaration(refSymbol);
        if (!containingFile) {
            this.symbolResolver.recordModuleNameForFileName(refSymbol.filePath, ref.moduleName);
            this.symbolResolver.recordImportAs(declarationSymbol, refSymbol);
        }
        if (key) {
            this.resolvedExternalReferences.set(key, declarationSymbol);
        }
        return declarationSymbol;
    }
    findDeclaration(moduleUrl, name, containingFile) {
        return this.findSymbolDeclaration(this.symbolResolver.getSymbolByModule(moduleUrl, name, containingFile));
    }
    tryFindDeclaration(moduleUrl, name, containingFile) {
        return this.symbolResolver.ignoreErrorsFor(() => this.findDeclaration(moduleUrl, name, containingFile));
    }
    findSymbolDeclaration(symbol) {
        const resolvedSymbol = this.symbolResolver.resolveSymbol(symbol);
        if (resolvedSymbol) {
            let resolvedMetadata = resolvedSymbol.metadata;
            if (resolvedMetadata && resolvedMetadata.__symbolic === 'resolved') {
                resolvedMetadata = resolvedMetadata.symbol;
            }
            if (resolvedMetadata instanceof StaticSymbol) {
                return this.findSymbolDeclaration(resolvedSymbol.metadata);
            }
        }
        return symbol;
    }
    tryAnnotations(type) {
        const originalRecorder = this.errorRecorder;
        this.errorRecorder = (error, fileName) => { };
        try {
            return this.annotations(type);
        }
        finally {
            this.errorRecorder = originalRecorder;
        }
    }
    annotations(type) {
        return this._annotations(type, (type, decorators) => this.simplify(type, decorators), this.annotationCache);
    }
    shallowAnnotations(type) {
        return this._annotations(type, (type, decorators) => this.simplify(type, decorators, true), this.shallowAnnotationCache);
    }
    _annotations(type, simplify, annotationCache) {
        let annotations = annotationCache.get(type);
        if (!annotations) {
            annotations = [];
            const classMetadata = this.getTypeMetadata(type);
            const parentType = this.findParentType(type, classMetadata);
            if (parentType) {
                const parentAnnotations = this.annotations(parentType);
                annotations.push(...parentAnnotations);
            }
            let ownAnnotations = [];
            if (classMetadata['decorators']) {
                ownAnnotations = simplify(type, classMetadata['decorators']);
                if (ownAnnotations) {
                    annotations.push(...ownAnnotations);
                }
            }
            if (parentType && !this.summaryResolver.isLibraryFile(type.filePath) &&
                this.summaryResolver.isLibraryFile(parentType.filePath)) {
                const summary = this.summaryResolver.resolveSummary(parentType);
                if (summary && summary.type) {
                    const requiredAnnotationTypes = this.annotationForParentClassWithSummaryKind.get(summary.type.summaryKind);
                    const typeHasRequiredAnnotation = requiredAnnotationTypes.some((requiredType) => ownAnnotations.some(ann => requiredType.isTypeOf(ann)));
                    if (!typeHasRequiredAnnotation) {
                        this.reportError(formatMetadataError(metadataError(`Class ${type.name} in ${type.filePath} extends from a ${CompileSummaryKind[summary.type.summaryKind]} in another compilation unit without duplicating the decorator`, 
                        /* summary */ undefined, `Please add a ${requiredAnnotationTypes.map((type) => type.ngMetadataName)
                            .join(' or ')} decorator to the class`), type), type);
                    }
                }
            }
            annotationCache.set(type, annotations.filter(ann => !!ann));
        }
        return annotations;
    }
    propMetadata(type) {
        let propMetadata = this.propertyCache.get(type);
        if (!propMetadata) {
            const classMetadata = this.getTypeMetadata(type);
            propMetadata = {};
            const parentType = this.findParentType(type, classMetadata);
            if (parentType) {
                const parentPropMetadata = this.propMetadata(parentType);
                Object.keys(parentPropMetadata).forEach((parentProp) => {
                    propMetadata[parentProp] = parentPropMetadata[parentProp];
                });
            }
            const members = classMetadata['members'] || {};
            Object.keys(members).forEach((propName) => {
                const propData = members[propName];
                const prop = propData
                    .find(a => a['__symbolic'] == 'property' || a['__symbolic'] == 'method');
                const decorators = [];
                if (propMetadata[propName]) {
                    decorators.push(...propMetadata[propName]);
                }
                propMetadata[propName] = decorators;
                if (prop && prop['decorators']) {
                    decorators.push(...this.simplify(type, prop['decorators']));
                }
            });
            this.propertyCache.set(type, propMetadata);
        }
        return propMetadata;
    }
    parameters(type) {
        if (!(type instanceof StaticSymbol)) {
            this.reportError(new Error(`parameters received ${JSON.stringify(type)} which is not a StaticSymbol`), type);
            return [];
        }
        try {
            let parameters = this.parameterCache.get(type);
            if (!parameters) {
                const classMetadata = this.getTypeMetadata(type);
                const parentType = this.findParentType(type, classMetadata);
                const members = classMetadata ? classMetadata['members'] : null;
                const ctorData = members ? members['__ctor__'] : null;
                if (ctorData) {
                    const ctor = ctorData.find(a => a['__symbolic'] == 'constructor');
                    const rawParameterTypes = ctor['parameters'] || [];
                    const parameterDecorators = this.simplify(type, ctor['parameterDecorators'] || []);
                    parameters = [];
                    rawParameterTypes.forEach((rawParamType, index) => {
                        const nestedResult = [];
                        const paramType = this.trySimplify(type, rawParamType);
                        if (paramType)
                            nestedResult.push(paramType);
                        const decorators = parameterDecorators ? parameterDecorators[index] : null;
                        if (decorators) {
                            nestedResult.push(...decorators);
                        }
                        parameters.push(nestedResult);
                    });
                }
                else if (parentType) {
                    parameters = this.parameters(parentType);
                }
                if (!parameters) {
                    parameters = [];
                }
                this.parameterCache.set(type, parameters);
            }
            return parameters;
        }
        catch (e) {
            console.error(`Failed on type ${JSON.stringify(type)} with error ${e}`);
            throw e;
        }
    }
    _methodNames(type) {
        let methodNames = this.methodCache.get(type);
        if (!methodNames) {
            const classMetadata = this.getTypeMetadata(type);
            methodNames = {};
            const parentType = this.findParentType(type, classMetadata);
            if (parentType) {
                const parentMethodNames = this._methodNames(parentType);
                Object.keys(parentMethodNames).forEach((parentProp) => {
                    methodNames[parentProp] = parentMethodNames[parentProp];
                });
            }
            const members = classMetadata['members'] || {};
            Object.keys(members).forEach((propName) => {
                const propData = members[propName];
                const isMethod = propData.some(a => a['__symbolic'] == 'method');
                methodNames[propName] = methodNames[propName] || isMethod;
            });
            this.methodCache.set(type, methodNames);
        }
        return methodNames;
    }
    _staticMembers(type) {
        let staticMembers = this.staticCache.get(type);
        if (!staticMembers) {
            const classMetadata = this.getTypeMetadata(type);
            const staticMemberData = classMetadata['statics'] || {};
            staticMembers = Object.keys(staticMemberData);
            this.staticCache.set(type, staticMembers);
        }
        return staticMembers;
    }
    findParentType(type, classMetadata) {
        const parentType = this.trySimplify(type, classMetadata['extends']);
        if (parentType instanceof StaticSymbol) {
            return parentType;
        }
    }
    hasLifecycleHook(type, lcProperty) {
        if (!(type instanceof StaticSymbol)) {
            this.reportError(new Error(`hasLifecycleHook received ${JSON.stringify(type)} which is not a StaticSymbol`), type);
        }
        try {
            return !!this._methodNames(type)[lcProperty];
        }
        catch (e) {
            console.error(`Failed on type ${JSON.stringify(type)} with error ${e}`);
            throw e;
        }
    }
    guards(type) {
        if (!(type instanceof StaticSymbol)) {
            this.reportError(new Error(`guards received ${JSON.stringify(type)} which is not a StaticSymbol`), type);
            return {};
        }
        const staticMembers = this._staticMembers(type);
        const result = {};
        for (let name of staticMembers) {
            if (name.endsWith(TYPEGUARD_POSTFIX)) {
                let property = name.substr(0, name.length - TYPEGUARD_POSTFIX.length);
                let value;
                if (property.endsWith(USE_IF)) {
                    property = name.substr(0, property.length - USE_IF.length);
                    value = USE_IF;
                }
                else {
                    value = this.getStaticSymbol(type.filePath, type.name, [name]);
                }
                result[property] = value;
            }
        }
        return result;
    }
    _registerDecoratorOrConstructor(type, ctor) {
        this.conversionMap.set(type, (context, args) => new ctor(...args));
    }
    _registerFunction(type, fn) {
        this.conversionMap.set(type, (context, args) => fn.apply(undefined, args));
    }
    initializeConversionMap() {
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Injectable'), createInjectable);
        this.injectionToken = this.findDeclaration(ANGULAR_CORE, 'InjectionToken');
        this.opaqueToken = this.findDeclaration(ANGULAR_CORE, 'OpaqueToken');
        this.ROUTES = this.tryFindDeclaration(ANGULAR_ROUTER, 'ROUTES');
        this.ANALYZE_FOR_ENTRY_COMPONENTS =
            this.findDeclaration(ANGULAR_CORE, 'ANALYZE_FOR_ENTRY_COMPONENTS');
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Host'), createHost);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Self'), createSelf);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'SkipSelf'), createSkipSelf);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Inject'), createInject);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Optional'), createOptional);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Attribute'), createAttribute);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ContentChild'), createContentChild);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ContentChildren'), createContentChildren);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ViewChild'), createViewChild);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'ViewChildren'), createViewChildren);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Input'), createInput);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Output'), createOutput);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Pipe'), createPipe);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'HostBinding'), createHostBinding);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'HostListener'), createHostListener);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Directive'), createDirective);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Component'), createComponent);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'NgModule'), createNgModule);
        // Note: Some metadata classes can be used directly with Provider.deps.
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Host'), createHost);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Self'), createSelf);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'SkipSelf'), createSkipSelf);
        this._registerDecoratorOrConstructor(this.findDeclaration(ANGULAR_CORE, 'Optional'), createOptional);
    }
    /**
     * getStaticSymbol produces a Type whose metadata is known but whose implementation is not loaded.
     * All types passed to the StaticResolver should be pseudo-types returned by this method.
     *
     * @param declarationFile the absolute path of the file where the symbol is declared
     * @param name the name of the type.
     */
    getStaticSymbol(declarationFile, name, members) {
        return this.symbolResolver.getStaticSymbol(declarationFile, name, members);
    }
    /**
     * Simplify but discard any errors
     */
    trySimplify(context, value) {
        const originalRecorder = this.errorRecorder;
        this.errorRecorder = (error, fileName) => { };
        const result = this.simplify(context, value);
        this.errorRecorder = originalRecorder;
        return result;
    }
    /** @internal */
    simplify(context, value, lazy = false) {
        const self = this;
        let scope = BindingScope.empty;
        const calling = new Map();
        const rootContext = context;
        function simplifyInContext(context, value, depth, references) {
            function resolveReferenceValue(staticSymbol) {
                const resolvedSymbol = self.symbolResolver.resolveSymbol(staticSymbol);
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
                        const summaryMsg = e.chain ? 'references \'' + e.symbol.name + '\'' : errorSummary(e);
                        const summary = `'${nestedContext.name}' ${summaryMsg}`;
                        const chain = { message: summary, position: e.position, next: e.chain };
                        // TODO(chuckj): retrieve the position information indirectly from the collectors node
                        // map if the metadata is from a .ts file.
                        self.error({
                            message: e.message,
                            advise: e.advise,
                            context: e.context,
                            chain,
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
                            summary: `called '${functionSymbol.name}' recursively`,
                            value: targetFunction
                        }, functionSymbol);
                    }
                    try {
                        const value = targetFunction['value'];
                        if (value && (depth != 0 || value.__symbolic != 'error')) {
                            const parameters = targetFunction['parameters'];
                            const defaults = targetFunction.defaults;
                            args = args.map(arg => simplifyNested(context, arg))
                                .map(arg => shouldIgnore(arg) ? undefined : arg);
                            if (defaults && defaults.length > args.length) {
                                args.push(...defaults.slice(args.length).map((value) => simplify(value)));
                            }
                            calling.set(functionSymbol, true);
                            const functionScope = BindingScope.build();
                            for (let i = 0; i < parameters.length; i++) {
                                functionScope.define(parameters[i], args[i]);
                            }
                            const oldScope = scope;
                            let result;
                            try {
                                scope = functionScope.done();
                                result = simplifyNested(functionSymbol, value);
                            }
                            finally {
                                scope = oldScope;
                            }
                            return result;
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
                let position = undefined;
                if (targetExpression && targetExpression.__symbolic == 'resolved') {
                    const line = targetExpression.line;
                    const character = targetExpression.character;
                    const fileName = targetExpression.fileName;
                    if (fileName != null && line != null && character != null) {
                        position = { fileName, line, column: character };
                    }
                }
                self.error({
                    message: FUNCTION_CALL_NOT_SUPPORTED,
                    context: functionSymbol,
                    value: targetFunction,
                    position
                }, context);
            }
            function simplify(expression) {
                if (isPrimitive(expression)) {
                    return expression;
                }
                if (Array.isArray(expression)) {
                    const result = [];
                    for (const item of expression) {
                        // Check for a spread expression
                        if (item && item.__symbolic === 'spread') {
                            // We call with references as 0 because we require the actual value and cannot
                            // tolerate a reference here.
                            const spreadArray = simplifyEagerly(item.expression);
                            if (Array.isArray(spreadArray)) {
                                for (const spreadItem of spreadArray) {
                                    result.push(spreadItem);
                                }
                                continue;
                            }
                        }
                        const value = simplify(item);
                        if (shouldIgnore(value)) {
                            continue;
                        }
                        result.push(value);
                    }
                    return result;
                }
                if (expression instanceof StaticSymbol) {
                    // Stop simplification at builtin symbols or if we are in a reference context and
                    // the symbol doesn't have members.
                    if (expression === self.injectionToken || self.conversionMap.has(expression) ||
                        (references > 0 && !expression.members.length)) {
                        return expression;
                    }
                    else {
                        const staticSymbol = expression;
                        const declarationValue = resolveReferenceValue(staticSymbol);
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
                        let staticSymbol;
                        switch (expression['__symbolic']) {
                            case 'binop':
                                let left = simplify(expression['left']);
                                if (shouldIgnore(left))
                                    return left;
                                let right = simplify(expression['right']);
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
                                let condition = simplify(expression['condition']);
                                return condition ? simplify(expression['thenExpression']) :
                                    simplify(expression['elseExpression']);
                            case 'pre':
                                let operand = simplify(expression['operand']);
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
                                let indexTarget = simplifyEagerly(expression['expression']);
                                let index = simplifyEagerly(expression['index']);
                                if (indexTarget && isPrimitive(index))
                                    return indexTarget[index];
                                return null;
                            case 'select':
                                const member = expression['member'];
                                let selectContext = context;
                                let selectTarget = simplify(expression['expression']);
                                if (selectTarget instanceof StaticSymbol) {
                                    const members = selectTarget.members.concat(member);
                                    selectContext =
                                        self.getStaticSymbol(selectTarget.filePath, selectTarget.name, members);
                                    const declarationValue = resolveReferenceValue(selectContext);
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
                                const name = expression['name'];
                                const localValue = scope.resolve(name);
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
                                if (staticSymbol instanceof StaticSymbol) {
                                    if (staticSymbol === self.injectionToken || staticSymbol === self.opaqueToken) {
                                        // if somebody calls new InjectionToken, don't create an InjectionToken,
                                        // but rather return the symbol to which the InjectionToken is assigned to.
                                        // OpaqueToken is supported too as it is required by the language service to
                                        // support v4 and prior versions of Angular.
                                        return context;
                                    }
                                    const argExpressions = expression['arguments'] || [];
                                    let converter = self.conversionMap.get(staticSymbol);
                                    if (converter) {
                                        const args = argExpressions.map(arg => simplifyNested(context, arg))
                                            .map(arg => shouldIgnore(arg) ? undefined : arg);
                                        return converter(context, args);
                                    }
                                    else {
                                        // Determine if the function is one we can simplify.
                                        const targetFunction = resolveReferenceValue(staticSymbol);
                                        return simplifyCall(staticSymbol, targetFunction, argExpressions, expression['expression']);
                                    }
                                }
                                return IGNORE;
                            case 'error':
                                let message = expression.message;
                                if (expression['line'] != null) {
                                    self.error({
                                        message,
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
                                    self.error({ message, context: expression.context }, context);
                                }
                                return IGNORE;
                            case 'ignore':
                                return expression;
                        }
                        return null;
                    }
                    return mapStringMap(expression, (value, name) => {
                        if (REFERENCE_SET.has(name)) {
                            if (name === USE_VALUE && PROVIDE in expression) {
                                // If this is a provider expression, check for special tokens that need the value
                                // during analysis.
                                const provide = simplify(expression.provide);
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
        let result;
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
    }
    getTypeMetadata(type) {
        const resolvedSymbol = this.symbolResolver.resolveSymbol(type);
        return resolvedSymbol && resolvedSymbol.metadata ? resolvedSymbol.metadata :
            { __symbolic: 'class' };
    }
    reportError(error, context, path) {
        if (this.errorRecorder) {
            this.errorRecorder(formatMetadataError(error, context), (context && context.filePath) || path);
        }
        else {
            throw error;
        }
    }
    error({ message, summary, advise, position, context, value, symbol, chain }, reportingContext) {
        this.reportError(metadataError(message, summary, advise, position, symbol, context, chain), reportingContext);
    }
}
const METADATA_ERROR = 'ngMetadataError';
function metadataError(message, summary, advise, position, symbol, context, chain) {
    const error = syntaxError(message);
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
const REFERENCE_TO_NONEXPORTED_CLASS = 'Reference to non-exported class';
const VARIABLE_NOT_INITIALIZED = 'Variable not initialized';
const DESTRUCTURE_NOT_SUPPORTED = 'Destructuring not supported';
const COULD_NOT_RESOLVE_TYPE = 'Could not resolve type';
const FUNCTION_CALL_NOT_SUPPORTED = 'Function call not supported';
const REFERENCE_TO_LOCAL_SYMBOL = 'Reference to a local symbol';
const LAMBDA_NOT_SUPPORTED = 'Lambda not supported';
function expandedMessage(message, context) {
    switch (message) {
        case REFERENCE_TO_NONEXPORTED_CLASS:
            if (context && context.className) {
                return `References to a non-exported class are not supported in decorators but ${context.className} was referenced.`;
            }
            break;
        case VARIABLE_NOT_INITIALIZED:
            return 'Only initialized variables and constants can be referenced in decorators because the value of this variable is needed by the template compiler';
        case DESTRUCTURE_NOT_SUPPORTED:
            return 'Referencing an exported destructured variable or constant is not supported in decorators and this value is needed by the template compiler';
        case COULD_NOT_RESOLVE_TYPE:
            if (context && context.typeName) {
                return `Could not resolve type ${context.typeName}`;
            }
            break;
        case FUNCTION_CALL_NOT_SUPPORTED:
            if (context && context.name) {
                return `Function calls are not supported in decorators but '${context.name}' was called`;
            }
            return 'Function calls are not supported in decorators';
        case REFERENCE_TO_LOCAL_SYMBOL:
            if (context && context.name) {
                return `Reference to a local (non-exported) symbols are not supported in decorators but '${context.name}' was referenced`;
            }
            break;
        case LAMBDA_NOT_SUPPORTED:
            return `Function expressions are not supported in decorators`;
    }
    return message;
}
function messageAdvise(message, context) {
    switch (message) {
        case REFERENCE_TO_NONEXPORTED_CLASS:
            if (context && context.className) {
                return `Consider exporting '${context.className}'`;
            }
            break;
        case DESTRUCTURE_NOT_SUPPORTED:
            return 'Consider simplifying to avoid destructuring';
        case REFERENCE_TO_LOCAL_SYMBOL:
            if (context && context.name) {
                return `Consider exporting '${context.name}'`;
            }
            break;
        case LAMBDA_NOT_SUPPORTED:
            return `Consider changing the function expression into an exported function`;
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
                return `references non-exported class ${error.context.className}`;
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
                return `calls '${error.context.name}'`;
            }
            return `calls a function`;
        case REFERENCE_TO_LOCAL_SYMBOL:
            if (error.context && error.context.name) {
                return `references local variable ${error.context.name}`;
            }
            return `references a local variable`;
    }
    return 'contains the error';
}
function mapStringMap(input, transform) {
    if (!input)
        return {};
    const result = {};
    Object.keys(input).forEach((key) => {
        const value = transform(input[key], key);
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
class BindingScope {
    static build() {
        const current = new Map();
        return {
            define: function (name, value) {
                current.set(name, value);
                return this;
            },
            done: function () {
                return current.size > 0 ? new PopulatedScope(current) : BindingScope.empty;
            }
        };
    }
}
BindingScope.missing = {};
BindingScope.empty = { resolve: name => BindingScope.missing };
class PopulatedScope extends BindingScope {
    constructor(bindings) {
        super();
        this.bindings = bindings;
    }
    resolve(name) {
        return this.bindings.has(name) ? this.bindings.get(name) : BindingScope.missing;
    }
}
function formatMetadataMessageChain(chain, advise) {
    const expanded = expandedMessage(chain.message, chain.context);
    const nesting = chain.symbol ? ` in '${chain.symbol.name}'` : '';
    const message = `${expanded}${nesting}`;
    const position = chain.position;
    const next = chain.next ?
        formatMetadataMessageChain(chain.next, advise) :
        advise ? { message: advise } : undefined;
    return { message, position, next: next ? [next] : undefined };
}
function formatMetadataError(e, context) {
    if (isMetadataError(e)) {
        // Produce a formatted version of the and leaving enough information in the original error
        // to recover the formatting information to eventually produce a diagnostic error message.
        const position = e.position;
        const chain = {
            message: `Error during template compile of '${context.name}'`,
            position: position,
            next: { message: e.message, next: e.chain, context: e.context, symbol: e.symbol }
        };
        const advise = e.advise || messageAdvise(e.message, e.context);
        return formattedError(formatMetadataMessageChain(chain, advise));
    }
    return e;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljX3JlZmxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9hb3Qvc3RhdGljX3JlZmxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUMsZUFBZSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFrQixNQUFNLFNBQVMsQ0FBQztBQUdqVyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRXBDLE9BQU8sRUFBQyxjQUFjLEVBQXdCLE1BQU0sbUJBQW1CLENBQUM7QUFDeEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRzdDLE1BQU0sWUFBWSxHQUFHLGVBQWUsQ0FBQztBQUNyQyxNQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztBQUV6QyxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFFOUIsTUFBTSxNQUFNLEdBQUc7SUFDYixVQUFVLEVBQUUsUUFBUTtDQUNyQixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDO0FBQzdCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQztBQUMxQixNQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3ZGLE1B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QUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFDO1NBQ2hGLENBQUM7UUFDRixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRCxPQUFPLGNBQWMsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNsRTtJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtDb21waWxlU3VtbWFyeUtpbmR9IGZyb20gJy4uL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuLi9jb21waWxlX3JlZmxlY3Rvcic7XG5pbXBvcnQge2NyZWF0ZUF0dHJpYnV0ZSwgY3JlYXRlQ29tcG9uZW50LCBjcmVhdGVDb250ZW50Q2hpbGQsIGNyZWF0ZUNvbnRlbnRDaGlsZHJlbiwgY3JlYXRlRGlyZWN0aXZlLCBjcmVhdGVIb3N0LCBjcmVhdGVIb3N0QmluZGluZywgY3JlYXRlSG9zdExpc3RlbmVyLCBjcmVhdGVJbmplY3QsIGNyZWF0ZUluamVjdGFibGUsIGNyZWF0ZUlucHV0LCBjcmVhdGVOZ01vZHVsZSwgY3JlYXRlT3B0aW9uYWwsIGNyZWF0ZU91dHB1dCwgY3JlYXRlUGlwZSwgY3JlYXRlU2VsZiwgY3JlYXRlU2tpcFNlbGYsIGNyZWF0ZVZpZXdDaGlsZCwgY3JlYXRlVmlld0NoaWxkcmVuLCBNZXRhZGF0YUZhY3Rvcnl9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0ICogYXMgbyBmcm9tICcuLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge1N1bW1hcnlSZXNvbHZlcn0gZnJvbSAnLi4vc3VtbWFyeV9yZXNvbHZlcic7XG5pbXBvcnQge3N5bnRheEVycm9yfSBmcm9tICcuLi91dGlsJztcblxuaW1wb3J0IHtmb3JtYXR0ZWRFcnJvciwgRm9ybWF0dGVkTWVzc2FnZUNoYWlufSBmcm9tICcuL2Zvcm1hdHRlZF9lcnJvcic7XG5pbXBvcnQge1N0YXRpY1N5bWJvbH0gZnJvbSAnLi9zdGF0aWNfc3ltYm9sJztcbmltcG9ydCB7U3RhdGljU3ltYm9sUmVzb2x2ZXJ9IGZyb20gJy4vc3RhdGljX3N5bWJvbF9yZXNvbHZlcic7XG5cbmNvbnN0IEFOR1VMQVJfQ09SRSA9ICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IEFOR1VMQVJfUk9VVEVSID0gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IEhJRERFTl9LRVkgPSAvXlxcJC4qXFwkJC87XG5cbmNvbnN0IElHTk9SRSA9IHtcbiAgX19zeW1ib2xpYzogJ2lnbm9yZSdcbn07XG5cbmNvbnN0IFVTRV9WQUxVRSA9ICd1c2VWYWx1ZSc7XG5jb25zdCBQUk9WSURFID0gJ3Byb3ZpZGUnO1xuY29uc3QgUkVGRVJFTkNFX1NFVCA9IG5ldyBTZXQoW1VTRV9WQUxVRSwgJ3VzZUZhY3RvcnknLCAnZGF0YScsICdpZCcsICdsb2FkQ2hpbGRyZW4nXSk7XG5jb25zdCBUWVBFR1VBUkRfUE9TVEZJWCA9ICdUeXBlR3VhcmQnO1xuY29uc3QgVVNFX0lGID0gJ1VzZUlmJztcblxuZnVuY3Rpb24gc2hvdWxkSWdub3JlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLl9fc3ltYm9saWMgPT0gJ2lnbm9yZSc7XG59XG5cbi8qKlxuICogQSBzdGF0aWMgcmVmbGVjdG9yIGltcGxlbWVudHMgZW5vdWdoIG9mIHRoZSBSZWZsZWN0b3IgQVBJIHRoYXQgaXMgbmVjZXNzYXJ5IHRvIGNvbXBpbGVcbiAqIHRlbXBsYXRlcyBzdGF0aWNhbGx5LlxuICovXG5leHBvcnQgY2xhc3MgU3RhdGljUmVmbGVjdG9yIGltcGxlbWVudHMgQ29tcGlsZVJlZmxlY3RvciB7XG4gIHByaXZhdGUgYW5ub3RhdGlvbkNhY2hlID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIGFueVtdPigpO1xuICBwcml2YXRlIHNoYWxsb3dBbm5vdGF0aW9uQ2FjaGUgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgYW55W10+KCk7XG4gIHByaXZhdGUgcHJvcGVydHlDYWNoZSA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCB7W2tleTogc3RyaW5nXTogYW55W119PigpO1xuICBwcml2YXRlIHBhcmFtZXRlckNhY2hlID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIGFueVtdPigpO1xuICBwcml2YXRlIG1ldGhvZENhY2hlID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIHtba2V5OiBzdHJpbmddOiBib29sZWFufT4oKTtcbiAgcHJpdmF0ZSBzdGF0aWNDYWNoZSA9IG5ldyBNYXA8U3RhdGljU3ltYm9sLCBzdHJpbmdbXT4oKTtcbiAgcHJpdmF0ZSBjb252ZXJzaW9uTWFwID0gbmV3IE1hcDxTdGF0aWNTeW1ib2wsIChjb250ZXh0OiBTdGF0aWNTeW1ib2wsIGFyZ3M6IGFueVtdKSA9PiBhbnk+KCk7XG4gIHByaXZhdGUgcmVzb2x2ZWRFeHRlcm5hbFJlZmVyZW5jZXMgPSBuZXcgTWFwPHN0cmluZywgU3RhdGljU3ltYm9sPigpO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBpbmplY3Rpb25Ub2tlbiE6IFN0YXRpY1N5bWJvbDtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgb3BhcXVlVG9rZW4hOiBTdGF0aWNTeW1ib2w7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBST1VURVMhOiBTdGF0aWNTeW1ib2w7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMhOiBTdGF0aWNTeW1ib2w7XG4gIHByaXZhdGUgYW5ub3RhdGlvbkZvclBhcmVudENsYXNzV2l0aFN1bW1hcnlLaW5kID1cbiAgICAgIG5ldyBNYXA8Q29tcGlsZVN1bW1hcnlLaW5kLCBNZXRhZGF0YUZhY3Rvcnk8YW55PltdPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBzdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxTdGF0aWNTeW1ib2w+LFxuICAgICAgcHJpdmF0ZSBzeW1ib2xSZXNvbHZlcjogU3RhdGljU3ltYm9sUmVzb2x2ZXIsXG4gICAgICBrbm93bk1ldGFkYXRhQ2xhc3Nlczoge25hbWU6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZywgY3RvcjogYW55fVtdID0gW10sXG4gICAgICBrbm93bk1ldGFkYXRhRnVuY3Rpb25zOiB7bmFtZTogc3RyaW5nLCBmaWxlUGF0aDogc3RyaW5nLCBmbjogYW55fVtdID0gW10sXG4gICAgICBwcml2YXRlIGVycm9yUmVjb3JkZXI/OiAoZXJyb3I6IGFueSwgZmlsZU5hbWU/OiBzdHJpbmcpID0+IHZvaWQpIHtcbiAgICB0aGlzLmluaXRpYWxpemVDb252ZXJzaW9uTWFwKCk7XG4gICAga25vd25NZXRhZGF0YUNsYXNzZXMuZm9yRWFjaChcbiAgICAgICAgKGtjKSA9PiB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgICAgICB0aGlzLmdldFN0YXRpY1N5bWJvbChrYy5maWxlUGF0aCwga2MubmFtZSksIGtjLmN0b3IpKTtcbiAgICBrbm93bk1ldGFkYXRhRnVuY3Rpb25zLmZvckVhY2goXG4gICAgICAgIChrZikgPT4gdGhpcy5fcmVnaXN0ZXJGdW5jdGlvbih0aGlzLmdldFN0YXRpY1N5bWJvbChrZi5maWxlUGF0aCwga2YubmFtZSksIGtmLmZuKSk7XG4gICAgdGhpcy5hbm5vdGF0aW9uRm9yUGFyZW50Q2xhc3NXaXRoU3VtbWFyeUtpbmQuc2V0KFxuICAgICAgICBDb21waWxlU3VtbWFyeUtpbmQuRGlyZWN0aXZlLCBbY3JlYXRlRGlyZWN0aXZlLCBjcmVhdGVDb21wb25lbnRdKTtcbiAgICB0aGlzLmFubm90YXRpb25Gb3JQYXJlbnRDbGFzc1dpdGhTdW1tYXJ5S2luZC5zZXQoQ29tcGlsZVN1bW1hcnlLaW5kLlBpcGUsIFtjcmVhdGVQaXBlXSk7XG4gICAgdGhpcy5hbm5vdGF0aW9uRm9yUGFyZW50Q2xhc3NXaXRoU3VtbWFyeUtpbmQuc2V0KENvbXBpbGVTdW1tYXJ5S2luZC5OZ01vZHVsZSwgW2NyZWF0ZU5nTW9kdWxlXSk7XG4gICAgdGhpcy5hbm5vdGF0aW9uRm9yUGFyZW50Q2xhc3NXaXRoU3VtbWFyeUtpbmQuc2V0KFxuICAgICAgICBDb21waWxlU3VtbWFyeUtpbmQuSW5qZWN0YWJsZSxcbiAgICAgICAgW2NyZWF0ZUluamVjdGFibGUsIGNyZWF0ZVBpcGUsIGNyZWF0ZURpcmVjdGl2ZSwgY3JlYXRlQ29tcG9uZW50LCBjcmVhdGVOZ01vZHVsZV0pO1xuICB9XG5cbiAgY29tcG9uZW50TW9kdWxlVXJsKHR5cGVPckZ1bmM6IFN0YXRpY1N5bWJvbCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhdGljU3ltYm9sID0gdGhpcy5maW5kU3ltYm9sRGVjbGFyYXRpb24odHlwZU9yRnVuYyk7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sUmVzb2x2ZXIuZ2V0UmVzb3VyY2VQYXRoKHN0YXRpY1N5bWJvbCk7XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZSB0aGUgc3BlY2lmaWVkIGBzeW1ib2xzYCBvbiBwcm9ncmFtIGNoYW5nZS5cbiAgICogQHBhcmFtIHN5bWJvbHNcbiAgICovXG4gIGludmFsaWRhdGVTeW1ib2xzKHN5bWJvbHM6IFN0YXRpY1N5bWJvbFtdKSB7XG4gICAgZm9yIChjb25zdCBzeW1ib2wgb2Ygc3ltYm9scykge1xuICAgICAgdGhpcy5hbm5vdGF0aW9uQ2FjaGUuZGVsZXRlKHN5bWJvbCk7XG4gICAgICB0aGlzLnNoYWxsb3dBbm5vdGF0aW9uQ2FjaGUuZGVsZXRlKHN5bWJvbCk7XG4gICAgICB0aGlzLnByb3BlcnR5Q2FjaGUuZGVsZXRlKHN5bWJvbCk7XG4gICAgICB0aGlzLnBhcmFtZXRlckNhY2hlLmRlbGV0ZShzeW1ib2wpO1xuICAgICAgdGhpcy5tZXRob2RDYWNoZS5kZWxldGUoc3ltYm9sKTtcbiAgICAgIHRoaXMuc3RhdGljQ2FjaGUuZGVsZXRlKHN5bWJvbCk7XG4gICAgICB0aGlzLmNvbnZlcnNpb25NYXAuZGVsZXRlKHN5bWJvbCk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKHJlZjogby5FeHRlcm5hbFJlZmVyZW5jZSwgY29udGFpbmluZ0ZpbGU/OiBzdHJpbmcpOiBTdGF0aWNTeW1ib2wge1xuICAgIGxldCBrZXk6IHN0cmluZ3x1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKCFjb250YWluaW5nRmlsZSkge1xuICAgICAga2V5ID0gYCR7cmVmLm1vZHVsZU5hbWV9OiR7cmVmLm5hbWV9YDtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uU3ltYm9sID0gdGhpcy5yZXNvbHZlZEV4dGVybmFsUmVmZXJlbmNlcy5nZXQoa2V5KTtcbiAgICAgIGlmIChkZWNsYXJhdGlvblN5bWJvbCkgcmV0dXJuIGRlY2xhcmF0aW9uU3ltYm9sO1xuICAgIH1cbiAgICBjb25zdCByZWZTeW1ib2wgPVxuICAgICAgICB0aGlzLnN5bWJvbFJlc29sdmVyLmdldFN5bWJvbEJ5TW9kdWxlKHJlZi5tb2R1bGVOYW1lISwgcmVmLm5hbWUhLCBjb250YWluaW5nRmlsZSk7XG4gICAgY29uc3QgZGVjbGFyYXRpb25TeW1ib2wgPSB0aGlzLmZpbmRTeW1ib2xEZWNsYXJhdGlvbihyZWZTeW1ib2wpO1xuICAgIGlmICghY29udGFpbmluZ0ZpbGUpIHtcbiAgICAgIHRoaXMuc3ltYm9sUmVzb2x2ZXIucmVjb3JkTW9kdWxlTmFtZUZvckZpbGVOYW1lKHJlZlN5bWJvbC5maWxlUGF0aCwgcmVmLm1vZHVsZU5hbWUhKTtcbiAgICAgIHRoaXMuc3ltYm9sUmVzb2x2ZXIucmVjb3JkSW1wb3J0QXMoZGVjbGFyYXRpb25TeW1ib2wsIHJlZlN5bWJvbCk7XG4gICAgfVxuICAgIGlmIChrZXkpIHtcbiAgICAgIHRoaXMucmVzb2x2ZWRFeHRlcm5hbFJlZmVyZW5jZXMuc2V0KGtleSwgZGVjbGFyYXRpb25TeW1ib2wpO1xuICAgIH1cbiAgICByZXR1cm4gZGVjbGFyYXRpb25TeW1ib2w7XG4gIH1cblxuICBmaW5kRGVjbGFyYXRpb24obW9kdWxlVXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGU/OiBzdHJpbmcpOiBTdGF0aWNTeW1ib2wge1xuICAgIHJldHVybiB0aGlzLmZpbmRTeW1ib2xEZWNsYXJhdGlvbihcbiAgICAgICAgdGhpcy5zeW1ib2xSZXNvbHZlci5nZXRTeW1ib2xCeU1vZHVsZShtb2R1bGVVcmwsIG5hbWUsIGNvbnRhaW5pbmdGaWxlKSk7XG4gIH1cblxuICB0cnlGaW5kRGVjbGFyYXRpb24obW9kdWxlVXJsOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgY29udGFpbmluZ0ZpbGU/OiBzdHJpbmcpOiBTdGF0aWNTeW1ib2wge1xuICAgIHJldHVybiB0aGlzLnN5bWJvbFJlc29sdmVyLmlnbm9yZUVycm9yc0ZvcihcbiAgICAgICAgKCkgPT4gdGhpcy5maW5kRGVjbGFyYXRpb24obW9kdWxlVXJsLCBuYW1lLCBjb250YWluaW5nRmlsZSkpO1xuICB9XG5cbiAgZmluZFN5bWJvbERlY2xhcmF0aW9uKHN5bWJvbDogU3RhdGljU3ltYm9sKTogU3RhdGljU3ltYm9sIHtcbiAgICBjb25zdCByZXNvbHZlZFN5bWJvbCA9IHRoaXMuc3ltYm9sUmVzb2x2ZXIucmVzb2x2ZVN5bWJvbChzeW1ib2wpO1xuICAgIGlmIChyZXNvbHZlZFN5bWJvbCkge1xuICAgICAgbGV0IHJlc29sdmVkTWV0YWRhdGEgPSByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YTtcbiAgICAgIGlmIChyZXNvbHZlZE1ldGFkYXRhICYmIHJlc29sdmVkTWV0YWRhdGEuX19zeW1ib2xpYyA9PT0gJ3Jlc29sdmVkJykge1xuICAgICAgICByZXNvbHZlZE1ldGFkYXRhID0gcmVzb2x2ZWRNZXRhZGF0YS5zeW1ib2w7XG4gICAgICB9XG4gICAgICBpZiAocmVzb2x2ZWRNZXRhZGF0YSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kU3ltYm9sRGVjbGFyYXRpb24ocmVzb2x2ZWRTeW1ib2wubWV0YWRhdGEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3ltYm9sO1xuICB9XG5cbiAgcHVibGljIHRyeUFubm90YXRpb25zKHR5cGU6IFN0YXRpY1N5bWJvbCk6IGFueVtdIHtcbiAgICBjb25zdCBvcmlnaW5hbFJlY29yZGVyID0gdGhpcy5lcnJvclJlY29yZGVyO1xuICAgIHRoaXMuZXJyb3JSZWNvcmRlciA9IChlcnJvcjogYW55LCBmaWxlTmFtZT86IHN0cmluZykgPT4ge307XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLmFubm90YXRpb25zKHR5cGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmVycm9yUmVjb3JkZXIgPSBvcmlnaW5hbFJlY29yZGVyO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhbm5vdGF0aW9ucyh0eXBlOiBTdGF0aWNTeW1ib2wpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2Fubm90YXRpb25zKFxuICAgICAgICB0eXBlLCAodHlwZTogU3RhdGljU3ltYm9sLCBkZWNvcmF0b3JzOiBhbnkpID0+IHRoaXMuc2ltcGxpZnkodHlwZSwgZGVjb3JhdG9ycyksXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbkNhY2hlKTtcbiAgfVxuXG4gIHB1YmxpYyBzaGFsbG93QW5ub3RhdGlvbnModHlwZTogU3RhdGljU3ltYm9sKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9hbm5vdGF0aW9ucyhcbiAgICAgICAgdHlwZSwgKHR5cGU6IFN0YXRpY1N5bWJvbCwgZGVjb3JhdG9yczogYW55KSA9PiB0aGlzLnNpbXBsaWZ5KHR5cGUsIGRlY29yYXRvcnMsIHRydWUpLFxuICAgICAgICB0aGlzLnNoYWxsb3dBbm5vdGF0aW9uQ2FjaGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYW5ub3RhdGlvbnMoXG4gICAgICB0eXBlOiBTdGF0aWNTeW1ib2wsIHNpbXBsaWZ5OiAodHlwZTogU3RhdGljU3ltYm9sLCBkZWNvcmF0b3JzOiBhbnkpID0+IGFueSxcbiAgICAgIGFubm90YXRpb25DYWNoZTogTWFwPFN0YXRpY1N5bWJvbCwgYW55W10+KTogYW55W10ge1xuICAgIGxldCBhbm5vdGF0aW9ucyA9IGFubm90YXRpb25DYWNoZS5nZXQodHlwZSk7XG4gICAgaWYgKCFhbm5vdGF0aW9ucykge1xuICAgICAgYW5ub3RhdGlvbnMgPSBbXTtcbiAgICAgIGNvbnN0IGNsYXNzTWV0YWRhdGEgPSB0aGlzLmdldFR5cGVNZXRhZGF0YSh0eXBlKTtcbiAgICAgIGNvbnN0IHBhcmVudFR5cGUgPSB0aGlzLmZpbmRQYXJlbnRUeXBlKHR5cGUsIGNsYXNzTWV0YWRhdGEpO1xuICAgICAgaWYgKHBhcmVudFR5cGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50QW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zKHBhcmVudFR5cGUpO1xuICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKC4uLnBhcmVudEFubm90YXRpb25zKTtcbiAgICAgIH1cbiAgICAgIGxldCBvd25Bbm5vdGF0aW9uczogYW55W10gPSBbXTtcbiAgICAgIGlmIChjbGFzc01ldGFkYXRhWydkZWNvcmF0b3JzJ10pIHtcbiAgICAgICAgb3duQW5ub3RhdGlvbnMgPSBzaW1wbGlmeSh0eXBlLCBjbGFzc01ldGFkYXRhWydkZWNvcmF0b3JzJ10pO1xuICAgICAgICBpZiAob3duQW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKC4uLm93bkFubm90YXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcmVudFR5cGUgJiYgIXRoaXMuc3VtbWFyeVJlc29sdmVyLmlzTGlicmFyeUZpbGUodHlwZS5maWxlUGF0aCkgJiZcbiAgICAgICAgICB0aGlzLnN1bW1hcnlSZXNvbHZlci5pc0xpYnJhcnlGaWxlKHBhcmVudFR5cGUuZmlsZVBhdGgpKSB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnN1bW1hcnlSZXNvbHZlci5yZXNvbHZlU3VtbWFyeShwYXJlbnRUeXBlKTtcbiAgICAgICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS50eXBlKSB7XG4gICAgICAgICAgY29uc3QgcmVxdWlyZWRBbm5vdGF0aW9uVHlwZXMgPVxuICAgICAgICAgICAgICB0aGlzLmFubm90YXRpb25Gb3JQYXJlbnRDbGFzc1dpdGhTdW1tYXJ5S2luZC5nZXQoc3VtbWFyeS50eXBlLnN1bW1hcnlLaW5kISkhO1xuICAgICAgICAgIGNvbnN0IHR5cGVIYXNSZXF1aXJlZEFubm90YXRpb24gPSByZXF1aXJlZEFubm90YXRpb25UeXBlcy5zb21lKFxuICAgICAgICAgICAgICAocmVxdWlyZWRUeXBlKSA9PiBvd25Bbm5vdGF0aW9ucy5zb21lKGFubiA9PiByZXF1aXJlZFR5cGUuaXNUeXBlT2YoYW5uKSkpO1xuICAgICAgICAgIGlmICghdHlwZUhhc1JlcXVpcmVkQW5ub3RhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5yZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgICBmb3JtYXRNZXRhZGF0YUVycm9yKFxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYENsYXNzICR7dHlwZS5uYW1lfSBpbiAke3R5cGUuZmlsZVBhdGh9IGV4dGVuZHMgZnJvbSBhICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGlsZVN1bW1hcnlLaW5kW3N1bW1hcnkudHlwZS5zdW1tYXJ5S2luZCFcbiAgICAgICAgICAgIF19IGluIGFub3RoZXIgY29tcGlsYXRpb24gdW5pdCB3aXRob3V0IGR1cGxpY2F0aW5nIHRoZSBkZWNvcmF0b3JgLFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogc3VtbWFyeSAqLyB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBgUGxlYXNlIGFkZCBhICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRBbm5vdGF0aW9uVHlwZXMubWFwKCh0eXBlKSA9PiB0eXBlLm5nTWV0YWRhdGFOYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignIG9yICcpfSBkZWNvcmF0b3IgdG8gdGhlIGNsYXNzYCksXG4gICAgICAgICAgICAgICAgICAgIHR5cGUpLFxuICAgICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYW5ub3RhdGlvbkNhY2hlLnNldCh0eXBlLCBhbm5vdGF0aW9ucy5maWx0ZXIoYW5uID0+ICEhYW5uKSk7XG4gICAgfVxuICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgfVxuXG4gIHB1YmxpYyBwcm9wTWV0YWRhdGEodHlwZTogU3RhdGljU3ltYm9sKToge1trZXk6IHN0cmluZ106IGFueVtdfSB7XG4gICAgbGV0IHByb3BNZXRhZGF0YSA9IHRoaXMucHJvcGVydHlDYWNoZS5nZXQodHlwZSk7XG4gICAgaWYgKCFwcm9wTWV0YWRhdGEpIHtcbiAgICAgIGNvbnN0IGNsYXNzTWV0YWRhdGEgPSB0aGlzLmdldFR5cGVNZXRhZGF0YSh0eXBlKTtcbiAgICAgIHByb3BNZXRhZGF0YSA9IHt9O1xuICAgICAgY29uc3QgcGFyZW50VHlwZSA9IHRoaXMuZmluZFBhcmVudFR5cGUodHlwZSwgY2xhc3NNZXRhZGF0YSk7XG4gICAgICBpZiAocGFyZW50VHlwZSkge1xuICAgICAgICBjb25zdCBwYXJlbnRQcm9wTWV0YWRhdGEgPSB0aGlzLnByb3BNZXRhZGF0YShwYXJlbnRUeXBlKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyZW50UHJvcE1ldGFkYXRhKS5mb3JFYWNoKChwYXJlbnRQcm9wKSA9PiB7XG4gICAgICAgICAgcHJvcE1ldGFkYXRhIVtwYXJlbnRQcm9wXSA9IHBhcmVudFByb3BNZXRhZGF0YVtwYXJlbnRQcm9wXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1lbWJlcnMgPSBjbGFzc01ldGFkYXRhWydtZW1iZXJzJ10gfHwge307XG4gICAgICBPYmplY3Qua2V5cyhtZW1iZXJzKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wRGF0YSA9IG1lbWJlcnNbcHJvcE5hbWVdO1xuICAgICAgICBjb25zdCBwcm9wID0gKDxhbnlbXT5wcm9wRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZChhID0+IGFbJ19fc3ltYm9saWMnXSA9PSAncHJvcGVydHknIHx8IGFbJ19fc3ltYm9saWMnXSA9PSAnbWV0aG9kJyk7XG4gICAgICAgIGNvbnN0IGRlY29yYXRvcnM6IGFueVtdID0gW107XG4gICAgICAgIGlmIChwcm9wTWV0YWRhdGEhW3Byb3BOYW1lXSkge1xuICAgICAgICAgIGRlY29yYXRvcnMucHVzaCguLi5wcm9wTWV0YWRhdGEhW3Byb3BOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvcE1ldGFkYXRhIVtwcm9wTmFtZV0gPSBkZWNvcmF0b3JzO1xuICAgICAgICBpZiAocHJvcCAmJiBwcm9wWydkZWNvcmF0b3JzJ10pIHtcbiAgICAgICAgICBkZWNvcmF0b3JzLnB1c2goLi4udGhpcy5zaW1wbGlmeSh0eXBlLCBwcm9wWydkZWNvcmF0b3JzJ10pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BlcnR5Q2FjaGUuc2V0KHR5cGUsIHByb3BNZXRhZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wTWV0YWRhdGE7XG4gIH1cblxuICBwdWJsaWMgcGFyYW1ldGVycyh0eXBlOiBTdGF0aWNTeW1ib2wpOiBhbnlbXSB7XG4gICAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKGBwYXJhbWV0ZXJzIHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkodHlwZSl9IHdoaWNoIGlzIG5vdCBhIFN0YXRpY1N5bWJvbGApLFxuICAgICAgICAgIHR5cGUpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgbGV0IHBhcmFtZXRlcnMgPSB0aGlzLnBhcmFtZXRlckNhY2hlLmdldCh0eXBlKTtcbiAgICAgIGlmICghcGFyYW1ldGVycykge1xuICAgICAgICBjb25zdCBjbGFzc01ldGFkYXRhID0gdGhpcy5nZXRUeXBlTWV0YWRhdGEodHlwZSk7XG4gICAgICAgIGNvbnN0IHBhcmVudFR5cGUgPSB0aGlzLmZpbmRQYXJlbnRUeXBlKHR5cGUsIGNsYXNzTWV0YWRhdGEpO1xuICAgICAgICBjb25zdCBtZW1iZXJzID0gY2xhc3NNZXRhZGF0YSA/IGNsYXNzTWV0YWRhdGFbJ21lbWJlcnMnXSA6IG51bGw7XG4gICAgICAgIGNvbnN0IGN0b3JEYXRhID0gbWVtYmVycyA/IG1lbWJlcnNbJ19fY3Rvcl9fJ10gOiBudWxsO1xuICAgICAgICBpZiAoY3RvckRhdGEpIHtcbiAgICAgICAgICBjb25zdCBjdG9yID0gKDxhbnlbXT5jdG9yRGF0YSkuZmluZChhID0+IGFbJ19fc3ltYm9saWMnXSA9PSAnY29uc3RydWN0b3InKTtcbiAgICAgICAgICBjb25zdCByYXdQYXJhbWV0ZXJUeXBlcyA9IDxhbnlbXT5jdG9yWydwYXJhbWV0ZXJzJ10gfHwgW107XG4gICAgICAgICAgY29uc3QgcGFyYW1ldGVyRGVjb3JhdG9ycyA9IDxhbnlbXT50aGlzLnNpbXBsaWZ5KHR5cGUsIGN0b3JbJ3BhcmFtZXRlckRlY29yYXRvcnMnXSB8fCBbXSk7XG4gICAgICAgICAgcGFyYW1ldGVycyA9IFtdO1xuICAgICAgICAgIHJhd1BhcmFtZXRlclR5cGVzLmZvckVhY2goKHJhd1BhcmFtVHlwZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5lc3RlZFJlc3VsdDogYW55W10gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtVHlwZSA9IHRoaXMudHJ5U2ltcGxpZnkodHlwZSwgcmF3UGFyYW1UeXBlKTtcbiAgICAgICAgICAgIGlmIChwYXJhbVR5cGUpIG5lc3RlZFJlc3VsdC5wdXNoKHBhcmFtVHlwZSk7XG4gICAgICAgICAgICBjb25zdCBkZWNvcmF0b3JzID0gcGFyYW1ldGVyRGVjb3JhdG9ycyA/IHBhcmFtZXRlckRlY29yYXRvcnNbaW5kZXhdIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICAgICAgICAgIG5lc3RlZFJlc3VsdC5wdXNoKC4uLmRlY29yYXRvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyYW1ldGVycyEucHVzaChuZXN0ZWRSZXN1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmVudFR5cGUpIHtcbiAgICAgICAgICBwYXJhbWV0ZXJzID0gdGhpcy5wYXJhbWV0ZXJzKHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGFyYW1ldGVycykge1xuICAgICAgICAgIHBhcmFtZXRlcnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmFtZXRlckNhY2hlLnNldCh0eXBlLCBwYXJhbWV0ZXJzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJhbWV0ZXJzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCBvbiB0eXBlICR7SlNPTi5zdHJpbmdpZnkodHlwZSl9IHdpdGggZXJyb3IgJHtlfWApO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9tZXRob2ROYW1lcyh0eXBlOiBhbnkpOiB7W2tleTogc3RyaW5nXTogYm9vbGVhbn0ge1xuICAgIGxldCBtZXRob2ROYW1lcyA9IHRoaXMubWV0aG9kQ2FjaGUuZ2V0KHR5cGUpO1xuICAgIGlmICghbWV0aG9kTmFtZXMpIHtcbiAgICAgIGNvbnN0IGNsYXNzTWV0YWRhdGEgPSB0aGlzLmdldFR5cGVNZXRhZGF0YSh0eXBlKTtcbiAgICAgIG1ldGhvZE5hbWVzID0ge307XG4gICAgICBjb25zdCBwYXJlbnRUeXBlID0gdGhpcy5maW5kUGFyZW50VHlwZSh0eXBlLCBjbGFzc01ldGFkYXRhKTtcbiAgICAgIGlmIChwYXJlbnRUeXBlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudE1ldGhvZE5hbWVzID0gdGhpcy5fbWV0aG9kTmFtZXMocGFyZW50VHlwZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmVudE1ldGhvZE5hbWVzKS5mb3JFYWNoKChwYXJlbnRQcm9wKSA9PiB7XG4gICAgICAgICAgbWV0aG9kTmFtZXMhW3BhcmVudFByb3BdID0gcGFyZW50TWV0aG9kTmFtZXNbcGFyZW50UHJvcF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBtZW1iZXJzID0gY2xhc3NNZXRhZGF0YVsnbWVtYmVycyddIHx8IHt9O1xuICAgICAgT2JqZWN0LmtleXMobWVtYmVycykuZm9yRWFjaCgocHJvcE5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcERhdGEgPSBtZW1iZXJzW3Byb3BOYW1lXTtcbiAgICAgICAgY29uc3QgaXNNZXRob2QgPSAoPGFueVtdPnByb3BEYXRhKS5zb21lKGEgPT4gYVsnX19zeW1ib2xpYyddID09ICdtZXRob2QnKTtcbiAgICAgICAgbWV0aG9kTmFtZXMhW3Byb3BOYW1lXSA9IG1ldGhvZE5hbWVzIVtwcm9wTmFtZV0gfHwgaXNNZXRob2Q7XG4gICAgICB9KTtcbiAgICAgIHRoaXMubWV0aG9kQ2FjaGUuc2V0KHR5cGUsIG1ldGhvZE5hbWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZE5hbWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGljTWVtYmVycyh0eXBlOiBTdGF0aWNTeW1ib2wpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHN0YXRpY01lbWJlcnMgPSB0aGlzLnN0YXRpY0NhY2hlLmdldCh0eXBlKTtcbiAgICBpZiAoIXN0YXRpY01lbWJlcnMpIHtcbiAgICAgIGNvbnN0IGNsYXNzTWV0YWRhdGEgPSB0aGlzLmdldFR5cGVNZXRhZGF0YSh0eXBlKTtcbiAgICAgIGNvbnN0IHN0YXRpY01lbWJlckRhdGEgPSBjbGFzc01ldGFkYXRhWydzdGF0aWNzJ10gfHwge307XG4gICAgICBzdGF0aWNNZW1iZXJzID0gT2JqZWN0LmtleXMoc3RhdGljTWVtYmVyRGF0YSk7XG4gICAgICB0aGlzLnN0YXRpY0NhY2hlLnNldCh0eXBlLCBzdGF0aWNNZW1iZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRpY01lbWJlcnM7XG4gIH1cblxuXG4gIHByaXZhdGUgZmluZFBhcmVudFR5cGUodHlwZTogU3RhdGljU3ltYm9sLCBjbGFzc01ldGFkYXRhOiBhbnkpOiBTdGF0aWNTeW1ib2x8dW5kZWZpbmVkIHtcbiAgICBjb25zdCBwYXJlbnRUeXBlID0gdGhpcy50cnlTaW1wbGlmeSh0eXBlLCBjbGFzc01ldGFkYXRhWydleHRlbmRzJ10pO1xuICAgIGlmIChwYXJlbnRUeXBlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICByZXR1cm4gcGFyZW50VHlwZTtcbiAgICB9XG4gIH1cblxuICBoYXNMaWZlY3ljbGVIb29rKHR5cGU6IGFueSwgbGNQcm9wZXJ0eTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCEodHlwZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkpIHtcbiAgICAgIHRoaXMucmVwb3J0RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgaGFzTGlmZWN5Y2xlSG9vayByZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHR5cGUpfSB3aGljaCBpcyBub3QgYSBTdGF0aWNTeW1ib2xgKSxcbiAgICAgICAgICB0eXBlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAhIXRoaXMuX21ldGhvZE5hbWVzKHR5cGUpW2xjUHJvcGVydHldO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCBvbiB0eXBlICR7SlNPTi5zdHJpbmdpZnkodHlwZSl9IHdpdGggZXJyb3IgJHtlfWApO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBndWFyZHModHlwZTogYW55KToge1trZXk6IHN0cmluZ106IFN0YXRpY1N5bWJvbH0ge1xuICAgIGlmICghKHR5cGUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpKSB7XG4gICAgICB0aGlzLnJlcG9ydEVycm9yKFxuICAgICAgICAgIG5ldyBFcnJvcihgZ3VhcmRzIHJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkodHlwZSl9IHdoaWNoIGlzIG5vdCBhIFN0YXRpY1N5bWJvbGApLCB0eXBlKTtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3Qgc3RhdGljTWVtYmVycyA9IHRoaXMuX3N0YXRpY01lbWJlcnModHlwZSk7XG4gICAgY29uc3QgcmVzdWx0OiB7W2tleTogc3RyaW5nXTogU3RhdGljU3ltYm9sfSA9IHt9O1xuICAgIGZvciAobGV0IG5hbWUgb2Ygc3RhdGljTWVtYmVycykge1xuICAgICAgaWYgKG5hbWUuZW5kc1dpdGgoVFlQRUdVQVJEX1BPU1RGSVgpKSB7XG4gICAgICAgIGxldCBwcm9wZXJ0eSA9IG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gVFlQRUdVQVJEX1BPU1RGSVgubGVuZ3RoKTtcbiAgICAgICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgICAgIGlmIChwcm9wZXJ0eS5lbmRzV2l0aChVU0VfSUYpKSB7XG4gICAgICAgICAgcHJvcGVydHkgPSBuYW1lLnN1YnN0cigwLCBwcm9wZXJ0eS5sZW5ndGggLSBVU0VfSUYubGVuZ3RoKTtcbiAgICAgICAgICB2YWx1ZSA9IFVTRV9JRjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0U3RhdGljU3ltYm9sKHR5cGUuZmlsZVBhdGgsIHR5cGUubmFtZSwgW25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IodHlwZTogU3RhdGljU3ltYm9sLCBjdG9yOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnZlcnNpb25NYXAuc2V0KHR5cGUsIChjb250ZXh0OiBTdGF0aWNTeW1ib2wsIGFyZ3M6IGFueVtdKSA9PiBuZXcgY3RvciguLi5hcmdzKSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWdpc3RlckZ1bmN0aW9uKHR5cGU6IFN0YXRpY1N5bWJvbCwgZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY29udmVyc2lvbk1hcC5zZXQodHlwZSwgKGNvbnRleHQ6IFN0YXRpY1N5bWJvbCwgYXJnczogYW55W10pID0+IGZuLmFwcGx5KHVuZGVmaW5lZCwgYXJncykpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplQ29udmVyc2lvbk1hcCgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0luamVjdGFibGUnKSwgY3JlYXRlSW5qZWN0YWJsZSk7XG4gICAgdGhpcy5pbmplY3Rpb25Ub2tlbiA9IHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0luamVjdGlvblRva2VuJyk7XG4gICAgdGhpcy5vcGFxdWVUb2tlbiA9IHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ09wYXF1ZVRva2VuJyk7XG4gICAgdGhpcy5ST1VURVMgPSB0aGlzLnRyeUZpbmREZWNsYXJhdGlvbihBTkdVTEFSX1JPVVRFUiwgJ1JPVVRFUycpO1xuICAgIHRoaXMuQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyA9XG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0FOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMnKTtcblxuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3Rvcih0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdIb3N0JyksIGNyZWF0ZUhvc3QpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3Rvcih0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdTZWxmJyksIGNyZWF0ZVNlbGYpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnU2tpcFNlbGYnKSwgY3JlYXRlU2tpcFNlbGYpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnSW5qZWN0JyksIGNyZWF0ZUluamVjdCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdPcHRpb25hbCcpLCBjcmVhdGVPcHRpb25hbCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdBdHRyaWJ1dGUnKSwgY3JlYXRlQXR0cmlidXRlKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0NvbnRlbnRDaGlsZCcpLCBjcmVhdGVDb250ZW50Q2hpbGQpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnQ29udGVudENoaWxkcmVuJyksIGNyZWF0ZUNvbnRlbnRDaGlsZHJlbik7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdWaWV3Q2hpbGQnKSwgY3JlYXRlVmlld0NoaWxkKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ1ZpZXdDaGlsZHJlbicpLCBjcmVhdGVWaWV3Q2hpbGRyZW4pO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3Rvcih0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdJbnB1dCcpLCBjcmVhdGVJbnB1dCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdPdXRwdXQnKSwgY3JlYXRlT3V0cHV0KTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IodGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnUGlwZScpLCBjcmVhdGVQaXBlKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0hvc3RCaW5kaW5nJyksIGNyZWF0ZUhvc3RCaW5kaW5nKTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0hvc3RMaXN0ZW5lcicpLCBjcmVhdGVIb3N0TGlzdGVuZXIpO1xuICAgIHRoaXMuX3JlZ2lzdGVyRGVjb3JhdG9yT3JDb25zdHJ1Y3RvcihcbiAgICAgICAgdGhpcy5maW5kRGVjbGFyYXRpb24oQU5HVUxBUl9DT1JFLCAnRGlyZWN0aXZlJyksIGNyZWF0ZURpcmVjdGl2ZSk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdDb21wb25lbnQnKSwgY3JlYXRlQ29tcG9uZW50KTtcbiAgICB0aGlzLl9yZWdpc3RlckRlY29yYXRvck9yQ29uc3RydWN0b3IoXG4gICAgICAgIHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ05nTW9kdWxlJyksIGNyZWF0ZU5nTW9kdWxlKTtcblxuICAgIC8vIE5vdGU6IFNvbWUgbWV0YWRhdGEgY2xhc3NlcyBjYW4gYmUgdXNlZCBkaXJlY3RseSB3aXRoIFByb3ZpZGVyLmRlcHMuXG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ0hvc3QnKSwgY3JlYXRlSG9zdCk7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKHRoaXMuZmluZERlY2xhcmF0aW9uKEFOR1VMQVJfQ09SRSwgJ1NlbGYnKSwgY3JlYXRlU2VsZik7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdTa2lwU2VsZicpLCBjcmVhdGVTa2lwU2VsZik7XG4gICAgdGhpcy5fcmVnaXN0ZXJEZWNvcmF0b3JPckNvbnN0cnVjdG9yKFxuICAgICAgICB0aGlzLmZpbmREZWNsYXJhdGlvbihBTkdVTEFSX0NPUkUsICdPcHRpb25hbCcpLCBjcmVhdGVPcHRpb25hbCk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0U3RhdGljU3ltYm9sIHByb2R1Y2VzIGEgVHlwZSB3aG9zZSBtZXRhZGF0YSBpcyBrbm93biBidXQgd2hvc2UgaW1wbGVtZW50YXRpb24gaXMgbm90IGxvYWRlZC5cbiAgICogQWxsIHR5cGVzIHBhc3NlZCB0byB0aGUgU3RhdGljUmVzb2x2ZXIgc2hvdWxkIGJlIHBzZXVkby10eXBlcyByZXR1cm5lZCBieSB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIGRlY2xhcmF0aW9uRmlsZSB0aGUgYWJzb2x1dGUgcGF0aCBvZiB0aGUgZmlsZSB3aGVyZSB0aGUgc3ltYm9sIGlzIGRlY2xhcmVkXG4gICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSB0eXBlLlxuICAgKi9cbiAgZ2V0U3RhdGljU3ltYm9sKGRlY2xhcmF0aW9uRmlsZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIG1lbWJlcnM/OiBzdHJpbmdbXSk6IFN0YXRpY1N5bWJvbCB7XG4gICAgcmV0dXJuIHRoaXMuc3ltYm9sUmVzb2x2ZXIuZ2V0U3RhdGljU3ltYm9sKGRlY2xhcmF0aW9uRmlsZSwgbmFtZSwgbWVtYmVycyk7XG4gIH1cblxuICAvKipcbiAgICogU2ltcGxpZnkgYnV0IGRpc2NhcmQgYW55IGVycm9yc1xuICAgKi9cbiAgcHJpdmF0ZSB0cnlTaW1wbGlmeShjb250ZXh0OiBTdGF0aWNTeW1ib2wsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IG9yaWdpbmFsUmVjb3JkZXIgPSB0aGlzLmVycm9yUmVjb3JkZXI7XG4gICAgdGhpcy5lcnJvclJlY29yZGVyID0gKGVycm9yOiBhbnksIGZpbGVOYW1lPzogc3RyaW5nKSA9PiB7fTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNpbXBsaWZ5KGNvbnRleHQsIHZhbHVlKTtcbiAgICB0aGlzLmVycm9yUmVjb3JkZXIgPSBvcmlnaW5hbFJlY29yZGVyO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBzaW1wbGlmeShjb250ZXh0OiBTdGF0aWNTeW1ib2wsIHZhbHVlOiBhbnksIGxhenk6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgbGV0IHNjb3BlID0gQmluZGluZ1Njb3BlLmVtcHR5O1xuICAgIGNvbnN0IGNhbGxpbmcgPSBuZXcgTWFwPFN0YXRpY1N5bWJvbCwgYm9vbGVhbj4oKTtcbiAgICBjb25zdCByb290Q29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBmdW5jdGlvbiBzaW1wbGlmeUluQ29udGV4dChcbiAgICAgICAgY29udGV4dDogU3RhdGljU3ltYm9sLCB2YWx1ZTogYW55LCBkZXB0aDogbnVtYmVyLCByZWZlcmVuY2VzOiBudW1iZXIpOiBhbnkge1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVJlZmVyZW5jZVZhbHVlKHN0YXRpY1N5bWJvbDogU3RhdGljU3ltYm9sKTogYW55IHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRTeW1ib2wgPSBzZWxmLnN5bWJvbFJlc29sdmVyLnJlc29sdmVTeW1ib2woc3RhdGljU3ltYm9sKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkU3ltYm9sID8gcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGEgOiBudWxsO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzaW1wbGlmeUVhZ2VybHkodmFsdWU6IGFueSk6IGFueSB7XG4gICAgICAgIHJldHVybiBzaW1wbGlmeUluQ29udGV4dChjb250ZXh0LCB2YWx1ZSwgZGVwdGgsIDApO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzaW1wbGlmeUxhemlseSh2YWx1ZTogYW55KTogYW55IHtcbiAgICAgICAgcmV0dXJuIHNpbXBsaWZ5SW5Db250ZXh0KGNvbnRleHQsIHZhbHVlLCBkZXB0aCwgcmVmZXJlbmNlcyArIDEpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzaW1wbGlmeU5lc3RlZChuZXN0ZWRDb250ZXh0OiBTdGF0aWNTeW1ib2wsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAobmVzdGVkQ29udGV4dCA9PT0gY29udGV4dCkge1xuICAgICAgICAgIC8vIElmIHRoZSBjb250ZXh0IGhhc24ndCBjaGFuZ2VkIGxldCB0aGUgZXhjZXB0aW9uIHByb3BhZ2F0ZSB1bm1vZGlmaWVkLlxuICAgICAgICAgIHJldHVybiBzaW1wbGlmeUluQ29udGV4dChuZXN0ZWRDb250ZXh0LCB2YWx1ZSwgZGVwdGggKyAxLCByZWZlcmVuY2VzKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBzaW1wbGlmeUluQ29udGV4dChuZXN0ZWRDb250ZXh0LCB2YWx1ZSwgZGVwdGggKyAxLCByZWZlcmVuY2VzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGlmIChpc01ldGFkYXRhRXJyb3IoZSkpIHtcbiAgICAgICAgICAgIC8vIFByb3BhZ2F0ZSB0aGUgbWVzc2FnZSB0ZXh0IHVwIGJ1dCBhZGQgYSBtZXNzYWdlIHRvIHRoZSBjaGFpbiB0aGF0IGV4cGxhaW5zIGhvdyB3ZSBnb3RcbiAgICAgICAgICAgIC8vIGhlcmUuXG4gICAgICAgICAgICAvLyBlLmNoYWluIGltcGxpZXMgZS5zeW1ib2xcbiAgICAgICAgICAgIGNvbnN0IHN1bW1hcnlNc2cgPSBlLmNoYWluID8gJ3JlZmVyZW5jZXMgXFwnJyArIGUuc3ltYm9sIS5uYW1lICsgJ1xcJycgOiBlcnJvclN1bW1hcnkoZSk7XG4gICAgICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYCcke25lc3RlZENvbnRleHQubmFtZX0nICR7c3VtbWFyeU1zZ31gO1xuICAgICAgICAgICAgY29uc3QgY2hhaW4gPSB7bWVzc2FnZTogc3VtbWFyeSwgcG9zaXRpb246IGUucG9zaXRpb24sIG5leHQ6IGUuY2hhaW59O1xuICAgICAgICAgICAgLy8gVE9ETyhjaHVja2opOiByZXRyaWV2ZSB0aGUgcG9zaXRpb24gaW5mb3JtYXRpb24gaW5kaXJlY3RseSBmcm9tIHRoZSBjb2xsZWN0b3JzIG5vZGVcbiAgICAgICAgICAgIC8vIG1hcCBpZiB0aGUgbWV0YWRhdGEgaXMgZnJvbSBhIC50cyBmaWxlLlxuICAgICAgICAgICAgc2VsZi5lcnJvcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICBhZHZpc2U6IGUuYWR2aXNlLFxuICAgICAgICAgICAgICAgICAgY29udGV4dDogZS5jb250ZXh0LFxuICAgICAgICAgICAgICAgICAgY2hhaW4sXG4gICAgICAgICAgICAgICAgICBzeW1ib2w6IG5lc3RlZENvbnRleHRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdCBpcyBwcm9iYWJseSBhbiBpbnRlcm5hbCBlcnJvci5cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNpbXBsaWZ5Q2FsbChcbiAgICAgICAgICBmdW5jdGlvblN5bWJvbDogU3RhdGljU3ltYm9sLCB0YXJnZXRGdW5jdGlvbjogYW55LCBhcmdzOiBhbnlbXSwgdGFyZ2V0RXhwcmVzc2lvbjogYW55KSB7XG4gICAgICAgIGlmICh0YXJnZXRGdW5jdGlvbiAmJiB0YXJnZXRGdW5jdGlvblsnX19zeW1ib2xpYyddID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpZiAoY2FsbGluZy5nZXQoZnVuY3Rpb25TeW1ib2wpKSB7XG4gICAgICAgICAgICBzZWxmLmVycm9yKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZWN1cnNpb24gaXMgbm90IHN1cHBvcnRlZCcsXG4gICAgICAgICAgICAgICAgICBzdW1tYXJ5OiBgY2FsbGVkICcke2Z1bmN0aW9uU3ltYm9sLm5hbWV9JyByZWN1cnNpdmVseWAsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogdGFyZ2V0RnVuY3Rpb25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uU3ltYm9sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0RnVuY3Rpb25bJ3ZhbHVlJ107XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgKGRlcHRoICE9IDAgfHwgdmFsdWUuX19zeW1ib2xpYyAhPSAnZXJyb3InKSkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IHRhcmdldEZ1bmN0aW9uWydwYXJhbWV0ZXJzJ107XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRzOiBhbnlbXSA9IHRhcmdldEZ1bmN0aW9uLmRlZmF1bHRzO1xuICAgICAgICAgICAgICBhcmdzID0gYXJncy5tYXAoYXJnID0+IHNpbXBsaWZ5TmVzdGVkKGNvbnRleHQsIGFyZykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChhcmcgPT4gc2hvdWxkSWdub3JlKGFyZykgPyB1bmRlZmluZWQgOiBhcmcpO1xuICAgICAgICAgICAgICBpZiAoZGVmYXVsdHMgJiYgZGVmYXVsdHMubGVuZ3RoID4gYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2goLi4uZGVmYXVsdHMuc2xpY2UoYXJncy5sZW5ndGgpLm1hcCgodmFsdWU6IGFueSkgPT4gc2ltcGxpZnkodmFsdWUpKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FsbGluZy5zZXQoZnVuY3Rpb25TeW1ib2wsIHRydWUpO1xuICAgICAgICAgICAgICBjb25zdCBmdW5jdGlvblNjb3BlID0gQmluZGluZ1Njb3BlLmJ1aWxkKCk7XG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uU2NvcGUuZGVmaW5lKHBhcmFtZXRlcnNbaV0sIGFyZ3NbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFNjb3BlID0gc2NvcGU7XG4gICAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IGZ1bmN0aW9uU2NvcGUuZG9uZSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHNpbXBsaWZ5TmVzdGVkKGZ1bmN0aW9uU3ltYm9sLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBvbGRTY29wZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBjYWxsaW5nLmRlbGV0ZShmdW5jdGlvblN5bWJvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgICAgICAgLy8gSWYgZGVwdGggaXMgMCB3ZSBhcmUgZXZhbHVhdGluZyB0aGUgdG9wIGxldmVsIGV4cHJlc3Npb24gdGhhdCBpcyBkZXNjcmliaW5nIGVsZW1lbnRcbiAgICAgICAgICAvLyBkZWNvcmF0b3IuIEluIHRoaXMgY2FzZSwgaXQgaXMgYSBkZWNvcmF0b3Igd2UgZG9uJ3QgdW5kZXJzdGFuZCwgc3VjaCBhcyBhIGN1c3RvbVxuICAgICAgICAgIC8vIG5vbi1hbmd1bGFyIGRlY29yYXRvciwgYW5kIHdlIHNob3VsZCBqdXN0IGlnbm9yZSBpdC5cbiAgICAgICAgICByZXR1cm4gSUdOT1JFO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb3NpdGlvbjogUG9zaXRpb258dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodGFyZ2V0RXhwcmVzc2lvbiAmJiB0YXJnZXRFeHByZXNzaW9uLl9fc3ltYm9saWMgPT0gJ3Jlc29sdmVkJykge1xuICAgICAgICAgIGNvbnN0IGxpbmUgPSB0YXJnZXRFeHByZXNzaW9uLmxpbmU7XG4gICAgICAgICAgY29uc3QgY2hhcmFjdGVyID0gdGFyZ2V0RXhwcmVzc2lvbi5jaGFyYWN0ZXI7XG4gICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSB0YXJnZXRFeHByZXNzaW9uLmZpbGVOYW1lO1xuICAgICAgICAgIGlmIChmaWxlTmFtZSAhPSBudWxsICYmIGxpbmUgIT0gbnVsbCAmJiBjaGFyYWN0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSB7ZmlsZU5hbWUsIGxpbmUsIGNvbHVtbjogY2hhcmFjdGVyfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5lcnJvcihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogRlVOQ1RJT05fQ0FMTF9OT1RfU1VQUE9SVEVELFxuICAgICAgICAgICAgICBjb250ZXh0OiBmdW5jdGlvblN5bWJvbCxcbiAgICAgICAgICAgICAgdmFsdWU6IHRhcmdldEZ1bmN0aW9uLFxuICAgICAgICAgICAgICBwb3NpdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzaW1wbGlmeShleHByZXNzaW9uOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUoZXhwcmVzc2lvbikpIHtcbiAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShleHByZXNzaW9uKSkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgKDxhbnk+ZXhwcmVzc2lvbikpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBhIHNwcmVhZCBleHByZXNzaW9uXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLl9fc3ltYm9saWMgPT09ICdzcHJlYWQnKSB7XG4gICAgICAgICAgICAgIC8vIFdlIGNhbGwgd2l0aCByZWZlcmVuY2VzIGFzIDAgYmVjYXVzZSB3ZSByZXF1aXJlIHRoZSBhY3R1YWwgdmFsdWUgYW5kIGNhbm5vdFxuICAgICAgICAgICAgICAvLyB0b2xlcmF0ZSBhIHJlZmVyZW5jZSBoZXJlLlxuICAgICAgICAgICAgICBjb25zdCBzcHJlYWRBcnJheSA9IHNpbXBsaWZ5RWFnZXJseShpdGVtLmV4cHJlc3Npb24pO1xuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcHJlYWRBcnJheSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNwcmVhZEl0ZW0gb2Ygc3ByZWFkQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNwcmVhZEl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzaW1wbGlmeShpdGVtKTtcbiAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmUodmFsdWUpKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChleHByZXNzaW9uIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICAgICAgLy8gU3RvcCBzaW1wbGlmaWNhdGlvbiBhdCBidWlsdGluIHN5bWJvbHMgb3IgaWYgd2UgYXJlIGluIGEgcmVmZXJlbmNlIGNvbnRleHQgYW5kXG4gICAgICAgICAgLy8gdGhlIHN5bWJvbCBkb2Vzbid0IGhhdmUgbWVtYmVycy5cbiAgICAgICAgICBpZiAoZXhwcmVzc2lvbiA9PT0gc2VsZi5pbmplY3Rpb25Ub2tlbiB8fCBzZWxmLmNvbnZlcnNpb25NYXAuaGFzKGV4cHJlc3Npb24pIHx8XG4gICAgICAgICAgICAgIChyZWZlcmVuY2VzID4gMCAmJiAhZXhwcmVzc2lvbi5tZW1iZXJzLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0aWNTeW1ib2wgPSBleHByZXNzaW9uO1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyYXRpb25WYWx1ZSA9IHJlc29sdmVSZWZlcmVuY2VWYWx1ZShzdGF0aWNTeW1ib2wpO1xuICAgICAgICAgICAgaWYgKGRlY2xhcmF0aW9uVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2ltcGxpZnlOZXN0ZWQoc3RhdGljU3ltYm9sLCBkZWNsYXJhdGlvblZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBzdGF0aWNTeW1ib2w7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChleHByZXNzaW9uKSB7XG4gICAgICAgICAgaWYgKGV4cHJlc3Npb25bJ19fc3ltYm9saWMnXSkge1xuICAgICAgICAgICAgbGV0IHN0YXRpY1N5bWJvbDogU3RhdGljU3ltYm9sO1xuICAgICAgICAgICAgc3dpdGNoIChleHByZXNzaW9uWydfX3N5bWJvbGljJ10pIHtcbiAgICAgICAgICAgICAgY2FzZSAnYmlub3AnOlxuICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gc2ltcGxpZnkoZXhwcmVzc2lvblsnbGVmdCddKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlKGxlZnQpKSByZXR1cm4gbGVmdDtcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHQgPSBzaW1wbGlmeShleHByZXNzaW9uWydyaWdodCddKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlKHJpZ2h0KSkgcmV0dXJuIHJpZ2h0O1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXhwcmVzc2lvblsnb3BlcmF0b3InXSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAnJiYnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAmJiByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgfHwgcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICd8JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgfCByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCBeIHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnJic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICYgcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID09IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAhPSByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJyE9PSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICE9PSByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA8IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID4gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IDw9IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCA+PSByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJzw8JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgPDwgcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICc+Pic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ID4+IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0ICsgcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgLSByaWdodDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGVmdCAqIHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZWZ0IC8gcmlnaHQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxlZnQgJSByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIGNhc2UgJ2lmJzpcbiAgICAgICAgICAgICAgICBsZXQgY29uZGl0aW9uID0gc2ltcGxpZnkoZXhwcmVzc2lvblsnY29uZGl0aW9uJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb25kaXRpb24gPyBzaW1wbGlmeShleHByZXNzaW9uWyd0aGVuRXhwcmVzc2lvbiddKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXBsaWZ5KGV4cHJlc3Npb25bJ2Vsc2VFeHByZXNzaW9uJ10pO1xuICAgICAgICAgICAgICBjYXNlICdwcmUnOlxuICAgICAgICAgICAgICAgIGxldCBvcGVyYW5kID0gc2ltcGxpZnkoZXhwcmVzc2lvblsnb3BlcmFuZCddKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkSWdub3JlKG9wZXJhbmQpKSByZXR1cm4gb3BlcmFuZDtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV4cHJlc3Npb25bJ29wZXJhdG9yJ10pIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BlcmFuZDtcbiAgICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLW9wZXJhbmQ7XG4gICAgICAgICAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFvcGVyYW5kO1xuICAgICAgICAgICAgICAgICAgY2FzZSAnfic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB+b3BlcmFuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhUYXJnZXQgPSBzaW1wbGlmeUVhZ2VybHkoZXhwcmVzc2lvblsnZXhwcmVzc2lvbiddKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzaW1wbGlmeUVhZ2VybHkoZXhwcmVzc2lvblsnaW5kZXgnXSk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4VGFyZ2V0ICYmIGlzUHJpbWl0aXZlKGluZGV4KSkgcmV0dXJuIGluZGV4VGFyZ2V0W2luZGV4XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICAgICAgICBjb25zdCBtZW1iZXIgPSBleHByZXNzaW9uWydtZW1iZXInXTtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0Q29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdFRhcmdldCA9IHNpbXBsaWZ5KGV4cHJlc3Npb25bJ2V4cHJlc3Npb24nXSk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdFRhcmdldCBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbWVtYmVycyA9IHNlbGVjdFRhcmdldC5tZW1iZXJzLmNvbmNhdChtZW1iZXIpO1xuICAgICAgICAgICAgICAgICAgc2VsZWN0Q29udGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi5nZXRTdGF0aWNTeW1ib2woc2VsZWN0VGFyZ2V0LmZpbGVQYXRoLCBzZWxlY3RUYXJnZXQubmFtZSwgbWVtYmVycyk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvblZhbHVlID0gcmVzb2x2ZVJlZmVyZW5jZVZhbHVlKHNlbGVjdENvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgaWYgKGRlY2xhcmF0aW9uVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2ltcGxpZnlOZXN0ZWQoc2VsZWN0Q29udGV4dCwgZGVjbGFyYXRpb25WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0Q29udGV4dDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdFRhcmdldCAmJiBpc1ByaW1pdGl2ZShtZW1iZXIpKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5TmVzdGVkKHNlbGVjdENvbnRleHQsIHNlbGVjdFRhcmdldFttZW1iZXJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgY2FzZSAncmVmZXJlbmNlJzpcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBUaGlzIG9ubHkgaGFzIHRvIGRlYWwgd2l0aCB2YXJpYWJsZSByZWZlcmVuY2VzLCBhcyBzeW1ib2wgcmVmZXJlbmNlcyBoYXZlXG4gICAgICAgICAgICAgICAgLy8gYmVlbiBjb252ZXJ0ZWQgaW50byAncmVzb2x2ZWQnXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhlIFN0YXRpY1N5bWJvbFJlc29sdmVyLlxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWU6IHN0cmluZyA9IGV4cHJlc3Npb25bJ25hbWUnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFZhbHVlID0gc2NvcGUucmVzb2x2ZShuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobG9jYWxWYWx1ZSAhPSBCaW5kaW5nU2NvcGUubWlzc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdyZXNvbHZlZCc6XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzaW1wbGlmeShleHByZXNzaW9uLnN5bWJvbCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgLy8gSWYgYW4gZXJyb3IgaXMgcmVwb3J0ZWQgZXZhbHVhdGluZyB0aGUgc3ltYm9sIHJlY29yZCB0aGUgcG9zaXRpb24gb2YgdGhlXG4gICAgICAgICAgICAgICAgICAvLyByZWZlcmVuY2UgaW4gdGhlIGVycm9yIHNvIGl0IGNhblxuICAgICAgICAgICAgICAgICAgLy8gYmUgcmVwb3J0ZWQgaW4gdGhlIGVycm9yIG1lc3NhZ2UgZ2VuZXJhdGVkIGZyb20gdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgICAgICAgIGlmIChpc01ldGFkYXRhRXJyb3IoZSkgJiYgZXhwcmVzc2lvbi5maWxlTmFtZSAhPSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbi5saW5lICE9IG51bGwgJiYgZXhwcmVzc2lvbi5jaGFyYWN0ZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBleHByZXNzaW9uLmZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmU6IGV4cHJlc3Npb24ubGluZSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW46IGV4cHJlc3Npb24uY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgICAgICAgICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgICAgICAgICAgIGNhc2UgJ25ldyc6XG4gICAgICAgICAgICAgIGNhc2UgJ2NhbGwnOlxuICAgICAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgZnVuY3Rpb24gaXMgYSBidWlsdC1pbiBjb252ZXJzaW9uXG4gICAgICAgICAgICAgICAgc3RhdGljU3ltYm9sID0gc2ltcGxpZnlJbkNvbnRleHQoXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQsIGV4cHJlc3Npb25bJ2V4cHJlc3Npb24nXSwgZGVwdGggKyAxLCAvKiByZWZlcmVuY2VzICovIDApO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0aWNTeW1ib2wgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChzdGF0aWNTeW1ib2wgPT09IHNlbGYuaW5qZWN0aW9uVG9rZW4gfHwgc3RhdGljU3ltYm9sID09PSBzZWxmLm9wYXF1ZVRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHNvbWVib2R5IGNhbGxzIG5ldyBJbmplY3Rpb25Ub2tlbiwgZG9uJ3QgY3JlYXRlIGFuIEluamVjdGlvblRva2VuLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgcmF0aGVyIHJldHVybiB0aGUgc3ltYm9sIHRvIHdoaWNoIHRoZSBJbmplY3Rpb25Ub2tlbiBpcyBhc3NpZ25lZCB0by5cblxuICAgICAgICAgICAgICAgICAgICAvLyBPcGFxdWVUb2tlbiBpcyBzdXBwb3J0ZWQgdG9vIGFzIGl0IGlzIHJlcXVpcmVkIGJ5IHRoZSBsYW5ndWFnZSBzZXJ2aWNlIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vIHN1cHBvcnQgdjQgYW5kIHByaW9yIHZlcnNpb25zIG9mIEFuZ3VsYXIuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgY29uc3QgYXJnRXhwcmVzc2lvbnM6IGFueVtdID0gZXhwcmVzc2lvblsnYXJndW1lbnRzJ10gfHwgW107XG4gICAgICAgICAgICAgICAgICBsZXQgY29udmVydGVyID0gc2VsZi5jb252ZXJzaW9uTWFwLmdldChzdGF0aWNTeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgaWYgKGNvbnZlcnRlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0gYXJnRXhwcmVzc2lvbnMubWFwKGFyZyA9PiBzaW1wbGlmeU5lc3RlZChjb250ZXh0LCBhcmcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoYXJnID0+IHNob3VsZElnbm9yZShhcmcpID8gdW5kZWZpbmVkIDogYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRlcihjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgZnVuY3Rpb24gaXMgb25lIHdlIGNhbiBzaW1wbGlmeS5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RnVuY3Rpb24gPSByZXNvbHZlUmVmZXJlbmNlVmFsdWUoc3RhdGljU3ltYm9sKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5Q2FsbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N5bWJvbCwgdGFyZ2V0RnVuY3Rpb24sIGFyZ0V4cHJlc3Npb25zLCBleHByZXNzaW9uWydleHByZXNzaW9uJ10pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gSUdOT1JFO1xuICAgICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBleHByZXNzaW9uLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgaWYgKGV4cHJlc3Npb25bJ2xpbmUnXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0OiBleHByZXNzaW9uLmNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXhwcmVzc2lvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBleHByZXNzaW9uWydmaWxlTmFtZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lOiBleHByZXNzaW9uWydsaW5lJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbjogZXhwcmVzc2lvblsnY2hhcmFjdGVyJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLmVycm9yKHttZXNzYWdlLCBjb250ZXh0OiBleHByZXNzaW9uLmNvbnRleHR9LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIElHTk9SRTtcbiAgICAgICAgICAgICAgY2FzZSAnaWdub3JlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWFwU3RyaW5nTWFwKGV4cHJlc3Npb24sICh2YWx1ZSwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKFJFRkVSRU5DRV9TRVQuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICAgIGlmIChuYW1lID09PSBVU0VfVkFMVUUgJiYgUFJPVklERSBpbiBleHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHByb3ZpZGVyIGV4cHJlc3Npb24sIGNoZWNrIGZvciBzcGVjaWFsIHRva2VucyB0aGF0IG5lZWQgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgLy8gZHVyaW5nIGFuYWx5c2lzLlxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3ZpZGUgPSBzaW1wbGlmeShleHByZXNzaW9uLnByb3ZpZGUpO1xuICAgICAgICAgICAgICAgIGlmIChwcm92aWRlID09PSBzZWxmLlJPVVRFUyB8fCBwcm92aWRlID09IHNlbGYuQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHNpbXBsaWZ5TGF6aWx5KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaW1wbGlmeSh2YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIElHTk9SRTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNpbXBsaWZ5KHZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IHNpbXBsaWZ5SW5Db250ZXh0KGNvbnRleHQsIHZhbHVlLCAwLCBsYXp5ID8gMSA6IDApO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0aGlzLmVycm9yUmVjb3JkZXIpIHtcbiAgICAgICAgdGhpcy5yZXBvcnRFcnJvcihlLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGZvcm1hdE1ldGFkYXRhRXJyb3IoZSwgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaG91bGRJZ25vcmUocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHlwZU1ldGFkYXRhKHR5cGU6IFN0YXRpY1N5bWJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICBjb25zdCByZXNvbHZlZFN5bWJvbCA9IHRoaXMuc3ltYm9sUmVzb2x2ZXIucmVzb2x2ZVN5bWJvbCh0eXBlKTtcbiAgICByZXR1cm4gcmVzb2x2ZWRTeW1ib2wgJiYgcmVzb2x2ZWRTeW1ib2wubWV0YWRhdGEgPyByZXNvbHZlZFN5bWJvbC5tZXRhZGF0YSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19fc3ltYm9saWM6ICdjbGFzcyd9O1xuICB9XG5cbiAgcHJpdmF0ZSByZXBvcnRFcnJvcihlcnJvcjogRXJyb3IsIGNvbnRleHQ6IFN0YXRpY1N5bWJvbCwgcGF0aD86IHN0cmluZykge1xuICAgIGlmICh0aGlzLmVycm9yUmVjb3JkZXIpIHtcbiAgICAgIHRoaXMuZXJyb3JSZWNvcmRlcihcbiAgICAgICAgICBmb3JtYXRNZXRhZGF0YUVycm9yKGVycm9yLCBjb250ZXh0KSwgKGNvbnRleHQgJiYgY29udGV4dC5maWxlUGF0aCkgfHwgcGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZXJyb3IoXG4gICAgICB7bWVzc2FnZSwgc3VtbWFyeSwgYWR2aXNlLCBwb3NpdGlvbiwgY29udGV4dCwgdmFsdWUsIHN5bWJvbCwgY2hhaW59OiB7XG4gICAgICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICAgICAgc3VtbWFyeT86IHN0cmluZyxcbiAgICAgICAgYWR2aXNlPzogc3RyaW5nLFxuICAgICAgICBwb3NpdGlvbj86IFBvc2l0aW9uLFxuICAgICAgICBjb250ZXh0PzogYW55LFxuICAgICAgICB2YWx1ZT86IGFueSxcbiAgICAgICAgc3ltYm9sPzogU3RhdGljU3ltYm9sLFxuICAgICAgICBjaGFpbj86IE1ldGFkYXRhTWVzc2FnZUNoYWluXG4gICAgICB9LFxuICAgICAgcmVwb3J0aW5nQ29udGV4dDogU3RhdGljU3ltYm9sKSB7XG4gICAgdGhpcy5yZXBvcnRFcnJvcihcbiAgICAgICAgbWV0YWRhdGFFcnJvcihtZXNzYWdlLCBzdW1tYXJ5LCBhZHZpc2UsIHBvc2l0aW9uLCBzeW1ib2wsIGNvbnRleHQsIGNoYWluKSxcbiAgICAgICAgcmVwb3J0aW5nQ29udGV4dCk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFBvc2l0aW9uIHtcbiAgZmlsZU5hbWU6IHN0cmluZztcbiAgbGluZTogbnVtYmVyO1xuICBjb2x1bW46IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIE1ldGFkYXRhTWVzc2FnZUNoYWluIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBzdW1tYXJ5Pzogc3RyaW5nO1xuICBwb3NpdGlvbj86IFBvc2l0aW9uO1xuICBjb250ZXh0PzogYW55O1xuICBzeW1ib2w/OiBTdGF0aWNTeW1ib2w7XG4gIG5leHQ/OiBNZXRhZGF0YU1lc3NhZ2VDaGFpbjtcbn1cblxudHlwZSBNZXRhZGF0YUVycm9yID0gRXJyb3Ime1xuICBwb3NpdGlvbj86IFBvc2l0aW9uO1xuICBhZHZpc2U/OiBzdHJpbmc7XG4gIHN1bW1hcnk/OiBzdHJpbmc7XG4gIGNvbnRleHQ/OiBhbnk7XG4gIHN5bWJvbD86IFN0YXRpY1N5bWJvbDtcbiAgY2hhaW4/OiBNZXRhZGF0YU1lc3NhZ2VDaGFpbjtcbn07XG5cbmNvbnN0IE1FVEFEQVRBX0VSUk9SID0gJ25nTWV0YWRhdGFFcnJvcic7XG5cbmZ1bmN0aW9uIG1ldGFkYXRhRXJyb3IoXG4gICAgbWVzc2FnZTogc3RyaW5nLCBzdW1tYXJ5Pzogc3RyaW5nLCBhZHZpc2U/OiBzdHJpbmcsIHBvc2l0aW9uPzogUG9zaXRpb24sIHN5bWJvbD86IFN0YXRpY1N5bWJvbCxcbiAgICBjb250ZXh0PzogYW55LCBjaGFpbj86IE1ldGFkYXRhTWVzc2FnZUNoYWluKTogTWV0YWRhdGFFcnJvciB7XG4gIGNvbnN0IGVycm9yID0gc3ludGF4RXJyb3IobWVzc2FnZSkgYXMgTWV0YWRhdGFFcnJvcjtcbiAgKGVycm9yIGFzIGFueSlbTUVUQURBVEFfRVJST1JdID0gdHJ1ZTtcbiAgaWYgKGFkdmlzZSkgZXJyb3IuYWR2aXNlID0gYWR2aXNlO1xuICBpZiAocG9zaXRpb24pIGVycm9yLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIGlmIChzdW1tYXJ5KSBlcnJvci5zdW1tYXJ5ID0gc3VtbWFyeTtcbiAgaWYgKGNvbnRleHQpIGVycm9yLmNvbnRleHQgPSBjb250ZXh0O1xuICBpZiAoY2hhaW4pIGVycm9yLmNoYWluID0gY2hhaW47XG4gIGlmIChzeW1ib2wpIGVycm9yLnN5bWJvbCA9IHN5bWJvbDtcbiAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBpc01ldGFkYXRhRXJyb3IoZXJyb3I6IEVycm9yKTogZXJyb3IgaXMgTWV0YWRhdGFFcnJvciB7XG4gIHJldHVybiAhIShlcnJvciBhcyBhbnkpW01FVEFEQVRBX0VSUk9SXTtcbn1cblxuY29uc3QgUkVGRVJFTkNFX1RPX05PTkVYUE9SVEVEX0NMQVNTID0gJ1JlZmVyZW5jZSB0byBub24tZXhwb3J0ZWQgY2xhc3MnO1xuY29uc3QgVkFSSUFCTEVfTk9UX0lOSVRJQUxJWkVEID0gJ1ZhcmlhYmxlIG5vdCBpbml0aWFsaXplZCc7XG5jb25zdCBERVNUUlVDVFVSRV9OT1RfU1VQUE9SVEVEID0gJ0Rlc3RydWN0dXJpbmcgbm90IHN1cHBvcnRlZCc7XG5jb25zdCBDT1VMRF9OT1RfUkVTT0xWRV9UWVBFID0gJ0NvdWxkIG5vdCByZXNvbHZlIHR5cGUnO1xuY29uc3QgRlVOQ1RJT05fQ0FMTF9OT1RfU1VQUE9SVEVEID0gJ0Z1bmN0aW9uIGNhbGwgbm90IHN1cHBvcnRlZCc7XG5jb25zdCBSRUZFUkVOQ0VfVE9fTE9DQUxfU1lNQk9MID0gJ1JlZmVyZW5jZSB0byBhIGxvY2FsIHN5bWJvbCc7XG5jb25zdCBMQU1CREFfTk9UX1NVUFBPUlRFRCA9ICdMYW1iZGEgbm90IHN1cHBvcnRlZCc7XG5cbmZ1bmN0aW9uIGV4cGFuZGVkTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIGNvbnRleHQ6IGFueSk6IHN0cmluZyB7XG4gIHN3aXRjaCAobWVzc2FnZSkge1xuICAgIGNhc2UgUkVGRVJFTkNFX1RPX05PTkVYUE9SVEVEX0NMQVNTOlxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5jbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGBSZWZlcmVuY2VzIHRvIGEgbm9uLWV4cG9ydGVkIGNsYXNzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGRlY29yYXRvcnMgYnV0ICR7XG4gICAgICAgICAgICBjb250ZXh0LmNsYXNzTmFtZX0gd2FzIHJlZmVyZW5jZWQuYDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVkFSSUFCTEVfTk9UX0lOSVRJQUxJWkVEOlxuICAgICAgcmV0dXJuICdPbmx5IGluaXRpYWxpemVkIHZhcmlhYmxlcyBhbmQgY29uc3RhbnRzIGNhbiBiZSByZWZlcmVuY2VkIGluIGRlY29yYXRvcnMgYmVjYXVzZSB0aGUgdmFsdWUgb2YgdGhpcyB2YXJpYWJsZSBpcyBuZWVkZWQgYnkgdGhlIHRlbXBsYXRlIGNvbXBpbGVyJztcbiAgICBjYXNlIERFU1RSVUNUVVJFX05PVF9TVVBQT1JURUQ6XG4gICAgICByZXR1cm4gJ1JlZmVyZW5jaW5nIGFuIGV4cG9ydGVkIGRlc3RydWN0dXJlZCB2YXJpYWJsZSBvciBjb25zdGFudCBpcyBub3Qgc3VwcG9ydGVkIGluIGRlY29yYXRvcnMgYW5kIHRoaXMgdmFsdWUgaXMgbmVlZGVkIGJ5IHRoZSB0ZW1wbGF0ZSBjb21waWxlcic7XG4gICAgY2FzZSBDT1VMRF9OT1RfUkVTT0xWRV9UWVBFOlxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC50eXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gYENvdWxkIG5vdCByZXNvbHZlIHR5cGUgJHtjb250ZXh0LnR5cGVOYW1lfWA7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZVTkNUSU9OX0NBTExfTk9UX1NVUFBPUlRFRDpcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQubmFtZSkge1xuICAgICAgICByZXR1cm4gYEZ1bmN0aW9uIGNhbGxzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGRlY29yYXRvcnMgYnV0ICcke2NvbnRleHQubmFtZX0nIHdhcyBjYWxsZWRgO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdGdW5jdGlvbiBjYWxscyBhcmUgbm90IHN1cHBvcnRlZCBpbiBkZWNvcmF0b3JzJztcbiAgICBjYXNlIFJFRkVSRU5DRV9UT19MT0NBTF9TWU1CT0w6XG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Lm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGBSZWZlcmVuY2UgdG8gYSBsb2NhbCAobm9uLWV4cG9ydGVkKSBzeW1ib2xzIGFyZSBub3Qgc3VwcG9ydGVkIGluIGRlY29yYXRvcnMgYnV0ICcke1xuICAgICAgICAgICAgY29udGV4dC5uYW1lfScgd2FzIHJlZmVyZW5jZWRgO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSBMQU1CREFfTk9UX1NVUFBPUlRFRDpcbiAgICAgIHJldHVybiBgRnVuY3Rpb24gZXhwcmVzc2lvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gZGVjb3JhdG9yc2A7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2VBZHZpc2UobWVzc2FnZTogc3RyaW5nLCBjb250ZXh0OiBhbnkpOiBzdHJpbmd8dW5kZWZpbmVkIHtcbiAgc3dpdGNoIChtZXNzYWdlKSB7XG4gICAgY2FzZSBSRUZFUkVOQ0VfVE9fTk9ORVhQT1JURURfQ0xBU1M6XG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LmNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gYENvbnNpZGVyIGV4cG9ydGluZyAnJHtjb250ZXh0LmNsYXNzTmFtZX0nYDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgREVTVFJVQ1RVUkVfTk9UX1NVUFBPUlRFRDpcbiAgICAgIHJldHVybiAnQ29uc2lkZXIgc2ltcGxpZnlpbmcgdG8gYXZvaWQgZGVzdHJ1Y3R1cmluZyc7XG4gICAgY2FzZSBSRUZFUkVOQ0VfVE9fTE9DQUxfU1lNQk9MOlxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5uYW1lKSB7XG4gICAgICAgIHJldHVybiBgQ29uc2lkZXIgZXhwb3J0aW5nICcke2NvbnRleHQubmFtZX0nYDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTEFNQkRBX05PVF9TVVBQT1JURUQ6XG4gICAgICByZXR1cm4gYENvbnNpZGVyIGNoYW5naW5nIHRoZSBmdW5jdGlvbiBleHByZXNzaW9uIGludG8gYW4gZXhwb3J0ZWQgZnVuY3Rpb25gO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVycm9yU3VtbWFyeShlcnJvcjogTWV0YWRhdGFFcnJvcik6IHN0cmluZyB7XG4gIGlmIChlcnJvci5zdW1tYXJ5KSB7XG4gICAgcmV0dXJuIGVycm9yLnN1bW1hcnk7XG4gIH1cbiAgc3dpdGNoIChlcnJvci5tZXNzYWdlKSB7XG4gICAgY2FzZSBSRUZFUkVOQ0VfVE9fTk9ORVhQT1JURURfQ0xBU1M6XG4gICAgICBpZiAoZXJyb3IuY29udGV4dCAmJiBlcnJvci5jb250ZXh0LmNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gYHJlZmVyZW5jZXMgbm9uLWV4cG9ydGVkIGNsYXNzICR7ZXJyb3IuY29udGV4dC5jbGFzc05hbWV9YDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgVkFSSUFCTEVfTk9UX0lOSVRJQUxJWkVEOlxuICAgICAgcmV0dXJuICdpcyBub3QgaW5pdGlhbGl6ZWQnO1xuICAgIGNhc2UgREVTVFJVQ1RVUkVfTk9UX1NVUFBPUlRFRDpcbiAgICAgIHJldHVybiAnaXMgYSBkZXN0cnVjdHVyZWQgdmFyaWFibGUnO1xuICAgIGNhc2UgQ09VTERfTk9UX1JFU09MVkVfVFlQRTpcbiAgICAgIHJldHVybiAnY291bGQgbm90IGJlIHJlc29sdmVkJztcbiAgICBjYXNlIEZVTkNUSU9OX0NBTExfTk9UX1NVUFBPUlRFRDpcbiAgICAgIGlmIChlcnJvci5jb250ZXh0ICYmIGVycm9yLmNvbnRleHQubmFtZSkge1xuICAgICAgICByZXR1cm4gYGNhbGxzICcke2Vycm9yLmNvbnRleHQubmFtZX0nYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgY2FsbHMgYSBmdW5jdGlvbmA7XG4gICAgY2FzZSBSRUZFUkVOQ0VfVE9fTE9DQUxfU1lNQk9MOlxuICAgICAgaWYgKGVycm9yLmNvbnRleHQgJiYgZXJyb3IuY29udGV4dC5uYW1lKSB7XG4gICAgICAgIHJldHVybiBgcmVmZXJlbmNlcyBsb2NhbCB2YXJpYWJsZSAke2Vycm9yLmNvbnRleHQubmFtZX1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGByZWZlcmVuY2VzIGEgbG9jYWwgdmFyaWFibGVgO1xuICB9XG4gIHJldHVybiAnY29udGFpbnMgdGhlIGVycm9yJztcbn1cblxuZnVuY3Rpb24gbWFwU3RyaW5nTWFwKGlucHV0OiB7W2tleTogc3RyaW5nXTogYW55fSwgdHJhbnNmb3JtOiAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IGFueSk6XG4gICAge1trZXk6IHN0cmluZ106IGFueX0ge1xuICBpZiAoIWlucHV0KSByZXR1cm4ge307XG4gIGNvbnN0IHJlc3VsdDoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcbiAgT2JqZWN0LmtleXMoaW5wdXQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdHJhbnNmb3JtKGlucHV0W2tleV0sIGtleSk7XG4gICAgaWYgKCFzaG91bGRJZ25vcmUodmFsdWUpKSB7XG4gICAgICBpZiAoSElEREVOX0tFWS50ZXN0KGtleSkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc3VsdCwga2V5LCB7ZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKG86IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gbyA9PT0gbnVsbCB8fCAodHlwZW9mIG8gIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG8gIT09ICdvYmplY3QnKTtcbn1cblxuaW50ZXJmYWNlIEJpbmRpbmdTY29wZUJ1aWxkZXIge1xuICBkZWZpbmUobmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogQmluZGluZ1Njb3BlQnVpbGRlcjtcbiAgZG9uZSgpOiBCaW5kaW5nU2NvcGU7XG59XG5cbmFic3RyYWN0IGNsYXNzIEJpbmRpbmdTY29wZSB7XG4gIGFic3RyYWN0IHJlc29sdmUobmFtZTogc3RyaW5nKTogYW55O1xuICBwdWJsaWMgc3RhdGljIG1pc3NpbmcgPSB7fTtcbiAgcHVibGljIHN0YXRpYyBlbXB0eTogQmluZGluZ1Njb3BlID0ge3Jlc29sdmU6IG5hbWUgPT4gQmluZGluZ1Njb3BlLm1pc3Npbmd9O1xuXG4gIHB1YmxpYyBzdGF0aWMgYnVpbGQoKTogQmluZGluZ1Njb3BlQnVpbGRlciB7XG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmluZTogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY3VycmVudC5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG4gICAgICBkb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQuc2l6ZSA+IDAgPyBuZXcgUG9wdWxhdGVkU2NvcGUoY3VycmVudCkgOiBCaW5kaW5nU2NvcGUuZW1wdHk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBQb3B1bGF0ZWRTY29wZSBleHRlbmRzIEJpbmRpbmdTY29wZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYmluZGluZ3M6IE1hcDxzdHJpbmcsIGFueT4pIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcmVzb2x2ZShuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmJpbmRpbmdzLmhhcyhuYW1lKSA/IHRoaXMuYmluZGluZ3MuZ2V0KG5hbWUpIDogQmluZGluZ1Njb3BlLm1pc3Npbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0TWV0YWRhdGFNZXNzYWdlQ2hhaW4oXG4gICAgY2hhaW46IE1ldGFkYXRhTWVzc2FnZUNoYWluLCBhZHZpc2U6IHN0cmluZ3x1bmRlZmluZWQpOiBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW4ge1xuICBjb25zdCBleHBhbmRlZCA9IGV4cGFuZGVkTWVzc2FnZShjaGFpbi5tZXNzYWdlLCBjaGFpbi5jb250ZXh0KTtcbiAgY29uc3QgbmVzdGluZyA9IGNoYWluLnN5bWJvbCA/IGAgaW4gJyR7Y2hhaW4uc3ltYm9sLm5hbWV9J2AgOiAnJztcbiAgY29uc3QgbWVzc2FnZSA9IGAke2V4cGFuZGVkfSR7bmVzdGluZ31gO1xuICBjb25zdCBwb3NpdGlvbiA9IGNoYWluLnBvc2l0aW9uO1xuICBjb25zdCBuZXh0OiBGb3JtYXR0ZWRNZXNzYWdlQ2hhaW58dW5kZWZpbmVkID0gY2hhaW4ubmV4dCA/XG4gICAgICBmb3JtYXRNZXRhZGF0YU1lc3NhZ2VDaGFpbihjaGFpbi5uZXh0LCBhZHZpc2UpIDpcbiAgICAgIGFkdmlzZSA/IHttZXNzYWdlOiBhZHZpc2V9IDogdW5kZWZpbmVkO1xuICByZXR1cm4ge21lc3NhZ2UsIHBvc2l0aW9uLCBuZXh0OiBuZXh0ID8gW25leHRdIDogdW5kZWZpbmVkfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0TWV0YWRhdGFFcnJvcihlOiBFcnJvciwgY29udGV4dDogU3RhdGljU3ltYm9sKTogRXJyb3Ige1xuICBpZiAoaXNNZXRhZGF0YUVycm9yKGUpKSB7XG4gICAgLy8gUHJvZHVjZSBhIGZvcm1hdHRlZCB2ZXJzaW9uIG9mIHRoZSBhbmQgbGVhdmluZyBlbm91Z2ggaW5mb3JtYXRpb24gaW4gdGhlIG9yaWdpbmFsIGVycm9yXG4gICAgLy8gdG8gcmVjb3ZlciB0aGUgZm9ybWF0dGluZyBpbmZvcm1hdGlvbiB0byBldmVudHVhbGx5IHByb2R1Y2UgYSBkaWFnbm9zdGljIGVycm9yIG1lc3NhZ2UuXG4gICAgY29uc3QgcG9zaXRpb24gPSBlLnBvc2l0aW9uO1xuICAgIGNvbnN0IGNoYWluOiBNZXRhZGF0YU1lc3NhZ2VDaGFpbiA9IHtcbiAgICAgIG1lc3NhZ2U6IGBFcnJvciBkdXJpbmcgdGVtcGxhdGUgY29tcGlsZSBvZiAnJHtjb250ZXh0Lm5hbWV9J2AsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBuZXh0OiB7bWVzc2FnZTogZS5tZXNzYWdlLCBuZXh0OiBlLmNoYWluLCBjb250ZXh0OiBlLmNvbnRleHQsIHN5bWJvbDogZS5zeW1ib2x9XG4gICAgfTtcbiAgICBjb25zdCBhZHZpc2UgPSBlLmFkdmlzZSB8fCBtZXNzYWdlQWR2aXNlKGUubWVzc2FnZSwgZS5jb250ZXh0KTtcbiAgICByZXR1cm4gZm9ybWF0dGVkRXJyb3IoZm9ybWF0TWV0YWRhdGFNZXNzYWdlQ2hhaW4oY2hhaW4sIGFkdmlzZSkpO1xuICB9XG4gIHJldHVybiBlO1xufVxuIl19
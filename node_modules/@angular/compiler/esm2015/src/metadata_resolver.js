/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { StaticSymbol } from './aot/static_symbol';
import { ngfactoryFilePath } from './aot/util';
import { assertArrayOfStrings, assertInterpolationSymbols } from './assertions';
import * as cpl from './compile_metadata';
import { ChangeDetectionStrategy, createAttribute, createComponent, createHost, createInject, createInjectable, createInjectionToken, createNgModule, createOptional, createSelf, createSkipSelf, Type, ViewEncapsulation } from './core';
import { findLast } from './directive_resolver';
import { Identifiers } from './identifiers';
import { getAllLifecycleHooks } from './lifecycle_reflector';
import { CssSelector } from './selector';
import { isPromise, noUndefined, resolveForwardRef, stringify, SyncAsync, syntaxError, ValueTransformer, visitValue } from './util';
export const ERROR_COMPONENT_TYPE = 'ngComponentType';
// Design notes:
// - don't lazily create metadata:
//   For some metadata, we need to do async work sometimes,
//   so the user has to kick off this loading.
//   But we want to report errors even when the async work is
//   not required to check that the user would have been able
//   to wait correctly.
export class CompileMetadataResolver {
    constructor(_config, _htmlParser, _ngModuleResolver, _directiveResolver, _pipeResolver, _summaryResolver, _schemaRegistry, _directiveNormalizer, _console, _staticSymbolCache, _reflector, _errorCollector) {
        this._config = _config;
        this._htmlParser = _htmlParser;
        this._ngModuleResolver = _ngModuleResolver;
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._summaryResolver = _summaryResolver;
        this._schemaRegistry = _schemaRegistry;
        this._directiveNormalizer = _directiveNormalizer;
        this._console = _console;
        this._staticSymbolCache = _staticSymbolCache;
        this._reflector = _reflector;
        this._errorCollector = _errorCollector;
        this._nonNormalizedDirectiveCache = new Map();
        this._directiveCache = new Map();
        this._summaryCache = new Map();
        this._pipeCache = new Map();
        this._ngModuleCache = new Map();
        this._ngModuleOfTypes = new Map();
        this._shallowModuleCache = new Map();
    }
    getReflector() {
        return this._reflector;
    }
    clearCacheFor(type) {
        const dirMeta = this._directiveCache.get(type);
        this._directiveCache.delete(type);
        this._nonNormalizedDirectiveCache.delete(type);
        this._summaryCache.delete(type);
        this._pipeCache.delete(type);
        this._ngModuleOfTypes.delete(type);
        // Clear all of the NgModule as they contain transitive information!
        this._ngModuleCache.clear();
        if (dirMeta) {
            this._directiveNormalizer.clearCacheFor(dirMeta);
        }
    }
    clearCache() {
        this._directiveCache.clear();
        this._nonNormalizedDirectiveCache.clear();
        this._summaryCache.clear();
        this._pipeCache.clear();
        this._ngModuleCache.clear();
        this._ngModuleOfTypes.clear();
        this._directiveNormalizer.clearCache();
    }
    _createProxyClass(baseType, name) {
        let delegate = null;
        const proxyClass = function () {
            if (!delegate) {
                throw new Error(`Illegal state: Class ${name} for type ${stringify(baseType)} is not compiled yet!`);
            }
            return delegate.apply(this, arguments);
        };
        proxyClass.setDelegate = (d) => {
            delegate = d;
            proxyClass.prototype = d.prototype;
        };
        // Make stringify work correctly
        proxyClass.overriddenName = name;
        return proxyClass;
    }
    getGeneratedClass(dirType, name) {
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath), name);
        }
        else {
            return this._createProxyClass(dirType, name);
        }
    }
    getComponentViewClass(dirType) {
        return this.getGeneratedClass(dirType, cpl.viewClassName(dirType, 0));
    }
    getHostComponentViewClass(dirType) {
        return this.getGeneratedClass(dirType, cpl.hostViewClassName(dirType));
    }
    getHostComponentType(dirType) {
        const name = `${cpl.identifierName({ reference: dirType })}_Host`;
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(dirType.filePath, name);
        }
        return this._createProxyClass(dirType, name);
    }
    getRendererType(dirType) {
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath), cpl.rendererTypeName(dirType));
        }
        else {
            // returning an object as proxy,
            // that we fill later during runtime compilation.
            return {};
        }
    }
    getComponentFactory(selector, dirType, inputs, outputs) {
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath), cpl.componentFactoryName(dirType));
        }
        else {
            const hostView = this.getHostComponentViewClass(dirType);
            // Note: ngContentSelectors will be filled later once the template is
            // loaded.
            const createComponentFactory = this._reflector.resolveExternalReference(Identifiers.createComponentFactory);
            return createComponentFactory(selector, dirType, hostView, inputs, outputs, []);
        }
    }
    initComponentFactory(factory, ngContentSelectors) {
        if (!(factory instanceof StaticSymbol)) {
            factory.ngContentSelectors.push(...ngContentSelectors);
        }
    }
    _loadSummary(type, kind) {
        let typeSummary = this._summaryCache.get(type);
        if (!typeSummary) {
            const summary = this._summaryResolver.resolveSummary(type);
            typeSummary = summary ? summary.type : null;
            this._summaryCache.set(type, typeSummary || null);
        }
        return typeSummary && typeSummary.summaryKind === kind ? typeSummary : null;
    }
    getHostComponentMetadata(compMeta, hostViewType) {
        const hostType = this.getHostComponentType(compMeta.type.reference);
        if (!hostViewType) {
            hostViewType = this.getHostComponentViewClass(hostType);
        }
        // Note: ! is ok here as this method should only be called with normalized directive
        // metadata, which always fills in the selector.
        const template = CssSelector.parse(compMeta.selector)[0].getMatchingElementTemplate();
        const templateUrl = '';
        const htmlAst = this._htmlParser.parse(template, templateUrl);
        return cpl.CompileDirectiveMetadata.create({
            isHost: true,
            type: { reference: hostType, diDeps: [], lifecycleHooks: [] },
            template: new cpl.CompileTemplateMetadata({
                encapsulation: ViewEncapsulation.None,
                template,
                templateUrl,
                htmlAst,
                styles: [],
                styleUrls: [],
                ngContentSelectors: [],
                animations: [],
                isInline: true,
                externalStylesheets: [],
                interpolation: null,
                preserveWhitespaces: false,
            }),
            exportAs: null,
            changeDetection: ChangeDetectionStrategy.Default,
            inputs: [],
            outputs: [],
            host: {},
            isComponent: true,
            selector: '*',
            providers: [],
            viewProviders: [],
            queries: [],
            guards: {},
            viewQueries: [],
            componentViewType: hostViewType,
            rendererType: { id: '__Host__', encapsulation: ViewEncapsulation.None, styles: [], data: {} },
            entryComponents: [],
            componentFactory: null
        });
    }
    loadDirectiveMetadata(ngModuleType, directiveType, isSync) {
        if (this._directiveCache.has(directiveType)) {
            return null;
        }
        directiveType = resolveForwardRef(directiveType);
        const { annotation, metadata } = this.getNonNormalizedDirectiveMetadata(directiveType);
        const createDirectiveMetadata = (templateMetadata) => {
            const normalizedDirMeta = new cpl.CompileDirectiveMetadata({
                isHost: false,
                type: metadata.type,
                isComponent: metadata.isComponent,
                selector: metadata.selector,
                exportAs: metadata.exportAs,
                changeDetection: metadata.changeDetection,
                inputs: metadata.inputs,
                outputs: metadata.outputs,
                hostListeners: metadata.hostListeners,
                hostProperties: metadata.hostProperties,
                hostAttributes: metadata.hostAttributes,
                providers: metadata.providers,
                viewProviders: metadata.viewProviders,
                queries: metadata.queries,
                guards: metadata.guards,
                viewQueries: metadata.viewQueries,
                entryComponents: metadata.entryComponents,
                componentViewType: metadata.componentViewType,
                rendererType: metadata.rendererType,
                componentFactory: metadata.componentFactory,
                template: templateMetadata
            });
            if (templateMetadata) {
                this.initComponentFactory(metadata.componentFactory, templateMetadata.ngContentSelectors);
            }
            this._directiveCache.set(directiveType, normalizedDirMeta);
            this._summaryCache.set(directiveType, normalizedDirMeta.toSummary());
            return null;
        };
        if (metadata.isComponent) {
            const template = metadata.template;
            const templateMeta = this._directiveNormalizer.normalizeTemplate({
                ngModuleType,
                componentType: directiveType,
                moduleUrl: this._reflector.componentModuleUrl(directiveType, annotation),
                encapsulation: template.encapsulation,
                template: template.template,
                templateUrl: template.templateUrl,
                styles: template.styles,
                styleUrls: template.styleUrls,
                animations: template.animations,
                interpolation: template.interpolation,
                preserveWhitespaces: template.preserveWhitespaces
            });
            if (isPromise(templateMeta) && isSync) {
                this._reportError(componentStillLoadingError(directiveType), directiveType);
                return null;
            }
            return SyncAsync.then(templateMeta, createDirectiveMetadata);
        }
        else {
            // directive
            createDirectiveMetadata(null);
            return null;
        }
    }
    getNonNormalizedDirectiveMetadata(directiveType) {
        directiveType = resolveForwardRef(directiveType);
        if (!directiveType) {
            return null;
        }
        let cacheEntry = this._nonNormalizedDirectiveCache.get(directiveType);
        if (cacheEntry) {
            return cacheEntry;
        }
        const dirMeta = this._directiveResolver.resolve(directiveType, false);
        if (!dirMeta) {
            return null;
        }
        let nonNormalizedTemplateMetadata = undefined;
        if (createComponent.isTypeOf(dirMeta)) {
            // component
            const compMeta = dirMeta;
            assertArrayOfStrings('styles', compMeta.styles);
            assertArrayOfStrings('styleUrls', compMeta.styleUrls);
            assertInterpolationSymbols('interpolation', compMeta.interpolation);
            const animations = compMeta.animations;
            nonNormalizedTemplateMetadata = new cpl.CompileTemplateMetadata({
                encapsulation: noUndefined(compMeta.encapsulation),
                template: noUndefined(compMeta.template),
                templateUrl: noUndefined(compMeta.templateUrl),
                htmlAst: null,
                styles: compMeta.styles || [],
                styleUrls: compMeta.styleUrls || [],
                animations: animations || [],
                interpolation: noUndefined(compMeta.interpolation),
                isInline: !!compMeta.template,
                externalStylesheets: [],
                ngContentSelectors: [],
                preserveWhitespaces: noUndefined(dirMeta.preserveWhitespaces),
            });
        }
        let changeDetectionStrategy = null;
        let viewProviders = [];
        let entryComponentMetadata = [];
        let selector = dirMeta.selector;
        if (createComponent.isTypeOf(dirMeta)) {
            // Component
            const compMeta = dirMeta;
            changeDetectionStrategy = compMeta.changeDetection;
            if (compMeta.viewProviders) {
                viewProviders = this._getProvidersMetadata(compMeta.viewProviders, entryComponentMetadata, `viewProviders for "${stringifyType(directiveType)}"`, [], directiveType);
            }
            if (compMeta.entryComponents) {
                entryComponentMetadata = flattenAndDedupeArray(compMeta.entryComponents)
                    .map((type) => this._getEntryComponentMetadata(type))
                    .concat(entryComponentMetadata);
            }
            if (!selector) {
                selector = this._schemaRegistry.getDefaultComponentElementName();
            }
        }
        else {
            // Directive
            if (!selector) {
                selector = null;
            }
        }
        let providers = [];
        if (dirMeta.providers != null) {
            providers = this._getProvidersMetadata(dirMeta.providers, entryComponentMetadata, `providers for "${stringifyType(directiveType)}"`, [], directiveType);
        }
        let queries = [];
        let viewQueries = [];
        if (dirMeta.queries != null) {
            queries = this._getQueriesMetadata(dirMeta.queries, false, directiveType);
            viewQueries = this._getQueriesMetadata(dirMeta.queries, true, directiveType);
        }
        const metadata = cpl.CompileDirectiveMetadata.create({
            isHost: false,
            selector: selector,
            exportAs: noUndefined(dirMeta.exportAs),
            isComponent: !!nonNormalizedTemplateMetadata,
            type: this._getTypeMetadata(directiveType),
            template: nonNormalizedTemplateMetadata,
            changeDetection: changeDetectionStrategy,
            inputs: dirMeta.inputs || [],
            outputs: dirMeta.outputs || [],
            host: dirMeta.host || {},
            providers: providers || [],
            viewProviders: viewProviders || [],
            queries: queries || [],
            guards: dirMeta.guards || {},
            viewQueries: viewQueries || [],
            entryComponents: entryComponentMetadata,
            componentViewType: nonNormalizedTemplateMetadata ? this.getComponentViewClass(directiveType) :
                null,
            rendererType: nonNormalizedTemplateMetadata ? this.getRendererType(directiveType) : null,
            componentFactory: null
        });
        if (nonNormalizedTemplateMetadata) {
            metadata.componentFactory =
                this.getComponentFactory(selector, directiveType, metadata.inputs, metadata.outputs);
        }
        cacheEntry = { metadata, annotation: dirMeta };
        this._nonNormalizedDirectiveCache.set(directiveType, cacheEntry);
        return cacheEntry;
    }
    /**
     * Gets the metadata for the given directive.
     * This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.
     */
    getDirectiveMetadata(directiveType) {
        const dirMeta = this._directiveCache.get(directiveType);
        if (!dirMeta) {
            this._reportError(syntaxError(`Illegal state: getDirectiveMetadata can only be called after loadNgModuleDirectiveAndPipeMetadata for a module that declares it. Directive ${stringifyType(directiveType)}.`), directiveType);
        }
        return dirMeta;
    }
    getDirectiveSummary(dirType) {
        const dirSummary = this._loadSummary(dirType, cpl.CompileSummaryKind.Directive);
        if (!dirSummary) {
            this._reportError(syntaxError(`Illegal state: Could not load the summary for directive ${stringifyType(dirType)}.`), dirType);
        }
        return dirSummary;
    }
    isDirective(type) {
        return !!this._loadSummary(type, cpl.CompileSummaryKind.Directive) ||
            this._directiveResolver.isDirective(type);
    }
    isAbstractDirective(type) {
        const summary = this._loadSummary(type, cpl.CompileSummaryKind.Directive);
        if (summary && !summary.isComponent) {
            return !summary.selector;
        }
        const meta = this._directiveResolver.resolve(type, false);
        if (meta && !createComponent.isTypeOf(meta)) {
            return !meta.selector;
        }
        return false;
    }
    isPipe(type) {
        return !!this._loadSummary(type, cpl.CompileSummaryKind.Pipe) ||
            this._pipeResolver.isPipe(type);
    }
    isNgModule(type) {
        return !!this._loadSummary(type, cpl.CompileSummaryKind.NgModule) ||
            this._ngModuleResolver.isNgModule(type);
    }
    getNgModuleSummary(moduleType, alreadyCollecting = null) {
        let moduleSummary = this._loadSummary(moduleType, cpl.CompileSummaryKind.NgModule);
        if (!moduleSummary) {
            const moduleMeta = this.getNgModuleMetadata(moduleType, false, alreadyCollecting);
            moduleSummary = moduleMeta ? moduleMeta.toSummary() : null;
            if (moduleSummary) {
                this._summaryCache.set(moduleType, moduleSummary);
            }
        }
        return moduleSummary;
    }
    /**
     * Loads the declared directives and pipes of an NgModule.
     */
    loadNgModuleDirectiveAndPipeMetadata(moduleType, isSync, throwIfNotFound = true) {
        const ngModule = this.getNgModuleMetadata(moduleType, throwIfNotFound);
        const loading = [];
        if (ngModule) {
            ngModule.declaredDirectives.forEach((id) => {
                const promise = this.loadDirectiveMetadata(moduleType, id.reference, isSync);
                if (promise) {
                    loading.push(promise);
                }
            });
            ngModule.declaredPipes.forEach((id) => this._loadPipeMetadata(id.reference));
        }
        return Promise.all(loading);
    }
    getShallowModuleMetadata(moduleType) {
        let compileMeta = this._shallowModuleCache.get(moduleType);
        if (compileMeta) {
            return compileMeta;
        }
        const ngModuleMeta = findLast(this._reflector.shallowAnnotations(moduleType), createNgModule.isTypeOf);
        compileMeta = {
            type: this._getTypeMetadata(moduleType),
            rawExports: ngModuleMeta.exports,
            rawImports: ngModuleMeta.imports,
            rawProviders: ngModuleMeta.providers,
        };
        this._shallowModuleCache.set(moduleType, compileMeta);
        return compileMeta;
    }
    getNgModuleMetadata(moduleType, throwIfNotFound = true, alreadyCollecting = null) {
        moduleType = resolveForwardRef(moduleType);
        let compileMeta = this._ngModuleCache.get(moduleType);
        if (compileMeta) {
            return compileMeta;
        }
        const meta = this._ngModuleResolver.resolve(moduleType, throwIfNotFound);
        if (!meta) {
            return null;
        }
        const declaredDirectives = [];
        const exportedNonModuleIdentifiers = [];
        const declaredPipes = [];
        const importedModules = [];
        const exportedModules = [];
        const providers = [];
        const entryComponents = [];
        const bootstrapComponents = [];
        const schemas = [];
        if (meta.imports) {
            flattenAndDedupeArray(meta.imports).forEach((importedType) => {
                let importedModuleType = undefined;
                if (isValidType(importedType)) {
                    importedModuleType = importedType;
                }
                else if (importedType && importedType.ngModule) {
                    const moduleWithProviders = importedType;
                    importedModuleType = moduleWithProviders.ngModule;
                    if (moduleWithProviders.providers) {
                        providers.push(...this._getProvidersMetadata(moduleWithProviders.providers, entryComponents, `provider for the NgModule '${stringifyType(importedModuleType)}'`, [], importedType));
                    }
                }
                if (importedModuleType) {
                    if (this._checkSelfImport(moduleType, importedModuleType))
                        return;
                    if (!alreadyCollecting)
                        alreadyCollecting = new Set();
                    if (alreadyCollecting.has(importedModuleType)) {
                        this._reportError(syntaxError(`${this._getTypeDescriptor(importedModuleType)} '${stringifyType(importedType)}' is imported recursively by the module '${stringifyType(moduleType)}'.`), moduleType);
                        return;
                    }
                    alreadyCollecting.add(importedModuleType);
                    const importedModuleSummary = this.getNgModuleSummary(importedModuleType, alreadyCollecting);
                    alreadyCollecting.delete(importedModuleType);
                    if (!importedModuleSummary) {
                        this._reportError(syntaxError(`Unexpected ${this._getTypeDescriptor(importedType)} '${stringifyType(importedType)}' imported by the module '${stringifyType(moduleType)}'. Please add a @NgModule annotation.`), moduleType);
                        return;
                    }
                    importedModules.push(importedModuleSummary);
                }
                else {
                    this._reportError(syntaxError(`Unexpected value '${stringifyType(importedType)}' imported by the module '${stringifyType(moduleType)}'`), moduleType);
                    return;
                }
            });
        }
        if (meta.exports) {
            flattenAndDedupeArray(meta.exports).forEach((exportedType) => {
                if (!isValidType(exportedType)) {
                    this._reportError(syntaxError(`Unexpected value '${stringifyType(exportedType)}' exported by the module '${stringifyType(moduleType)}'`), moduleType);
                    return;
                }
                if (!alreadyCollecting)
                    alreadyCollecting = new Set();
                if (alreadyCollecting.has(exportedType)) {
                    this._reportError(syntaxError(`${this._getTypeDescriptor(exportedType)} '${stringify(exportedType)}' is exported recursively by the module '${stringifyType(moduleType)}'`), moduleType);
                    return;
                }
                alreadyCollecting.add(exportedType);
                const exportedModuleSummary = this.getNgModuleSummary(exportedType, alreadyCollecting);
                alreadyCollecting.delete(exportedType);
                if (exportedModuleSummary) {
                    exportedModules.push(exportedModuleSummary);
                }
                else {
                    exportedNonModuleIdentifiers.push(this._getIdentifierMetadata(exportedType));
                }
            });
        }
        // Note: This will be modified later, so we rely on
        // getting a new instance every time!
        const transitiveModule = this._getTransitiveNgModuleMetadata(importedModules, exportedModules);
        if (meta.declarations) {
            flattenAndDedupeArray(meta.declarations).forEach((declaredType) => {
                if (!isValidType(declaredType)) {
                    this._reportError(syntaxError(`Unexpected value '${stringifyType(declaredType)}' declared by the module '${stringifyType(moduleType)}'`), moduleType);
                    return;
                }
                const declaredIdentifier = this._getIdentifierMetadata(declaredType);
                if (this.isDirective(declaredType)) {
                    if (this.isAbstractDirective(declaredType)) {
                        this._reportError(syntaxError(`Directive ${stringifyType(declaredType)} has no selector, please add it!`), declaredType);
                    }
                    transitiveModule.addDirective(declaredIdentifier);
                    declaredDirectives.push(declaredIdentifier);
                    this._addTypeToModule(declaredType, moduleType);
                }
                else if (this.isPipe(declaredType)) {
                    transitiveModule.addPipe(declaredIdentifier);
                    transitiveModule.pipes.push(declaredIdentifier);
                    declaredPipes.push(declaredIdentifier);
                    this._addTypeToModule(declaredType, moduleType);
                }
                else {
                    this._reportError(syntaxError(`Unexpected ${this._getTypeDescriptor(declaredType)} '${stringifyType(declaredType)}' declared by the module '${stringifyType(moduleType)}'. Please add a @Pipe/@Directive/@Component annotation.`), moduleType);
                    return;
                }
            });
        }
        const exportedDirectives = [];
        const exportedPipes = [];
        exportedNonModuleIdentifiers.forEach((exportedId) => {
            if (transitiveModule.directivesSet.has(exportedId.reference)) {
                exportedDirectives.push(exportedId);
                transitiveModule.addExportedDirective(exportedId);
            }
            else if (transitiveModule.pipesSet.has(exportedId.reference)) {
                exportedPipes.push(exportedId);
                transitiveModule.addExportedPipe(exportedId);
            }
            else {
                this._reportError(syntaxError(`Can't export ${this._getTypeDescriptor(exportedId.reference)} ${stringifyType(exportedId.reference)} from ${stringifyType(moduleType)} as it was neither declared nor imported!`), moduleType);
                return;
            }
        });
        // The providers of the module have to go last
        // so that they overwrite any other provider we already added.
        if (meta.providers) {
            providers.push(...this._getProvidersMetadata(meta.providers, entryComponents, `provider for the NgModule '${stringifyType(moduleType)}'`, [], moduleType));
        }
        if (meta.entryComponents) {
            entryComponents.push(...flattenAndDedupeArray(meta.entryComponents)
                .map(type => this._getEntryComponentMetadata(type)));
        }
        if (meta.bootstrap) {
            flattenAndDedupeArray(meta.bootstrap).forEach(type => {
                if (!isValidType(type)) {
                    this._reportError(syntaxError(`Unexpected value '${stringifyType(type)}' used in the bootstrap property of module '${stringifyType(moduleType)}'`), moduleType);
                    return;
                }
                bootstrapComponents.push(this._getIdentifierMetadata(type));
            });
        }
        entryComponents.push(...bootstrapComponents.map(type => this._getEntryComponentMetadata(type.reference)));
        if (meta.schemas) {
            schemas.push(...flattenAndDedupeArray(meta.schemas));
        }
        compileMeta = new cpl.CompileNgModuleMetadata({
            type: this._getTypeMetadata(moduleType),
            providers,
            entryComponents,
            bootstrapComponents,
            schemas,
            declaredDirectives,
            exportedDirectives,
            declaredPipes,
            exportedPipes,
            importedModules,
            exportedModules,
            transitiveModule,
            id: meta.id || null,
        });
        entryComponents.forEach((id) => transitiveModule.addEntryComponent(id));
        providers.forEach((provider) => transitiveModule.addProvider(provider, compileMeta.type));
        transitiveModule.addModule(compileMeta.type);
        this._ngModuleCache.set(moduleType, compileMeta);
        return compileMeta;
    }
    _checkSelfImport(moduleType, importedModuleType) {
        if (moduleType === importedModuleType) {
            this._reportError(syntaxError(`'${stringifyType(moduleType)}' module can't import itself`), moduleType);
            return true;
        }
        return false;
    }
    _getTypeDescriptor(type) {
        if (isValidType(type)) {
            if (this.isDirective(type)) {
                return 'directive';
            }
            if (this.isPipe(type)) {
                return 'pipe';
            }
            if (this.isNgModule(type)) {
                return 'module';
            }
        }
        if (type.provide) {
            return 'provider';
        }
        return 'value';
    }
    _addTypeToModule(type, moduleType) {
        const oldModule = this._ngModuleOfTypes.get(type);
        if (oldModule && oldModule !== moduleType) {
            this._reportError(syntaxError(`Type ${stringifyType(type)} is part of the declarations of 2 modules: ${stringifyType(oldModule)} and ${stringifyType(moduleType)}! ` +
                `Please consider moving ${stringifyType(type)} to a higher module that imports ${stringifyType(oldModule)} and ${stringifyType(moduleType)}. ` +
                `You can also create a new NgModule that exports and includes ${stringifyType(type)} then import that NgModule in ${stringifyType(oldModule)} and ${stringifyType(moduleType)}.`), moduleType);
            return;
        }
        this._ngModuleOfTypes.set(type, moduleType);
    }
    _getTransitiveNgModuleMetadata(importedModules, exportedModules) {
        // collect `providers` / `entryComponents` from all imported and all exported modules
        const result = new cpl.TransitiveCompileNgModuleMetadata();
        const modulesByToken = new Map();
        importedModules.concat(exportedModules).forEach((modSummary) => {
            modSummary.modules.forEach((mod) => result.addModule(mod));
            modSummary.entryComponents.forEach((comp) => result.addEntryComponent(comp));
            const addedTokens = new Set();
            modSummary.providers.forEach((entry) => {
                const tokenRef = cpl.tokenReference(entry.provider.token);
                let prevModules = modulesByToken.get(tokenRef);
                if (!prevModules) {
                    prevModules = new Set();
                    modulesByToken.set(tokenRef, prevModules);
                }
                const moduleRef = entry.module.reference;
                // Note: the providers of one module may still contain multiple providers
                // per token (e.g. for multi providers), and we need to preserve these.
                if (addedTokens.has(tokenRef) || !prevModules.has(moduleRef)) {
                    prevModules.add(moduleRef);
                    addedTokens.add(tokenRef);
                    result.addProvider(entry.provider, entry.module);
                }
            });
        });
        exportedModules.forEach((modSummary) => {
            modSummary.exportedDirectives.forEach((id) => result.addExportedDirective(id));
            modSummary.exportedPipes.forEach((id) => result.addExportedPipe(id));
        });
        importedModules.forEach((modSummary) => {
            modSummary.exportedDirectives.forEach((id) => result.addDirective(id));
            modSummary.exportedPipes.forEach((id) => result.addPipe(id));
        });
        return result;
    }
    _getIdentifierMetadata(type) {
        type = resolveForwardRef(type);
        return { reference: type };
    }
    isInjectable(type) {
        const annotations = this._reflector.tryAnnotations(type);
        return annotations.some(ann => createInjectable.isTypeOf(ann));
    }
    getInjectableSummary(type) {
        return {
            summaryKind: cpl.CompileSummaryKind.Injectable,
            type: this._getTypeMetadata(type, null, false)
        };
    }
    getInjectableMetadata(type, dependencies = null, throwOnUnknownDeps = true) {
        const typeSummary = this._loadSummary(type, cpl.CompileSummaryKind.Injectable);
        const typeMetadata = typeSummary ?
            typeSummary.type :
            this._getTypeMetadata(type, dependencies, throwOnUnknownDeps);
        const annotations = this._reflector.annotations(type).filter(ann => createInjectable.isTypeOf(ann));
        if (annotations.length === 0) {
            return null;
        }
        const meta = annotations[annotations.length - 1];
        return {
            symbol: type,
            type: typeMetadata,
            providedIn: meta.providedIn,
            useValue: meta.useValue,
            useClass: meta.useClass,
            useExisting: meta.useExisting,
            useFactory: meta.useFactory,
            deps: meta.deps,
        };
    }
    _getTypeMetadata(type, dependencies = null, throwOnUnknownDeps = true) {
        const identifier = this._getIdentifierMetadata(type);
        return {
            reference: identifier.reference,
            diDeps: this._getDependenciesMetadata(identifier.reference, dependencies, throwOnUnknownDeps),
            lifecycleHooks: getAllLifecycleHooks(this._reflector, identifier.reference),
        };
    }
    _getFactoryMetadata(factory, dependencies = null) {
        factory = resolveForwardRef(factory);
        return { reference: factory, diDeps: this._getDependenciesMetadata(factory, dependencies) };
    }
    /**
     * Gets the metadata for the given pipe.
     * This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.
     */
    getPipeMetadata(pipeType) {
        const pipeMeta = this._pipeCache.get(pipeType);
        if (!pipeMeta) {
            this._reportError(syntaxError(`Illegal state: getPipeMetadata can only be called after loadNgModuleDirectiveAndPipeMetadata for a module that declares it. Pipe ${stringifyType(pipeType)}.`), pipeType);
        }
        return pipeMeta || null;
    }
    getPipeSummary(pipeType) {
        const pipeSummary = this._loadSummary(pipeType, cpl.CompileSummaryKind.Pipe);
        if (!pipeSummary) {
            this._reportError(syntaxError(`Illegal state: Could not load the summary for pipe ${stringifyType(pipeType)}.`), pipeType);
        }
        return pipeSummary;
    }
    getOrLoadPipeMetadata(pipeType) {
        let pipeMeta = this._pipeCache.get(pipeType);
        if (!pipeMeta) {
            pipeMeta = this._loadPipeMetadata(pipeType);
        }
        return pipeMeta;
    }
    _loadPipeMetadata(pipeType) {
        pipeType = resolveForwardRef(pipeType);
        const pipeAnnotation = this._pipeResolver.resolve(pipeType);
        const pipeMeta = new cpl.CompilePipeMetadata({
            type: this._getTypeMetadata(pipeType),
            name: pipeAnnotation.name,
            pure: !!pipeAnnotation.pure
        });
        this._pipeCache.set(pipeType, pipeMeta);
        this._summaryCache.set(pipeType, pipeMeta.toSummary());
        return pipeMeta;
    }
    _getDependenciesMetadata(typeOrFunc, dependencies, throwOnUnknownDeps = true) {
        let hasUnknownDeps = false;
        const params = dependencies || this._reflector.parameters(typeOrFunc) || [];
        const dependenciesMetadata = params.map((param) => {
            let isAttribute = false;
            let isHost = false;
            let isSelf = false;
            let isSkipSelf = false;
            let isOptional = false;
            let token = null;
            if (Array.isArray(param)) {
                param.forEach((paramEntry) => {
                    if (createHost.isTypeOf(paramEntry)) {
                        isHost = true;
                    }
                    else if (createSelf.isTypeOf(paramEntry)) {
                        isSelf = true;
                    }
                    else if (createSkipSelf.isTypeOf(paramEntry)) {
                        isSkipSelf = true;
                    }
                    else if (createOptional.isTypeOf(paramEntry)) {
                        isOptional = true;
                    }
                    else if (createAttribute.isTypeOf(paramEntry)) {
                        isAttribute = true;
                        token = paramEntry.attributeName;
                    }
                    else if (createInject.isTypeOf(paramEntry)) {
                        token = paramEntry.token;
                    }
                    else if (createInjectionToken.isTypeOf(paramEntry) ||
                        paramEntry instanceof StaticSymbol) {
                        token = paramEntry;
                    }
                    else if (isValidType(paramEntry) && token == null) {
                        token = paramEntry;
                    }
                });
            }
            else {
                token = param;
            }
            if (token == null) {
                hasUnknownDeps = true;
                return {};
            }
            return {
                isAttribute,
                isHost,
                isSelf,
                isSkipSelf,
                isOptional,
                token: this._getTokenMetadata(token)
            };
        });
        if (hasUnknownDeps) {
            const depsTokens = dependenciesMetadata.map((dep) => dep.token ? stringifyType(dep.token) : '?').join(', ');
            const message = `Can't resolve all parameters for ${stringifyType(typeOrFunc)}: (${depsTokens}).`;
            if (throwOnUnknownDeps || this._config.strictInjectionParameters) {
                this._reportError(syntaxError(message), typeOrFunc);
            }
            else {
                this._console.warn(`Warning: ${message} This will become an error in Angular v6.x`);
            }
        }
        return dependenciesMetadata;
    }
    _getTokenMetadata(token) {
        token = resolveForwardRef(token);
        let compileToken;
        if (typeof token === 'string') {
            compileToken = { value: token };
        }
        else {
            compileToken = { identifier: { reference: token } };
        }
        return compileToken;
    }
    _getProvidersMetadata(providers, targetEntryComponents, debugInfo, compileProviders = [], type) {
        providers.forEach((provider, providerIdx) => {
            if (Array.isArray(provider)) {
                this._getProvidersMetadata(provider, targetEntryComponents, debugInfo, compileProviders);
            }
            else {
                provider = resolveForwardRef(provider);
                let providerMeta = undefined;
                if (provider && typeof provider === 'object' && provider.hasOwnProperty('provide')) {
                    this._validateProvider(provider);
                    providerMeta = new cpl.ProviderMeta(provider.provide, provider);
                }
                else if (isValidType(provider)) {
                    providerMeta = new cpl.ProviderMeta(provider, { useClass: provider });
                }
                else if (provider === void 0) {
                    this._reportError(syntaxError(`Encountered undefined provider! Usually this means you have a circular dependencies. This might be caused by using 'barrel' index.ts files.`));
                    return;
                }
                else {
                    const providersInfo = providers
                        .reduce((soFar, seenProvider, seenProviderIdx) => {
                        if (seenProviderIdx < providerIdx) {
                            soFar.push(`${stringifyType(seenProvider)}`);
                        }
                        else if (seenProviderIdx == providerIdx) {
                            soFar.push(`?${stringifyType(seenProvider)}?`);
                        }
                        else if (seenProviderIdx == providerIdx + 1) {
                            soFar.push('...');
                        }
                        return soFar;
                    }, [])
                        .join(', ');
                    this._reportError(syntaxError(`Invalid ${debugInfo ?
                        debugInfo :
                        'provider'} - only instances of Provider and Type are allowed, got: [${providersInfo}]`), type);
                    return;
                }
                if (providerMeta.token ===
                    this._reflector.resolveExternalReference(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS)) {
                    targetEntryComponents.push(...this._getEntryComponentsFromProvider(providerMeta, type));
                }
                else {
                    compileProviders.push(this.getProviderMetadata(providerMeta));
                }
            }
        });
        return compileProviders;
    }
    _validateProvider(provider) {
        if (provider.hasOwnProperty('useClass') && provider.useClass == null) {
            this._reportError(syntaxError(`Invalid provider for ${stringifyType(provider.provide)}. useClass cannot be ${provider.useClass}.
           Usually it happens when:
           1. There's a circular dependency (might be caused by using index.ts (barrel) files).
           2. Class was used before it was declared. Use forwardRef in this case.`));
        }
    }
    _getEntryComponentsFromProvider(provider, type) {
        const components = [];
        const collectedIdentifiers = [];
        if (provider.useFactory || provider.useExisting || provider.useClass) {
            this._reportError(syntaxError(`The ANALYZE_FOR_ENTRY_COMPONENTS token only supports useValue!`), type);
            return [];
        }
        if (!provider.multi) {
            this._reportError(syntaxError(`The ANALYZE_FOR_ENTRY_COMPONENTS token only supports 'multi = true'!`), type);
            return [];
        }
        extractIdentifiers(provider.useValue, collectedIdentifiers);
        collectedIdentifiers.forEach((identifier) => {
            const entry = this._getEntryComponentMetadata(identifier.reference, false);
            if (entry) {
                components.push(entry);
            }
        });
        return components;
    }
    _getEntryComponentMetadata(dirType, throwIfNotFound = true) {
        const dirMeta = this.getNonNormalizedDirectiveMetadata(dirType);
        if (dirMeta && dirMeta.metadata.isComponent) {
            return { componentType: dirType, componentFactory: dirMeta.metadata.componentFactory };
        }
        const dirSummary = this._loadSummary(dirType, cpl.CompileSummaryKind.Directive);
        if (dirSummary && dirSummary.isComponent) {
            return { componentType: dirType, componentFactory: dirSummary.componentFactory };
        }
        if (throwIfNotFound) {
            throw syntaxError(`${dirType.name} cannot be used as an entry component.`);
        }
        return null;
    }
    _getInjectableTypeMetadata(type, dependencies = null) {
        const typeSummary = this._loadSummary(type, cpl.CompileSummaryKind.Injectable);
        if (typeSummary) {
            return typeSummary.type;
        }
        return this._getTypeMetadata(type, dependencies);
    }
    getProviderMetadata(provider) {
        let compileDeps = undefined;
        let compileTypeMetadata = null;
        let compileFactoryMetadata = null;
        let token = this._getTokenMetadata(provider.token);
        if (provider.useClass) {
            compileTypeMetadata =
                this._getInjectableTypeMetadata(provider.useClass, provider.dependencies);
            compileDeps = compileTypeMetadata.diDeps;
            if (provider.token === provider.useClass) {
                // use the compileTypeMetadata as it contains information about lifecycleHooks...
                token = { identifier: compileTypeMetadata };
            }
        }
        else if (provider.useFactory) {
            compileFactoryMetadata = this._getFactoryMetadata(provider.useFactory, provider.dependencies);
            compileDeps = compileFactoryMetadata.diDeps;
        }
        return {
            token: token,
            useClass: compileTypeMetadata,
            useValue: provider.useValue,
            useFactory: compileFactoryMetadata,
            useExisting: provider.useExisting ? this._getTokenMetadata(provider.useExisting) : undefined,
            deps: compileDeps,
            multi: provider.multi
        };
    }
    _getQueriesMetadata(queries, isViewQuery, directiveType) {
        const res = [];
        Object.keys(queries).forEach((propertyName) => {
            const query = queries[propertyName];
            if (query.isViewQuery === isViewQuery) {
                res.push(this._getQueryMetadata(query, propertyName, directiveType));
            }
        });
        return res;
    }
    _queryVarBindings(selector) {
        return selector.split(/\s*,\s*/);
    }
    _getQueryMetadata(q, propertyName, typeOrFunc) {
        let selectors;
        if (typeof q.selector === 'string') {
            selectors =
                this._queryVarBindings(q.selector).map(varName => this._getTokenMetadata(varName));
        }
        else {
            if (!q.selector) {
                this._reportError(syntaxError(`Can't construct a query for the property "${propertyName}" of "${stringifyType(typeOrFunc)}" since the query selector wasn't defined.`), typeOrFunc);
                selectors = [];
            }
            else {
                selectors = [this._getTokenMetadata(q.selector)];
            }
        }
        return {
            selectors,
            first: q.first,
            descendants: q.descendants,
            propertyName,
            read: q.read ? this._getTokenMetadata(q.read) : null,
            static: q.static
        };
    }
    _reportError(error, type, otherType) {
        if (this._errorCollector) {
            this._errorCollector(error, type);
            if (otherType) {
                this._errorCollector(error, otherType);
            }
        }
        else {
            throw error;
        }
    }
}
function flattenArray(tree, out = []) {
    if (tree) {
        for (let i = 0; i < tree.length; i++) {
            const item = resolveForwardRef(tree[i]);
            if (Array.isArray(item)) {
                flattenArray(item, out);
            }
            else {
                out.push(item);
            }
        }
    }
    return out;
}
function dedupeArray(array) {
    if (array) {
        return Array.from(new Set(array));
    }
    return [];
}
function flattenAndDedupeArray(tree) {
    return dedupeArray(flattenArray(tree));
}
function isValidType(value) {
    return (value instanceof StaticSymbol) || (value instanceof Type);
}
function extractIdentifiers(value, targetIdentifiers) {
    visitValue(value, new _CompileValueConverter(), targetIdentifiers);
}
class _CompileValueConverter extends ValueTransformer {
    visitOther(value, targetIdentifiers) {
        targetIdentifiers.push({ reference: value });
    }
}
function stringifyType(type) {
    if (type instanceof StaticSymbol) {
        return `${type.name} in ${type.filePath}`;
    }
    else {
        return stringify(type);
    }
}
/**
 * Indicates that a component is still being loaded in a synchronous compile.
 */
function componentStillLoadingError(compType) {
    const error = Error(`Can't compile synchronously as ${stringify(compType)} is still being loaded!`);
    error[ERROR_COMPONENT_TYPE] = compType;
    return error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGFfcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWV0YWRhdGFfcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFlBQVksRUFBb0IsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDN0MsT0FBTyxFQUFDLG9CQUFvQixFQUFFLDBCQUEwQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzlFLE9BQU8sS0FBSyxHQUFHLE1BQU0sb0JBQW9CLENBQUM7QUFHMUMsT0FBTyxFQUFDLHVCQUF1QixFQUFhLGVBQWUsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQStFLElBQUksRUFBRSxpQkFBaUIsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUVoVSxPQUFPLEVBQW9CLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFLM0QsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUV2QyxPQUFPLEVBQVUsU0FBUyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFJM0ksTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsaUJBQWlCLENBQUM7QUFFdEQsZ0JBQWdCO0FBQ2hCLGtDQUFrQztBQUNsQywyREFBMkQ7QUFDM0QsOENB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QUU7UUFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzNDO1NBQU07UUFDTCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4QjtBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsMEJBQTBCLENBQUMsUUFBYztJQUNoRCxNQUFNLEtBQUssR0FDUCxLQUFLLENBQUMsa0NBQWtDLFNBQVMsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN6RixLQUFhLENBQUMsb0JBQW9CLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDaEQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1N0YXRpY1N5bWJvbCwgU3RhdGljU3ltYm9sQ2FjaGV9IGZyb20gJy4vYW90L3N0YXRpY19zeW1ib2wnO1xuaW1wb3J0IHtuZ2ZhY3RvcnlGaWxlUGF0aH0gZnJvbSAnLi9hb3QvdXRpbCc7XG5pbXBvcnQge2Fzc2VydEFycmF5T2ZTdHJpbmdzLCBhc3NlcnRJbnRlcnBvbGF0aW9uU3ltYm9sc30gZnJvbSAnLi9hc3NlcnRpb25zJztcbmltcG9ydCAqIGFzIGNwbCBmcm9tICcuL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7Q29tcGlsZXJDb25maWd9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgY3JlYXRlQXR0cmlidXRlLCBjcmVhdGVDb21wb25lbnQsIGNyZWF0ZUhvc3QsIGNyZWF0ZUluamVjdCwgY3JlYXRlSW5qZWN0YWJsZSwgY3JlYXRlSW5qZWN0aW9uVG9rZW4sIGNyZWF0ZU5nTW9kdWxlLCBjcmVhdGVPcHRpb25hbCwgY3JlYXRlU2VsZiwgY3JlYXRlU2tpcFNlbGYsIERpcmVjdGl2ZSwgSW5qZWN0YWJsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXIsIFF1ZXJ5LCBTY2hlbWFNZXRhZGF0YSwgVHlwZSwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJy4vY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZU5vcm1hbGl6ZXJ9IGZyb20gJy4vZGlyZWN0aXZlX25vcm1hbGl6ZXInO1xuaW1wb3J0IHtEaXJlY3RpdmVSZXNvbHZlciwgZmluZExhc3R9IGZyb20gJy4vZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7SWRlbnRpZmllcnN9IGZyb20gJy4vaWRlbnRpZmllcnMnO1xuaW1wb3J0IHtnZXRBbGxMaWZlY3ljbGVIb29rc30gZnJvbSAnLi9saWZlY3ljbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7SHRtbFBhcnNlcn0gZnJvbSAnLi9tbF9wYXJzZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtOZ01vZHVsZVJlc29sdmVyfSBmcm9tICcuL25nX21vZHVsZV9yZXNvbHZlcic7XG5pbXBvcnQge1BpcGVSZXNvbHZlcn0gZnJvbSAnLi9waXBlX3Jlc29sdmVyJztcbmltcG9ydCB7RWxlbWVudFNjaGVtYVJlZ2lzdHJ5fSBmcm9tICcuL3NjaGVtYS9lbGVtZW50X3NjaGVtYV9yZWdpc3RyeSc7XG5pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tICcuL3NlbGVjdG9yJztcbmltcG9ydCB7U3VtbWFyeVJlc29sdmVyfSBmcm9tICcuL3N1bW1hcnlfcmVzb2x2ZXInO1xuaW1wb3J0IHtDb25zb2xlLCBpc1Byb21pc2UsIG5vVW5kZWZpbmVkLCByZXNvbHZlRm9yd2FyZFJlZiwgc3RyaW5naWZ5LCBTeW5jQXN5bmMsIHN5bnRheEVycm9yLCBWYWx1ZVRyYW5zZm9ybWVyLCB2aXNpdFZhbHVlfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgdHlwZSBFcnJvckNvbGxlY3RvciA9IChlcnJvcjogYW55LCB0eXBlPzogYW55KSA9PiB2b2lkO1xuXG5leHBvcnQgY29uc3QgRVJST1JfQ09NUE9ORU5UX1RZUEUgPSAnbmdDb21wb25lbnRUeXBlJztcblxuLy8gRGVzaWduIG5vdGVzOlxuLy8gLSBkb24ndCBsYXppbHkgY3JlYXRlIG1ldGFkYXRhOlxuLy8gICBGb3Igc29tZSBtZXRhZGF0YSwgd2UgbmVlZCB0byBkbyBhc3luYyB3b3JrIHNvbWV0aW1lcyxcbi8vICAgc28gdGhlIHVzZXIgaGFzIHRvIGtpY2sgb2ZmIHRoaXMgbG9hZGluZy5cbi8vICAgQnV0IHdlIHdhbnQgdG8gcmVwb3J0IGVycm9ycyBldmVuIHdoZW4gdGhlIGFzeW5jIHdvcmsgaXNcbi8vICAgbm90IHJlcXVpcmVkIHRvIGNoZWNrIHRoYXQgdGhlIHVzZXIgd291bGQgaGF2ZSBiZWVuIGFibGVcbi8vICAgdG8gd2FpdCBjb3JyZWN0bHkuXG5leHBvcnQgY2xhc3MgQ29tcGlsZU1ldGFkYXRhUmVzb2x2ZXIge1xuICBwcml2YXRlIF9ub25Ob3JtYWxpemVkRGlyZWN0aXZlQ2FjaGUgPVxuICAgICAgbmV3IE1hcDxUeXBlLCB7YW5ub3RhdGlvbjogRGlyZWN0aXZlLCBtZXRhZGF0YTogY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YX0+KCk7XG4gIHByaXZhdGUgX2RpcmVjdGl2ZUNhY2hlID0gbmV3IE1hcDxUeXBlLCBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhPigpO1xuICBwcml2YXRlIF9zdW1tYXJ5Q2FjaGUgPSBuZXcgTWFwPFR5cGUsIGNwbC5Db21waWxlVHlwZVN1bW1hcnl8bnVsbD4oKTtcbiAgcHJpdmF0ZSBfcGlwZUNhY2hlID0gbmV3IE1hcDxUeXBlLCBjcGwuQ29tcGlsZVBpcGVNZXRhZGF0YT4oKTtcbiAgcHJpdmF0ZSBfbmdNb2R1bGVDYWNoZSA9IG5ldyBNYXA8VHlwZSwgY3BsLkNvbXBpbGVOZ01vZHVsZU1ldGFkYXRhPigpO1xuICBwcml2YXRlIF9uZ01vZHVsZU9mVHlwZXMgPSBuZXcgTWFwPFR5cGUsIFR5cGU+KCk7XG4gIHByaXZhdGUgX3NoYWxsb3dNb2R1bGVDYWNoZSA9IG5ldyBNYXA8VHlwZSwgY3BsLkNvbXBpbGVTaGFsbG93TW9kdWxlTWV0YWRhdGE+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jb25maWc6IENvbXBpbGVyQ29uZmlnLCBwcml2YXRlIF9odG1sUGFyc2VyOiBIdG1sUGFyc2VyLFxuICAgICAgcHJpdmF0ZSBfbmdNb2R1bGVSZXNvbHZlcjogTmdNb2R1bGVSZXNvbHZlciwgcHJpdmF0ZSBfZGlyZWN0aXZlUmVzb2x2ZXI6IERpcmVjdGl2ZVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBfcGlwZVJlc29sdmVyOiBQaXBlUmVzb2x2ZXIsIHByaXZhdGUgX3N1bW1hcnlSZXNvbHZlcjogU3VtbWFyeVJlc29sdmVyPGFueT4sXG4gICAgICBwcml2YXRlIF9zY2hlbWFSZWdpc3RyeTogRWxlbWVudFNjaGVtYVJlZ2lzdHJ5LFxuICAgICAgcHJpdmF0ZSBfZGlyZWN0aXZlTm9ybWFsaXplcjogRGlyZWN0aXZlTm9ybWFsaXplciwgcHJpdmF0ZSBfY29uc29sZTogQ29uc29sZSxcbiAgICAgIHByaXZhdGUgX3N0YXRpY1N5bWJvbENhY2hlOiBTdGF0aWNTeW1ib2xDYWNoZSwgcHJpdmF0ZSBfcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLFxuICAgICAgcHJpdmF0ZSBfZXJyb3JDb2xsZWN0b3I/OiBFcnJvckNvbGxlY3Rvcikge31cblxuICBnZXRSZWZsZWN0b3IoKTogQ29tcGlsZVJlZmxlY3RvciB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmxlY3RvcjtcbiAgfVxuXG4gIGNsZWFyQ2FjaGVGb3IodHlwZTogVHlwZSkge1xuICAgIGNvbnN0IGRpck1ldGEgPSB0aGlzLl9kaXJlY3RpdmVDYWNoZS5nZXQodHlwZSk7XG4gICAgdGhpcy5fZGlyZWN0aXZlQ2FjaGUuZGVsZXRlKHR5cGUpO1xuICAgIHRoaXMuX25vbk5vcm1hbGl6ZWREaXJlY3RpdmVDYWNoZS5kZWxldGUodHlwZSk7XG4gICAgdGhpcy5fc3VtbWFyeUNhY2hlLmRlbGV0ZSh0eXBlKTtcbiAgICB0aGlzLl9waXBlQ2FjaGUuZGVsZXRlKHR5cGUpO1xuICAgIHRoaXMuX25nTW9kdWxlT2ZUeXBlcy5kZWxldGUodHlwZSk7XG4gICAgLy8gQ2xlYXIgYWxsIG9mIHRoZSBOZ01vZHVsZSBhcyB0aGV5IGNvbnRhaW4gdHJhbnNpdGl2ZSBpbmZvcm1hdGlvbiFcbiAgICB0aGlzLl9uZ01vZHVsZUNhY2hlLmNsZWFyKCk7XG4gICAgaWYgKGRpck1ldGEpIHtcbiAgICAgIHRoaXMuX2RpcmVjdGl2ZU5vcm1hbGl6ZXIuY2xlYXJDYWNoZUZvcihkaXJNZXRhKTtcbiAgICB9XG4gIH1cblxuICBjbGVhckNhY2hlKCk6IHZvaWQge1xuICAgIHRoaXMuX2RpcmVjdGl2ZUNhY2hlLmNsZWFyKCk7XG4gICAgdGhpcy5fbm9uTm9ybWFsaXplZERpcmVjdGl2ZUNhY2hlLmNsZWFyKCk7XG4gICAgdGhpcy5fc3VtbWFyeUNhY2hlLmNsZWFyKCk7XG4gICAgdGhpcy5fcGlwZUNhY2hlLmNsZWFyKCk7XG4gICAgdGhpcy5fbmdNb2R1bGVDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMuX25nTW9kdWxlT2ZUeXBlcy5jbGVhcigpO1xuICAgIHRoaXMuX2RpcmVjdGl2ZU5vcm1hbGl6ZXIuY2xlYXJDYWNoZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlUHJveHlDbGFzcyhiYXNlVHlwZTogYW55LCBuYW1lOiBzdHJpbmcpOiBjcGwuUHJveHlDbGFzcyB7XG4gICAgbGV0IGRlbGVnYXRlOiBhbnkgPSBudWxsO1xuICAgIGNvbnN0IHByb3h5Q2xhc3M6IGNwbC5Qcm94eUNsYXNzID0gPGFueT5mdW5jdGlvbih0aGlzOiB1bmtub3duKSB7XG4gICAgICBpZiAoIWRlbGVnYXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbGxlZ2FsIHN0YXRlOiBDbGFzcyAke25hbWV9IGZvciB0eXBlICR7c3RyaW5naWZ5KGJhc2VUeXBlKX0gaXMgbm90IGNvbXBpbGVkIHlldCFgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcHJveHlDbGFzcy5zZXREZWxlZ2F0ZSA9IChkKSA9PiB7XG4gICAgICBkZWxlZ2F0ZSA9IGQ7XG4gICAgICAoPGFueT5wcm94eUNsYXNzKS5wcm90b3R5cGUgPSBkLnByb3RvdHlwZTtcbiAgICB9O1xuICAgIC8vIE1ha2Ugc3RyaW5naWZ5IHdvcmsgY29ycmVjdGx5XG4gICAgKDxhbnk+cHJveHlDbGFzcykub3ZlcnJpZGRlbk5hbWUgPSBuYW1lO1xuICAgIHJldHVybiBwcm94eUNsYXNzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHZW5lcmF0ZWRDbGFzcyhkaXJUeXBlOiBhbnksIG5hbWU6IHN0cmluZyk6IFN0YXRpY1N5bWJvbHxjcGwuUHJveHlDbGFzcyB7XG4gICAgaWYgKGRpclR5cGUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0aWNTeW1ib2xDYWNoZS5nZXQobmdmYWN0b3J5RmlsZVBhdGgoZGlyVHlwZS5maWxlUGF0aCksIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fY3JlYXRlUHJveHlDbGFzcyhkaXJUeXBlLCBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudFZpZXdDbGFzcyhkaXJUeXBlOiBhbnkpOiBTdGF0aWNTeW1ib2x8Y3BsLlByb3h5Q2xhc3Mge1xuICAgIHJldHVybiB0aGlzLmdldEdlbmVyYXRlZENsYXNzKGRpclR5cGUsIGNwbC52aWV3Q2xhc3NOYW1lKGRpclR5cGUsIDApKTtcbiAgfVxuXG4gIGdldEhvc3RDb21wb25lbnRWaWV3Q2xhc3MoZGlyVHlwZTogYW55KTogU3RhdGljU3ltYm9sfGNwbC5Qcm94eUNsYXNzIHtcbiAgICByZXR1cm4gdGhpcy5nZXRHZW5lcmF0ZWRDbGFzcyhkaXJUeXBlLCBjcGwuaG9zdFZpZXdDbGFzc05hbWUoZGlyVHlwZSkpO1xuICB9XG5cbiAgZ2V0SG9zdENvbXBvbmVudFR5cGUoZGlyVHlwZTogYW55KTogU3RhdGljU3ltYm9sfGNwbC5Qcm94eUNsYXNzIHtcbiAgICBjb25zdCBuYW1lID0gYCR7Y3BsLmlkZW50aWZpZXJOYW1lKHtyZWZlcmVuY2U6IGRpclR5cGV9KX1fSG9zdGA7XG4gICAgaWYgKGRpclR5cGUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0aWNTeW1ib2xDYWNoZS5nZXQoZGlyVHlwZS5maWxlUGF0aCwgbmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVByb3h5Q2xhc3MoZGlyVHlwZSwgbmFtZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlbmRlcmVyVHlwZShkaXJUeXBlOiBhbnkpOiBTdGF0aWNTeW1ib2x8b2JqZWN0IHtcbiAgICBpZiAoZGlyVHlwZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRpY1N5bWJvbENhY2hlLmdldChcbiAgICAgICAgICBuZ2ZhY3RvcnlGaWxlUGF0aChkaXJUeXBlLmZpbGVQYXRoKSwgY3BsLnJlbmRlcmVyVHlwZU5hbWUoZGlyVHlwZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm5pbmcgYW4gb2JqZWN0IGFzIHByb3h5LFxuICAgICAgLy8gdGhhdCB3ZSBmaWxsIGxhdGVyIGR1cmluZyBydW50aW1lIGNvbXBpbGF0aW9uLlxuICAgICAgcmV0dXJuIDxhbnk+e307XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRGYWN0b3J5KFxuICAgICAgc2VsZWN0b3I6IHN0cmluZywgZGlyVHlwZTogYW55LCBpbnB1dHM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9fG51bGwsXG4gICAgICBvdXRwdXRzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSk6IFN0YXRpY1N5bWJvbHxvYmplY3Qge1xuICAgIGlmIChkaXJUeXBlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGljU3ltYm9sQ2FjaGUuZ2V0KFxuICAgICAgICAgIG5nZmFjdG9yeUZpbGVQYXRoKGRpclR5cGUuZmlsZVBhdGgpLCBjcGwuY29tcG9uZW50RmFjdG9yeU5hbWUoZGlyVHlwZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBob3N0VmlldyA9IHRoaXMuZ2V0SG9zdENvbXBvbmVudFZpZXdDbGFzcyhkaXJUeXBlKTtcbiAgICAgIC8vIE5vdGU6IG5nQ29udGVudFNlbGVjdG9ycyB3aWxsIGJlIGZpbGxlZCBsYXRlciBvbmNlIHRoZSB0ZW1wbGF0ZSBpc1xuICAgICAgLy8gbG9hZGVkLlxuICAgICAgY29uc3QgY3JlYXRlQ29tcG9uZW50RmFjdG9yeSA9XG4gICAgICAgICAgdGhpcy5fcmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5jcmVhdGVDb21wb25lbnRGYWN0b3J5KTtcbiAgICAgIHJldHVybiBjcmVhdGVDb21wb25lbnRGYWN0b3J5KHNlbGVjdG9yLCBkaXJUeXBlLCA8YW55Pmhvc3RWaWV3LCBpbnB1dHMsIG91dHB1dHMsIFtdKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRDb21wb25lbnRGYWN0b3J5KGZhY3Rvcnk6IFN0YXRpY1N5bWJvbHxvYmplY3QsIG5nQ29udGVudFNlbGVjdG9yczogc3RyaW5nW10pIHtcbiAgICBpZiAoIShmYWN0b3J5IGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSkge1xuICAgICAgKGZhY3RvcnkgYXMgYW55KS5uZ0NvbnRlbnRTZWxlY3RvcnMucHVzaCguLi5uZ0NvbnRlbnRTZWxlY3RvcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRTdW1tYXJ5KHR5cGU6IGFueSwga2luZDogY3BsLkNvbXBpbGVTdW1tYXJ5S2luZCk6IGNwbC5Db21waWxlVHlwZVN1bW1hcnl8bnVsbCB7XG4gICAgbGV0IHR5cGVTdW1tYXJ5ID0gdGhpcy5fc3VtbWFyeUNhY2hlLmdldCh0eXBlKTtcbiAgICBpZiAoIXR5cGVTdW1tYXJ5KSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5fc3VtbWFyeVJlc29sdmVyLnJlc29sdmVTdW1tYXJ5KHR5cGUpO1xuICAgICAgdHlwZVN1bW1hcnkgPSBzdW1tYXJ5ID8gc3VtbWFyeS50eXBlIDogbnVsbDtcbiAgICAgIHRoaXMuX3N1bW1hcnlDYWNoZS5zZXQodHlwZSwgdHlwZVN1bW1hcnkgfHwgbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiB0eXBlU3VtbWFyeSAmJiB0eXBlU3VtbWFyeS5zdW1tYXJ5S2luZCA9PT0ga2luZCA/IHR5cGVTdW1tYXJ5IDogbnVsbDtcbiAgfVxuXG4gIGdldEhvc3RDb21wb25lbnRNZXRhZGF0YShcbiAgICAgIGNvbXBNZXRhOiBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLFxuICAgICAgaG9zdFZpZXdUeXBlPzogU3RhdGljU3ltYm9sfGNwbC5Qcm94eUNsYXNzKTogY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSB7XG4gICAgY29uc3QgaG9zdFR5cGUgPSB0aGlzLmdldEhvc3RDb21wb25lbnRUeXBlKGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlKTtcbiAgICBpZiAoIWhvc3RWaWV3VHlwZSkge1xuICAgICAgaG9zdFZpZXdUeXBlID0gdGhpcy5nZXRIb3N0Q29tcG9uZW50Vmlld0NsYXNzKGhvc3RUeXBlKTtcbiAgICB9XG4gICAgLy8gTm90ZTogISBpcyBvayBoZXJlIGFzIHRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aXRoIG5vcm1hbGl6ZWQgZGlyZWN0aXZlXG4gICAgLy8gbWV0YWRhdGEsIHdoaWNoIGFsd2F5cyBmaWxscyBpbiB0aGUgc2VsZWN0b3IuXG4gICAgY29uc3QgdGVtcGxhdGUgPSBDc3NTZWxlY3Rvci5wYXJzZShjb21wTWV0YS5zZWxlY3RvciEpWzBdLmdldE1hdGNoaW5nRWxlbWVudFRlbXBsYXRlKCk7XG4gICAgY29uc3QgdGVtcGxhdGVVcmwgPSAnJztcbiAgICBjb25zdCBodG1sQXN0ID0gdGhpcy5faHRtbFBhcnNlci5wYXJzZSh0ZW1wbGF0ZSwgdGVtcGxhdGVVcmwpO1xuICAgIHJldHVybiBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLmNyZWF0ZSh7XG4gICAgICBpc0hvc3Q6IHRydWUsXG4gICAgICB0eXBlOiB7cmVmZXJlbmNlOiBob3N0VHlwZSwgZGlEZXBzOiBbXSwgbGlmZWN5Y2xlSG9va3M6IFtdfSxcbiAgICAgIHRlbXBsYXRlOiBuZXcgY3BsLkNvbXBpbGVUZW1wbGF0ZU1ldGFkYXRhKHtcbiAgICAgICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlVXJsLFxuICAgICAgICBodG1sQXN0LFxuICAgICAgICBzdHlsZXM6IFtdLFxuICAgICAgICBzdHlsZVVybHM6IFtdLFxuICAgICAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IFtdLFxuICAgICAgICBhbmltYXRpb25zOiBbXSxcbiAgICAgICAgaXNJbmxpbmU6IHRydWUsXG4gICAgICAgIGV4dGVybmFsU3R5bGVzaGVldHM6IFtdLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiBudWxsLFxuICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgICAgZXhwb3J0QXM6IG51bGwsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gICAgICBpbnB1dHM6IFtdLFxuICAgICAgb3V0cHV0czogW10sXG4gICAgICBob3N0OiB7fSxcbiAgICAgIGlzQ29tcG9uZW50OiB0cnVlLFxuICAgICAgc2VsZWN0b3I6ICcqJyxcbiAgICAgIHByb3ZpZGVyczogW10sXG4gICAgICB2aWV3UHJvdmlkZXJzOiBbXSxcbiAgICAgIHF1ZXJpZXM6IFtdLFxuICAgICAgZ3VhcmRzOiB7fSxcbiAgICAgIHZpZXdRdWVyaWVzOiBbXSxcbiAgICAgIGNvbXBvbmVudFZpZXdUeXBlOiBob3N0Vmlld1R5cGUsXG4gICAgICByZW5kZXJlclR5cGU6IHtpZDogJ19fSG9zdF9fJywgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSwgc3R5bGVzOiBbXSwgZGF0YToge319IGFzXG4gICAgICAgICAgb2JqZWN0LFxuICAgICAgZW50cnlDb21wb25lbnRzOiBbXSxcbiAgICAgIGNvbXBvbmVudEZhY3Rvcnk6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWREaXJlY3RpdmVNZXRhZGF0YShuZ01vZHVsZVR5cGU6IGFueSwgZGlyZWN0aXZlVHlwZTogYW55LCBpc1N5bmM6IGJvb2xlYW4pOiBTeW5jQXN5bmM8bnVsbD4ge1xuICAgIGlmICh0aGlzLl9kaXJlY3RpdmVDYWNoZS5oYXMoZGlyZWN0aXZlVHlwZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBkaXJlY3RpdmVUeXBlID0gcmVzb2x2ZUZvcndhcmRSZWYoZGlyZWN0aXZlVHlwZSk7XG4gICAgY29uc3Qge2Fubm90YXRpb24sIG1ldGFkYXRhfSA9IHRoaXMuZ2V0Tm9uTm9ybWFsaXplZERpcmVjdGl2ZU1ldGFkYXRhKGRpcmVjdGl2ZVR5cGUpITtcblxuICAgIGNvbnN0IGNyZWF0ZURpcmVjdGl2ZU1ldGFkYXRhID0gKHRlbXBsYXRlTWV0YWRhdGE6IGNwbC5Db21waWxlVGVtcGxhdGVNZXRhZGF0YXxudWxsKSA9PiB7XG4gICAgICBjb25zdCBub3JtYWxpemVkRGlyTWV0YSA9IG5ldyBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhKHtcbiAgICAgICAgaXNIb3N0OiBmYWxzZSxcbiAgICAgICAgdHlwZTogbWV0YWRhdGEudHlwZSxcbiAgICAgICAgaXNDb21wb25lbnQ6IG1ldGFkYXRhLmlzQ29tcG9uZW50LFxuICAgICAgICBzZWxlY3RvcjogbWV0YWRhdGEuc2VsZWN0b3IsXG4gICAgICAgIGV4cG9ydEFzOiBtZXRhZGF0YS5leHBvcnRBcyxcbiAgICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBtZXRhZGF0YS5jaGFuZ2VEZXRlY3Rpb24sXG4gICAgICAgIGlucHV0czogbWV0YWRhdGEuaW5wdXRzLFxuICAgICAgICBvdXRwdXRzOiBtZXRhZGF0YS5vdXRwdXRzLFxuICAgICAgICBob3N0TGlzdGVuZXJzOiBtZXRhZGF0YS5ob3N0TGlzdGVuZXJzLFxuICAgICAgICBob3N0UHJvcGVydGllczogbWV0YWRhdGEuaG9zdFByb3BlcnRpZXMsXG4gICAgICAgIGhvc3RBdHRyaWJ1dGVzOiBtZXRhZGF0YS5ob3N0QXR0cmlidXRlcyxcbiAgICAgICAgcHJvdmlkZXJzOiBtZXRhZGF0YS5wcm92aWRlcnMsXG4gICAgICAgIHZpZXdQcm92aWRlcnM6IG1ldGFkYXRhLnZpZXdQcm92aWRlcnMsXG4gICAgICAgIHF1ZXJpZXM6IG1ldGFkYXRhLnF1ZXJpZXMsXG4gICAgICAgIGd1YXJkczogbWV0YWRhdGEuZ3VhcmRzLFxuICAgICAgICB2aWV3UXVlcmllczogbWV0YWRhdGEudmlld1F1ZXJpZXMsXG4gICAgICAgIGVudHJ5Q29tcG9uZW50czogbWV0YWRhdGEuZW50cnlDb21wb25lbnRzLFxuICAgICAgICBjb21wb25lbnRWaWV3VHlwZTogbWV0YWRhdGEuY29tcG9uZW50Vmlld1R5cGUsXG4gICAgICAgIHJlbmRlcmVyVHlwZTogbWV0YWRhdGEucmVuZGVyZXJUeXBlLFxuICAgICAgICBjb21wb25lbnRGYWN0b3J5OiBtZXRhZGF0YS5jb21wb25lbnRGYWN0b3J5LFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVNZXRhZGF0YVxuICAgICAgfSk7XG4gICAgICBpZiAodGVtcGxhdGVNZXRhZGF0YSkge1xuICAgICAgICB0aGlzLmluaXRDb21wb25lbnRGYWN0b3J5KG1ldGFkYXRhLmNvbXBvbmVudEZhY3RvcnkhLCB0ZW1wbGF0ZU1ldGFkYXRhLm5nQ29udGVudFNlbGVjdG9ycyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9kaXJlY3RpdmVDYWNoZS5zZXQoZGlyZWN0aXZlVHlwZSwgbm9ybWFsaXplZERpck1ldGEpO1xuICAgICAgdGhpcy5fc3VtbWFyeUNhY2hlLnNldChkaXJlY3RpdmVUeXBlLCBub3JtYWxpemVkRGlyTWV0YS50b1N1bW1hcnkoKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgaWYgKG1ldGFkYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IG1ldGFkYXRhLnRlbXBsYXRlICE7XG4gICAgICBjb25zdCB0ZW1wbGF0ZU1ldGEgPSB0aGlzLl9kaXJlY3RpdmVOb3JtYWxpemVyLm5vcm1hbGl6ZVRlbXBsYXRlKHtcbiAgICAgICAgbmdNb2R1bGVUeXBlLFxuICAgICAgICBjb21wb25lbnRUeXBlOiBkaXJlY3RpdmVUeXBlLFxuICAgICAgICBtb2R1bGVVcmw6IHRoaXMuX3JlZmxlY3Rvci5jb21wb25lbnRNb2R1bGVVcmwoZGlyZWN0aXZlVHlwZSwgYW5ub3RhdGlvbiksXG4gICAgICAgIGVuY2Fwc3VsYXRpb246IHRlbXBsYXRlLmVuY2Fwc3VsYXRpb24sXG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZS50ZW1wbGF0ZSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IHRlbXBsYXRlLnRlbXBsYXRlVXJsLFxuICAgICAgICBzdHlsZXM6IHRlbXBsYXRlLnN0eWxlcyxcbiAgICAgICAgc3R5bGVVcmxzOiB0ZW1wbGF0ZS5zdHlsZVVybHMsXG4gICAgICAgIGFuaW1hdGlvbnM6IHRlbXBsYXRlLmFuaW1hdGlvbnMsXG4gICAgICAgIGludGVycG9sYXRpb246IHRlbXBsYXRlLmludGVycG9sYXRpb24sXG4gICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IHRlbXBsYXRlLnByZXNlcnZlV2hpdGVzcGFjZXNcbiAgICAgIH0pO1xuICAgICAgaWYgKGlzUHJvbWlzZSh0ZW1wbGF0ZU1ldGEpICYmIGlzU3luYykge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihjb21wb25lbnRTdGlsbExvYWRpbmdFcnJvcihkaXJlY3RpdmVUeXBlKSwgZGlyZWN0aXZlVHlwZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFN5bmNBc3luYy50aGVuKHRlbXBsYXRlTWV0YSwgY3JlYXRlRGlyZWN0aXZlTWV0YWRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkaXJlY3RpdmVcbiAgICAgIGNyZWF0ZURpcmVjdGl2ZU1ldGFkYXRhKG51bGwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZ2V0Tm9uTm9ybWFsaXplZERpcmVjdGl2ZU1ldGFkYXRhKGRpcmVjdGl2ZVR5cGU6IGFueSk6XG4gICAgICB7YW5ub3RhdGlvbjogRGlyZWN0aXZlLCBtZXRhZGF0YTogY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YX18bnVsbCB7XG4gICAgZGlyZWN0aXZlVHlwZSA9IHJlc29sdmVGb3J3YXJkUmVmKGRpcmVjdGl2ZVR5cGUpO1xuICAgIGlmICghZGlyZWN0aXZlVHlwZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGxldCBjYWNoZUVudHJ5ID0gdGhpcy5fbm9uTm9ybWFsaXplZERpcmVjdGl2ZUNhY2hlLmdldChkaXJlY3RpdmVUeXBlKTtcbiAgICBpZiAoY2FjaGVFbnRyeSkge1xuICAgICAgcmV0dXJuIGNhY2hlRW50cnk7XG4gICAgfVxuICAgIGNvbnN0IGRpck1ldGEgPSB0aGlzLl9kaXJlY3RpdmVSZXNvbHZlci5yZXNvbHZlKGRpcmVjdGl2ZVR5cGUsIGZhbHNlKTtcbiAgICBpZiAoIWRpck1ldGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgbm9uTm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGE6IGNwbC5Db21waWxlVGVtcGxhdGVNZXRhZGF0YSA9IHVuZGVmaW5lZCE7XG5cbiAgICBpZiAoY3JlYXRlQ29tcG9uZW50LmlzVHlwZU9mKGRpck1ldGEpKSB7XG4gICAgICAvLyBjb21wb25lbnRcbiAgICAgIGNvbnN0IGNvbXBNZXRhID0gZGlyTWV0YSBhcyBDb21wb25lbnQ7XG4gICAgICBhc3NlcnRBcnJheU9mU3RyaW5ncygnc3R5bGVzJywgY29tcE1ldGEuc3R5bGVzKTtcbiAgICAgIGFzc2VydEFycmF5T2ZTdHJpbmdzKCdzdHlsZVVybHMnLCBjb21wTWV0YS5zdHlsZVVybHMpO1xuICAgICAgYXNzZXJ0SW50ZXJwb2xhdGlvblN5bWJvbHMoJ2ludGVycG9sYXRpb24nLCBjb21wTWV0YS5pbnRlcnBvbGF0aW9uKTtcblxuICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IGNvbXBNZXRhLmFuaW1hdGlvbnM7XG5cbiAgICAgIG5vbk5vcm1hbGl6ZWRUZW1wbGF0ZU1ldGFkYXRhID0gbmV3IGNwbC5Db21waWxlVGVtcGxhdGVNZXRhZGF0YSh7XG4gICAgICAgIGVuY2Fwc3VsYXRpb246IG5vVW5kZWZpbmVkKGNvbXBNZXRhLmVuY2Fwc3VsYXRpb24pLFxuICAgICAgICB0ZW1wbGF0ZTogbm9VbmRlZmluZWQoY29tcE1ldGEudGVtcGxhdGUpLFxuICAgICAgICB0ZW1wbGF0ZVVybDogbm9VbmRlZmluZWQoY29tcE1ldGEudGVtcGxhdGVVcmwpLFxuICAgICAgICBodG1sQXN0OiBudWxsLFxuICAgICAgICBzdHlsZXM6IGNvbXBNZXRhLnN0eWxlcyB8fCBbXSxcbiAgICAgICAgc3R5bGVVcmxzOiBjb21wTWV0YS5zdHlsZVVybHMgfHwgW10sXG4gICAgICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMgfHwgW10sXG4gICAgICAgIGludGVycG9sYXRpb246IG5vVW5kZWZpbmVkKGNvbXBNZXRhLmludGVycG9sYXRpb24pLFxuICAgICAgICBpc0lubGluZTogISFjb21wTWV0YS50ZW1wbGF0ZSxcbiAgICAgICAgZXh0ZXJuYWxTdHlsZXNoZWV0czogW10sXG4gICAgICAgIG5nQ29udGVudFNlbGVjdG9yczogW10sXG4gICAgICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IG5vVW5kZWZpbmVkKGRpck1ldGEucHJlc2VydmVXaGl0ZXNwYWNlcyksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgY2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3k6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gbnVsbCE7XG4gICAgbGV0IHZpZXdQcm92aWRlcnM6IGNwbC5Db21waWxlUHJvdmlkZXJNZXRhZGF0YVtdID0gW107XG4gICAgbGV0IGVudHJ5Q29tcG9uZW50TWV0YWRhdGE6IGNwbC5Db21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdID0gW107XG4gICAgbGV0IHNlbGVjdG9yID0gZGlyTWV0YS5zZWxlY3RvcjtcblxuICAgIGlmIChjcmVhdGVDb21wb25lbnQuaXNUeXBlT2YoZGlyTWV0YSkpIHtcbiAgICAgIC8vIENvbXBvbmVudFxuICAgICAgY29uc3QgY29tcE1ldGEgPSBkaXJNZXRhIGFzIENvbXBvbmVudDtcbiAgICAgIGNoYW5nZURldGVjdGlvblN0cmF0ZWd5ID0gY29tcE1ldGEuY2hhbmdlRGV0ZWN0aW9uITtcbiAgICAgIGlmIChjb21wTWV0YS52aWV3UHJvdmlkZXJzKSB7XG4gICAgICAgIHZpZXdQcm92aWRlcnMgPSB0aGlzLl9nZXRQcm92aWRlcnNNZXRhZGF0YShcbiAgICAgICAgICAgIGNvbXBNZXRhLnZpZXdQcm92aWRlcnMsIGVudHJ5Q29tcG9uZW50TWV0YWRhdGEsXG4gICAgICAgICAgICBgdmlld1Byb3ZpZGVycyBmb3IgXCIke3N0cmluZ2lmeVR5cGUoZGlyZWN0aXZlVHlwZSl9XCJgLCBbXSwgZGlyZWN0aXZlVHlwZSk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcE1ldGEuZW50cnlDb21wb25lbnRzKSB7XG4gICAgICAgIGVudHJ5Q29tcG9uZW50TWV0YWRhdGEgPSBmbGF0dGVuQW5kRGVkdXBlQXJyYXkoY29tcE1ldGEuZW50cnlDb21wb25lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHR5cGUpID0+IHRoaXMuX2dldEVudHJ5Q29tcG9uZW50TWV0YWRhdGEodHlwZSkhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoZW50cnlDb21wb25lbnRNZXRhZGF0YSk7XG4gICAgICB9XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHNlbGVjdG9yID0gdGhpcy5fc2NoZW1hUmVnaXN0cnkuZ2V0RGVmYXVsdENvbXBvbmVudEVsZW1lbnROYW1lKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERpcmVjdGl2ZVxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IG51bGwhO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcm92aWRlcnM6IGNwbC5Db21waWxlUHJvdmlkZXJNZXRhZGF0YVtdID0gW107XG4gICAgaWYgKGRpck1ldGEucHJvdmlkZXJzICE9IG51bGwpIHtcbiAgICAgIHByb3ZpZGVycyA9IHRoaXMuX2dldFByb3ZpZGVyc01ldGFkYXRhKFxuICAgICAgICAgIGRpck1ldGEucHJvdmlkZXJzLCBlbnRyeUNvbXBvbmVudE1ldGFkYXRhLFxuICAgICAgICAgIGBwcm92aWRlcnMgZm9yIFwiJHtzdHJpbmdpZnlUeXBlKGRpcmVjdGl2ZVR5cGUpfVwiYCwgW10sIGRpcmVjdGl2ZVR5cGUpO1xuICAgIH1cbiAgICBsZXQgcXVlcmllczogY3BsLkNvbXBpbGVRdWVyeU1ldGFkYXRhW10gPSBbXTtcbiAgICBsZXQgdmlld1F1ZXJpZXM6IGNwbC5Db21waWxlUXVlcnlNZXRhZGF0YVtdID0gW107XG4gICAgaWYgKGRpck1ldGEucXVlcmllcyAhPSBudWxsKSB7XG4gICAgICBxdWVyaWVzID0gdGhpcy5fZ2V0UXVlcmllc01ldGFkYXRhKGRpck1ldGEucXVlcmllcywgZmFsc2UsIGRpcmVjdGl2ZVR5cGUpO1xuICAgICAgdmlld1F1ZXJpZXMgPSB0aGlzLl9nZXRRdWVyaWVzTWV0YWRhdGEoZGlyTWV0YS5xdWVyaWVzLCB0cnVlLCBkaXJlY3RpdmVUeXBlKTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXRhZGF0YSA9IGNwbC5Db21waWxlRGlyZWN0aXZlTWV0YWRhdGEuY3JlYXRlKHtcbiAgICAgIGlzSG9zdDogZmFsc2UsXG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgICBleHBvcnRBczogbm9VbmRlZmluZWQoZGlyTWV0YS5leHBvcnRBcyksXG4gICAgICBpc0NvbXBvbmVudDogISFub25Ob3JtYWxpemVkVGVtcGxhdGVNZXRhZGF0YSxcbiAgICAgIHR5cGU6IHRoaXMuX2dldFR5cGVNZXRhZGF0YShkaXJlY3RpdmVUeXBlKSxcbiAgICAgIHRlbXBsYXRlOiBub25Ob3JtYWxpemVkVGVtcGxhdGVNZXRhZGF0YSxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogY2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgICBpbnB1dHM6IGRpck1ldGEuaW5wdXRzIHx8IFtdLFxuICAgICAgb3V0cHV0czogZGlyTWV0YS5vdXRwdXRzIHx8IFtdLFxuICAgICAgaG9zdDogZGlyTWV0YS5ob3N0IHx8IHt9LFxuICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnMgfHwgW10sXG4gICAgICB2aWV3UHJvdmlkZXJzOiB2aWV3UHJvdmlkZXJzIHx8IFtdLFxuICAgICAgcXVlcmllczogcXVlcmllcyB8fCBbXSxcbiAgICAgIGd1YXJkczogZGlyTWV0YS5ndWFyZHMgfHwge30sXG4gICAgICB2aWV3UXVlcmllczogdmlld1F1ZXJpZXMgfHwgW10sXG4gICAgICBlbnRyeUNvbXBvbmVudHM6IGVudHJ5Q29tcG9uZW50TWV0YWRhdGEsXG4gICAgICBjb21wb25lbnRWaWV3VHlwZTogbm9uTm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGEgPyB0aGlzLmdldENvbXBvbmVudFZpZXdDbGFzcyhkaXJlY3RpdmVUeXBlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgcmVuZGVyZXJUeXBlOiBub25Ob3JtYWxpemVkVGVtcGxhdGVNZXRhZGF0YSA/IHRoaXMuZ2V0UmVuZGVyZXJUeXBlKGRpcmVjdGl2ZVR5cGUpIDogbnVsbCxcbiAgICAgIGNvbXBvbmVudEZhY3Rvcnk6IG51bGxcbiAgICB9KTtcbiAgICBpZiAobm9uTm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGEpIHtcbiAgICAgIG1ldGFkYXRhLmNvbXBvbmVudEZhY3RvcnkgPVxuICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50RmFjdG9yeShzZWxlY3RvciwgZGlyZWN0aXZlVHlwZSwgbWV0YWRhdGEuaW5wdXRzLCBtZXRhZGF0YS5vdXRwdXRzKTtcbiAgICB9XG4gICAgY2FjaGVFbnRyeSA9IHttZXRhZGF0YSwgYW5ub3RhdGlvbjogZGlyTWV0YX07XG4gICAgdGhpcy5fbm9uTm9ybWFsaXplZERpcmVjdGl2ZUNhY2hlLnNldChkaXJlY3RpdmVUeXBlLCBjYWNoZUVudHJ5KTtcbiAgICByZXR1cm4gY2FjaGVFbnRyeTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBtZXRhZGF0YSBmb3IgdGhlIGdpdmVuIGRpcmVjdGl2ZS5cbiAgICogVGhpcyBhc3N1bWVzIGBsb2FkTmdNb2R1bGVEaXJlY3RpdmVBbmRQaXBlTWV0YWRhdGFgIGhhcyBiZWVuIGNhbGxlZCBmaXJzdC5cbiAgICovXG4gIGdldERpcmVjdGl2ZU1ldGFkYXRhKGRpcmVjdGl2ZVR5cGU6IGFueSk6IGNwbC5Db21waWxlRGlyZWN0aXZlTWV0YWRhdGEge1xuICAgIGNvbnN0IGRpck1ldGEgPSB0aGlzLl9kaXJlY3RpdmVDYWNoZS5nZXQoZGlyZWN0aXZlVHlwZSkhO1xuICAgIGlmICghZGlyTWV0YSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgc3ludGF4RXJyb3IoXG4gICAgICAgICAgICAgIGBJbGxlZ2FsIHN0YXRlOiBnZXREaXJlY3RpdmVNZXRhZGF0YSBjYW4gb25seSBiZSBjYWxsZWQgYWZ0ZXIgbG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhIGZvciBhIG1vZHVsZSB0aGF0IGRlY2xhcmVzIGl0LiBEaXJlY3RpdmUgJHtcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUoZGlyZWN0aXZlVHlwZSl9LmApLFxuICAgICAgICAgIGRpcmVjdGl2ZVR5cGUpO1xuICAgIH1cbiAgICByZXR1cm4gZGlyTWV0YTtcbiAgfVxuXG4gIGdldERpcmVjdGl2ZVN1bW1hcnkoZGlyVHlwZTogYW55KTogY3BsLkNvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5IHtcbiAgICBjb25zdCBkaXJTdW1tYXJ5ID1cbiAgICAgICAgPGNwbC5Db21waWxlRGlyZWN0aXZlU3VtbWFyeT50aGlzLl9sb2FkU3VtbWFyeShkaXJUeXBlLCBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLkRpcmVjdGl2ZSk7XG4gICAgaWYgKCFkaXJTdW1tYXJ5KSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICBzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgYElsbGVnYWwgc3RhdGU6IENvdWxkIG5vdCBsb2FkIHRoZSBzdW1tYXJ5IGZvciBkaXJlY3RpdmUgJHtzdHJpbmdpZnlUeXBlKGRpclR5cGUpfS5gKSxcbiAgICAgICAgICBkaXJUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpclN1bW1hcnk7XG4gIH1cblxuICBpc0RpcmVjdGl2ZSh0eXBlOiBhbnkpIHtcbiAgICByZXR1cm4gISF0aGlzLl9sb2FkU3VtbWFyeSh0eXBlLCBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLkRpcmVjdGl2ZSkgfHxcbiAgICAgICAgdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIuaXNEaXJlY3RpdmUodHlwZSk7XG4gIH1cblxuICBpc0Fic3RyYWN0RGlyZWN0aXZlKHR5cGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN1bW1hcnkgPVxuICAgICAgICB0aGlzLl9sb2FkU3VtbWFyeSh0eXBlLCBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLkRpcmVjdGl2ZSkgYXMgY3BsLkNvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5O1xuICAgIGlmIChzdW1tYXJ5ICYmICFzdW1tYXJ5LmlzQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gIXN1bW1hcnkuc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0YSA9IHRoaXMuX2RpcmVjdGl2ZVJlc29sdmVyLnJlc29sdmUodHlwZSwgZmFsc2UpO1xuICAgIGlmIChtZXRhICYmICFjcmVhdGVDb21wb25lbnQuaXNUeXBlT2YobWV0YSkpIHtcbiAgICAgIHJldHVybiAhbWV0YS5zZWxlY3RvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc1BpcGUodHlwZTogYW55KSB7XG4gICAgcmV0dXJuICEhdGhpcy5fbG9hZFN1bW1hcnkodHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5QaXBlKSB8fFxuICAgICAgICB0aGlzLl9waXBlUmVzb2x2ZXIuaXNQaXBlKHR5cGUpO1xuICB9XG5cbiAgaXNOZ01vZHVsZSh0eXBlOiBhbnkpIHtcbiAgICByZXR1cm4gISF0aGlzLl9sb2FkU3VtbWFyeSh0eXBlLCBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLk5nTW9kdWxlKSB8fFxuICAgICAgICB0aGlzLl9uZ01vZHVsZVJlc29sdmVyLmlzTmdNb2R1bGUodHlwZSk7XG4gIH1cblxuICBnZXROZ01vZHVsZVN1bW1hcnkobW9kdWxlVHlwZTogYW55LCBhbHJlYWR5Q29sbGVjdGluZzogU2V0PGFueT58bnVsbCA9IG51bGwpOlxuICAgICAgY3BsLkNvbXBpbGVOZ01vZHVsZVN1bW1hcnl8bnVsbCB7XG4gICAgbGV0IG1vZHVsZVN1bW1hcnk6IGNwbC5Db21waWxlTmdNb2R1bGVTdW1tYXJ5fG51bGwgPVxuICAgICAgICA8Y3BsLkNvbXBpbGVOZ01vZHVsZVN1bW1hcnk+dGhpcy5fbG9hZFN1bW1hcnkobW9kdWxlVHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5OZ01vZHVsZSk7XG4gICAgaWYgKCFtb2R1bGVTdW1tYXJ5KSB7XG4gICAgICBjb25zdCBtb2R1bGVNZXRhID0gdGhpcy5nZXROZ01vZHVsZU1ldGFkYXRhKG1vZHVsZVR5cGUsIGZhbHNlLCBhbHJlYWR5Q29sbGVjdGluZyk7XG4gICAgICBtb2R1bGVTdW1tYXJ5ID0gbW9kdWxlTWV0YSA/IG1vZHVsZU1ldGEudG9TdW1tYXJ5KCkgOiBudWxsO1xuICAgICAgaWYgKG1vZHVsZVN1bW1hcnkpIHtcbiAgICAgICAgdGhpcy5fc3VtbWFyeUNhY2hlLnNldChtb2R1bGVUeXBlLCBtb2R1bGVTdW1tYXJ5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vZHVsZVN1bW1hcnk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIGRlY2xhcmVkIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIG9mIGFuIE5nTW9kdWxlLlxuICAgKi9cbiAgbG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhKG1vZHVsZVR5cGU6IGFueSwgaXNTeW5jOiBib29sZWFuLCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTpcbiAgICAgIFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgbmdNb2R1bGUgPSB0aGlzLmdldE5nTW9kdWxlTWV0YWRhdGEobW9kdWxlVHlwZSwgdGhyb3dJZk5vdEZvdW5kKTtcbiAgICBjb25zdCBsb2FkaW5nOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuICAgIGlmIChuZ01vZHVsZSkge1xuICAgICAgbmdNb2R1bGUuZGVjbGFyZWREaXJlY3RpdmVzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmxvYWREaXJlY3RpdmVNZXRhZGF0YShtb2R1bGVUeXBlLCBpZC5yZWZlcmVuY2UsIGlzU3luYyk7XG4gICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgbG9hZGluZy5wdXNoKHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG5nTW9kdWxlLmRlY2xhcmVkUGlwZXMuZm9yRWFjaCgoaWQpID0+IHRoaXMuX2xvYWRQaXBlTWV0YWRhdGEoaWQucmVmZXJlbmNlKSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLmFsbChsb2FkaW5nKTtcbiAgfVxuXG4gIGdldFNoYWxsb3dNb2R1bGVNZXRhZGF0YShtb2R1bGVUeXBlOiBhbnkpOiBjcGwuQ29tcGlsZVNoYWxsb3dNb2R1bGVNZXRhZGF0YXxudWxsIHtcbiAgICBsZXQgY29tcGlsZU1ldGEgPSB0aGlzLl9zaGFsbG93TW9kdWxlQ2FjaGUuZ2V0KG1vZHVsZVR5cGUpO1xuICAgIGlmIChjb21waWxlTWV0YSkge1xuICAgICAgcmV0dXJuIGNvbXBpbGVNZXRhO1xuICAgIH1cblxuICAgIGNvbnN0IG5nTW9kdWxlTWV0YSA9XG4gICAgICAgIGZpbmRMYXN0KHRoaXMuX3JlZmxlY3Rvci5zaGFsbG93QW5ub3RhdGlvbnMobW9kdWxlVHlwZSksIGNyZWF0ZU5nTW9kdWxlLmlzVHlwZU9mKTtcblxuICAgIGNvbXBpbGVNZXRhID0ge1xuICAgICAgdHlwZTogdGhpcy5fZ2V0VHlwZU1ldGFkYXRhKG1vZHVsZVR5cGUpLFxuICAgICAgcmF3RXhwb3J0czogbmdNb2R1bGVNZXRhLmV4cG9ydHMsXG4gICAgICByYXdJbXBvcnRzOiBuZ01vZHVsZU1ldGEuaW1wb3J0cyxcbiAgICAgIHJhd1Byb3ZpZGVyczogbmdNb2R1bGVNZXRhLnByb3ZpZGVycyxcbiAgICB9O1xuXG4gICAgdGhpcy5fc2hhbGxvd01vZHVsZUNhY2hlLnNldChtb2R1bGVUeXBlLCBjb21waWxlTWV0YSk7XG4gICAgcmV0dXJuIGNvbXBpbGVNZXRhO1xuICB9XG5cbiAgZ2V0TmdNb2R1bGVNZXRhZGF0YShcbiAgICAgIG1vZHVsZVR5cGU6IGFueSwgdGhyb3dJZk5vdEZvdW5kID0gdHJ1ZSxcbiAgICAgIGFscmVhZHlDb2xsZWN0aW5nOiBTZXQ8YW55PnxudWxsID0gbnVsbCk6IGNwbC5Db21waWxlTmdNb2R1bGVNZXRhZGF0YXxudWxsIHtcbiAgICBtb2R1bGVUeXBlID0gcmVzb2x2ZUZvcndhcmRSZWYobW9kdWxlVHlwZSk7XG4gICAgbGV0IGNvbXBpbGVNZXRhID0gdGhpcy5fbmdNb2R1bGVDYWNoZS5nZXQobW9kdWxlVHlwZSk7XG4gICAgaWYgKGNvbXBpbGVNZXRhKSB7XG4gICAgICByZXR1cm4gY29tcGlsZU1ldGE7XG4gICAgfVxuICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9uZ01vZHVsZVJlc29sdmVyLnJlc29sdmUobW9kdWxlVHlwZSwgdGhyb3dJZk5vdEZvdW5kKTtcbiAgICBpZiAoIW1ldGEpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBkZWNsYXJlZERpcmVjdGl2ZXM6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhW10gPSBbXTtcbiAgICBjb25zdCBleHBvcnRlZE5vbk1vZHVsZUlkZW50aWZpZXJzOiBjcGwuQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdID0gW107XG4gICAgY29uc3QgZGVjbGFyZWRQaXBlczogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGNvbnN0IGltcG9ydGVkTW9kdWxlczogY3BsLkNvbXBpbGVOZ01vZHVsZVN1bW1hcnlbXSA9IFtdO1xuICAgIGNvbnN0IGV4cG9ydGVkTW9kdWxlczogY3BsLkNvbXBpbGVOZ01vZHVsZVN1bW1hcnlbXSA9IFtdO1xuICAgIGNvbnN0IHByb3ZpZGVyczogY3BsLkNvbXBpbGVQcm92aWRlck1ldGFkYXRhW10gPSBbXTtcbiAgICBjb25zdCBlbnRyeUNvbXBvbmVudHM6IGNwbC5Db21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdID0gW107XG4gICAgY29uc3QgYm9vdHN0cmFwQ29tcG9uZW50czogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGNvbnN0IHNjaGVtYXM6IFNjaGVtYU1ldGFkYXRhW10gPSBbXTtcblxuICAgIGlmIChtZXRhLmltcG9ydHMpIHtcbiAgICAgIGZsYXR0ZW5BbmREZWR1cGVBcnJheShtZXRhLmltcG9ydHMpLmZvckVhY2goKGltcG9ydGVkVHlwZSkgPT4ge1xuICAgICAgICBsZXQgaW1wb3J0ZWRNb2R1bGVUeXBlOiBUeXBlID0gdW5kZWZpbmVkITtcbiAgICAgICAgaWYgKGlzVmFsaWRUeXBlKGltcG9ydGVkVHlwZSkpIHtcbiAgICAgICAgICBpbXBvcnRlZE1vZHVsZVR5cGUgPSBpbXBvcnRlZFR5cGU7XG4gICAgICAgIH0gZWxzZSBpZiAoaW1wb3J0ZWRUeXBlICYmIGltcG9ydGVkVHlwZS5uZ01vZHVsZSkge1xuICAgICAgICAgIGNvbnN0IG1vZHVsZVdpdGhQcm92aWRlcnM6IE1vZHVsZVdpdGhQcm92aWRlcnMgPSBpbXBvcnRlZFR5cGU7XG4gICAgICAgICAgaW1wb3J0ZWRNb2R1bGVUeXBlID0gbW9kdWxlV2l0aFByb3ZpZGVycy5uZ01vZHVsZTtcbiAgICAgICAgICBpZiAobW9kdWxlV2l0aFByb3ZpZGVycy5wcm92aWRlcnMpIHtcbiAgICAgICAgICAgIHByb3ZpZGVycy5wdXNoKC4uLnRoaXMuX2dldFByb3ZpZGVyc01ldGFkYXRhKFxuICAgICAgICAgICAgICAgIG1vZHVsZVdpdGhQcm92aWRlcnMucHJvdmlkZXJzLCBlbnRyeUNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgYHByb3ZpZGVyIGZvciB0aGUgTmdNb2R1bGUgJyR7c3RyaW5naWZ5VHlwZShpbXBvcnRlZE1vZHVsZVR5cGUpfSdgLCBbXSxcbiAgICAgICAgICAgICAgICBpbXBvcnRlZFR5cGUpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1wb3J0ZWRNb2R1bGVUeXBlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2NoZWNrU2VsZkltcG9ydChtb2R1bGVUeXBlLCBpbXBvcnRlZE1vZHVsZVR5cGUpKSByZXR1cm47XG4gICAgICAgICAgaWYgKCFhbHJlYWR5Q29sbGVjdGluZykgYWxyZWFkeUNvbGxlY3RpbmcgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgaWYgKGFscmVhZHlDb2xsZWN0aW5nLmhhcyhpbXBvcnRlZE1vZHVsZVR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgICBzeW50YXhFcnJvcihgJHt0aGlzLl9nZXRUeXBlRGVzY3JpcHRvcihpbXBvcnRlZE1vZHVsZVR5cGUpfSAnJHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShpbXBvcnRlZFR5cGUpfScgaXMgaW1wb3J0ZWQgcmVjdXJzaXZlbHkgYnkgdGhlIG1vZHVsZSAnJHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nLmApLFxuICAgICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhbHJlYWR5Q29sbGVjdGluZy5hZGQoaW1wb3J0ZWRNb2R1bGVUeXBlKTtcbiAgICAgICAgICBjb25zdCBpbXBvcnRlZE1vZHVsZVN1bW1hcnkgPVxuICAgICAgICAgICAgICB0aGlzLmdldE5nTW9kdWxlU3VtbWFyeShpbXBvcnRlZE1vZHVsZVR5cGUsIGFscmVhZHlDb2xsZWN0aW5nKTtcbiAgICAgICAgICBhbHJlYWR5Q29sbGVjdGluZy5kZWxldGUoaW1wb3J0ZWRNb2R1bGVUeXBlKTtcbiAgICAgICAgICBpZiAoIWltcG9ydGVkTW9kdWxlU3VtbWFyeSkge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgICAgc3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgJHt0aGlzLl9nZXRUeXBlRGVzY3JpcHRvcihpbXBvcnRlZFR5cGUpfSAnJHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShpbXBvcnRlZFR5cGUpfScgaW1wb3J0ZWQgYnkgdGhlIG1vZHVsZSAnJHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nLiBQbGVhc2UgYWRkIGEgQE5nTW9kdWxlIGFubm90YXRpb24uYCksXG4gICAgICAgICAgICAgICAgbW9kdWxlVHlwZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydGVkTW9kdWxlcy5wdXNoKGltcG9ydGVkTW9kdWxlU3VtbWFyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgIHN5bnRheEVycm9yKFxuICAgICAgICAgICAgICAgICAgYFVuZXhwZWN0ZWQgdmFsdWUgJyR7c3RyaW5naWZ5VHlwZShpbXBvcnRlZFR5cGUpfScgaW1wb3J0ZWQgYnkgdGhlIG1vZHVsZSAnJHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfSdgKSxcbiAgICAgICAgICAgICAgbW9kdWxlVHlwZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobWV0YS5leHBvcnRzKSB7XG4gICAgICBmbGF0dGVuQW5kRGVkdXBlQXJyYXkobWV0YS5leHBvcnRzKS5mb3JFYWNoKChleHBvcnRlZFR5cGUpID0+IHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkVHlwZShleHBvcnRlZFR5cGUpKSB7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgIHN5bnRheEVycm9yKFxuICAgICAgICAgICAgICAgICAgYFVuZXhwZWN0ZWQgdmFsdWUgJyR7c3RyaW5naWZ5VHlwZShleHBvcnRlZFR5cGUpfScgZXhwb3J0ZWQgYnkgdGhlIG1vZHVsZSAnJHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfSdgKSxcbiAgICAgICAgICAgICAgbW9kdWxlVHlwZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWxyZWFkeUNvbGxlY3RpbmcpIGFscmVhZHlDb2xsZWN0aW5nID0gbmV3IFNldCgpO1xuICAgICAgICBpZiAoYWxyZWFkeUNvbGxlY3RpbmcuaGFzKGV4cG9ydGVkVHlwZSkpIHtcbiAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgc3ludGF4RXJyb3IoYCR7dGhpcy5fZ2V0VHlwZURlc2NyaXB0b3IoZXhwb3J0ZWRUeXBlKX0gJyR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnkoZXhwb3J0ZWRUeXBlKX0nIGlzIGV4cG9ydGVkIHJlY3Vyc2l2ZWx5IGJ5IHRoZSBtb2R1bGUgJyR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfSdgKSxcbiAgICAgICAgICAgICAgbW9kdWxlVHlwZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFscmVhZHlDb2xsZWN0aW5nLmFkZChleHBvcnRlZFR5cGUpO1xuICAgICAgICBjb25zdCBleHBvcnRlZE1vZHVsZVN1bW1hcnkgPSB0aGlzLmdldE5nTW9kdWxlU3VtbWFyeShleHBvcnRlZFR5cGUsIGFscmVhZHlDb2xsZWN0aW5nKTtcbiAgICAgICAgYWxyZWFkeUNvbGxlY3RpbmcuZGVsZXRlKGV4cG9ydGVkVHlwZSk7XG4gICAgICAgIGlmIChleHBvcnRlZE1vZHVsZVN1bW1hcnkpIHtcbiAgICAgICAgICBleHBvcnRlZE1vZHVsZXMucHVzaChleHBvcnRlZE1vZHVsZVN1bW1hcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGV4cG9ydGVkTm9uTW9kdWxlSWRlbnRpZmllcnMucHVzaCh0aGlzLl9nZXRJZGVudGlmaWVyTWV0YWRhdGEoZXhwb3J0ZWRUeXBlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vdGU6IFRoaXMgd2lsbCBiZSBtb2RpZmllZCBsYXRlciwgc28gd2UgcmVseSBvblxuICAgIC8vIGdldHRpbmcgYSBuZXcgaW5zdGFuY2UgZXZlcnkgdGltZSFcbiAgICBjb25zdCB0cmFuc2l0aXZlTW9kdWxlID0gdGhpcy5fZ2V0VHJhbnNpdGl2ZU5nTW9kdWxlTWV0YWRhdGEoaW1wb3J0ZWRNb2R1bGVzLCBleHBvcnRlZE1vZHVsZXMpO1xuICAgIGlmIChtZXRhLmRlY2xhcmF0aW9ucykge1xuICAgICAgZmxhdHRlbkFuZERlZHVwZUFycmF5KG1ldGEuZGVjbGFyYXRpb25zKS5mb3JFYWNoKChkZWNsYXJlZFR5cGUpID0+IHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkVHlwZShkZWNsYXJlZFR5cGUpKSB7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgIHN5bnRheEVycm9yKFxuICAgICAgICAgICAgICAgICAgYFVuZXhwZWN0ZWQgdmFsdWUgJyR7c3RyaW5naWZ5VHlwZShkZWNsYXJlZFR5cGUpfScgZGVjbGFyZWQgYnkgdGhlIG1vZHVsZSAnJHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfSdgKSxcbiAgICAgICAgICAgICAgbW9kdWxlVHlwZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY2xhcmVkSWRlbnRpZmllciA9IHRoaXMuX2dldElkZW50aWZpZXJNZXRhZGF0YShkZWNsYXJlZFR5cGUpO1xuICAgICAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZShkZWNsYXJlZFR5cGUpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNBYnN0cmFjdERpcmVjdGl2ZShkZWNsYXJlZFR5cGUpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgICBzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYERpcmVjdGl2ZSAke3N0cmluZ2lmeVR5cGUoZGVjbGFyZWRUeXBlKX0gaGFzIG5vIHNlbGVjdG9yLCBwbGVhc2UgYWRkIGl0IWApLFxuICAgICAgICAgICAgICAgIGRlY2xhcmVkVHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRyYW5zaXRpdmVNb2R1bGUuYWRkRGlyZWN0aXZlKGRlY2xhcmVkSWRlbnRpZmllcik7XG4gICAgICAgICAgZGVjbGFyZWREaXJlY3RpdmVzLnB1c2goZGVjbGFyZWRJZGVudGlmaWVyKTtcbiAgICAgICAgICB0aGlzLl9hZGRUeXBlVG9Nb2R1bGUoZGVjbGFyZWRUeXBlLCBtb2R1bGVUeXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzUGlwZShkZWNsYXJlZFR5cGUpKSB7XG4gICAgICAgICAgdHJhbnNpdGl2ZU1vZHVsZS5hZGRQaXBlKGRlY2xhcmVkSWRlbnRpZmllcik7XG4gICAgICAgICAgdHJhbnNpdGl2ZU1vZHVsZS5waXBlcy5wdXNoKGRlY2xhcmVkSWRlbnRpZmllcik7XG4gICAgICAgICAgZGVjbGFyZWRQaXBlcy5wdXNoKGRlY2xhcmVkSWRlbnRpZmllcik7XG4gICAgICAgICAgdGhpcy5fYWRkVHlwZVRvTW9kdWxlKGRlY2xhcmVkVHlwZSwgbW9kdWxlVHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgIHN5bnRheEVycm9yKGBVbmV4cGVjdGVkICR7dGhpcy5fZ2V0VHlwZURlc2NyaXB0b3IoZGVjbGFyZWRUeXBlKX0gJyR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKGRlY2xhcmVkVHlwZSl9JyBkZWNsYXJlZCBieSB0aGUgbW9kdWxlICcke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShcbiAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVUeXBlKX0nLiBQbGVhc2UgYWRkIGEgQFBpcGUvQERpcmVjdGl2ZS9AQ29tcG9uZW50IGFubm90YXRpb24uYCksXG4gICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhwb3J0ZWREaXJlY3RpdmVzOiBjcGwuQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdID0gW107XG4gICAgY29uc3QgZXhwb3J0ZWRQaXBlczogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGV4cG9ydGVkTm9uTW9kdWxlSWRlbnRpZmllcnMuZm9yRWFjaCgoZXhwb3J0ZWRJZCkgPT4ge1xuICAgICAgaWYgKHRyYW5zaXRpdmVNb2R1bGUuZGlyZWN0aXZlc1NldC5oYXMoZXhwb3J0ZWRJZC5yZWZlcmVuY2UpKSB7XG4gICAgICAgIGV4cG9ydGVkRGlyZWN0aXZlcy5wdXNoKGV4cG9ydGVkSWQpO1xuICAgICAgICB0cmFuc2l0aXZlTW9kdWxlLmFkZEV4cG9ydGVkRGlyZWN0aXZlKGV4cG9ydGVkSWQpO1xuICAgICAgfSBlbHNlIGlmICh0cmFuc2l0aXZlTW9kdWxlLnBpcGVzU2V0LmhhcyhleHBvcnRlZElkLnJlZmVyZW5jZSkpIHtcbiAgICAgICAgZXhwb3J0ZWRQaXBlcy5wdXNoKGV4cG9ydGVkSWQpO1xuICAgICAgICB0cmFuc2l0aXZlTW9kdWxlLmFkZEV4cG9ydGVkUGlwZShleHBvcnRlZElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgc3ludGF4RXJyb3IoYENhbid0IGV4cG9ydCAke3RoaXMuX2dldFR5cGVEZXNjcmlwdG9yKGV4cG9ydGVkSWQucmVmZXJlbmNlKX0gJHtcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKGV4cG9ydGVkSWQucmVmZXJlbmNlKX0gZnJvbSAke1xuICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9IGFzIGl0IHdhcyBuZWl0aGVyIGRlY2xhcmVkIG5vciBpbXBvcnRlZCFgKSxcbiAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBUaGUgcHJvdmlkZXJzIG9mIHRoZSBtb2R1bGUgaGF2ZSB0byBnbyBsYXN0XG4gICAgLy8gc28gdGhhdCB0aGV5IG92ZXJ3cml0ZSBhbnkgb3RoZXIgcHJvdmlkZXIgd2UgYWxyZWFkeSBhZGRlZC5cbiAgICBpZiAobWV0YS5wcm92aWRlcnMpIHtcbiAgICAgIHByb3ZpZGVycy5wdXNoKC4uLnRoaXMuX2dldFByb3ZpZGVyc01ldGFkYXRhKFxuICAgICAgICAgIG1ldGEucHJvdmlkZXJzLCBlbnRyeUNvbXBvbmVudHMsXG4gICAgICAgICAgYHByb3ZpZGVyIGZvciB0aGUgTmdNb2R1bGUgJyR7c3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nYCwgW10sIG1vZHVsZVR5cGUpKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YS5lbnRyeUNvbXBvbmVudHMpIHtcbiAgICAgIGVudHJ5Q29tcG9uZW50cy5wdXNoKC4uLmZsYXR0ZW5BbmREZWR1cGVBcnJheShtZXRhLmVudHJ5Q29tcG9uZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHR5cGUgPT4gdGhpcy5fZ2V0RW50cnlDb21wb25lbnRNZXRhZGF0YSh0eXBlKSEpKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YS5ib290c3RyYXApIHtcbiAgICAgIGZsYXR0ZW5BbmREZWR1cGVBcnJheShtZXRhLmJvb3RzdHJhcCkuZm9yRWFjaCh0eXBlID0+IHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkVHlwZSh0eXBlKSkge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICBzeW50YXhFcnJvcihgVW5leHBlY3RlZCB2YWx1ZSAnJHtcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUodHlwZSl9JyB1c2VkIGluIHRoZSBib290c3RyYXAgcHJvcGVydHkgb2YgbW9kdWxlICcke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nYCksXG4gICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBib290c3RyYXBDb21wb25lbnRzLnB1c2godGhpcy5fZ2V0SWRlbnRpZmllck1ldGFkYXRhKHR5cGUpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGVudHJ5Q29tcG9uZW50cy5wdXNoKFxuICAgICAgICAuLi5ib290c3RyYXBDb21wb25lbnRzLm1hcCh0eXBlID0+IHRoaXMuX2dldEVudHJ5Q29tcG9uZW50TWV0YWRhdGEodHlwZS5yZWZlcmVuY2UpISkpO1xuXG4gICAgaWYgKG1ldGEuc2NoZW1hcykge1xuICAgICAgc2NoZW1hcy5wdXNoKC4uLmZsYXR0ZW5BbmREZWR1cGVBcnJheShtZXRhLnNjaGVtYXMpKTtcbiAgICB9XG5cbiAgICBjb21waWxlTWV0YSA9IG5ldyBjcGwuQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEoe1xuICAgICAgdHlwZTogdGhpcy5fZ2V0VHlwZU1ldGFkYXRhKG1vZHVsZVR5cGUpLFxuICAgICAgcHJvdmlkZXJzLFxuICAgICAgZW50cnlDb21wb25lbnRzLFxuICAgICAgYm9vdHN0cmFwQ29tcG9uZW50cyxcbiAgICAgIHNjaGVtYXMsXG4gICAgICBkZWNsYXJlZERpcmVjdGl2ZXMsXG4gICAgICBleHBvcnRlZERpcmVjdGl2ZXMsXG4gICAgICBkZWNsYXJlZFBpcGVzLFxuICAgICAgZXhwb3J0ZWRQaXBlcyxcbiAgICAgIGltcG9ydGVkTW9kdWxlcyxcbiAgICAgIGV4cG9ydGVkTW9kdWxlcyxcbiAgICAgIHRyYW5zaXRpdmVNb2R1bGUsXG4gICAgICBpZDogbWV0YS5pZCB8fCBudWxsLFxuICAgIH0pO1xuXG4gICAgZW50cnlDb21wb25lbnRzLmZvckVhY2goKGlkKSA9PiB0cmFuc2l0aXZlTW9kdWxlLmFkZEVudHJ5Q29tcG9uZW50KGlkKSk7XG4gICAgcHJvdmlkZXJzLmZvckVhY2goKHByb3ZpZGVyKSA9PiB0cmFuc2l0aXZlTW9kdWxlLmFkZFByb3ZpZGVyKHByb3ZpZGVyLCBjb21waWxlTWV0YSEudHlwZSkpO1xuICAgIHRyYW5zaXRpdmVNb2R1bGUuYWRkTW9kdWxlKGNvbXBpbGVNZXRhLnR5cGUpO1xuICAgIHRoaXMuX25nTW9kdWxlQ2FjaGUuc2V0KG1vZHVsZVR5cGUsIGNvbXBpbGVNZXRhKTtcbiAgICByZXR1cm4gY29tcGlsZU1ldGE7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja1NlbGZJbXBvcnQobW9kdWxlVHlwZTogVHlwZSwgaW1wb3J0ZWRNb2R1bGVUeXBlOiBUeXBlKTogYm9vbGVhbiB7XG4gICAgaWYgKG1vZHVsZVR5cGUgPT09IGltcG9ydGVkTW9kdWxlVHlwZSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgc3ludGF4RXJyb3IoYCcke3N0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9JyBtb2R1bGUgY2FuJ3QgaW1wb3J0IGl0c2VsZmApLCBtb2R1bGVUeXBlKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUeXBlRGVzY3JpcHRvcih0eXBlOiBUeXBlKTogc3RyaW5nIHtcbiAgICBpZiAoaXNWYWxpZFR5cGUodHlwZSkpIHtcbiAgICAgIGlmICh0aGlzLmlzRGlyZWN0aXZlKHR5cGUpKSB7XG4gICAgICAgIHJldHVybiAnZGlyZWN0aXZlJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaXNQaXBlKHR5cGUpKSB7XG4gICAgICAgIHJldHVybiAncGlwZSc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzTmdNb2R1bGUodHlwZSkpIHtcbiAgICAgICAgcmV0dXJuICdtb2R1bGUnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgodHlwZSBhcyBhbnkpLnByb3ZpZGUpIHtcbiAgICAgIHJldHVybiAncHJvdmlkZXInO1xuICAgIH1cblxuICAgIHJldHVybiAndmFsdWUnO1xuICB9XG5cblxuICBwcml2YXRlIF9hZGRUeXBlVG9Nb2R1bGUodHlwZTogVHlwZSwgbW9kdWxlVHlwZTogVHlwZSkge1xuICAgIGNvbnN0IG9sZE1vZHVsZSA9IHRoaXMuX25nTW9kdWxlT2ZUeXBlcy5nZXQodHlwZSk7XG4gICAgaWYgKG9sZE1vZHVsZSAmJiBvbGRNb2R1bGUgIT09IG1vZHVsZVR5cGUpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIHN5bnRheEVycm9yKFxuICAgICAgICAgICAgICBgVHlwZSAke3N0cmluZ2lmeVR5cGUodHlwZSl9IGlzIHBhcnQgb2YgdGhlIGRlY2xhcmF0aW9ucyBvZiAyIG1vZHVsZXM6ICR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKG9sZE1vZHVsZSl9IGFuZCAke3N0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9ISBgICtcbiAgICAgICAgICAgICAgYFBsZWFzZSBjb25zaWRlciBtb3ZpbmcgJHtzdHJpbmdpZnlUeXBlKHR5cGUpfSB0byBhIGhpZ2hlciBtb2R1bGUgdGhhdCBpbXBvcnRzICR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKG9sZE1vZHVsZSl9IGFuZCAke3N0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9LiBgICtcbiAgICAgICAgICAgICAgYFlvdSBjYW4gYWxzbyBjcmVhdGUgYSBuZXcgTmdNb2R1bGUgdGhhdCBleHBvcnRzIGFuZCBpbmNsdWRlcyAke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZSh0eXBlKX0gdGhlbiBpbXBvcnQgdGhhdCBOZ01vZHVsZSBpbiAke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShvbGRNb2R1bGUpfSBhbmQgJHtzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfS5gKSxcbiAgICAgICAgICBtb2R1bGVUeXBlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbmdNb2R1bGVPZlR5cGVzLnNldCh0eXBlLCBtb2R1bGVUeXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFRyYW5zaXRpdmVOZ01vZHVsZU1ldGFkYXRhKFxuICAgICAgaW1wb3J0ZWRNb2R1bGVzOiBjcGwuQ29tcGlsZU5nTW9kdWxlU3VtbWFyeVtdLFxuICAgICAgZXhwb3J0ZWRNb2R1bGVzOiBjcGwuQ29tcGlsZU5nTW9kdWxlU3VtbWFyeVtdKTogY3BsLlRyYW5zaXRpdmVDb21waWxlTmdNb2R1bGVNZXRhZGF0YSB7XG4gICAgLy8gY29sbGVjdCBgcHJvdmlkZXJzYCAvIGBlbnRyeUNvbXBvbmVudHNgIGZyb20gYWxsIGltcG9ydGVkIGFuZCBhbGwgZXhwb3J0ZWQgbW9kdWxlc1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBjcGwuVHJhbnNpdGl2ZUNvbXBpbGVOZ01vZHVsZU1ldGFkYXRhKCk7XG4gICAgY29uc3QgbW9kdWxlc0J5VG9rZW4gPSBuZXcgTWFwPGFueSwgU2V0PGFueT4+KCk7XG4gICAgaW1wb3J0ZWRNb2R1bGVzLmNvbmNhdChleHBvcnRlZE1vZHVsZXMpLmZvckVhY2goKG1vZFN1bW1hcnkpID0+IHtcbiAgICAgIG1vZFN1bW1hcnkubW9kdWxlcy5mb3JFYWNoKChtb2QpID0+IHJlc3VsdC5hZGRNb2R1bGUobW9kKSk7XG4gICAgICBtb2RTdW1tYXJ5LmVudHJ5Q29tcG9uZW50cy5mb3JFYWNoKChjb21wKSA9PiByZXN1bHQuYWRkRW50cnlDb21wb25lbnQoY29tcCkpO1xuICAgICAgY29uc3QgYWRkZWRUb2tlbnMgPSBuZXcgU2V0PGFueT4oKTtcbiAgICAgIG1vZFN1bW1hcnkucHJvdmlkZXJzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRva2VuUmVmID0gY3BsLnRva2VuUmVmZXJlbmNlKGVudHJ5LnByb3ZpZGVyLnRva2VuKTtcbiAgICAgICAgbGV0IHByZXZNb2R1bGVzID0gbW9kdWxlc0J5VG9rZW4uZ2V0KHRva2VuUmVmKTtcbiAgICAgICAgaWYgKCFwcmV2TW9kdWxlcykge1xuICAgICAgICAgIHByZXZNb2R1bGVzID0gbmV3IFNldDxhbnk+KCk7XG4gICAgICAgICAgbW9kdWxlc0J5VG9rZW4uc2V0KHRva2VuUmVmLCBwcmV2TW9kdWxlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlUmVmID0gZW50cnkubW9kdWxlLnJlZmVyZW5jZTtcbiAgICAgICAgLy8gTm90ZTogdGhlIHByb3ZpZGVycyBvZiBvbmUgbW9kdWxlIG1heSBzdGlsbCBjb250YWluIG11bHRpcGxlIHByb3ZpZGVyc1xuICAgICAgICAvLyBwZXIgdG9rZW4gKGUuZy4gZm9yIG11bHRpIHByb3ZpZGVycyksIGFuZCB3ZSBuZWVkIHRvIHByZXNlcnZlIHRoZXNlLlxuICAgICAgICBpZiAoYWRkZWRUb2tlbnMuaGFzKHRva2VuUmVmKSB8fCAhcHJldk1vZHVsZXMuaGFzKG1vZHVsZVJlZikpIHtcbiAgICAgICAgICBwcmV2TW9kdWxlcy5hZGQobW9kdWxlUmVmKTtcbiAgICAgICAgICBhZGRlZFRva2Vucy5hZGQodG9rZW5SZWYpO1xuICAgICAgICAgIHJlc3VsdC5hZGRQcm92aWRlcihlbnRyeS5wcm92aWRlciwgZW50cnkubW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgZXhwb3J0ZWRNb2R1bGVzLmZvckVhY2goKG1vZFN1bW1hcnkpID0+IHtcbiAgICAgIG1vZFN1bW1hcnkuZXhwb3J0ZWREaXJlY3RpdmVzLmZvckVhY2goKGlkKSA9PiByZXN1bHQuYWRkRXhwb3J0ZWREaXJlY3RpdmUoaWQpKTtcbiAgICAgIG1vZFN1bW1hcnkuZXhwb3J0ZWRQaXBlcy5mb3JFYWNoKChpZCkgPT4gcmVzdWx0LmFkZEV4cG9ydGVkUGlwZShpZCkpO1xuICAgIH0pO1xuICAgIGltcG9ydGVkTW9kdWxlcy5mb3JFYWNoKChtb2RTdW1tYXJ5KSA9PiB7XG4gICAgICBtb2RTdW1tYXJ5LmV4cG9ydGVkRGlyZWN0aXZlcy5mb3JFYWNoKChpZCkgPT4gcmVzdWx0LmFkZERpcmVjdGl2ZShpZCkpO1xuICAgICAgbW9kU3VtbWFyeS5leHBvcnRlZFBpcGVzLmZvckVhY2goKGlkKSA9PiByZXN1bHQuYWRkUGlwZShpZCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIF9nZXRJZGVudGlmaWVyTWV0YWRhdGEodHlwZTogVHlwZSk6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhIHtcbiAgICB0eXBlID0gcmVzb2x2ZUZvcndhcmRSZWYodHlwZSk7XG4gICAgcmV0dXJuIHtyZWZlcmVuY2U6IHR5cGV9O1xuICB9XG5cbiAgaXNJbmplY3RhYmxlKHR5cGU6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFubm90YXRpb25zID0gdGhpcy5fcmVmbGVjdG9yLnRyeUFubm90YXRpb25zKHR5cGUpO1xuICAgIHJldHVybiBhbm5vdGF0aW9ucy5zb21lKGFubiA9PiBjcmVhdGVJbmplY3RhYmxlLmlzVHlwZU9mKGFubikpO1xuICB9XG5cbiAgZ2V0SW5qZWN0YWJsZVN1bW1hcnkodHlwZTogYW55KTogY3BsLkNvbXBpbGVUeXBlU3VtbWFyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1bW1hcnlLaW5kOiBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLkluamVjdGFibGUsXG4gICAgICB0eXBlOiB0aGlzLl9nZXRUeXBlTWV0YWRhdGEodHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgfTtcbiAgfVxuXG4gIGdldEluamVjdGFibGVNZXRhZGF0YShcbiAgICAgIHR5cGU6IGFueSwgZGVwZW5kZW5jaWVzOiBhbnlbXXxudWxsID0gbnVsbCxcbiAgICAgIHRocm93T25Vbmtub3duRGVwczogYm9vbGVhbiA9IHRydWUpOiBjcGwuQ29tcGlsZUluamVjdGFibGVNZXRhZGF0YXxudWxsIHtcbiAgICBjb25zdCB0eXBlU3VtbWFyeSA9IHRoaXMuX2xvYWRTdW1tYXJ5KHR5cGUsIGNwbC5Db21waWxlU3VtbWFyeUtpbmQuSW5qZWN0YWJsZSk7XG4gICAgY29uc3QgdHlwZU1ldGFkYXRhID0gdHlwZVN1bW1hcnkgP1xuICAgICAgICB0eXBlU3VtbWFyeS50eXBlIDpcbiAgICAgICAgdGhpcy5fZ2V0VHlwZU1ldGFkYXRhKHR5cGUsIGRlcGVuZGVuY2llcywgdGhyb3dPblVua25vd25EZXBzKTtcblxuICAgIGNvbnN0IGFubm90YXRpb25zOiBJbmplY3RhYmxlW10gPVxuICAgICAgICB0aGlzLl9yZWZsZWN0b3IuYW5ub3RhdGlvbnModHlwZSkuZmlsdGVyKGFubiA9PiBjcmVhdGVJbmplY3RhYmxlLmlzVHlwZU9mKGFubikpO1xuXG4gICAgaWYgKGFubm90YXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0YSA9IGFubm90YXRpb25zW2Fubm90YXRpb25zLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB7XG4gICAgICBzeW1ib2w6IHR5cGUsXG4gICAgICB0eXBlOiB0eXBlTWV0YWRhdGEsXG4gICAgICBwcm92aWRlZEluOiBtZXRhLnByb3ZpZGVkSW4sXG4gICAgICB1c2VWYWx1ZTogbWV0YS51c2VWYWx1ZSxcbiAgICAgIHVzZUNsYXNzOiBtZXRhLnVzZUNsYXNzLFxuICAgICAgdXNlRXhpc3Rpbmc6IG1ldGEudXNlRXhpc3RpbmcsXG4gICAgICB1c2VGYWN0b3J5OiBtZXRhLnVzZUZhY3RvcnksXG4gICAgICBkZXBzOiBtZXRhLmRlcHMsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFR5cGVNZXRhZGF0YSh0eXBlOiBUeXBlLCBkZXBlbmRlbmNpZXM6IGFueVtdfG51bGwgPSBudWxsLCB0aHJvd09uVW5rbm93bkRlcHMgPSB0cnVlKTpcbiAgICAgIGNwbC5Db21waWxlVHlwZU1ldGFkYXRhIHtcbiAgICBjb25zdCBpZGVudGlmaWVyID0gdGhpcy5fZ2V0SWRlbnRpZmllck1ldGFkYXRhKHR5cGUpO1xuICAgIHJldHVybiB7XG4gICAgICByZWZlcmVuY2U6IGlkZW50aWZpZXIucmVmZXJlbmNlLFxuICAgICAgZGlEZXBzOiB0aGlzLl9nZXREZXBlbmRlbmNpZXNNZXRhZGF0YShpZGVudGlmaWVyLnJlZmVyZW5jZSwgZGVwZW5kZW5jaWVzLCB0aHJvd09uVW5rbm93bkRlcHMpLFxuICAgICAgbGlmZWN5Y2xlSG9va3M6IGdldEFsbExpZmVjeWNsZUhvb2tzKHRoaXMuX3JlZmxlY3RvciwgaWRlbnRpZmllci5yZWZlcmVuY2UpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRGYWN0b3J5TWV0YWRhdGEoZmFjdG9yeTogRnVuY3Rpb24sIGRlcGVuZGVuY2llczogYW55W118bnVsbCA9IG51bGwpOlxuICAgICAgY3BsLkNvbXBpbGVGYWN0b3J5TWV0YWRhdGEge1xuICAgIGZhY3RvcnkgPSByZXNvbHZlRm9yd2FyZFJlZihmYWN0b3J5KTtcbiAgICByZXR1cm4ge3JlZmVyZW5jZTogZmFjdG9yeSwgZGlEZXBzOiB0aGlzLl9nZXREZXBlbmRlbmNpZXNNZXRhZGF0YShmYWN0b3J5LCBkZXBlbmRlbmNpZXMpfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBtZXRhZGF0YSBmb3IgdGhlIGdpdmVuIHBpcGUuXG4gICAqIFRoaXMgYXNzdW1lcyBgbG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhYCBoYXMgYmVlbiBjYWxsZWQgZmlyc3QuXG4gICAqL1xuICBnZXRQaXBlTWV0YWRhdGEocGlwZVR5cGU6IGFueSk6IGNwbC5Db21waWxlUGlwZU1ldGFkYXRhfG51bGwge1xuICAgIGNvbnN0IHBpcGVNZXRhID0gdGhpcy5fcGlwZUNhY2hlLmdldChwaXBlVHlwZSk7XG4gICAgaWYgKCFwaXBlTWV0YSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgc3ludGF4RXJyb3IoXG4gICAgICAgICAgICAgIGBJbGxlZ2FsIHN0YXRlOiBnZXRQaXBlTWV0YWRhdGEgY2FuIG9ubHkgYmUgY2FsbGVkIGFmdGVyIGxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YSBmb3IgYSBtb2R1bGUgdGhhdCBkZWNsYXJlcyBpdC4gUGlwZSAke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShwaXBlVHlwZSl9LmApLFxuICAgICAgICAgIHBpcGVUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVNZXRhIHx8IG51bGw7XG4gIH1cblxuICBnZXRQaXBlU3VtbWFyeShwaXBlVHlwZTogYW55KTogY3BsLkNvbXBpbGVQaXBlU3VtbWFyeSB7XG4gICAgY29uc3QgcGlwZVN1bW1hcnkgPVxuICAgICAgICA8Y3BsLkNvbXBpbGVQaXBlU3VtbWFyeT50aGlzLl9sb2FkU3VtbWFyeShwaXBlVHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5QaXBlKTtcbiAgICBpZiAoIXBpcGVTdW1tYXJ5KSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICBzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgYElsbGVnYWwgc3RhdGU6IENvdWxkIG5vdCBsb2FkIHRoZSBzdW1tYXJ5IGZvciBwaXBlICR7c3RyaW5naWZ5VHlwZShwaXBlVHlwZSl9LmApLFxuICAgICAgICAgIHBpcGVUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVTdW1tYXJ5O1xuICB9XG5cbiAgZ2V0T3JMb2FkUGlwZU1ldGFkYXRhKHBpcGVUeXBlOiBhbnkpOiBjcGwuQ29tcGlsZVBpcGVNZXRhZGF0YSB7XG4gICAgbGV0IHBpcGVNZXRhID0gdGhpcy5fcGlwZUNhY2hlLmdldChwaXBlVHlwZSk7XG4gICAgaWYgKCFwaXBlTWV0YSkge1xuICAgICAgcGlwZU1ldGEgPSB0aGlzLl9sb2FkUGlwZU1ldGFkYXRhKHBpcGVUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVNZXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBfbG9hZFBpcGVNZXRhZGF0YShwaXBlVHlwZTogYW55KTogY3BsLkNvbXBpbGVQaXBlTWV0YWRhdGEge1xuICAgIHBpcGVUeXBlID0gcmVzb2x2ZUZvcndhcmRSZWYocGlwZVR5cGUpO1xuICAgIGNvbnN0IHBpcGVBbm5vdGF0aW9uID0gdGhpcy5fcGlwZVJlc29sdmVyLnJlc29sdmUocGlwZVR5cGUpITtcblxuICAgIGNvbnN0IHBpcGVNZXRhID0gbmV3IGNwbC5Db21waWxlUGlwZU1ldGFkYXRhKHtcbiAgICAgIHR5cGU6IHRoaXMuX2dldFR5cGVNZXRhZGF0YShwaXBlVHlwZSksXG4gICAgICBuYW1lOiBwaXBlQW5ub3RhdGlvbi5uYW1lLFxuICAgICAgcHVyZTogISFwaXBlQW5ub3RhdGlvbi5wdXJlXG4gICAgfSk7XG4gICAgdGhpcy5fcGlwZUNhY2hlLnNldChwaXBlVHlwZSwgcGlwZU1ldGEpO1xuICAgIHRoaXMuX3N1bW1hcnlDYWNoZS5zZXQocGlwZVR5cGUsIHBpcGVNZXRhLnRvU3VtbWFyeSgpKTtcbiAgICByZXR1cm4gcGlwZU1ldGE7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXBlbmRlbmNpZXNNZXRhZGF0YShcbiAgICAgIHR5cGVPckZ1bmM6IFR5cGV8RnVuY3Rpb24sIGRlcGVuZGVuY2llczogYW55W118bnVsbCxcbiAgICAgIHRocm93T25Vbmtub3duRGVwcyA9IHRydWUpOiBjcGwuQ29tcGlsZURpRGVwZW5kZW5jeU1ldGFkYXRhW10ge1xuICAgIGxldCBoYXNVbmtub3duRGVwcyA9IGZhbHNlO1xuICAgIGNvbnN0IHBhcmFtcyA9IGRlcGVuZGVuY2llcyB8fCB0aGlzLl9yZWZsZWN0b3IucGFyYW1ldGVycyh0eXBlT3JGdW5jKSB8fCBbXTtcblxuICAgIGNvbnN0IGRlcGVuZGVuY2llc01ldGFkYXRhOiBjcGwuQ29tcGlsZURpRGVwZW5kZW5jeU1ldGFkYXRhW10gPSBwYXJhbXMubWFwKChwYXJhbSkgPT4ge1xuICAgICAgbGV0IGlzQXR0cmlidXRlID0gZmFsc2U7XG4gICAgICBsZXQgaXNIb3N0ID0gZmFsc2U7XG4gICAgICBsZXQgaXNTZWxmID0gZmFsc2U7XG4gICAgICBsZXQgaXNTa2lwU2VsZiA9IGZhbHNlO1xuICAgICAgbGV0IGlzT3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgIGxldCB0b2tlbjogYW55ID0gbnVsbDtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtKSkge1xuICAgICAgICBwYXJhbS5mb3JFYWNoKChwYXJhbUVudHJ5OiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoY3JlYXRlSG9zdC5pc1R5cGVPZihwYXJhbUVudHJ5KSkge1xuICAgICAgICAgICAgaXNIb3N0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZVNlbGYuaXNUeXBlT2YocGFyYW1FbnRyeSkpIHtcbiAgICAgICAgICAgIGlzU2VsZiA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVTa2lwU2VsZi5pc1R5cGVPZihwYXJhbUVudHJ5KSkge1xuICAgICAgICAgICAgaXNTa2lwU2VsZiA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVPcHRpb25hbC5pc1R5cGVPZihwYXJhbUVudHJ5KSkge1xuICAgICAgICAgICAgaXNPcHRpb25hbCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVBdHRyaWJ1dGUuaXNUeXBlT2YocGFyYW1FbnRyeSkpIHtcbiAgICAgICAgICAgIGlzQXR0cmlidXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRva2VuID0gKHBhcmFtRW50cnkgYXMgYW55KS5hdHRyaWJ1dGVOYW1lO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlSW5qZWN0LmlzVHlwZU9mKHBhcmFtRW50cnkpKSB7XG4gICAgICAgICAgICB0b2tlbiA9IChwYXJhbUVudHJ5IGFzIGFueSkudG9rZW47XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgY3JlYXRlSW5qZWN0aW9uVG9rZW4uaXNUeXBlT2YocGFyYW1FbnRyeSkgfHxcbiAgICAgICAgICAgICAgKHBhcmFtRW50cnkgYXMgYW55KSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgICAgICAgdG9rZW4gPSBwYXJhbUVudHJ5O1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFR5cGUocGFyYW1FbnRyeSkgJiYgdG9rZW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgdG9rZW4gPSBwYXJhbUVudHJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2tlbiA9IHBhcmFtO1xuICAgICAgfVxuICAgICAgaWYgKHRva2VuID09IG51bGwpIHtcbiAgICAgICAgaGFzVW5rbm93bkRlcHMgPSB0cnVlO1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzQXR0cmlidXRlLFxuICAgICAgICBpc0hvc3QsXG4gICAgICAgIGlzU2VsZixcbiAgICAgICAgaXNTa2lwU2VsZixcbiAgICAgICAgaXNPcHRpb25hbCxcbiAgICAgICAgdG9rZW46IHRoaXMuX2dldFRva2VuTWV0YWRhdGEodG9rZW4pXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgaWYgKGhhc1Vua25vd25EZXBzKSB7XG4gICAgICBjb25zdCBkZXBzVG9rZW5zID1cbiAgICAgICAgICBkZXBlbmRlbmNpZXNNZXRhZGF0YS5tYXAoKGRlcCkgPT4gZGVwLnRva2VuID8gc3RyaW5naWZ5VHlwZShkZXAudG9rZW4pIDogJz8nKS5qb2luKCcsICcpO1xuICAgICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAgICAgYENhbid0IHJlc29sdmUgYWxsIHBhcmFtZXRlcnMgZm9yICR7c3RyaW5naWZ5VHlwZSh0eXBlT3JGdW5jKX06ICgke2RlcHNUb2tlbnN9KS5gO1xuICAgICAgaWYgKHRocm93T25Vbmtub3duRGVwcyB8fCB0aGlzLl9jb25maWcuc3RyaWN0SW5qZWN0aW9uUGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihzeW50YXhFcnJvcihtZXNzYWdlKSwgdHlwZU9yRnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYFdhcm5pbmc6ICR7bWVzc2FnZX0gVGhpcyB3aWxsIGJlY29tZSBhbiBlcnJvciBpbiBBbmd1bGFyIHY2LnhgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVwZW5kZW5jaWVzTWV0YWRhdGE7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUb2tlbk1ldGFkYXRhKHRva2VuOiBhbnkpOiBjcGwuQ29tcGlsZVRva2VuTWV0YWRhdGEge1xuICAgIHRva2VuID0gcmVzb2x2ZUZvcndhcmRSZWYodG9rZW4pO1xuICAgIGxldCBjb21waWxlVG9rZW46IGNwbC5Db21waWxlVG9rZW5NZXRhZGF0YTtcbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgY29tcGlsZVRva2VuID0ge3ZhbHVlOiB0b2tlbn07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBpbGVUb2tlbiA9IHtpZGVudGlmaWVyOiB7cmVmZXJlbmNlOiB0b2tlbn19O1xuICAgIH1cbiAgICByZXR1cm4gY29tcGlsZVRva2VuO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvdmlkZXJzTWV0YWRhdGEoXG4gICAgICBwcm92aWRlcnM6IFByb3ZpZGVyW10sIHRhcmdldEVudHJ5Q29tcG9uZW50czogY3BsLkNvbXBpbGVFbnRyeUNvbXBvbmVudE1ldGFkYXRhW10sXG4gICAgICBkZWJ1Z0luZm8/OiBzdHJpbmcsIGNvbXBpbGVQcm92aWRlcnM6IGNwbC5Db21waWxlUHJvdmlkZXJNZXRhZGF0YVtdID0gW10sXG4gICAgICB0eXBlPzogYW55KTogY3BsLkNvbXBpbGVQcm92aWRlck1ldGFkYXRhW10ge1xuICAgIHByb3ZpZGVycy5mb3JFYWNoKChwcm92aWRlcjogYW55LCBwcm92aWRlcklkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm92aWRlcikpIHtcbiAgICAgICAgdGhpcy5fZ2V0UHJvdmlkZXJzTWV0YWRhdGEocHJvdmlkZXIsIHRhcmdldEVudHJ5Q29tcG9uZW50cywgZGVidWdJbmZvLCBjb21waWxlUHJvdmlkZXJzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3ZpZGVyID0gcmVzb2x2ZUZvcndhcmRSZWYocHJvdmlkZXIpO1xuICAgICAgICBsZXQgcHJvdmlkZXJNZXRhOiBjcGwuUHJvdmlkZXJNZXRhID0gdW5kZWZpbmVkITtcbiAgICAgICAgaWYgKHByb3ZpZGVyICYmIHR5cGVvZiBwcm92aWRlciA9PT0gJ29iamVjdCcgJiYgcHJvdmlkZXIuaGFzT3duUHJvcGVydHkoJ3Byb3ZpZGUnKSkge1xuICAgICAgICAgIHRoaXMuX3ZhbGlkYXRlUHJvdmlkZXIocHJvdmlkZXIpO1xuICAgICAgICAgIHByb3ZpZGVyTWV0YSA9IG5ldyBjcGwuUHJvdmlkZXJNZXRhKHByb3ZpZGVyLnByb3ZpZGUsIHByb3ZpZGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkVHlwZShwcm92aWRlcikpIHtcbiAgICAgICAgICBwcm92aWRlck1ldGEgPSBuZXcgY3BsLlByb3ZpZGVyTWV0YShwcm92aWRlciwge3VzZUNsYXNzOiBwcm92aWRlcn0pO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgYEVuY291bnRlcmVkIHVuZGVmaW5lZCBwcm92aWRlciEgVXN1YWxseSB0aGlzIG1lYW5zIHlvdSBoYXZlIGEgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLiBUaGlzIG1pZ2h0IGJlIGNhdXNlZCBieSB1c2luZyAnYmFycmVsJyBpbmRleC50cyBmaWxlcy5gKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHByb3ZpZGVyc0luZm8gPVxuICAgICAgICAgICAgICBwcm92aWRlcnNcbiAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAgICAgICAgICAgKHNvRmFyOiBzdHJpbmdbXSwgc2VlblByb3ZpZGVyOiBhbnksIHNlZW5Qcm92aWRlcklkeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VlblByb3ZpZGVySWR4IDwgcHJvdmlkZXJJZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc29GYXIucHVzaChgJHtzdHJpbmdpZnlUeXBlKHNlZW5Qcm92aWRlcil9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlZW5Qcm92aWRlcklkeCA9PSBwcm92aWRlcklkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzb0Zhci5wdXNoKGA/JHtzdHJpbmdpZnlUeXBlKHNlZW5Qcm92aWRlcil9P2ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWVuUHJvdmlkZXJJZHggPT0gcHJvdmlkZXJJZHggKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvRmFyLnB1c2goJy4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvRmFyO1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW10pXG4gICAgICAgICAgICAgICAgICAuam9pbignLCAnKTtcbiAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgc3ludGF4RXJyb3IoYEludmFsaWQgJHtcbiAgICAgICAgICAgICAgICAgIGRlYnVnSW5mbyA/XG4gICAgICAgICAgICAgICAgICAgICAgZGVidWdJbmZvIDpcbiAgICAgICAgICAgICAgICAgICAgICAncHJvdmlkZXInfSAtIG9ubHkgaW5zdGFuY2VzIG9mIFByb3ZpZGVyIGFuZCBUeXBlIGFyZSBhbGxvd2VkLCBnb3Q6IFske1xuICAgICAgICAgICAgICAgICAgcHJvdmlkZXJzSW5mb31dYCksXG4gICAgICAgICAgICAgIHR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvdmlkZXJNZXRhLnRva2VuID09PVxuICAgICAgICAgICAgdGhpcy5fcmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5BTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTKSkge1xuICAgICAgICAgIHRhcmdldEVudHJ5Q29tcG9uZW50cy5wdXNoKC4uLnRoaXMuX2dldEVudHJ5Q29tcG9uZW50c0Zyb21Qcm92aWRlcihwcm92aWRlck1ldGEsIHR5cGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21waWxlUHJvdmlkZXJzLnB1c2godGhpcy5nZXRQcm92aWRlck1ldGFkYXRhKHByb3ZpZGVyTWV0YSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbXBpbGVQcm92aWRlcnM7XG4gIH1cblxuICBwcml2YXRlIF92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAocHJvdmlkZXIuaGFzT3duUHJvcGVydHkoJ3VzZUNsYXNzJykgJiYgcHJvdmlkZXIudXNlQ2xhc3MgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3Ioc3ludGF4RXJyb3IoYEludmFsaWQgcHJvdmlkZXIgZm9yICR7XG4gICAgICAgICAgc3RyaW5naWZ5VHlwZShwcm92aWRlci5wcm92aWRlKX0uIHVzZUNsYXNzIGNhbm5vdCBiZSAke3Byb3ZpZGVyLnVzZUNsYXNzfS5cbiAgICAgICAgICAgVXN1YWxseSBpdCBoYXBwZW5zIHdoZW46XG4gICAgICAgICAgIDEuIFRoZXJlJ3MgYSBjaXJjdWxhciBkZXBlbmRlbmN5IChtaWdodCBiZSBjYXVzZWQgYnkgdXNpbmcgaW5kZXgudHMgKGJhcnJlbCkgZmlsZXMpLlxuICAgICAgICAgICAyLiBDbGFzcyB3YXMgdXNlZCBiZWZvcmUgaXQgd2FzIGRlY2xhcmVkLiBVc2UgZm9yd2FyZFJlZiBpbiB0aGlzIGNhc2UuYCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEVudHJ5Q29tcG9uZW50c0Zyb21Qcm92aWRlcihwcm92aWRlcjogY3BsLlByb3ZpZGVyTWV0YSwgdHlwZT86IGFueSk6XG4gICAgICBjcGwuQ29tcGlsZUVudHJ5Q29tcG9uZW50TWV0YWRhdGFbXSB7XG4gICAgY29uc3QgY29tcG9uZW50czogY3BsLkNvbXBpbGVFbnRyeUNvbXBvbmVudE1ldGFkYXRhW10gPSBbXTtcbiAgICBjb25zdCBjb2xsZWN0ZWRJZGVudGlmaWVyczogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuXG4gICAgaWYgKHByb3ZpZGVyLnVzZUZhY3RvcnkgfHwgcHJvdmlkZXIudXNlRXhpc3RpbmcgfHwgcHJvdmlkZXIudXNlQ2xhc3MpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIHN5bnRheEVycm9yKGBUaGUgQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUyB0b2tlbiBvbmx5IHN1cHBvcnRzIHVzZVZhbHVlIWApLCB0eXBlKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBpZiAoIXByb3ZpZGVyLm11bHRpKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICBzeW50YXhFcnJvcihgVGhlIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMgdG9rZW4gb25seSBzdXBwb3J0cyAnbXVsdGkgPSB0cnVlJyFgKSxcbiAgICAgICAgICB0eXBlKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBleHRyYWN0SWRlbnRpZmllcnMocHJvdmlkZXIudXNlVmFsdWUsIGNvbGxlY3RlZElkZW50aWZpZXJzKTtcbiAgICBjb2xsZWN0ZWRJZGVudGlmaWVycy5mb3JFYWNoKChpZGVudGlmaWVyKSA9PiB7XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMuX2dldEVudHJ5Q29tcG9uZW50TWV0YWRhdGEoaWRlbnRpZmllci5yZWZlcmVuY2UsIGZhbHNlKTtcbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBjb21wb25lbnRzLnB1c2goZW50cnkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RW50cnlDb21wb25lbnRNZXRhZGF0YShkaXJUeXBlOiBhbnksIHRocm93SWZOb3RGb3VuZCA9IHRydWUpOlxuICAgICAgY3BsLkNvbXBpbGVFbnRyeUNvbXBvbmVudE1ldGFkYXRhfG51bGwge1xuICAgIGNvbnN0IGRpck1ldGEgPSB0aGlzLmdldE5vbk5vcm1hbGl6ZWREaXJlY3RpdmVNZXRhZGF0YShkaXJUeXBlKTtcbiAgICBpZiAoZGlyTWV0YSAmJiBkaXJNZXRhLm1ldGFkYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICByZXR1cm4ge2NvbXBvbmVudFR5cGU6IGRpclR5cGUsIGNvbXBvbmVudEZhY3Rvcnk6IGRpck1ldGEubWV0YWRhdGEuY29tcG9uZW50RmFjdG9yeSF9O1xuICAgIH1cbiAgICBjb25zdCBkaXJTdW1tYXJ5ID1cbiAgICAgICAgPGNwbC5Db21waWxlRGlyZWN0aXZlU3VtbWFyeT50aGlzLl9sb2FkU3VtbWFyeShkaXJUeXBlLCBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLkRpcmVjdGl2ZSk7XG4gICAgaWYgKGRpclN1bW1hcnkgJiYgZGlyU3VtbWFyeS5pc0NvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHtjb21wb25lbnRUeXBlOiBkaXJUeXBlLCBjb21wb25lbnRGYWN0b3J5OiBkaXJTdW1tYXJ5LmNvbXBvbmVudEZhY3RvcnkhfTtcbiAgICB9XG4gICAgaWYgKHRocm93SWZOb3RGb3VuZCkge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3IoYCR7ZGlyVHlwZS5uYW1lfSBjYW5ub3QgYmUgdXNlZCBhcyBhbiBlbnRyeSBjb21wb25lbnQuYCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SW5qZWN0YWJsZVR5cGVNZXRhZGF0YSh0eXBlOiBUeXBlLCBkZXBlbmRlbmNpZXM6IGFueVtdfG51bGwgPSBudWxsKTpcbiAgICAgIGNwbC5Db21waWxlVHlwZU1ldGFkYXRhIHtcbiAgICBjb25zdCB0eXBlU3VtbWFyeSA9IHRoaXMuX2xvYWRTdW1tYXJ5KHR5cGUsIGNwbC5Db21waWxlU3VtbWFyeUtpbmQuSW5qZWN0YWJsZSk7XG4gICAgaWYgKHR5cGVTdW1tYXJ5KSB7XG4gICAgICByZXR1cm4gdHlwZVN1bW1hcnkudHlwZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2dldFR5cGVNZXRhZGF0YSh0eXBlLCBkZXBlbmRlbmNpZXMpO1xuICB9XG5cbiAgZ2V0UHJvdmlkZXJNZXRhZGF0YShwcm92aWRlcjogY3BsLlByb3ZpZGVyTWV0YSk6IGNwbC5Db21waWxlUHJvdmlkZXJNZXRhZGF0YSB7XG4gICAgbGV0IGNvbXBpbGVEZXBzOiBjcGwuQ29tcGlsZURpRGVwZW5kZW5jeU1ldGFkYXRhW10gPSB1bmRlZmluZWQhO1xuICAgIGxldCBjb21waWxlVHlwZU1ldGFkYXRhOiBjcGwuQ29tcGlsZVR5cGVNZXRhZGF0YSA9IG51bGwhO1xuICAgIGxldCBjb21waWxlRmFjdG9yeU1ldGFkYXRhOiBjcGwuQ29tcGlsZUZhY3RvcnlNZXRhZGF0YSA9IG51bGwhO1xuICAgIGxldCB0b2tlbjogY3BsLkNvbXBpbGVUb2tlbk1ldGFkYXRhID0gdGhpcy5fZ2V0VG9rZW5NZXRhZGF0YShwcm92aWRlci50b2tlbik7XG5cbiAgICBpZiAocHJvdmlkZXIudXNlQ2xhc3MpIHtcbiAgICAgIGNvbXBpbGVUeXBlTWV0YWRhdGEgPVxuICAgICAgICAgIHRoaXMuX2dldEluamVjdGFibGVUeXBlTWV0YWRhdGEocHJvdmlkZXIudXNlQ2xhc3MsIHByb3ZpZGVyLmRlcGVuZGVuY2llcyk7XG4gICAgICBjb21waWxlRGVwcyA9IGNvbXBpbGVUeXBlTWV0YWRhdGEuZGlEZXBzO1xuICAgICAgaWYgKHByb3ZpZGVyLnRva2VuID09PSBwcm92aWRlci51c2VDbGFzcykge1xuICAgICAgICAvLyB1c2UgdGhlIGNvbXBpbGVUeXBlTWV0YWRhdGEgYXMgaXQgY29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgbGlmZWN5Y2xlSG9va3MuLi5cbiAgICAgICAgdG9rZW4gPSB7aWRlbnRpZmllcjogY29tcGlsZVR5cGVNZXRhZGF0YX07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwcm92aWRlci51c2VGYWN0b3J5KSB7XG4gICAgICBjb21waWxlRmFjdG9yeU1ldGFkYXRhID0gdGhpcy5fZ2V0RmFjdG9yeU1ldGFkYXRhKHByb3ZpZGVyLnVzZUZhY3RvcnksIHByb3ZpZGVyLmRlcGVuZGVuY2llcyk7XG4gICAgICBjb21waWxlRGVwcyA9IGNvbXBpbGVGYWN0b3J5TWV0YWRhdGEuZGlEZXBzO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b2tlbjogdG9rZW4sXG4gICAgICB1c2VDbGFzczogY29tcGlsZVR5cGVNZXRhZGF0YSxcbiAgICAgIHVzZVZhbHVlOiBwcm92aWRlci51c2VWYWx1ZSxcbiAgICAgIHVzZUZhY3Rvcnk6IGNvbXBpbGVGYWN0b3J5TWV0YWRhdGEsXG4gICAgICB1c2VFeGlzdGluZzogcHJvdmlkZXIudXNlRXhpc3RpbmcgPyB0aGlzLl9nZXRUb2tlbk1ldGFkYXRhKHByb3ZpZGVyLnVzZUV4aXN0aW5nKSA6IHVuZGVmaW5lZCxcbiAgICAgIGRlcHM6IGNvbXBpbGVEZXBzLFxuICAgICAgbXVsdGk6IHByb3ZpZGVyLm11bHRpXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFF1ZXJpZXNNZXRhZGF0YShcbiAgICAgIHF1ZXJpZXM6IHtba2V5OiBzdHJpbmddOiBRdWVyeX0sIGlzVmlld1F1ZXJ5OiBib29sZWFuLFxuICAgICAgZGlyZWN0aXZlVHlwZTogVHlwZSk6IGNwbC5Db21waWxlUXVlcnlNZXRhZGF0YVtdIHtcbiAgICBjb25zdCByZXM6IGNwbC5Db21waWxlUXVlcnlNZXRhZGF0YVtdID0gW107XG5cbiAgICBPYmplY3Qua2V5cyhxdWVyaWVzKS5mb3JFYWNoKChwcm9wZXJ0eU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSBxdWVyaWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICBpZiAocXVlcnkuaXNWaWV3UXVlcnkgPT09IGlzVmlld1F1ZXJ5KSB7XG4gICAgICAgIHJlcy5wdXNoKHRoaXMuX2dldFF1ZXJ5TWV0YWRhdGEocXVlcnksIHByb3BlcnR5TmFtZSwgZGlyZWN0aXZlVHlwZSkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgX3F1ZXJ5VmFyQmluZGluZ3Moc2VsZWN0b3I6IGFueSk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gc2VsZWN0b3Iuc3BsaXQoL1xccyosXFxzKi8pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UXVlcnlNZXRhZGF0YShxOiBRdWVyeSwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIHR5cGVPckZ1bmM6IFR5cGV8RnVuY3Rpb24pOlxuICAgICAgY3BsLkNvbXBpbGVRdWVyeU1ldGFkYXRhIHtcbiAgICBsZXQgc2VsZWN0b3JzOiBjcGwuQ29tcGlsZVRva2VuTWV0YWRhdGFbXTtcbiAgICBpZiAodHlwZW9mIHEuc2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZWxlY3RvcnMgPVxuICAgICAgICAgIHRoaXMuX3F1ZXJ5VmFyQmluZGluZ3MocS5zZWxlY3RvcikubWFwKHZhck5hbWUgPT4gdGhpcy5fZ2V0VG9rZW5NZXRhZGF0YSh2YXJOYW1lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghcS5zZWxlY3Rvcikge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgIHN5bnRheEVycm9yKGBDYW4ndCBjb25zdHJ1Y3QgYSBxdWVyeSBmb3IgdGhlIHByb3BlcnR5IFwiJHtwcm9wZXJ0eU5hbWV9XCIgb2YgXCIke1xuICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUodHlwZU9yRnVuYyl9XCIgc2luY2UgdGhlIHF1ZXJ5IHNlbGVjdG9yIHdhc24ndCBkZWZpbmVkLmApLFxuICAgICAgICAgICAgdHlwZU9yRnVuYyk7XG4gICAgICAgIHNlbGVjdG9ycyA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0b3JzID0gW3RoaXMuX2dldFRva2VuTWV0YWRhdGEocS5zZWxlY3RvcildO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RvcnMsXG4gICAgICBmaXJzdDogcS5maXJzdCxcbiAgICAgIGRlc2NlbmRhbnRzOiBxLmRlc2NlbmRhbnRzLFxuICAgICAgcHJvcGVydHlOYW1lLFxuICAgICAgcmVhZDogcS5yZWFkID8gdGhpcy5fZ2V0VG9rZW5NZXRhZGF0YShxLnJlYWQpIDogbnVsbCEsXG4gICAgICBzdGF0aWM6IHEuc3RhdGljXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcG9ydEVycm9yKGVycm9yOiBhbnksIHR5cGU/OiBhbnksIG90aGVyVHlwZT86IGFueSkge1xuICAgIGlmICh0aGlzLl9lcnJvckNvbGxlY3Rvcikge1xuICAgICAgdGhpcy5fZXJyb3JDb2xsZWN0b3IoZXJyb3IsIHR5cGUpO1xuICAgICAgaWYgKG90aGVyVHlwZSkge1xuICAgICAgICB0aGlzLl9lcnJvckNvbGxlY3RvcihlcnJvciwgb3RoZXJUeXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheSh0cmVlOiBhbnlbXSwgb3V0OiBBcnJheTxhbnk+ID0gW10pOiBBcnJheTxhbnk+IHtcbiAgaWYgKHRyZWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyZWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSByZXNvbHZlRm9yd2FyZFJlZih0cmVlW2ldKTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIGZsYXR0ZW5BcnJheShpdGVtLCBvdXQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGRlZHVwZUFycmF5KGFycmF5OiBhbnlbXSk6IEFycmF5PGFueT4ge1xuICBpZiAoYXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XG4gIH1cbiAgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQW5kRGVkdXBlQXJyYXkodHJlZTogYW55W10pOiBBcnJheTxhbnk+IHtcbiAgcmV0dXJuIGRlZHVwZUFycmF5KGZsYXR0ZW5BcnJheSh0cmVlKSk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRUeXBlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuICh2YWx1ZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkgfHwgKHZhbHVlIGluc3RhbmNlb2YgVHlwZSk7XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJZGVudGlmaWVycyh2YWx1ZTogYW55LCB0YXJnZXRJZGVudGlmaWVyczogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSkge1xuICB2aXNpdFZhbHVlKHZhbHVlLCBuZXcgX0NvbXBpbGVWYWx1ZUNvbnZlcnRlcigpLCB0YXJnZXRJZGVudGlmaWVycyk7XG59XG5cbmNsYXNzIF9Db21waWxlVmFsdWVDb252ZXJ0ZXIgZXh0ZW5kcyBWYWx1ZVRyYW5zZm9ybWVyIHtcbiAgdmlzaXRPdGhlcih2YWx1ZTogYW55LCB0YXJnZXRJZGVudGlmaWVyczogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSk6IGFueSB7XG4gICAgdGFyZ2V0SWRlbnRpZmllcnMucHVzaCh7cmVmZXJlbmNlOiB2YWx1ZX0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVR5cGUodHlwZTogYW55KTogc3RyaW5nIHtcbiAgaWYgKHR5cGUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICByZXR1cm4gYCR7dHlwZS5uYW1lfSBpbiAke3R5cGUuZmlsZVBhdGh9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5KHR5cGUpO1xuICB9XG59XG5cbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgYSBjb21wb25lbnQgaXMgc3RpbGwgYmVpbmcgbG9hZGVkIGluIGEgc3luY2hyb25vdXMgY29tcGlsZS5cbiAqL1xuZnVuY3Rpb24gY29tcG9uZW50U3RpbGxMb2FkaW5nRXJyb3IoY29tcFR5cGU6IFR5cGUpIHtcbiAgY29uc3QgZXJyb3IgPVxuICAgICAgRXJyb3IoYENhbid0IGNvbXBpbGUgc3luY2hyb25vdXNseSBhcyAke3N0cmluZ2lmeShjb21wVHlwZSl9IGlzIHN0aWxsIGJlaW5nIGxvYWRlZCFgKTtcbiAgKGVycm9yIGFzIGFueSlbRVJST1JfQ09NUE9ORU5UX1RZUEVdID0gY29tcFR5cGU7XG4gIHJldHVybiBlcnJvcjtcbn1cbiJdfQ==
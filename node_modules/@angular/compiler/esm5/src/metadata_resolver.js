/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
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
export var ERROR_COMPONENT_TYPE = 'ngComponentType';
// Design notes:
// - don't lazily create metadata:
//   For some metadata, we need to do async work sometimes,
//   so the user has to kick off this loading.
//   But we want to report errors even when the async work is
//   not required to check that the user would have been able
//   to wait correctly.
var CompileMetadataResolver = /** @class */ (function () {
    function CompileMetadataResolver(_config, _htmlParser, _ngModuleResolver, _directiveResolver, _pipeResolver, _summaryResolver, _schemaRegistry, _directiveNormalizer, _console, _staticSymbolCache, _reflector, _errorCollector) {
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
    CompileMetadataResolver.prototype.getReflector = function () {
        return this._reflector;
    };
    CompileMetadataResolver.prototype.clearCacheFor = function (type) {
        var dirMeta = this._directiveCache.get(type);
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
    };
    CompileMetadataResolver.prototype.clearCache = function () {
        this._directiveCache.clear();
        this._nonNormalizedDirectiveCache.clear();
        this._summaryCache.clear();
        this._pipeCache.clear();
        this._ngModuleCache.clear();
        this._ngModuleOfTypes.clear();
        this._directiveNormalizer.clearCache();
    };
    CompileMetadataResolver.prototype._createProxyClass = function (baseType, name) {
        var delegate = null;
        var proxyClass = function () {
            if (!delegate) {
                throw new Error("Illegal state: Class " + name + " for type " + stringify(baseType) + " is not compiled yet!");
            }
            return delegate.apply(this, arguments);
        };
        proxyClass.setDelegate = function (d) {
            delegate = d;
            proxyClass.prototype = d.prototype;
        };
        // Make stringify work correctly
        proxyClass.overriddenName = name;
        return proxyClass;
    };
    CompileMetadataResolver.prototype.getGeneratedClass = function (dirType, name) {
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath), name);
        }
        else {
            return this._createProxyClass(dirType, name);
        }
    };
    CompileMetadataResolver.prototype.getComponentViewClass = function (dirType) {
        return this.getGeneratedClass(dirType, cpl.viewClassName(dirType, 0));
    };
    CompileMetadataResolver.prototype.getHostComponentViewClass = function (dirType) {
        return this.getGeneratedClass(dirType, cpl.hostViewClassName(dirType));
    };
    CompileMetadataResolver.prototype.getHostComponentType = function (dirType) {
        var name = cpl.identifierName({ reference: dirType }) + "_Host";
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(dirType.filePath, name);
        }
        return this._createProxyClass(dirType, name);
    };
    CompileMetadataResolver.prototype.getRendererType = function (dirType) {
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath), cpl.rendererTypeName(dirType));
        }
        else {
            // returning an object as proxy,
            // that we fill later during runtime compilation.
            return {};
        }
    };
    CompileMetadataResolver.prototype.getComponentFactory = function (selector, dirType, inputs, outputs) {
        if (dirType instanceof StaticSymbol) {
            return this._staticSymbolCache.get(ngfactoryFilePath(dirType.filePath), cpl.componentFactoryName(dirType));
        }
        else {
            var hostView = this.getHostComponentViewClass(dirType);
            // Note: ngContentSelectors will be filled later once the template is
            // loaded.
            var createComponentFactory = this._reflector.resolveExternalReference(Identifiers.createComponentFactory);
            return createComponentFactory(selector, dirType, hostView, inputs, outputs, []);
        }
    };
    CompileMetadataResolver.prototype.initComponentFactory = function (factory, ngContentSelectors) {
        var _a;
        if (!(factory instanceof StaticSymbol)) {
            (_a = factory.ngContentSelectors).push.apply(_a, __spread(ngContentSelectors));
        }
    };
    CompileMetadataResolver.prototype._loadSummary = function (type, kind) {
        var typeSummary = this._summaryCache.get(type);
        if (!typeSummary) {
            var summary = this._summaryResolver.resolveSummary(type);
            typeSummary = summary ? summary.type : null;
            this._summaryCache.set(type, typeSummary || null);
        }
        return typeSummary && typeSummary.summaryKind === kind ? typeSummary : null;
    };
    CompileMetadataResolver.prototype.getHostComponentMetadata = function (compMeta, hostViewType) {
        var hostType = this.getHostComponentType(compMeta.type.reference);
        if (!hostViewType) {
            hostViewType = this.getHostComponentViewClass(hostType);
        }
        // Note: ! is ok here as this method should only be called with normalized directive
        // metadata, which always fills in the selector.
        var template = CssSelector.parse(compMeta.selector)[0].getMatchingElementTemplate();
        var templateUrl = '';
        var htmlAst = this._htmlParser.parse(template, templateUrl);
        return cpl.CompileDirectiveMetadata.create({
            isHost: true,
            type: { reference: hostType, diDeps: [], lifecycleHooks: [] },
            template: new cpl.CompileTemplateMetadata({
                encapsulation: ViewEncapsulation.None,
                template: template,
                templateUrl: templateUrl,
                htmlAst: htmlAst,
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
    };
    CompileMetadataResolver.prototype.loadDirectiveMetadata = function (ngModuleType, directiveType, isSync) {
        var _this = this;
        if (this._directiveCache.has(directiveType)) {
            return null;
        }
        directiveType = resolveForwardRef(directiveType);
        var _a = this.getNonNormalizedDirectiveMetadata(directiveType), annotation = _a.annotation, metadata = _a.metadata;
        var createDirectiveMetadata = function (templateMetadata) {
            var normalizedDirMeta = new cpl.CompileDirectiveMetadata({
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
                _this.initComponentFactory(metadata.componentFactory, templateMetadata.ngContentSelectors);
            }
            _this._directiveCache.set(directiveType, normalizedDirMeta);
            _this._summaryCache.set(directiveType, normalizedDirMeta.toSummary());
            return null;
        };
        if (metadata.isComponent) {
            var template = metadata.template;
            var templateMeta = this._directiveNormalizer.normalizeTemplate({
                ngModuleType: ngModuleType,
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
    };
    CompileMetadataResolver.prototype.getNonNormalizedDirectiveMetadata = function (directiveType) {
        var _this = this;
        directiveType = resolveForwardRef(directiveType);
        if (!directiveType) {
            return null;
        }
        var cacheEntry = this._nonNormalizedDirectiveCache.get(directiveType);
        if (cacheEntry) {
            return cacheEntry;
        }
        var dirMeta = this._directiveResolver.resolve(directiveType, false);
        if (!dirMeta) {
            return null;
        }
        var nonNormalizedTemplateMetadata = undefined;
        if (createComponent.isTypeOf(dirMeta)) {
            // component
            var compMeta = dirMeta;
            assertArrayOfStrings('styles', compMeta.styles);
            assertArrayOfStrings('styleUrls', compMeta.styleUrls);
            assertInterpolationSymbols('interpolation', compMeta.interpolation);
            var animations = compMeta.animations;
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
        var changeDetectionStrategy = null;
        var viewProviders = [];
        var entryComponentMetadata = [];
        var selector = dirMeta.selector;
        if (createComponent.isTypeOf(dirMeta)) {
            // Component
            var compMeta = dirMeta;
            changeDetectionStrategy = compMeta.changeDetection;
            if (compMeta.viewProviders) {
                viewProviders = this._getProvidersMetadata(compMeta.viewProviders, entryComponentMetadata, "viewProviders for \"" + stringifyType(directiveType) + "\"", [], directiveType);
            }
            if (compMeta.entryComponents) {
                entryComponentMetadata = flattenAndDedupeArray(compMeta.entryComponents)
                    .map(function (type) { return _this._getEntryComponentMetadata(type); })
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
        var providers = [];
        if (dirMeta.providers != null) {
            providers = this._getProvidersMetadata(dirMeta.providers, entryComponentMetadata, "providers for \"" + stringifyType(directiveType) + "\"", [], directiveType);
        }
        var queries = [];
        var viewQueries = [];
        if (dirMeta.queries != null) {
            queries = this._getQueriesMetadata(dirMeta.queries, false, directiveType);
            viewQueries = this._getQueriesMetadata(dirMeta.queries, true, directiveType);
        }
        var metadata = cpl.CompileDirectiveMetadata.create({
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
        cacheEntry = { metadata: metadata, annotation: dirMeta };
        this._nonNormalizedDirectiveCache.set(directiveType, cacheEntry);
        return cacheEntry;
    };
    /**
     * Gets the metadata for the given directive.
     * This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.
     */
    CompileMetadataResolver.prototype.getDirectiveMetadata = function (directiveType) {
        var dirMeta = this._directiveCache.get(directiveType);
        if (!dirMeta) {
            this._reportError(syntaxError("Illegal state: getDirectiveMetadata can only be called after loadNgModuleDirectiveAndPipeMetadata for a module that declares it. Directive " + stringifyType(directiveType) + "."), directiveType);
        }
        return dirMeta;
    };
    CompileMetadataResolver.prototype.getDirectiveSummary = function (dirType) {
        var dirSummary = this._loadSummary(dirType, cpl.CompileSummaryKind.Directive);
        if (!dirSummary) {
            this._reportError(syntaxError("Illegal state: Could not load the summary for directive " + stringifyType(dirType) + "."), dirType);
        }
        return dirSummary;
    };
    CompileMetadataResolver.prototype.isDirective = function (type) {
        return !!this._loadSummary(type, cpl.CompileSummaryKind.Directive) ||
            this._directiveResolver.isDirective(type);
    };
    CompileMetadataResolver.prototype.isAbstractDirective = function (type) {
        var summary = this._loadSummary(type, cpl.CompileSummaryKind.Directive);
        if (summary && !summary.isComponent) {
            return !summary.selector;
        }
        var meta = this._directiveResolver.resolve(type, false);
        if (meta && !createComponent.isTypeOf(meta)) {
            return !meta.selector;
        }
        return false;
    };
    CompileMetadataResolver.prototype.isPipe = function (type) {
        return !!this._loadSummary(type, cpl.CompileSummaryKind.Pipe) ||
            this._pipeResolver.isPipe(type);
    };
    CompileMetadataResolver.prototype.isNgModule = function (type) {
        return !!this._loadSummary(type, cpl.CompileSummaryKind.NgModule) ||
            this._ngModuleResolver.isNgModule(type);
    };
    CompileMetadataResolver.prototype.getNgModuleSummary = function (moduleType, alreadyCollecting) {
        if (alreadyCollecting === void 0) { alreadyCollecting = null; }
        var moduleSummary = this._loadSummary(moduleType, cpl.CompileSummaryKind.NgModule);
        if (!moduleSummary) {
            var moduleMeta = this.getNgModuleMetadata(moduleType, false, alreadyCollecting);
            moduleSummary = moduleMeta ? moduleMeta.toSummary() : null;
            if (moduleSummary) {
                this._summaryCache.set(moduleType, moduleSummary);
            }
        }
        return moduleSummary;
    };
    /**
     * Loads the declared directives and pipes of an NgModule.
     */
    CompileMetadataResolver.prototype.loadNgModuleDirectiveAndPipeMetadata = function (moduleType, isSync, throwIfNotFound) {
        var _this = this;
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        var ngModule = this.getNgModuleMetadata(moduleType, throwIfNotFound);
        var loading = [];
        if (ngModule) {
            ngModule.declaredDirectives.forEach(function (id) {
                var promise = _this.loadDirectiveMetadata(moduleType, id.reference, isSync);
                if (promise) {
                    loading.push(promise);
                }
            });
            ngModule.declaredPipes.forEach(function (id) { return _this._loadPipeMetadata(id.reference); });
        }
        return Promise.all(loading);
    };
    CompileMetadataResolver.prototype.getShallowModuleMetadata = function (moduleType) {
        var compileMeta = this._shallowModuleCache.get(moduleType);
        if (compileMeta) {
            return compileMeta;
        }
        var ngModuleMeta = findLast(this._reflector.shallowAnnotations(moduleType), createNgModule.isTypeOf);
        compileMeta = {
            type: this._getTypeMetadata(moduleType),
            rawExports: ngModuleMeta.exports,
            rawImports: ngModuleMeta.imports,
            rawProviders: ngModuleMeta.providers,
        };
        this._shallowModuleCache.set(moduleType, compileMeta);
        return compileMeta;
    };
    CompileMetadataResolver.prototype.getNgModuleMetadata = function (moduleType, throwIfNotFound, alreadyCollecting) {
        var _this = this;
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        if (alreadyCollecting === void 0) { alreadyCollecting = null; }
        moduleType = resolveForwardRef(moduleType);
        var compileMeta = this._ngModuleCache.get(moduleType);
        if (compileMeta) {
            return compileMeta;
        }
        var meta = this._ngModuleResolver.resolve(moduleType, throwIfNotFound);
        if (!meta) {
            return null;
        }
        var declaredDirectives = [];
        var exportedNonModuleIdentifiers = [];
        var declaredPipes = [];
        var importedModules = [];
        var exportedModules = [];
        var providers = [];
        var entryComponents = [];
        var bootstrapComponents = [];
        var schemas = [];
        if (meta.imports) {
            flattenAndDedupeArray(meta.imports).forEach(function (importedType) {
                var importedModuleType = undefined;
                if (isValidType(importedType)) {
                    importedModuleType = importedType;
                }
                else if (importedType && importedType.ngModule) {
                    var moduleWithProviders = importedType;
                    importedModuleType = moduleWithProviders.ngModule;
                    if (moduleWithProviders.providers) {
                        providers.push.apply(providers, __spread(_this._getProvidersMetadata(moduleWithProviders.providers, entryComponents, "provider for the NgModule '" + stringifyType(importedModuleType) + "'", [], importedType)));
                    }
                }
                if (importedModuleType) {
                    if (_this._checkSelfImport(moduleType, importedModuleType))
                        return;
                    if (!alreadyCollecting)
                        alreadyCollecting = new Set();
                    if (alreadyCollecting.has(importedModuleType)) {
                        _this._reportError(syntaxError(_this._getTypeDescriptor(importedModuleType) + " '" + stringifyType(importedType) + "' is imported recursively by the module '" + stringifyType(moduleType) + "'."), moduleType);
                        return;
                    }
                    alreadyCollecting.add(importedModuleType);
                    var importedModuleSummary = _this.getNgModuleSummary(importedModuleType, alreadyCollecting);
                    alreadyCollecting.delete(importedModuleType);
                    if (!importedModuleSummary) {
                        _this._reportError(syntaxError("Unexpected " + _this._getTypeDescriptor(importedType) + " '" + stringifyType(importedType) + "' imported by the module '" + stringifyType(moduleType) + "'. Please add a @NgModule annotation."), moduleType);
                        return;
                    }
                    importedModules.push(importedModuleSummary);
                }
                else {
                    _this._reportError(syntaxError("Unexpected value '" + stringifyType(importedType) + "' imported by the module '" + stringifyType(moduleType) + "'"), moduleType);
                    return;
                }
            });
        }
        if (meta.exports) {
            flattenAndDedupeArray(meta.exports).forEach(function (exportedType) {
                if (!isValidType(exportedType)) {
                    _this._reportError(syntaxError("Unexpected value '" + stringifyType(exportedType) + "' exported by the module '" + stringifyType(moduleType) + "'"), moduleType);
                    return;
                }
                if (!alreadyCollecting)
                    alreadyCollecting = new Set();
                if (alreadyCollecting.has(exportedType)) {
                    _this._reportError(syntaxError(_this._getTypeDescriptor(exportedType) + " '" + stringify(exportedType) + "' is exported recursively by the module '" + stringifyType(moduleType) + "'"), moduleType);
                    return;
                }
                alreadyCollecting.add(exportedType);
                var exportedModuleSummary = _this.getNgModuleSummary(exportedType, alreadyCollecting);
                alreadyCollecting.delete(exportedType);
                if (exportedModuleSummary) {
                    exportedModules.push(exportedModuleSummary);
                }
                else {
                    exportedNonModuleIdentifiers.push(_this._getIdentifierMetadata(exportedType));
                }
            });
        }
        // Note: This will be modified later, so we rely on
        // getting a new instance every time!
        var transitiveModule = this._getTransitiveNgModuleMetadata(importedModules, exportedModules);
        if (meta.declarations) {
            flattenAndDedupeArray(meta.declarations).forEach(function (declaredType) {
                if (!isValidType(declaredType)) {
                    _this._reportError(syntaxError("Unexpected value '" + stringifyType(declaredType) + "' declared by the module '" + stringifyType(moduleType) + "'"), moduleType);
                    return;
                }
                var declaredIdentifier = _this._getIdentifierMetadata(declaredType);
                if (_this.isDirective(declaredType)) {
                    if (_this.isAbstractDirective(declaredType)) {
                        _this._reportError(syntaxError("Directive " + stringifyType(declaredType) + " has no selector, please add it!"), declaredType);
                    }
                    transitiveModule.addDirective(declaredIdentifier);
                    declaredDirectives.push(declaredIdentifier);
                    _this._addTypeToModule(declaredType, moduleType);
                }
                else if (_this.isPipe(declaredType)) {
                    transitiveModule.addPipe(declaredIdentifier);
                    transitiveModule.pipes.push(declaredIdentifier);
                    declaredPipes.push(declaredIdentifier);
                    _this._addTypeToModule(declaredType, moduleType);
                }
                else {
                    _this._reportError(syntaxError("Unexpected " + _this._getTypeDescriptor(declaredType) + " '" + stringifyType(declaredType) + "' declared by the module '" + stringifyType(moduleType) + "'. Please add a @Pipe/@Directive/@Component annotation."), moduleType);
                    return;
                }
            });
        }
        var exportedDirectives = [];
        var exportedPipes = [];
        exportedNonModuleIdentifiers.forEach(function (exportedId) {
            if (transitiveModule.directivesSet.has(exportedId.reference)) {
                exportedDirectives.push(exportedId);
                transitiveModule.addExportedDirective(exportedId);
            }
            else if (transitiveModule.pipesSet.has(exportedId.reference)) {
                exportedPipes.push(exportedId);
                transitiveModule.addExportedPipe(exportedId);
            }
            else {
                _this._reportError(syntaxError("Can't export " + _this._getTypeDescriptor(exportedId.reference) + " " + stringifyType(exportedId.reference) + " from " + stringifyType(moduleType) + " as it was neither declared nor imported!"), moduleType);
                return;
            }
        });
        // The providers of the module have to go last
        // so that they overwrite any other provider we already added.
        if (meta.providers) {
            providers.push.apply(providers, __spread(this._getProvidersMetadata(meta.providers, entryComponents, "provider for the NgModule '" + stringifyType(moduleType) + "'", [], moduleType)));
        }
        if (meta.entryComponents) {
            entryComponents.push.apply(entryComponents, __spread(flattenAndDedupeArray(meta.entryComponents)
                .map(function (type) { return _this._getEntryComponentMetadata(type); })));
        }
        if (meta.bootstrap) {
            flattenAndDedupeArray(meta.bootstrap).forEach(function (type) {
                if (!isValidType(type)) {
                    _this._reportError(syntaxError("Unexpected value '" + stringifyType(type) + "' used in the bootstrap property of module '" + stringifyType(moduleType) + "'"), moduleType);
                    return;
                }
                bootstrapComponents.push(_this._getIdentifierMetadata(type));
            });
        }
        entryComponents.push.apply(entryComponents, __spread(bootstrapComponents.map(function (type) { return _this._getEntryComponentMetadata(type.reference); })));
        if (meta.schemas) {
            schemas.push.apply(schemas, __spread(flattenAndDedupeArray(meta.schemas)));
        }
        compileMeta = new cpl.CompileNgModuleMetadata({
            type: this._getTypeMetadata(moduleType),
            providers: providers,
            entryComponents: entryComponents,
            bootstrapComponents: bootstrapComponents,
            schemas: schemas,
            declaredDirectives: declaredDirectives,
            exportedDirectives: exportedDirectives,
            declaredPipes: declaredPipes,
            exportedPipes: exportedPipes,
            importedModules: importedModules,
            exportedModules: exportedModules,
            transitiveModule: transitiveModule,
            id: meta.id || null,
        });
        entryComponents.forEach(function (id) { return transitiveModule.addEntryComponent(id); });
        providers.forEach(function (provider) { return transitiveModule.addProvider(provider, compileMeta.type); });
        transitiveModule.addModule(compileMeta.type);
        this._ngModuleCache.set(moduleType, compileMeta);
        return compileMeta;
    };
    CompileMetadataResolver.prototype._checkSelfImport = function (moduleType, importedModuleType) {
        if (moduleType === importedModuleType) {
            this._reportError(syntaxError("'" + stringifyType(moduleType) + "' module can't import itself"), moduleType);
            return true;
        }
        return false;
    };
    CompileMetadataResolver.prototype._getTypeDescriptor = function (type) {
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
    };
    CompileMetadataResolver.prototype._addTypeToModule = function (type, moduleType) {
        var oldModule = this._ngModuleOfTypes.get(type);
        if (oldModule && oldModule !== moduleType) {
            this._reportError(syntaxError("Type " + stringifyType(type) + " is part of the declarations of 2 modules: " + stringifyType(oldModule) + " and " + stringifyType(moduleType) + "! " +
                ("Please consider moving " + stringifyType(type) + " to a higher module that imports " + stringifyType(oldModule) + " and " + stringifyType(moduleType) + ". ") +
                ("You can also create a new NgModule that exports and includes " + stringifyType(type) + " then import that NgModule in " + stringifyType(oldModule) + " and " + stringifyType(moduleType) + ".")), moduleType);
            return;
        }
        this._ngModuleOfTypes.set(type, moduleType);
    };
    CompileMetadataResolver.prototype._getTransitiveNgModuleMetadata = function (importedModules, exportedModules) {
        // collect `providers` / `entryComponents` from all imported and all exported modules
        var result = new cpl.TransitiveCompileNgModuleMetadata();
        var modulesByToken = new Map();
        importedModules.concat(exportedModules).forEach(function (modSummary) {
            modSummary.modules.forEach(function (mod) { return result.addModule(mod); });
            modSummary.entryComponents.forEach(function (comp) { return result.addEntryComponent(comp); });
            var addedTokens = new Set();
            modSummary.providers.forEach(function (entry) {
                var tokenRef = cpl.tokenReference(entry.provider.token);
                var prevModules = modulesByToken.get(tokenRef);
                if (!prevModules) {
                    prevModules = new Set();
                    modulesByToken.set(tokenRef, prevModules);
                }
                var moduleRef = entry.module.reference;
                // Note: the providers of one module may still contain multiple providers
                // per token (e.g. for multi providers), and we need to preserve these.
                if (addedTokens.has(tokenRef) || !prevModules.has(moduleRef)) {
                    prevModules.add(moduleRef);
                    addedTokens.add(tokenRef);
                    result.addProvider(entry.provider, entry.module);
                }
            });
        });
        exportedModules.forEach(function (modSummary) {
            modSummary.exportedDirectives.forEach(function (id) { return result.addExportedDirective(id); });
            modSummary.exportedPipes.forEach(function (id) { return result.addExportedPipe(id); });
        });
        importedModules.forEach(function (modSummary) {
            modSummary.exportedDirectives.forEach(function (id) { return result.addDirective(id); });
            modSummary.exportedPipes.forEach(function (id) { return result.addPipe(id); });
        });
        return result;
    };
    CompileMetadataResolver.prototype._getIdentifierMetadata = function (type) {
        type = resolveForwardRef(type);
        return { reference: type };
    };
    CompileMetadataResolver.prototype.isInjectable = function (type) {
        var annotations = this._reflector.tryAnnotations(type);
        return annotations.some(function (ann) { return createInjectable.isTypeOf(ann); });
    };
    CompileMetadataResolver.prototype.getInjectableSummary = function (type) {
        return {
            summaryKind: cpl.CompileSummaryKind.Injectable,
            type: this._getTypeMetadata(type, null, false)
        };
    };
    CompileMetadataResolver.prototype.getInjectableMetadata = function (type, dependencies, throwOnUnknownDeps) {
        if (dependencies === void 0) { dependencies = null; }
        if (throwOnUnknownDeps === void 0) { throwOnUnknownDeps = true; }
        var typeSummary = this._loadSummary(type, cpl.CompileSummaryKind.Injectable);
        var typeMetadata = typeSummary ?
            typeSummary.type :
            this._getTypeMetadata(type, dependencies, throwOnUnknownDeps);
        var annotations = this._reflector.annotations(type).filter(function (ann) { return createInjectable.isTypeOf(ann); });
        if (annotations.length === 0) {
            return null;
        }
        var meta = annotations[annotations.length - 1];
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
    };
    CompileMetadataResolver.prototype._getTypeMetadata = function (type, dependencies, throwOnUnknownDeps) {
        if (dependencies === void 0) { dependencies = null; }
        if (throwOnUnknownDeps === void 0) { throwOnUnknownDeps = true; }
        var identifier = this._getIdentifierMetadata(type);
        return {
            reference: identifier.reference,
            diDeps: this._getDependenciesMetadata(identifier.reference, dependencies, throwOnUnknownDeps),
            lifecycleHooks: getAllLifecycleHooks(this._reflector, identifier.reference),
        };
    };
    CompileMetadataResolver.prototype._getFactoryMetadata = function (factory, dependencies) {
        if (dependencies === void 0) { dependencies = null; }
        factory = resolveForwardRef(factory);
        return { reference: factory, diDeps: this._getDependenciesMetadata(factory, dependencies) };
    };
    /**
     * Gets the metadata for the given pipe.
     * This assumes `loadNgModuleDirectiveAndPipeMetadata` has been called first.
     */
    CompileMetadataResolver.prototype.getPipeMetadata = function (pipeType) {
        var pipeMeta = this._pipeCache.get(pipeType);
        if (!pipeMeta) {
            this._reportError(syntaxError("Illegal state: getPipeMetadata can only be called after loadNgModuleDirectiveAndPipeMetadata for a module that declares it. Pipe " + stringifyType(pipeType) + "."), pipeType);
        }
        return pipeMeta || null;
    };
    CompileMetadataResolver.prototype.getPipeSummary = function (pipeType) {
        var pipeSummary = this._loadSummary(pipeType, cpl.CompileSummaryKind.Pipe);
        if (!pipeSummary) {
            this._reportError(syntaxError("Illegal state: Could not load the summary for pipe " + stringifyType(pipeType) + "."), pipeType);
        }
        return pipeSummary;
    };
    CompileMetadataResolver.prototype.getOrLoadPipeMetadata = function (pipeType) {
        var pipeMeta = this._pipeCache.get(pipeType);
        if (!pipeMeta) {
            pipeMeta = this._loadPipeMetadata(pipeType);
        }
        return pipeMeta;
    };
    CompileMetadataResolver.prototype._loadPipeMetadata = function (pipeType) {
        pipeType = resolveForwardRef(pipeType);
        var pipeAnnotation = this._pipeResolver.resolve(pipeType);
        var pipeMeta = new cpl.CompilePipeMetadata({
            type: this._getTypeMetadata(pipeType),
            name: pipeAnnotation.name,
            pure: !!pipeAnnotation.pure
        });
        this._pipeCache.set(pipeType, pipeMeta);
        this._summaryCache.set(pipeType, pipeMeta.toSummary());
        return pipeMeta;
    };
    CompileMetadataResolver.prototype._getDependenciesMetadata = function (typeOrFunc, dependencies, throwOnUnknownDeps) {
        var _this = this;
        if (throwOnUnknownDeps === void 0) { throwOnUnknownDeps = true; }
        var hasUnknownDeps = false;
        var params = dependencies || this._reflector.parameters(typeOrFunc) || [];
        var dependenciesMetadata = params.map(function (param) {
            var isAttribute = false;
            var isHost = false;
            var isSelf = false;
            var isSkipSelf = false;
            var isOptional = false;
            var token = null;
            if (Array.isArray(param)) {
                param.forEach(function (paramEntry) {
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
                isAttribute: isAttribute,
                isHost: isHost,
                isSelf: isSelf,
                isSkipSelf: isSkipSelf,
                isOptional: isOptional,
                token: _this._getTokenMetadata(token)
            };
        });
        if (hasUnknownDeps) {
            var depsTokens = dependenciesMetadata.map(function (dep) { return dep.token ? stringifyType(dep.token) : '?'; }).join(', ');
            var message = "Can't resolve all parameters for " + stringifyType(typeOrFunc) + ": (" + depsTokens + ").";
            if (throwOnUnknownDeps || this._config.strictInjectionParameters) {
                this._reportError(syntaxError(message), typeOrFunc);
            }
            else {
                this._console.warn("Warning: " + message + " This will become an error in Angular v6.x");
            }
        }
        return dependenciesMetadata;
    };
    CompileMetadataResolver.prototype._getTokenMetadata = function (token) {
        token = resolveForwardRef(token);
        var compileToken;
        if (typeof token === 'string') {
            compileToken = { value: token };
        }
        else {
            compileToken = { identifier: { reference: token } };
        }
        return compileToken;
    };
    CompileMetadataResolver.prototype._getProvidersMetadata = function (providers, targetEntryComponents, debugInfo, compileProviders, type) {
        var _this = this;
        if (compileProviders === void 0) { compileProviders = []; }
        providers.forEach(function (provider, providerIdx) {
            if (Array.isArray(provider)) {
                _this._getProvidersMetadata(provider, targetEntryComponents, debugInfo, compileProviders);
            }
            else {
                provider = resolveForwardRef(provider);
                var providerMeta = undefined;
                if (provider && typeof provider === 'object' && provider.hasOwnProperty('provide')) {
                    _this._validateProvider(provider);
                    providerMeta = new cpl.ProviderMeta(provider.provide, provider);
                }
                else if (isValidType(provider)) {
                    providerMeta = new cpl.ProviderMeta(provider, { useClass: provider });
                }
                else if (provider === void 0) {
                    _this._reportError(syntaxError("Encountered undefined provider! Usually this means you have a circular dependencies. This might be caused by using 'barrel' index.ts files."));
                    return;
                }
                else {
                    var providersInfo = providers
                        .reduce(function (soFar, seenProvider, seenProviderIdx) {
                        if (seenProviderIdx < providerIdx) {
                            soFar.push("" + stringifyType(seenProvider));
                        }
                        else if (seenProviderIdx == providerIdx) {
                            soFar.push("?" + stringifyType(seenProvider) + "?");
                        }
                        else if (seenProviderIdx == providerIdx + 1) {
                            soFar.push('...');
                        }
                        return soFar;
                    }, [])
                        .join(', ');
                    _this._reportError(syntaxError("Invalid " + (debugInfo ?
                        debugInfo :
                        'provider') + " - only instances of Provider and Type are allowed, got: [" + providersInfo + "]"), type);
                    return;
                }
                if (providerMeta.token ===
                    _this._reflector.resolveExternalReference(Identifiers.ANALYZE_FOR_ENTRY_COMPONENTS)) {
                    targetEntryComponents.push.apply(targetEntryComponents, __spread(_this._getEntryComponentsFromProvider(providerMeta, type)));
                }
                else {
                    compileProviders.push(_this.getProviderMetadata(providerMeta));
                }
            }
        });
        return compileProviders;
    };
    CompileMetadataResolver.prototype._validateProvider = function (provider) {
        if (provider.hasOwnProperty('useClass') && provider.useClass == null) {
            this._reportError(syntaxError("Invalid provider for " + stringifyType(provider.provide) + ". useClass cannot be " + provider.useClass + ".\n           Usually it happens when:\n           1. There's a circular dependency (might be caused by using index.ts (barrel) files).\n           2. Class was used before it was declared. Use forwardRef in this case."));
        }
    };
    CompileMetadataResolver.prototype._getEntryComponentsFromProvider = function (provider, type) {
        var _this = this;
        var components = [];
        var collectedIdentifiers = [];
        if (provider.useFactory || provider.useExisting || provider.useClass) {
            this._reportError(syntaxError("The ANALYZE_FOR_ENTRY_COMPONENTS token only supports useValue!"), type);
            return [];
        }
        if (!provider.multi) {
            this._reportError(syntaxError("The ANALYZE_FOR_ENTRY_COMPONENTS token only supports 'multi = true'!"), type);
            return [];
        }
        extractIdentifiers(provider.useValue, collectedIdentifiers);
        collectedIdentifiers.forEach(function (identifier) {
            var entry = _this._getEntryComponentMetadata(identifier.reference, false);
            if (entry) {
                components.push(entry);
            }
        });
        return components;
    };
    CompileMetadataResolver.prototype._getEntryComponentMetadata = function (dirType, throwIfNotFound) {
        if (throwIfNotFound === void 0) { throwIfNotFound = true; }
        var dirMeta = this.getNonNormalizedDirectiveMetadata(dirType);
        if (dirMeta && dirMeta.metadata.isComponent) {
            return { componentType: dirType, componentFactory: dirMeta.metadata.componentFactory };
        }
        var dirSummary = this._loadSummary(dirType, cpl.CompileSummaryKind.Directive);
        if (dirSummary && dirSummary.isComponent) {
            return { componentType: dirType, componentFactory: dirSummary.componentFactory };
        }
        if (throwIfNotFound) {
            throw syntaxError(dirType.name + " cannot be used as an entry component.");
        }
        return null;
    };
    CompileMetadataResolver.prototype._getInjectableTypeMetadata = function (type, dependencies) {
        if (dependencies === void 0) { dependencies = null; }
        var typeSummary = this._loadSummary(type, cpl.CompileSummaryKind.Injectable);
        if (typeSummary) {
            return typeSummary.type;
        }
        return this._getTypeMetadata(type, dependencies);
    };
    CompileMetadataResolver.prototype.getProviderMetadata = function (provider) {
        var compileDeps = undefined;
        var compileTypeMetadata = null;
        var compileFactoryMetadata = null;
        var token = this._getTokenMetadata(provider.token);
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
    };
    CompileMetadataResolver.prototype._getQueriesMetadata = function (queries, isViewQuery, directiveType) {
        var _this = this;
        var res = [];
        Object.keys(queries).forEach(function (propertyName) {
            var query = queries[propertyName];
            if (query.isViewQuery === isViewQuery) {
                res.push(_this._getQueryMetadata(query, propertyName, directiveType));
            }
        });
        return res;
    };
    CompileMetadataResolver.prototype._queryVarBindings = function (selector) {
        return selector.split(/\s*,\s*/);
    };
    CompileMetadataResolver.prototype._getQueryMetadata = function (q, propertyName, typeOrFunc) {
        var _this = this;
        var selectors;
        if (typeof q.selector === 'string') {
            selectors =
                this._queryVarBindings(q.selector).map(function (varName) { return _this._getTokenMetadata(varName); });
        }
        else {
            if (!q.selector) {
                this._reportError(syntaxError("Can't construct a query for the property \"" + propertyName + "\" of \"" + stringifyType(typeOrFunc) + "\" since the query selector wasn't defined."), typeOrFunc);
                selectors = [];
            }
            else {
                selectors = [this._getTokenMetadata(q.selector)];
            }
        }
        return {
            selectors: selectors,
            first: q.first,
            descendants: q.descendants,
            propertyName: propertyName,
            read: q.read ? this._getTokenMetadata(q.read) : null,
            static: q.static
        };
    };
    CompileMetadataResolver.prototype._reportError = function (error, type, otherType) {
        if (this._errorCollector) {
            this._errorCollector(error, type);
            if (otherType) {
                this._errorCollector(error, otherType);
            }
        }
        else {
            throw error;
        }
    };
    return CompileMetadataResolver;
}());
export { CompileMetadataResolver };
function flattenArray(tree, out) {
    if (out === void 0) { out = []; }
    if (tree) {
        for (var i = 0; i < tree.length; i++) {
            var item = resolveForwardRef(tree[i]);
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
var _CompileValueConverter = /** @class */ (function (_super) {
    __extends(_CompileValueConverter, _super);
    function _CompileValueConverter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _CompileValueConverter.prototype.visitOther = function (value, targetIdentifiers) {
        targetIdentifiers.push({ reference: value });
    };
    return _CompileValueConverter;
}(ValueTransformer));
function stringifyType(type) {
    if (type instanceof StaticSymbol) {
        return type.name + " in " + type.filePath;
    }
    else {
        return stringify(type);
    }
}
/**
 * Indicates that a component is still being loaded in a synchronous compile.
 */
function componentStillLoadingError(compType) {
    var error = Error("Can't compile synchronously as " + stringify(compType) + " is still being loaded!");
    error[ERROR_COMPONENT_TYPE] = compType;
    return error;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGFfcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWV0YWRhdGFfcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQW9CLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSwwQkFBMEIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM5RSxPQUFPLEtBQUssR0FBRyxNQUFNLG9CQUFvQixDQUFDO0FBRzFDLE9BQU8sRUFBQyx1QkFBdUIsRUFBYSxlQUFlLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUErRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFaFUsT0FBTyxFQUFvQixRQUFRLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBSzNELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFdkMsT0FBTyxFQUFVLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBSTNJLE1BQU0sQ0FBQyxJQUFNLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDO0FBRXRELGdCQUFnQjtBQUNoQixrQ0FBa0M7QUFDbEMsMkRBQTJE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LENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEI7QUFDSCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLDBCQUEwQixDQUFDLFFBQWM7SUFDaEQsSUFBTSxLQUFLLEdBQ1AsS0FBSyxDQUFDLG9DQUFrQyxTQUFTLENBQUMsUUFBUSxDQUFDLDRCQUF5QixDQUFDLENBQUM7SUFDekYsS0FBYSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsUUFBUSxDQUFDO0lBQ2hELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTdGF0aWNTeW1ib2wsIFN0YXRpY1N5bWJvbENhY2hlfSBmcm9tICcuL2FvdC9zdGF0aWNfc3ltYm9sJztcbmltcG9ydCB7bmdmYWN0b3J5RmlsZVBhdGh9IGZyb20gJy4vYW90L3V0aWwnO1xuaW1wb3J0IHthc3NlcnRBcnJheU9mU3RyaW5ncywgYXNzZXJ0SW50ZXJwb2xhdGlvblN5bWJvbHN9IGZyb20gJy4vYXNzZXJ0aW9ucyc7XG5pbXBvcnQgKiBhcyBjcGwgZnJvbSAnLi9jb21waWxlX21ldGFkYXRhJztcbmltcG9ydCB7Q29tcGlsZVJlZmxlY3Rvcn0gZnJvbSAnLi9jb21waWxlX3JlZmxlY3Rvcic7XG5pbXBvcnQge0NvbXBpbGVyQ29uZmlnfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGNyZWF0ZUF0dHJpYnV0ZSwgY3JlYXRlQ29tcG9uZW50LCBjcmVhdGVIb3N0LCBjcmVhdGVJbmplY3QsIGNyZWF0ZUluamVjdGFibGUsIGNyZWF0ZUluamVjdGlvblRva2VuLCBjcmVhdGVOZ01vZHVsZSwgY3JlYXRlT3B0aW9uYWwsIGNyZWF0ZVNlbGYsIGNyZWF0ZVNraXBTZWxmLCBEaXJlY3RpdmUsIEluamVjdGFibGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFByb3ZpZGVyLCBRdWVyeSwgU2NoZW1hTWV0YWRhdGEsIFR5cGUsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IHtEaXJlY3RpdmVOb3JtYWxpemVyfSBmcm9tICcuL2RpcmVjdGl2ZV9ub3JtYWxpemVyJztcbmltcG9ydCB7RGlyZWN0aXZlUmVzb2x2ZXIsIGZpbmRMYXN0fSBmcm9tICcuL2RpcmVjdGl2ZV9yZXNvbHZlcic7XG5pbXBvcnQge0lkZW50aWZpZXJzfSBmcm9tICcuL2lkZW50aWZpZXJzJztcbmltcG9ydCB7Z2V0QWxsTGlmZWN5Y2xlSG9va3N9IGZyb20gJy4vbGlmZWN5Y2xlX3JlZmxlY3Rvcic7XG5pbXBvcnQge0h0bWxQYXJzZXJ9IGZyb20gJy4vbWxfcGFyc2VyL2h0bWxfcGFyc2VyJztcbmltcG9ydCB7TmdNb2R1bGVSZXNvbHZlcn0gZnJvbSAnLi9uZ19tb2R1bGVfcmVzb2x2ZXInO1xuaW1wb3J0IHtQaXBlUmVzb2x2ZXJ9IGZyb20gJy4vcGlwZV9yZXNvbHZlcic7XG5pbXBvcnQge0VsZW1lbnRTY2hlbWFSZWdpc3RyeX0gZnJvbSAnLi9zY2hlbWEvZWxlbWVudF9zY2hlbWFfcmVnaXN0cnknO1xuaW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSAnLi9zZWxlY3Rvcic7XG5pbXBvcnQge1N1bW1hcnlSZXNvbHZlcn0gZnJvbSAnLi9zdW1tYXJ5X3Jlc29sdmVyJztcbmltcG9ydCB7Q29uc29sZSwgaXNQcm9taXNlLCBub1VuZGVmaW5lZCwgcmVzb2x2ZUZvcndhcmRSZWYsIHN0cmluZ2lmeSwgU3luY0FzeW5jLCBzeW50YXhFcnJvciwgVmFsdWVUcmFuc2Zvcm1lciwgdmlzaXRWYWx1ZX0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IHR5cGUgRXJyb3JDb2xsZWN0b3IgPSAoZXJyb3I6IGFueSwgdHlwZT86IGFueSkgPT4gdm9pZDtcblxuZXhwb3J0IGNvbnN0IEVSUk9SX0NPTVBPTkVOVF9UWVBFID0gJ25nQ29tcG9uZW50VHlwZSc7XG5cbi8vIERlc2lnbiBub3Rlczpcbi8vIC0gZG9uJ3QgbGF6aWx5IGNyZWF0ZSBtZXRhZGF0YTpcbi8vICAgRm9yIHNvbWUgbWV0YWRhdGEsIHdlIG5lZWQgdG8gZG8gYXN5bmMgd29yayBzb21ldGltZXMsXG4vLyAgIHNvIHRoZSB1c2VyIGhhcyB0byBraWNrIG9mZiB0aGlzIGxvYWRpbmcuXG4vLyAgIEJ1dCB3ZSB3YW50IHRvIHJlcG9ydCBlcnJvcnMgZXZlbiB3aGVuIHRoZSBhc3luYyB3b3JrIGlzXG4vLyAgIG5vdCByZXF1aXJlZCB0byBjaGVjayB0aGF0IHRoZSB1c2VyIHdvdWxkIGhhdmUgYmVlbiBhYmxlXG4vLyAgIHRvIHdhaXQgY29ycmVjdGx5LlxuZXhwb3J0IGNsYXNzIENvbXBpbGVNZXRhZGF0YVJlc29sdmVyIHtcbiAgcHJpdmF0ZSBfbm9uTm9ybWFsaXplZERpcmVjdGl2ZUNhY2hlID1cbiAgICAgIG5ldyBNYXA8VHlwZSwge2Fubm90YXRpb246IERpcmVjdGl2ZSwgbWV0YWRhdGE6IGNwbC5Db21waWxlRGlyZWN0aXZlTWV0YWRhdGF9PigpO1xuICBwcml2YXRlIF9kaXJlY3RpdmVDYWNoZSA9IG5ldyBNYXA8VHlwZSwgY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YT4oKTtcbiAgcHJpdmF0ZSBfc3VtbWFyeUNhY2hlID0gbmV3IE1hcDxUeXBlLCBjcGwuQ29tcGlsZVR5cGVTdW1tYXJ5fG51bGw+KCk7XG4gIHByaXZhdGUgX3BpcGVDYWNoZSA9IG5ldyBNYXA8VHlwZSwgY3BsLkNvbXBpbGVQaXBlTWV0YWRhdGE+KCk7XG4gIHByaXZhdGUgX25nTW9kdWxlQ2FjaGUgPSBuZXcgTWFwPFR5cGUsIGNwbC5Db21waWxlTmdNb2R1bGVNZXRhZGF0YT4oKTtcbiAgcHJpdmF0ZSBfbmdNb2R1bGVPZlR5cGVzID0gbmV3IE1hcDxUeXBlLCBUeXBlPigpO1xuICBwcml2YXRlIF9zaGFsbG93TW9kdWxlQ2FjaGUgPSBuZXcgTWFwPFR5cGUsIGNwbC5Db21waWxlU2hhbGxvd01vZHVsZU1ldGFkYXRhPigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBfY29uZmlnOiBDb21waWxlckNvbmZpZywgcHJpdmF0ZSBfaHRtbFBhcnNlcjogSHRtbFBhcnNlcixcbiAgICAgIHByaXZhdGUgX25nTW9kdWxlUmVzb2x2ZXI6IE5nTW9kdWxlUmVzb2x2ZXIsIHByaXZhdGUgX2RpcmVjdGl2ZVJlc29sdmVyOiBEaXJlY3RpdmVSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgX3BpcGVSZXNvbHZlcjogUGlwZVJlc29sdmVyLCBwcml2YXRlIF9zdW1tYXJ5UmVzb2x2ZXI6IFN1bW1hcnlSZXNvbHZlcjxhbnk+LFxuICAgICAgcHJpdmF0ZSBfc2NoZW1hUmVnaXN0cnk6IEVsZW1lbnRTY2hlbWFSZWdpc3RyeSxcbiAgICAgIHByaXZhdGUgX2RpcmVjdGl2ZU5vcm1hbGl6ZXI6IERpcmVjdGl2ZU5vcm1hbGl6ZXIsIHByaXZhdGUgX2NvbnNvbGU6IENvbnNvbGUsXG4gICAgICBwcml2YXRlIF9zdGF0aWNTeW1ib2xDYWNoZTogU3RhdGljU3ltYm9sQ2FjaGUsIHByaXZhdGUgX3JlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3RvcixcbiAgICAgIHByaXZhdGUgX2Vycm9yQ29sbGVjdG9yPzogRXJyb3JDb2xsZWN0b3IpIHt9XG5cbiAgZ2V0UmVmbGVjdG9yKCk6IENvbXBpbGVSZWZsZWN0b3Ige1xuICAgIHJldHVybiB0aGlzLl9yZWZsZWN0b3I7XG4gIH1cblxuICBjbGVhckNhY2hlRm9yKHR5cGU6IFR5cGUpIHtcbiAgICBjb25zdCBkaXJNZXRhID0gdGhpcy5fZGlyZWN0aXZlQ2FjaGUuZ2V0KHR5cGUpO1xuICAgIHRoaXMuX2RpcmVjdGl2ZUNhY2hlLmRlbGV0ZSh0eXBlKTtcbiAgICB0aGlzLl9ub25Ob3JtYWxpemVkRGlyZWN0aXZlQ2FjaGUuZGVsZXRlKHR5cGUpO1xuICAgIHRoaXMuX3N1bW1hcnlDYWNoZS5kZWxldGUodHlwZSk7XG4gICAgdGhpcy5fcGlwZUNhY2hlLmRlbGV0ZSh0eXBlKTtcbiAgICB0aGlzLl9uZ01vZHVsZU9mVHlwZXMuZGVsZXRlKHR5cGUpO1xuICAgIC8vIENsZWFyIGFsbCBvZiB0aGUgTmdNb2R1bGUgYXMgdGhleSBjb250YWluIHRyYW5zaXRpdmUgaW5mb3JtYXRpb24hXG4gICAgdGhpcy5fbmdNb2R1bGVDYWNoZS5jbGVhcigpO1xuICAgIGlmIChkaXJNZXRhKSB7XG4gICAgICB0aGlzLl9kaXJlY3RpdmVOb3JtYWxpemVyLmNsZWFyQ2FjaGVGb3IoZGlyTWV0YSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJDYWNoZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXJlY3RpdmVDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMuX25vbk5vcm1hbGl6ZWREaXJlY3RpdmVDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMuX3N1bW1hcnlDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMuX3BpcGVDYWNoZS5jbGVhcigpO1xuICAgIHRoaXMuX25nTW9kdWxlQ2FjaGUuY2xlYXIoKTtcbiAgICB0aGlzLl9uZ01vZHVsZU9mVHlwZXMuY2xlYXIoKTtcbiAgICB0aGlzLl9kaXJlY3RpdmVOb3JtYWxpemVyLmNsZWFyQ2FjaGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZVByb3h5Q2xhc3MoYmFzZVR5cGU6IGFueSwgbmFtZTogc3RyaW5nKTogY3BsLlByb3h5Q2xhc3Mge1xuICAgIGxldCBkZWxlZ2F0ZTogYW55ID0gbnVsbDtcbiAgICBjb25zdCBwcm94eUNsYXNzOiBjcGwuUHJveHlDbGFzcyA9IDxhbnk+ZnVuY3Rpb24odGhpczogdW5rbm93bikge1xuICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSWxsZWdhbCBzdGF0ZTogQ2xhc3MgJHtuYW1lfSBmb3IgdHlwZSAke3N0cmluZ2lmeShiYXNlVHlwZSl9IGlzIG5vdCBjb21waWxlZCB5ZXQhYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHByb3h5Q2xhc3Muc2V0RGVsZWdhdGUgPSAoZCkgPT4ge1xuICAgICAgZGVsZWdhdGUgPSBkO1xuICAgICAgKDxhbnk+cHJveHlDbGFzcykucHJvdG90eXBlID0gZC5wcm90b3R5cGU7XG4gICAgfTtcbiAgICAvLyBNYWtlIHN0cmluZ2lmeSB3b3JrIGNvcnJlY3RseVxuICAgICg8YW55PnByb3h5Q2xhc3MpLm92ZXJyaWRkZW5OYW1lID0gbmFtZTtcbiAgICByZXR1cm4gcHJveHlDbGFzcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R2VuZXJhdGVkQ2xhc3MoZGlyVHlwZTogYW55LCBuYW1lOiBzdHJpbmcpOiBTdGF0aWNTeW1ib2x8Y3BsLlByb3h5Q2xhc3Mge1xuICAgIGlmIChkaXJUeXBlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGljU3ltYm9sQ2FjaGUuZ2V0KG5nZmFjdG9yeUZpbGVQYXRoKGRpclR5cGUuZmlsZVBhdGgpLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZVByb3h5Q2xhc3MoZGlyVHlwZSwgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRWaWV3Q2xhc3MoZGlyVHlwZTogYW55KTogU3RhdGljU3ltYm9sfGNwbC5Qcm94eUNsYXNzIHtcbiAgICByZXR1cm4gdGhpcy5nZXRHZW5lcmF0ZWRDbGFzcyhkaXJUeXBlLCBjcGwudmlld0NsYXNzTmFtZShkaXJUeXBlLCAwKSk7XG4gIH1cblxuICBnZXRIb3N0Q29tcG9uZW50Vmlld0NsYXNzKGRpclR5cGU6IGFueSk6IFN0YXRpY1N5bWJvbHxjcGwuUHJveHlDbGFzcyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0R2VuZXJhdGVkQ2xhc3MoZGlyVHlwZSwgY3BsLmhvc3RWaWV3Q2xhc3NOYW1lKGRpclR5cGUpKTtcbiAgfVxuXG4gIGdldEhvc3RDb21wb25lbnRUeXBlKGRpclR5cGU6IGFueSk6IFN0YXRpY1N5bWJvbHxjcGwuUHJveHlDbGFzcyB7XG4gICAgY29uc3QgbmFtZSA9IGAke2NwbC5pZGVudGlmaWVyTmFtZSh7cmVmZXJlbmNlOiBkaXJUeXBlfSl9X0hvc3RgO1xuICAgIGlmIChkaXJUeXBlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdGljU3ltYm9sQ2FjaGUuZ2V0KGRpclR5cGUuZmlsZVBhdGgsIG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVQcm94eUNsYXNzKGRpclR5cGUsIG5hbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSZW5kZXJlclR5cGUoZGlyVHlwZTogYW55KTogU3RhdGljU3ltYm9sfG9iamVjdCB7XG4gICAgaWYgKGRpclR5cGUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0aWNTeW1ib2xDYWNoZS5nZXQoXG4gICAgICAgICAgbmdmYWN0b3J5RmlsZVBhdGgoZGlyVHlwZS5maWxlUGF0aCksIGNwbC5yZW5kZXJlclR5cGVOYW1lKGRpclR5cGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcmV0dXJuaW5nIGFuIG9iamVjdCBhcyBwcm94eSxcbiAgICAgIC8vIHRoYXQgd2UgZmlsbCBsYXRlciBkdXJpbmcgcnVudGltZSBjb21waWxhdGlvbi5cbiAgICAgIHJldHVybiA8YW55Pnt9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50RmFjdG9yeShcbiAgICAgIHNlbGVjdG9yOiBzdHJpbmcsIGRpclR5cGU6IGFueSwgaW5wdXRzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfXxudWxsLFxuICAgICAgb3V0cHV0czoge1trZXk6IHN0cmluZ106IHN0cmluZ30pOiBTdGF0aWNTeW1ib2x8b2JqZWN0IHtcbiAgICBpZiAoZGlyVHlwZSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRpY1N5bWJvbENhY2hlLmdldChcbiAgICAgICAgICBuZ2ZhY3RvcnlGaWxlUGF0aChkaXJUeXBlLmZpbGVQYXRoKSwgY3BsLmNvbXBvbmVudEZhY3RvcnlOYW1lKGRpclR5cGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaG9zdFZpZXcgPSB0aGlzLmdldEhvc3RDb21wb25lbnRWaWV3Q2xhc3MoZGlyVHlwZSk7XG4gICAgICAvLyBOb3RlOiBuZ0NvbnRlbnRTZWxlY3RvcnMgd2lsbCBiZSBmaWxsZWQgbGF0ZXIgb25jZSB0aGUgdGVtcGxhdGUgaXNcbiAgICAgIC8vIGxvYWRlZC5cbiAgICAgIGNvbnN0IGNyZWF0ZUNvbXBvbmVudEZhY3RvcnkgPVxuICAgICAgICAgIHRoaXMuX3JlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoSWRlbnRpZmllcnMuY3JlYXRlQ29tcG9uZW50RmFjdG9yeSk7XG4gICAgICByZXR1cm4gY3JlYXRlQ29tcG9uZW50RmFjdG9yeShzZWxlY3RvciwgZGlyVHlwZSwgPGFueT5ob3N0VmlldywgaW5wdXRzLCBvdXRwdXRzLCBbXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q29tcG9uZW50RmFjdG9yeShmYWN0b3J5OiBTdGF0aWNTeW1ib2x8b2JqZWN0LCBuZ0NvbnRlbnRTZWxlY3RvcnM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKCEoZmFjdG9yeSBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkpIHtcbiAgICAgIChmYWN0b3J5IGFzIGFueSkubmdDb250ZW50U2VsZWN0b3JzLnB1c2goLi4ubmdDb250ZW50U2VsZWN0b3JzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9sb2FkU3VtbWFyeSh0eXBlOiBhbnksIGtpbmQ6IGNwbC5Db21waWxlU3VtbWFyeUtpbmQpOiBjcGwuQ29tcGlsZVR5cGVTdW1tYXJ5fG51bGwge1xuICAgIGxldCB0eXBlU3VtbWFyeSA9IHRoaXMuX3N1bW1hcnlDYWNoZS5nZXQodHlwZSk7XG4gICAgaWYgKCF0eXBlU3VtbWFyeSkge1xuICAgICAgY29uc3Qgc3VtbWFyeSA9IHRoaXMuX3N1bW1hcnlSZXNvbHZlci5yZXNvbHZlU3VtbWFyeSh0eXBlKTtcbiAgICAgIHR5cGVTdW1tYXJ5ID0gc3VtbWFyeSA/IHN1bW1hcnkudHlwZSA6IG51bGw7XG4gICAgICB0aGlzLl9zdW1tYXJ5Q2FjaGUuc2V0KHR5cGUsIHR5cGVTdW1tYXJ5IHx8IG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZVN1bW1hcnkgJiYgdHlwZVN1bW1hcnkuc3VtbWFyeUtpbmQgPT09IGtpbmQgPyB0eXBlU3VtbWFyeSA6IG51bGw7XG4gIH1cblxuICBnZXRIb3N0Q29tcG9uZW50TWV0YWRhdGEoXG4gICAgICBjb21wTWV0YTogY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSxcbiAgICAgIGhvc3RWaWV3VHlwZT86IFN0YXRpY1N5bWJvbHxjcGwuUHJveHlDbGFzcyk6IGNwbC5Db21waWxlRGlyZWN0aXZlTWV0YWRhdGEge1xuICAgIGNvbnN0IGhvc3RUeXBlID0gdGhpcy5nZXRIb3N0Q29tcG9uZW50VHlwZShjb21wTWV0YS50eXBlLnJlZmVyZW5jZSk7XG4gICAgaWYgKCFob3N0Vmlld1R5cGUpIHtcbiAgICAgIGhvc3RWaWV3VHlwZSA9IHRoaXMuZ2V0SG9zdENvbXBvbmVudFZpZXdDbGFzcyhob3N0VHlwZSk7XG4gICAgfVxuICAgIC8vIE5vdGU6ICEgaXMgb2sgaGVyZSBhcyB0aGlzIG1ldGhvZCBzaG91bGQgb25seSBiZSBjYWxsZWQgd2l0aCBub3JtYWxpemVkIGRpcmVjdGl2ZVxuICAgIC8vIG1ldGFkYXRhLCB3aGljaCBhbHdheXMgZmlsbHMgaW4gdGhlIHNlbGVjdG9yLlxuICAgIGNvbnN0IHRlbXBsYXRlID0gQ3NzU2VsZWN0b3IucGFyc2UoY29tcE1ldGEuc2VsZWN0b3IhKVswXS5nZXRNYXRjaGluZ0VsZW1lbnRUZW1wbGF0ZSgpO1xuICAgIGNvbnN0IHRlbXBsYXRlVXJsID0gJyc7XG4gICAgY29uc3QgaHRtbEFzdCA9IHRoaXMuX2h0bWxQYXJzZXIucGFyc2UodGVtcGxhdGUsIHRlbXBsYXRlVXJsKTtcbiAgICByZXR1cm4gY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YS5jcmVhdGUoe1xuICAgICAgaXNIb3N0OiB0cnVlLFxuICAgICAgdHlwZToge3JlZmVyZW5jZTogaG9zdFR5cGUsIGRpRGVwczogW10sIGxpZmVjeWNsZUhvb2tzOiBbXX0sXG4gICAgICB0ZW1wbGF0ZTogbmV3IGNwbC5Db21waWxlVGVtcGxhdGVNZXRhZGF0YSh7XG4gICAgICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgICAgIHRlbXBsYXRlLFxuICAgICAgICB0ZW1wbGF0ZVVybCxcbiAgICAgICAgaHRtbEFzdCxcbiAgICAgICAgc3R5bGVzOiBbXSxcbiAgICAgICAgc3R5bGVVcmxzOiBbXSxcbiAgICAgICAgbmdDb250ZW50U2VsZWN0b3JzOiBbXSxcbiAgICAgICAgYW5pbWF0aW9uczogW10sXG4gICAgICAgIGlzSW5saW5lOiB0cnVlLFxuICAgICAgICBleHRlcm5hbFN0eWxlc2hlZXRzOiBbXSxcbiAgICAgICAgaW50ZXJwb2xhdGlvbjogbnVsbCxcbiAgICAgICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gICAgICB9KSxcbiAgICAgIGV4cG9ydEFzOiBudWxsLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICAgICAgaW5wdXRzOiBbXSxcbiAgICAgIG91dHB1dHM6IFtdLFxuICAgICAgaG9zdDoge30sXG4gICAgICBpc0NvbXBvbmVudDogdHJ1ZSxcbiAgICAgIHNlbGVjdG9yOiAnKicsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgICAgdmlld1Byb3ZpZGVyczogW10sXG4gICAgICBxdWVyaWVzOiBbXSxcbiAgICAgIGd1YXJkczoge30sXG4gICAgICB2aWV3UXVlcmllczogW10sXG4gICAgICBjb21wb25lbnRWaWV3VHlwZTogaG9zdFZpZXdUeXBlLFxuICAgICAgcmVuZGVyZXJUeXBlOiB7aWQ6ICdfX0hvc3RfXycsIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsIHN0eWxlczogW10sIGRhdGE6IHt9fSBhc1xuICAgICAgICAgIG9iamVjdCxcbiAgICAgIGVudHJ5Q29tcG9uZW50czogW10sXG4gICAgICBjb21wb25lbnRGYWN0b3J5OiBudWxsXG4gICAgfSk7XG4gIH1cblxuICBsb2FkRGlyZWN0aXZlTWV0YWRhdGEobmdNb2R1bGVUeXBlOiBhbnksIGRpcmVjdGl2ZVR5cGU6IGFueSwgaXNTeW5jOiBib29sZWFuKTogU3luY0FzeW5jPG51bGw+IHtcbiAgICBpZiAodGhpcy5fZGlyZWN0aXZlQ2FjaGUuaGFzKGRpcmVjdGl2ZVR5cGUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZGlyZWN0aXZlVHlwZSA9IHJlc29sdmVGb3J3YXJkUmVmKGRpcmVjdGl2ZVR5cGUpO1xuICAgIGNvbnN0IHthbm5vdGF0aW9uLCBtZXRhZGF0YX0gPSB0aGlzLmdldE5vbk5vcm1hbGl6ZWREaXJlY3RpdmVNZXRhZGF0YShkaXJlY3RpdmVUeXBlKSE7XG5cbiAgICBjb25zdCBjcmVhdGVEaXJlY3RpdmVNZXRhZGF0YSA9ICh0ZW1wbGF0ZU1ldGFkYXRhOiBjcGwuQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGF8bnVsbCkgPT4ge1xuICAgICAgY29uc3Qgbm9ybWFsaXplZERpck1ldGEgPSBuZXcgY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSh7XG4gICAgICAgIGlzSG9zdDogZmFsc2UsXG4gICAgICAgIHR5cGU6IG1ldGFkYXRhLnR5cGUsXG4gICAgICAgIGlzQ29tcG9uZW50OiBtZXRhZGF0YS5pc0NvbXBvbmVudCxcbiAgICAgICAgc2VsZWN0b3I6IG1ldGFkYXRhLnNlbGVjdG9yLFxuICAgICAgICBleHBvcnRBczogbWV0YWRhdGEuZXhwb3J0QXMsXG4gICAgICAgIGNoYW5nZURldGVjdGlvbjogbWV0YWRhdGEuY2hhbmdlRGV0ZWN0aW9uLFxuICAgICAgICBpbnB1dHM6IG1ldGFkYXRhLmlucHV0cyxcbiAgICAgICAgb3V0cHV0czogbWV0YWRhdGEub3V0cHV0cyxcbiAgICAgICAgaG9zdExpc3RlbmVyczogbWV0YWRhdGEuaG9zdExpc3RlbmVycyxcbiAgICAgICAgaG9zdFByb3BlcnRpZXM6IG1ldGFkYXRhLmhvc3RQcm9wZXJ0aWVzLFxuICAgICAgICBob3N0QXR0cmlidXRlczogbWV0YWRhdGEuaG9zdEF0dHJpYnV0ZXMsXG4gICAgICAgIHByb3ZpZGVyczogbWV0YWRhdGEucHJvdmlkZXJzLFxuICAgICAgICB2aWV3UHJvdmlkZXJzOiBtZXRhZGF0YS52aWV3UHJvdmlkZXJzLFxuICAgICAgICBxdWVyaWVzOiBtZXRhZGF0YS5xdWVyaWVzLFxuICAgICAgICBndWFyZHM6IG1ldGFkYXRhLmd1YXJkcyxcbiAgICAgICAgdmlld1F1ZXJpZXM6IG1ldGFkYXRhLnZpZXdRdWVyaWVzLFxuICAgICAgICBlbnRyeUNvbXBvbmVudHM6IG1ldGFkYXRhLmVudHJ5Q29tcG9uZW50cyxcbiAgICAgICAgY29tcG9uZW50Vmlld1R5cGU6IG1ldGFkYXRhLmNvbXBvbmVudFZpZXdUeXBlLFxuICAgICAgICByZW5kZXJlclR5cGU6IG1ldGFkYXRhLnJlbmRlcmVyVHlwZSxcbiAgICAgICAgY29tcG9uZW50RmFjdG9yeTogbWV0YWRhdGEuY29tcG9uZW50RmFjdG9yeSxcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlTWV0YWRhdGFcbiAgICAgIH0pO1xuICAgICAgaWYgKHRlbXBsYXRlTWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5pbml0Q29tcG9uZW50RmFjdG9yeShtZXRhZGF0YS5jb21wb25lbnRGYWN0b3J5ISwgdGVtcGxhdGVNZXRhZGF0YS5uZ0NvbnRlbnRTZWxlY3RvcnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5fZGlyZWN0aXZlQ2FjaGUuc2V0KGRpcmVjdGl2ZVR5cGUsIG5vcm1hbGl6ZWREaXJNZXRhKTtcbiAgICAgIHRoaXMuX3N1bW1hcnlDYWNoZS5zZXQoZGlyZWN0aXZlVHlwZSwgbm9ybWFsaXplZERpck1ldGEudG9TdW1tYXJ5KCkpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGlmIChtZXRhZGF0YS5pc0NvbXBvbmVudCkge1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBtZXRhZGF0YS50ZW1wbGF0ZSAhO1xuICAgICAgY29uc3QgdGVtcGxhdGVNZXRhID0gdGhpcy5fZGlyZWN0aXZlTm9ybWFsaXplci5ub3JtYWxpemVUZW1wbGF0ZSh7XG4gICAgICAgIG5nTW9kdWxlVHlwZSxcbiAgICAgICAgY29tcG9uZW50VHlwZTogZGlyZWN0aXZlVHlwZSxcbiAgICAgICAgbW9kdWxlVXJsOiB0aGlzLl9yZWZsZWN0b3IuY29tcG9uZW50TW9kdWxlVXJsKGRpcmVjdGl2ZVR5cGUsIGFubm90YXRpb24pLFxuICAgICAgICBlbmNhcHN1bGF0aW9uOiB0ZW1wbGF0ZS5lbmNhcHN1bGF0aW9uLFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUudGVtcGxhdGUsXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZS50ZW1wbGF0ZVVybCxcbiAgICAgICAgc3R5bGVzOiB0ZW1wbGF0ZS5zdHlsZXMsXG4gICAgICAgIHN0eWxlVXJsczogdGVtcGxhdGUuc3R5bGVVcmxzLFxuICAgICAgICBhbmltYXRpb25zOiB0ZW1wbGF0ZS5hbmltYXRpb25zLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB0ZW1wbGF0ZS5pbnRlcnBvbGF0aW9uLFxuICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiB0ZW1wbGF0ZS5wcmVzZXJ2ZVdoaXRlc3BhY2VzXG4gICAgICB9KTtcbiAgICAgIGlmIChpc1Byb21pc2UodGVtcGxhdGVNZXRhKSAmJiBpc1N5bmMpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoY29tcG9uZW50U3RpbGxMb2FkaW5nRXJyb3IoZGlyZWN0aXZlVHlwZSksIGRpcmVjdGl2ZVR5cGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBTeW5jQXN5bmMudGhlbih0ZW1wbGF0ZU1ldGEsIGNyZWF0ZURpcmVjdGl2ZU1ldGFkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGlyZWN0aXZlXG4gICAgICBjcmVhdGVEaXJlY3RpdmVNZXRhZGF0YShudWxsKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldE5vbk5vcm1hbGl6ZWREaXJlY3RpdmVNZXRhZGF0YShkaXJlY3RpdmVUeXBlOiBhbnkpOlxuICAgICAge2Fubm90YXRpb246IERpcmVjdGl2ZSwgbWV0YWRhdGE6IGNwbC5Db21waWxlRGlyZWN0aXZlTWV0YWRhdGF9fG51bGwge1xuICAgIGRpcmVjdGl2ZVR5cGUgPSByZXNvbHZlRm9yd2FyZFJlZihkaXJlY3RpdmVUeXBlKTtcbiAgICBpZiAoIWRpcmVjdGl2ZVR5cGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgY2FjaGVFbnRyeSA9IHRoaXMuX25vbk5vcm1hbGl6ZWREaXJlY3RpdmVDYWNoZS5nZXQoZGlyZWN0aXZlVHlwZSk7XG4gICAgaWYgKGNhY2hlRW50cnkpIHtcbiAgICAgIHJldHVybiBjYWNoZUVudHJ5O1xuICAgIH1cbiAgICBjb25zdCBkaXJNZXRhID0gdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIucmVzb2x2ZShkaXJlY3RpdmVUeXBlLCBmYWxzZSk7XG4gICAgaWYgKCFkaXJNZXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IG5vbk5vcm1hbGl6ZWRUZW1wbGF0ZU1ldGFkYXRhOiBjcGwuQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGEgPSB1bmRlZmluZWQhO1xuXG4gICAgaWYgKGNyZWF0ZUNvbXBvbmVudC5pc1R5cGVPZihkaXJNZXRhKSkge1xuICAgICAgLy8gY29tcG9uZW50XG4gICAgICBjb25zdCBjb21wTWV0YSA9IGRpck1ldGEgYXMgQ29tcG9uZW50O1xuICAgICAgYXNzZXJ0QXJyYXlPZlN0cmluZ3MoJ3N0eWxlcycsIGNvbXBNZXRhLnN0eWxlcyk7XG4gICAgICBhc3NlcnRBcnJheU9mU3RyaW5ncygnc3R5bGVVcmxzJywgY29tcE1ldGEuc3R5bGVVcmxzKTtcbiAgICAgIGFzc2VydEludGVycG9sYXRpb25TeW1ib2xzKCdpbnRlcnBvbGF0aW9uJywgY29tcE1ldGEuaW50ZXJwb2xhdGlvbik7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBjb21wTWV0YS5hbmltYXRpb25zO1xuXG4gICAgICBub25Ob3JtYWxpemVkVGVtcGxhdGVNZXRhZGF0YSA9IG5ldyBjcGwuQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGEoe1xuICAgICAgICBlbmNhcHN1bGF0aW9uOiBub1VuZGVmaW5lZChjb21wTWV0YS5lbmNhcHN1bGF0aW9uKSxcbiAgICAgICAgdGVtcGxhdGU6IG5vVW5kZWZpbmVkKGNvbXBNZXRhLnRlbXBsYXRlKSxcbiAgICAgICAgdGVtcGxhdGVVcmw6IG5vVW5kZWZpbmVkKGNvbXBNZXRhLnRlbXBsYXRlVXJsKSxcbiAgICAgICAgaHRtbEFzdDogbnVsbCxcbiAgICAgICAgc3R5bGVzOiBjb21wTWV0YS5zdHlsZXMgfHwgW10sXG4gICAgICAgIHN0eWxlVXJsczogY29tcE1ldGEuc3R5bGVVcmxzIHx8IFtdLFxuICAgICAgICBhbmltYXRpb25zOiBhbmltYXRpb25zIHx8IFtdLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiBub1VuZGVmaW5lZChjb21wTWV0YS5pbnRlcnBvbGF0aW9uKSxcbiAgICAgICAgaXNJbmxpbmU6ICEhY29tcE1ldGEudGVtcGxhdGUsXG4gICAgICAgIGV4dGVybmFsU3R5bGVzaGVldHM6IFtdLFxuICAgICAgICBuZ0NvbnRlbnRTZWxlY3RvcnM6IFtdLFxuICAgICAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBub1VuZGVmaW5lZChkaXJNZXRhLnByZXNlcnZlV2hpdGVzcGFjZXMpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IGNoYW5nZURldGVjdGlvblN0cmF0ZWd5OiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSA9IG51bGwhO1xuICAgIGxldCB2aWV3UHJvdmlkZXJzOiBjcGwuQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGxldCBlbnRyeUNvbXBvbmVudE1ldGFkYXRhOiBjcGwuQ29tcGlsZUVudHJ5Q29tcG9uZW50TWV0YWRhdGFbXSA9IFtdO1xuICAgIGxldCBzZWxlY3RvciA9IGRpck1ldGEuc2VsZWN0b3I7XG5cbiAgICBpZiAoY3JlYXRlQ29tcG9uZW50LmlzVHlwZU9mKGRpck1ldGEpKSB7XG4gICAgICAvLyBDb21wb25lbnRcbiAgICAgIGNvbnN0IGNvbXBNZXRhID0gZGlyTWV0YSBhcyBDb21wb25lbnQ7XG4gICAgICBjaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSA9IGNvbXBNZXRhLmNoYW5nZURldGVjdGlvbiE7XG4gICAgICBpZiAoY29tcE1ldGEudmlld1Byb3ZpZGVycykge1xuICAgICAgICB2aWV3UHJvdmlkZXJzID0gdGhpcy5fZ2V0UHJvdmlkZXJzTWV0YWRhdGEoXG4gICAgICAgICAgICBjb21wTWV0YS52aWV3UHJvdmlkZXJzLCBlbnRyeUNvbXBvbmVudE1ldGFkYXRhLFxuICAgICAgICAgICAgYHZpZXdQcm92aWRlcnMgZm9yIFwiJHtzdHJpbmdpZnlUeXBlKGRpcmVjdGl2ZVR5cGUpfVwiYCwgW10sIGRpcmVjdGl2ZVR5cGUpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbXBNZXRhLmVudHJ5Q29tcG9uZW50cykge1xuICAgICAgICBlbnRyeUNvbXBvbmVudE1ldGFkYXRhID0gZmxhdHRlbkFuZERlZHVwZUFycmF5KGNvbXBNZXRhLmVudHJ5Q29tcG9uZW50cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh0eXBlKSA9PiB0aGlzLl9nZXRFbnRyeUNvbXBvbmVudE1ldGFkYXRhKHR5cGUpISlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KGVudHJ5Q29tcG9uZW50TWV0YWRhdGEpO1xuICAgICAgfVxuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICBzZWxlY3RvciA9IHRoaXMuX3NjaGVtYVJlZ2lzdHJ5LmdldERlZmF1bHRDb21wb25lbnRFbGVtZW50TmFtZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEaXJlY3RpdmVcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgc2VsZWN0b3IgPSBudWxsITtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJvdmlkZXJzOiBjcGwuQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGlmIChkaXJNZXRhLnByb3ZpZGVycyAhPSBudWxsKSB7XG4gICAgICBwcm92aWRlcnMgPSB0aGlzLl9nZXRQcm92aWRlcnNNZXRhZGF0YShcbiAgICAgICAgICBkaXJNZXRhLnByb3ZpZGVycywgZW50cnlDb21wb25lbnRNZXRhZGF0YSxcbiAgICAgICAgICBgcHJvdmlkZXJzIGZvciBcIiR7c3RyaW5naWZ5VHlwZShkaXJlY3RpdmVUeXBlKX1cImAsIFtdLCBkaXJlY3RpdmVUeXBlKTtcbiAgICB9XG4gICAgbGV0IHF1ZXJpZXM6IGNwbC5Db21waWxlUXVlcnlNZXRhZGF0YVtdID0gW107XG4gICAgbGV0IHZpZXdRdWVyaWVzOiBjcGwuQ29tcGlsZVF1ZXJ5TWV0YWRhdGFbXSA9IFtdO1xuICAgIGlmIChkaXJNZXRhLnF1ZXJpZXMgIT0gbnVsbCkge1xuICAgICAgcXVlcmllcyA9IHRoaXMuX2dldFF1ZXJpZXNNZXRhZGF0YShkaXJNZXRhLnF1ZXJpZXMsIGZhbHNlLCBkaXJlY3RpdmVUeXBlKTtcbiAgICAgIHZpZXdRdWVyaWVzID0gdGhpcy5fZ2V0UXVlcmllc01ldGFkYXRhKGRpck1ldGEucXVlcmllcywgdHJ1ZSwgZGlyZWN0aXZlVHlwZSk7XG4gICAgfVxuXG4gICAgY29uc3QgbWV0YWRhdGEgPSBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLmNyZWF0ZSh7XG4gICAgICBpc0hvc3Q6IGZhbHNlLFxuICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxuICAgICAgZXhwb3J0QXM6IG5vVW5kZWZpbmVkKGRpck1ldGEuZXhwb3J0QXMpLFxuICAgICAgaXNDb21wb25lbnQ6ICEhbm9uTm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGEsXG4gICAgICB0eXBlOiB0aGlzLl9nZXRUeXBlTWV0YWRhdGEoZGlyZWN0aXZlVHlwZSksXG4gICAgICB0ZW1wbGF0ZTogbm9uTm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGEsXG4gICAgICBjaGFuZ2VEZXRlY3Rpb246IGNoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgICAgaW5wdXRzOiBkaXJNZXRhLmlucHV0cyB8fCBbXSxcbiAgICAgIG91dHB1dHM6IGRpck1ldGEub3V0cHV0cyB8fCBbXSxcbiAgICAgIGhvc3Q6IGRpck1ldGEuaG9zdCB8fCB7fSxcbiAgICAgIHByb3ZpZGVyczogcHJvdmlkZXJzIHx8IFtdLFxuICAgICAgdmlld1Byb3ZpZGVyczogdmlld1Byb3ZpZGVycyB8fCBbXSxcbiAgICAgIHF1ZXJpZXM6IHF1ZXJpZXMgfHwgW10sXG4gICAgICBndWFyZHM6IGRpck1ldGEuZ3VhcmRzIHx8IHt9LFxuICAgICAgdmlld1F1ZXJpZXM6IHZpZXdRdWVyaWVzIHx8IFtdLFxuICAgICAgZW50cnlDb21wb25lbnRzOiBlbnRyeUNvbXBvbmVudE1ldGFkYXRhLFxuICAgICAgY29tcG9uZW50Vmlld1R5cGU6IG5vbk5vcm1hbGl6ZWRUZW1wbGF0ZU1ldGFkYXRhID8gdGhpcy5nZXRDb21wb25lbnRWaWV3Q2xhc3MoZGlyZWN0aXZlVHlwZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgIHJlbmRlcmVyVHlwZTogbm9uTm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGEgPyB0aGlzLmdldFJlbmRlcmVyVHlwZShkaXJlY3RpdmVUeXBlKSA6IG51bGwsXG4gICAgICBjb21wb25lbnRGYWN0b3J5OiBudWxsXG4gICAgfSk7XG4gICAgaWYgKG5vbk5vcm1hbGl6ZWRUZW1wbGF0ZU1ldGFkYXRhKSB7XG4gICAgICBtZXRhZGF0YS5jb21wb25lbnRGYWN0b3J5ID1cbiAgICAgICAgICB0aGlzLmdldENvbXBvbmVudEZhY3Rvcnkoc2VsZWN0b3IsIGRpcmVjdGl2ZVR5cGUsIG1ldGFkYXRhLmlucHV0cywgbWV0YWRhdGEub3V0cHV0cyk7XG4gICAgfVxuICAgIGNhY2hlRW50cnkgPSB7bWV0YWRhdGEsIGFubm90YXRpb246IGRpck1ldGF9O1xuICAgIHRoaXMuX25vbk5vcm1hbGl6ZWREaXJlY3RpdmVDYWNoZS5zZXQoZGlyZWN0aXZlVHlwZSwgY2FjaGVFbnRyeSk7XG4gICAgcmV0dXJuIGNhY2hlRW50cnk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbWV0YWRhdGEgZm9yIHRoZSBnaXZlbiBkaXJlY3RpdmUuXG4gICAqIFRoaXMgYXNzdW1lcyBgbG9hZE5nTW9kdWxlRGlyZWN0aXZlQW5kUGlwZU1ldGFkYXRhYCBoYXMgYmVlbiBjYWxsZWQgZmlyc3QuXG4gICAqL1xuICBnZXREaXJlY3RpdmVNZXRhZGF0YShkaXJlY3RpdmVUeXBlOiBhbnkpOiBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhIHtcbiAgICBjb25zdCBkaXJNZXRhID0gdGhpcy5fZGlyZWN0aXZlQ2FjaGUuZ2V0KGRpcmVjdGl2ZVR5cGUpITtcbiAgICBpZiAoIWRpck1ldGEpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIHN5bnRheEVycm9yKFxuICAgICAgICAgICAgICBgSWxsZWdhbCBzdGF0ZTogZ2V0RGlyZWN0aXZlTWV0YWRhdGEgY2FuIG9ubHkgYmUgY2FsbGVkIGFmdGVyIGxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YSBmb3IgYSBtb2R1bGUgdGhhdCBkZWNsYXJlcyBpdC4gRGlyZWN0aXZlICR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKGRpcmVjdGl2ZVR5cGUpfS5gKSxcbiAgICAgICAgICBkaXJlY3RpdmVUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpck1ldGE7XG4gIH1cblxuICBnZXREaXJlY3RpdmVTdW1tYXJ5KGRpclR5cGU6IGFueSk6IGNwbC5Db21waWxlRGlyZWN0aXZlU3VtbWFyeSB7XG4gICAgY29uc3QgZGlyU3VtbWFyeSA9XG4gICAgICAgIDxjcGwuQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnk+dGhpcy5fbG9hZFN1bW1hcnkoZGlyVHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5EaXJlY3RpdmUpO1xuICAgIGlmICghZGlyU3VtbWFyeSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgc3ludGF4RXJyb3IoXG4gICAgICAgICAgICAgIGBJbGxlZ2FsIHN0YXRlOiBDb3VsZCBub3QgbG9hZCB0aGUgc3VtbWFyeSBmb3IgZGlyZWN0aXZlICR7c3RyaW5naWZ5VHlwZShkaXJUeXBlKX0uYCksXG4gICAgICAgICAgZGlyVHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBkaXJTdW1tYXJ5O1xuICB9XG5cbiAgaXNEaXJlY3RpdmUodHlwZTogYW55KSB7XG4gICAgcmV0dXJuICEhdGhpcy5fbG9hZFN1bW1hcnkodHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5EaXJlY3RpdmUpIHx8XG4gICAgICAgIHRoaXMuX2RpcmVjdGl2ZVJlc29sdmVyLmlzRGlyZWN0aXZlKHR5cGUpO1xuICB9XG5cbiAgaXNBYnN0cmFjdERpcmVjdGl2ZSh0eXBlOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBzdW1tYXJ5ID1cbiAgICAgICAgdGhpcy5fbG9hZFN1bW1hcnkodHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5EaXJlY3RpdmUpIGFzIGNwbC5Db21waWxlRGlyZWN0aXZlU3VtbWFyeTtcbiAgICBpZiAoc3VtbWFyeSAmJiAhc3VtbWFyeS5pc0NvbXBvbmVudCkge1xuICAgICAgcmV0dXJuICFzdW1tYXJ5LnNlbGVjdG9yO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldGEgPSB0aGlzLl9kaXJlY3RpdmVSZXNvbHZlci5yZXNvbHZlKHR5cGUsIGZhbHNlKTtcbiAgICBpZiAobWV0YSAmJiAhY3JlYXRlQ29tcG9uZW50LmlzVHlwZU9mKG1ldGEpKSB7XG4gICAgICByZXR1cm4gIW1ldGEuc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNQaXBlKHR5cGU6IGFueSkge1xuICAgIHJldHVybiAhIXRoaXMuX2xvYWRTdW1tYXJ5KHR5cGUsIGNwbC5Db21waWxlU3VtbWFyeUtpbmQuUGlwZSkgfHxcbiAgICAgICAgdGhpcy5fcGlwZVJlc29sdmVyLmlzUGlwZSh0eXBlKTtcbiAgfVxuXG4gIGlzTmdNb2R1bGUodHlwZTogYW55KSB7XG4gICAgcmV0dXJuICEhdGhpcy5fbG9hZFN1bW1hcnkodHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5OZ01vZHVsZSkgfHxcbiAgICAgICAgdGhpcy5fbmdNb2R1bGVSZXNvbHZlci5pc05nTW9kdWxlKHR5cGUpO1xuICB9XG5cbiAgZ2V0TmdNb2R1bGVTdW1tYXJ5KG1vZHVsZVR5cGU6IGFueSwgYWxyZWFkeUNvbGxlY3Rpbmc6IFNldDxhbnk+fG51bGwgPSBudWxsKTpcbiAgICAgIGNwbC5Db21waWxlTmdNb2R1bGVTdW1tYXJ5fG51bGwge1xuICAgIGxldCBtb2R1bGVTdW1tYXJ5OiBjcGwuQ29tcGlsZU5nTW9kdWxlU3VtbWFyeXxudWxsID1cbiAgICAgICAgPGNwbC5Db21waWxlTmdNb2R1bGVTdW1tYXJ5PnRoaXMuX2xvYWRTdW1tYXJ5KG1vZHVsZVR5cGUsIGNwbC5Db21waWxlU3VtbWFyeUtpbmQuTmdNb2R1bGUpO1xuICAgIGlmICghbW9kdWxlU3VtbWFyeSkge1xuICAgICAgY29uc3QgbW9kdWxlTWV0YSA9IHRoaXMuZ2V0TmdNb2R1bGVNZXRhZGF0YShtb2R1bGVUeXBlLCBmYWxzZSwgYWxyZWFkeUNvbGxlY3RpbmcpO1xuICAgICAgbW9kdWxlU3VtbWFyeSA9IG1vZHVsZU1ldGEgPyBtb2R1bGVNZXRhLnRvU3VtbWFyeSgpIDogbnVsbDtcbiAgICAgIGlmIChtb2R1bGVTdW1tYXJ5KSB7XG4gICAgICAgIHRoaXMuX3N1bW1hcnlDYWNoZS5zZXQobW9kdWxlVHlwZSwgbW9kdWxlU3VtbWFyeSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2R1bGVTdW1tYXJ5O1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBkZWNsYXJlZCBkaXJlY3RpdmVzIGFuZCBwaXBlcyBvZiBhbiBOZ01vZHVsZS5cbiAgICovXG4gIGxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YShtb2R1bGVUeXBlOiBhbnksIGlzU3luYzogYm9vbGVhbiwgdGhyb3dJZk5vdEZvdW5kID0gdHJ1ZSk6XG4gICAgICBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IG5nTW9kdWxlID0gdGhpcy5nZXROZ01vZHVsZU1ldGFkYXRhKG1vZHVsZVR5cGUsIHRocm93SWZOb3RGb3VuZCk7XG4gICAgY29uc3QgbG9hZGluZzogUHJvbWlzZTxhbnk+W10gPSBbXTtcbiAgICBpZiAobmdNb2R1bGUpIHtcbiAgICAgIG5nTW9kdWxlLmRlY2xhcmVkRGlyZWN0aXZlcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5sb2FkRGlyZWN0aXZlTWV0YWRhdGEobW9kdWxlVHlwZSwgaWQucmVmZXJlbmNlLCBpc1N5bmMpO1xuICAgICAgICBpZiAocHJvbWlzZSkge1xuICAgICAgICAgIGxvYWRpbmcucHVzaChwcm9taXNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBuZ01vZHVsZS5kZWNsYXJlZFBpcGVzLmZvckVhY2goKGlkKSA9PiB0aGlzLl9sb2FkUGlwZU1ldGFkYXRhKGlkLnJlZmVyZW5jZSkpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobG9hZGluZyk7XG4gIH1cblxuICBnZXRTaGFsbG93TW9kdWxlTWV0YWRhdGEobW9kdWxlVHlwZTogYW55KTogY3BsLkNvbXBpbGVTaGFsbG93TW9kdWxlTWV0YWRhdGF8bnVsbCB7XG4gICAgbGV0IGNvbXBpbGVNZXRhID0gdGhpcy5fc2hhbGxvd01vZHVsZUNhY2hlLmdldChtb2R1bGVUeXBlKTtcbiAgICBpZiAoY29tcGlsZU1ldGEpIHtcbiAgICAgIHJldHVybiBjb21waWxlTWV0YTtcbiAgICB9XG5cbiAgICBjb25zdCBuZ01vZHVsZU1ldGEgPVxuICAgICAgICBmaW5kTGFzdCh0aGlzLl9yZWZsZWN0b3Iuc2hhbGxvd0Fubm90YXRpb25zKG1vZHVsZVR5cGUpLCBjcmVhdGVOZ01vZHVsZS5pc1R5cGVPZik7XG5cbiAgICBjb21waWxlTWV0YSA9IHtcbiAgICAgIHR5cGU6IHRoaXMuX2dldFR5cGVNZXRhZGF0YShtb2R1bGVUeXBlKSxcbiAgICAgIHJhd0V4cG9ydHM6IG5nTW9kdWxlTWV0YS5leHBvcnRzLFxuICAgICAgcmF3SW1wb3J0czogbmdNb2R1bGVNZXRhLmltcG9ydHMsXG4gICAgICByYXdQcm92aWRlcnM6IG5nTW9kdWxlTWV0YS5wcm92aWRlcnMsXG4gICAgfTtcblxuICAgIHRoaXMuX3NoYWxsb3dNb2R1bGVDYWNoZS5zZXQobW9kdWxlVHlwZSwgY29tcGlsZU1ldGEpO1xuICAgIHJldHVybiBjb21waWxlTWV0YTtcbiAgfVxuXG4gIGdldE5nTW9kdWxlTWV0YWRhdGEoXG4gICAgICBtb2R1bGVUeXBlOiBhbnksIHRocm93SWZOb3RGb3VuZCA9IHRydWUsXG4gICAgICBhbHJlYWR5Q29sbGVjdGluZzogU2V0PGFueT58bnVsbCA9IG51bGwpOiBjcGwuQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGF8bnVsbCB7XG4gICAgbW9kdWxlVHlwZSA9IHJlc29sdmVGb3J3YXJkUmVmKG1vZHVsZVR5cGUpO1xuICAgIGxldCBjb21waWxlTWV0YSA9IHRoaXMuX25nTW9kdWxlQ2FjaGUuZ2V0KG1vZHVsZVR5cGUpO1xuICAgIGlmIChjb21waWxlTWV0YSkge1xuICAgICAgcmV0dXJuIGNvbXBpbGVNZXRhO1xuICAgIH1cbiAgICBjb25zdCBtZXRhID0gdGhpcy5fbmdNb2R1bGVSZXNvbHZlci5yZXNvbHZlKG1vZHVsZVR5cGUsIHRocm93SWZOb3RGb3VuZCk7XG4gICAgaWYgKCFtZXRhKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgZGVjbGFyZWREaXJlY3RpdmVzOiBjcGwuQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdID0gW107XG4gICAgY29uc3QgZXhwb3J0ZWROb25Nb2R1bGVJZGVudGlmaWVyczogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGNvbnN0IGRlY2xhcmVkUGlwZXM6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhW10gPSBbXTtcbiAgICBjb25zdCBpbXBvcnRlZE1vZHVsZXM6IGNwbC5Db21waWxlTmdNb2R1bGVTdW1tYXJ5W10gPSBbXTtcbiAgICBjb25zdCBleHBvcnRlZE1vZHVsZXM6IGNwbC5Db21waWxlTmdNb2R1bGVTdW1tYXJ5W10gPSBbXTtcbiAgICBjb25zdCBwcm92aWRlcnM6IGNwbC5Db21waWxlUHJvdmlkZXJNZXRhZGF0YVtdID0gW107XG4gICAgY29uc3QgZW50cnlDb21wb25lbnRzOiBjcGwuQ29tcGlsZUVudHJ5Q29tcG9uZW50TWV0YWRhdGFbXSA9IFtdO1xuICAgIGNvbnN0IGJvb3RzdHJhcENvbXBvbmVudHM6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhW10gPSBbXTtcbiAgICBjb25zdCBzY2hlbWFzOiBTY2hlbWFNZXRhZGF0YVtdID0gW107XG5cbiAgICBpZiAobWV0YS5pbXBvcnRzKSB7XG4gICAgICBmbGF0dGVuQW5kRGVkdXBlQXJyYXkobWV0YS5pbXBvcnRzKS5mb3JFYWNoKChpbXBvcnRlZFR5cGUpID0+IHtcbiAgICAgICAgbGV0IGltcG9ydGVkTW9kdWxlVHlwZTogVHlwZSA9IHVuZGVmaW5lZCE7XG4gICAgICAgIGlmIChpc1ZhbGlkVHlwZShpbXBvcnRlZFR5cGUpKSB7XG4gICAgICAgICAgaW1wb3J0ZWRNb2R1bGVUeXBlID0gaW1wb3J0ZWRUeXBlO1xuICAgICAgICB9IGVsc2UgaWYgKGltcG9ydGVkVHlwZSAmJiBpbXBvcnRlZFR5cGUubmdNb2R1bGUpIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGVXaXRoUHJvdmlkZXJzOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gaW1wb3J0ZWRUeXBlO1xuICAgICAgICAgIGltcG9ydGVkTW9kdWxlVHlwZSA9IG1vZHVsZVdpdGhQcm92aWRlcnMubmdNb2R1bGU7XG4gICAgICAgICAgaWYgKG1vZHVsZVdpdGhQcm92aWRlcnMucHJvdmlkZXJzKSB7XG4gICAgICAgICAgICBwcm92aWRlcnMucHVzaCguLi50aGlzLl9nZXRQcm92aWRlcnNNZXRhZGF0YShcbiAgICAgICAgICAgICAgICBtb2R1bGVXaXRoUHJvdmlkZXJzLnByb3ZpZGVycywgZW50cnlDb21wb25lbnRzLFxuICAgICAgICAgICAgICAgIGBwcm92aWRlciBmb3IgdGhlIE5nTW9kdWxlICcke3N0cmluZ2lmeVR5cGUoaW1wb3J0ZWRNb2R1bGVUeXBlKX0nYCwgW10sXG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRUeXBlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltcG9ydGVkTW9kdWxlVHlwZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9jaGVja1NlbGZJbXBvcnQobW9kdWxlVHlwZSwgaW1wb3J0ZWRNb2R1bGVUeXBlKSkgcmV0dXJuO1xuICAgICAgICAgIGlmICghYWxyZWFkeUNvbGxlY3RpbmcpIGFscmVhZHlDb2xsZWN0aW5nID0gbmV3IFNldCgpO1xuICAgICAgICAgIGlmIChhbHJlYWR5Q29sbGVjdGluZy5oYXMoaW1wb3J0ZWRNb2R1bGVUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgICAgc3ludGF4RXJyb3IoYCR7dGhpcy5fZ2V0VHlwZURlc2NyaXB0b3IoaW1wb3J0ZWRNb2R1bGVUeXBlKX0gJyR7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUoaW1wb3J0ZWRUeXBlKX0nIGlzIGltcG9ydGVkIHJlY3Vyc2l2ZWx5IGJ5IHRoZSBtb2R1bGUgJyR7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9Jy5gKSxcbiAgICAgICAgICAgICAgICBtb2R1bGVUeXBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxyZWFkeUNvbGxlY3RpbmcuYWRkKGltcG9ydGVkTW9kdWxlVHlwZSk7XG4gICAgICAgICAgY29uc3QgaW1wb3J0ZWRNb2R1bGVTdW1tYXJ5ID1cbiAgICAgICAgICAgICAgdGhpcy5nZXROZ01vZHVsZVN1bW1hcnkoaW1wb3J0ZWRNb2R1bGVUeXBlLCBhbHJlYWR5Q29sbGVjdGluZyk7XG4gICAgICAgICAgYWxyZWFkeUNvbGxlY3RpbmcuZGVsZXRlKGltcG9ydGVkTW9kdWxlVHlwZSk7XG4gICAgICAgICAgaWYgKCFpbXBvcnRlZE1vZHVsZVN1bW1hcnkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICAgIHN5bnRheEVycm9yKGBVbmV4cGVjdGVkICR7dGhpcy5fZ2V0VHlwZURlc2NyaXB0b3IoaW1wb3J0ZWRUeXBlKX0gJyR7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUoaW1wb3J0ZWRUeXBlKX0nIGltcG9ydGVkIGJ5IHRoZSBtb2R1bGUgJyR7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9Jy4gUGxlYXNlIGFkZCBhIEBOZ01vZHVsZSBhbm5vdGF0aW9uLmApLFxuICAgICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbXBvcnRlZE1vZHVsZXMucHVzaChpbXBvcnRlZE1vZHVsZVN1bW1hcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICBzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBVbmV4cGVjdGVkIHZhbHVlICcke3N0cmluZ2lmeVR5cGUoaW1wb3J0ZWRUeXBlKX0nIGltcG9ydGVkIGJ5IHRoZSBtb2R1bGUgJyR7XG4gICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nYCksXG4gICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGEuZXhwb3J0cykge1xuICAgICAgZmxhdHRlbkFuZERlZHVwZUFycmF5KG1ldGEuZXhwb3J0cykuZm9yRWFjaCgoZXhwb3J0ZWRUeXBlKSA9PiB7XG4gICAgICAgIGlmICghaXNWYWxpZFR5cGUoZXhwb3J0ZWRUeXBlKSkge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICBzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBVbmV4cGVjdGVkIHZhbHVlICcke3N0cmluZ2lmeVR5cGUoZXhwb3J0ZWRUeXBlKX0nIGV4cG9ydGVkIGJ5IHRoZSBtb2R1bGUgJyR7XG4gICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nYCksXG4gICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFscmVhZHlDb2xsZWN0aW5nKSBhbHJlYWR5Q29sbGVjdGluZyA9IG5ldyBTZXQoKTtcbiAgICAgICAgaWYgKGFscmVhZHlDb2xsZWN0aW5nLmhhcyhleHBvcnRlZFR5cGUpKSB7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgIHN5bnRheEVycm9yKGAke3RoaXMuX2dldFR5cGVEZXNjcmlwdG9yKGV4cG9ydGVkVHlwZSl9ICcke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5KGV4cG9ydGVkVHlwZSl9JyBpcyBleHBvcnRlZCByZWN1cnNpdmVseSBieSB0aGUgbW9kdWxlICcke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nYCksXG4gICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhbHJlYWR5Q29sbGVjdGluZy5hZGQoZXhwb3J0ZWRUeXBlKTtcbiAgICAgICAgY29uc3QgZXhwb3J0ZWRNb2R1bGVTdW1tYXJ5ID0gdGhpcy5nZXROZ01vZHVsZVN1bW1hcnkoZXhwb3J0ZWRUeXBlLCBhbHJlYWR5Q29sbGVjdGluZyk7XG4gICAgICAgIGFscmVhZHlDb2xsZWN0aW5nLmRlbGV0ZShleHBvcnRlZFR5cGUpO1xuICAgICAgICBpZiAoZXhwb3J0ZWRNb2R1bGVTdW1tYXJ5KSB7XG4gICAgICAgICAgZXhwb3J0ZWRNb2R1bGVzLnB1c2goZXhwb3J0ZWRNb2R1bGVTdW1tYXJ5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleHBvcnRlZE5vbk1vZHVsZUlkZW50aWZpZXJzLnB1c2godGhpcy5fZ2V0SWRlbnRpZmllck1ldGFkYXRhKGV4cG9ydGVkVHlwZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBOb3RlOiBUaGlzIHdpbGwgYmUgbW9kaWZpZWQgbGF0ZXIsIHNvIHdlIHJlbHkgb25cbiAgICAvLyBnZXR0aW5nIGEgbmV3IGluc3RhbmNlIGV2ZXJ5IHRpbWUhXG4gICAgY29uc3QgdHJhbnNpdGl2ZU1vZHVsZSA9IHRoaXMuX2dldFRyYW5zaXRpdmVOZ01vZHVsZU1ldGFkYXRhKGltcG9ydGVkTW9kdWxlcywgZXhwb3J0ZWRNb2R1bGVzKTtcbiAgICBpZiAobWV0YS5kZWNsYXJhdGlvbnMpIHtcbiAgICAgIGZsYXR0ZW5BbmREZWR1cGVBcnJheShtZXRhLmRlY2xhcmF0aW9ucykuZm9yRWFjaCgoZGVjbGFyZWRUeXBlKSA9PiB7XG4gICAgICAgIGlmICghaXNWYWxpZFR5cGUoZGVjbGFyZWRUeXBlKSkge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICBzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBVbmV4cGVjdGVkIHZhbHVlICcke3N0cmluZ2lmeVR5cGUoZGVjbGFyZWRUeXBlKX0nIGRlY2xhcmVkIGJ5IHRoZSBtb2R1bGUgJyR7XG4gICAgICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0nYCksXG4gICAgICAgICAgICAgIG1vZHVsZVR5cGUpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNsYXJlZElkZW50aWZpZXIgPSB0aGlzLl9nZXRJZGVudGlmaWVyTWV0YWRhdGEoZGVjbGFyZWRUeXBlKTtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXJlY3RpdmUoZGVjbGFyZWRUeXBlKSkge1xuICAgICAgICAgIGlmICh0aGlzLmlzQWJzdHJhY3REaXJlY3RpdmUoZGVjbGFyZWRUeXBlKSkge1xuICAgICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgICAgc3ludGF4RXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBEaXJlY3RpdmUgJHtzdHJpbmdpZnlUeXBlKGRlY2xhcmVkVHlwZSl9IGhhcyBubyBzZWxlY3RvciwgcGxlYXNlIGFkZCBpdCFgKSxcbiAgICAgICAgICAgICAgICBkZWNsYXJlZFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0cmFuc2l0aXZlTW9kdWxlLmFkZERpcmVjdGl2ZShkZWNsYXJlZElkZW50aWZpZXIpO1xuICAgICAgICAgIGRlY2xhcmVkRGlyZWN0aXZlcy5wdXNoKGRlY2xhcmVkSWRlbnRpZmllcik7XG4gICAgICAgICAgdGhpcy5fYWRkVHlwZVRvTW9kdWxlKGRlY2xhcmVkVHlwZSwgbW9kdWxlVHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1BpcGUoZGVjbGFyZWRUeXBlKSkge1xuICAgICAgICAgIHRyYW5zaXRpdmVNb2R1bGUuYWRkUGlwZShkZWNsYXJlZElkZW50aWZpZXIpO1xuICAgICAgICAgIHRyYW5zaXRpdmVNb2R1bGUucGlwZXMucHVzaChkZWNsYXJlZElkZW50aWZpZXIpO1xuICAgICAgICAgIGRlY2xhcmVkUGlwZXMucHVzaChkZWNsYXJlZElkZW50aWZpZXIpO1xuICAgICAgICAgIHRoaXMuX2FkZFR5cGVUb01vZHVsZShkZWNsYXJlZFR5cGUsIG1vZHVsZVR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgICAgICBzeW50YXhFcnJvcihgVW5leHBlY3RlZCAke3RoaXMuX2dldFR5cGVEZXNjcmlwdG9yKGRlY2xhcmVkVHlwZSl9ICcke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShkZWNsYXJlZFR5cGUpfScgZGVjbGFyZWQgYnkgdGhlIG1vZHVsZSAnJHtcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUoXG4gICAgICAgICAgICAgICAgICAgICAgbW9kdWxlVHlwZSl9Jy4gUGxlYXNlIGFkZCBhIEBQaXBlL0BEaXJlY3RpdmUvQENvbXBvbmVudCBhbm5vdGF0aW9uLmApLFxuICAgICAgICAgICAgICBtb2R1bGVUeXBlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cG9ydGVkRGlyZWN0aXZlczogY3BsLkNvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICAgIGNvbnN0IGV4cG9ydGVkUGlwZXM6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhW10gPSBbXTtcbiAgICBleHBvcnRlZE5vbk1vZHVsZUlkZW50aWZpZXJzLmZvckVhY2goKGV4cG9ydGVkSWQpID0+IHtcbiAgICAgIGlmICh0cmFuc2l0aXZlTW9kdWxlLmRpcmVjdGl2ZXNTZXQuaGFzKGV4cG9ydGVkSWQucmVmZXJlbmNlKSkge1xuICAgICAgICBleHBvcnRlZERpcmVjdGl2ZXMucHVzaChleHBvcnRlZElkKTtcbiAgICAgICAgdHJhbnNpdGl2ZU1vZHVsZS5hZGRFeHBvcnRlZERpcmVjdGl2ZShleHBvcnRlZElkKTtcbiAgICAgIH0gZWxzZSBpZiAodHJhbnNpdGl2ZU1vZHVsZS5waXBlc1NldC5oYXMoZXhwb3J0ZWRJZC5yZWZlcmVuY2UpKSB7XG4gICAgICAgIGV4cG9ydGVkUGlwZXMucHVzaChleHBvcnRlZElkKTtcbiAgICAgICAgdHJhbnNpdGl2ZU1vZHVsZS5hZGRFeHBvcnRlZFBpcGUoZXhwb3J0ZWRJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgIHN5bnRheEVycm9yKGBDYW4ndCBleHBvcnQgJHt0aGlzLl9nZXRUeXBlRGVzY3JpcHRvcihleHBvcnRlZElkLnJlZmVyZW5jZSl9ICR7XG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShleHBvcnRlZElkLnJlZmVyZW5jZSl9IGZyb20gJHtcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfSBhcyBpdCB3YXMgbmVpdGhlciBkZWNsYXJlZCBub3IgaW1wb3J0ZWQhYCksXG4gICAgICAgICAgICBtb2R1bGVUeXBlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVGhlIHByb3ZpZGVycyBvZiB0aGUgbW9kdWxlIGhhdmUgdG8gZ28gbGFzdFxuICAgIC8vIHNvIHRoYXQgdGhleSBvdmVyd3JpdGUgYW55IG90aGVyIHByb3ZpZGVyIHdlIGFscmVhZHkgYWRkZWQuXG4gICAgaWYgKG1ldGEucHJvdmlkZXJzKSB7XG4gICAgICBwcm92aWRlcnMucHVzaCguLi50aGlzLl9nZXRQcm92aWRlcnNNZXRhZGF0YShcbiAgICAgICAgICBtZXRhLnByb3ZpZGVycywgZW50cnlDb21wb25lbnRzLFxuICAgICAgICAgIGBwcm92aWRlciBmb3IgdGhlIE5nTW9kdWxlICcke3N0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9J2AsIFtdLCBtb2R1bGVUeXBlKSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGEuZW50cnlDb21wb25lbnRzKSB7XG4gICAgICBlbnRyeUNvbXBvbmVudHMucHVzaCguLi5mbGF0dGVuQW5kRGVkdXBlQXJyYXkobWV0YS5lbnRyeUNvbXBvbmVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCh0eXBlID0+IHRoaXMuX2dldEVudHJ5Q29tcG9uZW50TWV0YWRhdGEodHlwZSkhKSk7XG4gICAgfVxuXG4gICAgaWYgKG1ldGEuYm9vdHN0cmFwKSB7XG4gICAgICBmbGF0dGVuQW5kRGVkdXBlQXJyYXkobWV0YS5ib290c3RyYXApLmZvckVhY2godHlwZSA9PiB7XG4gICAgICAgIGlmICghaXNWYWxpZFR5cGUodHlwZSkpIHtcbiAgICAgICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICAgICAgc3ludGF4RXJyb3IoYFVuZXhwZWN0ZWQgdmFsdWUgJyR7XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKHR5cGUpfScgdXNlZCBpbiB0aGUgYm9vdHN0cmFwIHByb3BlcnR5IG9mIG1vZHVsZSAnJHtcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUobW9kdWxlVHlwZSl9J2ApLFxuICAgICAgICAgICAgICBtb2R1bGVUeXBlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYm9vdHN0cmFwQ29tcG9uZW50cy5wdXNoKHRoaXMuX2dldElkZW50aWZpZXJNZXRhZGF0YSh0eXBlKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlbnRyeUNvbXBvbmVudHMucHVzaChcbiAgICAgICAgLi4uYm9vdHN0cmFwQ29tcG9uZW50cy5tYXAodHlwZSA9PiB0aGlzLl9nZXRFbnRyeUNvbXBvbmVudE1ldGFkYXRhKHR5cGUucmVmZXJlbmNlKSEpKTtcblxuICAgIGlmIChtZXRhLnNjaGVtYXMpIHtcbiAgICAgIHNjaGVtYXMucHVzaCguLi5mbGF0dGVuQW5kRGVkdXBlQXJyYXkobWV0YS5zY2hlbWFzKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZU1ldGEgPSBuZXcgY3BsLkNvbXBpbGVOZ01vZHVsZU1ldGFkYXRhKHtcbiAgICAgIHR5cGU6IHRoaXMuX2dldFR5cGVNZXRhZGF0YShtb2R1bGVUeXBlKSxcbiAgICAgIHByb3ZpZGVycyxcbiAgICAgIGVudHJ5Q29tcG9uZW50cyxcbiAgICAgIGJvb3RzdHJhcENvbXBvbmVudHMsXG4gICAgICBzY2hlbWFzLFxuICAgICAgZGVjbGFyZWREaXJlY3RpdmVzLFxuICAgICAgZXhwb3J0ZWREaXJlY3RpdmVzLFxuICAgICAgZGVjbGFyZWRQaXBlcyxcbiAgICAgIGV4cG9ydGVkUGlwZXMsXG4gICAgICBpbXBvcnRlZE1vZHVsZXMsXG4gICAgICBleHBvcnRlZE1vZHVsZXMsXG4gICAgICB0cmFuc2l0aXZlTW9kdWxlLFxuICAgICAgaWQ6IG1ldGEuaWQgfHwgbnVsbCxcbiAgICB9KTtcblxuICAgIGVudHJ5Q29tcG9uZW50cy5mb3JFYWNoKChpZCkgPT4gdHJhbnNpdGl2ZU1vZHVsZS5hZGRFbnRyeUNvbXBvbmVudChpZCkpO1xuICAgIHByb3ZpZGVycy5mb3JFYWNoKChwcm92aWRlcikgPT4gdHJhbnNpdGl2ZU1vZHVsZS5hZGRQcm92aWRlcihwcm92aWRlciwgY29tcGlsZU1ldGEhLnR5cGUpKTtcbiAgICB0cmFuc2l0aXZlTW9kdWxlLmFkZE1vZHVsZShjb21waWxlTWV0YS50eXBlKTtcbiAgICB0aGlzLl9uZ01vZHVsZUNhY2hlLnNldChtb2R1bGVUeXBlLCBjb21waWxlTWV0YSk7XG4gICAgcmV0dXJuIGNvbXBpbGVNZXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tTZWxmSW1wb3J0KG1vZHVsZVR5cGU6IFR5cGUsIGltcG9ydGVkTW9kdWxlVHlwZTogVHlwZSk6IGJvb2xlYW4ge1xuICAgIGlmIChtb2R1bGVUeXBlID09PSBpbXBvcnRlZE1vZHVsZVR5cGUpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIHN5bnRheEVycm9yKGAnJHtzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfScgbW9kdWxlIGNhbid0IGltcG9ydCBpdHNlbGZgKSwgbW9kdWxlVHlwZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VHlwZURlc2NyaXB0b3IodHlwZTogVHlwZSk6IHN0cmluZyB7XG4gICAgaWYgKGlzVmFsaWRUeXBlKHR5cGUpKSB7XG4gICAgICBpZiAodGhpcy5pc0RpcmVjdGl2ZSh0eXBlKSkge1xuICAgICAgICByZXR1cm4gJ2RpcmVjdGl2ZSc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzUGlwZSh0eXBlKSkge1xuICAgICAgICByZXR1cm4gJ3BpcGUnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc05nTW9kdWxlKHR5cGUpKSB7XG4gICAgICAgIHJldHVybiAnbW9kdWxlJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKHR5cGUgYXMgYW55KS5wcm92aWRlKSB7XG4gICAgICByZXR1cm4gJ3Byb3ZpZGVyJztcbiAgICB9XG5cbiAgICByZXR1cm4gJ3ZhbHVlJztcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfYWRkVHlwZVRvTW9kdWxlKHR5cGU6IFR5cGUsIG1vZHVsZVR5cGU6IFR5cGUpIHtcbiAgICBjb25zdCBvbGRNb2R1bGUgPSB0aGlzLl9uZ01vZHVsZU9mVHlwZXMuZ2V0KHR5cGUpO1xuICAgIGlmIChvbGRNb2R1bGUgJiYgb2xkTW9kdWxlICE9PSBtb2R1bGVUeXBlKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICBzeW50YXhFcnJvcihcbiAgICAgICAgICAgICAgYFR5cGUgJHtzdHJpbmdpZnlUeXBlKHR5cGUpfSBpcyBwYXJ0IG9mIHRoZSBkZWNsYXJhdGlvbnMgb2YgMiBtb2R1bGVzOiAke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShvbGRNb2R1bGUpfSBhbmQgJHtzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfSEgYCArXG4gICAgICAgICAgICAgIGBQbGVhc2UgY29uc2lkZXIgbW92aW5nICR7c3RyaW5naWZ5VHlwZSh0eXBlKX0gdG8gYSBoaWdoZXIgbW9kdWxlIHRoYXQgaW1wb3J0cyAke1xuICAgICAgICAgICAgICAgICAgc3RyaW5naWZ5VHlwZShvbGRNb2R1bGUpfSBhbmQgJHtzdHJpbmdpZnlUeXBlKG1vZHVsZVR5cGUpfS4gYCArXG4gICAgICAgICAgICAgIGBZb3UgY2FuIGFsc28gY3JlYXRlIGEgbmV3IE5nTW9kdWxlIHRoYXQgZXhwb3J0cyBhbmQgaW5jbHVkZXMgJHtcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUodHlwZSl9IHRoZW4gaW1wb3J0IHRoYXQgTmdNb2R1bGUgaW4gJHtcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUob2xkTW9kdWxlKX0gYW5kICR7c3RyaW5naWZ5VHlwZShtb2R1bGVUeXBlKX0uYCksXG4gICAgICAgICAgbW9kdWxlVHlwZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX25nTW9kdWxlT2ZUeXBlcy5zZXQodHlwZSwgbW9kdWxlVHlwZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRUcmFuc2l0aXZlTmdNb2R1bGVNZXRhZGF0YShcbiAgICAgIGltcG9ydGVkTW9kdWxlczogY3BsLkNvbXBpbGVOZ01vZHVsZVN1bW1hcnlbXSxcbiAgICAgIGV4cG9ydGVkTW9kdWxlczogY3BsLkNvbXBpbGVOZ01vZHVsZVN1bW1hcnlbXSk6IGNwbC5UcmFuc2l0aXZlQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEge1xuICAgIC8vIGNvbGxlY3QgYHByb3ZpZGVyc2AgLyBgZW50cnlDb21wb25lbnRzYCBmcm9tIGFsbCBpbXBvcnRlZCBhbmQgYWxsIGV4cG9ydGVkIG1vZHVsZXNcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgY3BsLlRyYW5zaXRpdmVDb21waWxlTmdNb2R1bGVNZXRhZGF0YSgpO1xuICAgIGNvbnN0IG1vZHVsZXNCeVRva2VuID0gbmV3IE1hcDxhbnksIFNldDxhbnk+PigpO1xuICAgIGltcG9ydGVkTW9kdWxlcy5jb25jYXQoZXhwb3J0ZWRNb2R1bGVzKS5mb3JFYWNoKChtb2RTdW1tYXJ5KSA9PiB7XG4gICAgICBtb2RTdW1tYXJ5Lm1vZHVsZXMuZm9yRWFjaCgobW9kKSA9PiByZXN1bHQuYWRkTW9kdWxlKG1vZCkpO1xuICAgICAgbW9kU3VtbWFyeS5lbnRyeUNvbXBvbmVudHMuZm9yRWFjaCgoY29tcCkgPT4gcmVzdWx0LmFkZEVudHJ5Q29tcG9uZW50KGNvbXApKTtcbiAgICAgIGNvbnN0IGFkZGVkVG9rZW5zID0gbmV3IFNldDxhbnk+KCk7XG4gICAgICBtb2RTdW1tYXJ5LnByb3ZpZGVycy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCB0b2tlblJlZiA9IGNwbC50b2tlblJlZmVyZW5jZShlbnRyeS5wcm92aWRlci50b2tlbik7XG4gICAgICAgIGxldCBwcmV2TW9kdWxlcyA9IG1vZHVsZXNCeVRva2VuLmdldCh0b2tlblJlZik7XG4gICAgICAgIGlmICghcHJldk1vZHVsZXMpIHtcbiAgICAgICAgICBwcmV2TW9kdWxlcyA9IG5ldyBTZXQ8YW55PigpO1xuICAgICAgICAgIG1vZHVsZXNCeVRva2VuLnNldCh0b2tlblJlZiwgcHJldk1vZHVsZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZVJlZiA9IGVudHJ5Lm1vZHVsZS5yZWZlcmVuY2U7XG4gICAgICAgIC8vIE5vdGU6IHRoZSBwcm92aWRlcnMgb2Ygb25lIG1vZHVsZSBtYXkgc3RpbGwgY29udGFpbiBtdWx0aXBsZSBwcm92aWRlcnNcbiAgICAgICAgLy8gcGVyIHRva2VuIChlLmcuIGZvciBtdWx0aSBwcm92aWRlcnMpLCBhbmQgd2UgbmVlZCB0byBwcmVzZXJ2ZSB0aGVzZS5cbiAgICAgICAgaWYgKGFkZGVkVG9rZW5zLmhhcyh0b2tlblJlZikgfHwgIXByZXZNb2R1bGVzLmhhcyhtb2R1bGVSZWYpKSB7XG4gICAgICAgICAgcHJldk1vZHVsZXMuYWRkKG1vZHVsZVJlZik7XG4gICAgICAgICAgYWRkZWRUb2tlbnMuYWRkKHRva2VuUmVmKTtcbiAgICAgICAgICByZXN1bHQuYWRkUHJvdmlkZXIoZW50cnkucHJvdmlkZXIsIGVudHJ5Lm1vZHVsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGV4cG9ydGVkTW9kdWxlcy5mb3JFYWNoKChtb2RTdW1tYXJ5KSA9PiB7XG4gICAgICBtb2RTdW1tYXJ5LmV4cG9ydGVkRGlyZWN0aXZlcy5mb3JFYWNoKChpZCkgPT4gcmVzdWx0LmFkZEV4cG9ydGVkRGlyZWN0aXZlKGlkKSk7XG4gICAgICBtb2RTdW1tYXJ5LmV4cG9ydGVkUGlwZXMuZm9yRWFjaCgoaWQpID0+IHJlc3VsdC5hZGRFeHBvcnRlZFBpcGUoaWQpKTtcbiAgICB9KTtcbiAgICBpbXBvcnRlZE1vZHVsZXMuZm9yRWFjaCgobW9kU3VtbWFyeSkgPT4ge1xuICAgICAgbW9kU3VtbWFyeS5leHBvcnRlZERpcmVjdGl2ZXMuZm9yRWFjaCgoaWQpID0+IHJlc3VsdC5hZGREaXJlY3RpdmUoaWQpKTtcbiAgICAgIG1vZFN1bW1hcnkuZXhwb3J0ZWRQaXBlcy5mb3JFYWNoKChpZCkgPT4gcmVzdWx0LmFkZFBpcGUoaWQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0SWRlbnRpZmllck1ldGFkYXRhKHR5cGU6IFR5cGUpOiBjcGwuQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSB7XG4gICAgdHlwZSA9IHJlc29sdmVGb3J3YXJkUmVmKHR5cGUpO1xuICAgIHJldHVybiB7cmVmZXJlbmNlOiB0eXBlfTtcbiAgfVxuXG4gIGlzSW5qZWN0YWJsZSh0eXBlOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBhbm5vdGF0aW9ucyA9IHRoaXMuX3JlZmxlY3Rvci50cnlBbm5vdGF0aW9ucyh0eXBlKTtcbiAgICByZXR1cm4gYW5ub3RhdGlvbnMuc29tZShhbm4gPT4gY3JlYXRlSW5qZWN0YWJsZS5pc1R5cGVPZihhbm4pKTtcbiAgfVxuXG4gIGdldEluamVjdGFibGVTdW1tYXJ5KHR5cGU6IGFueSk6IGNwbC5Db21waWxlVHlwZVN1bW1hcnkge1xuICAgIHJldHVybiB7XG4gICAgICBzdW1tYXJ5S2luZDogY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5JbmplY3RhYmxlLFxuICAgICAgdHlwZTogdGhpcy5fZ2V0VHlwZU1ldGFkYXRhKHR5cGUsIG51bGwsIGZhbHNlKVxuICAgIH07XG4gIH1cblxuICBnZXRJbmplY3RhYmxlTWV0YWRhdGEoXG4gICAgICB0eXBlOiBhbnksIGRlcGVuZGVuY2llczogYW55W118bnVsbCA9IG51bGwsXG4gICAgICB0aHJvd09uVW5rbm93bkRlcHM6IGJvb2xlYW4gPSB0cnVlKTogY3BsLkNvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGF8bnVsbCB7XG4gICAgY29uc3QgdHlwZVN1bW1hcnkgPSB0aGlzLl9sb2FkU3VtbWFyeSh0eXBlLCBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLkluamVjdGFibGUpO1xuICAgIGNvbnN0IHR5cGVNZXRhZGF0YSA9IHR5cGVTdW1tYXJ5ID9cbiAgICAgICAgdHlwZVN1bW1hcnkudHlwZSA6XG4gICAgICAgIHRoaXMuX2dldFR5cGVNZXRhZGF0YSh0eXBlLCBkZXBlbmRlbmNpZXMsIHRocm93T25Vbmtub3duRGVwcyk7XG5cbiAgICBjb25zdCBhbm5vdGF0aW9uczogSW5qZWN0YWJsZVtdID1cbiAgICAgICAgdGhpcy5fcmVmbGVjdG9yLmFubm90YXRpb25zKHR5cGUpLmZpbHRlcihhbm4gPT4gY3JlYXRlSW5qZWN0YWJsZS5pc1R5cGVPZihhbm4pKTtcblxuICAgIGlmIChhbm5vdGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG1ldGEgPSBhbm5vdGF0aW9uc1thbm5vdGF0aW9ucy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4ge1xuICAgICAgc3ltYm9sOiB0eXBlLFxuICAgICAgdHlwZTogdHlwZU1ldGFkYXRhLFxuICAgICAgcHJvdmlkZWRJbjogbWV0YS5wcm92aWRlZEluLFxuICAgICAgdXNlVmFsdWU6IG1ldGEudXNlVmFsdWUsXG4gICAgICB1c2VDbGFzczogbWV0YS51c2VDbGFzcyxcbiAgICAgIHVzZUV4aXN0aW5nOiBtZXRhLnVzZUV4aXN0aW5nLFxuICAgICAgdXNlRmFjdG9yeTogbWV0YS51c2VGYWN0b3J5LFxuICAgICAgZGVwczogbWV0YS5kZXBzLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRUeXBlTWV0YWRhdGEodHlwZTogVHlwZSwgZGVwZW5kZW5jaWVzOiBhbnlbXXxudWxsID0gbnVsbCwgdGhyb3dPblVua25vd25EZXBzID0gdHJ1ZSk6XG4gICAgICBjcGwuQ29tcGlsZVR5cGVNZXRhZGF0YSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHRoaXMuX2dldElkZW50aWZpZXJNZXRhZGF0YSh0eXBlKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVmZXJlbmNlOiBpZGVudGlmaWVyLnJlZmVyZW5jZSxcbiAgICAgIGRpRGVwczogdGhpcy5fZ2V0RGVwZW5kZW5jaWVzTWV0YWRhdGEoaWRlbnRpZmllci5yZWZlcmVuY2UsIGRlcGVuZGVuY2llcywgdGhyb3dPblVua25vd25EZXBzKSxcbiAgICAgIGxpZmVjeWNsZUhvb2tzOiBnZXRBbGxMaWZlY3ljbGVIb29rcyh0aGlzLl9yZWZsZWN0b3IsIGlkZW50aWZpZXIucmVmZXJlbmNlKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RmFjdG9yeU1ldGFkYXRhKGZhY3Rvcnk6IEZ1bmN0aW9uLCBkZXBlbmRlbmNpZXM6IGFueVtdfG51bGwgPSBudWxsKTpcbiAgICAgIGNwbC5Db21waWxlRmFjdG9yeU1ldGFkYXRhIHtcbiAgICBmYWN0b3J5ID0gcmVzb2x2ZUZvcndhcmRSZWYoZmFjdG9yeSk7XG4gICAgcmV0dXJuIHtyZWZlcmVuY2U6IGZhY3RvcnksIGRpRGVwczogdGhpcy5fZ2V0RGVwZW5kZW5jaWVzTWV0YWRhdGEoZmFjdG9yeSwgZGVwZW5kZW5jaWVzKX07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgbWV0YWRhdGEgZm9yIHRoZSBnaXZlbiBwaXBlLlxuICAgKiBUaGlzIGFzc3VtZXMgYGxvYWROZ01vZHVsZURpcmVjdGl2ZUFuZFBpcGVNZXRhZGF0YWAgaGFzIGJlZW4gY2FsbGVkIGZpcnN0LlxuICAgKi9cbiAgZ2V0UGlwZU1ldGFkYXRhKHBpcGVUeXBlOiBhbnkpOiBjcGwuQ29tcGlsZVBpcGVNZXRhZGF0YXxudWxsIHtcbiAgICBjb25zdCBwaXBlTWV0YSA9IHRoaXMuX3BpcGVDYWNoZS5nZXQocGlwZVR5cGUpO1xuICAgIGlmICghcGlwZU1ldGEpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIHN5bnRheEVycm9yKFxuICAgICAgICAgICAgICBgSWxsZWdhbCBzdGF0ZTogZ2V0UGlwZU1ldGFkYXRhIGNhbiBvbmx5IGJlIGNhbGxlZCBhZnRlciBsb2FkTmdNb2R1bGVEaXJlY3RpdmVBbmRQaXBlTWV0YWRhdGEgZm9yIGEgbW9kdWxlIHRoYXQgZGVjbGFyZXMgaXQuIFBpcGUgJHtcbiAgICAgICAgICAgICAgICAgIHN0cmluZ2lmeVR5cGUocGlwZVR5cGUpfS5gKSxcbiAgICAgICAgICBwaXBlVHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBwaXBlTWV0YSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0UGlwZVN1bW1hcnkocGlwZVR5cGU6IGFueSk6IGNwbC5Db21waWxlUGlwZVN1bW1hcnkge1xuICAgIGNvbnN0IHBpcGVTdW1tYXJ5ID1cbiAgICAgICAgPGNwbC5Db21waWxlUGlwZVN1bW1hcnk+dGhpcy5fbG9hZFN1bW1hcnkocGlwZVR5cGUsIGNwbC5Db21waWxlU3VtbWFyeUtpbmQuUGlwZSk7XG4gICAgaWYgKCFwaXBlU3VtbWFyeSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgc3ludGF4RXJyb3IoXG4gICAgICAgICAgICAgIGBJbGxlZ2FsIHN0YXRlOiBDb3VsZCBub3QgbG9hZCB0aGUgc3VtbWFyeSBmb3IgcGlwZSAke3N0cmluZ2lmeVR5cGUocGlwZVR5cGUpfS5gKSxcbiAgICAgICAgICBwaXBlVHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBwaXBlU3VtbWFyeTtcbiAgfVxuXG4gIGdldE9yTG9hZFBpcGVNZXRhZGF0YShwaXBlVHlwZTogYW55KTogY3BsLkNvbXBpbGVQaXBlTWV0YWRhdGEge1xuICAgIGxldCBwaXBlTWV0YSA9IHRoaXMuX3BpcGVDYWNoZS5nZXQocGlwZVR5cGUpO1xuICAgIGlmICghcGlwZU1ldGEpIHtcbiAgICAgIHBpcGVNZXRhID0gdGhpcy5fbG9hZFBpcGVNZXRhZGF0YShwaXBlVHlwZSk7XG4gICAgfVxuICAgIHJldHVybiBwaXBlTWV0YTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvYWRQaXBlTWV0YWRhdGEocGlwZVR5cGU6IGFueSk6IGNwbC5Db21waWxlUGlwZU1ldGFkYXRhIHtcbiAgICBwaXBlVHlwZSA9IHJlc29sdmVGb3J3YXJkUmVmKHBpcGVUeXBlKTtcbiAgICBjb25zdCBwaXBlQW5ub3RhdGlvbiA9IHRoaXMuX3BpcGVSZXNvbHZlci5yZXNvbHZlKHBpcGVUeXBlKSE7XG5cbiAgICBjb25zdCBwaXBlTWV0YSA9IG5ldyBjcGwuQ29tcGlsZVBpcGVNZXRhZGF0YSh7XG4gICAgICB0eXBlOiB0aGlzLl9nZXRUeXBlTWV0YWRhdGEocGlwZVR5cGUpLFxuICAgICAgbmFtZTogcGlwZUFubm90YXRpb24ubmFtZSxcbiAgICAgIHB1cmU6ICEhcGlwZUFubm90YXRpb24ucHVyZVxuICAgIH0pO1xuICAgIHRoaXMuX3BpcGVDYWNoZS5zZXQocGlwZVR5cGUsIHBpcGVNZXRhKTtcbiAgICB0aGlzLl9zdW1tYXJ5Q2FjaGUuc2V0KHBpcGVUeXBlLCBwaXBlTWV0YS50b1N1bW1hcnkoKSk7XG4gICAgcmV0dXJuIHBpcGVNZXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0RGVwZW5kZW5jaWVzTWV0YWRhdGEoXG4gICAgICB0eXBlT3JGdW5jOiBUeXBlfEZ1bmN0aW9uLCBkZXBlbmRlbmNpZXM6IGFueVtdfG51bGwsXG4gICAgICB0aHJvd09uVW5rbm93bkRlcHMgPSB0cnVlKTogY3BsLkNvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YVtdIHtcbiAgICBsZXQgaGFzVW5rbm93bkRlcHMgPSBmYWxzZTtcbiAgICBjb25zdCBwYXJhbXMgPSBkZXBlbmRlbmNpZXMgfHwgdGhpcy5fcmVmbGVjdG9yLnBhcmFtZXRlcnModHlwZU9yRnVuYykgfHwgW107XG5cbiAgICBjb25zdCBkZXBlbmRlbmNpZXNNZXRhZGF0YTogY3BsLkNvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YVtdID0gcGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgIGxldCBpc0F0dHJpYnV0ZSA9IGZhbHNlO1xuICAgICAgbGV0IGlzSG9zdCA9IGZhbHNlO1xuICAgICAgbGV0IGlzU2VsZiA9IGZhbHNlO1xuICAgICAgbGV0IGlzU2tpcFNlbGYgPSBmYWxzZTtcbiAgICAgIGxldCBpc09wdGlvbmFsID0gZmFsc2U7XG4gICAgICBsZXQgdG9rZW46IGFueSA9IG51bGw7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbSkpIHtcbiAgICAgICAgcGFyYW0uZm9yRWFjaCgocGFyYW1FbnRyeTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGNyZWF0ZUhvc3QuaXNUeXBlT2YocGFyYW1FbnRyeSkpIHtcbiAgICAgICAgICAgIGlzSG9zdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVTZWxmLmlzVHlwZU9mKHBhcmFtRW50cnkpKSB7XG4gICAgICAgICAgICBpc1NlbGYgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlU2tpcFNlbGYuaXNUeXBlT2YocGFyYW1FbnRyeSkpIHtcbiAgICAgICAgICAgIGlzU2tpcFNlbGYgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlT3B0aW9uYWwuaXNUeXBlT2YocGFyYW1FbnRyeSkpIHtcbiAgICAgICAgICAgIGlzT3B0aW9uYWwgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3JlYXRlQXR0cmlidXRlLmlzVHlwZU9mKHBhcmFtRW50cnkpKSB7XG4gICAgICAgICAgICBpc0F0dHJpYnV0ZSA9IHRydWU7XG4gICAgICAgICAgICB0b2tlbiA9IChwYXJhbUVudHJ5IGFzIGFueSkuYXR0cmlidXRlTmFtZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNyZWF0ZUluamVjdC5pc1R5cGVPZihwYXJhbUVudHJ5KSkge1xuICAgICAgICAgICAgdG9rZW4gPSAocGFyYW1FbnRyeSBhcyBhbnkpLnRva2VuO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgIGNyZWF0ZUluamVjdGlvblRva2VuLmlzVHlwZU9mKHBhcmFtRW50cnkpIHx8XG4gICAgICAgICAgICAgIChwYXJhbUVudHJ5IGFzIGFueSkgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgICAgICAgIHRva2VuID0gcGFyYW1FbnRyeTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzVmFsaWRUeXBlKHBhcmFtRW50cnkpICYmIHRva2VuID09IG51bGwpIHtcbiAgICAgICAgICAgIHRva2VuID0gcGFyYW1FbnRyeTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4gPSBwYXJhbTtcbiAgICAgIH1cbiAgICAgIGlmICh0b2tlbiA9PSBudWxsKSB7XG4gICAgICAgIGhhc1Vua25vd25EZXBzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0F0dHJpYnV0ZSxcbiAgICAgICAgaXNIb3N0LFxuICAgICAgICBpc1NlbGYsXG4gICAgICAgIGlzU2tpcFNlbGYsXG4gICAgICAgIGlzT3B0aW9uYWwsXG4gICAgICAgIHRva2VuOiB0aGlzLl9nZXRUb2tlbk1ldGFkYXRhKHRva2VuKVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGlmIChoYXNVbmtub3duRGVwcykge1xuICAgICAgY29uc3QgZGVwc1Rva2VucyA9XG4gICAgICAgICAgZGVwZW5kZW5jaWVzTWV0YWRhdGEubWFwKChkZXApID0+IGRlcC50b2tlbiA/IHN0cmluZ2lmeVR5cGUoZGVwLnRva2VuKSA6ICc/Jykuam9pbignLCAnKTtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgICAgIGBDYW4ndCByZXNvbHZlIGFsbCBwYXJhbWV0ZXJzIGZvciAke3N0cmluZ2lmeVR5cGUodHlwZU9yRnVuYyl9OiAoJHtkZXBzVG9rZW5zfSkuYDtcbiAgICAgIGlmICh0aHJvd09uVW5rbm93bkRlcHMgfHwgdGhpcy5fY29uZmlnLnN0cmljdEluamVjdGlvblBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3Ioc3ludGF4RXJyb3IobWVzc2FnZSksIHR5cGVPckZ1bmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fY29uc29sZS53YXJuKGBXYXJuaW5nOiAke21lc3NhZ2V9IFRoaXMgd2lsbCBiZWNvbWUgYW4gZXJyb3IgaW4gQW5ndWxhciB2Ni54YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlcGVuZGVuY2llc01ldGFkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0VG9rZW5NZXRhZGF0YSh0b2tlbjogYW55KTogY3BsLkNvbXBpbGVUb2tlbk1ldGFkYXRhIHtcbiAgICB0b2tlbiA9IHJlc29sdmVGb3J3YXJkUmVmKHRva2VuKTtcbiAgICBsZXQgY29tcGlsZVRva2VuOiBjcGwuQ29tcGlsZVRva2VuTWV0YWRhdGE7XG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbXBpbGVUb2tlbiA9IHt2YWx1ZTogdG9rZW59O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21waWxlVG9rZW4gPSB7aWRlbnRpZmllcjoge3JlZmVyZW5jZTogdG9rZW59fTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBpbGVUb2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByb3ZpZGVyc01ldGFkYXRhKFxuICAgICAgcHJvdmlkZXJzOiBQcm92aWRlcltdLCB0YXJnZXRFbnRyeUNvbXBvbmVudHM6IGNwbC5Db21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdLFxuICAgICAgZGVidWdJbmZvPzogc3RyaW5nLCBjb21waWxlUHJvdmlkZXJzOiBjcGwuQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSA9IFtdLFxuICAgICAgdHlwZT86IGFueSk6IGNwbC5Db21waWxlUHJvdmlkZXJNZXRhZGF0YVtdIHtcbiAgICBwcm92aWRlcnMuZm9yRWFjaCgocHJvdmlkZXI6IGFueSwgcHJvdmlkZXJJZHg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvdmlkZXIpKSB7XG4gICAgICAgIHRoaXMuX2dldFByb3ZpZGVyc01ldGFkYXRhKHByb3ZpZGVyLCB0YXJnZXRFbnRyeUNvbXBvbmVudHMsIGRlYnVnSW5mbywgY29tcGlsZVByb3ZpZGVycyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm92aWRlciA9IHJlc29sdmVGb3J3YXJkUmVmKHByb3ZpZGVyKTtcbiAgICAgICAgbGV0IHByb3ZpZGVyTWV0YTogY3BsLlByb3ZpZGVyTWV0YSA9IHVuZGVmaW5lZCE7XG4gICAgICAgIGlmIChwcm92aWRlciAmJiB0eXBlb2YgcHJvdmlkZXIgPT09ICdvYmplY3QnICYmIHByb3ZpZGVyLmhhc093blByb3BlcnR5KCdwcm92aWRlJykpIHtcbiAgICAgICAgICB0aGlzLl92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICAgICAgICBwcm92aWRlck1ldGEgPSBuZXcgY3BsLlByb3ZpZGVyTWV0YShwcm92aWRlci5wcm92aWRlLCBwcm92aWRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZFR5cGUocHJvdmlkZXIpKSB7XG4gICAgICAgICAgcHJvdmlkZXJNZXRhID0gbmV3IGNwbC5Qcm92aWRlck1ldGEocHJvdmlkZXIsIHt1c2VDbGFzczogcHJvdmlkZXJ9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm92aWRlciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3Ioc3ludGF4RXJyb3IoXG4gICAgICAgICAgICAgIGBFbmNvdW50ZXJlZCB1bmRlZmluZWQgcHJvdmlkZXIhIFVzdWFsbHkgdGhpcyBtZWFucyB5b3UgaGF2ZSBhIGNpcmN1bGFyIGRlcGVuZGVuY2llcy4gVGhpcyBtaWdodCBiZSBjYXVzZWQgYnkgdXNpbmcgJ2JhcnJlbCcgaW5kZXgudHMgZmlsZXMuYCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwcm92aWRlcnNJbmZvID1cbiAgICAgICAgICAgICAgcHJvdmlkZXJzXG4gICAgICAgICAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgICAgICAgICAgIChzb0Zhcjogc3RyaW5nW10sIHNlZW5Qcm92aWRlcjogYW55LCBzZWVuUHJvdmlkZXJJZHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlZW5Qcm92aWRlcklkeCA8IHByb3ZpZGVySWR4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNvRmFyLnB1c2goYCR7c3RyaW5naWZ5VHlwZShzZWVuUHJvdmlkZXIpfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWVuUHJvdmlkZXJJZHggPT0gcHJvdmlkZXJJZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc29GYXIucHVzaChgPyR7c3RyaW5naWZ5VHlwZShzZWVuUHJvdmlkZXIpfT9gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VlblByb3ZpZGVySWR4ID09IHByb3ZpZGVySWR4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzb0Zhci5wdXNoKCcuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb0ZhcjtcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtdKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAgIHN5bnRheEVycm9yKGBJbnZhbGlkICR7XG4gICAgICAgICAgICAgICAgICBkZWJ1Z0luZm8gP1xuICAgICAgICAgICAgICAgICAgICAgIGRlYnVnSW5mbyA6XG4gICAgICAgICAgICAgICAgICAgICAgJ3Byb3ZpZGVyJ30gLSBvbmx5IGluc3RhbmNlcyBvZiBQcm92aWRlciBhbmQgVHlwZSBhcmUgYWxsb3dlZCwgZ290OiBbJHtcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGVyc0luZm99XWApLFxuICAgICAgICAgICAgICB0eXBlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3ZpZGVyTWV0YS50b2tlbiA9PT1cbiAgICAgICAgICAgIHRoaXMuX3JlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoSWRlbnRpZmllcnMuQU5BTFlaRV9GT1JfRU5UUllfQ09NUE9ORU5UUykpIHtcbiAgICAgICAgICB0YXJnZXRFbnRyeUNvbXBvbmVudHMucHVzaCguLi50aGlzLl9nZXRFbnRyeUNvbXBvbmVudHNGcm9tUHJvdmlkZXIocHJvdmlkZXJNZXRhLCB0eXBlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcGlsZVByb3ZpZGVycy5wdXNoKHRoaXMuZ2V0UHJvdmlkZXJNZXRhZGF0YShwcm92aWRlck1ldGEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb21waWxlUHJvdmlkZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmFsaWRhdGVQcm92aWRlcihwcm92aWRlcjogYW55KTogdm9pZCB7XG4gICAgaWYgKHByb3ZpZGVyLmhhc093blByb3BlcnR5KCd1c2VDbGFzcycpICYmIHByb3ZpZGVyLnVzZUNsYXNzID09IG51bGwpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKHN5bnRheEVycm9yKGBJbnZhbGlkIHByb3ZpZGVyIGZvciAke1xuICAgICAgICAgIHN0cmluZ2lmeVR5cGUocHJvdmlkZXIucHJvdmlkZSl9LiB1c2VDbGFzcyBjYW5ub3QgYmUgJHtwcm92aWRlci51c2VDbGFzc30uXG4gICAgICAgICAgIFVzdWFsbHkgaXQgaGFwcGVucyB3aGVuOlxuICAgICAgICAgICAxLiBUaGVyZSdzIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSAobWlnaHQgYmUgY2F1c2VkIGJ5IHVzaW5nIGluZGV4LnRzIChiYXJyZWwpIGZpbGVzKS5cbiAgICAgICAgICAgMi4gQ2xhc3Mgd2FzIHVzZWQgYmVmb3JlIGl0IHdhcyBkZWNsYXJlZC4gVXNlIGZvcndhcmRSZWYgaW4gdGhpcyBjYXNlLmApKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRFbnRyeUNvbXBvbmVudHNGcm9tUHJvdmlkZXIocHJvdmlkZXI6IGNwbC5Qcm92aWRlck1ldGEsIHR5cGU/OiBhbnkpOlxuICAgICAgY3BsLkNvbXBpbGVFbnRyeUNvbXBvbmVudE1ldGFkYXRhW10ge1xuICAgIGNvbnN0IGNvbXBvbmVudHM6IGNwbC5Db21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdID0gW107XG4gICAgY29uc3QgY29sbGVjdGVkSWRlbnRpZmllcnM6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhW10gPSBbXTtcblxuICAgIGlmIChwcm92aWRlci51c2VGYWN0b3J5IHx8IHByb3ZpZGVyLnVzZUV4aXN0aW5nIHx8IHByb3ZpZGVyLnVzZUNsYXNzKSB7XG4gICAgICB0aGlzLl9yZXBvcnRFcnJvcihcbiAgICAgICAgICBzeW50YXhFcnJvcihgVGhlIEFOQUxZWkVfRk9SX0VOVFJZX0NPTVBPTkVOVFMgdG9rZW4gb25seSBzdXBwb3J0cyB1c2VWYWx1ZSFgKSwgdHlwZSk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgaWYgKCFwcm92aWRlci5tdWx0aSkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgc3ludGF4RXJyb3IoYFRoZSBBTkFMWVpFX0ZPUl9FTlRSWV9DT01QT05FTlRTIHRva2VuIG9ubHkgc3VwcG9ydHMgJ211bHRpID0gdHJ1ZSchYCksXG4gICAgICAgICAgdHlwZSk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgZXh0cmFjdElkZW50aWZpZXJzKHByb3ZpZGVyLnVzZVZhbHVlLCBjb2xsZWN0ZWRJZGVudGlmaWVycyk7XG4gICAgY29sbGVjdGVkSWRlbnRpZmllcnMuZm9yRWFjaCgoaWRlbnRpZmllcikgPT4ge1xuICAgICAgY29uc3QgZW50cnkgPSB0aGlzLl9nZXRFbnRyeUNvbXBvbmVudE1ldGFkYXRhKGlkZW50aWZpZXIucmVmZXJlbmNlLCBmYWxzZSk7XG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgY29tcG9uZW50cy5wdXNoKGVudHJ5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIHByaXZhdGUgX2dldEVudHJ5Q29tcG9uZW50TWV0YWRhdGEoZGlyVHlwZTogYW55LCB0aHJvd0lmTm90Rm91bmQgPSB0cnVlKTpcbiAgICAgIGNwbC5Db21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YXxudWxsIHtcbiAgICBjb25zdCBkaXJNZXRhID0gdGhpcy5nZXROb25Ob3JtYWxpemVkRGlyZWN0aXZlTWV0YWRhdGEoZGlyVHlwZSk7XG4gICAgaWYgKGRpck1ldGEgJiYgZGlyTWV0YS5tZXRhZGF0YS5pc0NvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIHtjb21wb25lbnRUeXBlOiBkaXJUeXBlLCBjb21wb25lbnRGYWN0b3J5OiBkaXJNZXRhLm1ldGFkYXRhLmNvbXBvbmVudEZhY3RvcnkhfTtcbiAgICB9XG4gICAgY29uc3QgZGlyU3VtbWFyeSA9XG4gICAgICAgIDxjcGwuQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnk+dGhpcy5fbG9hZFN1bW1hcnkoZGlyVHlwZSwgY3BsLkNvbXBpbGVTdW1tYXJ5S2luZC5EaXJlY3RpdmUpO1xuICAgIGlmIChkaXJTdW1tYXJ5ICYmIGRpclN1bW1hcnkuaXNDb21wb25lbnQpIHtcbiAgICAgIHJldHVybiB7Y29tcG9uZW50VHlwZTogZGlyVHlwZSwgY29tcG9uZW50RmFjdG9yeTogZGlyU3VtbWFyeS5jb21wb25lbnRGYWN0b3J5IX07XG4gICAgfVxuICAgIGlmICh0aHJvd0lmTm90Rm91bmQpIHtcbiAgICAgIHRocm93IHN5bnRheEVycm9yKGAke2RpclR5cGUubmFtZX0gY2Fubm90IGJlIHVzZWQgYXMgYW4gZW50cnkgY29tcG9uZW50LmApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEluamVjdGFibGVUeXBlTWV0YWRhdGEodHlwZTogVHlwZSwgZGVwZW5kZW5jaWVzOiBhbnlbXXxudWxsID0gbnVsbCk6XG4gICAgICBjcGwuQ29tcGlsZVR5cGVNZXRhZGF0YSB7XG4gICAgY29uc3QgdHlwZVN1bW1hcnkgPSB0aGlzLl9sb2FkU3VtbWFyeSh0eXBlLCBjcGwuQ29tcGlsZVN1bW1hcnlLaW5kLkluamVjdGFibGUpO1xuICAgIGlmICh0eXBlU3VtbWFyeSkge1xuICAgICAgcmV0dXJuIHR5cGVTdW1tYXJ5LnR5cGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9nZXRUeXBlTWV0YWRhdGEodHlwZSwgZGVwZW5kZW5jaWVzKTtcbiAgfVxuXG4gIGdldFByb3ZpZGVyTWV0YWRhdGEocHJvdmlkZXI6IGNwbC5Qcm92aWRlck1ldGEpOiBjcGwuQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEge1xuICAgIGxldCBjb21waWxlRGVwczogY3BsLkNvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YVtdID0gdW5kZWZpbmVkITtcbiAgICBsZXQgY29tcGlsZVR5cGVNZXRhZGF0YTogY3BsLkNvbXBpbGVUeXBlTWV0YWRhdGEgPSBudWxsITtcbiAgICBsZXQgY29tcGlsZUZhY3RvcnlNZXRhZGF0YTogY3BsLkNvbXBpbGVGYWN0b3J5TWV0YWRhdGEgPSBudWxsITtcbiAgICBsZXQgdG9rZW46IGNwbC5Db21waWxlVG9rZW5NZXRhZGF0YSA9IHRoaXMuX2dldFRva2VuTWV0YWRhdGEocHJvdmlkZXIudG9rZW4pO1xuXG4gICAgaWYgKHByb3ZpZGVyLnVzZUNsYXNzKSB7XG4gICAgICBjb21waWxlVHlwZU1ldGFkYXRhID1cbiAgICAgICAgICB0aGlzLl9nZXRJbmplY3RhYmxlVHlwZU1ldGFkYXRhKHByb3ZpZGVyLnVzZUNsYXNzLCBwcm92aWRlci5kZXBlbmRlbmNpZXMpO1xuICAgICAgY29tcGlsZURlcHMgPSBjb21waWxlVHlwZU1ldGFkYXRhLmRpRGVwcztcbiAgICAgIGlmIChwcm92aWRlci50b2tlbiA9PT0gcHJvdmlkZXIudXNlQ2xhc3MpIHtcbiAgICAgICAgLy8gdXNlIHRoZSBjb21waWxlVHlwZU1ldGFkYXRhIGFzIGl0IGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IGxpZmVjeWNsZUhvb2tzLi4uXG4gICAgICAgIHRva2VuID0ge2lkZW50aWZpZXI6IGNvbXBpbGVUeXBlTWV0YWRhdGF9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvdmlkZXIudXNlRmFjdG9yeSkge1xuICAgICAgY29tcGlsZUZhY3RvcnlNZXRhZGF0YSA9IHRoaXMuX2dldEZhY3RvcnlNZXRhZGF0YShwcm92aWRlci51c2VGYWN0b3J5LCBwcm92aWRlci5kZXBlbmRlbmNpZXMpO1xuICAgICAgY29tcGlsZURlcHMgPSBjb21waWxlRmFjdG9yeU1ldGFkYXRhLmRpRGVwcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9rZW46IHRva2VuLFxuICAgICAgdXNlQ2xhc3M6IGNvbXBpbGVUeXBlTWV0YWRhdGEsXG4gICAgICB1c2VWYWx1ZTogcHJvdmlkZXIudXNlVmFsdWUsXG4gICAgICB1c2VGYWN0b3J5OiBjb21waWxlRmFjdG9yeU1ldGFkYXRhLFxuICAgICAgdXNlRXhpc3Rpbmc6IHByb3ZpZGVyLnVzZUV4aXN0aW5nID8gdGhpcy5fZ2V0VG9rZW5NZXRhZGF0YShwcm92aWRlci51c2VFeGlzdGluZykgOiB1bmRlZmluZWQsXG4gICAgICBkZXBzOiBjb21waWxlRGVwcyxcbiAgICAgIG11bHRpOiBwcm92aWRlci5tdWx0aVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9nZXRRdWVyaWVzTWV0YWRhdGEoXG4gICAgICBxdWVyaWVzOiB7W2tleTogc3RyaW5nXTogUXVlcnl9LCBpc1ZpZXdRdWVyeTogYm9vbGVhbixcbiAgICAgIGRpcmVjdGl2ZVR5cGU6IFR5cGUpOiBjcGwuQ29tcGlsZVF1ZXJ5TWV0YWRhdGFbXSB7XG4gICAgY29uc3QgcmVzOiBjcGwuQ29tcGlsZVF1ZXJ5TWV0YWRhdGFbXSA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXMocXVlcmllcykuZm9yRWFjaCgocHJvcGVydHlOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcXVlcmllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgaWYgKHF1ZXJ5LmlzVmlld1F1ZXJ5ID09PSBpc1ZpZXdRdWVyeSkge1xuICAgICAgICByZXMucHVzaCh0aGlzLl9nZXRRdWVyeU1ldGFkYXRhKHF1ZXJ5LCBwcm9wZXJ0eU5hbWUsIGRpcmVjdGl2ZVR5cGUpKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIF9xdWVyeVZhckJpbmRpbmdzKHNlbGVjdG9yOiBhbnkpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yLnNwbGl0KC9cXHMqLFxccyovKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFF1ZXJ5TWV0YWRhdGEocTogUXVlcnksIHByb3BlcnR5TmFtZTogc3RyaW5nLCB0eXBlT3JGdW5jOiBUeXBlfEZ1bmN0aW9uKTpcbiAgICAgIGNwbC5Db21waWxlUXVlcnlNZXRhZGF0YSB7XG4gICAgbGV0IHNlbGVjdG9yczogY3BsLkNvbXBpbGVUb2tlbk1ldGFkYXRhW107XG4gICAgaWYgKHR5cGVvZiBxLnNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgc2VsZWN0b3JzID1cbiAgICAgICAgICB0aGlzLl9xdWVyeVZhckJpbmRpbmdzKHEuc2VsZWN0b3IpLm1hcCh2YXJOYW1lID0+IHRoaXMuX2dldFRva2VuTWV0YWRhdGEodmFyTmFtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXEuc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICBzeW50YXhFcnJvcihgQ2FuJ3QgY29uc3RydWN0IGEgcXVlcnkgZm9yIHRoZSBwcm9wZXJ0eSBcIiR7cHJvcGVydHlOYW1lfVwiIG9mIFwiJHtcbiAgICAgICAgICAgICAgICBzdHJpbmdpZnlUeXBlKHR5cGVPckZ1bmMpfVwiIHNpbmNlIHRoZSBxdWVyeSBzZWxlY3RvciB3YXNuJ3QgZGVmaW5lZC5gKSxcbiAgICAgICAgICAgIHR5cGVPckZ1bmMpO1xuICAgICAgICBzZWxlY3RvcnMgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdG9ycyA9IFt0aGlzLl9nZXRUb2tlbk1ldGFkYXRhKHEuc2VsZWN0b3IpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0b3JzLFxuICAgICAgZmlyc3Q6IHEuZmlyc3QsXG4gICAgICBkZXNjZW5kYW50czogcS5kZXNjZW5kYW50cyxcbiAgICAgIHByb3BlcnR5TmFtZSxcbiAgICAgIHJlYWQ6IHEucmVhZCA/IHRoaXMuX2dldFRva2VuTWV0YWRhdGEocS5yZWFkKSA6IG51bGwhLFxuICAgICAgc3RhdGljOiBxLnN0YXRpY1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9yZXBvcnRFcnJvcihlcnJvcjogYW55LCB0eXBlPzogYW55LCBvdGhlclR5cGU/OiBhbnkpIHtcbiAgICBpZiAodGhpcy5fZXJyb3JDb2xsZWN0b3IpIHtcbiAgICAgIHRoaXMuX2Vycm9yQ29sbGVjdG9yKGVycm9yLCB0eXBlKTtcbiAgICAgIGlmIChvdGhlclR5cGUpIHtcbiAgICAgICAgdGhpcy5fZXJyb3JDb2xsZWN0b3IoZXJyb3IsIG90aGVyVHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkodHJlZTogYW55W10sIG91dDogQXJyYXk8YW55PiA9IFtdKTogQXJyYXk8YW55PiB7XG4gIGlmICh0cmVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gcmVzb2x2ZUZvcndhcmRSZWYodHJlZVtpXSk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICBmbGF0dGVuQXJyYXkoaXRlbSwgb3V0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBkZWR1cGVBcnJheShhcnJheTogYW55W10pOiBBcnJheTxhbnk+IHtcbiAgaWYgKGFycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChhcnJheSkpO1xuICB9XG4gIHJldHVybiBbXTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFuZERlZHVwZUFycmF5KHRyZWU6IGFueVtdKTogQXJyYXk8YW55PiB7XG4gIHJldHVybiBkZWR1cGVBcnJheShmbGF0dGVuQXJyYXkodHJlZSkpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHx8ICh2YWx1ZSBpbnN0YW5jZW9mIFR5cGUpO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SWRlbnRpZmllcnModmFsdWU6IGFueSwgdGFyZ2V0SWRlbnRpZmllcnM6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhW10pIHtcbiAgdmlzaXRWYWx1ZSh2YWx1ZSwgbmV3IF9Db21waWxlVmFsdWVDb252ZXJ0ZXIoKSwgdGFyZ2V0SWRlbnRpZmllcnMpO1xufVxuXG5jbGFzcyBfQ29tcGlsZVZhbHVlQ29udmVydGVyIGV4dGVuZHMgVmFsdWVUcmFuc2Zvcm1lciB7XG4gIHZpc2l0T3RoZXIodmFsdWU6IGFueSwgdGFyZ2V0SWRlbnRpZmllcnM6IGNwbC5Db21waWxlSWRlbnRpZmllck1ldGFkYXRhW10pOiBhbnkge1xuICAgIHRhcmdldElkZW50aWZpZXJzLnB1c2goe3JlZmVyZW5jZTogdmFsdWV9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlUeXBlKHR5cGU6IGFueSk6IHN0cmluZyB7XG4gIGlmICh0eXBlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgcmV0dXJuIGAke3R5cGUubmFtZX0gaW4gJHt0eXBlLmZpbGVQYXRofWA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeSh0eXBlKTtcbiAgfVxufVxuXG4vKipcbiAqIEluZGljYXRlcyB0aGF0IGEgY29tcG9uZW50IGlzIHN0aWxsIGJlaW5nIGxvYWRlZCBpbiBhIHN5bmNocm9ub3VzIGNvbXBpbGUuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvbmVudFN0aWxsTG9hZGluZ0Vycm9yKGNvbXBUeXBlOiBUeXBlKSB7XG4gIGNvbnN0IGVycm9yID1cbiAgICAgIEVycm9yKGBDYW4ndCBjb21waWxlIHN5bmNocm9ub3VzbHkgYXMgJHtzdHJpbmdpZnkoY29tcFR5cGUpfSBpcyBzdGlsbCBiZWluZyBsb2FkZWQhYCk7XG4gIChlcnJvciBhcyBhbnkpW0VSUk9SX0NPTVBPTkVOVF9UWVBFXSA9IGNvbXBUeXBlO1xuICByZXR1cm4gZXJyb3I7XG59XG4iXX0=
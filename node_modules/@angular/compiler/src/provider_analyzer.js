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
        define("@angular/compiler/src/provider_analyzer", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata", "@angular/compiler/src/identifiers", "@angular/compiler/src/parse_util", "@angular/compiler/src/template_parser/template_ast"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    var identifiers_1 = require("@angular/compiler/src/identifiers");
    var parse_util_1 = require("@angular/compiler/src/parse_util");
    var template_ast_1 = require("@angular/compiler/src/template_parser/template_ast");
    var ProviderError = /** @class */ (function (_super) {
        tslib_1.__extends(ProviderError, _super);
        function ProviderError(message, span) {
            return _super.call(this, span, message) || this;
        }
        return ProviderError;
    }(parse_util_1.ParseError));
    exports.ProviderError = ProviderError;
    var ProviderViewContext = /** @class */ (function () {
        function ProviderViewContext(reflector, component) {
            var _this = this;
            this.reflector = reflector;
            this.component = component;
            this.errors = [];
            this.viewQueries = _getViewQueries(component);
            this.viewProviders = new Map();
            component.viewProviders.forEach(function (provider) {
                if (_this.viewProviders.get(compile_metadata_1.tokenReference(provider.token)) == null) {
                    _this.viewProviders.set(compile_metadata_1.tokenReference(provider.token), true);
                }
            });
        }
        return ProviderViewContext;
    }());
    exports.ProviderViewContext = ProviderViewContext;
    var ProviderElementContext = /** @class */ (function () {
        function ProviderElementContext(viewContext, _parent, _isViewRoot, _directiveAsts, attrs, refs, isTemplate, contentQueryStartId, _sourceSpan) {
            var _this = this;
            this.viewContext = viewContext;
            this._parent = _parent;
            this._isViewRoot = _isViewRoot;
            this._directiveAsts = _directiveAsts;
            this._sourceSpan = _sourceSpan;
            this._transformedProviders = new Map();
            this._seenProviders = new Map();
            this._queriedTokens = new Map();
            this.transformedHasViewContainer = false;
            this._attrs = {};
            attrs.forEach(function (attrAst) { return _this._attrs[attrAst.name] = attrAst.value; });
            var directivesMeta = _directiveAsts.map(function (directiveAst) { return directiveAst.directive; });
            this._allProviders =
                _resolveProvidersFromDirectives(directivesMeta, _sourceSpan, viewContext.errors);
            this._contentQueries = _getContentQueries(contentQueryStartId, directivesMeta);
            Array.from(this._allProviders.values()).forEach(function (provider) {
                _this._addQueryReadsTo(provider.token, provider.token, _this._queriedTokens);
            });
            if (isTemplate) {
                var templateRefId = identifiers_1.createTokenForExternalReference(this.viewContext.reflector, identifiers_1.Identifiers.TemplateRef);
                this._addQueryReadsTo(templateRefId, templateRefId, this._queriedTokens);
            }
            refs.forEach(function (refAst) {
                var defaultQueryValue = refAst.value ||
                    identifiers_1.createTokenForExternalReference(_this.viewContext.reflector, identifiers_1.Identifiers.ElementRef);
                _this._addQueryReadsTo({ value: refAst.name }, defaultQueryValue, _this._queriedTokens);
            });
            if (this._queriedTokens.get(this.viewContext.reflector.resolveExternalReference(identifiers_1.Identifiers.ViewContainerRef))) {
                this.transformedHasViewContainer = true;
            }
            // create the providers that we know are eager first
            Array.from(this._allProviders.values()).forEach(function (provider) {
                var eager = provider.eager || _this._queriedTokens.get(compile_metadata_1.tokenReference(provider.token));
                if (eager) {
                    _this._getOrCreateLocalProvider(provider.providerType, provider.token, true);
                }
            });
        }
        ProviderElementContext.prototype.afterElement = function () {
            var _this = this;
            // collect lazy providers
            Array.from(this._allProviders.values()).forEach(function (provider) {
                _this._getOrCreateLocalProvider(provider.providerType, provider.token, false);
            });
        };
        Object.defineProperty(ProviderElementContext.prototype, "transformProviders", {
            get: function () {
                // Note: Maps keep their insertion order.
                var lazyProviders = [];
                var eagerProviders = [];
                this._transformedProviders.forEach(function (provider) {
                    if (provider.eager) {
                        eagerProviders.push(provider);
                    }
                    else {
                        lazyProviders.push(provider);
                    }
                });
                return lazyProviders.concat(eagerProviders);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProviderElementContext.prototype, "transformedDirectiveAsts", {
            get: function () {
                var sortedProviderTypes = this.transformProviders.map(function (provider) { return provider.token.identifier; });
                var sortedDirectives = this._directiveAsts.slice();
                sortedDirectives.sort(function (dir1, dir2) { return sortedProviderTypes.indexOf(dir1.directive.type) -
                    sortedProviderTypes.indexOf(dir2.directive.type); });
                return sortedDirectives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProviderElementContext.prototype, "queryMatches", {
            get: function () {
                var allMatches = [];
                this._queriedTokens.forEach(function (matches) {
                    allMatches.push.apply(allMatches, tslib_1.__spread(matches));
                });
                return allMatches;
            },
            enumerable: true,
            configurable: true
        });
        ProviderElementContext.prototype._addQueryReadsTo = function (token, defaultValue, queryReadTokens) {
            this._getQueriesFor(token).forEach(function (query) {
                var queryValue = query.meta.read || defaultValue;
                var tokenRef = compile_metadata_1.tokenReference(queryValue);
                var queryMatches = queryReadTokens.get(tokenRef);
                if (!queryMatches) {
                    queryMatches = [];
                    queryReadTokens.set(tokenRef, queryMatches);
                }
                queryMatches.push({ queryId: query.queryId, value: queryValue });
            });
        };
        ProviderElementContext.prototype._getQueriesFor = function (token) {
            var result = [];
            var currentEl = this;
            var distance = 0;
            var queries;
            while (currentEl !== null) {
                queries = currentEl._contentQueries.get(compile_metadata_1.tokenReference(token));
                if (queries) {
                    result.push.apply(result, tslib_1.__spread(queries.filter(function (query) { return query.meta.descendants || distance <= 1; })));
                }
                if (currentEl._directiveAsts.length > 0) {
                    distance++;
                }
                currentEl = currentEl._parent;
            }
            queries = this.viewContext.viewQueries.get(compile_metadata_1.tokenReference(token));
            if (queries) {
                result.push.apply(result, tslib_1.__spread(queries));
            }
            return result;
        };
        ProviderElementContext.prototype._getOrCreateLocalProvider = function (requestingProviderType, token, eager) {
            var _this = this;
            var resolvedProvider = this._allProviders.get(compile_metadata_1.tokenReference(token));
            if (!resolvedProvider ||
                ((requestingProviderType === template_ast_1.ProviderAstType.Directive ||
                    requestingProviderType === template_ast_1.ProviderAstType.PublicService) &&
                    resolvedProvider.providerType === template_ast_1.ProviderAstType.PrivateService) ||
                ((requestingProviderType === template_ast_1.ProviderAstType.PrivateService ||
                    requestingProviderType === template_ast_1.ProviderAstType.PublicService) &&
                    resolvedProvider.providerType === template_ast_1.ProviderAstType.Builtin)) {
                return null;
            }
            var transformedProviderAst = this._transformedProviders.get(compile_metadata_1.tokenReference(token));
            if (transformedProviderAst) {
                return transformedProviderAst;
            }
            if (this._seenProviders.get(compile_metadata_1.tokenReference(token)) != null) {
                this.viewContext.errors.push(new ProviderError("Cannot instantiate cyclic dependency! " + compile_metadata_1.tokenName(token), this._sourceSpan));
                return null;
            }
            this._seenProviders.set(compile_metadata_1.tokenReference(token), true);
            var transformedProviders = resolvedProvider.providers.map(function (provider) {
                var transformedUseValue = provider.useValue;
                var transformedUseExisting = provider.useExisting;
                var transformedDeps = undefined;
                if (provider.useExisting != null) {
                    var existingDiDep = _this._getDependency(resolvedProvider.providerType, { token: provider.useExisting }, eager);
                    if (existingDiDep.token != null) {
                        transformedUseExisting = existingDiDep.token;
                    }
                    else {
                        transformedUseExisting = null;
                        transformedUseValue = existingDiDep.value;
                    }
                }
                else if (provider.useFactory) {
                    var deps = provider.deps || provider.useFactory.diDeps;
                    transformedDeps =
                        deps.map(function (dep) { return _this._getDependency(resolvedProvider.providerType, dep, eager); });
                }
                else if (provider.useClass) {
                    var deps = provider.deps || provider.useClass.diDeps;
                    transformedDeps =
                        deps.map(function (dep) { return _this._getDependency(resolvedProvider.providerType, dep, eager); });
                }
                return _transformProvider(provider, {
                    useExisting: transformedUseExisting,
                    useValue: transformedUseValue,
                    deps: transformedDeps
                });
            });
            transformedProviderAst =
                _transformProviderAst(resolvedProvider, { eager: eager, providers: transformedProviders });
            this._transformedProviders.set(compile_metadata_1.tokenReference(token), transformedProviderAst);
            return transformedProviderAst;
        };
        ProviderElementContext.prototype._getLocalDependency = function (requestingProviderType, dep, eager) {
            if (eager === void 0) { eager = false; }
            if (dep.isAttribute) {
                var attrValue = this._attrs[dep.token.value];
                return { isValue: true, value: attrValue == null ? null : attrValue };
            }
            if (dep.token != null) {
                // access builtints
                if ((requestingProviderType === template_ast_1.ProviderAstType.Directive ||
                    requestingProviderType === template_ast_1.ProviderAstType.Component)) {
                    if (compile_metadata_1.tokenReference(dep.token) ===
                        this.viewContext.reflector.resolveExternalReference(identifiers_1.Identifiers.Renderer) ||
                        compile_metadata_1.tokenReference(dep.token) ===
                            this.viewContext.reflector.resolveExternalReference(identifiers_1.Identifiers.ElementRef) ||
                        compile_metadata_1.tokenReference(dep.token) ===
                            this.viewContext.reflector.resolveExternalReference(identifiers_1.Identifiers.ChangeDetectorRef) ||
                        compile_metadata_1.tokenReference(dep.token) ===
                            this.viewContext.reflector.resolveExternalReference(identifiers_1.Identifiers.TemplateRef)) {
                        return dep;
                    }
                    if (compile_metadata_1.tokenReference(dep.token) ===
                        this.viewContext.reflector.resolveExternalReference(identifiers_1.Identifiers.ViewContainerRef)) {
                        this.transformedHasViewContainer = true;
                    }
                }
                // access the injector
                if (compile_metadata_1.tokenReference(dep.token) ===
                    this.viewContext.reflector.resolveExternalReference(identifiers_1.Identifiers.Injector)) {
                    return dep;
                }
                // access providers
                if (this._getOrCreateLocalProvider(requestingProviderType, dep.token, eager) != null) {
                    return dep;
                }
            }
            return null;
        };
        ProviderElementContext.prototype._getDependency = function (requestingProviderType, dep, eager) {
            if (eager === void 0) { eager = false; }
            var currElement = this;
            var currEager = eager;
            var result = null;
            if (!dep.isSkipSelf) {
                result = this._getLocalDependency(requestingProviderType, dep, eager);
            }
            if (dep.isSelf) {
                if (!result && dep.isOptional) {
                    result = { isValue: true, value: null };
                }
            }
            else {
                // check parent elements
                while (!result && currElement._parent) {
                    var prevElement = currElement;
                    currElement = currElement._parent;
                    if (prevElement._isViewRoot) {
                        currEager = false;
                    }
                    result = currElement._getLocalDependency(template_ast_1.ProviderAstType.PublicService, dep, currEager);
                }
                // check @Host restriction
                if (!result) {
                    if (!dep.isHost || this.viewContext.component.isHost ||
                        this.viewContext.component.type.reference === compile_metadata_1.tokenReference(dep.token) ||
                        this.viewContext.viewProviders.get(compile_metadata_1.tokenReference(dep.token)) != null) {
                        result = dep;
                    }
                    else {
                        result = dep.isOptional ? { isValue: true, value: null } : null;
                    }
                }
            }
            if (!result) {
                this.viewContext.errors.push(new ProviderError("No provider for " + compile_metadata_1.tokenName(dep.token), this._sourceSpan));
            }
            return result;
        };
        return ProviderElementContext;
    }());
    exports.ProviderElementContext = ProviderElementContext;
    var NgModuleProviderAnalyzer = /** @class */ (function () {
        function NgModuleProviderAnalyzer(reflector, ngModule, extraProviders, sourceSpan) {
            var _this = this;
            this.reflector = reflector;
            this._transformedProviders = new Map();
            this._seenProviders = new Map();
            this._errors = [];
            this._allProviders = new Map();
            ngModule.transitiveModule.modules.forEach(function (ngModuleType) {
                var ngModuleProvider = { token: { identifier: ngModuleType }, useClass: ngModuleType };
                _resolveProviders([ngModuleProvider], template_ast_1.ProviderAstType.PublicService, true, sourceSpan, _this._errors, _this._allProviders, /* isModule */ true);
            });
            _resolveProviders(ngModule.transitiveModule.providers.map(function (entry) { return entry.provider; }).concat(extraProviders), template_ast_1.ProviderAstType.PublicService, false, sourceSpan, this._errors, this._allProviders, 
            /* isModule */ false);
        }
        NgModuleProviderAnalyzer.prototype.parse = function () {
            var _this = this;
            Array.from(this._allProviders.values()).forEach(function (provider) {
                _this._getOrCreateLocalProvider(provider.token, provider.eager);
            });
            if (this._errors.length > 0) {
                var errorString = this._errors.join('\n');
                throw new Error("Provider parse errors:\n" + errorString);
            }
            // Note: Maps keep their insertion order.
            var lazyProviders = [];
            var eagerProviders = [];
            this._transformedProviders.forEach(function (provider) {
                if (provider.eager) {
                    eagerProviders.push(provider);
                }
                else {
                    lazyProviders.push(provider);
                }
            });
            return lazyProviders.concat(eagerProviders);
        };
        NgModuleProviderAnalyzer.prototype._getOrCreateLocalProvider = function (token, eager) {
            var _this = this;
            var resolvedProvider = this._allProviders.get(compile_metadata_1.tokenReference(token));
            if (!resolvedProvider) {
                return null;
            }
            var transformedProviderAst = this._transformedProviders.get(compile_metadata_1.tokenReference(token));
            if (transformedProviderAst) {
                return transformedProviderAst;
            }
            if (this._seenProviders.get(compile_metadata_1.tokenReference(token)) != null) {
                this._errors.push(new ProviderError("Cannot instantiate cyclic dependency! " + compile_metadata_1.tokenName(token), resolvedProvider.sourceSpan));
                return null;
            }
            this._seenProviders.set(compile_metadata_1.tokenReference(token), true);
            var transformedProviders = resolvedProvider.providers.map(function (provider) {
                var transformedUseValue = provider.useValue;
                var transformedUseExisting = provider.useExisting;
                var transformedDeps = undefined;
                if (provider.useExisting != null) {
                    var existingDiDep = _this._getDependency({ token: provider.useExisting }, eager, resolvedProvider.sourceSpan);
                    if (existingDiDep.token != null) {
                        transformedUseExisting = existingDiDep.token;
                    }
                    else {
                        transformedUseExisting = null;
                        transformedUseValue = existingDiDep.value;
                    }
                }
                else if (provider.useFactory) {
                    var deps = provider.deps || provider.useFactory.diDeps;
                    transformedDeps =
                        deps.map(function (dep) { return _this._getDependency(dep, eager, resolvedProvider.sourceSpan); });
                }
                else if (provider.useClass) {
                    var deps = provider.deps || provider.useClass.diDeps;
                    transformedDeps =
                        deps.map(function (dep) { return _this._getDependency(dep, eager, resolvedProvider.sourceSpan); });
                }
                return _transformProvider(provider, {
                    useExisting: transformedUseExisting,
                    useValue: transformedUseValue,
                    deps: transformedDeps
                });
            });
            transformedProviderAst =
                _transformProviderAst(resolvedProvider, { eager: eager, providers: transformedProviders });
            this._transformedProviders.set(compile_metadata_1.tokenReference(token), transformedProviderAst);
            return transformedProviderAst;
        };
        NgModuleProviderAnalyzer.prototype._getDependency = function (dep, eager, requestorSourceSpan) {
            if (eager === void 0) { eager = false; }
            var foundLocal = false;
            if (!dep.isSkipSelf && dep.token != null) {
                // access the injector
                if (compile_metadata_1.tokenReference(dep.token) ===
                    this.reflector.resolveExternalReference(identifiers_1.Identifiers.Injector) ||
                    compile_metadata_1.tokenReference(dep.token) ===
                        this.reflector.resolveExternalReference(identifiers_1.Identifiers.ComponentFactoryResolver)) {
                    foundLocal = true;
                    // access providers
                }
                else if (this._getOrCreateLocalProvider(dep.token, eager) != null) {
                    foundLocal = true;
                }
            }
            return dep;
        };
        return NgModuleProviderAnalyzer;
    }());
    exports.NgModuleProviderAnalyzer = NgModuleProviderAnalyzer;
    function _transformProvider(provider, _a) {
        var useExisting = _a.useExisting, useValue = _a.useValue, deps = _a.deps;
        return {
            token: provider.token,
            useClass: provider.useClass,
            useExisting: useExisting,
            useFactory: provider.useFactory,
            useValue: useValue,
            deps: deps,
            multi: provider.multi
        };
    }
    function _transformProviderAst(provider, _a) {
        var eager = _a.eager, providers = _a.providers;
        return new template_ast_1.ProviderAst(provider.token, provider.multiProvider, provider.eager || eager, providers, provider.providerType, provider.lifecycleHooks, provider.sourceSpan, provider.isModule);
    }
    function _resolveProvidersFromDirectives(directives, sourceSpan, targetErrors) {
        var providersByToken = new Map();
        directives.forEach(function (directive) {
            var dirProvider = { token: { identifier: directive.type }, useClass: directive.type };
            _resolveProviders([dirProvider], directive.isComponent ? template_ast_1.ProviderAstType.Component : template_ast_1.ProviderAstType.Directive, true, sourceSpan, targetErrors, providersByToken, /* isModule */ false);
        });
        // Note: directives need to be able to overwrite providers of a component!
        var directivesWithComponentFirst = directives.filter(function (dir) { return dir.isComponent; }).concat(directives.filter(function (dir) { return !dir.isComponent; }));
        directivesWithComponentFirst.forEach(function (directive) {
            _resolveProviders(directive.providers, template_ast_1.ProviderAstType.PublicService, false, sourceSpan, targetErrors, providersByToken, /* isModule */ false);
            _resolveProviders(directive.viewProviders, template_ast_1.ProviderAstType.PrivateService, false, sourceSpan, targetErrors, providersByToken, /* isModule */ false);
        });
        return providersByToken;
    }
    function _resolveProviders(providers, providerType, eager, sourceSpan, targetErrors, targetProvidersByToken, isModule) {
        providers.forEach(function (provider) {
            var resolvedProvider = targetProvidersByToken.get(compile_metadata_1.tokenReference(provider.token));
            if (resolvedProvider != null && !!resolvedProvider.multiProvider !== !!provider.multi) {
                targetErrors.push(new ProviderError("Mixing multi and non multi provider is not possible for token " + compile_metadata_1.tokenName(resolvedProvider.token), sourceSpan));
            }
            if (!resolvedProvider) {
                var lifecycleHooks = provider.token.identifier &&
                    provider.token.identifier.lifecycleHooks ?
                    provider.token.identifier.lifecycleHooks :
                    [];
                var isUseValue = !(provider.useClass || provider.useExisting || provider.useFactory);
                resolvedProvider = new template_ast_1.ProviderAst(provider.token, !!provider.multi, eager || isUseValue, [provider], providerType, lifecycleHooks, sourceSpan, isModule);
                targetProvidersByToken.set(compile_metadata_1.tokenReference(provider.token), resolvedProvider);
            }
            else {
                if (!provider.multi) {
                    resolvedProvider.providers.length = 0;
                }
                resolvedProvider.providers.push(provider);
            }
        });
    }
    function _getViewQueries(component) {
        // Note: queries start with id 1 so we can use the number in a Bloom filter!
        var viewQueryId = 1;
        var viewQueries = new Map();
        if (component.viewQueries) {
            component.viewQueries.forEach(function (query) { return _addQueryToTokenMap(viewQueries, { meta: query, queryId: viewQueryId++ }); });
        }
        return viewQueries;
    }
    function _getContentQueries(contentQueryStartId, directives) {
        var contentQueryId = contentQueryStartId;
        var contentQueries = new Map();
        directives.forEach(function (directive, directiveIndex) {
            if (directive.queries) {
                directive.queries.forEach(function (query) { return _addQueryToTokenMap(contentQueries, { meta: query, queryId: contentQueryId++ }); });
            }
        });
        return contentQueries;
    }
    function _addQueryToTokenMap(map, query) {
        query.meta.selectors.forEach(function (token) {
            var entry = map.get(compile_metadata_1.tokenReference(token));
            if (!entry) {
                entry = [];
                map.set(compile_metadata_1.tokenReference(token), entry);
            }
            entry.push(query);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJfYW5hbHl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvcHJvdmlkZXJfYW5hbHl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBR0gsMkVBQWdRO0lBRWhRLGlFQUEyRTtJQUMzRSwrREFBeUQ7SUFDekQsbUZBQTZIO0lBRTdIO1FBQW1DLHlDQUFVO1FBQzNDLHVCQUFZLE9BQWUsRUFBRSxJQUFxQjttQkFDaEQsa0JBQU0sSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQUFDLEFBSkQsQ0FBbUMsdUJBQVUsR0FJNUM7SUFKWSxzQ0FBYTtJQVcxQjtRQVdFLDZCQUFtQixTQUEyQixFQUFTLFNBQW1DO1lBQTFGLGlCQVFDO1lBUmtCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1lBQVMsY0FBUyxHQUFULFNBQVMsQ0FBMEI7WUFGMUYsV0FBTSxHQUFvQixFQUFFLENBQUM7WUFHM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBZ0IsQ0FBQztZQUM3QyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQ3ZDLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ2xFLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUM5RDtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNILDBCQUFDO0lBQUQsQ0FBQyxBQXBCRCxJQW9CQztJQXBCWSxrREFBbUI7SUFzQmhDO1FBV0UsZ0NBQ1csV0FBZ0MsRUFBVSxPQUErQixFQUN4RSxXQUFvQixFQUFVLGNBQThCLEVBQUUsS0FBZ0IsRUFDdEYsSUFBb0IsRUFBRSxVQUFtQixFQUFFLG1CQUEyQixFQUM5RCxXQUE0QjtZQUp4QyxpQkFvQ0M7WUFuQ1UsZ0JBQVcsR0FBWCxXQUFXLENBQXFCO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7WUFDeEUsZ0JBQVcsR0FBWCxXQUFXLENBQVM7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFFNUQsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1lBWmhDLDBCQUFxQixHQUFHLElBQUksR0FBRyxFQUFvQixDQUFDO1lBQ3BELG1CQUFjLEdBQUcsSUFBSSxHQUFHLEVBQWdCLENBQUM7WUFHekMsbUJBQWMsR0FBRyxJQUFJLEdBQUcsRUFBcUIsQ0FBQztZQUV0QyxnQ0FBMkIsR0FBWSxLQUFLLENBQUM7WUFPM0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQXpDLENBQXlDLENBQUMsQ0FBQztZQUN0RSxJQUFNLGNBQWMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLFVBQUEsWUFBWSxJQUFJLE9BQUEsWUFBWSxDQUFDLFNBQVMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1lBQ2xGLElBQUksQ0FBQyxhQUFhO2dCQUNkLCtCQUErQixDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDL0UsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQkFDdkQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDN0UsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFNLGFBQWEsR0FDZiw2Q0FBK0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6RixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDMUU7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtnQkFDbEIsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsS0FBSztvQkFDaEMsNkNBQStCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUseUJBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEYsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUMsRUFBRSxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdEYsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyx5QkFBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRTtnQkFDMUYsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQzthQUN6QztZQUVELG9EQUFvRDtZQUNwRCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dCQUN2RCxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLElBQUksS0FBSyxFQUFFO29CQUNULEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzdFO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsNkNBQVksR0FBWjtZQUFBLGlCQUtDO1lBSkMseUJBQXlCO1lBQ3pCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0JBQ3ZELEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0UsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRUQsc0JBQUksc0RBQWtCO2lCQUF0QjtnQkFDRSx5Q0FBeUM7Z0JBQ3pDLElBQU0sYUFBYSxHQUFrQixFQUFFLENBQUM7Z0JBQ3hDLElBQU0sY0FBYyxHQUFrQixFQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO29CQUN6QyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7d0JBQ2xCLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQy9CO3lCQUFNO3dCQUNMLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM5QyxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDREQUF3QjtpQkFBNUI7Z0JBQ0UsSUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQXpCLENBQXlCLENBQUMsQ0FBQztnQkFDL0YsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyRCxnQkFBZ0IsQ0FBQyxJQUFJLENBQ2pCLFVBQUMsSUFBSSxFQUFFLElBQUksSUFBSyxPQUFBLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDNUQsbUJBQW1CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBRHBDLENBQ29DLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLGdEQUFZO2lCQUFoQjtnQkFDRSxJQUFNLFVBQVUsR0FBaUIsRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQXFCO29CQUNoRCxVQUFVLENBQUMsSUFBSSxPQUFmLFVBQVUsbUJBQVMsT0FBTyxHQUFFO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLFVBQVUsQ0FBQztZQUNwQixDQUFDOzs7V0FBQTtRQUVPLGlEQUFnQixHQUF4QixVQUNJLEtBQTJCLEVBQUUsWUFBa0MsRUFDL0QsZUFBdUM7WUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLO2dCQUN2QyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLENBQUM7Z0JBQ25ELElBQU0sUUFBUSxHQUFHLGlDQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVDLElBQUksWUFBWSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ2pCLFlBQVksR0FBRyxFQUFFLENBQUM7b0JBQ2xCLGVBQWUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRU8sK0NBQWMsR0FBdEIsVUFBdUIsS0FBMkI7WUFDaEQsSUFBTSxNQUFNLEdBQWtCLEVBQUUsQ0FBQztZQUNqQyxJQUFJLFNBQVMsR0FBMkIsSUFBSSxDQUFDO1lBQzdDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNqQixJQUFJLE9BQWdDLENBQUM7WUFDckMsT0FBTyxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUN6QixPQUFPLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxNQUFNLENBQUMsSUFBSSxPQUFYLE1BQU0sbUJBQVMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQXZDLENBQXVDLENBQUMsR0FBRTtpQkFDcEY7Z0JBQ0QsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLFFBQVEsRUFBRSxDQUFDO2lCQUNaO2dCQUNELFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxpQ0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEUsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLElBQUksT0FBWCxNQUFNLG1CQUFTLE9BQU8sR0FBRTthQUN6QjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFHTywwREFBeUIsR0FBakMsVUFDSSxzQkFBdUMsRUFBRSxLQUEyQixFQUNwRSxLQUFjO1lBRmxCLGlCQXVEQztZQXBEQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNqQixDQUFDLENBQUMsc0JBQXNCLEtBQUssOEJBQWUsQ0FBQyxTQUFTO29CQUNwRCxzQkFBc0IsS0FBSyw4QkFBZSxDQUFDLGFBQWEsQ0FBQztvQkFDMUQsZ0JBQWdCLENBQUMsWUFBWSxLQUFLLDhCQUFlLENBQUMsY0FBYyxDQUFDO2dCQUNsRSxDQUFDLENBQUMsc0JBQXNCLEtBQUssOEJBQWUsQ0FBQyxjQUFjO29CQUN6RCxzQkFBc0IsS0FBSyw4QkFBZSxDQUFDLGFBQWEsQ0FBQztvQkFDMUQsZ0JBQWdCLENBQUMsWUFBWSxLQUFLLDhCQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQy9ELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksc0JBQXNCLEVBQUU7Z0JBQzFCLE9BQU8sc0JBQXNCLENBQUM7YUFDL0I7WUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FDMUMsMkNBQXlDLDRCQUFTLENBQUMsS0FBSyxDQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxpQ0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JELElBQU0sb0JBQW9CLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFDLFFBQVE7Z0JBQ25FLElBQUksbUJBQW1CLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDNUMsSUFBSSxzQkFBc0IsR0FBRyxRQUFRLENBQUMsV0FBWSxDQUFDO2dCQUNuRCxJQUFJLGVBQWUsR0FBa0MsU0FBVSxDQUFDO2dCQUNoRSxJQUFJLFFBQVEsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO29CQUNoQyxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUNyQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBQyxFQUFFLEtBQUssQ0FBRSxDQUFDO29CQUMxRSxJQUFJLGFBQWEsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUMvQixzQkFBc0IsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO3FCQUM5Qzt5QkFBTTt3QkFDTCxzQkFBc0IsR0FBRyxJQUFLLENBQUM7d0JBQy9CLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7cUJBQzNDO2lCQUNGO3FCQUFNLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtvQkFDOUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDekQsZUFBZTt3QkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBRSxFQUEvRCxDQUErRCxDQUFDLENBQUM7aUJBQ3hGO3FCQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtvQkFDNUIsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztvQkFDdkQsZUFBZTt3QkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBRSxFQUEvRCxDQUErRCxDQUFDLENBQUM7aUJBQ3hGO2dCQUNELE9BQU8sa0JBQWtCLENBQUMsUUFBUSxFQUFFO29CQUNsQyxXQUFXLEVBQUUsc0JBQXNCO29CQUNuQyxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixJQUFJLEVBQUUsZUFBZTtpQkFDdEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxzQkFBc0I7Z0JBQ2xCLHFCQUFxQixDQUFDLGdCQUFnQixFQUFFLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQyxDQUFDO1lBQzdGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sc0JBQXNCLENBQUM7UUFDaEMsQ0FBQztRQUVPLG9EQUFtQixHQUEzQixVQUNJLHNCQUF1QyxFQUFFLEdBQWdDLEVBQ3pFLEtBQXNCO1lBQXRCLHNCQUFBLEVBQUEsYUFBc0I7WUFDeEIsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFO2dCQUNuQixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELE9BQU8sRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxDQUFDO2FBQ3JFO1lBRUQsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDckIsbUJBQW1CO2dCQUNuQixJQUFJLENBQUMsc0JBQXNCLEtBQUssOEJBQWUsQ0FBQyxTQUFTO29CQUNwRCxzQkFBc0IsS0FBSyw4QkFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUMxRCxJQUFJLGlDQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQUM7d0JBQzdFLGlDQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzs0QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUM7d0JBQy9FLGlDQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzs0QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQy9DLHlCQUFXLENBQUMsaUJBQWlCLENBQUM7d0JBQ3RDLGlDQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzs0QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMseUJBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRTt3QkFDcEYsT0FBTyxHQUFHLENBQUM7cUJBQ1o7b0JBQ0QsSUFBSSxpQ0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHlCQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDcEYsSUFBK0MsQ0FBQywyQkFBMkIsR0FBRyxJQUFJLENBQUM7cUJBQ3JGO2lCQUNGO2dCQUNELHNCQUFzQjtnQkFDdEIsSUFBSSxpQ0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLHlCQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzdFLE9BQU8sR0FBRyxDQUFDO2lCQUNaO2dCQUNELG1CQUFtQjtnQkFDbkIsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ3BGLE9BQU8sR0FBRyxDQUFDO2lCQUNaO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFTywrQ0FBYyxHQUF0QixVQUNJLHNCQUF1QyxFQUFFLEdBQWdDLEVBQ3pFLEtBQXNCO1lBQXRCLHNCQUFBLEVBQUEsYUFBc0I7WUFDeEIsSUFBSSxXQUFXLEdBQTJCLElBQUksQ0FBQztZQUMvQyxJQUFJLFNBQVMsR0FBWSxLQUFLLENBQUM7WUFDL0IsSUFBSSxNQUFNLEdBQXFDLElBQUksQ0FBQztZQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkU7WUFDRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO29CQUM3QixNQUFNLEdBQUcsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQztpQkFDdkM7YUFDRjtpQkFBTTtnQkFDTCx3QkFBd0I7Z0JBQ3hCLE9BQU8sQ0FBQyxNQUFNLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckMsSUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUNoQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztvQkFDbEMsSUFBSSxXQUFXLENBQUMsV0FBVyxFQUFFO3dCQUMzQixTQUFTLEdBQUcsS0FBSyxDQUFDO3FCQUNuQjtvQkFDRCxNQUFNLEdBQUcsV0FBVyxDQUFDLG1CQUFtQixDQUFDLDhCQUFlLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztpQkFDekY7Z0JBQ0QsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU07d0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssaUNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBTSxDQUFDO3dCQUN4RSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxHQUFHLENBQUMsS0FBTSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7d0JBQzFFLE1BQU0sR0FBRyxHQUFHLENBQUM7cUJBQ2Q7eUJBQU07d0JBQ0wsTUFBTSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztxQkFDL0Q7aUJBQ0Y7YUFDRjtZQUNELElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN4QixJQUFJLGFBQWEsQ0FBQyxxQkFBbUIsNEJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBTSxDQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDdEY7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBQ0gsNkJBQUM7SUFBRCxDQUFDLEFBdlFELElBdVFDO0lBdlFZLHdEQUFzQjtJQTBRbkM7UUFNRSxrQ0FDWSxTQUEyQixFQUFFLFFBQWlDLEVBQ3RFLGNBQXlDLEVBQUUsVUFBMkI7WUFGMUUsaUJBY0M7WUFiVyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtZQU4vQiwwQkFBcUIsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztZQUNwRCxtQkFBYyxHQUFHLElBQUksR0FBRyxFQUFnQixDQUFDO1lBRXpDLFlBQU8sR0FBb0IsRUFBRSxDQUFDO1lBS3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7WUFDakQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxZQUFpQztnQkFDMUUsSUFBTSxnQkFBZ0IsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7Z0JBQ3JGLGlCQUFpQixDQUNiLENBQUMsZ0JBQWdCLENBQUMsRUFBRSw4QkFBZSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQ2pGLEtBQUksQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBQ0gsaUJBQWlCLENBQ2IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFDdkYsOEJBQWUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2xGLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBRUQsd0NBQUssR0FBTDtZQUFBLGlCQW1CQztZQWxCQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dCQUN2RCxLQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakUsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTJCLFdBQWEsQ0FBQyxDQUFDO2FBQzNEO1lBQ0QseUNBQXlDO1lBQ3pDLElBQU0sYUFBYSxHQUFrQixFQUFFLENBQUM7WUFDeEMsSUFBTSxjQUFjLEdBQWtCLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLFVBQUEsUUFBUTtnQkFDekMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO29CQUNsQixjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUMvQjtxQkFBTTtvQkFDTCxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFTyw0REFBeUIsR0FBakMsVUFBa0MsS0FBMkIsRUFBRSxLQUFjO1lBQTdFLGlCQWdEQztZQS9DQyxJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxJQUFJLHNCQUFzQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25GLElBQUksc0JBQXNCLEVBQUU7Z0JBQzFCLE9BQU8sc0JBQXNCLENBQUM7YUFDL0I7WUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksYUFBYSxDQUMvQiwyQ0FBeUMsNEJBQVMsQ0FBQyxLQUFLLENBQUcsRUFDM0QsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDckQsSUFBTSxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBUTtnQkFDbkUsSUFBSSxtQkFBbUIsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUM1QyxJQUFJLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxXQUFZLENBQUM7Z0JBQ25ELElBQUksZUFBZSxHQUFrQyxTQUFVLENBQUM7Z0JBQ2hFLElBQUksUUFBUSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7b0JBQ2hDLElBQU0sYUFBYSxHQUNmLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDM0YsSUFBSSxhQUFhLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTt3QkFDL0Isc0JBQXNCLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztxQkFDOUM7eUJBQU07d0JBQ0wsc0JBQXNCLEdBQUcsSUFBSyxDQUFDO3dCQUMvQixtQkFBbUIsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDO3FCQUMzQztpQkFDRjtxQkFBTSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQzlCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ3pELGVBQWU7d0JBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBNUQsQ0FBNEQsQ0FBQyxDQUFDO2lCQUNyRjtxQkFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUU7b0JBQzVCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7b0JBQ3ZELGVBQWU7d0JBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsRUFBNUQsQ0FBNEQsQ0FBQyxDQUFDO2lCQUNyRjtnQkFDRCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtvQkFDbEMsV0FBVyxFQUFFLHNCQUFzQjtvQkFDbkMsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsSUFBSSxFQUFFLGVBQWU7aUJBQ3RCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsc0JBQXNCO2dCQUNsQixxQkFBcUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUM5RSxPQUFPLHNCQUFzQixDQUFDO1FBQ2hDLENBQUM7UUFFTyxpREFBYyxHQUF0QixVQUNJLEdBQWdDLEVBQUUsS0FBc0IsRUFDeEQsbUJBQW9DO1lBREYsc0JBQUEsRUFBQSxhQUFzQjtZQUUxRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3hDLHNCQUFzQjtnQkFDdEIsSUFBSSxpQ0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMseUJBQVcsQ0FBQyxRQUFRLENBQUM7b0JBQ2pFLGlDQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyx5QkFBVyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7b0JBQ3JGLFVBQVUsR0FBRyxJQUFJLENBQUM7b0JBQ2xCLG1CQUFtQjtpQkFDcEI7cUJBQU0sSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ25FLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Y7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUM7UUFDSCwrQkFBQztJQUFELENBQUMsQUEvR0QsSUErR0M7SUEvR1ksNERBQXdCO0lBaUhyQyxTQUFTLGtCQUFrQixDQUN2QixRQUFpQyxFQUNqQyxFQUMyRjtZQUQxRiw0QkFBVyxFQUFFLHNCQUFRLEVBQUUsY0FBSTtRQUU5QixPQUFPO1lBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtZQUMzQixXQUFXLEVBQUUsV0FBVztZQUN4QixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVU7WUFDL0IsUUFBUSxFQUFFLFFBQVE7WUFDbEIsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLHFCQUFxQixDQUMxQixRQUFxQixFQUNyQixFQUEwRTtZQUF6RSxnQkFBSyxFQUFFLHdCQUFTO1FBQ25CLE9BQU8sSUFBSSwwQkFBVyxDQUNsQixRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEtBQUssSUFBSSxLQUFLLEVBQUUsU0FBUyxFQUMxRSxRQUFRLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELFNBQVMsK0JBQStCLENBQ3BDLFVBQXFDLEVBQUUsVUFBMkIsRUFDbEUsWUFBMEI7UUFDNUIsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUNyRCxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUMzQixJQUFNLFdBQVcsR0FDYSxFQUFDLEtBQUssRUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUMsQ0FBQztZQUM5RixpQkFBaUIsQ0FDYixDQUFDLFdBQVcsQ0FBQyxFQUNiLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLDhCQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyw4QkFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQ25GLFVBQVUsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsMEVBQTBFO1FBQzFFLElBQU0sNEJBQTRCLEdBQzlCLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFmLENBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FBQztRQUNqRyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1lBQzdDLGlCQUFpQixDQUNiLFNBQVMsQ0FBQyxTQUFTLEVBQUUsOEJBQWUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQ25GLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QyxpQkFBaUIsQ0FDYixTQUFTLENBQUMsYUFBYSxFQUFFLDhCQUFlLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUN4RixnQkFBZ0IsRUFBRSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRCxTQUFTLGlCQUFpQixDQUN0QixTQUFvQyxFQUFFLFlBQTZCLEVBQUUsS0FBYyxFQUNuRixVQUEyQixFQUFFLFlBQTBCLEVBQ3ZELHNCQUE2QyxFQUFFLFFBQWlCO1FBQ2xFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1lBQ3pCLElBQUksZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEYsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRTtnQkFDckYsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FDL0IsbUVBQ0ksNEJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUcsRUFDdkMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNsQjtZQUNELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDckIsSUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVO29CQUNsQixRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDL0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ2pFLEVBQUUsQ0FBQztnQkFDUCxJQUFNLFVBQVUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdkYsZ0JBQWdCLEdBQUcsSUFBSSwwQkFBVyxDQUM5QixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssSUFBSSxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEVBQy9FLGNBQWMsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxpQ0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzlFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO29CQUNuQixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztpQkFDdkM7Z0JBQ0QsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMzQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFNBQVMsZUFBZSxDQUFDLFNBQW1DO1FBQzFELDRFQUE0RTtRQUM1RSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFDbEQsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3pCLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUN6QixVQUFDLEtBQUssSUFBSyxPQUFBLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFDLENBQUMsRUFBdkUsQ0FBdUUsQ0FBQyxDQUFDO1NBQ3pGO1FBQ0QsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELFNBQVMsa0JBQWtCLENBQ3ZCLG1CQUEyQixFQUFFLFVBQXFDO1FBQ3BFLElBQUksY0FBYyxHQUFHLG1CQUFtQixDQUFDO1FBQ3pDLElBQU0sY0FBYyxHQUFHLElBQUksR0FBRyxFQUFzQixDQUFDO1FBQ3JELFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTLEVBQUUsY0FBYztZQUMzQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUNyQixVQUFDLEtBQUssSUFBSyxPQUFBLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUFDLENBQUMsRUFBN0UsQ0FBNkUsQ0FBQyxDQUFDO2FBQy9GO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQsU0FBUyxtQkFBbUIsQ0FBQyxHQUE0QixFQUFFLEtBQWtCO1FBQzNFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQTJCO1lBQ3ZELElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxHQUFHLENBQUMsR0FBRyxDQUFDLGlDQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDdkM7WUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0NvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YSwgQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBDb21waWxlRGlyZWN0aXZlU3VtbWFyeSwgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsIENvbXBpbGVQcm92aWRlck1ldGFkYXRhLCBDb21waWxlUXVlcnlNZXRhZGF0YSwgQ29tcGlsZVRva2VuTWV0YWRhdGEsIENvbXBpbGVUeXBlTWV0YWRhdGEsIHRva2VuTmFtZSwgdG9rZW5SZWZlcmVuY2V9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVSZWZsZWN0b3J9IGZyb20gJy4vY29tcGlsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlLCBJZGVudGlmaWVyc30gZnJvbSAnLi9pZGVudGlmaWVycyc7XG5pbXBvcnQge1BhcnNlRXJyb3IsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi9wYXJzZV91dGlsJztcbmltcG9ydCB7QXR0ckFzdCwgRGlyZWN0aXZlQXN0LCBQcm92aWRlckFzdCwgUHJvdmlkZXJBc3RUeXBlLCBRdWVyeU1hdGNoLCBSZWZlcmVuY2VBc3R9IGZyb20gJy4vdGVtcGxhdGVfcGFyc2VyL3RlbXBsYXRlX2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlckVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgc3VwZXIoc3BhbiwgbWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBRdWVyeVdpdGhJZCB7XG4gIG1ldGE6IENvbXBpbGVRdWVyeU1ldGFkYXRhO1xuICBxdWVyeUlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlclZpZXdDb250ZXh0IHtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdmlld1F1ZXJpZXM6IE1hcDxhbnksIFF1ZXJ5V2l0aElkW10+O1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqL1xuICB2aWV3UHJvdmlkZXJzOiBNYXA8YW55LCBib29sZWFuPjtcbiAgZXJyb3JzOiBQcm92aWRlckVycm9yW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLCBwdWJsaWMgY29tcG9uZW50OiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEpIHtcbiAgICB0aGlzLnZpZXdRdWVyaWVzID0gX2dldFZpZXdRdWVyaWVzKGNvbXBvbmVudCk7XG4gICAgdGhpcy52aWV3UHJvdmlkZXJzID0gbmV3IE1hcDxhbnksIGJvb2xlYW4+KCk7XG4gICAgY29tcG9uZW50LnZpZXdQcm92aWRlcnMuZm9yRWFjaCgocHJvdmlkZXIpID0+IHtcbiAgICAgIGlmICh0aGlzLnZpZXdQcm92aWRlcnMuZ2V0KHRva2VuUmVmZXJlbmNlKHByb3ZpZGVyLnRva2VuKSkgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnZpZXdQcm92aWRlcnMuc2V0KHRva2VuUmVmZXJlbmNlKHByb3ZpZGVyLnRva2VuKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb3ZpZGVyRWxlbWVudENvbnRleHQge1xuICBwcml2YXRlIF9jb250ZW50UXVlcmllczogTWFwPGFueSwgUXVlcnlXaXRoSWRbXT47XG5cbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZWRQcm92aWRlcnMgPSBuZXcgTWFwPGFueSwgUHJvdmlkZXJBc3Q+KCk7XG4gIHByaXZhdGUgX3NlZW5Qcm92aWRlcnMgPSBuZXcgTWFwPGFueSwgYm9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfYWxsUHJvdmlkZXJzOiBNYXA8YW55LCBQcm92aWRlckFzdD47XG4gIHByaXZhdGUgX2F0dHJzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJpdmF0ZSBfcXVlcmllZFRva2VucyA9IG5ldyBNYXA8YW55LCBRdWVyeU1hdGNoW10+KCk7XG5cbiAgcHVibGljIHJlYWRvbmx5IHRyYW5zZm9ybWVkSGFzVmlld0NvbnRhaW5lcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHVibGljIHZpZXdDb250ZXh0OiBQcm92aWRlclZpZXdDb250ZXh0LCBwcml2YXRlIF9wYXJlbnQ6IFByb3ZpZGVyRWxlbWVudENvbnRleHQsXG4gICAgICBwcml2YXRlIF9pc1ZpZXdSb290OiBib29sZWFuLCBwcml2YXRlIF9kaXJlY3RpdmVBc3RzOiBEaXJlY3RpdmVBc3RbXSwgYXR0cnM6IEF0dHJBc3RbXSxcbiAgICAgIHJlZnM6IFJlZmVyZW5jZUFzdFtdLCBpc1RlbXBsYXRlOiBib29sZWFuLCBjb250ZW50UXVlcnlTdGFydElkOiBudW1iZXIsXG4gICAgICBwcml2YXRlIF9zb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICB0aGlzLl9hdHRycyA9IHt9O1xuICAgIGF0dHJzLmZvckVhY2goKGF0dHJBc3QpID0+IHRoaXMuX2F0dHJzW2F0dHJBc3QubmFtZV0gPSBhdHRyQXN0LnZhbHVlKTtcbiAgICBjb25zdCBkaXJlY3RpdmVzTWV0YSA9IF9kaXJlY3RpdmVBc3RzLm1hcChkaXJlY3RpdmVBc3QgPT4gZGlyZWN0aXZlQXN0LmRpcmVjdGl2ZSk7XG4gICAgdGhpcy5fYWxsUHJvdmlkZXJzID1cbiAgICAgICAgX3Jlc29sdmVQcm92aWRlcnNGcm9tRGlyZWN0aXZlcyhkaXJlY3RpdmVzTWV0YSwgX3NvdXJjZVNwYW4sIHZpZXdDb250ZXh0LmVycm9ycyk7XG4gICAgdGhpcy5fY29udGVudFF1ZXJpZXMgPSBfZ2V0Q29udGVudFF1ZXJpZXMoY29udGVudFF1ZXJ5U3RhcnRJZCwgZGlyZWN0aXZlc01ldGEpO1xuICAgIEFycmF5LmZyb20odGhpcy5fYWxsUHJvdmlkZXJzLnZhbHVlcygpKS5mb3JFYWNoKChwcm92aWRlcikgPT4ge1xuICAgICAgdGhpcy5fYWRkUXVlcnlSZWFkc1RvKHByb3ZpZGVyLnRva2VuLCBwcm92aWRlci50b2tlbiwgdGhpcy5fcXVlcmllZFRva2Vucyk7XG4gICAgfSk7XG4gICAgaWYgKGlzVGVtcGxhdGUpIHtcbiAgICAgIGNvbnN0IHRlbXBsYXRlUmVmSWQgPVxuICAgICAgICAgIGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UodGhpcy52aWV3Q29udGV4dC5yZWZsZWN0b3IsIElkZW50aWZpZXJzLlRlbXBsYXRlUmVmKTtcbiAgICAgIHRoaXMuX2FkZFF1ZXJ5UmVhZHNUbyh0ZW1wbGF0ZVJlZklkLCB0ZW1wbGF0ZVJlZklkLCB0aGlzLl9xdWVyaWVkVG9rZW5zKTtcbiAgICB9XG4gICAgcmVmcy5mb3JFYWNoKChyZWZBc3QpID0+IHtcbiAgICAgIGxldCBkZWZhdWx0UXVlcnlWYWx1ZSA9IHJlZkFzdC52YWx1ZSB8fFxuICAgICAgICAgIGNyZWF0ZVRva2VuRm9yRXh0ZXJuYWxSZWZlcmVuY2UodGhpcy52aWV3Q29udGV4dC5yZWZsZWN0b3IsIElkZW50aWZpZXJzLkVsZW1lbnRSZWYpO1xuICAgICAgdGhpcy5fYWRkUXVlcnlSZWFkc1RvKHt2YWx1ZTogcmVmQXN0Lm5hbWV9LCBkZWZhdWx0UXVlcnlWYWx1ZSwgdGhpcy5fcXVlcmllZFRva2Vucyk7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX3F1ZXJpZWRUb2tlbnMuZ2V0KFxuICAgICAgICAgICAgdGhpcy52aWV3Q29udGV4dC5yZWZsZWN0b3IucmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKElkZW50aWZpZXJzLlZpZXdDb250YWluZXJSZWYpKSkge1xuICAgICAgdGhpcy50cmFuc2Zvcm1lZEhhc1ZpZXdDb250YWluZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSB0aGUgcHJvdmlkZXJzIHRoYXQgd2Uga25vdyBhcmUgZWFnZXIgZmlyc3RcbiAgICBBcnJheS5mcm9tKHRoaXMuX2FsbFByb3ZpZGVycy52YWx1ZXMoKSkuZm9yRWFjaCgocHJvdmlkZXIpID0+IHtcbiAgICAgIGNvbnN0IGVhZ2VyID0gcHJvdmlkZXIuZWFnZXIgfHwgdGhpcy5fcXVlcmllZFRva2Vucy5nZXQodG9rZW5SZWZlcmVuY2UocHJvdmlkZXIudG9rZW4pKTtcbiAgICAgIGlmIChlYWdlcikge1xuICAgICAgICB0aGlzLl9nZXRPckNyZWF0ZUxvY2FsUHJvdmlkZXIocHJvdmlkZXIucHJvdmlkZXJUeXBlLCBwcm92aWRlci50b2tlbiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZnRlckVsZW1lbnQoKSB7XG4gICAgLy8gY29sbGVjdCBsYXp5IHByb3ZpZGVyc1xuICAgIEFycmF5LmZyb20odGhpcy5fYWxsUHJvdmlkZXJzLnZhbHVlcygpKS5mb3JFYWNoKChwcm92aWRlcikgPT4ge1xuICAgICAgdGhpcy5fZ2V0T3JDcmVhdGVMb2NhbFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyVHlwZSwgcHJvdmlkZXIudG9rZW4sIGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCB0cmFuc2Zvcm1Qcm92aWRlcnMoKTogUHJvdmlkZXJBc3RbXSB7XG4gICAgLy8gTm90ZTogTWFwcyBrZWVwIHRoZWlyIGluc2VydGlvbiBvcmRlci5cbiAgICBjb25zdCBsYXp5UHJvdmlkZXJzOiBQcm92aWRlckFzdFtdID0gW107XG4gICAgY29uc3QgZWFnZXJQcm92aWRlcnM6IFByb3ZpZGVyQXN0W10gPSBbXTtcbiAgICB0aGlzLl90cmFuc2Zvcm1lZFByb3ZpZGVycy5mb3JFYWNoKHByb3ZpZGVyID0+IHtcbiAgICAgIGlmIChwcm92aWRlci5lYWdlcikge1xuICAgICAgICBlYWdlclByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhenlQcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhenlQcm92aWRlcnMuY29uY2F0KGVhZ2VyUHJvdmlkZXJzKTtcbiAgfVxuXG4gIGdldCB0cmFuc2Zvcm1lZERpcmVjdGl2ZUFzdHMoKTogRGlyZWN0aXZlQXN0W10ge1xuICAgIGNvbnN0IHNvcnRlZFByb3ZpZGVyVHlwZXMgPSB0aGlzLnRyYW5zZm9ybVByb3ZpZGVycy5tYXAocHJvdmlkZXIgPT4gcHJvdmlkZXIudG9rZW4uaWRlbnRpZmllcik7XG4gICAgY29uc3Qgc29ydGVkRGlyZWN0aXZlcyA9IHRoaXMuX2RpcmVjdGl2ZUFzdHMuc2xpY2UoKTtcbiAgICBzb3J0ZWREaXJlY3RpdmVzLnNvcnQoXG4gICAgICAgIChkaXIxLCBkaXIyKSA9PiBzb3J0ZWRQcm92aWRlclR5cGVzLmluZGV4T2YoZGlyMS5kaXJlY3RpdmUudHlwZSkgLVxuICAgICAgICAgICAgc29ydGVkUHJvdmlkZXJUeXBlcy5pbmRleE9mKGRpcjIuZGlyZWN0aXZlLnR5cGUpKTtcbiAgICByZXR1cm4gc29ydGVkRGlyZWN0aXZlcztcbiAgfVxuXG4gIGdldCBxdWVyeU1hdGNoZXMoKTogUXVlcnlNYXRjaFtdIHtcbiAgICBjb25zdCBhbGxNYXRjaGVzOiBRdWVyeU1hdGNoW10gPSBbXTtcbiAgICB0aGlzLl9xdWVyaWVkVG9rZW5zLmZvckVhY2goKG1hdGNoZXM6IFF1ZXJ5TWF0Y2hbXSkgPT4ge1xuICAgICAgYWxsTWF0Y2hlcy5wdXNoKC4uLm1hdGNoZXMpO1xuICAgIH0pO1xuICAgIHJldHVybiBhbGxNYXRjaGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkUXVlcnlSZWFkc1RvKFxuICAgICAgdG9rZW46IENvbXBpbGVUb2tlbk1ldGFkYXRhLCBkZWZhdWx0VmFsdWU6IENvbXBpbGVUb2tlbk1ldGFkYXRhLFxuICAgICAgcXVlcnlSZWFkVG9rZW5zOiBNYXA8YW55LCBRdWVyeU1hdGNoW10+KSB7XG4gICAgdGhpcy5fZ2V0UXVlcmllc0Zvcih0b2tlbikuZm9yRWFjaCgocXVlcnkpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5VmFsdWUgPSBxdWVyeS5tZXRhLnJlYWQgfHwgZGVmYXVsdFZhbHVlO1xuICAgICAgY29uc3QgdG9rZW5SZWYgPSB0b2tlblJlZmVyZW5jZShxdWVyeVZhbHVlKTtcbiAgICAgIGxldCBxdWVyeU1hdGNoZXMgPSBxdWVyeVJlYWRUb2tlbnMuZ2V0KHRva2VuUmVmKTtcbiAgICAgIGlmICghcXVlcnlNYXRjaGVzKSB7XG4gICAgICAgIHF1ZXJ5TWF0Y2hlcyA9IFtdO1xuICAgICAgICBxdWVyeVJlYWRUb2tlbnMuc2V0KHRva2VuUmVmLCBxdWVyeU1hdGNoZXMpO1xuICAgICAgfVxuICAgICAgcXVlcnlNYXRjaGVzLnB1c2goe3F1ZXJ5SWQ6IHF1ZXJ5LnF1ZXJ5SWQsIHZhbHVlOiBxdWVyeVZhbHVlfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRRdWVyaWVzRm9yKHRva2VuOiBDb21waWxlVG9rZW5NZXRhZGF0YSk6IFF1ZXJ5V2l0aElkW10ge1xuICAgIGNvbnN0IHJlc3VsdDogUXVlcnlXaXRoSWRbXSA9IFtdO1xuICAgIGxldCBjdXJyZW50RWw6IFByb3ZpZGVyRWxlbWVudENvbnRleHQgPSB0aGlzO1xuICAgIGxldCBkaXN0YW5jZSA9IDA7XG4gICAgbGV0IHF1ZXJpZXM6IFF1ZXJ5V2l0aElkW118dW5kZWZpbmVkO1xuICAgIHdoaWxlIChjdXJyZW50RWwgIT09IG51bGwpIHtcbiAgICAgIHF1ZXJpZXMgPSBjdXJyZW50RWwuX2NvbnRlbnRRdWVyaWVzLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpO1xuICAgICAgaWYgKHF1ZXJpZXMpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goLi4ucXVlcmllcy5maWx0ZXIoKHF1ZXJ5KSA9PiBxdWVyeS5tZXRhLmRlc2NlbmRhbnRzIHx8IGRpc3RhbmNlIDw9IDEpKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50RWwuX2RpcmVjdGl2ZUFzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBkaXN0YW5jZSsrO1xuICAgICAgfVxuICAgICAgY3VycmVudEVsID0gY3VycmVudEVsLl9wYXJlbnQ7XG4gICAgfVxuICAgIHF1ZXJpZXMgPSB0aGlzLnZpZXdDb250ZXh0LnZpZXdRdWVyaWVzLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpO1xuICAgIGlmIChxdWVyaWVzKSB7XG4gICAgICByZXN1bHQucHVzaCguLi5xdWVyaWVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgcHJpdmF0ZSBfZ2V0T3JDcmVhdGVMb2NhbFByb3ZpZGVyKFxuICAgICAgcmVxdWVzdGluZ1Byb3ZpZGVyVHlwZTogUHJvdmlkZXJBc3RUeXBlLCB0b2tlbjogQ29tcGlsZVRva2VuTWV0YWRhdGEsXG4gICAgICBlYWdlcjogYm9vbGVhbik6IFByb3ZpZGVyQXN0fG51bGwge1xuICAgIGNvbnN0IHJlc29sdmVkUHJvdmlkZXIgPSB0aGlzLl9hbGxQcm92aWRlcnMuZ2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSk7XG4gICAgaWYgKCFyZXNvbHZlZFByb3ZpZGVyIHx8XG4gICAgICAgICgocmVxdWVzdGluZ1Byb3ZpZGVyVHlwZSA9PT0gUHJvdmlkZXJBc3RUeXBlLkRpcmVjdGl2ZSB8fFxuICAgICAgICAgIHJlcXVlc3RpbmdQcm92aWRlclR5cGUgPT09IFByb3ZpZGVyQXN0VHlwZS5QdWJsaWNTZXJ2aWNlKSAmJlxuICAgICAgICAgcmVzb2x2ZWRQcm92aWRlci5wcm92aWRlclR5cGUgPT09IFByb3ZpZGVyQXN0VHlwZS5Qcml2YXRlU2VydmljZSkgfHxcbiAgICAgICAgKChyZXF1ZXN0aW5nUHJvdmlkZXJUeXBlID09PSBQcm92aWRlckFzdFR5cGUuUHJpdmF0ZVNlcnZpY2UgfHxcbiAgICAgICAgICByZXF1ZXN0aW5nUHJvdmlkZXJUeXBlID09PSBQcm92aWRlckFzdFR5cGUuUHVibGljU2VydmljZSkgJiZcbiAgICAgICAgIHJlc29sdmVkUHJvdmlkZXIucHJvdmlkZXJUeXBlID09PSBQcm92aWRlckFzdFR5cGUuQnVpbHRpbikpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgdHJhbnNmb3JtZWRQcm92aWRlckFzdCA9IHRoaXMuX3RyYW5zZm9ybWVkUHJvdmlkZXJzLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpO1xuICAgIGlmICh0cmFuc2Zvcm1lZFByb3ZpZGVyQXN0KSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtZWRQcm92aWRlckFzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlZW5Qcm92aWRlcnMuZ2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSkgIT0gbnVsbCkge1xuICAgICAgdGhpcy52aWV3Q29udGV4dC5lcnJvcnMucHVzaChuZXcgUHJvdmlkZXJFcnJvcihcbiAgICAgICAgICBgQ2Fubm90IGluc3RhbnRpYXRlIGN5Y2xpYyBkZXBlbmRlbmN5ISAke3Rva2VuTmFtZSh0b2tlbil9YCwgdGhpcy5fc291cmNlU3BhbikpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3NlZW5Qcm92aWRlcnMuc2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSwgdHJ1ZSk7XG4gICAgY29uc3QgdHJhbnNmb3JtZWRQcm92aWRlcnMgPSByZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVycy5tYXAoKHByb3ZpZGVyKSA9PiB7XG4gICAgICBsZXQgdHJhbnNmb3JtZWRVc2VWYWx1ZSA9IHByb3ZpZGVyLnVzZVZhbHVlO1xuICAgICAgbGV0IHRyYW5zZm9ybWVkVXNlRXhpc3RpbmcgPSBwcm92aWRlci51c2VFeGlzdGluZyE7XG4gICAgICBsZXQgdHJhbnNmb3JtZWREZXBzOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGFbXSA9IHVuZGVmaW5lZCE7XG4gICAgICBpZiAocHJvdmlkZXIudXNlRXhpc3RpbmcgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0RpRGVwID0gdGhpcy5fZ2V0RGVwZW5kZW5jeShcbiAgICAgICAgICAgIHJlc29sdmVkUHJvdmlkZXIucHJvdmlkZXJUeXBlLCB7dG9rZW46IHByb3ZpZGVyLnVzZUV4aXN0aW5nfSwgZWFnZXIpITtcbiAgICAgICAgaWYgKGV4aXN0aW5nRGlEZXAudG9rZW4gIT0gbnVsbCkge1xuICAgICAgICAgIHRyYW5zZm9ybWVkVXNlRXhpc3RpbmcgPSBleGlzdGluZ0RpRGVwLnRva2VuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyYW5zZm9ybWVkVXNlRXhpc3RpbmcgPSBudWxsITtcbiAgICAgICAgICB0cmFuc2Zvcm1lZFVzZVZhbHVlID0gZXhpc3RpbmdEaURlcC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcm92aWRlci51c2VGYWN0b3J5KSB7XG4gICAgICAgIGNvbnN0IGRlcHMgPSBwcm92aWRlci5kZXBzIHx8IHByb3ZpZGVyLnVzZUZhY3RvcnkuZGlEZXBzO1xuICAgICAgICB0cmFuc2Zvcm1lZERlcHMgPVxuICAgICAgICAgICAgZGVwcy5tYXAoKGRlcCkgPT4gdGhpcy5fZ2V0RGVwZW5kZW5jeShyZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVyVHlwZSwgZGVwLCBlYWdlcikhKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvdmlkZXIudXNlQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgZGVwcyA9IHByb3ZpZGVyLmRlcHMgfHwgcHJvdmlkZXIudXNlQ2xhc3MuZGlEZXBzO1xuICAgICAgICB0cmFuc2Zvcm1lZERlcHMgPVxuICAgICAgICAgICAgZGVwcy5tYXAoKGRlcCkgPT4gdGhpcy5fZ2V0RGVwZW5kZW5jeShyZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVyVHlwZSwgZGVwLCBlYWdlcikhKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdHJhbnNmb3JtUHJvdmlkZXIocHJvdmlkZXIsIHtcbiAgICAgICAgdXNlRXhpc3Rpbmc6IHRyYW5zZm9ybWVkVXNlRXhpc3RpbmcsXG4gICAgICAgIHVzZVZhbHVlOiB0cmFuc2Zvcm1lZFVzZVZhbHVlLFxuICAgICAgICBkZXBzOiB0cmFuc2Zvcm1lZERlcHNcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRyYW5zZm9ybWVkUHJvdmlkZXJBc3QgPVxuICAgICAgICBfdHJhbnNmb3JtUHJvdmlkZXJBc3QocmVzb2x2ZWRQcm92aWRlciwge2VhZ2VyOiBlYWdlciwgcHJvdmlkZXJzOiB0cmFuc2Zvcm1lZFByb3ZpZGVyc30pO1xuICAgIHRoaXMuX3RyYW5zZm9ybWVkUHJvdmlkZXJzLnNldCh0b2tlblJlZmVyZW5jZSh0b2tlbiksIHRyYW5zZm9ybWVkUHJvdmlkZXJBc3QpO1xuICAgIHJldHVybiB0cmFuc2Zvcm1lZFByb3ZpZGVyQXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TG9jYWxEZXBlbmRlbmN5KFxuICAgICAgcmVxdWVzdGluZ1Byb3ZpZGVyVHlwZTogUHJvdmlkZXJBc3RUeXBlLCBkZXA6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YSxcbiAgICAgIGVhZ2VyOiBib29sZWFuID0gZmFsc2UpOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGF8bnVsbCB7XG4gICAgaWYgKGRlcC5pc0F0dHJpYnV0ZSkge1xuICAgICAgY29uc3QgYXR0clZhbHVlID0gdGhpcy5fYXR0cnNbZGVwLnRva2VuIS52YWx1ZV07XG4gICAgICByZXR1cm4ge2lzVmFsdWU6IHRydWUsIHZhbHVlOiBhdHRyVmFsdWUgPT0gbnVsbCA/IG51bGwgOiBhdHRyVmFsdWV9O1xuICAgIH1cblxuICAgIGlmIChkZXAudG9rZW4gIT0gbnVsbCkge1xuICAgICAgLy8gYWNjZXNzIGJ1aWx0aW50c1xuICAgICAgaWYgKChyZXF1ZXN0aW5nUHJvdmlkZXJUeXBlID09PSBQcm92aWRlckFzdFR5cGUuRGlyZWN0aXZlIHx8XG4gICAgICAgICAgIHJlcXVlc3RpbmdQcm92aWRlclR5cGUgPT09IFByb3ZpZGVyQXN0VHlwZS5Db21wb25lbnQpKSB7XG4gICAgICAgIGlmICh0b2tlblJlZmVyZW5jZShkZXAudG9rZW4pID09PVxuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5SZW5kZXJlcikgfHxcbiAgICAgICAgICAgIHRva2VuUmVmZXJlbmNlKGRlcC50b2tlbikgPT09XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q29udGV4dC5yZWZsZWN0b3IucmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKElkZW50aWZpZXJzLkVsZW1lbnRSZWYpIHx8XG4gICAgICAgICAgICB0b2tlblJlZmVyZW5jZShkZXAudG9rZW4pID09PVxuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShcbiAgICAgICAgICAgICAgICAgICAgSWRlbnRpZmllcnMuQ2hhbmdlRGV0ZWN0b3JSZWYpIHx8XG4gICAgICAgICAgICB0b2tlblJlZmVyZW5jZShkZXAudG9rZW4pID09PVxuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5UZW1wbGF0ZVJlZikpIHtcbiAgICAgICAgICByZXR1cm4gZGVwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlblJlZmVyZW5jZShkZXAudG9rZW4pID09PVxuICAgICAgICAgICAgdGhpcy52aWV3Q29udGV4dC5yZWZsZWN0b3IucmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKElkZW50aWZpZXJzLlZpZXdDb250YWluZXJSZWYpKSB7XG4gICAgICAgICAgKHRoaXMgYXMge3RyYW5zZm9ybWVkSGFzVmlld0NvbnRhaW5lcjogYm9vbGVhbn0pLnRyYW5zZm9ybWVkSGFzVmlld0NvbnRhaW5lciA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGFjY2VzcyB0aGUgaW5qZWN0b3JcbiAgICAgIGlmICh0b2tlblJlZmVyZW5jZShkZXAudG9rZW4pID09PVxuICAgICAgICAgIHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5JbmplY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGRlcDtcbiAgICAgIH1cbiAgICAgIC8vIGFjY2VzcyBwcm92aWRlcnNcbiAgICAgIGlmICh0aGlzLl9nZXRPckNyZWF0ZUxvY2FsUHJvdmlkZXIocmVxdWVzdGluZ1Byb3ZpZGVyVHlwZSwgZGVwLnRva2VuLCBlYWdlcikgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGVwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERlcGVuZGVuY3koXG4gICAgICByZXF1ZXN0aW5nUHJvdmlkZXJUeXBlOiBQcm92aWRlckFzdFR5cGUsIGRlcDogQ29tcGlsZURpRGVwZW5kZW5jeU1ldGFkYXRhLFxuICAgICAgZWFnZXI6IGJvb2xlYW4gPSBmYWxzZSk6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YXxudWxsIHtcbiAgICBsZXQgY3VyckVsZW1lbnQ6IFByb3ZpZGVyRWxlbWVudENvbnRleHQgPSB0aGlzO1xuICAgIGxldCBjdXJyRWFnZXI6IGJvb2xlYW4gPSBlYWdlcjtcbiAgICBsZXQgcmVzdWx0OiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGF8bnVsbCA9IG51bGw7XG4gICAgaWYgKCFkZXAuaXNTa2lwU2VsZikge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fZ2V0TG9jYWxEZXBlbmRlbmN5KHJlcXVlc3RpbmdQcm92aWRlclR5cGUsIGRlcCwgZWFnZXIpO1xuICAgIH1cbiAgICBpZiAoZGVwLmlzU2VsZikge1xuICAgICAgaWYgKCFyZXN1bHQgJiYgZGVwLmlzT3B0aW9uYWwpIHtcbiAgICAgICAgcmVzdWx0ID0ge2lzVmFsdWU6IHRydWUsIHZhbHVlOiBudWxsfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2hlY2sgcGFyZW50IGVsZW1lbnRzXG4gICAgICB3aGlsZSAoIXJlc3VsdCAmJiBjdXJyRWxlbWVudC5fcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHByZXZFbGVtZW50ID0gY3VyckVsZW1lbnQ7XG4gICAgICAgIGN1cnJFbGVtZW50ID0gY3VyckVsZW1lbnQuX3BhcmVudDtcbiAgICAgICAgaWYgKHByZXZFbGVtZW50Ll9pc1ZpZXdSb290KSB7XG4gICAgICAgICAgY3VyckVhZ2VyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gY3VyckVsZW1lbnQuX2dldExvY2FsRGVwZW5kZW5jeShQcm92aWRlckFzdFR5cGUuUHVibGljU2VydmljZSwgZGVwLCBjdXJyRWFnZXIpO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgQEhvc3QgcmVzdHJpY3Rpb25cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGlmICghZGVwLmlzSG9zdCB8fCB0aGlzLnZpZXdDb250ZXh0LmNvbXBvbmVudC5pc0hvc3QgfHxcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQuY29tcG9uZW50LnR5cGUucmVmZXJlbmNlID09PSB0b2tlblJlZmVyZW5jZShkZXAudG9rZW4hKSB8fFxuICAgICAgICAgICAgdGhpcy52aWV3Q29udGV4dC52aWV3UHJvdmlkZXJzLmdldCh0b2tlblJlZmVyZW5jZShkZXAudG9rZW4hKSkgIT0gbnVsbCkge1xuICAgICAgICAgIHJlc3VsdCA9IGRlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHQgPSBkZXAuaXNPcHRpb25hbCA/IHtpc1ZhbHVlOiB0cnVlLCB2YWx1ZTogbnVsbH0gOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB0aGlzLnZpZXdDb250ZXh0LmVycm9ycy5wdXNoKFxuICAgICAgICAgIG5ldyBQcm92aWRlckVycm9yKGBObyBwcm92aWRlciBmb3IgJHt0b2tlbk5hbWUoZGVwLnRva2VuISl9YCwgdGhpcy5fc291cmNlU3BhbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE5nTW9kdWxlUHJvdmlkZXJBbmFseXplciB7XG4gIHByaXZhdGUgX3RyYW5zZm9ybWVkUHJvdmlkZXJzID0gbmV3IE1hcDxhbnksIFByb3ZpZGVyQXN0PigpO1xuICBwcml2YXRlIF9zZWVuUHJvdmlkZXJzID0gbmV3IE1hcDxhbnksIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2FsbFByb3ZpZGVyczogTWFwPGFueSwgUHJvdmlkZXJBc3Q+O1xuICBwcml2YXRlIF9lcnJvcnM6IFByb3ZpZGVyRXJyb3JbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSByZWZsZWN0b3I6IENvbXBpbGVSZWZsZWN0b3IsIG5nTW9kdWxlOiBDb21waWxlTmdNb2R1bGVNZXRhZGF0YSxcbiAgICAgIGV4dHJhUHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdLCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pIHtcbiAgICB0aGlzLl9hbGxQcm92aWRlcnMgPSBuZXcgTWFwPGFueSwgUHJvdmlkZXJBc3Q+KCk7XG4gICAgbmdNb2R1bGUudHJhbnNpdGl2ZU1vZHVsZS5tb2R1bGVzLmZvckVhY2goKG5nTW9kdWxlVHlwZTogQ29tcGlsZVR5cGVNZXRhZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbmdNb2R1bGVQcm92aWRlciA9IHt0b2tlbjoge2lkZW50aWZpZXI6IG5nTW9kdWxlVHlwZX0sIHVzZUNsYXNzOiBuZ01vZHVsZVR5cGV9O1xuICAgICAgX3Jlc29sdmVQcm92aWRlcnMoXG4gICAgICAgICAgW25nTW9kdWxlUHJvdmlkZXJdLCBQcm92aWRlckFzdFR5cGUuUHVibGljU2VydmljZSwgdHJ1ZSwgc291cmNlU3BhbiwgdGhpcy5fZXJyb3JzLFxuICAgICAgICAgIHRoaXMuX2FsbFByb3ZpZGVycywgLyogaXNNb2R1bGUgKi8gdHJ1ZSk7XG4gICAgfSk7XG4gICAgX3Jlc29sdmVQcm92aWRlcnMoXG4gICAgICAgIG5nTW9kdWxlLnRyYW5zaXRpdmVNb2R1bGUucHJvdmlkZXJzLm1hcChlbnRyeSA9PiBlbnRyeS5wcm92aWRlcikuY29uY2F0KGV4dHJhUHJvdmlkZXJzKSxcbiAgICAgICAgUHJvdmlkZXJBc3RUeXBlLlB1YmxpY1NlcnZpY2UsIGZhbHNlLCBzb3VyY2VTcGFuLCB0aGlzLl9lcnJvcnMsIHRoaXMuX2FsbFByb3ZpZGVycyxcbiAgICAgICAgLyogaXNNb2R1bGUgKi8gZmFsc2UpO1xuICB9XG5cbiAgcGFyc2UoKTogUHJvdmlkZXJBc3RbXSB7XG4gICAgQXJyYXkuZnJvbSh0aGlzLl9hbGxQcm92aWRlcnMudmFsdWVzKCkpLmZvckVhY2goKHByb3ZpZGVyKSA9PiB7XG4gICAgICB0aGlzLl9nZXRPckNyZWF0ZUxvY2FsUHJvdmlkZXIocHJvdmlkZXIudG9rZW4sIHByb3ZpZGVyLmVhZ2VyKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fZXJyb3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGVycm9yU3RyaW5nID0gdGhpcy5fZXJyb3JzLmpvaW4oJ1xcbicpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlciBwYXJzZSBlcnJvcnM6XFxuJHtlcnJvclN0cmluZ31gKTtcbiAgICB9XG4gICAgLy8gTm90ZTogTWFwcyBrZWVwIHRoZWlyIGluc2VydGlvbiBvcmRlci5cbiAgICBjb25zdCBsYXp5UHJvdmlkZXJzOiBQcm92aWRlckFzdFtdID0gW107XG4gICAgY29uc3QgZWFnZXJQcm92aWRlcnM6IFByb3ZpZGVyQXN0W10gPSBbXTtcbiAgICB0aGlzLl90cmFuc2Zvcm1lZFByb3ZpZGVycy5mb3JFYWNoKHByb3ZpZGVyID0+IHtcbiAgICAgIGlmIChwcm92aWRlci5lYWdlcikge1xuICAgICAgICBlYWdlclByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhenlQcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhenlQcm92aWRlcnMuY29uY2F0KGVhZ2VyUHJvdmlkZXJzKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE9yQ3JlYXRlTG9jYWxQcm92aWRlcih0b2tlbjogQ29tcGlsZVRva2VuTWV0YWRhdGEsIGVhZ2VyOiBib29sZWFuKTogUHJvdmlkZXJBc3R8bnVsbCB7XG4gICAgY29uc3QgcmVzb2x2ZWRQcm92aWRlciA9IHRoaXMuX2FsbFByb3ZpZGVycy5nZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pKTtcbiAgICBpZiAoIXJlc29sdmVkUHJvdmlkZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgdHJhbnNmb3JtZWRQcm92aWRlckFzdCA9IHRoaXMuX3RyYW5zZm9ybWVkUHJvdmlkZXJzLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpO1xuICAgIGlmICh0cmFuc2Zvcm1lZFByb3ZpZGVyQXN0KSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtZWRQcm92aWRlckFzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NlZW5Qcm92aWRlcnMuZ2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3JzLnB1c2gobmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgICAgYENhbm5vdCBpbnN0YW50aWF0ZSBjeWNsaWMgZGVwZW5kZW5jeSEgJHt0b2tlbk5hbWUodG9rZW4pfWAsXG4gICAgICAgICAgcmVzb2x2ZWRQcm92aWRlci5zb3VyY2VTcGFuKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fc2VlblByb3ZpZGVycy5zZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pLCB0cnVlKTtcbiAgICBjb25zdCB0cmFuc2Zvcm1lZFByb3ZpZGVycyA9IHJlc29sdmVkUHJvdmlkZXIucHJvdmlkZXJzLm1hcCgocHJvdmlkZXIpID0+IHtcbiAgICAgIGxldCB0cmFuc2Zvcm1lZFVzZVZhbHVlID0gcHJvdmlkZXIudXNlVmFsdWU7XG4gICAgICBsZXQgdHJhbnNmb3JtZWRVc2VFeGlzdGluZyA9IHByb3ZpZGVyLnVzZUV4aXN0aW5nITtcbiAgICAgIGxldCB0cmFuc2Zvcm1lZERlcHM6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YVtdID0gdW5kZWZpbmVkITtcbiAgICAgIGlmIChwcm92aWRlci51c2VFeGlzdGluZyAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nRGlEZXAgPVxuICAgICAgICAgICAgdGhpcy5fZ2V0RGVwZW5kZW5jeSh7dG9rZW46IHByb3ZpZGVyLnVzZUV4aXN0aW5nfSwgZWFnZXIsIHJlc29sdmVkUHJvdmlkZXIuc291cmNlU3Bhbik7XG4gICAgICAgIGlmIChleGlzdGluZ0RpRGVwLnRva2VuICE9IG51bGwpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lZFVzZUV4aXN0aW5nID0gZXhpc3RpbmdEaURlcC50b2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lZFVzZUV4aXN0aW5nID0gbnVsbCE7XG4gICAgICAgICAgdHJhbnNmb3JtZWRVc2VWYWx1ZSA9IGV4aXN0aW5nRGlEZXAudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJvdmlkZXIudXNlRmFjdG9yeSkge1xuICAgICAgICBjb25zdCBkZXBzID0gcHJvdmlkZXIuZGVwcyB8fCBwcm92aWRlci51c2VGYWN0b3J5LmRpRGVwcztcbiAgICAgICAgdHJhbnNmb3JtZWREZXBzID1cbiAgICAgICAgICAgIGRlcHMubWFwKChkZXApID0+IHRoaXMuX2dldERlcGVuZGVuY3koZGVwLCBlYWdlciwgcmVzb2x2ZWRQcm92aWRlci5zb3VyY2VTcGFuKSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyLnVzZUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGRlcHMgPSBwcm92aWRlci5kZXBzIHx8IHByb3ZpZGVyLnVzZUNsYXNzLmRpRGVwcztcbiAgICAgICAgdHJhbnNmb3JtZWREZXBzID1cbiAgICAgICAgICAgIGRlcHMubWFwKChkZXApID0+IHRoaXMuX2dldERlcGVuZGVuY3koZGVwLCBlYWdlciwgcmVzb2x2ZWRQcm92aWRlci5zb3VyY2VTcGFuKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RyYW5zZm9ybVByb3ZpZGVyKHByb3ZpZGVyLCB7XG4gICAgICAgIHVzZUV4aXN0aW5nOiB0cmFuc2Zvcm1lZFVzZUV4aXN0aW5nLFxuICAgICAgICB1c2VWYWx1ZTogdHJhbnNmb3JtZWRVc2VWYWx1ZSxcbiAgICAgICAgZGVwczogdHJhbnNmb3JtZWREZXBzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0cmFuc2Zvcm1lZFByb3ZpZGVyQXN0ID1cbiAgICAgICAgX3RyYW5zZm9ybVByb3ZpZGVyQXN0KHJlc29sdmVkUHJvdmlkZXIsIHtlYWdlcjogZWFnZXIsIHByb3ZpZGVyczogdHJhbnNmb3JtZWRQcm92aWRlcnN9KTtcbiAgICB0aGlzLl90cmFuc2Zvcm1lZFByb3ZpZGVycy5zZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pLCB0cmFuc2Zvcm1lZFByb3ZpZGVyQXN0KTtcbiAgICByZXR1cm4gdHJhbnNmb3JtZWRQcm92aWRlckFzdDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldERlcGVuZGVuY3koXG4gICAgICBkZXA6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YSwgZWFnZXI6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgIHJlcXVlc3RvclNvdXJjZVNwYW46IFBhcnNlU291cmNlU3Bhbik6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YSB7XG4gICAgbGV0IGZvdW5kTG9jYWwgPSBmYWxzZTtcbiAgICBpZiAoIWRlcC5pc1NraXBTZWxmICYmIGRlcC50b2tlbiAhPSBudWxsKSB7XG4gICAgICAvLyBhY2Nlc3MgdGhlIGluamVjdG9yXG4gICAgICBpZiAodG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuKSA9PT1cbiAgICAgICAgICAgICAgdGhpcy5yZWZsZWN0b3IucmVzb2x2ZUV4dGVybmFsUmVmZXJlbmNlKElkZW50aWZpZXJzLkluamVjdG9yKSB8fFxuICAgICAgICAgIHRva2VuUmVmZXJlbmNlKGRlcC50b2tlbikgPT09XG4gICAgICAgICAgICAgIHRoaXMucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5Db21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpKSB7XG4gICAgICAgIGZvdW5kTG9jYWwgPSB0cnVlO1xuICAgICAgICAvLyBhY2Nlc3MgcHJvdmlkZXJzXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2dldE9yQ3JlYXRlTG9jYWxQcm92aWRlcihkZXAudG9rZW4sIGVhZ2VyKSAhPSBudWxsKSB7XG4gICAgICAgIGZvdW5kTG9jYWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVwO1xuICB9XG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm1Qcm92aWRlcihcbiAgICBwcm92aWRlcjogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEsXG4gICAge3VzZUV4aXN0aW5nLCB1c2VWYWx1ZSwgZGVwc306XG4gICAgICAgIHt1c2VFeGlzdGluZzogQ29tcGlsZVRva2VuTWV0YWRhdGEsIHVzZVZhbHVlOiBhbnksIGRlcHM6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YVtdfSkge1xuICByZXR1cm4ge1xuICAgIHRva2VuOiBwcm92aWRlci50b2tlbixcbiAgICB1c2VDbGFzczogcHJvdmlkZXIudXNlQ2xhc3MsXG4gICAgdXNlRXhpc3Rpbmc6IHVzZUV4aXN0aW5nLFxuICAgIHVzZUZhY3Rvcnk6IHByb3ZpZGVyLnVzZUZhY3RvcnksXG4gICAgdXNlVmFsdWU6IHVzZVZhbHVlLFxuICAgIGRlcHM6IGRlcHMsXG4gICAgbXVsdGk6IHByb3ZpZGVyLm11bHRpXG4gIH07XG59XG5cbmZ1bmN0aW9uIF90cmFuc2Zvcm1Qcm92aWRlckFzdChcbiAgICBwcm92aWRlcjogUHJvdmlkZXJBc3QsXG4gICAge2VhZ2VyLCBwcm92aWRlcnN9OiB7ZWFnZXI6IGJvb2xlYW4sIHByb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXX0pOiBQcm92aWRlckFzdCB7XG4gIHJldHVybiBuZXcgUHJvdmlkZXJBc3QoXG4gICAgICBwcm92aWRlci50b2tlbiwgcHJvdmlkZXIubXVsdGlQcm92aWRlciwgcHJvdmlkZXIuZWFnZXIgfHwgZWFnZXIsIHByb3ZpZGVycyxcbiAgICAgIHByb3ZpZGVyLnByb3ZpZGVyVHlwZSwgcHJvdmlkZXIubGlmZWN5Y2xlSG9va3MsIHByb3ZpZGVyLnNvdXJjZVNwYW4sIHByb3ZpZGVyLmlzTW9kdWxlKTtcbn1cblxuZnVuY3Rpb24gX3Jlc29sdmVQcm92aWRlcnNGcm9tRGlyZWN0aXZlcyhcbiAgICBkaXJlY3RpdmVzOiBDb21waWxlRGlyZWN0aXZlU3VtbWFyeVtdLCBzb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4sXG4gICAgdGFyZ2V0RXJyb3JzOiBQYXJzZUVycm9yW10pOiBNYXA8YW55LCBQcm92aWRlckFzdD4ge1xuICBjb25zdCBwcm92aWRlcnNCeVRva2VuID0gbmV3IE1hcDxhbnksIFByb3ZpZGVyQXN0PigpO1xuICBkaXJlY3RpdmVzLmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgIGNvbnN0IGRpclByb3ZpZGVyOlxuICAgICAgICBDb21waWxlUHJvdmlkZXJNZXRhZGF0YSA9IHt0b2tlbjoge2lkZW50aWZpZXI6IGRpcmVjdGl2ZS50eXBlfSwgdXNlQ2xhc3M6IGRpcmVjdGl2ZS50eXBlfTtcbiAgICBfcmVzb2x2ZVByb3ZpZGVycyhcbiAgICAgICAgW2RpclByb3ZpZGVyXSxcbiAgICAgICAgZGlyZWN0aXZlLmlzQ29tcG9uZW50ID8gUHJvdmlkZXJBc3RUeXBlLkNvbXBvbmVudCA6IFByb3ZpZGVyQXN0VHlwZS5EaXJlY3RpdmUsIHRydWUsXG4gICAgICAgIHNvdXJjZVNwYW4sIHRhcmdldEVycm9ycywgcHJvdmlkZXJzQnlUb2tlbiwgLyogaXNNb2R1bGUgKi8gZmFsc2UpO1xuICB9KTtcblxuICAvLyBOb3RlOiBkaXJlY3RpdmVzIG5lZWQgdG8gYmUgYWJsZSB0byBvdmVyd3JpdGUgcHJvdmlkZXJzIG9mIGEgY29tcG9uZW50IVxuICBjb25zdCBkaXJlY3RpdmVzV2l0aENvbXBvbmVudEZpcnN0ID1cbiAgICAgIGRpcmVjdGl2ZXMuZmlsdGVyKGRpciA9PiBkaXIuaXNDb21wb25lbnQpLmNvbmNhdChkaXJlY3RpdmVzLmZpbHRlcihkaXIgPT4gIWRpci5pc0NvbXBvbmVudCkpO1xuICBkaXJlY3RpdmVzV2l0aENvbXBvbmVudEZpcnN0LmZvckVhY2goKGRpcmVjdGl2ZSkgPT4ge1xuICAgIF9yZXNvbHZlUHJvdmlkZXJzKFxuICAgICAgICBkaXJlY3RpdmUucHJvdmlkZXJzLCBQcm92aWRlckFzdFR5cGUuUHVibGljU2VydmljZSwgZmFsc2UsIHNvdXJjZVNwYW4sIHRhcmdldEVycm9ycyxcbiAgICAgICAgcHJvdmlkZXJzQnlUb2tlbiwgLyogaXNNb2R1bGUgKi8gZmFsc2UpO1xuICAgIF9yZXNvbHZlUHJvdmlkZXJzKFxuICAgICAgICBkaXJlY3RpdmUudmlld1Byb3ZpZGVycywgUHJvdmlkZXJBc3RUeXBlLlByaXZhdGVTZXJ2aWNlLCBmYWxzZSwgc291cmNlU3BhbiwgdGFyZ2V0RXJyb3JzLFxuICAgICAgICBwcm92aWRlcnNCeVRva2VuLCAvKiBpc01vZHVsZSAqLyBmYWxzZSk7XG4gIH0pO1xuICByZXR1cm4gcHJvdmlkZXJzQnlUb2tlbjtcbn1cblxuZnVuY3Rpb24gX3Jlc29sdmVQcm92aWRlcnMoXG4gICAgcHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdLCBwcm92aWRlclR5cGU6IFByb3ZpZGVyQXN0VHlwZSwgZWFnZXI6IGJvb2xlYW4sXG4gICAgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLCB0YXJnZXRFcnJvcnM6IFBhcnNlRXJyb3JbXSxcbiAgICB0YXJnZXRQcm92aWRlcnNCeVRva2VuOiBNYXA8YW55LCBQcm92aWRlckFzdD4sIGlzTW9kdWxlOiBib29sZWFuKSB7XG4gIHByb3ZpZGVycy5mb3JFYWNoKChwcm92aWRlcikgPT4ge1xuICAgIGxldCByZXNvbHZlZFByb3ZpZGVyID0gdGFyZ2V0UHJvdmlkZXJzQnlUb2tlbi5nZXQodG9rZW5SZWZlcmVuY2UocHJvdmlkZXIudG9rZW4pKTtcbiAgICBpZiAocmVzb2x2ZWRQcm92aWRlciAhPSBudWxsICYmICEhcmVzb2x2ZWRQcm92aWRlci5tdWx0aVByb3ZpZGVyICE9PSAhIXByb3ZpZGVyLm11bHRpKSB7XG4gICAgICB0YXJnZXRFcnJvcnMucHVzaChuZXcgUHJvdmlkZXJFcnJvcihcbiAgICAgICAgICBgTWl4aW5nIG11bHRpIGFuZCBub24gbXVsdGkgcHJvdmlkZXIgaXMgbm90IHBvc3NpYmxlIGZvciB0b2tlbiAke1xuICAgICAgICAgICAgICB0b2tlbk5hbWUocmVzb2x2ZWRQcm92aWRlci50b2tlbil9YCxcbiAgICAgICAgICBzb3VyY2VTcGFuKSk7XG4gICAgfVxuICAgIGlmICghcmVzb2x2ZWRQcm92aWRlcikge1xuICAgICAgY29uc3QgbGlmZWN5Y2xlSG9va3MgPSBwcm92aWRlci50b2tlbi5pZGVudGlmaWVyICYmXG4gICAgICAgICAgICAgICg8Q29tcGlsZVR5cGVNZXRhZGF0YT5wcm92aWRlci50b2tlbi5pZGVudGlmaWVyKS5saWZlY3ljbGVIb29rcyA/XG4gICAgICAgICAgKDxDb21waWxlVHlwZU1ldGFkYXRhPnByb3ZpZGVyLnRva2VuLmlkZW50aWZpZXIpLmxpZmVjeWNsZUhvb2tzIDpcbiAgICAgICAgICBbXTtcbiAgICAgIGNvbnN0IGlzVXNlVmFsdWUgPSAhKHByb3ZpZGVyLnVzZUNsYXNzIHx8IHByb3ZpZGVyLnVzZUV4aXN0aW5nIHx8IHByb3ZpZGVyLnVzZUZhY3RvcnkpO1xuICAgICAgcmVzb2x2ZWRQcm92aWRlciA9IG5ldyBQcm92aWRlckFzdChcbiAgICAgICAgICBwcm92aWRlci50b2tlbiwgISFwcm92aWRlci5tdWx0aSwgZWFnZXIgfHwgaXNVc2VWYWx1ZSwgW3Byb3ZpZGVyXSwgcHJvdmlkZXJUeXBlLFxuICAgICAgICAgIGxpZmVjeWNsZUhvb2tzLCBzb3VyY2VTcGFuLCBpc01vZHVsZSk7XG4gICAgICB0YXJnZXRQcm92aWRlcnNCeVRva2VuLnNldCh0b2tlblJlZmVyZW5jZShwcm92aWRlci50b2tlbiksIHJlc29sdmVkUHJvdmlkZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXByb3ZpZGVyLm11bHRpKSB7XG4gICAgICAgIHJlc29sdmVkUHJvdmlkZXIucHJvdmlkZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgICByZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmZ1bmN0aW9uIF9nZXRWaWV3UXVlcmllcyhjb21wb25lbnQ6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSk6IE1hcDxhbnksIFF1ZXJ5V2l0aElkW10+IHtcbiAgLy8gTm90ZTogcXVlcmllcyBzdGFydCB3aXRoIGlkIDEgc28gd2UgY2FuIHVzZSB0aGUgbnVtYmVyIGluIGEgQmxvb20gZmlsdGVyIVxuICBsZXQgdmlld1F1ZXJ5SWQgPSAxO1xuICBjb25zdCB2aWV3UXVlcmllcyA9IG5ldyBNYXA8YW55LCBRdWVyeVdpdGhJZFtdPigpO1xuICBpZiAoY29tcG9uZW50LnZpZXdRdWVyaWVzKSB7XG4gICAgY29tcG9uZW50LnZpZXdRdWVyaWVzLmZvckVhY2goXG4gICAgICAgIChxdWVyeSkgPT4gX2FkZFF1ZXJ5VG9Ub2tlbk1hcCh2aWV3UXVlcmllcywge21ldGE6IHF1ZXJ5LCBxdWVyeUlkOiB2aWV3UXVlcnlJZCsrfSkpO1xuICB9XG4gIHJldHVybiB2aWV3UXVlcmllcztcbn1cblxuZnVuY3Rpb24gX2dldENvbnRlbnRRdWVyaWVzKFxuICAgIGNvbnRlbnRRdWVyeVN0YXJ0SWQ6IG51bWJlciwgZGlyZWN0aXZlczogQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnlbXSk6IE1hcDxhbnksIFF1ZXJ5V2l0aElkW10+IHtcbiAgbGV0IGNvbnRlbnRRdWVyeUlkID0gY29udGVudFF1ZXJ5U3RhcnRJZDtcbiAgY29uc3QgY29udGVudFF1ZXJpZXMgPSBuZXcgTWFwPGFueSwgUXVlcnlXaXRoSWRbXT4oKTtcbiAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUsIGRpcmVjdGl2ZUluZGV4KSA9PiB7XG4gICAgaWYgKGRpcmVjdGl2ZS5xdWVyaWVzKSB7XG4gICAgICBkaXJlY3RpdmUucXVlcmllcy5mb3JFYWNoKFxuICAgICAgICAgIChxdWVyeSkgPT4gX2FkZFF1ZXJ5VG9Ub2tlbk1hcChjb250ZW50UXVlcmllcywge21ldGE6IHF1ZXJ5LCBxdWVyeUlkOiBjb250ZW50UXVlcnlJZCsrfSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb250ZW50UXVlcmllcztcbn1cblxuZnVuY3Rpb24gX2FkZFF1ZXJ5VG9Ub2tlbk1hcChtYXA6IE1hcDxhbnksIFF1ZXJ5V2l0aElkW10+LCBxdWVyeTogUXVlcnlXaXRoSWQpIHtcbiAgcXVlcnkubWV0YS5zZWxlY3RvcnMuZm9yRWFjaCgodG9rZW46IENvbXBpbGVUb2tlbk1ldGFkYXRhKSA9PiB7XG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpO1xuICAgIGlmICghZW50cnkpIHtcbiAgICAgIGVudHJ5ID0gW107XG4gICAgICBtYXAuc2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSwgZW50cnkpO1xuICAgIH1cbiAgICBlbnRyeS5wdXNoKHF1ZXJ5KTtcbiAgfSk7XG59XG4iXX0=
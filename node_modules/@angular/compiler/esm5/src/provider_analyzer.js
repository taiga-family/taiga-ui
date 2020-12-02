/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends, __read, __spread } from "tslib";
import { tokenName, tokenReference } from './compile_metadata';
import { createTokenForExternalReference, Identifiers } from './identifiers';
import { ParseError } from './parse_util';
import { ProviderAst, ProviderAstType } from './template_parser/template_ast';
var ProviderError = /** @class */ (function (_super) {
    __extends(ProviderError, _super);
    function ProviderError(message, span) {
        return _super.call(this, span, message) || this;
    }
    return ProviderError;
}(ParseError));
export { ProviderError };
var ProviderViewContext = /** @class */ (function () {
    function ProviderViewContext(reflector, component) {
        var _this = this;
        this.reflector = reflector;
        this.component = component;
        this.errors = [];
        this.viewQueries = _getViewQueries(component);
        this.viewProviders = new Map();
        component.viewProviders.forEach(function (provider) {
            if (_this.viewProviders.get(tokenReference(provider.token)) == null) {
                _this.viewProviders.set(tokenReference(provider.token), true);
            }
        });
    }
    return ProviderViewContext;
}());
export { ProviderViewContext };
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
            var templateRefId = createTokenForExternalReference(this.viewContext.reflector, Identifiers.TemplateRef);
            this._addQueryReadsTo(templateRefId, templateRefId, this._queriedTokens);
        }
        refs.forEach(function (refAst) {
            var defaultQueryValue = refAst.value ||
                createTokenForExternalReference(_this.viewContext.reflector, Identifiers.ElementRef);
            _this._addQueryReadsTo({ value: refAst.name }, defaultQueryValue, _this._queriedTokens);
        });
        if (this._queriedTokens.get(this.viewContext.reflector.resolveExternalReference(Identifiers.ViewContainerRef))) {
            this.transformedHasViewContainer = true;
        }
        // create the providers that we know are eager first
        Array.from(this._allProviders.values()).forEach(function (provider) {
            var eager = provider.eager || _this._queriedTokens.get(tokenReference(provider.token));
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
                allMatches.push.apply(allMatches, __spread(matches));
            });
            return allMatches;
        },
        enumerable: true,
        configurable: true
    });
    ProviderElementContext.prototype._addQueryReadsTo = function (token, defaultValue, queryReadTokens) {
        this._getQueriesFor(token).forEach(function (query) {
            var queryValue = query.meta.read || defaultValue;
            var tokenRef = tokenReference(queryValue);
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
            queries = currentEl._contentQueries.get(tokenReference(token));
            if (queries) {
                result.push.apply(result, __spread(queries.filter(function (query) { return query.meta.descendants || distance <= 1; })));
            }
            if (currentEl._directiveAsts.length > 0) {
                distance++;
            }
            currentEl = currentEl._parent;
        }
        queries = this.viewContext.viewQueries.get(tokenReference(token));
        if (queries) {
            result.push.apply(result, __spread(queries));
        }
        return result;
    };
    ProviderElementContext.prototype._getOrCreateLocalProvider = function (requestingProviderType, token, eager) {
        var _this = this;
        var resolvedProvider = this._allProviders.get(tokenReference(token));
        if (!resolvedProvider ||
            ((requestingProviderType === ProviderAstType.Directive ||
                requestingProviderType === ProviderAstType.PublicService) &&
                resolvedProvider.providerType === ProviderAstType.PrivateService) ||
            ((requestingProviderType === ProviderAstType.PrivateService ||
                requestingProviderType === ProviderAstType.PublicService) &&
                resolvedProvider.providerType === ProviderAstType.Builtin)) {
            return null;
        }
        var transformedProviderAst = this._transformedProviders.get(tokenReference(token));
        if (transformedProviderAst) {
            return transformedProviderAst;
        }
        if (this._seenProviders.get(tokenReference(token)) != null) {
            this.viewContext.errors.push(new ProviderError("Cannot instantiate cyclic dependency! " + tokenName(token), this._sourceSpan));
            return null;
        }
        this._seenProviders.set(tokenReference(token), true);
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
        this._transformedProviders.set(tokenReference(token), transformedProviderAst);
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
            if ((requestingProviderType === ProviderAstType.Directive ||
                requestingProviderType === ProviderAstType.Component)) {
                if (tokenReference(dep.token) ===
                    this.viewContext.reflector.resolveExternalReference(Identifiers.Renderer) ||
                    tokenReference(dep.token) ===
                        this.viewContext.reflector.resolveExternalReference(Identifiers.ElementRef) ||
                    tokenReference(dep.token) ===
                        this.viewContext.reflector.resolveExternalReference(Identifiers.ChangeDetectorRef) ||
                    tokenReference(dep.token) ===
                        this.viewContext.reflector.resolveExternalReference(Identifiers.TemplateRef)) {
                    return dep;
                }
                if (tokenReference(dep.token) ===
                    this.viewContext.reflector.resolveExternalReference(Identifiers.ViewContainerRef)) {
                    this.transformedHasViewContainer = true;
                }
            }
            // access the injector
            if (tokenReference(dep.token) ===
                this.viewContext.reflector.resolveExternalReference(Identifiers.Injector)) {
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
                result = currElement._getLocalDependency(ProviderAstType.PublicService, dep, currEager);
            }
            // check @Host restriction
            if (!result) {
                if (!dep.isHost || this.viewContext.component.isHost ||
                    this.viewContext.component.type.reference === tokenReference(dep.token) ||
                    this.viewContext.viewProviders.get(tokenReference(dep.token)) != null) {
                    result = dep;
                }
                else {
                    result = dep.isOptional ? { isValue: true, value: null } : null;
                }
            }
        }
        if (!result) {
            this.viewContext.errors.push(new ProviderError("No provider for " + tokenName(dep.token), this._sourceSpan));
        }
        return result;
    };
    return ProviderElementContext;
}());
export { ProviderElementContext };
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
            _resolveProviders([ngModuleProvider], ProviderAstType.PublicService, true, sourceSpan, _this._errors, _this._allProviders, /* isModule */ true);
        });
        _resolveProviders(ngModule.transitiveModule.providers.map(function (entry) { return entry.provider; }).concat(extraProviders), ProviderAstType.PublicService, false, sourceSpan, this._errors, this._allProviders, 
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
        var resolvedProvider = this._allProviders.get(tokenReference(token));
        if (!resolvedProvider) {
            return null;
        }
        var transformedProviderAst = this._transformedProviders.get(tokenReference(token));
        if (transformedProviderAst) {
            return transformedProviderAst;
        }
        if (this._seenProviders.get(tokenReference(token)) != null) {
            this._errors.push(new ProviderError("Cannot instantiate cyclic dependency! " + tokenName(token), resolvedProvider.sourceSpan));
            return null;
        }
        this._seenProviders.set(tokenReference(token), true);
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
        this._transformedProviders.set(tokenReference(token), transformedProviderAst);
        return transformedProviderAst;
    };
    NgModuleProviderAnalyzer.prototype._getDependency = function (dep, eager, requestorSourceSpan) {
        if (eager === void 0) { eager = false; }
        var foundLocal = false;
        if (!dep.isSkipSelf && dep.token != null) {
            // access the injector
            if (tokenReference(dep.token) ===
                this.reflector.resolveExternalReference(Identifiers.Injector) ||
                tokenReference(dep.token) ===
                    this.reflector.resolveExternalReference(Identifiers.ComponentFactoryResolver)) {
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
export { NgModuleProviderAnalyzer };
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
    return new ProviderAst(provider.token, provider.multiProvider, provider.eager || eager, providers, provider.providerType, provider.lifecycleHooks, provider.sourceSpan, provider.isModule);
}
function _resolveProvidersFromDirectives(directives, sourceSpan, targetErrors) {
    var providersByToken = new Map();
    directives.forEach(function (directive) {
        var dirProvider = { token: { identifier: directive.type }, useClass: directive.type };
        _resolveProviders([dirProvider], directive.isComponent ? ProviderAstType.Component : ProviderAstType.Directive, true, sourceSpan, targetErrors, providersByToken, /* isModule */ false);
    });
    // Note: directives need to be able to overwrite providers of a component!
    var directivesWithComponentFirst = directives.filter(function (dir) { return dir.isComponent; }).concat(directives.filter(function (dir) { return !dir.isComponent; }));
    directivesWithComponentFirst.forEach(function (directive) {
        _resolveProviders(directive.providers, ProviderAstType.PublicService, false, sourceSpan, targetErrors, providersByToken, /* isModule */ false);
        _resolveProviders(directive.viewProviders, ProviderAstType.PrivateService, false, sourceSpan, targetErrors, providersByToken, /* isModule */ false);
    });
    return providersByToken;
}
function _resolveProviders(providers, providerType, eager, sourceSpan, targetErrors, targetProvidersByToken, isModule) {
    providers.forEach(function (provider) {
        var resolvedProvider = targetProvidersByToken.get(tokenReference(provider.token));
        if (resolvedProvider != null && !!resolvedProvider.multiProvider !== !!provider.multi) {
            targetErrors.push(new ProviderError("Mixing multi and non multi provider is not possible for token " + tokenName(resolvedProvider.token), sourceSpan));
        }
        if (!resolvedProvider) {
            var lifecycleHooks = provider.token.identifier &&
                provider.token.identifier.lifecycleHooks ?
                provider.token.identifier.lifecycleHooks :
                [];
            var isUseValue = !(provider.useClass || provider.useExisting || provider.useFactory);
            resolvedProvider = new ProviderAst(provider.token, !!provider.multi, eager || isUseValue, [provider], providerType, lifecycleHooks, sourceSpan, isModule);
            targetProvidersByToken.set(tokenReference(provider.token), resolvedProvider);
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
        var entry = map.get(tokenReference(token));
        if (!entry) {
            entry = [];
            map.set(tokenReference(token), entry);
        }
        entry.push(query);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJfYW5hbHl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvcHJvdmlkZXJfYW5hbHl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUdILE9BQU8sRUFBb00sU0FBUyxFQUFFLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRWhRLE9BQU8sRUFBQywrQkFBK0IsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFDLFVBQVUsRUFBa0IsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUF3QixXQUFXLEVBQUUsZUFBZSxFQUEyQixNQUFNLGdDQUFnQyxDQUFDO0FBRTdIO0lBQW1DLGlDQUFVO0lBQzNDLHVCQUFZLE9BQWUsRUFBRSxJQUFxQjtlQUNoRCxrQkFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFKRCxDQUFtQyxVQUFVLEdBSTVDOztBQU9EO0lBV0UsNkJBQW1CLFNBQTJCLEVBQVMsU0FBbUM7UUFBMUYsaUJBUUM7UUFSa0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUEwQjtRQUYxRixXQUFNLEdBQW9CLEVBQUUsQ0FBQztRQUczQixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFnQixDQUFDO1FBQzdDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUN2QyxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xFLEtBQUksQ0FBQyxhQUFh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QUFPLENBQ3JCLFVBQUMsS0FBSyxJQUFLLE9BQUEsbUJBQW1CLENBQUMsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLEVBQUMsQ0FBQyxFQUE3RSxDQUE2RSxDQUFDLENBQUM7U0FDL0Y7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEdBQTRCLEVBQUUsS0FBa0I7SUFDM0UsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBMkI7UUFDdkQsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cblxuaW1wb3J0IHtDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGEsIENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSwgQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnksIENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhLCBDb21waWxlUHJvdmlkZXJNZXRhZGF0YSwgQ29tcGlsZVF1ZXJ5TWV0YWRhdGEsIENvbXBpbGVUb2tlbk1ldGFkYXRhLCBDb21waWxlVHlwZU1ldGFkYXRhLCB0b2tlbk5hbWUsIHRva2VuUmVmZXJlbmNlfSBmcm9tICcuL2NvbXBpbGVfbWV0YWRhdGEnO1xuaW1wb3J0IHtDb21waWxlUmVmbGVjdG9yfSBmcm9tICcuL2NvbXBpbGVfcmVmbGVjdG9yJztcbmltcG9ydCB7Y3JlYXRlVG9rZW5Gb3JFeHRlcm5hbFJlZmVyZW5jZSwgSWRlbnRpZmllcnN9IGZyb20gJy4vaWRlbnRpZmllcnMnO1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZVNvdXJjZVNwYW59IGZyb20gJy4vcGFyc2VfdXRpbCc7XG5pbXBvcnQge0F0dHJBc3QsIERpcmVjdGl2ZUFzdCwgUHJvdmlkZXJBc3QsIFByb3ZpZGVyQXN0VHlwZSwgUXVlcnlNYXRjaCwgUmVmZXJlbmNlQXN0fSBmcm9tICcuL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcsIHNwYW46IFBhcnNlU291cmNlU3Bhbikge1xuICAgIHN1cGVyKHNwYW4sIG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlXaXRoSWQge1xuICBtZXRhOiBDb21waWxlUXVlcnlNZXRhZGF0YTtcbiAgcXVlcnlJZDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgUHJvdmlkZXJWaWV3Q29udGV4dCB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHZpZXdRdWVyaWVzOiBNYXA8YW55LCBRdWVyeVdpdGhJZFtdPjtcbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgdmlld1Byb3ZpZGVyczogTWFwPGFueSwgYm9vbGVhbj47XG4gIGVycm9yczogUHJvdmlkZXJFcnJvcltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlZmxlY3RvcjogQ29tcGlsZVJlZmxlY3RvciwgcHVibGljIGNvbXBvbmVudDogQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhKSB7XG4gICAgdGhpcy52aWV3UXVlcmllcyA9IF9nZXRWaWV3UXVlcmllcyhjb21wb25lbnQpO1xuICAgIHRoaXMudmlld1Byb3ZpZGVycyA9IG5ldyBNYXA8YW55LCBib29sZWFuPigpO1xuICAgIGNvbXBvbmVudC52aWV3UHJvdmlkZXJzLmZvckVhY2goKHByb3ZpZGVyKSA9PiB7XG4gICAgICBpZiAodGhpcy52aWV3UHJvdmlkZXJzLmdldCh0b2tlblJlZmVyZW5jZShwcm92aWRlci50b2tlbikpID09IG51bGwpIHtcbiAgICAgICAgdGhpcy52aWV3UHJvdmlkZXJzLnNldCh0b2tlblJlZmVyZW5jZShwcm92aWRlci50b2tlbiksIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlckVsZW1lbnRDb250ZXh0IHtcbiAgcHJpdmF0ZSBfY29udGVudFF1ZXJpZXM6IE1hcDxhbnksIFF1ZXJ5V2l0aElkW10+O1xuXG4gIHByaXZhdGUgX3RyYW5zZm9ybWVkUHJvdmlkZXJzID0gbmV3IE1hcDxhbnksIFByb3ZpZGVyQXN0PigpO1xuICBwcml2YXRlIF9zZWVuUHJvdmlkZXJzID0gbmV3IE1hcDxhbnksIGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX2FsbFByb3ZpZGVyczogTWFwPGFueSwgUHJvdmlkZXJBc3Q+O1xuICBwcml2YXRlIF9hdHRyczoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIHByaXZhdGUgX3F1ZXJpZWRUb2tlbnMgPSBuZXcgTWFwPGFueSwgUXVlcnlNYXRjaFtdPigpO1xuXG4gIHB1YmxpYyByZWFkb25seSB0cmFuc2Zvcm1lZEhhc1ZpZXdDb250YWluZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyB2aWV3Q29udGV4dDogUHJvdmlkZXJWaWV3Q29udGV4dCwgcHJpdmF0ZSBfcGFyZW50OiBQcm92aWRlckVsZW1lbnRDb250ZXh0LFxuICAgICAgcHJpdmF0ZSBfaXNWaWV3Um9vdDogYm9vbGVhbiwgcHJpdmF0ZSBfZGlyZWN0aXZlQXN0czogRGlyZWN0aXZlQXN0W10sIGF0dHJzOiBBdHRyQXN0W10sXG4gICAgICByZWZzOiBSZWZlcmVuY2VBc3RbXSwgaXNUZW1wbGF0ZTogYm9vbGVhbiwgY29udGVudFF1ZXJ5U3RhcnRJZDogbnVtYmVyLFxuICAgICAgcHJpdmF0ZSBfc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgdGhpcy5fYXR0cnMgPSB7fTtcbiAgICBhdHRycy5mb3JFYWNoKChhdHRyQXN0KSA9PiB0aGlzLl9hdHRyc1thdHRyQXN0Lm5hbWVdID0gYXR0ckFzdC52YWx1ZSk7XG4gICAgY29uc3QgZGlyZWN0aXZlc01ldGEgPSBfZGlyZWN0aXZlQXN0cy5tYXAoZGlyZWN0aXZlQXN0ID0+IGRpcmVjdGl2ZUFzdC5kaXJlY3RpdmUpO1xuICAgIHRoaXMuX2FsbFByb3ZpZGVycyA9XG4gICAgICAgIF9yZXNvbHZlUHJvdmlkZXJzRnJvbURpcmVjdGl2ZXMoZGlyZWN0aXZlc01ldGEsIF9zb3VyY2VTcGFuLCB2aWV3Q29udGV4dC5lcnJvcnMpO1xuICAgIHRoaXMuX2NvbnRlbnRRdWVyaWVzID0gX2dldENvbnRlbnRRdWVyaWVzKGNvbnRlbnRRdWVyeVN0YXJ0SWQsIGRpcmVjdGl2ZXNNZXRhKTtcbiAgICBBcnJheS5mcm9tKHRoaXMuX2FsbFByb3ZpZGVycy52YWx1ZXMoKSkuZm9yRWFjaCgocHJvdmlkZXIpID0+IHtcbiAgICAgIHRoaXMuX2FkZFF1ZXJ5UmVhZHNUbyhwcm92aWRlci50b2tlbiwgcHJvdmlkZXIudG9rZW4sIHRoaXMuX3F1ZXJpZWRUb2tlbnMpO1xuICAgIH0pO1xuICAgIGlmIChpc1RlbXBsYXRlKSB7XG4gICAgICBjb25zdCB0ZW1wbGF0ZVJlZklkID1cbiAgICAgICAgICBjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlKHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLCBJZGVudGlmaWVycy5UZW1wbGF0ZVJlZik7XG4gICAgICB0aGlzLl9hZGRRdWVyeVJlYWRzVG8odGVtcGxhdGVSZWZJZCwgdGVtcGxhdGVSZWZJZCwgdGhpcy5fcXVlcmllZFRva2Vucyk7XG4gICAgfVxuICAgIHJlZnMuZm9yRWFjaCgocmVmQXN0KSA9PiB7XG4gICAgICBsZXQgZGVmYXVsdFF1ZXJ5VmFsdWUgPSByZWZBc3QudmFsdWUgfHxcbiAgICAgICAgICBjcmVhdGVUb2tlbkZvckV4dGVybmFsUmVmZXJlbmNlKHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLCBJZGVudGlmaWVycy5FbGVtZW50UmVmKTtcbiAgICAgIHRoaXMuX2FkZFF1ZXJ5UmVhZHNUbyh7dmFsdWU6IHJlZkFzdC5uYW1lfSwgZGVmYXVsdFF1ZXJ5VmFsdWUsIHRoaXMuX3F1ZXJpZWRUb2tlbnMpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLl9xdWVyaWVkVG9rZW5zLmdldChcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5WaWV3Q29udGFpbmVyUmVmKSkpIHtcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRIYXNWaWV3Q29udGFpbmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgdGhlIHByb3ZpZGVycyB0aGF0IHdlIGtub3cgYXJlIGVhZ2VyIGZpcnN0XG4gICAgQXJyYXkuZnJvbSh0aGlzLl9hbGxQcm92aWRlcnMudmFsdWVzKCkpLmZvckVhY2goKHByb3ZpZGVyKSA9PiB7XG4gICAgICBjb25zdCBlYWdlciA9IHByb3ZpZGVyLmVhZ2VyIHx8IHRoaXMuX3F1ZXJpZWRUb2tlbnMuZ2V0KHRva2VuUmVmZXJlbmNlKHByb3ZpZGVyLnRva2VuKSk7XG4gICAgICBpZiAoZWFnZXIpIHtcbiAgICAgICAgdGhpcy5fZ2V0T3JDcmVhdGVMb2NhbFByb3ZpZGVyKHByb3ZpZGVyLnByb3ZpZGVyVHlwZSwgcHJvdmlkZXIudG9rZW4sIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWZ0ZXJFbGVtZW50KCkge1xuICAgIC8vIGNvbGxlY3QgbGF6eSBwcm92aWRlcnNcbiAgICBBcnJheS5mcm9tKHRoaXMuX2FsbFByb3ZpZGVycy52YWx1ZXMoKSkuZm9yRWFjaCgocHJvdmlkZXIpID0+IHtcbiAgICAgIHRoaXMuX2dldE9yQ3JlYXRlTG9jYWxQcm92aWRlcihwcm92aWRlci5wcm92aWRlclR5cGUsIHByb3ZpZGVyLnRva2VuLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgdHJhbnNmb3JtUHJvdmlkZXJzKCk6IFByb3ZpZGVyQXN0W10ge1xuICAgIC8vIE5vdGU6IE1hcHMga2VlcCB0aGVpciBpbnNlcnRpb24gb3JkZXIuXG4gICAgY29uc3QgbGF6eVByb3ZpZGVyczogUHJvdmlkZXJBc3RbXSA9IFtdO1xuICAgIGNvbnN0IGVhZ2VyUHJvdmlkZXJzOiBQcm92aWRlckFzdFtdID0gW107XG4gICAgdGhpcy5fdHJhbnNmb3JtZWRQcm92aWRlcnMuZm9yRWFjaChwcm92aWRlciA9PiB7XG4gICAgICBpZiAocHJvdmlkZXIuZWFnZXIpIHtcbiAgICAgICAgZWFnZXJQcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXp5UHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYXp5UHJvdmlkZXJzLmNvbmNhdChlYWdlclByb3ZpZGVycyk7XG4gIH1cblxuICBnZXQgdHJhbnNmb3JtZWREaXJlY3RpdmVBc3RzKCk6IERpcmVjdGl2ZUFzdFtdIHtcbiAgICBjb25zdCBzb3J0ZWRQcm92aWRlclR5cGVzID0gdGhpcy50cmFuc2Zvcm1Qcm92aWRlcnMubWFwKHByb3ZpZGVyID0+IHByb3ZpZGVyLnRva2VuLmlkZW50aWZpZXIpO1xuICAgIGNvbnN0IHNvcnRlZERpcmVjdGl2ZXMgPSB0aGlzLl9kaXJlY3RpdmVBc3RzLnNsaWNlKCk7XG4gICAgc29ydGVkRGlyZWN0aXZlcy5zb3J0KFxuICAgICAgICAoZGlyMSwgZGlyMikgPT4gc29ydGVkUHJvdmlkZXJUeXBlcy5pbmRleE9mKGRpcjEuZGlyZWN0aXZlLnR5cGUpIC1cbiAgICAgICAgICAgIHNvcnRlZFByb3ZpZGVyVHlwZXMuaW5kZXhPZihkaXIyLmRpcmVjdGl2ZS50eXBlKSk7XG4gICAgcmV0dXJuIHNvcnRlZERpcmVjdGl2ZXM7XG4gIH1cblxuICBnZXQgcXVlcnlNYXRjaGVzKCk6IFF1ZXJ5TWF0Y2hbXSB7XG4gICAgY29uc3QgYWxsTWF0Y2hlczogUXVlcnlNYXRjaFtdID0gW107XG4gICAgdGhpcy5fcXVlcmllZFRva2Vucy5mb3JFYWNoKChtYXRjaGVzOiBRdWVyeU1hdGNoW10pID0+IHtcbiAgICAgIGFsbE1hdGNoZXMucHVzaCguLi5tYXRjaGVzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWxsTWF0Y2hlcztcbiAgfVxuXG4gIHByaXZhdGUgX2FkZFF1ZXJ5UmVhZHNUbyhcbiAgICAgIHRva2VuOiBDb21waWxlVG9rZW5NZXRhZGF0YSwgZGVmYXVsdFZhbHVlOiBDb21waWxlVG9rZW5NZXRhZGF0YSxcbiAgICAgIHF1ZXJ5UmVhZFRva2VuczogTWFwPGFueSwgUXVlcnlNYXRjaFtdPikge1xuICAgIHRoaXMuX2dldFF1ZXJpZXNGb3IodG9rZW4pLmZvckVhY2goKHF1ZXJ5KSA9PiB7XG4gICAgICBjb25zdCBxdWVyeVZhbHVlID0gcXVlcnkubWV0YS5yZWFkIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICAgIGNvbnN0IHRva2VuUmVmID0gdG9rZW5SZWZlcmVuY2UocXVlcnlWYWx1ZSk7XG4gICAgICBsZXQgcXVlcnlNYXRjaGVzID0gcXVlcnlSZWFkVG9rZW5zLmdldCh0b2tlblJlZik7XG4gICAgICBpZiAoIXF1ZXJ5TWF0Y2hlcykge1xuICAgICAgICBxdWVyeU1hdGNoZXMgPSBbXTtcbiAgICAgICAgcXVlcnlSZWFkVG9rZW5zLnNldCh0b2tlblJlZiwgcXVlcnlNYXRjaGVzKTtcbiAgICAgIH1cbiAgICAgIHF1ZXJ5TWF0Y2hlcy5wdXNoKHtxdWVyeUlkOiBxdWVyeS5xdWVyeUlkLCB2YWx1ZTogcXVlcnlWYWx1ZX0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UXVlcmllc0Zvcih0b2tlbjogQ29tcGlsZVRva2VuTWV0YWRhdGEpOiBRdWVyeVdpdGhJZFtdIHtcbiAgICBjb25zdCByZXN1bHQ6IFF1ZXJ5V2l0aElkW10gPSBbXTtcbiAgICBsZXQgY3VycmVudEVsOiBQcm92aWRlckVsZW1lbnRDb250ZXh0ID0gdGhpcztcbiAgICBsZXQgZGlzdGFuY2UgPSAwO1xuICAgIGxldCBxdWVyaWVzOiBRdWVyeVdpdGhJZFtdfHVuZGVmaW5lZDtcbiAgICB3aGlsZSAoY3VycmVudEVsICE9PSBudWxsKSB7XG4gICAgICBxdWVyaWVzID0gY3VycmVudEVsLl9jb250ZW50UXVlcmllcy5nZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pKTtcbiAgICAgIGlmIChxdWVyaWVzKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKC4uLnF1ZXJpZXMuZmlsdGVyKChxdWVyeSkgPT4gcXVlcnkubWV0YS5kZXNjZW5kYW50cyB8fCBkaXN0YW5jZSA8PSAxKSk7XG4gICAgICB9XG4gICAgICBpZiAoY3VycmVudEVsLl9kaXJlY3RpdmVBc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGlzdGFuY2UrKztcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRFbCA9IGN1cnJlbnRFbC5fcGFyZW50O1xuICAgIH1cbiAgICBxdWVyaWVzID0gdGhpcy52aWV3Q29udGV4dC52aWV3UXVlcmllcy5nZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pKTtcbiAgICBpZiAocXVlcmllcykge1xuICAgICAgcmVzdWx0LnB1c2goLi4ucXVlcmllcyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG4gIHByaXZhdGUgX2dldE9yQ3JlYXRlTG9jYWxQcm92aWRlcihcbiAgICAgIHJlcXVlc3RpbmdQcm92aWRlclR5cGU6IFByb3ZpZGVyQXN0VHlwZSwgdG9rZW46IENvbXBpbGVUb2tlbk1ldGFkYXRhLFxuICAgICAgZWFnZXI6IGJvb2xlYW4pOiBQcm92aWRlckFzdHxudWxsIHtcbiAgICBjb25zdCByZXNvbHZlZFByb3ZpZGVyID0gdGhpcy5fYWxsUHJvdmlkZXJzLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpO1xuICAgIGlmICghcmVzb2x2ZWRQcm92aWRlciB8fFxuICAgICAgICAoKHJlcXVlc3RpbmdQcm92aWRlclR5cGUgPT09IFByb3ZpZGVyQXN0VHlwZS5EaXJlY3RpdmUgfHxcbiAgICAgICAgICByZXF1ZXN0aW5nUHJvdmlkZXJUeXBlID09PSBQcm92aWRlckFzdFR5cGUuUHVibGljU2VydmljZSkgJiZcbiAgICAgICAgIHJlc29sdmVkUHJvdmlkZXIucHJvdmlkZXJUeXBlID09PSBQcm92aWRlckFzdFR5cGUuUHJpdmF0ZVNlcnZpY2UpIHx8XG4gICAgICAgICgocmVxdWVzdGluZ1Byb3ZpZGVyVHlwZSA9PT0gUHJvdmlkZXJBc3RUeXBlLlByaXZhdGVTZXJ2aWNlIHx8XG4gICAgICAgICAgcmVxdWVzdGluZ1Byb3ZpZGVyVHlwZSA9PT0gUHJvdmlkZXJBc3RUeXBlLlB1YmxpY1NlcnZpY2UpICYmXG4gICAgICAgICByZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVyVHlwZSA9PT0gUHJvdmlkZXJBc3RUeXBlLkJ1aWx0aW4pKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHRyYW5zZm9ybWVkUHJvdmlkZXJBc3QgPSB0aGlzLl90cmFuc2Zvcm1lZFByb3ZpZGVycy5nZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pKTtcbiAgICBpZiAodHJhbnNmb3JtZWRQcm92aWRlckFzdCkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkUHJvdmlkZXJBc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWVuUHJvdmlkZXJzLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpICE9IG51bGwpIHtcbiAgICAgIHRoaXMudmlld0NvbnRleHQuZXJyb3JzLnB1c2gobmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgICAgYENhbm5vdCBpbnN0YW50aWF0ZSBjeWNsaWMgZGVwZW5kZW5jeSEgJHt0b2tlbk5hbWUodG9rZW4pfWAsIHRoaXMuX3NvdXJjZVNwYW4pKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLl9zZWVuUHJvdmlkZXJzLnNldCh0b2tlblJlZmVyZW5jZSh0b2tlbiksIHRydWUpO1xuICAgIGNvbnN0IHRyYW5zZm9ybWVkUHJvdmlkZXJzID0gcmVzb2x2ZWRQcm92aWRlci5wcm92aWRlcnMubWFwKChwcm92aWRlcikgPT4ge1xuICAgICAgbGV0IHRyYW5zZm9ybWVkVXNlVmFsdWUgPSBwcm92aWRlci51c2VWYWx1ZTtcbiAgICAgIGxldCB0cmFuc2Zvcm1lZFVzZUV4aXN0aW5nID0gcHJvdmlkZXIudXNlRXhpc3RpbmchO1xuICAgICAgbGV0IHRyYW5zZm9ybWVkRGVwczogQ29tcGlsZURpRGVwZW5kZW5jeU1ldGFkYXRhW10gPSB1bmRlZmluZWQhO1xuICAgICAgaWYgKHByb3ZpZGVyLnVzZUV4aXN0aW5nICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdEaURlcCA9IHRoaXMuX2dldERlcGVuZGVuY3koXG4gICAgICAgICAgICByZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVyVHlwZSwge3Rva2VuOiBwcm92aWRlci51c2VFeGlzdGluZ30sIGVhZ2VyKSE7XG4gICAgICAgIGlmIChleGlzdGluZ0RpRGVwLnRva2VuICE9IG51bGwpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lZFVzZUV4aXN0aW5nID0gZXhpc3RpbmdEaURlcC50b2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmFuc2Zvcm1lZFVzZUV4aXN0aW5nID0gbnVsbCE7XG4gICAgICAgICAgdHJhbnNmb3JtZWRVc2VWYWx1ZSA9IGV4aXN0aW5nRGlEZXAudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocHJvdmlkZXIudXNlRmFjdG9yeSkge1xuICAgICAgICBjb25zdCBkZXBzID0gcHJvdmlkZXIuZGVwcyB8fCBwcm92aWRlci51c2VGYWN0b3J5LmRpRGVwcztcbiAgICAgICAgdHJhbnNmb3JtZWREZXBzID1cbiAgICAgICAgICAgIGRlcHMubWFwKChkZXApID0+IHRoaXMuX2dldERlcGVuZGVuY3kocmVzb2x2ZWRQcm92aWRlci5wcm92aWRlclR5cGUsIGRlcCwgZWFnZXIpISk7XG4gICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyLnVzZUNsYXNzKSB7XG4gICAgICAgIGNvbnN0IGRlcHMgPSBwcm92aWRlci5kZXBzIHx8IHByb3ZpZGVyLnVzZUNsYXNzLmRpRGVwcztcbiAgICAgICAgdHJhbnNmb3JtZWREZXBzID1cbiAgICAgICAgICAgIGRlcHMubWFwKChkZXApID0+IHRoaXMuX2dldERlcGVuZGVuY3kocmVzb2x2ZWRQcm92aWRlci5wcm92aWRlclR5cGUsIGRlcCwgZWFnZXIpISk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RyYW5zZm9ybVByb3ZpZGVyKHByb3ZpZGVyLCB7XG4gICAgICAgIHVzZUV4aXN0aW5nOiB0cmFuc2Zvcm1lZFVzZUV4aXN0aW5nLFxuICAgICAgICB1c2VWYWx1ZTogdHJhbnNmb3JtZWRVc2VWYWx1ZSxcbiAgICAgICAgZGVwczogdHJhbnNmb3JtZWREZXBzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0cmFuc2Zvcm1lZFByb3ZpZGVyQXN0ID1cbiAgICAgICAgX3RyYW5zZm9ybVByb3ZpZGVyQXN0KHJlc29sdmVkUHJvdmlkZXIsIHtlYWdlcjogZWFnZXIsIHByb3ZpZGVyczogdHJhbnNmb3JtZWRQcm92aWRlcnN9KTtcbiAgICB0aGlzLl90cmFuc2Zvcm1lZFByb3ZpZGVycy5zZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pLCB0cmFuc2Zvcm1lZFByb3ZpZGVyQXN0KTtcbiAgICByZXR1cm4gdHJhbnNmb3JtZWRQcm92aWRlckFzdDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExvY2FsRGVwZW5kZW5jeShcbiAgICAgIHJlcXVlc3RpbmdQcm92aWRlclR5cGU6IFByb3ZpZGVyQXN0VHlwZSwgZGVwOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGEsXG4gICAgICBlYWdlcjogYm9vbGVhbiA9IGZhbHNlKTogQ29tcGlsZURpRGVwZW5kZW5jeU1ldGFkYXRhfG51bGwge1xuICAgIGlmIChkZXAuaXNBdHRyaWJ1dGUpIHtcbiAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IHRoaXMuX2F0dHJzW2RlcC50b2tlbiEudmFsdWVdO1xuICAgICAgcmV0dXJuIHtpc1ZhbHVlOiB0cnVlLCB2YWx1ZTogYXR0clZhbHVlID09IG51bGwgPyBudWxsIDogYXR0clZhbHVlfTtcbiAgICB9XG5cbiAgICBpZiAoZGVwLnRva2VuICE9IG51bGwpIHtcbiAgICAgIC8vIGFjY2VzcyBidWlsdGludHNcbiAgICAgIGlmICgocmVxdWVzdGluZ1Byb3ZpZGVyVHlwZSA9PT0gUHJvdmlkZXJBc3RUeXBlLkRpcmVjdGl2ZSB8fFxuICAgICAgICAgICByZXF1ZXN0aW5nUHJvdmlkZXJUeXBlID09PSBQcm92aWRlckFzdFR5cGUuQ29tcG9uZW50KSkge1xuICAgICAgICBpZiAodG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuKSA9PT1cbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb250ZXh0LnJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoSWRlbnRpZmllcnMuUmVuZGVyZXIpIHx8XG4gICAgICAgICAgICB0b2tlblJlZmVyZW5jZShkZXAudG9rZW4pID09PVxuICAgICAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5FbGVtZW50UmVmKSB8fFxuICAgICAgICAgICAgdG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuKSA9PT1cbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb250ZXh0LnJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoXG4gICAgICAgICAgICAgICAgICAgIElkZW50aWZpZXJzLkNoYW5nZURldGVjdG9yUmVmKSB8fFxuICAgICAgICAgICAgdG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuKSA9PT1cbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDb250ZXh0LnJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoSWRlbnRpZmllcnMuVGVtcGxhdGVSZWYpKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuKSA9PT1cbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5WaWV3Q29udGFpbmVyUmVmKSkge1xuICAgICAgICAgICh0aGlzIGFzIHt0cmFuc2Zvcm1lZEhhc1ZpZXdDb250YWluZXI6IGJvb2xlYW59KS50cmFuc2Zvcm1lZEhhc1ZpZXdDb250YWluZXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBhY2Nlc3MgdGhlIGluamVjdG9yXG4gICAgICBpZiAodG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuKSA9PT1cbiAgICAgICAgICB0aGlzLnZpZXdDb250ZXh0LnJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoSWRlbnRpZmllcnMuSW5qZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBkZXA7XG4gICAgICB9XG4gICAgICAvLyBhY2Nlc3MgcHJvdmlkZXJzXG4gICAgICBpZiAodGhpcy5fZ2V0T3JDcmVhdGVMb2NhbFByb3ZpZGVyKHJlcXVlc3RpbmdQcm92aWRlclR5cGUsIGRlcC50b2tlbiwgZWFnZXIpICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRlcDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXBlbmRlbmN5KFxuICAgICAgcmVxdWVzdGluZ1Byb3ZpZGVyVHlwZTogUHJvdmlkZXJBc3RUeXBlLCBkZXA6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YSxcbiAgICAgIGVhZ2VyOiBib29sZWFuID0gZmFsc2UpOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGF8bnVsbCB7XG4gICAgbGV0IGN1cnJFbGVtZW50OiBQcm92aWRlckVsZW1lbnRDb250ZXh0ID0gdGhpcztcbiAgICBsZXQgY3VyckVhZ2VyOiBib29sZWFuID0gZWFnZXI7XG4gICAgbGV0IHJlc3VsdDogQ29tcGlsZURpRGVwZW5kZW5jeU1ldGFkYXRhfG51bGwgPSBudWxsO1xuICAgIGlmICghZGVwLmlzU2tpcFNlbGYpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMuX2dldExvY2FsRGVwZW5kZW5jeShyZXF1ZXN0aW5nUHJvdmlkZXJUeXBlLCBkZXAsIGVhZ2VyKTtcbiAgICB9XG4gICAgaWYgKGRlcC5pc1NlbGYpIHtcbiAgICAgIGlmICghcmVzdWx0ICYmIGRlcC5pc09wdGlvbmFsKSB7XG4gICAgICAgIHJlc3VsdCA9IHtpc1ZhbHVlOiB0cnVlLCB2YWx1ZTogbnVsbH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNoZWNrIHBhcmVudCBlbGVtZW50c1xuICAgICAgd2hpbGUgKCFyZXN1bHQgJiYgY3VyckVsZW1lbnQuX3BhcmVudCkge1xuICAgICAgICBjb25zdCBwcmV2RWxlbWVudCA9IGN1cnJFbGVtZW50O1xuICAgICAgICBjdXJyRWxlbWVudCA9IGN1cnJFbGVtZW50Ll9wYXJlbnQ7XG4gICAgICAgIGlmIChwcmV2RWxlbWVudC5faXNWaWV3Um9vdCkge1xuICAgICAgICAgIGN1cnJFYWdlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGN1cnJFbGVtZW50Ll9nZXRMb2NhbERlcGVuZGVuY3koUHJvdmlkZXJBc3RUeXBlLlB1YmxpY1NlcnZpY2UsIGRlcCwgY3VyckVhZ2VyKTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIEBIb3N0IHJlc3RyaWN0aW9uXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICBpZiAoIWRlcC5pc0hvc3QgfHwgdGhpcy52aWV3Q29udGV4dC5jb21wb25lbnQuaXNIb3N0IHx8XG4gICAgICAgICAgICB0aGlzLnZpZXdDb250ZXh0LmNvbXBvbmVudC50eXBlLnJlZmVyZW5jZSA9PT0gdG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuISkgfHxcbiAgICAgICAgICAgIHRoaXMudmlld0NvbnRleHQudmlld1Byb3ZpZGVycy5nZXQodG9rZW5SZWZlcmVuY2UoZGVwLnRva2VuISkpICE9IG51bGwpIHtcbiAgICAgICAgICByZXN1bHQgPSBkZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0ID0gZGVwLmlzT3B0aW9uYWwgPyB7aXNWYWx1ZTogdHJ1ZSwgdmFsdWU6IG51bGx9IDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgdGhpcy52aWV3Q29udGV4dC5lcnJvcnMucHVzaChcbiAgICAgICAgICBuZXcgUHJvdmlkZXJFcnJvcihgTm8gcHJvdmlkZXIgZm9yICR7dG9rZW5OYW1lKGRlcC50b2tlbiEpfWAsIHRoaXMuX3NvdXJjZVNwYW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBOZ01vZHVsZVByb3ZpZGVyQW5hbHl6ZXIge1xuICBwcml2YXRlIF90cmFuc2Zvcm1lZFByb3ZpZGVycyA9IG5ldyBNYXA8YW55LCBQcm92aWRlckFzdD4oKTtcbiAgcHJpdmF0ZSBfc2VlblByb3ZpZGVycyA9IG5ldyBNYXA8YW55LCBib29sZWFuPigpO1xuICBwcml2YXRlIF9hbGxQcm92aWRlcnM6IE1hcDxhbnksIFByb3ZpZGVyQXN0PjtcbiAgcHJpdmF0ZSBfZXJyb3JzOiBQcm92aWRlckVycm9yW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgcmVmbGVjdG9yOiBDb21waWxlUmVmbGVjdG9yLCBuZ01vZHVsZTogQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEsXG4gICAgICBleHRyYVByb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSwgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuKSB7XG4gICAgdGhpcy5fYWxsUHJvdmlkZXJzID0gbmV3IE1hcDxhbnksIFByb3ZpZGVyQXN0PigpO1xuICAgIG5nTW9kdWxlLnRyYW5zaXRpdmVNb2R1bGUubW9kdWxlcy5mb3JFYWNoKChuZ01vZHVsZVR5cGU6IENvbXBpbGVUeXBlTWV0YWRhdGEpID0+IHtcbiAgICAgIGNvbnN0IG5nTW9kdWxlUHJvdmlkZXIgPSB7dG9rZW46IHtpZGVudGlmaWVyOiBuZ01vZHVsZVR5cGV9LCB1c2VDbGFzczogbmdNb2R1bGVUeXBlfTtcbiAgICAgIF9yZXNvbHZlUHJvdmlkZXJzKFxuICAgICAgICAgIFtuZ01vZHVsZVByb3ZpZGVyXSwgUHJvdmlkZXJBc3RUeXBlLlB1YmxpY1NlcnZpY2UsIHRydWUsIHNvdXJjZVNwYW4sIHRoaXMuX2Vycm9ycyxcbiAgICAgICAgICB0aGlzLl9hbGxQcm92aWRlcnMsIC8qIGlzTW9kdWxlICovIHRydWUpO1xuICAgIH0pO1xuICAgIF9yZXNvbHZlUHJvdmlkZXJzKFxuICAgICAgICBuZ01vZHVsZS50cmFuc2l0aXZlTW9kdWxlLnByb3ZpZGVycy5tYXAoZW50cnkgPT4gZW50cnkucHJvdmlkZXIpLmNvbmNhdChleHRyYVByb3ZpZGVycyksXG4gICAgICAgIFByb3ZpZGVyQXN0VHlwZS5QdWJsaWNTZXJ2aWNlLCBmYWxzZSwgc291cmNlU3BhbiwgdGhpcy5fZXJyb3JzLCB0aGlzLl9hbGxQcm92aWRlcnMsXG4gICAgICAgIC8qIGlzTW9kdWxlICovIGZhbHNlKTtcbiAgfVxuXG4gIHBhcnNlKCk6IFByb3ZpZGVyQXN0W10ge1xuICAgIEFycmF5LmZyb20odGhpcy5fYWxsUHJvdmlkZXJzLnZhbHVlcygpKS5mb3JFYWNoKChwcm92aWRlcikgPT4ge1xuICAgICAgdGhpcy5fZ2V0T3JDcmVhdGVMb2NhbFByb3ZpZGVyKHByb3ZpZGVyLnRva2VuLCBwcm92aWRlci5lYWdlcik7XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuX2Vycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlcnJvclN0cmluZyA9IHRoaXMuX2Vycm9ycy5qb2luKCdcXG4nKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUHJvdmlkZXIgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JTdHJpbmd9YCk7XG4gICAgfVxuICAgIC8vIE5vdGU6IE1hcHMga2VlcCB0aGVpciBpbnNlcnRpb24gb3JkZXIuXG4gICAgY29uc3QgbGF6eVByb3ZpZGVyczogUHJvdmlkZXJBc3RbXSA9IFtdO1xuICAgIGNvbnN0IGVhZ2VyUHJvdmlkZXJzOiBQcm92aWRlckFzdFtdID0gW107XG4gICAgdGhpcy5fdHJhbnNmb3JtZWRQcm92aWRlcnMuZm9yRWFjaChwcm92aWRlciA9PiB7XG4gICAgICBpZiAocHJvdmlkZXIuZWFnZXIpIHtcbiAgICAgICAgZWFnZXJQcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXp5UHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYXp5UHJvdmlkZXJzLmNvbmNhdChlYWdlclByb3ZpZGVycyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRPckNyZWF0ZUxvY2FsUHJvdmlkZXIodG9rZW46IENvbXBpbGVUb2tlbk1ldGFkYXRhLCBlYWdlcjogYm9vbGVhbik6IFByb3ZpZGVyQXN0fG51bGwge1xuICAgIGNvbnN0IHJlc29sdmVkUHJvdmlkZXIgPSB0aGlzLl9hbGxQcm92aWRlcnMuZ2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSk7XG4gICAgaWYgKCFyZXNvbHZlZFByb3ZpZGVyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHRyYW5zZm9ybWVkUHJvdmlkZXJBc3QgPSB0aGlzLl90cmFuc2Zvcm1lZFByb3ZpZGVycy5nZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pKTtcbiAgICBpZiAodHJhbnNmb3JtZWRQcm92aWRlckFzdCkge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybWVkUHJvdmlkZXJBc3Q7XG4gICAgfVxuICAgIGlmICh0aGlzLl9zZWVuUHJvdmlkZXJzLmdldCh0b2tlblJlZmVyZW5jZSh0b2tlbikpICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9ycy5wdXNoKG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgICAgIGBDYW5ub3QgaW5zdGFudGlhdGUgY3ljbGljIGRlcGVuZGVuY3khICR7dG9rZW5OYW1lKHRva2VuKX1gLFxuICAgICAgICAgIHJlc29sdmVkUHJvdmlkZXIuc291cmNlU3BhbikpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMuX3NlZW5Qcm92aWRlcnMuc2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSwgdHJ1ZSk7XG4gICAgY29uc3QgdHJhbnNmb3JtZWRQcm92aWRlcnMgPSByZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVycy5tYXAoKHByb3ZpZGVyKSA9PiB7XG4gICAgICBsZXQgdHJhbnNmb3JtZWRVc2VWYWx1ZSA9IHByb3ZpZGVyLnVzZVZhbHVlO1xuICAgICAgbGV0IHRyYW5zZm9ybWVkVXNlRXhpc3RpbmcgPSBwcm92aWRlci51c2VFeGlzdGluZyE7XG4gICAgICBsZXQgdHJhbnNmb3JtZWREZXBzOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGFbXSA9IHVuZGVmaW5lZCE7XG4gICAgICBpZiAocHJvdmlkZXIudXNlRXhpc3RpbmcgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0RpRGVwID1cbiAgICAgICAgICAgIHRoaXMuX2dldERlcGVuZGVuY3koe3Rva2VuOiBwcm92aWRlci51c2VFeGlzdGluZ30sIGVhZ2VyLCByZXNvbHZlZFByb3ZpZGVyLnNvdXJjZVNwYW4pO1xuICAgICAgICBpZiAoZXhpc3RpbmdEaURlcC50b2tlbiAhPSBudWxsKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZWRVc2VFeGlzdGluZyA9IGV4aXN0aW5nRGlEZXAudG9rZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHJhbnNmb3JtZWRVc2VFeGlzdGluZyA9IG51bGwhO1xuICAgICAgICAgIHRyYW5zZm9ybWVkVXNlVmFsdWUgPSBleGlzdGluZ0RpRGVwLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyLnVzZUZhY3RvcnkpIHtcbiAgICAgICAgY29uc3QgZGVwcyA9IHByb3ZpZGVyLmRlcHMgfHwgcHJvdmlkZXIudXNlRmFjdG9yeS5kaURlcHM7XG4gICAgICAgIHRyYW5zZm9ybWVkRGVwcyA9XG4gICAgICAgICAgICBkZXBzLm1hcCgoZGVwKSA9PiB0aGlzLl9nZXREZXBlbmRlbmN5KGRlcCwgZWFnZXIsIHJlc29sdmVkUHJvdmlkZXIuc291cmNlU3BhbikpO1xuICAgICAgfSBlbHNlIGlmIChwcm92aWRlci51c2VDbGFzcykge1xuICAgICAgICBjb25zdCBkZXBzID0gcHJvdmlkZXIuZGVwcyB8fCBwcm92aWRlci51c2VDbGFzcy5kaURlcHM7XG4gICAgICAgIHRyYW5zZm9ybWVkRGVwcyA9XG4gICAgICAgICAgICBkZXBzLm1hcCgoZGVwKSA9PiB0aGlzLl9nZXREZXBlbmRlbmN5KGRlcCwgZWFnZXIsIHJlc29sdmVkUHJvdmlkZXIuc291cmNlU3BhbikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90cmFuc2Zvcm1Qcm92aWRlcihwcm92aWRlciwge1xuICAgICAgICB1c2VFeGlzdGluZzogdHJhbnNmb3JtZWRVc2VFeGlzdGluZyxcbiAgICAgICAgdXNlVmFsdWU6IHRyYW5zZm9ybWVkVXNlVmFsdWUsXG4gICAgICAgIGRlcHM6IHRyYW5zZm9ybWVkRGVwc1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdHJhbnNmb3JtZWRQcm92aWRlckFzdCA9XG4gICAgICAgIF90cmFuc2Zvcm1Qcm92aWRlckFzdChyZXNvbHZlZFByb3ZpZGVyLCB7ZWFnZXI6IGVhZ2VyLCBwcm92aWRlcnM6IHRyYW5zZm9ybWVkUHJvdmlkZXJzfSk7XG4gICAgdGhpcy5fdHJhbnNmb3JtZWRQcm92aWRlcnMuc2V0KHRva2VuUmVmZXJlbmNlKHRva2VuKSwgdHJhbnNmb3JtZWRQcm92aWRlckFzdCk7XG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkUHJvdmlkZXJBc3Q7XG4gIH1cblxuICBwcml2YXRlIF9nZXREZXBlbmRlbmN5KFxuICAgICAgZGVwOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGEsIGVhZ2VyOiBib29sZWFuID0gZmFsc2UsXG4gICAgICByZXF1ZXN0b3JTb3VyY2VTcGFuOiBQYXJzZVNvdXJjZVNwYW4pOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGEge1xuICAgIGxldCBmb3VuZExvY2FsID0gZmFsc2U7XG4gICAgaWYgKCFkZXAuaXNTa2lwU2VsZiAmJiBkZXAudG9rZW4gIT0gbnVsbCkge1xuICAgICAgLy8gYWNjZXNzIHRoZSBpbmplY3RvclxuICAgICAgaWYgKHRva2VuUmVmZXJlbmNlKGRlcC50b2tlbikgPT09XG4gICAgICAgICAgICAgIHRoaXMucmVmbGVjdG9yLnJlc29sdmVFeHRlcm5hbFJlZmVyZW5jZShJZGVudGlmaWVycy5JbmplY3RvcikgfHxcbiAgICAgICAgICB0b2tlblJlZmVyZW5jZShkZXAudG9rZW4pID09PVxuICAgICAgICAgICAgICB0aGlzLnJlZmxlY3Rvci5yZXNvbHZlRXh0ZXJuYWxSZWZlcmVuY2UoSWRlbnRpZmllcnMuQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSkge1xuICAgICAgICBmb3VuZExvY2FsID0gdHJ1ZTtcbiAgICAgICAgLy8gYWNjZXNzIHByb3ZpZGVyc1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9nZXRPckNyZWF0ZUxvY2FsUHJvdmlkZXIoZGVwLnRva2VuLCBlYWdlcikgIT0gbnVsbCkge1xuICAgICAgICBmb3VuZExvY2FsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlcDtcbiAgfVxufVxuXG5mdW5jdGlvbiBfdHJhbnNmb3JtUHJvdmlkZXIoXG4gICAgcHJvdmlkZXI6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhLFxuICAgIHt1c2VFeGlzdGluZywgdXNlVmFsdWUsIGRlcHN9OlxuICAgICAgICB7dXNlRXhpc3Rpbmc6IENvbXBpbGVUb2tlbk1ldGFkYXRhLCB1c2VWYWx1ZTogYW55LCBkZXBzOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGFbXX0pIHtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogcHJvdmlkZXIudG9rZW4sXG4gICAgdXNlQ2xhc3M6IHByb3ZpZGVyLnVzZUNsYXNzLFxuICAgIHVzZUV4aXN0aW5nOiB1c2VFeGlzdGluZyxcbiAgICB1c2VGYWN0b3J5OiBwcm92aWRlci51c2VGYWN0b3J5LFxuICAgIHVzZVZhbHVlOiB1c2VWYWx1ZSxcbiAgICBkZXBzOiBkZXBzLFxuICAgIG11bHRpOiBwcm92aWRlci5tdWx0aVxuICB9O1xufVxuXG5mdW5jdGlvbiBfdHJhbnNmb3JtUHJvdmlkZXJBc3QoXG4gICAgcHJvdmlkZXI6IFByb3ZpZGVyQXN0LFxuICAgIHtlYWdlciwgcHJvdmlkZXJzfToge2VhZ2VyOiBib29sZWFuLCBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW119KTogUHJvdmlkZXJBc3Qge1xuICByZXR1cm4gbmV3IFByb3ZpZGVyQXN0KFxuICAgICAgcHJvdmlkZXIudG9rZW4sIHByb3ZpZGVyLm11bHRpUHJvdmlkZXIsIHByb3ZpZGVyLmVhZ2VyIHx8IGVhZ2VyLCBwcm92aWRlcnMsXG4gICAgICBwcm92aWRlci5wcm92aWRlclR5cGUsIHByb3ZpZGVyLmxpZmVjeWNsZUhvb2tzLCBwcm92aWRlci5zb3VyY2VTcGFuLCBwcm92aWRlci5pc01vZHVsZSk7XG59XG5cbmZ1bmN0aW9uIF9yZXNvbHZlUHJvdmlkZXJzRnJvbURpcmVjdGl2ZXMoXG4gICAgZGlyZWN0aXZlczogQ29tcGlsZURpcmVjdGl2ZVN1bW1hcnlbXSwgc291cmNlU3BhbjogUGFyc2VTb3VyY2VTcGFuLFxuICAgIHRhcmdldEVycm9yczogUGFyc2VFcnJvcltdKTogTWFwPGFueSwgUHJvdmlkZXJBc3Q+IHtcbiAgY29uc3QgcHJvdmlkZXJzQnlUb2tlbiA9IG5ldyBNYXA8YW55LCBQcm92aWRlckFzdD4oKTtcbiAgZGlyZWN0aXZlcy5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICBjb25zdCBkaXJQcm92aWRlcjpcbiAgICAgICAgQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEgPSB7dG9rZW46IHtpZGVudGlmaWVyOiBkaXJlY3RpdmUudHlwZX0sIHVzZUNsYXNzOiBkaXJlY3RpdmUudHlwZX07XG4gICAgX3Jlc29sdmVQcm92aWRlcnMoXG4gICAgICAgIFtkaXJQcm92aWRlcl0sXG4gICAgICAgIGRpcmVjdGl2ZS5pc0NvbXBvbmVudCA/IFByb3ZpZGVyQXN0VHlwZS5Db21wb25lbnQgOiBQcm92aWRlckFzdFR5cGUuRGlyZWN0aXZlLCB0cnVlLFxuICAgICAgICBzb3VyY2VTcGFuLCB0YXJnZXRFcnJvcnMsIHByb3ZpZGVyc0J5VG9rZW4sIC8qIGlzTW9kdWxlICovIGZhbHNlKTtcbiAgfSk7XG5cbiAgLy8gTm90ZTogZGlyZWN0aXZlcyBuZWVkIHRvIGJlIGFibGUgdG8gb3ZlcndyaXRlIHByb3ZpZGVycyBvZiBhIGNvbXBvbmVudCFcbiAgY29uc3QgZGlyZWN0aXZlc1dpdGhDb21wb25lbnRGaXJzdCA9XG4gICAgICBkaXJlY3RpdmVzLmZpbHRlcihkaXIgPT4gZGlyLmlzQ29tcG9uZW50KS5jb25jYXQoZGlyZWN0aXZlcy5maWx0ZXIoZGlyID0+ICFkaXIuaXNDb21wb25lbnQpKTtcbiAgZGlyZWN0aXZlc1dpdGhDb21wb25lbnRGaXJzdC5mb3JFYWNoKChkaXJlY3RpdmUpID0+IHtcbiAgICBfcmVzb2x2ZVByb3ZpZGVycyhcbiAgICAgICAgZGlyZWN0aXZlLnByb3ZpZGVycywgUHJvdmlkZXJBc3RUeXBlLlB1YmxpY1NlcnZpY2UsIGZhbHNlLCBzb3VyY2VTcGFuLCB0YXJnZXRFcnJvcnMsXG4gICAgICAgIHByb3ZpZGVyc0J5VG9rZW4sIC8qIGlzTW9kdWxlICovIGZhbHNlKTtcbiAgICBfcmVzb2x2ZVByb3ZpZGVycyhcbiAgICAgICAgZGlyZWN0aXZlLnZpZXdQcm92aWRlcnMsIFByb3ZpZGVyQXN0VHlwZS5Qcml2YXRlU2VydmljZSwgZmFsc2UsIHNvdXJjZVNwYW4sIHRhcmdldEVycm9ycyxcbiAgICAgICAgcHJvdmlkZXJzQnlUb2tlbiwgLyogaXNNb2R1bGUgKi8gZmFsc2UpO1xuICB9KTtcbiAgcmV0dXJuIHByb3ZpZGVyc0J5VG9rZW47XG59XG5cbmZ1bmN0aW9uIF9yZXNvbHZlUHJvdmlkZXJzKFxuICAgIHByb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSwgcHJvdmlkZXJUeXBlOiBQcm92aWRlckFzdFR5cGUsIGVhZ2VyOiBib29sZWFuLFxuICAgIHNvdXJjZVNwYW46IFBhcnNlU291cmNlU3BhbiwgdGFyZ2V0RXJyb3JzOiBQYXJzZUVycm9yW10sXG4gICAgdGFyZ2V0UHJvdmlkZXJzQnlUb2tlbjogTWFwPGFueSwgUHJvdmlkZXJBc3Q+LCBpc01vZHVsZTogYm9vbGVhbikge1xuICBwcm92aWRlcnMuZm9yRWFjaCgocHJvdmlkZXIpID0+IHtcbiAgICBsZXQgcmVzb2x2ZWRQcm92aWRlciA9IHRhcmdldFByb3ZpZGVyc0J5VG9rZW4uZ2V0KHRva2VuUmVmZXJlbmNlKHByb3ZpZGVyLnRva2VuKSk7XG4gICAgaWYgKHJlc29sdmVkUHJvdmlkZXIgIT0gbnVsbCAmJiAhIXJlc29sdmVkUHJvdmlkZXIubXVsdGlQcm92aWRlciAhPT0gISFwcm92aWRlci5tdWx0aSkge1xuICAgICAgdGFyZ2V0RXJyb3JzLnB1c2gobmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgICAgYE1peGluZyBtdWx0aSBhbmQgbm9uIG11bHRpIHByb3ZpZGVyIGlzIG5vdCBwb3NzaWJsZSBmb3IgdG9rZW4gJHtcbiAgICAgICAgICAgICAgdG9rZW5OYW1lKHJlc29sdmVkUHJvdmlkZXIudG9rZW4pfWAsXG4gICAgICAgICAgc291cmNlU3BhbikpO1xuICAgIH1cbiAgICBpZiAoIXJlc29sdmVkUHJvdmlkZXIpIHtcbiAgICAgIGNvbnN0IGxpZmVjeWNsZUhvb2tzID0gcHJvdmlkZXIudG9rZW4uaWRlbnRpZmllciAmJlxuICAgICAgICAgICAgICAoPENvbXBpbGVUeXBlTWV0YWRhdGE+cHJvdmlkZXIudG9rZW4uaWRlbnRpZmllcikubGlmZWN5Y2xlSG9va3MgP1xuICAgICAgICAgICg8Q29tcGlsZVR5cGVNZXRhZGF0YT5wcm92aWRlci50b2tlbi5pZGVudGlmaWVyKS5saWZlY3ljbGVIb29rcyA6XG4gICAgICAgICAgW107XG4gICAgICBjb25zdCBpc1VzZVZhbHVlID0gIShwcm92aWRlci51c2VDbGFzcyB8fCBwcm92aWRlci51c2VFeGlzdGluZyB8fCBwcm92aWRlci51c2VGYWN0b3J5KTtcbiAgICAgIHJlc29sdmVkUHJvdmlkZXIgPSBuZXcgUHJvdmlkZXJBc3QoXG4gICAgICAgICAgcHJvdmlkZXIudG9rZW4sICEhcHJvdmlkZXIubXVsdGksIGVhZ2VyIHx8IGlzVXNlVmFsdWUsIFtwcm92aWRlcl0sIHByb3ZpZGVyVHlwZSxcbiAgICAgICAgICBsaWZlY3ljbGVIb29rcywgc291cmNlU3BhbiwgaXNNb2R1bGUpO1xuICAgICAgdGFyZ2V0UHJvdmlkZXJzQnlUb2tlbi5zZXQodG9rZW5SZWZlcmVuY2UocHJvdmlkZXIudG9rZW4pLCByZXNvbHZlZFByb3ZpZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFwcm92aWRlci5tdWx0aSkge1xuICAgICAgICByZXNvbHZlZFByb3ZpZGVyLnByb3ZpZGVycy5sZW5ndGggPSAwO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZWRQcm92aWRlci5wcm92aWRlcnMucHVzaChwcm92aWRlcik7XG4gICAgfVxuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBfZ2V0Vmlld1F1ZXJpZXMoY29tcG9uZW50OiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEpOiBNYXA8YW55LCBRdWVyeVdpdGhJZFtdPiB7XG4gIC8vIE5vdGU6IHF1ZXJpZXMgc3RhcnQgd2l0aCBpZCAxIHNvIHdlIGNhbiB1c2UgdGhlIG51bWJlciBpbiBhIEJsb29tIGZpbHRlciFcbiAgbGV0IHZpZXdRdWVyeUlkID0gMTtcbiAgY29uc3Qgdmlld1F1ZXJpZXMgPSBuZXcgTWFwPGFueSwgUXVlcnlXaXRoSWRbXT4oKTtcbiAgaWYgKGNvbXBvbmVudC52aWV3UXVlcmllcykge1xuICAgIGNvbXBvbmVudC52aWV3UXVlcmllcy5mb3JFYWNoKFxuICAgICAgICAocXVlcnkpID0+IF9hZGRRdWVyeVRvVG9rZW5NYXAodmlld1F1ZXJpZXMsIHttZXRhOiBxdWVyeSwgcXVlcnlJZDogdmlld1F1ZXJ5SWQrK30pKTtcbiAgfVxuICByZXR1cm4gdmlld1F1ZXJpZXM7XG59XG5cbmZ1bmN0aW9uIF9nZXRDb250ZW50UXVlcmllcyhcbiAgICBjb250ZW50UXVlcnlTdGFydElkOiBudW1iZXIsIGRpcmVjdGl2ZXM6IENvbXBpbGVEaXJlY3RpdmVTdW1tYXJ5W10pOiBNYXA8YW55LCBRdWVyeVdpdGhJZFtdPiB7XG4gIGxldCBjb250ZW50UXVlcnlJZCA9IGNvbnRlbnRRdWVyeVN0YXJ0SWQ7XG4gIGNvbnN0IGNvbnRlbnRRdWVyaWVzID0gbmV3IE1hcDxhbnksIFF1ZXJ5V2l0aElkW10+KCk7XG4gIGRpcmVjdGl2ZXMuZm9yRWFjaCgoZGlyZWN0aXZlLCBkaXJlY3RpdmVJbmRleCkgPT4ge1xuICAgIGlmIChkaXJlY3RpdmUucXVlcmllcykge1xuICAgICAgZGlyZWN0aXZlLnF1ZXJpZXMuZm9yRWFjaChcbiAgICAgICAgICAocXVlcnkpID0+IF9hZGRRdWVyeVRvVG9rZW5NYXAoY29udGVudFF1ZXJpZXMsIHttZXRhOiBxdWVyeSwgcXVlcnlJZDogY29udGVudFF1ZXJ5SWQrK30pKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29udGVudFF1ZXJpZXM7XG59XG5cbmZ1bmN0aW9uIF9hZGRRdWVyeVRvVG9rZW5NYXAobWFwOiBNYXA8YW55LCBRdWVyeVdpdGhJZFtdPiwgcXVlcnk6IFF1ZXJ5V2l0aElkKSB7XG4gIHF1ZXJ5Lm1ldGEuc2VsZWN0b3JzLmZvckVhY2goKHRva2VuOiBDb21waWxlVG9rZW5NZXRhZGF0YSkgPT4ge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQodG9rZW5SZWZlcmVuY2UodG9rZW4pKTtcbiAgICBpZiAoIWVudHJ5KSB7XG4gICAgICBlbnRyeSA9IFtdO1xuICAgICAgbWFwLnNldCh0b2tlblJlZmVyZW5jZSh0b2tlbiksIGVudHJ5KTtcbiAgICB9XG4gICAgZW50cnkucHVzaChxdWVyeSk7XG4gIH0pO1xufVxuIl19
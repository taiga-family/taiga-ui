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
        define("@angular/compiler/src/compile_metadata", ["require", "exports", "@angular/compiler/src/aot/static_symbol", "@angular/compiler/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var static_symbol_1 = require("@angular/compiler/src/aot/static_symbol");
    var util_1 = require("@angular/compiler/src/util");
    // group 0: "[prop] or (event) or @trigger"
    // group 1: "prop" from "[prop]"
    // group 2: "event" from "(event)"
    // group 3: "@trigger" from "@trigger"
    var HOST_REG_EXP = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
    function sanitizeIdentifier(name) {
        return name.replace(/\W/g, '_');
    }
    exports.sanitizeIdentifier = sanitizeIdentifier;
    var _anonymousTypeIndex = 0;
    function identifierName(compileIdentifier) {
        if (!compileIdentifier || !compileIdentifier.reference) {
            return null;
        }
        var ref = compileIdentifier.reference;
        if (ref instanceof static_symbol_1.StaticSymbol) {
            return ref.name;
        }
        if (ref['__anonymousType']) {
            return ref['__anonymousType'];
        }
        var identifier = util_1.stringify(ref);
        if (identifier.indexOf('(') >= 0) {
            // case: anonymous functions!
            identifier = "anonymous_" + _anonymousTypeIndex++;
            ref['__anonymousType'] = identifier;
        }
        else {
            identifier = sanitizeIdentifier(identifier);
        }
        return identifier;
    }
    exports.identifierName = identifierName;
    function identifierModuleUrl(compileIdentifier) {
        var ref = compileIdentifier.reference;
        if (ref instanceof static_symbol_1.StaticSymbol) {
            return ref.filePath;
        }
        // Runtime type
        return "./" + util_1.stringify(ref);
    }
    exports.identifierModuleUrl = identifierModuleUrl;
    function viewClassName(compType, embeddedTemplateIndex) {
        return "View_" + identifierName({ reference: compType }) + "_" + embeddedTemplateIndex;
    }
    exports.viewClassName = viewClassName;
    function rendererTypeName(compType) {
        return "RenderType_" + identifierName({ reference: compType });
    }
    exports.rendererTypeName = rendererTypeName;
    function hostViewClassName(compType) {
        return "HostView_" + identifierName({ reference: compType });
    }
    exports.hostViewClassName = hostViewClassName;
    function componentFactoryName(compType) {
        return identifierName({ reference: compType }) + "NgFactory";
    }
    exports.componentFactoryName = componentFactoryName;
    var CompileSummaryKind;
    (function (CompileSummaryKind) {
        CompileSummaryKind[CompileSummaryKind["Pipe"] = 0] = "Pipe";
        CompileSummaryKind[CompileSummaryKind["Directive"] = 1] = "Directive";
        CompileSummaryKind[CompileSummaryKind["NgModule"] = 2] = "NgModule";
        CompileSummaryKind[CompileSummaryKind["Injectable"] = 3] = "Injectable";
    })(CompileSummaryKind = exports.CompileSummaryKind || (exports.CompileSummaryKind = {}));
    function tokenName(token) {
        return token.value != null ? sanitizeIdentifier(token.value) : identifierName(token.identifier);
    }
    exports.tokenName = tokenName;
    function tokenReference(token) {
        if (token.identifier != null) {
            return token.identifier.reference;
        }
        else {
            return token.value;
        }
    }
    exports.tokenReference = tokenReference;
    /**
     * Metadata about a stylesheet
     */
    var CompileStylesheetMetadata = /** @class */ (function () {
        function CompileStylesheetMetadata(_a) {
            var _b = _a === void 0 ? {} : _a, moduleUrl = _b.moduleUrl, styles = _b.styles, styleUrls = _b.styleUrls;
            this.moduleUrl = moduleUrl || null;
            this.styles = _normalizeArray(styles);
            this.styleUrls = _normalizeArray(styleUrls);
        }
        return CompileStylesheetMetadata;
    }());
    exports.CompileStylesheetMetadata = CompileStylesheetMetadata;
    /**
     * Metadata regarding compilation of a template.
     */
    var CompileTemplateMetadata = /** @class */ (function () {
        function CompileTemplateMetadata(_a) {
            var encapsulation = _a.encapsulation, template = _a.template, templateUrl = _a.templateUrl, htmlAst = _a.htmlAst, styles = _a.styles, styleUrls = _a.styleUrls, externalStylesheets = _a.externalStylesheets, animations = _a.animations, ngContentSelectors = _a.ngContentSelectors, interpolation = _a.interpolation, isInline = _a.isInline, preserveWhitespaces = _a.preserveWhitespaces;
            this.encapsulation = encapsulation;
            this.template = template;
            this.templateUrl = templateUrl;
            this.htmlAst = htmlAst;
            this.styles = _normalizeArray(styles);
            this.styleUrls = _normalizeArray(styleUrls);
            this.externalStylesheets = _normalizeArray(externalStylesheets);
            this.animations = animations ? flatten(animations) : [];
            this.ngContentSelectors = ngContentSelectors || [];
            if (interpolation && interpolation.length != 2) {
                throw new Error("'interpolation' should have a start and an end symbol.");
            }
            this.interpolation = interpolation;
            this.isInline = isInline;
            this.preserveWhitespaces = preserveWhitespaces;
        }
        CompileTemplateMetadata.prototype.toSummary = function () {
            return {
                ngContentSelectors: this.ngContentSelectors,
                encapsulation: this.encapsulation,
                styles: this.styles,
                animations: this.animations
            };
        };
        return CompileTemplateMetadata;
    }());
    exports.CompileTemplateMetadata = CompileTemplateMetadata;
    /**
     * Metadata regarding compilation of a directive.
     */
    var CompileDirectiveMetadata = /** @class */ (function () {
        function CompileDirectiveMetadata(_a) {
            var isHost = _a.isHost, type = _a.type, isComponent = _a.isComponent, selector = _a.selector, exportAs = _a.exportAs, changeDetection = _a.changeDetection, inputs = _a.inputs, outputs = _a.outputs, hostListeners = _a.hostListeners, hostProperties = _a.hostProperties, hostAttributes = _a.hostAttributes, providers = _a.providers, viewProviders = _a.viewProviders, queries = _a.queries, guards = _a.guards, viewQueries = _a.viewQueries, entryComponents = _a.entryComponents, template = _a.template, componentViewType = _a.componentViewType, rendererType = _a.rendererType, componentFactory = _a.componentFactory;
            this.isHost = !!isHost;
            this.type = type;
            this.isComponent = isComponent;
            this.selector = selector;
            this.exportAs = exportAs;
            this.changeDetection = changeDetection;
            this.inputs = inputs;
            this.outputs = outputs;
            this.hostListeners = hostListeners;
            this.hostProperties = hostProperties;
            this.hostAttributes = hostAttributes;
            this.providers = _normalizeArray(providers);
            this.viewProviders = _normalizeArray(viewProviders);
            this.queries = _normalizeArray(queries);
            this.guards = guards;
            this.viewQueries = _normalizeArray(viewQueries);
            this.entryComponents = _normalizeArray(entryComponents);
            this.template = template;
            this.componentViewType = componentViewType;
            this.rendererType = rendererType;
            this.componentFactory = componentFactory;
        }
        CompileDirectiveMetadata.create = function (_a) {
            var isHost = _a.isHost, type = _a.type, isComponent = _a.isComponent, selector = _a.selector, exportAs = _a.exportAs, changeDetection = _a.changeDetection, inputs = _a.inputs, outputs = _a.outputs, host = _a.host, providers = _a.providers, viewProviders = _a.viewProviders, queries = _a.queries, guards = _a.guards, viewQueries = _a.viewQueries, entryComponents = _a.entryComponents, template = _a.template, componentViewType = _a.componentViewType, rendererType = _a.rendererType, componentFactory = _a.componentFactory;
            var hostListeners = {};
            var hostProperties = {};
            var hostAttributes = {};
            if (host != null) {
                Object.keys(host).forEach(function (key) {
                    var value = host[key];
                    var matches = key.match(HOST_REG_EXP);
                    if (matches === null) {
                        hostAttributes[key] = value;
                    }
                    else if (matches[1] != null) {
                        hostProperties[matches[1]] = value;
                    }
                    else if (matches[2] != null) {
                        hostListeners[matches[2]] = value;
                    }
                });
            }
            var inputsMap = {};
            if (inputs != null) {
                inputs.forEach(function (bindConfig) {
                    // canonical syntax: `dirProp: elProp`
                    // if there is no `:`, use dirProp = elProp
                    var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
                    inputsMap[parts[0]] = parts[1];
                });
            }
            var outputsMap = {};
            if (outputs != null) {
                outputs.forEach(function (bindConfig) {
                    // canonical syntax: `dirProp: elProp`
                    // if there is no `:`, use dirProp = elProp
                    var parts = util_1.splitAtColon(bindConfig, [bindConfig, bindConfig]);
                    outputsMap[parts[0]] = parts[1];
                });
            }
            return new CompileDirectiveMetadata({
                isHost: isHost,
                type: type,
                isComponent: !!isComponent,
                selector: selector,
                exportAs: exportAs,
                changeDetection: changeDetection,
                inputs: inputsMap,
                outputs: outputsMap,
                hostListeners: hostListeners,
                hostProperties: hostProperties,
                hostAttributes: hostAttributes,
                providers: providers,
                viewProviders: viewProviders,
                queries: queries,
                guards: guards,
                viewQueries: viewQueries,
                entryComponents: entryComponents,
                template: template,
                componentViewType: componentViewType,
                rendererType: rendererType,
                componentFactory: componentFactory,
            });
        };
        CompileDirectiveMetadata.prototype.toSummary = function () {
            return {
                summaryKind: CompileSummaryKind.Directive,
                type: this.type,
                isComponent: this.isComponent,
                selector: this.selector,
                exportAs: this.exportAs,
                inputs: this.inputs,
                outputs: this.outputs,
                hostListeners: this.hostListeners,
                hostProperties: this.hostProperties,
                hostAttributes: this.hostAttributes,
                providers: this.providers,
                viewProviders: this.viewProviders,
                queries: this.queries,
                guards: this.guards,
                viewQueries: this.viewQueries,
                entryComponents: this.entryComponents,
                changeDetection: this.changeDetection,
                template: this.template && this.template.toSummary(),
                componentViewType: this.componentViewType,
                rendererType: this.rendererType,
                componentFactory: this.componentFactory
            };
        };
        return CompileDirectiveMetadata;
    }());
    exports.CompileDirectiveMetadata = CompileDirectiveMetadata;
    var CompilePipeMetadata = /** @class */ (function () {
        function CompilePipeMetadata(_a) {
            var type = _a.type, name = _a.name, pure = _a.pure;
            this.type = type;
            this.name = name;
            this.pure = !!pure;
        }
        CompilePipeMetadata.prototype.toSummary = function () {
            return {
                summaryKind: CompileSummaryKind.Pipe,
                type: this.type,
                name: this.name,
                pure: this.pure
            };
        };
        return CompilePipeMetadata;
    }());
    exports.CompilePipeMetadata = CompilePipeMetadata;
    var CompileShallowModuleMetadata = /** @class */ (function () {
        function CompileShallowModuleMetadata() {
        }
        return CompileShallowModuleMetadata;
    }());
    exports.CompileShallowModuleMetadata = CompileShallowModuleMetadata;
    /**
     * Metadata regarding compilation of a module.
     */
    var CompileNgModuleMetadata = /** @class */ (function () {
        function CompileNgModuleMetadata(_a) {
            var type = _a.type, providers = _a.providers, declaredDirectives = _a.declaredDirectives, exportedDirectives = _a.exportedDirectives, declaredPipes = _a.declaredPipes, exportedPipes = _a.exportedPipes, entryComponents = _a.entryComponents, bootstrapComponents = _a.bootstrapComponents, importedModules = _a.importedModules, exportedModules = _a.exportedModules, schemas = _a.schemas, transitiveModule = _a.transitiveModule, id = _a.id;
            this.type = type || null;
            this.declaredDirectives = _normalizeArray(declaredDirectives);
            this.exportedDirectives = _normalizeArray(exportedDirectives);
            this.declaredPipes = _normalizeArray(declaredPipes);
            this.exportedPipes = _normalizeArray(exportedPipes);
            this.providers = _normalizeArray(providers);
            this.entryComponents = _normalizeArray(entryComponents);
            this.bootstrapComponents = _normalizeArray(bootstrapComponents);
            this.importedModules = _normalizeArray(importedModules);
            this.exportedModules = _normalizeArray(exportedModules);
            this.schemas = _normalizeArray(schemas);
            this.id = id || null;
            this.transitiveModule = transitiveModule || null;
        }
        CompileNgModuleMetadata.prototype.toSummary = function () {
            var module = this.transitiveModule;
            return {
                summaryKind: CompileSummaryKind.NgModule,
                type: this.type,
                entryComponents: module.entryComponents,
                providers: module.providers,
                modules: module.modules,
                exportedDirectives: module.exportedDirectives,
                exportedPipes: module.exportedPipes
            };
        };
        return CompileNgModuleMetadata;
    }());
    exports.CompileNgModuleMetadata = CompileNgModuleMetadata;
    var TransitiveCompileNgModuleMetadata = /** @class */ (function () {
        function TransitiveCompileNgModuleMetadata() {
            this.directivesSet = new Set();
            this.directives = [];
            this.exportedDirectivesSet = new Set();
            this.exportedDirectives = [];
            this.pipesSet = new Set();
            this.pipes = [];
            this.exportedPipesSet = new Set();
            this.exportedPipes = [];
            this.modulesSet = new Set();
            this.modules = [];
            this.entryComponentsSet = new Set();
            this.entryComponents = [];
            this.providers = [];
        }
        TransitiveCompileNgModuleMetadata.prototype.addProvider = function (provider, module) {
            this.providers.push({ provider: provider, module: module });
        };
        TransitiveCompileNgModuleMetadata.prototype.addDirective = function (id) {
            if (!this.directivesSet.has(id.reference)) {
                this.directivesSet.add(id.reference);
                this.directives.push(id);
            }
        };
        TransitiveCompileNgModuleMetadata.prototype.addExportedDirective = function (id) {
            if (!this.exportedDirectivesSet.has(id.reference)) {
                this.exportedDirectivesSet.add(id.reference);
                this.exportedDirectives.push(id);
            }
        };
        TransitiveCompileNgModuleMetadata.prototype.addPipe = function (id) {
            if (!this.pipesSet.has(id.reference)) {
                this.pipesSet.add(id.reference);
                this.pipes.push(id);
            }
        };
        TransitiveCompileNgModuleMetadata.prototype.addExportedPipe = function (id) {
            if (!this.exportedPipesSet.has(id.reference)) {
                this.exportedPipesSet.add(id.reference);
                this.exportedPipes.push(id);
            }
        };
        TransitiveCompileNgModuleMetadata.prototype.addModule = function (id) {
            if (!this.modulesSet.has(id.reference)) {
                this.modulesSet.add(id.reference);
                this.modules.push(id);
            }
        };
        TransitiveCompileNgModuleMetadata.prototype.addEntryComponent = function (ec) {
            if (!this.entryComponentsSet.has(ec.componentType)) {
                this.entryComponentsSet.add(ec.componentType);
                this.entryComponents.push(ec);
            }
        };
        return TransitiveCompileNgModuleMetadata;
    }());
    exports.TransitiveCompileNgModuleMetadata = TransitiveCompileNgModuleMetadata;
    function _normalizeArray(obj) {
        return obj || [];
    }
    var ProviderMeta = /** @class */ (function () {
        function ProviderMeta(token, _a) {
            var useClass = _a.useClass, useValue = _a.useValue, useExisting = _a.useExisting, useFactory = _a.useFactory, deps = _a.deps, multi = _a.multi;
            this.token = token;
            this.useClass = useClass || null;
            this.useValue = useValue;
            this.useExisting = useExisting;
            this.useFactory = useFactory || null;
            this.dependencies = deps || null;
            this.multi = !!multi;
        }
        return ProviderMeta;
    }());
    exports.ProviderMeta = ProviderMeta;
    function flatten(list) {
        return list.reduce(function (flat, item) {
            var flatItem = Array.isArray(item) ? flatten(item) : item;
            return flat.concat(flatItem);
        }, []);
    }
    exports.flatten = flatten;
    function jitSourceUrl(url) {
        // Note: We need 3 "/" so that ng shows up as a separate domain
        // in the chrome dev tools.
        return url.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, 'ng:///');
    }
    function templateSourceUrl(ngModuleType, compMeta, templateMeta) {
        var url;
        if (templateMeta.isInline) {
            if (compMeta.type.reference instanceof static_symbol_1.StaticSymbol) {
                // Note: a .ts file might contain multiple components with inline templates,
                // so we need to give them unique urls, as these will be used for sourcemaps.
                url = compMeta.type.reference.filePath + "." + compMeta.type.reference.name + ".html";
            }
            else {
                url = identifierName(ngModuleType) + "/" + identifierName(compMeta.type) + ".html";
            }
        }
        else {
            url = templateMeta.templateUrl;
        }
        return compMeta.type.reference instanceof static_symbol_1.StaticSymbol ? url : jitSourceUrl(url);
    }
    exports.templateSourceUrl = templateSourceUrl;
    function sharedStylesheetJitUrl(meta, id) {
        var pathParts = meta.moduleUrl.split(/\/\\/g);
        var baseName = pathParts[pathParts.length - 1];
        return jitSourceUrl("css/" + id + baseName + ".ngstyle.js");
    }
    exports.sharedStylesheetJitUrl = sharedStylesheetJitUrl;
    function ngModuleJitUrl(moduleMeta) {
        return jitSourceUrl(identifierName(moduleMeta.type) + "/module.ngfactory.js");
    }
    exports.ngModuleJitUrl = ngModuleJitUrl;
    function templateJitUrl(ngModuleType, compMeta) {
        return jitSourceUrl(identifierName(ngModuleType) + "/" + identifierName(compMeta.type) + ".ngfactory.js");
    }
    exports.templateJitUrl = templateJitUrl;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZV9tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jb21waWxlX21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUVBQWlEO0lBSWpELG1EQUErQztJQUUvQywyQ0FBMkM7SUFDM0MsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxzQ0FBc0M7SUFDdEMsSUFBTSxZQUFZLEdBQUcsb0RBQW9ELENBQUM7SUFFMUUsU0FBZ0Isa0JBQWtCLENBQUMsSUFBWTtRQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFGRCxnREFFQztJQUVELElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBRTVCLFNBQWdCLGNBQWMsQ0FBQyxpQkFBMkQ7UUFFeEYsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxHQUFHLFlBQVksNEJBQVksRUFBRTtZQUMvQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7U0FDakI7UUFDRCxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQzFCLE9BQU8sR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLFVBQVUsR0FBRyxnQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsNkJBQTZCO1lBQzdCLFVBQVUsR0FBRyxlQUFhLG1CQUFtQixFQUFJLENBQUM7WUFDbEQsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsVUFBVSxDQUFDO1NBQ3JDO2FBQU07WUFDTCxVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBckJELHdDQXFCQztJQUVELFNBQWdCLG1CQUFtQixDQUFDLGlCQUE0QztRQUM5RSxJQUFNLEdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxHQUFHLFlBQVksNEJBQVksRUFBRTtZQUMvQixPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDckI7UUFDRCxlQUFlO1FBQ2YsT0FBTyxPQUFLLGdCQUFTLENBQUMsR0FBRyxDQUFHLENBQUM7SUFDL0IsQ0FBQztJQVBELGtEQU9DO0lBRUQsU0FBZ0IsYUFBYSxDQUFDLFFBQWEsRUFBRSxxQkFBNkI7UUFDeEUsT0FBTyxVQUFRLGNBQWMsQ0FBQyxFQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxTQUFJLHFCQUF1QixDQUFDO0lBQ2xGLENBQUM7SUFGRCxzQ0FFQztJQUVELFNBQWdCLGdCQUFnQixDQUFDLFFBQWE7UUFDNUMsT0FBTyxnQkFBYyxjQUFjLENBQUMsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLENBQUcsQ0FBQztJQUMvRCxDQUFDO0lBRkQsNENBRUM7SUFFRCxTQUFnQixpQkFBaUIsQ0FBQyxRQUFhO1FBQzdDLE9BQU8sY0FBWSxjQUFjLENBQUMsRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLENBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRkQsOENBRUM7SUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxRQUFhO1FBQ2hELE9BQVUsY0FBYyxDQUFDLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBQyxDQUFDLGNBQVcsQ0FBQztJQUM3RCxDQUFDO0lBRkQsb0RBRUM7SUFVRCxJQUFZLGtCQUtYO0lBTEQsV0FBWSxrQkFBa0I7UUFDNUIsMkRBQUksQ0FBQTtRQUNKLHFFQUFTLENBQUE7UUFDVCxtRUFBUSxDQUFBO1FBQ1IsdUVBQVUsQ0FBQTtJQUNaLENBQUMsRUFMVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQUs3QjtJQXNDRCxTQUFnQixTQUFTLENBQUMsS0FBMkI7UUFDbkQsT0FBTyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFGRCw4QkFFQztJQUVELFNBQWdCLGNBQWMsQ0FBQyxLQUEyQjtRQUN4RCxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQzVCLE9BQU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7U0FDbkM7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNwQjtJQUNILENBQUM7SUFORCx3Q0FNQztJQXNDRDs7T0FFRztJQUNIO1FBSUUsbUNBQ0ksRUFDc0U7Z0JBRHRFLDRCQUNzRSxFQURyRSx3QkFBUyxFQUFFLGtCQUFNLEVBQUUsd0JBQVM7WUFFL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLElBQUksSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFDSCxnQ0FBQztJQUFELENBQUMsQUFYRCxJQVdDO0lBWFksOERBQXlCO0lBdUJ0Qzs7T0FFRztJQUNIO1FBYUUsaUNBQVksRUEwQlg7Z0JBekJDLGdDQUFhLEVBQ2Isc0JBQVEsRUFDUiw0QkFBVyxFQUNYLG9CQUFPLEVBQ1Asa0JBQU0sRUFDTix3QkFBUyxFQUNULDRDQUFtQixFQUNuQiwwQkFBVSxFQUNWLDBDQUFrQixFQUNsQixnQ0FBYSxFQUNiLHNCQUFRLEVBQ1IsNENBQW1CO1lBZW5CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDeEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixJQUFJLEVBQUUsQ0FBQztZQUNuRCxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDOUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO2FBQzNFO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQ2pELENBQUM7UUFFRCwyQ0FBUyxHQUFUO1lBQ0UsT0FBTztnQkFDTCxrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO2dCQUMzQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQzVCLENBQUM7UUFDSixDQUFDO1FBQ0gsOEJBQUM7SUFBRCxDQUFDLEFBakVELElBaUVDO0lBakVZLDBEQUF1QjtJQWlHcEM7O09BRUc7SUFDSDtRQTZIRSxrQ0FBWSxFQTRDWDtnQkEzQ0Msa0JBQU0sRUFDTixjQUFJLEVBQ0osNEJBQVcsRUFDWCxzQkFBUSxFQUNSLHNCQUFRLEVBQ1Isb0NBQWUsRUFDZixrQkFBTSxFQUNOLG9CQUFPLEVBQ1AsZ0NBQWEsRUFDYixrQ0FBYyxFQUNkLGtDQUFjLEVBQ2Qsd0JBQVMsRUFDVCxnQ0FBYSxFQUNiLG9CQUFPLEVBQ1Asa0JBQU0sRUFDTiw0QkFBVyxFQUNYLG9DQUFlLEVBQ2Ysc0JBQVEsRUFDUix3Q0FBaUIsRUFDakIsOEJBQVksRUFDWixzQ0FBZ0I7WUF3QmhCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUV6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQzNDLENBQUM7UUEvTE0sK0JBQU0sR0FBYixVQUFjLEVBd0NiO2dCQXZDQyxrQkFBTSxFQUNOLGNBQUksRUFDSiw0QkFBVyxFQUNYLHNCQUFRLEVBQ1Isc0JBQVEsRUFDUixvQ0FBZSxFQUNmLGtCQUFNLEVBQ04sb0JBQU8sRUFDUCxjQUFJLEVBQ0osd0JBQVMsRUFDVCxnQ0FBYSxFQUNiLG9CQUFPLEVBQ1Asa0JBQU0sRUFDTiw0QkFBVyxFQUNYLG9DQUFlLEVBQ2Ysc0JBQVEsRUFDUix3Q0FBaUIsRUFDakIsOEJBQVksRUFDWixzQ0FBZ0I7WUFzQmhCLElBQU0sYUFBYSxHQUE0QixFQUFFLENBQUM7WUFDbEQsSUFBTSxjQUFjLEdBQTRCLEVBQUUsQ0FBQztZQUNuRCxJQUFNLGNBQWMsR0FBNEIsRUFBRSxDQUFDO1lBQ25ELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO29CQUMzQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3hCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3hDLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTt3QkFDcEIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztxQkFDN0I7eUJBQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO3dCQUM3QixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUNwQzt5QkFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7d0JBQzdCLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ25DO2dCQUNILENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFDRCxJQUFNLFNBQVMsR0FBNEIsRUFBRSxDQUFDO1lBQzlDLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQWtCO29CQUNoQyxzQ0FBc0M7b0JBQ3RDLDJDQUEyQztvQkFDM0MsSUFBTSxLQUFLLEdBQUcsbUJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDakUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUNELElBQU0sVUFBVSxHQUE0QixFQUFFLENBQUM7WUFDL0MsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBa0I7b0JBQ2pDLHNDQUFzQztvQkFDdEMsMkNBQTJDO29CQUMzQyxJQUFNLEtBQUssR0FBRyxtQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxJQUFJLHdCQUF3QixDQUFDO2dCQUNsQyxNQUFNLFFBQUE7Z0JBQ04sSUFBSSxNQUFBO2dCQUNKLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVztnQkFDMUIsUUFBUSxVQUFBO2dCQUNSLFFBQVEsVUFBQTtnQkFDUixlQUFlLGlCQUFBO2dCQUNmLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsYUFBYSxlQUFBO2dCQUNiLGNBQWMsZ0JBQUE7Z0JBQ2QsY0FBYyxnQkFBQTtnQkFDZCxTQUFTLFdBQUE7Z0JBQ1QsYUFBYSxlQUFBO2dCQUNiLE9BQU8sU0FBQTtnQkFDUCxNQUFNLFFBQUE7Z0JBQ04sV0FBVyxhQUFBO2dCQUNYLGVBQWUsaUJBQUE7Z0JBQ2YsUUFBUSxVQUFBO2dCQUNSLGlCQUFpQixtQkFBQTtnQkFDakIsWUFBWSxjQUFBO2dCQUNaLGdCQUFnQixrQkFBQTthQUNqQixDQUFDLENBQUM7UUFDTCxDQUFDO1FBOEZELDRDQUFTLEdBQVQ7WUFDRSxPQUFPO2dCQUNMLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTO2dCQUN6QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDakMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNuQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7Z0JBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO2dCQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDckMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BELGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7Z0JBQ3pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDL0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjthQUN4QyxDQUFDO1FBQ0osQ0FBQztRQUNILCtCQUFDO0lBQUQsQ0FBQyxBQTNORCxJQTJOQztJQTNOWSw0REFBd0I7SUFtT3JDO1FBS0UsNkJBQVksRUFJWDtnQkFKWSxjQUFJLEVBQUUsY0FBSSxFQUFFLGNBQUk7WUFLM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFFRCx1Q0FBUyxHQUFUO1lBQ0UsT0FBTztnQkFDTCxXQUFXLEVBQUUsa0JBQWtCLENBQUMsSUFBSTtnQkFDcEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsQ0FBQztRQUNKLENBQUM7UUFDSCwwQkFBQztJQUFELENBQUMsQUF2QkQsSUF1QkM7SUF2Qlksa0RBQW1CO0lBMkNoQztRQUFBO1FBT0EsQ0FBQztRQUFELG1DQUFDO0lBQUQsQ0FBQyxBQVBELElBT0M7SUFQWSxvRUFBNEI7SUFTekM7O09BRUc7SUFDSDtRQWtCRSxpQ0FBWSxFQTRCWDtnQkEzQkMsY0FBSSxFQUNKLHdCQUFTLEVBQ1QsMENBQWtCLEVBQ2xCLDBDQUFrQixFQUNsQixnQ0FBYSxFQUNiLGdDQUFhLEVBQ2Isb0NBQWUsRUFDZiw0Q0FBbUIsRUFDbkIsb0NBQWUsRUFDZixvQ0FBZSxFQUNmLG9CQUFPLEVBQ1Asc0NBQWdCLEVBQ2hCLFVBQUU7WUFnQkYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLElBQUksSUFBSSxDQUFDO1FBQ25ELENBQUM7UUFFRCwyQ0FBUyxHQUFUO1lBQ0UsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFpQixDQUFDO1lBQ3RDLE9BQU87Z0JBQ0wsV0FBVyxFQUFFLGtCQUFrQixDQUFDLFFBQVE7Z0JBQ3hDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWU7Z0JBQ3ZDLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztnQkFDM0IsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUN2QixrQkFBa0IsRUFBRSxNQUFNLENBQUMsa0JBQWtCO2dCQUM3QyxhQUFhLEVBQUUsTUFBTSxDQUFDLGFBQWE7YUFDcEMsQ0FBQztRQUNKLENBQUM7UUFDSCw4QkFBQztJQUFELENBQUMsQUExRUQsSUEwRUM7SUExRVksMERBQXVCO0lBNEVwQztRQUFBO1lBQ0Usa0JBQWEsR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1lBQy9CLGVBQVUsR0FBZ0MsRUFBRSxDQUFDO1lBQzdDLDBCQUFxQixHQUFHLElBQUksR0FBRyxFQUFPLENBQUM7WUFDdkMsdUJBQWtCLEdBQWdDLEVBQUUsQ0FBQztZQUNyRCxhQUFRLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQztZQUMxQixVQUFLLEdBQWdDLEVBQUUsQ0FBQztZQUN4QyxxQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1lBQ2xDLGtCQUFhLEdBQWdDLEVBQUUsQ0FBQztZQUNoRCxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQU8sQ0FBQztZQUM1QixZQUFPLEdBQTBCLEVBQUUsQ0FBQztZQUNwQyx1QkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBTyxDQUFDO1lBQ3BDLG9CQUFlLEdBQW9DLEVBQUUsQ0FBQztZQUV0RCxjQUFTLEdBQTZFLEVBQUUsQ0FBQztRQTBDM0YsQ0FBQztRQXhDQyx1REFBVyxHQUFYLFVBQVksUUFBaUMsRUFBRSxNQUFpQztZQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELHdEQUFZLEdBQVosVUFBYSxFQUE2QjtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQztRQUNELGdFQUFvQixHQUFwQixVQUFxQixFQUE2QjtZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0gsQ0FBQztRQUNELG1EQUFPLEdBQVAsVUFBUSxFQUE2QjtZQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQztRQUNELDJEQUFlLEdBQWYsVUFBZ0IsRUFBNkI7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDN0I7UUFDSCxDQUFDO1FBQ0QscURBQVMsR0FBVCxVQUFVLEVBQXVCO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdkI7UUFDSCxDQUFDO1FBQ0QsNkRBQWlCLEdBQWpCLFVBQWtCLEVBQWlDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQztRQUNILHdDQUFDO0lBQUQsQ0FBQyxBQXhERCxJQXdEQztJQXhEWSw4RUFBaUM7SUEwRDlDLFNBQVMsZUFBZSxDQUFDLEdBQXlCO1FBQ2hELE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7UUFTRSxzQkFBWSxLQUFVLEVBQUUsRUFPdkI7Z0JBUHdCLHNCQUFRLEVBQUUsc0JBQVEsRUFBRSw0QkFBVyxFQUFFLDBCQUFVLEVBQUUsY0FBSSxFQUFFLGdCQUFLO1lBUS9FLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2QixDQUFDO1FBQ0gsbUJBQUM7SUFBRCxDQUFDLEFBekJELElBeUJDO0lBekJZLG9DQUFZO0lBMkJ6QixTQUFnQixPQUFPLENBQUksSUFBa0I7UUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBVyxFQUFFLElBQVc7WUFDMUMsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDNUQsT0FBYSxJQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFMRCwwQkFLQztJQUVELFNBQVMsWUFBWSxDQUFDLEdBQVc7UUFDL0IsK0RBQStEO1FBQy9ELDJCQUEyQjtRQUMzQixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFNBQWdCLGlCQUFpQixDQUM3QixZQUF1QyxFQUFFLFFBQTJDLEVBQ3BGLFlBQTJEO1FBQzdELElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN6QixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxZQUFZLDRCQUFZLEVBQUU7Z0JBQ25ELDRFQUE0RTtnQkFDNUUsNkVBQTZFO2dCQUM3RSxHQUFHLEdBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxTQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksVUFBTyxDQUFDO2FBQ2xGO2lCQUFNO2dCQUNMLEdBQUcsR0FBTSxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBTyxDQUFDO2FBQy9FO1NBQ0Y7YUFBTTtZQUNMLEdBQUcsR0FBRyxZQUFZLENBQUMsV0FBWSxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsWUFBWSw0QkFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBaEJELDhDQWdCQztJQUVELFNBQWdCLHNCQUFzQixDQUFDLElBQStCLEVBQUUsRUFBVTtRQUNoRixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRCxPQUFPLFlBQVksQ0FBQyxTQUFPLEVBQUUsR0FBRyxRQUFRLGdCQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBSkQsd0RBSUM7SUFFRCxTQUFnQixjQUFjLENBQUMsVUFBbUM7UUFDaEUsT0FBTyxZQUFZLENBQUksY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMseUJBQXNCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRkQsd0NBRUM7SUFFRCxTQUFnQixjQUFjLENBQzFCLFlBQXVDLEVBQUUsUUFBa0M7UUFDN0UsT0FBTyxZQUFZLENBQ1osY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFlLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBSkQsd0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7U3RhdGljU3ltYm9sfSBmcm9tICcuL2FvdC9zdGF0aWNfc3ltYm9sJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFNjaGVtYU1ldGFkYXRhLCBUeXBlLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCB7TGlmZWN5Y2xlSG9va3N9IGZyb20gJy4vbGlmZWN5Y2xlX3JlZmxlY3Rvcic7XG5pbXBvcnQge1BhcnNlVHJlZVJlc3VsdCBhcyBIdG1sUGFyc2VUcmVlUmVzdWx0fSBmcm9tICcuL21sX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHtzcGxpdEF0Q29sb24sIHN0cmluZ2lmeX0gZnJvbSAnLi91dGlsJztcblxuLy8gZ3JvdXAgMDogXCJbcHJvcF0gb3IgKGV2ZW50KSBvciBAdHJpZ2dlclwiXG4vLyBncm91cCAxOiBcInByb3BcIiBmcm9tIFwiW3Byb3BdXCJcbi8vIGdyb3VwIDI6IFwiZXZlbnRcIiBmcm9tIFwiKGV2ZW50KVwiXG4vLyBncm91cCAzOiBcIkB0cmlnZ2VyXCIgZnJvbSBcIkB0cmlnZ2VyXCJcbmNvbnN0IEhPU1RfUkVHX0VYUCA9IC9eKD86KD86XFxbKFteXFxdXSspXFxdKXwoPzpcXCgoW15cXCldKylcXCkpKXwoXFxAWy1cXHddKykkLztcblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplSWRlbnRpZmllcihuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9cXFcvZywgJ18nKTtcbn1cblxubGV0IF9hbm9ueW1vdXNUeXBlSW5kZXggPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpZmllck5hbWUoY29tcGlsZUlkZW50aWZpZXI6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGF8bnVsbHx1bmRlZmluZWQpOiBzdHJpbmd8XG4gICAgbnVsbCB7XG4gIGlmICghY29tcGlsZUlkZW50aWZpZXIgfHwgIWNvbXBpbGVJZGVudGlmaWVyLnJlZmVyZW5jZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHJlZiA9IGNvbXBpbGVJZGVudGlmaWVyLnJlZmVyZW5jZTtcbiAgaWYgKHJlZiBpbnN0YW5jZW9mIFN0YXRpY1N5bWJvbCkge1xuICAgIHJldHVybiByZWYubmFtZTtcbiAgfVxuICBpZiAocmVmWydfX2Fub255bW91c1R5cGUnXSkge1xuICAgIHJldHVybiByZWZbJ19fYW5vbnltb3VzVHlwZSddO1xuICB9XG4gIGxldCBpZGVudGlmaWVyID0gc3RyaW5naWZ5KHJlZik7XG4gIGlmIChpZGVudGlmaWVyLmluZGV4T2YoJygnKSA+PSAwKSB7XG4gICAgLy8gY2FzZTogYW5vbnltb3VzIGZ1bmN0aW9ucyFcbiAgICBpZGVudGlmaWVyID0gYGFub255bW91c18ke19hbm9ueW1vdXNUeXBlSW5kZXgrK31gO1xuICAgIHJlZlsnX19hbm9ueW1vdXNUeXBlJ10gPSBpZGVudGlmaWVyO1xuICB9IGVsc2Uge1xuICAgIGlkZW50aWZpZXIgPSBzYW5pdGl6ZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGlmaWVyTW9kdWxlVXJsKGNvbXBpbGVJZGVudGlmaWVyOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKTogc3RyaW5nIHtcbiAgY29uc3QgcmVmID0gY29tcGlsZUlkZW50aWZpZXIucmVmZXJlbmNlO1xuICBpZiAocmVmIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sKSB7XG4gICAgcmV0dXJuIHJlZi5maWxlUGF0aDtcbiAgfVxuICAvLyBSdW50aW1lIHR5cGVcbiAgcmV0dXJuIGAuLyR7c3RyaW5naWZ5KHJlZil9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdDbGFzc05hbWUoY29tcFR5cGU6IGFueSwgZW1iZWRkZWRUZW1wbGF0ZUluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gYFZpZXdfJHtpZGVudGlmaWVyTmFtZSh7cmVmZXJlbmNlOiBjb21wVHlwZX0pfV8ke2VtYmVkZGVkVGVtcGxhdGVJbmRleH1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyZXJUeXBlTmFtZShjb21wVHlwZTogYW55KTogc3RyaW5nIHtcbiAgcmV0dXJuIGBSZW5kZXJUeXBlXyR7aWRlbnRpZmllck5hbWUoe3JlZmVyZW5jZTogY29tcFR5cGV9KX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG9zdFZpZXdDbGFzc05hbWUoY29tcFR5cGU6IGFueSk6IHN0cmluZyB7XG4gIHJldHVybiBgSG9zdFZpZXdfJHtpZGVudGlmaWVyTmFtZSh7cmVmZXJlbmNlOiBjb21wVHlwZX0pfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRGYWN0b3J5TmFtZShjb21wVHlwZTogYW55KTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke2lkZW50aWZpZXJOYW1lKHtyZWZlcmVuY2U6IGNvbXBUeXBlfSl9TmdGYWN0b3J5YDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm94eUNsYXNzIHtcbiAgc2V0RGVsZWdhdGUoZGVsZWdhdGU6IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSB7XG4gIHJlZmVyZW5jZTogYW55O1xufVxuXG5leHBvcnQgZW51bSBDb21waWxlU3VtbWFyeUtpbmQge1xuICBQaXBlLFxuICBEaXJlY3RpdmUsXG4gIE5nTW9kdWxlLFxuICBJbmplY3RhYmxlXG59XG5cbi8qKlxuICogQSBDb21waWxlU3VtbWFyeSBpcyB0aGUgZGF0YSBuZWVkZWQgdG8gdXNlIGEgZGlyZWN0aXZlIC8gcGlwZSAvIG1vZHVsZVxuICogaW4gb3RoZXIgbW9kdWxlcyAvIGNvbXBvbmVudHMuIEhvd2V2ZXIsIHRoaXMgZGF0YSBpcyBub3QgZW5vdWdoIHRvIGNvbXBpbGVcbiAqIHRoZSBkaXJlY3RpdmUgLyBtb2R1bGUgaXRzZWxmLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVUeXBlU3VtbWFyeSB7XG4gIHN1bW1hcnlLaW5kOiBDb21waWxlU3VtbWFyeUtpbmR8bnVsbDtcbiAgdHlwZTogQ29tcGlsZVR5cGVNZXRhZGF0YTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGEge1xuICBpc0F0dHJpYnV0ZT86IGJvb2xlYW47XG4gIGlzU2VsZj86IGJvb2xlYW47XG4gIGlzSG9zdD86IGJvb2xlYW47XG4gIGlzU2tpcFNlbGY/OiBib29sZWFuO1xuICBpc09wdGlvbmFsPzogYm9vbGVhbjtcbiAgaXNWYWx1ZT86IGJvb2xlYW47XG4gIHRva2VuPzogQ29tcGlsZVRva2VuTWV0YWRhdGE7XG4gIHZhbHVlPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVQcm92aWRlck1ldGFkYXRhIHtcbiAgdG9rZW46IENvbXBpbGVUb2tlbk1ldGFkYXRhO1xuICB1c2VDbGFzcz86IENvbXBpbGVUeXBlTWV0YWRhdGE7XG4gIHVzZVZhbHVlPzogYW55O1xuICB1c2VFeGlzdGluZz86IENvbXBpbGVUb2tlbk1ldGFkYXRhO1xuICB1c2VGYWN0b3J5PzogQ29tcGlsZUZhY3RvcnlNZXRhZGF0YTtcbiAgZGVwcz86IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YVtdO1xuICBtdWx0aT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcGlsZUZhY3RvcnlNZXRhZGF0YSBleHRlbmRzIENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEge1xuICBkaURlcHM6IENvbXBpbGVEaURlcGVuZGVuY3lNZXRhZGF0YVtdO1xuICByZWZlcmVuY2U6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuTmFtZSh0b2tlbjogQ29tcGlsZVRva2VuTWV0YWRhdGEpIHtcbiAgcmV0dXJuIHRva2VuLnZhbHVlICE9IG51bGwgPyBzYW5pdGl6ZUlkZW50aWZpZXIodG9rZW4udmFsdWUpIDogaWRlbnRpZmllck5hbWUodG9rZW4uaWRlbnRpZmllcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2tlblJlZmVyZW5jZSh0b2tlbjogQ29tcGlsZVRva2VuTWV0YWRhdGEpIHtcbiAgaWYgKHRva2VuLmlkZW50aWZpZXIgIT0gbnVsbCkge1xuICAgIHJldHVybiB0b2tlbi5pZGVudGlmaWVyLnJlZmVyZW5jZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdG9rZW4udmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21waWxlVG9rZW5NZXRhZGF0YSB7XG4gIHZhbHVlPzogYW55O1xuICBpZGVudGlmaWVyPzogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YXxDb21waWxlVHlwZU1ldGFkYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVJbmplY3RhYmxlTWV0YWRhdGEge1xuICBzeW1ib2w6IFN0YXRpY1N5bWJvbDtcbiAgdHlwZTogQ29tcGlsZVR5cGVNZXRhZGF0YTtcblxuICBwcm92aWRlZEluPzogU3RhdGljU3ltYm9sO1xuXG4gIHVzZVZhbHVlPzogYW55O1xuICB1c2VDbGFzcz86IFN0YXRpY1N5bWJvbDtcbiAgdXNlRXhpc3Rpbmc/OiBTdGF0aWNTeW1ib2w7XG4gIHVzZUZhY3Rvcnk/OiBTdGF0aWNTeW1ib2w7XG4gIGRlcHM/OiBhbnlbXTtcbn1cblxuLyoqXG4gKiBNZXRhZGF0YSByZWdhcmRpbmcgY29tcGlsYXRpb24gb2YgYSB0eXBlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVUeXBlTWV0YWRhdGEgZXh0ZW5kcyBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhIHtcbiAgZGlEZXBzOiBDb21waWxlRGlEZXBlbmRlbmN5TWV0YWRhdGFbXTtcbiAgbGlmZWN5Y2xlSG9va3M6IExpZmVjeWNsZUhvb2tzW107XG4gIHJlZmVyZW5jZTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVRdWVyeU1ldGFkYXRhIHtcbiAgc2VsZWN0b3JzOiBBcnJheTxDb21waWxlVG9rZW5NZXRhZGF0YT47XG4gIGRlc2NlbmRhbnRzOiBib29sZWFuO1xuICBmaXJzdDogYm9vbGVhbjtcbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG4gIHJlYWQ6IENvbXBpbGVUb2tlbk1ldGFkYXRhO1xuICBzdGF0aWM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIE1ldGFkYXRhIGFib3V0IGEgc3R5bGVzaGVldFxuICovXG5leHBvcnQgY2xhc3MgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YSB7XG4gIG1vZHVsZVVybDogc3RyaW5nfG51bGw7XG4gIHN0eWxlczogc3RyaW5nW107XG4gIHN0eWxlVXJsczogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKFxuICAgICAge21vZHVsZVVybCwgc3R5bGVzLCBzdHlsZVVybHN9OlxuICAgICAgICAgIHttb2R1bGVVcmw/OiBzdHJpbmcsIHN0eWxlcz86IHN0cmluZ1tdLCBzdHlsZVVybHM/OiBzdHJpbmdbXX0gPSB7fSkge1xuICAgIHRoaXMubW9kdWxlVXJsID0gbW9kdWxlVXJsIHx8IG51bGw7XG4gICAgdGhpcy5zdHlsZXMgPSBfbm9ybWFsaXplQXJyYXkoc3R5bGVzKTtcbiAgICB0aGlzLnN0eWxlVXJscyA9IF9ub3JtYWxpemVBcnJheShzdHlsZVVybHMpO1xuICB9XG59XG5cbi8qKlxuICogU3VtbWFyeSBNZXRhZGF0YSByZWdhcmRpbmcgY29tcGlsYXRpb24gb2YgYSB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb21waWxlVGVtcGxhdGVTdW1tYXJ5IHtcbiAgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXTtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb258bnVsbDtcbiAgc3R5bGVzOiBzdHJpbmdbXTtcbiAgYW5pbWF0aW9uczogYW55W118bnVsbDtcbn1cblxuLyoqXG4gKiBNZXRhZGF0YSByZWdhcmRpbmcgY29tcGlsYXRpb24gb2YgYSB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBpbGVUZW1wbGF0ZU1ldGFkYXRhIHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb258bnVsbDtcbiAgdGVtcGxhdGU6IHN0cmluZ3xudWxsO1xuICB0ZW1wbGF0ZVVybDogc3RyaW5nfG51bGw7XG4gIGh0bWxBc3Q6IEh0bWxQYXJzZVRyZWVSZXN1bHR8bnVsbDtcbiAgaXNJbmxpbmU6IGJvb2xlYW47XG4gIHN0eWxlczogc3RyaW5nW107XG4gIHN0eWxlVXJsczogc3RyaW5nW107XG4gIGV4dGVybmFsU3R5bGVzaGVldHM6IENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGFbXTtcbiAgYW5pbWF0aW9uczogYW55W107XG4gIG5nQ29udGVudFNlbGVjdG9yczogc3RyaW5nW107XG4gIGludGVycG9sYXRpb246IFtzdHJpbmcsIHN0cmluZ118bnVsbDtcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogYm9vbGVhbjtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGVuY2Fwc3VsYXRpb24sXG4gICAgdGVtcGxhdGUsXG4gICAgdGVtcGxhdGVVcmwsXG4gICAgaHRtbEFzdCxcbiAgICBzdHlsZXMsXG4gICAgc3R5bGVVcmxzLFxuICAgIGV4dGVybmFsU3R5bGVzaGVldHMsXG4gICAgYW5pbWF0aW9ucyxcbiAgICBuZ0NvbnRlbnRTZWxlY3RvcnMsXG4gICAgaW50ZXJwb2xhdGlvbixcbiAgICBpc0lubGluZSxcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzXG4gIH06IHtcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbnxudWxsLFxuICAgIHRlbXBsYXRlOiBzdHJpbmd8bnVsbCxcbiAgICB0ZW1wbGF0ZVVybDogc3RyaW5nfG51bGwsXG4gICAgaHRtbEFzdDogSHRtbFBhcnNlVHJlZVJlc3VsdHxudWxsLFxuICAgIHN0eWxlczogc3RyaW5nW10sXG4gICAgc3R5bGVVcmxzOiBzdHJpbmdbXSxcbiAgICBleHRlcm5hbFN0eWxlc2hlZXRzOiBDb21waWxlU3R5bGVzaGVldE1ldGFkYXRhW10sXG4gICAgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXSxcbiAgICBhbmltYXRpb25zOiBhbnlbXSxcbiAgICBpbnRlcnBvbGF0aW9uOiBbc3RyaW5nLCBzdHJpbmddfG51bGwsXG4gICAgaXNJbmxpbmU6IGJvb2xlYW4sXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogYm9vbGVhblxuICB9KSB7XG4gICAgdGhpcy5lbmNhcHN1bGF0aW9uID0gZW5jYXBzdWxhdGlvbjtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgdGhpcy50ZW1wbGF0ZVVybCA9IHRlbXBsYXRlVXJsO1xuICAgIHRoaXMuaHRtbEFzdCA9IGh0bWxBc3Q7XG4gICAgdGhpcy5zdHlsZXMgPSBfbm9ybWFsaXplQXJyYXkoc3R5bGVzKTtcbiAgICB0aGlzLnN0eWxlVXJscyA9IF9ub3JtYWxpemVBcnJheShzdHlsZVVybHMpO1xuICAgIHRoaXMuZXh0ZXJuYWxTdHlsZXNoZWV0cyA9IF9ub3JtYWxpemVBcnJheShleHRlcm5hbFN0eWxlc2hlZXRzKTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zID8gZmxhdHRlbihhbmltYXRpb25zKSA6IFtdO1xuICAgIHRoaXMubmdDb250ZW50U2VsZWN0b3JzID0gbmdDb250ZW50U2VsZWN0b3JzIHx8IFtdO1xuICAgIGlmIChpbnRlcnBvbGF0aW9uICYmIGludGVycG9sYXRpb24ubGVuZ3RoICE9IDIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2ludGVycG9sYXRpb24nIHNob3VsZCBoYXZlIGEgc3RhcnQgYW5kIGFuIGVuZCBzeW1ib2wuYCk7XG4gICAgfVxuICAgIHRoaXMuaW50ZXJwb2xhdGlvbiA9IGludGVycG9sYXRpb247XG4gICAgdGhpcy5pc0lubGluZSA9IGlzSW5saW5lO1xuICAgIHRoaXMucHJlc2VydmVXaGl0ZXNwYWNlcyA9IHByZXNlcnZlV2hpdGVzcGFjZXM7XG4gIH1cblxuICB0b1N1bW1hcnkoKTogQ29tcGlsZVRlbXBsYXRlU3VtbWFyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nQ29udGVudFNlbGVjdG9yczogdGhpcy5uZ0NvbnRlbnRTZWxlY3RvcnMsXG4gICAgICBlbmNhcHN1bGF0aW9uOiB0aGlzLmVuY2Fwc3VsYXRpb24sXG4gICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgYW5pbWF0aW9uczogdGhpcy5hbmltYXRpb25zXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVFbnRyeUNvbXBvbmVudE1ldGFkYXRhIHtcbiAgY29tcG9uZW50VHlwZTogYW55O1xuICBjb21wb25lbnRGYWN0b3J5OiBTdGF0aWNTeW1ib2x8b2JqZWN0O1xufVxuXG4vLyBOb3RlOiBUaGlzIHNob3VsZCBvbmx5IHVzZSBpbnRlcmZhY2VzIGFzIG5lc3RlZCBkYXRhIHR5cGVzXG4vLyBhcyB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gc2VyaWFsaXplIHRoaXMgZnJvbS90byBKU09OIVxuZXhwb3J0IGludGVyZmFjZSBDb21waWxlRGlyZWN0aXZlU3VtbWFyeSBleHRlbmRzIENvbXBpbGVUeXBlU3VtbWFyeSB7XG4gIHR5cGU6IENvbXBpbGVUeXBlTWV0YWRhdGE7XG4gIGlzQ29tcG9uZW50OiBib29sZWFuO1xuICBzZWxlY3Rvcjogc3RyaW5nfG51bGw7XG4gIGV4cG9ydEFzOiBzdHJpbmd8bnVsbDtcbiAgaW5wdXRzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgb3V0cHV0czoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGhvc3RMaXN0ZW5lcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBob3N0UHJvcGVydGllczoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGhvc3RBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdO1xuICB2aWV3UHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdO1xuICBxdWVyaWVzOiBDb21waWxlUXVlcnlNZXRhZGF0YVtdO1xuICBndWFyZHM6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuICB2aWV3UXVlcmllczogQ29tcGlsZVF1ZXJ5TWV0YWRhdGFbXTtcbiAgZW50cnlDb21wb25lbnRzOiBDb21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdO1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5fG51bGw7XG4gIHRlbXBsYXRlOiBDb21waWxlVGVtcGxhdGVTdW1tYXJ5fG51bGw7XG4gIGNvbXBvbmVudFZpZXdUeXBlOiBTdGF0aWNTeW1ib2x8UHJveHlDbGFzc3xudWxsO1xuICByZW5kZXJlclR5cGU6IFN0YXRpY1N5bWJvbHxvYmplY3R8bnVsbDtcbiAgY29tcG9uZW50RmFjdG9yeTogU3RhdGljU3ltYm9sfG9iamVjdHxudWxsO1xufVxuXG4vKipcbiAqIE1ldGFkYXRhIHJlZ2FyZGluZyBjb21waWxhdGlvbiBvZiBhIGRpcmVjdGl2ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSB7XG4gIHN0YXRpYyBjcmVhdGUoe1xuICAgIGlzSG9zdCxcbiAgICB0eXBlLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIHNlbGVjdG9yLFxuICAgIGV4cG9ydEFzLFxuICAgIGNoYW5nZURldGVjdGlvbixcbiAgICBpbnB1dHMsXG4gICAgb3V0cHV0cyxcbiAgICBob3N0LFxuICAgIHByb3ZpZGVycyxcbiAgICB2aWV3UHJvdmlkZXJzLFxuICAgIHF1ZXJpZXMsXG4gICAgZ3VhcmRzLFxuICAgIHZpZXdRdWVyaWVzLFxuICAgIGVudHJ5Q29tcG9uZW50cyxcbiAgICB0ZW1wbGF0ZSxcbiAgICBjb21wb25lbnRWaWV3VHlwZSxcbiAgICByZW5kZXJlclR5cGUsXG4gICAgY29tcG9uZW50RmFjdG9yeVxuICB9OiB7XG4gICAgaXNIb3N0OiBib29sZWFuLFxuICAgIHR5cGU6IENvbXBpbGVUeXBlTWV0YWRhdGEsXG4gICAgaXNDb21wb25lbnQ6IGJvb2xlYW4sXG4gICAgc2VsZWN0b3I6IHN0cmluZ3xudWxsLFxuICAgIGV4cG9ydEFzOiBzdHJpbmd8bnVsbCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5fG51bGwsXG4gICAgaW5wdXRzOiBzdHJpbmdbXSxcbiAgICBvdXRwdXRzOiBzdHJpbmdbXSxcbiAgICBob3N0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW10sXG4gICAgdmlld1Byb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSxcbiAgICBxdWVyaWVzOiBDb21waWxlUXVlcnlNZXRhZGF0YVtdLFxuICAgIGd1YXJkczoge1trZXk6IHN0cmluZ106IGFueX07XG4gICAgdmlld1F1ZXJpZXM6IENvbXBpbGVRdWVyeU1ldGFkYXRhW10sXG4gICAgZW50cnlDb21wb25lbnRzOiBDb21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdLFxuICAgIHRlbXBsYXRlOiBDb21waWxlVGVtcGxhdGVNZXRhZGF0YSxcbiAgICBjb21wb25lbnRWaWV3VHlwZTogU3RhdGljU3ltYm9sfFByb3h5Q2xhc3N8bnVsbCxcbiAgICByZW5kZXJlclR5cGU6IFN0YXRpY1N5bWJvbHxvYmplY3R8bnVsbCxcbiAgICBjb21wb25lbnRGYWN0b3J5OiBTdGF0aWNTeW1ib2x8b2JqZWN0fG51bGwsXG4gIH0pOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEge1xuICAgIGNvbnN0IGhvc3RMaXN0ZW5lcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgY29uc3QgaG9zdFByb3BlcnRpZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgY29uc3QgaG9zdEF0dHJpYnV0ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgaWYgKGhvc3QgIT0gbnVsbCkge1xuICAgICAgT2JqZWN0LmtleXMoaG9zdCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGhvc3Rba2V5XTtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChIT1NUX1JFR19FWFApO1xuICAgICAgICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xuICAgICAgICAgIGhvc3RBdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzWzFdICE9IG51bGwpIHtcbiAgICAgICAgICBob3N0UHJvcGVydGllc1ttYXRjaGVzWzFdXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1hdGNoZXNbMl0gIT0gbnVsbCkge1xuICAgICAgICAgIGhvc3RMaXN0ZW5lcnNbbWF0Y2hlc1syXV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0c01hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBpZiAoaW5wdXRzICE9IG51bGwpIHtcbiAgICAgIGlucHV0cy5mb3JFYWNoKChiaW5kQ29uZmlnOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gY2Fub25pY2FsIHN5bnRheDogYGRpclByb3A6IGVsUHJvcGBcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gYDpgLCB1c2UgZGlyUHJvcCA9IGVsUHJvcFxuICAgICAgICBjb25zdCBwYXJ0cyA9IHNwbGl0QXRDb2xvbihiaW5kQ29uZmlnLCBbYmluZENvbmZpZywgYmluZENvbmZpZ10pO1xuICAgICAgICBpbnB1dHNNYXBbcGFydHNbMF1dID0gcGFydHNbMV07XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cHV0c01hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcbiAgICBpZiAob3V0cHV0cyAhPSBudWxsKSB7XG4gICAgICBvdXRwdXRzLmZvckVhY2goKGJpbmRDb25maWc6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBjYW5vbmljYWwgc3ludGF4OiBgZGlyUHJvcDogZWxQcm9wYFxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBgOmAsIHVzZSBkaXJQcm9wID0gZWxQcm9wXG4gICAgICAgIGNvbnN0IHBhcnRzID0gc3BsaXRBdENvbG9uKGJpbmRDb25maWcsIFtiaW5kQ29uZmlnLCBiaW5kQ29uZmlnXSk7XG4gICAgICAgIG91dHB1dHNNYXBbcGFydHNbMF1dID0gcGFydHNbMV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSh7XG4gICAgICBpc0hvc3QsXG4gICAgICB0eXBlLFxuICAgICAgaXNDb21wb25lbnQ6ICEhaXNDb21wb25lbnQsXG4gICAgICBzZWxlY3RvcixcbiAgICAgIGV4cG9ydEFzLFxuICAgICAgY2hhbmdlRGV0ZWN0aW9uLFxuICAgICAgaW5wdXRzOiBpbnB1dHNNYXAsXG4gICAgICBvdXRwdXRzOiBvdXRwdXRzTWFwLFxuICAgICAgaG9zdExpc3RlbmVycyxcbiAgICAgIGhvc3RQcm9wZXJ0aWVzLFxuICAgICAgaG9zdEF0dHJpYnV0ZXMsXG4gICAgICBwcm92aWRlcnMsXG4gICAgICB2aWV3UHJvdmlkZXJzLFxuICAgICAgcXVlcmllcyxcbiAgICAgIGd1YXJkcyxcbiAgICAgIHZpZXdRdWVyaWVzLFxuICAgICAgZW50cnlDb21wb25lbnRzLFxuICAgICAgdGVtcGxhdGUsXG4gICAgICBjb21wb25lbnRWaWV3VHlwZSxcbiAgICAgIHJlbmRlcmVyVHlwZSxcbiAgICAgIGNvbXBvbmVudEZhY3RvcnksXG4gICAgfSk7XG4gIH1cbiAgaXNIb3N0OiBib29sZWFuO1xuICB0eXBlOiBDb21waWxlVHlwZU1ldGFkYXRhO1xuICBpc0NvbXBvbmVudDogYm9vbGVhbjtcbiAgc2VsZWN0b3I6IHN0cmluZ3xudWxsO1xuICBleHBvcnRBczogc3RyaW5nfG51bGw7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3l8bnVsbDtcbiAgaW5wdXRzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgb3V0cHV0czoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGhvc3RMaXN0ZW5lcnM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBob3N0UHJvcGVydGllczoge1trZXk6IHN0cmluZ106IHN0cmluZ307XG4gIGhvc3RBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiAgcHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdO1xuICB2aWV3UHJvdmlkZXJzOiBDb21waWxlUHJvdmlkZXJNZXRhZGF0YVtdO1xuICBxdWVyaWVzOiBDb21waWxlUXVlcnlNZXRhZGF0YVtdO1xuICBndWFyZHM6IHtba2V5OiBzdHJpbmddOiBhbnl9O1xuICB2aWV3UXVlcmllczogQ29tcGlsZVF1ZXJ5TWV0YWRhdGFbXTtcbiAgZW50cnlDb21wb25lbnRzOiBDb21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdO1xuXG4gIHRlbXBsYXRlOiBDb21waWxlVGVtcGxhdGVNZXRhZGF0YXxudWxsO1xuXG4gIGNvbXBvbmVudFZpZXdUeXBlOiBTdGF0aWNTeW1ib2x8UHJveHlDbGFzc3xudWxsO1xuICByZW5kZXJlclR5cGU6IFN0YXRpY1N5bWJvbHxvYmplY3R8bnVsbDtcbiAgY29tcG9uZW50RmFjdG9yeTogU3RhdGljU3ltYm9sfG9iamVjdHxudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpc0hvc3QsXG4gICAgdHlwZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBzZWxlY3RvcixcbiAgICBleHBvcnRBcyxcbiAgICBjaGFuZ2VEZXRlY3Rpb24sXG4gICAgaW5wdXRzLFxuICAgIG91dHB1dHMsXG4gICAgaG9zdExpc3RlbmVycyxcbiAgICBob3N0UHJvcGVydGllcyxcbiAgICBob3N0QXR0cmlidXRlcyxcbiAgICBwcm92aWRlcnMsXG4gICAgdmlld1Byb3ZpZGVycyxcbiAgICBxdWVyaWVzLFxuICAgIGd1YXJkcyxcbiAgICB2aWV3UXVlcmllcyxcbiAgICBlbnRyeUNvbXBvbmVudHMsXG4gICAgdGVtcGxhdGUsXG4gICAgY29tcG9uZW50Vmlld1R5cGUsXG4gICAgcmVuZGVyZXJUeXBlLFxuICAgIGNvbXBvbmVudEZhY3RvcnlcbiAgfToge1xuICAgIGlzSG9zdDogYm9vbGVhbixcbiAgICB0eXBlOiBDb21waWxlVHlwZU1ldGFkYXRhLFxuICAgIGlzQ29tcG9uZW50OiBib29sZWFuLFxuICAgIHNlbGVjdG9yOiBzdHJpbmd8bnVsbCxcbiAgICBleHBvcnRBczogc3RyaW5nfG51bGwsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneXxudWxsLFxuICAgIGlucHV0czoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgb3V0cHV0czoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgaG9zdExpc3RlbmVyczoge1trZXk6IHN0cmluZ106IHN0cmluZ30sXG4gICAgaG9zdFByb3BlcnRpZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9LFxuICAgIGhvc3RBdHRyaWJ1dGVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSxcbiAgICBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW10sXG4gICAgdmlld1Byb3ZpZGVyczogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGFbXSxcbiAgICBxdWVyaWVzOiBDb21waWxlUXVlcnlNZXRhZGF0YVtdLFxuICAgIGd1YXJkczoge1trZXk6IHN0cmluZ106IGFueX0sXG4gICAgdmlld1F1ZXJpZXM6IENvbXBpbGVRdWVyeU1ldGFkYXRhW10sXG4gICAgZW50cnlDb21wb25lbnRzOiBDb21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdLFxuICAgIHRlbXBsYXRlOiBDb21waWxlVGVtcGxhdGVNZXRhZGF0YXxudWxsLFxuICAgIGNvbXBvbmVudFZpZXdUeXBlOiBTdGF0aWNTeW1ib2x8UHJveHlDbGFzc3xudWxsLFxuICAgIHJlbmRlcmVyVHlwZTogU3RhdGljU3ltYm9sfG9iamVjdHxudWxsLFxuICAgIGNvbXBvbmVudEZhY3Rvcnk6IFN0YXRpY1N5bWJvbHxvYmplY3R8bnVsbCxcbiAgfSkge1xuICAgIHRoaXMuaXNIb3N0ID0gISFpc0hvc3Q7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlzQ29tcG9uZW50ID0gaXNDb21wb25lbnQ7XG4gICAgdGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgIHRoaXMuZXhwb3J0QXMgPSBleHBvcnRBcztcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbiA9IGNoYW5nZURldGVjdGlvbjtcbiAgICB0aGlzLmlucHV0cyA9IGlucHV0cztcbiAgICB0aGlzLm91dHB1dHMgPSBvdXRwdXRzO1xuICAgIHRoaXMuaG9zdExpc3RlbmVycyA9IGhvc3RMaXN0ZW5lcnM7XG4gICAgdGhpcy5ob3N0UHJvcGVydGllcyA9IGhvc3RQcm9wZXJ0aWVzO1xuICAgIHRoaXMuaG9zdEF0dHJpYnV0ZXMgPSBob3N0QXR0cmlidXRlcztcbiAgICB0aGlzLnByb3ZpZGVycyA9IF9ub3JtYWxpemVBcnJheShwcm92aWRlcnMpO1xuICAgIHRoaXMudmlld1Byb3ZpZGVycyA9IF9ub3JtYWxpemVBcnJheSh2aWV3UHJvdmlkZXJzKTtcbiAgICB0aGlzLnF1ZXJpZXMgPSBfbm9ybWFsaXplQXJyYXkocXVlcmllcyk7XG4gICAgdGhpcy5ndWFyZHMgPSBndWFyZHM7XG4gICAgdGhpcy52aWV3UXVlcmllcyA9IF9ub3JtYWxpemVBcnJheSh2aWV3UXVlcmllcyk7XG4gICAgdGhpcy5lbnRyeUNvbXBvbmVudHMgPSBfbm9ybWFsaXplQXJyYXkoZW50cnlDb21wb25lbnRzKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG5cbiAgICB0aGlzLmNvbXBvbmVudFZpZXdUeXBlID0gY29tcG9uZW50Vmlld1R5cGU7XG4gICAgdGhpcy5yZW5kZXJlclR5cGUgPSByZW5kZXJlclR5cGU7XG4gICAgdGhpcy5jb21wb25lbnRGYWN0b3J5ID0gY29tcG9uZW50RmFjdG9yeTtcbiAgfVxuXG4gIHRvU3VtbWFyeSgpOiBDb21waWxlRGlyZWN0aXZlU3VtbWFyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1bW1hcnlLaW5kOiBDb21waWxlU3VtbWFyeUtpbmQuRGlyZWN0aXZlLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgaXNDb21wb25lbnQ6IHRoaXMuaXNDb21wb25lbnQsXG4gICAgICBzZWxlY3RvcjogdGhpcy5zZWxlY3RvcixcbiAgICAgIGV4cG9ydEFzOiB0aGlzLmV4cG9ydEFzLFxuICAgICAgaW5wdXRzOiB0aGlzLmlucHV0cyxcbiAgICAgIG91dHB1dHM6IHRoaXMub3V0cHV0cyxcbiAgICAgIGhvc3RMaXN0ZW5lcnM6IHRoaXMuaG9zdExpc3RlbmVycyxcbiAgICAgIGhvc3RQcm9wZXJ0aWVzOiB0aGlzLmhvc3RQcm9wZXJ0aWVzLFxuICAgICAgaG9zdEF0dHJpYnV0ZXM6IHRoaXMuaG9zdEF0dHJpYnV0ZXMsXG4gICAgICBwcm92aWRlcnM6IHRoaXMucHJvdmlkZXJzLFxuICAgICAgdmlld1Byb3ZpZGVyczogdGhpcy52aWV3UHJvdmlkZXJzLFxuICAgICAgcXVlcmllczogdGhpcy5xdWVyaWVzLFxuICAgICAgZ3VhcmRzOiB0aGlzLmd1YXJkcyxcbiAgICAgIHZpZXdRdWVyaWVzOiB0aGlzLnZpZXdRdWVyaWVzLFxuICAgICAgZW50cnlDb21wb25lbnRzOiB0aGlzLmVudHJ5Q29tcG9uZW50cyxcbiAgICAgIGNoYW5nZURldGVjdGlvbjogdGhpcy5jaGFuZ2VEZXRlY3Rpb24sXG4gICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnRlbXBsYXRlLnRvU3VtbWFyeSgpLFxuICAgICAgY29tcG9uZW50Vmlld1R5cGU6IHRoaXMuY29tcG9uZW50Vmlld1R5cGUsXG4gICAgICByZW5kZXJlclR5cGU6IHRoaXMucmVuZGVyZXJUeXBlLFxuICAgICAgY29tcG9uZW50RmFjdG9yeTogdGhpcy5jb21wb25lbnRGYWN0b3J5XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbXBpbGVQaXBlU3VtbWFyeSBleHRlbmRzIENvbXBpbGVUeXBlU3VtbWFyeSB7XG4gIHR5cGU6IENvbXBpbGVUeXBlTWV0YWRhdGE7XG4gIG5hbWU6IHN0cmluZztcbiAgcHVyZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBpbGVQaXBlTWV0YWRhdGEge1xuICB0eXBlOiBDb21waWxlVHlwZU1ldGFkYXRhO1xuICBuYW1lOiBzdHJpbmc7XG4gIHB1cmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Ioe3R5cGUsIG5hbWUsIHB1cmV9OiB7XG4gICAgdHlwZTogQ29tcGlsZVR5cGVNZXRhZGF0YSxcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcHVyZTogYm9vbGVhbixcbiAgfSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnB1cmUgPSAhIXB1cmU7XG4gIH1cblxuICB0b1N1bW1hcnkoKTogQ29tcGlsZVBpcGVTdW1tYXJ5IHtcbiAgICByZXR1cm4ge1xuICAgICAgc3VtbWFyeUtpbmQ6IENvbXBpbGVTdW1tYXJ5S2luZC5QaXBlLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgcHVyZTogdGhpcy5wdXJlXG4gICAgfTtcbiAgfVxufVxuXG4vLyBOb3RlOiBUaGlzIHNob3VsZCBvbmx5IHVzZSBpbnRlcmZhY2VzIGFzIG5lc3RlZCBkYXRhIHR5cGVzXG4vLyBhcyB3ZSBuZWVkIHRvIGJlIGFibGUgdG8gc2VyaWFsaXplIHRoaXMgZnJvbS90byBKU09OIVxuZXhwb3J0IGludGVyZmFjZSBDb21waWxlTmdNb2R1bGVTdW1tYXJ5IGV4dGVuZHMgQ29tcGlsZVR5cGVTdW1tYXJ5IHtcbiAgdHlwZTogQ29tcGlsZVR5cGVNZXRhZGF0YTtcblxuICAvLyBOb3RlOiBUaGlzIGlzIHRyYW5zaXRpdmUgb3ZlciB0aGUgZXhwb3J0ZWQgbW9kdWxlcy5cbiAgZXhwb3J0ZWREaXJlY3RpdmVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW107XG4gIC8vIE5vdGU6IFRoaXMgaXMgdHJhbnNpdGl2ZSBvdmVyIHRoZSBleHBvcnRlZCBtb2R1bGVzLlxuICBleHBvcnRlZFBpcGVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW107XG5cbiAgLy8gTm90ZTogVGhpcyBpcyB0cmFuc2l0aXZlLlxuICBlbnRyeUNvbXBvbmVudHM6IENvbXBpbGVFbnRyeUNvbXBvbmVudE1ldGFkYXRhW107XG4gIC8vIE5vdGU6IFRoaXMgaXMgdHJhbnNpdGl2ZS5cbiAgcHJvdmlkZXJzOiB7cHJvdmlkZXI6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhLCBtb2R1bGU6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGF9W107XG4gIC8vIE5vdGU6IFRoaXMgaXMgdHJhbnNpdGl2ZS5cbiAgbW9kdWxlczogQ29tcGlsZVR5cGVNZXRhZGF0YVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcGlsZVNoYWxsb3dNb2R1bGVNZXRhZGF0YSB7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICB0eXBlITogQ29tcGlsZVR5cGVNZXRhZGF0YTtcblxuICByYXdFeHBvcnRzOiBhbnk7XG4gIHJhd0ltcG9ydHM6IGFueTtcbiAgcmF3UHJvdmlkZXJzOiBhbnk7XG59XG5cbi8qKlxuICogTWV0YWRhdGEgcmVnYXJkaW5nIGNvbXBpbGF0aW9uIG9mIGEgbW9kdWxlLlxuICovXG5leHBvcnQgY2xhc3MgQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEge1xuICB0eXBlOiBDb21waWxlVHlwZU1ldGFkYXRhO1xuICBkZWNsYXJlZERpcmVjdGl2ZXM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXTtcbiAgZXhwb3J0ZWREaXJlY3RpdmVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW107XG4gIGRlY2xhcmVkUGlwZXM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXTtcblxuICBleHBvcnRlZFBpcGVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW107XG4gIGVudHJ5Q29tcG9uZW50czogQ29tcGlsZUVudHJ5Q29tcG9uZW50TWV0YWRhdGFbXTtcbiAgYm9vdHN0cmFwQ29tcG9uZW50czogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdO1xuICBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW107XG5cbiAgaW1wb3J0ZWRNb2R1bGVzOiBDb21waWxlTmdNb2R1bGVTdW1tYXJ5W107XG4gIGV4cG9ydGVkTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlU3VtbWFyeVtdO1xuICBzY2hlbWFzOiBTY2hlbWFNZXRhZGF0YVtdO1xuICBpZDogc3RyaW5nfG51bGw7XG5cbiAgdHJhbnNpdGl2ZU1vZHVsZTogVHJhbnNpdGl2ZUNvbXBpbGVOZ01vZHVsZU1ldGFkYXRhO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0eXBlLFxuICAgIHByb3ZpZGVycyxcbiAgICBkZWNsYXJlZERpcmVjdGl2ZXMsXG4gICAgZXhwb3J0ZWREaXJlY3RpdmVzLFxuICAgIGRlY2xhcmVkUGlwZXMsXG4gICAgZXhwb3J0ZWRQaXBlcyxcbiAgICBlbnRyeUNvbXBvbmVudHMsXG4gICAgYm9vdHN0cmFwQ29tcG9uZW50cyxcbiAgICBpbXBvcnRlZE1vZHVsZXMsXG4gICAgZXhwb3J0ZWRNb2R1bGVzLFxuICAgIHNjaGVtYXMsXG4gICAgdHJhbnNpdGl2ZU1vZHVsZSxcbiAgICBpZFxuICB9OiB7XG4gICAgdHlwZTogQ29tcGlsZVR5cGVNZXRhZGF0YSxcbiAgICBwcm92aWRlcnM6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhW10sXG4gICAgZGVjbGFyZWREaXJlY3RpdmVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW10sXG4gICAgZXhwb3J0ZWREaXJlY3RpdmVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW10sXG4gICAgZGVjbGFyZWRQaXBlczogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdLFxuICAgIGV4cG9ydGVkUGlwZXM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IENvbXBpbGVFbnRyeUNvbXBvbmVudE1ldGFkYXRhW10sXG4gICAgYm9vdHN0cmFwQ29tcG9uZW50czogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YVtdLFxuICAgIGltcG9ydGVkTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlU3VtbWFyeVtdLFxuICAgIGV4cG9ydGVkTW9kdWxlczogQ29tcGlsZU5nTW9kdWxlU3VtbWFyeVtdLFxuICAgIHRyYW5zaXRpdmVNb2R1bGU6IFRyYW5zaXRpdmVDb21waWxlTmdNb2R1bGVNZXRhZGF0YSxcbiAgICBzY2hlbWFzOiBTY2hlbWFNZXRhZGF0YVtdLFxuICAgIGlkOiBzdHJpbmd8bnVsbFxuICB9KSB7XG4gICAgdGhpcy50eXBlID0gdHlwZSB8fCBudWxsO1xuICAgIHRoaXMuZGVjbGFyZWREaXJlY3RpdmVzID0gX25vcm1hbGl6ZUFycmF5KGRlY2xhcmVkRGlyZWN0aXZlcyk7XG4gICAgdGhpcy5leHBvcnRlZERpcmVjdGl2ZXMgPSBfbm9ybWFsaXplQXJyYXkoZXhwb3J0ZWREaXJlY3RpdmVzKTtcbiAgICB0aGlzLmRlY2xhcmVkUGlwZXMgPSBfbm9ybWFsaXplQXJyYXkoZGVjbGFyZWRQaXBlcyk7XG4gICAgdGhpcy5leHBvcnRlZFBpcGVzID0gX25vcm1hbGl6ZUFycmF5KGV4cG9ydGVkUGlwZXMpO1xuICAgIHRoaXMucHJvdmlkZXJzID0gX25vcm1hbGl6ZUFycmF5KHByb3ZpZGVycyk7XG4gICAgdGhpcy5lbnRyeUNvbXBvbmVudHMgPSBfbm9ybWFsaXplQXJyYXkoZW50cnlDb21wb25lbnRzKTtcbiAgICB0aGlzLmJvb3RzdHJhcENvbXBvbmVudHMgPSBfbm9ybWFsaXplQXJyYXkoYm9vdHN0cmFwQ29tcG9uZW50cyk7XG4gICAgdGhpcy5pbXBvcnRlZE1vZHVsZXMgPSBfbm9ybWFsaXplQXJyYXkoaW1wb3J0ZWRNb2R1bGVzKTtcbiAgICB0aGlzLmV4cG9ydGVkTW9kdWxlcyA9IF9ub3JtYWxpemVBcnJheShleHBvcnRlZE1vZHVsZXMpO1xuICAgIHRoaXMuc2NoZW1hcyA9IF9ub3JtYWxpemVBcnJheShzY2hlbWFzKTtcbiAgICB0aGlzLmlkID0gaWQgfHwgbnVsbDtcbiAgICB0aGlzLnRyYW5zaXRpdmVNb2R1bGUgPSB0cmFuc2l0aXZlTW9kdWxlIHx8IG51bGw7XG4gIH1cblxuICB0b1N1bW1hcnkoKTogQ29tcGlsZU5nTW9kdWxlU3VtbWFyeSB7XG4gICAgY29uc3QgbW9kdWxlID0gdGhpcy50cmFuc2l0aXZlTW9kdWxlITtcbiAgICByZXR1cm4ge1xuICAgICAgc3VtbWFyeUtpbmQ6IENvbXBpbGVTdW1tYXJ5S2luZC5OZ01vZHVsZSxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGVudHJ5Q29tcG9uZW50czogbW9kdWxlLmVudHJ5Q29tcG9uZW50cyxcbiAgICAgIHByb3ZpZGVyczogbW9kdWxlLnByb3ZpZGVycyxcbiAgICAgIG1vZHVsZXM6IG1vZHVsZS5tb2R1bGVzLFxuICAgICAgZXhwb3J0ZWREaXJlY3RpdmVzOiBtb2R1bGUuZXhwb3J0ZWREaXJlY3RpdmVzLFxuICAgICAgZXhwb3J0ZWRQaXBlczogbW9kdWxlLmV4cG9ydGVkUGlwZXNcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2l0aXZlQ29tcGlsZU5nTW9kdWxlTWV0YWRhdGEge1xuICBkaXJlY3RpdmVzU2V0ID0gbmV3IFNldDxhbnk+KCk7XG4gIGRpcmVjdGl2ZXM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICBleHBvcnRlZERpcmVjdGl2ZXNTZXQgPSBuZXcgU2V0PGFueT4oKTtcbiAgZXhwb3J0ZWREaXJlY3RpdmVzOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhW10gPSBbXTtcbiAgcGlwZXNTZXQgPSBuZXcgU2V0PGFueT4oKTtcbiAgcGlwZXM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICBleHBvcnRlZFBpcGVzU2V0ID0gbmV3IFNldDxhbnk+KCk7XG4gIGV4cG9ydGVkUGlwZXM6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGFbXSA9IFtdO1xuICBtb2R1bGVzU2V0ID0gbmV3IFNldDxhbnk+KCk7XG4gIG1vZHVsZXM6IENvbXBpbGVUeXBlTWV0YWRhdGFbXSA9IFtdO1xuICBlbnRyeUNvbXBvbmVudHNTZXQgPSBuZXcgU2V0PGFueT4oKTtcbiAgZW50cnlDb21wb25lbnRzOiBDb21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YVtdID0gW107XG5cbiAgcHJvdmlkZXJzOiB7cHJvdmlkZXI6IENvbXBpbGVQcm92aWRlck1ldGFkYXRhLCBtb2R1bGU6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGF9W10gPSBbXTtcblxuICBhZGRQcm92aWRlcihwcm92aWRlcjogQ29tcGlsZVByb3ZpZGVyTWV0YWRhdGEsIG1vZHVsZTogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSkge1xuICAgIHRoaXMucHJvdmlkZXJzLnB1c2goe3Byb3ZpZGVyOiBwcm92aWRlciwgbW9kdWxlOiBtb2R1bGV9KTtcbiAgfVxuXG4gIGFkZERpcmVjdGl2ZShpZDogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSkge1xuICAgIGlmICghdGhpcy5kaXJlY3RpdmVzU2V0LmhhcyhpZC5yZWZlcmVuY2UpKSB7XG4gICAgICB0aGlzLmRpcmVjdGl2ZXNTZXQuYWRkKGlkLnJlZmVyZW5jZSk7XG4gICAgICB0aGlzLmRpcmVjdGl2ZXMucHVzaChpZCk7XG4gICAgfVxuICB9XG4gIGFkZEV4cG9ydGVkRGlyZWN0aXZlKGlkOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhKSB7XG4gICAgaWYgKCF0aGlzLmV4cG9ydGVkRGlyZWN0aXZlc1NldC5oYXMoaWQucmVmZXJlbmNlKSkge1xuICAgICAgdGhpcy5leHBvcnRlZERpcmVjdGl2ZXNTZXQuYWRkKGlkLnJlZmVyZW5jZSk7XG4gICAgICB0aGlzLmV4cG9ydGVkRGlyZWN0aXZlcy5wdXNoKGlkKTtcbiAgICB9XG4gIH1cbiAgYWRkUGlwZShpZDogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSkge1xuICAgIGlmICghdGhpcy5waXBlc1NldC5oYXMoaWQucmVmZXJlbmNlKSkge1xuICAgICAgdGhpcy5waXBlc1NldC5hZGQoaWQucmVmZXJlbmNlKTtcbiAgICAgIHRoaXMucGlwZXMucHVzaChpZCk7XG4gICAgfVxuICB9XG4gIGFkZEV4cG9ydGVkUGlwZShpZDogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSkge1xuICAgIGlmICghdGhpcy5leHBvcnRlZFBpcGVzU2V0LmhhcyhpZC5yZWZlcmVuY2UpKSB7XG4gICAgICB0aGlzLmV4cG9ydGVkUGlwZXNTZXQuYWRkKGlkLnJlZmVyZW5jZSk7XG4gICAgICB0aGlzLmV4cG9ydGVkUGlwZXMucHVzaChpZCk7XG4gICAgfVxuICB9XG4gIGFkZE1vZHVsZShpZDogQ29tcGlsZVR5cGVNZXRhZGF0YSkge1xuICAgIGlmICghdGhpcy5tb2R1bGVzU2V0LmhhcyhpZC5yZWZlcmVuY2UpKSB7XG4gICAgICB0aGlzLm1vZHVsZXNTZXQuYWRkKGlkLnJlZmVyZW5jZSk7XG4gICAgICB0aGlzLm1vZHVsZXMucHVzaChpZCk7XG4gICAgfVxuICB9XG4gIGFkZEVudHJ5Q29tcG9uZW50KGVjOiBDb21waWxlRW50cnlDb21wb25lbnRNZXRhZGF0YSkge1xuICAgIGlmICghdGhpcy5lbnRyeUNvbXBvbmVudHNTZXQuaGFzKGVjLmNvbXBvbmVudFR5cGUpKSB7XG4gICAgICB0aGlzLmVudHJ5Q29tcG9uZW50c1NldC5hZGQoZWMuY29tcG9uZW50VHlwZSk7XG4gICAgICB0aGlzLmVudHJ5Q29tcG9uZW50cy5wdXNoKGVjKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX25vcm1hbGl6ZUFycmF5KG9iajogYW55W118dW5kZWZpbmVkfG51bGwpOiBhbnlbXSB7XG4gIHJldHVybiBvYmogfHwgW107XG59XG5cbmV4cG9ydCBjbGFzcyBQcm92aWRlck1ldGEge1xuICB0b2tlbjogYW55O1xuICB1c2VDbGFzczogVHlwZXxudWxsO1xuICB1c2VWYWx1ZTogYW55O1xuICB1c2VFeGlzdGluZzogYW55O1xuICB1c2VGYWN0b3J5OiBGdW5jdGlvbnxudWxsO1xuICBkZXBlbmRlbmNpZXM6IE9iamVjdFtdfG51bGw7XG4gIG11bHRpOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHRva2VuOiBhbnksIHt1c2VDbGFzcywgdXNlVmFsdWUsIHVzZUV4aXN0aW5nLCB1c2VGYWN0b3J5LCBkZXBzLCBtdWx0aX06IHtcbiAgICB1c2VDbGFzcz86IFR5cGUsXG4gICAgdXNlVmFsdWU/OiBhbnksXG4gICAgdXNlRXhpc3Rpbmc/OiBhbnksXG4gICAgdXNlRmFjdG9yeT86IEZ1bmN0aW9ufG51bGwsXG4gICAgZGVwcz86IE9iamVjdFtdfG51bGwsXG4gICAgbXVsdGk/OiBib29sZWFuXG4gIH0pIHtcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgdGhpcy51c2VDbGFzcyA9IHVzZUNsYXNzIHx8IG51bGw7XG4gICAgdGhpcy51c2VWYWx1ZSA9IHVzZVZhbHVlO1xuICAgIHRoaXMudXNlRXhpc3RpbmcgPSB1c2VFeGlzdGluZztcbiAgICB0aGlzLnVzZUZhY3RvcnkgPSB1c2VGYWN0b3J5IHx8IG51bGw7XG4gICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBkZXBzIHx8IG51bGw7XG4gICAgdGhpcy5tdWx0aSA9ICEhbXVsdGk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW48VD4obGlzdDogQXJyYXk8VHxUW10+KTogVFtdIHtcbiAgcmV0dXJuIGxpc3QucmVkdWNlKChmbGF0OiBhbnlbXSwgaXRlbTogVHxUW10pOiBUW10gPT4ge1xuICAgIGNvbnN0IGZsYXRJdGVtID0gQXJyYXkuaXNBcnJheShpdGVtKSA/IGZsYXR0ZW4oaXRlbSkgOiBpdGVtO1xuICAgIHJldHVybiAoPFRbXT5mbGF0KS5jb25jYXQoZmxhdEl0ZW0pO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGppdFNvdXJjZVVybCh1cmw6IHN0cmluZykge1xuICAvLyBOb3RlOiBXZSBuZWVkIDMgXCIvXCIgc28gdGhhdCBuZyBzaG93cyB1cCBhcyBhIHNlcGFyYXRlIGRvbWFpblxuICAvLyBpbiB0aGUgY2hyb21lIGRldiB0b29scy5cbiAgcmV0dXJuIHVybC5yZXBsYWNlKC8oXFx3KzpcXC9cXC9bXFx3Oi1dKyk/KFxcLyspPy8sICduZzovLy8nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlU291cmNlVXJsKFxuICAgIG5nTW9kdWxlVHlwZTogQ29tcGlsZUlkZW50aWZpZXJNZXRhZGF0YSwgY29tcE1ldGE6IHt0eXBlOiBDb21waWxlSWRlbnRpZmllck1ldGFkYXRhfSxcbiAgICB0ZW1wbGF0ZU1ldGE6IHtpc0lubGluZTogYm9vbGVhbiwgdGVtcGxhdGVVcmw6IHN0cmluZ3xudWxsfSkge1xuICBsZXQgdXJsOiBzdHJpbmc7XG4gIGlmICh0ZW1wbGF0ZU1ldGEuaXNJbmxpbmUpIHtcbiAgICBpZiAoY29tcE1ldGEudHlwZS5yZWZlcmVuY2UgaW5zdGFuY2VvZiBTdGF0aWNTeW1ib2wpIHtcbiAgICAgIC8vIE5vdGU6IGEgLnRzIGZpbGUgbWlnaHQgY29udGFpbiBtdWx0aXBsZSBjb21wb25lbnRzIHdpdGggaW5saW5lIHRlbXBsYXRlcyxcbiAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2l2ZSB0aGVtIHVuaXF1ZSB1cmxzLCBhcyB0aGVzZSB3aWxsIGJlIHVzZWQgZm9yIHNvdXJjZW1hcHMuXG4gICAgICB1cmwgPSBgJHtjb21wTWV0YS50eXBlLnJlZmVyZW5jZS5maWxlUGF0aH0uJHtjb21wTWV0YS50eXBlLnJlZmVyZW5jZS5uYW1lfS5odG1sYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsID0gYCR7aWRlbnRpZmllck5hbWUobmdNb2R1bGVUeXBlKX0vJHtpZGVudGlmaWVyTmFtZShjb21wTWV0YS50eXBlKX0uaHRtbGA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHVybCA9IHRlbXBsYXRlTWV0YS50ZW1wbGF0ZVVybCE7XG4gIH1cbiAgcmV0dXJuIGNvbXBNZXRhLnR5cGUucmVmZXJlbmNlIGluc3RhbmNlb2YgU3RhdGljU3ltYm9sID8gdXJsIDogaml0U291cmNlVXJsKHVybCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFyZWRTdHlsZXNoZWV0Sml0VXJsKG1ldGE6IENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGEsIGlkOiBudW1iZXIpIHtcbiAgY29uc3QgcGF0aFBhcnRzID0gbWV0YS5tb2R1bGVVcmwhLnNwbGl0KC9cXC9cXFxcL2cpO1xuICBjb25zdCBiYXNlTmFtZSA9IHBhdGhQYXJ0c1twYXRoUGFydHMubGVuZ3RoIC0gMV07XG4gIHJldHVybiBqaXRTb3VyY2VVcmwoYGNzcy8ke2lkfSR7YmFzZU5hbWV9Lm5nc3R5bGUuanNgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5nTW9kdWxlSml0VXJsKG1vZHVsZU1ldGE6IENvbXBpbGVOZ01vZHVsZU1ldGFkYXRhKTogc3RyaW5nIHtcbiAgcmV0dXJuIGppdFNvdXJjZVVybChgJHtpZGVudGlmaWVyTmFtZShtb2R1bGVNZXRhLnR5cGUpfS9tb2R1bGUubmdmYWN0b3J5LmpzYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZUppdFVybChcbiAgICBuZ01vZHVsZVR5cGU6IENvbXBpbGVJZGVudGlmaWVyTWV0YWRhdGEsIGNvbXBNZXRhOiBDb21waWxlRGlyZWN0aXZlTWV0YWRhdGEpOiBzdHJpbmcge1xuICByZXR1cm4gaml0U291cmNlVXJsKFxuICAgICAgYCR7aWRlbnRpZmllck5hbWUobmdNb2R1bGVUeXBlKX0vJHtpZGVudGlmaWVyTmFtZShjb21wTWV0YS50eXBlKX0ubmdmYWN0b3J5LmpzYCk7XG59XG4iXX0=
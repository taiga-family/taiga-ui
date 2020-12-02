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
        define("@angular/compiler/src/directive_normalizer", ["require", "exports", "tslib", "@angular/compiler/src/compile_metadata", "@angular/compiler/src/config", "@angular/compiler/src/core", "@angular/compiler/src/ml_parser/ast", "@angular/compiler/src/ml_parser/interpolation_config", "@angular/compiler/src/style_url_resolver", "@angular/compiler/src/template_parser/template_preparser", "@angular/compiler/src/util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var compile_metadata_1 = require("@angular/compiler/src/compile_metadata");
    var config_1 = require("@angular/compiler/src/config");
    var core_1 = require("@angular/compiler/src/core");
    var html = require("@angular/compiler/src/ml_parser/ast");
    var interpolation_config_1 = require("@angular/compiler/src/ml_parser/interpolation_config");
    var style_url_resolver_1 = require("@angular/compiler/src/style_url_resolver");
    var template_preparser_1 = require("@angular/compiler/src/template_parser/template_preparser");
    var util_1 = require("@angular/compiler/src/util");
    var DirectiveNormalizer = /** @class */ (function () {
        function DirectiveNormalizer(_resourceLoader, _urlResolver, _htmlParser, _config) {
            this._resourceLoader = _resourceLoader;
            this._urlResolver = _urlResolver;
            this._htmlParser = _htmlParser;
            this._config = _config;
            this._resourceLoaderCache = new Map();
        }
        DirectiveNormalizer.prototype.clearCache = function () {
            this._resourceLoaderCache.clear();
        };
        DirectiveNormalizer.prototype.clearCacheFor = function (normalizedDirective) {
            var _this = this;
            if (!normalizedDirective.isComponent) {
                return;
            }
            var template = normalizedDirective.template;
            this._resourceLoaderCache.delete(template.templateUrl);
            template.externalStylesheets.forEach(function (stylesheet) {
                _this._resourceLoaderCache.delete(stylesheet.moduleUrl);
            });
        };
        DirectiveNormalizer.prototype._fetch = function (url) {
            var result = this._resourceLoaderCache.get(url);
            if (!result) {
                result = this._resourceLoader.get(url);
                this._resourceLoaderCache.set(url, result);
            }
            return result;
        };
        DirectiveNormalizer.prototype.normalizeTemplate = function (prenormData) {
            var _this = this;
            if (util_1.isDefined(prenormData.template)) {
                if (util_1.isDefined(prenormData.templateUrl)) {
                    throw util_1.syntaxError("'" + util_1.stringify(prenormData
                        .componentType) + "' component cannot define both template and templateUrl");
                }
                if (typeof prenormData.template !== 'string') {
                    throw util_1.syntaxError("The template specified for component " + util_1.stringify(prenormData.componentType) + " is not a string");
                }
            }
            else if (util_1.isDefined(prenormData.templateUrl)) {
                if (typeof prenormData.templateUrl !== 'string') {
                    throw util_1.syntaxError("The templateUrl specified for component " + util_1.stringify(prenormData.componentType) + " is not a string");
                }
            }
            else {
                throw util_1.syntaxError("No template specified for component " + util_1.stringify(prenormData.componentType));
            }
            if (util_1.isDefined(prenormData.preserveWhitespaces) &&
                typeof prenormData.preserveWhitespaces !== 'boolean') {
                throw util_1.syntaxError("The preserveWhitespaces option for component " + util_1.stringify(prenormData.componentType) + " must be a boolean");
            }
            return util_1.SyncAsync.then(this._preParseTemplate(prenormData), function (preparsedTemplate) { return _this._normalizeTemplateMetadata(prenormData, preparsedTemplate); });
        };
        DirectiveNormalizer.prototype._preParseTemplate = function (prenomData) {
            var _this = this;
            var template;
            var templateUrl;
            if (prenomData.template != null) {
                template = prenomData.template;
                templateUrl = prenomData.moduleUrl;
            }
            else {
                templateUrl = this._urlResolver.resolve(prenomData.moduleUrl, prenomData.templateUrl);
                template = this._fetch(templateUrl);
            }
            return util_1.SyncAsync.then(template, function (template) { return _this._preparseLoadedTemplate(prenomData, template, templateUrl); });
        };
        DirectiveNormalizer.prototype._preparseLoadedTemplate = function (prenormData, template, templateAbsUrl) {
            var isInline = !!prenormData.template;
            var interpolationConfig = interpolation_config_1.InterpolationConfig.fromArray(prenormData.interpolation);
            var templateUrl = compile_metadata_1.templateSourceUrl({ reference: prenormData.ngModuleType }, { type: { reference: prenormData.componentType } }, { isInline: isInline, templateUrl: templateAbsUrl });
            var rootNodesAndErrors = this._htmlParser.parse(template, templateUrl, { tokenizeExpansionForms: true, interpolationConfig: interpolationConfig });
            if (rootNodesAndErrors.errors.length > 0) {
                var errorString = rootNodesAndErrors.errors.join('\n');
                throw util_1.syntaxError("Template parse errors:\n" + errorString);
            }
            var templateMetadataStyles = this._normalizeStylesheet(new compile_metadata_1.CompileStylesheetMetadata({ styles: prenormData.styles, moduleUrl: prenormData.moduleUrl }));
            var visitor = new TemplatePreparseVisitor();
            html.visitAll(visitor, rootNodesAndErrors.rootNodes);
            var templateStyles = this._normalizeStylesheet(new compile_metadata_1.CompileStylesheetMetadata({ styles: visitor.styles, styleUrls: visitor.styleUrls, moduleUrl: templateAbsUrl }));
            var styles = templateMetadataStyles.styles.concat(templateStyles.styles);
            var inlineStyleUrls = templateMetadataStyles.styleUrls.concat(templateStyles.styleUrls);
            var styleUrls = this
                ._normalizeStylesheet(new compile_metadata_1.CompileStylesheetMetadata({ styleUrls: prenormData.styleUrls, moduleUrl: prenormData.moduleUrl }))
                .styleUrls;
            return {
                template: template,
                templateUrl: templateAbsUrl,
                isInline: isInline,
                htmlAst: rootNodesAndErrors,
                styles: styles,
                inlineStyleUrls: inlineStyleUrls,
                styleUrls: styleUrls,
                ngContentSelectors: visitor.ngContentSelectors,
            };
        };
        DirectiveNormalizer.prototype._normalizeTemplateMetadata = function (prenormData, preparsedTemplate) {
            var _this = this;
            return util_1.SyncAsync.then(this._loadMissingExternalStylesheets(preparsedTemplate.styleUrls.concat(preparsedTemplate.inlineStyleUrls)), function (externalStylesheets) { return _this._normalizeLoadedTemplateMetadata(prenormData, preparsedTemplate, externalStylesheets); });
        };
        DirectiveNormalizer.prototype._normalizeLoadedTemplateMetadata = function (prenormData, preparsedTemplate, stylesheets) {
            // Algorithm:
            // - produce exactly 1 entry per original styleUrl in
            // CompileTemplateMetadata.externalStylesheets with all styles inlined
            // - inline all styles that are referenced by the template into CompileTemplateMetadata.styles.
            // Reason: be able to determine how many stylesheets there are even without loading
            // the template nor the stylesheets, so we can create a stub for TypeScript always synchronously
            // (as resource loading may be async)
            var _this = this;
            var styles = tslib_1.__spread(preparsedTemplate.styles);
            this._inlineStyles(preparsedTemplate.inlineStyleUrls, stylesheets, styles);
            var styleUrls = preparsedTemplate.styleUrls;
            var externalStylesheets = styleUrls.map(function (styleUrl) {
                var stylesheet = stylesheets.get(styleUrl);
                var styles = tslib_1.__spread(stylesheet.styles);
                _this._inlineStyles(stylesheet.styleUrls, stylesheets, styles);
                return new compile_metadata_1.CompileStylesheetMetadata({ moduleUrl: styleUrl, styles: styles });
            });
            var encapsulation = prenormData.encapsulation;
            if (encapsulation == null) {
                encapsulation = this._config.defaultEncapsulation;
            }
            if (encapsulation === core_1.ViewEncapsulation.Emulated && styles.length === 0 &&
                styleUrls.length === 0) {
                encapsulation = core_1.ViewEncapsulation.None;
            }
            return new compile_metadata_1.CompileTemplateMetadata({
                encapsulation: encapsulation,
                template: preparsedTemplate.template,
                templateUrl: preparsedTemplate.templateUrl,
                htmlAst: preparsedTemplate.htmlAst,
                styles: styles,
                styleUrls: styleUrls,
                ngContentSelectors: preparsedTemplate.ngContentSelectors,
                animations: prenormData.animations,
                interpolation: prenormData.interpolation,
                isInline: preparsedTemplate.isInline,
                externalStylesheets: externalStylesheets,
                preserveWhitespaces: config_1.preserveWhitespacesDefault(prenormData.preserveWhitespaces, this._config.preserveWhitespaces),
            });
        };
        DirectiveNormalizer.prototype._inlineStyles = function (styleUrls, stylesheets, targetStyles) {
            var _this = this;
            styleUrls.forEach(function (styleUrl) {
                var stylesheet = stylesheets.get(styleUrl);
                stylesheet.styles.forEach(function (style) { return targetStyles.push(style); });
                _this._inlineStyles(stylesheet.styleUrls, stylesheets, targetStyles);
            });
        };
        DirectiveNormalizer.prototype._loadMissingExternalStylesheets = function (styleUrls, loadedStylesheets) {
            var _this = this;
            if (loadedStylesheets === void 0) { loadedStylesheets = new Map(); }
            return util_1.SyncAsync.then(util_1.SyncAsync.all(styleUrls.filter(function (styleUrl) { return !loadedStylesheets.has(styleUrl); })
                .map(function (styleUrl) { return util_1.SyncAsync.then(_this._fetch(styleUrl), function (loadedStyle) {
                var stylesheet = _this._normalizeStylesheet(new compile_metadata_1.CompileStylesheetMetadata({ styles: [loadedStyle], moduleUrl: styleUrl }));
                loadedStylesheets.set(styleUrl, stylesheet);
                return _this._loadMissingExternalStylesheets(stylesheet.styleUrls, loadedStylesheets);
            }); })), function (_) { return loadedStylesheets; });
        };
        DirectiveNormalizer.prototype._normalizeStylesheet = function (stylesheet) {
            var _this = this;
            var moduleUrl = stylesheet.moduleUrl;
            var allStyleUrls = stylesheet.styleUrls.filter(style_url_resolver_1.isStyleUrlResolvable)
                .map(function (url) { return _this._urlResolver.resolve(moduleUrl, url); });
            var allStyles = stylesheet.styles.map(function (style) {
                var styleWithImports = style_url_resolver_1.extractStyleUrls(_this._urlResolver, moduleUrl, style);
                allStyleUrls.push.apply(allStyleUrls, tslib_1.__spread(styleWithImports.styleUrls));
                return styleWithImports.style;
            });
            return new compile_metadata_1.CompileStylesheetMetadata({ styles: allStyles, styleUrls: allStyleUrls, moduleUrl: moduleUrl });
        };
        return DirectiveNormalizer;
    }());
    exports.DirectiveNormalizer = DirectiveNormalizer;
    var TemplatePreparseVisitor = /** @class */ (function () {
        function TemplatePreparseVisitor() {
            this.ngContentSelectors = [];
            this.styles = [];
            this.styleUrls = [];
            this.ngNonBindableStackCount = 0;
        }
        TemplatePreparseVisitor.prototype.visitElement = function (ast, context) {
            var preparsedElement = template_preparser_1.preparseElement(ast);
            switch (preparsedElement.type) {
                case template_preparser_1.PreparsedElementType.NG_CONTENT:
                    if (this.ngNonBindableStackCount === 0) {
                        this.ngContentSelectors.push(preparsedElement.selectAttr);
                    }
                    break;
                case template_preparser_1.PreparsedElementType.STYLE:
                    var textContent_1 = '';
                    ast.children.forEach(function (child) {
                        if (child instanceof html.Text) {
                            textContent_1 += child.value;
                        }
                    });
                    this.styles.push(textContent_1);
                    break;
                case template_preparser_1.PreparsedElementType.STYLESHEET:
                    this.styleUrls.push(preparsedElement.hrefAttr);
                    break;
                default:
                    break;
            }
            if (preparsedElement.nonBindable) {
                this.ngNonBindableStackCount++;
            }
            html.visitAll(this, ast.children);
            if (preparsedElement.nonBindable) {
                this.ngNonBindableStackCount--;
            }
            return null;
        };
        TemplatePreparseVisitor.prototype.visitExpansion = function (ast, context) {
            html.visitAll(this, ast.cases);
        };
        TemplatePreparseVisitor.prototype.visitExpansionCase = function (ast, context) {
            html.visitAll(this, ast.expression);
        };
        TemplatePreparseVisitor.prototype.visitComment = function (ast, context) {
            return null;
        };
        TemplatePreparseVisitor.prototype.visitAttribute = function (ast, context) {
            return null;
        };
        TemplatePreparseVisitor.prototype.visitText = function (ast, context) {
            return null;
        };
        return TemplatePreparseVisitor;
    }());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlX25vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvZGlyZWN0aXZlX25vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7O0lBRUgsMkVBQW1JO0lBQ25JLHVEQUFvRTtJQUNwRSxtREFBeUM7SUFDekMsMERBQXdDO0lBRXhDLDZGQUFxRTtJQUdyRSwrRUFBNEU7SUFDNUUsK0ZBQTJGO0lBRTNGLG1EQUFvRTtJQWdCcEU7UUFHRSw2QkFDWSxlQUErQixFQUFVLFlBQXlCLEVBQ2xFLFdBQXVCLEVBQVUsT0FBdUI7WUFEeEQsb0JBQWUsR0FBZixlQUFlLENBQWdCO1lBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7WUFDbEUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtZQUo1RCx5QkFBb0IsR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztRQUlHLENBQUM7UUFFeEUsd0NBQVUsR0FBVjtZQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQyxDQUFDO1FBRUQsMkNBQWEsR0FBYixVQUFjLG1CQUE2QztZQUEzRCxpQkFTQztZQVJDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLE9BQU87YUFDUjtZQUNELElBQU0sUUFBUSxHQUFHLG1CQUFtQixDQUFDLFFBQVUsQ0FBQztZQUNoRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFZLENBQUMsQ0FBQztZQUN4RCxRQUFRLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtnQkFDOUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBVSxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBRU8sb0NBQU0sR0FBZCxVQUFlLEdBQVc7WUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUM7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRUQsK0NBQWlCLEdBQWpCLFVBQWtCLFdBQTBDO1lBQTVELGlCQStCQztZQTdCQyxJQUFJLGdCQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLGdCQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUN0QyxNQUFNLGtCQUFXLENBQUMsTUFDZCxnQkFBUyxDQUFDLFdBQVc7eUJBQ04sYUFBYSxDQUFDLDREQUF5RCxDQUFDLENBQUM7aUJBQzdGO2dCQUNELElBQUksT0FBTyxXQUFXLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtvQkFDNUMsTUFBTSxrQkFBVyxDQUFDLDBDQUNkLGdCQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBa0IsQ0FBQyxDQUFDO2lCQUM3RDthQUNGO2lCQUFNLElBQUksZ0JBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzdDLElBQUksT0FBTyxXQUFXLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtvQkFDL0MsTUFBTSxrQkFBVyxDQUFDLDZDQUNkLGdCQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxxQkFBa0IsQ0FBQyxDQUFDO2lCQUM3RDthQUNGO2lCQUFNO2dCQUNMLE1BQU0sa0JBQVcsQ0FDYix5Q0FBdUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFHLENBQUMsQ0FBQzthQUNwRjtZQUVELElBQUksZ0JBQVMsQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUM7Z0JBQzFDLE9BQU8sV0FBVyxDQUFDLG1CQUFtQixLQUFLLFNBQVMsRUFBRTtnQkFDeEQsTUFBTSxrQkFBVyxDQUFDLGtEQUNkLGdCQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyx1QkFBb0IsQ0FBQyxDQUFDO2FBQy9EO1lBRUQsT0FBTyxnQkFBUyxDQUFDLElBQUksQ0FDakIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUNuQyxVQUFDLGlCQUFpQixJQUFLLE9BQUEsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxFQUEvRCxDQUErRCxDQUFDLENBQUM7UUFDOUYsQ0FBQztRQUVPLCtDQUFpQixHQUF6QixVQUEwQixVQUF5QztZQUFuRSxpQkFhQztZQVhDLElBQUksUUFBMkIsQ0FBQztZQUNoQyxJQUFJLFdBQW1CLENBQUM7WUFDeEIsSUFBSSxVQUFVLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDL0IsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQy9CLFdBQVcsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxXQUFZLENBQUMsQ0FBQztnQkFDdkYsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDckM7WUFDRCxPQUFPLGdCQUFTLENBQUMsSUFBSSxDQUNqQixRQUFRLEVBQUUsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsdUJBQXVCLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsRUFBL0QsQ0FBK0QsQ0FBQyxDQUFDO1FBQy9GLENBQUM7UUFFTyxxREFBdUIsR0FBL0IsVUFDSSxXQUEwQyxFQUFFLFFBQWdCLEVBQzVELGNBQXNCO1lBQ3hCLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3hDLElBQU0sbUJBQW1CLEdBQUcsMENBQW1CLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFjLENBQUMsQ0FBQztZQUN0RixJQUFNLFdBQVcsR0FBRyxvQ0FBaUIsQ0FDakMsRUFBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLEVBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxhQUFhLEVBQUMsRUFBQyxFQUNyRixFQUFDLFFBQVEsVUFBQSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQzdDLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBQyxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLHFCQUFBLEVBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3hDLElBQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELE1BQU0sa0JBQVcsQ0FBQyw2QkFBMkIsV0FBYSxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLDRDQUF5QixDQUNsRixFQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXJFLElBQU0sT0FBTyxHQUFHLElBQUksdUJBQXVCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNyRCxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSw0Q0FBeUIsQ0FDMUUsRUFBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhGLElBQU0sTUFBTSxHQUFHLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTNFLElBQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFGLElBQU0sU0FBUyxHQUFHLElBQUk7aUJBQ0Msb0JBQW9CLENBQUMsSUFBSSw0Q0FBeUIsQ0FDL0MsRUFBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7aUJBQ3pFLFNBQVMsQ0FBQztZQUNqQyxPQUFPO2dCQUNMLFFBQVEsVUFBQTtnQkFDUixXQUFXLEVBQUUsY0FBYztnQkFDM0IsUUFBUSxVQUFBO2dCQUNSLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLE1BQU0sUUFBQTtnQkFDTixlQUFlLGlCQUFBO2dCQUNmLFNBQVMsV0FBQTtnQkFDVCxrQkFBa0IsRUFBRSxPQUFPLENBQUMsa0JBQWtCO2FBQy9DLENBQUM7UUFDSixDQUFDO1FBRU8sd0RBQTBCLEdBQWxDLFVBQ0ksV0FBMEMsRUFDMUMsaUJBQW9DO1lBRnhDLGlCQVFDO1lBTEMsT0FBTyxnQkFBUyxDQUFDLElBQUksQ0FDakIsSUFBSSxDQUFDLCtCQUErQixDQUNoQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQzFFLFVBQUMsbUJBQW1CLElBQUssT0FBQSxLQUFJLENBQUMsZ0NBQWdDLENBQzFELFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQyxFQUQvQixDQUMrQixDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUVPLDhEQUFnQyxHQUF4QyxVQUNJLFdBQTBDLEVBQUUsaUJBQW9DLEVBQ2hGLFdBQW1EO1lBQ3JELGFBQWE7WUFDYixxREFBcUQ7WUFDckQsc0VBQXNFO1lBQ3RFLCtGQUErRjtZQUMvRixtRkFBbUY7WUFDbkYsZ0dBQWdHO1lBQ2hHLHFDQUFxQztZQVR2QyxpQkE2Q0M7WUFsQ0MsSUFBTSxNQUFNLG9CQUFPLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzRSxJQUFNLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFFOUMsSUFBTSxtQkFBbUIsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTtnQkFDaEQsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQztnQkFDOUMsSUFBTSxNQUFNLG9CQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDOUQsT0FBTyxJQUFJLDRDQUF5QixDQUFDLEVBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztZQUM5RSxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDOUMsSUFBSSxhQUFhLElBQUksSUFBSSxFQUFFO2dCQUN6QixhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQzthQUNuRDtZQUNELElBQUksYUFBYSxLQUFLLHdCQUFpQixDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ25FLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixhQUFhLEdBQUcsd0JBQWlCLENBQUMsSUFBSSxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxJQUFJLDBDQUF1QixDQUFDO2dCQUNqQyxhQUFhLGVBQUE7Z0JBQ2IsUUFBUSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7Z0JBQ3BDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXO2dCQUMxQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsT0FBTztnQkFDbEMsTUFBTSxRQUFBO2dCQUNOLFNBQVMsV0FBQTtnQkFDVCxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxrQkFBa0I7Z0JBQ3hELFVBQVUsRUFBRSxXQUFXLENBQUMsVUFBVTtnQkFDbEMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxhQUFhO2dCQUN4QyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsUUFBUTtnQkFDcEMsbUJBQW1CLHFCQUFBO2dCQUNuQixtQkFBbUIsRUFBRSxtQ0FBMEIsQ0FDM0MsV0FBVyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7YUFDdkUsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVPLDJDQUFhLEdBQXJCLFVBQ0ksU0FBbUIsRUFBRSxXQUFtRCxFQUN4RSxZQUFzQjtZQUYxQixpQkFRQztZQUxDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRO2dCQUN4QixJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxDQUFDO2dCQUM5QyxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztnQkFDN0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN0RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFTyw2REFBK0IsR0FBdkMsVUFDSSxTQUFtQixFQUNuQixpQkFDeUY7WUFIN0YsaUJBbUJDO1lBakJHLGtDQUFBLEVBQUEsd0JBQ2lELEdBQUcsRUFBcUM7WUFFM0YsT0FBTyxnQkFBUyxDQUFDLElBQUksQ0FDakIsZ0JBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDO2lCQUMzRCxHQUFHLENBQ0EsVUFBQSxRQUFRLElBQUksT0FBQSxnQkFBUyxDQUFDLElBQUksQ0FDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFDckIsVUFBQyxXQUFXO2dCQUNWLElBQU0sVUFBVSxHQUNaLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLDRDQUF5QixDQUNuRCxFQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZELGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sS0FBSSxDQUFDLCtCQUErQixDQUN2QyxVQUFVLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLEVBVE0sQ0FTTixDQUFDLENBQUMsRUFDOUIsVUFBQyxDQUFDLElBQUssT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFTyxrREFBb0IsR0FBNUIsVUFBNkIsVUFBcUM7WUFBbEUsaUJBYUM7WUFaQyxJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsU0FBVSxDQUFDO1lBQ3hDLElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLHlDQUFvQixDQUFDO2lCQUM1QyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQXpDLENBQXlDLENBQUMsQ0FBQztZQUVoRixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQzNDLElBQU0sZ0JBQWdCLEdBQUcscUNBQWdCLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9FLFlBQVksQ0FBQyxJQUFJLE9BQWpCLFlBQVksbUJBQVMsZ0JBQWdCLENBQUMsU0FBUyxHQUFFO2dCQUNqRCxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSw0Q0FBeUIsQ0FDaEMsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUNILDBCQUFDO0lBQUQsQ0FBQyxBQS9ORCxJQStOQztJQS9OWSxrREFBbUI7SUE0T2hDO1FBQUE7WUFDRSx1QkFBa0IsR0FBYSxFQUFFLENBQUM7WUFDbEMsV0FBTSxHQUFhLEVBQUUsQ0FBQztZQUN0QixjQUFTLEdBQWEsRUFBRSxDQUFDO1lBQ3pCLDRCQUF1QixHQUFXLENBQUMsQ0FBQztRQW9EdEMsQ0FBQztRQWxEQyw4Q0FBWSxHQUFaLFVBQWEsR0FBaUIsRUFBRSxPQUFZO1lBQzFDLElBQU0sZ0JBQWdCLEdBQUcsb0NBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QyxRQUFRLGdCQUFnQixDQUFDLElBQUksRUFBRTtnQkFDN0IsS0FBSyx5Q0FBb0IsQ0FBQyxVQUFVO29CQUNsQyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsS0FBSyxDQUFDLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQzNEO29CQUNELE1BQU07Z0JBQ1IsS0FBSyx5Q0FBb0IsQ0FBQyxLQUFLO29CQUM3QixJQUFJLGFBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSzt3QkFDeEIsSUFBSSxLQUFLLFlBQVksSUFBSSxDQUFDLElBQUksRUFBRTs0QkFDOUIsYUFBVyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7eUJBQzVCO29CQUNILENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQVcsQ0FBQyxDQUFDO29CQUM5QixNQUFNO2dCQUNSLEtBQUsseUNBQW9CLENBQUMsVUFBVTtvQkFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9DLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTthQUNUO1lBQ0QsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO2FBQ2hDO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLElBQUksZ0JBQWdCLENBQUMsV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUNoQztZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELGdEQUFjLEdBQWQsVUFBZSxHQUFtQixFQUFFLE9BQVk7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxvREFBa0IsR0FBbEIsVUFBbUIsR0FBdUIsRUFBRSxPQUFZO1lBQ3RELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsOENBQVksR0FBWixVQUFhLEdBQWlCLEVBQUUsT0FBWTtZQUMxQyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxnREFBYyxHQUFkLFVBQWUsR0FBbUIsRUFBRSxPQUFZO1lBQzlDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELDJDQUFTLEdBQVQsVUFBVSxHQUFjLEVBQUUsT0FBWTtZQUNwQyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCw4QkFBQztJQUFELENBQUMsQUF4REQsSUF3REMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhLCBDb21waWxlU3R5bGVzaGVldE1ldGFkYXRhLCBDb21waWxlVGVtcGxhdGVNZXRhZGF0YSwgdGVtcGxhdGVTb3VyY2VVcmx9IGZyb20gJy4vY29tcGlsZV9tZXRhZGF0YSc7XG5pbXBvcnQge0NvbXBpbGVyQ29uZmlnLCBwcmVzZXJ2ZVdoaXRlc3BhY2VzRGVmYXVsdH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCAqIGFzIGh0bWwgZnJvbSAnLi9tbF9wYXJzZXIvYXN0JztcbmltcG9ydCB7SHRtbFBhcnNlcn0gZnJvbSAnLi9tbF9wYXJzZXIvaHRtbF9wYXJzZXInO1xuaW1wb3J0IHtJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuL21sX3BhcnNlci9pbnRlcnBvbGF0aW9uX2NvbmZpZyc7XG5pbXBvcnQge1BhcnNlVHJlZVJlc3VsdCBhcyBIdG1sUGFyc2VUcmVlUmVzdWx0fSBmcm9tICcuL21sX3BhcnNlci9wYXJzZXInO1xuaW1wb3J0IHtSZXNvdXJjZUxvYWRlcn0gZnJvbSAnLi9yZXNvdXJjZV9sb2FkZXInO1xuaW1wb3J0IHtleHRyYWN0U3R5bGVVcmxzLCBpc1N0eWxlVXJsUmVzb2x2YWJsZX0gZnJvbSAnLi9zdHlsZV91cmxfcmVzb2x2ZXInO1xuaW1wb3J0IHtQcmVwYXJzZWRFbGVtZW50VHlwZSwgcHJlcGFyc2VFbGVtZW50fSBmcm9tICcuL3RlbXBsYXRlX3BhcnNlci90ZW1wbGF0ZV9wcmVwYXJzZXInO1xuaW1wb3J0IHtVcmxSZXNvbHZlcn0gZnJvbSAnLi91cmxfcmVzb2x2ZXInO1xuaW1wb3J0IHtpc0RlZmluZWQsIHN0cmluZ2lmeSwgU3luY0FzeW5jLCBzeW50YXhFcnJvcn0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBQcmVub3JtYWxpemVkVGVtcGxhdGVNZXRhZGF0YSB7XG4gIG5nTW9kdWxlVHlwZTogYW55O1xuICBjb21wb25lbnRUeXBlOiBhbnk7XG4gIG1vZHVsZVVybDogc3RyaW5nO1xuICB0ZW1wbGF0ZTogc3RyaW5nfG51bGw7XG4gIHRlbXBsYXRlVXJsOiBzdHJpbmd8bnVsbDtcbiAgc3R5bGVzOiBzdHJpbmdbXTtcbiAgc3R5bGVVcmxzOiBzdHJpbmdbXTtcbiAgaW50ZXJwb2xhdGlvbjogW3N0cmluZywgc3RyaW5nXXxudWxsO1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbnxudWxsO1xuICBhbmltYXRpb25zOiBhbnlbXTtcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogYm9vbGVhbnxudWxsO1xufVxuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlTm9ybWFsaXplciB7XG4gIHByaXZhdGUgX3Jlc291cmNlTG9hZGVyQ2FjaGUgPSBuZXcgTWFwPHN0cmluZywgU3luY0FzeW5jPHN0cmluZz4+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9yZXNvdXJjZUxvYWRlcjogUmVzb3VyY2VMb2FkZXIsIHByaXZhdGUgX3VybFJlc29sdmVyOiBVcmxSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgX2h0bWxQYXJzZXI6IEh0bWxQYXJzZXIsIHByaXZhdGUgX2NvbmZpZzogQ29tcGlsZXJDb25maWcpIHt9XG5cbiAgY2xlYXJDYWNoZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZXNvdXJjZUxvYWRlckNhY2hlLmNsZWFyKCk7XG4gIH1cblxuICBjbGVhckNhY2hlRm9yKG5vcm1hbGl6ZWREaXJlY3RpdmU6IENvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSk6IHZvaWQge1xuICAgIGlmICghbm9ybWFsaXplZERpcmVjdGl2ZS5pc0NvbXBvbmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IG5vcm1hbGl6ZWREaXJlY3RpdmUudGVtcGxhdGUgITtcbiAgICB0aGlzLl9yZXNvdXJjZUxvYWRlckNhY2hlLmRlbGV0ZSh0ZW1wbGF0ZS50ZW1wbGF0ZVVybCEpO1xuICAgIHRlbXBsYXRlLmV4dGVybmFsU3R5bGVzaGVldHMuZm9yRWFjaCgoc3R5bGVzaGVldCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb3VyY2VMb2FkZXJDYWNoZS5kZWxldGUoc3R5bGVzaGVldC5tb2R1bGVVcmwhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZldGNoKHVybDogc3RyaW5nKTogU3luY0FzeW5jPHN0cmluZz4ge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLl9yZXNvdXJjZUxvYWRlckNhY2hlLmdldCh1cmwpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0aGlzLl9yZXNvdXJjZUxvYWRlci5nZXQodXJsKTtcbiAgICAgIHRoaXMuX3Jlc291cmNlTG9hZGVyQ2FjaGUuc2V0KHVybCwgcmVzdWx0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIG5vcm1hbGl6ZVRlbXBsYXRlKHByZW5vcm1EYXRhOiBQcmVub3JtYWxpemVkVGVtcGxhdGVNZXRhZGF0YSk6XG4gICAgICBTeW5jQXN5bmM8Q29tcGlsZVRlbXBsYXRlTWV0YWRhdGE+IHtcbiAgICBpZiAoaXNEZWZpbmVkKHByZW5vcm1EYXRhLnRlbXBsYXRlKSkge1xuICAgICAgaWYgKGlzRGVmaW5lZChwcmVub3JtRGF0YS50ZW1wbGF0ZVVybCkpIHtcbiAgICAgICAgdGhyb3cgc3ludGF4RXJyb3IoYCcke1xuICAgICAgICAgICAgc3RyaW5naWZ5KHByZW5vcm1EYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb21wb25lbnRUeXBlKX0nIGNvbXBvbmVudCBjYW5ub3QgZGVmaW5lIGJvdGggdGVtcGxhdGUgYW5kIHRlbXBsYXRlVXJsYCk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHByZW5vcm1EYXRhLnRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBzeW50YXhFcnJvcihgVGhlIHRlbXBsYXRlIHNwZWNpZmllZCBmb3IgY29tcG9uZW50ICR7XG4gICAgICAgICAgICBzdHJpbmdpZnkocHJlbm9ybURhdGEuY29tcG9uZW50VHlwZSl9IGlzIG5vdCBhIHN0cmluZ2ApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNEZWZpbmVkKHByZW5vcm1EYXRhLnRlbXBsYXRlVXJsKSkge1xuICAgICAgaWYgKHR5cGVvZiBwcmVub3JtRGF0YS50ZW1wbGF0ZVVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhyb3cgc3ludGF4RXJyb3IoYFRoZSB0ZW1wbGF0ZVVybCBzcGVjaWZpZWQgZm9yIGNvbXBvbmVudCAke1xuICAgICAgICAgICAgc3RyaW5naWZ5KHByZW5vcm1EYXRhLmNvbXBvbmVudFR5cGUpfSBpcyBub3QgYSBzdHJpbmdgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3IoXG4gICAgICAgICAgYE5vIHRlbXBsYXRlIHNwZWNpZmllZCBmb3IgY29tcG9uZW50ICR7c3RyaW5naWZ5KHByZW5vcm1EYXRhLmNvbXBvbmVudFR5cGUpfWApO1xuICAgIH1cblxuICAgIGlmIChpc0RlZmluZWQocHJlbm9ybURhdGEucHJlc2VydmVXaGl0ZXNwYWNlcykgJiZcbiAgICAgICAgdHlwZW9mIHByZW5vcm1EYXRhLnByZXNlcnZlV2hpdGVzcGFjZXMgIT09ICdib29sZWFuJykge1xuICAgICAgdGhyb3cgc3ludGF4RXJyb3IoYFRoZSBwcmVzZXJ2ZVdoaXRlc3BhY2VzIG9wdGlvbiBmb3IgY29tcG9uZW50ICR7XG4gICAgICAgICAgc3RyaW5naWZ5KHByZW5vcm1EYXRhLmNvbXBvbmVudFR5cGUpfSBtdXN0IGJlIGEgYm9vbGVhbmApO1xuICAgIH1cblxuICAgIHJldHVybiBTeW5jQXN5bmMudGhlbihcbiAgICAgICAgdGhpcy5fcHJlUGFyc2VUZW1wbGF0ZShwcmVub3JtRGF0YSksXG4gICAgICAgIChwcmVwYXJzZWRUZW1wbGF0ZSkgPT4gdGhpcy5fbm9ybWFsaXplVGVtcGxhdGVNZXRhZGF0YShwcmVub3JtRGF0YSwgcHJlcGFyc2VkVGVtcGxhdGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgX3ByZVBhcnNlVGVtcGxhdGUocHJlbm9tRGF0YTogUHJlbm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGEpOlxuICAgICAgU3luY0FzeW5jPFByZXBhcnNlZFRlbXBsYXRlPiB7XG4gICAgbGV0IHRlbXBsYXRlOiBTeW5jQXN5bmM8c3RyaW5nPjtcbiAgICBsZXQgdGVtcGxhdGVVcmw6IHN0cmluZztcbiAgICBpZiAocHJlbm9tRGF0YS50ZW1wbGF0ZSAhPSBudWxsKSB7XG4gICAgICB0ZW1wbGF0ZSA9IHByZW5vbURhdGEudGVtcGxhdGU7XG4gICAgICB0ZW1wbGF0ZVVybCA9IHByZW5vbURhdGEubW9kdWxlVXJsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZW1wbGF0ZVVybCA9IHRoaXMuX3VybFJlc29sdmVyLnJlc29sdmUocHJlbm9tRGF0YS5tb2R1bGVVcmwsIHByZW5vbURhdGEudGVtcGxhdGVVcmwhKTtcbiAgICAgIHRlbXBsYXRlID0gdGhpcy5fZmV0Y2godGVtcGxhdGVVcmwpO1xuICAgIH1cbiAgICByZXR1cm4gU3luY0FzeW5jLnRoZW4oXG4gICAgICAgIHRlbXBsYXRlLCAodGVtcGxhdGUpID0+IHRoaXMuX3ByZXBhcnNlTG9hZGVkVGVtcGxhdGUocHJlbm9tRGF0YSwgdGVtcGxhdGUsIHRlbXBsYXRlVXJsKSk7XG4gIH1cblxuICBwcml2YXRlIF9wcmVwYXJzZUxvYWRlZFRlbXBsYXRlKFxuICAgICAgcHJlbm9ybURhdGE6IFByZW5vcm1hbGl6ZWRUZW1wbGF0ZU1ldGFkYXRhLCB0ZW1wbGF0ZTogc3RyaW5nLFxuICAgICAgdGVtcGxhdGVBYnNVcmw6IHN0cmluZyk6IFByZXBhcnNlZFRlbXBsYXRlIHtcbiAgICBjb25zdCBpc0lubGluZSA9ICEhcHJlbm9ybURhdGEudGVtcGxhdGU7XG4gICAgY29uc3QgaW50ZXJwb2xhdGlvbkNvbmZpZyA9IEludGVycG9sYXRpb25Db25maWcuZnJvbUFycmF5KHByZW5vcm1EYXRhLmludGVycG9sYXRpb24hKTtcbiAgICBjb25zdCB0ZW1wbGF0ZVVybCA9IHRlbXBsYXRlU291cmNlVXJsKFxuICAgICAgICB7cmVmZXJlbmNlOiBwcmVub3JtRGF0YS5uZ01vZHVsZVR5cGV9LCB7dHlwZToge3JlZmVyZW5jZTogcHJlbm9ybURhdGEuY29tcG9uZW50VHlwZX19LFxuICAgICAgICB7aXNJbmxpbmUsIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZUFic1VybH0pO1xuICAgIGNvbnN0IHJvb3ROb2Rlc0FuZEVycm9ycyA9IHRoaXMuX2h0bWxQYXJzZXIucGFyc2UoXG4gICAgICAgIHRlbXBsYXRlLCB0ZW1wbGF0ZVVybCwge3Rva2VuaXplRXhwYW5zaW9uRm9ybXM6IHRydWUsIGludGVycG9sYXRpb25Db25maWd9KTtcbiAgICBpZiAocm9vdE5vZGVzQW5kRXJyb3JzLmVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBlcnJvclN0cmluZyA9IHJvb3ROb2Rlc0FuZEVycm9ycy5lcnJvcnMuam9pbignXFxuJyk7XG4gICAgICB0aHJvdyBzeW50YXhFcnJvcihgVGVtcGxhdGUgcGFyc2UgZXJyb3JzOlxcbiR7ZXJyb3JTdHJpbmd9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGVtcGxhdGVNZXRhZGF0YVN0eWxlcyA9IHRoaXMuX25vcm1hbGl6ZVN0eWxlc2hlZXQobmV3IENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGEoXG4gICAgICAgIHtzdHlsZXM6IHByZW5vcm1EYXRhLnN0eWxlcywgbW9kdWxlVXJsOiBwcmVub3JtRGF0YS5tb2R1bGVVcmx9KSk7XG5cbiAgICBjb25zdCB2aXNpdG9yID0gbmV3IFRlbXBsYXRlUHJlcGFyc2VWaXNpdG9yKCk7XG4gICAgaHRtbC52aXNpdEFsbCh2aXNpdG9yLCByb290Tm9kZXNBbmRFcnJvcnMucm9vdE5vZGVzKTtcbiAgICBjb25zdCB0ZW1wbGF0ZVN0eWxlcyA9IHRoaXMuX25vcm1hbGl6ZVN0eWxlc2hlZXQobmV3IENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGEoXG4gICAgICAgIHtzdHlsZXM6IHZpc2l0b3Iuc3R5bGVzLCBzdHlsZVVybHM6IHZpc2l0b3Iuc3R5bGVVcmxzLCBtb2R1bGVVcmw6IHRlbXBsYXRlQWJzVXJsfSkpO1xuXG4gICAgY29uc3Qgc3R5bGVzID0gdGVtcGxhdGVNZXRhZGF0YVN0eWxlcy5zdHlsZXMuY29uY2F0KHRlbXBsYXRlU3R5bGVzLnN0eWxlcyk7XG5cbiAgICBjb25zdCBpbmxpbmVTdHlsZVVybHMgPSB0ZW1wbGF0ZU1ldGFkYXRhU3R5bGVzLnN0eWxlVXJscy5jb25jYXQodGVtcGxhdGVTdHlsZXMuc3R5bGVVcmxzKTtcbiAgICBjb25zdCBzdHlsZVVybHMgPSB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5fbm9ybWFsaXplU3R5bGVzaGVldChuZXcgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHlsZVVybHM6IHByZW5vcm1EYXRhLnN0eWxlVXJscywgbW9kdWxlVXJsOiBwcmVub3JtRGF0YS5tb2R1bGVVcmx9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlVXJscztcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcGxhdGUsXG4gICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGVBYnNVcmwsXG4gICAgICBpc0lubGluZSxcbiAgICAgIGh0bWxBc3Q6IHJvb3ROb2Rlc0FuZEVycm9ycyxcbiAgICAgIHN0eWxlcyxcbiAgICAgIGlubGluZVN0eWxlVXJscyxcbiAgICAgIHN0eWxlVXJscyxcbiAgICAgIG5nQ29udGVudFNlbGVjdG9yczogdmlzaXRvci5uZ0NvbnRlbnRTZWxlY3RvcnMsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZVRlbXBsYXRlTWV0YWRhdGEoXG4gICAgICBwcmVub3JtRGF0YTogUHJlbm9ybWFsaXplZFRlbXBsYXRlTWV0YWRhdGEsXG4gICAgICBwcmVwYXJzZWRUZW1wbGF0ZTogUHJlcGFyc2VkVGVtcGxhdGUpOiBTeW5jQXN5bmM8Q29tcGlsZVRlbXBsYXRlTWV0YWRhdGE+IHtcbiAgICByZXR1cm4gU3luY0FzeW5jLnRoZW4oXG4gICAgICAgIHRoaXMuX2xvYWRNaXNzaW5nRXh0ZXJuYWxTdHlsZXNoZWV0cyhcbiAgICAgICAgICAgIHByZXBhcnNlZFRlbXBsYXRlLnN0eWxlVXJscy5jb25jYXQocHJlcGFyc2VkVGVtcGxhdGUuaW5saW5lU3R5bGVVcmxzKSksXG4gICAgICAgIChleHRlcm5hbFN0eWxlc2hlZXRzKSA9PiB0aGlzLl9ub3JtYWxpemVMb2FkZWRUZW1wbGF0ZU1ldGFkYXRhKFxuICAgICAgICAgICAgcHJlbm9ybURhdGEsIHByZXBhcnNlZFRlbXBsYXRlLCBleHRlcm5hbFN0eWxlc2hlZXRzKSk7XG4gIH1cblxuICBwcml2YXRlIF9ub3JtYWxpemVMb2FkZWRUZW1wbGF0ZU1ldGFkYXRhKFxuICAgICAgcHJlbm9ybURhdGE6IFByZW5vcm1hbGl6ZWRUZW1wbGF0ZU1ldGFkYXRhLCBwcmVwYXJzZWRUZW1wbGF0ZTogUHJlcGFyc2VkVGVtcGxhdGUsXG4gICAgICBzdHlsZXNoZWV0czogTWFwPHN0cmluZywgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YT4pOiBDb21waWxlVGVtcGxhdGVNZXRhZGF0YSB7XG4gICAgLy8gQWxnb3JpdGhtOlxuICAgIC8vIC0gcHJvZHVjZSBleGFjdGx5IDEgZW50cnkgcGVyIG9yaWdpbmFsIHN0eWxlVXJsIGluXG4gICAgLy8gQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGEuZXh0ZXJuYWxTdHlsZXNoZWV0cyB3aXRoIGFsbCBzdHlsZXMgaW5saW5lZFxuICAgIC8vIC0gaW5saW5lIGFsbCBzdHlsZXMgdGhhdCBhcmUgcmVmZXJlbmNlZCBieSB0aGUgdGVtcGxhdGUgaW50byBDb21waWxlVGVtcGxhdGVNZXRhZGF0YS5zdHlsZXMuXG4gICAgLy8gUmVhc29uOiBiZSBhYmxlIHRvIGRldGVybWluZSBob3cgbWFueSBzdHlsZXNoZWV0cyB0aGVyZSBhcmUgZXZlbiB3aXRob3V0IGxvYWRpbmdcbiAgICAvLyB0aGUgdGVtcGxhdGUgbm9yIHRoZSBzdHlsZXNoZWV0cywgc28gd2UgY2FuIGNyZWF0ZSBhIHN0dWIgZm9yIFR5cGVTY3JpcHQgYWx3YXlzIHN5bmNocm9ub3VzbHlcbiAgICAvLyAoYXMgcmVzb3VyY2UgbG9hZGluZyBtYXkgYmUgYXN5bmMpXG5cbiAgICBjb25zdCBzdHlsZXMgPSBbLi4ucHJlcGFyc2VkVGVtcGxhdGUuc3R5bGVzXTtcbiAgICB0aGlzLl9pbmxpbmVTdHlsZXMocHJlcGFyc2VkVGVtcGxhdGUuaW5saW5lU3R5bGVVcmxzLCBzdHlsZXNoZWV0cywgc3R5bGVzKTtcbiAgICBjb25zdCBzdHlsZVVybHMgPSBwcmVwYXJzZWRUZW1wbGF0ZS5zdHlsZVVybHM7XG5cbiAgICBjb25zdCBleHRlcm5hbFN0eWxlc2hlZXRzID0gc3R5bGVVcmxzLm1hcChzdHlsZVVybCA9PiB7XG4gICAgICBjb25zdCBzdHlsZXNoZWV0ID0gc3R5bGVzaGVldHMuZ2V0KHN0eWxlVXJsKSE7XG4gICAgICBjb25zdCBzdHlsZXMgPSBbLi4uc3R5bGVzaGVldC5zdHlsZXNdO1xuICAgICAgdGhpcy5faW5saW5lU3R5bGVzKHN0eWxlc2hlZXQuc3R5bGVVcmxzLCBzdHlsZXNoZWV0cywgc3R5bGVzKTtcbiAgICAgIHJldHVybiBuZXcgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YSh7bW9kdWxlVXJsOiBzdHlsZVVybCwgc3R5bGVzOiBzdHlsZXN9KTtcbiAgICB9KTtcblxuICAgIGxldCBlbmNhcHN1bGF0aW9uID0gcHJlbm9ybURhdGEuZW5jYXBzdWxhdGlvbjtcbiAgICBpZiAoZW5jYXBzdWxhdGlvbiA9PSBudWxsKSB7XG4gICAgICBlbmNhcHN1bGF0aW9uID0gdGhpcy5fY29uZmlnLmRlZmF1bHRFbmNhcHN1bGF0aW9uO1xuICAgIH1cbiAgICBpZiAoZW5jYXBzdWxhdGlvbiA9PT0gVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWQgJiYgc3R5bGVzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICBzdHlsZVVybHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbmNhcHN1bGF0aW9uID0gVmlld0VuY2Fwc3VsYXRpb24uTm9uZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDb21waWxlVGVtcGxhdGVNZXRhZGF0YSh7XG4gICAgICBlbmNhcHN1bGF0aW9uLFxuICAgICAgdGVtcGxhdGU6IHByZXBhcnNlZFRlbXBsYXRlLnRlbXBsYXRlLFxuICAgICAgdGVtcGxhdGVVcmw6IHByZXBhcnNlZFRlbXBsYXRlLnRlbXBsYXRlVXJsLFxuICAgICAgaHRtbEFzdDogcHJlcGFyc2VkVGVtcGxhdGUuaHRtbEFzdCxcbiAgICAgIHN0eWxlcyxcbiAgICAgIHN0eWxlVXJscyxcbiAgICAgIG5nQ29udGVudFNlbGVjdG9yczogcHJlcGFyc2VkVGVtcGxhdGUubmdDb250ZW50U2VsZWN0b3JzLFxuICAgICAgYW5pbWF0aW9uczogcHJlbm9ybURhdGEuYW5pbWF0aW9ucyxcbiAgICAgIGludGVycG9sYXRpb246IHByZW5vcm1EYXRhLmludGVycG9sYXRpb24sXG4gICAgICBpc0lubGluZTogcHJlcGFyc2VkVGVtcGxhdGUuaXNJbmxpbmUsXG4gICAgICBleHRlcm5hbFN0eWxlc2hlZXRzLFxuICAgICAgcHJlc2VydmVXaGl0ZXNwYWNlczogcHJlc2VydmVXaGl0ZXNwYWNlc0RlZmF1bHQoXG4gICAgICAgICAgcHJlbm9ybURhdGEucHJlc2VydmVXaGl0ZXNwYWNlcywgdGhpcy5fY29uZmlnLnByZXNlcnZlV2hpdGVzcGFjZXMpLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5saW5lU3R5bGVzKFxuICAgICAgc3R5bGVVcmxzOiBzdHJpbmdbXSwgc3R5bGVzaGVldHM6IE1hcDxzdHJpbmcsIENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGE+LFxuICAgICAgdGFyZ2V0U3R5bGVzOiBzdHJpbmdbXSkge1xuICAgIHN0eWxlVXJscy5mb3JFYWNoKHN0eWxlVXJsID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBzdHlsZXNoZWV0cy5nZXQoc3R5bGVVcmwpITtcbiAgICAgIHN0eWxlc2hlZXQuc3R5bGVzLmZvckVhY2goc3R5bGUgPT4gdGFyZ2V0U3R5bGVzLnB1c2goc3R5bGUpKTtcbiAgICAgIHRoaXMuX2lubGluZVN0eWxlcyhzdHlsZXNoZWV0LnN0eWxlVXJscywgc3R5bGVzaGVldHMsIHRhcmdldFN0eWxlcyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9sb2FkTWlzc2luZ0V4dGVybmFsU3R5bGVzaGVldHMoXG4gICAgICBzdHlsZVVybHM6IHN0cmluZ1tdLFxuICAgICAgbG9hZGVkU3R5bGVzaGVldHM6XG4gICAgICAgICAgTWFwPHN0cmluZywgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YT4gPSBuZXcgTWFwPHN0cmluZywgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YT4oKSk6XG4gICAgICBTeW5jQXN5bmM8TWFwPHN0cmluZywgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YT4+IHtcbiAgICByZXR1cm4gU3luY0FzeW5jLnRoZW4oXG4gICAgICAgIFN5bmNBc3luYy5hbGwoc3R5bGVVcmxzLmZpbHRlcigoc3R5bGVVcmwpID0+ICFsb2FkZWRTdHlsZXNoZWV0cy5oYXMoc3R5bGVVcmwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVVcmwgPT4gU3luY0FzeW5jLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmV0Y2goc3R5bGVVcmwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChsb2FkZWRTdHlsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbm9ybWFsaXplU3R5bGVzaGVldChuZXcgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0eWxlczogW2xvYWRlZFN0eWxlXSwgbW9kdWxlVXJsOiBzdHlsZVVybH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZFN0eWxlc2hlZXRzLnNldChzdHlsZVVybCwgc3R5bGVzaGVldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbG9hZE1pc3NpbmdFeHRlcm5hbFN0eWxlc2hlZXRzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuc3R5bGVVcmxzLCBsb2FkZWRTdHlsZXNoZWV0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgKF8pID0+IGxvYWRlZFN0eWxlc2hlZXRzKTtcbiAgfVxuXG4gIHByaXZhdGUgX25vcm1hbGl6ZVN0eWxlc2hlZXQoc3R5bGVzaGVldDogQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YSk6IENvbXBpbGVTdHlsZXNoZWV0TWV0YWRhdGEge1xuICAgIGNvbnN0IG1vZHVsZVVybCA9IHN0eWxlc2hlZXQubW9kdWxlVXJsITtcbiAgICBjb25zdCBhbGxTdHlsZVVybHMgPSBzdHlsZXNoZWV0LnN0eWxlVXJscy5maWx0ZXIoaXNTdHlsZVVybFJlc29sdmFibGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAodXJsID0+IHRoaXMuX3VybFJlc29sdmVyLnJlc29sdmUobW9kdWxlVXJsLCB1cmwpKTtcblxuICAgIGNvbnN0IGFsbFN0eWxlcyA9IHN0eWxlc2hlZXQuc3R5bGVzLm1hcChzdHlsZSA9PiB7XG4gICAgICBjb25zdCBzdHlsZVdpdGhJbXBvcnRzID0gZXh0cmFjdFN0eWxlVXJscyh0aGlzLl91cmxSZXNvbHZlciwgbW9kdWxlVXJsLCBzdHlsZSk7XG4gICAgICBhbGxTdHlsZVVybHMucHVzaCguLi5zdHlsZVdpdGhJbXBvcnRzLnN0eWxlVXJscyk7XG4gICAgICByZXR1cm4gc3R5bGVXaXRoSW1wb3J0cy5zdHlsZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgQ29tcGlsZVN0eWxlc2hlZXRNZXRhZGF0YShcbiAgICAgICAge3N0eWxlczogYWxsU3R5bGVzLCBzdHlsZVVybHM6IGFsbFN0eWxlVXJscywgbW9kdWxlVXJsOiBtb2R1bGVVcmx9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUHJlcGFyc2VkVGVtcGxhdGUge1xuICB0ZW1wbGF0ZTogc3RyaW5nO1xuICB0ZW1wbGF0ZVVybDogc3RyaW5nO1xuICBpc0lubGluZTogYm9vbGVhbjtcbiAgaHRtbEFzdDogSHRtbFBhcnNlVHJlZVJlc3VsdDtcbiAgc3R5bGVzOiBzdHJpbmdbXTtcbiAgaW5saW5lU3R5bGVVcmxzOiBzdHJpbmdbXTtcbiAgc3R5bGVVcmxzOiBzdHJpbmdbXTtcbiAgbmdDb250ZW50U2VsZWN0b3JzOiBzdHJpbmdbXTtcbn1cblxuY2xhc3MgVGVtcGxhdGVQcmVwYXJzZVZpc2l0b3IgaW1wbGVtZW50cyBodG1sLlZpc2l0b3Ige1xuICBuZ0NvbnRlbnRTZWxlY3RvcnM6IHN0cmluZ1tdID0gW107XG4gIHN0eWxlczogc3RyaW5nW10gPSBbXTtcbiAgc3R5bGVVcmxzOiBzdHJpbmdbXSA9IFtdO1xuICBuZ05vbkJpbmRhYmxlU3RhY2tDb3VudDogbnVtYmVyID0gMDtcblxuICB2aXNpdEVsZW1lbnQoYXN0OiBodG1sLkVsZW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgcHJlcGFyc2VkRWxlbWVudCA9IHByZXBhcnNlRWxlbWVudChhc3QpO1xuICAgIHN3aXRjaCAocHJlcGFyc2VkRWxlbWVudC50eXBlKSB7XG4gICAgICBjYXNlIFByZXBhcnNlZEVsZW1lbnRUeXBlLk5HX0NPTlRFTlQ6XG4gICAgICAgIGlmICh0aGlzLm5nTm9uQmluZGFibGVTdGFja0NvdW50ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5uZ0NvbnRlbnRTZWxlY3RvcnMucHVzaChwcmVwYXJzZWRFbGVtZW50LnNlbGVjdEF0dHIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBQcmVwYXJzZWRFbGVtZW50VHlwZS5TVFlMRTpcbiAgICAgICAgbGV0IHRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGFzdC5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBodG1sLlRleHQpIHtcbiAgICAgICAgICAgIHRleHRDb250ZW50ICs9IGNoaWxkLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3R5bGVzLnB1c2godGV4dENvbnRlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUHJlcGFyc2VkRWxlbWVudFR5cGUuU1RZTEVTSEVFVDpcbiAgICAgICAgdGhpcy5zdHlsZVVybHMucHVzaChwcmVwYXJzZWRFbGVtZW50LmhyZWZBdHRyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHByZXBhcnNlZEVsZW1lbnQubm9uQmluZGFibGUpIHtcbiAgICAgIHRoaXMubmdOb25CaW5kYWJsZVN0YWNrQ291bnQrKztcbiAgICB9XG4gICAgaHRtbC52aXNpdEFsbCh0aGlzLCBhc3QuY2hpbGRyZW4pO1xuICAgIGlmIChwcmVwYXJzZWRFbGVtZW50Lm5vbkJpbmRhYmxlKSB7XG4gICAgICB0aGlzLm5nTm9uQmluZGFibGVTdGFja0NvdW50LS07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb24oYXN0OiBodG1sLkV4cGFuc2lvbiwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBodG1sLnZpc2l0QWxsKHRoaXMsIGFzdC5jYXNlcyk7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbkNhc2UoYXN0OiBodG1sLkV4cGFuc2lvbkNhc2UsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgaHRtbC52aXNpdEFsbCh0aGlzLCBhc3QuZXhwcmVzc2lvbik7XG4gIH1cblxuICB2aXNpdENvbW1lbnQoYXN0OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmlzaXRBdHRyaWJ1dGUoYXN0OiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2aXNpdFRleHQoYXN0OiBodG1sLlRleHQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==
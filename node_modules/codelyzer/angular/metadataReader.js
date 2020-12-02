"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts = require("typescript");
var astQuery_1 = require("../util/astQuery");
var function_1 = require("../util/function");
var logger_1 = require("../util/logger");
var ngQuery_1 = require("../util/ngQuery");
var utils_1 = require("../util/utils");
var config_1 = require("./config");
var metadata_1 = require("./metadata");
var pathResolver_1 = require("./urlResolvers/pathResolver");
var urlResolver_1 = require("./urlResolvers/urlResolver");
var normalizeTransformed = function (t) {
    if (!t.map) {
        t.source = t.code;
    }
    return t;
};
var MetadataReader = (function () {
    function MetadataReader(fileResolver, urlResolver) {
        this.fileResolver = fileResolver;
        this.urlResolver = urlResolver;
        this.urlResolver = this.urlResolver || new urlResolver_1.UrlResolver(new pathResolver_1.PathResolver());
    }
    MetadataReader.prototype.read = function (d) {
        var _this = this;
        var componentMetadata = function_1.unwrapFirst(utils_1.maybeNodeArray(ts.createNodeArray(d.decorators)).map(function (dec) {
            return function_1.Maybe.lift(dec)
                .bind(astQuery_1.callExpression)
                .bind(astQuery_1.withIdentifier('Component'))
                .fmap(function () { return _this.readComponentMetadata(d, dec); });
        }));
        var directiveMetadata = function_1.unwrapFirst(utils_1.maybeNodeArray(ts.createNodeArray(d.decorators)).map(function (dec) {
            return function_1.Maybe.lift(dec)
                .bind(astQuery_1.callExpression)
                .bind(astQuery_1.withIdentifier('Directive'))
                .fmap(function () { return _this.readDirectiveMetadata(d, dec); });
        }));
        var pipeMetadata = function_1.unwrapFirst(utils_1.maybeNodeArray(ts.createNodeArray(d.decorators)).map(function (dec) {
            return function_1.Maybe.lift(dec)
                .bind(astQuery_1.callExpression)
                .bind(astQuery_1.withIdentifier('Pipe'))
                .fmap(function () { return _this.readPipeMetadata(d, dec); });
        }));
        var moduleMetadata = function_1.unwrapFirst(utils_1.maybeNodeArray(ts.createNodeArray(d.decorators)).map(function (dec) {
            return function_1.Maybe.lift(dec)
                .bind(astQuery_1.callExpression)
                .bind(astQuery_1.withIdentifier('NgModule'))
                .fmap(function () { return _this.readModuleMetadata(d, dec); });
        }));
        var injectableMetadata = function_1.unwrapFirst(utils_1.maybeNodeArray(ts.createNodeArray(d.decorators)).map(function (dec) {
            return function_1.Maybe.lift(dec)
                .bind(astQuery_1.callExpression)
                .bind(astQuery_1.withIdentifier('Injectable'))
                .fmap(function () { return _this.readInjectableMetadata(d, dec); });
        }));
        return directiveMetadata || componentMetadata || pipeMetadata || moduleMetadata || injectableMetadata;
    };
    MetadataReader.prototype.readDirectiveMetadata = function (d, dec) {
        var selectorExpression = utils_1.getDecoratorPropertyInitializer(dec, 'selector');
        var selector = selectorExpression && utils_1.isStringLiteralLike(selectorExpression) ? selectorExpression.text : undefined;
        return new metadata_1.DirectiveMetadata(d, dec, selector);
    };
    MetadataReader.prototype.readPipeMetadata = function (d, dec) {
        var nameExpression = utils_1.getDecoratorPropertyInitializer(dec, 'name');
        var name = nameExpression && utils_1.isStringLiteralLike(nameExpression) ? nameExpression.text : undefined;
        var pureExpression = utils_1.getDecoratorPropertyInitializer(dec, 'pure');
        var pure = pureExpression && utils_1.isBooleanLiteralLike(pureExpression) ? pureExpression : undefined;
        return new metadata_1.PipeMetadata(d, dec, name, pure);
    };
    MetadataReader.prototype.readModuleMetadata = function (d, dec) {
        return new metadata_1.ModuleMetadata(d, dec);
    };
    MetadataReader.prototype.readInjectableMetadata = function (d, dec) {
        var providedInExpression = utils_1.getDecoratorPropertyInitializer(dec, 'providedIn');
        return new metadata_1.InjectableMetadata(d, dec, providedInExpression);
    };
    MetadataReader.prototype.readComponentMetadata = function (d, dec) {
        var _this = this;
        var expr = this.getDecoratorArgument(dec);
        var directiveMetadata = this.readDirectiveMetadata(d, dec);
        var external_M = expr.fmap(function () { return _this.urlResolver.resolve(dec); });
        var animations_M = external_M.bind(function () { return _this.readComponentAnimationsMetadata(dec); });
        var style_M = external_M.bind(function (external) { return _this.readComponentStylesMetadata(dec, external); });
        var template_M = external_M.bind(function (external) { return _this.readComponentTemplateMetadata(dec, external); });
        return new metadata_1.ComponentMetadata(directiveMetadata.controller, directiveMetadata.decorator, directiveMetadata.selector, animations_M.unwrap(), style_M.unwrap(), template_M.unwrap());
    };
    MetadataReader.prototype.getDecoratorArgument = function (decorator) {
        return astQuery_1.decoratorArgument(decorator).bind(function_1.ifTrue(astQuery_1.hasProperties));
    };
    MetadataReader.prototype.readComponentAnimationsMetadata = function (dec) {
        return ngQuery_1.getAnimations(dec).fmap(function (inlineAnimations) {
            return inlineAnimations.elements.filter(utils_1.isStringLiteralLike).map(function (inlineAnimation) { return ({
                animation: normalizeTransformed({ code: inlineAnimation.text }),
                node: inlineAnimation
            }); });
        });
    };
    MetadataReader.prototype.readComponentTemplateMetadata = function (dec, external) {
        var _this = this;
        return ngQuery_1.getTemplate(dec)
            .fmap(function (inlineTemplate) { return ({
            node: inlineTemplate,
            template: normalizeTransformed(config_1.Config.transformTemplate(inlineTemplate.text)),
            url: undefined
        }); })
            .catch(function () {
            return function_1.Maybe.lift(external.templateUrl).bind(function (url) {
                return _this._resolve(url).fmap(function (template) { return ({
                    node: undefined,
                    template: normalizeTransformed(config_1.Config.transformTemplate(template, url)),
                    url: url
                }); });
            });
        });
    };
    MetadataReader.prototype.readComponentStylesMetadata = function (dec, external) {
        var _this = this;
        return ngQuery_1.getInlineStyle(dec)
            .fmap(function (inlineStyles) {
            return inlineStyles.elements.filter(utils_1.isStringLiteralLike).map(function (inlineStyle) { return ({
                node: inlineStyle,
                style: normalizeTransformed(config_1.Config.transformStyle(inlineStyle.text))
            }); });
        })
            .catch(function () {
            return function_1.Maybe.lift(external.styleUrls)
                .fmap(function (urls) {
                return urls.map(function (url) {
                    return _this._resolve(url).fmap(function (style) { return ({
                        node: undefined,
                        style: normalizeTransformed(config_1.Config.transformStyle(style, url)),
                        url: url
                    }); });
                });
            })
                .bind(function (url) { return function_1.listToMaybe(url); });
        });
    };
    MetadataReader.prototype._resolve = function (url) {
        try {
            return function_1.Maybe.lift(this.fileResolver.resolve(url));
        }
        catch (_a) {
            logger_1.logger.info('Cannot read file' + url);
            return function_1.Maybe.nothing;
        }
    };
    return MetadataReader;
}());
exports.MetadataReader = MetadataReader;

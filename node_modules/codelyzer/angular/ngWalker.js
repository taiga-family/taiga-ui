"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var compiler = require("@angular/compiler");
var Lint = require("tslint");
var ts = require("typescript");
var logger_1 = require("../util/logger");
var utils_1 = require("../util/utils");
var config_1 = require("./config");
var metadata_1 = require("./metadata");
var ngWalkerFactoryUtils_1 = require("./ngWalkerFactoryUtils");
var basicCssAstVisitor_1 = require("./styles/basicCssAstVisitor");
var parseCss_1 = require("./styles/parseCss");
var basicTemplateAstVisitor_1 = require("./templates/basicTemplateAstVisitor");
var recursiveAngularExpressionVisitor_1 = require("./templates/recursiveAngularExpressionVisitor");
var referenceCollectorVisitor_1 = require("./templates/referenceCollectorVisitor");
var templateParser_1 = require("./templates/templateParser");
var getDecoratorStringArgs = function (decorator) {
    var expression = decorator.expression;
    var args = ts.isCallExpression(expression) ? expression.arguments : ts.createNodeArray();
    return args.filter(ts.isStringLiteral).map(function (x) { return x.text; });
};
var getPosition = function (node) {
    var pos = 0;
    if (node) {
        pos = node.pos + 1;
        try {
            pos = node.getStart() + 1;
        }
        catch (_a) { }
    }
    return pos;
};
var NgWalker = (function (_super) {
    __extends(NgWalker, _super);
    function NgWalker(sourceFile, _originalOptions, _config, _metadataReader) {
        var _this = _super.call(this, sourceFile, _originalOptions) || this;
        _this._originalOptions = _originalOptions;
        _this._config = _config;
        _this._metadataReader = _metadataReader;
        _this._metadataReader = _this._metadataReader || ngWalkerFactoryUtils_1.ngWalkerFactoryUtils.defaultMetadataReader();
        _this._config = Object.assign({
            cssVisitorCtrl: basicCssAstVisitor_1.BasicCssAstVisitor,
            templateVisitorCtrl: basicTemplateAstVisitor_1.BasicTemplateAstVisitor,
            expressionVisitorCtrl: recursiveAngularExpressionVisitor_1.RecursiveAngularExpressionVisitor
        }, _this._config || {});
        return _this;
    }
    NgWalker.prototype.visitClassDeclaration = function (declaration) {
        if (this.hasClassName(declaration)) {
            var metadata = this._metadataReader.read(declaration);
            if (metadata instanceof metadata_1.ComponentMetadata) {
                this.visitNgComponent(metadata);
            }
            else if (metadata instanceof metadata_1.DirectiveMetadata) {
                this.visitNgDirective(metadata);
            }
            else if (metadata instanceof metadata_1.PipeMetadata) {
                this.visitNgPipe(metadata);
            }
            else if (metadata instanceof metadata_1.ModuleMetadata) {
                this.visitNgModule(metadata);
            }
            else if (metadata instanceof metadata_1.InjectableMetadata) {
                this.visitNgInjectable(metadata);
            }
        }
        utils_1.maybeNodeArray(ts.createNodeArray(declaration.decorators)).forEach(this.visitClassDecorator.bind(this));
        _super.prototype.visitClassDeclaration.call(this, declaration);
    };
    NgWalker.prototype.visitMethodDeclaration = function (method) {
        utils_1.maybeNodeArray(ts.createNodeArray(method.decorators)).forEach(this.visitMethodDecorator.bind(this));
        _super.prototype.visitMethodDeclaration.call(this, method);
    };
    NgWalker.prototype.visitPropertyDeclaration = function (prop) {
        utils_1.maybeNodeArray(ts.createNodeArray(prop.decorators)).forEach(this.visitPropertyDecorator.bind(this));
        _super.prototype.visitPropertyDeclaration.call(this, prop);
    };
    NgWalker.prototype.visitMethodDecorator = function (decorator) {
        var name = utils_1.getDecoratorName(decorator);
        if (name === 'HostListener') {
            this.visitNgHostListener(decorator.parent, decorator, getDecoratorStringArgs(decorator));
        }
    };
    NgWalker.prototype.visitPropertyDecorator = function (decorator) {
        var name = utils_1.getDecoratorName(decorator);
        switch (name) {
            case 'Input':
                this.visitNgInput(decorator.parent, decorator, getDecoratorStringArgs(decorator));
                break;
            case 'Output':
                this.visitNgOutput(decorator.parent, decorator, getDecoratorStringArgs(decorator));
                break;
            case 'HostBinding':
                this.visitNgHostBinding(decorator.parent, decorator, getDecoratorStringArgs(decorator));
                break;
            case 'ContentChild':
                this.visitNgContentChild(decorator.parent, decorator, getDecoratorStringArgs(decorator));
                break;
            case 'ContentChildren':
                this.visitNgContentChildren(decorator.parent, decorator, getDecoratorStringArgs(decorator));
                break;
            case 'ViewChild':
                this.visitNgViewChild(decorator.parent, decorator, getDecoratorStringArgs(decorator));
                break;
            case 'ViewChildren':
                this.visitNgViewChildren(decorator.parent, decorator, getDecoratorStringArgs(decorator));
                break;
        }
    };
    NgWalker.prototype.visitNgComponent = function (metadata) {
        var _a = metadata.styles, styles = _a === void 0 ? [] : _a;
        for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
            var style = styles_1[_i];
            try {
                var cssAst = parseCss_1.parseCss(style.style.code);
                this.visitNgStyleHelper(cssAst, metadata, style, getPosition(style.node));
            }
            catch (e) {
                var name_1 = metadata.controller.name;
                var text = name_1 && ts.isIdentifier(name_1) ? name_1.text : '';
                logger_1.logger.error('Cannot parse the styles of', text, e);
            }
        }
        var template = metadata.template;
        if (template && template.template) {
            try {
                var templateAst = templateParser_1.parseTemplate(template.template.code, config_1.Config.predefinedDirectives);
                this.visitNgTemplateHelper(templateAst, metadata, getPosition(template.node));
            }
            catch (e) {
                var name_2 = metadata.controller.name;
                var text = name_2 && ts.isIdentifier(name_2) ? name_2.text : '';
                logger_1.logger.error('Cannot parse the template of', text, e);
            }
        }
    };
    NgWalker.prototype.visitClassDecorator = function (decorator) { };
    NgWalker.prototype.visitNgModule = function (metadata) { };
    NgWalker.prototype.visitNgDirective = function (metadata) { };
    NgWalker.prototype.visitNgPipe = function (metadata) { };
    NgWalker.prototype.visitNgInjectable = function (metadata) { };
    NgWalker.prototype.visitNgInput = function (property, input, args) { };
    NgWalker.prototype.visitNgOutput = function (property, output, args) { };
    NgWalker.prototype.visitNgHostBinding = function (property, decorator, args) { };
    NgWalker.prototype.visitNgHostListener = function (method, decorator, args) { };
    NgWalker.prototype.visitNgContentChild = function (property, input, args) { };
    NgWalker.prototype.visitNgContentChildren = function (property, input, args) { };
    NgWalker.prototype.visitNgViewChild = function (property, input, args) { };
    NgWalker.prototype.visitNgViewChildren = function (property, input, args) { };
    NgWalker.prototype.visitNgTemplateHelper = function (roots, context, baseStart) {
        var _this = this;
        if (!roots || !roots.length) {
            return;
        }
        var sourceFile = this.getContextSourceFile(context.template.url, context.template.template.source);
        var referenceVisitor = new referenceCollectorVisitor_1.ReferenceCollectorVisitor();
        var visitor = new this._config.templateVisitorCtrl(sourceFile, this._originalOptions, context, baseStart, this._config.expressionVisitorCtrl);
        compiler.templateVisitAll(referenceVisitor, roots, null);
        visitor._variables = referenceVisitor.variables;
        roots.forEach(function (r) { return visitor.visit(r, context.controller); });
        visitor.getFailures().forEach(function (f) { return _this.addFailure(f); });
    };
    NgWalker.prototype.visitNgStyleHelper = function (style, context, styleMetadata, baseStart) {
        var _this = this;
        if (!style) {
            return;
        }
        var sourceFile = this.getContextSourceFile(styleMetadata.url, styleMetadata.style.source);
        var visitor = new this._config.cssVisitorCtrl(sourceFile, this._originalOptions, context, styleMetadata, baseStart);
        style.visit(visitor);
        visitor.getFailures().forEach(function (f) { return _this.addFailure(f); });
    };
    NgWalker.prototype.getContextSourceFile = function (path, content) {
        if (!path) {
            return this.getSourceFile();
        }
        var sf = ts.createSourceFile(path, "`" + content + "`", ts.ScriptTarget.ES5);
        var original = sf.getFullText;
        sf.getFullText = function () {
            var text = original.apply(sf);
            return text.substring(1, text.length - 1);
        };
        return sf;
    };
    NgWalker.prototype.hasClassName = function (node) {
        return (ts.isDecorator(node) && utils_1.getClassName(node.parent)) || (ts.isClassDeclaration(node) && utils_1.getClassName(node));
    };
    return NgWalker;
}(Lint.RuleWalker));
exports.NgWalker = NgWalker;

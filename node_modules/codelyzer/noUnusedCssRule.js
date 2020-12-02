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
var compiler_1 = require("@angular/compiler");
var Lint = require("tslint");
var ngWalker_1 = require("./angular/ngWalker");
var basicCssAstVisitor_1 = require("./angular/styles/basicCssAstVisitor");
var basicTemplateAstVisitor_1 = require("./angular/templates/basicTemplateAstVisitor");
var templateParser_1 = require("./angular/templates/templateParser");
var logger_1 = require("./util/logger");
var ngVersion_1 = require("./util/ngVersion");
var utils_1 = require("./util/utils");
var CssSelectorTokenizer = require('css-selector-tokenizer');
var isEncapsulationEnabled = function (encapsulation) {
    if (!encapsulation) {
        return true;
    }
    if (utils_1.getSymbolName(encapsulation) !== 'ViewEncapsulation') {
        return false;
    }
    var encapsulationType = encapsulation.name.text;
    return /^(Emulated|Native)$/.test(encapsulationType);
};
var lang = require('cssauron')({
    tag: function (node) {
        return (node.name || '').toLowerCase();
    },
    contents: function (node) {
        return '';
    },
    id: function (node) {
        return this.attr(node, 'id');
    },
    class: function (node) {
        var classBindings = (node.inputs || [])
            .filter(function (b) { return b.type === 2; })
            .map(function (b) { return b.name; })
            .join(' ');
        var classAttr = node.attrs.find(function (a) { return a.name.toLowerCase() === 'class'; });
        return classAttr ? classAttr.value + " " + classBindings : classBindings;
    },
    parent: function (node) {
        return node.parentNode;
    },
    children: function (node) {
        return node.children;
    },
    attr: function (node, attr) {
        var targetAttr = node.attrs.find(function (a) { return a.name === attr; });
        return targetAttr ? targetAttr.value : undefined;
    }
});
var ElementVisitor = (function (_super) {
    __extends(ElementVisitor, _super);
    function ElementVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementVisitor.prototype.visitElement = function (ast, fn) {
        var _this = this;
        fn(ast);
        ast.children.forEach(function (c) {
            if (c instanceof compiler_1.ElementAst) {
                c.parentNode = ast;
            }
            _this.visit(c, fn);
        });
    };
    return ElementVisitor;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var hasSelector = function (s, type) {
    if (!s) {
        return false;
    }
    return s.type === 'selector' || s.type === 'selectors' ? (s.nodes || []).some(function (n) { return hasSelector(n, type); }) : s.type === type;
};
var dynamicFilters = {
    id: function (ast) {
        return (ast.inputs || []).some(function (i) { return i.name === 'id'; });
    },
    attribute: function (ast) {
        return (ast.inputs || []).some(function (i) { return i.type === 1; });
    },
    class: function (ast) {
        return (ast.inputs || []).some(function (i) { return i.name === 'className' || i.name === 'ngClass'; });
    }
};
var ElementFilterVisitor = (function (_super) {
    __extends(ElementFilterVisitor, _super);
    function ElementFilterVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElementFilterVisitor.prototype.shouldVisit = function (ast, strategies, selectorTypes) {
        var _this = this;
        return (Object.keys(strategies).every(function (s) {
            var strategy = strategies[s];
            return !selectorTypes[s] || !strategy(ast);
        }) &&
            (ast.children || []).every(function (c) {
                return (ast instanceof compiler_1.ElementAst && _this.shouldVisit(c, strategies, selectorTypes)) ||
                    (ast instanceof compiler_1.EmbeddedTemplateAst &&
                        (ast.children || []).every(function (c) { return _this.shouldVisit(c, strategies, selectorTypes); }));
            }));
    };
    return ElementFilterVisitor;
}(basicTemplateAstVisitor_1.BasicTemplateAstVisitor));
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walkerConfig = { cssVisitorCtrl: CssVisitorCtrl };
        var walker = new Walker(sourceFile, this.getOptions(), walkerConfig);
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: 'no-unused-css',
        type: 'maintainability',
        description: "Disallows having an unused CSS rule in the component's stylesheet.",
        options: null,
        optionsDescription: 'Not configurable.',
        typescriptOnly: true,
        hasFix: true
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var CssVisitorCtrl = (function (_super) {
    __extends(CssVisitorCtrl, _super);
    function CssVisitorCtrl(sourceFile, originalOptions, context, style, templateStart) {
        var _this = _super.call(this, sourceFile, originalOptions, context, style, templateStart) || this;
        _this.style = style;
        return _this;
    }
    CssVisitorCtrl.prototype.visitCssSelectorRule = function (ast) {
        var _this = this;
        try {
            var match = ast.selectors.some(function (s) { return _this.visitCssSelector(s); });
            if (!match) {
                var endOffset = ast.end.offset, startOffset = ast.start.offset;
                var length_1 = endOffset - startOffset + 1;
                this.addFailureAt(startOffset, length_1, 'Unused styles', Lint.Replacement.deleteText(startOffset - 1, length_1 + 1));
            }
        }
        catch (e) {
            logger_1.logger.error(e);
        }
        return true;
    };
    CssVisitorCtrl.prototype.visitCssSelector = function (ast) {
        var parts = [];
        for (var i = 0; i < ast.selectorParts.length; i += 1) {
            var c = ast.selectorParts[i];
            c.strValue = c.strValue.split('::').shift();
            if (c.strValue.endsWith('/') || c.strValue.endsWith('>')) {
                parts.push(c.strValue);
                break;
            }
            else if (!c.strValue.startsWith(':')) {
                parts.push(c.strValue);
            }
        }
        if (!parts.length || !this.templateAst) {
            return true;
        }
        var strippedSelector = parts.map(function (s) { return s.replace(/\/|>$/, '').trim(); }).join(' ');
        var elementFilterVisitor = new ElementFilterVisitor(this.getSourceFile(), this._originalOptions, this.context, 0);
        var tokenized = CssSelectorTokenizer.parse(strippedSelector);
        var selectorTypesCache = Object.keys(dynamicFilters).reduce(function (a, key) {
            a[key] = hasSelector(tokenized, key);
            return a;
        }, {});
        if (!elementFilterVisitor.shouldVisit(this.templateAst, dynamicFilters, selectorTypesCache)) {
            return true;
        }
        var matchFound = false;
        var selector = function (element) {
            if (lang(strippedSelector)(element)) {
                matchFound = true;
                return true;
            }
            return false;
        };
        var visitor = new ElementVisitor(this.getSourceFile(), this._originalOptions, this.context, 0);
        visitor.visit(this.templateAst, selector);
        return matchFound;
    };
    return CssVisitorCtrl;
}(basicCssAstVisitor_1.BasicCssAstVisitor));
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitClassDeclaration = function (declaration) {
        var _this = this;
        var d = utils_1.getComponentDecorator(declaration);
        if (d) {
            var meta_1 = this._metadataReader.read(declaration);
            this.visitNgComponent(meta_1);
            if (meta_1.template && meta_1.template.template) {
                try {
                    var ElementAstCtr_1 = compiler_1.ElementAst;
                    ngVersion_1.SemVerDSL.gte('4.0.0-beta.8', function () {
                        _this.templateAst = new ElementAstCtr_1('*', [], [], [], [], [], [], false, [], templateParser_1.parseTemplate(meta_1.template.template.code), 0, null, null);
                    }).else(function () {
                        _this.templateAst = new ElementAstCtr_1('*', [], [], [], [], [], [], false, templateParser_1.parseTemplate(meta_1.template.template.code), 0, null, null);
                    });
                }
                catch (e) {
                    logger_1.logger.error('Cannot parse the template', e);
                }
            }
        }
        _super.prototype.visitClassDeclaration.call(this, declaration);
    };
    Walker.prototype.visitNgStyleHelper = function (style, context, styleMetadata, baseStart) {
        this.validateStyles(style, context, styleMetadata, baseStart);
        _super.prototype.visitNgStyleHelper.call(this, style, context, styleMetadata, baseStart);
    };
    Walker.prototype.validateStyles = function (style, context, styleMetadata, baseStart) {
        var _this = this;
        if (!style) {
            return;
        }
        var file = this.getContextSourceFile(styleMetadata.url, styleMetadata.style.source);
        var visitor = new CssVisitorCtrl(file, this._originalOptions, context, styleMetadata, baseStart);
        visitor.templateAst = this.templateAst;
        var d = utils_1.getComponentDecorator(context.controller);
        var encapsulation = utils_1.getDecoratorPropertyInitializer(d, 'encapsulation');
        if (isEncapsulationEnabled(encapsulation)) {
            style.visit(visitor);
            visitor.getFailures().forEach(function (f) { return _this.addFailure(f); });
        }
    };
    return Walker;
}(ngWalker_1.NgWalker));

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
var lib_1 = require("tslint/lib");
var ts = require("typescript");
var ngWalker_1 = require("./angular/ngWalker");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new Walker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        description: "The ./ prefix is standard syntax for relative URLs; don't depend on Angular's current ability to do without that prefix.",
        descriptionDetails: 'See more at https://angular.io/styleguide#style-05-04.',
        rationale: 'A component relative URL requires no change when you move the component files, as long as the files stay together.',
        ruleName: 'relative-url-prefix',
        options: null,
        optionsDescription: 'Not configurable.',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'The ./ prefix is standard syntax for relative URLs. (https://angular.io/styleguide#style-05-04)';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker(sourceFile, options) {
        return _super.call(this, sourceFile, options) || this;
    }
    Walker.prototype.visitClassDecorator = function (decorator) {
        var _this = this;
        if (ts.isCallExpression(decorator.expression) && decorator.expression.arguments) {
            decorator.expression.arguments.forEach(function (arg) {
                if (ts.isObjectLiteralExpression(arg) && arg.properties) {
                    arg.properties.forEach(function (prop) {
                        if (prop && prop.name.text === 'templateUrl') {
                            var url = prop.initializer.text;
                            _this.checkTemplateUrl(url, prop.initializer);
                        }
                        else if (prop && prop.name.text === 'styleUrls') {
                            if (prop.initializer.elements.length > 0) {
                                prop.initializer.elements.forEach(function (e) {
                                    _this.checkStyleUrls(e);
                                });
                            }
                        }
                    });
                }
            });
        }
        _super.prototype.visitClassDecorator.call(this, decorator);
    };
    Walker.prototype.checkTemplateUrl = function (url, initializer) {
        if (url && !/^\.\/[^\.\/|\.\.\/]/.test(url)) {
            this.addFailureAtNode(initializer, Rule.FAILURE_STRING);
        }
    };
    Walker.prototype.checkStyleUrls = function (token) {
        if (token && token.text) {
            if (!/^\.\/[^\.\/|\.\.\/]/.test(token.text)) {
                this.addFailureAtNode(token, Rule.FAILURE_STRING);
            }
        }
    };
    return Walker;
}(ngWalker_1.NgWalker));

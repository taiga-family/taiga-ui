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
var rules_1 = require("tslint/lib/rules");
var typescript_1 = require("typescript/lib/typescript");
var ngWalker_1 = require("./angular/ngWalker");
var utils_1 = require("./util/utils");
var NONE = 'None';
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
        description: "Disallows using ViewEncapsulation." + NONE + ".",
        options: null,
        optionsDescription: 'Not configurable.',
        ruleName: 'use-component-view-encapsulation',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Using ViewEncapsulation." + NONE + " makes your styles global, which may have an unintended effect";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgComponent = function (metadata) {
        this.validateComponent(metadata);
        _super.prototype.visitNgComponent.call(this, metadata);
    };
    Walker.prototype.validateComponent = function (metadata) {
        var encapsulationExpression = utils_1.getDecoratorPropertyInitializer(metadata.decorator, 'encapsulation');
        if (!encapsulationExpression || (typescript_1.isPropertyAccessExpression(encapsulationExpression) && encapsulationExpression.name.text !== NONE)) {
            return;
        }
        this.addFailureAtNode(encapsulationExpression, Rule.FAILURE_STRING);
    };
    return Walker;
}(ngWalker_1.NgWalker));

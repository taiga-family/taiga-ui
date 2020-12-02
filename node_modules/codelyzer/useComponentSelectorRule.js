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
var sprintf_js_1 = require("sprintf-js");
var rules_1 = require("tslint/lib/rules");
var ngWalker_1 = require("./angular/ngWalker");
exports.getFailureMessage = function (failureParameters) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, failureParameters.className);
};
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
        description: 'Component selector must be declared.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Omit the component selector makes debugging difficult.',
        ruleName: 'use-component-selector',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'The selector of the component "%s" is mandatory';
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
        var metadataDecorator = metadata.decorator, controllerName = metadata.controller.name, metadataSelector = metadata.selector;
        if (metadataSelector || !controllerName)
            return;
        var failure = exports.getFailureMessage({ className: controllerName.text });
        this.addFailureAtNode(metadataDecorator, failure);
    };
    return Walker;
}(ngWalker_1.NgWalker));

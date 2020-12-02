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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var typescript_1 = require("typescript/lib/typescript");
var ngWalker_1 = require("./angular/ngWalker");
var utils_2 = require("./util/utils");
var ON_PUSH = 'OnPush';
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
        description: "Enforces component's change detection to ChangeDetectionStrategy." + ON_PUSH + ".",
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      By default Angular uses the ChangeDetectionStrategy.Default.\n\n      This strategy doesn\u2019t assume anything about the application, therefore every time something changes in our application, as a result of various user events, timers, XHR, promises, etc., a change detection will run on all components.\n\n      By using ChangeDetectionStrategy.", ", Angular will only run the change detection cycle in the following cases:\n      * Inputs references change.\n      * An event originated from the component or one of its children.\n      * If manually called.\n    "], ["\n      By default Angular uses the ChangeDetectionStrategy.Default.\n\n      This strategy doesn\u2019t assume anything about the application, therefore every time something changes in our application, as a result of various user events, timers, XHR, promises, etc., a change detection will run on all components.\n\n      By using ChangeDetectionStrategy.", ", Angular will only run the change detection cycle in the following cases:\n      * Inputs references change.\n      * An event originated from the component or one of its children.\n      * If manually called.\n    "])), ON_PUSH),
        ruleName: 'prefer-on-push-component-change-detection',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "The changeDetection value of a component should be set to ChangeDetectionStrategy." + ON_PUSH;
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
        var metadataDecorator = metadata.decorator;
        var changeDetectionExpression = utils_2.getDecoratorPropertyInitializer(metadataDecorator, 'changeDetection');
        if (!changeDetectionExpression) {
            this.addFailureAtNode(metadataDecorator, Rule.FAILURE_STRING);
        }
        else if (typescript_1.isPropertyAccessExpression(changeDetectionExpression) && changeDetectionExpression.name.text !== ON_PUSH) {
            this.addFailureAtNode(changeDetectionExpression, Rule.FAILURE_STRING);
        }
    };
    return Walker;
}(ngWalker_1.NgWalker));
var templateObject_1;

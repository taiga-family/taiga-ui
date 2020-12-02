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
var Lint = require("tslint");
var ngWalker_1 = require("./angular/ngWalker");
var utils_1 = require("./util/utils");
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
        description: 'Name events without the prefix on.',
        descriptionDetails: 'See more at https://angular.io/guide/styleguide#dont-prefix-output-properties.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Angular allows for an alternative syntax on-*. If the event itself was prefixed with on this would result in an on-onEvent binding expression.',
        ruleName: 'no-output-on-prefix',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'In the class "%s", the output property "%s" should not be prefixed with on';
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgOutput = function (property, output, args) {
        this.validateOutput(property);
        _super.prototype.visitNgOutput.call(this, property, output, args);
    };
    Walker.prototype.validateOutput = function (property) {
        var className = utils_1.getClassName(property);
        var memberName = property.name.getText();
        if (!memberName || !/^on((?![a-z])|(?=$))/.test(memberName)) {
            return;
        }
        var failure = sprintf_js_1.sprintf(Rule.FAILURE_STRING, className, memberName);
        this.addFailureAtNode(property, failure);
    };
    return Walker;
}(ngWalker_1.NgWalker));

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
var typescript_1 = require("typescript");
var ngWalker_1 = require("./angular/ngWalker");
var utils_1 = require("./util/utils");
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
        description: 'Disallows the declaration of impure pipes.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Impure pipes should be avoided because they are invoked on each change-detection cycle.',
        ruleName: 'no-pipe-impure',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = 'Impure pipe declared in class %s';
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgPipe = function (metadata) {
        this.validatePipe(metadata);
        _super.prototype.visitNgPipe.call(this, metadata);
    };
    Walker.prototype.validatePipe = function (metadata) {
        if (!metadata.pure || metadata.pure.kind !== typescript_1.SyntaxKind.FalseKeyword)
            return;
        var className = utils_1.getClassName(metadata.controller);
        var failure = exports.getFailureMessage({ className: className });
        this.addFailureAtNode(metadata.pure, failure);
    };
    return Walker;
}(ngWalker_1.NgWalker));

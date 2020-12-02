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
        description: "Enforces classes decorated with @Injectable to use the 'providedIn' property.",
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: "Using the 'providedIn' property makes classes decorated with @Injectable tree shakeable.",
        ruleName: 'use-injectable-provided-in',
        type: 'functionality',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Classes decorated with @Injectable should use the 'providedIn' property";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgInjectable = function (metadata) {
        this.validateInjectable(metadata);
        _super.prototype.visitNgInjectable.call(this, metadata);
    };
    Walker.prototype.validateInjectable = function (metadata) {
        if (metadata.providedIn)
            return;
        this.addFailureAtNode(metadata.decorator, Rule.FAILURE_STRING);
    };
    return Walker;
}(ngWalker_1.NgWalker));

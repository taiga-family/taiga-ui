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
        description: 'Disallows renaming directive outputs by providing a string to the decorator.',
        descriptionDetails: 'See more at https://angular.io/styleguide#style-05-13.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Two names for the same property (one private, one public) is inherently confusing.',
        ruleName: 'no-output-rename',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = '@Outputs should not be renamed';
    return Rule;
}(lib_1.Rules.AbstractRule));
exports.Rule = Rule;
exports.getFailureMessage = function () {
    return Rule.FAILURE_STRING;
};
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgDirective = function (metadata) {
        this.directiveSelectors = new Set((metadata.selector || '').replace(/[\[\]\s]/g, '').split(','));
        _super.prototype.visitNgDirective.call(this, metadata);
    };
    Walker.prototype.visitNgOutput = function (property, output, args) {
        this.validateOutput(property, output, args);
        _super.prototype.visitNgOutput.call(this, property, output, args);
    };
    Walker.prototype.canPropertyBeAliased = function (propertyAlias, propertyName) {
        return !!(this.directiveSelectors && this.directiveSelectors.has(propertyAlias) && propertyAlias !== propertyName);
    };
    Walker.prototype.validateOutput = function (property, output, args) {
        var propertyName = property.name.getText();
        if (args.length === 0 || this.canPropertyBeAliased(args[0], propertyName)) {
            return;
        }
        this.addFailureAtNode(property, exports.getFailureMessage());
    };
    return Walker;
}(ngWalker_1.NgWalker));

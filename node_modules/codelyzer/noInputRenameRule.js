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
var sprintf_js_1 = require("sprintf-js");
var rules_1 = require("tslint/lib/rules");
var utils_1 = require("tslint/lib/utils");
var ngWalker_1 = require("./angular/ngWalker");
var utils_2 = require("./util/utils");
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
        description: 'Disallows renaming directive inputs by providing a string to the decorator.',
        descriptionDetails: 'See more at https://angular.io/styleguide#style-05-13.',
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: 'Two names for the same property (one private, one public) is inherently confusing.',
        ruleName: 'no-input-rename',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    In the class \"%s\", the directive input property \"%s\" should not be renamed.\n    However, you should use an alias when the directive name is also an input property, and the directive name\n    doesn't describe the property. In this last case, you can disable this rule with `tslint:disable-next-line:no-input-rename`.\n  "], ["\n    In the class \"%s\", the directive input property \"%s\" should not be renamed.\n    However, you should use an alias when the directive name is also an input property, and the directive name\n    doesn't describe the property. In this last case, you can disable this rule with \\`tslint:disable-next-line:no-input-rename\\`.\n  "])));
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
exports.getFailureMessage = function (className, propertyName) {
    return sprintf_js_1.sprintf(Rule.FAILURE_STRING, className, propertyName);
};
var whiteListAliases = new Set([
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-disabled',
    'aria-dragged',
    'aria-dropeffect',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext'
]);
var Walker = (function (_super) {
    __extends(Walker, _super);
    function Walker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Walker.prototype.visitNgDirective = function (metadata) {
        this.directiveSelectors = Array.from(new Set((metadata.selector || '').replace(/[\[\]\s]/g, '').split(',')));
        _super.prototype.visitNgDirective.call(this, metadata);
    };
    Walker.prototype.visitNgInput = function (property, input, args) {
        this.validateInput(property, args);
        _super.prototype.visitNgInput.call(this, property, input, args);
    };
    Walker.prototype.canPropertyBeAliased = function (propertyAlias, propertyName) {
        return !!((propertyAlias !== propertyName &&
            this.directiveSelectors &&
            this.directiveSelectors.some(function (x) { return new RegExp("^" + x + "((" + utils_2.toTitleCase(propertyName) + "$)|(?=$))").test(propertyAlias); })) ||
            (whiteListAliases.has(propertyAlias) && propertyName === utils_2.kebabToCamelCase(propertyAlias)));
    };
    Walker.prototype.validateInput = function (property, args) {
        var className = utils_2.getClassName(property);
        var memberName = property.name.getText();
        if (args.length === 0 || this.canPropertyBeAliased(args[0], memberName))
            return;
        this.addFailureAtNode(property, exports.getFailureMessage(className, memberName));
    };
    return Walker;
}(ngWalker_1.NgWalker));
var templateObject_1;

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
var utils_1 = require("tslint/lib/utils");
var metadataPropertyBase_1 = require("./metadataPropertyBase");
var utils_2 = require("./util/utils");
var METADATA_PROPERTY_NAME = 'host';
var STYLE_GUIDE_LINK = 'https://angular.io/styleguide#style-06-03';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule(options) {
        return _super.call(this, {
            errorMessage: Rule.FAILURE_STRING,
            propertyName: METADATA_PROPERTY_NAME
        }, options) || this;
    }
    Rule.metadata = {
        description: "Disallows usage of the `" + METADATA_PROPERTY_NAME + "` metadata property.",
        descriptionDetails: "See more at " + STYLE_GUIDE_LINK + ".",
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      If you ever need to rename the property associated\n      with @", " or the method associated\n      with @", ", you can modify it in a single place.\n    "], ["\n      If you ever need to rename the property associated\n      with @", " or the method associated\n      with @", ", you can modify it in a single place.\n    "])), utils_2.AngularInnerClassDecorators.HostBinding, utils_2.AngularInnerClassDecorators.HostListener),
        ruleName: 'no-host-metadata-property',
        type: 'style',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = utils_1.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    Use @", " or\n    @", " rather than the `", "` metadata property (", ")\n  "], ["\n    Use @", " or\n    @", " rather than the \\`", "\\` metadata property (", ")\n  "])), utils_2.AngularInnerClassDecorators.HostBinding, utils_2.AngularInnerClassDecorators.HostListener, METADATA_PROPERTY_NAME, STYLE_GUIDE_LINK);
    return Rule;
}(metadataPropertyBase_1.MetadataPropertyBase));
exports.Rule = Rule;
var templateObject_1, templateObject_2;

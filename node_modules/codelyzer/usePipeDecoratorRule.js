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
var typescript_1 = require("typescript/lib/typescript");
var utils_2 = require("./util/utils");
var PIPE_TRANSFORM = 'PipeTransform';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        description: utils_1.dedent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      Ensures that classes implementing ", " interface\n      use @", " decorator.\n    "], ["\n      Ensures that classes implementing ", " interface\n      use @", " decorator.\n    "])), PIPE_TRANSFORM, utils_2.AngularClassDecorators.Pipe),
        options: null,
        optionsDescription: 'Not configurable.',
        ruleName: 'use-pipe-decorator',
        type: 'maintainability',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = utils_1.dedent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    Classes that implement the ", " interface should be decorated\n    with @", "\n  "], ["\n    Classes that implement the ", " interface should be decorated\n    with @", "\n  "])), PIPE_TRANSFORM, utils_2.AngularClassDecorators.Pipe);
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var validateClassDeclaration = function (context, node) {
    if (utils_2.getPipeDecorator(node) || !utils_2.getDeclaredInterfaceName(node, PIPE_TRANSFORM))
        return;
    context.addFailureAtNode(node, sprintf_js_1.sprintf(Rule.FAILURE_STRING));
};
var walk = function (context) {
    var sourceFile = context.sourceFile;
    var callback = function (node) {
        if (typescript_1.isClassDeclaration(node))
            validateClassDeclaration(context, node);
        typescript_1.forEachChild(node, callback);
    };
    typescript_1.forEachChild(sourceFile, callback);
};
var templateObject_1, templateObject_2;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Lint = require("tslint");
var createNoStringParameterToFunctionWalker_1 = require("./utils/createNoStringParameterToFunctionWalker");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithProgram(sourceFile, undefined);
    };
    Rule.prototype.applyWithProgram = function (sourceFile, program) {
        return this.applyWithFunction(sourceFile, createNoStringParameterToFunctionWalker_1.createNoStringParameterToFunctionWalker('setInterval', this.getOptions(), program));
    };
    Rule.metadata = {
        ruleName: 'no-string-based-set-interval',
        type: 'maintainability',
        description: 'Do not use the version of setInterval that accepts code as a string argument.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '95, 676, 242, 116'
    };
    return Rule;
}(Lint.Rules.OptionallyTypedRule));
exports.Rule = Rule;
//# sourceMappingURL=noStringBasedSetIntervalRule.js.map
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
var FAILURE_STRING_EMPTY = 'This file is empty and should be deleted.';
var FAILURE_STRING_COMMENTS = 'This file only contains comments and should be deleted.';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var ruleFailures = [];
        var fileContent = sourceFile.getFullText().trim();
        var fileContentNoComments = sourceFile.getText().trim();
        if (fileContent.length === 0) {
            ruleFailures.push(new Lint.RuleFailure(sourceFile, 0, 0, FAILURE_STRING_EMPTY, this.getOptions().ruleName));
        }
        else if (fileContentNoComments.length === 0) {
            ruleFailures.push(new Lint.RuleFailure(sourceFile, 0, 0, FAILURE_STRING_COMMENTS, this.getOptions().ruleName));
        }
        return ruleFailures;
    };
    Rule.metadata = {
        ruleName: 'no-useless-files',
        type: 'maintainability',
        description: 'Locates files that only contain commented out code, whitespace characters, or have no content',
        options: null,
        optionsDescription: '',
        typescriptOnly: false,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '398'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
//# sourceMappingURL=noUselessFilesRule.js.map
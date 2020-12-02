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
var BannedTermWalker_1 = require("./utils/BannedTermWalker");
var TypeGuard_1 = require("./utils/TypeGuard");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, BannedTermWalker_1.bannedTermWalker, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var allowQuotedProperties = false;
        if (options.ruleArguments instanceof Array) {
            options.ruleArguments.forEach(function (opt) {
                if (TypeGuard_1.isObject(opt)) {
                    allowQuotedProperties = opt['allow-quoted-properties'] === true;
                }
            });
        }
        return {
            failureString: Rule.FAILURE_STRING,
            bannedTerms: Rule.BANNED_TERMS,
            allowQuotedProperties: allowQuotedProperties
        };
    };
    Rule.metadata = {
        ruleName: 'no-banned-terms',
        type: 'maintainability',
        description: 'Do not use banned terms: caller, callee, eval, arguments.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '676, 242, 116'
    };
    Rule.FAILURE_STRING = 'Forbidden reference to banned term: ';
    Rule.BANNED_TERMS = ['caller', 'callee', 'arguments', 'eval'];
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
//# sourceMappingURL=noBannedTermsRule.js.map
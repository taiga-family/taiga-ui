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
        if (Rule.isWarningShown === false) {
            console.warn('Warning: no-reserved-keywords rule is deprecated. Replace your usage with the TSLint variable-name rule.');
            Rule.isWarningShown = true;
        }
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
        ruleName: 'no-reserved-keywords',
        type: 'maintainability',
        description: 'Do not use reserved keywords as names of local variables, fields, functions, or other identifiers.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        recommendation: 'false',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Deprecated',
        commonWeaknessEnumeration: '398'
    };
    Rule.FAILURE_STRING = 'Forbidden reference to reserved keyword: ';
    Rule.BANNED_TERMS = [
        'break',
        'case',
        'catch',
        'class',
        'const',
        'continue',
        'debugger',
        'default',
        'delete',
        'do',
        'else',
        'enum',
        'export',
        'extends',
        'false',
        'finally',
        'for',
        'function',
        'if',
        'import',
        'in',
        'instanceof',
        'new',
        'null',
        'return',
        'super',
        'switch',
        'this',
        'throw',
        'true',
        'try',
        'typeof',
        'var',
        'void',
        'while',
        'with',
        'as',
        'implements',
        'interface',
        'let',
        'package',
        'private',
        'protected',
        'public',
        'static',
        'yield',
        'any',
        'boolean',
        'constructor',
        'declare',
        'get',
        'module',
        'require',
        'number',
        'set',
        'string',
        'symbol',
        'type',
        'from',
        'of'
    ];
    Rule.isWarningShown = false;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
//# sourceMappingURL=noReservedKeywordsRule.js.map
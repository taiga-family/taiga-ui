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
var ts = require("typescript");
var Lint = require("tslint");
var tsutils = require("tsutils");
var OPTION_ALLOW_SIBLINGS = 'allow-siblings';
var FAILURE_BODY_RELATIVE = 'module is being loaded from a relative path. Please use an absolute path';
var FAILURE_BODY_SIBLINGS = 'module path starts with reference to parent directory. Please use an absolute path or sibling files/folders';
var FAILURE_BODY_INSIDE = 'module path should not contain reference to current or parent directory inside';
var illegalInsideRegex = /(\/|\\)\.\.?\1/;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        return {
            allowSiblings: options.ruleArguments.indexOf(OPTION_ALLOW_SIBLINGS) > -1
        };
    };
    Rule.metadata = {
        ruleName: 'no-relative-imports',
        type: 'maintainability',
        description: 'Do not use relative paths when importing external modules or ES6 import declarations',
        options: {
            type: 'array',
            items: {
                type: 'string',
                enum: [OPTION_ALLOW_SIBLINGS]
            },
            minLength: 0,
            maxLength: 1
        },
        optionsDescription: "One argument may be optionally provided: \n\n' +\n            '* `" + OPTION_ALLOW_SIBLINGS + "` allows relative imports for files in the same or nested folders.",
        typescriptOnly: false,
        issueClass: 'Ignored',
        issueType: 'Warning',
        severity: 'Low',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var allowSiblings = ctx.options.allowSiblings;
    function getValidationErrorBody(expression) {
        if (tsutils.isStringLiteral(expression)) {
            var path = expression.text;
            if (!allowSiblings && path[0] === '.') {
                return FAILURE_BODY_RELATIVE;
            }
            if (allowSiblings && path.indexOf('..') === 0) {
                return FAILURE_BODY_SIBLINGS;
            }
            if (illegalInsideRegex.test(path)) {
                return FAILURE_BODY_INSIDE;
            }
        }
        return undefined;
    }
    function cb(node) {
        if (tsutils.isExternalModuleReference(node)) {
            var errorBody = getValidationErrorBody(node.expression);
            if (errorBody !== undefined) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), "External " + errorBody + ": " + node.getText());
            }
        }
        else if (tsutils.isImportDeclaration(node)) {
            var errorBody = getValidationErrorBody(node.moduleSpecifier);
            if (errorBody !== undefined) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), "Imported " + errorBody + ": " + node.getText());
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noRelativeImportsRule.js.map
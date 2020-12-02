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
var JsxAttribute_1 = require("./utils/JsxAttribute");
var ROLE_SCHEMA = require('./utils/attributes/roleSchema.json');
var ROLES = ROLE_SCHEMA.roles;
var VALID_ROLES = Object.keys(ROLES).filter(function (role) { return ROLES[role].isAbstract === false; });
function getFailureStringUndefinedRole() {
    return ("'role' attribute empty. Either select a role from https://www.w3.org/TR/wai-aria-1.1/#role_definitions, " +
        'or simply remove this attribute');
}
exports.getFailureStringUndefinedRole = getFailureStringUndefinedRole;
function getFailureStringInvalidRole(invalidRoleName) {
    return "Invalid role attribute value '" + invalidRoleName + "', elements with ARIA roles must use a valid, non-abstract ARIA role. A reference to role definitions can be found at https://www.w3.org/TR/wai-aria-1.1/#role_definitions.";
}
exports.getFailureStringInvalidRole = getFailureStringInvalidRole;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-role',
        type: 'maintainability',
        description: 'Elements with aria roles must use a **valid**, **non-abstract** aria role. ' +
            'A reference to role definitions can be found at [WAI-ARIA roles](https://www.w3.org/TR/wai-aria-1.1/#role_definitions).',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/92\">WCAG Rule 92: Role value must be valid</a></li>\n        </ul>",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Important',
        level: 'Opportunity for Excellence',
        group: 'Accessibility'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    function cb(node) {
        if (tsutils.isJsxAttribute(node)) {
            var name_1 = JsxAttribute_1.getPropName(node);
            if (!name_1 || name_1.toLowerCase() !== 'role') {
                return;
            }
            var roleValue = JsxAttribute_1.getStringLiteral(node);
            if (roleValue) {
                var normalizedValues = roleValue.toLowerCase().split(' ');
                if (normalizedValues.some(function (value) { return !!(value && VALID_ROLES.indexOf(value) === -1); })) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureStringInvalidRole(roleValue));
                }
            }
            else if (roleValue === '' || JsxAttribute_1.isEmpty(node)) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureStringUndefinedRole());
            }
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yRoleRule.js.map
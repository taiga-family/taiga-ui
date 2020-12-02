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
var getImplicitRole_1 = require("./utils/getImplicitRole");
var JsxAttribute_1 = require("./utils/JsxAttribute");
var ROLE_SCHEMA = require('./utils/attributes/roleSchema.json');
var ARIA_ATTRIBUTES = require('./utils/attributes/ariaSchema.json');
var ROLES = ROLE_SCHEMA.roles;
var ROLE_STRING = 'role';
function getFailureStringForNotImplicitRole(roleNamesInElement, invalidPropNames) {
    return "Attribute(s) " + invalidPropNames.join(', ') + " are not supported by role(s) " + roleNamesInElement.join(', ') + ". You are using incorrect role or incorrect aria-* attribute";
}
exports.getFailureStringForNotImplicitRole = getFailureStringForNotImplicitRole;
function getFailureStringForImplicitRole(tagName, roleName, invalidPropNames) {
    return "Attribute(s) " + invalidPropNames.join(', ') + " not supported by role " + roleName + " which is implicitly set by the HTML tag " + tagName + ".";
}
exports.getFailureStringForImplicitRole = getFailureStringForImplicitRole;
function getFailureStringForNoRole(tagName, invalidPropNames) {
    return "Attribute(s) " + invalidPropNames + " are not supported by no corresponding role. There is no corresponding role for the HTML tag " + tagName + ". A reference about no corresponding role: https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role.";
}
exports.getFailureStringForNoRole = getFailureStringForNoRole;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-role-supports-aria-props',
        type: 'maintainability',
        description: 'Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`. ' +
            'Many aria attributes (states and properties) can only be used on elements with particular roles. ' +
            "Some elements have implicit roles, such as `<a href='hrefValue' />`, which will be resolved to `role='link'`. " +
            'A reference for the implicit roles can be found at [Default Implicit ARIA Semantics](https://www.w3.org/TR/html-aria/#sec-strong-native-semantics).',
        rationale: "References:\n        <ul>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/87\">ARIA attributes can only be used with certain roles</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/84\">Check aria properties and states for valid roles and properties</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/93\">Check that 'ARIA-' attributes are valid properties and states</a></li>\n        </ul>",
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
    function checkJsxElement(node) {
        var attributesInElement = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        var roleProp = attributesInElement[ROLE_STRING];
        var roleValue;
        if (node.tagName.getText().match(/^[A-Z].*/)) {
            return;
        }
        if (roleProp !== undefined) {
            roleValue = JsxAttribute_1.getStringLiteral(roleProp);
            if (!JsxAttribute_1.isEmpty(roleProp) && roleValue === undefined) {
                return;
            }
        }
        else {
            roleValue = getImplicitRole_1.getImplicitRole(node);
        }
        var isImplicitRole = !roleProp && !!roleValue;
        var normalizedRoles = (roleValue || '')
            .toLowerCase()
            .split(' ')
            .filter(function (role) { return role in ROLES; });
        var supportedAttributeNames = ROLE_SCHEMA.globalSupportedProps;
        normalizedRoles.forEach(function (role) {
            supportedAttributeNames = supportedAttributeNames.concat(ROLES[role].additionalSupportedProps || []);
        });
        var attributeNamesInElement = Object.keys(attributesInElement).filter(function (attributeName) { return !!ARIA_ATTRIBUTES[attributeName.toLowerCase()]; });
        var invalidAttributeNamesInElement = attributeNamesInElement.filter(function (attributeName) { return supportedAttributeNames.indexOf(attributeName) === -1; });
        var failureString;
        if (normalizedRoles.length === 0) {
            failureString = getFailureStringForNoRole(node.tagName.getText(), invalidAttributeNamesInElement);
        }
        else if (isImplicitRole) {
            failureString = getFailureStringForImplicitRole(node.tagName.getText(), normalizedRoles[0], invalidAttributeNamesInElement);
        }
        else {
            failureString = getFailureStringForNotImplicitRole(normalizedRoles, invalidAttributeNamesInElement);
        }
        if (invalidAttributeNamesInElement.length > 0) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), failureString);
        }
    }
    function cb(node) {
        if (tsutils.isJsxElement(node)) {
            checkJsxElement(node.openingElement);
        }
        else if (tsutils.isJsxSelfClosingElement(node)) {
            checkJsxElement(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactA11yRoleSupportsAriaPropsRule.js.map
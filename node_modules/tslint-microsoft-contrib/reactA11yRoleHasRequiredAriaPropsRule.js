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
var ROLES_SCHEMA = require('./utils/attributes/roleSchema.json');
var ROLES = ROLES_SCHEMA.roles;
var ARIA_ATTRIBUTES = require('./utils/attributes/ariaSchema.json');
var ROLE_STRING = 'role';
var TAGS_WITH_ARIA_LEVEL = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
function getFailureStringForNotImplicitRole(roleNamesInElement, missingProps) {
    return "Element with ARIA role(s) '" + roleNamesInElement.join(', ') + "' are missing required attribute(s): " + missingProps.join(', ') + ". A reference to role definitions can be found at https://www.w3.org/TR/wai-aria-1.1/#role_definitions.";
}
exports.getFailureStringForNotImplicitRole = getFailureStringForNotImplicitRole;
function getFailureStringForImplicitRole(tagName, roleNamesInElement, missingProps) {
    return "Tag '" + tagName + "' has implicit role '" + roleNamesInElement + "'. It requires aria-* attributes: " + missingProps.join(', ') + " that are missing in the element. A reference to role definitions can be found at https://www.w3.org/TR/wai-aria-1.1/#role_definitions.";
}
exports.getFailureStringForImplicitRole = getFailureStringForImplicitRole;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-role-has-required-aria-props',
        type: 'maintainability',
        description: 'Elements with aria roles must have all required attributes according to the role.',
        rationale: "References:\n        <ul>\n          <li><a href=\"https://www.w3.org/TR/wai-aria-1.1/#role_definitions\">ARIA Definition of Roles</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/90\">WCAG Rule 90: Required properties and states should be defined</a></li>\n          <li><a href=\"http://oaa-accessibility.org/wcag20/rule/91\">WCAG Rule 91: Required properties and states must not be empty</a></li>\n        </ul>",
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
        var tagName = node.tagName.getText();
        var attributesInElement = JsxAttribute_1.getJsxAttributesFromJsxElement(node);
        var roleProp = attributesInElement[ROLE_STRING];
        var roleValue = roleProp ? JsxAttribute_1.getStringLiteral(roleProp) : getImplicitRole_1.getImplicitRole(node);
        var isImplicitRole = !roleProp && !!roleValue;
        var normalizedRoles = (roleValue || '')
            .toLowerCase()
            .split(' ')
            .filter(function (role) { return !!ROLES[role]; });
        if (normalizedRoles.length === 0) {
            return;
        }
        var requiredAttributeNames = [];
        normalizedRoles.forEach(function (role) {
            requiredAttributeNames = requiredAttributeNames.concat(ROLES[role].requiredProps || []);
        });
        var attributeNamesInElement = Object.keys(attributesInElement)
            .filter(function (attributeName) { return !!ARIA_ATTRIBUTES[attributeName.toLowerCase()]; })
            .concat(TAGS_WITH_ARIA_LEVEL.indexOf(tagName) === -1 ? [] : ['aria-level']);
        var missingAttributes = requiredAttributeNames.filter(function (attributeName) { return attributeNamesInElement.indexOf(attributeName) === -1; });
        if (missingAttributes.length > 0) {
            ctx.addFailureAt(node.getStart(), node.getWidth(), isImplicitRole
                ? getFailureStringForImplicitRole(node.tagName.getText(), normalizedRoles[0], missingAttributes)
                : getFailureStringForNotImplicitRole(normalizedRoles, missingAttributes));
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
//# sourceMappingURL=reactA11yRoleHasRequiredAriaPropsRule.js.map
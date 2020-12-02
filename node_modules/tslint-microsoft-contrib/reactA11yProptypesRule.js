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
var AstUtils_1 = require("./utils/AstUtils");
var JsxAttribute_1 = require("./utils/JsxAttribute");
var TypeGuard_1 = require("./utils/TypeGuard");
var aria = require('./utils/attributes/ariaSchema.json');
function getFailureString(propName, expectedType, permittedValues) {
    switch (expectedType) {
        case 'tristate':
            return "The value for " + propName + " must be a boolean or the string 'mixed'.";
        case 'token':
            return "The value for " + propName + " must be a single token from the following: " + permittedValues + ".";
        case 'tokenlist':
            return "The value for " + propName + " must be a list of one or more tokens from the following: " + permittedValues + ".";
        case 'boolean':
        case 'string':
        case 'integer':
        case 'number':
        default:
            return "The value for " + propName + " must be a " + expectedType + ".";
    }
}
exports.getFailureString = getFailureString;
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return sourceFile.languageVariant === ts.LanguageVariant.JSX ? this.applyWithFunction(sourceFile, walk) : [];
    };
    Rule.metadata = {
        ruleName: 'react-a11y-proptypes',
        type: 'maintainability',
        description: 'Enforce ARIA state and property values are valid.',
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
            var propNameNode = JsxAttribute_1.getPropName(node);
            if (propNameNode === undefined) {
                return;
            }
            var propName = propNameNode.toLowerCase();
            if (!aria[propName]) {
                return;
            }
            var allowUndefined = aria[propName].allowUndefined !== undefined ? aria[propName].allowUndefined : false;
            var expectedType = aria[propName].type;
            var permittedValues = aria[propName].values;
            var propValue = JsxAttribute_1.getStringLiteral(node) || String(JsxAttribute_1.getBooleanLiteral(node));
            if (isUndefined(node.initializer)) {
                if (!allowUndefined) {
                    ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureString(propName, expectedType, permittedValues));
                }
                return;
            }
            if (isComplexType(node.initializer)) {
                return;
            }
            if (!validityCheck(node.initializer, propValue, expectedType, permittedValues)) {
                ctx.addFailureAt(node.getStart(), node.getWidth(), getFailureString(propName, expectedType, permittedValues));
            }
        }
        else {
            return ts.forEachChild(node, cb);
        }
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
function validityCheck(propValueExpression, propValue, expectedType, permittedValues) {
    if (propValueExpression === undefined) {
        return true;
    }
    switch (expectedType) {
        case 'boolean':
            return isBoolean(propValueExpression);
        case 'tristate':
            return isBoolean(propValueExpression) || isMixed(propValueExpression);
        case 'integer':
            return isInteger(propValueExpression);
        case 'number':
            return isNumber(propValueExpression);
        case 'string':
            return isString(propValueExpression);
        case 'token':
            return ((isString(propValueExpression) || isBoolean(propValueExpression)) && permittedValues.indexOf(propValue.toLowerCase()) > -1);
        case 'tokenlist':
            return ((isString(propValueExpression) || isBoolean(propValueExpression)) &&
                propValue.split(' ').every(function (token) { return permittedValues.indexOf(token.toLowerCase()) > -1; }));
        default:
            return false;
    }
}
function isUndefined(node) {
    if (!node) {
        return true;
    }
    if (TypeGuard_1.isJsxExpression(node)) {
        var expression = node.expression;
        if (!expression) {
            return true;
        }
        if (AstUtils_1.AstUtils.isUndefined(expression)) {
            return true;
        }
        if (TypeGuard_1.isNullKeyword(expression)) {
            return true;
        }
    }
    return false;
}
function isComplexType(node) {
    return node !== undefined && !isUndefined(node) && TypeGuard_1.isJsxExpression(node) && !AstUtils_1.AstUtils.isConstant(node.expression);
}
function isBoolean(node) {
    if (TypeGuard_1.isStringLiteral(node)) {
        var propValue = node.text.toLowerCase();
        return propValue === 'true' || propValue === 'false';
    }
    if (TypeGuard_1.isJsxExpression(node)) {
        var expression = node.expression;
        if (expression === undefined) {
            return false;
        }
        if (TypeGuard_1.isStringLiteral(expression)) {
            var propValue = expression.text.toLowerCase();
            return propValue === 'true' || propValue === 'false';
        }
        return TypeGuard_1.isFalseKeyword(expression) || TypeGuard_1.isTrueKeyword(expression);
    }
    return false;
}
function isMixed(node) {
    if (TypeGuard_1.isStringLiteral(node)) {
        return node.text.toLowerCase() === 'mixed';
    }
    if (TypeGuard_1.isJsxExpression(node)) {
        var expression = node.expression;
        if (expression === undefined) {
            return false;
        }
        return TypeGuard_1.isStringLiteral(expression) && expression.text.toLowerCase() === 'mixed';
    }
    return false;
}
function isNumber(node) {
    if (TypeGuard_1.isStringLiteral(node)) {
        return !isNaN(Number(node.text));
    }
    if (TypeGuard_1.isJsxExpression(node)) {
        var expression = node.expression;
        if (expression === undefined) {
            return false;
        }
        if (TypeGuard_1.isStringLiteral(expression)) {
            return !isNaN(Number(expression.text));
        }
        return TypeGuard_1.isNumericLiteral(expression);
    }
    return false;
}
function isInteger(node) {
    if (TypeGuard_1.isStringLiteral(node)) {
        var value = Number(node.text);
        return !isNaN(value) && Math.round(value) === value;
    }
    if (TypeGuard_1.isJsxExpression(node)) {
        var expression = node.expression;
        if (expression === undefined) {
            return false;
        }
        if (TypeGuard_1.isStringLiteral(expression)) {
            var value = Number(expression.text);
            return !isNaN(value) && Math.round(value) === value;
        }
        if (TypeGuard_1.isNumericLiteral(expression)) {
            var value = Number(expression.text);
            return Math.round(value) === value;
        }
        return false;
    }
    return false;
}
function isString(node) {
    return TypeGuard_1.isStringLiteral(node) || (TypeGuard_1.isJsxExpression(node) && node.expression !== undefined && TypeGuard_1.isStringLiteral(node.expression));
}
//# sourceMappingURL=reactA11yProptypesRule.js.map
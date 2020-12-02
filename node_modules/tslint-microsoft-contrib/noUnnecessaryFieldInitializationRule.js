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
var FAILURE_UNDEFINED_INIT = 'Unnecessary field initialization. Field explicitly initialized to undefined: ';
var FAILURE_UNDEFINED_DUPE = 'Unnecessary field initialization. Field value already initialized in declaration: ';
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        ruleName: 'no-unnecessary-field-initialization',
        type: 'maintainability',
        description: 'Do not unnecessarily initialize the fields of a class to values they already have.',
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'Non-SDL',
        issueType: 'Warning',
        severity: 'Moderate',
        level: 'Opportunity for Excellence',
        group: 'Clarity',
        commonWeaknessEnumeration: '398, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var fieldInitializations = {};
    function visitConstructorDeclaration(node) {
        if (node.body !== undefined) {
            node.body.statements.forEach(function (statement) {
                if (tsutils.isExpressionStatement(statement)) {
                    var expression = statement.expression;
                    if (tsutils.isBinaryExpression(expression)) {
                        var binaryExpression = expression;
                        var property = binaryExpression.left;
                        var propertyName = property.getText();
                        if (Object.keys(fieldInitializations).indexOf(propertyName) > -1) {
                            if (AstUtils_1.AstUtils.isUndefined(binaryExpression.right)) {
                                if (Object.keys(fieldInitializations).indexOf(propertyName) > -1) {
                                    var fieldInitValue = fieldInitializations[propertyName];
                                    if (fieldInitValue === undefined) {
                                        var start = property.getStart();
                                        var width = property.getWidth();
                                        ctx.addFailureAt(start, width, FAILURE_UNDEFINED_INIT + property.getText());
                                    }
                                }
                            }
                            else if (AstUtils_1.AstUtils.isConstant(binaryExpression.right)) {
                                var fieldInitValue = fieldInitializations[propertyName];
                                if (fieldInitValue === binaryExpression.right.getText()) {
                                    var start = binaryExpression.getStart();
                                    var width = binaryExpression.getWidth();
                                    var message = FAILURE_UNDEFINED_DUPE + binaryExpression.getText();
                                    ctx.addFailureAt(start, width, message);
                                }
                            }
                        }
                    }
                }
            });
        }
    }
    function visitPropertyDeclaration(node) {
        var initializer = node.initializer;
        if (tsutils.isIdentifier(node.name)) {
            var fieldName = 'this.' + node.name.getText();
            if (initializer === undefined) {
                fieldInitializations[fieldName] = undefined;
            }
            else if (AstUtils_1.AstUtils.isConstant(initializer)) {
                fieldInitializations[fieldName] = initializer.getText();
            }
        }
        if (initializer !== undefined && AstUtils_1.AstUtils.isUndefined(initializer)) {
            var start = initializer.getStart();
            var width = initializer.getWidth();
            ctx.addFailureAt(start, width, FAILURE_UNDEFINED_INIT + node.name.getText());
        }
    }
    function cb(node) {
        if (tsutils.isClassDeclaration(node)) {
            fieldInitializations = {};
            node.members.forEach(function (member) {
                if (tsutils.isPropertyDeclaration(member)) {
                    visitPropertyDeclaration(member);
                }
                else if (tsutils.isConstructorDeclaration(member)) {
                    visitConstructorDeclaration(member);
                }
            });
            fieldInitializations = {};
        }
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=noUnnecessaryFieldInitializationRule.js.map
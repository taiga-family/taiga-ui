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
var Utils_1 = require("./utils/Utils");
var Lint = require("tslint");
var tsutils = require("tsutils");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk, this.parseOptions(this.getOptions()));
    };
    Rule.prototype.parseOptions = function (options) {
        var parsed = {};
        if (options.ruleArguments instanceof Array) {
            parsed.exceptions = options.ruleArguments[0];
        }
        else if (options instanceof Array) {
            parsed.exceptions = options;
        }
        return parsed;
    };
    Rule.metadata = {
        ruleName: 'react-no-dangerous-html',
        type: 'maintainability',
        description: "Do not use React's dangerouslySetInnerHTML API.",
        options: null,
        optionsDescription: '',
        typescriptOnly: true,
        issueClass: 'SDL',
        issueType: 'Error',
        severity: 'Critical',
        level: 'Mandatory',
        group: 'Security',
        commonWeaknessEnumeration: '79, 85, 710'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
function walk(ctx) {
    var currentMethodName = '<unknown>';
    function handleJsxOpeningElement(node) {
        node.attributes.properties.forEach(function (attribute) {
            if (attribute.kind === ts.SyntaxKind.JsxAttribute) {
                var jsxAttribute = attribute;
                var attributeName = jsxAttribute.name.text;
                if (attributeName === 'dangerouslySetInnerHTML') {
                    addFailureIfNotSuppressed(node, jsxAttribute.name);
                }
            }
        });
    }
    function addFailureIfNotSuppressed(parent, node) {
        if (!isSuppressed(currentMethodName)) {
            var failureString = 'Invalid call to dangerouslySetInnerHTML in method "' +
                currentMethodName +
                '".\n' +
                '    Do *NOT* add a suppression for this warning. If you absolutely must use this API then you need\n' +
                '    to review the usage with a security expert/QE representative. If they decide that this is an\n' +
                '    acceptable usage then add the exception to xss_exceptions.json';
            var position = parent.getStart();
            ctx.addFailureAt(position, node.text.length, failureString);
        }
    }
    function isSuppressed(methodName) {
        if (ctx.options.exceptions === undefined || ctx.options.exceptions.length === 0) {
            return false;
        }
        var found = false;
        ctx.options.exceptions.forEach(function (exception) {
            if (Utils_1.Utils.absolutePath(exception.file) === ctx.sourceFile.fileName) {
                if (exception.method === methodName) {
                    if (exception.comment !== undefined) {
                        found = true;
                    }
                }
            }
        });
        return found;
    }
    function cb(node) {
        if (tsutils.isMethodDeclaration(node)) {
            currentMethodName = node.name.getText();
            ts.forEachChild(node, cb);
            currentMethodName = '<unknown>';
            return;
        }
        if (tsutils.isPropertyAssignment(node)) {
            var keyNode = node.name;
            if (keyNode.kind === ts.SyntaxKind.Identifier) {
                if (keyNode.text === 'dangerouslySetInnerHTML') {
                    addFailureIfNotSuppressed(node, keyNode);
                }
            }
        }
        else if (tsutils.isJsxElement(node)) {
            handleJsxOpeningElement(node.openingElement);
        }
        else if (tsutils.isJsxSelfClosingElement(node)) {
            handleJsxOpeningElement(node);
        }
        return ts.forEachChild(node, cb);
    }
    return ts.forEachChild(ctx.sourceFile, cb);
}
//# sourceMappingURL=reactNoDangerousHtmlRule.js.map
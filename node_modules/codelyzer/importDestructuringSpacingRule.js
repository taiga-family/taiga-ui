"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("tslint/lib");
var rules_1 = require("tslint/lib/rules");
var typescript_1 = require("typescript/lib/typescript");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithFunction(sourceFile, walk);
    };
    Rule.metadata = {
        description: 'Ensures imports are consistent and tidy.',
        hasFix: true,
        options: null,
        optionsDescription: 'Not configurable.',
        rationale: "Imports are easier for the reader to look at when they're tidy.",
        ruleName: 'import-destructuring-spacing',
        type: 'style',
        typescriptOnly: true
    };
    Rule.FAILURE_STRING = "Import statement's curly braces must be spaced exactly by a space to the right and a space to the left";
    return Rule;
}(rules_1.AbstractRule));
exports.Rule = Rule;
var BLANK_MULTILINE_PATTERN = /^\{\s*\}$|\n/;
var LEADING_SPACES_PATTERN = /^\{(\s*)/;
var TRAILING_SPACES_PATTERN = /(\s*)}$/;
var isBlankOrMultilineImport = function (value) { return BLANK_MULTILINE_PATTERN.test(value); };
var getReplacements = function (node, totalLeadingSpaces, totalTrailingSpaces) {
    var nodeStartPos = node.getStart();
    var nodeEndPos = node.getEnd();
    var replacements = [];
    var textToAppend = ' ';
    if (totalLeadingSpaces === 0) {
        replacements.push(lib_1.Replacement.appendText(nodeStartPos + 1, textToAppend));
    }
    else if (totalLeadingSpaces > 1) {
        replacements.push(lib_1.Replacement.deleteText(nodeStartPos + 1, totalLeadingSpaces - 1));
    }
    if (totalTrailingSpaces === 0) {
        replacements.push(lib_1.Replacement.appendText(nodeEndPos - 1, textToAppend));
    }
    else if (totalTrailingSpaces > 1) {
        replacements.push(lib_1.Replacement.deleteText(nodeEndPos - totalTrailingSpaces, totalTrailingSpaces - 1));
    }
    return replacements;
};
var validateNamedImports = function (context, node) {
    var nodeText = node.getText();
    if (isBlankOrMultilineImport(nodeText))
        return;
    var leadingSpacesMatches = nodeText.match(LEADING_SPACES_PATTERN);
    var trailingSpacesMatches = nodeText.match(TRAILING_SPACES_PATTERN);
    var totalLeadingSpaces = leadingSpacesMatches ? leadingSpacesMatches[1].length : 1;
    var totalTrailingSpaces = trailingSpacesMatches ? trailingSpacesMatches[1].length : 1;
    if (totalLeadingSpaces === 1 && totalTrailingSpaces === 1)
        return;
    var replacements = getReplacements(node, totalLeadingSpaces, totalTrailingSpaces);
    context.addFailureAtNode(node, Rule.FAILURE_STRING, replacements);
};
var walk = function (context) {
    var sourceFile = context.sourceFile;
    var callback = function (node) {
        if (typescript_1.isNamedImports(node))
            validateNamedImports(context, node);
        typescript_1.forEachChild(node, callback);
    };
    typescript_1.forEachChild(sourceFile, callback);
};

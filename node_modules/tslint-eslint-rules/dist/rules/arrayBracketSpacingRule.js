"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var OPTION_ALWAYS = 'always';
var RULE_NAME = 'array-bracket-spacing';
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new ArrayBracketSpacingWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'enforce consistent spacing inside array brackets',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      A number of style guides require or disallow spaces between array brackets and other tokens.\n      This rule applies to both array literals and destructuring assignments (ECMAScript 6).\n      "], ["\n      A number of style guides require or disallow spaces between array brackets and other tokens.\n      This rule applies to both array literals and destructuring assignments (ECMAScript 6).\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      The rule takes one or two options. The first is a string, which can be:\n\n      - `\"never\"` (default) disallows spaces inside array brackets\n      - `\"always\"`requires one or more spaces or newlines inside array brackets\n\n      The second option is an object for exceptions to the `\"never\"` option:\n\n      - `\"singleValue\": true` requires one or more spaces or newlines inside brackets of array\n                                literals that contain a single element\n      - `\"objectsInArrays\": true` requires one or more spaces or newlines between brackets of\n                                    array literals and braces of their object literal elements\n                                    `[ {` or `} ]`\n      - `\"arraysInArrays\": true` requires one or more spaces or newlines between brackets of\n                                   array literals and brackets of their array literal elements\n                                   `[ [` or `] ]`\n\n      When using the `\"always\"` option the second option takes on these exceptions:\n\n      - `\"singleValue\": false` disallows spaces inside brackets of array literals that contain a\n                                 single element\n      - `\"objectsInArrays\": false` disallows spaces between brackets of array literals and braces\n                                     of their object literal elements `[ {` or `} ]`\n      - `\"arraysInArrays\": false` disallows spaces between brackets of array literals and brackets\n                                    of their array literal elements `[ [` or `] ]`\n\n      This rule has build-in exceptions:\n\n      - `\"never\"` (and also the exceptions to the `\"always\"` option) allows newlines inside\n                    array brackets, because this is a common pattern\n      - `\"always\"` does not require spaces or newlines in empty array literals `[]`\n      "], ["\n      The rule takes one or two options. The first is a string, which can be:\n\n      - \\`\"never\"\\` (default) disallows spaces inside array brackets\n      - \\`\"always\"\\`requires one or more spaces or newlines inside array brackets\n\n      The second option is an object for exceptions to the \\`\"never\"\\` option:\n\n      - \\`\"singleValue\": true\\` requires one or more spaces or newlines inside brackets of array\n                                literals that contain a single element\n      - \\`\"objectsInArrays\": true\\` requires one or more spaces or newlines between brackets of\n                                    array literals and braces of their object literal elements\n                                    \\`[ {\\` or \\`} ]\\`\n      - \\`\"arraysInArrays\": true\\` requires one or more spaces or newlines between brackets of\n                                   array literals and brackets of their array literal elements\n                                   \\`[ [\\` or \\`] ]\\`\n\n      When using the \\`\"always\"\\` option the second option takes on these exceptions:\n\n      - \\`\"singleValue\": false\\` disallows spaces inside brackets of array literals that contain a\n                                 single element\n      - \\`\"objectsInArrays\": false\\` disallows spaces between brackets of array literals and braces\n                                     of their object literal elements \\`[ {\\` or \\`} ]\\`\n      - \\`\"arraysInArrays\": false\\` disallows spaces between brackets of array literals and brackets\n                                    of their array literal elements \\`[ [\\` or \\`] ]\\`\n\n      This rule has build-in exceptions:\n\n      - \\`\"never\"\\` (and also the exceptions to the \\`\"always\"\\` option) allows newlines inside\n                    array brackets, because this is a common pattern\n      - \\`\"always\"\\` does not require spaces or newlines in empty array literals \\`[]\\`\n      "]))),
        options: {
            anyOf: [
                {
                    type: 'array',
                    items: [
                        {
                            enum: ['always', 'never']
                        }
                    ],
                    minItems: 0,
                    maxItems: 1
                },
                {
                    type: 'object',
                    properties: {
                        singleValue: {
                            type: 'boolean'
                        },
                        objectsInArrays: {
                            type: 'boolean'
                        },
                        arraysInArrays: {
                            type: 'boolean'
                        }
                    },
                    additionalProperties: false
                }
            ]
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"always\"]\n        "], ["\n        \"", "\": [true, \"always\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"never\"]\n        "], ["\n        \"", "\": [true, \"never\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"never\", {\n          \"arraysInArrays\": true\n        }]\n        "], ["\n        \"", "\": [true, \"never\", {\n          \"arraysInArrays\": true\n        }]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ArrayBracketSpacingWalker = (function (_super) {
    tslib_1.__extends(ArrayBracketSpacingWalker, _super);
    function ArrayBracketSpacingWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.singleValueException = false;
        _this.objectsInArraysException = false;
        _this.arraysInArraysException = false;
        var ruleOptions = _this.getOptions();
        _this.spaced = _this.hasOption(OPTION_ALWAYS) || (ruleOptions && ruleOptions.length === 0);
        var opt = ruleOptions[1];
        var isDef = function (x) { return typeof x !== 'undefined'; };
        if (opt) {
            _this.singleValueException = isDef(opt.singleValue) && opt.singleValue !== _this.spaced;
            _this.objectsInArraysException = isDef(opt.objectsInArrays) && opt.objectsInArrays !== _this.spaced;
            _this.arraysInArraysException = isDef(opt.arraysInArrays) && opt.arraysInArrays !== _this.spaced;
        }
        return _this;
    }
    ArrayBracketSpacingWalker.prototype.report = function (start, msg, fix) {
        this.addFailure(this.createFailure(start, 1, msg, fix));
    };
    ArrayBracketSpacingWalker.prototype.reportNoBeginningSpace = function (token, space) {
        var start = token.getStart(this.getSourceFile());
        var fix = Lint.Replacement.deleteText(start + 1, space);
        this.report(start, 'There should be no space after "["', fix);
    };
    ArrayBracketSpacingWalker.prototype.reportRequiredBeginningSpace = function (token) {
        var start = token.getStart(this.getSourceFile());
        var fix = Lint.Replacement.appendText(start + 1, ' ');
        this.report(start, 'A space is required after "["', fix);
    };
    ArrayBracketSpacingWalker.prototype.reportRequiredEndingSpace = function (token) {
        var start = token.getStart(this.getSourceFile());
        var fix = Lint.Replacement.appendText(start, ' ');
        this.report(start, 'A space is required before "]"', fix);
    };
    ArrayBracketSpacingWalker.prototype.reportNoEndingSpace = function (token, space) {
        var start = token.getStart(this.getSourceFile());
        var fix = Lint.Replacement.deleteText(start - space, space);
        this.report(start, 'There should be no space before "]"', fix);
    };
    ArrayBracketSpacingWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.ArrayBindingPattern) {
            this.validateArraySpacing(node, node.elements);
        }
        _super.prototype.visitNode.call(this, node);
    };
    ArrayBracketSpacingWalker.prototype.visitArrayLiteralExpression = function (node) {
        this.validateArraySpacing(node, node.elements);
        _super.prototype.visitArrayLiteralExpression.call(this, node);
    };
    ArrayBracketSpacingWalker.prototype.isObjectType = function (node) {
        return node && node.kind === ts.SyntaxKind.ObjectLiteralExpression;
    };
    ArrayBracketSpacingWalker.prototype.isArrayType = function (node) {
        if (node) {
            if (node.kind === ts.SyntaxKind.ArrayLiteralExpression) {
                return true;
            }
            var firstChild = node.getChildAt(0);
            if (firstChild && firstChild.kind === ts.SyntaxKind.ArrayBindingPattern) {
                return true;
            }
        }
        return false;
    };
    ArrayBracketSpacingWalker.prototype.validateArraySpacing = function (node, elements) {
        var _this = this;
        if (this.spaced && elements.length === 0) {
            return;
        }
        var first = node.getChildAt(0);
        var last = node.getChildAt(2);
        var firstElement = elements[0];
        var lastElement = elements[elements.length - 1];
        var second = firstElement || last;
        var penultimate = lastElement || first;
        if (second.pos === second.end) {
            second = node.getChildAt(1).getChildAt(1);
        }
        if (elements.hasTrailingComma) {
            penultimate = elements;
        }
        var mustBeSpaced = function (token) { return (_this.singleValueException && elements.length === 1 ||
            _this.objectsInArraysException && _this.isObjectType(token) ||
            _this.arraysInArraysException && _this.isArrayType(token)) ? !_this.spaced : _this.spaced; };
        var openingBracketMustBeSpaced = mustBeSpaced(firstElement);
        var closingBracketMustBeSpaced = mustBeSpaced(lastElement);
        var spaceAfterOpeningBracket = this.getSpaceBetween(first, second, false);
        var isBreakAfterOpeningBracket = this.isLineBreakBetween(first, second);
        var spaceBeforeClosingBracket = this.getSpaceBetween(penultimate, last, true);
        var isBreakBeforeClosingBracket = this.isLineBreakBetween(penultimate, last);
        if (!isBreakAfterOpeningBracket) {
            if (openingBracketMustBeSpaced && !spaceAfterOpeningBracket) {
                this.reportRequiredBeginningSpace(first);
            }
            else if (!openingBracketMustBeSpaced && spaceAfterOpeningBracket) {
                this.reportNoBeginningSpace(first, spaceAfterOpeningBracket);
            }
        }
        if (first !== penultimate && !isBreakBeforeClosingBracket) {
            if (closingBracketMustBeSpaced && !spaceBeforeClosingBracket) {
                this.reportRequiredEndingSpace(last);
            }
            else if (!closingBracketMustBeSpaced && spaceBeforeClosingBracket) {
                this.reportNoEndingSpace(last, spaceBeforeClosingBracket);
            }
        }
    };
    ArrayBracketSpacingWalker.prototype.getSpaceBetween = function (node, nextNode, trailing) {
        var end = nextNode.getStart(this.getSourceFile());
        var start = node.end;
        var text = this.getSourceFile().text.substring(start, end);
        var m = text.match(/\/\*.*\*\//);
        if (m && typeof m.index === 'number') {
            var len = m[0].length;
            return trailing ? end - (start + m.index + len) : m.index;
        }
        return end - start;
    };
    ArrayBracketSpacingWalker.prototype.isLineBreakBetween = function (node, nextNode) {
        return this.getEndPosition(node).line !== this.getStartPosition(nextNode).line;
    };
    ArrayBracketSpacingWalker.prototype.getStartPosition = function (node) {
        var srcFile = this.getSourceFile();
        return srcFile.getLineAndCharacterOfPosition(node.getStart(srcFile));
    };
    ArrayBracketSpacingWalker.prototype.getEndPosition = function (node) {
        return this.getSourceFile().getLineAndCharacterOfPosition(node.end);
    };
    return ArrayBracketSpacingWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5QnJhY2tldFNwYWNpbmdSdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFpQztBQUNqQyw2QkFBK0I7QUFFL0IsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBQy9CLElBQU0sU0FBUyxHQUFHLHVCQUF1QixDQUFDO0FBRTFDO0lBQTBCLGdDQUF1QjtJQUFqRDs7SUEyRkEsQ0FBQztJQUpRLG9CQUFLLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxJQUFNLE1BQU0sR0FBRyxJQUFJLHlCQUF5QixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM1RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXpGYSxhQUFRLEdBQXVCO1FBQzNDLFFBQVEsRUFBRSxTQUFTO1FBQ25CLFdBQVcsRUFBRSxrREFBa0Q7UUFDL0QsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSx1UkFBQSw0TUFHekIsSUFBQTtRQUNILGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxzN0RBQUEsbThEQStCbEMsSUFBQTtRQUNILE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRTtnQkFDTDtvQkFDRSxJQUFJLEVBQUUsT0FBTztvQkFDYixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQzt5QkFDMUI7cUJBQ0Y7b0JBQ0QsUUFBUSxFQUFFLENBQUM7b0JBQ1gsUUFBUSxFQUFFLENBQUM7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsVUFBVSxFQUFFO3dCQUNWLFdBQVcsRUFBRTs0QkFDWCxJQUFJLEVBQUUsU0FBUzt5QkFDaEI7d0JBQ0QsZUFBZSxFQUFFOzRCQUNmLElBQUksRUFBRSxTQUFTO3lCQUNoQjt3QkFDRCxjQUFjLEVBQUU7NEJBQ2QsSUFBSSxFQUFF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QU0sQ0FBQztZQUN4QixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDM0Q7UUFDRCxPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVPLHNEQUFrQixHQUExQixVQUEyQixJQUFrQixFQUFFLFFBQWlCO1FBQzlELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRixDQUFDO0lBRU8sb0RBQWdCLEdBQXhCLFVBQXlCLElBQWE7UUFDcEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sT0FBTyxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU8sa0RBQWMsR0FBdEIsVUFBdUIsSUFBa0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDSCxnQ0FBQztBQUFELENBOUpBLEFBOEpDLENBOUp1QyxJQUFJLENBQUMsVUFBVSxHQThKdEQiLCJmaWxlIjoicnVsZXMvYXJyYXlCcmFja2V0U3BhY2luZ1J1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==

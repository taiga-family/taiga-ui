"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _a;
var ts = require("typescript");
var Lint = require("tslint");
var tsutils_1 = require("tsutils");
var RULE_NAME = 'ter-max-len';
var CODE = 'code';
var COMMENTS = 'comments';
var TAB_WIDTH = 'tabWidth';
var IGNORE_PATTERN = 'ignorePattern';
var IGNORE_COMMENTS = 'ignoreComments';
var IGNORE_STRINGS = 'ignoreStrings';
var IGNORE_URLS = 'ignoreUrls';
var IGNORE_TEMPLATE_LITERALS = 'ignoreTemplateLiterals';
var IGNORE_REG_EXP_LITERALS = 'ignoreRegExpLiterals';
var IGNORE_TRAILING_COMMENTS = 'ignoreTrailingComments';
var IGNORE_IMPORTS = 'ignoreImports';
function computeLineLength(line, tabWidth) {
    var extraCharacterCount = 0;
    line.replace(/\t/g, function (_, offset) {
        var totalOffset = offset + extraCharacterCount;
        var previousTabStopOffset = tabWidth ? totalOffset % tabWidth : 0;
        var spaceCount = tabWidth - previousTabStopOffset;
        extraCharacterCount += spaceCount - 1;
        return '\t';
    });
    return line.length + extraCharacterCount;
}
function isFullLineComment(line, lineNumber, comment) {
    var start = comment.start;
    var end = comment.end;
    var isFirstTokenOnLine = !line.slice(0, start[1]).trim();
    return comment &&
        (start[0] < lineNumber || (start[0] === lineNumber && isFirstTokenOnLine)) &&
        (end[0] > lineNumber || (end[0] === lineNumber && end[1] === line.length));
}
function isTrailingComment(line, lineNumber, comment) {
    return comment &&
        (comment.start[0] === lineNumber && lineNumber <= comment.end[0]) &&
        (comment.end[0] > lineNumber || comment.end[1] === line.length);
}
function stripTrailingComment(line, comment) {
    return line.slice(0, comment.start[1]).replace(/\s+$/, '');
}
function groupByLineNumber(acc, node) {
    var startLoc = node.start;
    var endLoc = node.end;
    for (var i = startLoc[0]; i <= endLoc[0]; ++i) {
        if (!Array.isArray(acc[i])) {
            acc[i] = [];
        }
        acc[i].push(node);
    }
    return acc;
}
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.mergeOptions = function (options) {
        var optionsObj = {};
        var obj = options[0];
        if (typeof obj === 'number') {
            optionsObj[CODE] = obj || 80;
            obj = options[1];
        }
        if (typeof obj === 'number') {
            optionsObj[TAB_WIDTH] = obj || 4;
            obj = options[2];
        }
        if (typeof obj === 'object' && !Array.isArray(obj)) {
            Object.keys(obj).forEach(function (key) {
                optionsObj[key] = obj[key];
            });
        }
        optionsObj[CODE] = optionsObj[CODE] || 80;
        optionsObj[TAB_WIDTH] = optionsObj[TAB_WIDTH] || 4;
        return optionsObj;
    };
    Rule.prototype.isEnabled = function () {
        if (_super.prototype.isEnabled.call(this)) {
            var options = this.getOptions().ruleArguments;
            var option = options[0];
            if (typeof option === 'number' && option > 0) {
                return true;
            }
            var optionsObj = Rule.mergeOptions(options);
            if (optionsObj[CODE]) {
                return true;
            }
        }
        return false;
    };
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new MaxLenWalker(sourceFile, this.getOptions()));
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        description: 'enforce a maximum line length',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Limiting the length of a line of code improves code readability.\n      It also makes comparing code side-by-side easier and improves compatibility with\n      various editors, IDEs, and diff viewers.\n      "], ["\n      Limiting the length of a line of code improves code readability.\n      It also makes comparing code side-by-side easier and improves compatibility with\n      various editors, IDEs, and diff viewers.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      An integer indicating the maximum length of lines followed by an optional integer specifying\n      the character width for tab characters.\n\n      An optional object may be provided to fine tune the rule:\n\n      * `\"", "\"`: (default 80) enforces a maximum line length\n      * `\"", "\"`: (default 4) specifies the character width for tab characters\n      * `\"", "\"`: enforces a maximum line length for comments; defaults to value of code\n      * `\"", "\"`: ignores lines matching a regular expression; can only match a single\n                                 line and need to be double escaped when written in JSON\n      * `\"", "\"`: true ignores all trailing comments and comments on their own line\n      * `\"", "\"`: true ignores only trailing comments\n      * `\"", "\"`: true ignores lines that contain a URL\n      * `\"", "\"`: true ignores lines that contain a double-quoted or single-quoted string\n      * `\"", "\"`: true ignores lines that contain a template literal\n      * `\"", "\"`: true ignores lines that contain a RegExp literal\n      * `\"", "\"`: true ignores lines that contain an import module specifier\n      "], ["\n      An integer indicating the maximum length of lines followed by an optional integer specifying\n      the character width for tab characters.\n\n      An optional object may be provided to fine tune the rule:\n\n      * \\`\"", "\"\\`: (default 80) enforces a maximum line length\n      * \\`\"", "\"\\`: (default 4) specifies the character width for tab characters\n      * \\`\"", "\"\\`: enforces a maximum line length for comments; defaults to value of code\n      * \\`\"", "\"\\`: ignores lines matching a regular expression; can only match a single\n                                 line and need to be double escaped when written in JSON\n      * \\`\"", "\"\\`: true ignores all trailing comments and comments on their own line\n      * \\`\"", "\"\\`: true ignores only trailing comments\n      * \\`\"", "\"\\`: true ignores lines that contain a URL\n      * \\`\"", "\"\\`: true ignores lines that contain a double-quoted or single-quoted string\n      * \\`\"", "\"\\`: true ignores lines that contain a template literal\n      * \\`\"", "\"\\`: true ignores lines that contain a RegExp literal\n      * \\`\"", "\"\\`: true ignores lines that contain an import module specifier\n      "])), CODE, TAB_WIDTH, COMMENTS, IGNORE_PATTERN, IGNORE_COMMENTS, IGNORE_TRAILING_COMMENTS, IGNORE_URLS, IGNORE_STRINGS, IGNORE_TEMPLATE_LITERALS, IGNORE_REG_EXP_LITERALS, IGNORE_IMPORTS),
        options: {
            type: 'array',
            items: [{
                    type: 'number',
                    minimum: '0'
                }, {
                    type: 'object',
                    properties: (_a = {},
                        _a[CODE] = {
                            type: 'number',
                            minumum: '1'
                        },
                        _a[COMMENTS] = {
                            type: 'number',
                            minumum: '1'
                        },
                        _a[TAB_WIDTH] = {
                            type: 'number',
                            minumum: '1'
                        },
                        _a[IGNORE_PATTERN] = {
                            type: 'string'
                        },
                        _a[IGNORE_COMMENTS] = {
                            type: 'boolean'
                        },
                        _a[IGNORE_STRINGS] = {
                            type: 'boolean'
                        },
                        _a[IGNORE_URLS] = {
                            type: 'boolean'
                        },
                        _a[IGNORE_TEMPLATE_LITERALS] = {
                            type: 'boolean'
                        },
                        _a[IGNORE_REG_EXP_LITERALS] = {
                            type: 'boolean'
                        },
                        _a[IGNORE_TRAILING_COMMENTS] = {
                            type: 'boolean'
                        },
                        _a[IGNORE_IMPORTS] = {
                            type: 'boolean'
                        },
                        _a),
                    additionalProperties: false
                }],
            minLength: 1,
            maxLength: 3
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, 100]\n        "], ["\n        \"", "\": [true, 100]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [\n          true,\n          100,\n          2,\n          {\n            \"", "\": true,\n            \"", "\": \"^\\\\s*(let|const)\\\\s.+=\\\\s*require\\\\s*\\\\(\"\n          }\n        ]\n        "], ["\n        \"", "\": [\n          true,\n          100,\n          2,\n          {\n            \"", "\": true,\n            \"", "\": \"^\\\\\\\\s*(let|const)\\\\\\\\s.+=\\\\\\\\s*require\\\\\\\\s*\\\\\\\\(\"\n          }\n        ]\n        "])), RULE_NAME, IGNORE_URLS, IGNORE_PATTERN),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [\n          true,\n          {\n            \"", "\": 100,\n            \"", "\": 2,\n            \"", "\": true,\n            \"", "\": true,\n            \"", "\": \"^\\\\s*(let|const)\\\\s.+=\\\\s*require\\\\s*\\\\(\"\n          }\n        ]\n        "], ["\n        \"", "\": [\n          true,\n          {\n            \"", "\": 100,\n            \"", "\": 2,\n            \"", "\": true,\n            \"", "\": true,\n            \"", "\": \"^\\\\\\\\s*(let|const)\\\\\\\\s.+=\\\\\\\\s*require\\\\\\\\s*\\\\\\\\(\"\n          }\n        ]\n        "])), RULE_NAME, CODE, TAB_WIDTH, IGNORE_IMPORTS, IGNORE_URLS, IGNORE_PATTERN)
        ],
        typescriptOnly: false,
        type: 'style'
    };
    Rule.URL_REGEXP = /[^:/?#]:\/\/[^?#]/;
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var MaxLenWalker = (function (_super) {
    tslib_1.__extends(MaxLenWalker, _super);
    function MaxLenWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.ignoredIntervals = [];
        _this.optionsObj = {};
        _this.comments = [];
        _this.strings = [];
        _this.templates = [];
        _this.regExp = [];
        _this.optionsObj = Rule.mergeOptions(_this.getOptions());
        return _this;
    }
    MaxLenWalker.prototype.hasOption = function (option) {
        if (this.optionsObj[option] && this.optionsObj[option]) {
            return true;
        }
        return false;
    };
    MaxLenWalker.prototype.getOption = function (option) {
        return this.optionsObj[option];
    };
    MaxLenWalker.prototype.visitStringLiteral = function (node) {
        this.strings.push(this.getINode(node.kind, node.getText(), node.getStart()));
        _super.prototype.visitStringLiteral.call(this, node);
    };
    MaxLenWalker.prototype.visitRegularExpressionLiteral = function (node) {
        this.regExp.push(this.getINode(node.kind, node.getText(), node.getStart()));
        _super.prototype.visitRegularExpressionLiteral.call(this, node);
    };
    MaxLenWalker.prototype.getINode = function (kind, text, startPos) {
        var width = text.length;
        var src = this.getSourceFile();
        var startLoc = src.getLineAndCharacterOfPosition(startPos);
        var endLoc = src.getLineAndCharacterOfPosition(startPos + width);
        return {
            kind: kind,
            text: text,
            startPosition: startPos,
            endPosition: startPos + width,
            start: [startLoc.line, startLoc.character],
            end: [endLoc.line, endLoc.character]
        };
    };
    MaxLenWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        _super.prototype.visitSourceFile.call(this, node);
        tsutils_1.forEachTokenWithTrivia(node, function (text, token, range) {
            if (token === ts.SyntaxKind.SingleLineCommentTrivia ||
                token === ts.SyntaxKind.MultiLineCommentTrivia) {
                _this.comments.push(_this.getINode(token, text.substring(range.pos, range.end), range.pos));
            }
            else if (token === ts.SyntaxKind.FirstTemplateToken) {
                _this.templates.push(_this.getINode(token, text.substring(range.pos, range.end), range.pos));
            }
        });
        this.findFailures(node);
    };
    MaxLenWalker.prototype.visitImportDeclaration = function (node) {
        _super.prototype.visitImportDeclaration.call(this, node);
        var startPos = node.moduleSpecifier.getStart();
        var text = node.moduleSpecifier.getText();
        var width = text.length;
        if (this.hasOption(IGNORE_IMPORTS)) {
            this.ignoredIntervals.push({
                endPosition: startPos + width,
                startPosition: startPos
            });
        }
    };
    MaxLenWalker.prototype.findFailures = function (sourceFile) {
        var lineStarts = sourceFile.getLineStarts();
        var source = sourceFile.getFullText();
        var lineLimit = this.getOption(CODE) || 80;
        var ignoreTrailingComments = this.getOption(IGNORE_TRAILING_COMMENTS) ||
            this.getOption(IGNORE_COMMENTS) ||
            false;
        var ignoreComments = this.getOption(IGNORE_COMMENTS) || false;
        var ignoreStrings = this.getOption(IGNORE_STRINGS) || false;
        var ignoreTemplateLiterals = this.getOption(IGNORE_TEMPLATE_LITERALS) || false;
        var ignoreUrls = this.getOption(IGNORE_URLS) || false;
        var ignoreRexExpLiterals = this.getOption(IGNORE_REG_EXP_LITERALS) || false;
        var pattern = this.getOption(IGNORE_PATTERN) || null;
        var tabWidth = this.getOption(TAB_WIDTH) || 4;
        var maxCommentLength = this.getOption(COMMENTS);
        var comments = ignoreComments || maxCommentLength || ignoreTrailingComments ? this.comments : [];
        var commentsIndex = 0;
        var stringsByLine = this.strings.reduce(groupByLineNumber, {});
        var templatesByLine = this.templates.reduce(groupByLineNumber, {});
        var regExpByLine = this.regExp.reduce(groupByLineNumber, {});
        var totalLines = lineStarts.length;
        for (var i = 0; i < totalLines; ++i) {
            var from = lineStarts[i];
            var to = lineStarts[i + 1] || source.length;
            var line = source.substring(from, i === totalLines - 1 ? to : to - 1);
            var lineIsComment = false;
            if (commentsIndex < comments.length) {
                var comment = void 0;
                do {
                    comment = comments[++commentsIndex];
                } while (comment && comment.start[0] <= i);
                comment = comments[--commentsIndex];
                if (isFullLineComment(line, i, comment)) {
                    lineIsComment = true;
                }
                else if (ignoreTrailingComments && isTrailingComment(line, i, comment)) {
                    line = stripTrailingComment(line, comment);
                }
            }
            if (ignoreUrls && Rule.URL_REGEXP.test(line) ||
                pattern && new RegExp(pattern).test(line) ||
                ignoreStrings && stringsByLine[i] ||
                ignoreTemplateLiterals && templatesByLine[i] ||
                ignoreRexExpLiterals && regExpByLine[i]) {
                continue;
            }
            var lineLength = computeLineLength(line, tabWidth);
            if (lineIsComment && ignoreComments) {
                continue;
            }
            var ruleFailure = null;
            if (lineIsComment && exceedLineLimit(lineLength, maxCommentLength, source[to - 2])) {
                ruleFailure = new Lint.RuleFailure(sourceFile, from, to - 1, "Line " + (i + 1) + " exceeds the maximum comment line length of " + maxCommentLength + ".", RULE_NAME);
            }
            else if (exceedLineLimit(lineLength, lineLimit, source[to - 2])) {
                ruleFailure = new Lint.RuleFailure(sourceFile, from, to - 1, "Line " + (i + 1) + " exceeds the maximum line length of " + lineLimit + ".", RULE_NAME);
            }
            if (ruleFailure && !Lint.doesIntersect(ruleFailure, this.ignoredIntervals)) {
                this.addFailure(ruleFailure);
            }
        }
    };
    return MaxLenWalker;
}(Lint.RuleWalker));
function exceedLineLimit(lineLength, lineLimit, secondToLast) {
    return lineLength > lineLimit && !((lineLength - 1) === lineLimit && secondToLast === '\r');
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LElBQUksQ0FBQyxXQUFXLENBQ2hDLFVBQVUsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDeEIsV0FBUSxDQUFDLEdBQUcsQ0FBQyw2Q0FBdUMsU0FBUyxNQUFHLEVBQ2hFLFNBQVMsQ0FDVixDQUFDO2FBQ0g7WUFFRCxJQUFJLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQWxMQSxBQWtMQyxDQWxMMEIsSUFBSSxDQUFDLFVBQVUsR0FrTHpDO0FBRUQsU0FBUyxlQUFlLENBQUMsVUFBa0IsRUFBRSxTQUFpQixFQUFFLFlBQW9CO0lBTWxGLE9BQU8sVUFBVSxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssU0FBUyxJQUFJLFlBQVksS0FBSyxJQUFJLENBQUMsQ0FBQztBQUM5RixDQUFDIiwiZmlsZSI6InJ1bGVzL3Rlck1heExlblJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==

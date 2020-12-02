"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var RULE_NAME = 'ter-indent';
var DEFAULT_VARIABLE_INDENT = 1;
var DEFAULT_PARAMETER_INDENT = null;
var DEFAULT_FUNCTION_BODY_INDENT = 1;
var indentType = 'space';
var indentSize = 4;
var OPTIONS;
function assign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    sources.forEach(function (source) {
        if (source !== undefined && source !== null) {
            for (var nextKey in source) {
                if (source.hasOwnProperty(nextKey)) {
                    target[nextKey] = source[nextKey];
                }
            }
        }
    });
    return target;
}
function isKind(node, kind) {
    return node.kind === ts.SyntaxKind[kind];
}
function isOneOf(node, kinds) {
    return kinds.some(function (kind) { return node.kind === ts.SyntaxKind[kind]; });
}
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new IndentWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.metadata = {
        ruleName: RULE_NAME,
        hasFix: true,
        description: 'enforce consistent indentation',
        rationale: Lint.Utils.dedent(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n      Using only one of tabs or spaces for indentation leads to more consistent editor behavior,\n      cleaner diffs in version control, and easier programmatic manipulation.\n      "], ["\n      Using only one of tabs or spaces for indentation leads to more consistent editor behavior,\n      cleaner diffs in version control, and easier programmatic manipulation.\n      "]))),
        optionsDescription: Lint.Utils.dedent(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      The string 'tab' or an integer indicating the number of spaces to use per tab.\n\n      An object may be provided to fine tune the indentation rules:\n\n        * `\"SwitchCase\"` (default: 0) enforces indentation level for `case` clauses in\n                           `switch` statements\n        * `\"VariableDeclarator\"` (default: 1) enforces indentation level for `var` declarators;\n                                   can also take an object to define separate rules for `var`,\n                                   `let` and `const` declarations.\n        * `\"outerIIFEBody\"` (default: 1) enforces indentation level for file-level IIFEs.\n        * `\"MemberExpression\"` (off by default) enforces indentation level for multi-line\n                                 property chains (except in variable declarations and assignments)\n        * `\"FunctionDeclaration\"` takes an object to define rules for function declarations.\n            * `\"parameters\"` (off by default) enforces indentation level for parameters in a\n                               function declaration. This can either be a number indicating\n                               indentation level, or the string `\"first\"` indicating that all\n                               parameters of the declaration must be aligned with the first parameter.\n            * `\"body\"` (default: 1) enforces indentation level for the body of a function expression.\n        * `\"FunctionExpression\"` takes an object to define rules for function declarations.\n            * `\"parameters\"` (off by default) enforces indentation level for parameters in a\n                               function declaration. This can either be a number indicating\n                               indentation level, or the string `\"first\"` indicating that all\n                               parameters of the declaration must be aligned with the first parameter.\n            * `\"body\"` (default: 1) enforces indentation level for the body of a function expression.\n        * `\"CallExpression\"` takes an object to define rules for function call expressions.\n            * `\"arguments\"` (off by default) enforces indentation level for arguments in a call\n                              expression. This can either be a number indicating indentation level,\n                              or the string `\"first\"` indicating that all arguments of the\n                              expression must be aligned with the first argument.\n      "], ["\n      The string 'tab' or an integer indicating the number of spaces to use per tab.\n\n      An object may be provided to fine tune the indentation rules:\n\n        * \\`\"SwitchCase\"\\` (default: 0) enforces indentation level for \\`case\\` clauses in\n                           \\`switch\\` statements\n        * \\`\"VariableDeclarator\"\\` (default: 1) enforces indentation level for \\`var\\` declarators;\n                                   can also take an object to define separate rules for \\`var\\`,\n                                   \\`let\\` and \\`const\\` declarations.\n        * \\`\"outerIIFEBody\"\\` (default: 1) enforces indentation level for file-level IIFEs.\n        * \\`\"MemberExpression\"\\` (off by default) enforces indentation level for multi-line\n                                 property chains (except in variable declarations and assignments)\n        * \\`\"FunctionDeclaration\"\\` takes an object to define rules for function declarations.\n            * \\`\"parameters\"\\` (off by default) enforces indentation level for parameters in a\n                               function declaration. This can either be a number indicating\n                               indentation level, or the string \\`\"first\"\\` indicating that all\n                               parameters of the declaration must be aligned with the first parameter.\n            * \\`\"body\"\\` (default: 1) enforces indentation level for the body of a function expression.\n        * \\`\"FunctionExpression\"\\` takes an object to define rules for function declarations.\n            * \\`\"parameters\"\\` (off by default) enforces indentation level for parameters in a\n                               function declaration. This can either be a number indicating\n                               indentation level, or the string \\`\"first\"\\` indicating that all\n                               parameters of the declaration must be aligned with the first parameter.\n            * \\`\"body\"\\` (default: 1) enforces indentation level for the body of a function expression.\n        * \\`\"CallExpression\"\\` takes an object to define rules for function call expressions.\n            * \\`\"arguments\"\\` (off by default) enforces indentation level for arguments in a call\n                              expression. This can either be a number indicating indentation level,\n                              or the string \\`\"first\"\\` indicating that all arguments of the\n                              expression must be aligned with the first argument.\n      "]))),
        options: {
            type: 'array',
            items: [{
                    type: 'number',
                    minimum: '0'
                }, {
                    type: 'string',
                    enum: ['tab']
                }, {
                    type: 'object',
                    properties: {
                        SwitchCase: {
                            type: 'number',
                            minimum: 0
                        },
                        VariableDeclarator: {
                            type: 'object',
                            properties: {
                                var: {
                                    type: 'number',
                                    minimum: 0
                                },
                                let: {
                                    type: 'number',
                                    minimum: 0
                                },
                                const: {
                                    type: 'number',
                                    minimum: 0
                                }
                            }
                        },
                        outerIIFEBody: {
                            type: 'number'
                        },
                        FunctionDeclaration: {
                            type: 'object',
                            properties: {
                                parameters: {
                                    type: 'number',
                                    minimum: 0
                                },
                                body: {
                                    type: 'number',
                                    minimum: 0
                                }
                            }
                        },
                        FunctionExpression: {
                            type: 'object',
                            properties: {
                                parameters: {
                                    type: 'number',
                                    minimum: 0
                                },
                                body: {
                                    type: 'number',
                                    minimum: 0
                                }
                            }
                        },
                        MemberExpression: {
                            type: 'number'
                        },
                        CallExpression: {
                            type: 'object',
                            properties: {
                                arguments: {
                                    type: 'number',
                                    minimum: 0
                                }
                            }
                        }
                    },
                    additionalProperties: false
                }],
            minLength: 1,
            maxLength: 2
        },
        optionExamples: [
            Lint.Utils.dedent(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, \"tab\"]\n        "], ["\n        \"", "\": [true, \"tab\"]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n        \"", "\": [true, 2]\n        "], ["\n        \"", "\": [true, 2]\n        "])), RULE_NAME),
            Lint.Utils.dedent(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n        \"", "\": [\n          true,\n          2,\n          {\n            \"FunctionExpression\": {\n              \"parameters\": 1,\n              \"body\": 1\n            }\n          }\n        ]\n        "], ["\n        \"", "\": [\n          true,\n          2,\n          {\n            \"FunctionExpression\": {\n              \"parameters\": 1,\n              \"body\": 1\n            }\n          }\n        ]\n        "])), RULE_NAME)
        ],
        typescriptOnly: false,
        type: 'maintainability'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var IndentWalker = (function (_super) {
    tslib_1.__extends(IndentWalker, _super);
    function IndentWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.caseIndentStore = {};
        _this.varIndentStore = {};
        OPTIONS = {
            SwitchCase: 0,
            VariableDeclarator: {
                var: DEFAULT_VARIABLE_INDENT,
                let: DEFAULT_VARIABLE_INDENT,
                const: DEFAULT_VARIABLE_INDENT
            },
            outerIIFEBody: null,
            FunctionDeclaration: {
                parameters: DEFAULT_PARAMETER_INDENT,
                body: DEFAULT_FUNCTION_BODY_INDENT
            },
            FunctionExpression: {
                parameters: DEFAULT_PARAMETER_INDENT,
                body: DEFAULT_FUNCTION_BODY_INDENT
            },
            CallExpression: {
                arguments: DEFAULT_PARAMETER_INDENT
            }
        };
        var firstParam = _this.getOptions()[0];
        if (firstParam === 'tab') {
            indentSize = 1;
            indentType = 'tab';
        }
        else {
            indentSize = firstParam || 4;
            indentType = 'space';
        }
        var userOptions = _this.getOptions()[1];
        if (userOptions) {
            OPTIONS.SwitchCase = userOptions.SwitchCase || 0;
            if (typeof userOptions.VariableDeclarator === 'number') {
                OPTIONS.VariableDeclarator = {
                    var: userOptions.VariableDeclarator,
                    let: userOptions.VariableDeclarator,
                    const: userOptions.VariableDeclarator
                };
            }
            else if (typeof userOptions.VariableDeclarator === 'object') {
                assign(OPTIONS.VariableDeclarator, userOptions.VariableDeclarator);
            }
            if (typeof userOptions.outerIIFEBody === 'number') {
                OPTIONS.outerIIFEBody = userOptions.outerIIFEBody;
            }
            if (typeof userOptions.MemberExpression === 'number') {
                OPTIONS.MemberExpression = userOptions.MemberExpression;
            }
            if (typeof userOptions.FunctionDeclaration === 'object') {
                assign(OPTIONS.FunctionDeclaration, userOptions.FunctionDeclaration);
            }
            if (typeof userOptions.FunctionExpression === 'object') {
                assign(OPTIONS.FunctionExpression, userOptions.FunctionExpression);
            }
            if (typeof userOptions.CallExpression === 'object') {
                assign(OPTIONS.CallExpression, userOptions.CallExpression);
            }
        }
        _this.srcFile = sourceFile;
        _this.srcText = sourceFile.getFullText();
        return _this;
    }
    IndentWalker.prototype.getSourceSubstr = function (start, end) {
        return this.srcText.substr(start, end - start);
    };
    IndentWalker.prototype.getLineAndCharacter = function (node, byEndLocation) {
        if (byEndLocation === void 0) { byEndLocation = false; }
        var index = byEndLocation ? node.getEnd() : node.getStart();
        return this.srcFile.getLineAndCharacterOfPosition(index);
    };
    IndentWalker.prototype.getLine = function (node, byEndLocation) {
        if (byEndLocation === void 0) { byEndLocation = false; }
        return this.getLineAndCharacter(node, byEndLocation).line;
    };
    IndentWalker.prototype.createErrorMessage = function (expectedAmount, actualSpaces, actualTabs) {
        var expectedStatement = expectedAmount + " " + indentType + (expectedAmount === 1 ? '' : 's');
        var foundSpacesWord = "space" + (actualSpaces === 1 ? '' : 's');
        var foundTabsWord = "tab" + (actualTabs === 1 ? '' : 's');
        var foundStatement;
        if (actualSpaces > 0 && actualTabs > 0) {
            foundStatement = actualSpaces + " " + foundSpacesWord + " and " + actualTabs + " " + foundTabsWord;
        }
        else if (actualSpaces > 0) {
            foundStatement = indentType === 'space' ? actualSpaces : actualSpaces + " " + foundSpacesWord;
        }
        else if (actualTabs > 0) {
            foundStatement = indentType === 'tab' ? actualTabs : actualTabs + " " + foundTabsWord;
        }
        else {
            foundStatement = '0';
        }
        return "Expected indentation of " + expectedStatement + " but found " + foundStatement + ".";
    };
    IndentWalker.prototype.report = function (node, needed, gottenSpaces, gottenTabs, loc) {
        if (gottenSpaces && gottenTabs) {
            return;
        }
        var msg = this.createErrorMessage(needed, gottenSpaces, gottenTabs);
        var width = gottenSpaces + gottenTabs;
        var start = (loc !== undefined ? loc : node.getStart()) - width;
        var desiredIndent = (indentType === 'space' ? ' ' : '\t').repeat(needed);
        var fix = this.createReplacement(start, width, desiredIndent);
        this.addFailure(this.createFailure(start, width, msg, fix));
    };
    IndentWalker.prototype.isNodeFirstInLine = function (node, byEndLocation) {
        if (byEndLocation === void 0) { byEndLocation = false; }
        var token = byEndLocation ? node.getLastToken() : node.getFirstToken();
        var pos = token.getStart() - 1;
        while ([' ', '\t'].indexOf(this.srcText.charAt(pos)) !== -1) {
            pos -= 1;
        }
        return this.srcText.charAt(pos) === '\n' || this._firstInLineCommentHelper(node);
    };
    IndentWalker.prototype._firstInLineCommentHelper = function (node) {
        var pos;
        var firstInLine = false;
        var comments = ts.getLeadingCommentRanges(node.getFullText(), 0);
        if (comments && comments.length) {
            var offset = node.getFullStart();
            var lastComment = comments[comments.length - 1];
            var comment = this.getSourceSubstr(lastComment.pos + offset, lastComment.end + offset);
            if (comment.indexOf('\n') !== -1) {
                firstInLine = true;
            }
            else {
                pos = lastComment.pos + offset;
                while (pos > 0 && this.srcText.charAt(pos) !== '\n') {
                    pos -= 1;
                }
                var content = this.getSourceSubstr(pos + 1, lastComment.pos + offset);
                if (content.trim() === '') {
                    firstInLine = true;
                }
            }
        }
        return firstInLine;
    };
    IndentWalker.prototype.getNodeIndent = function (node) {
        if (node === this.getSourceFile()) {
            return { contentStart: 0, firstInLine: true, space: 0, tab: 0, goodChar: 0, badChar: 0 };
        }
        if (node.kind === ts.SyntaxKind.SyntaxList && node.parent) {
            return this.getNodeIndent(node.parent);
        }
        var endIndex = node.getStart(this.srcFile);
        var pos = endIndex - 1;
        while (pos > 0 && this.srcText.charAt(pos) !== '\n') {
            pos -= 1;
        }
        var str = this.getSourceSubstr(pos + 1, endIndex);
        var whiteSpace = (str.match(/^\s+/) || [''])[0];
        var indentChars = whiteSpace.split('');
        var spaces = indentChars.filter(function (char) { return char === ' '; }).length;
        var tabs = indentChars.filter(function (char) { return char === '\t'; }).length;
        return {
            contentStart: pos + spaces + tabs + 1,
            firstInLine: spaces + tabs === str.length || this._firstInLineCommentHelper(node),
            space: spaces,
            tab: tabs,
            goodChar: indentType === 'space' ? spaces : tabs,
            badChar: indentType === 'space' ? tabs : spaces
        };
    };
    IndentWalker.prototype.checkNodeIndent = function (node, neededIndent) {
        var actualIndent = this.getNodeIndent(node);
        if (!isKind(node, 'ArrayLiteralExpression') &&
            !isKind(node, 'ObjectLiteralExpression') &&
            (actualIndent.goodChar !== neededIndent || actualIndent.badChar !== 0) &&
            actualIndent.firstInLine) {
            this.report(node, neededIndent, actualIndent.space, actualIndent.tab, actualIndent.contentStart);
        }
        if (isKind(node, 'IfStatement')) {
            var elseStatement = node.elseStatement;
            if (elseStatement) {
                var elseKeyword = node.getChildren().filter(function (ch) { return isKind(ch, 'ElseKeyword'); }).shift();
                this.checkNodeIndent(elseKeyword, neededIndent);
                if (!this.isNodeFirstInLine(elseStatement)) {
                    this.checkNodeIndent(elseStatement, neededIndent);
                }
            }
        }
        else if (isKind(node, 'TryStatement')) {
            var handler = node.catchClause;
            if (handler) {
                var catchKeyword = handler.getChildren().filter(function (ch) { return isKind(ch, 'CatchKeyword'); }).shift();
                this.checkNodeIndent(catchKeyword, neededIndent);
                if (!this.isNodeFirstInLine(handler)) {
                    this.checkNodeIndent(handler, neededIndent);
                }
            }
            var finalizer = node.finallyBlock;
            if (finalizer) {
                var finallyKeyword = node.getChildren().filter(function (ch) { return isKind(ch, 'FinallyKeyword'); }).shift();
                this.checkNodeIndent(finallyKeyword, neededIndent);
            }
        }
        else if (isKind(node, 'DoStatement')) {
            var whileKeyword = node.getChildren().filter(function (ch) { return isKind(ch, 'WhileKeyword'); }).shift();
            this.checkNodeIndent(whileKeyword, neededIndent);
        }
    };
    IndentWalker.prototype.isSingleLineNode = function (node) {
        var text = node.kind === ts.SyntaxKind.SyntaxList ? node.getFullText() : node.getText();
        return text.indexOf('\n') === -1;
    };
    IndentWalker.prototype.blockIndentationCheck = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        var functionLike = [
            'FunctionExpression',
            'FunctionDeclaration',
            'MethodDeclaration',
            'Constructor',
            'ArrowFunction'
        ];
        if (node.parent && isOneOf(node.parent, functionLike)) {
            this.checkIndentInFunctionBlock(node);
            return;
        }
        var indent;
        var nodesToCheck = [];
        var statementsWithProperties = [
            'IfStatement',
            'WhileStatement',
            'ForStatement',
            'ForInStatement',
            'ForOfStatement',
            'DoStatement',
            'ClassDeclaration',
            'ClassExpression',
            'InterfaceDeclaration',
            'TypeLiteral',
            'TryStatement',
            'SourceFile'
        ];
        if (node.parent && isOneOf(node.parent, statementsWithProperties) && this.isNodeBodyBlock(node)) {
            indent = this.getNodeIndent(node.parent).goodChar;
        }
        else if (node.parent && isKind(node.parent, 'CatchClause')) {
            indent = this.getNodeIndent(node.parent.parent).goodChar;
        }
        else {
            indent = this.getNodeIndent(node).goodChar;
        }
        if (isKind(node, 'IfStatement') && !isKind(node.thenStatement, 'Block')) {
            nodesToCheck = [node.thenStatement];
        }
        else {
            if (isKind(node, 'Block')) {
                nodesToCheck = node.getChildren()[1].getChildren();
            }
            else if (node.parent &&
                isOneOf(node.parent, [
                    'ClassDeclaration',
                    'ClassExpression',
                    'InterfaceDeclaration',
                    'TypeLiteral'
                ])) {
                nodesToCheck = node.getChildren();
            }
            else {
                nodesToCheck = [node.statement];
            }
        }
        this.checkNodeIndent(node, indent);
        if (nodesToCheck.length > 0) {
            this.checkNodesIndent(nodesToCheck, indent + indentSize);
        }
        if (isKind(node, 'Block')) {
            this.checkLastNodeLineIndent(node, indent);
        }
        else if (node.parent && this.isNodeBodyBlock(node)) {
            this.checkLastNodeLineIndent(node.parent, indent);
        }
    };
    IndentWalker.prototype.isAssignment = function (node) {
        if (!isKind(node, 'BinaryExpression')) {
            return false;
        }
        return node.operatorToken.getText() === '=';
    };
    IndentWalker.prototype.isNodeBodyBlock = function (node) {
        var hasBlock = [
            'ClassDeclaration',
            'ClassExpression',
            'InterfaceDeclaration',
            'TypeLiteral'
        ];
        return isKind(node, 'Block') || (isKind(node, 'SyntaxList') &&
            isOneOf(node.parent, hasBlock));
    };
    IndentWalker.prototype.checkFirstNodeLineIndent = function (node, firstLineIndent) {
        var startIndent = this.getNodeIndent(node);
        var firstInLine = startIndent.firstInLine;
        if (firstInLine && (startIndent.goodChar !== firstLineIndent || startIndent.badChar !== 0)) {
            this.report(node, firstLineIndent, startIndent.space, startIndent.tab, startIndent.contentStart);
        }
    };
    IndentWalker.prototype.checkLastNodeLineIndent = function (node, lastLineIndent) {
        var lastToken = node.getLastToken();
        var endIndent = this.getNodeIndent(lastToken);
        var firstInLine = endIndent.firstInLine;
        if (firstInLine && (endIndent.goodChar !== lastLineIndent || endIndent.badChar !== 0)) {
            this.report(lastToken, lastLineIndent, endIndent.space, endIndent.tab);
        }
    };
    IndentWalker.prototype.isOuterIIFE = function (node) {
        if (!node.parent)
            return false;
        var parent = node.parent;
        var expressionIsNode = parent.expression !== node;
        if (isKind(parent, 'ParenthesizedExpression')) {
            parent = parent.parent;
        }
        if (!isKind(parent, 'CallExpression') || expressionIsNode) {
            return false;
        }
        var stmt = parent;
        var condition;
        do {
            stmt = stmt.parent;
            condition = (isKind(stmt, 'PrefixUnaryExpression') && (stmt.operator === ts.SyntaxKind.ExclamationToken ||
                stmt.operator === ts.SyntaxKind.TildeToken ||
                stmt.operator === ts.SyntaxKind.PlusToken ||
                stmt.operator === ts.SyntaxKind.MinusToken) ||
                isKind(stmt, 'BinaryExpression') ||
                isKind(stmt, 'SyntaxList') ||
                isKind(stmt, 'VariableDeclaration') ||
                isKind(stmt, 'VariableDeclarationList') ||
                isKind(stmt, 'ParenthesizedExpression'));
        } while (condition);
        return ((isKind(stmt, 'ExpressionStatement') ||
            isKind(stmt, 'VariableStatement')) &&
            !!stmt.parent && isKind(stmt.parent, 'SourceFile'));
    };
    IndentWalker.prototype.isArgBeforeCalleeNodeMultiline = function (node) {
        var parent = node.parent;
        if (parent && parent['arguments'].length >= 2 && parent['arguments'][1] === node) {
            var firstArg = parent['arguments'][0];
            return this.getLine(firstArg, true) > this.getLine(firstArg);
        }
        return false;
    };
    IndentWalker.prototype.checkIndentInFunctionBlock = function (node) {
        var calleeNode = node.parent;
        var indent = this.getNodeIndent(calleeNode).goodChar;
        if (calleeNode.parent && calleeNode.parent.kind === ts.SyntaxKind.CallExpression) {
            var calleeParent = calleeNode.parent;
            if (calleeNode.kind !== ts.SyntaxKind.FunctionExpression && calleeNode.kind !== ts.SyntaxKind.ArrowFunction) {
                if (calleeParent && this.getLine(calleeParent) < this.getLine(node)) {
                    indent = this.getNodeIndent(calleeParent).goodChar;
                }
            }
            else {
                var callee = calleeParent.expression;
                if (this.isArgBeforeCalleeNodeMultiline(calleeNode) &&
                    this.getLine(callee) === this.getLine(callee, true) &&
                    !this.isNodeFirstInLine(calleeNode)) {
                    indent = this.getNodeIndent(calleeParent).goodChar;
                }
            }
        }
        var functionOffset = indentSize;
        if (OPTIONS.outerIIFEBody !== null && this.isOuterIIFE(calleeNode)) {
            functionOffset = OPTIONS.outerIIFEBody * indentSize;
        }
        else if (calleeNode.kind === ts.SyntaxKind.FunctionExpression) {
            functionOffset = OPTIONS.FunctionExpression.body * indentSize;
        }
        else if (calleeNode.kind === ts.SyntaxKind.FunctionDeclaration) {
            functionOffset = OPTIONS.FunctionDeclaration.body * indentSize;
        }
        else if (isOneOf(calleeNode, ['MethodDeclaration', 'Constructor'])) {
            functionOffset = OPTIONS.FunctionExpression.body * indentSize;
        }
        indent += functionOffset;
        var parentVarNode = this.getVariableDeclaratorNode(node);
        if (parentVarNode && this.isNodeInVarOnTop(node, parentVarNode) && parentVarNode.parent) {
            var varKind = parentVarNode.parent.getFirstToken().getText();
            indent += indentSize * OPTIONS.VariableDeclarator[varKind];
        }
        this.checkFirstNodeLineIndent(node, indent - functionOffset);
        if (node.statements.length) {
            this.checkNodesIndent(node.statements, indent);
        }
        this.checkLastNodeLineIndent(node, indent - functionOffset);
    };
    IndentWalker.prototype.checkNodesIndent = function (nodes, indent) {
        var _this = this;
        nodes.forEach(function (node) { return _this.checkNodeIndent(node, indent); });
    };
    IndentWalker.prototype.expectedCaseIndent = function (node, switchIndent) {
        var switchNode = (node.kind === ts.SyntaxKind.SwitchStatement) ? node : node.parent;
        var line = this.getLine(switchNode);
        var caseIndent;
        if (this.caseIndentStore[line]) {
            return this.caseIndentStore[line];
        }
        else {
            if (typeof switchIndent === 'undefined') {
                switchIndent = this.getNodeIndent(switchNode).goodChar;
            }
            caseIndent = switchIndent + (indentSize * OPTIONS.SwitchCase);
            this.caseIndentStore[line] = caseIndent;
            return caseIndent;
        }
    };
    IndentWalker.prototype.expectedVarIndent = function (node, varIndent) {
        var varNode = node.parent;
        var line = this.getLine(varNode);
        var indent;
        if (this.varIndentStore[line]) {
            return this.varIndentStore[line];
        }
        else {
            if (typeof varIndent === 'undefined') {
                varIndent = this.getNodeIndent(varNode).goodChar;
            }
            var varKind = varNode.getFirstToken().getText();
            indent = varIndent + (indentSize * OPTIONS.VariableDeclarator[varKind]);
            this.varIndentStore[line] = indent;
            return indent;
        }
    };
    IndentWalker.prototype.getParentNodeByType = function (node, kind, stopAtList) {
        if (stopAtList === void 0) { stopAtList = [ts.SyntaxKind.SourceFile]; }
        var parent = node.parent;
        while (parent
            && parent.kind !== kind
            && stopAtList.indexOf(parent.kind) === -1
            && parent.kind !== ts.SyntaxKind.SourceFile) {
            parent = parent.parent;
        }
        return parent && parent.kind === kind ? parent : null;
    };
    IndentWalker.prototype.getVariableDeclaratorNode = function (node) {
        return this.getParentNodeByType(node, ts.SyntaxKind.VariableDeclaration);
    };
    IndentWalker.prototype.getBinaryExpressionNode = function (node) {
        return this.getParentNodeByType(node, ts.SyntaxKind.BinaryExpression);
    };
    IndentWalker.prototype.checkIndentInArrayOrObjectBlock = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        var elements = isKind(node, 'ObjectLiteralExpression') ? node['properties'] : node['elements'];
        elements = elements.filter(function (elem) { return elem.getText() !== ''; });
        var nodeLine = this.getLine(node);
        var nodeEndLine = this.getLine(node, true);
        var nodeIndent;
        var elementsIndent;
        var varKind;
        var parentVarNode = this.getVariableDeclaratorNode(node);
        if (this.isNodeFirstInLine(node) && node.parent) {
            var parent = node.parent;
            nodeIndent = this.getNodeIndent(parent).goodChar;
            if (parentVarNode && this.getLine(parentVarNode) !== nodeLine) {
                if (!isKind(parent, 'VariableDeclaration') || parentVarNode === parentVarNode.parent.declarations[0]) {
                    var parentVarLine = this.getLine(parentVarNode);
                    var parentLine = this.getLine(parent);
                    if (isKind(parent, 'VariableDeclaration') && parentVarLine === parentLine && parentVarNode.parent) {
                        varKind = parentVarNode.parent.getFirstToken().getText();
                        nodeIndent = nodeIndent + (indentSize * OPTIONS.VariableDeclarator[varKind]);
                    }
                    else if (isOneOf(parent, [
                        'ObjectLiteralExpression',
                        'ArrayLiteralExpression',
                        'CallExpression',
                        'ArrowFunction',
                        'NewExpression',
                        'BinaryExpression'
                    ])) {
                        nodeIndent = nodeIndent + indentSize;
                    }
                }
            }
            else if (!parentVarNode &&
                !this.isFirstArrayElementOnSameLine(parent) &&
                parent.kind !== ts.SyntaxKind.PropertyAccessExpression &&
                parent.kind !== ts.SyntaxKind.ExpressionStatement &&
                parent.kind !== ts.SyntaxKind.PropertyAssignment &&
                !(this.isAssignment(parent))) {
                nodeIndent = nodeIndent + indentSize;
            }
            elementsIndent = nodeIndent + indentSize;
            this.checkFirstNodeLineIndent(node, nodeIndent);
        }
        else {
            nodeIndent = this.getNodeIndent(node).goodChar;
            elementsIndent = nodeIndent + indentSize;
        }
        if (parentVarNode && this.isNodeInVarOnTop(node, parentVarNode) && parentVarNode.parent) {
            varKind = parentVarNode.parent.getFirstToken().getText();
            elementsIndent += indentSize * OPTIONS.VariableDeclarator[varKind];
        }
        this.checkNodesIndent(elements, elementsIndent);
        if (elements.length > 0) {
            var lastLine = this.getLine(elements[elements.length - 1], true);
            if (lastLine === nodeEndLine) {
                return;
            }
        }
        this.checkLastNodeLineIndent(node, elementsIndent - indentSize);
    };
    IndentWalker.prototype.isFirstArrayElementOnSameLine = function (node) {
        if (isKind(node, 'ArrayLiteralExpression')) {
            var ele = node.elements[0];
            if (ele) {
                return isKind(ele, 'ObjectLiteralExpression') && this.getLine(ele) === this.getLine(node);
            }
        }
        return false;
    };
    IndentWalker.prototype.isNodeInVarOnTop = function (node, varNode) {
        var nodeLine = this.getLine(node);
        var parentLine = this.getLine(varNode.parent);
        return varNode &&
            parentLine === nodeLine &&
            varNode.parent.declarations.length > 1;
    };
    IndentWalker.prototype.blockLessNodes = function (node) {
        if (!isKind(node.statement, 'Block')) {
            this.blockIndentationCheck(node);
        }
    };
    IndentWalker.prototype.checkIndentInVariableDeclarations = function (node) {
        var indent = this.expectedVarIndent(node);
        this.checkNodeIndent(node, indent);
    };
    IndentWalker.prototype.visitCase = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        var caseIndent = this.expectedCaseIndent(node);
        this.checkNodesIndent(node.statements, caseIndent + indentSize);
    };
    IndentWalker.prototype.checkLastReturnStatementLineIndent = function (node, firstLineIndent) {
        if (!node.expression) {
            return;
        }
        var lastToken = node.expression.getLastToken();
        var endIndex = lastToken.getStart();
        var pos = endIndex - 1;
        while (pos > 0 && this.srcText.charAt(pos) !== '\n') {
            pos -= 1;
        }
        var textBeforeClosingParenthesis = this.getSourceSubstr(pos + 1, endIndex);
        if (textBeforeClosingParenthesis.trim()) {
            return;
        }
        var endIndent = this.getNodeIndent(lastToken);
        if (endIndent.goodChar !== firstLineIndent) {
            this.report(node, firstLineIndent, endIndent.space, endIndent.tab, lastToken.getStart());
        }
    };
    IndentWalker.prototype.visitClassDeclaration = function (node) {
        var len = node.getChildCount();
        this.blockIndentationCheck(node.getChildAt(len - 2));
        _super.prototype.visitClassDeclaration.call(this, node);
    };
    IndentWalker.prototype.visitClassExpression = function (node) {
        var len = node.getChildCount();
        this.blockIndentationCheck(node.getChildAt(len - 2));
        _super.prototype.visitClassExpression.call(this, node);
    };
    IndentWalker.prototype.visitInterfaceDeclaration = function (node) {
        var len = node.getChildCount();
        this.blockIndentationCheck(node.getChildAt(len - 2));
        _super.prototype.visitInterfaceDeclaration.call(this, node);
    };
    IndentWalker.prototype.visitTypeLiteral = function (node) {
        var len = node.getChildCount();
        this.blockIndentationCheck(node.getChildAt(len - 2));
        _super.prototype.visitTypeLiteral.call(this, node);
    };
    IndentWalker.prototype.visitBlock = function (node) {
        this.blockIndentationCheck(node);
        _super.prototype.visitBlock.call(this, node);
    };
    IndentWalker.prototype.visitIfStatement = function (node) {
        var thenLine = this.getLine(node.thenStatement);
        var line = this.getLine(node);
        if (!isKind(node.thenStatement, 'Block') && thenLine > line) {
            this.blockIndentationCheck(node);
        }
        _super.prototype.visitIfStatement.call(this, node);
    };
    IndentWalker.prototype.visitObjectLiteralExpression = function (node) {
        this.checkIndentInArrayOrObjectBlock(node);
        _super.prototype.visitObjectLiteralExpression.call(this, node);
    };
    IndentWalker.prototype.visitArrayLiteralExpression = function (node) {
        this.checkIndentInArrayOrObjectBlock(node);
        _super.prototype.visitArrayLiteralExpression.call(this, node);
    };
    IndentWalker.prototype.visitSwitchStatement = function (node) {
        var switchIndent = this.getNodeIndent(node).goodChar;
        var caseIndent = this.expectedCaseIndent(node, switchIndent);
        this.checkNodesIndent(node.caseBlock.clauses, caseIndent);
        this.checkLastNodeLineIndent(node, switchIndent);
        _super.prototype.visitSwitchStatement.call(this, node);
    };
    IndentWalker.prototype.visitCaseClause = function (node) {
        this.visitCase(node);
        _super.prototype.visitCaseClause.call(this, node);
    };
    IndentWalker.prototype.visitDefaultClause = function (node) {
        this.visitCase(node);
        _super.prototype.visitDefaultClause.call(this, node);
    };
    IndentWalker.prototype.visitWhileStatement = function (node) {
        this.blockLessNodes(node);
        _super.prototype.visitWhileStatement.call(this, node);
    };
    IndentWalker.prototype.visitForStatement = function (node) {
        this.blockLessNodes(node);
        _super.prototype.visitForStatement.call(this, node);
    };
    IndentWalker.prototype.visitForInStatement = function (node) {
        this.blockLessNodes(node);
        _super.prototype.visitForInStatement.call(this, node);
    };
    IndentWalker.prototype.visitDoStatement = function (node) {
        this.blockLessNodes(node);
        _super.prototype.visitDoStatement.call(this, node);
    };
    IndentWalker.prototype.visitVariableDeclaration = function (node) {
        this.checkIndentInVariableDeclarations(node);
        _super.prototype.visitVariableDeclaration.call(this, node);
    };
    IndentWalker.prototype.visitVariableStatement = function (node) {
        _super.prototype.visitVariableStatement.call(this, node);
        var list = node.getChildAt(0).getChildAt(1);
        if (!list) {
            return;
        }
        var len = list.getChildCount();
        if (len === 0) {
            return;
        }
        var lastElement = list.getChildAt(len - 1);
        var lastToken = node.getLastToken();
        var lastTokenLine = this.getLine(lastToken, true);
        var lastElementLine = this.getLine(lastElement, true);
        if (lastTokenLine <= lastElementLine) {
            return;
        }
        var tokenBeforeLastElement = list.getChildAt(len - 2);
        if (tokenBeforeLastElement && isKind(tokenBeforeLastElement, 'CommaToken')) {
            this.checkLastNodeLineIndent(node, this.getNodeIndent(tokenBeforeLastElement).goodChar);
        }
        else {
            var nodeIndent = this.getNodeIndent(node).goodChar;
            var varKind = node.getFirstToken().getText();
            var declaratorIndent = typeof OPTIONS.VariableDeclarator[varKind] === 'number' ? OPTIONS.VariableDeclarator[varKind] : DEFAULT_VARIABLE_INDENT;
            var elementsIndent = nodeIndent + indentSize * declaratorIndent;
            this.checkLastNodeLineIndent(node, elementsIndent - indentSize);
        }
    };
    IndentWalker.prototype.visitFunctionDeclaration = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        if (OPTIONS.FunctionDeclaration.parameters === 'first' && node.parameters.length) {
            var indent = this.getLineAndCharacter(node.parameters[0]).character;
            this.checkNodesIndent(node.parameters.slice(1), indent);
        }
        else if (OPTIONS.FunctionDeclaration.parameters !== null) {
            var nodeIndent = this.getNodeIndent(node).goodChar;
            this.checkNodesIndent(node.parameters, nodeIndent + indentSize * OPTIONS.FunctionDeclaration.parameters);
            var closingParen = node.getChildAt(node.getChildCount() - 2);
            this.checkNodeIndent(closingParen, nodeIndent);
        }
        _super.prototype.visitFunctionDeclaration.call(this, node);
    };
    IndentWalker.prototype.checkFunctionMethodExpression = function (node) {
        if (OPTIONS.FunctionExpression.parameters === 'first' && node.parameters.length) {
            var indent = this.getLineAndCharacter(node.parameters[0]).character;
            this.checkNodesIndent(node.parameters.slice(1), indent);
        }
        else if (OPTIONS.FunctionExpression.parameters !== null) {
            var nodeIndent = this.getNodeIndent(node).goodChar;
            this.checkNodesIndent(node.parameters, nodeIndent + indentSize * OPTIONS.FunctionExpression.parameters);
            var closingParen = node.getChildAt(node.getChildCount() - 2);
            this.checkNodeIndent(closingParen, nodeIndent);
        }
    };
    IndentWalker.prototype.visitFunctionExpression = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        this.checkFunctionMethodExpression(node);
        _super.prototype.visitFunctionExpression.call(this, node);
    };
    IndentWalker.prototype.visitMethodDeclaration = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        this.checkFunctionMethodExpression(node);
        _super.prototype.visitMethodDeclaration.call(this, node);
    };
    IndentWalker.prototype.visitConstructorDeclaration = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        this.checkFunctionMethodExpression(node);
        _super.prototype.visitConstructorDeclaration.call(this, node);
    };
    IndentWalker.prototype.visitCallExpression = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        if (OPTIONS.CallExpression.arguments === 'first' && node.arguments.length) {
            var indent = this.getLineAndCharacter(node.arguments[0]).character;
            this.checkNodesIndent(node.arguments.slice(1), indent);
        }
        else if (OPTIONS.CallExpression.arguments !== null) {
            var openParen = node.getChildAt(node.getChildCount(this.srcFile) - 3, this.srcFile);
            var openParenIndent = this.getNodeIndent(openParen);
            this.checkNodesIndent(node.arguments, openParenIndent.goodChar + indentSize * OPTIONS.CallExpression.arguments);
        }
        _super.prototype.visitCallExpression.call(this, node);
    };
    IndentWalker.prototype.visitPropertyAccessExpression = function (node) {
        if (this.isSingleLineNode(node)) {
            return;
        }
        var varDec = ts.SyntaxKind.VariableDeclaration;
        var funcKind = [ts.SyntaxKind.FunctionExpression, ts.SyntaxKind.ArrowFunction];
        if (this.getParentNodeByType(node, varDec, funcKind)) {
            return;
        }
        var binExp = ts.SyntaxKind.BinaryExpression;
        var funcExp = ts.SyntaxKind.FunctionExpression;
        var binaryNode = this.getParentNodeByType(node, binExp, [funcExp]);
        if (binaryNode && this.isAssignment(binaryNode)) {
            return;
        }
        _super.prototype.visitPropertyAccessExpression.call(this, node);
        if (typeof OPTIONS.MemberExpression === 'undefined') {
            return;
        }
        var propertyIndent = this.getNodeIndent(node).goodChar + indentSize * OPTIONS.MemberExpression;
        var dotToken = node.getChildAt(1);
        var checkNodes = [node.name, dotToken];
        this.checkNodesIndent(checkNodes, propertyIndent);
    };
    IndentWalker.prototype.visitReturnStatement = function (node) {
        if (this.isSingleLineNode(node) || !node.expression) {
            return;
        }
        var firstLineIndent = this.getNodeIndent(node).goodChar;
        if (isKind(node.expression, 'ParenthesizedExpression')) {
            this.checkLastReturnStatementLineIndent(node, firstLineIndent);
        }
        else {
            this.checkNodeIndent(node, firstLineIndent);
        }
        _super.prototype.visitReturnStatement.call(this, node);
    };
    IndentWalker.prototype.visitSourceFile = function (node) {
        this.checkNodesIndent(node.statements, 0);
        _super.prototype.visitSourceFile.call(this, node);
    };
    return IndentWalker;
}(Lint.RuleWalker));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7UUFDakQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFzQixJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQy9DLE9BQU87U0FDUjtRQUVELGlCQUFNLDZCQUE2QixZQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksT0FBTyxPQUFPLENBQUMsZ0JBQWdCLEtBQUssV0FBVyxFQUFFO1lBQ25ELE9BQU87U0FDUjtRQUVELElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFJakcsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxJQUFNLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRVMsMkNBQW9CLEdBQTlCLFVBQStCLElBQXdCO1FBQ3JELElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuRCxPQUFPO1NBQ1I7UUFFRCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUcxRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLHlCQUF5QixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztTQUNoRTthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDN0M7UUFDRCxpQkFBTSxvQkFBb0IsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRVMsc0NBQWUsR0FBekIsVUFBMEIsSUFBbUI7UUFFM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsaUJBQU0sZUFBZSxZQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxtQkFBQztBQUFELENBM2dDQSxBQTJnQ0MsQ0EzZ0MwQixJQUFJLENBQUMsVUFBVSxHQTJnQ3pDIiwiZmlsZSI6InJ1bGVzL3RlckluZGVudFJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==

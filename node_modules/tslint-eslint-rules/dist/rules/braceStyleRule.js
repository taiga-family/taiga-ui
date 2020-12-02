"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ts = require("typescript");
var Lint = require("tslint");
var OPTION_1TBS = '1tbs';
var OPTION_ALLMAN = 'allman';
var OPTION_STROUSTRUP = 'stroustrup';
var BraceStyle;
(function (BraceStyle) {
    BraceStyle[BraceStyle["OneTBS"] = 0] = "OneTBS";
    BraceStyle[BraceStyle["Allman"] = 1] = "Allman";
    BraceStyle[BraceStyle["Stroustrup"] = 2] = "Stroustrup";
})(BraceStyle || (BraceStyle = {}));
var Rule = (function (_super) {
    tslib_1.__extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        var walker = new BraceStyleWalker(sourceFile, this.getOptions());
        return this.applyWithWalker(walker);
    };
    Rule.FAILURE_STRING = {
        open: 'Opening curly brace does not appear on the same line as controlling statement.',
        openAllman: 'Opening curly brace appears on the same line as controlling statement.',
        body: 'Statement inside of curly braces should be on next line.',
        close: 'Closing curly brace does not appear on the same line as the subsequent block.',
        closeSingle: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.',
        closeStroustrupAllman: 'Closing curly brace appears on the same line as the subsequent block.'
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var BraceStyleWalker = (function (_super) {
    tslib_1.__extends(BraceStyleWalker, _super);
    function BraceStyleWalker(sourceFile, options) {
        var _this = _super.call(this, sourceFile, options) || this;
        _this.allowSingleLine = false;
        if (_this.hasOption(OPTION_1TBS)) {
            _this.braceStyle = BraceStyle.OneTBS;
        }
        else if (_this.hasOption(OPTION_ALLMAN)) {
            _this.braceStyle = BraceStyle.Allman;
        }
        else if (_this.hasOption(OPTION_STROUSTRUP)) {
            _this.braceStyle = BraceStyle.Stroustrup;
        }
        else {
        }
        _this.allowSingleLine = _this.getOptions()[1] && _this.getOptions()[1].allowSingleLine;
        return _this;
    }
    BraceStyleWalker.prototype.visitTryStatement = function (tryStatement) {
        var _this = this;
        _super.prototype.visitTryStatement.call(this, tryStatement);
        var checkTryStatementError = function (node) {
            var previousNode = _this.getPreviousNode(tryStatement.getChildren(), node);
            var openingBracketError = _this.areOnSameLine(previousNode, node) !== (_this.braceStyle === BraceStyle.OneTBS);
            if (_this.allowSingleLine && _this.getStartPosition(node).line === _this.getEndPosition(tryStatement).line) {
                return;
            }
            if (openingBracketError) {
                var failureString = _this.braceStyle === BraceStyle.OneTBS ? Rule.FAILURE_STRING.open : Rule.FAILURE_STRING.openAllman;
                _this.addFailure(_this.createFailure(node.getStart(), node.getWidth(), failureString));
            }
        };
        var catchClause = tryStatement.catchClause;
        if (catchClause) {
            checkTryStatementError(catchClause);
        }
        var finallyBlock = tryStatement.finallyBlock;
        if (finallyBlock) {
            checkTryStatementError(finallyBlock);
        }
    };
    BraceStyleWalker.prototype.visitIfStatement = function (ifStatement) {
        _super.prototype.visitIfStatement.call(this, ifStatement);
        var elseKeyword = ifStatement.getChildren().filter(function (ch) { return ch.kind === ts.SyntaxKind.ElseKeyword; }).shift();
        if (!elseKeyword) {
            return;
        }
        var previousNode = ifStatement.getChildren()[ifStatement.getChildren().indexOf(elseKeyword) - 1];
        var openingBracketError = this.areOnSameLine(previousNode, elseKeyword) !== (this.braceStyle === BraceStyle.OneTBS);
        if (this.allowSingleLine && this.getStartPosition(elseKeyword).line === this.getEndPosition(ifStatement).line) {
            return;
        }
        if (!ifStatement.getChildren().some(function (ch) { return ch.kind === ts.SyntaxKind.Block; })) {
            return;
        }
        if (openingBracketError) {
            var failureString = this.braceStyle === BraceStyle.OneTBS ? Rule.FAILURE_STRING.open : Rule.FAILURE_STRING.openAllman;
            this.addFailure(this.createFailure(elseKeyword.getStart(), elseKeyword.getWidth(), failureString));
        }
    };
    BraceStyleWalker.prototype.visitBlock = function (block) {
        _super.prototype.visitBlock.call(this, block);
        if (this.allowSingleLine && this.getStartPosition(block).line === this.getEndPosition(block).line) {
            return;
        }
        var blockChildren = block.getChildren();
        var openingCurlyBrace = blockChildren.filter(function (ch) { return ch.kind === ts.SyntaxKind.OpenBraceToken; }).shift();
        var closingCurlyBrace = blockChildren.filter(function (ch) { return ch.kind === ts.SyntaxKind.CloseBraceToken; }).pop();
        var syntaxList = blockChildren.filter(function (ch) { return ch.kind === ts.SyntaxKind.SyntaxList; }).shift();
        var parentChildren = block.parent ? block.parent.getChildren() : [];
        var blockPreviousNode = parentChildren[parentChildren.indexOf(block) - 1];
        if (!openingCurlyBrace || !closingCurlyBrace || !syntaxList || !blockPreviousNode) {
            return;
        }
        var openingBracketError = this.areOnSameLine(blockPreviousNode, block) === (this.braceStyle === BraceStyle.Allman);
        if (openingBracketError) {
            var failureString = this.braceStyle === BraceStyle.Allman ? Rule.FAILURE_STRING.openAllman : Rule.FAILURE_STRING.open;
            this.addFailure(this.createFailure(openingCurlyBrace.getStart(), openingCurlyBrace.getWidth(), failureString));
        }
        if (syntaxList.getChildCount() > 0) {
            var bodyError = this.areOnSameLine(openingCurlyBrace, syntaxList);
            if (bodyError) {
                this.addFailure(this.createFailure(syntaxList.getStart(), syntaxList.getWidth(), Rule.FAILURE_STRING.body));
            }
            var nodeBeforeClosingBracket = syntaxList.getChildren()[syntaxList.getChildren().length - 1];
            var closingBracketError = this.areOnSameLine(nodeBeforeClosingBracket, closingCurlyBrace);
            if (closingBracketError) {
                this.addFailure(this.createFailure(closingCurlyBrace.getStart(), closingCurlyBrace.getWidth(), Rule.FAILURE_STRING.closeSingle));
            }
        }
    };
    BraceStyleWalker.prototype.areOnSameLine = function (node, nextNode) {
        return this.getEndPosition(node).line === this.getStartPosition(nextNode).line;
    };
    BraceStyleWalker.prototype.getStartPosition = function (node) {
        return node.getSourceFile().getLineAndCharacterOfPosition(node.getStart());
    };
    BraceStyleWalker.prototype.getEndPosition = function (node) {
        return node.getSourceFile().getLineAndCharacterOfPosition(node.getEnd());
    };
    BraceStyleWalker.prototype.getPreviousNode = function (children, node) {
        var position = children.indexOf(node) - 1;
        while (position >= 0) {
            if (children[position].kind === ts.SyntaxKind.Block || children[position].kind === ts.SyntaxKind.CatchClause) {
                break;
            }
            position -= 1;
        }
        return children[position];
    };
    return BraceStyleWalker;
}(Lint.RuleWalker));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNqRixDQUFDO0lBRU8sMkNBQWdCLEdBQXhCLFVBQXlCLElBQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVPLHlDQUFjLEdBQXRCLFVBQXVCLElBQWE7UUFDbEMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUdPLDBDQUFlLEdBQXZCLFVBQXdCLFFBQW1CLEVBQUUsSUFBYTtRQUN4RCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxPQUFPLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQzVHLE1BQU07YUFDUDtZQUNELFFBQVEsSUFBSSxDQUFDLENBQUM7U0FDZjtRQUNELE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFSCx1QkFBQztBQUFELENBbEpBLEFBa0pDLENBbEo4QixJQUFJLENBQUMsVUFBVSxHQWtKN0MiLCJmaWxlIjoicnVsZXMvYnJhY2VTdHlsZVJ1bGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ptbG9wZXovdHNsaW50LWVzbGludC1ydWxlcy9zcmMifQ==

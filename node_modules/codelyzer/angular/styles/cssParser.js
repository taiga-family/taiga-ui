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
var chars = require("./chars");
var parseUtil_1 = require("./parseUtil");
var cssAst_1 = require("./cssAst");
var SPACE_OPERATOR = ' ';
var cssLexer_1 = require("./cssLexer");
var SLASH_CHARACTER = '/';
var GT_CHARACTER = '>';
var TRIPLE_GT_OPERATOR_STR = '>>>';
var DEEP_OPERATOR_STR = '/deep/';
var EOF_DELIM_FLAG = 1;
var RBRACE_DELIM_FLAG = 2;
var LBRACE_DELIM_FLAG = 4;
var COMMA_DELIM_FLAG = 8;
var COLON_DELIM_FLAG = 16;
var SEMICOLON_DELIM_FLAG = 32;
var NEWLINE_DELIM_FLAG = 64;
var RPAREN_DELIM_FLAG = 128;
var LPAREN_DELIM_FLAG = 256;
var SPACE_DELIM_FLAG = 512;
function _pseudoSelectorSupportsInnerSelectors(name) {
    return ['not', 'host', 'host-context'].indexOf(name) >= 0;
}
function isSelectorOperatorCharacter(code) {
    switch (code) {
        case chars.$SLASH:
        case chars.$TILDA:
        case chars.$PLUS:
        case chars.$GT:
            return true;
        default:
            return chars.isWhitespace(code);
    }
}
function getDelimFromCharacter(code) {
    switch (code) {
        case chars.$EOF:
            return EOF_DELIM_FLAG;
        case chars.$COMMA:
            return COMMA_DELIM_FLAG;
        case chars.$COLON:
            return COLON_DELIM_FLAG;
        case chars.$SEMICOLON:
            return SEMICOLON_DELIM_FLAG;
        case chars.$RBRACE:
            return RBRACE_DELIM_FLAG;
        case chars.$LBRACE:
            return LBRACE_DELIM_FLAG;
        case chars.$RPAREN:
            return RPAREN_DELIM_FLAG;
        case chars.$SPACE:
        case chars.$TAB:
            return SPACE_DELIM_FLAG;
        default:
            return cssLexer_1.isNewline(code) ? NEWLINE_DELIM_FLAG : 0;
    }
}
function characterContainsDelimiter(code, delimiters) {
    return (getDelimFromCharacter(code) & delimiters) > 0;
}
var ParsedCssResult = (function () {
    function ParsedCssResult(errors, ast) {
        this.errors = errors;
        this.ast = ast;
    }
    return ParsedCssResult;
}());
exports.ParsedCssResult = ParsedCssResult;
var CssParser = (function () {
    function CssParser() {
        this._errors = [];
    }
    CssParser.prototype.parse = function (css, url) {
        var lexer = new cssLexer_1.CssLexer();
        this._file = new parseUtil_1.ParseSourceFile(css, url);
        this._scanner = lexer.scan(css, false);
        var ast = this._parseStyleSheet(EOF_DELIM_FLAG);
        var errors = this._errors;
        this._errors = [];
        var result = new ParsedCssResult(errors, ast);
        this._file = null;
        this._scanner = null;
        return result;
    };
    CssParser.prototype._parseStyleSheet = function (delimiters) {
        var results = [];
        this._scanner.consumeEmptyStatements();
        while (this._scanner.peek != chars.$EOF) {
            this._scanner.setMode(cssLexer_1.CssLexerMode.BLOCK);
            results.push(this._parseRule(delimiters));
        }
        var span = null;
        if (results.length > 0) {
            var firstRule = results[0];
            span = this._generateSourceSpan(firstRule, this._lastToken);
        }
        return new cssAst_1.CssStyleSheetAst(span, results);
    };
    CssParser.prototype._getSourceContent = function () {
        return this._scanner != null ? this._scanner.input : '';
    };
    CssParser.prototype._extractSourceContent = function (start, end) {
        return this._getSourceContent().substring(start, end + 1);
    };
    CssParser.prototype._generateSourceSpan = function (start, end) {
        if (end === void 0) { end = null; }
        var startLoc;
        if (start instanceof cssAst_1.CssAst) {
            startLoc = start.location.start;
        }
        else {
            var token = start;
            if (token == null) {
                token = this._lastToken;
            }
            startLoc = new parseUtil_1.ParseLocation(this._file, token.index, token.line, token.column);
        }
        if (end == null) {
            end = this._lastToken;
        }
        var endLine = -1;
        var endColumn = -1;
        var endIndex = -1;
        if (end instanceof cssAst_1.CssAst) {
            endLine = end.location.end.line;
            endColumn = end.location.end.col;
            endIndex = end.location.end.offset;
        }
        else if (end instanceof cssLexer_1.CssToken) {
            endLine = end.line;
            endColumn = end.column;
            endIndex = end.index;
        }
        var endLoc = new parseUtil_1.ParseLocation(this._file, endIndex, endLine, endColumn);
        return new parseUtil_1.ParseSourceSpan(startLoc, endLoc);
    };
    CssParser.prototype._resolveBlockType = function (token) {
        switch (token.strValue) {
            case '@-o-keyframes':
            case '@-moz-keyframes':
            case '@-webkit-keyframes':
            case '@keyframes':
                return cssAst_1.BlockType.Keyframes;
            case '@charset':
                return cssAst_1.BlockType.Charset;
            case '@import':
                return cssAst_1.BlockType.Import;
            case '@namespace':
                return cssAst_1.BlockType.Namespace;
            case '@page':
                return cssAst_1.BlockType.Page;
            case '@document':
                return cssAst_1.BlockType.Document;
            case '@media':
                return cssAst_1.BlockType.MediaQuery;
            case '@font-face':
                return cssAst_1.BlockType.FontFace;
            case '@viewport':
                return cssAst_1.BlockType.Viewport;
            case '@supports':
                return cssAst_1.BlockType.Supports;
            default:
                return cssAst_1.BlockType.Unsupported;
        }
    };
    CssParser.prototype._parseRule = function (delimiters) {
        if (this._scanner.peek == chars.$AT) {
            return this._parseAtRule(delimiters);
        }
        return this._parseSelectorRule(delimiters);
    };
    CssParser.prototype._parseAtRule = function (delimiters) {
        var start = this._getScannerIndex();
        this._scanner.setMode(cssLexer_1.CssLexerMode.BLOCK);
        var token = this._scan();
        var startToken = token;
        this._assertCondition(token.type == cssLexer_1.CssTokenType.AtKeyword, "The CSS Rule " + token.strValue + " is not a valid [@] rule.", token);
        var block;
        var type = this._resolveBlockType(token);
        var span;
        var tokens;
        var endToken;
        var end;
        var strValue;
        var query;
        switch (type) {
            case cssAst_1.BlockType.Charset:
            case cssAst_1.BlockType.Namespace:
            case cssAst_1.BlockType.Import:
                var value = this._parseValue(delimiters);
                this._scanner.setMode(cssLexer_1.CssLexerMode.BLOCK);
                this._scanner.consumeEmptyStatements();
                span = this._generateSourceSpan(startToken, value);
                return new cssAst_1.CssInlineRuleAst(span, type, value);
            case cssAst_1.BlockType.Viewport:
            case cssAst_1.BlockType.FontFace:
                block = this._parseStyleBlock(delimiters);
                span = this._generateSourceSpan(startToken, block);
                return new cssAst_1.CssBlockRuleAst(span, type, block);
            case cssAst_1.BlockType.Keyframes:
                tokens = this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG);
                var name_1 = tokens[0];
                block = this._parseKeyframeBlock(delimiters);
                span = this._generateSourceSpan(startToken, block);
                return new cssAst_1.CssKeyframeRuleAst(span, name_1, block);
            case cssAst_1.BlockType.MediaQuery:
                this._scanner.setMode(cssLexer_1.CssLexerMode.MEDIA_QUERY);
                tokens = this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG);
                endToken = tokens[tokens.length - 1];
                end = endToken.index + endToken.strValue.length - 1;
                strValue = this._extractSourceContent(start, end);
                span = this._generateSourceSpan(startToken, endToken);
                query = new cssAst_1.CssAtRulePredicateAst(span, strValue, tokens);
                block = this._parseBlock(delimiters);
                strValue = this._extractSourceContent(start, this._getScannerIndex() - 1);
                span = this._generateSourceSpan(startToken, block);
                return new cssAst_1.CssMediaQueryRuleAst(span, strValue, query, block);
            case cssAst_1.BlockType.Document:
            case cssAst_1.BlockType.Supports:
            case cssAst_1.BlockType.Page:
                this._scanner.setMode(cssLexer_1.CssLexerMode.AT_RULE_QUERY);
                tokens = this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG);
                endToken = tokens[tokens.length - 1];
                end = endToken.index + endToken.strValue.length - 1;
                strValue = this._extractSourceContent(start, end);
                span = this._generateSourceSpan(startToken, tokens[tokens.length - 1]);
                query = new cssAst_1.CssAtRulePredicateAst(span, strValue, tokens);
                block = this._parseBlock(delimiters);
                strValue = this._extractSourceContent(start, block.end.offset);
                span = this._generateSourceSpan(startToken, block);
                return new cssAst_1.CssBlockDefinitionRuleAst(span, strValue, type, query, block);
            default:
                var listOfTokens_1 = [];
                var tokenName = token.strValue;
                this._scanner.setMode(cssLexer_1.CssLexerMode.ALL);
                this._error(cssLexer_1.generateErrorMessage(this._getSourceContent(), "The CSS \"at\" rule \"" + tokenName + "\" is not allowed to used here", token.strValue, token.index, token.line, token.column), token);
                this._collectUntilDelim(delimiters | LBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG).forEach(function (token) {
                    listOfTokens_1.push(token);
                });
                if (this._scanner.peek == chars.$LBRACE) {
                    listOfTokens_1.push(this._consume(cssLexer_1.CssTokenType.Character, '{'));
                    this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG).forEach(function (token) {
                        listOfTokens_1.push(token);
                    });
                    listOfTokens_1.push(this._consume(cssLexer_1.CssTokenType.Character, '}'));
                }
                endToken = listOfTokens_1[listOfTokens_1.length - 1];
                span = this._generateSourceSpan(startToken, endToken);
                return new cssAst_1.CssUnknownRuleAst(span, tokenName, listOfTokens_1);
        }
    };
    CssParser.prototype._parseSelectorRule = function (delimiters) {
        var start = this._getScannerIndex();
        var selectors = this._parseSelectors(delimiters);
        var block = this._parseStyleBlock(delimiters);
        var ruleAst;
        var span;
        var startSelector = selectors[0];
        if (block != null) {
            span = this._generateSourceSpan(startSelector, block);
            ruleAst = new cssAst_1.CssSelectorRuleAst(span, selectors, block);
        }
        else {
            var name_2 = this._extractSourceContent(start, this._getScannerIndex() - 1);
            var innerTokens_1 = [];
            selectors.forEach(function (selector) {
                selector.selectorParts.forEach(function (part) {
                    part.tokens.forEach(function (token) {
                        innerTokens_1.push(token);
                    });
                });
            });
            var endToken = innerTokens_1[innerTokens_1.length - 1];
            span = this._generateSourceSpan(startSelector, endToken);
            ruleAst = new cssAst_1.CssUnknownTokenListAst(span, name_2, innerTokens_1);
        }
        this._scanner.setMode(cssLexer_1.CssLexerMode.BLOCK);
        this._scanner.consumeEmptyStatements();
        return ruleAst;
    };
    CssParser.prototype._parseSelectors = function (delimiters) {
        delimiters |= LBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG;
        var selectors = [];
        var isParsingSelectors = true;
        while (isParsingSelectors) {
            selectors.push(this._parseSelector(delimiters));
            isParsingSelectors = !characterContainsDelimiter(this._scanner.peek, delimiters);
            if (isParsingSelectors) {
                this._consume(cssLexer_1.CssTokenType.Character, ',');
                isParsingSelectors = !characterContainsDelimiter(this._scanner.peek, delimiters);
                if (isParsingSelectors) {
                    this._scanner.consumeWhitespace();
                }
            }
        }
        return selectors;
    };
    CssParser.prototype._scan = function () {
        var output = this._scanner.scan();
        var token = output.token;
        var error = output.error;
        if (error != null) {
            this._error(cssLexer_1.getRawMessage(error), token);
        }
        this._lastToken = token;
        return token;
    };
    CssParser.prototype._getScannerIndex = function () {
        return this._scanner.index;
    };
    CssParser.prototype._consume = function (type, value) {
        if (value === void 0) { value = null; }
        var output = this._scanner.consume(type, value);
        var token = output.token;
        var error = output.error;
        if (error != null) {
            this._error(cssLexer_1.getRawMessage(error), token);
        }
        this._lastToken = token;
        return token;
    };
    CssParser.prototype._parseKeyframeBlock = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG;
        this._scanner.setMode(cssLexer_1.CssLexerMode.KEYFRAME_BLOCK);
        var startToken = this._consume(cssLexer_1.CssTokenType.Character, '{');
        var definitions = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            definitions.push(this._parseKeyframeDefinition(delimiters));
        }
        var endToken = this._consume(cssLexer_1.CssTokenType.Character, '}');
        var span = this._generateSourceSpan(startToken, endToken);
        return new cssAst_1.CssBlockAst(span, definitions);
    };
    CssParser.prototype._parseKeyframeDefinition = function (delimiters) {
        var stepTokens = [];
        delimiters |= LBRACE_DELIM_FLAG;
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            stepTokens.push(this._parseKeyframeLabel(delimiters | COMMA_DELIM_FLAG));
            if (this._scanner.peek != chars.$LBRACE) {
                this._consume(cssLexer_1.CssTokenType.Character, ',');
            }
        }
        var stylesBlock = this._parseStyleBlock(delimiters | RBRACE_DELIM_FLAG);
        var span = this._generateSourceSpan(stepTokens[0], stylesBlock);
        var ast = new cssAst_1.CssKeyframeDefinitionAst(span, stepTokens, stylesBlock);
        this._scanner.setMode(cssLexer_1.CssLexerMode.BLOCK);
        return ast;
    };
    CssParser.prototype._parseKeyframeLabel = function (delimiters) {
        this._scanner.setMode(cssLexer_1.CssLexerMode.KEYFRAME_BLOCK);
        return cssAst_1.mergeTokens(this._collectUntilDelim(delimiters));
    };
    CssParser.prototype._parsePseudoSelector = function (delimiters) {
        var start = this._getScannerIndex();
        delimiters &= ~COMMA_DELIM_FLAG;
        var startingDelims = delimiters;
        var startToken = this._consume(cssLexer_1.CssTokenType.Character, ':');
        var tokens = [startToken];
        if (this._scanner.peek == chars.$COLON) {
            tokens.push(this._consume(cssLexer_1.CssTokenType.Character, ':'));
        }
        var innerSelectors = [];
        this._scanner.setMode(cssLexer_1.CssLexerMode.PSEUDO_SELECTOR);
        var pseudoSelectorToken = this._consume(cssLexer_1.CssTokenType.Identifier);
        var pseudoSelectorName = pseudoSelectorToken.strValue;
        tokens.push(pseudoSelectorToken);
        if (this._scanner.peek == chars.$LPAREN) {
            this._scanner.setMode(cssLexer_1.CssLexerMode.PSEUDO_SELECTOR_WITH_ARGUMENTS);
            var openParenToken = this._consume(cssLexer_1.CssTokenType.Character, '(');
            tokens.push(openParenToken);
            if (_pseudoSelectorSupportsInnerSelectors(pseudoSelectorName)) {
                var innerDelims = startingDelims | LPAREN_DELIM_FLAG | RPAREN_DELIM_FLAG;
                if (pseudoSelectorName == 'not') {
                    innerDelims |= COMMA_DELIM_FLAG;
                }
                this._parseSelectors(innerDelims).forEach(function (selector) {
                    innerSelectors.push(selector);
                });
            }
            else {
                var innerValueDelims = delimiters | LBRACE_DELIM_FLAG | COLON_DELIM_FLAG | RPAREN_DELIM_FLAG | LPAREN_DELIM_FLAG;
                while (!characterContainsDelimiter(this._scanner.peek, innerValueDelims)) {
                    var token = this._scan();
                    tokens.push(token);
                }
            }
            var closeParenToken = this._consume(cssLexer_1.CssTokenType.Character, ')');
            tokens.push(closeParenToken);
        }
        var end = this._getScannerIndex() - 1;
        var strValue = this._extractSourceContent(start, end);
        var endToken = tokens[tokens.length - 1];
        var span = this._generateSourceSpan(startToken, endToken);
        return new cssAst_1.CssPseudoSelectorAst(span, strValue, pseudoSelectorName, tokens, innerSelectors);
    };
    CssParser.prototype._parseSimpleSelector = function (delimiters) {
        var start = this._getScannerIndex();
        delimiters |= COMMA_DELIM_FLAG;
        this._scanner.setMode(cssLexer_1.CssLexerMode.SELECTOR);
        var selectorCssTokens = [];
        var pseudoSelectors = [];
        var previousToken = null;
        var selectorPartDelimiters = delimiters | SPACE_DELIM_FLAG;
        var loopOverSelector = !characterContainsDelimiter(this._scanner.peek, selectorPartDelimiters);
        var hasAttributeError = false;
        while (loopOverSelector) {
            var peek = this._scanner.peek;
            switch (peek) {
                case chars.$COLON:
                    var innerPseudo = this._parsePseudoSelector(delimiters);
                    pseudoSelectors.push(innerPseudo);
                    this._scanner.setMode(cssLexer_1.CssLexerMode.SELECTOR);
                    break;
                case chars.$LBRACKET:
                    selectorCssTokens.push(this._scan());
                    this._scanner.setMode(cssLexer_1.CssLexerMode.ATTRIBUTE_SELECTOR);
                    break;
                case chars.$RBRACKET:
                    if (this._scanner.getMode() != cssLexer_1.CssLexerMode.ATTRIBUTE_SELECTOR) {
                        hasAttributeError = true;
                    }
                    this._scanner.setMode(cssLexer_1.CssLexerMode.SELECTOR);
                    selectorCssTokens.push(this._scan());
                    break;
                default:
                    if (isSelectorOperatorCharacter(peek)) {
                        loopOverSelector = false;
                        continue;
                    }
                    var token = this._scan();
                    previousToken = token;
                    selectorCssTokens.push(token);
                    break;
            }
            loopOverSelector = !characterContainsDelimiter(this._scanner.peek, selectorPartDelimiters);
        }
        hasAttributeError = hasAttributeError || this._scanner.getMode() == cssLexer_1.CssLexerMode.ATTRIBUTE_SELECTOR;
        if (hasAttributeError) {
            this._error("Unbalanced CSS attribute selector at column " + previousToken.line + ":" + previousToken.column, previousToken);
        }
        var end = this._getScannerIndex() - 1;
        var operator = null;
        var operatorScanCount = 0;
        var lastOperatorToken = null;
        if (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            while (operator == null &&
                !characterContainsDelimiter(this._scanner.peek, delimiters) &&
                isSelectorOperatorCharacter(this._scanner.peek)) {
                var token = this._scan();
                var tokenOperator = token.strValue;
                operatorScanCount++;
                lastOperatorToken = token;
                if (tokenOperator != SPACE_OPERATOR) {
                    switch (tokenOperator) {
                        case SLASH_CHARACTER:
                            var deepToken = this._consume(cssLexer_1.CssTokenType.Identifier);
                            var deepSlash = this._consume(cssLexer_1.CssTokenType.Character);
                            var index = lastOperatorToken.index;
                            var line = lastOperatorToken.line;
                            var column = lastOperatorToken.column;
                            if (deepToken != null && deepToken.strValue.toLowerCase() == 'deep' && deepSlash.strValue == SLASH_CHARACTER) {
                                token = new cssLexer_1.CssToken(lastOperatorToken.index, lastOperatorToken.column, lastOperatorToken.line, cssLexer_1.CssTokenType.Identifier, DEEP_OPERATOR_STR);
                            }
                            else {
                                var text = SLASH_CHARACTER + deepToken.strValue + deepSlash.strValue;
                                this._error(cssLexer_1.generateErrorMessage(this._getSourceContent(), text + " is an invalid CSS operator", text, index, line, column), lastOperatorToken);
                                token = new cssLexer_1.CssToken(index, column, line, cssLexer_1.CssTokenType.Invalid, text);
                            }
                            break;
                        case GT_CHARACTER:
                            if (this._scanner.peek == chars.$GT && this._scanner.peekPeek == chars.$GT) {
                                this._consume(cssLexer_1.CssTokenType.Character, GT_CHARACTER);
                                this._consume(cssLexer_1.CssTokenType.Character, GT_CHARACTER);
                                token = new cssLexer_1.CssToken(lastOperatorToken.index, lastOperatorToken.column, lastOperatorToken.line, cssLexer_1.CssTokenType.Identifier, TRIPLE_GT_OPERATOR_STR);
                            }
                            break;
                    }
                    operator = token;
                }
            }
            if (operator != null) {
                end = operator.index;
            }
        }
        this._scanner.consumeWhitespace();
        var strValue = this._extractSourceContent(start, end);
        if (operator == null && operatorScanCount > 0 && this._scanner.peek != chars.$LBRACE) {
            operator = lastOperatorToken;
        }
        var startTokenOrAst = null;
        var endTokenOrAst = null;
        if (selectorCssTokens.length > 0) {
            startTokenOrAst = startTokenOrAst || selectorCssTokens[0];
            endTokenOrAst = selectorCssTokens[selectorCssTokens.length - 1];
        }
        if (pseudoSelectors.length > 0) {
            startTokenOrAst = startTokenOrAst || pseudoSelectors[0];
            endTokenOrAst = pseudoSelectors[pseudoSelectors.length - 1];
        }
        if (operator != null) {
            startTokenOrAst = startTokenOrAst || operator;
            endTokenOrAst = operator;
        }
        var span = this._generateSourceSpan(startTokenOrAst, endTokenOrAst);
        return new cssAst_1.CssSimpleSelectorAst(span, selectorCssTokens, strValue, pseudoSelectors, operator);
    };
    CssParser.prototype._parseSelector = function (delimiters) {
        delimiters |= COMMA_DELIM_FLAG;
        this._scanner.setMode(cssLexer_1.CssLexerMode.SELECTOR);
        var simpleSelectors = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            simpleSelectors.push(this._parseSimpleSelector(delimiters));
            this._scanner.consumeWhitespace();
        }
        var firstSelector = simpleSelectors[0];
        var lastSelector = simpleSelectors[simpleSelectors.length - 1];
        var span = this._generateSourceSpan(firstSelector, lastSelector);
        return new cssAst_1.CssSelectorAst(span, simpleSelectors);
    };
    CssParser.prototype._parseValue = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG | NEWLINE_DELIM_FLAG;
        this._scanner.setMode(cssLexer_1.CssLexerMode.STYLE_VALUE);
        var start = this._getScannerIndex();
        var tokens = [];
        var previous = null;
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            var token = void 0;
            if (previous != null && previous.type == cssLexer_1.CssTokenType.Identifier && this._scanner.peek == chars.$LPAREN) {
                token = this._consume(cssLexer_1.CssTokenType.Character, '(');
                tokens.push(token);
                this._scanner.setMode(cssLexer_1.CssLexerMode.STYLE_VALUE_FUNCTION);
                token = this._scan();
                tokens.push(token);
                this._scanner.setMode(cssLexer_1.CssLexerMode.STYLE_VALUE);
                token = this._consume(cssLexer_1.CssTokenType.Character, ')');
                tokens.push(token);
            }
            else {
                token = this._scan();
                if (token.type != cssLexer_1.CssTokenType.Whitespace) {
                    tokens.push(token);
                }
            }
            previous = token;
        }
        var end = this._getScannerIndex() - 1;
        this._scanner.consumeWhitespace();
        var code = this._scanner.peek;
        if (code == chars.$SEMICOLON) {
            this._consume(cssLexer_1.CssTokenType.Character, ';');
        }
        else if (code != chars.$RBRACE) {
            this._error(cssLexer_1.generateErrorMessage(this._getSourceContent(), "The CSS key/value definition did not end with a semicolon", previous.strValue, previous.index, previous.line, previous.column), previous);
        }
        var strValue = this._extractSourceContent(start, end);
        var startToken = tokens[0];
        var endToken = tokens[tokens.length - 1];
        var span = this._generateSourceSpan(startToken, endToken);
        return new cssAst_1.CssStyleValueAst(span, tokens, strValue);
    };
    CssParser.prototype._collectUntilDelim = function (delimiters, assertType) {
        if (assertType === void 0) { assertType = null; }
        var tokens = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            var val = assertType != null ? this._consume(assertType) : this._scan();
            tokens.push(val);
        }
        return tokens;
    };
    CssParser.prototype._parseBlock = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG;
        this._scanner.setMode(cssLexer_1.CssLexerMode.BLOCK);
        var startToken = this._consume(cssLexer_1.CssTokenType.Character, '{');
        this._scanner.consumeEmptyStatements();
        var results = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            results.push(this._parseRule(delimiters));
        }
        var endToken = this._consume(cssLexer_1.CssTokenType.Character, '}');
        this._scanner.setMode(cssLexer_1.CssLexerMode.BLOCK);
        this._scanner.consumeEmptyStatements();
        var span = this._generateSourceSpan(startToken, endToken);
        return new cssAst_1.CssBlockAst(span, results);
    };
    CssParser.prototype._parseStyleBlock = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG;
        this._scanner.setMode(cssLexer_1.CssLexerMode.STYLE_BLOCK);
        var startToken = this._consume(cssLexer_1.CssTokenType.Character, '{');
        if (startToken.numValue != chars.$LBRACE) {
            return null;
        }
        var definitions = [];
        this._scanner.consumeEmptyStatements();
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            definitions.push(this._parseDefinition(delimiters));
            this._scanner.consumeEmptyStatements();
        }
        var endToken = this._consume(cssLexer_1.CssTokenType.Character, '}');
        this._scanner.setMode(cssLexer_1.CssLexerMode.STYLE_BLOCK);
        this._scanner.consumeEmptyStatements();
        var span = this._generateSourceSpan(startToken, endToken);
        return new cssAst_1.CssStylesBlockAst(span, definitions);
    };
    CssParser.prototype._parseDefinition = function (delimiters) {
        this._scanner.setMode(cssLexer_1.CssLexerMode.STYLE_BLOCK);
        var prop = this._consume(cssLexer_1.CssTokenType.Identifier);
        var parseValue = false;
        var value = null;
        var endToken = prop;
        switch (this._scanner.peek) {
            case chars.$SEMICOLON:
            case chars.$RBRACE:
            case chars.$EOF:
                parseValue = false;
                break;
            default:
                var propStr_1 = [prop.strValue];
                if (this._scanner.peek != chars.$COLON) {
                    var nextValue = this._consume(cssLexer_1.CssTokenType.Character, ':');
                    propStr_1.push(nextValue.strValue);
                    var remainingTokens = this._collectUntilDelim(delimiters | COLON_DELIM_FLAG | SEMICOLON_DELIM_FLAG, cssLexer_1.CssTokenType.Identifier);
                    if (remainingTokens.length > 0) {
                        remainingTokens.forEach(function (token) {
                            propStr_1.push(token.strValue);
                        });
                    }
                    endToken = prop = new cssLexer_1.CssToken(prop.index, prop.column, prop.line, prop.type, propStr_1.join(' '));
                }
                if (this._scanner.peek == chars.$COLON) {
                    this._consume(cssLexer_1.CssTokenType.Character, ':');
                    parseValue = true;
                }
                break;
        }
        if (parseValue) {
            value = this._parseValue(delimiters);
            endToken = value;
        }
        else {
            this._error(cssLexer_1.generateErrorMessage(this._getSourceContent(), "The CSS property was not paired with a style value", prop.strValue, prop.index, prop.line, prop.column), prop);
        }
        var span = this._generateSourceSpan(prop, endToken);
        return new cssAst_1.CssDefinitionAst(span, prop, value);
    };
    CssParser.prototype._assertCondition = function (status, errorMessage, problemToken) {
        if (!status) {
            this._error(errorMessage, problemToken);
            return true;
        }
        return false;
    };
    CssParser.prototype._error = function (message, problemToken) {
        var length = problemToken.strValue.length;
        var error = CssParseError.create(this._file, 0, problemToken.line, problemToken.column, length, message);
        this._errors.push(error);
    };
    return CssParser;
}());
exports.CssParser = CssParser;
var CssParseError = (function (_super) {
    __extends(CssParseError, _super);
    function CssParseError(span, message) {
        return _super.call(this, span, message) || this;
    }
    CssParseError.create = function (file, offset, line, col, length, errMsg) {
        var start = new parseUtil_1.ParseLocation(file, offset, line, col);
        var end = new parseUtil_1.ParseLocation(file, offset, line, col + length);
        var span = new parseUtil_1.ParseSourceSpan(start, end);
        return new CssParseError(span, 'CSS Parse Error: ' + errMsg);
    };
    return CssParseError;
}(parseUtil_1.ParseError));
exports.CssParseError = CssParseError;

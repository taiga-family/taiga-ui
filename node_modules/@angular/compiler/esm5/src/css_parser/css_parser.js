/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { __extends } from "tslib";
import * as chars from '../chars';
import { ParseError, ParseLocation, ParseSourceFile, ParseSourceSpan } from '../parse_util';
import { BlockType, CssAst, CssAtRulePredicateAst, CssBlockAst, CssBlockDefinitionRuleAst, CssBlockRuleAst, CssDefinitionAst, CssInlineRuleAst, CssKeyframeDefinitionAst, CssKeyframeRuleAst, CssMediaQueryRuleAst, CssPseudoSelectorAst, CssSelectorAst, CssSelectorRuleAst, CssSimpleSelectorAst, CssStylesBlockAst, CssStyleSheetAst, CssStyleValueAst, CssUnknownRuleAst, CssUnknownTokenListAst, mergeTokens } from './css_ast';
import { CssLexer, CssLexerMode, CssToken, CssTokenType, generateErrorMessage, getRawMessage, isNewline } from './css_lexer';
var SPACE_OPERATOR = ' ';
export { CssToken } from './css_lexer';
export { BlockType } from './css_ast';
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
            return isNewline(code) ? NEWLINE_DELIM_FLAG : 0;
    }
}
function characterContainsDelimiter(code, delimiters) {
    return (getDelimFromCharacter(code) & delimiters) > 0;
}
var ParsedCssResult = /** @class */ (function () {
    function ParsedCssResult(errors, ast) {
        this.errors = errors;
        this.ast = ast;
    }
    return ParsedCssResult;
}());
export { ParsedCssResult };
var CssParser = /** @class */ (function () {
    function CssParser() {
        this._errors = [];
    }
    /**
     * @param css the CSS code that will be parsed
     * @param url the name of the CSS file containing the CSS source code
     */
    CssParser.prototype.parse = function (css, url) {
        var lexer = new CssLexer();
        this._file = new ParseSourceFile(css, url);
        this._scanner = lexer.scan(css, false);
        var ast = this._parseStyleSheet(EOF_DELIM_FLAG);
        var errors = this._errors;
        this._errors = [];
        var result = new ParsedCssResult(errors, ast);
        this._file = null;
        this._scanner = null;
        return result;
    };
    /** @internal */
    CssParser.prototype._parseStyleSheet = function (delimiters) {
        var results = [];
        this._scanner.consumeEmptyStatements();
        while (this._scanner.peek != chars.$EOF) {
            this._scanner.setMode(CssLexerMode.BLOCK);
            results.push(this._parseRule(delimiters));
        }
        var span = null;
        if (results.length > 0) {
            var firstRule = results[0];
            // we collect the last token like so incase there was an
            // EOF token that was emitted sometime during the lexing
            span = this._generateSourceSpan(firstRule, this._lastToken);
        }
        return new CssStyleSheetAst(span, results);
    };
    /** @internal */
    CssParser.prototype._getSourceContent = function () {
        return this._scanner != null ? this._scanner.input : '';
    };
    /** @internal */
    CssParser.prototype._extractSourceContent = function (start, end) {
        return this._getSourceContent().substring(start, end + 1);
    };
    /** @internal */
    CssParser.prototype._generateSourceSpan = function (start, end) {
        if (end === void 0) { end = null; }
        var startLoc;
        if (start instanceof CssAst) {
            startLoc = start.location.start;
        }
        else {
            var token = start;
            if (token == null) {
                // the data here is invalid, however, if and when this does
                // occur, any other errors associated with this will be collected
                token = this._lastToken;
            }
            startLoc = new ParseLocation(this._file, token.index, token.line, token.column);
        }
        if (end == null) {
            end = this._lastToken;
        }
        var endLine = -1;
        var endColumn = -1;
        var endIndex = -1;
        if (end instanceof CssAst) {
            endLine = end.location.end.line;
            endColumn = end.location.end.col;
            endIndex = end.location.end.offset;
        }
        else if (end instanceof CssToken) {
            endLine = end.line;
            endColumn = end.column;
            endIndex = end.index;
        }
        var endLoc = new ParseLocation(this._file, endIndex, endLine, endColumn);
        return new ParseSourceSpan(startLoc, endLoc);
    };
    /** @internal */
    CssParser.prototype._resolveBlockType = function (token) {
        switch (token.strValue) {
            case '@-o-keyframes':
            case '@-moz-keyframes':
            case '@-webkit-keyframes':
            case '@keyframes':
                return BlockType.Keyframes;
            case '@charset':
                return BlockType.Charset;
            case '@import':
                return BlockType.Import;
            case '@namespace':
                return BlockType.Namespace;
            case '@page':
                return BlockType.Page;
            case '@document':
                return BlockType.Document;
            case '@media':
                return BlockType.MediaQuery;
            case '@font-face':
                return BlockType.FontFace;
            case '@viewport':
                return BlockType.Viewport;
            case '@supports':
                return BlockType.Supports;
            default:
                return BlockType.Unsupported;
        }
    };
    /** @internal */
    CssParser.prototype._parseRule = function (delimiters) {
        if (this._scanner.peek == chars.$AT) {
            return this._parseAtRule(delimiters);
        }
        return this._parseSelectorRule(delimiters);
    };
    /** @internal */
    CssParser.prototype._parseAtRule = function (delimiters) {
        var start = this._getScannerIndex();
        this._scanner.setMode(CssLexerMode.BLOCK);
        var token = this._scan();
        var startToken = token;
        this._assertCondition(token.type == CssTokenType.AtKeyword, "The CSS Rule " + token.strValue + " is not a valid [@] rule.", token);
        var block;
        var type = this._resolveBlockType(token);
        var span;
        var tokens;
        var endToken;
        var end;
        var strValue;
        var query;
        switch (type) {
            case BlockType.Charset:
            case BlockType.Namespace:
            case BlockType.Import:
                var value = this._parseValue(delimiters);
                this._scanner.setMode(CssLexerMode.BLOCK);
                this._scanner.consumeEmptyStatements();
                span = this._generateSourceSpan(startToken, value);
                return new CssInlineRuleAst(span, type, value);
            case BlockType.Viewport:
            case BlockType.FontFace:
                block = this._parseStyleBlock(delimiters);
                span = this._generateSourceSpan(startToken, block);
                return new CssBlockRuleAst(span, type, block);
            case BlockType.Keyframes:
                tokens = this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG);
                // keyframes only have one identifier name
                var name_1 = tokens[0];
                block = this._parseKeyframeBlock(delimiters);
                span = this._generateSourceSpan(startToken, block);
                return new CssKeyframeRuleAst(span, name_1, block);
            case BlockType.MediaQuery:
                this._scanner.setMode(CssLexerMode.MEDIA_QUERY);
                tokens = this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG);
                endToken = tokens[tokens.length - 1];
                // we do not track the whitespace after the mediaQuery predicate ends
                // so we have to calculate the end string value on our own
                end = endToken.index + endToken.strValue.length - 1;
                strValue = this._extractSourceContent(start, end);
                span = this._generateSourceSpan(startToken, endToken);
                query = new CssAtRulePredicateAst(span, strValue, tokens);
                block = this._parseBlock(delimiters);
                strValue = this._extractSourceContent(start, this._getScannerIndex() - 1);
                span = this._generateSourceSpan(startToken, block);
                return new CssMediaQueryRuleAst(span, strValue, query, block);
            case BlockType.Document:
            case BlockType.Supports:
            case BlockType.Page:
                this._scanner.setMode(CssLexerMode.AT_RULE_QUERY);
                tokens = this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG);
                endToken = tokens[tokens.length - 1];
                // we do not track the whitespace after this block rule predicate ends
                // so we have to calculate the end string value on our own
                end = endToken.index + endToken.strValue.length - 1;
                strValue = this._extractSourceContent(start, end);
                span = this._generateSourceSpan(startToken, tokens[tokens.length - 1]);
                query = new CssAtRulePredicateAst(span, strValue, tokens);
                block = this._parseBlock(delimiters);
                strValue = this._extractSourceContent(start, block.end.offset);
                span = this._generateSourceSpan(startToken, block);
                return new CssBlockDefinitionRuleAst(span, strValue, type, query, block);
            // if a custom @rule { ... } is used it should still tokenize the insides
            default:
                var listOfTokens_1 = [];
                var tokenName = token.strValue;
                this._scanner.setMode(CssLexerMode.ALL);
                this._error(generateErrorMessage(this._getSourceContent(), "The CSS \"at\" rule \"" + tokenName + "\" is not allowed to used here", token.strValue, token.index, token.line, token.column), token);
                this._collectUntilDelim(delimiters | LBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG)
                    .forEach(function (token) {
                    listOfTokens_1.push(token);
                });
                if (this._scanner.peek == chars.$LBRACE) {
                    listOfTokens_1.push(this._consume(CssTokenType.Character, '{'));
                    this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG)
                        .forEach(function (token) {
                        listOfTokens_1.push(token);
                    });
                    listOfTokens_1.push(this._consume(CssTokenType.Character, '}'));
                }
                endToken = listOfTokens_1[listOfTokens_1.length - 1];
                span = this._generateSourceSpan(startToken, endToken);
                return new CssUnknownRuleAst(span, tokenName, listOfTokens_1);
        }
    };
    /** @internal */
    CssParser.prototype._parseSelectorRule = function (delimiters) {
        var start = this._getScannerIndex();
        var selectors = this._parseSelectors(delimiters);
        var block = this._parseStyleBlock(delimiters);
        var ruleAst;
        var span;
        var startSelector = selectors[0];
        if (block != null) {
            span = this._generateSourceSpan(startSelector, block);
            ruleAst = new CssSelectorRuleAst(span, selectors, block);
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
            ruleAst = new CssUnknownTokenListAst(span, name_2, innerTokens_1);
        }
        this._scanner.setMode(CssLexerMode.BLOCK);
        this._scanner.consumeEmptyStatements();
        return ruleAst;
    };
    /** @internal */
    CssParser.prototype._parseSelectors = function (delimiters) {
        delimiters |= LBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG;
        var selectors = [];
        var isParsingSelectors = true;
        while (isParsingSelectors) {
            selectors.push(this._parseSelector(delimiters));
            isParsingSelectors = !characterContainsDelimiter(this._scanner.peek, delimiters);
            if (isParsingSelectors) {
                this._consume(CssTokenType.Character, ',');
                isParsingSelectors = !characterContainsDelimiter(this._scanner.peek, delimiters);
                if (isParsingSelectors) {
                    this._scanner.consumeWhitespace();
                }
            }
        }
        return selectors;
    };
    /** @internal */
    CssParser.prototype._scan = function () {
        var output = this._scanner.scan();
        var token = output.token;
        var error = output.error;
        if (error != null) {
            this._error(getRawMessage(error), token);
        }
        this._lastToken = token;
        return token;
    };
    /** @internal */
    CssParser.prototype._getScannerIndex = function () {
        return this._scanner.index;
    };
    /** @internal */
    CssParser.prototype._consume = function (type, value) {
        if (value === void 0) { value = null; }
        var output = this._scanner.consume(type, value);
        var token = output.token;
        var error = output.error;
        if (error != null) {
            this._error(getRawMessage(error), token);
        }
        this._lastToken = token;
        return token;
    };
    /** @internal */
    CssParser.prototype._parseKeyframeBlock = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.KEYFRAME_BLOCK);
        var startToken = this._consume(CssTokenType.Character, '{');
        var definitions = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            definitions.push(this._parseKeyframeDefinition(delimiters));
        }
        var endToken = this._consume(CssTokenType.Character, '}');
        var span = this._generateSourceSpan(startToken, endToken);
        return new CssBlockAst(span, definitions);
    };
    /** @internal */
    CssParser.prototype._parseKeyframeDefinition = function (delimiters) {
        var start = this._getScannerIndex();
        var stepTokens = [];
        delimiters |= LBRACE_DELIM_FLAG;
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            stepTokens.push(this._parseKeyframeLabel(delimiters | COMMA_DELIM_FLAG));
            if (this._scanner.peek != chars.$LBRACE) {
                this._consume(CssTokenType.Character, ',');
            }
        }
        var stylesBlock = this._parseStyleBlock(delimiters | RBRACE_DELIM_FLAG);
        var span = this._generateSourceSpan(stepTokens[0], stylesBlock);
        var ast = new CssKeyframeDefinitionAst(span, stepTokens, stylesBlock);
        this._scanner.setMode(CssLexerMode.BLOCK);
        return ast;
    };
    /** @internal */
    CssParser.prototype._parseKeyframeLabel = function (delimiters) {
        this._scanner.setMode(CssLexerMode.KEYFRAME_BLOCK);
        return mergeTokens(this._collectUntilDelim(delimiters));
    };
    /** @internal */
    CssParser.prototype._parsePseudoSelector = function (delimiters) {
        var start = this._getScannerIndex();
        delimiters &= ~COMMA_DELIM_FLAG;
        // we keep the original value since we may use it to recurse when :not, :host are used
        var startingDelims = delimiters;
        var startToken = this._consume(CssTokenType.Character, ':');
        var tokens = [startToken];
        if (this._scanner.peek == chars.$COLON) { // ::something
            tokens.push(this._consume(CssTokenType.Character, ':'));
        }
        var innerSelectors = [];
        this._scanner.setMode(CssLexerMode.PSEUDO_SELECTOR);
        // host, host-context, lang, not, nth-child are all identifiers
        var pseudoSelectorToken = this._consume(CssTokenType.Identifier);
        var pseudoSelectorName = pseudoSelectorToken.strValue;
        tokens.push(pseudoSelectorToken);
        // host(), lang(), nth-child(), etc...
        if (this._scanner.peek == chars.$LPAREN) {
            this._scanner.setMode(CssLexerMode.PSEUDO_SELECTOR_WITH_ARGUMENTS);
            var openParenToken = this._consume(CssTokenType.Character, '(');
            tokens.push(openParenToken);
            // :host(innerSelector(s)), :not(selector), etc...
            if (_pseudoSelectorSupportsInnerSelectors(pseudoSelectorName)) {
                var innerDelims = startingDelims | LPAREN_DELIM_FLAG | RPAREN_DELIM_FLAG;
                if (pseudoSelectorName == 'not') {
                    // the inner selector inside of :not(...) can only be one
                    // CSS selector (no commas allowed) ... This is according
                    // to the CSS specification
                    innerDelims |= COMMA_DELIM_FLAG;
                }
                // :host(a, b, c) {
                this._parseSelectors(innerDelims).forEach(function (selector, index) {
                    innerSelectors.push(selector);
                });
            }
            else {
                // this branch is for things like "en-us, 2k + 1, etc..."
                // which all end up in pseudoSelectors like :lang, :nth-child, etc..
                var innerValueDelims = delimiters | LBRACE_DELIM_FLAG | COLON_DELIM_FLAG |
                    RPAREN_DELIM_FLAG | LPAREN_DELIM_FLAG;
                while (!characterContainsDelimiter(this._scanner.peek, innerValueDelims)) {
                    var token = this._scan();
                    tokens.push(token);
                }
            }
            var closeParenToken = this._consume(CssTokenType.Character, ')');
            tokens.push(closeParenToken);
        }
        var end = this._getScannerIndex() - 1;
        var strValue = this._extractSourceContent(start, end);
        var endToken = tokens[tokens.length - 1];
        var span = this._generateSourceSpan(startToken, endToken);
        return new CssPseudoSelectorAst(span, strValue, pseudoSelectorName, tokens, innerSelectors);
    };
    /** @internal */
    CssParser.prototype._parseSimpleSelector = function (delimiters) {
        var start = this._getScannerIndex();
        delimiters |= COMMA_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.SELECTOR);
        var selectorCssTokens = [];
        var pseudoSelectors = [];
        var previousToken = undefined;
        var selectorPartDelimiters = delimiters | SPACE_DELIM_FLAG;
        var loopOverSelector = !characterContainsDelimiter(this._scanner.peek, selectorPartDelimiters);
        var hasAttributeError = false;
        while (loopOverSelector) {
            var peek = this._scanner.peek;
            switch (peek) {
                case chars.$COLON:
                    var innerPseudo = this._parsePseudoSelector(delimiters);
                    pseudoSelectors.push(innerPseudo);
                    this._scanner.setMode(CssLexerMode.SELECTOR);
                    break;
                case chars.$LBRACKET:
                    // we set the mode after the scan because attribute mode does not
                    // allow attribute [] values. And this also will catch any errors
                    // if an extra "[" is used inside.
                    selectorCssTokens.push(this._scan());
                    this._scanner.setMode(CssLexerMode.ATTRIBUTE_SELECTOR);
                    break;
                case chars.$RBRACKET:
                    if (this._scanner.getMode() != CssLexerMode.ATTRIBUTE_SELECTOR) {
                        hasAttributeError = true;
                    }
                    // we set the mode early because attribute mode does not
                    // allow attribute [] values
                    this._scanner.setMode(CssLexerMode.SELECTOR);
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
        hasAttributeError =
            hasAttributeError || this._scanner.getMode() == CssLexerMode.ATTRIBUTE_SELECTOR;
        if (hasAttributeError) {
            this._error("Unbalanced CSS attribute selector at column " + previousToken.line + ":" + previousToken.column, previousToken);
        }
        var end = this._getScannerIndex() - 1;
        // this happens if the selector is not directly followed by
        // a comma or curly brace without a space in between
        var operator = null;
        var operatorScanCount = 0;
        var lastOperatorToken = null;
        if (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            while (operator == null && !characterContainsDelimiter(this._scanner.peek, delimiters) &&
                isSelectorOperatorCharacter(this._scanner.peek)) {
                var token = this._scan();
                var tokenOperator = token.strValue;
                operatorScanCount++;
                lastOperatorToken = token;
                if (tokenOperator != SPACE_OPERATOR) {
                    switch (tokenOperator) {
                        case SLASH_CHARACTER:
                            // /deep/ operator
                            var deepToken = this._consume(CssTokenType.Identifier);
                            var deepSlash = this._consume(CssTokenType.Character);
                            var index = lastOperatorToken.index;
                            var line = lastOperatorToken.line;
                            var column = lastOperatorToken.column;
                            if (deepToken != null && deepToken.strValue.toLowerCase() == 'deep' &&
                                deepSlash.strValue == SLASH_CHARACTER) {
                                token = new CssToken(lastOperatorToken.index, lastOperatorToken.column, lastOperatorToken.line, CssTokenType.Identifier, DEEP_OPERATOR_STR);
                            }
                            else {
                                var text = SLASH_CHARACTER + deepToken.strValue + deepSlash.strValue;
                                this._error(generateErrorMessage(this._getSourceContent(), text + " is an invalid CSS operator", text, index, line, column), lastOperatorToken);
                                token = new CssToken(index, column, line, CssTokenType.Invalid, text);
                            }
                            break;
                        case GT_CHARACTER:
                            // >>> operator
                            if (this._scanner.peek == chars.$GT && this._scanner.peekPeek == chars.$GT) {
                                this._consume(CssTokenType.Character, GT_CHARACTER);
                                this._consume(CssTokenType.Character, GT_CHARACTER);
                                token = new CssToken(lastOperatorToken.index, lastOperatorToken.column, lastOperatorToken.line, CssTokenType.Identifier, TRIPLE_GT_OPERATOR_STR);
                            }
                            break;
                    }
                    operator = token;
                }
            }
            // so long as there is an operator then we can have an
            // ending value that is beyond the selector value ...
            // otherwise it's just a bunch of trailing whitespace
            if (operator != null) {
                end = operator.index;
            }
        }
        this._scanner.consumeWhitespace();
        var strValue = this._extractSourceContent(start, end);
        // if we do come across one or more spaces inside of
        // the operators loop then an empty space is still a
        // valid operator to use if something else was not found
        if (operator == null && operatorScanCount > 0 && this._scanner.peek != chars.$LBRACE) {
            operator = lastOperatorToken;
        }
        // please note that `endToken` is reassigned multiple times below
        // so please do not optimize the if statements into if/elseif
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
        return new CssSimpleSelectorAst(span, selectorCssTokens, strValue, pseudoSelectors, operator);
    };
    /** @internal */
    CssParser.prototype._parseSelector = function (delimiters) {
        delimiters |= COMMA_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.SELECTOR);
        var simpleSelectors = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            simpleSelectors.push(this._parseSimpleSelector(delimiters));
            this._scanner.consumeWhitespace();
        }
        var firstSelector = simpleSelectors[0];
        var lastSelector = simpleSelectors[simpleSelectors.length - 1];
        var span = this._generateSourceSpan(firstSelector, lastSelector);
        return new CssSelectorAst(span, simpleSelectors);
    };
    /** @internal */
    CssParser.prototype._parseValue = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG | NEWLINE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.STYLE_VALUE);
        var start = this._getScannerIndex();
        var tokens = [];
        var wsStr = '';
        var previous = undefined;
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            var token = void 0;
            if (previous != null && previous.type == CssTokenType.Identifier &&
                this._scanner.peek == chars.$LPAREN) {
                token = this._consume(CssTokenType.Character, '(');
                tokens.push(token);
                this._scanner.setMode(CssLexerMode.STYLE_VALUE_FUNCTION);
                token = this._scan();
                tokens.push(token);
                this._scanner.setMode(CssLexerMode.STYLE_VALUE);
                token = this._consume(CssTokenType.Character, ')');
                tokens.push(token);
            }
            else {
                token = this._scan();
                if (token.type == CssTokenType.Whitespace) {
                    wsStr += token.strValue;
                }
                else {
                    wsStr = '';
                    tokens.push(token);
                }
            }
            previous = token;
        }
        var end = this._getScannerIndex() - 1;
        this._scanner.consumeWhitespace();
        var code = this._scanner.peek;
        if (code == chars.$SEMICOLON) {
            this._consume(CssTokenType.Character, ';');
        }
        else if (code != chars.$RBRACE) {
            this._error(generateErrorMessage(this._getSourceContent(), "The CSS key/value definition did not end with a semicolon", previous.strValue, previous.index, previous.line, previous.column), previous);
        }
        var strValue = this._extractSourceContent(start, end);
        var startToken = tokens[0];
        var endToken = tokens[tokens.length - 1];
        var span = this._generateSourceSpan(startToken, endToken);
        return new CssStyleValueAst(span, tokens, strValue);
    };
    /** @internal */
    CssParser.prototype._collectUntilDelim = function (delimiters, assertType) {
        if (assertType === void 0) { assertType = null; }
        var tokens = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            var val = assertType != null ? this._consume(assertType) : this._scan();
            tokens.push(val);
        }
        return tokens;
    };
    /** @internal */
    CssParser.prototype._parseBlock = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.BLOCK);
        var startToken = this._consume(CssTokenType.Character, '{');
        this._scanner.consumeEmptyStatements();
        var results = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            results.push(this._parseRule(delimiters));
        }
        var endToken = this._consume(CssTokenType.Character, '}');
        this._scanner.setMode(CssLexerMode.BLOCK);
        this._scanner.consumeEmptyStatements();
        var span = this._generateSourceSpan(startToken, endToken);
        return new CssBlockAst(span, results);
    };
    /** @internal */
    CssParser.prototype._parseStyleBlock = function (delimiters) {
        delimiters |= RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.STYLE_BLOCK);
        var startToken = this._consume(CssTokenType.Character, '{');
        if (startToken.numValue != chars.$LBRACE) {
            return null;
        }
        var definitions = [];
        this._scanner.consumeEmptyStatements();
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            definitions.push(this._parseDefinition(delimiters));
            this._scanner.consumeEmptyStatements();
        }
        var endToken = this._consume(CssTokenType.Character, '}');
        this._scanner.setMode(CssLexerMode.STYLE_BLOCK);
        this._scanner.consumeEmptyStatements();
        var span = this._generateSourceSpan(startToken, endToken);
        return new CssStylesBlockAst(span, definitions);
    };
    /** @internal */
    CssParser.prototype._parseDefinition = function (delimiters) {
        this._scanner.setMode(CssLexerMode.STYLE_BLOCK);
        var prop = this._consume(CssTokenType.Identifier);
        var parseValue = false;
        var value = null;
        var endToken = prop;
        // the colon value separates the prop from the style.
        // there are a few cases as to what could happen if it
        // is missing
        switch (this._scanner.peek) {
            case chars.$SEMICOLON:
            case chars.$RBRACE:
            case chars.$EOF:
                parseValue = false;
                break;
            default:
                var propStr_1 = [prop.strValue];
                if (this._scanner.peek != chars.$COLON) {
                    // this will throw the error
                    var nextValue = this._consume(CssTokenType.Character, ':');
                    propStr_1.push(nextValue.strValue);
                    var remainingTokens = this._collectUntilDelim(delimiters | COLON_DELIM_FLAG | SEMICOLON_DELIM_FLAG, CssTokenType.Identifier);
                    if (remainingTokens.length > 0) {
                        remainingTokens.forEach(function (token) {
                            propStr_1.push(token.strValue);
                        });
                    }
                    endToken = prop =
                        new CssToken(prop.index, prop.column, prop.line, prop.type, propStr_1.join(' '));
                }
                // this means we've reached the end of the definition and/or block
                if (this._scanner.peek == chars.$COLON) {
                    this._consume(CssTokenType.Character, ':');
                    parseValue = true;
                }
                break;
        }
        if (parseValue) {
            value = this._parseValue(delimiters);
            endToken = value;
        }
        else {
            this._error(generateErrorMessage(this._getSourceContent(), "The CSS property was not paired with a style value", prop.strValue, prop.index, prop.line, prop.column), prop);
        }
        var span = this._generateSourceSpan(prop, endToken);
        return new CssDefinitionAst(span, prop, value);
    };
    /** @internal */
    CssParser.prototype._assertCondition = function (status, errorMessage, problemToken) {
        if (!status) {
            this._error(errorMessage, problemToken);
            return true;
        }
        return false;
    };
    /** @internal */
    CssParser.prototype._error = function (message, problemToken) {
        var length = problemToken.strValue.length;
        var error = CssParseError.create(this._file, 0, problemToken.line, problemToken.column, length, message);
        this._errors.push(error);
    };
    return CssParser;
}());
export { CssParser };
var CssParseError = /** @class */ (function (_super) {
    __extends(CssParseError, _super);
    function CssParseError(span, message) {
        return _super.call(this, span, message) || this;
    }
    CssParseError.create = function (file, offset, line, col, length, errMsg) {
        var start = new ParseLocation(file, offset, line, col);
        var end = new ParseLocation(file, offset, line, col + length);
        var span = new ParseSourceSpan(start, end);
        return new CssParseError(span, 'CSS Parse Error: ' + errMsg);
    };
    return CssParseError;
}(ParseError));
export { CssParseError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jc3NfcGFyc2VyL2Nzc19wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVILE9BQU8sS0FBSyxLQUFLLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUYsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSx3QkFBd0IsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBYyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBQy9hLE9BQU8sRUFBQyxRQUFRLEVBQUUsWUFBWSxFQUFjLFFBQVEsRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUV2SSxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7QUFFM0IsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNyQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sV0FBVyxDQUFDO0FBRXBDLElBQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQztBQUM1QixJQUFNLFlBQVksR0FBRyxHQUFHLENBQUM7QUFDekIsSUFBTSxzQkFBc0IsR0FBRyxLQUFLLENBQUM7QUFDckMsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENB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QzVDLElBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQzlCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQW56QkQsSUFtekJDOztBQUVEO0lBQW1DLGlDQUFVO0lBVTNDLHVCQUFZLElBQXFCLEVBQUUsT0FBZTtlQUNoRCxrQkFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFYTSxvQkFBTSxHQUFiLFVBQ0ksSUFBcUIsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLEdBQVcsRUFBRSxNQUFjLEVBQ2hGLE1BQWM7UUFDaEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsSUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLElBQU0sSUFBSSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QyxPQUFPLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBS0gsb0JBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBbUMsVUFBVSxHQWE1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSAnLi4vY2hhcnMnO1xuaW1wb3J0IHtQYXJzZUVycm9yLCBQYXJzZUxvY2F0aW9uLCBQYXJzZVNvdXJjZUZpbGUsIFBhcnNlU291cmNlU3Bhbn0gZnJvbSAnLi4vcGFyc2VfdXRpbCc7XG5cbmltcG9ydCB7QmxvY2tUeXBlLCBDc3NBc3QsIENzc0F0UnVsZVByZWRpY2F0ZUFzdCwgQ3NzQmxvY2tBc3QsIENzc0Jsb2NrRGVmaW5pdGlvblJ1bGVBc3QsIENzc0Jsb2NrUnVsZUFzdCwgQ3NzRGVmaW5pdGlvbkFzdCwgQ3NzSW5saW5lUnVsZUFzdCwgQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0LCBDc3NLZXlmcmFtZVJ1bGVBc3QsIENzc01lZGlhUXVlcnlSdWxlQXN0LCBDc3NQc2V1ZG9TZWxlY3RvckFzdCwgQ3NzUnVsZUFzdCwgQ3NzU2VsZWN0b3JBc3QsIENzc1NlbGVjdG9yUnVsZUFzdCwgQ3NzU2ltcGxlU2VsZWN0b3JBc3QsIENzc1N0eWxlc0Jsb2NrQXN0LCBDc3NTdHlsZVNoZWV0QXN0LCBDc3NTdHlsZVZhbHVlQXN0LCBDc3NVbmtub3duUnVsZUFzdCwgQ3NzVW5rbm93blRva2VuTGlzdEFzdCwgbWVyZ2VUb2tlbnN9IGZyb20gJy4vY3NzX2FzdCc7XG5pbXBvcnQge0Nzc0xleGVyLCBDc3NMZXhlck1vZGUsIENzc1NjYW5uZXIsIENzc1Rva2VuLCBDc3NUb2tlblR5cGUsIGdlbmVyYXRlRXJyb3JNZXNzYWdlLCBnZXRSYXdNZXNzYWdlLCBpc05ld2xpbmV9IGZyb20gJy4vY3NzX2xleGVyJztcblxuY29uc3QgU1BBQ0VfT1BFUkFUT1IgPSAnICc7XG5cbmV4cG9ydCB7Q3NzVG9rZW59IGZyb20gJy4vY3NzX2xleGVyJztcbmV4cG9ydCB7QmxvY2tUeXBlfSBmcm9tICcuL2Nzc19hc3QnO1xuXG5jb25zdCBTTEFTSF9DSEFSQUNURVIgPSAnLyc7XG5jb25zdCBHVF9DSEFSQUNURVIgPSAnPic7XG5jb25zdCBUUklQTEVfR1RfT1BFUkFUT1JfU1RSID0gJz4+Pic7XG5jb25zdCBERUVQX09QRVJBVE9SX1NUUiA9ICcvZGVlcC8nO1xuXG5jb25zdCBFT0ZfREVMSU1fRkxBRyA9IDE7XG5jb25zdCBSQlJBQ0VfREVMSU1fRkxBRyA9IDI7XG5jb25zdCBMQlJBQ0VfREVMSU1fRkxBRyA9IDQ7XG5jb25zdCBDT01NQV9ERUxJTV9GTEFHID0gODtcbmNvbnN0IENPTE9OX0RFTElNX0ZMQUcgPSAxNjtcbmNvbnN0IFNFTUlDT0xPTl9ERUxJTV9GTEFHID0gMzI7XG5jb25zdCBORVdMSU5FX0RFTElNX0ZMQUcgPSA2NDtcbmNvbnN0IFJQQVJFTl9ERUxJTV9GTEFHID0gMTI4O1xuY29uc3QgTFBBUkVOX0RFTElNX0ZMQUcgPSAyNTY7XG5jb25zdCBTUEFDRV9ERUxJTV9GTEFHID0gNTEyO1xuXG5mdW5jdGlvbiBfcHNldWRvU2VsZWN0b3JTdXBwb3J0c0lubmVyU2VsZWN0b3JzKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gWydub3QnLCAnaG9zdCcsICdob3N0LWNvbnRleHQnXS5pbmRleE9mKG5hbWUpID49IDA7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JPcGVyYXRvckNoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgc3dpdGNoIChjb2RlKSB7XG4gICAgY2FzZSBjaGFycy4kU0xBU0g6XG4gICAgY2FzZSBjaGFycy4kVElMREE6XG4gICAgY2FzZSBjaGFycy4kUExVUzpcbiAgICBjYXNlIGNoYXJzLiRHVDpcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gY2hhcnMuaXNXaGl0ZXNwYWNlKGNvZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlbGltRnJvbUNoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBudW1iZXIge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRFT0Y6XG4gICAgICByZXR1cm4gRU9GX0RFTElNX0ZMQUc7XG4gICAgY2FzZSBjaGFycy4kQ09NTUE6XG4gICAgICByZXR1cm4gQ09NTUFfREVMSU1fRkxBRztcbiAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICAgIHJldHVybiBDT0xPTl9ERUxJTV9GTEFHO1xuICAgIGNhc2UgY2hhcnMuJFNFTUlDT0xPTjpcbiAgICAgIHJldHVybiBTRU1JQ09MT05fREVMSU1fRkxBRztcbiAgICBjYXNlIGNoYXJzLiRSQlJBQ0U6XG4gICAgICByZXR1cm4gUkJSQUNFX0RFTElNX0ZMQUc7XG4gICAgY2FzZSBjaGFycy4kTEJSQUNFOlxuICAgICAgcmV0dXJuIExCUkFDRV9ERUxJTV9GTEFHO1xuICAgIGNhc2UgY2hhcnMuJFJQQVJFTjpcbiAgICAgIHJldHVybiBSUEFSRU5fREVMSU1fRkxBRztcbiAgICBjYXNlIGNoYXJzLiRTUEFDRTpcbiAgICBjYXNlIGNoYXJzLiRUQUI6XG4gICAgICByZXR1cm4gU1BBQ0VfREVMSU1fRkxBRztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGlzTmV3bGluZShjb2RlKSA/IE5FV0xJTkVfREVMSU1fRkxBRyA6IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIoY29kZTogbnVtYmVyLCBkZWxpbWl0ZXJzOiBudW1iZXIpOiBib29sZWFuIHtcbiAgcmV0dXJuIChnZXREZWxpbUZyb21DaGFyYWN0ZXIoY29kZSkgJiBkZWxpbWl0ZXJzKSA+IDA7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZWRDc3NSZXN1bHQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXJyb3JzOiBDc3NQYXJzZUVycm9yW10sIHB1YmxpYyBhc3Q6IENzc1N0eWxlU2hlZXRBc3QpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NQYXJzZXIge1xuICBwcml2YXRlIF9lcnJvcnM6IENzc1BhcnNlRXJyb3JbXSA9IFtdO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfZmlsZSE6IFBhcnNlU291cmNlRmlsZTtcbiAgLy8gVE9ETyhpc3N1ZS8yNDU3MSk6IHJlbW92ZSAnIScuXG4gIHByaXZhdGUgX3NjYW5uZXIhOiBDc3NTY2FubmVyO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfbGFzdFRva2VuITogQ3NzVG9rZW47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjc3MgdGhlIENTUyBjb2RlIHRoYXQgd2lsbCBiZSBwYXJzZWRcbiAgICogQHBhcmFtIHVybCB0aGUgbmFtZSBvZiB0aGUgQ1NTIGZpbGUgY29udGFpbmluZyB0aGUgQ1NTIHNvdXJjZSBjb2RlXG4gICAqL1xuICBwYXJzZShjc3M6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBQYXJzZWRDc3NSZXN1bHQge1xuICAgIGNvbnN0IGxleGVyID0gbmV3IENzc0xleGVyKCk7XG4gICAgdGhpcy5fZmlsZSA9IG5ldyBQYXJzZVNvdXJjZUZpbGUoY3NzLCB1cmwpO1xuICAgIHRoaXMuX3NjYW5uZXIgPSBsZXhlci5zY2FuKGNzcywgZmFsc2UpO1xuXG4gICAgY29uc3QgYXN0ID0gdGhpcy5fcGFyc2VTdHlsZVNoZWV0KEVPRl9ERUxJTV9GTEFHKTtcblxuICAgIGNvbnN0IGVycm9ycyA9IHRoaXMuX2Vycm9ycztcbiAgICB0aGlzLl9lcnJvcnMgPSBbXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBQYXJzZWRDc3NSZXN1bHQoZXJyb3JzLCBhc3QpO1xuICAgIHRoaXMuX2ZpbGUgPSBudWxsIGFzIGFueTtcbiAgICB0aGlzLl9zY2FubmVyID0gbnVsbCBhcyBhbnk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlU3R5bGVTaGVldChkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NTdHlsZVNoZWV0QXN0IHtcbiAgICBjb25zdCByZXN1bHRzOiBDc3NSdWxlQXN0W10gPSBbXTtcbiAgICB0aGlzLl9zY2FubmVyLmNvbnN1bWVFbXB0eVN0YXRlbWVudHMoKTtcbiAgICB3aGlsZSAodGhpcy5fc2Nhbm5lci5wZWVrICE9IGNoYXJzLiRFT0YpIHtcbiAgICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuQkxPQ0spO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuX3BhcnNlUnVsZShkZWxpbWl0ZXJzKSk7XG4gICAgfVxuICAgIGxldCBzcGFuOiBQYXJzZVNvdXJjZVNwYW58bnVsbCA9IG51bGw7XG4gICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZmlyc3RSdWxlID0gcmVzdWx0c1swXTtcbiAgICAgIC8vIHdlIGNvbGxlY3QgdGhlIGxhc3QgdG9rZW4gbGlrZSBzbyBpbmNhc2UgdGhlcmUgd2FzIGFuXG4gICAgICAvLyBFT0YgdG9rZW4gdGhhdCB3YXMgZW1pdHRlZCBzb21ldGltZSBkdXJpbmcgdGhlIGxleGluZ1xuICAgICAgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihmaXJzdFJ1bGUsIHRoaXMuX2xhc3RUb2tlbik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQ3NzU3R5bGVTaGVldEFzdChzcGFuISwgcmVzdWx0cyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZXRTb3VyY2VDb250ZW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYW5uZXIgIT0gbnVsbCA/IHRoaXMuX3NjYW5uZXIuaW5wdXQgOiAnJztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0U291cmNlQ29udGVudCgpLnN1YnN0cmluZyhzdGFydCwgZW5kICsgMSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnQ6IENzc1Rva2VufENzc0FzdCwgZW5kOiBDc3NUb2tlbnxDc3NBc3R8bnVsbCA9IG51bGwpOiBQYXJzZVNvdXJjZVNwYW4ge1xuICAgIGxldCBzdGFydExvYzogUGFyc2VMb2NhdGlvbjtcbiAgICBpZiAoc3RhcnQgaW5zdGFuY2VvZiBDc3NBc3QpIHtcbiAgICAgIHN0YXJ0TG9jID0gc3RhcnQubG9jYXRpb24uc3RhcnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0b2tlbiA9IHN0YXJ0O1xuICAgICAgaWYgKHRva2VuID09IG51bGwpIHtcbiAgICAgICAgLy8gdGhlIGRhdGEgaGVyZSBpcyBpbnZhbGlkLCBob3dldmVyLCBpZiBhbmQgd2hlbiB0aGlzIGRvZXNcbiAgICAgICAgLy8gb2NjdXIsIGFueSBvdGhlciBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgd2lsbCBiZSBjb2xsZWN0ZWRcbiAgICAgICAgdG9rZW4gPSB0aGlzLl9sYXN0VG9rZW47XG4gICAgICB9XG4gICAgICBzdGFydExvYyA9IG5ldyBQYXJzZUxvY2F0aW9uKHRoaXMuX2ZpbGUsIHRva2VuLmluZGV4LCB0b2tlbi5saW5lLCB0b2tlbi5jb2x1bW4pO1xuICAgIH1cblxuICAgIGlmIChlbmQgPT0gbnVsbCkge1xuICAgICAgZW5kID0gdGhpcy5fbGFzdFRva2VuO1xuICAgIH1cblxuICAgIGxldCBlbmRMaW5lOiBudW1iZXIgPSAtMTtcbiAgICBsZXQgZW5kQ29sdW1uOiBudW1iZXIgPSAtMTtcbiAgICBsZXQgZW5kSW5kZXg6IG51bWJlciA9IC0xO1xuICAgIGlmIChlbmQgaW5zdGFuY2VvZiBDc3NBc3QpIHtcbiAgICAgIGVuZExpbmUgPSBlbmQubG9jYXRpb24uZW5kLmxpbmUhO1xuICAgICAgZW5kQ29sdW1uID0gZW5kLmxvY2F0aW9uLmVuZC5jb2whO1xuICAgICAgZW5kSW5kZXggPSBlbmQubG9jYXRpb24uZW5kLm9mZnNldCE7XG4gICAgfSBlbHNlIGlmIChlbmQgaW5zdGFuY2VvZiBDc3NUb2tlbikge1xuICAgICAgZW5kTGluZSA9IGVuZC5saW5lO1xuICAgICAgZW5kQ29sdW1uID0gZW5kLmNvbHVtbjtcbiAgICAgIGVuZEluZGV4ID0gZW5kLmluZGV4O1xuICAgIH1cblxuICAgIGNvbnN0IGVuZExvYyA9IG5ldyBQYXJzZUxvY2F0aW9uKHRoaXMuX2ZpbGUsIGVuZEluZGV4LCBlbmRMaW5lLCBlbmRDb2x1bW4pO1xuICAgIHJldHVybiBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0TG9jLCBlbmRMb2MpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcmVzb2x2ZUJsb2NrVHlwZSh0b2tlbjogQ3NzVG9rZW4pOiBCbG9ja1R5cGUge1xuICAgIHN3aXRjaCAodG9rZW4uc3RyVmFsdWUpIHtcbiAgICAgIGNhc2UgJ0Atby1rZXlmcmFtZXMnOlxuICAgICAgY2FzZSAnQC1tb3ota2V5ZnJhbWVzJzpcbiAgICAgIGNhc2UgJ0Atd2Via2l0LWtleWZyYW1lcyc6XG4gICAgICBjYXNlICdAa2V5ZnJhbWVzJzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5LZXlmcmFtZXM7XG5cbiAgICAgIGNhc2UgJ0BjaGFyc2V0JzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5DaGFyc2V0O1xuXG4gICAgICBjYXNlICdAaW1wb3J0JzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5JbXBvcnQ7XG5cbiAgICAgIGNhc2UgJ0BuYW1lc3BhY2UnOlxuICAgICAgICByZXR1cm4gQmxvY2tUeXBlLk5hbWVzcGFjZTtcblxuICAgICAgY2FzZSAnQHBhZ2UnOlxuICAgICAgICByZXR1cm4gQmxvY2tUeXBlLlBhZ2U7XG5cbiAgICAgIGNhc2UgJ0Bkb2N1bWVudCc6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuRG9jdW1lbnQ7XG5cbiAgICAgIGNhc2UgJ0BtZWRpYSc6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuTWVkaWFRdWVyeTtcblxuICAgICAgY2FzZSAnQGZvbnQtZmFjZSc6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuRm9udEZhY2U7XG5cbiAgICAgIGNhc2UgJ0B2aWV3cG9ydCc6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuVmlld3BvcnQ7XG5cbiAgICAgIGNhc2UgJ0BzdXBwb3J0cyc6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuU3VwcG9ydHM7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuVW5zdXBwb3J0ZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VSdWxlKGRlbGltaXRlcnM6IG51bWJlcik6IENzc1J1bGVBc3Qge1xuICAgIGlmICh0aGlzLl9zY2FubmVyLnBlZWsgPT0gY2hhcnMuJEFUKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcGFyc2VBdFJ1bGUoZGVsaW1pdGVycyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wYXJzZVNlbGVjdG9yUnVsZShkZWxpbWl0ZXJzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlQXRSdWxlKGRlbGltaXRlcnM6IG51bWJlcik6IENzc1J1bGVBc3Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0U2Nhbm5lckluZGV4KCk7XG5cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLkJMT0NLKTtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuX3NjYW4oKTtcbiAgICBjb25zdCBzdGFydFRva2VuID0gdG9rZW47XG5cbiAgICB0aGlzLl9hc3NlcnRDb25kaXRpb24oXG4gICAgICAgIHRva2VuLnR5cGUgPT0gQ3NzVG9rZW5UeXBlLkF0S2V5d29yZCxcbiAgICAgICAgYFRoZSBDU1MgUnVsZSAke3Rva2VuLnN0clZhbHVlfSBpcyBub3QgYSB2YWxpZCBbQF0gcnVsZS5gLCB0b2tlbik7XG5cbiAgICBsZXQgYmxvY2s6IENzc0Jsb2NrQXN0O1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9yZXNvbHZlQmxvY2tUeXBlKHRva2VuKTtcbiAgICBsZXQgc3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICAgIGxldCB0b2tlbnM6IENzc1Rva2VuW107XG4gICAgbGV0IGVuZFRva2VuOiBDc3NUb2tlbjtcbiAgICBsZXQgZW5kOiBudW1iZXI7XG4gICAgbGV0IHN0clZhbHVlOiBzdHJpbmc7XG4gICAgbGV0IHF1ZXJ5OiBDc3NBdFJ1bGVQcmVkaWNhdGVBc3Q7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIEJsb2NrVHlwZS5DaGFyc2V0OlxuICAgICAgY2FzZSBCbG9ja1R5cGUuTmFtZXNwYWNlOlxuICAgICAgY2FzZSBCbG9ja1R5cGUuSW1wb3J0OlxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLl9wYXJzZVZhbHVlKGRlbGltaXRlcnMpO1xuICAgICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLkJMT0NLKTtcbiAgICAgICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lRW1wdHlTdGF0ZW1lbnRzKCk7XG4gICAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IENzc0lubGluZVJ1bGVBc3Qoc3BhbiwgdHlwZSwgdmFsdWUpO1xuXG4gICAgICBjYXNlIEJsb2NrVHlwZS5WaWV3cG9ydDpcbiAgICAgIGNhc2UgQmxvY2tUeXBlLkZvbnRGYWNlOlxuICAgICAgICBibG9jayA9IHRoaXMuX3BhcnNlU3R5bGVCbG9jayhkZWxpbWl0ZXJzKSE7XG4gICAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgYmxvY2spO1xuICAgICAgICByZXR1cm4gbmV3IENzc0Jsb2NrUnVsZUFzdChzcGFuLCB0eXBlLCBibG9jayk7XG5cbiAgICAgIGNhc2UgQmxvY2tUeXBlLktleWZyYW1lczpcbiAgICAgICAgdG9rZW5zID0gdGhpcy5fY29sbGVjdFVudGlsRGVsaW0oZGVsaW1pdGVycyB8IFJCUkFDRV9ERUxJTV9GTEFHIHwgTEJSQUNFX0RFTElNX0ZMQUcpO1xuICAgICAgICAvLyBrZXlmcmFtZXMgb25seSBoYXZlIG9uZSBpZGVudGlmaWVyIG5hbWVcbiAgICAgICAgbGV0IG5hbWUgPSB0b2tlbnNbMF07XG4gICAgICAgIGJsb2NrID0gdGhpcy5fcGFyc2VLZXlmcmFtZUJsb2NrKGRlbGltaXRlcnMpO1xuICAgICAgICBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDc3NLZXlmcmFtZVJ1bGVBc3Qoc3BhbiwgbmFtZSwgYmxvY2spO1xuXG4gICAgICBjYXNlIEJsb2NrVHlwZS5NZWRpYVF1ZXJ5OlxuICAgICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLk1FRElBX1FVRVJZKTtcbiAgICAgICAgdG9rZW5zID0gdGhpcy5fY29sbGVjdFVudGlsRGVsaW0oZGVsaW1pdGVycyB8IFJCUkFDRV9ERUxJTV9GTEFHIHwgTEJSQUNFX0RFTElNX0ZMQUcpO1xuICAgICAgICBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIHdlIGRvIG5vdCB0cmFjayB0aGUgd2hpdGVzcGFjZSBhZnRlciB0aGUgbWVkaWFRdWVyeSBwcmVkaWNhdGUgZW5kc1xuICAgICAgICAvLyBzbyB3ZSBoYXZlIHRvIGNhbGN1bGF0ZSB0aGUgZW5kIHN0cmluZyB2YWx1ZSBvbiBvdXIgb3duXG4gICAgICAgIGVuZCA9IGVuZFRva2VuLmluZGV4ICsgZW5kVG9rZW4uc3RyVmFsdWUubGVuZ3RoIC0gMTtcbiAgICAgICAgc3RyVmFsdWUgPSB0aGlzLl9leHRyYWN0U291cmNlQ29udGVudChzdGFydCwgZW5kKTtcbiAgICAgICAgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFRva2VuLCBlbmRUb2tlbik7XG4gICAgICAgIHF1ZXJ5ID0gbmV3IENzc0F0UnVsZVByZWRpY2F0ZUFzdChzcGFuLCBzdHJWYWx1ZSwgdG9rZW5zKTtcbiAgICAgICAgYmxvY2sgPSB0aGlzLl9wYXJzZUJsb2NrKGRlbGltaXRlcnMpO1xuICAgICAgICBzdHJWYWx1ZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCB0aGlzLl9nZXRTY2FubmVySW5kZXgoKSAtIDEpO1xuICAgICAgICBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDc3NNZWRpYVF1ZXJ5UnVsZUFzdChzcGFuLCBzdHJWYWx1ZSwgcXVlcnksIGJsb2NrKTtcblxuICAgICAgY2FzZSBCbG9ja1R5cGUuRG9jdW1lbnQ6XG4gICAgICBjYXNlIEJsb2NrVHlwZS5TdXBwb3J0czpcbiAgICAgIGNhc2UgQmxvY2tUeXBlLlBhZ2U6XG4gICAgICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuQVRfUlVMRV9RVUVSWSk7XG4gICAgICAgIHRva2VucyA9IHRoaXMuX2NvbGxlY3RVbnRpbERlbGltKGRlbGltaXRlcnMgfCBSQlJBQ0VfREVMSU1fRkxBRyB8IExCUkFDRV9ERUxJTV9GTEFHKTtcbiAgICAgICAgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyB3ZSBkbyBub3QgdHJhY2sgdGhlIHdoaXRlc3BhY2UgYWZ0ZXIgdGhpcyBibG9jayBydWxlIHByZWRpY2F0ZSBlbmRzXG4gICAgICAgIC8vIHNvIHdlIGhhdmUgdG8gY2FsY3VsYXRlIHRoZSBlbmQgc3RyaW5nIHZhbHVlIG9uIG91ciBvd25cbiAgICAgICAgZW5kID0gZW5kVG9rZW4uaW5kZXggKyBlbmRUb2tlbi5zdHJWYWx1ZS5sZW5ndGggLSAxO1xuICAgICAgICBzdHJWYWx1ZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCBlbmQpO1xuICAgICAgICBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICBxdWVyeSA9IG5ldyBDc3NBdFJ1bGVQcmVkaWNhdGVBc3Qoc3Bhbiwgc3RyVmFsdWUsIHRva2Vucyk7XG4gICAgICAgIGJsb2NrID0gdGhpcy5fcGFyc2VCbG9jayhkZWxpbWl0ZXJzKTtcbiAgICAgICAgc3RyVmFsdWUgPSB0aGlzLl9leHRyYWN0U291cmNlQ29udGVudChzdGFydCwgYmxvY2suZW5kLm9mZnNldCEpO1xuICAgICAgICBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGJsb2NrKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDc3NCbG9ja0RlZmluaXRpb25SdWxlQXN0KHNwYW4sIHN0clZhbHVlLCB0eXBlLCBxdWVyeSwgYmxvY2spO1xuXG4gICAgICAvLyBpZiBhIGN1c3RvbSBAcnVsZSB7IC4uLiB9IGlzIHVzZWQgaXQgc2hvdWxkIHN0aWxsIHRva2VuaXplIHRoZSBpbnNpZGVzXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZXQgbGlzdE9mVG9rZW5zOiBDc3NUb2tlbltdID0gW107XG4gICAgICAgIGxldCB0b2tlbk5hbWUgPSB0b2tlbi5zdHJWYWx1ZTtcbiAgICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5BTEwpO1xuICAgICAgICB0aGlzLl9lcnJvcihcbiAgICAgICAgICAgIGdlbmVyYXRlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgICAgICAgIHRoaXMuX2dldFNvdXJjZUNvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICBgVGhlIENTUyBcImF0XCIgcnVsZSBcIiR7dG9rZW5OYW1lfVwiIGlzIG5vdCBhbGxvd2VkIHRvIHVzZWQgaGVyZWAsIHRva2VuLnN0clZhbHVlLFxuICAgICAgICAgICAgICAgIHRva2VuLmluZGV4LCB0b2tlbi5saW5lLCB0b2tlbi5jb2x1bW4pLFxuICAgICAgICAgICAgdG9rZW4pO1xuXG4gICAgICAgIHRoaXMuX2NvbGxlY3RVbnRpbERlbGltKGRlbGltaXRlcnMgfCBMQlJBQ0VfREVMSU1fRkxBRyB8IFNFTUlDT0xPTl9ERUxJTV9GTEFHKVxuICAgICAgICAgICAgLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgIGxpc3RPZlRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5fc2Nhbm5lci5wZWVrID09IGNoYXJzLiRMQlJBQ0UpIHtcbiAgICAgICAgICBsaXN0T2ZUb2tlbnMucHVzaCh0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICd7JykpO1xuICAgICAgICAgIHRoaXMuX2NvbGxlY3RVbnRpbERlbGltKGRlbGltaXRlcnMgfCBSQlJBQ0VfREVMSU1fRkxBRyB8IExCUkFDRV9ERUxJTV9GTEFHKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICBsaXN0T2ZUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RPZlRva2Vucy5wdXNoKHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJ30nKSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5kVG9rZW4gPSBsaXN0T2ZUb2tlbnNbbGlzdE9mVG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDc3NVbmtub3duUnVsZUFzdChzcGFuLCB0b2tlbk5hbWUsIGxpc3RPZlRva2Vucyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VTZWxlY3RvclJ1bGUoZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzUnVsZUFzdCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRTY2FubmVySW5kZXgoKTtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSB0aGlzLl9wYXJzZVNlbGVjdG9ycyhkZWxpbWl0ZXJzKTtcbiAgICBjb25zdCBibG9jayA9IHRoaXMuX3BhcnNlU3R5bGVCbG9jayhkZWxpbWl0ZXJzKTtcbiAgICBsZXQgcnVsZUFzdDogQ3NzUnVsZUFzdDtcbiAgICBsZXQgc3BhbjogUGFyc2VTb3VyY2VTcGFuO1xuICAgIGNvbnN0IHN0YXJ0U2VsZWN0b3IgPSBzZWxlY3RvcnNbMF07XG4gICAgaWYgKGJsb2NrICE9IG51bGwpIHtcbiAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRTZWxlY3RvciwgYmxvY2spO1xuICAgICAgcnVsZUFzdCA9IG5ldyBDc3NTZWxlY3RvclJ1bGVBc3Qoc3Bhbiwgc2VsZWN0b3JzLCBibG9jayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLl9leHRyYWN0U291cmNlQ29udGVudChzdGFydCwgdGhpcy5fZ2V0U2Nhbm5lckluZGV4KCkgLSAxKTtcbiAgICAgIGNvbnN0IGlubmVyVG9rZW5zOiBDc3NUb2tlbltdID0gW107XG4gICAgICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3I6IENzc1NlbGVjdG9yQXN0KSA9PiB7XG4gICAgICAgIHNlbGVjdG9yLnNlbGVjdG9yUGFydHMuZm9yRWFjaCgocGFydDogQ3NzU2ltcGxlU2VsZWN0b3JBc3QpID0+IHtcbiAgICAgICAgICBwYXJ0LnRva2Vucy5mb3JFYWNoKCh0b2tlbjogQ3NzVG9rZW4pID0+IHtcbiAgICAgICAgICAgIGlubmVyVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZW5kVG9rZW4gPSBpbm5lclRva2Vuc1tpbm5lclRva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRTZWxlY3RvciwgZW5kVG9rZW4pO1xuICAgICAgcnVsZUFzdCA9IG5ldyBDc3NVbmtub3duVG9rZW5MaXN0QXN0KHNwYW4sIG5hbWUsIGlubmVyVG9rZW5zKTtcbiAgICB9XG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5CTE9DSyk7XG4gICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lRW1wdHlTdGF0ZW1lbnRzKCk7XG4gICAgcmV0dXJuIHJ1bGVBc3Q7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZVNlbGVjdG9ycyhkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NTZWxlY3RvckFzdFtdIHtcbiAgICBkZWxpbWl0ZXJzIHw9IExCUkFDRV9ERUxJTV9GTEFHIHwgU0VNSUNPTE9OX0RFTElNX0ZMQUc7XG5cbiAgICBjb25zdCBzZWxlY3RvcnM6IENzc1NlbGVjdG9yQXN0W10gPSBbXTtcbiAgICBsZXQgaXNQYXJzaW5nU2VsZWN0b3JzID0gdHJ1ZTtcbiAgICB3aGlsZSAoaXNQYXJzaW5nU2VsZWN0b3JzKSB7XG4gICAgICBzZWxlY3RvcnMucHVzaCh0aGlzLl9wYXJzZVNlbGVjdG9yKGRlbGltaXRlcnMpKTtcblxuICAgICAgaXNQYXJzaW5nU2VsZWN0b3JzID0gIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgZGVsaW1pdGVycyk7XG5cbiAgICAgIGlmIChpc1BhcnNpbmdTZWxlY3RvcnMpIHtcbiAgICAgICAgdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnLCcpO1xuICAgICAgICBpc1BhcnNpbmdTZWxlY3RvcnMgPSAhY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBkZWxpbWl0ZXJzKTtcbiAgICAgICAgaWYgKGlzUGFyc2luZ1NlbGVjdG9ycykge1xuICAgICAgICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZVdoaXRlc3BhY2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWxlY3RvcnM7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9zY2FuKCk6IENzc1Rva2VuIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9zY2FubmVyLnNjYW4oKSE7XG4gICAgY29uc3QgdG9rZW4gPSBvdXRwdXQudG9rZW47XG4gICAgY29uc3QgZXJyb3IgPSBvdXRwdXQuZXJyb3I7XG4gICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yKGdldFJhd01lc3NhZ2UoZXJyb3IpLCB0b2tlbik7XG4gICAgfVxuICAgIHRoaXMuX2xhc3RUb2tlbiA9IHRva2VuO1xuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldFNjYW5uZXJJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zY2FubmVyLmluZGV4O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfY29uc3VtZSh0eXBlOiBDc3NUb2tlblR5cGUsIHZhbHVlOiBzdHJpbmd8bnVsbCA9IG51bGwpOiBDc3NUb2tlbiB7XG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5fc2Nhbm5lci5jb25zdW1lKHR5cGUsIHZhbHVlKTtcbiAgICBjb25zdCB0b2tlbiA9IG91dHB1dC50b2tlbjtcbiAgICBjb25zdCBlcnJvciA9IG91dHB1dC5lcnJvcjtcbiAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IoZ2V0UmF3TWVzc2FnZShlcnJvciksIHRva2VuKTtcbiAgICB9XG4gICAgdGhpcy5fbGFzdFRva2VuID0gdG9rZW47XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VLZXlmcmFtZUJsb2NrKGRlbGltaXRlcnM6IG51bWJlcik6IENzc0Jsb2NrQXN0IHtcbiAgICBkZWxpbWl0ZXJzIHw9IFJCUkFDRV9ERUxJTV9GTEFHO1xuICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuS0VZRlJBTUVfQkxPQ0spO1xuXG4gICAgY29uc3Qgc3RhcnRUb2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJ3snKTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zOiBDc3NLZXlmcmFtZURlZmluaXRpb25Bc3RbXSA9IFtdO1xuICAgIHdoaWxlICghY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBkZWxpbWl0ZXJzKSkge1xuICAgICAgZGVmaW5pdGlvbnMucHVzaCh0aGlzLl9wYXJzZUtleWZyYW1lRGVmaW5pdGlvbihkZWxpbWl0ZXJzKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kVG9rZW4gPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICd9Jyk7XG5cbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcbiAgICByZXR1cm4gbmV3IENzc0Jsb2NrQXN0KHNwYW4sIGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlS2V5ZnJhbWVEZWZpbml0aW9uKGRlbGltaXRlcnM6IG51bWJlcik6IENzc0tleWZyYW1lRGVmaW5pdGlvbkFzdCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRTY2FubmVySW5kZXgoKTtcbiAgICBjb25zdCBzdGVwVG9rZW5zOiBDc3NUb2tlbltdID0gW107XG4gICAgZGVsaW1pdGVycyB8PSBMQlJBQ0VfREVMSU1fRkxBRztcbiAgICB3aGlsZSAoIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgZGVsaW1pdGVycykpIHtcbiAgICAgIHN0ZXBUb2tlbnMucHVzaCh0aGlzLl9wYXJzZUtleWZyYW1lTGFiZWwoZGVsaW1pdGVycyB8IENPTU1BX0RFTElNX0ZMQUcpKTtcbiAgICAgIGlmICh0aGlzLl9zY2FubmVyLnBlZWsgIT0gY2hhcnMuJExCUkFDRSkge1xuICAgICAgICB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICcsJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHN0eWxlc0Jsb2NrID0gdGhpcy5fcGFyc2VTdHlsZUJsb2NrKGRlbGltaXRlcnMgfCBSQlJBQ0VfREVMSU1fRkxBRyk7XG4gICAgY29uc3Qgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGVwVG9rZW5zWzBdLCBzdHlsZXNCbG9jayk7XG4gICAgY29uc3QgYXN0ID0gbmV3IENzc0tleWZyYW1lRGVmaW5pdGlvbkFzdChzcGFuLCBzdGVwVG9rZW5zLCBzdHlsZXNCbG9jayEpO1xuXG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5CTE9DSyk7XG4gICAgcmV0dXJuIGFzdDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlS2V5ZnJhbWVMYWJlbChkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NUb2tlbiB7XG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5LRVlGUkFNRV9CTE9DSyk7XG4gICAgcmV0dXJuIG1lcmdlVG9rZW5zKHRoaXMuX2NvbGxlY3RVbnRpbERlbGltKGRlbGltaXRlcnMpKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlUHNldWRvU2VsZWN0b3IoZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzUHNldWRvU2VsZWN0b3JBc3Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0U2Nhbm5lckluZGV4KCk7XG5cbiAgICBkZWxpbWl0ZXJzICY9IH5DT01NQV9ERUxJTV9GTEFHO1xuXG4gICAgLy8gd2Uga2VlcCB0aGUgb3JpZ2luYWwgdmFsdWUgc2luY2Ugd2UgbWF5IHVzZSBpdCB0byByZWN1cnNlIHdoZW4gOm5vdCwgOmhvc3QgYXJlIHVzZWRcbiAgICBjb25zdCBzdGFydGluZ0RlbGltcyA9IGRlbGltaXRlcnM7XG5cbiAgICBjb25zdCBzdGFydFRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnOicpO1xuICAgIGNvbnN0IHRva2VucyA9IFtzdGFydFRva2VuXTtcblxuICAgIGlmICh0aGlzLl9zY2FubmVyLnBlZWsgPT0gY2hhcnMuJENPTE9OKSB7ICAvLyA6OnNvbWV0aGluZ1xuICAgICAgdG9rZW5zLnB1c2godGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnOicpKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lclNlbGVjdG9yczogQ3NzU2VsZWN0b3JBc3RbXSA9IFtdO1xuXG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5QU0VVRE9fU0VMRUNUT1IpO1xuXG4gICAgLy8gaG9zdCwgaG9zdC1jb250ZXh0LCBsYW5nLCBub3QsIG50aC1jaGlsZCBhcmUgYWxsIGlkZW50aWZpZXJzXG4gICAgY29uc3QgcHNldWRvU2VsZWN0b3JUb2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIpO1xuICAgIGNvbnN0IHBzZXVkb1NlbGVjdG9yTmFtZSA9IHBzZXVkb1NlbGVjdG9yVG9rZW4uc3RyVmFsdWU7XG4gICAgdG9rZW5zLnB1c2gocHNldWRvU2VsZWN0b3JUb2tlbik7XG5cbiAgICAvLyBob3N0KCksIGxhbmcoKSwgbnRoLWNoaWxkKCksIGV0Yy4uLlxuICAgIGlmICh0aGlzLl9zY2FubmVyLnBlZWsgPT0gY2hhcnMuJExQQVJFTikge1xuICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5QU0VVRE9fU0VMRUNUT1JfV0lUSF9BUkdVTUVOVFMpO1xuXG4gICAgICBjb25zdCBvcGVuUGFyZW5Ub2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJygnKTtcbiAgICAgIHRva2Vucy5wdXNoKG9wZW5QYXJlblRva2VuKTtcblxuICAgICAgLy8gOmhvc3QoaW5uZXJTZWxlY3RvcihzKSksIDpub3Qoc2VsZWN0b3IpLCBldGMuLi5cbiAgICAgIGlmIChfcHNldWRvU2VsZWN0b3JTdXBwb3J0c0lubmVyU2VsZWN0b3JzKHBzZXVkb1NlbGVjdG9yTmFtZSkpIHtcbiAgICAgICAgbGV0IGlubmVyRGVsaW1zID0gc3RhcnRpbmdEZWxpbXMgfCBMUEFSRU5fREVMSU1fRkxBRyB8IFJQQVJFTl9ERUxJTV9GTEFHO1xuICAgICAgICBpZiAocHNldWRvU2VsZWN0b3JOYW1lID09ICdub3QnKSB7XG4gICAgICAgICAgLy8gdGhlIGlubmVyIHNlbGVjdG9yIGluc2lkZSBvZiA6bm90KC4uLikgY2FuIG9ubHkgYmUgb25lXG4gICAgICAgICAgLy8gQ1NTIHNlbGVjdG9yIChubyBjb21tYXMgYWxsb3dlZCkgLi4uIFRoaXMgaXMgYWNjb3JkaW5nXG4gICAgICAgICAgLy8gdG8gdGhlIENTUyBzcGVjaWZpY2F0aW9uXG4gICAgICAgICAgaW5uZXJEZWxpbXMgfD0gQ09NTUFfREVMSU1fRkxBRztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDpob3N0KGEsIGIsIGMpIHtcbiAgICAgICAgdGhpcy5fcGFyc2VTZWxlY3RvcnMoaW5uZXJEZWxpbXMpLmZvckVhY2goKHNlbGVjdG9yLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlubmVyU2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHRoaXMgYnJhbmNoIGlzIGZvciB0aGluZ3MgbGlrZSBcImVuLXVzLCAyayArIDEsIGV0Yy4uLlwiXG4gICAgICAgIC8vIHdoaWNoIGFsbCBlbmQgdXAgaW4gcHNldWRvU2VsZWN0b3JzIGxpa2UgOmxhbmcsIDpudGgtY2hpbGQsIGV0Yy4uXG4gICAgICAgIGNvbnN0IGlubmVyVmFsdWVEZWxpbXMgPSBkZWxpbWl0ZXJzIHwgTEJSQUNFX0RFTElNX0ZMQUcgfCBDT0xPTl9ERUxJTV9GTEFHIHxcbiAgICAgICAgICAgIFJQQVJFTl9ERUxJTV9GTEFHIHwgTFBBUkVOX0RFTElNX0ZMQUc7XG4gICAgICAgIHdoaWxlICghY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBpbm5lclZhbHVlRGVsaW1zKSkge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5fc2NhbigpO1xuICAgICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjbG9zZVBhcmVuVG9rZW4gPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICcpJyk7XG4gICAgICB0b2tlbnMucHVzaChjbG9zZVBhcmVuVG9rZW4pO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX2dldFNjYW5uZXJJbmRleCgpIC0gMTtcbiAgICBjb25zdCBzdHJWYWx1ZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCBlbmQpO1xuXG4gICAgY29uc3QgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuICAgIHJldHVybiBuZXcgQ3NzUHNldWRvU2VsZWN0b3JBc3Qoc3Bhbiwgc3RyVmFsdWUsIHBzZXVkb1NlbGVjdG9yTmFtZSwgdG9rZW5zLCBpbm5lclNlbGVjdG9ycyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZVNpbXBsZVNlbGVjdG9yKGRlbGltaXRlcnM6IG51bWJlcik6IENzc1NpbXBsZVNlbGVjdG9yQXN0IHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldFNjYW5uZXJJbmRleCgpO1xuXG4gICAgZGVsaW1pdGVycyB8PSBDT01NQV9ERUxJTV9GTEFHO1xuXG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TRUxFQ1RPUik7XG4gICAgY29uc3Qgc2VsZWN0b3JDc3NUb2tlbnM6IENzc1Rva2VuW10gPSBbXTtcbiAgICBjb25zdCBwc2V1ZG9TZWxlY3RvcnM6IENzc1BzZXVkb1NlbGVjdG9yQXN0W10gPSBbXTtcblxuICAgIGxldCBwcmV2aW91c1Rva2VuOiBDc3NUb2tlbiA9IHVuZGVmaW5lZCE7XG5cbiAgICBjb25zdCBzZWxlY3RvclBhcnREZWxpbWl0ZXJzID0gZGVsaW1pdGVycyB8IFNQQUNFX0RFTElNX0ZMQUc7XG4gICAgbGV0IGxvb3BPdmVyU2VsZWN0b3IgPSAhY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBzZWxlY3RvclBhcnREZWxpbWl0ZXJzKTtcblxuICAgIGxldCBoYXNBdHRyaWJ1dGVFcnJvciA9IGZhbHNlO1xuICAgIHdoaWxlIChsb29wT3ZlclNlbGVjdG9yKSB7XG4gICAgICBjb25zdCBwZWVrID0gdGhpcy5fc2Nhbm5lci5wZWVrO1xuXG4gICAgICBzd2l0Y2ggKHBlZWspIHtcbiAgICAgICAgY2FzZSBjaGFycy4kQ09MT046XG4gICAgICAgICAgbGV0IGlubmVyUHNldWRvID0gdGhpcy5fcGFyc2VQc2V1ZG9TZWxlY3RvcihkZWxpbWl0ZXJzKTtcbiAgICAgICAgICBwc2V1ZG9TZWxlY3RvcnMucHVzaChpbm5lclBzZXVkbyk7XG4gICAgICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TRUxFQ1RPUik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBjaGFycy4kTEJSQUNLRVQ6XG4gICAgICAgICAgLy8gd2Ugc2V0IHRoZSBtb2RlIGFmdGVyIHRoZSBzY2FuIGJlY2F1c2UgYXR0cmlidXRlIG1vZGUgZG9lcyBub3RcbiAgICAgICAgICAvLyBhbGxvdyBhdHRyaWJ1dGUgW10gdmFsdWVzLiBBbmQgdGhpcyBhbHNvIHdpbGwgY2F0Y2ggYW55IGVycm9yc1xuICAgICAgICAgIC8vIGlmIGFuIGV4dHJhIFwiW1wiIGlzIHVzZWQgaW5zaWRlLlxuICAgICAgICAgIHNlbGVjdG9yQ3NzVG9rZW5zLnB1c2godGhpcy5fc2NhbigpKTtcbiAgICAgICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLkFUVFJJQlVURV9TRUxFQ1RPUik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBjaGFycy4kUkJSQUNLRVQ6XG4gICAgICAgICAgaWYgKHRoaXMuX3NjYW5uZXIuZ2V0TW9kZSgpICE9IENzc0xleGVyTW9kZS5BVFRSSUJVVEVfU0VMRUNUT1IpIHtcbiAgICAgICAgICAgIGhhc0F0dHJpYnV0ZUVycm9yID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2Ugc2V0IHRoZSBtb2RlIGVhcmx5IGJlY2F1c2UgYXR0cmlidXRlIG1vZGUgZG9lcyBub3RcbiAgICAgICAgICAvLyBhbGxvdyBhdHRyaWJ1dGUgW10gdmFsdWVzXG4gICAgICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TRUxFQ1RPUik7XG4gICAgICAgICAgc2VsZWN0b3JDc3NUb2tlbnMucHVzaCh0aGlzLl9zY2FuKCkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKGlzU2VsZWN0b3JPcGVyYXRvckNoYXJhY3RlcihwZWVrKSkge1xuICAgICAgICAgICAgbG9vcE92ZXJTZWxlY3RvciA9IGZhbHNlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5fc2NhbigpO1xuICAgICAgICAgIHByZXZpb3VzVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICBzZWxlY3RvckNzc1Rva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgbG9vcE92ZXJTZWxlY3RvciA9ICFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIHNlbGVjdG9yUGFydERlbGltaXRlcnMpO1xuICAgIH1cblxuICAgIGhhc0F0dHJpYnV0ZUVycm9yID1cbiAgICAgICAgaGFzQXR0cmlidXRlRXJyb3IgfHwgdGhpcy5fc2Nhbm5lci5nZXRNb2RlKCkgPT0gQ3NzTGV4ZXJNb2RlLkFUVFJJQlVURV9TRUxFQ1RPUjtcbiAgICBpZiAoaGFzQXR0cmlidXRlRXJyb3IpIHtcbiAgICAgIHRoaXMuX2Vycm9yKFxuICAgICAgICAgIGBVbmJhbGFuY2VkIENTUyBhdHRyaWJ1dGUgc2VsZWN0b3IgYXQgY29sdW1uICR7cHJldmlvdXNUb2tlbi5saW5lfToke1xuICAgICAgICAgICAgICBwcmV2aW91c1Rva2VuLmNvbHVtbn1gLFxuICAgICAgICAgIHByZXZpb3VzVG9rZW4pO1xuICAgIH1cblxuICAgIGxldCBlbmQgPSB0aGlzLl9nZXRTY2FubmVySW5kZXgoKSAtIDE7XG5cbiAgICAvLyB0aGlzIGhhcHBlbnMgaWYgdGhlIHNlbGVjdG9yIGlzIG5vdCBkaXJlY3RseSBmb2xsb3dlZCBieVxuICAgIC8vIGEgY29tbWEgb3IgY3VybHkgYnJhY2Ugd2l0aG91dCBhIHNwYWNlIGluIGJldHdlZW5cbiAgICBsZXQgb3BlcmF0b3I6IENzc1Rva2VufG51bGwgPSBudWxsO1xuICAgIGxldCBvcGVyYXRvclNjYW5Db3VudCA9IDA7XG4gICAgbGV0IGxhc3RPcGVyYXRvclRva2VuOiBDc3NUb2tlbnxudWxsID0gbnVsbDtcbiAgICBpZiAoIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgZGVsaW1pdGVycykpIHtcbiAgICAgIHdoaWxlIChvcGVyYXRvciA9PSBudWxsICYmICFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpICYmXG4gICAgICAgICAgICAgaXNTZWxlY3Rvck9wZXJhdG9yQ2hhcmFjdGVyKHRoaXMuX3NjYW5uZXIucGVlaykpIHtcbiAgICAgICAgbGV0IHRva2VuID0gdGhpcy5fc2NhbigpO1xuICAgICAgICBjb25zdCB0b2tlbk9wZXJhdG9yID0gdG9rZW4uc3RyVmFsdWU7XG4gICAgICAgIG9wZXJhdG9yU2NhbkNvdW50Kys7XG4gICAgICAgIGxhc3RPcGVyYXRvclRva2VuID0gdG9rZW47XG4gICAgICAgIGlmICh0b2tlbk9wZXJhdG9yICE9IFNQQUNFX09QRVJBVE9SKSB7XG4gICAgICAgICAgc3dpdGNoICh0b2tlbk9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlIFNMQVNIX0NIQVJBQ1RFUjpcbiAgICAgICAgICAgICAgLy8gL2RlZXAvIG9wZXJhdG9yXG4gICAgICAgICAgICAgIGxldCBkZWVwVG9rZW4gPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5JZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgbGV0IGRlZXBTbGFzaCA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3Rlcik7XG4gICAgICAgICAgICAgIGxldCBpbmRleCA9IGxhc3RPcGVyYXRvclRva2VuLmluZGV4O1xuICAgICAgICAgICAgICBsZXQgbGluZSA9IGxhc3RPcGVyYXRvclRva2VuLmxpbmU7XG4gICAgICAgICAgICAgIGxldCBjb2x1bW4gPSBsYXN0T3BlcmF0b3JUb2tlbi5jb2x1bW47XG4gICAgICAgICAgICAgIGlmIChkZWVwVG9rZW4gIT0gbnVsbCAmJiBkZWVwVG9rZW4uc3RyVmFsdWUudG9Mb3dlckNhc2UoKSA9PSAnZGVlcCcgJiZcbiAgICAgICAgICAgICAgICAgIGRlZXBTbGFzaC5zdHJWYWx1ZSA9PSBTTEFTSF9DSEFSQUNURVIpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IG5ldyBDc3NUb2tlbihcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9wZXJhdG9yVG9rZW4uaW5kZXgsIGxhc3RPcGVyYXRvclRva2VuLmNvbHVtbiwgbGFzdE9wZXJhdG9yVG9rZW4ubGluZSxcbiAgICAgICAgICAgICAgICAgICAgQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIsIERFRVBfT1BFUkFUT1JfU1RSKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gU0xBU0hfQ0hBUkFDVEVSICsgZGVlcFRva2VuLnN0clZhbHVlICsgZGVlcFNsYXNoLnN0clZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yKFxuICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUVycm9yTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2dldFNvdXJjZUNvbnRlbnQoKSwgYCR7dGV4dH0gaXMgYW4gaW52YWxpZCBDU1Mgb3BlcmF0b3JgLCB0ZXh0LCBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUsIGNvbHVtbiksXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcGVyYXRvclRva2VuKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IG5ldyBDc3NUb2tlbihpbmRleCwgY29sdW1uLCBsaW5lLCBDc3NUb2tlblR5cGUuSW52YWxpZCwgdGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgR1RfQ0hBUkFDVEVSOlxuICAgICAgICAgICAgICAvLyA+Pj4gb3BlcmF0b3JcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX3NjYW5uZXIucGVlayA9PSBjaGFycy4kR1QgJiYgdGhpcy5fc2Nhbm5lci5wZWVrUGVlayA9PSBjaGFycy4kR1QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsIEdUX0NIQVJBQ1RFUik7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCBHVF9DSEFSQUNURVIpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gbmV3IENzc1Rva2VuKFxuICAgICAgICAgICAgICAgICAgICBsYXN0T3BlcmF0b3JUb2tlbi5pbmRleCwgbGFzdE9wZXJhdG9yVG9rZW4uY29sdW1uLCBsYXN0T3BlcmF0b3JUb2tlbi5saW5lLFxuICAgICAgICAgICAgICAgICAgICBDc3NUb2tlblR5cGUuSWRlbnRpZmllciwgVFJJUExFX0dUX09QRVJBVE9SX1NUUik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3BlcmF0b3IgPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzbyBsb25nIGFzIHRoZXJlIGlzIGFuIG9wZXJhdG9yIHRoZW4gd2UgY2FuIGhhdmUgYW5cbiAgICAgIC8vIGVuZGluZyB2YWx1ZSB0aGF0IGlzIGJleW9uZCB0aGUgc2VsZWN0b3IgdmFsdWUgLi4uXG4gICAgICAvLyBvdGhlcndpc2UgaXQncyBqdXN0IGEgYnVuY2ggb2YgdHJhaWxpbmcgd2hpdGVzcGFjZVxuICAgICAgaWYgKG9wZXJhdG9yICE9IG51bGwpIHtcbiAgICAgICAgZW5kID0gb3BlcmF0b3IuaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lV2hpdGVzcGFjZSgpO1xuXG4gICAgY29uc3Qgc3RyVmFsdWUgPSB0aGlzLl9leHRyYWN0U291cmNlQ29udGVudChzdGFydCwgZW5kKTtcblxuICAgIC8vIGlmIHdlIGRvIGNvbWUgYWNyb3NzIG9uZSBvciBtb3JlIHNwYWNlcyBpbnNpZGUgb2ZcbiAgICAvLyB0aGUgb3BlcmF0b3JzIGxvb3AgdGhlbiBhbiBlbXB0eSBzcGFjZSBpcyBzdGlsbCBhXG4gICAgLy8gdmFsaWQgb3BlcmF0b3IgdG8gdXNlIGlmIHNvbWV0aGluZyBlbHNlIHdhcyBub3QgZm91bmRcbiAgICBpZiAob3BlcmF0b3IgPT0gbnVsbCAmJiBvcGVyYXRvclNjYW5Db3VudCA+IDAgJiYgdGhpcy5fc2Nhbm5lci5wZWVrICE9IGNoYXJzLiRMQlJBQ0UpIHtcbiAgICAgIG9wZXJhdG9yID0gbGFzdE9wZXJhdG9yVG9rZW47XG4gICAgfVxuXG4gICAgLy8gcGxlYXNlIG5vdGUgdGhhdCBgZW5kVG9rZW5gIGlzIHJlYXNzaWduZWQgbXVsdGlwbGUgdGltZXMgYmVsb3dcbiAgICAvLyBzbyBwbGVhc2UgZG8gbm90IG9wdGltaXplIHRoZSBpZiBzdGF0ZW1lbnRzIGludG8gaWYvZWxzZWlmXG4gICAgbGV0IHN0YXJ0VG9rZW5PckFzdDogQ3NzVG9rZW58Q3NzQXN0fG51bGwgPSBudWxsO1xuICAgIGxldCBlbmRUb2tlbk9yQXN0OiBDc3NUb2tlbnxDc3NBc3R8bnVsbCA9IG51bGw7XG4gICAgaWYgKHNlbGVjdG9yQ3NzVG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0YXJ0VG9rZW5PckFzdCA9IHN0YXJ0VG9rZW5PckFzdCB8fCBzZWxlY3RvckNzc1Rva2Vuc1swXTtcbiAgICAgIGVuZFRva2VuT3JBc3QgPSBzZWxlY3RvckNzc1Rva2Vuc1tzZWxlY3RvckNzc1Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgaWYgKHBzZXVkb1NlbGVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBzdGFydFRva2VuT3JBc3QgPSBzdGFydFRva2VuT3JBc3QgfHwgcHNldWRvU2VsZWN0b3JzWzBdO1xuICAgICAgZW5kVG9rZW5PckFzdCA9IHBzZXVkb1NlbGVjdG9yc1twc2V1ZG9TZWxlY3RvcnMubGVuZ3RoIC0gMV07XG4gICAgfVxuICAgIGlmIChvcGVyYXRvciAhPSBudWxsKSB7XG4gICAgICBzdGFydFRva2VuT3JBc3QgPSBzdGFydFRva2VuT3JBc3QgfHwgb3BlcmF0b3I7XG4gICAgICBlbmRUb2tlbk9yQXN0ID0gb3BlcmF0b3I7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFRva2VuT3JBc3QhLCBlbmRUb2tlbk9yQXN0KTtcbiAgICByZXR1cm4gbmV3IENzc1NpbXBsZVNlbGVjdG9yQXN0KHNwYW4sIHNlbGVjdG9yQ3NzVG9rZW5zLCBzdHJWYWx1ZSwgcHNldWRvU2VsZWN0b3JzLCBvcGVyYXRvciEpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VTZWxlY3RvcihkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NTZWxlY3RvckFzdCB7XG4gICAgZGVsaW1pdGVycyB8PSBDT01NQV9ERUxJTV9GTEFHO1xuICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuU0VMRUNUT1IpO1xuXG4gICAgY29uc3Qgc2ltcGxlU2VsZWN0b3JzOiBDc3NTaW1wbGVTZWxlY3RvckFzdFtdID0gW107XG4gICAgd2hpbGUgKCFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpKSB7XG4gICAgICBzaW1wbGVTZWxlY3RvcnMucHVzaCh0aGlzLl9wYXJzZVNpbXBsZVNlbGVjdG9yKGRlbGltaXRlcnMpKTtcbiAgICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZVdoaXRlc3BhY2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdFNlbGVjdG9yID0gc2ltcGxlU2VsZWN0b3JzWzBdO1xuICAgIGNvbnN0IGxhc3RTZWxlY3RvciA9IHNpbXBsZVNlbGVjdG9yc1tzaW1wbGVTZWxlY3RvcnMubGVuZ3RoIC0gMV07XG4gICAgY29uc3Qgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihmaXJzdFNlbGVjdG9yLCBsYXN0U2VsZWN0b3IpO1xuICAgIHJldHVybiBuZXcgQ3NzU2VsZWN0b3JBc3Qoc3Bhbiwgc2ltcGxlU2VsZWN0b3JzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlVmFsdWUoZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzU3R5bGVWYWx1ZUFzdCB7XG4gICAgZGVsaW1pdGVycyB8PSBSQlJBQ0VfREVMSU1fRkxBRyB8IFNFTUlDT0xPTl9ERUxJTV9GTEFHIHwgTkVXTElORV9ERUxJTV9GTEFHO1xuXG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TVFlMRV9WQUxVRSk7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRTY2FubmVySW5kZXgoKTtcblxuICAgIGNvbnN0IHRva2VuczogQ3NzVG9rZW5bXSA9IFtdO1xuICAgIGxldCB3c1N0ciA9ICcnO1xuICAgIGxldCBwcmV2aW91czogQ3NzVG9rZW4gPSB1bmRlZmluZWQhO1xuICAgIHdoaWxlICghY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBkZWxpbWl0ZXJzKSkge1xuICAgICAgbGV0IHRva2VuOiBDc3NUb2tlbjtcbiAgICAgIGlmIChwcmV2aW91cyAhPSBudWxsICYmIHByZXZpb3VzLnR5cGUgPT0gQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIgJiZcbiAgICAgICAgICB0aGlzLl9zY2FubmVyLnBlZWsgPT0gY2hhcnMuJExQQVJFTikge1xuICAgICAgICB0b2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJygnKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuXG4gICAgICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuU1RZTEVfVkFMVUVfRlVOQ1RJT04pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5fc2NhbigpO1xuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TVFlMRV9WQUxVRSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICcpJyk7XG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5fc2NhbigpO1xuICAgICAgICBpZiAodG9rZW4udHlwZSA9PSBDc3NUb2tlblR5cGUuV2hpdGVzcGFjZSkge1xuICAgICAgICAgIHdzU3RyICs9IHRva2VuLnN0clZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdzU3RyID0gJyc7XG4gICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcmV2aW91cyA9IHRva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZCA9IHRoaXMuX2dldFNjYW5uZXJJbmRleCgpIC0gMTtcbiAgICB0aGlzLl9zY2FubmVyLmNvbnN1bWVXaGl0ZXNwYWNlKCk7XG5cbiAgICBjb25zdCBjb2RlID0gdGhpcy5fc2Nhbm5lci5wZWVrO1xuICAgIGlmIChjb2RlID09IGNoYXJzLiRTRU1JQ09MT04pIHtcbiAgICAgIHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJzsnKTtcbiAgICB9IGVsc2UgaWYgKGNvZGUgIT0gY2hhcnMuJFJCUkFDRSkge1xuICAgICAgdGhpcy5fZXJyb3IoXG4gICAgICAgICAgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoXG4gICAgICAgICAgICAgIHRoaXMuX2dldFNvdXJjZUNvbnRlbnQoKSwgYFRoZSBDU1Mga2V5L3ZhbHVlIGRlZmluaXRpb24gZGlkIG5vdCBlbmQgd2l0aCBhIHNlbWljb2xvbmAsXG4gICAgICAgICAgICAgIHByZXZpb3VzLnN0clZhbHVlLCBwcmV2aW91cy5pbmRleCwgcHJldmlvdXMubGluZSwgcHJldmlvdXMuY29sdW1uKSxcbiAgICAgICAgICBwcmV2aW91cyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyVmFsdWUgPSB0aGlzLl9leHRyYWN0U291cmNlQ29udGVudChzdGFydCwgZW5kKTtcbiAgICBjb25zdCBzdGFydFRva2VuID0gdG9rZW5zWzBdO1xuICAgIGNvbnN0IGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcbiAgICByZXR1cm4gbmV3IENzc1N0eWxlVmFsdWVBc3Qoc3BhbiwgdG9rZW5zLCBzdHJWYWx1ZSk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jb2xsZWN0VW50aWxEZWxpbShkZWxpbWl0ZXJzOiBudW1iZXIsIGFzc2VydFR5cGU6IENzc1Rva2VuVHlwZXxudWxsID0gbnVsbCk6IENzc1Rva2VuW10ge1xuICAgIGNvbnN0IHRva2VuczogQ3NzVG9rZW5bXSA9IFtdO1xuICAgIHdoaWxlICghY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBkZWxpbWl0ZXJzKSkge1xuICAgICAgY29uc3QgdmFsID0gYXNzZXJ0VHlwZSAhPSBudWxsID8gdGhpcy5fY29uc3VtZShhc3NlcnRUeXBlKSA6IHRoaXMuX3NjYW4oKTtcbiAgICAgIHRva2Vucy5wdXNoKHZhbCk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZUJsb2NrKGRlbGltaXRlcnM6IG51bWJlcik6IENzc0Jsb2NrQXN0IHtcbiAgICBkZWxpbWl0ZXJzIHw9IFJCUkFDRV9ERUxJTV9GTEFHO1xuXG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5CTE9DSyk7XG5cbiAgICBjb25zdCBzdGFydFRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAneycpO1xuICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZUVtcHR5U3RhdGVtZW50cygpO1xuXG4gICAgY29uc3QgcmVzdWx0czogQ3NzUnVsZUFzdFtdID0gW107XG4gICAgd2hpbGUgKCFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpKSB7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5fcGFyc2VSdWxlKGRlbGltaXRlcnMpKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRUb2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJ30nKTtcblxuICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuQkxPQ0spO1xuICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZUVtcHR5U3RhdGVtZW50cygpO1xuXG4gICAgY29uc3Qgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFRva2VuLCBlbmRUb2tlbik7XG4gICAgcmV0dXJuIG5ldyBDc3NCbG9ja0FzdChzcGFuLCByZXN1bHRzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlU3R5bGVCbG9jayhkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NTdHlsZXNCbG9ja0FzdHxudWxsIHtcbiAgICBkZWxpbWl0ZXJzIHw9IFJCUkFDRV9ERUxJTV9GTEFHIHwgTEJSQUNFX0RFTElNX0ZMQUc7XG5cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlNUWUxFX0JMT0NLKTtcblxuICAgIGNvbnN0IHN0YXJ0VG9rZW4gPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICd7Jyk7XG4gICAgaWYgKHN0YXJ0VG9rZW4ubnVtVmFsdWUgIT0gY2hhcnMuJExCUkFDRSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZGVmaW5pdGlvbnM6IENzc0RlZmluaXRpb25Bc3RbXSA9IFtdO1xuICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZUVtcHR5U3RhdGVtZW50cygpO1xuXG4gICAgd2hpbGUgKCFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpKSB7XG4gICAgICBkZWZpbml0aW9ucy5wdXNoKHRoaXMuX3BhcnNlRGVmaW5pdGlvbihkZWxpbWl0ZXJzKSk7XG4gICAgICB0aGlzLl9zY2FubmVyLmNvbnN1bWVFbXB0eVN0YXRlbWVudHMoKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRUb2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJ30nKTtcblxuICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuU1RZTEVfQkxPQ0spO1xuICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZUVtcHR5U3RhdGVtZW50cygpO1xuXG4gICAgY29uc3Qgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFRva2VuLCBlbmRUb2tlbik7XG4gICAgcmV0dXJuIG5ldyBDc3NTdHlsZXNCbG9ja0FzdChzcGFuLCBkZWZpbml0aW9ucyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZURlZmluaXRpb24oZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzRGVmaW5pdGlvbkFzdCB7XG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TVFlMRV9CTE9DSyk7XG5cbiAgICBsZXQgcHJvcCA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIpO1xuICAgIGxldCBwYXJzZVZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHZhbHVlOiBDc3NTdHlsZVZhbHVlQXN0fG51bGwgPSBudWxsO1xuICAgIGxldCBlbmRUb2tlbjogQ3NzVG9rZW58Q3NzU3R5bGVWYWx1ZUFzdCA9IHByb3A7XG5cbiAgICAvLyB0aGUgY29sb24gdmFsdWUgc2VwYXJhdGVzIHRoZSBwcm9wIGZyb20gdGhlIHN0eWxlLlxuICAgIC8vIHRoZXJlIGFyZSBhIGZldyBjYXNlcyBhcyB0byB3aGF0IGNvdWxkIGhhcHBlbiBpZiBpdFxuICAgIC8vIGlzIG1pc3NpbmdcbiAgICBzd2l0Y2ggKHRoaXMuX3NjYW5uZXIucGVlaykge1xuICAgICAgY2FzZSBjaGFycy4kU0VNSUNPTE9OOlxuICAgICAgY2FzZSBjaGFycy4kUkJSQUNFOlxuICAgICAgY2FzZSBjaGFycy4kRU9GOlxuICAgICAgICBwYXJzZVZhbHVlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZXQgcHJvcFN0ciA9IFtwcm9wLnN0clZhbHVlXTtcbiAgICAgICAgaWYgKHRoaXMuX3NjYW5uZXIucGVlayAhPSBjaGFycy4kQ09MT04pIHtcbiAgICAgICAgICAvLyB0aGlzIHdpbGwgdGhyb3cgdGhlIGVycm9yXG4gICAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnOicpO1xuICAgICAgICAgIHByb3BTdHIucHVzaChuZXh0VmFsdWUuc3RyVmFsdWUpO1xuXG4gICAgICAgICAgY29uc3QgcmVtYWluaW5nVG9rZW5zID0gdGhpcy5fY29sbGVjdFVudGlsRGVsaW0oXG4gICAgICAgICAgICAgIGRlbGltaXRlcnMgfCBDT0xPTl9ERUxJTV9GTEFHIHwgU0VNSUNPTE9OX0RFTElNX0ZMQUcsIENzc1Rva2VuVHlwZS5JZGVudGlmaWVyKTtcbiAgICAgICAgICBpZiAocmVtYWluaW5nVG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlbWFpbmluZ1Rva2Vucy5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICBwcm9wU3RyLnB1c2godG9rZW4uc3RyVmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZW5kVG9rZW4gPSBwcm9wID1cbiAgICAgICAgICAgICAgbmV3IENzc1Rva2VuKHByb3AuaW5kZXgsIHByb3AuY29sdW1uLCBwcm9wLmxpbmUsIHByb3AudHlwZSwgcHJvcFN0ci5qb2luKCcgJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcyBtZWFucyB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIGRlZmluaXRpb24gYW5kL29yIGJsb2NrXG4gICAgICAgIGlmICh0aGlzLl9zY2FubmVyLnBlZWsgPT0gY2hhcnMuJENPTE9OKSB7XG4gICAgICAgICAgdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnOicpO1xuICAgICAgICAgIHBhcnNlVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChwYXJzZVZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuX3BhcnNlVmFsdWUoZGVsaW1pdGVycyk7XG4gICAgICBlbmRUb2tlbiA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lcnJvcihcbiAgICAgICAgICBnZW5lcmF0ZUVycm9yTWVzc2FnZShcbiAgICAgICAgICAgICAgdGhpcy5fZ2V0U291cmNlQ29udGVudCgpLCBgVGhlIENTUyBwcm9wZXJ0eSB3YXMgbm90IHBhaXJlZCB3aXRoIGEgc3R5bGUgdmFsdWVgLFxuICAgICAgICAgICAgICBwcm9wLnN0clZhbHVlLCBwcm9wLmluZGV4LCBwcm9wLmxpbmUsIHByb3AuY29sdW1uKSxcbiAgICAgICAgICBwcm9wKTtcbiAgICB9XG5cbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHByb3AsIGVuZFRva2VuKTtcbiAgICByZXR1cm4gbmV3IENzc0RlZmluaXRpb25Bc3Qoc3BhbiwgcHJvcCwgdmFsdWUhKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Fzc2VydENvbmRpdGlvbihzdGF0dXM6IGJvb2xlYW4sIGVycm9yTWVzc2FnZTogc3RyaW5nLCBwcm9ibGVtVG9rZW46IENzc1Rva2VuKTogYm9vbGVhbiB7XG4gICAgaWYgKCFzdGF0dXMpIHtcbiAgICAgIHRoaXMuX2Vycm9yKGVycm9yTWVzc2FnZSwgcHJvYmxlbVRva2VuKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9lcnJvcihtZXNzYWdlOiBzdHJpbmcsIHByb2JsZW1Ub2tlbjogQ3NzVG9rZW4pIHtcbiAgICBjb25zdCBsZW5ndGggPSBwcm9ibGVtVG9rZW4uc3RyVmFsdWUubGVuZ3RoO1xuICAgIGNvbnN0IGVycm9yID0gQ3NzUGFyc2VFcnJvci5jcmVhdGUoXG4gICAgICAgIHRoaXMuX2ZpbGUsIDAsIHByb2JsZW1Ub2tlbi5saW5lLCBwcm9ibGVtVG9rZW4uY29sdW1uLCBsZW5ndGgsIG1lc3NhZ2UpO1xuICAgIHRoaXMuX2Vycm9ycy5wdXNoKGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3NzUGFyc2VFcnJvciBleHRlbmRzIFBhcnNlRXJyb3Ige1xuICBzdGF0aWMgY3JlYXRlKFxuICAgICAgZmlsZTogUGFyc2VTb3VyY2VGaWxlLCBvZmZzZXQ6IG51bWJlciwgbGluZTogbnVtYmVyLCBjb2w6IG51bWJlciwgbGVuZ3RoOiBudW1iZXIsXG4gICAgICBlcnJNc2c6IHN0cmluZyk6IENzc1BhcnNlRXJyb3Ige1xuICAgIGNvbnN0IHN0YXJ0ID0gbmV3IFBhcnNlTG9jYXRpb24oZmlsZSwgb2Zmc2V0LCBsaW5lLCBjb2wpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBQYXJzZUxvY2F0aW9uKGZpbGUsIG9mZnNldCwgbGluZSwgY29sICsgbGVuZ3RoKTtcbiAgICBjb25zdCBzcGFuID0gbmV3IFBhcnNlU291cmNlU3BhbihzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gbmV3IENzc1BhcnNlRXJyb3Ioc3BhbiwgJ0NTUyBQYXJzZSBFcnJvcjogJyArIGVyck1zZyk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihzcGFuOiBQYXJzZVNvdXJjZVNwYW4sIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKHNwYW4sIG1lc3NhZ2UpO1xuICB9XG59XG4iXX0=
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as chars from '../chars';
import { ParseError, ParseLocation, ParseSourceFile, ParseSourceSpan } from '../parse_util';
import { BlockType, CssAst, CssAtRulePredicateAst, CssBlockAst, CssBlockDefinitionRuleAst, CssBlockRuleAst, CssDefinitionAst, CssInlineRuleAst, CssKeyframeDefinitionAst, CssKeyframeRuleAst, CssMediaQueryRuleAst, CssPseudoSelectorAst, CssSelectorAst, CssSelectorRuleAst, CssSimpleSelectorAst, CssStylesBlockAst, CssStyleSheetAst, CssStyleValueAst, CssUnknownRuleAst, CssUnknownTokenListAst, mergeTokens } from './css_ast';
import { CssLexer, CssLexerMode, CssToken, CssTokenType, generateErrorMessage, getRawMessage, isNewline } from './css_lexer';
const SPACE_OPERATOR = ' ';
export { CssToken } from './css_lexer';
export { BlockType } from './css_ast';
const SLASH_CHARACTER = '/';
const GT_CHARACTER = '>';
const TRIPLE_GT_OPERATOR_STR = '>>>';
const DEEP_OPERATOR_STR = '/deep/';
const EOF_DELIM_FLAG = 1;
const RBRACE_DELIM_FLAG = 2;
const LBRACE_DELIM_FLAG = 4;
const COMMA_DELIM_FLAG = 8;
const COLON_DELIM_FLAG = 16;
const SEMICOLON_DELIM_FLAG = 32;
const NEWLINE_DELIM_FLAG = 64;
const RPAREN_DELIM_FLAG = 128;
const LPAREN_DELIM_FLAG = 256;
const SPACE_DELIM_FLAG = 512;
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
export class ParsedCssResult {
    constructor(errors, ast) {
        this.errors = errors;
        this.ast = ast;
    }
}
export class CssParser {
    constructor() {
        this._errors = [];
    }
    /**
     * @param css the CSS code that will be parsed
     * @param url the name of the CSS file containing the CSS source code
     */
    parse(css, url) {
        const lexer = new CssLexer();
        this._file = new ParseSourceFile(css, url);
        this._scanner = lexer.scan(css, false);
        const ast = this._parseStyleSheet(EOF_DELIM_FLAG);
        const errors = this._errors;
        this._errors = [];
        const result = new ParsedCssResult(errors, ast);
        this._file = null;
        this._scanner = null;
        return result;
    }
    /** @internal */
    _parseStyleSheet(delimiters) {
        const results = [];
        this._scanner.consumeEmptyStatements();
        while (this._scanner.peek != chars.$EOF) {
            this._scanner.setMode(CssLexerMode.BLOCK);
            results.push(this._parseRule(delimiters));
        }
        let span = null;
        if (results.length > 0) {
            const firstRule = results[0];
            // we collect the last token like so incase there was an
            // EOF token that was emitted sometime during the lexing
            span = this._generateSourceSpan(firstRule, this._lastToken);
        }
        return new CssStyleSheetAst(span, results);
    }
    /** @internal */
    _getSourceContent() {
        return this._scanner != null ? this._scanner.input : '';
    }
    /** @internal */
    _extractSourceContent(start, end) {
        return this._getSourceContent().substring(start, end + 1);
    }
    /** @internal */
    _generateSourceSpan(start, end = null) {
        let startLoc;
        if (start instanceof CssAst) {
            startLoc = start.location.start;
        }
        else {
            let token = start;
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
        let endLine = -1;
        let endColumn = -1;
        let endIndex = -1;
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
        const endLoc = new ParseLocation(this._file, endIndex, endLine, endColumn);
        return new ParseSourceSpan(startLoc, endLoc);
    }
    /** @internal */
    _resolveBlockType(token) {
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
    }
    /** @internal */
    _parseRule(delimiters) {
        if (this._scanner.peek == chars.$AT) {
            return this._parseAtRule(delimiters);
        }
        return this._parseSelectorRule(delimiters);
    }
    /** @internal */
    _parseAtRule(delimiters) {
        const start = this._getScannerIndex();
        this._scanner.setMode(CssLexerMode.BLOCK);
        const token = this._scan();
        const startToken = token;
        this._assertCondition(token.type == CssTokenType.AtKeyword, `The CSS Rule ${token.strValue} is not a valid [@] rule.`, token);
        let block;
        const type = this._resolveBlockType(token);
        let span;
        let tokens;
        let endToken;
        let end;
        let strValue;
        let query;
        switch (type) {
            case BlockType.Charset:
            case BlockType.Namespace:
            case BlockType.Import:
                let value = this._parseValue(delimiters);
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
                let name = tokens[0];
                block = this._parseKeyframeBlock(delimiters);
                span = this._generateSourceSpan(startToken, block);
                return new CssKeyframeRuleAst(span, name, block);
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
                let listOfTokens = [];
                let tokenName = token.strValue;
                this._scanner.setMode(CssLexerMode.ALL);
                this._error(generateErrorMessage(this._getSourceContent(), `The CSS "at" rule "${tokenName}" is not allowed to used here`, token.strValue, token.index, token.line, token.column), token);
                this._collectUntilDelim(delimiters | LBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG)
                    .forEach((token) => {
                    listOfTokens.push(token);
                });
                if (this._scanner.peek == chars.$LBRACE) {
                    listOfTokens.push(this._consume(CssTokenType.Character, '{'));
                    this._collectUntilDelim(delimiters | RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG)
                        .forEach((token) => {
                        listOfTokens.push(token);
                    });
                    listOfTokens.push(this._consume(CssTokenType.Character, '}'));
                }
                endToken = listOfTokens[listOfTokens.length - 1];
                span = this._generateSourceSpan(startToken, endToken);
                return new CssUnknownRuleAst(span, tokenName, listOfTokens);
        }
    }
    /** @internal */
    _parseSelectorRule(delimiters) {
        const start = this._getScannerIndex();
        const selectors = this._parseSelectors(delimiters);
        const block = this._parseStyleBlock(delimiters);
        let ruleAst;
        let span;
        const startSelector = selectors[0];
        if (block != null) {
            span = this._generateSourceSpan(startSelector, block);
            ruleAst = new CssSelectorRuleAst(span, selectors, block);
        }
        else {
            const name = this._extractSourceContent(start, this._getScannerIndex() - 1);
            const innerTokens = [];
            selectors.forEach((selector) => {
                selector.selectorParts.forEach((part) => {
                    part.tokens.forEach((token) => {
                        innerTokens.push(token);
                    });
                });
            });
            const endToken = innerTokens[innerTokens.length - 1];
            span = this._generateSourceSpan(startSelector, endToken);
            ruleAst = new CssUnknownTokenListAst(span, name, innerTokens);
        }
        this._scanner.setMode(CssLexerMode.BLOCK);
        this._scanner.consumeEmptyStatements();
        return ruleAst;
    }
    /** @internal */
    _parseSelectors(delimiters) {
        delimiters |= LBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG;
        const selectors = [];
        let isParsingSelectors = true;
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
    }
    /** @internal */
    _scan() {
        const output = this._scanner.scan();
        const token = output.token;
        const error = output.error;
        if (error != null) {
            this._error(getRawMessage(error), token);
        }
        this._lastToken = token;
        return token;
    }
    /** @internal */
    _getScannerIndex() {
        return this._scanner.index;
    }
    /** @internal */
    _consume(type, value = null) {
        const output = this._scanner.consume(type, value);
        const token = output.token;
        const error = output.error;
        if (error != null) {
            this._error(getRawMessage(error), token);
        }
        this._lastToken = token;
        return token;
    }
    /** @internal */
    _parseKeyframeBlock(delimiters) {
        delimiters |= RBRACE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.KEYFRAME_BLOCK);
        const startToken = this._consume(CssTokenType.Character, '{');
        const definitions = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            definitions.push(this._parseKeyframeDefinition(delimiters));
        }
        const endToken = this._consume(CssTokenType.Character, '}');
        const span = this._generateSourceSpan(startToken, endToken);
        return new CssBlockAst(span, definitions);
    }
    /** @internal */
    _parseKeyframeDefinition(delimiters) {
        const start = this._getScannerIndex();
        const stepTokens = [];
        delimiters |= LBRACE_DELIM_FLAG;
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            stepTokens.push(this._parseKeyframeLabel(delimiters | COMMA_DELIM_FLAG));
            if (this._scanner.peek != chars.$LBRACE) {
                this._consume(CssTokenType.Character, ',');
            }
        }
        const stylesBlock = this._parseStyleBlock(delimiters | RBRACE_DELIM_FLAG);
        const span = this._generateSourceSpan(stepTokens[0], stylesBlock);
        const ast = new CssKeyframeDefinitionAst(span, stepTokens, stylesBlock);
        this._scanner.setMode(CssLexerMode.BLOCK);
        return ast;
    }
    /** @internal */
    _parseKeyframeLabel(delimiters) {
        this._scanner.setMode(CssLexerMode.KEYFRAME_BLOCK);
        return mergeTokens(this._collectUntilDelim(delimiters));
    }
    /** @internal */
    _parsePseudoSelector(delimiters) {
        const start = this._getScannerIndex();
        delimiters &= ~COMMA_DELIM_FLAG;
        // we keep the original value since we may use it to recurse when :not, :host are used
        const startingDelims = delimiters;
        const startToken = this._consume(CssTokenType.Character, ':');
        const tokens = [startToken];
        if (this._scanner.peek == chars.$COLON) { // ::something
            tokens.push(this._consume(CssTokenType.Character, ':'));
        }
        const innerSelectors = [];
        this._scanner.setMode(CssLexerMode.PSEUDO_SELECTOR);
        // host, host-context, lang, not, nth-child are all identifiers
        const pseudoSelectorToken = this._consume(CssTokenType.Identifier);
        const pseudoSelectorName = pseudoSelectorToken.strValue;
        tokens.push(pseudoSelectorToken);
        // host(), lang(), nth-child(), etc...
        if (this._scanner.peek == chars.$LPAREN) {
            this._scanner.setMode(CssLexerMode.PSEUDO_SELECTOR_WITH_ARGUMENTS);
            const openParenToken = this._consume(CssTokenType.Character, '(');
            tokens.push(openParenToken);
            // :host(innerSelector(s)), :not(selector), etc...
            if (_pseudoSelectorSupportsInnerSelectors(pseudoSelectorName)) {
                let innerDelims = startingDelims | LPAREN_DELIM_FLAG | RPAREN_DELIM_FLAG;
                if (pseudoSelectorName == 'not') {
                    // the inner selector inside of :not(...) can only be one
                    // CSS selector (no commas allowed) ... This is according
                    // to the CSS specification
                    innerDelims |= COMMA_DELIM_FLAG;
                }
                // :host(a, b, c) {
                this._parseSelectors(innerDelims).forEach((selector, index) => {
                    innerSelectors.push(selector);
                });
            }
            else {
                // this branch is for things like "en-us, 2k + 1, etc..."
                // which all end up in pseudoSelectors like :lang, :nth-child, etc..
                const innerValueDelims = delimiters | LBRACE_DELIM_FLAG | COLON_DELIM_FLAG |
                    RPAREN_DELIM_FLAG | LPAREN_DELIM_FLAG;
                while (!characterContainsDelimiter(this._scanner.peek, innerValueDelims)) {
                    const token = this._scan();
                    tokens.push(token);
                }
            }
            const closeParenToken = this._consume(CssTokenType.Character, ')');
            tokens.push(closeParenToken);
        }
        const end = this._getScannerIndex() - 1;
        const strValue = this._extractSourceContent(start, end);
        const endToken = tokens[tokens.length - 1];
        const span = this._generateSourceSpan(startToken, endToken);
        return new CssPseudoSelectorAst(span, strValue, pseudoSelectorName, tokens, innerSelectors);
    }
    /** @internal */
    _parseSimpleSelector(delimiters) {
        const start = this._getScannerIndex();
        delimiters |= COMMA_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.SELECTOR);
        const selectorCssTokens = [];
        const pseudoSelectors = [];
        let previousToken = undefined;
        const selectorPartDelimiters = delimiters | SPACE_DELIM_FLAG;
        let loopOverSelector = !characterContainsDelimiter(this._scanner.peek, selectorPartDelimiters);
        let hasAttributeError = false;
        while (loopOverSelector) {
            const peek = this._scanner.peek;
            switch (peek) {
                case chars.$COLON:
                    let innerPseudo = this._parsePseudoSelector(delimiters);
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
                    let token = this._scan();
                    previousToken = token;
                    selectorCssTokens.push(token);
                    break;
            }
            loopOverSelector = !characterContainsDelimiter(this._scanner.peek, selectorPartDelimiters);
        }
        hasAttributeError =
            hasAttributeError || this._scanner.getMode() == CssLexerMode.ATTRIBUTE_SELECTOR;
        if (hasAttributeError) {
            this._error(`Unbalanced CSS attribute selector at column ${previousToken.line}:${previousToken.column}`, previousToken);
        }
        let end = this._getScannerIndex() - 1;
        // this happens if the selector is not directly followed by
        // a comma or curly brace without a space in between
        let operator = null;
        let operatorScanCount = 0;
        let lastOperatorToken = null;
        if (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            while (operator == null && !characterContainsDelimiter(this._scanner.peek, delimiters) &&
                isSelectorOperatorCharacter(this._scanner.peek)) {
                let token = this._scan();
                const tokenOperator = token.strValue;
                operatorScanCount++;
                lastOperatorToken = token;
                if (tokenOperator != SPACE_OPERATOR) {
                    switch (tokenOperator) {
                        case SLASH_CHARACTER:
                            // /deep/ operator
                            let deepToken = this._consume(CssTokenType.Identifier);
                            let deepSlash = this._consume(CssTokenType.Character);
                            let index = lastOperatorToken.index;
                            let line = lastOperatorToken.line;
                            let column = lastOperatorToken.column;
                            if (deepToken != null && deepToken.strValue.toLowerCase() == 'deep' &&
                                deepSlash.strValue == SLASH_CHARACTER) {
                                token = new CssToken(lastOperatorToken.index, lastOperatorToken.column, lastOperatorToken.line, CssTokenType.Identifier, DEEP_OPERATOR_STR);
                            }
                            else {
                                const text = SLASH_CHARACTER + deepToken.strValue + deepSlash.strValue;
                                this._error(generateErrorMessage(this._getSourceContent(), `${text} is an invalid CSS operator`, text, index, line, column), lastOperatorToken);
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
        const strValue = this._extractSourceContent(start, end);
        // if we do come across one or more spaces inside of
        // the operators loop then an empty space is still a
        // valid operator to use if something else was not found
        if (operator == null && operatorScanCount > 0 && this._scanner.peek != chars.$LBRACE) {
            operator = lastOperatorToken;
        }
        // please note that `endToken` is reassigned multiple times below
        // so please do not optimize the if statements into if/elseif
        let startTokenOrAst = null;
        let endTokenOrAst = null;
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
        const span = this._generateSourceSpan(startTokenOrAst, endTokenOrAst);
        return new CssSimpleSelectorAst(span, selectorCssTokens, strValue, pseudoSelectors, operator);
    }
    /** @internal */
    _parseSelector(delimiters) {
        delimiters |= COMMA_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.SELECTOR);
        const simpleSelectors = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            simpleSelectors.push(this._parseSimpleSelector(delimiters));
            this._scanner.consumeWhitespace();
        }
        const firstSelector = simpleSelectors[0];
        const lastSelector = simpleSelectors[simpleSelectors.length - 1];
        const span = this._generateSourceSpan(firstSelector, lastSelector);
        return new CssSelectorAst(span, simpleSelectors);
    }
    /** @internal */
    _parseValue(delimiters) {
        delimiters |= RBRACE_DELIM_FLAG | SEMICOLON_DELIM_FLAG | NEWLINE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.STYLE_VALUE);
        const start = this._getScannerIndex();
        const tokens = [];
        let wsStr = '';
        let previous = undefined;
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            let token;
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
        const end = this._getScannerIndex() - 1;
        this._scanner.consumeWhitespace();
        const code = this._scanner.peek;
        if (code == chars.$SEMICOLON) {
            this._consume(CssTokenType.Character, ';');
        }
        else if (code != chars.$RBRACE) {
            this._error(generateErrorMessage(this._getSourceContent(), `The CSS key/value definition did not end with a semicolon`, previous.strValue, previous.index, previous.line, previous.column), previous);
        }
        const strValue = this._extractSourceContent(start, end);
        const startToken = tokens[0];
        const endToken = tokens[tokens.length - 1];
        const span = this._generateSourceSpan(startToken, endToken);
        return new CssStyleValueAst(span, tokens, strValue);
    }
    /** @internal */
    _collectUntilDelim(delimiters, assertType = null) {
        const tokens = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            const val = assertType != null ? this._consume(assertType) : this._scan();
            tokens.push(val);
        }
        return tokens;
    }
    /** @internal */
    _parseBlock(delimiters) {
        delimiters |= RBRACE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.BLOCK);
        const startToken = this._consume(CssTokenType.Character, '{');
        this._scanner.consumeEmptyStatements();
        const results = [];
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            results.push(this._parseRule(delimiters));
        }
        const endToken = this._consume(CssTokenType.Character, '}');
        this._scanner.setMode(CssLexerMode.BLOCK);
        this._scanner.consumeEmptyStatements();
        const span = this._generateSourceSpan(startToken, endToken);
        return new CssBlockAst(span, results);
    }
    /** @internal */
    _parseStyleBlock(delimiters) {
        delimiters |= RBRACE_DELIM_FLAG | LBRACE_DELIM_FLAG;
        this._scanner.setMode(CssLexerMode.STYLE_BLOCK);
        const startToken = this._consume(CssTokenType.Character, '{');
        if (startToken.numValue != chars.$LBRACE) {
            return null;
        }
        const definitions = [];
        this._scanner.consumeEmptyStatements();
        while (!characterContainsDelimiter(this._scanner.peek, delimiters)) {
            definitions.push(this._parseDefinition(delimiters));
            this._scanner.consumeEmptyStatements();
        }
        const endToken = this._consume(CssTokenType.Character, '}');
        this._scanner.setMode(CssLexerMode.STYLE_BLOCK);
        this._scanner.consumeEmptyStatements();
        const span = this._generateSourceSpan(startToken, endToken);
        return new CssStylesBlockAst(span, definitions);
    }
    /** @internal */
    _parseDefinition(delimiters) {
        this._scanner.setMode(CssLexerMode.STYLE_BLOCK);
        let prop = this._consume(CssTokenType.Identifier);
        let parseValue = false;
        let value = null;
        let endToken = prop;
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
                let propStr = [prop.strValue];
                if (this._scanner.peek != chars.$COLON) {
                    // this will throw the error
                    const nextValue = this._consume(CssTokenType.Character, ':');
                    propStr.push(nextValue.strValue);
                    const remainingTokens = this._collectUntilDelim(delimiters | COLON_DELIM_FLAG | SEMICOLON_DELIM_FLAG, CssTokenType.Identifier);
                    if (remainingTokens.length > 0) {
                        remainingTokens.forEach((token) => {
                            propStr.push(token.strValue);
                        });
                    }
                    endToken = prop =
                        new CssToken(prop.index, prop.column, prop.line, prop.type, propStr.join(' '));
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
            this._error(generateErrorMessage(this._getSourceContent(), `The CSS property was not paired with a style value`, prop.strValue, prop.index, prop.line, prop.column), prop);
        }
        const span = this._generateSourceSpan(prop, endToken);
        return new CssDefinitionAst(span, prop, value);
    }
    /** @internal */
    _assertCondition(status, errorMessage, problemToken) {
        if (!status) {
            this._error(errorMessage, problemToken);
            return true;
        }
        return false;
    }
    /** @internal */
    _error(message, problemToken) {
        const length = problemToken.strValue.length;
        const error = CssParseError.create(this._file, 0, problemToken.line, problemToken.column, length, message);
        this._errors.push(error);
    }
}
export class CssParseError extends ParseError {
    static create(file, offset, line, col, length, errMsg) {
        const start = new ParseLocation(file, offset, line, col);
        const end = new ParseLocation(file, offset, line, col + length);
        const span = new ParseSourceSpan(start, end);
        return new CssParseError(span, 'CSS Parse Error: ' + errMsg);
    }
    constructor(span, message) {
        super(span, message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzX3BhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9jc3NfcGFyc2VyL2Nzc19wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxLQUFLLEtBQUssTUFBTSxVQUFVLENBQUM7QUFDbEMsT0FBTyxFQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUxRixPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxXQUFXLEVBQUUseUJBQXlCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLHdCQUF3QixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFjLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDL2EsT0FBTyxFQUFDLFFBQVEsRUFBRSxZQUFZLEVBQWMsUUFBUSxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBRXZJLE1BQU0sY0FBYyxHQUFHLEdBQUcsQ0FBQztBQUUzQixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3JDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFcEMsTUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBQzVCLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQztBQUN6QixNQUFNLHNCQUFzQixHQUFHLEtBQUssQ0FBQztBQUNyQyxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztBQUVuQyxN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LENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTtJQUMzQyxNQUFNLENBQUMsTUFBTSxDQUNULElBQXFCLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxHQUFXLEVBQUUsTUFBYyxFQUNoRixNQUFjO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sR0FBRyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFlBQVksSUFBcUIsRUFBRSxPQUFlO1FBQ2hELEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBjaGFycyBmcm9tICcuLi9jaGFycyc7XG5pbXBvcnQge1BhcnNlRXJyb3IsIFBhcnNlTG9jYXRpb24sIFBhcnNlU291cmNlRmlsZSwgUGFyc2VTb3VyY2VTcGFufSBmcm9tICcuLi9wYXJzZV91dGlsJztcblxuaW1wb3J0IHtCbG9ja1R5cGUsIENzc0FzdCwgQ3NzQXRSdWxlUHJlZGljYXRlQXN0LCBDc3NCbG9ja0FzdCwgQ3NzQmxvY2tEZWZpbml0aW9uUnVsZUFzdCwgQ3NzQmxvY2tSdWxlQXN0LCBDc3NEZWZpbml0aW9uQXN0LCBDc3NJbmxpbmVSdWxlQXN0LCBDc3NLZXlmcmFtZURlZmluaXRpb25Bc3QsIENzc0tleWZyYW1lUnVsZUFzdCwgQ3NzTWVkaWFRdWVyeVJ1bGVBc3QsIENzc1BzZXVkb1NlbGVjdG9yQXN0LCBDc3NSdWxlQXN0LCBDc3NTZWxlY3RvckFzdCwgQ3NzU2VsZWN0b3JSdWxlQXN0LCBDc3NTaW1wbGVTZWxlY3RvckFzdCwgQ3NzU3R5bGVzQmxvY2tBc3QsIENzc1N0eWxlU2hlZXRBc3QsIENzc1N0eWxlVmFsdWVBc3QsIENzc1Vua25vd25SdWxlQXN0LCBDc3NVbmtub3duVG9rZW5MaXN0QXN0LCBtZXJnZVRva2Vuc30gZnJvbSAnLi9jc3NfYXN0JztcbmltcG9ydCB7Q3NzTGV4ZXIsIENzc0xleGVyTW9kZSwgQ3NzU2Nhbm5lciwgQ3NzVG9rZW4sIENzc1Rva2VuVHlwZSwgZ2VuZXJhdGVFcnJvck1lc3NhZ2UsIGdldFJhd01lc3NhZ2UsIGlzTmV3bGluZX0gZnJvbSAnLi9jc3NfbGV4ZXInO1xuXG5jb25zdCBTUEFDRV9PUEVSQVRPUiA9ICcgJztcblxuZXhwb3J0IHtDc3NUb2tlbn0gZnJvbSAnLi9jc3NfbGV4ZXInO1xuZXhwb3J0IHtCbG9ja1R5cGV9IGZyb20gJy4vY3NzX2FzdCc7XG5cbmNvbnN0IFNMQVNIX0NIQVJBQ1RFUiA9ICcvJztcbmNvbnN0IEdUX0NIQVJBQ1RFUiA9ICc+JztcbmNvbnN0IFRSSVBMRV9HVF9PUEVSQVRPUl9TVFIgPSAnPj4+JztcbmNvbnN0IERFRVBfT1BFUkFUT1JfU1RSID0gJy9kZWVwLyc7XG5cbmNvbnN0IEVPRl9ERUxJTV9GTEFHID0gMTtcbmNvbnN0IFJCUkFDRV9ERUxJTV9GTEFHID0gMjtcbmNvbnN0IExCUkFDRV9ERUxJTV9GTEFHID0gNDtcbmNvbnN0IENPTU1BX0RFTElNX0ZMQUcgPSA4O1xuY29uc3QgQ09MT05fREVMSU1fRkxBRyA9IDE2O1xuY29uc3QgU0VNSUNPTE9OX0RFTElNX0ZMQUcgPSAzMjtcbmNvbnN0IE5FV0xJTkVfREVMSU1fRkxBRyA9IDY0O1xuY29uc3QgUlBBUkVOX0RFTElNX0ZMQUcgPSAxMjg7XG5jb25zdCBMUEFSRU5fREVMSU1fRkxBRyA9IDI1NjtcbmNvbnN0IFNQQUNFX0RFTElNX0ZMQUcgPSA1MTI7XG5cbmZ1bmN0aW9uIF9wc2V1ZG9TZWxlY3RvclN1cHBvcnRzSW5uZXJTZWxlY3RvcnMobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBbJ25vdCcsICdob3N0JywgJ2hvc3QtY29udGV4dCddLmluZGV4T2YobmFtZSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3Rvck9wZXJhdG9yQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIGNoYXJzLiRTTEFTSDpcbiAgICBjYXNlIGNoYXJzLiRUSUxEQTpcbiAgICBjYXNlIGNoYXJzLiRQTFVTOlxuICAgIGNhc2UgY2hhcnMuJEdUOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjaGFycy5pc1doaXRlc3BhY2UoY29kZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVsaW1Gcm9tQ2hhcmFjdGVyKGNvZGU6IG51bWJlcik6IG51bWJlciB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgY2hhcnMuJEVPRjpcbiAgICAgIHJldHVybiBFT0ZfREVMSU1fRkxBRztcbiAgICBjYXNlIGNoYXJzLiRDT01NQTpcbiAgICAgIHJldHVybiBDT01NQV9ERUxJTV9GTEFHO1xuICAgIGNhc2UgY2hhcnMuJENPTE9OOlxuICAgICAgcmV0dXJuIENPTE9OX0RFTElNX0ZMQUc7XG4gICAgY2FzZSBjaGFycy4kU0VNSUNPTE9OOlxuICAgICAgcmV0dXJuIFNFTUlDT0xPTl9ERUxJTV9GTEFHO1xuICAgIGNhc2UgY2hhcnMuJFJCUkFDRTpcbiAgICAgIHJldHVybiBSQlJBQ0VfREVMSU1fRkxBRztcbiAgICBjYXNlIGNoYXJzLiRMQlJBQ0U6XG4gICAgICByZXR1cm4gTEJSQUNFX0RFTElNX0ZMQUc7XG4gICAgY2FzZSBjaGFycy4kUlBBUkVOOlxuICAgICAgcmV0dXJuIFJQQVJFTl9ERUxJTV9GTEFHO1xuICAgIGNhc2UgY2hhcnMuJFNQQUNFOlxuICAgIGNhc2UgY2hhcnMuJFRBQjpcbiAgICAgIHJldHVybiBTUEFDRV9ERUxJTV9GTEFHO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gaXNOZXdsaW5lKGNvZGUpID8gTkVXTElORV9ERUxJTV9GTEFHIDogMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcihjb2RlOiBudW1iZXIsIGRlbGltaXRlcnM6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKGdldERlbGltRnJvbUNoYXJhY3Rlcihjb2RlKSAmIGRlbGltaXRlcnMpID4gMDtcbn1cblxuZXhwb3J0IGNsYXNzIFBhcnNlZENzc1Jlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlcnJvcnM6IENzc1BhcnNlRXJyb3JbXSwgcHVibGljIGFzdDogQ3NzU3R5bGVTaGVldEFzdCkge31cbn1cblxuZXhwb3J0IGNsYXNzIENzc1BhcnNlciB7XG4gIHByaXZhdGUgX2Vycm9yczogQ3NzUGFyc2VFcnJvcltdID0gW107XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9maWxlITogUGFyc2VTb3VyY2VGaWxlO1xuICAvLyBUT0RPKGlzc3VlLzI0NTcxKTogcmVtb3ZlICchJy5cbiAgcHJpdmF0ZSBfc2Nhbm5lciE6IENzc1NjYW5uZXI7XG4gIC8vIFRPRE8oaXNzdWUvMjQ1NzEpOiByZW1vdmUgJyEnLlxuICBwcml2YXRlIF9sYXN0VG9rZW4hOiBDc3NUb2tlbjtcblxuICAvKipcbiAgICogQHBhcmFtIGNzcyB0aGUgQ1NTIGNvZGUgdGhhdCB3aWxsIGJlIHBhcnNlZFxuICAgKiBAcGFyYW0gdXJsIHRoZSBuYW1lIG9mIHRoZSBDU1MgZmlsZSBjb250YWluaW5nIHRoZSBDU1Mgc291cmNlIGNvZGVcbiAgICovXG4gIHBhcnNlKGNzczogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFBhcnNlZENzc1Jlc3VsdCB7XG4gICAgY29uc3QgbGV4ZXIgPSBuZXcgQ3NzTGV4ZXIoKTtcbiAgICB0aGlzLl9maWxlID0gbmV3IFBhcnNlU291cmNlRmlsZShjc3MsIHVybCk7XG4gICAgdGhpcy5fc2Nhbm5lciA9IGxleGVyLnNjYW4oY3NzLCBmYWxzZSk7XG5cbiAgICBjb25zdCBhc3QgPSB0aGlzLl9wYXJzZVN0eWxlU2hlZXQoRU9GX0RFTElNX0ZMQUcpO1xuXG4gICAgY29uc3QgZXJyb3JzID0gdGhpcy5fZXJyb3JzO1xuICAgIHRoaXMuX2Vycm9ycyA9IFtdO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhcnNlZENzc1Jlc3VsdChlcnJvcnMsIGFzdCk7XG4gICAgdGhpcy5fZmlsZSA9IG51bGwgYXMgYW55O1xuICAgIHRoaXMuX3NjYW5uZXIgPSBudWxsIGFzIGFueTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VTdHlsZVNoZWV0KGRlbGltaXRlcnM6IG51bWJlcik6IENzc1N0eWxlU2hlZXRBc3Qge1xuICAgIGNvbnN0IHJlc3VsdHM6IENzc1J1bGVBc3RbXSA9IFtdO1xuICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZUVtcHR5U3RhdGVtZW50cygpO1xuICAgIHdoaWxlICh0aGlzLl9zY2FubmVyLnBlZWsgIT0gY2hhcnMuJEVPRikge1xuICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5CTE9DSyk7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5fcGFyc2VSdWxlKGRlbGltaXRlcnMpKTtcbiAgICB9XG4gICAgbGV0IHNwYW46IFBhcnNlU291cmNlU3BhbnxudWxsID0gbnVsbDtcbiAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaXJzdFJ1bGUgPSByZXN1bHRzWzBdO1xuICAgICAgLy8gd2UgY29sbGVjdCB0aGUgbGFzdCB0b2tlbiBsaWtlIHNvIGluY2FzZSB0aGVyZSB3YXMgYW5cbiAgICAgIC8vIEVPRiB0b2tlbiB0aGF0IHdhcyBlbWl0dGVkIHNvbWV0aW1lIGR1cmluZyB0aGUgbGV4aW5nXG4gICAgICBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKGZpcnN0UnVsZSwgdGhpcy5fbGFzdFRva2VuKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBDc3NTdHlsZVNoZWV0QXN0KHNwYW4hLCByZXN1bHRzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dldFNvdXJjZUNvbnRlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nhbm5lciAhPSBudWxsID8gdGhpcy5fc2Nhbm5lci5pbnB1dCA6ICcnO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZXh0cmFjdFNvdXJjZUNvbnRlbnQoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nZXRTb3VyY2VDb250ZW50KCkuc3Vic3RyaW5nKHN0YXJ0LCBlbmQgKyAxKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2dlbmVyYXRlU291cmNlU3BhbihzdGFydDogQ3NzVG9rZW58Q3NzQXN0LCBlbmQ6IENzc1Rva2VufENzc0FzdHxudWxsID0gbnVsbCk6IFBhcnNlU291cmNlU3BhbiB7XG4gICAgbGV0IHN0YXJ0TG9jOiBQYXJzZUxvY2F0aW9uO1xuICAgIGlmIChzdGFydCBpbnN0YW5jZW9mIENzc0FzdCkge1xuICAgICAgc3RhcnRMb2MgPSBzdGFydC5sb2NhdGlvbi5zdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRva2VuID0gc3RhcnQ7XG4gICAgICBpZiAodG9rZW4gPT0gbnVsbCkge1xuICAgICAgICAvLyB0aGUgZGF0YSBoZXJlIGlzIGludmFsaWQsIGhvd2V2ZXIsIGlmIGFuZCB3aGVuIHRoaXMgZG9lc1xuICAgICAgICAvLyBvY2N1ciwgYW55IG90aGVyIGVycm9ycyBhc3NvY2lhdGVkIHdpdGggdGhpcyB3aWxsIGJlIGNvbGxlY3RlZFxuICAgICAgICB0b2tlbiA9IHRoaXMuX2xhc3RUb2tlbjtcbiAgICAgIH1cbiAgICAgIHN0YXJ0TG9jID0gbmV3IFBhcnNlTG9jYXRpb24odGhpcy5fZmlsZSwgdG9rZW4uaW5kZXgsIHRva2VuLmxpbmUsIHRva2VuLmNvbHVtbik7XG4gICAgfVxuXG4gICAgaWYgKGVuZCA9PSBudWxsKSB7XG4gICAgICBlbmQgPSB0aGlzLl9sYXN0VG9rZW47XG4gICAgfVxuXG4gICAgbGV0IGVuZExpbmU6IG51bWJlciA9IC0xO1xuICAgIGxldCBlbmRDb2x1bW46IG51bWJlciA9IC0xO1xuICAgIGxldCBlbmRJbmRleDogbnVtYmVyID0gLTE7XG4gICAgaWYgKGVuZCBpbnN0YW5jZW9mIENzc0FzdCkge1xuICAgICAgZW5kTGluZSA9IGVuZC5sb2NhdGlvbi5lbmQubGluZSE7XG4gICAgICBlbmRDb2x1bW4gPSBlbmQubG9jYXRpb24uZW5kLmNvbCE7XG4gICAgICBlbmRJbmRleCA9IGVuZC5sb2NhdGlvbi5lbmQub2Zmc2V0ITtcbiAgICB9IGVsc2UgaWYgKGVuZCBpbnN0YW5jZW9mIENzc1Rva2VuKSB7XG4gICAgICBlbmRMaW5lID0gZW5kLmxpbmU7XG4gICAgICBlbmRDb2x1bW4gPSBlbmQuY29sdW1uO1xuICAgICAgZW5kSW5kZXggPSBlbmQuaW5kZXg7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kTG9jID0gbmV3IFBhcnNlTG9jYXRpb24odGhpcy5fZmlsZSwgZW5kSW5kZXgsIGVuZExpbmUsIGVuZENvbHVtbik7XG4gICAgcmV0dXJuIG5ldyBQYXJzZVNvdXJjZVNwYW4oc3RhcnRMb2MsIGVuZExvYyk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9yZXNvbHZlQmxvY2tUeXBlKHRva2VuOiBDc3NUb2tlbik6IEJsb2NrVHlwZSB7XG4gICAgc3dpdGNoICh0b2tlbi5zdHJWYWx1ZSkge1xuICAgICAgY2FzZSAnQC1vLWtleWZyYW1lcyc6XG4gICAgICBjYXNlICdALW1vei1rZXlmcmFtZXMnOlxuICAgICAgY2FzZSAnQC13ZWJraXQta2V5ZnJhbWVzJzpcbiAgICAgIGNhc2UgJ0BrZXlmcmFtZXMnOlxuICAgICAgICByZXR1cm4gQmxvY2tUeXBlLktleWZyYW1lcztcblxuICAgICAgY2FzZSAnQGNoYXJzZXQnOlxuICAgICAgICByZXR1cm4gQmxvY2tUeXBlLkNoYXJzZXQ7XG5cbiAgICAgIGNhc2UgJ0BpbXBvcnQnOlxuICAgICAgICByZXR1cm4gQmxvY2tUeXBlLkltcG9ydDtcblxuICAgICAgY2FzZSAnQG5hbWVzcGFjZSc6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuTmFtZXNwYWNlO1xuXG4gICAgICBjYXNlICdAcGFnZSc6XG4gICAgICAgIHJldHVybiBCbG9ja1R5cGUuUGFnZTtcblxuICAgICAgY2FzZSAnQGRvY3VtZW50JzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5Eb2N1bWVudDtcblxuICAgICAgY2FzZSAnQG1lZGlhJzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5NZWRpYVF1ZXJ5O1xuXG4gICAgICBjYXNlICdAZm9udC1mYWNlJzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5Gb250RmFjZTtcblxuICAgICAgY2FzZSAnQHZpZXdwb3J0JzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5WaWV3cG9ydDtcblxuICAgICAgY2FzZSAnQHN1cHBvcnRzJzpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5TdXBwb3J0cztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIEJsb2NrVHlwZS5VbnN1cHBvcnRlZDtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZVJ1bGUoZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzUnVsZUFzdCB7XG4gICAgaWYgKHRoaXMuX3NjYW5uZXIucGVlayA9PSBjaGFycy4kQVQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wYXJzZUF0UnVsZShkZWxpbWl0ZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BhcnNlU2VsZWN0b3JSdWxlKGRlbGltaXRlcnMpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VBdFJ1bGUoZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzUnVsZUFzdCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRTY2FubmVySW5kZXgoKTtcblxuICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuQkxPQ0spO1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5fc2NhbigpO1xuICAgIGNvbnN0IHN0YXJ0VG9rZW4gPSB0b2tlbjtcblxuICAgIHRoaXMuX2Fzc2VydENvbmRpdGlvbihcbiAgICAgICAgdG9rZW4udHlwZSA9PSBDc3NUb2tlblR5cGUuQXRLZXl3b3JkLFxuICAgICAgICBgVGhlIENTUyBSdWxlICR7dG9rZW4uc3RyVmFsdWV9IGlzIG5vdCBhIHZhbGlkIFtAXSBydWxlLmAsIHRva2VuKTtcblxuICAgIGxldCBibG9jazogQ3NzQmxvY2tBc3Q7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuX3Jlc29sdmVCbG9ja1R5cGUodG9rZW4pO1xuICAgIGxldCBzcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gICAgbGV0IHRva2VuczogQ3NzVG9rZW5bXTtcbiAgICBsZXQgZW5kVG9rZW46IENzc1Rva2VuO1xuICAgIGxldCBlbmQ6IG51bWJlcjtcbiAgICBsZXQgc3RyVmFsdWU6IHN0cmluZztcbiAgICBsZXQgcXVlcnk6IENzc0F0UnVsZVByZWRpY2F0ZUFzdDtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgQmxvY2tUeXBlLkNoYXJzZXQ6XG4gICAgICBjYXNlIEJsb2NrVHlwZS5OYW1lc3BhY2U6XG4gICAgICBjYXNlIEJsb2NrVHlwZS5JbXBvcnQ6XG4gICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuX3BhcnNlVmFsdWUoZGVsaW1pdGVycyk7XG4gICAgICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuQkxPQ0spO1xuICAgICAgICB0aGlzLl9zY2FubmVyLmNvbnN1bWVFbXB0eVN0YXRlbWVudHMoKTtcbiAgICAgICAgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFRva2VuLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgQ3NzSW5saW5lUnVsZUFzdChzcGFuLCB0eXBlLCB2YWx1ZSk7XG5cbiAgICAgIGNhc2UgQmxvY2tUeXBlLlZpZXdwb3J0OlxuICAgICAgY2FzZSBCbG9ja1R5cGUuRm9udEZhY2U6XG4gICAgICAgIGJsb2NrID0gdGhpcy5fcGFyc2VTdHlsZUJsb2NrKGRlbGltaXRlcnMpITtcbiAgICAgICAgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFRva2VuLCBibG9jayk7XG4gICAgICAgIHJldHVybiBuZXcgQ3NzQmxvY2tSdWxlQXN0KHNwYW4sIHR5cGUsIGJsb2NrKTtcblxuICAgICAgY2FzZSBCbG9ja1R5cGUuS2V5ZnJhbWVzOlxuICAgICAgICB0b2tlbnMgPSB0aGlzLl9jb2xsZWN0VW50aWxEZWxpbShkZWxpbWl0ZXJzIHwgUkJSQUNFX0RFTElNX0ZMQUcgfCBMQlJBQ0VfREVMSU1fRkxBRyk7XG4gICAgICAgIC8vIGtleWZyYW1lcyBvbmx5IGhhdmUgb25lIGlkZW50aWZpZXIgbmFtZVxuICAgICAgICBsZXQgbmFtZSA9IHRva2Vuc1swXTtcbiAgICAgICAgYmxvY2sgPSB0aGlzLl9wYXJzZUtleWZyYW1lQmxvY2soZGVsaW1pdGVycyk7XG4gICAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgYmxvY2spO1xuICAgICAgICByZXR1cm4gbmV3IENzc0tleWZyYW1lUnVsZUFzdChzcGFuLCBuYW1lLCBibG9jayk7XG5cbiAgICAgIGNhc2UgQmxvY2tUeXBlLk1lZGlhUXVlcnk6XG4gICAgICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuTUVESUFfUVVFUlkpO1xuICAgICAgICB0b2tlbnMgPSB0aGlzLl9jb2xsZWN0VW50aWxEZWxpbShkZWxpbWl0ZXJzIHwgUkJSQUNFX0RFTElNX0ZMQUcgfCBMQlJBQ0VfREVMSU1fRkxBRyk7XG4gICAgICAgIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gd2UgZG8gbm90IHRyYWNrIHRoZSB3aGl0ZXNwYWNlIGFmdGVyIHRoZSBtZWRpYVF1ZXJ5IHByZWRpY2F0ZSBlbmRzXG4gICAgICAgIC8vIHNvIHdlIGhhdmUgdG8gY2FsY3VsYXRlIHRoZSBlbmQgc3RyaW5nIHZhbHVlIG9uIG91ciBvd25cbiAgICAgICAgZW5kID0gZW5kVG9rZW4uaW5kZXggKyBlbmRUb2tlbi5zdHJWYWx1ZS5sZW5ndGggLSAxO1xuICAgICAgICBzdHJWYWx1ZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCBlbmQpO1xuICAgICAgICBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcbiAgICAgICAgcXVlcnkgPSBuZXcgQ3NzQXRSdWxlUHJlZGljYXRlQXN0KHNwYW4sIHN0clZhbHVlLCB0b2tlbnMpO1xuICAgICAgICBibG9jayA9IHRoaXMuX3BhcnNlQmxvY2soZGVsaW1pdGVycyk7XG4gICAgICAgIHN0clZhbHVlID0gdGhpcy5fZXh0cmFjdFNvdXJjZUNvbnRlbnQoc3RhcnQsIHRoaXMuX2dldFNjYW5uZXJJbmRleCgpIC0gMSk7XG4gICAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgYmxvY2spO1xuICAgICAgICByZXR1cm4gbmV3IENzc01lZGlhUXVlcnlSdWxlQXN0KHNwYW4sIHN0clZhbHVlLCBxdWVyeSwgYmxvY2spO1xuXG4gICAgICBjYXNlIEJsb2NrVHlwZS5Eb2N1bWVudDpcbiAgICAgIGNhc2UgQmxvY2tUeXBlLlN1cHBvcnRzOlxuICAgICAgY2FzZSBCbG9ja1R5cGUuUGFnZTpcbiAgICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5BVF9SVUxFX1FVRVJZKTtcbiAgICAgICAgdG9rZW5zID0gdGhpcy5fY29sbGVjdFVudGlsRGVsaW0oZGVsaW1pdGVycyB8IFJCUkFDRV9ERUxJTV9GTEFHIHwgTEJSQUNFX0RFTElNX0ZMQUcpO1xuICAgICAgICBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIHdlIGRvIG5vdCB0cmFjayB0aGUgd2hpdGVzcGFjZSBhZnRlciB0aGlzIGJsb2NrIHJ1bGUgcHJlZGljYXRlIGVuZHNcbiAgICAgICAgLy8gc28gd2UgaGF2ZSB0byBjYWxjdWxhdGUgdGhlIGVuZCBzdHJpbmcgdmFsdWUgb24gb3VyIG93blxuICAgICAgICBlbmQgPSBlbmRUb2tlbi5pbmRleCArIGVuZFRva2VuLnN0clZhbHVlLmxlbmd0aCAtIDE7XG4gICAgICAgIHN0clZhbHVlID0gdGhpcy5fZXh0cmFjdFNvdXJjZUNvbnRlbnQoc3RhcnQsIGVuZCk7XG4gICAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXSk7XG4gICAgICAgIHF1ZXJ5ID0gbmV3IENzc0F0UnVsZVByZWRpY2F0ZUFzdChzcGFuLCBzdHJWYWx1ZSwgdG9rZW5zKTtcbiAgICAgICAgYmxvY2sgPSB0aGlzLl9wYXJzZUJsb2NrKGRlbGltaXRlcnMpO1xuICAgICAgICBzdHJWYWx1ZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCBibG9jay5lbmQub2Zmc2V0ISk7XG4gICAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgYmxvY2spO1xuICAgICAgICByZXR1cm4gbmV3IENzc0Jsb2NrRGVmaW5pdGlvblJ1bGVBc3Qoc3Bhbiwgc3RyVmFsdWUsIHR5cGUsIHF1ZXJ5LCBibG9jayk7XG5cbiAgICAgIC8vIGlmIGEgY3VzdG9tIEBydWxlIHsgLi4uIH0gaXMgdXNlZCBpdCBzaG91bGQgc3RpbGwgdG9rZW5pemUgdGhlIGluc2lkZXNcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxldCBsaXN0T2ZUb2tlbnM6IENzc1Rva2VuW10gPSBbXTtcbiAgICAgICAgbGV0IHRva2VuTmFtZSA9IHRva2VuLnN0clZhbHVlO1xuICAgICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLkFMTCk7XG4gICAgICAgIHRoaXMuX2Vycm9yKFxuICAgICAgICAgICAgZ2VuZXJhdGVFcnJvck1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0U291cmNlQ29udGVudCgpLFxuICAgICAgICAgICAgICAgIGBUaGUgQ1NTIFwiYXRcIiBydWxlIFwiJHt0b2tlbk5hbWV9XCIgaXMgbm90IGFsbG93ZWQgdG8gdXNlZCBoZXJlYCwgdG9rZW4uc3RyVmFsdWUsXG4gICAgICAgICAgICAgICAgdG9rZW4uaW5kZXgsIHRva2VuLmxpbmUsIHRva2VuLmNvbHVtbiksXG4gICAgICAgICAgICB0b2tlbik7XG5cbiAgICAgICAgdGhpcy5fY29sbGVjdFVudGlsRGVsaW0oZGVsaW1pdGVycyB8IExCUkFDRV9ERUxJTV9GTEFHIHwgU0VNSUNPTE9OX0RFTElNX0ZMQUcpXG4gICAgICAgICAgICAuZm9yRWFjaCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgbGlzdE9mVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLl9zY2FubmVyLnBlZWsgPT0gY2hhcnMuJExCUkFDRSkge1xuICAgICAgICAgIGxpc3RPZlRva2Vucy5wdXNoKHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJ3snKSk7XG4gICAgICAgICAgdGhpcy5fY29sbGVjdFVudGlsRGVsaW0oZGVsaW1pdGVycyB8IFJCUkFDRV9ERUxJTV9GTEFHIHwgTEJSQUNFX0RFTElNX0ZMQUcpXG4gICAgICAgICAgICAgIC5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3RPZlRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdE9mVG9rZW5zLnB1c2godGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnfScpKTtcbiAgICAgICAgfVxuICAgICAgICBlbmRUb2tlbiA9IGxpc3RPZlRva2Vuc1tsaXN0T2ZUb2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuICAgICAgICByZXR1cm4gbmV3IENzc1Vua25vd25SdWxlQXN0KHNwYW4sIHRva2VuTmFtZSwgbGlzdE9mVG9rZW5zKTtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZVNlbGVjdG9yUnVsZShkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NSdWxlQXN0IHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldFNjYW5uZXJJbmRleCgpO1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHRoaXMuX3BhcnNlU2VsZWN0b3JzKGRlbGltaXRlcnMpO1xuICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fcGFyc2VTdHlsZUJsb2NrKGRlbGltaXRlcnMpO1xuICAgIGxldCBydWxlQXN0OiBDc3NSdWxlQXN0O1xuICAgIGxldCBzcGFuOiBQYXJzZVNvdXJjZVNwYW47XG4gICAgY29uc3Qgc3RhcnRTZWxlY3RvciA9IHNlbGVjdG9yc1swXTtcbiAgICBpZiAoYmxvY2sgIT0gbnVsbCkge1xuICAgICAgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFNlbGVjdG9yLCBibG9jayk7XG4gICAgICBydWxlQXN0ID0gbmV3IENzc1NlbGVjdG9yUnVsZUFzdChzcGFuLCBzZWxlY3RvcnMsIGJsb2NrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCB0aGlzLl9nZXRTY2FubmVySW5kZXgoKSAtIDEpO1xuICAgICAgY29uc3QgaW5uZXJUb2tlbnM6IENzc1Rva2VuW10gPSBbXTtcbiAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcjogQ3NzU2VsZWN0b3JBc3QpID0+IHtcbiAgICAgICAgc2VsZWN0b3Iuc2VsZWN0b3JQYXJ0cy5mb3JFYWNoKChwYXJ0OiBDc3NTaW1wbGVTZWxlY3RvckFzdCkgPT4ge1xuICAgICAgICAgIHBhcnQudG9rZW5zLmZvckVhY2goKHRva2VuOiBDc3NUb2tlbikgPT4ge1xuICAgICAgICAgICAgaW5uZXJUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBlbmRUb2tlbiA9IGlubmVyVG9rZW5zW2lubmVyVG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFNlbGVjdG9yLCBlbmRUb2tlbik7XG4gICAgICBydWxlQXN0ID0gbmV3IENzc1Vua25vd25Ub2tlbkxpc3RBc3Qoc3BhbiwgbmFtZSwgaW5uZXJUb2tlbnMpO1xuICAgIH1cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLkJMT0NLKTtcbiAgICB0aGlzLl9zY2FubmVyLmNvbnN1bWVFbXB0eVN0YXRlbWVudHMoKTtcbiAgICByZXR1cm4gcnVsZUFzdDtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlU2VsZWN0b3JzKGRlbGltaXRlcnM6IG51bWJlcik6IENzc1NlbGVjdG9yQXN0W10ge1xuICAgIGRlbGltaXRlcnMgfD0gTEJSQUNFX0RFTElNX0ZMQUcgfCBTRU1JQ09MT05fREVMSU1fRkxBRztcblxuICAgIGNvbnN0IHNlbGVjdG9yczogQ3NzU2VsZWN0b3JBc3RbXSA9IFtdO1xuICAgIGxldCBpc1BhcnNpbmdTZWxlY3RvcnMgPSB0cnVlO1xuICAgIHdoaWxlIChpc1BhcnNpbmdTZWxlY3RvcnMpIHtcbiAgICAgIHNlbGVjdG9ycy5wdXNoKHRoaXMuX3BhcnNlU2VsZWN0b3IoZGVsaW1pdGVycykpO1xuXG4gICAgICBpc1BhcnNpbmdTZWxlY3RvcnMgPSAhY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBkZWxpbWl0ZXJzKTtcblxuICAgICAgaWYgKGlzUGFyc2luZ1NlbGVjdG9ycykge1xuICAgICAgICB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICcsJyk7XG4gICAgICAgIGlzUGFyc2luZ1NlbGVjdG9ycyA9ICFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpO1xuICAgICAgICBpZiAoaXNQYXJzaW5nU2VsZWN0b3JzKSB7XG4gICAgICAgICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3NjYW4oKTogQ3NzVG9rZW4ge1xuICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX3NjYW5uZXIuc2NhbigpITtcbiAgICBjb25zdCB0b2tlbiA9IG91dHB1dC50b2tlbjtcbiAgICBjb25zdCBlcnJvciA9IG91dHB1dC5lcnJvcjtcbiAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fZXJyb3IoZ2V0UmF3TWVzc2FnZShlcnJvciksIHRva2VuKTtcbiAgICB9XG4gICAgdGhpcy5fbGFzdFRva2VuID0gdG9rZW47XG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfZ2V0U2Nhbm5lckluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NjYW5uZXIuaW5kZXg7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9jb25zdW1lKHR5cGU6IENzc1Rva2VuVHlwZSwgdmFsdWU6IHN0cmluZ3xudWxsID0gbnVsbCk6IENzc1Rva2VuIHtcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9zY2FubmVyLmNvbnN1bWUodHlwZSwgdmFsdWUpO1xuICAgIGNvbnN0IHRva2VuID0gb3V0cHV0LnRva2VuO1xuICAgIGNvbnN0IGVycm9yID0gb3V0cHV0LmVycm9yO1xuICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9lcnJvcihnZXRSYXdNZXNzYWdlKGVycm9yKSwgdG9rZW4pO1xuICAgIH1cbiAgICB0aGlzLl9sYXN0VG9rZW4gPSB0b2tlbjtcbiAgICByZXR1cm4gdG9rZW47XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZUtleWZyYW1lQmxvY2soZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzQmxvY2tBc3Qge1xuICAgIGRlbGltaXRlcnMgfD0gUkJSQUNFX0RFTElNX0ZMQUc7XG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5LRVlGUkFNRV9CTE9DSyk7XG5cbiAgICBjb25zdCBzdGFydFRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAneycpO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnM6IENzc0tleWZyYW1lRGVmaW5pdGlvbkFzdFtdID0gW107XG4gICAgd2hpbGUgKCFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpKSB7XG4gICAgICBkZWZpbml0aW9ucy5wdXNoKHRoaXMuX3BhcnNlS2V5ZnJhbWVEZWZpbml0aW9uKGRlbGltaXRlcnMpKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbmRUb2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJ30nKTtcblxuICAgIGNvbnN0IHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuICAgIHJldHVybiBuZXcgQ3NzQmxvY2tBc3Qoc3BhbiwgZGVmaW5pdGlvbnMpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VLZXlmcmFtZURlZmluaXRpb24oZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0IHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldFNjYW5uZXJJbmRleCgpO1xuICAgIGNvbnN0IHN0ZXBUb2tlbnM6IENzc1Rva2VuW10gPSBbXTtcbiAgICBkZWxpbWl0ZXJzIHw9IExCUkFDRV9ERUxJTV9GTEFHO1xuICAgIHdoaWxlICghY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBkZWxpbWl0ZXJzKSkge1xuICAgICAgc3RlcFRva2Vucy5wdXNoKHRoaXMuX3BhcnNlS2V5ZnJhbWVMYWJlbChkZWxpbWl0ZXJzIHwgQ09NTUFfREVMSU1fRkxBRykpO1xuICAgICAgaWYgKHRoaXMuX3NjYW5uZXIucGVlayAhPSBjaGFycy4kTEJSQUNFKSB7XG4gICAgICAgIHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJywnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3R5bGVzQmxvY2sgPSB0aGlzLl9wYXJzZVN0eWxlQmxvY2soZGVsaW1pdGVycyB8IFJCUkFDRV9ERUxJTV9GTEFHKTtcbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0ZXBUb2tlbnNbMF0sIHN0eWxlc0Jsb2NrKTtcbiAgICBjb25zdCBhc3QgPSBuZXcgQ3NzS2V5ZnJhbWVEZWZpbml0aW9uQXN0KHNwYW4sIHN0ZXBUb2tlbnMsIHN0eWxlc0Jsb2NrISk7XG5cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLkJMT0NLKTtcbiAgICByZXR1cm4gYXN0O1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VLZXlmcmFtZUxhYmVsKGRlbGltaXRlcnM6IG51bWJlcik6IENzc1Rva2VuIHtcbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLktFWUZSQU1FX0JMT0NLKTtcbiAgICByZXR1cm4gbWVyZ2VUb2tlbnModGhpcy5fY29sbGVjdFVudGlsRGVsaW0oZGVsaW1pdGVycykpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VQc2V1ZG9TZWxlY3RvcihkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NQc2V1ZG9TZWxlY3RvckFzdCB7XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLl9nZXRTY2FubmVySW5kZXgoKTtcblxuICAgIGRlbGltaXRlcnMgJj0gfkNPTU1BX0RFTElNX0ZMQUc7XG5cbiAgICAvLyB3ZSBrZWVwIHRoZSBvcmlnaW5hbCB2YWx1ZSBzaW5jZSB3ZSBtYXkgdXNlIGl0IHRvIHJlY3Vyc2Ugd2hlbiA6bm90LCA6aG9zdCBhcmUgdXNlZFxuICAgIGNvbnN0IHN0YXJ0aW5nRGVsaW1zID0gZGVsaW1pdGVycztcblxuICAgIGNvbnN0IHN0YXJ0VG9rZW4gPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICc6Jyk7XG4gICAgY29uc3QgdG9rZW5zID0gW3N0YXJ0VG9rZW5dO1xuXG4gICAgaWYgKHRoaXMuX3NjYW5uZXIucGVlayA9PSBjaGFycy4kQ09MT04pIHsgIC8vIDo6c29tZXRoaW5nXG4gICAgICB0b2tlbnMucHVzaCh0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICc6JykpO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVyU2VsZWN0b3JzOiBDc3NTZWxlY3RvckFzdFtdID0gW107XG5cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlBTRVVET19TRUxFQ1RPUik7XG5cbiAgICAvLyBob3N0LCBob3N0LWNvbnRleHQsIGxhbmcsIG5vdCwgbnRoLWNoaWxkIGFyZSBhbGwgaWRlbnRpZmllcnNcbiAgICBjb25zdCBwc2V1ZG9TZWxlY3RvclRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuSWRlbnRpZmllcik7XG4gICAgY29uc3QgcHNldWRvU2VsZWN0b3JOYW1lID0gcHNldWRvU2VsZWN0b3JUb2tlbi5zdHJWYWx1ZTtcbiAgICB0b2tlbnMucHVzaChwc2V1ZG9TZWxlY3RvclRva2VuKTtcblxuICAgIC8vIGhvc3QoKSwgbGFuZygpLCBudGgtY2hpbGQoKSwgZXRjLi4uXG4gICAgaWYgKHRoaXMuX3NjYW5uZXIucGVlayA9PSBjaGFycy4kTFBBUkVOKSB7XG4gICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlBTRVVET19TRUxFQ1RPUl9XSVRIX0FSR1VNRU5UUyk7XG5cbiAgICAgIGNvbnN0IG9wZW5QYXJlblRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnKCcpO1xuICAgICAgdG9rZW5zLnB1c2gob3BlblBhcmVuVG9rZW4pO1xuXG4gICAgICAvLyA6aG9zdChpbm5lclNlbGVjdG9yKHMpKSwgOm5vdChzZWxlY3RvciksIGV0Yy4uLlxuICAgICAgaWYgKF9wc2V1ZG9TZWxlY3RvclN1cHBvcnRzSW5uZXJTZWxlY3RvcnMocHNldWRvU2VsZWN0b3JOYW1lKSkge1xuICAgICAgICBsZXQgaW5uZXJEZWxpbXMgPSBzdGFydGluZ0RlbGltcyB8IExQQVJFTl9ERUxJTV9GTEFHIHwgUlBBUkVOX0RFTElNX0ZMQUc7XG4gICAgICAgIGlmIChwc2V1ZG9TZWxlY3Rvck5hbWUgPT0gJ25vdCcpIHtcbiAgICAgICAgICAvLyB0aGUgaW5uZXIgc2VsZWN0b3IgaW5zaWRlIG9mIDpub3QoLi4uKSBjYW4gb25seSBiZSBvbmVcbiAgICAgICAgICAvLyBDU1Mgc2VsZWN0b3IgKG5vIGNvbW1hcyBhbGxvd2VkKSAuLi4gVGhpcyBpcyBhY2NvcmRpbmdcbiAgICAgICAgICAvLyB0byB0aGUgQ1NTIHNwZWNpZmljYXRpb25cbiAgICAgICAgICBpbm5lckRlbGltcyB8PSBDT01NQV9ERUxJTV9GTEFHO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gOmhvc3QoYSwgYiwgYykge1xuICAgICAgICB0aGlzLl9wYXJzZVNlbGVjdG9ycyhpbm5lckRlbGltcykuZm9yRWFjaCgoc2VsZWN0b3IsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaW5uZXJTZWxlY3RvcnMucHVzaChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGhpcyBicmFuY2ggaXMgZm9yIHRoaW5ncyBsaWtlIFwiZW4tdXMsIDJrICsgMSwgZXRjLi4uXCJcbiAgICAgICAgLy8gd2hpY2ggYWxsIGVuZCB1cCBpbiBwc2V1ZG9TZWxlY3RvcnMgbGlrZSA6bGFuZywgOm50aC1jaGlsZCwgZXRjLi5cbiAgICAgICAgY29uc3QgaW5uZXJWYWx1ZURlbGltcyA9IGRlbGltaXRlcnMgfCBMQlJBQ0VfREVMSU1fRkxBRyB8IENPTE9OX0RFTElNX0ZMQUcgfFxuICAgICAgICAgICAgUlBBUkVOX0RFTElNX0ZMQUcgfCBMUEFSRU5fREVMSU1fRkxBRztcbiAgICAgICAgd2hpbGUgKCFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGlubmVyVmFsdWVEZWxpbXMpKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLl9zY2FuKCk7XG4gICAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsb3NlUGFyZW5Ub2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJyknKTtcbiAgICAgIHRva2Vucy5wdXNoKGNsb3NlUGFyZW5Ub2tlbik7XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gdGhpcy5fZ2V0U2Nhbm5lckluZGV4KCkgLSAxO1xuICAgIGNvbnN0IHN0clZhbHVlID0gdGhpcy5fZXh0cmFjdFNvdXJjZUNvbnRlbnQoc3RhcnQsIGVuZCk7XG5cbiAgICBjb25zdCBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgY29uc3Qgc3BhbiA9IHRoaXMuX2dlbmVyYXRlU291cmNlU3BhbihzdGFydFRva2VuLCBlbmRUb2tlbik7XG4gICAgcmV0dXJuIG5ldyBDc3NQc2V1ZG9TZWxlY3RvckFzdChzcGFuLCBzdHJWYWx1ZSwgcHNldWRvU2VsZWN0b3JOYW1lLCB0b2tlbnMsIGlubmVyU2VsZWN0b3JzKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlU2ltcGxlU2VsZWN0b3IoZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzU2ltcGxlU2VsZWN0b3JBc3Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5fZ2V0U2Nhbm5lckluZGV4KCk7XG5cbiAgICBkZWxpbWl0ZXJzIHw9IENPTU1BX0RFTElNX0ZMQUc7XG5cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlNFTEVDVE9SKTtcbiAgICBjb25zdCBzZWxlY3RvckNzc1Rva2VuczogQ3NzVG9rZW5bXSA9IFtdO1xuICAgIGNvbnN0IHBzZXVkb1NlbGVjdG9yczogQ3NzUHNldWRvU2VsZWN0b3JBc3RbXSA9IFtdO1xuXG4gICAgbGV0IHByZXZpb3VzVG9rZW46IENzc1Rva2VuID0gdW5kZWZpbmVkITtcblxuICAgIGNvbnN0IHNlbGVjdG9yUGFydERlbGltaXRlcnMgPSBkZWxpbWl0ZXJzIHwgU1BBQ0VfREVMSU1fRkxBRztcbiAgICBsZXQgbG9vcE92ZXJTZWxlY3RvciA9ICFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIHNlbGVjdG9yUGFydERlbGltaXRlcnMpO1xuXG4gICAgbGV0IGhhc0F0dHJpYnV0ZUVycm9yID0gZmFsc2U7XG4gICAgd2hpbGUgKGxvb3BPdmVyU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHBlZWsgPSB0aGlzLl9zY2FubmVyLnBlZWs7XG5cbiAgICAgIHN3aXRjaCAocGVlaykge1xuICAgICAgICBjYXNlIGNoYXJzLiRDT0xPTjpcbiAgICAgICAgICBsZXQgaW5uZXJQc2V1ZG8gPSB0aGlzLl9wYXJzZVBzZXVkb1NlbGVjdG9yKGRlbGltaXRlcnMpO1xuICAgICAgICAgIHBzZXVkb1NlbGVjdG9ycy5wdXNoKGlubmVyUHNldWRvKTtcbiAgICAgICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlNFTEVDVE9SKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGNoYXJzLiRMQlJBQ0tFVDpcbiAgICAgICAgICAvLyB3ZSBzZXQgdGhlIG1vZGUgYWZ0ZXIgdGhlIHNjYW4gYmVjYXVzZSBhdHRyaWJ1dGUgbW9kZSBkb2VzIG5vdFxuICAgICAgICAgIC8vIGFsbG93IGF0dHJpYnV0ZSBbXSB2YWx1ZXMuIEFuZCB0aGlzIGFsc28gd2lsbCBjYXRjaCBhbnkgZXJyb3JzXG4gICAgICAgICAgLy8gaWYgYW4gZXh0cmEgXCJbXCIgaXMgdXNlZCBpbnNpZGUuXG4gICAgICAgICAgc2VsZWN0b3JDc3NUb2tlbnMucHVzaCh0aGlzLl9zY2FuKCkpO1xuICAgICAgICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuQVRUUklCVVRFX1NFTEVDVE9SKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGNoYXJzLiRSQlJBQ0tFVDpcbiAgICAgICAgICBpZiAodGhpcy5fc2Nhbm5lci5nZXRNb2RlKCkgIT0gQ3NzTGV4ZXJNb2RlLkFUVFJJQlVURV9TRUxFQ1RPUikge1xuICAgICAgICAgICAgaGFzQXR0cmlidXRlRXJyb3IgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB3ZSBzZXQgdGhlIG1vZGUgZWFybHkgYmVjYXVzZSBhdHRyaWJ1dGUgbW9kZSBkb2VzIG5vdFxuICAgICAgICAgIC8vIGFsbG93IGF0dHJpYnV0ZSBbXSB2YWx1ZXNcbiAgICAgICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlNFTEVDVE9SKTtcbiAgICAgICAgICBzZWxlY3RvckNzc1Rva2Vucy5wdXNoKHRoaXMuX3NjYW4oKSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoaXNTZWxlY3Rvck9wZXJhdG9yQ2hhcmFjdGVyKHBlZWspKSB7XG4gICAgICAgICAgICBsb29wT3ZlclNlbGVjdG9yID0gZmFsc2U7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLl9zY2FuKCk7XG4gICAgICAgICAgcHJldmlvdXNUb2tlbiA9IHRva2VuO1xuICAgICAgICAgIHNlbGVjdG9yQ3NzVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsb29wT3ZlclNlbGVjdG9yID0gIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgc2VsZWN0b3JQYXJ0RGVsaW1pdGVycyk7XG4gICAgfVxuXG4gICAgaGFzQXR0cmlidXRlRXJyb3IgPVxuICAgICAgICBoYXNBdHRyaWJ1dGVFcnJvciB8fCB0aGlzLl9zY2FubmVyLmdldE1vZGUoKSA9PSBDc3NMZXhlck1vZGUuQVRUUklCVVRFX1NFTEVDVE9SO1xuICAgIGlmIChoYXNBdHRyaWJ1dGVFcnJvcikge1xuICAgICAgdGhpcy5fZXJyb3IoXG4gICAgICAgICAgYFVuYmFsYW5jZWQgQ1NTIGF0dHJpYnV0ZSBzZWxlY3RvciBhdCBjb2x1bW4gJHtwcmV2aW91c1Rva2VuLmxpbmV9OiR7XG4gICAgICAgICAgICAgIHByZXZpb3VzVG9rZW4uY29sdW1ufWAsXG4gICAgICAgICAgcHJldmlvdXNUb2tlbik7XG4gICAgfVxuXG4gICAgbGV0IGVuZCA9IHRoaXMuX2dldFNjYW5uZXJJbmRleCgpIC0gMTtcblxuICAgIC8vIHRoaXMgaGFwcGVucyBpZiB0aGUgc2VsZWN0b3IgaXMgbm90IGRpcmVjdGx5IGZvbGxvd2VkIGJ5XG4gICAgLy8gYSBjb21tYSBvciBjdXJseSBicmFjZSB3aXRob3V0IGEgc3BhY2UgaW4gYmV0d2VlblxuICAgIGxldCBvcGVyYXRvcjogQ3NzVG9rZW58bnVsbCA9IG51bGw7XG4gICAgbGV0IG9wZXJhdG9yU2NhbkNvdW50ID0gMDtcbiAgICBsZXQgbGFzdE9wZXJhdG9yVG9rZW46IENzc1Rva2VufG51bGwgPSBudWxsO1xuICAgIGlmICghY2hhcmFjdGVyQ29udGFpbnNEZWxpbWl0ZXIodGhpcy5fc2Nhbm5lci5wZWVrLCBkZWxpbWl0ZXJzKSkge1xuICAgICAgd2hpbGUgKG9wZXJhdG9yID09IG51bGwgJiYgIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgZGVsaW1pdGVycykgJiZcbiAgICAgICAgICAgICBpc1NlbGVjdG9yT3BlcmF0b3JDaGFyYWN0ZXIodGhpcy5fc2Nhbm5lci5wZWVrKSkge1xuICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLl9zY2FuKCk7XG4gICAgICAgIGNvbnN0IHRva2VuT3BlcmF0b3IgPSB0b2tlbi5zdHJWYWx1ZTtcbiAgICAgICAgb3BlcmF0b3JTY2FuQ291bnQrKztcbiAgICAgICAgbGFzdE9wZXJhdG9yVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgaWYgKHRva2VuT3BlcmF0b3IgIT0gU1BBQ0VfT1BFUkFUT1IpIHtcbiAgICAgICAgICBzd2l0Y2ggKHRva2VuT3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgU0xBU0hfQ0hBUkFDVEVSOlxuICAgICAgICAgICAgICAvLyAvZGVlcC8gb3BlcmF0b3JcbiAgICAgICAgICAgICAgbGV0IGRlZXBUb2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIpO1xuICAgICAgICAgICAgICBsZXQgZGVlcFNsYXNoID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyKTtcbiAgICAgICAgICAgICAgbGV0IGluZGV4ID0gbGFzdE9wZXJhdG9yVG9rZW4uaW5kZXg7XG4gICAgICAgICAgICAgIGxldCBsaW5lID0gbGFzdE9wZXJhdG9yVG9rZW4ubGluZTtcbiAgICAgICAgICAgICAgbGV0IGNvbHVtbiA9IGxhc3RPcGVyYXRvclRva2VuLmNvbHVtbjtcbiAgICAgICAgICAgICAgaWYgKGRlZXBUb2tlbiAhPSBudWxsICYmIGRlZXBUb2tlbi5zdHJWYWx1ZS50b0xvd2VyQ2FzZSgpID09ICdkZWVwJyAmJlxuICAgICAgICAgICAgICAgICAgZGVlcFNsYXNoLnN0clZhbHVlID09IFNMQVNIX0NIQVJBQ1RFUikge1xuICAgICAgICAgICAgICAgIHRva2VuID0gbmV3IENzc1Rva2VuKFxuICAgICAgICAgICAgICAgICAgICBsYXN0T3BlcmF0b3JUb2tlbi5pbmRleCwgbGFzdE9wZXJhdG9yVG9rZW4uY29sdW1uLCBsYXN0T3BlcmF0b3JUb2tlbi5saW5lLFxuICAgICAgICAgICAgICAgICAgICBDc3NUb2tlblR5cGUuSWRlbnRpZmllciwgREVFUF9PUEVSQVRPUl9TVFIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBTTEFTSF9DSEFSQUNURVIgKyBkZWVwVG9rZW4uc3RyVmFsdWUgKyBkZWVwU2xhc2guc3RyVmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2V0U291cmNlQ29udGVudCgpLCBgJHt0ZXh0fSBpcyBhbiBpbnZhbGlkIENTUyBvcGVyYXRvcmAsIHRleHQsIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZSwgY29sdW1uKSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE9wZXJhdG9yVG9rZW4pO1xuICAgICAgICAgICAgICAgIHRva2VuID0gbmV3IENzc1Rva2VuKGluZGV4LCBjb2x1bW4sIGxpbmUsIENzc1Rva2VuVHlwZS5JbnZhbGlkLCB0ZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBHVF9DSEFSQUNURVI6XG4gICAgICAgICAgICAgIC8vID4+PiBvcGVyYXRvclxuICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nhbm5lci5wZWVrID09IGNoYXJzLiRHVCAmJiB0aGlzLl9zY2FubmVyLnBlZWtQZWVrID09IGNoYXJzLiRHVCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgR1RfQ0hBUkFDVEVSKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsIEdUX0NIQVJBQ1RFUik7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSBuZXcgQ3NzVG9rZW4oXG4gICAgICAgICAgICAgICAgICAgIGxhc3RPcGVyYXRvclRva2VuLmluZGV4LCBsYXN0T3BlcmF0b3JUb2tlbi5jb2x1bW4sIGxhc3RPcGVyYXRvclRva2VuLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgIENzc1Rva2VuVHlwZS5JZGVudGlmaWVyLCBUUklQTEVfR1RfT1BFUkFUT1JfU1RSKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBvcGVyYXRvciA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNvIGxvbmcgYXMgdGhlcmUgaXMgYW4gb3BlcmF0b3IgdGhlbiB3ZSBjYW4gaGF2ZSBhblxuICAgICAgLy8gZW5kaW5nIHZhbHVlIHRoYXQgaXMgYmV5b25kIHRoZSBzZWxlY3RvciB2YWx1ZSAuLi5cbiAgICAgIC8vIG90aGVyd2lzZSBpdCdzIGp1c3QgYSBidW5jaCBvZiB0cmFpbGluZyB3aGl0ZXNwYWNlXG4gICAgICBpZiAob3BlcmF0b3IgIT0gbnVsbCkge1xuICAgICAgICBlbmQgPSBvcGVyYXRvci5pbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zY2FubmVyLmNvbnN1bWVXaGl0ZXNwYWNlKCk7XG5cbiAgICBjb25zdCBzdHJWYWx1ZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCBlbmQpO1xuXG4gICAgLy8gaWYgd2UgZG8gY29tZSBhY3Jvc3Mgb25lIG9yIG1vcmUgc3BhY2VzIGluc2lkZSBvZlxuICAgIC8vIHRoZSBvcGVyYXRvcnMgbG9vcCB0aGVuIGFuIGVtcHR5IHNwYWNlIGlzIHN0aWxsIGFcbiAgICAvLyB2YWxpZCBvcGVyYXRvciB0byB1c2UgaWYgc29tZXRoaW5nIGVsc2Ugd2FzIG5vdCBmb3VuZFxuICAgIGlmIChvcGVyYXRvciA9PSBudWxsICYmIG9wZXJhdG9yU2NhbkNvdW50ID4gMCAmJiB0aGlzLl9zY2FubmVyLnBlZWsgIT0gY2hhcnMuJExCUkFDRSkge1xuICAgICAgb3BlcmF0b3IgPSBsYXN0T3BlcmF0b3JUb2tlbjtcbiAgICB9XG5cbiAgICAvLyBwbGVhc2Ugbm90ZSB0aGF0IGBlbmRUb2tlbmAgaXMgcmVhc3NpZ25lZCBtdWx0aXBsZSB0aW1lcyBiZWxvd1xuICAgIC8vIHNvIHBsZWFzZSBkbyBub3Qgb3B0aW1pemUgdGhlIGlmIHN0YXRlbWVudHMgaW50byBpZi9lbHNlaWZcbiAgICBsZXQgc3RhcnRUb2tlbk9yQXN0OiBDc3NUb2tlbnxDc3NBc3R8bnVsbCA9IG51bGw7XG4gICAgbGV0IGVuZFRva2VuT3JBc3Q6IENzc1Rva2VufENzc0FzdHxudWxsID0gbnVsbDtcbiAgICBpZiAoc2VsZWN0b3JDc3NUb2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgc3RhcnRUb2tlbk9yQXN0ID0gc3RhcnRUb2tlbk9yQXN0IHx8IHNlbGVjdG9yQ3NzVG9rZW5zWzBdO1xuICAgICAgZW5kVG9rZW5PckFzdCA9IHNlbGVjdG9yQ3NzVG9rZW5zW3NlbGVjdG9yQ3NzVG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgIH1cbiAgICBpZiAocHNldWRvU2VsZWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgIHN0YXJ0VG9rZW5PckFzdCA9IHN0YXJ0VG9rZW5PckFzdCB8fCBwc2V1ZG9TZWxlY3RvcnNbMF07XG4gICAgICBlbmRUb2tlbk9yQXN0ID0gcHNldWRvU2VsZWN0b3JzW3BzZXVkb1NlbGVjdG9ycy5sZW5ndGggLSAxXTtcbiAgICB9XG4gICAgaWYgKG9wZXJhdG9yICE9IG51bGwpIHtcbiAgICAgIHN0YXJ0VG9rZW5PckFzdCA9IHN0YXJ0VG9rZW5PckFzdCB8fCBvcGVyYXRvcjtcbiAgICAgIGVuZFRva2VuT3JBc3QgPSBvcGVyYXRvcjtcbiAgICB9XG5cbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW5PckFzdCEsIGVuZFRva2VuT3JBc3QpO1xuICAgIHJldHVybiBuZXcgQ3NzU2ltcGxlU2VsZWN0b3JBc3Qoc3Bhbiwgc2VsZWN0b3JDc3NUb2tlbnMsIHN0clZhbHVlLCBwc2V1ZG9TZWxlY3RvcnMsIG9wZXJhdG9yISk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9wYXJzZVNlbGVjdG9yKGRlbGltaXRlcnM6IG51bWJlcik6IENzc1NlbGVjdG9yQXN0IHtcbiAgICBkZWxpbWl0ZXJzIHw9IENPTU1BX0RFTElNX0ZMQUc7XG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TRUxFQ1RPUik7XG5cbiAgICBjb25zdCBzaW1wbGVTZWxlY3RvcnM6IENzc1NpbXBsZVNlbGVjdG9yQXN0W10gPSBbXTtcbiAgICB3aGlsZSAoIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgZGVsaW1pdGVycykpIHtcbiAgICAgIHNpbXBsZVNlbGVjdG9ycy5wdXNoKHRoaXMuX3BhcnNlU2ltcGxlU2VsZWN0b3IoZGVsaW1pdGVycykpO1xuICAgICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lV2hpdGVzcGFjZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0U2VsZWN0b3IgPSBzaW1wbGVTZWxlY3RvcnNbMF07XG4gICAgY29uc3QgbGFzdFNlbGVjdG9yID0gc2ltcGxlU2VsZWN0b3JzW3NpbXBsZVNlbGVjdG9ycy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKGZpcnN0U2VsZWN0b3IsIGxhc3RTZWxlY3Rvcik7XG4gICAgcmV0dXJuIG5ldyBDc3NTZWxlY3RvckFzdChzcGFuLCBzaW1wbGVTZWxlY3RvcnMpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VWYWx1ZShkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NTdHlsZVZhbHVlQXN0IHtcbiAgICBkZWxpbWl0ZXJzIHw9IFJCUkFDRV9ERUxJTV9GTEFHIHwgU0VNSUNPTE9OX0RFTElNX0ZMQUcgfCBORVdMSU5FX0RFTElNX0ZMQUc7XG5cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlNUWUxFX1ZBTFVFKTtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuX2dldFNjYW5uZXJJbmRleCgpO1xuXG4gICAgY29uc3QgdG9rZW5zOiBDc3NUb2tlbltdID0gW107XG4gICAgbGV0IHdzU3RyID0gJyc7XG4gICAgbGV0IHByZXZpb3VzOiBDc3NUb2tlbiA9IHVuZGVmaW5lZCE7XG4gICAgd2hpbGUgKCFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpKSB7XG4gICAgICBsZXQgdG9rZW46IENzc1Rva2VuO1xuICAgICAgaWYgKHByZXZpb3VzICE9IG51bGwgJiYgcHJldmlvdXMudHlwZSA9PSBDc3NUb2tlblR5cGUuSWRlbnRpZmllciAmJlxuICAgICAgICAgIHRoaXMuX3NjYW5uZXIucGVlayA9PSBjaGFycy4kTFBBUkVOKSB7XG4gICAgICAgIHRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnKCcpO1xuICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TVFlMRV9WQUxVRV9GVU5DVElPTik7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLl9zY2FuKCk7XG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgICAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlNUWUxFX1ZBTFVFKTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJyknKTtcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9rZW4gPSB0aGlzLl9zY2FuKCk7XG4gICAgICAgIGlmICh0b2tlbi50eXBlID09IENzc1Rva2VuVHlwZS5XaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgd3NTdHIgKz0gdG9rZW4uc3RyVmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3NTdHIgPSAnJztcbiAgICAgICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHByZXZpb3VzID0gdG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgZW5kID0gdGhpcy5fZ2V0U2Nhbm5lckluZGV4KCkgLSAxO1xuICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZVdoaXRlc3BhY2UoKTtcblxuICAgIGNvbnN0IGNvZGUgPSB0aGlzLl9zY2FubmVyLnBlZWs7XG4gICAgaWYgKGNvZGUgPT0gY2hhcnMuJFNFTUlDT0xPTikge1xuICAgICAgdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnOycpO1xuICAgIH0gZWxzZSBpZiAoY29kZSAhPSBjaGFycy4kUkJSQUNFKSB7XG4gICAgICB0aGlzLl9lcnJvcihcbiAgICAgICAgICBnZW5lcmF0ZUVycm9yTWVzc2FnZShcbiAgICAgICAgICAgICAgdGhpcy5fZ2V0U291cmNlQ29udGVudCgpLCBgVGhlIENTUyBrZXkvdmFsdWUgZGVmaW5pdGlvbiBkaWQgbm90IGVuZCB3aXRoIGEgc2VtaWNvbG9uYCxcbiAgICAgICAgICAgICAgcHJldmlvdXMuc3RyVmFsdWUsIHByZXZpb3VzLmluZGV4LCBwcmV2aW91cy5saW5lLCBwcmV2aW91cy5jb2x1bW4pLFxuICAgICAgICAgIHByZXZpb3VzKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJWYWx1ZSA9IHRoaXMuX2V4dHJhY3RTb3VyY2VDb250ZW50KHN0YXJ0LCBlbmQpO1xuICAgIGNvbnN0IHN0YXJ0VG9rZW4gPSB0b2tlbnNbMF07XG4gICAgY29uc3QgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4oc3RhcnRUb2tlbiwgZW5kVG9rZW4pO1xuICAgIHJldHVybiBuZXcgQ3NzU3R5bGVWYWx1ZUFzdChzcGFuLCB0b2tlbnMsIHN0clZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2NvbGxlY3RVbnRpbERlbGltKGRlbGltaXRlcnM6IG51bWJlciwgYXNzZXJ0VHlwZTogQ3NzVG9rZW5UeXBlfG51bGwgPSBudWxsKTogQ3NzVG9rZW5bXSB7XG4gICAgY29uc3QgdG9rZW5zOiBDc3NUb2tlbltdID0gW107XG4gICAgd2hpbGUgKCFjaGFyYWN0ZXJDb250YWluc0RlbGltaXRlcih0aGlzLl9zY2FubmVyLnBlZWssIGRlbGltaXRlcnMpKSB7XG4gICAgICBjb25zdCB2YWwgPSBhc3NlcnRUeXBlICE9IG51bGwgPyB0aGlzLl9jb25zdW1lKGFzc2VydFR5cGUpIDogdGhpcy5fc2NhbigpO1xuICAgICAgdG9rZW5zLnB1c2godmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlQmxvY2soZGVsaW1pdGVyczogbnVtYmVyKTogQ3NzQmxvY2tBc3Qge1xuICAgIGRlbGltaXRlcnMgfD0gUkJSQUNFX0RFTElNX0ZMQUc7XG5cbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLkJMT0NLKTtcblxuICAgIGNvbnN0IHN0YXJ0VG9rZW4gPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICd7Jyk7XG4gICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lRW1wdHlTdGF0ZW1lbnRzKCk7XG5cbiAgICBjb25zdCByZXN1bHRzOiBDc3NSdWxlQXN0W10gPSBbXTtcbiAgICB3aGlsZSAoIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgZGVsaW1pdGVycykpIHtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLl9wYXJzZVJ1bGUoZGVsaW1pdGVycykpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZFRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnfScpO1xuXG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5CTE9DSyk7XG4gICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lRW1wdHlTdGF0ZW1lbnRzKCk7XG5cbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcbiAgICByZXR1cm4gbmV3IENzc0Jsb2NrQXN0KHNwYW4sIHJlc3VsdHMpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfcGFyc2VTdHlsZUJsb2NrKGRlbGltaXRlcnM6IG51bWJlcik6IENzc1N0eWxlc0Jsb2NrQXN0fG51bGwge1xuICAgIGRlbGltaXRlcnMgfD0gUkJSQUNFX0RFTElNX0ZMQUcgfCBMQlJBQ0VfREVMSU1fRkxBRztcblxuICAgIHRoaXMuX3NjYW5uZXIuc2V0TW9kZShDc3NMZXhlck1vZGUuU1RZTEVfQkxPQ0spO1xuXG4gICAgY29uc3Qgc3RhcnRUb2tlbiA9IHRoaXMuX2NvbnN1bWUoQ3NzVG9rZW5UeXBlLkNoYXJhY3RlciwgJ3snKTtcbiAgICBpZiAoc3RhcnRUb2tlbi5udW1WYWx1ZSAhPSBjaGFycy4kTEJSQUNFKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWZpbml0aW9uczogQ3NzRGVmaW5pdGlvbkFzdFtdID0gW107XG4gICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lRW1wdHlTdGF0ZW1lbnRzKCk7XG5cbiAgICB3aGlsZSAoIWNoYXJhY3RlckNvbnRhaW5zRGVsaW1pdGVyKHRoaXMuX3NjYW5uZXIucGVlaywgZGVsaW1pdGVycykpIHtcbiAgICAgIGRlZmluaXRpb25zLnB1c2godGhpcy5fcGFyc2VEZWZpbml0aW9uKGRlbGltaXRlcnMpKTtcbiAgICAgIHRoaXMuX3NjYW5uZXIuY29uc3VtZUVtcHR5U3RhdGVtZW50cygpO1xuICAgIH1cblxuICAgIGNvbnN0IGVuZFRva2VuID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuQ2hhcmFjdGVyLCAnfScpO1xuXG4gICAgdGhpcy5fc2Nhbm5lci5zZXRNb2RlKENzc0xleGVyTW9kZS5TVFlMRV9CTE9DSyk7XG4gICAgdGhpcy5fc2Nhbm5lci5jb25zdW1lRW1wdHlTdGF0ZW1lbnRzKCk7XG5cbiAgICBjb25zdCBzcGFuID0gdGhpcy5fZ2VuZXJhdGVTb3VyY2VTcGFuKHN0YXJ0VG9rZW4sIGVuZFRva2VuKTtcbiAgICByZXR1cm4gbmV3IENzc1N0eWxlc0Jsb2NrQXN0KHNwYW4sIGRlZmluaXRpb25zKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX3BhcnNlRGVmaW5pdGlvbihkZWxpbWl0ZXJzOiBudW1iZXIpOiBDc3NEZWZpbml0aW9uQXN0IHtcbiAgICB0aGlzLl9zY2FubmVyLnNldE1vZGUoQ3NzTGV4ZXJNb2RlLlNUWUxFX0JMT0NLKTtcblxuICAgIGxldCBwcm9wID0gdGhpcy5fY29uc3VtZShDc3NUb2tlblR5cGUuSWRlbnRpZmllcik7XG4gICAgbGV0IHBhcnNlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgdmFsdWU6IENzc1N0eWxlVmFsdWVBc3R8bnVsbCA9IG51bGw7XG4gICAgbGV0IGVuZFRva2VuOiBDc3NUb2tlbnxDc3NTdHlsZVZhbHVlQXN0ID0gcHJvcDtcblxuICAgIC8vIHRoZSBjb2xvbiB2YWx1ZSBzZXBhcmF0ZXMgdGhlIHByb3AgZnJvbSB0aGUgc3R5bGUuXG4gICAgLy8gdGhlcmUgYXJlIGEgZmV3IGNhc2VzIGFzIHRvIHdoYXQgY291bGQgaGFwcGVuIGlmIGl0XG4gICAgLy8gaXMgbWlzc2luZ1xuICAgIHN3aXRjaCAodGhpcy5fc2Nhbm5lci5wZWVrKSB7XG4gICAgICBjYXNlIGNoYXJzLiRTRU1JQ09MT046XG4gICAgICBjYXNlIGNoYXJzLiRSQlJBQ0U6XG4gICAgICBjYXNlIGNoYXJzLiRFT0Y6XG4gICAgICAgIHBhcnNlVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxldCBwcm9wU3RyID0gW3Byb3Auc3RyVmFsdWVdO1xuICAgICAgICBpZiAodGhpcy5fc2Nhbm5lci5wZWVrICE9IGNoYXJzLiRDT0xPTikge1xuICAgICAgICAgIC8vIHRoaXMgd2lsbCB0aHJvdyB0aGUgZXJyb3JcbiAgICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICc6Jyk7XG4gICAgICAgICAgcHJvcFN0ci5wdXNoKG5leHRWYWx1ZS5zdHJWYWx1ZSk7XG5cbiAgICAgICAgICBjb25zdCByZW1haW5pbmdUb2tlbnMgPSB0aGlzLl9jb2xsZWN0VW50aWxEZWxpbShcbiAgICAgICAgICAgICAgZGVsaW1pdGVycyB8IENPTE9OX0RFTElNX0ZMQUcgfCBTRU1JQ09MT05fREVMSU1fRkxBRywgQ3NzVG9rZW5UeXBlLklkZW50aWZpZXIpO1xuICAgICAgICAgIGlmIChyZW1haW5pbmdUb2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVtYWluaW5nVG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BTdHIucHVzaCh0b2tlbi5zdHJWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbmRUb2tlbiA9IHByb3AgPVxuICAgICAgICAgICAgICBuZXcgQ3NzVG9rZW4ocHJvcC5pbmRleCwgcHJvcC5jb2x1bW4sIHByb3AubGluZSwgcHJvcC50eXBlLCBwcm9wU3RyLmpvaW4oJyAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzIG1lYW5zIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgZGVmaW5pdGlvbiBhbmQvb3IgYmxvY2tcbiAgICAgICAgaWYgKHRoaXMuX3NjYW5uZXIucGVlayA9PSBjaGFycy4kQ09MT04pIHtcbiAgICAgICAgICB0aGlzLl9jb25zdW1lKENzc1Rva2VuVHlwZS5DaGFyYWN0ZXIsICc6Jyk7XG4gICAgICAgICAgcGFyc2VWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlVmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5fcGFyc2VWYWx1ZShkZWxpbWl0ZXJzKTtcbiAgICAgIGVuZFRva2VuID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Vycm9yKFxuICAgICAgICAgIGdlbmVyYXRlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgICAgICB0aGlzLl9nZXRTb3VyY2VDb250ZW50KCksIGBUaGUgQ1NTIHByb3BlcnR5IHdhcyBub3QgcGFpcmVkIHdpdGggYSBzdHlsZSB2YWx1ZWAsXG4gICAgICAgICAgICAgIHByb3Auc3RyVmFsdWUsIHByb3AuaW5kZXgsIHByb3AubGluZSwgcHJvcC5jb2x1bW4pLFxuICAgICAgICAgIHByb3ApO1xuICAgIH1cblxuICAgIGNvbnN0IHNwYW4gPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZVNwYW4ocHJvcCwgZW5kVG9rZW4pO1xuICAgIHJldHVybiBuZXcgQ3NzRGVmaW5pdGlvbkFzdChzcGFuLCBwcm9wLCB2YWx1ZSEpO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfYXNzZXJ0Q29uZGl0aW9uKHN0YXR1czogYm9vbGVhbiwgZXJyb3JNZXNzYWdlOiBzdHJpbmcsIHByb2JsZW1Ub2tlbjogQ3NzVG9rZW4pOiBib29sZWFuIHtcbiAgICBpZiAoIXN0YXR1cykge1xuICAgICAgdGhpcy5fZXJyb3IoZXJyb3JNZXNzYWdlLCBwcm9ibGVtVG9rZW4pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2Vycm9yKG1lc3NhZ2U6IHN0cmluZywgcHJvYmxlbVRva2VuOiBDc3NUb2tlbikge1xuICAgIGNvbnN0IGxlbmd0aCA9IHByb2JsZW1Ub2tlbi5zdHJWYWx1ZS5sZW5ndGg7XG4gICAgY29uc3QgZXJyb3IgPSBDc3NQYXJzZUVycm9yLmNyZWF0ZShcbiAgICAgICAgdGhpcy5fZmlsZSwgMCwgcHJvYmxlbVRva2VuLmxpbmUsIHByb2JsZW1Ub2tlbi5jb2x1bW4sIGxlbmd0aCwgbWVzc2FnZSk7XG4gICAgdGhpcy5fZXJyb3JzLnB1c2goZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDc3NQYXJzZUVycm9yIGV4dGVuZHMgUGFyc2VFcnJvciB7XG4gIHN0YXRpYyBjcmVhdGUoXG4gICAgICBmaWxlOiBQYXJzZVNvdXJjZUZpbGUsIG9mZnNldDogbnVtYmVyLCBsaW5lOiBudW1iZXIsIGNvbDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcixcbiAgICAgIGVyck1zZzogc3RyaW5nKTogQ3NzUGFyc2VFcnJvciB7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgUGFyc2VMb2NhdGlvbihmaWxlLCBvZmZzZXQsIGxpbmUsIGNvbCk7XG4gICAgY29uc3QgZW5kID0gbmV3IFBhcnNlTG9jYXRpb24oZmlsZSwgb2Zmc2V0LCBsaW5lLCBjb2wgKyBsZW5ndGgpO1xuICAgIGNvbnN0IHNwYW4gPSBuZXcgUGFyc2VTb3VyY2VTcGFuKHN0YXJ0LCBlbmQpO1xuICAgIHJldHVybiBuZXcgQ3NzUGFyc2VFcnJvcihzcGFuLCAnQ1NTIFBhcnNlIEVycm9yOiAnICsgZXJyTXNnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNwYW46IFBhcnNlU291cmNlU3BhbiwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIoc3BhbiwgbWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==
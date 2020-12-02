/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as chars from '../chars';
import { DEFAULT_INTERPOLATION_CONFIG } from '../ml_parser/interpolation_config';
import { escapeRegExp } from '../util';
import { AbsoluteSourceSpan, ASTWithSource, Binary, BindingPipe, Chain, Conditional, EmptyExpr, ExpressionBinding, FunctionCall, ImplicitReceiver, Interpolation, KeyedRead, KeyedWrite, LiteralArray, LiteralMap, LiteralPrimitive, MethodCall, NonNullAssert, ParserError, ParseSpan, PrefixNot, PropertyRead, PropertyWrite, Quote, SafeMethodCall, SafePropertyRead, VariableBinding } from './ast';
import { EOF, isIdentifier, isQuote, TokenType } from './lexer';
export class SplitInterpolation {
    constructor(strings, expressions, offsets) {
        this.strings = strings;
        this.expressions = expressions;
        this.offsets = offsets;
    }
}
export class TemplateBindingParseResult {
    constructor(templateBindings, warnings, errors) {
        this.templateBindings = templateBindings;
        this.warnings = warnings;
        this.errors = errors;
    }
}
const defaultInterpolateRegExp = _createInterpolateRegExp(DEFAULT_INTERPOLATION_CONFIG);
function _getInterpolateRegExp(config) {
    if (config === DEFAULT_INTERPOLATION_CONFIG) {
        return defaultInterpolateRegExp;
    }
    else {
        return _createInterpolateRegExp(config);
    }
}
function _createInterpolateRegExp(config) {
    const pattern = escapeRegExp(config.start) + '([\\s\\S]*?)' + escapeRegExp(config.end);
    return new RegExp(pattern, 'g');
}
export class Parser {
    constructor(_lexer) {
        this._lexer = _lexer;
        this.errors = [];
        this.simpleExpressionChecker = SimpleExpressionChecker;
    }
    parseAction(input, location, absoluteOffset, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        this._checkNoInterpolation(input, location, interpolationConfig);
        const sourceToLex = this._stripComments(input);
        const tokens = this._lexer.tokenize(this._stripComments(input));
        const ast = new _ParseAST(input, location, absoluteOffset, tokens, sourceToLex.length, true, this.errors, input.length - sourceToLex.length)
            .parseChain();
        return new ASTWithSource(ast, input, location, absoluteOffset, this.errors);
    }
    parseBinding(input, location, absoluteOffset, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const ast = this._parseBindingAst(input, location, absoluteOffset, interpolationConfig);
        return new ASTWithSource(ast, input, location, absoluteOffset, this.errors);
    }
    checkSimpleExpression(ast) {
        const checker = new this.simpleExpressionChecker();
        ast.visit(checker);
        return checker.errors;
    }
    parseSimpleBinding(input, location, absoluteOffset, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const ast = this._parseBindingAst(input, location, absoluteOffset, interpolationConfig);
        const errors = this.checkSimpleExpression(ast);
        if (errors.length > 0) {
            this._reportError(`Host binding expression cannot contain ${errors.join(' ')}`, input, location);
        }
        return new ASTWithSource(ast, input, location, absoluteOffset, this.errors);
    }
    _reportError(message, input, errLocation, ctxLocation) {
        this.errors.push(new ParserError(message, input, errLocation, ctxLocation));
    }
    _parseBindingAst(input, location, absoluteOffset, interpolationConfig) {
        // Quotes expressions use 3rd-party expression language. We don't want to use
        // our lexer or parser for that, so we check for that ahead of time.
        const quote = this._parseQuote(input, location, absoluteOffset);
        if (quote != null) {
            return quote;
        }
        this._checkNoInterpolation(input, location, interpolationConfig);
        const sourceToLex = this._stripComments(input);
        const tokens = this._lexer.tokenize(sourceToLex);
        return new _ParseAST(input, location, absoluteOffset, tokens, sourceToLex.length, false, this.errors, input.length - sourceToLex.length)
            .parseChain();
    }
    _parseQuote(input, location, absoluteOffset) {
        if (input == null)
            return null;
        const prefixSeparatorIndex = input.indexOf(':');
        if (prefixSeparatorIndex == -1)
            return null;
        const prefix = input.substring(0, prefixSeparatorIndex).trim();
        if (!isIdentifier(prefix))
            return null;
        const uninterpretedExpression = input.substring(prefixSeparatorIndex + 1);
        const span = new ParseSpan(0, input.length);
        return new Quote(span, span.toAbsolute(absoluteOffset), prefix, uninterpretedExpression, location);
    }
    /**
     * Parse microsyntax template expression and return a list of bindings or
     * parsing errors in case the given expression is invalid.
     *
     * For example,
     * ```
     *   <div *ngFor="let item of items">
     *         ^      ^ absoluteValueOffset for `templateValue`
     *         absoluteKeyOffset for `templateKey`
     * ```
     * contains three bindings:
     * 1. ngFor -> null
     * 2. item -> NgForOfContext.$implicit
     * 3. ngForOf -> items
     *
     * This is apparent from the de-sugared template:
     * ```
     *   <ng-template ngFor let-item [ngForOf]="items">
     * ```
     *
     * @param templateKey name of directive, without the * prefix. For example: ngIf, ngFor
     * @param templateValue RHS of the microsyntax attribute
     * @param templateUrl template filename if it's external, component filename if it's inline
     * @param absoluteKeyOffset start of the `templateKey`
     * @param absoluteValueOffset start of the `templateValue`
     */
    parseTemplateBindings(templateKey, templateValue, templateUrl, absoluteKeyOffset, absoluteValueOffset) {
        const tokens = this._lexer.tokenize(templateValue);
        const parser = new _ParseAST(templateValue, templateUrl, absoluteValueOffset, tokens, templateValue.length, false /* parseAction */, this.errors, 0 /* relative offset */);
        return parser.parseTemplateBindings({
            source: templateKey,
            span: new AbsoluteSourceSpan(absoluteKeyOffset, absoluteKeyOffset + templateKey.length),
        });
    }
    parseInterpolation(input, location, absoluteOffset, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const split = this.splitInterpolation(input, location, interpolationConfig);
        if (split == null)
            return null;
        const expressions = [];
        for (let i = 0; i < split.expressions.length; ++i) {
            const expressionText = split.expressions[i];
            const sourceToLex = this._stripComments(expressionText);
            const tokens = this._lexer.tokenize(sourceToLex);
            const ast = new _ParseAST(input, location, absoluteOffset, tokens, sourceToLex.length, false, this.errors, split.offsets[i] + (expressionText.length - sourceToLex.length))
                .parseChain();
            expressions.push(ast);
        }
        const span = new ParseSpan(0, input == null ? 0 : input.length);
        return new ASTWithSource(new Interpolation(span, span.toAbsolute(absoluteOffset), split.strings, expressions), input, location, absoluteOffset, this.errors);
    }
    splitInterpolation(input, location, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        const regexp = _getInterpolateRegExp(interpolationConfig);
        const parts = input.split(regexp);
        if (parts.length <= 1) {
            return null;
        }
        const strings = [];
        const expressions = [];
        const offsets = [];
        let offset = 0;
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (i % 2 === 0) {
                // fixed string
                strings.push(part);
                offset += part.length;
            }
            else if (part.trim().length > 0) {
                offset += interpolationConfig.start.length;
                expressions.push(part);
                offsets.push(offset);
                offset += part.length + interpolationConfig.end.length;
            }
            else {
                this._reportError('Blank expressions are not allowed in interpolated strings', input, `at column ${this._findInterpolationErrorColumn(parts, i, interpolationConfig)} in`, location);
                expressions.push('$implicit');
                offsets.push(offset);
            }
        }
        return new SplitInterpolation(strings, expressions, offsets);
    }
    wrapLiteralPrimitive(input, location, absoluteOffset) {
        const span = new ParseSpan(0, input == null ? 0 : input.length);
        return new ASTWithSource(new LiteralPrimitive(span, span.toAbsolute(absoluteOffset), input), input, location, absoluteOffset, this.errors);
    }
    _stripComments(input) {
        const i = this._commentStart(input);
        return i != null ? input.substring(0, i).trim() : input;
    }
    _commentStart(input) {
        let outerQuote = null;
        for (let i = 0; i < input.length - 1; i++) {
            const char = input.charCodeAt(i);
            const nextChar = input.charCodeAt(i + 1);
            if (char === chars.$SLASH && nextChar == chars.$SLASH && outerQuote == null)
                return i;
            if (outerQuote === char) {
                outerQuote = null;
            }
            else if (outerQuote == null && isQuote(char)) {
                outerQuote = char;
            }
        }
        return null;
    }
    _checkNoInterpolation(input, location, interpolationConfig) {
        const regexp = _getInterpolateRegExp(interpolationConfig);
        const parts = input.split(regexp);
        if (parts.length > 1) {
            this._reportError(`Got interpolation (${interpolationConfig.start}${interpolationConfig.end}) where expression was expected`, input, `at column ${this._findInterpolationErrorColumn(parts, 1, interpolationConfig)} in`, location);
        }
    }
    _findInterpolationErrorColumn(parts, partInErrIdx, interpolationConfig) {
        let errLocation = '';
        for (let j = 0; j < partInErrIdx; j++) {
            errLocation += j % 2 === 0 ?
                parts[j] :
                `${interpolationConfig.start}${parts[j]}${interpolationConfig.end}`;
        }
        return errLocation.length;
    }
}
export class IvyParser extends Parser {
    constructor() {
        super(...arguments);
        this.simpleExpressionChecker = IvySimpleExpressionChecker; //
    }
}
export class _ParseAST {
    constructor(input, location, absoluteOffset, tokens, inputLength, parseAction, errors, offset) {
        this.input = input;
        this.location = location;
        this.absoluteOffset = absoluteOffset;
        this.tokens = tokens;
        this.inputLength = inputLength;
        this.parseAction = parseAction;
        this.errors = errors;
        this.offset = offset;
        this.rparensExpected = 0;
        this.rbracketsExpected = 0;
        this.rbracesExpected = 0;
        // Cache of expression start and input indeces to the absolute source span they map to, used to
        // prevent creating superfluous source spans in `sourceSpan`.
        // A serial of the expression start and input index is used for mapping because both are stateful
        // and may change for subsequent expressions visited by the parser.
        this.sourceSpanCache = new Map();
        this.index = 0;
    }
    peek(offset) {
        const i = this.index + offset;
        return i < this.tokens.length ? this.tokens[i] : EOF;
    }
    get next() {
        return this.peek(0);
    }
    /** Whether all the parser input has been processed. */
    get atEOF() {
        return this.index >= this.tokens.length;
    }
    /**
     * Index of the next token to be processed, or the end of the last token if all have been
     * processed.
     */
    get inputIndex() {
        return this.atEOF ? this.currentEndIndex : this.next.index + this.offset;
    }
    /**
     * End index of the last processed token, or the start of the first token if none have been
     * processed.
     */
    get currentEndIndex() {
        if (this.index > 0) {
            const curToken = this.peek(-1);
            return curToken.end + this.offset;
        }
        // No tokens have been processed yet; return the next token's start or the length of the input
        // if there is no token.
        if (this.tokens.length === 0) {
            return this.inputLength + this.offset;
        }
        return this.next.index + this.offset;
    }
    /**
     * Returns the absolute offset of the start of the current token.
     */
    get currentAbsoluteOffset() {
        return this.absoluteOffset + this.inputIndex;
    }
    span(start) {
        return new ParseSpan(start, this.currentEndIndex);
    }
    sourceSpan(start) {
        const serial = `${start}@${this.inputIndex}`;
        if (!this.sourceSpanCache.has(serial)) {
            this.sourceSpanCache.set(serial, this.span(start).toAbsolute(this.absoluteOffset));
        }
        return this.sourceSpanCache.get(serial);
    }
    advance() {
        this.index++;
    }
    consumeOptionalCharacter(code) {
        if (this.next.isCharacter(code)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    }
    peekKeywordLet() {
        return this.next.isKeywordLet();
    }
    peekKeywordAs() {
        return this.next.isKeywordAs();
    }
    expectCharacter(code) {
        if (this.consumeOptionalCharacter(code))
            return;
        this.error(`Missing expected ${String.fromCharCode(code)}`);
    }
    consumeOptionalOperator(op) {
        if (this.next.isOperator(op)) {
            this.advance();
            return true;
        }
        else {
            return false;
        }
    }
    expectOperator(operator) {
        if (this.consumeOptionalOperator(operator))
            return;
        this.error(`Missing expected operator ${operator}`);
    }
    expectIdentifierOrKeyword() {
        const n = this.next;
        if (!n.isIdentifier() && !n.isKeyword()) {
            this.error(`Unexpected token ${n}, expected identifier or keyword`);
            return '';
        }
        this.advance();
        return n.toString();
    }
    expectIdentifierOrKeywordOrString() {
        const n = this.next;
        if (!n.isIdentifier() && !n.isKeyword() && !n.isString()) {
            this.error(`Unexpected token ${n}, expected identifier, keyword, or string`);
            return '';
        }
        this.advance();
        return n.toString();
    }
    parseChain() {
        const exprs = [];
        const start = this.inputIndex;
        while (this.index < this.tokens.length) {
            const expr = this.parsePipe();
            exprs.push(expr);
            if (this.consumeOptionalCharacter(chars.$SEMICOLON)) {
                if (!this.parseAction) {
                    this.error('Binding expression cannot contain chained expression');
                }
                while (this.consumeOptionalCharacter(chars.$SEMICOLON)) {
                } // read all semicolons
            }
            else if (this.index < this.tokens.length) {
                this.error(`Unexpected token '${this.next}'`);
            }
        }
        if (exprs.length == 0)
            return new EmptyExpr(this.span(start), this.sourceSpan(start));
        if (exprs.length == 1)
            return exprs[0];
        return new Chain(this.span(start), this.sourceSpan(start), exprs);
    }
    parsePipe() {
        let result = this.parseExpression();
        if (this.consumeOptionalOperator('|')) {
            if (this.parseAction) {
                this.error('Cannot have a pipe in an action expression');
            }
            do {
                const nameStart = this.inputIndex;
                const name = this.expectIdentifierOrKeyword();
                const nameSpan = this.sourceSpan(nameStart);
                const args = [];
                while (this.consumeOptionalCharacter(chars.$COLON)) {
                    args.push(this.parseExpression());
                }
                const { start } = result.span;
                result =
                    new BindingPipe(this.span(start), this.sourceSpan(start), result, name, args, nameSpan);
            } while (this.consumeOptionalOperator('|'));
        }
        return result;
    }
    parseExpression() {
        return this.parseConditional();
    }
    parseConditional() {
        const start = this.inputIndex;
        const result = this.parseLogicalOr();
        if (this.consumeOptionalOperator('?')) {
            const yes = this.parsePipe();
            let no;
            if (!this.consumeOptionalCharacter(chars.$COLON)) {
                const end = this.inputIndex;
                const expression = this.input.substring(start, end);
                this.error(`Conditional expression ${expression} requires all 3 expressions`);
                no = new EmptyExpr(this.span(start), this.sourceSpan(start));
            }
            else {
                no = this.parsePipe();
            }
            return new Conditional(this.span(start), this.sourceSpan(start), result, yes, no);
        }
        else {
            return result;
        }
    }
    parseLogicalOr() {
        // '||'
        let result = this.parseLogicalAnd();
        while (this.consumeOptionalOperator('||')) {
            const right = this.parseLogicalAnd();
            const { start } = result.span;
            result = new Binary(this.span(start), this.sourceSpan(start), '||', result, right);
        }
        return result;
    }
    parseLogicalAnd() {
        // '&&'
        let result = this.parseEquality();
        while (this.consumeOptionalOperator('&&')) {
            const right = this.parseEquality();
            const { start } = result.span;
            result = new Binary(this.span(start), this.sourceSpan(start), '&&', result, right);
        }
        return result;
    }
    parseEquality() {
        // '==','!=','===','!=='
        let result = this.parseRelational();
        while (this.next.type == TokenType.Operator) {
            const operator = this.next.strValue;
            switch (operator) {
                case '==':
                case '===':
                case '!=':
                case '!==':
                    this.advance();
                    const right = this.parseRelational();
                    const { start } = result.span;
                    result = new Binary(this.span(start), this.sourceSpan(start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    parseRelational() {
        // '<', '>', '<=', '>='
        let result = this.parseAdditive();
        while (this.next.type == TokenType.Operator) {
            const operator = this.next.strValue;
            switch (operator) {
                case '<':
                case '>':
                case '<=':
                case '>=':
                    this.advance();
                    const right = this.parseAdditive();
                    const { start } = result.span;
                    result = new Binary(this.span(start), this.sourceSpan(start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    parseAdditive() {
        // '+', '-'
        let result = this.parseMultiplicative();
        while (this.next.type == TokenType.Operator) {
            const operator = this.next.strValue;
            switch (operator) {
                case '+':
                case '-':
                    this.advance();
                    let right = this.parseMultiplicative();
                    const { start } = result.span;
                    result = new Binary(this.span(start), this.sourceSpan(start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    parseMultiplicative() {
        // '*', '%', '/'
        let result = this.parsePrefix();
        while (this.next.type == TokenType.Operator) {
            const operator = this.next.strValue;
            switch (operator) {
                case '*':
                case '%':
                case '/':
                    this.advance();
                    let right = this.parsePrefix();
                    const { start } = result.span;
                    result = new Binary(this.span(start), this.sourceSpan(start), operator, result, right);
                    continue;
            }
            break;
        }
        return result;
    }
    parsePrefix() {
        if (this.next.type == TokenType.Operator) {
            const start = this.inputIndex;
            const operator = this.next.strValue;
            const literalSpan = new ParseSpan(start, start);
            const literalSourceSpan = literalSpan.toAbsolute(this.absoluteOffset);
            let result;
            switch (operator) {
                case '+':
                    this.advance();
                    result = this.parsePrefix();
                    return new Binary(this.span(start), this.sourceSpan(start), '-', result, new LiteralPrimitive(literalSpan, literalSourceSpan, 0));
                case '-':
                    this.advance();
                    result = this.parsePrefix();
                    return new Binary(this.span(start), this.sourceSpan(start), operator, new LiteralPrimitive(literalSpan, literalSourceSpan, 0), result);
                case '!':
                    this.advance();
                    result = this.parsePrefix();
                    return new PrefixNot(this.span(start), this.sourceSpan(start), result);
            }
        }
        return this.parseCallChain();
    }
    parseCallChain() {
        let result = this.parsePrimary();
        const resultStart = result.span.start;
        while (true) {
            if (this.consumeOptionalCharacter(chars.$PERIOD)) {
                result = this.parseAccessMemberOrMethodCall(result, false);
            }
            else if (this.consumeOptionalOperator('?.')) {
                result = this.parseAccessMemberOrMethodCall(result, true);
            }
            else if (this.consumeOptionalCharacter(chars.$LBRACKET)) {
                this.rbracketsExpected++;
                const key = this.parsePipe();
                this.rbracketsExpected--;
                this.expectCharacter(chars.$RBRACKET);
                if (this.consumeOptionalOperator('=')) {
                    const value = this.parseConditional();
                    result = new KeyedWrite(this.span(resultStart), this.sourceSpan(resultStart), result, key, value);
                }
                else {
                    result = new KeyedRead(this.span(resultStart), this.sourceSpan(resultStart), result, key);
                }
            }
            else if (this.consumeOptionalCharacter(chars.$LPAREN)) {
                this.rparensExpected++;
                const args = this.parseCallArguments();
                this.rparensExpected--;
                this.expectCharacter(chars.$RPAREN);
                result =
                    new FunctionCall(this.span(resultStart), this.sourceSpan(resultStart), result, args);
            }
            else if (this.consumeOptionalOperator('!')) {
                result = new NonNullAssert(this.span(resultStart), this.sourceSpan(resultStart), result);
            }
            else {
                return result;
            }
        }
    }
    parsePrimary() {
        const start = this.inputIndex;
        if (this.consumeOptionalCharacter(chars.$LPAREN)) {
            this.rparensExpected++;
            const result = this.parsePipe();
            this.rparensExpected--;
            this.expectCharacter(chars.$RPAREN);
            return result;
        }
        else if (this.next.isKeywordNull()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), this.sourceSpan(start), null);
        }
        else if (this.next.isKeywordUndefined()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), this.sourceSpan(start), void 0);
        }
        else if (this.next.isKeywordTrue()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), this.sourceSpan(start), true);
        }
        else if (this.next.isKeywordFalse()) {
            this.advance();
            return new LiteralPrimitive(this.span(start), this.sourceSpan(start), false);
        }
        else if (this.next.isKeywordThis()) {
            this.advance();
            return new ImplicitReceiver(this.span(start), this.sourceSpan(start));
        }
        else if (this.consumeOptionalCharacter(chars.$LBRACKET)) {
            this.rbracketsExpected++;
            const elements = this.parseExpressionList(chars.$RBRACKET);
            this.rbracketsExpected--;
            this.expectCharacter(chars.$RBRACKET);
            return new LiteralArray(this.span(start), this.sourceSpan(start), elements);
        }
        else if (this.next.isCharacter(chars.$LBRACE)) {
            return this.parseLiteralMap();
        }
        else if (this.next.isIdentifier()) {
            return this.parseAccessMemberOrMethodCall(new ImplicitReceiver(this.span(start), this.sourceSpan(start)), false);
        }
        else if (this.next.isNumber()) {
            const value = this.next.toNumber();
            this.advance();
            return new LiteralPrimitive(this.span(start), this.sourceSpan(start), value);
        }
        else if (this.next.isString()) {
            const literalValue = this.next.toString();
            this.advance();
            return new LiteralPrimitive(this.span(start), this.sourceSpan(start), literalValue);
        }
        else if (this.index >= this.tokens.length) {
            this.error(`Unexpected end of expression: ${this.input}`);
            return new EmptyExpr(this.span(start), this.sourceSpan(start));
        }
        else {
            this.error(`Unexpected token ${this.next}`);
            return new EmptyExpr(this.span(start), this.sourceSpan(start));
        }
    }
    parseExpressionList(terminator) {
        const result = [];
        if (!this.next.isCharacter(terminator)) {
            do {
                result.push(this.parsePipe());
            } while (this.consumeOptionalCharacter(chars.$COMMA));
        }
        return result;
    }
    parseLiteralMap() {
        const keys = [];
        const values = [];
        const start = this.inputIndex;
        this.expectCharacter(chars.$LBRACE);
        if (!this.consumeOptionalCharacter(chars.$RBRACE)) {
            this.rbracesExpected++;
            do {
                const quoted = this.next.isString();
                const key = this.expectIdentifierOrKeywordOrString();
                keys.push({ key, quoted });
                this.expectCharacter(chars.$COLON);
                values.push(this.parsePipe());
            } while (this.consumeOptionalCharacter(chars.$COMMA));
            this.rbracesExpected--;
            this.expectCharacter(chars.$RBRACE);
        }
        return new LiteralMap(this.span(start), this.sourceSpan(start), keys, values);
    }
    parseAccessMemberOrMethodCall(receiver, isSafe = false) {
        const start = receiver.span.start;
        const nameStart = this.inputIndex;
        const id = this.expectIdentifierOrKeyword();
        const nameSpan = this.sourceSpan(nameStart);
        if (this.consumeOptionalCharacter(chars.$LPAREN)) {
            this.rparensExpected++;
            const args = this.parseCallArguments();
            this.expectCharacter(chars.$RPAREN);
            this.rparensExpected--;
            const span = this.span(start);
            const sourceSpan = this.sourceSpan(start);
            return isSafe ? new SafeMethodCall(span, sourceSpan, nameSpan, receiver, id, args) :
                new MethodCall(span, sourceSpan, nameSpan, receiver, id, args);
        }
        else {
            if (isSafe) {
                if (this.consumeOptionalOperator('=')) {
                    this.error('The \'?.\' operator cannot be used in the assignment');
                    return new EmptyExpr(this.span(start), this.sourceSpan(start));
                }
                else {
                    return new SafePropertyRead(this.span(start), this.sourceSpan(start), nameSpan, receiver, id);
                }
            }
            else {
                if (this.consumeOptionalOperator('=')) {
                    if (!this.parseAction) {
                        this.error('Bindings cannot contain assignments');
                        return new EmptyExpr(this.span(start), this.sourceSpan(start));
                    }
                    const value = this.parseConditional();
                    return new PropertyWrite(this.span(start), this.sourceSpan(start), nameSpan, receiver, id, value);
                }
                else {
                    return new PropertyRead(this.span(start), this.sourceSpan(start), nameSpan, receiver, id);
                }
            }
        }
    }
    parseCallArguments() {
        if (this.next.isCharacter(chars.$RPAREN))
            return [];
        const positionals = [];
        do {
            positionals.push(this.parsePipe());
        } while (this.consumeOptionalCharacter(chars.$COMMA));
        return positionals;
    }
    /**
     * Parses an identifier, a keyword, a string with an optional `-` in between,
     * and returns the string along with its absolute source span.
     */
    expectTemplateBindingKey() {
        let result = '';
        let operatorFound = false;
        const start = this.currentAbsoluteOffset;
        do {
            result += this.expectIdentifierOrKeywordOrString();
            operatorFound = this.consumeOptionalOperator('-');
            if (operatorFound) {
                result += '-';
            }
        } while (operatorFound);
        return {
            source: result,
            span: new AbsoluteSourceSpan(start, start + result.length),
        };
    }
    /**
     * Parse microsyntax template expression and return a list of bindings or
     * parsing errors in case the given expression is invalid.
     *
     * For example,
     * ```
     *   <div *ngFor="let item of items; index as i; trackBy: func">
     * ```
     * contains five bindings:
     * 1. ngFor -> null
     * 2. item -> NgForOfContext.$implicit
     * 3. ngForOf -> items
     * 4. i -> NgForOfContext.index
     * 5. ngForTrackBy -> func
     *
     * For a full description of the microsyntax grammar, see
     * https://gist.github.com/mhevery/d3530294cff2e4a1b3fe15ff75d08855
     *
     * @param templateKey name of the microsyntax directive, like ngIf, ngFor,
     * without the *, along with its absolute span.
     */
    parseTemplateBindings(templateKey) {
        const bindings = [];
        // The first binding is for the template key itself
        // In *ngFor="let item of items", key = "ngFor", value = null
        // In *ngIf="cond | pipe", key = "ngIf", value = "cond | pipe"
        bindings.push(...this.parseDirectiveKeywordBindings(templateKey));
        while (this.index < this.tokens.length) {
            // If it starts with 'let', then this must be variable declaration
            const letBinding = this.parseLetBinding();
            if (letBinding) {
                bindings.push(letBinding);
            }
            else {
                // Two possible cases here, either `value "as" key` or
                // "directive-keyword expression". We don't know which case, but both
                // "value" and "directive-keyword" are template binding key, so consume
                // the key first.
                const key = this.expectTemplateBindingKey();
                // Peek at the next token, if it is "as" then this must be variable
                // declaration.
                const binding = this.parseAsBinding(key);
                if (binding) {
                    bindings.push(binding);
                }
                else {
                    // Otherwise the key must be a directive keyword, like "of". Transform
                    // the key to actual key. Eg. of -> ngForOf, trackBy -> ngForTrackBy
                    key.source = templateKey.source + key.source[0].toUpperCase() + key.source.substring(1);
                    bindings.push(...this.parseDirectiveKeywordBindings(key));
                }
            }
            this.consumeStatementTerminator();
        }
        return new TemplateBindingParseResult(bindings, [] /* warnings */, this.errors);
    }
    /**
     * Parse a directive keyword, followed by a mandatory expression.
     * For example, "of items", "trackBy: func".
     * The bindings are: ngForOf -> items, ngForTrackBy -> func
     * There could be an optional "as" binding that follows the expression.
     * For example,
     * ```
     *   *ngFor="let item of items | slice:0:1 as collection".
     *                    ^^ ^^^^^^^^^^^^^^^^^ ^^^^^^^^^^^^^
     *               keyword    bound target   optional 'as' binding
     * ```
     *
     * @param key binding key, for example, ngFor, ngIf, ngForOf, along with its
     * absolute span.
     */
    parseDirectiveKeywordBindings(key) {
        const bindings = [];
        this.consumeOptionalCharacter(chars.$COLON); // trackBy: trackByFunction
        const value = this.getDirectiveBoundTarget();
        let spanEnd = this.currentAbsoluteOffset;
        // The binding could optionally be followed by "as". For example,
        // *ngIf="cond | pipe as x". In this case, the key in the "as" binding
        // is "x" and the value is the template key itself ("ngIf"). Note that the
        // 'key' in the current context now becomes the "value" in the next binding.
        const asBinding = this.parseAsBinding(key);
        if (!asBinding) {
            this.consumeStatementTerminator();
            spanEnd = this.currentAbsoluteOffset;
        }
        const sourceSpan = new AbsoluteSourceSpan(key.span.start, spanEnd);
        bindings.push(new ExpressionBinding(sourceSpan, key, value));
        if (asBinding) {
            bindings.push(asBinding);
        }
        return bindings;
    }
    /**
     * Return the expression AST for the bound target of a directive keyword
     * binding. For example,
     * ```
     *   *ngIf="condition | pipe"
     *          ^^^^^^^^^^^^^^^^ bound target for "ngIf"
     *   *ngFor="let item of items"
     *                       ^^^^^ bound target for "ngForOf"
     * ```
     */
    getDirectiveBoundTarget() {
        if (this.next === EOF || this.peekKeywordAs() || this.peekKeywordLet()) {
            return null;
        }
        const ast = this.parsePipe(); // example: "condition | async"
        const { start, end } = ast.span;
        const value = this.input.substring(start, end);
        return new ASTWithSource(ast, value, this.location, this.absoluteOffset + start, this.errors);
    }
    /**
     * Return the binding for a variable declared using `as`. Note that the order
     * of the key-value pair in this declaration is reversed. For example,
     * ```
     *   *ngFor="let item of items; index as i"
     *                              ^^^^^    ^
     *                              value    key
     * ```
     *
     * @param value name of the value in the declaration, "ngIf" in the example
     * above, along with its absolute span.
     */
    parseAsBinding(value) {
        if (!this.peekKeywordAs()) {
            return null;
        }
        this.advance(); // consume the 'as' keyword
        const key = this.expectTemplateBindingKey();
        this.consumeStatementTerminator();
        const sourceSpan = new AbsoluteSourceSpan(value.span.start, this.currentAbsoluteOffset);
        return new VariableBinding(sourceSpan, key, value);
    }
    /**
     * Return the binding for a variable declared using `let`. For example,
     * ```
     *   *ngFor="let item of items; let i=index;"
     *           ^^^^^^^^           ^^^^^^^^^^^
     * ```
     * In the first binding, `item` is bound to `NgForOfContext.$implicit`.
     * In the second binding, `i` is bound to `NgForOfContext.index`.
     */
    parseLetBinding() {
        if (!this.peekKeywordLet()) {
            return null;
        }
        const spanStart = this.currentAbsoluteOffset;
        this.advance(); // consume the 'let' keyword
        const key = this.expectTemplateBindingKey();
        let value = null;
        if (this.consumeOptionalOperator('=')) {
            value = this.expectTemplateBindingKey();
        }
        this.consumeStatementTerminator();
        const sourceSpan = new AbsoluteSourceSpan(spanStart, this.currentAbsoluteOffset);
        return new VariableBinding(sourceSpan, key, value);
    }
    /**
     * Consume the optional statement terminator: semicolon or comma.
     */
    consumeStatementTerminator() {
        this.consumeOptionalCharacter(chars.$SEMICOLON) || this.consumeOptionalCharacter(chars.$COMMA);
    }
    error(message, index = null) {
        this.errors.push(new ParserError(message, this.input, this.locationText(index), this.location));
        this.skip();
    }
    locationText(index = null) {
        if (index == null)
            index = this.index;
        return (index < this.tokens.length) ? `at column ${this.tokens[index].index + 1} in` :
            `at the end of the expression`;
    }
    // Error recovery should skip tokens until it encounters a recovery point. skip() treats
    // the end of input and a ';' as unconditionally a recovery point. It also treats ')',
    // '}' and ']' as conditional recovery points if one of calling productions is expecting
    // one of these symbols. This allows skip() to recover from errors such as '(a.) + 1' allowing
    // more of the AST to be retained (it doesn't skip any tokens as the ')' is retained because
    // of the '(' begins an '(' <expr> ')' production). The recovery points of grouping symbols
    // must be conditional as they must be skipped if none of the calling productions are not
    // expecting the closing token else we will never make progress in the case of an
    // extraneous group closing symbol (such as a stray ')'). This is not the case for ';' because
    // parseChain() is always the root production and it expects a ';'.
    // If a production expects one of these token it increments the corresponding nesting count,
    // and then decrements it just prior to checking if the token is in the input.
    skip() {
        let n = this.next;
        while (this.index < this.tokens.length && !n.isCharacter(chars.$SEMICOLON) &&
            (this.rparensExpected <= 0 || !n.isCharacter(chars.$RPAREN)) &&
            (this.rbracesExpected <= 0 || !n.isCharacter(chars.$RBRACE)) &&
            (this.rbracketsExpected <= 0 || !n.isCharacter(chars.$RBRACKET))) {
            if (this.next.isError()) {
                this.errors.push(new ParserError(this.next.toString(), this.input, this.locationText(), this.location));
            }
            this.advance();
            n = this.next;
        }
    }
}
class SimpleExpressionChecker {
    constructor() {
        this.errors = [];
    }
    visitImplicitReceiver(ast, context) { }
    visitInterpolation(ast, context) { }
    visitLiteralPrimitive(ast, context) { }
    visitPropertyRead(ast, context) { }
    visitPropertyWrite(ast, context) { }
    visitSafePropertyRead(ast, context) { }
    visitMethodCall(ast, context) { }
    visitSafeMethodCall(ast, context) { }
    visitFunctionCall(ast, context) { }
    visitLiteralArray(ast, context) {
        this.visitAll(ast.expressions);
    }
    visitLiteralMap(ast, context) {
        this.visitAll(ast.values);
    }
    visitBinary(ast, context) { }
    visitPrefixNot(ast, context) { }
    visitNonNullAssert(ast, context) { }
    visitConditional(ast, context) { }
    visitPipe(ast, context) {
        this.errors.push('pipes');
    }
    visitKeyedRead(ast, context) { }
    visitKeyedWrite(ast, context) { }
    visitAll(asts) {
        return asts.map(node => node.visit(this));
    }
    visitChain(ast, context) { }
    visitQuote(ast, context) { }
}
/**
 * This class extends SimpleExpressionChecker used in View Engine and performs more strict checks to
 * make sure host bindings do not contain pipes. In View Engine, having pipes in host bindings is
 * not supported as well, but in some cases (like `!(value | async)`) the error is not triggered at
 * compile time. In order to preserve View Engine behavior, more strict checks are introduced for
 * Ivy mode only.
 */
class IvySimpleExpressionChecker extends SimpleExpressionChecker {
    visitBinary(ast, context) {
        ast.left.visit(this);
        ast.right.visit(this);
    }
    visitPrefixNot(ast, context) {
        ast.expression.visit(this);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2V4cHJlc3Npb25fcGFyc2VyL3BhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEtBQUssS0FBSyxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUMsNEJBQTRCLEVBQXNCLE1BQU0sbUNBQW1DLENBQUM7QUFDcEcsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUVyQyxPQUFPLEVBQUMsa0JBQWtCLEVBQW1CLGFBQWEsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFpQixnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBOEMsZUFBZSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBQ2xkLE9BQU8sRUFBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBZ0IsU0FBUyxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBRTVFLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBbUIsT0FBaUIsRUFBUyxXQUFxQixFQUFTLE9BQWlCO1FBQXpFLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBVTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVU7SUFBRyxDQUFDO0NBQ2pHO0FBRUQsTUFBTSxPQUFPLDBCQUEwQjtJQUNyQyxZQUNXLGdCQUFtQyxFQUFTLFFBQWtCLEVBQzlELE1BQXFCO1FB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QyxDQUFDO0lBQzdCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgY2hhcnMgZnJvbSAnLi4vY2hhcnMnO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuLi9tbF9wYXJzZXIvaW50ZXJwb2xhdGlvbl9jb25maWcnO1xuaW1wb3J0IHtlc2NhcGVSZWdFeHB9IGZyb20gJy4uL3V0aWwnO1xuXG5pbXBvcnQge0Fic29sdXRlU291cmNlU3BhbiwgQVNULCBBc3RWaXNpdG9yLCBBU1RXaXRoU291cmNlLCBCaW5hcnksIEJpbmRpbmdQaXBlLCBDaGFpbiwgQ29uZGl0aW9uYWwsIEVtcHR5RXhwciwgRXhwcmVzc2lvbkJpbmRpbmcsIEZ1bmN0aW9uQ2FsbCwgSW1wbGljaXRSZWNlaXZlciwgSW50ZXJwb2xhdGlvbiwgS2V5ZWRSZWFkLCBLZXllZFdyaXRlLCBMaXRlcmFsQXJyYXksIExpdGVyYWxNYXAsIExpdGVyYWxNYXBLZXksIExpdGVyYWxQcmltaXRpdmUsIE1ldGhvZENhbGwsIE5vbk51bGxBc3NlcnQsIFBhcnNlckVycm9yLCBQYXJzZVNwYW4sIFByZWZpeE5vdCwgUHJvcGVydHlSZWFkLCBQcm9wZXJ0eVdyaXRlLCBRdW90ZSwgU2FmZU1ldGhvZENhbGwsIFNhZmVQcm9wZXJ0eVJlYWQsIFRlbXBsYXRlQmluZGluZywgVGVtcGxhdGVCaW5kaW5nSWRlbnRpZmllciwgVmFyaWFibGVCaW5kaW5nfSBmcm9tICcuL2FzdCc7XG5pbXBvcnQge0VPRiwgaXNJZGVudGlmaWVyLCBpc1F1b3RlLCBMZXhlciwgVG9rZW4sIFRva2VuVHlwZX0gZnJvbSAnLi9sZXhlcic7XG5cbmV4cG9ydCBjbGFzcyBTcGxpdEludGVycG9sYXRpb24ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RyaW5nczogc3RyaW5nW10sIHB1YmxpYyBleHByZXNzaW9uczogc3RyaW5nW10sIHB1YmxpYyBvZmZzZXRzOiBudW1iZXJbXSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgdGVtcGxhdGVCaW5kaW5nczogVGVtcGxhdGVCaW5kaW5nW10sIHB1YmxpYyB3YXJuaW5nczogc3RyaW5nW10sXG4gICAgICBwdWJsaWMgZXJyb3JzOiBQYXJzZXJFcnJvcltdKSB7fVxufVxuXG5jb25zdCBkZWZhdWx0SW50ZXJwb2xhdGVSZWdFeHAgPSBfY3JlYXRlSW50ZXJwb2xhdGVSZWdFeHAoREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRyk7XG5mdW5jdGlvbiBfZ2V0SW50ZXJwb2xhdGVSZWdFeHAoY29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnKTogUmVnRXhwIHtcbiAgaWYgKGNvbmZpZyA9PT0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRykge1xuICAgIHJldHVybiBkZWZhdWx0SW50ZXJwb2xhdGVSZWdFeHA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9jcmVhdGVJbnRlcnBvbGF0ZVJlZ0V4cChjb25maWcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVJbnRlcnBvbGF0ZVJlZ0V4cChjb25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBSZWdFeHAge1xuICBjb25zdCBwYXR0ZXJuID0gZXNjYXBlUmVnRXhwKGNvbmZpZy5zdGFydCkgKyAnKFtcXFxcc1xcXFxTXSo/KScgKyBlc2NhcGVSZWdFeHAoY29uZmlnLmVuZCk7XG4gIHJldHVybiBuZXcgUmVnRXhwKHBhdHRlcm4sICdnJyk7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xuICBwcml2YXRlIGVycm9yczogUGFyc2VyRXJyb3JbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xleGVyOiBMZXhlcikge31cblxuICBzaW1wbGVFeHByZXNzaW9uQ2hlY2tlciA9IFNpbXBsZUV4cHJlc3Npb25DaGVja2VyO1xuXG4gIHBhcnNlQWN0aW9uKFxuICAgICAgaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IGFueSwgYWJzb2x1dGVPZmZzZXQ6IG51bWJlcixcbiAgICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcgPSBERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHKTogQVNUV2l0aFNvdXJjZSB7XG4gICAgdGhpcy5fY2hlY2tOb0ludGVycG9sYXRpb24oaW5wdXQsIGxvY2F0aW9uLCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBzb3VyY2VUb0xleCA9IHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpO1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMuX2xleGVyLnRva2VuaXplKHRoaXMuX3N0cmlwQ29tbWVudHMoaW5wdXQpKTtcbiAgICBjb25zdCBhc3QgPSBuZXcgX1BhcnNlQVNUKFxuICAgICAgICAgICAgICAgICAgICBpbnB1dCwgbG9jYXRpb24sIGFic29sdXRlT2Zmc2V0LCB0b2tlbnMsIHNvdXJjZVRvTGV4Lmxlbmd0aCwgdHJ1ZSwgdGhpcy5lcnJvcnMsXG4gICAgICAgICAgICAgICAgICAgIGlucHV0Lmxlbmd0aCAtIHNvdXJjZVRvTGV4Lmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgLnBhcnNlQ2hhaW4oKTtcbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBpbnB1dCwgbG9jYXRpb24sIGFic29sdXRlT2Zmc2V0LCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBwYXJzZUJpbmRpbmcoXG4gICAgICBpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogYW55LCBhYnNvbHV0ZU9mZnNldDogbnVtYmVyLFxuICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcpOiBBU1RXaXRoU291cmNlIHtcbiAgICBjb25zdCBhc3QgPSB0aGlzLl9wYXJzZUJpbmRpbmdBc3QoaW5wdXQsIGxvY2F0aW9uLCBhYnNvbHV0ZU9mZnNldCwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKGFzdCwgaW5wdXQsIGxvY2F0aW9uLCBhYnNvbHV0ZU9mZnNldCwgdGhpcy5lcnJvcnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1NpbXBsZUV4cHJlc3Npb24oYXN0OiBBU1QpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2hlY2tlciA9IG5ldyB0aGlzLnNpbXBsZUV4cHJlc3Npb25DaGVja2VyKCk7XG4gICAgYXN0LnZpc2l0KGNoZWNrZXIpO1xuICAgIHJldHVybiBjaGVja2VyLmVycm9ycztcbiAgfVxuXG4gIHBhcnNlU2ltcGxlQmluZGluZyhcbiAgICAgIGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBzdHJpbmcsIGFic29sdXRlT2Zmc2V0OiBudW1iZXIsXG4gICAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRyk6IEFTVFdpdGhTb3VyY2Uge1xuICAgIGNvbnN0IGFzdCA9IHRoaXMuX3BhcnNlQmluZGluZ0FzdChpbnB1dCwgbG9jYXRpb24sIGFic29sdXRlT2Zmc2V0LCBpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBlcnJvcnMgPSB0aGlzLmNoZWNrU2ltcGxlRXhwcmVzc2lvbihhc3QpO1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgYEhvc3QgYmluZGluZyBleHByZXNzaW9uIGNhbm5vdCBjb250YWluICR7ZXJyb3JzLmpvaW4oJyAnKX1gLCBpbnB1dCwgbG9jYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCBpbnB1dCwgbG9jYXRpb24sIGFic29sdXRlT2Zmc2V0LCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIF9yZXBvcnRFcnJvcihtZXNzYWdlOiBzdHJpbmcsIGlucHV0OiBzdHJpbmcsIGVyckxvY2F0aW9uOiBzdHJpbmcsIGN0eExvY2F0aW9uPzogYW55KSB7XG4gICAgdGhpcy5lcnJvcnMucHVzaChuZXcgUGFyc2VyRXJyb3IobWVzc2FnZSwgaW5wdXQsIGVyckxvY2F0aW9uLCBjdHhMb2NhdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VCaW5kaW5nQXN0KFxuICAgICAgaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IHN0cmluZywgYWJzb2x1dGVPZmZzZXQ6IG51bWJlcixcbiAgICAgIGludGVycG9sYXRpb25Db25maWc6IEludGVycG9sYXRpb25Db25maWcpOiBBU1Qge1xuICAgIC8vIFF1b3RlcyBleHByZXNzaW9ucyB1c2UgM3JkLXBhcnR5IGV4cHJlc3Npb24gbGFuZ3VhZ2UuIFdlIGRvbid0IHdhbnQgdG8gdXNlXG4gICAgLy8gb3VyIGxleGVyIG9yIHBhcnNlciBmb3IgdGhhdCwgc28gd2UgY2hlY2sgZm9yIHRoYXQgYWhlYWQgb2YgdGltZS5cbiAgICBjb25zdCBxdW90ZSA9IHRoaXMuX3BhcnNlUXVvdGUoaW5wdXQsIGxvY2F0aW9uLCBhYnNvbHV0ZU9mZnNldCk7XG5cbiAgICBpZiAocXVvdGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHF1b3RlO1xuICAgIH1cblxuICAgIHRoaXMuX2NoZWNrTm9JbnRlcnBvbGF0aW9uKGlucHV0LCBsb2NhdGlvbiwgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3Qgc291cmNlVG9MZXggPSB0aGlzLl9zdHJpcENvbW1lbnRzKGlucHV0KTtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShzb3VyY2VUb0xleCk7XG4gICAgcmV0dXJuIG5ldyBfUGFyc2VBU1QoXG4gICAgICAgICAgICAgICBpbnB1dCwgbG9jYXRpb24sIGFic29sdXRlT2Zmc2V0LCB0b2tlbnMsIHNvdXJjZVRvTGV4Lmxlbmd0aCwgZmFsc2UsIHRoaXMuZXJyb3JzLFxuICAgICAgICAgICAgICAgaW5wdXQubGVuZ3RoIC0gc291cmNlVG9MZXgubGVuZ3RoKVxuICAgICAgICAucGFyc2VDaGFpbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcGFyc2VRdW90ZShpbnB1dDogc3RyaW5nfG51bGwsIGxvY2F0aW9uOiBhbnksIGFic29sdXRlT2Zmc2V0OiBudW1iZXIpOiBBU1R8bnVsbCB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHByZWZpeFNlcGFyYXRvckluZGV4ID0gaW5wdXQuaW5kZXhPZignOicpO1xuICAgIGlmIChwcmVmaXhTZXBhcmF0b3JJbmRleCA9PSAtMSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcHJlZml4ID0gaW5wdXQuc3Vic3RyaW5nKDAsIHByZWZpeFNlcGFyYXRvckluZGV4KS50cmltKCk7XG4gICAgaWYgKCFpc0lkZW50aWZpZXIocHJlZml4KSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgdW5pbnRlcnByZXRlZEV4cHJlc3Npb24gPSBpbnB1dC5zdWJzdHJpbmcocHJlZml4U2VwYXJhdG9ySW5kZXggKyAxKTtcbiAgICBjb25zdCBzcGFuID0gbmV3IFBhcnNlU3BhbigwLCBpbnB1dC5sZW5ndGgpO1xuICAgIHJldHVybiBuZXcgUXVvdGUoXG4gICAgICAgIHNwYW4sIHNwYW4udG9BYnNvbHV0ZShhYnNvbHV0ZU9mZnNldCksIHByZWZpeCwgdW5pbnRlcnByZXRlZEV4cHJlc3Npb24sIGxvY2F0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBtaWNyb3N5bnRheCB0ZW1wbGF0ZSBleHByZXNzaW9uIGFuZCByZXR1cm4gYSBsaXN0IG9mIGJpbmRpbmdzIG9yXG4gICAqIHBhcnNpbmcgZXJyb3JzIGluIGNhc2UgdGhlIGdpdmVuIGV4cHJlc3Npb24gaXMgaW52YWxpZC5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsXG4gICAqIGBgYFxuICAgKiAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIj5cbiAgICogICAgICAgICBeICAgICAgXiBhYnNvbHV0ZVZhbHVlT2Zmc2V0IGZvciBgdGVtcGxhdGVWYWx1ZWBcbiAgICogICAgICAgICBhYnNvbHV0ZUtleU9mZnNldCBmb3IgYHRlbXBsYXRlS2V5YFxuICAgKiBgYGBcbiAgICogY29udGFpbnMgdGhyZWUgYmluZGluZ3M6XG4gICAqIDEuIG5nRm9yIC0+IG51bGxcbiAgICogMi4gaXRlbSAtPiBOZ0Zvck9mQ29udGV4dC4kaW1wbGljaXRcbiAgICogMy4gbmdGb3JPZiAtPiBpdGVtc1xuICAgKlxuICAgKiBUaGlzIGlzIGFwcGFyZW50IGZyb20gdGhlIGRlLXN1Z2FyZWQgdGVtcGxhdGU6XG4gICAqIGBgYFxuICAgKiAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBbbmdGb3JPZl09XCJpdGVtc1wiPlxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHRlbXBsYXRlS2V5IG5hbWUgb2YgZGlyZWN0aXZlLCB3aXRob3V0IHRoZSAqIHByZWZpeC4gRm9yIGV4YW1wbGU6IG5nSWYsIG5nRm9yXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVZhbHVlIFJIUyBvZiB0aGUgbWljcm9zeW50YXggYXR0cmlidXRlXG4gICAqIEBwYXJhbSB0ZW1wbGF0ZVVybCB0ZW1wbGF0ZSBmaWxlbmFtZSBpZiBpdCdzIGV4dGVybmFsLCBjb21wb25lbnQgZmlsZW5hbWUgaWYgaXQncyBpbmxpbmVcbiAgICogQHBhcmFtIGFic29sdXRlS2V5T2Zmc2V0IHN0YXJ0IG9mIHRoZSBgdGVtcGxhdGVLZXlgXG4gICAqIEBwYXJhbSBhYnNvbHV0ZVZhbHVlT2Zmc2V0IHN0YXJ0IG9mIHRoZSBgdGVtcGxhdGVWYWx1ZWBcbiAgICovXG4gIHBhcnNlVGVtcGxhdGVCaW5kaW5ncyhcbiAgICAgIHRlbXBsYXRlS2V5OiBzdHJpbmcsIHRlbXBsYXRlVmFsdWU6IHN0cmluZywgdGVtcGxhdGVVcmw6IHN0cmluZywgYWJzb2x1dGVLZXlPZmZzZXQ6IG51bWJlcixcbiAgICAgIGFic29sdXRlVmFsdWVPZmZzZXQ6IG51bWJlcik6IFRlbXBsYXRlQmluZGluZ1BhcnNlUmVzdWx0IHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZSh0ZW1wbGF0ZVZhbHVlKTtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgX1BhcnNlQVNUKFxuICAgICAgICB0ZW1wbGF0ZVZhbHVlLCB0ZW1wbGF0ZVVybCwgYWJzb2x1dGVWYWx1ZU9mZnNldCwgdG9rZW5zLCB0ZW1wbGF0ZVZhbHVlLmxlbmd0aCxcbiAgICAgICAgZmFsc2UgLyogcGFyc2VBY3Rpb24gKi8sIHRoaXMuZXJyb3JzLCAwIC8qIHJlbGF0aXZlIG9mZnNldCAqLyk7XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZVRlbXBsYXRlQmluZGluZ3Moe1xuICAgICAgc291cmNlOiB0ZW1wbGF0ZUtleSxcbiAgICAgIHNwYW46IG5ldyBBYnNvbHV0ZVNvdXJjZVNwYW4oYWJzb2x1dGVLZXlPZmZzZXQsIGFic29sdXRlS2V5T2Zmc2V0ICsgdGVtcGxhdGVLZXkubGVuZ3RoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHBhcnNlSW50ZXJwb2xhdGlvbihcbiAgICAgIGlucHV0OiBzdHJpbmcsIGxvY2F0aW9uOiBhbnksIGFic29sdXRlT2Zmc2V0OiBudW1iZXIsXG4gICAgICBpbnRlcnBvbGF0aW9uQ29uZmlnOiBJbnRlcnBvbGF0aW9uQ29uZmlnID0gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRyk6IEFTVFdpdGhTb3VyY2V8bnVsbCB7XG4gICAgY29uc3Qgc3BsaXQgPSB0aGlzLnNwbGl0SW50ZXJwb2xhdGlvbihpbnB1dCwgbG9jYXRpb24sIGludGVycG9sYXRpb25Db25maWcpO1xuICAgIGlmIChzcGxpdCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25zOiBBU1RbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGxpdC5leHByZXNzaW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgZXhwcmVzc2lvblRleHQgPSBzcGxpdC5leHByZXNzaW9uc1tpXTtcbiAgICAgIGNvbnN0IHNvdXJjZVRvTGV4ID0gdGhpcy5fc3RyaXBDb21tZW50cyhleHByZXNzaW9uVGV4dCk7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLl9sZXhlci50b2tlbml6ZShzb3VyY2VUb0xleCk7XG4gICAgICBjb25zdCBhc3QgPSBuZXcgX1BhcnNlQVNUKFxuICAgICAgICAgICAgICAgICAgICAgIGlucHV0LCBsb2NhdGlvbiwgYWJzb2x1dGVPZmZzZXQsIHRva2Vucywgc291cmNlVG9MZXgubGVuZ3RoLCBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycywgc3BsaXQub2Zmc2V0c1tpXSArIChleHByZXNzaW9uVGV4dC5sZW5ndGggLSBzb3VyY2VUb0xleC5sZW5ndGgpKVxuICAgICAgICAgICAgICAgICAgICAgIC5wYXJzZUNoYWluKCk7XG4gICAgICBleHByZXNzaW9ucy5wdXNoKGFzdCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3BhbiA9IG5ldyBQYXJzZVNwYW4oMCwgaW5wdXQgPT0gbnVsbCA/IDAgOiBpbnB1dC5sZW5ndGgpO1xuICAgIHJldHVybiBuZXcgQVNUV2l0aFNvdXJjZShcbiAgICAgICAgbmV3IEludGVycG9sYXRpb24oc3Bhbiwgc3Bhbi50b0Fic29sdXRlKGFic29sdXRlT2Zmc2V0KSwgc3BsaXQuc3RyaW5ncywgZXhwcmVzc2lvbnMpLCBpbnB1dCxcbiAgICAgICAgbG9jYXRpb24sIGFic29sdXRlT2Zmc2V0LCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICBzcGxpdEludGVycG9sYXRpb24oXG4gICAgICBpbnB1dDogc3RyaW5nLCBsb2NhdGlvbjogc3RyaW5nLFxuICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcpOiBTcGxpdEludGVycG9sYXRpb25cbiAgICAgIHxudWxsIHtcbiAgICBjb25zdCByZWdleHAgPSBfZ2V0SW50ZXJwb2xhdGVSZWdFeHAoaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zcGxpdChyZWdleHApO1xuICAgIGlmIChwYXJ0cy5sZW5ndGggPD0gMSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHN0cmluZ3M6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZXhwcmVzc2lvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3Qgb2Zmc2V0czogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBwYXJ0OiBzdHJpbmcgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgICAvLyBmaXhlZCBzdHJpbmdcbiAgICAgICAgc3RyaW5ncy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXQgKz0gcGFydC5sZW5ndGg7XG4gICAgICB9IGVsc2UgaWYgKHBhcnQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2Zmc2V0ICs9IGludGVycG9sYXRpb25Db25maWcuc3RhcnQubGVuZ3RoO1xuICAgICAgICBleHByZXNzaW9ucy5wdXNoKHBhcnQpO1xuICAgICAgICBvZmZzZXRzLnB1c2gob2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IHBhcnQubGVuZ3RoICsgaW50ZXJwb2xhdGlvbkNvbmZpZy5lbmQubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVwb3J0RXJyb3IoXG4gICAgICAgICAgICAnQmxhbmsgZXhwcmVzc2lvbnMgYXJlIG5vdCBhbGxvd2VkIGluIGludGVycG9sYXRlZCBzdHJpbmdzJywgaW5wdXQsXG4gICAgICAgICAgICBgYXQgY29sdW1uICR7dGhpcy5fZmluZEludGVycG9sYXRpb25FcnJvckNvbHVtbihwYXJ0cywgaSwgaW50ZXJwb2xhdGlvbkNvbmZpZyl9IGluYCxcbiAgICAgICAgICAgIGxvY2F0aW9uKTtcbiAgICAgICAgZXhwcmVzc2lvbnMucHVzaCgnJGltcGxpY2l0Jyk7XG4gICAgICAgIG9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFNwbGl0SW50ZXJwb2xhdGlvbihzdHJpbmdzLCBleHByZXNzaW9ucywgb2Zmc2V0cyk7XG4gIH1cblxuICB3cmFwTGl0ZXJhbFByaW1pdGl2ZShpbnB1dDogc3RyaW5nfG51bGwsIGxvY2F0aW9uOiBhbnksIGFic29sdXRlT2Zmc2V0OiBudW1iZXIpOiBBU1RXaXRoU291cmNlIHtcbiAgICBjb25zdCBzcGFuID0gbmV3IFBhcnNlU3BhbigwLCBpbnB1dCA9PSBudWxsID8gMCA6IGlucHV0Lmxlbmd0aCk7XG4gICAgcmV0dXJuIG5ldyBBU1RXaXRoU291cmNlKFxuICAgICAgICBuZXcgTGl0ZXJhbFByaW1pdGl2ZShzcGFuLCBzcGFuLnRvQWJzb2x1dGUoYWJzb2x1dGVPZmZzZXQpLCBpbnB1dCksIGlucHV0LCBsb2NhdGlvbixcbiAgICAgICAgYWJzb2x1dGVPZmZzZXQsIHRoaXMuZXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0cmlwQ29tbWVudHMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgaSA9IHRoaXMuX2NvbW1lbnRTdGFydChpbnB1dCk7XG4gICAgcmV0dXJuIGkgIT0gbnVsbCA/IGlucHV0LnN1YnN0cmluZygwLCBpKS50cmltKCkgOiBpbnB1dDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbW1lbnRTdGFydChpbnB1dDogc3RyaW5nKTogbnVtYmVyfG51bGwge1xuICAgIGxldCBvdXRlclF1b3RlOiBudW1iZXJ8bnVsbCA9IG51bGw7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGNoYXIgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgICAgY29uc3QgbmV4dENoYXIgPSBpbnB1dC5jaGFyQ29kZUF0KGkgKyAxKTtcblxuICAgICAgaWYgKGNoYXIgPT09IGNoYXJzLiRTTEFTSCAmJiBuZXh0Q2hhciA9PSBjaGFycy4kU0xBU0ggJiYgb3V0ZXJRdW90ZSA9PSBudWxsKSByZXR1cm4gaTtcblxuICAgICAgaWYgKG91dGVyUXVvdGUgPT09IGNoYXIpIHtcbiAgICAgICAgb3V0ZXJRdW90ZSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKG91dGVyUXVvdGUgPT0gbnVsbCAmJiBpc1F1b3RlKGNoYXIpKSB7XG4gICAgICAgIG91dGVyUXVvdGUgPSBjaGFyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrTm9JbnRlcnBvbGF0aW9uKFxuICAgICAgaW5wdXQ6IHN0cmluZywgbG9jYXRpb246IGFueSwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IHJlZ2V4cCA9IF9nZXRJbnRlcnBvbGF0ZVJlZ0V4cChpbnRlcnBvbGF0aW9uQ29uZmlnKTtcbiAgICBjb25zdCBwYXJ0cyA9IGlucHV0LnNwbGl0KHJlZ2V4cCk7XG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuX3JlcG9ydEVycm9yKFxuICAgICAgICAgIGBHb3QgaW50ZXJwb2xhdGlvbiAoJHtpbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0fSR7XG4gICAgICAgICAgICAgIGludGVycG9sYXRpb25Db25maWcuZW5kfSkgd2hlcmUgZXhwcmVzc2lvbiB3YXMgZXhwZWN0ZWRgLFxuICAgICAgICAgIGlucHV0LFxuICAgICAgICAgIGBhdCBjb2x1bW4gJHt0aGlzLl9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKHBhcnRzLCAxLCBpbnRlcnBvbGF0aW9uQ29uZmlnKX0gaW5gLFxuICAgICAgICAgIGxvY2F0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9maW5kSW50ZXJwb2xhdGlvbkVycm9yQ29sdW1uKFxuICAgICAgcGFydHM6IHN0cmluZ1tdLCBwYXJ0SW5FcnJJZHg6IG51bWJlciwgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyk6IG51bWJlciB7XG4gICAgbGV0IGVyckxvY2F0aW9uID0gJyc7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwYXJ0SW5FcnJJZHg7IGorKykge1xuICAgICAgZXJyTG9jYXRpb24gKz0gaiAlIDIgPT09IDAgP1xuICAgICAgICAgIHBhcnRzW2pdIDpcbiAgICAgICAgICBgJHtpbnRlcnBvbGF0aW9uQ29uZmlnLnN0YXJ0fSR7cGFydHNbal19JHtpbnRlcnBvbGF0aW9uQ29uZmlnLmVuZH1gO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJMb2NhdGlvbi5sZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEl2eVBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIHNpbXBsZUV4cHJlc3Npb25DaGVja2VyID0gSXZ5U2ltcGxlRXhwcmVzc2lvbkNoZWNrZXI7ICAvL1xufVxuXG5leHBvcnQgY2xhc3MgX1BhcnNlQVNUIHtcbiAgcHJpdmF0ZSBycGFyZW5zRXhwZWN0ZWQgPSAwO1xuICBwcml2YXRlIHJicmFja2V0c0V4cGVjdGVkID0gMDtcbiAgcHJpdmF0ZSByYnJhY2VzRXhwZWN0ZWQgPSAwO1xuXG4gIC8vIENhY2hlIG9mIGV4cHJlc3Npb24gc3RhcnQgYW5kIGlucHV0IGluZGVjZXMgdG8gdGhlIGFic29sdXRlIHNvdXJjZSBzcGFuIHRoZXkgbWFwIHRvLCB1c2VkIHRvXG4gIC8vIHByZXZlbnQgY3JlYXRpbmcgc3VwZXJmbHVvdXMgc291cmNlIHNwYW5zIGluIGBzb3VyY2VTcGFuYC5cbiAgLy8gQSBzZXJpYWwgb2YgdGhlIGV4cHJlc3Npb24gc3RhcnQgYW5kIGlucHV0IGluZGV4IGlzIHVzZWQgZm9yIG1hcHBpbmcgYmVjYXVzZSBib3RoIGFyZSBzdGF0ZWZ1bFxuICAvLyBhbmQgbWF5IGNoYW5nZSBmb3Igc3Vic2VxdWVudCBleHByZXNzaW9ucyB2aXNpdGVkIGJ5IHRoZSBwYXJzZXIuXG4gIHByaXZhdGUgc291cmNlU3BhbkNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIEFic29sdXRlU291cmNlU3Bhbj4oKTtcblxuICBpbmRleDogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBpbnB1dDogc3RyaW5nLCBwdWJsaWMgbG9jYXRpb246IGFueSwgcHVibGljIGFic29sdXRlT2Zmc2V0OiBudW1iZXIsXG4gICAgICBwdWJsaWMgdG9rZW5zOiBUb2tlbltdLCBwdWJsaWMgaW5wdXRMZW5ndGg6IG51bWJlciwgcHVibGljIHBhcnNlQWN0aW9uOiBib29sZWFuLFxuICAgICAgcHJpdmF0ZSBlcnJvcnM6IFBhcnNlckVycm9yW10sIHByaXZhdGUgb2Zmc2V0OiBudW1iZXIpIHt9XG5cbiAgcGVlayhvZmZzZXQ6IG51bWJlcik6IFRva2VuIHtcbiAgICBjb25zdCBpID0gdGhpcy5pbmRleCArIG9mZnNldDtcbiAgICByZXR1cm4gaSA8IHRoaXMudG9rZW5zLmxlbmd0aCA/IHRoaXMudG9rZW5zW2ldIDogRU9GO1xuICB9XG5cbiAgZ2V0IG5leHQoKTogVG9rZW4ge1xuICAgIHJldHVybiB0aGlzLnBlZWsoMCk7XG4gIH1cblxuICAvKiogV2hldGhlciBhbGwgdGhlIHBhcnNlciBpbnB1dCBoYXMgYmVlbiBwcm9jZXNzZWQuICovXG4gIGdldCBhdEVPRigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleCA+PSB0aGlzLnRva2Vucy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogSW5kZXggb2YgdGhlIG5leHQgdG9rZW4gdG8gYmUgcHJvY2Vzc2VkLCBvciB0aGUgZW5kIG9mIHRoZSBsYXN0IHRva2VuIGlmIGFsbCBoYXZlIGJlZW5cbiAgICogcHJvY2Vzc2VkLlxuICAgKi9cbiAgZ2V0IGlucHV0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hdEVPRiA/IHRoaXMuY3VycmVudEVuZEluZGV4IDogdGhpcy5uZXh0LmluZGV4ICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogRW5kIGluZGV4IG9mIHRoZSBsYXN0IHByb2Nlc3NlZCB0b2tlbiwgb3IgdGhlIHN0YXJ0IG9mIHRoZSBmaXJzdCB0b2tlbiBpZiBub25lIGhhdmUgYmVlblxuICAgKiBwcm9jZXNzZWQuXG4gICAqL1xuICBnZXQgY3VycmVudEVuZEluZGV4KCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuaW5kZXggPiAwKSB7XG4gICAgICBjb25zdCBjdXJUb2tlbiA9IHRoaXMucGVlaygtMSk7XG4gICAgICByZXR1cm4gY3VyVG9rZW4uZW5kICsgdGhpcy5vZmZzZXQ7XG4gICAgfVxuICAgIC8vIE5vIHRva2VucyBoYXZlIGJlZW4gcHJvY2Vzc2VkIHlldDsgcmV0dXJuIHRoZSBuZXh0IHRva2VuJ3Mgc3RhcnQgb3IgdGhlIGxlbmd0aCBvZiB0aGUgaW5wdXRcbiAgICAvLyBpZiB0aGVyZSBpcyBubyB0b2tlbi5cbiAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dExlbmd0aCArIHRoaXMub2Zmc2V0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZXh0LmluZGV4ICsgdGhpcy5vZmZzZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWJzb2x1dGUgb2Zmc2V0IG9mIHRoZSBzdGFydCBvZiB0aGUgY3VycmVudCB0b2tlbi5cbiAgICovXG4gIGdldCBjdXJyZW50QWJzb2x1dGVPZmZzZXQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hYnNvbHV0ZU9mZnNldCArIHRoaXMuaW5wdXRJbmRleDtcbiAgfVxuXG4gIHNwYW4oc3RhcnQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUGFyc2VTcGFuKHN0YXJ0LCB0aGlzLmN1cnJlbnRFbmRJbmRleCk7XG4gIH1cblxuICBzb3VyY2VTcGFuKHN0YXJ0OiBudW1iZXIpOiBBYnNvbHV0ZVNvdXJjZVNwYW4ge1xuICAgIGNvbnN0IHNlcmlhbCA9IGAke3N0YXJ0fUAke3RoaXMuaW5wdXRJbmRleH1gO1xuICAgIGlmICghdGhpcy5zb3VyY2VTcGFuQ2FjaGUuaGFzKHNlcmlhbCkpIHtcbiAgICAgIHRoaXMuc291cmNlU3BhbkNhY2hlLnNldChzZXJpYWwsIHRoaXMuc3BhbihzdGFydCkudG9BYnNvbHV0ZSh0aGlzLmFic29sdXRlT2Zmc2V0KSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNvdXJjZVNwYW5DYWNoZS5nZXQoc2VyaWFsKSE7XG4gIH1cblxuICBhZHZhbmNlKCkge1xuICAgIHRoaXMuaW5kZXgrKztcbiAgfVxuXG4gIGNvbnN1bWVPcHRpb25hbENoYXJhY3Rlcihjb2RlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzQ2hhcmFjdGVyKGNvZGUpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcGVla0tleXdvcmRMZXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV4dC5pc0tleXdvcmRMZXQoKTtcbiAgfVxuICBwZWVrS2V5d29yZEFzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5leHQuaXNLZXl3b3JkQXMoKTtcbiAgfVxuXG4gIGV4cGVjdENoYXJhY3Rlcihjb2RlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoY29kZSkpIHJldHVybjtcbiAgICB0aGlzLmVycm9yKGBNaXNzaW5nIGV4cGVjdGVkICR7U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKX1gKTtcbiAgfVxuXG4gIGNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKG9wOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzT3BlcmF0b3Iob3ApKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZXhwZWN0T3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKG9wZXJhdG9yKSkgcmV0dXJuO1xuICAgIHRoaXMuZXJyb3IoYE1pc3NpbmcgZXhwZWN0ZWQgb3BlcmF0b3IgJHtvcGVyYXRvcn1gKTtcbiAgfVxuXG4gIGV4cGVjdElkZW50aWZpZXJPcktleXdvcmQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBuID0gdGhpcy5uZXh0O1xuICAgIGlmICghbi5pc0lkZW50aWZpZXIoKSAmJiAhbi5pc0tleXdvcmQoKSkge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAke259LCBleHBlY3RlZCBpZGVudGlmaWVyIG9yIGtleXdvcmRgKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgcmV0dXJuIG4udG9TdHJpbmcoKSBhcyBzdHJpbmc7XG4gIH1cblxuICBleHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkT3JTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBuID0gdGhpcy5uZXh0O1xuICAgIGlmICghbi5pc0lkZW50aWZpZXIoKSAmJiAhbi5pc0tleXdvcmQoKSAmJiAhbi5pc1N0cmluZygpKSB7XG4gICAgICB0aGlzLmVycm9yKGBVbmV4cGVjdGVkIHRva2VuICR7bn0sIGV4cGVjdGVkIGlkZW50aWZpZXIsIGtleXdvcmQsIG9yIHN0cmluZ2ApO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICByZXR1cm4gbi50b1N0cmluZygpIGFzIHN0cmluZztcbiAgfVxuXG4gIHBhcnNlQ2hhaW4oKTogQVNUIHtcbiAgICBjb25zdCBleHByczogQVNUW10gPSBbXTtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhwciA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICBleHBycy5wdXNoKGV4cHIpO1xuXG4gICAgICBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJFNFTUlDT0xPTikpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgICAgdGhpcy5lcnJvcignQmluZGluZyBleHByZXNzaW9uIGNhbm5vdCBjb250YWluIGNoYWluZWQgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kU0VNSUNPTE9OKSkge1xuICAgICAgICB9ICAvLyByZWFkIGFsbCBzZW1pY29sb25zXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCB0b2tlbiAnJHt0aGlzLm5leHR9J2ApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXhwcnMubGVuZ3RoID09IDApIHJldHVybiBuZXcgRW1wdHlFeHByKHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCkpO1xuICAgIGlmIChleHBycy5sZW5ndGggPT0gMSkgcmV0dXJuIGV4cHJzWzBdO1xuICAgIHJldHVybiBuZXcgQ2hhaW4odGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSwgZXhwcnMpO1xuICB9XG5cbiAgcGFyc2VQaXBlKCk6IEFTVCB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFeHByZXNzaW9uKCk7XG4gICAgaWYgKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoJ3wnKSkge1xuICAgICAgaWYgKHRoaXMucGFyc2VBY3Rpb24pIHtcbiAgICAgICAgdGhpcy5lcnJvcignQ2Fubm90IGhhdmUgYSBwaXBlIGluIGFuIGFjdGlvbiBleHByZXNzaW9uJyk7XG4gICAgICB9XG5cbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgbmFtZVN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5leHBlY3RJZGVudGlmaWVyT3JLZXl3b3JkKCk7XG4gICAgICAgIGNvbnN0IG5hbWVTcGFuID0gdGhpcy5zb3VyY2VTcGFuKG5hbWVTdGFydCk7XG4gICAgICAgIGNvbnN0IGFyZ3M6IEFTVFtdID0gW107XG4gICAgICAgIHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09MT04pKSB7XG4gICAgICAgICAgYXJncy5wdXNoKHRoaXMucGFyc2VFeHByZXNzaW9uKCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHtzdGFydH0gPSByZXN1bHQuc3BhbjtcbiAgICAgICAgcmVzdWx0ID1cbiAgICAgICAgICAgIG5ldyBCaW5kaW5nUGlwZSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCByZXN1bHQsIG5hbWUsIGFyZ3MsIG5hbWVTcGFuKTtcbiAgICAgIH0gd2hpbGUgKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoJ3wnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXhwcmVzc2lvbigpOiBBU1Qge1xuICAgIHJldHVybiB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgfVxuXG4gIHBhcnNlQ29uZGl0aW9uYWwoKTogQVNUIHtcbiAgICBjb25zdCBzdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBhcnNlTG9naWNhbE9yKCk7XG5cbiAgICBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcignPycpKSB7XG4gICAgICBjb25zdCB5ZXMgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgbGV0IG5vOiBBU1Q7XG4gICAgICBpZiAoIXRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT0xPTikpIHtcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy5pbnB1dEluZGV4O1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5pbnB1dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgIHRoaXMuZXJyb3IoYENvbmRpdGlvbmFsIGV4cHJlc3Npb24gJHtleHByZXNzaW9ufSByZXF1aXJlcyBhbGwgMyBleHByZXNzaW9uc2ApO1xuICAgICAgICBubyA9IG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBubyA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsKHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIHJlc3VsdCwgeWVzLCBubyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VMb2dpY2FsT3IoKTogQVNUIHtcbiAgICAvLyAnfHwnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VMb2dpY2FsQW5kKCk7XG4gICAgd2hpbGUgKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoJ3x8JykpIHtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5wYXJzZUxvZ2ljYWxBbmQoKTtcbiAgICAgIGNvbnN0IHtzdGFydH0gPSByZXN1bHQuc3BhbjtcbiAgICAgIHJlc3VsdCA9IG5ldyBCaW5hcnkodGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSwgJ3x8JywgcmVzdWx0LCByaWdodCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwYXJzZUxvZ2ljYWxBbmQoKTogQVNUIHtcbiAgICAvLyAnJiYnXG4gICAgbGV0IHJlc3VsdCA9IHRoaXMucGFyc2VFcXVhbGl0eSgpO1xuICAgIHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKCcmJicpKSB7XG4gICAgICBjb25zdCByaWdodCA9IHRoaXMucGFyc2VFcXVhbGl0eSgpO1xuICAgICAgY29uc3Qge3N0YXJ0fSA9IHJlc3VsdC5zcGFuO1xuICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCAnJiYnLCByZXN1bHQsIHJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlRXF1YWxpdHkoKTogQVNUIHtcbiAgICAvLyAnPT0nLCchPScsJz09PScsJyE9PSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVJlbGF0aW9uYWwoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICBjYXNlICc9PT0nOlxuICAgICAgICBjYXNlICchPSc6XG4gICAgICAgIGNhc2UgJyE9PSc6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlUmVsYXRpb25hbCgpO1xuICAgICAgICAgIGNvbnN0IHtzdGFydH0gPSByZXN1bHQuc3BhbjtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VSZWxhdGlvbmFsKCk6IEFTVCB7XG4gICAgLy8gJzwnLCAnPicsICc8PScsICc+PSdcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZUFkZGl0aXZlKCk7XG4gICAgd2hpbGUgKHRoaXMubmV4dC50eXBlID09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgb3BlcmF0b3IgPSB0aGlzLm5leHQuc3RyVmFsdWU7XG4gICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnBhcnNlQWRkaXRpdmUoKTtcbiAgICAgICAgICBjb25zdCB7c3RhcnR9ID0gcmVzdWx0LnNwYW47XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlQWRkaXRpdmUoKTogQVNUIHtcbiAgICAvLyAnKycsICctJ1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlTXVsdGlwbGljYXRpdmUoKTtcbiAgICB3aGlsZSAodGhpcy5uZXh0LnR5cGUgPT0gVG9rZW5UeXBlLk9wZXJhdG9yKSB7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGxldCByaWdodCA9IHRoaXMucGFyc2VNdWx0aXBsaWNhdGl2ZSgpO1xuICAgICAgICAgIGNvbnN0IHtzdGFydH0gPSByZXN1bHQuc3BhbjtcbiAgICAgICAgICByZXN1bHQgPSBuZXcgQmluYXJ5KHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIG9wZXJhdG9yLCByZXN1bHQsIHJpZ2h0KTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcGFyc2VNdWx0aXBsaWNhdGl2ZSgpOiBBU1Qge1xuICAgIC8vICcqJywgJyUnLCAnLydcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgIHdoaWxlICh0aGlzLm5leHQudHlwZSA9PSBUb2tlblR5cGUuT3BlcmF0b3IpIHtcbiAgICAgIGNvbnN0IG9wZXJhdG9yID0gdGhpcy5uZXh0LnN0clZhbHVlO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgICAgIGxldCByaWdodCA9IHRoaXMucGFyc2VQcmVmaXgoKTtcbiAgICAgICAgICBjb25zdCB7c3RhcnR9ID0gcmVzdWx0LnNwYW47XG4gICAgICAgICAgcmVzdWx0ID0gbmV3IEJpbmFyeSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCBvcGVyYXRvciwgcmVzdWx0LCByaWdodCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlUHJlZml4KCk6IEFTVCB7XG4gICAgaWYgKHRoaXMubmV4dC50eXBlID09IFRva2VuVHlwZS5PcGVyYXRvcikge1xuICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgICBjb25zdCBvcGVyYXRvciA9IHRoaXMubmV4dC5zdHJWYWx1ZTtcbiAgICAgIGNvbnN0IGxpdGVyYWxTcGFuID0gbmV3IFBhcnNlU3BhbihzdGFydCwgc3RhcnQpO1xuICAgICAgY29uc3QgbGl0ZXJhbFNvdXJjZVNwYW4gPSBsaXRlcmFsU3Bhbi50b0Fic29sdXRlKHRoaXMuYWJzb2x1dGVPZmZzZXQpO1xuICAgICAgbGV0IHJlc3VsdDogQVNUO1xuICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlUHJlZml4KCk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBCaW5hcnkoXG4gICAgICAgICAgICAgIHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksICctJywgcmVzdWx0LFxuICAgICAgICAgICAgICBuZXcgTGl0ZXJhbFByaW1pdGl2ZShsaXRlcmFsU3BhbiwgbGl0ZXJhbFNvdXJjZVNwYW4sIDApKTtcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgQmluYXJ5KFxuICAgICAgICAgICAgICB0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCBvcGVyYXRvcixcbiAgICAgICAgICAgICAgbmV3IExpdGVyYWxQcmltaXRpdmUobGl0ZXJhbFNwYW4sIGxpdGVyYWxTb3VyY2VTcGFuLCAwKSwgcmVzdWx0KTtcbiAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZVByZWZpeCgpO1xuICAgICAgICAgIHJldHVybiBuZXcgUHJlZml4Tm90KHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhcnNlQ2FsbENoYWluKCk7XG4gIH1cblxuICBwYXJzZUNhbGxDaGFpbigpOiBBU1Qge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnBhcnNlUHJpbWFyeSgpO1xuICAgIGNvbnN0IHJlc3VsdFN0YXJ0ID0gcmVzdWx0LnNwYW4uc3RhcnQ7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kUEVSSU9EKSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKHJlc3VsdCwgZmFsc2UpO1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoJz8uJykpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5wYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChyZXN1bHQsIHRydWUpO1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgICAgdGhpcy5yYnJhY2tldHNFeHBlY3RlZCsrO1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcnNlUGlwZSgpO1xuICAgICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkLS07XG4gICAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKCc9JykpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VDb25kaXRpb25hbCgpO1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBLZXllZFdyaXRlKFxuICAgICAgICAgICAgICB0aGlzLnNwYW4ocmVzdWx0U3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4ocmVzdWx0U3RhcnQpLCByZXN1bHQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdCA9IG5ldyBLZXllZFJlYWQodGhpcy5zcGFuKHJlc3VsdFN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHJlc3VsdFN0YXJ0KSwgcmVzdWx0LCBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgICAgY29uc3QgYXJncyA9IHRoaXMucGFyc2VDYWxsQXJndW1lbnRzKCk7XG4gICAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkLS07XG4gICAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgICByZXN1bHQgPVxuICAgICAgICAgICAgbmV3IEZ1bmN0aW9uQ2FsbCh0aGlzLnNwYW4ocmVzdWx0U3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4ocmVzdWx0U3RhcnQpLCByZXN1bHQsIGFyZ3MpO1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uc3VtZU9wdGlvbmFsT3BlcmF0b3IoJyEnKSkge1xuICAgICAgICByZXN1bHQgPSBuZXcgTm9uTnVsbEFzc2VydCh0aGlzLnNwYW4ocmVzdWx0U3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4ocmVzdWx0U3RhcnQpLCByZXN1bHQpO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlUHJpbWFyeSgpOiBBU1Qge1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5pbnB1dEluZGV4O1xuICAgIGlmICh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kTFBBUkVOKSkge1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucGFyc2VQaXBlKCk7XG4gICAgICB0aGlzLnJwYXJlbnNFeHBlY3RlZC0tO1xuICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJFJQQVJFTik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkTnVsbCgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCBudWxsKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFVuZGVmaW5lZCgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCB2b2lkIDApO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNLZXl3b3JkVHJ1ZSgpKSB7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCB0cnVlKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZEZhbHNlKCkpIHtcbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsUHJpbWl0aXZlKHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIGZhbHNlKTtcblxuICAgIH0gZWxzZSBpZiAodGhpcy5uZXh0LmlzS2V5d29yZFRoaXMoKSkge1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IEltcGxpY2l0UmVjZWl2ZXIodGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRMQlJBQ0tFVCkpIHtcbiAgICAgIHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQrKztcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5wYXJzZUV4cHJlc3Npb25MaXN0KGNoYXJzLiRSQlJBQ0tFVCk7XG4gICAgICB0aGlzLnJicmFja2V0c0V4cGVjdGVkLS07XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpO1xuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsQXJyYXkodGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSwgZWxlbWVudHMpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlTGl0ZXJhbE1hcCgpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNJZGVudGlmaWVyKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlQWNjZXNzTWVtYmVyT3JNZXRob2RDYWxsKFxuICAgICAgICAgIG5ldyBJbXBsaWNpdFJlY2VpdmVyKHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCkpLCBmYWxzZSk7XG5cbiAgICB9IGVsc2UgaWYgKHRoaXMubmV4dC5pc051bWJlcigpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubmV4dC50b051bWJlcigpO1xuICAgICAgdGhpcy5hZHZhbmNlKCk7XG4gICAgICByZXR1cm4gbmV3IExpdGVyYWxQcmltaXRpdmUodGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSwgdmFsdWUpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLm5leHQuaXNTdHJpbmcoKSkge1xuICAgICAgY29uc3QgbGl0ZXJhbFZhbHVlID0gdGhpcy5uZXh0LnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmFkdmFuY2UoKTtcbiAgICAgIHJldHVybiBuZXcgTGl0ZXJhbFByaW1pdGl2ZSh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCBsaXRlcmFsVmFsdWUpO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID49IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgdGhpcy5lcnJvcihgVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJHt0aGlzLmlucHV0fWApO1xuICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IoYFVuZXhwZWN0ZWQgdG9rZW4gJHt0aGlzLm5leHR9YCk7XG4gICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpKTtcbiAgICB9XG4gIH1cblxuICBwYXJzZUV4cHJlc3Npb25MaXN0KHRlcm1pbmF0b3I6IG51bWJlcik6IEFTVFtdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFTVFtdID0gW107XG4gICAgaWYgKCF0aGlzLm5leHQuaXNDaGFyYWN0ZXIodGVybWluYXRvcikpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5wYXJzZVBpcGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcnNlTGl0ZXJhbE1hcCgpOiBMaXRlcmFsTWFwIHtcbiAgICBjb25zdCBrZXlzOiBMaXRlcmFsTWFwS2V5W10gPSBbXTtcbiAgICBjb25zdCB2YWx1ZXM6IEFTVFtdID0gW107XG4gICAgY29uc3Qgc3RhcnQgPSB0aGlzLmlucHV0SW5kZXg7XG4gICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJExCUkFDRSk7XG4gICAgaWYgKCF0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kUkJSQUNFKSkge1xuICAgICAgdGhpcy5yYnJhY2VzRXhwZWN0ZWQrKztcbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgcXVvdGVkID0gdGhpcy5uZXh0LmlzU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZE9yU3RyaW5nKCk7XG4gICAgICAgIGtleXMucHVzaCh7a2V5LCBxdW90ZWR9KTtcbiAgICAgICAgdGhpcy5leHBlY3RDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKTtcbiAgICAgICAgdmFsdWVzLnB1c2godGhpcy5wYXJzZVBpcGUoKSk7XG4gICAgICB9IHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICAgIHRoaXMucmJyYWNlc0V4cGVjdGVkLS07XG4gICAgICB0aGlzLmV4cGVjdENoYXJhY3RlcihjaGFycy4kUkJSQUNFKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBMaXRlcmFsTWFwKHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIGtleXMsIHZhbHVlcyk7XG4gIH1cblxuICBwYXJzZUFjY2Vzc01lbWJlck9yTWV0aG9kQ2FsbChyZWNlaXZlcjogQVNULCBpc1NhZmU6IGJvb2xlYW4gPSBmYWxzZSk6IEFTVCB7XG4gICAgY29uc3Qgc3RhcnQgPSByZWNlaXZlci5zcGFuLnN0YXJ0O1xuICAgIGNvbnN0IG5hbWVTdGFydCA9IHRoaXMuaW5wdXRJbmRleDtcbiAgICBjb25zdCBpZCA9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZCgpO1xuICAgIGNvbnN0IG5hbWVTcGFuID0gdGhpcy5zb3VyY2VTcGFuKG5hbWVTdGFydCk7XG5cbiAgICBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJExQQVJFTikpIHtcbiAgICAgIHRoaXMucnBhcmVuc0V4cGVjdGVkKys7XG4gICAgICBjb25zdCBhcmdzID0gdGhpcy5wYXJzZUNhbGxBcmd1bWVudHMoKTtcbiAgICAgIHRoaXMuZXhwZWN0Q2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pO1xuICAgICAgdGhpcy5ycGFyZW5zRXhwZWN0ZWQtLTtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLnNwYW4oc3RhcnQpO1xuICAgICAgY29uc3Qgc291cmNlU3BhbiA9IHRoaXMuc291cmNlU3BhbihzdGFydCk7XG4gICAgICByZXR1cm4gaXNTYWZlID8gbmV3IFNhZmVNZXRob2RDYWxsKHNwYW4sIHNvdXJjZVNwYW4sIG5hbWVTcGFuLCByZWNlaXZlciwgaWQsIGFyZ3MpIDpcbiAgICAgICAgICAgICAgICAgICAgICBuZXcgTWV0aG9kQ2FsbChzcGFuLCBzb3VyY2VTcGFuLCBuYW1lU3BhbiwgcmVjZWl2ZXIsIGlkLCBhcmdzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNTYWZlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKCc9JykpIHtcbiAgICAgICAgICB0aGlzLmVycm9yKCdUaGUgXFwnPy5cXCcgb3BlcmF0b3IgY2Fubm90IGJlIHVzZWQgaW4gdGhlIGFzc2lnbm1lbnQnKTtcbiAgICAgICAgICByZXR1cm4gbmV3IEVtcHR5RXhwcih0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFNhZmVQcm9wZXJ0eVJlYWQoXG4gICAgICAgICAgICAgIHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIG5hbWVTcGFuLCByZWNlaXZlciwgaWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcignPScpKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnBhcnNlQWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKCdCaW5kaW5ncyBjYW5ub3QgY29udGFpbiBhc3NpZ25tZW50cycpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbXB0eUV4cHIodGhpcy5zcGFuKHN0YXJ0KSwgdGhpcy5zb3VyY2VTcGFuKHN0YXJ0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlQ29uZGl0aW9uYWwoKTtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5V3JpdGUoXG4gICAgICAgICAgICAgIHRoaXMuc3BhbihzdGFydCksIHRoaXMuc291cmNlU3BhbihzdGFydCksIG5hbWVTcGFuLCByZWNlaXZlciwgaWQsIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BlcnR5UmVhZCh0aGlzLnNwYW4oc3RhcnQpLCB0aGlzLnNvdXJjZVNwYW4oc3RhcnQpLCBuYW1lU3BhbiwgcmVjZWl2ZXIsIGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcnNlQ2FsbEFyZ3VtZW50cygpOiBCaW5kaW5nUGlwZVtdIHtcbiAgICBpZiAodGhpcy5uZXh0LmlzQ2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pKSByZXR1cm4gW107XG4gICAgY29uc3QgcG9zaXRpb25hbHM6IEFTVFtdID0gW107XG4gICAgZG8ge1xuICAgICAgcG9zaXRpb25hbHMucHVzaCh0aGlzLnBhcnNlUGlwZSgpKTtcbiAgICB9IHdoaWxlICh0aGlzLmNvbnN1bWVPcHRpb25hbENoYXJhY3RlcihjaGFycy4kQ09NTUEpKTtcbiAgICByZXR1cm4gcG9zaXRpb25hbHMgYXMgQmluZGluZ1BpcGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW4gaWRlbnRpZmllciwgYSBrZXl3b3JkLCBhIHN0cmluZyB3aXRoIGFuIG9wdGlvbmFsIGAtYCBpbiBiZXR3ZWVuLFxuICAgKiBhbmQgcmV0dXJucyB0aGUgc3RyaW5nIGFsb25nIHdpdGggaXRzIGFic29sdXRlIHNvdXJjZSBzcGFuLlxuICAgKi9cbiAgZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk6IFRlbXBsYXRlQmluZGluZ0lkZW50aWZpZXIge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBsZXQgb3BlcmF0b3JGb3VuZCA9IGZhbHNlO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jdXJyZW50QWJzb2x1dGVPZmZzZXQ7XG4gICAgZG8ge1xuICAgICAgcmVzdWx0ICs9IHRoaXMuZXhwZWN0SWRlbnRpZmllck9yS2V5d29yZE9yU3RyaW5nKCk7XG4gICAgICBvcGVyYXRvckZvdW5kID0gdGhpcy5jb25zdW1lT3B0aW9uYWxPcGVyYXRvcignLScpO1xuICAgICAgaWYgKG9wZXJhdG9yRm91bmQpIHtcbiAgICAgICAgcmVzdWx0ICs9ICctJztcbiAgICAgIH1cbiAgICB9IHdoaWxlIChvcGVyYXRvckZvdW5kKTtcbiAgICByZXR1cm4ge1xuICAgICAgc291cmNlOiByZXN1bHQsXG4gICAgICBzcGFuOiBuZXcgQWJzb2x1dGVTb3VyY2VTcGFuKHN0YXJ0LCBzdGFydCArIHJlc3VsdC5sZW5ndGgpLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgbWljcm9zeW50YXggdGVtcGxhdGUgZXhwcmVzc2lvbiBhbmQgcmV0dXJuIGEgbGlzdCBvZiBiaW5kaW5ncyBvclxuICAgKiBwYXJzaW5nIGVycm9ycyBpbiBjYXNlIHRoZSBnaXZlbiBleHByZXNzaW9uIGlzIGludmFsaWQuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLFxuICAgKiBgYGBcbiAgICogICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBpbmRleCBhcyBpOyB0cmFja0J5OiBmdW5jXCI+XG4gICAqIGBgYFxuICAgKiBjb250YWlucyBmaXZlIGJpbmRpbmdzOlxuICAgKiAxLiBuZ0ZvciAtPiBudWxsXG4gICAqIDIuIGl0ZW0gLT4gTmdGb3JPZkNvbnRleHQuJGltcGxpY2l0XG4gICAqIDMuIG5nRm9yT2YgLT4gaXRlbXNcbiAgICogNC4gaSAtPiBOZ0Zvck9mQ29udGV4dC5pbmRleFxuICAgKiA1LiBuZ0ZvclRyYWNrQnkgLT4gZnVuY1xuICAgKlxuICAgKiBGb3IgYSBmdWxsIGRlc2NyaXB0aW9uIG9mIHRoZSBtaWNyb3N5bnRheCBncmFtbWFyLCBzZWVcbiAgICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWhldmVyeS9kMzUzMDI5NGNmZjJlNGExYjNmZTE1ZmY3NWQwODg1NVxuICAgKlxuICAgKiBAcGFyYW0gdGVtcGxhdGVLZXkgbmFtZSBvZiB0aGUgbWljcm9zeW50YXggZGlyZWN0aXZlLCBsaWtlIG5nSWYsIG5nRm9yLFxuICAgKiB3aXRob3V0IHRoZSAqLCBhbG9uZyB3aXRoIGl0cyBhYnNvbHV0ZSBzcGFuLlxuICAgKi9cbiAgcGFyc2VUZW1wbGF0ZUJpbmRpbmdzKHRlbXBsYXRlS2V5OiBUZW1wbGF0ZUJpbmRpbmdJZGVudGlmaWVyKTogVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQge1xuICAgIGNvbnN0IGJpbmRpbmdzOiBUZW1wbGF0ZUJpbmRpbmdbXSA9IFtdO1xuXG4gICAgLy8gVGhlIGZpcnN0IGJpbmRpbmcgaXMgZm9yIHRoZSB0ZW1wbGF0ZSBrZXkgaXRzZWxmXG4gICAgLy8gSW4gKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiwga2V5ID0gXCJuZ0ZvclwiLCB2YWx1ZSA9IG51bGxcbiAgICAvLyBJbiAqbmdJZj1cImNvbmQgfCBwaXBlXCIsIGtleSA9IFwibmdJZlwiLCB2YWx1ZSA9IFwiY29uZCB8IHBpcGVcIlxuICAgIGJpbmRpbmdzLnB1c2goLi4udGhpcy5wYXJzZURpcmVjdGl2ZUtleXdvcmRCaW5kaW5ncyh0ZW1wbGF0ZUtleSkpO1xuXG4gICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgIC8vIElmIGl0IHN0YXJ0cyB3aXRoICdsZXQnLCB0aGVuIHRoaXMgbXVzdCBiZSB2YXJpYWJsZSBkZWNsYXJhdGlvblxuICAgICAgY29uc3QgbGV0QmluZGluZyA9IHRoaXMucGFyc2VMZXRCaW5kaW5nKCk7XG4gICAgICBpZiAobGV0QmluZGluZykge1xuICAgICAgICBiaW5kaW5ncy5wdXNoKGxldEJpbmRpbmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHdvIHBvc3NpYmxlIGNhc2VzIGhlcmUsIGVpdGhlciBgdmFsdWUgXCJhc1wiIGtleWAgb3JcbiAgICAgICAgLy8gXCJkaXJlY3RpdmUta2V5d29yZCBleHByZXNzaW9uXCIuIFdlIGRvbid0IGtub3cgd2hpY2ggY2FzZSwgYnV0IGJvdGhcbiAgICAgICAgLy8gXCJ2YWx1ZVwiIGFuZCBcImRpcmVjdGl2ZS1rZXl3b3JkXCIgYXJlIHRlbXBsYXRlIGJpbmRpbmcga2V5LCBzbyBjb25zdW1lXG4gICAgICAgIC8vIHRoZSBrZXkgZmlyc3QuXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7XG4gICAgICAgIC8vIFBlZWsgYXQgdGhlIG5leHQgdG9rZW4sIGlmIGl0IGlzIFwiYXNcIiB0aGVuIHRoaXMgbXVzdCBiZSB2YXJpYWJsZVxuICAgICAgICAvLyBkZWNsYXJhdGlvbi5cbiAgICAgICAgY29uc3QgYmluZGluZyA9IHRoaXMucGFyc2VBc0JpbmRpbmcoa2V5KTtcbiAgICAgICAgaWYgKGJpbmRpbmcpIHtcbiAgICAgICAgICBiaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSB0aGUga2V5IG11c3QgYmUgYSBkaXJlY3RpdmUga2V5d29yZCwgbGlrZSBcIm9mXCIuIFRyYW5zZm9ybVxuICAgICAgICAgIC8vIHRoZSBrZXkgdG8gYWN0dWFsIGtleS4gRWcuIG9mIC0+IG5nRm9yT2YsIHRyYWNrQnkgLT4gbmdGb3JUcmFja0J5XG4gICAgICAgICAga2V5LnNvdXJjZSA9IHRlbXBsYXRlS2V5LnNvdXJjZSArIGtleS5zb3VyY2VbMF0udG9VcHBlckNhc2UoKSArIGtleS5zb3VyY2Uuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgIGJpbmRpbmdzLnB1c2goLi4udGhpcy5wYXJzZURpcmVjdGl2ZUtleXdvcmRCaW5kaW5ncyhrZXkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jb25zdW1lU3RhdGVtZW50VGVybWluYXRvcigpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgVGVtcGxhdGVCaW5kaW5nUGFyc2VSZXN1bHQoYmluZGluZ3MsIFtdIC8qIHdhcm5pbmdzICovLCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYSBkaXJlY3RpdmUga2V5d29yZCwgZm9sbG93ZWQgYnkgYSBtYW5kYXRvcnkgZXhwcmVzc2lvbi5cbiAgICogRm9yIGV4YW1wbGUsIFwib2YgaXRlbXNcIiwgXCJ0cmFja0J5OiBmdW5jXCIuXG4gICAqIFRoZSBiaW5kaW5ncyBhcmU6IG5nRm9yT2YgLT4gaXRlbXMsIG5nRm9yVHJhY2tCeSAtPiBmdW5jXG4gICAqIFRoZXJlIGNvdWxkIGJlIGFuIG9wdGlvbmFsIFwiYXNcIiBiaW5kaW5nIHRoYXQgZm9sbG93cyB0aGUgZXhwcmVzc2lvbi5cbiAgICogRm9yIGV4YW1wbGUsXG4gICAqIGBgYFxuICAgKiAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zIHwgc2xpY2U6MDoxIGFzIGNvbGxlY3Rpb25cIi5cbiAgICogICAgICAgICAgICAgICAgICAgIF5eIF5eXl5eXl5eXl5eXl5eXl5eIF5eXl5eXl5eXl5eXl5cbiAgICogICAgICAgICAgICAgICBrZXl3b3JkICAgIGJvdW5kIHRhcmdldCAgIG9wdGlvbmFsICdhcycgYmluZGluZ1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIGtleSBiaW5kaW5nIGtleSwgZm9yIGV4YW1wbGUsIG5nRm9yLCBuZ0lmLCBuZ0Zvck9mLCBhbG9uZyB3aXRoIGl0c1xuICAgKiBhYnNvbHV0ZSBzcGFuLlxuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZURpcmVjdGl2ZUtleXdvcmRCaW5kaW5ncyhrZXk6IFRlbXBsYXRlQmluZGluZ0lkZW50aWZpZXIpOiBUZW1wbGF0ZUJpbmRpbmdbXSB7XG4gICAgY29uc3QgYmluZGluZ3M6IFRlbXBsYXRlQmluZGluZ1tdID0gW107XG4gICAgdGhpcy5jb25zdW1lT3B0aW9uYWxDaGFyYWN0ZXIoY2hhcnMuJENPTE9OKTsgIC8vIHRyYWNrQnk6IHRyYWNrQnlGdW5jdGlvblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXREaXJlY3RpdmVCb3VuZFRhcmdldCgpO1xuICAgIGxldCBzcGFuRW5kID0gdGhpcy5jdXJyZW50QWJzb2x1dGVPZmZzZXQ7XG4gICAgLy8gVGhlIGJpbmRpbmcgY291bGQgb3B0aW9uYWxseSBiZSBmb2xsb3dlZCBieSBcImFzXCIuIEZvciBleGFtcGxlLFxuICAgIC8vICpuZ0lmPVwiY29uZCB8IHBpcGUgYXMgeFwiLiBJbiB0aGlzIGNhc2UsIHRoZSBrZXkgaW4gdGhlIFwiYXNcIiBiaW5kaW5nXG4gICAgLy8gaXMgXCJ4XCIgYW5kIHRoZSB2YWx1ZSBpcyB0aGUgdGVtcGxhdGUga2V5IGl0c2VsZiAoXCJuZ0lmXCIpLiBOb3RlIHRoYXQgdGhlXG4gICAgLy8gJ2tleScgaW4gdGhlIGN1cnJlbnQgY29udGV4dCBub3cgYmVjb21lcyB0aGUgXCJ2YWx1ZVwiIGluIHRoZSBuZXh0IGJpbmRpbmcuXG4gICAgY29uc3QgYXNCaW5kaW5nID0gdGhpcy5wYXJzZUFzQmluZGluZyhrZXkpO1xuICAgIGlmICghYXNCaW5kaW5nKSB7XG4gICAgICB0aGlzLmNvbnN1bWVTdGF0ZW1lbnRUZXJtaW5hdG9yKCk7XG4gICAgICBzcGFuRW5kID0gdGhpcy5jdXJyZW50QWJzb2x1dGVPZmZzZXQ7XG4gICAgfVxuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSBuZXcgQWJzb2x1dGVTb3VyY2VTcGFuKGtleS5zcGFuLnN0YXJ0LCBzcGFuRW5kKTtcbiAgICBiaW5kaW5ncy5wdXNoKG5ldyBFeHByZXNzaW9uQmluZGluZyhzb3VyY2VTcGFuLCBrZXksIHZhbHVlKSk7XG4gICAgaWYgKGFzQmluZGluZykge1xuICAgICAgYmluZGluZ3MucHVzaChhc0JpbmRpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gYmluZGluZ3M7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBleHByZXNzaW9uIEFTVCBmb3IgdGhlIGJvdW5kIHRhcmdldCBvZiBhIGRpcmVjdGl2ZSBrZXl3b3JkXG4gICAqIGJpbmRpbmcuIEZvciBleGFtcGxlLFxuICAgKiBgYGBcbiAgICogICAqbmdJZj1cImNvbmRpdGlvbiB8IHBpcGVcIlxuICAgKiAgICAgICAgICBeXl5eXl5eXl5eXl5eXl5eIGJvdW5kIHRhcmdldCBmb3IgXCJuZ0lmXCJcbiAgICogICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXG4gICAqICAgICAgICAgICAgICAgICAgICAgICBeXl5eXiBib3VuZCB0YXJnZXQgZm9yIFwibmdGb3JPZlwiXG4gICAqIGBgYFxuICAgKi9cbiAgcHJpdmF0ZSBnZXREaXJlY3RpdmVCb3VuZFRhcmdldCgpOiBBU1RXaXRoU291cmNlfG51bGwge1xuICAgIGlmICh0aGlzLm5leHQgPT09IEVPRiB8fCB0aGlzLnBlZWtLZXl3b3JkQXMoKSB8fCB0aGlzLnBlZWtLZXl3b3JkTGV0KCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBhc3QgPSB0aGlzLnBhcnNlUGlwZSgpOyAgLy8gZXhhbXBsZTogXCJjb25kaXRpb24gfCBhc3luY1wiXG4gICAgY29uc3Qge3N0YXJ0LCBlbmR9ID0gYXN0LnNwYW47XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmlucHV0LnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgICByZXR1cm4gbmV3IEFTVFdpdGhTb3VyY2UoYXN0LCB2YWx1ZSwgdGhpcy5sb2NhdGlvbiwgdGhpcy5hYnNvbHV0ZU9mZnNldCArIHN0YXJ0LCB0aGlzLmVycm9ycyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBiaW5kaW5nIGZvciBhIHZhcmlhYmxlIGRlY2xhcmVkIHVzaW5nIGBhc2AuIE5vdGUgdGhhdCB0aGUgb3JkZXJcbiAgICogb2YgdGhlIGtleS12YWx1ZSBwYWlyIGluIHRoaXMgZGVjbGFyYXRpb24gaXMgcmV2ZXJzZWQuIEZvciBleGFtcGxlLFxuICAgKiBgYGBcbiAgICogICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgaW5kZXggYXMgaVwiXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl4gICAgXlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIGtleVxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIG5hbWUgb2YgdGhlIHZhbHVlIGluIHRoZSBkZWNsYXJhdGlvbiwgXCJuZ0lmXCIgaW4gdGhlIGV4YW1wbGVcbiAgICogYWJvdmUsIGFsb25nIHdpdGggaXRzIGFic29sdXRlIHNwYW4uXG4gICAqL1xuICBwcml2YXRlIHBhcnNlQXNCaW5kaW5nKHZhbHVlOiBUZW1wbGF0ZUJpbmRpbmdJZGVudGlmaWVyKTogVGVtcGxhdGVCaW5kaW5nfG51bGwge1xuICAgIGlmICghdGhpcy5wZWVrS2V5d29yZEFzKCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLmFkdmFuY2UoKTsgIC8vIGNvbnN1bWUgdGhlICdhcycga2V5d29yZFxuICAgIGNvbnN0IGtleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7XG4gICAgdGhpcy5jb25zdW1lU3RhdGVtZW50VGVybWluYXRvcigpO1xuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSBuZXcgQWJzb2x1dGVTb3VyY2VTcGFuKHZhbHVlLnNwYW4uc3RhcnQsIHRoaXMuY3VycmVudEFic29sdXRlT2Zmc2V0KTtcbiAgICByZXR1cm4gbmV3IFZhcmlhYmxlQmluZGluZyhzb3VyY2VTcGFuLCBrZXksIHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGJpbmRpbmcgZm9yIGEgdmFyaWFibGUgZGVjbGFyZWQgdXNpbmcgYGxldGAuIEZvciBleGFtcGxlLFxuICAgKiBgYGBcbiAgICogICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCJcbiAgICogICAgICAgICAgIF5eXl5eXl5eICAgICAgICAgICBeXl5eXl5eXl5eXlxuICAgKiBgYGBcbiAgICogSW4gdGhlIGZpcnN0IGJpbmRpbmcsIGBpdGVtYCBpcyBib3VuZCB0byBgTmdGb3JPZkNvbnRleHQuJGltcGxpY2l0YC5cbiAgICogSW4gdGhlIHNlY29uZCBiaW5kaW5nLCBgaWAgaXMgYm91bmQgdG8gYE5nRm9yT2ZDb250ZXh0LmluZGV4YC5cbiAgICovXG4gIHByaXZhdGUgcGFyc2VMZXRCaW5kaW5nKCk6IFRlbXBsYXRlQmluZGluZ3xudWxsIHtcbiAgICBpZiAoIXRoaXMucGVla0tleXdvcmRMZXQoKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNwYW5TdGFydCA9IHRoaXMuY3VycmVudEFic29sdXRlT2Zmc2V0O1xuICAgIHRoaXMuYWR2YW5jZSgpOyAgLy8gY29uc3VtZSB0aGUgJ2xldCcga2V5d29yZFxuICAgIGNvbnN0IGtleSA9IHRoaXMuZXhwZWN0VGVtcGxhdGVCaW5kaW5nS2V5KCk7XG4gICAgbGV0IHZhbHVlOiBUZW1wbGF0ZUJpbmRpbmdJZGVudGlmaWVyfG51bGwgPSBudWxsO1xuICAgIGlmICh0aGlzLmNvbnN1bWVPcHRpb25hbE9wZXJhdG9yKCc9JykpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5leHBlY3RUZW1wbGF0ZUJpbmRpbmdLZXkoKTtcbiAgICB9XG4gICAgdGhpcy5jb25zdW1lU3RhdGVtZW50VGVybWluYXRvcigpO1xuICAgIGNvbnN0IHNvdXJjZVNwYW4gPSBuZXcgQWJzb2x1dGVTb3VyY2VTcGFuKHNwYW5TdGFydCwgdGhpcy5jdXJyZW50QWJzb2x1dGVPZmZzZXQpO1xuICAgIHJldHVybiBuZXcgVmFyaWFibGVCaW5kaW5nKHNvdXJjZVNwYW4sIGtleSwgdmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN1bWUgdGhlIG9wdGlvbmFsIHN0YXRlbWVudCB0ZXJtaW5hdG9yOiBzZW1pY29sb24gb3IgY29tbWEuXG4gICAqL1xuICBwcml2YXRlIGNvbnN1bWVTdGF0ZW1lbnRUZXJtaW5hdG9yKCkge1xuICAgIHRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pIHx8IHRoaXMuY29uc3VtZU9wdGlvbmFsQ2hhcmFjdGVyKGNoYXJzLiRDT01NQSk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXJ8bnVsbCA9IG51bGwpIHtcbiAgICB0aGlzLmVycm9ycy5wdXNoKG5ldyBQYXJzZXJFcnJvcihtZXNzYWdlLCB0aGlzLmlucHV0LCB0aGlzLmxvY2F0aW9uVGV4dChpbmRleCksIHRoaXMubG9jYXRpb24pKTtcbiAgICB0aGlzLnNraXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9jYXRpb25UZXh0KGluZGV4OiBudW1iZXJ8bnVsbCA9IG51bGwpIHtcbiAgICBpZiAoaW5kZXggPT0gbnVsbCkgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgIHJldHVybiAoaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpID8gYGF0IGNvbHVtbiAke3RoaXMudG9rZW5zW2luZGV4XS5pbmRleCArIDF9IGluYCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgYXQgdGhlIGVuZCBvZiB0aGUgZXhwcmVzc2lvbmA7XG4gIH1cblxuICAvLyBFcnJvciByZWNvdmVyeSBzaG91bGQgc2tpcCB0b2tlbnMgdW50aWwgaXQgZW5jb3VudGVycyBhIHJlY292ZXJ5IHBvaW50LiBza2lwKCkgdHJlYXRzXG4gIC8vIHRoZSBlbmQgb2YgaW5wdXQgYW5kIGEgJzsnIGFzIHVuY29uZGl0aW9uYWxseSBhIHJlY292ZXJ5IHBvaW50LiBJdCBhbHNvIHRyZWF0cyAnKScsXG4gIC8vICd9JyBhbmQgJ10nIGFzIGNvbmRpdGlvbmFsIHJlY292ZXJ5IHBvaW50cyBpZiBvbmUgb2YgY2FsbGluZyBwcm9kdWN0aW9ucyBpcyBleHBlY3RpbmdcbiAgLy8gb25lIG9mIHRoZXNlIHN5bWJvbHMuIFRoaXMgYWxsb3dzIHNraXAoKSB0byByZWNvdmVyIGZyb20gZXJyb3JzIHN1Y2ggYXMgJyhhLikgKyAxJyBhbGxvd2luZ1xuICAvLyBtb3JlIG9mIHRoZSBBU1QgdG8gYmUgcmV0YWluZWQgKGl0IGRvZXNuJ3Qgc2tpcCBhbnkgdG9rZW5zIGFzIHRoZSAnKScgaXMgcmV0YWluZWQgYmVjYXVzZVxuICAvLyBvZiB0aGUgJygnIGJlZ2lucyBhbiAnKCcgPGV4cHI+ICcpJyBwcm9kdWN0aW9uKS4gVGhlIHJlY292ZXJ5IHBvaW50cyBvZiBncm91cGluZyBzeW1ib2xzXG4gIC8vIG11c3QgYmUgY29uZGl0aW9uYWwgYXMgdGhleSBtdXN0IGJlIHNraXBwZWQgaWYgbm9uZSBvZiB0aGUgY2FsbGluZyBwcm9kdWN0aW9ucyBhcmUgbm90XG4gIC8vIGV4cGVjdGluZyB0aGUgY2xvc2luZyB0b2tlbiBlbHNlIHdlIHdpbGwgbmV2ZXIgbWFrZSBwcm9ncmVzcyBpbiB0aGUgY2FzZSBvZiBhblxuICAvLyBleHRyYW5lb3VzIGdyb3VwIGNsb3Npbmcgc3ltYm9sIChzdWNoIGFzIGEgc3RyYXkgJyknKS4gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yICc7JyBiZWNhdXNlXG4gIC8vIHBhcnNlQ2hhaW4oKSBpcyBhbHdheXMgdGhlIHJvb3QgcHJvZHVjdGlvbiBhbmQgaXQgZXhwZWN0cyBhICc7Jy5cblxuICAvLyBJZiBhIHByb2R1Y3Rpb24gZXhwZWN0cyBvbmUgb2YgdGhlc2UgdG9rZW4gaXQgaW5jcmVtZW50cyB0aGUgY29ycmVzcG9uZGluZyBuZXN0aW5nIGNvdW50LFxuICAvLyBhbmQgdGhlbiBkZWNyZW1lbnRzIGl0IGp1c3QgcHJpb3IgdG8gY2hlY2tpbmcgaWYgdGhlIHRva2VuIGlzIGluIHRoZSBpbnB1dC5cbiAgcHJpdmF0ZSBza2lwKCkge1xuICAgIGxldCBuID0gdGhpcy5uZXh0O1xuICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoICYmICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRTRU1JQ09MT04pICYmXG4gICAgICAgICAgICh0aGlzLnJwYXJlbnNFeHBlY3RlZCA8PSAwIHx8ICFuLmlzQ2hhcmFjdGVyKGNoYXJzLiRSUEFSRU4pKSAmJlxuICAgICAgICAgICAodGhpcy5yYnJhY2VzRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUkJSQUNFKSkgJiZcbiAgICAgICAgICAgKHRoaXMucmJyYWNrZXRzRXhwZWN0ZWQgPD0gMCB8fCAhbi5pc0NoYXJhY3RlcihjaGFycy4kUkJSQUNLRVQpKSkge1xuICAgICAgaWYgKHRoaXMubmV4dC5pc0Vycm9yKCkpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucHVzaChcbiAgICAgICAgICAgIG5ldyBQYXJzZXJFcnJvcih0aGlzLm5leHQudG9TdHJpbmcoKSEsIHRoaXMuaW5wdXQsIHRoaXMubG9jYXRpb25UZXh0KCksIHRoaXMubG9jYXRpb24pKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWR2YW5jZSgpO1xuICAgICAgbiA9IHRoaXMubmV4dDtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU2ltcGxlRXhwcmVzc2lvbkNoZWNrZXIgaW1wbGVtZW50cyBBc3RWaXNpdG9yIHtcbiAgZXJyb3JzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIHZpc2l0SW1wbGljaXRSZWNlaXZlcihhc3Q6IEltcGxpY2l0UmVjZWl2ZXIsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEludGVycG9sYXRpb24oYXN0OiBJbnRlcnBvbGF0aW9uLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRMaXRlcmFsUHJpbWl0aXZlKGFzdDogTGl0ZXJhbFByaW1pdGl2ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UHJvcGVydHlSZWFkKGFzdDogUHJvcGVydHlSZWFkLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQcm9wZXJ0eVdyaXRlKGFzdDogUHJvcGVydHlXcml0ZSwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0U2FmZVByb3BlcnR5UmVhZChhc3Q6IFNhZmVQcm9wZXJ0eVJlYWQsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdE1ldGhvZENhbGwoYXN0OiBNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRTYWZlTWV0aG9kQ2FsbChhc3Q6IFNhZmVNZXRob2RDYWxsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRGdW5jdGlvbkNhbGwoYXN0OiBGdW5jdGlvbkNhbGwsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdExpdGVyYWxBcnJheShhc3Q6IExpdGVyYWxBcnJheSwgY29udGV4dDogYW55KSB7XG4gICAgdGhpcy52aXNpdEFsbChhc3QuZXhwcmVzc2lvbnMpO1xuICB9XG5cbiAgdmlzaXRMaXRlcmFsTWFwKGFzdDogTGl0ZXJhbE1hcCwgY29udGV4dDogYW55KSB7XG4gICAgdGhpcy52aXNpdEFsbChhc3QudmFsdWVzKTtcbiAgfVxuXG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQcmVmaXhOb3QoYXN0OiBQcmVmaXhOb3QsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdE5vbk51bGxBc3NlcnQoYXN0OiBOb25OdWxsQXNzZXJ0LCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRDb25kaXRpb25hbChhc3Q6IENvbmRpdGlvbmFsLCBjb250ZXh0OiBhbnkpIHt9XG5cbiAgdmlzaXRQaXBlKGFzdDogQmluZGluZ1BpcGUsIGNvbnRleHQ6IGFueSkge1xuICAgIHRoaXMuZXJyb3JzLnB1c2goJ3BpcGVzJyk7XG4gIH1cblxuICB2aXNpdEtleWVkUmVhZChhc3Q6IEtleWVkUmVhZCwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0S2V5ZWRXcml0ZShhc3Q6IEtleWVkV3JpdGUsIGNvbnRleHQ6IGFueSkge31cblxuICB2aXNpdEFsbChhc3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICByZXR1cm4gYXN0cy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKTtcbiAgfVxuXG4gIHZpc2l0Q2hhaW4oYXN0OiBDaGFpbiwgY29udGV4dDogYW55KSB7fVxuXG4gIHZpc2l0UXVvdGUoYXN0OiBRdW90ZSwgY29udGV4dDogYW55KSB7fVxufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZXh0ZW5kcyBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlciB1c2VkIGluIFZpZXcgRW5naW5lIGFuZCBwZXJmb3JtcyBtb3JlIHN0cmljdCBjaGVja3MgdG9cbiAqIG1ha2Ugc3VyZSBob3N0IGJpbmRpbmdzIGRvIG5vdCBjb250YWluIHBpcGVzLiBJbiBWaWV3IEVuZ2luZSwgaGF2aW5nIHBpcGVzIGluIGhvc3QgYmluZGluZ3MgaXNcbiAqIG5vdCBzdXBwb3J0ZWQgYXMgd2VsbCwgYnV0IGluIHNvbWUgY2FzZXMgKGxpa2UgYCEodmFsdWUgfCBhc3luYylgKSB0aGUgZXJyb3IgaXMgbm90IHRyaWdnZXJlZCBhdFxuICogY29tcGlsZSB0aW1lLiBJbiBvcmRlciB0byBwcmVzZXJ2ZSBWaWV3IEVuZ2luZSBiZWhhdmlvciwgbW9yZSBzdHJpY3QgY2hlY2tzIGFyZSBpbnRyb2R1Y2VkIGZvclxuICogSXZ5IG1vZGUgb25seS5cbiAqL1xuY2xhc3MgSXZ5U2ltcGxlRXhwcmVzc2lvbkNoZWNrZXIgZXh0ZW5kcyBTaW1wbGVFeHByZXNzaW9uQ2hlY2tlciB7XG4gIHZpc2l0QmluYXJ5KGFzdDogQmluYXJ5LCBjb250ZXh0OiBhbnkpIHtcbiAgICBhc3QubGVmdC52aXNpdCh0aGlzKTtcbiAgICBhc3QucmlnaHQudmlzaXQodGhpcyk7XG4gIH1cblxuICB2aXNpdFByZWZpeE5vdChhc3Q6IFByZWZpeE5vdCwgY29udGV4dDogYW55KSB7XG4gICAgYXN0LmV4cHJlc3Npb24udmlzaXQodGhpcyk7XG4gIH1cbn1cbiJdfQ==
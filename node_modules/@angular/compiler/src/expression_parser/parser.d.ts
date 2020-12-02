/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InterpolationConfig } from '../ml_parser/interpolation_config';
import { AbsoluteSourceSpan, AST, AstVisitor, ASTWithSource, Binary, BindingPipe, Chain, Conditional, FunctionCall, ImplicitReceiver, Interpolation, KeyedRead, KeyedWrite, LiteralArray, LiteralMap, LiteralPrimitive, MethodCall, NonNullAssert, ParserError, ParseSpan, PrefixNot, PropertyRead, PropertyWrite, Quote, SafeMethodCall, SafePropertyRead, TemplateBinding, TemplateBindingIdentifier } from './ast';
import { Lexer, Token } from './lexer';
export declare class SplitInterpolation {
    strings: string[];
    expressions: string[];
    offsets: number[];
    constructor(strings: string[], expressions: string[], offsets: number[]);
}
export declare class TemplateBindingParseResult {
    templateBindings: TemplateBinding[];
    warnings: string[];
    errors: ParserError[];
    constructor(templateBindings: TemplateBinding[], warnings: string[], errors: ParserError[]);
}
export declare class Parser {
    private _lexer;
    private errors;
    constructor(_lexer: Lexer);
    simpleExpressionChecker: typeof SimpleExpressionChecker;
    parseAction(input: string, location: any, absoluteOffset: number, interpolationConfig?: InterpolationConfig): ASTWithSource;
    parseBinding(input: string, location: any, absoluteOffset: number, interpolationConfig?: InterpolationConfig): ASTWithSource;
    private checkSimpleExpression;
    parseSimpleBinding(input: string, location: string, absoluteOffset: number, interpolationConfig?: InterpolationConfig): ASTWithSource;
    private _reportError;
    private _parseBindingAst;
    private _parseQuote;
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
    parseTemplateBindings(templateKey: string, templateValue: string, templateUrl: string, absoluteKeyOffset: number, absoluteValueOffset: number): TemplateBindingParseResult;
    parseInterpolation(input: string, location: any, absoluteOffset: number, interpolationConfig?: InterpolationConfig): ASTWithSource | null;
    splitInterpolation(input: string, location: string, interpolationConfig?: InterpolationConfig): SplitInterpolation | null;
    wrapLiteralPrimitive(input: string | null, location: any, absoluteOffset: number): ASTWithSource;
    private _stripComments;
    private _commentStart;
    private _checkNoInterpolation;
    private _findInterpolationErrorColumn;
}
export declare class IvyParser extends Parser {
    simpleExpressionChecker: typeof IvySimpleExpressionChecker;
}
export declare class _ParseAST {
    input: string;
    location: any;
    absoluteOffset: number;
    tokens: Token[];
    inputLength: number;
    parseAction: boolean;
    private errors;
    private offset;
    private rparensExpected;
    private rbracketsExpected;
    private rbracesExpected;
    private sourceSpanCache;
    index: number;
    constructor(input: string, location: any, absoluteOffset: number, tokens: Token[], inputLength: number, parseAction: boolean, errors: ParserError[], offset: number);
    peek(offset: number): Token;
    get next(): Token;
    /** Whether all the parser input has been processed. */
    get atEOF(): boolean;
    /**
     * Index of the next token to be processed, or the end of the last token if all have been
     * processed.
     */
    get inputIndex(): number;
    /**
     * End index of the last processed token, or the start of the first token if none have been
     * processed.
     */
    get currentEndIndex(): number;
    /**
     * Returns the absolute offset of the start of the current token.
     */
    get currentAbsoluteOffset(): number;
    span(start: number): ParseSpan;
    sourceSpan(start: number): AbsoluteSourceSpan;
    advance(): void;
    consumeOptionalCharacter(code: number): boolean;
    peekKeywordLet(): boolean;
    peekKeywordAs(): boolean;
    expectCharacter(code: number): void;
    consumeOptionalOperator(op: string): boolean;
    expectOperator(operator: string): void;
    expectIdentifierOrKeyword(): string;
    expectIdentifierOrKeywordOrString(): string;
    parseChain(): AST;
    parsePipe(): AST;
    parseExpression(): AST;
    parseConditional(): AST;
    parseLogicalOr(): AST;
    parseLogicalAnd(): AST;
    parseEquality(): AST;
    parseRelational(): AST;
    parseAdditive(): AST;
    parseMultiplicative(): AST;
    parsePrefix(): AST;
    parseCallChain(): AST;
    parsePrimary(): AST;
    parseExpressionList(terminator: number): AST[];
    parseLiteralMap(): LiteralMap;
    parseAccessMemberOrMethodCall(receiver: AST, isSafe?: boolean): AST;
    parseCallArguments(): BindingPipe[];
    /**
     * Parses an identifier, a keyword, a string with an optional `-` in between,
     * and returns the string along with its absolute source span.
     */
    expectTemplateBindingKey(): TemplateBindingIdentifier;
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
    parseTemplateBindings(templateKey: TemplateBindingIdentifier): TemplateBindingParseResult;
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
    private parseDirectiveKeywordBindings;
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
    private getDirectiveBoundTarget;
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
    private parseAsBinding;
    /**
     * Return the binding for a variable declared using `let`. For example,
     * ```
     *   *ngFor="let item of items; let i=index;"
     *           ^^^^^^^^           ^^^^^^^^^^^
     * ```
     * In the first binding, `item` is bound to `NgForOfContext.$implicit`.
     * In the second binding, `i` is bound to `NgForOfContext.index`.
     */
    private parseLetBinding;
    /**
     * Consume the optional statement terminator: semicolon or comma.
     */
    private consumeStatementTerminator;
    error(message: string, index?: number | null): void;
    private locationText;
    private skip;
}
declare class SimpleExpressionChecker implements AstVisitor {
    errors: string[];
    visitImplicitReceiver(ast: ImplicitReceiver, context: any): void;
    visitInterpolation(ast: Interpolation, context: any): void;
    visitLiteralPrimitive(ast: LiteralPrimitive, context: any): void;
    visitPropertyRead(ast: PropertyRead, context: any): void;
    visitPropertyWrite(ast: PropertyWrite, context: any): void;
    visitSafePropertyRead(ast: SafePropertyRead, context: any): void;
    visitMethodCall(ast: MethodCall, context: any): void;
    visitSafeMethodCall(ast: SafeMethodCall, context: any): void;
    visitFunctionCall(ast: FunctionCall, context: any): void;
    visitLiteralArray(ast: LiteralArray, context: any): void;
    visitLiteralMap(ast: LiteralMap, context: any): void;
    visitBinary(ast: Binary, context: any): void;
    visitPrefixNot(ast: PrefixNot, context: any): void;
    visitNonNullAssert(ast: NonNullAssert, context: any): void;
    visitConditional(ast: Conditional, context: any): void;
    visitPipe(ast: BindingPipe, context: any): void;
    visitKeyedRead(ast: KeyedRead, context: any): void;
    visitKeyedWrite(ast: KeyedWrite, context: any): void;
    visitAll(asts: any[]): any[];
    visitChain(ast: Chain, context: any): void;
    visitQuote(ast: Quote, context: any): void;
}
/**
 * This class extends SimpleExpressionChecker used in View Engine and performs more strict checks to
 * make sure host bindings do not contain pipes. In View Engine, having pipes in host bindings is
 * not supported as well, but in some cases (like `!(value | async)`) the error is not triggered at
 * compile time. In order to preserve View Engine behavior, more strict checks are introduced for
 * Ivy mode only.
 */
declare class IvySimpleExpressionChecker extends SimpleExpressionChecker {
    visitBinary(ast: Binary, context: any): void;
    visitPrefixNot(ast: PrefixNot, context: any): void;
}
export {};

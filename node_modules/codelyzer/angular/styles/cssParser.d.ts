import { ParseError, ParseSourceFile, ParseSourceSpan } from './parseUtil';
import { BlockType, CssAst, CssBlockAst, CssDefinitionAst, CssKeyframeDefinitionAst, CssPseudoSelectorAst, CssRuleAst, CssSelectorAst, CssSimpleSelectorAst, CssStyleSheetAst, CssStyleValueAst, CssStylesBlockAst } from './cssAst';
import { CssToken, CssTokenType } from './cssLexer';
export declare class ParsedCssResult {
    errors: CssParseError[];
    ast: CssStyleSheetAst;
    constructor(errors: CssParseError[], ast: CssStyleSheetAst);
}
export declare class CssParser {
    private _errors;
    private _file;
    private _scanner;
    private _lastToken;
    parse(css: string, url: string): ParsedCssResult;
    _parseStyleSheet(delimiters: number): CssStyleSheetAst;
    _getSourceContent(): string;
    _extractSourceContent(start: number, end: number): string;
    _generateSourceSpan(start: CssToken | CssAst, end?: CssToken | CssAst | null): ParseSourceSpan;
    _resolveBlockType(token: CssToken): BlockType;
    _parseRule(delimiters: number): CssRuleAst;
    _parseAtRule(delimiters: number): CssRuleAst;
    _parseSelectorRule(delimiters: number): CssRuleAst;
    _parseSelectors(delimiters: number): CssSelectorAst[];
    _scan(): CssToken;
    _getScannerIndex(): number;
    _consume(type: CssTokenType, value?: string | null): CssToken;
    _parseKeyframeBlock(delimiters: number): CssBlockAst;
    _parseKeyframeDefinition(delimiters: number): CssKeyframeDefinitionAst;
    _parseKeyframeLabel(delimiters: number): CssToken;
    _parsePseudoSelector(delimiters: number): CssPseudoSelectorAst;
    _parseSimpleSelector(delimiters: number): CssSimpleSelectorAst;
    _parseSelector(delimiters: number): CssSelectorAst;
    _parseValue(delimiters: number): CssStyleValueAst;
    _collectUntilDelim(delimiters: number, assertType?: CssTokenType | null): CssToken[];
    _parseBlock(delimiters: number): CssBlockAst;
    _parseStyleBlock(delimiters: number): CssStylesBlockAst | null;
    _parseDefinition(delimiters: number): CssDefinitionAst;
    _assertCondition(status: boolean, errorMessage: string, problemToken: CssToken): boolean;
    _error(message: string, problemToken: CssToken): void;
}
export declare class CssParseError extends ParseError {
    static create(file: ParseSourceFile, offset: number, line: number, col: number, length: number, errMsg: string): CssParseError;
    constructor(span: ParseSourceSpan, message: string);
}

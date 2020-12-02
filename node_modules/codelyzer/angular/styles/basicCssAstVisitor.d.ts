import * as ts from 'typescript';
import * as Lint from 'tslint';
import * as ast from './cssAst';
import { SourceMappingVisitor } from '../sourceMappingVisitor';
import { ComponentMetadata, StyleMetadata } from '../metadata';
export interface CssAstVisitorCtrl {
    new (sourceFile: ts.SourceFile, options: Lint.IOptions, context: ComponentMetadata, style: StyleMetadata, templateStart: number): any;
}
export declare class BasicCssAstVisitor extends SourceMappingVisitor implements ast.CssAstVisitor {
    protected _originalOptions: Lint.IOptions;
    protected context: ComponentMetadata;
    protected templateStart: number;
    constructor(sourceFile: ts.SourceFile, _originalOptions: Lint.IOptions, context: ComponentMetadata, style: StyleMetadata, templateStart: number);
    visitCssValue(ast: ast.CssStyleValueAst, context?: any): any;
    visitCssInlineRule(ast: ast.CssInlineRuleAst, context?: any): any;
    visitCssAtRulePredicate(ast: ast.CssAtRulePredicateAst, context?: any): any;
    visitCssKeyframeRule(ast: ast.CssKeyframeRuleAst, context?: any): any;
    visitCssKeyframeDefinition(ast: ast.CssKeyframeDefinitionAst, context?: any): any;
    visitCssMediaQueryRule(ast: ast.CssMediaQueryRuleAst, context?: any): any;
    visitCssSelectorRule(ast: ast.CssSelectorRuleAst, context?: any): any;
    visitCssSelector(ast: ast.CssSelectorAst, context?: any): any;
    visitCssSimpleSelector(ast: ast.CssSimpleSelectorAst, context?: any): any;
    visitCssPseudoSelector(ast: ast.CssPseudoSelectorAst, context?: any): any;
    visitCssDefinition(ast: ast.CssDefinitionAst, context?: any): any;
    visitCssBlock(ast: ast.CssBlockAst, context?: any): any;
    visitCssStylesBlock(ast: ast.CssStylesBlockAst, context?: any): any;
    visitCssStyleSheet(ast: ast.CssStyleSheetAst, context?: any): any;
    visitCssUnknownRule(ast: ast.CssUnknownRuleAst, context?: any): any;
    visitCssUnknownTokenList(ast: ast.CssUnknownTokenListAst, context?: any): any;
}

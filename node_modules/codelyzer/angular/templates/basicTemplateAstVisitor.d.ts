import * as ast from '@angular/compiler';
import * as ts from 'typescript';
import * as Lint from 'tslint';
import * as e from '@angular/compiler/src/expression_parser/ast';
import { ComponentMetadata } from '../metadata';
import { SourceMappingVisitor } from '../sourceMappingVisitor';
export interface RecursiveAngularExpressionVisitorCtr {
    new (sourceFile: ts.SourceFile, options: Lint.IOptions, context: ComponentMetadata, basePosition: number): any;
}
export interface TemplateAstVisitorCtr {
    new (sourceFile: ts.SourceFile, options: Lint.IOptions, context: ComponentMetadata, templateStart: number, expressionVisitorCtrl: RecursiveAngularExpressionVisitorCtr): any;
}
export declare class BasicTemplateAstVisitor extends SourceMappingVisitor implements ast.TemplateAstVisitor {
    private _originalOptions;
    protected context: ComponentMetadata;
    protected templateStart: number;
    private expressionVisitorCtrl;
    private _variables;
    constructor(sourceFile: ts.SourceFile, _originalOptions: Lint.IOptions, context: ComponentMetadata, templateStart: number, expressionVisitorCtrl?: RecursiveAngularExpressionVisitorCtr);
    visit?(node: ast.TemplateAst, context: any): any;
    visitNgContent(ast: ast.NgContentAst, context: any): any;
    visitEmbeddedTemplate(ast: ast.EmbeddedTemplateAst, context: any): any;
    visitElement(element: ast.ElementAst, context: any): any;
    visitReference(ast: ast.ReferenceAst, context: any): any;
    visitVariable(ast: ast.VariableAst, context: any): any;
    visitEvent(ast: ast.BoundEventAst, context: any): any;
    visitElementProperty(prop: ast.BoundElementPropertyAst, context: any): any;
    visitAttr(ast: ast.AttrAst, context: any): any;
    visitBoundText(text: ast.BoundTextAst, context: any): any;
    visitText(text: ast.TextAst, context: any): any;
    visitDirective(ast: ast.DirectiveAst, context: any): any;
    visitDirectiveProperty(prop: ast.BoundDirectivePropertyAst, context: any): any;
    protected visitNgTemplateAST(ast: e.AST, templateStart: number, prop?: any): void;
}

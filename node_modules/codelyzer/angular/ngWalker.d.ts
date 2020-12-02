import * as compiler from '@angular/compiler';
import * as Lint from 'tslint';
import * as ts from 'typescript';
import { ComponentMetadata, DirectiveMetadata, InjectableMetadata, ModuleMetadata, PipeMetadata, StyleMetadata } from './metadata';
import { MetadataReader } from './metadataReader';
import { CssAstVisitorCtrl } from './styles/basicCssAstVisitor';
import { CssAst } from './styles/cssAst';
import { RecursiveAngularExpressionVisitorCtr, TemplateAstVisitorCtr } from './templates/basicTemplateAstVisitor';
export interface NgWalkerConfig {
    cssVisitorCtrl?: CssAstVisitorCtrl;
    expressionVisitorCtrl?: RecursiveAngularExpressionVisitorCtr;
    templateVisitorCtrl?: TemplateAstVisitorCtr;
}
export declare class NgWalker extends Lint.RuleWalker {
    protected _originalOptions: Lint.IOptions;
    private _config?;
    protected _metadataReader?: MetadataReader;
    constructor(sourceFile: ts.SourceFile, _originalOptions: Lint.IOptions, _config?: NgWalkerConfig, _metadataReader?: MetadataReader);
    visitClassDeclaration(declaration: ts.ClassDeclaration): void;
    visitMethodDeclaration(method: ts.MethodDeclaration): void;
    visitPropertyDeclaration(prop: ts.PropertyDeclaration): void;
    protected visitMethodDecorator(decorator: ts.Decorator): void;
    protected visitPropertyDecorator(decorator: ts.Decorator): void;
    protected visitNgComponent(metadata: ComponentMetadata): void;
    protected visitClassDecorator(decorator: ts.Decorator): void;
    protected visitNgModule(metadata: ModuleMetadata): void;
    protected visitNgDirective(metadata: DirectiveMetadata): void;
    protected visitNgPipe(metadata: PipeMetadata): void;
    protected visitNgInjectable(metadata: InjectableMetadata): void;
    protected visitNgInput(property: ts.PropertyDeclaration, input: ts.Decorator, args: string[]): void;
    protected visitNgOutput(property: ts.PropertyDeclaration, output: ts.Decorator, args: string[]): void;
    protected visitNgHostBinding(property: ts.PropertyDeclaration, decorator: ts.Decorator, args: string[]): void;
    protected visitNgHostListener(method: ts.MethodDeclaration, decorator: ts.Decorator, args: string[]): void;
    protected visitNgContentChild(property: ts.PropertyDeclaration, input: ts.Decorator, args: string[]): void;
    protected visitNgContentChildren(property: ts.PropertyDeclaration, input: ts.Decorator, args: string[]): void;
    protected visitNgViewChild(property: ts.PropertyDeclaration, input: ts.Decorator, args: string[]): void;
    protected visitNgViewChildren(property: ts.PropertyDeclaration, input: ts.Decorator, args: string[]): void;
    protected visitNgTemplateHelper(roots: compiler.TemplateAst[], context: ComponentMetadata, baseStart: number): void;
    protected visitNgStyleHelper(style: CssAst, context: ComponentMetadata, styleMetadata: StyleMetadata, baseStart: number): void;
    protected getContextSourceFile(path: string, content: string): ts.SourceFile;
    private hasClassName;
}

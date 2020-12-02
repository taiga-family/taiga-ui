import * as ast from '@angular/compiler';
import { FlatSymbolTable } from './recursiveAngularExpressionVisitor';
export declare class ReferenceCollectorVisitor implements ast.TemplateAstVisitor {
    private _variables;
    visit?(node: ast.TemplateAst, context: any): FlatSymbolTable;
    visitBoundText(text: ast.BoundTextAst, context: any): any;
    visitElementProperty(prop: ast.BoundElementPropertyAst, context: any): any;
    visitReference(ast: ast.ReferenceAst, context: any): any;
    visitNgContent(ast: ast.NgContentAst, context: any): any;
    visitVariable(ast: ast.VariableAst, context: any): any;
    visitAttr(ast: ast.AttrAst, context: any): any;
    visitText(text: ast.TextAst, context: any): any;
    visitDirective(ast: ast.DirectiveAst, context: any): any;
    visitDirectiveProperty(ast: ast.BoundDirectivePropertyAst, context: any): any;
    visitEvent(ast: ast.BoundEventAst, context: any): any;
    visitEmbeddedTemplate(ast: ast.EmbeddedTemplateAst, context: any): any;
    visitElement(element: ast.ElementAst, context: any): any;
    get variables(): FlatSymbolTable;
}

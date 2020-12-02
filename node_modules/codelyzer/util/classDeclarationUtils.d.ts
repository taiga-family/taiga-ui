import * as ts from 'typescript';
import { FlatSymbolTable } from '../angular/templates/recursiveAngularExpressionVisitor';
export declare const getDeclaredProperties: (declaration: ts.ClassDeclaration) => ts.ClassElement[];
export declare const getDeclaredPropertyNames: (declaration: ts.ClassDeclaration) => FlatSymbolTable;
export declare const getDeclaredMethods: (declaration: ts.ClassDeclaration) => ts.MethodDeclaration[];
export declare const getDeclaredMethodNames: (declaration: ts.ClassDeclaration) => FlatSymbolTable;

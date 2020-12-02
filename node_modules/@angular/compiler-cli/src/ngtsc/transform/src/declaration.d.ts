/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/transform/src/declaration" />
import { Type } from '@angular/compiler';
import * as ts from 'typescript';
import { ImportRewriter } from '../../imports';
import { ClassDeclaration } from '../../reflection';
import { ImportManager } from '../../translator';
import { DtsTransform } from './api';
/**
 * Keeps track of `DtsTransform`s per source file, so that it is known which source files need to
 * have their declaration file transformed.
 */
export declare class DtsTransformRegistry {
    private ivyDeclarationTransforms;
    private returnTypeTransforms;
    getIvyDeclarationTransform(sf: ts.SourceFile): IvyDeclarationDtsTransform;
    getReturnTypeTransform(sf: ts.SourceFile): ReturnTypeTransform;
    /**
     * Gets the dts transforms to be applied for the given source file, or `null` if no transform is
     * necessary.
     */
    getAllTransforms(sf: ts.SourceFile): DtsTransform[] | null;
}
export declare function declarationTransformFactory(transformRegistry: DtsTransformRegistry, importRewriter: ImportRewriter, importPrefix?: string): ts.TransformerFactory<ts.SourceFile>;
export interface IvyDeclarationField {
    name: string;
    type: Type;
}
export declare class IvyDeclarationDtsTransform implements DtsTransform {
    private declarationFields;
    addFields(decl: ClassDeclaration, fields: IvyDeclarationField[]): void;
    transformClass(clazz: ts.ClassDeclaration, members: ReadonlyArray<ts.ClassElement>, imports: ImportManager): ts.ClassDeclaration;
}
export declare class ReturnTypeTransform implements DtsTransform {
    private typeReplacements;
    addTypeReplacement(declaration: ts.Declaration, type: Type): void;
    transformClassElement(element: ts.ClassElement, imports: ImportManager): ts.ClassElement;
    transformFunctionDeclaration(element: ts.FunctionDeclaration, imports: ImportManager): ts.FunctionDeclaration;
}

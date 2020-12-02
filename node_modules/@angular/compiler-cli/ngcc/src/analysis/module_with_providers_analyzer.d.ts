/// <amd-module name="@angular/compiler-cli/ngcc/src/analysis/module_with_providers_analyzer" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ReferencesRegistry } from '../../../src/ngtsc/annotations';
import { Reference } from '../../../src/ngtsc/imports';
import { ClassDeclaration } from '../../../src/ngtsc/reflection';
import { NgccReflectionHost } from '../host/ngcc_host';
/**
 * A structure returned from `getModuleWithProvidersFunctions()` that describes functions
 * that return ModuleWithProviders objects.
 */
export interface ModuleWithProvidersInfo {
    /**
     * The name of the declared function.
     */
    name: string;
    /**
     * The declaration of the function that returns the `ModuleWithProviders` object.
     */
    declaration: ts.SignatureDeclaration;
    /**
     * Declaration of the containing class (if this is a method)
     */
    container: ts.Declaration | null;
    /**
     * The declaration of the class that the `ngModule` property on the `ModuleWithProviders` object
     * refers to.
     */
    ngModule: Reference<ClassDeclaration>;
}
export declare type ModuleWithProvidersAnalyses = Map<ts.SourceFile, ModuleWithProvidersInfo[]>;
export declare const ModuleWithProvidersAnalyses: MapConstructor;
export declare class ModuleWithProvidersAnalyzer {
    private host;
    private typeChecker;
    private referencesRegistry;
    private processDts;
    private evaluator;
    constructor(host: NgccReflectionHost, typeChecker: ts.TypeChecker, referencesRegistry: ReferencesRegistry, processDts: boolean);
    analyzeProgram(program: ts.Program): ModuleWithProvidersAnalyses;
    private getRootFiles;
    private getModuleWithProvidersFunctions;
    /**
     * Parse a function/method node (or its implementation), to see if it returns a
     * `ModuleWithProviders` object.
     * @param name The name of the function.
     * @param node the node to check - this could be a function, a method or a variable declaration.
     * @param implementation the actual function expression if `node` is a variable declaration.
     * @param container the class that contains the function, if it is a method.
     * @returns info about the function if it does return a `ModuleWithProviders` object; `null`
     * otherwise.
     */
    private parseForModuleWithProviders;
    private getDtsModuleWithProvidersFunction;
    private resolveNgModuleReference;
}

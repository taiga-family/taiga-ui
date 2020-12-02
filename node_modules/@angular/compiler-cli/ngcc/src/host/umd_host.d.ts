/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/host/umd_host" />
import * as ts from 'typescript';
import { Declaration, Import } from '../../../src/ngtsc/reflection';
import { Logger } from '../logging/logger';
import { BundleProgram } from '../packages/bundle_program';
import { FactoryMap } from '../utils';
import { Esm5ReflectionHost } from './esm5_host';
export declare class UmdReflectionHost extends Esm5ReflectionHost {
    protected umdModules: FactoryMap<ts.SourceFile, UmdModule | null>;
    protected umdExports: FactoryMap<ts.SourceFile, Map<string, Declaration<ts.Declaration>> | null>;
    protected umdImportPaths: FactoryMap<ts.ParameterDeclaration, string | null>;
    protected program: ts.Program;
    protected compilerHost: ts.CompilerHost;
    constructor(logger: Logger, isCore: boolean, src: BundleProgram, dts?: BundleProgram | null);
    getImportOfIdentifier(id: ts.Identifier): Import | null;
    getDeclarationOfIdentifier(id: ts.Identifier): Declaration | null;
    getExportsOfModule(module: ts.Node): Map<string, Declaration> | null;
    getUmdModule(sourceFile: ts.SourceFile): UmdModule | null;
    getUmdImportPath(importParameter: ts.ParameterDeclaration): string | null;
    /**
     * Get the top level statements for a module.
     *
     * In UMD modules these are the body of the UMD factory function.
     *
     * @param sourceFile The module whose statements we want.
     * @returns An array of top level statements for the given module.
     */
    protected getModuleStatements(sourceFile: ts.SourceFile): ts.Statement[];
    private computeUmdModule;
    private computeExportsOfUmdModule;
    private computeImportPath;
    private extractUmdExportDeclaration;
    private extractUmdReexports;
    /**
     * Is the identifier a parameter on a UMD factory function, e.g. `function factory(this, core)`?
     * If so then return its declaration.
     */
    private findUmdImportParameter;
    private getUmdImportedDeclaration;
    private resolveModuleName;
}
export declare function parseStatementForUmdModule(statement: ts.Statement): UmdModule | null;
export declare function getImportsOfUmdModule(umdModule: UmdModule): {
    parameter: ts.ParameterDeclaration;
    path: string;
}[];
interface UmdModule {
    wrapperFn: ts.FunctionExpression;
    factoryFn: ts.FunctionExpression;
}
export {};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/host/commonjs_host" />
import * as ts from 'typescript';
import { Declaration, Import } from '../../../src/ngtsc/reflection';
import { Logger } from '../logging/logger';
import { BundleProgram } from '../packages/bundle_program';
import { FactoryMap } from '../utils';
import { Esm5ReflectionHost } from './esm5_host';
import { NgccClassSymbol } from './ngcc_host';
export declare class CommonJsReflectionHost extends Esm5ReflectionHost {
    protected commonJsExports: FactoryMap<ts.SourceFile, Map<string, Declaration<ts.Declaration>> | null>;
    protected topLevelHelperCalls: FactoryMap<string, FactoryMap<ts.SourceFile, ts.CallExpression[]>>;
    protected program: ts.Program;
    protected compilerHost: ts.CompilerHost;
    constructor(logger: Logger, isCore: boolean, src: BundleProgram, dts?: BundleProgram | null);
    getImportOfIdentifier(id: ts.Identifier): Import | null;
    getDeclarationOfIdentifier(id: ts.Identifier): Declaration | null;
    getExportsOfModule(module: ts.Node): Map<string, Declaration> | null;
    /**
     * Search statements related to the given class for calls to the specified helper.
     *
     * In CommonJS these helper calls can be outside the class's IIFE at the top level of the
     * source file. Searching the top level statements for helpers can be expensive, so we
     * try to get helpers from the IIFE first and only fall back on searching the top level if
     * no helpers are found.
     *
     * @param classSymbol the class whose helper calls we are interested in.
     * @param helperNames the names of the helpers (e.g. `__decorate`) whose calls we are interested
     * in.
     * @returns an array of nodes of calls to the helper with the given name.
     */
    protected getHelperCallsForClass(classSymbol: NgccClassSymbol, helperNames: string[]): ts.CallExpression[];
    /**
     * Find all the helper calls at the top level of a source file.
     *
     * We cache the helper calls per source file so that we don't have to keep parsing the code for
     * each class in a file.
     *
     * @param sourceFile the source who may contain helper calls.
     * @param helperNames the names of the helpers (e.g. `__decorate`) whose calls we are interested
     * in.
     * @returns an array of nodes of calls to the helper with the given name.
     */
    private getTopLevelHelperCalls;
    private computeExportsOfCommonJsModule;
    private extractCommonJsExportDeclaration;
    private extractCommonJsReexports;
    private findCommonJsImport;
    private getCommonJsImportedDeclaration;
    private resolveModuleName;
}

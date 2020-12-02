/// <amd-module name="@angular/compiler-cli/ngcc/src/analysis/private_declarations_analyzer" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../../src/ngtsc/file_system';
import { NgccReflectionHost } from '../host/ngcc_host';
import { NgccReferencesRegistry } from './ngcc_references_registry';
export interface ExportInfo {
    identifier: string;
    from: AbsoluteFsPath;
    dtsFrom?: AbsoluteFsPath | null;
}
export declare type PrivateDeclarationsAnalyses = ExportInfo[];
/**
 * This class will analyze a program to find all the declared classes
 * (i.e. on an NgModule) that are not publicly exported via an entry-point.
 */
export declare class PrivateDeclarationsAnalyzer {
    private host;
    private referencesRegistry;
    constructor(host: NgccReflectionHost, referencesRegistry: NgccReferencesRegistry);
    analyzeProgram(program: ts.Program): PrivateDeclarationsAnalyses;
    private getRootFiles;
    private getPrivateDeclarations;
}

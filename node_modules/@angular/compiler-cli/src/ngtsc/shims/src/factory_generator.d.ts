/// <amd-module name="@angular/compiler-cli/src/ngtsc/shims/src/factory_generator" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../file_system';
import { ImportRewriter } from '../../imports';
import { ShimGenerator } from './api';
/**
 * Generates ts.SourceFiles which contain variable declarations for NgFactories for every exported
 * class of an input ts.SourceFile.
 */
export declare class FactoryGenerator implements ShimGenerator {
    private map;
    private constructor();
    get factoryFileMap(): Map<AbsoluteFsPath, AbsoluteFsPath>;
    get factoryFileNames(): AbsoluteFsPath[];
    recognize(fileName: AbsoluteFsPath): boolean;
    generate(genFilePath: AbsoluteFsPath, readFile: (fileName: string) => ts.SourceFile | null): ts.SourceFile | null;
    static forRootFiles(files: ReadonlyArray<AbsoluteFsPath>): FactoryGenerator;
}
export interface FactoryInfo {
    sourceFilePath: string;
    moduleSymbolNames: Set<string>;
}
export declare function generatedFactoryTransform(factoryMap: Map<string, FactoryInfo>, importRewriter: ImportRewriter): ts.TransformerFactory<ts.SourceFile>;

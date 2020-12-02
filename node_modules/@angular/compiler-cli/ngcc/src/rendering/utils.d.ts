/// <amd-module name="@angular/compiler-cli/ngcc/src/rendering/utils" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { AbsoluteFsPath } from '../../../src/ngtsc/file_system';
import { ImportRewriter } from '../../../src/ngtsc/imports';
/**
 * Information about a file that has been rendered.
 */
export interface FileToWrite {
    /** Path to where the file should be written. */
    path: AbsoluteFsPath;
    /** The contents of the file to be be written. */
    contents: string;
}
/**
 * Create an appropriate ImportRewriter given the parameters.
 */
export declare function getImportRewriter(r3SymbolsFile: ts.SourceFile | null, isCore: boolean, isFlat: boolean): ImportRewriter;
export declare function stripExtension<T extends string>(filePath: T): T;

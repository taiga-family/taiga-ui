/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/program" />
import { MessageBundle } from '@angular/compiler';
import * as path from 'path';
import * as ts from 'typescript';
import { CompilerHost, CompilerOptions, Program } from './api';
export declare function createProgram({ rootNames, options, host, oldProgram }: {
    rootNames: ReadonlyArray<string>;
    options: CompilerOptions;
    host: CompilerHost;
    oldProgram?: Program;
}): Program;
/**
 * Returns a function that can adjust a path from source path to out path,
 * based on an existing mapping from source to out path.
 *
 * TODO(tbosch): talk to the TypeScript team to expose their logic for calculating the `rootDir`
 * if none was specified.
 *
 * Note: This function works on normalized paths from typescript but should always return
 * POSIX normalized paths for output paths.
 */
export declare function createSrcToOutPathMapper(outDir: string | undefined, sampleSrcFileName: string | undefined, sampleOutFileName: string | undefined, host?: {
    dirname: typeof path.dirname;
    resolve: typeof path.resolve;
    relative: typeof path.relative;
}): (srcFileName: string) => string;
export declare function i18nExtract(formatName: string | null, outFile: string | null, host: ts.CompilerHost, options: CompilerOptions, bundle: MessageBundle): string[];
export declare function i18nSerialize(bundle: MessageBundle, formatName: string, options: CompilerOptions): string;
export declare function i18nGetExtension(formatName: string): string;

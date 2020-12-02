/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ExtraEntryPoint, ExtraEntryPointClass } from '../../../browser/schema';
import { SourceMapDevToolPlugin } from 'webpack';
import { ScriptTarget } from 'typescript';
export interface HashFormat {
    chunk: string;
    extract: string;
    file: string;
    script: string;
}
export declare function getOutputHashFormat(option: string, length?: number): HashFormat;
declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type NormalizedEntryPoint = Required<Omit<ExtraEntryPointClass, 'lazy'>>;
export declare function normalizeExtraEntryPoints(extraEntryPoints: ExtraEntryPoint[], defaultBundleName: string): NormalizedEntryPoint[];
export declare function getSourceMapDevTool(scriptsSourceMap: boolean | undefined, stylesSourceMap: boolean | undefined, hiddenSourceMap?: boolean, inlineSourceMap?: boolean): SourceMapDevToolPlugin;
/**
 * Returns an ES version file suffix to differentiate between various builds.
 */
export declare function getEsVersionForFileName(scriptTargetOverride: ScriptTarget | undefined, esVersionInFileName?: boolean): string;
export declare function isPolyfillsEntry(name: string): boolean;
export {};

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/transformers/util" />
import * as ts from 'typescript';
import { CompilerOptions, Diagnostic } from './api';
export declare const GENERATED_FILES: RegExp;
export declare const DTS: RegExp;
export declare const TS: RegExp;
export declare const enum StructureIsReused {
    Not = 0,
    SafeModules = 1,
    Completely = 2
}
export declare function tsStructureIsReused(program: ts.Program): StructureIsReused;
export declare function error(msg: string): never;
export declare function userError(msg: string): never;
export declare function createMessageDiagnostic(messageText: string): ts.Diagnostic & Diagnostic;
export declare function isInRootDir(fileName: string, options: CompilerOptions): string | true | null;
export declare function relativeToRootDirs(filePath: string, rootDirs: string[]): string;
/**
 * Converts a ng.Diagnostic into a ts.Diagnostic.
 * This looses some information, and also uses an incomplete object as `file`.
 *
 * I.e. only use this where the API allows only a ts.Diagnostic.
 */
export declare function ngToTsDiagnostic(ng: Diagnostic): ts.Diagnostic;

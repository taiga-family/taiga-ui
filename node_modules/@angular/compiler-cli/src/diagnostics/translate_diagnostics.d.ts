/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/diagnostics/translate_diagnostics" />
import { ParseSourceSpan } from '@angular/compiler';
import * as ts from 'typescript';
import { Diagnostic } from '../transformers/api';
export interface TypeCheckHost {
    parseSourceSpanOf(fileName: string, line: number, character: number): ParseSourceSpan | null;
}
export declare function translateDiagnostics(host: TypeCheckHost, untranslatedDiagnostics: ReadonlyArray<ts.Diagnostic>): {
    ts: ts.Diagnostic[];
    ng: Diagnostic[];
};

/// <amd-module name="@angular/compiler-cli/ngcc/src/rendering/esm5_rendering_formatter" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Statement } from '@angular/compiler';
import MagicString from 'magic-string';
import * as ts from 'typescript';
import { ImportManager } from '../../../src/ngtsc/translator';
import { CompiledClass } from '../analysis/types';
import { EsmRenderingFormatter } from './esm_rendering_formatter';
/**
 * A RenderingFormatter that works with files that use ECMAScript Module `import` and `export`
 * statements, but instead of `class` declarations it uses ES5 `function` wrappers for classes.
 */
export declare class Esm5RenderingFormatter extends EsmRenderingFormatter {
    /**
     * Add the definitions inside the IIFE of each decorated class
     */
    addDefinitions(output: MagicString, compiledClass: CompiledClass, definitions: string): void;
    /**
     * Convert a `Statement` to JavaScript code in a format suitable for rendering by this formatter.
     *
     * @param stmt The `Statement` to print.
     * @param sourceFile A `ts.SourceFile` that provides context for the statement. See
     *     `ts.Printer#printNode()` for more info.
     * @param importManager The `ImportManager` to use for managing imports.
     *
     * @return The JavaScript code corresponding to `stmt` (in the appropriate format).
     */
    printStatement(stmt: Statement, sourceFile: ts.SourceFile, importManager: ImportManager): string;
}

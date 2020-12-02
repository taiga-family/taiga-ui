/// <amd-module name="@angular/compiler-cli/ngcc/src/rendering/umd_rendering_formatter" />
import MagicString from 'magic-string';
import * as ts from 'typescript';
import { Reexport } from '../../../src/ngtsc/imports';
import { Import, ImportManager } from '../../../src/ngtsc/translator';
import { ExportInfo } from '../analysis/private_declarations_analyzer';
import { UmdReflectionHost } from '../host/umd_host';
import { Esm5RenderingFormatter } from './esm5_rendering_formatter';
/**
 * A RenderingFormatter that works with UMD files, instead of `import` and `export` statements
 * the module is an IIFE with a factory function call with dependencies, which are defined in a
 * wrapper function for AMD, CommonJS and global module formats.
 */
export declare class UmdRenderingFormatter extends Esm5RenderingFormatter {
    protected umdHost: UmdReflectionHost;
    constructor(umdHost: UmdReflectionHost, isCore: boolean);
    /**
     * Add the imports to the UMD module IIFE.
     *
     * Note that imports at "prepended" to the start of the parameter list of the factory function,
     * and so also to the arguments passed to it when it is called.
     * This is because there are scenarios where the factory function does not accept as many
     * parameters as are passed as argument in the call. For example:
     *
     * ```
     * (function (global, factory) {
     *     typeof exports === 'object' && typeof module !== 'undefined' ?
     *         factory(exports,require('x'),require('z')) :
     *     typeof define === 'function' && define.amd ?
     *         define(['exports', 'x', 'z'], factory) :
     *     (global = global || self, factory(global.myBundle = {}, global.x));
     * }(this, (function (exports, x) { ... }
     * ```
     *
     * (See that the `z` import is not being used by the factory function.)
     */
    addImports(output: MagicString, imports: Import[], file: ts.SourceFile): void;
    /**
     * Add the exports to the bottom of the UMD module factory function.
     */
    addExports(output: MagicString, entryPointBasePath: string, exports: ExportInfo[], importManager: ImportManager, file: ts.SourceFile): void;
    addDirectExports(output: MagicString, exports: Reexport[], importManager: ImportManager, file: ts.SourceFile): void;
    /**
     * Add the constants to the top of the UMD factory function.
     */
    addConstants(output: MagicString, constants: string, file: ts.SourceFile): void;
}

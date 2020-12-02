/// <amd-module name="@angular/compiler-cli/ngcc/src/rendering/commonjs_rendering_formatter" />
import MagicString from 'magic-string';
import * as ts from 'typescript';
import { Reexport } from '../../../src/ngtsc/imports';
import { Import, ImportManager } from '../../../src/ngtsc/translator';
import { ExportInfo } from '../analysis/private_declarations_analyzer';
import { NgccReflectionHost } from '../host/ngcc_host';
import { Esm5RenderingFormatter } from './esm5_rendering_formatter';
/**
 * A RenderingFormatter that works with CommonJS files, instead of `import` and `export` statements
 * the module is an IIFE with a factory function call with dependencies, which are defined in a
 * wrapper function for AMD, CommonJS and global module formats.
 */
export declare class CommonJsRenderingFormatter extends Esm5RenderingFormatter {
    protected commonJsHost: NgccReflectionHost;
    constructor(commonJsHost: NgccReflectionHost, isCore: boolean);
    /**
     *  Add the imports below any in situ imports as `require` calls.
     */
    addImports(output: MagicString, imports: Import[], file: ts.SourceFile): void;
    /**
     * Add the exports to the bottom of the file.
     */
    addExports(output: MagicString, entryPointBasePath: string, exports: ExportInfo[], importManager: ImportManager, file: ts.SourceFile): void;
    addDirectExports(output: MagicString, exports: Reexport[], importManager: ImportManager, file: ts.SourceFile): void;
    protected findEndOfImports(sf: ts.SourceFile): number;
}

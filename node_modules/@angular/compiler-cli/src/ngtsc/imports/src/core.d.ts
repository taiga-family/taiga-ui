/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/imports/src/core" />
/**
 * Rewrites imports of symbols being written into generated code.
 */
export interface ImportRewriter {
    /**
     * Should the given symbol be imported at all?
     *
     * If `true`, the symbol should be imported from the given specifier. If `false`, the symbol
     * should be referenced directly, without an import.
     */
    shouldImportSymbol(symbol: string, specifier: string): boolean;
    /**
     * Optionally rewrite a reference to an imported symbol, changing either the binding prefix or the
     * symbol name itself.
     */
    rewriteSymbol(symbol: string, specifier: string): string;
    /**
     * Optionally rewrite the given module specifier in the context of a given file.
     */
    rewriteSpecifier(specifier: string, inContextOfFile: string): string;
}
/**
 * `ImportRewriter` that does no rewriting.
 */
export declare class NoopImportRewriter implements ImportRewriter {
    shouldImportSymbol(symbol: string, specifier: string): boolean;
    rewriteSymbol(symbol: string, specifier: string): string;
    rewriteSpecifier(specifier: string, inContextOfFile: string): string;
}
/**
 * `ImportRewriter` that rewrites imports from '@angular/core' to be imported from the r3_symbols.ts
 * file instead.
 */
export declare class R3SymbolsImportRewriter implements ImportRewriter {
    private r3SymbolsPath;
    constructor(r3SymbolsPath: string);
    shouldImportSymbol(symbol: string, specifier: string): boolean;
    rewriteSymbol(symbol: string, specifier: string): string;
    rewriteSpecifier(specifier: string, inContextOfFile: string): string;
}
export declare function validateAndRewriteCoreSymbol(name: string): string;

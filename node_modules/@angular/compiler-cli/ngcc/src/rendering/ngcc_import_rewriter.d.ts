/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/rendering/ngcc_import_rewriter" />
import { ImportRewriter } from '../../../src/ngtsc/imports';
export declare class NgccFlatImportRewriter implements ImportRewriter {
    shouldImportSymbol(symbol: string, specifier: string): boolean;
    rewriteSymbol(symbol: string, specifier: string): string;
    rewriteSpecifier(originalModulePath: string, inContextOfFile: string): string;
}

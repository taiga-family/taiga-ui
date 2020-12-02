/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool/utils/imports" />
import * as ts from 'typescript';
/** Interface describing a resolved import. */
export interface Import {
    /** Name of the imported symbol. */
    symbolName: string;
    /** Module name from which the symbol has been imported. */
    moduleName: string;
}
/** Resolves the import of the specified identifier. */
export declare function getImportOfIdentifier(node: ts.Identifier, typeChecker: ts.TypeChecker): Import | null;

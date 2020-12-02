/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/constructor-signature" />
import * as ts from 'typescript';
import { Migration } from '../../update-tool/migration';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that visits every TypeScript new expression or super call and checks if
 * the parameter type signature is invalid and needs to be updated manually.
 */
export declare class ConstructorSignatureMigration extends Migration<UpgradeData> {
    data: string[];
    enabled: boolean;
    visitNode(node: ts.Node): void;
    /**
     * Method that will be called for each source file of the upgrade project. In order to
     * properly determine invalid constructor signatures, we take advantage of the pre-emit
     * diagnostics from TypeScript.
     *
     * By using the diagnostics, the migration can handle type assignability. Not using
     * diagnostics would mean that we need to use simple type equality checking which is
     * too strict. See related issue: https://github.com/Microsoft/TypeScript/issues/9879
     */
    private _visitSourceFile;
}

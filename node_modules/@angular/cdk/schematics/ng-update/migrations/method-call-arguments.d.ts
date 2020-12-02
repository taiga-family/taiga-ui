/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/method-call-arguments" />
import * as ts from 'typescript';
import { Migration } from '../../update-tool/migration';
import { MethodCallUpgradeData } from '../data';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that visits every TypeScript method call expression and checks if the
 * argument count is invalid and needs to be *manually* updated.
 */
export declare class MethodCallArgumentsMigration extends Migration<UpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: MethodCallUpgradeData[];
    enabled: boolean;
    visitNode(node: ts.Node): void;
    private _checkPropertyAccessMethodCall;
}

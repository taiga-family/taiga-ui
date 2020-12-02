/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/property-names" />
import * as ts from 'typescript';
import { Migration } from '../../update-tool/migration';
import { PropertyNameUpgradeData } from '../data';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that walks through every property access expression and updates
 * accessed properties that have been updated to a new name.
 */
export declare class PropertyNamesMigration extends Migration<UpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: PropertyNameUpgradeData[];
    enabled: boolean;
    visitNode(node: ts.Node): void;
    private _visitPropertyAccessExpression;
}

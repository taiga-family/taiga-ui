/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/class-inheritance" />
import * as ts from 'typescript';
import { Migration } from '../../update-tool/migration';
import { PropertyNameUpgradeData } from '../data/property-names';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that identifies class declarations that extend CDK or Material classes
 * which had a public property change.
 */
export declare class ClassInheritanceMigration extends Migration<UpgradeData> {
    /**
     * Map of classes that have been updated. Each class name maps to the according property
     * change data.
     */
    propertyNames: Map<string, PropertyNameUpgradeData>;
    enabled: boolean;
    init(): void;
    visitNode(node: ts.Node): void;
    private _visitClassDeclaration;
}

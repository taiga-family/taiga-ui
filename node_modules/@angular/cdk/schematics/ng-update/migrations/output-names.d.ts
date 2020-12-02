/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/output-names" />
import { ResolvedResource } from '../../update-tool/component-resource-collector';
import { Migration } from '../../update-tool/migration';
import { OutputNameUpgradeData } from '../data';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that walks through every inline or external HTML template and switches
 * changed output binding names to the proper new output name.
 */
export declare class OutputNamesMigration extends Migration<UpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: OutputNameUpgradeData[];
    enabled: boolean;
    visitTemplate(template: ResolvedResource): void;
    private _replaceOutputName;
}

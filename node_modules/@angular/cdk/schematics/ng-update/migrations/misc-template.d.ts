/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/misc-template" />
import { ResolvedResource } from '../../update-tool/component-resource-collector';
import { Migration } from '../../update-tool/migration';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that walks through every template and reports if there are
 * instances of outdated Angular CDK API that can't be migrated automatically.
 */
export declare class MiscTemplateMigration extends Migration<UpgradeData> {
    enabled: boolean;
    visitTemplate(template: ResolvedResource): void;
}

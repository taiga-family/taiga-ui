/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/migrations/input-names" />
import { ResolvedResource } from '../../update-tool/component-resource-collector';
import { Migration } from '../../update-tool/migration';
import { InputNameUpgradeData } from '../data';
import { UpgradeData } from '../upgrade-data';
/**
 * Migration that walks through every template or stylesheet and replaces outdated input
 * names to the new input name. Selectors in stylesheets could also target input
 * bindings declared as static attribute. See for example:
 *
 * e.g. `<my-component color="primary">` becomes `my-component[color]`
 */
export declare class InputNamesMigration extends Migration<UpgradeData> {
    /** Change data that upgrades to the specified target version. */
    data: InputNameUpgradeData[];
    enabled: boolean;
    visitStylesheet(stylesheet: ResolvedResource): void;
    visitTemplate(template: ResolvedResource): void;
    private _replaceInputName;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/data/class-names" />
import { VersionChanges } from '../../update-tool/version-changes';
export interface ClassNameUpgradeData {
    /** The Class name to replace. */
    replace: string;
    /** The new name for the Class. */
    replaceWith: string;
}
export declare const classNames: VersionChanges<ClassNameUpgradeData>;

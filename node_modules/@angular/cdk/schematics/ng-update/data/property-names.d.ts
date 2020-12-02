/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/data/property-names" />
import { VersionChanges } from '../../update-tool/version-changes';
export interface PropertyNameUpgradeData {
    /** The property name to replace. */
    replace: string;
    /** The new name for the property. */
    replaceWith: string;
    /** Whitelist where this replacement is made. If omitted it is made for all Classes. */
    whitelist: {
        /** Replace the property only when its type is one of the given Classes. */
        classes: string[];
    };
}
export declare const propertyNames: VersionChanges<PropertyNameUpgradeData>;

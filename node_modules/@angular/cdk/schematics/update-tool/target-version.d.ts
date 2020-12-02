/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool/target-version" />
/** Possible versions that can be automatically migrated by `ng update`. */
export declare enum TargetVersion {
    V6 = "version 6",
    V7 = "version 7",
    V8 = "version 8",
    V9 = "version 9",
    V10 = "version 10"
}
/**
 * Returns all versions that are supported by "ng update". The versions are determined
 * based on the "TargetVersion" enum.
 */
export declare function getAllVersionNames(): string[];

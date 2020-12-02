/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool/version-changes" />
import { TargetVersion } from './target-version';
export declare type VersionChanges<T> = {
    [target in TargetVersion]?: ReadableChange<T>[];
};
export declare type ReadableChange<T> = {
    pr: string;
    changes: T[];
};
/** Conditional type that unwraps the value of a version changes type. */
export declare type ValueOfChanges<T> = T extends VersionChanges<infer X> ? X : null;
/**
 * Gets the changes for a given target version from the specified version changes object.
 *
 * For readability and a good overview of breaking changes, the version change data always
 * includes the related Pull Request link. Since this data is not needed when performing the
 * upgrade, this unused data can be removed and the changes data can be flattened into an
 * easy iterable array.
 */
export declare function getChangesForTarget<T>(target: TargetVersion, data: VersionChanges<T>): T[];
/**
 * Gets all changes from the specified version changes object. This is helpful in case a migration
 * rule does not distinguish data based on the target version, but for readability the
 * upgrade data is separated for each target version.
 */
export declare function getAllChanges<T>(data: VersionChanges<T>): T[];

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/devkit-migration-rule" />
import { Rule, SchematicContext } from '@angular-devkit/schematics';
import { MigrationCtor } from '../update-tool/migration';
import { TargetVersion } from '../update-tool/target-version';
import { DevkitContext, DevkitMigrationCtor } from './devkit-migration';
import { UpgradeData } from './upgrade-data';
/** List of migrations which run for the CDK update. */
export declare const cdkMigrations: MigrationCtor<UpgradeData>[];
export declare type NullableDevkitMigration = MigrationCtor<UpgradeData | null, DevkitContext>;
declare type PostMigrationFn = (context: SchematicContext, targetVersion: TargetVersion, hasFailure: boolean) => void;
/**
 * Creates a Angular schematic rule that runs the upgrade for the
 * specified target version.
 */
export declare function createMigrationSchematicRule(targetVersion: TargetVersion, extraMigrations: NullableDevkitMigration[], upgradeData: UpgradeData, onMigrationCompleteFn?: PostMigrationFn): Rule;
/** Whether the given migration type refers to a devkit migration */
export declare function isDevkitMigration(value: MigrationCtor<any, any>): value is DevkitMigrationCtor<any>;
export {};

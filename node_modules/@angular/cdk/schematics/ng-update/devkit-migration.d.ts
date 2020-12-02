/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/ng-update/devkit-migration" />
import { SchematicContext, Tree } from '@angular-devkit/schematics';
import { WorkspaceProject } from '@schematics/angular/utility/workspace-models';
import { Constructor, Migration, PostMigrationAction } from '../update-tool/migration';
export declare type DevkitContext = {
    /** Devkit tree for the current migrations. Can be used to insert/remove files. */
    tree: Tree;
    /** Name of the project the migrations run against. */
    projectName: string;
    /** Workspace project the migrations run against. */
    project: WorkspaceProject;
    /** Absolute file system path to the workspace */
    workspaceFsPath: string;
    /** Whether the migrations run for a test target. */
    isTestTarget: boolean;
};
export declare abstract class DevkitMigration<Data> extends Migration<Data, DevkitContext> {
    /** Prints an informative message with context on the current target. */
    protected printInfo(text: string): void;
    /**
     * Optional static method that will be called once the migration of all project
     * targets has been performed. This method can be used to make changes respecting the
     * migration result of all individual targets. e.g. removing HammerJS if it
     * is not needed in any project target.
     */
    static globalPostMigration?(tree: Tree, context: SchematicContext): PostMigrationAction;
}
export declare type DevkitMigrationCtor<Data> = Constructor<DevkitMigration<Data>> & {
    [m in keyof typeof DevkitMigration]: (typeof DevkitMigration)[m];
};

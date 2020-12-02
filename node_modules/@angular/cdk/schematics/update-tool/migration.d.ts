/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool/migration" />
import * as ts from 'typescript';
import { ResolvedResource } from './component-resource-collector';
import { FileSystem } from './file-system';
import { UpdateLogger } from './logger';
import { TargetVersion } from './target-version';
import { LineAndCharacter } from './utils/line-mappings';
export interface MigrationFailure {
    filePath: string;
    message: string;
    position?: LineAndCharacter;
}
export declare type PostMigrationAction = void | {
    /** Whether the package manager should run upon migration completion. */
    runPackageManager: boolean;
};
/** Creates a constructor type for the specified type. */
export declare type Constructor<T> = (new (...args: any[]) => T);
/** Gets a constructor type for the passed migration data. */
export declare type MigrationCtor<Data, Context = never> = Constructor<Migration<Data, Context>>;
export declare abstract class Migration<Data, Context = never> {
    /** TypeScript program for the migration. */
    program: ts.Program;
    /** TypeChecker instance for the analysis program. */
    typeChecker: ts.TypeChecker;
    /** Version for which the migration rule should run. */
    targetVersion: TargetVersion;
    /** Context data for the migration. */
    context: Context;
    /** Upgrade data passed to the migration. */
    upgradeData: Data;
    /** File system that can be used for modifying files. */
    fileSystem: FileSystem;
    /** Logger that can be used to print messages as part of the migration. */
    logger: UpdateLogger;
    /** List of migration failures that need to be reported. */
    failures: MigrationFailure[];
    /** Whether the migration is enabled or not. */
    abstract enabled: boolean;
    constructor(
    /** TypeScript program for the migration. */
    program: ts.Program, 
    /** TypeChecker instance for the analysis program. */
    typeChecker: ts.TypeChecker, 
    /** Version for which the migration rule should run. */
    targetVersion: TargetVersion, 
    /** Context data for the migration. */
    context: Context, 
    /** Upgrade data passed to the migration. */
    upgradeData: Data, 
    /** File system that can be used for modifying files. */
    fileSystem: FileSystem, 
    /** Logger that can be used to print messages as part of the migration. */
    logger: UpdateLogger);
    /** Method can be used to perform global analysis of the program. */
    init(): void;
    /**
     * Method that will be called once all nodes, templates and stylesheets
     * have been visited.
     */
    postAnalysis(): void;
    /**
     * Method that will be called for each node in a given source file. Unlike tslint, this
     * function will only retrieve TypeScript nodes that need to be casted manually. This
     * allows us to only walk the program source files once per program and not per
     * migration rule (significant performance boost).
     */
    visitNode(node: ts.Node): void;
    /** Method that will be called for each Angular template in the program. */
    visitTemplate(template: ResolvedResource): void;
    /** Method that will be called for each stylesheet in the program. */
    visitStylesheet(stylesheet: ResolvedResource): void;
    /** Creates a failure with a specified message at the given node location. */
    protected createFailureAtNode(node: ts.Node, message: string): void;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/cdk/schematics/update-tool" />
import * as ts from 'typescript';
import { FileSystem } from './file-system';
import { UpdateLogger } from './logger';
import { MigrationCtor } from './migration';
import { TargetVersion } from './target-version';
/**
 * An update project that can be run against individual migrations. An update project
 * accepts a TypeScript program and a context that is provided to all migrations. The
 * context is usually not used by migrations, but in some cases migrations rely on
 * specifics from the tool that performs the update (e.g. the Angular CLI). In those cases,
 * the context can provide the necessary specifics to the migrations in a type-safe way.
 */
export declare class UpdateProject<Context> {
    private _context;
    private _program;
    private _fileSystem;
    private _analyzedFiles;
    private _logger;
    private readonly _typeChecker;
    constructor(_context: Context, _program: ts.Program, _fileSystem: FileSystem, _analyzedFiles?: Set<string>, _logger?: UpdateLogger);
    /**
     * Migrates the project to the specified target version.
     * @param migrationTypes Migrations that should be run.
     * @param target Version the project should be updated to.
     * @param data Upgrade data that is passed to all migration rules.
     * @param additionalStylesheetPaths Additional stylesheets that should be migrated, if not
     *   referenced in an Angular component. This is helpful for global stylesheets in a project.
     */
    migrate<Data>(migrationTypes: MigrationCtor<Data, Context>[], target: TargetVersion, data: Data, additionalStylesheetPaths?: string[]): {
        hasFailures: boolean;
    };
    /**
     * Creates instances of the given migrations with the specified target
     * version and data.
     */
    private _createMigrations;
    /**
     * Creates a program form the specified tsconfig and patches the host
     * to read files through the given file system.
     */
    static createProgramFromTsconfig(tsconfigFsPath: string, fs: FileSystem): ts.Program;
}

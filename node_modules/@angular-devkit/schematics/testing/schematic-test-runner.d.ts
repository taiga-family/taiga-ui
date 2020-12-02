/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { logging } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { DelegateTree, Rule, SchematicContext, SchematicEngine, TaskConfiguration, Tree } from '../src';
export declare class UnitTestTree extends DelegateTree {
    get files(): string[];
    readContent(path: string): string;
}
export declare class SchematicTestRunner {
    private _collectionName;
    private _engineHost;
    private _engine;
    private _collection;
    private _logger;
    constructor(_collectionName: string, collectionPath: string);
    get engine(): SchematicEngine<{}, {}>;
    get logger(): logging.Logger;
    get tasks(): TaskConfiguration[];
    registerCollection(collectionName: string, collectionPath: string): void;
    runSchematicAsync<SchematicSchemaT>(schematicName: string, opts?: SchematicSchemaT, tree?: Tree): Observable<UnitTestTree>;
    /**
     * @deprecated Since v8.0.0 - Use {@link SchematicTestRunner.runSchematicAsync} instead.
     * All schematics can potentially be async.
     * This synchronous variant will fail if the schematic, any of its rules, or any schematics
     * it calls are async.
     */
    runSchematic<SchematicSchemaT>(schematicName: string, opts?: SchematicSchemaT, tree?: Tree): UnitTestTree;
    runExternalSchematicAsync<SchematicSchemaT>(collectionName: string, schematicName: string, opts?: SchematicSchemaT, tree?: Tree): Observable<UnitTestTree>;
    /**
     * @deprecated Since v8.0.0 - Use {@link SchematicTestRunner.runExternalSchematicAsync} instead.
     * All schematics can potentially be async.
     * This synchronous variant will fail if the schematic, any of its rules, or any schematics
     * it calls are async.
     */
    runExternalSchematic<SchematicSchemaT>(collectionName: string, schematicName: string, opts?: SchematicSchemaT, tree?: Tree): UnitTestTree;
    callRule(rule: Rule, tree: Tree, parentContext?: Partial<SchematicContext>): Observable<Tree>;
}

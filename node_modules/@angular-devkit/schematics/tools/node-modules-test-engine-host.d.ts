/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { TaskConfiguration } from '../src/engine';
import { FileSystemSchematicContext } from './description';
import { NodeModulesEngineHost } from './node-module-engine-host';
/**
 * An EngineHost that uses a registry to super seed locations of collection.json files, but
 * revert back to using node modules resolution. This is done for testing.
 */
export declare class NodeModulesTestEngineHost extends NodeModulesEngineHost {
    private _collections;
    private _tasks;
    get tasks(): TaskConfiguration<{}>[];
    clearTasks(): void;
    registerCollection(name: string, path: string): void;
    transformContext(context: FileSystemSchematicContext): FileSystemSchematicContext;
    protected _resolveCollectionPath(name: string): string;
}

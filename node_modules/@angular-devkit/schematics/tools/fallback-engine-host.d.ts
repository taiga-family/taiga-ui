/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { Url } from 'url';
import { CollectionDescription, EngineHost, RuleFactory, SchematicDescription, Source, TaskExecutor, TypedSchematicContext } from '../src';
export declare type FallbackCollectionDescription = {
    host: EngineHost<{}, {}>;
    description: CollectionDescription<{}>;
};
export declare type FallbackSchematicDescription = {
    description: SchematicDescription<{}, {}>;
};
export declare type FallbackContext = TypedSchematicContext<FallbackCollectionDescription, FallbackSchematicDescription>;
/**
 * An EngineHost that support multiple hosts in a fallback configuration. If a host does not
 * have a collection/schematics, use the following host before giving up.
 */
export declare class FallbackEngineHost implements EngineHost<{}, {}> {
    private _hosts;
    constructor();
    addHost<CollectionT extends object, SchematicT extends object>(host: EngineHost<CollectionT, SchematicT>): void;
    createCollectionDescription(name: string): CollectionDescription<FallbackCollectionDescription>;
    createSchematicDescription(name: string, collection: CollectionDescription<FallbackCollectionDescription>): SchematicDescription<FallbackCollectionDescription, FallbackSchematicDescription> | null;
    getSchematicRuleFactory<OptionT extends object>(schematic: SchematicDescription<FallbackCollectionDescription, FallbackSchematicDescription>, collection: CollectionDescription<FallbackCollectionDescription>): RuleFactory<OptionT>;
    createSourceFromUrl(url: Url, context: FallbackContext): Source | null;
    transformOptions<OptionT extends object, ResultT extends object>(schematic: SchematicDescription<FallbackCollectionDescription, FallbackSchematicDescription>, options: OptionT, context?: FallbackContext): Observable<ResultT>;
    transformContext(context: FallbackContext): FallbackContext;
    listSchematicNames(collection: CollectionDescription<FallbackCollectionDescription>): string[];
    createTaskExecutor(name: string): Observable<TaskExecutor>;
    hasTaskExecutor(name: string): boolean;
}

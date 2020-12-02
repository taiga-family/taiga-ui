/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { Tree } from '../tree/interface';
import { Collection, Engine, ExecutionOptions, RuleFactory, Schematic, SchematicDescription, TypedSchematicContext } from './interface';
export declare class InvalidSchematicsNameException extends BaseException {
    constructor(name: string);
}
export declare class SchematicImpl<CollectionT extends object, SchematicT extends object> implements Schematic<CollectionT, SchematicT> {
    private _description;
    private _factory;
    private _collection;
    private _engine;
    constructor(_description: SchematicDescription<CollectionT, SchematicT>, _factory: RuleFactory<{}>, _collection: Collection<CollectionT, SchematicT>, _engine: Engine<CollectionT, SchematicT>);
    get description(): SchematicDescription<CollectionT, SchematicT>;
    get collection(): Collection<CollectionT, SchematicT>;
    call<OptionT extends object>(options: OptionT, host: Observable<Tree>, parentContext?: Partial<TypedSchematicContext<CollectionT, SchematicT>>, executionOptions?: Partial<ExecutionOptions>): Observable<Tree>;
}

/// <reference types="node" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException, InvalidJsonCharacterException, UnexpectedEndOfInputException } from '@angular-devkit/core';
import { Observable } from 'rxjs';
import { Url } from 'url';
import { RuleFactory, Source, TaskExecutor, TaskExecutorFactory } from '../src';
import { FileSystemCollectionDesc, FileSystemEngineHost, FileSystemSchematicContext, FileSystemSchematicDesc, FileSystemSchematicDescription } from './description';
export declare type OptionTransform<T extends object, R extends object> = (schematic: FileSystemSchematicDescription, options: T, context?: FileSystemSchematicContext) => Observable<R> | PromiseLike<R> | R;
export declare type ContextTransform = (context: FileSystemSchematicContext) => FileSystemSchematicContext;
export declare class CollectionCannotBeResolvedException extends BaseException {
    constructor(name: string);
}
export declare class InvalidCollectionJsonException extends BaseException {
    constructor(_name: string, path: string, jsonException?: UnexpectedEndOfInputException | InvalidJsonCharacterException);
}
export declare class SchematicMissingFactoryException extends BaseException {
    constructor(name: string);
}
export declare class FactoryCannotBeResolvedException extends BaseException {
    constructor(name: string);
}
export declare class CollectionMissingSchematicsMapException extends BaseException {
    constructor(name: string);
}
export declare class CollectionMissingFieldsException extends BaseException {
    constructor(name: string);
}
export declare class SchematicMissingFieldsException extends BaseException {
    constructor(name: string);
}
export declare class SchematicMissingDescriptionException extends BaseException {
    constructor(name: string);
}
export declare class SchematicNameCollisionException extends BaseException {
    constructor(name: string);
}
/**
 * A EngineHost base class that uses the file system to resolve collections. This is the base of
 * all other EngineHost provided by the tooling part of the Schematics library.
 */
export declare abstract class FileSystemEngineHostBase implements FileSystemEngineHost {
    protected abstract _resolveCollectionPath(name: string): string;
    protected abstract _resolveReferenceString(name: string, parentPath: string): {
        ref: RuleFactory<{}>;
        path: string;
    } | null;
    protected abstract _transformCollectionDescription(name: string, desc: Partial<FileSystemCollectionDesc>): FileSystemCollectionDesc;
    protected abstract _transformSchematicDescription(name: string, collection: FileSystemCollectionDesc, desc: Partial<FileSystemSchematicDesc>): FileSystemSchematicDesc;
    private _transforms;
    private _contextTransforms;
    private _taskFactories;
    listSchematicNames(collection: FileSystemCollectionDesc): string[];
    registerOptionsTransform<T extends object, R extends object>(t: OptionTransform<T, R>): void;
    registerContextTransform(t: ContextTransform): void;
    /**
     *
     * @param name
     * @return {{path: string}}
     */
    createCollectionDescription(name: string): FileSystemCollectionDesc;
    createSchematicDescription(name: string, collection: FileSystemCollectionDesc): FileSystemSchematicDesc | null;
    createSourceFromUrl(url: Url): Source | null;
    transformOptions<OptionT extends object, ResultT extends object>(schematic: FileSystemSchematicDesc, options: OptionT, context?: FileSystemSchematicContext): Observable<ResultT>;
    transformContext(context: FileSystemSchematicContext): FileSystemSchematicContext;
    getSchematicRuleFactory<OptionT extends object>(schematic: FileSystemSchematicDesc, _collection: FileSystemCollectionDesc): RuleFactory<OptionT>;
    registerTaskExecutor<T>(factory: TaskExecutorFactory<T>, options?: T): void;
    createTaskExecutor(name: string): Observable<TaskExecutor>;
    hasTaskExecutor(name: string): boolean;
}

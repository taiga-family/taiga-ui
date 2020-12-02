/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ajv from 'ajv';
import { Observable } from 'rxjs';
import { BaseException } from '../../exception/exception';
import { JsonObject } from '../interface';
import { JsonVisitor, PromptProvider, SchemaFormat, SchemaRegistry, SchemaValidator, SchemaValidatorError, SmartDefaultProvider } from './interface';
import { JsonSchema } from './schema';
export declare type UriHandler = (uri: string) => Observable<JsonObject> | Promise<JsonObject> | null | undefined;
export declare class SchemaValidationException extends BaseException {
    readonly errors: SchemaValidatorError[];
    constructor(errors?: SchemaValidatorError[], baseMessage?: string);
    static createMessages(errors?: SchemaValidatorError[]): string[];
}
export declare class CoreSchemaRegistry implements SchemaRegistry {
    private _ajv;
    private _uriCache;
    private _uriHandlers;
    private _pre;
    private _post;
    private _currentCompilationSchemaInfo?;
    private _smartDefaultKeyword;
    private _promptProvider?;
    private _sourceMap;
    constructor(formats?: SchemaFormat[]);
    private _fetch;
    /**
     * Add a transformation step before the validation of any Json.
     * @param {JsonVisitor} visitor The visitor to transform every value.
     * @param {JsonVisitor[]} deps A list of other visitors to run before.
     */
    addPreTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
    /**
     * Add a transformation step after the validation of any Json. The JSON will not be validated
     * after the POST, so if transformations are not compatible with the Schema it will not result
     * in an error.
     * @param {JsonVisitor} visitor The visitor to transform every value.
     * @param {JsonVisitor[]} deps A list of other visitors to run before.
     */
    addPostTransform(visitor: JsonVisitor, deps?: JsonVisitor[]): void;
    protected _resolver(ref: string, validate: ajv.ValidateFunction): {
        context?: ajv.ValidateFunction;
        schema?: JsonObject;
    };
    /**
     * Flatten the Schema, resolving and replacing all the refs. Makes it into a synchronous schema
     * that is also easier to traverse. Does not cache the result.
     *
     * @param schema The schema or URI to flatten.
     * @returns An Observable of the flattened schema object.
     */
    flatten(schema: JsonObject): Observable<JsonObject>;
    /**
     * Compile and return a validation function for the Schema.
     *
     * @param schema The schema to validate. If a string, will fetch the schema before compiling it
     * (using schema as a URI).
     * @returns An Observable of the Validation function.
     */
    compile(schema: JsonSchema): Observable<SchemaValidator>;
    addFormat(format: SchemaFormat): void;
    addSmartDefaultProvider<T>(source: string, provider: SmartDefaultProvider<T>): void;
    registerUriHandler(handler: UriHandler): void;
    usePromptProvider(provider: PromptProvider): void;
    private _applyPrompts;
    private static _set;
    private _applySmartDefaults;
}

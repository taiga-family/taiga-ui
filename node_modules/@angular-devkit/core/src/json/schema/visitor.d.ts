/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Observable } from 'rxjs';
import { JsonObject, JsonValue } from '../interface';
import { JsonSchemaVisitor, JsonVisitor } from './interface';
import { JsonSchema } from './schema';
export interface ReferenceResolver<ContextT> {
    (ref: string, context?: ContextT): {
        context?: ContextT;
        schema?: JsonObject;
    };
}
/**
 * Visit all the properties in a JSON object, allowing to transform them. It supports calling
 * properties synchronously or asynchronously (through Observables).
 * The original object can be mutated or replaced entirely. In case where it's replaced, the new
 * value is returned. When it's mutated though the original object will be changed.
 *
 * Please note it is possible to have an infinite loop here (which will result in a stack overflow)
 * if you return 2 objects that references each others (or the same object all the time).
 *
 * @param {JsonValue} json The Json value to visit.
 * @param {JsonVisitor} visitor A function that will be called on every items.
 * @param {JsonObject} schema A JSON schema to pass through to the visitor (where possible).
 * @param refResolver a function to resolve references in the schema.
 * @returns {Observable< | undefined>} The observable of the new root, if the root changed.
 */
export declare function visitJson<ContextT>(json: JsonValue, visitor: JsonVisitor, schema?: JsonSchema, refResolver?: ReferenceResolver<ContextT>, context?: ContextT): Observable<JsonValue>;
export declare function visitJsonSchema(schema: JsonSchema, visitor: JsonSchemaVisitor): void;

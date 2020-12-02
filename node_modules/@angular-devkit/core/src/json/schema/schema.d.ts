import { JsonObject } from '../interface';
/**
 * A specialized interface for JsonSchema (to come). JsonSchemas are also JsonObject.
 *
 * @public
 */
export declare type JsonSchema = JsonObject | boolean;
export declare function isJsonSchema(value: any): value is JsonSchema;
/**
 * Return a schema that is the merge of all subschemas, ie. it should validate all the schemas
 * that were passed in. It is possible to make an invalid schema this way, e.g. by using
 * `mergeSchemas({ type: 'number' }, { type: 'string' })`, which will never validate.
 * @param schemas All schemas to be merged.
 */
export declare function mergeSchemas(...schemas: (JsonSchema | undefined)[]): JsonSchema;

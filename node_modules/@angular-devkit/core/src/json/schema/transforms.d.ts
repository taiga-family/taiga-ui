/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { JsonValue } from '../interface';
import { JsonPointer } from './interface';
import { JsonSchema } from './schema';
export declare function addUndefinedDefaults(value: JsonValue, _pointer: JsonPointer, schema?: JsonSchema): JsonValue;

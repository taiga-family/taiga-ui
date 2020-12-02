/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BaseException, json } from '@angular-devkit/core';
import { CommandDescription, Option, SubCommandDescription } from '../models/interface';
export declare class CommandJsonPathException extends BaseException {
    readonly path: string;
    readonly name: string;
    constructor(path: string, name: string);
}
export declare function parseJsonSchemaToSubCommandDescription(name: string, jsonPath: string, registry: json.schema.SchemaRegistry, schema: json.JsonObject): Promise<SubCommandDescription>;
export declare function parseJsonSchemaToCommandDescription(name: string, jsonPath: string, registry: json.schema.SchemaRegistry, schema: json.JsonObject): Promise<CommandDescription>;
export declare function parseJsonSchemaToOptions(registry: json.schema.SchemaRegistry, schema: json.JsonObject): Promise<Option[]>;

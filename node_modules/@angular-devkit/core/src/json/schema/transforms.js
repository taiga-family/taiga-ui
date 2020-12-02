"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const interface_1 = require("../interface");
const utility_1 = require("./utility");
function addUndefinedDefaults(value, _pointer, schema) {
    if (schema === true || schema === false) {
        return value;
    }
    if (schema === undefined) {
        return value;
    }
    const types = utility_1.getTypesOfSchema(schema);
    if (types.size === 0) {
        return value;
    }
    let type;
    if (types.size === 1) {
        // only one potential type
        type = Array.from(types)[0];
    }
    else if (types.size === 2 && types.has('array') && types.has('object')) {
        // need to create one of them and array is simpler
        type = 'array';
    }
    else if (schema.properties && types.has('object')) {
        // assume object
        type = 'object';
    }
    else if (schema.items && types.has('array')) {
        // assume array
        type = 'array';
    }
    else {
        // anything else needs to be checked by the consumer anyway
        return value;
    }
    if (type === 'array') {
        return value == undefined ? [] : value;
    }
    if (type === 'object') {
        let newValue;
        if (value == undefined) {
            newValue = {};
        }
        else if (interface_1.isJsonObject(value)) {
            newValue = value;
        }
        else {
            return value;
        }
        if (!interface_1.isJsonObject(schema.properties)) {
            return newValue;
        }
        for (const [propName, schemaObject] of Object.entries(schema.properties)) {
            if (newValue[propName] !== undefined || propName === '$schema') {
                continue;
            }
            // TODO: Does not currently handle more complex schemas (oneOf/anyOf/etc.)
            const defaultValue = schemaObject.default;
            newValue[propName] = defaultValue;
        }
        return newValue;
    }
    return value;
}
exports.addUndefinedDefaults = addUndefinedDefaults;

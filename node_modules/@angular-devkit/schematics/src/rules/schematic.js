"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const interface_1 = require("../tree/interface");
const static_1 = require("../tree/static");
/**
 * Run a schematic from a separate collection.
 *
 * @param collectionName The name of the collection that contains the schematic to run.
 * @param schematicName The name of the schematic to run.
 * @param options The options to pass as input to the RuleFactory.
 */
function externalSchematic(collectionName, schematicName, options, executionOptions) {
    return (input, context) => {
        const collection = context.engine.createCollection(collectionName);
        const schematic = collection.createSchematic(schematicName);
        return schematic.call(options, rxjs_1.of(static_1.branch(input)), context, executionOptions);
    };
}
exports.externalSchematic = externalSchematic;
/**
 * Run a schematic from the same collection.
 *
 * @param schematicName The name of the schematic to run.
 * @param options The options to pass as input to the RuleFactory.
 */
function schematic(schematicName, options, executionOptions) {
    return (input, context) => {
        const collection = context.schematic.collection;
        const schematic = collection.createSchematic(schematicName, true);
        return schematic.call(options, rxjs_1.of(static_1.branch(input)), context, executionOptions).pipe(operators_1.last(), operators_1.map(x => {
            // We allow overwrite conflict here because they're the only merge conflict we particularly
            // don't want to deal with; the input tree might have an OVERWRITE which the sub
            input.merge(x, interface_1.MergeStrategy.AllowOverwriteConflict);
            return input;
        }));
    };
}
exports.schematic = schematic;

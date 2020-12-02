"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    return (options, context) => {
        const maybeWorkflow = context.engine.workflow;
        const collection = options.collection || context.schematic.collection.description.name;
        if (!maybeWorkflow) {
            throw new Error('Need Workflow to support executing schematics as post tasks.');
        }
        return maybeWorkflow.execute({
            collection: collection,
            schematic: options.name,
            options: options.options,
            // Allow private when calling from the same collection.
            allowPrivate: collection == context.schematic.collection.description.name,
        });
    };
}
exports.default = default_1;

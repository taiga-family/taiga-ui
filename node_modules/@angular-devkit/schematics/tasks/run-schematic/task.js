"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options_1 = require("./options");
class RunSchematicTask {
    constructor(c, s, o) {
        if (arguments.length == 2 || typeof s !== 'string') {
            o = s;
            s = c;
            c = null;
        }
        this._collection = c;
        this._schematic = s;
        this._options = o;
    }
    toConfiguration() {
        return {
            name: options_1.RunSchematicName,
            options: {
                collection: this._collection,
                name: this._schematic,
                options: this._options,
            },
        };
    }
}
exports.RunSchematicTask = RunSchematicTask;

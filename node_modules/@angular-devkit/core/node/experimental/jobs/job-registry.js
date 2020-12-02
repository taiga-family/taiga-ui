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
const src_1 = require("../../../src");
class NodeModuleJobRegistry {
    _resolve(name) {
        try {
            return require.resolve(name);
        }
        catch (e) {
            if (e.code === 'MODULE_NOT_FOUND') {
                return null;
            }
            throw e;
        }
    }
    /**
     * Get a job description for a named job.
     *
     * @param name The name of the job.
     * @returns A description, or null if the job is not registered.
     */
    get(name) {
        const [moduleName, exportName] = name.split(/#/, 2);
        const resolvedPath = this._resolve(moduleName);
        if (!resolvedPath) {
            return rxjs_1.of(null);
        }
        const pkg = require(resolvedPath);
        const handler = pkg[exportName || 'default'];
        if (!handler) {
            return rxjs_1.of(null);
        }
        // TODO: this should be unknown
        // tslint:disable-next-line:no-any
        function _getValue(...fields) {
            return fields.find(x => src_1.schema.isJsonSchema(x)) || true;
        }
        const argument = _getValue(pkg.argument, handler.argument);
        const input = _getValue(pkg.input, handler.input);
        const output = _getValue(pkg.output, handler.output);
        const channels = _getValue(pkg.channels, handler.channels);
        return rxjs_1.of(Object.assign(handler.bind(undefined), {
            jobDescription: {
                argument,
                input,
                output,
                channels,
            },
        }));
    }
}
exports.NodeModuleJobRegistry = NodeModuleJobRegistry;

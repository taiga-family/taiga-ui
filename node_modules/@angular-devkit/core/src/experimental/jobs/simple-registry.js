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
const json_1 = require("../../json");
const api_1 = require("./api");
const exception_1 = require("./exception");
/**
 * A simple job registry that keep a map of JobName => JobHandler internally.
 */
class SimpleJobRegistry {
    constructor() {
        this._jobNames = new Map();
    }
    get(name) {
        return rxjs_1.of(this._jobNames.get(name) || null);
    }
    register(nameOrHandler, handlerOrOptions = {}, options = {}) {
        // Switch on the arguments.
        if (typeof nameOrHandler == 'string') {
            if (!api_1.isJobHandler(handlerOrOptions)) {
                // This is an error.
                throw new TypeError('Expected a JobHandler as second argument.');
            }
            this._register(nameOrHandler, handlerOrOptions, options);
        }
        else if (api_1.isJobHandler(nameOrHandler)) {
            if (typeof handlerOrOptions !== 'object') {
                // This is an error.
                throw new TypeError('Expected an object options as second argument.');
            }
            const name = options.name || nameOrHandler.jobDescription.name || handlerOrOptions.name;
            if (name === undefined) {
                throw new TypeError('Expected name to be a string.');
            }
            this._register(name, nameOrHandler, options);
        }
        else {
            throw new TypeError('Unrecognized arguments.');
        }
    }
    _register(name, handler, options) {
        if (this._jobNames.has(name)) {
            // We shouldn't allow conflicts.
            throw new exception_1.JobNameAlreadyRegisteredException(name);
        }
        // Merge all fields with the ones in the handler (to make sure we respect the handler).
        const argument = json_1.schema.mergeSchemas(handler.jobDescription.argument, options.argument);
        const input = json_1.schema.mergeSchemas(handler.jobDescription.input, options.input);
        const output = json_1.schema.mergeSchemas(handler.jobDescription.output, options.output);
        // Create the job description.
        const jobDescription = {
            name,
            argument,
            output,
            input,
        };
        this._jobNames.set(name, Object.assign(handler.bind(undefined), { jobDescription }));
    }
    /**
     * Returns the job names of all jobs.
     */
    getJobNames() {
        return [...this._jobNames.keys()];
    }
}
exports.SimpleJobRegistry = SimpleJobRegistry;

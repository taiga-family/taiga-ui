"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const call_1 = require("../rules/call");
const scoped_1 = require("../tree/scoped");
class InvalidSchematicsNameException extends core_1.BaseException {
    constructor(name) {
        super(`Schematics has invalid name: "${name}".`);
    }
}
exports.InvalidSchematicsNameException = InvalidSchematicsNameException;
class SchematicImpl {
    constructor(_description, _factory, _collection, _engine) {
        this._description = _description;
        this._factory = _factory;
        this._collection = _collection;
        this._engine = _engine;
        if (!_description.name.match(/^[-@/_.a-zA-Z0-9]+$/)) {
            throw new InvalidSchematicsNameException(_description.name);
        }
    }
    get description() { return this._description; }
    get collection() { return this._collection; }
    call(options, host, parentContext, executionOptions) {
        const context = this._engine.createContext(this, parentContext, executionOptions);
        return host
            .pipe(operators_1.first(), operators_1.concatMap(tree => this._engine.transformOptions(this, options, context).pipe(operators_1.map(o => [tree, o]))), operators_1.concatMap(([tree, transformedOptions]) => {
            let input;
            let scoped = false;
            if (executionOptions && executionOptions.scope) {
                scoped = true;
                input = new scoped_1.ScopedTree(tree, executionOptions.scope);
            }
            else {
                input = tree;
            }
            return call_1.callRule(this._factory(transformedOptions), rxjs_1.of(input), context).pipe(operators_1.map(output => {
                if (output === input) {
                    return tree;
                }
                else if (scoped) {
                    tree.merge(output);
                    return tree;
                }
                else {
                    return output;
                }
            }));
        }));
    }
}
exports.SchematicImpl = SchematicImpl;

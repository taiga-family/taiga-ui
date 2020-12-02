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
const src_1 = require("../src");
/**
 * An EngineHost that support multiple hosts in a fallback configuration. If a host does not
 * have a collection/schematics, use the following host before giving up.
 */
class FallbackEngineHost {
    constructor() {
        this._hosts = [];
    }
    addHost(host) {
        this._hosts.push(host);
    }
    createCollectionDescription(name) {
        for (const host of this._hosts) {
            try {
                const description = host.createCollectionDescription(name);
                return { name, host, description };
            }
            catch (_) {
            }
        }
        throw new src_1.UnknownCollectionException(name);
    }
    createSchematicDescription(name, collection) {
        const description = collection.host.createSchematicDescription(name, collection.description);
        if (!description) {
            return null;
        }
        return { name, collection, description };
    }
    getSchematicRuleFactory(schematic, collection) {
        return collection.host.getSchematicRuleFactory(schematic.description, collection.description);
    }
    createSourceFromUrl(url, context) {
        return context.schematic.collection.description.host.createSourceFromUrl(url, context);
    }
    transformOptions(schematic, options, context) {
        // tslint:disable-next-line:no-any https://github.com/ReactiveX/rxjs/issues/3989
        return (rxjs_1.of(options)
            .pipe(...this._hosts
            .map(host => operators_1.mergeMap((opt) => host.transformOptions(schematic, opt, context)))));
    }
    transformContext(context) {
        let result = context;
        this._hosts.forEach(host => {
            result = (host.transformContext(result) || result);
        });
        return result;
    }
    listSchematicNames(collection) {
        const allNames = new Set();
        this._hosts.forEach(host => {
            try {
                host.listSchematicNames(collection.description).forEach(name => allNames.add(name));
            }
            catch (_) { }
        });
        return [...allNames];
    }
    createTaskExecutor(name) {
        for (const host of this._hosts) {
            if (host.hasTaskExecutor(name)) {
                return host.createTaskExecutor(name);
            }
        }
        return rxjs_1.throwError(new src_1.UnregisteredTaskException(name));
    }
    hasTaskExecutor(name) {
        for (const host of this._hosts) {
            if (host.hasTaskExecutor(name)) {
                return true;
            }
        }
        return false;
    }
}
exports.FallbackEngineHost = FallbackEngineHost;

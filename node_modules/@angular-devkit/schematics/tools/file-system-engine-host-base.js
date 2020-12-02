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
const node_1 = require("@angular-devkit/core/node");
const fs_1 = require("fs");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../src");
const file_system_utility_1 = require("./file-system-utility");
class CollectionCannotBeResolvedException extends core_1.BaseException {
    constructor(name) {
        super(`Collection ${JSON.stringify(name)} cannot be resolved.`);
    }
}
exports.CollectionCannotBeResolvedException = CollectionCannotBeResolvedException;
class InvalidCollectionJsonException extends core_1.BaseException {
    constructor(_name, path, jsonException) {
        let msg = `Collection JSON at path ${JSON.stringify(path)} is invalid.`;
        if (jsonException) {
            msg = `${msg} ${jsonException.message}`;
        }
        super(msg);
    }
}
exports.InvalidCollectionJsonException = InvalidCollectionJsonException;
class SchematicMissingFactoryException extends core_1.BaseException {
    constructor(name) {
        super(`Schematic ${JSON.stringify(name)} is missing a factory.`);
    }
}
exports.SchematicMissingFactoryException = SchematicMissingFactoryException;
class FactoryCannotBeResolvedException extends core_1.BaseException {
    constructor(name) {
        super(`Schematic ${JSON.stringify(name)} cannot resolve the factory.`);
    }
}
exports.FactoryCannotBeResolvedException = FactoryCannotBeResolvedException;
class CollectionMissingSchematicsMapException extends core_1.BaseException {
    constructor(name) { super(`Collection "${name}" does not have a schematics map.`); }
}
exports.CollectionMissingSchematicsMapException = CollectionMissingSchematicsMapException;
class CollectionMissingFieldsException extends core_1.BaseException {
    constructor(name) { super(`Collection "${name}" is missing fields.`); }
}
exports.CollectionMissingFieldsException = CollectionMissingFieldsException;
class SchematicMissingFieldsException extends core_1.BaseException {
    constructor(name) { super(`Schematic "${name}" is missing fields.`); }
}
exports.SchematicMissingFieldsException = SchematicMissingFieldsException;
class SchematicMissingDescriptionException extends core_1.BaseException {
    constructor(name) { super(`Schematics "${name}" does not have a description.`); }
}
exports.SchematicMissingDescriptionException = SchematicMissingDescriptionException;
class SchematicNameCollisionException extends core_1.BaseException {
    constructor(name) {
        super(`Schematics/alias ${JSON.stringify(name)} collides with another alias or schematic`
            + ' name.');
    }
}
exports.SchematicNameCollisionException = SchematicNameCollisionException;
/**
 * A EngineHost base class that uses the file system to resolve collections. This is the base of
 * all other EngineHost provided by the tooling part of the Schematics library.
 */
class FileSystemEngineHostBase {
    constructor() {
        this._transforms = [];
        this._contextTransforms = [];
        this._taskFactories = new Map();
    }
    listSchematicNames(collection) {
        const schematics = [];
        for (const key of Object.keys(collection.schematics)) {
            const schematic = collection.schematics[key];
            if (schematic.hidden || schematic.private) {
                continue;
            }
            // If extends is present without a factory it is an alias, do not return it
            //   unless it is from another collection.
            if (!schematic.extends || schematic.factory) {
                schematics.push(key);
            }
            else if (schematic.extends && schematic.extends.indexOf(':') !== -1) {
                schematics.push(key);
            }
        }
        return schematics;
    }
    registerOptionsTransform(t) {
        this._transforms.push(t);
    }
    registerContextTransform(t) {
        this._contextTransforms.push(t);
    }
    /**
     *
     * @param name
     * @return {{path: string}}
     */
    createCollectionDescription(name) {
        const path = this._resolveCollectionPath(name);
        const jsonValue = file_system_utility_1.readJsonFile(path);
        if (!jsonValue || typeof jsonValue != 'object' || Array.isArray(jsonValue)) {
            throw new InvalidCollectionJsonException(name, path);
        }
        // normalize extends property to an array
        if (typeof jsonValue['extends'] === 'string') {
            jsonValue['extends'] = [jsonValue['extends']];
        }
        const description = this._transformCollectionDescription(name, {
            ...jsonValue,
            path,
        });
        if (!description || !description.name) {
            throw new InvalidCollectionJsonException(name, path);
        }
        // Validate aliases.
        const allNames = Object.keys(description.schematics);
        for (const schematicName of Object.keys(description.schematics)) {
            const aliases = description.schematics[schematicName].aliases || [];
            for (const alias of aliases) {
                if (allNames.indexOf(alias) != -1) {
                    throw new SchematicNameCollisionException(alias);
                }
            }
            allNames.push(...aliases);
        }
        return description;
    }
    createSchematicDescription(name, collection) {
        // Resolve aliases first.
        for (const schematicName of Object.keys(collection.schematics)) {
            const schematicDescription = collection.schematics[schematicName];
            if (schematicDescription.aliases && schematicDescription.aliases.indexOf(name) != -1) {
                name = schematicName;
                break;
            }
        }
        if (!(name in collection.schematics)) {
            return null;
        }
        const collectionPath = path_1.dirname(collection.path);
        const partialDesc = collection.schematics[name];
        if (!partialDesc) {
            return null;
        }
        if (partialDesc.extends) {
            const index = partialDesc.extends.indexOf(':');
            const collectionName = index !== -1 ? partialDesc.extends.substr(0, index) : null;
            const schematicName = index === -1 ?
                partialDesc.extends : partialDesc.extends.substr(index + 1);
            if (collectionName !== null) {
                const extendCollection = this.createCollectionDescription(collectionName);
                return this.createSchematicDescription(schematicName, extendCollection);
            }
            else {
                return this.createSchematicDescription(schematicName, collection);
            }
        }
        // Use any on this ref as we don't have the OptionT here, but we don't need it (we only need
        // the path).
        if (!partialDesc.factory) {
            throw new SchematicMissingFactoryException(name);
        }
        const resolvedRef = this._resolveReferenceString(partialDesc.factory, collectionPath);
        if (!resolvedRef) {
            throw new FactoryCannotBeResolvedException(name);
        }
        let schema = partialDesc.schema;
        let schemaJson = undefined;
        if (schema) {
            if (!path_1.isAbsolute(schema)) {
                schema = path_1.join(collectionPath, schema);
            }
            schemaJson = file_system_utility_1.readJsonFile(schema);
        }
        // The schematic path is used to resolve URLs.
        // We should be able to just do `dirname(resolvedRef.path)` but for compatibility with
        // Bazel under Windows this directory needs to be resolved from the collection instead.
        // This is needed because on Bazel under Windows the data files (such as the collection or
        // url files) are not in the same place as the compiled JS.
        const maybePath = path_1.join(collectionPath, partialDesc.factory);
        const path = fs_1.existsSync(maybePath) && fs_1.statSync(maybePath).isDirectory()
            ? maybePath : path_1.dirname(maybePath);
        return this._transformSchematicDescription(name, collection, {
            ...partialDesc,
            schema,
            schemaJson,
            name,
            path,
            factoryFn: resolvedRef.ref,
            collection,
        });
    }
    createSourceFromUrl(url) {
        switch (url.protocol) {
            case null:
            case 'file:':
                return (context) => {
                    // Resolve all file:///a/b/c/d from the schematic's own path, and not the current
                    // path.
                    const root = core_1.normalize(path_1.resolve(context.schematic.description.path, url.path || ''));
                    return new src_1.HostCreateTree(new core_1.virtualFs.ScopedHost(new node_1.NodeJsSyncHost(), root));
                };
        }
        return null;
    }
    transformOptions(schematic, options, context) {
        // tslint:disable-next-line:no-any https://github.com/ReactiveX/rxjs/issues/3989
        return (rxjs_1.of(options)
            .pipe(...this._transforms.map(tFn => operators_1.mergeMap((opt) => {
            const newOptions = tFn(schematic, opt, context);
            if (rxjs_1.isObservable(newOptions)) {
                return newOptions;
            }
            else if (core_1.isPromise(newOptions)) {
                return rxjs_1.from(newOptions);
            }
            else {
                return rxjs_1.of(newOptions);
            }
        }))));
    }
    transformContext(context) {
        // tslint:disable-next-line:no-any https://github.com/ReactiveX/rxjs/issues/3989
        return this._contextTransforms.reduce((acc, curr) => curr(acc), context);
    }
    getSchematicRuleFactory(schematic, _collection) {
        return schematic.factoryFn;
    }
    registerTaskExecutor(factory, options) {
        this._taskFactories.set(factory.name, () => rxjs_1.from(factory.create(options)));
    }
    createTaskExecutor(name) {
        const factory = this._taskFactories.get(name);
        if (factory) {
            return factory();
        }
        return rxjs_1.throwError(new src_1.UnregisteredTaskException(name));
    }
    hasTaskExecutor(name) {
        return this._taskFactories.has(name);
    }
}
exports.FileSystemEngineHostBase = FileSystemEngineHostBase;

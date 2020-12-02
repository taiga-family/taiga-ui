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
const path_1 = require("path");
const export_ref_1 = require("./export-ref");
const file_system_engine_host_base_1 = require("./file-system-engine-host-base");
const file_system_utility_1 = require("./file-system-utility");
class NodePackageDoesNotSupportSchematics extends core_1.BaseException {
    constructor(name) {
        super(`Package ${JSON.stringify(name)} was found but does not support schematics.`);
    }
}
exports.NodePackageDoesNotSupportSchematics = NodePackageDoesNotSupportSchematics;
/**
 * A simple EngineHost that uses NodeModules to resolve collections.
 */
class NodeModulesEngineHost extends file_system_engine_host_base_1.FileSystemEngineHostBase {
    constructor(paths) {
        super();
        this.paths = paths;
    }
    resolve(name, requester, references = new Set()) {
        if (requester) {
            if (references.has(requester)) {
                references.add(requester);
                throw new Error('Circular schematic reference detected: ' + JSON.stringify(Array.from(references)));
            }
            else {
                references.add(requester);
            }
        }
        const relativeBase = requester ? path_1.dirname(requester) : process.cwd();
        let collectionPath = undefined;
        if (name.startsWith('.')) {
            name = path_1.resolve(relativeBase, name);
        }
        const resolveOptions = {
            paths: requester ? [path_1.dirname(requester), ...(this.paths || [])] : this.paths,
        };
        // Try to resolve as a package
        try {
            const packageJsonPath = require.resolve(path_1.join(name, 'package.json'), resolveOptions);
            const { schematics } = require(packageJsonPath);
            if (!schematics || typeof schematics !== 'string') {
                throw new NodePackageDoesNotSupportSchematics(name);
            }
            collectionPath = this.resolve(schematics, packageJsonPath, references);
        }
        catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') {
                throw e;
            }
        }
        // If not a package, try to resolve as a file
        if (!collectionPath) {
            try {
                collectionPath = require.resolve(name, resolveOptions);
            }
            catch (e) {
                if (e.code !== 'MODULE_NOT_FOUND') {
                    throw e;
                }
            }
        }
        // If not a package or a file, error
        if (!collectionPath) {
            throw new file_system_engine_host_base_1.CollectionCannotBeResolvedException(name);
        }
        return collectionPath;
    }
    _resolveCollectionPath(name) {
        const collectionPath = this.resolve(name);
        try {
            file_system_utility_1.readJsonFile(collectionPath);
            return collectionPath;
        }
        catch (e) {
            if (e instanceof core_1.InvalidJsonCharacterException || e instanceof core_1.UnexpectedEndOfInputException) {
                throw new file_system_engine_host_base_1.InvalidCollectionJsonException(name, collectionPath, e);
            }
            else {
                throw e;
            }
        }
    }
    _resolveReferenceString(refString, parentPath) {
        const ref = new export_ref_1.ExportStringRef(refString, parentPath);
        if (!ref.ref) {
            return null;
        }
        return { ref: ref.ref, path: ref.module };
    }
    _transformCollectionDescription(name, desc) {
        if (!desc.schematics || typeof desc.schematics != 'object') {
            throw new file_system_engine_host_base_1.CollectionMissingSchematicsMapException(name);
        }
        return {
            ...desc,
            name,
        };
    }
    _transformSchematicDescription(name, _collection, desc) {
        if (!desc.factoryFn || !desc.path || !desc.description) {
            throw new file_system_engine_host_base_1.SchematicMissingFieldsException(name);
        }
        return desc;
    }
}
exports.NodeModulesEngineHost = NodeModulesEngineHost;

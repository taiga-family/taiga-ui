"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs_1 = require("fs");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../src");
const export_ref_1 = require("./export-ref");
const file_system_engine_host_base_1 = require("./file-system-engine-host-base");
/**
 * A simple EngineHost that uses a root with one directory per collection inside of it. The
 * collection declaration follows the same rules as the regular FileSystemEngineHostBase.
 */
class FileSystemEngineHost extends file_system_engine_host_base_1.FileSystemEngineHostBase {
    constructor(_root) {
        super();
        this._root = _root;
    }
    _resolveCollectionPath(name) {
        try {
            // Allow `${_root}/${name}.json` as a collection.
            const maybePath = require.resolve(path_1.join(this._root, name + '.json'));
            if (fs_1.existsSync(maybePath)) {
                return maybePath;
            }
        }
        catch (error) { }
        try {
            // Allow `${_root}/${name}/collection.json.
            const maybePath = require.resolve(path_1.join(this._root, name, 'collection.json'));
            if (fs_1.existsSync(maybePath)) {
                return maybePath;
            }
        }
        catch (error) { }
        throw new file_system_engine_host_base_1.CollectionCannotBeResolvedException(name);
    }
    _resolveReferenceString(refString, parentPath) {
        // Use the same kind of export strings as NodeModule.
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
    hasTaskExecutor(name) {
        if (super.hasTaskExecutor(name)) {
            return true;
        }
        try {
            const maybePath = require.resolve(path_1.join(this._root, name));
            if (fs_1.existsSync(maybePath)) {
                return true;
            }
        }
        catch (_a) { }
        return false;
    }
    createTaskExecutor(name) {
        if (!super.hasTaskExecutor(name)) {
            try {
                const path = require.resolve(path_1.join(this._root, name));
                return rxjs_1.from(Promise.resolve().then(() => require(path)).then(mod => mod.default())).pipe(operators_1.catchError(() => rxjs_1.throwError(new src_1.UnregisteredTaskException(name))));
            }
            catch (_a) { }
        }
        return super.createTaskExecutor(name);
    }
}
exports.FileSystemEngineHost = FileSystemEngineHost;

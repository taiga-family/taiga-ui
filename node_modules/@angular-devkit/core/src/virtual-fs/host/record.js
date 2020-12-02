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
const exception_1 = require("../../exception");
const memory_1 = require("./memory");
/**
 * A Host that records changes to the underlying Host, while keeping a record of Create, Overwrite,
 * Rename and Delete of files.
 *
 * This is fully compatible with Host, but will keep a staging of every changes asked. That staging
 * follows the principle of the Tree (e.g. can create a file that already exists).
 *
 * Using `create()` and `overwrite()` will force those operations, but using `write` will add
 * the create/overwrite records IIF the files does/doesn't already exist.
 */
class CordHost extends memory_1.SimpleMemoryHost {
    constructor(_back) {
        super();
        this._back = _back;
        this._filesToCreate = new Set();
        this._filesToRename = new Map();
        this._filesToRenameRevert = new Map();
        this._filesToDelete = new Set();
        this._filesToOverwrite = new Set();
    }
    get backend() { return this._back; }
    get capabilities() {
        // Our own host is always Synchronous, but the backend might not be.
        return {
            synchronous: this._back.capabilities.synchronous,
        };
    }
    /**
     * Create a copy of this host, including all actions made.
     * @returns {CordHost} The carbon copy.
     */
    clone() {
        const dolly = new CordHost(this._back);
        dolly._cache = new Map(this._cache);
        dolly._filesToCreate = new Set(this._filesToCreate);
        dolly._filesToRename = new Map(this._filesToRename);
        dolly._filesToRenameRevert = new Map(this._filesToRenameRevert);
        dolly._filesToDelete = new Set(this._filesToDelete);
        dolly._filesToOverwrite = new Set(this._filesToOverwrite);
        return dolly;
    }
    /**
     * Commit the changes recorded to a Host. It is assumed that the host does have the same structure
     * as the host that was used for backend (could be the same host).
     * @param host The host to create/delete/rename/overwrite files to.
     * @param force Whether to skip existence checks when creating/overwriting. This is
     *   faster but might lead to incorrect states. Because Hosts natively don't support creation
     *   versus overwriting (it's only writing), we check for existence before completing a request.
     * @returns An observable that completes when done, or error if an error occured.
     */
    commit(host, force = false) {
        // Really commit everything to the actual host.
        return rxjs_1.from(this.records()).pipe(operators_1.concatMap(record => {
            switch (record.kind) {
                case 'delete': return host.delete(record.path);
                case 'rename': return host.rename(record.from, record.to);
                case 'create':
                    return host.exists(record.path).pipe(operators_1.switchMap(exists => {
                        if (exists && !force) {
                            return rxjs_1.throwError(new exception_1.FileAlreadyExistException(record.path));
                        }
                        else {
                            return host.write(record.path, record.content);
                        }
                    }));
                case 'overwrite':
                    return host.exists(record.path).pipe(operators_1.switchMap(exists => {
                        if (!exists && !force) {
                            return rxjs_1.throwError(new exception_1.FileDoesNotExistException(record.path));
                        }
                        else {
                            return host.write(record.path, record.content);
                        }
                    }));
            }
        }), operators_1.reduce(() => { }));
    }
    records() {
        return [
            ...[...this._filesToDelete.values()].map(path => ({
                kind: 'delete', path,
            })),
            ...[...this._filesToRename.entries()].map(([from, to]) => ({
                kind: 'rename', from, to,
            })),
            ...[...this._filesToCreate.values()].map(path => ({
                kind: 'create', path, content: this._read(path),
            })),
            ...[...this._filesToOverwrite.values()].map(path => ({
                kind: 'overwrite', path, content: this._read(path),
            })),
        ];
    }
    /**
     * Specialized version of {@link CordHost#write} which forces the creation of a file whether it
     * exists or not.
     * @param {} path
     * @param {FileBuffer} content
     * @returns {Observable<void>}
     */
    create(path, content) {
        if (super._exists(path)) {
            throw new exception_1.FileAlreadyExistException(path);
        }
        if (this._filesToDelete.has(path)) {
            this._filesToDelete.delete(path);
            this._filesToOverwrite.add(path);
        }
        else {
            this._filesToCreate.add(path);
        }
        return super.write(path, content);
    }
    overwrite(path, content) {
        return this.isDirectory(path).pipe(operators_1.switchMap(isDir => {
            if (isDir) {
                return rxjs_1.throwError(new exception_1.PathIsDirectoryException(path));
            }
            return this.exists(path);
        }), operators_1.switchMap(exists => {
            if (!exists) {
                return rxjs_1.throwError(new exception_1.FileDoesNotExistException(path));
            }
            if (!this._filesToCreate.has(path)) {
                this._filesToOverwrite.add(path);
            }
            return super.write(path, content);
        }));
    }
    write(path, content) {
        return this.exists(path).pipe(operators_1.switchMap(exists => {
            if (exists) {
                // It exists, but might be being renamed or deleted. In that case we want to create it.
                if (this.willRename(path) || this.willDelete(path)) {
                    return this.create(path, content);
                }
                else {
                    return this.overwrite(path, content);
                }
            }
            else {
                return this.create(path, content);
            }
        }));
    }
    read(path) {
        if (this._exists(path)) {
            return super.read(path);
        }
        return this._back.read(path);
    }
    delete(path) {
        if (this._exists(path)) {
            if (this._filesToCreate.has(path)) {
                this._filesToCreate.delete(path);
            }
            else if (this._filesToOverwrite.has(path)) {
                this._filesToOverwrite.delete(path);
                this._filesToDelete.add(path);
            }
            else {
                const maybeOrigin = this._filesToRenameRevert.get(path);
                if (maybeOrigin) {
                    this._filesToRenameRevert.delete(path);
                    this._filesToRename.delete(maybeOrigin);
                    this._filesToDelete.add(maybeOrigin);
                }
                else {
                    return rxjs_1.throwError(new exception_1.UnknownException(`This should never happen. Path: ${JSON.stringify(path)}.`));
                }
            }
            return super.delete(path);
        }
        else {
            return this._back.exists(path).pipe(operators_1.switchMap(exists => {
                if (exists) {
                    this._filesToDelete.add(path);
                    return rxjs_1.of();
                }
                else {
                    return rxjs_1.throwError(new exception_1.FileDoesNotExistException(path));
                }
            }));
        }
    }
    rename(from, to) {
        return rxjs_1.concat(this.exists(to), this.exists(from)).pipe(operators_1.toArray(), operators_1.switchMap(([existTo, existFrom]) => {
            if (!existFrom) {
                return rxjs_1.throwError(new exception_1.FileDoesNotExistException(from));
            }
            if (from === to) {
                return rxjs_1.EMPTY;
            }
            if (existTo) {
                return rxjs_1.throwError(new exception_1.FileAlreadyExistException(to));
            }
            // If we're renaming a file that's been created, shortcircuit to creating the `to` path.
            if (this._filesToCreate.has(from)) {
                this._filesToCreate.delete(from);
                this._filesToCreate.add(to);
                return super.rename(from, to);
            }
            if (this._filesToOverwrite.has(from)) {
                this._filesToOverwrite.delete(from);
                // Recursively call this function. This is so we don't repeat the bottom logic. This
                // if will be by-passed because we just deleted the `from` path from files to overwrite.
                return rxjs_1.concat(this.rename(from, to), new rxjs_1.Observable(x => {
                    this._filesToOverwrite.add(to);
                    x.complete();
                }));
            }
            if (this._filesToDelete.has(to)) {
                this._filesToDelete.delete(to);
                this._filesToDelete.add(from);
                this._filesToOverwrite.add(to);
                // We need to delete the original and write the new one.
                return this.read(from).pipe(operators_1.map(content => this._write(to, content)));
            }
            const maybeTo1 = this._filesToRenameRevert.get(from);
            if (maybeTo1) {
                // We already renamed to this file (A => from), let's rename the former to the new
                // path (A => to).
                this._filesToRename.delete(maybeTo1);
                this._filesToRenameRevert.delete(from);
                from = maybeTo1;
            }
            this._filesToRename.set(from, to);
            this._filesToRenameRevert.set(to, from);
            // If the file is part of our data, just rename it internally.
            if (this._exists(from)) {
                return super.rename(from, to);
            }
            else {
                // Create a file with the same content.
                return this._back.read(from).pipe(operators_1.switchMap(content => super.write(to, content)));
            }
        }));
    }
    list(path) {
        return rxjs_1.concat(super.list(path), this._back.list(path)).pipe(operators_1.reduce((list, curr) => {
            curr.forEach(elem => list.add(elem));
            return list;
        }, new Set()), operators_1.map(set => [...set]));
    }
    exists(path) {
        return this._exists(path)
            ? rxjs_1.of(true)
            : ((this.willDelete(path) || this.willRename(path)) ? rxjs_1.of(false) : this._back.exists(path));
    }
    isDirectory(path) {
        return this._exists(path) ? super.isDirectory(path) : this._back.isDirectory(path);
    }
    isFile(path) {
        return this._exists(path)
            ? super.isFile(path)
            : ((this.willDelete(path) || this.willRename(path)) ? rxjs_1.of(false) : this._back.isFile(path));
    }
    stat(path) {
        return this._exists(path)
            ? super.stat(path)
            : ((this.willDelete(path) || this.willRename(path)) ? rxjs_1.of(null) : this._back.stat(path));
    }
    watch(path, options) {
        // Watching not supported.
        return null;
    }
    willCreate(path) {
        return this._filesToCreate.has(path);
    }
    willOverwrite(path) {
        return this._filesToOverwrite.has(path);
    }
    willDelete(path) {
        return this._filesToDelete.has(path);
    }
    willRename(path) {
        return this._filesToRename.has(path);
    }
    willRenameTo(path, to) {
        return this._filesToRename.get(path) === to;
    }
}
exports.CordHost = CordHost;

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
const rxjs_1 = require("rxjs");
const host_1 = require("./host");
class DryRunSink extends host_1.HostSink {
    constructor(host, force = false) {
        super(typeof host == 'string'
            ? new core_1.virtualFs.ScopedHost(new node_1.NodeJsSyncHost(), core_1.normalize(host))
            : host, force);
        this._subject = new rxjs_1.Subject();
        this._fileDoesNotExistExceptionSet = new Set();
        this._fileAlreadyExistExceptionSet = new Set();
        this.reporter = this._subject.asObservable();
    }
    _fileAlreadyExistException(path) {
        this._fileAlreadyExistExceptionSet.add(path);
    }
    _fileDoesNotExistException(path) {
        this._fileDoesNotExistExceptionSet.add(path);
    }
    _done() {
        this._fileAlreadyExistExceptionSet.forEach(path => {
            this._subject.next({
                kind: 'error',
                description: 'alreadyExist',
                path,
            });
        });
        this._fileDoesNotExistExceptionSet.forEach(path => {
            this._subject.next({
                kind: 'error',
                description: 'doesNotExist',
                path,
            });
        });
        this._filesToDelete.forEach(path => {
            // Check if this is a renaming.
            for (const [from] of this._filesToRename) {
                if (from == path) {
                    // The event is sent later on.
                    return;
                }
            }
            this._subject.next({ kind: 'delete', path });
        });
        this._filesToRename.forEach(([path, to]) => {
            this._subject.next({ kind: 'rename', path, to });
        });
        this._filesToCreate.forEach((content, path) => {
            // Check if this is a renaming.
            for (const [, to] of this._filesToRename) {
                if (to == path) {
                    // The event is sent later on.
                    return;
                }
            }
            if (this._fileAlreadyExistExceptionSet.has(path)
                || this._fileDoesNotExistExceptionSet.has(path)) {
                return;
            }
            this._subject.next({ kind: 'create', path, content: content.generate() });
        });
        this._filesToUpdate.forEach((content, path) => {
            this._subject.next({ kind: 'update', path, content: content.generate() });
        });
        this._subject.complete();
        return rxjs_1.of(undefined);
    }
}
exports.DryRunSink = DryRunSink;

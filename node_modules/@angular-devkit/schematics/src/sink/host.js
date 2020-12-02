"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const update_buffer_1 = require("../utility/update-buffer");
const sink_1 = require("./sink");
class HostSink extends sink_1.SimpleSinkBase {
    constructor(_host, _force = false) {
        super();
        this._host = _host;
        this._force = _force;
        this._filesToDelete = new Set();
        this._filesToRename = new Set();
        this._filesToCreate = new Map();
        this._filesToUpdate = new Map();
    }
    _validateCreateAction(action) {
        return this._force ? rxjs_1.EMPTY : super._validateCreateAction(action);
    }
    _validateFileExists(p) {
        if (this._filesToCreate.has(p) || this._filesToUpdate.has(p)) {
            return rxjs_1.of(true);
        }
        else if (this._filesToDelete.has(p)) {
            return rxjs_1.of(false);
        }
        else if ([...this._filesToRename.values()].some(([from]) => from == p)) {
            return rxjs_1.of(false);
        }
        else {
            return this._host.exists(p);
        }
    }
    _overwriteFile(path, content) {
        this._filesToUpdate.set(path, new update_buffer_1.UpdateBuffer(content));
        return rxjs_1.EMPTY;
    }
    _createFile(path, content) {
        this._filesToCreate.set(path, new update_buffer_1.UpdateBuffer(content));
        return rxjs_1.EMPTY;
    }
    _renameFile(from, to) {
        this._filesToRename.add([from, to]);
        return rxjs_1.EMPTY;
    }
    _deleteFile(path) {
        if (this._filesToCreate.has(path)) {
            this._filesToCreate.delete(path);
            this._filesToUpdate.delete(path);
        }
        else {
            this._filesToDelete.add(path);
        }
        return rxjs_1.EMPTY;
    }
    _done() {
        // Really commit everything to the actual filesystem.
        return rxjs_1.concat(rxjs_1.from([...this._filesToDelete.values()]).pipe(operators_1.concatMap(path => this._host.delete(path))), rxjs_1.from([...this._filesToRename.entries()]).pipe(operators_1.concatMap(([_, [path, to]]) => this._host.rename(path, to))), rxjs_1.from([...this._filesToCreate.entries()]).pipe(operators_1.concatMap(([path, buffer]) => {
            return this._host.write(path, buffer.generate());
        })), rxjs_1.from([...this._filesToUpdate.entries()]).pipe(operators_1.concatMap(([path, buffer]) => {
            return this._host.write(path, buffer.generate());
        }))).pipe(operators_1.reduce(() => { }));
    }
}
exports.HostSink = HostSink;

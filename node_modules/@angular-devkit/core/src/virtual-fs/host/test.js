"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("../path");
const buffer_1 = require("./buffer");
const memory_1 = require("./memory");
const sync_1 = require("./sync");
var test;
(function (test) {
    class TestHost extends memory_1.SimpleMemoryHost {
        constructor(map = {}) {
            super();
            this._records = [];
            for (const filePath of Object.getOwnPropertyNames(map)) {
                this._write(path_1.normalize(filePath), buffer_1.stringToFileBuffer(map[filePath]));
            }
        }
        get records() {
            return [...this._records];
        }
        clearRecords() {
            this._records = [];
        }
        get files() {
            const sync = this.sync;
            function _visit(p) {
                return sync.list(p)
                    .map(fragment => path_1.join(p, fragment))
                    .reduce((files, path) => {
                    if (sync.isDirectory(path)) {
                        return files.concat(_visit(path));
                    }
                    else {
                        return files.concat(path);
                    }
                }, []);
            }
            return _visit(path_1.normalize('/'));
        }
        get sync() {
            if (!this._sync) {
                this._sync = new sync_1.SyncDelegateHost(this);
            }
            return this._sync;
        }
        clone() {
            const newHost = new TestHost();
            newHost._cache = new Map(this._cache);
            return newHost;
        }
        // Override parents functions to keep a record of all operators that were done.
        _write(path, content) {
            this._records.push({ kind: 'write', path });
            return super._write(path, content);
        }
        _read(path) {
            this._records.push({ kind: 'read', path });
            return super._read(path);
        }
        _delete(path) {
            this._records.push({ kind: 'delete', path });
            return super._delete(path);
        }
        _rename(from, to) {
            this._records.push({ kind: 'rename', from, to });
            return super._rename(from, to);
        }
        _list(path) {
            this._records.push({ kind: 'list', path });
            return super._list(path);
        }
        _exists(path) {
            this._records.push({ kind: 'exists', path });
            return super._exists(path);
        }
        _isDirectory(path) {
            this._records.push({ kind: 'isDirectory', path });
            return super._isDirectory(path);
        }
        _isFile(path) {
            this._records.push({ kind: 'isFile', path });
            return super._isFile(path);
        }
        _stat(path) {
            this._records.push({ kind: 'stat', path });
            return super._stat(path);
        }
        _watch(path, options) {
            this._records.push({ kind: 'watch', path });
            return super._watch(path, options);
        }
        $write(path, content) {
            return super._write(path_1.normalize(path), buffer_1.stringToFileBuffer(content));
        }
        $read(path) {
            return buffer_1.fileBufferToString(super._read(path_1.normalize(path)));
        }
        $list(path) {
            return super._list(path_1.normalize(path));
        }
        $exists(path) {
            return super._exists(path_1.normalize(path));
        }
        $isDirectory(path) {
            return super._isDirectory(path_1.normalize(path));
        }
        $isFile(path) {
            return super._isFile(path_1.normalize(path));
        }
    }
    test.TestHost = TestHost;
})(test = exports.test || (exports.test = {}));

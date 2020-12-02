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
const exception_1 = require("../exception/exception");
const interface_1 = require("./interface");
const recorder_1 = require("./recorder");
class CannotCreateFileException extends core_1.BaseException {
    constructor(path) { super(`Cannot create file "${path}".`); }
}
exports.CannotCreateFileException = CannotCreateFileException;
class NullTreeDirEntry {
    constructor(path) {
        this.path = path;
        this.subdirs = [];
        this.subfiles = [];
    }
    get parent() {
        return this.path == '/' ? null : new NullTreeDirEntry(core_1.dirname(this.path));
    }
    dir(name) {
        return new NullTreeDirEntry(core_1.join(this.path, name));
    }
    file(_name) { return null; }
    visit() { }
}
exports.NullTreeDirEntry = NullTreeDirEntry;
class NullTree {
    constructor() {
        this.root = new NullTreeDirEntry(core_1.normalize('/'));
    }
    [interface_1.TreeSymbol]() {
        return this;
    }
    branch() {
        return new NullTree();
    }
    merge(_other, _strategy) { }
    // Simple readonly file system operations.
    exists(_path) { return false; }
    read(_path) { return null; }
    get(_path) { return null; }
    getDir(path) { return new NullTreeDirEntry(core_1.normalize('/' + path)); }
    visit() { }
    // Change content of host files.
    beginUpdate(path) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    commitUpdate(record) {
        throw new exception_1.FileDoesNotExistException(record instanceof recorder_1.UpdateRecorderBase
            ? record.path
            : '<unknown>');
    }
    // Change structure of the host.
    copy(path, _to) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    delete(path) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    create(path, _content) {
        throw new CannotCreateFileException(path);
    }
    rename(path, _to) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    overwrite(path, _content) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    apply(_action, _strategy) { }
    get actions() {
        return [];
    }
}
exports.NullTree = NullTree;

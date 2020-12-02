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
const delegate_1 = require("./delegate");
const interface_1 = require("./interface");
class ScopedFileEntry {
    constructor(_base, scope) {
        this._base = _base;
        this.scope = scope;
    }
    get path() {
        return core_1.join(core_1.NormalizedRoot, core_1.relative(this.scope, this._base.path));
    }
    get content() { return this._base.content; }
}
class ScopedDirEntry {
    constructor(_base, scope) {
        this._base = _base;
        this.scope = scope;
    }
    get parent() {
        if (!this._base.parent || this._base.path == this.scope) {
            return null;
        }
        return new ScopedDirEntry(this._base.parent, this.scope);
    }
    get path() {
        return core_1.join(core_1.NormalizedRoot, core_1.relative(this.scope, this._base.path));
    }
    get subdirs() {
        return this._base.subdirs;
    }
    get subfiles() {
        return this._base.subfiles;
    }
    dir(name) {
        const entry = this._base.dir(name);
        return entry && new ScopedDirEntry(entry, this.scope);
    }
    file(name) {
        const entry = this._base.file(name);
        return entry && new ScopedFileEntry(entry, this.scope);
    }
    visit(visitor) {
        return this._base.visit((path, entry) => {
            visitor(core_1.join(core_1.NormalizedRoot, core_1.relative(this.scope, path)), entry && new ScopedFileEntry(entry, this.scope));
        });
    }
}
class ScopedTree {
    constructor(_base, scope) {
        this._base = _base;
        const normalizedScope = core_1.normalize('/' + scope);
        this._root = new ScopedDirEntry(this._base.getDir(normalizedScope), normalizedScope);
    }
    get root() { return this._root; }
    branch() { return new ScopedTree(this._base.branch(), this._root.scope); }
    merge(other, strategy) {
        const self = this;
        const delegate = new class extends delegate_1.DelegateTree {
            get actions() {
                return other.actions.map(action => self._fullPathAction(action));
            }
        }(other);
        this._base.merge(delegate, strategy);
    }
    // Readonly.
    read(path) { return this._base.read(this._fullPath(path)); }
    exists(path) { return this._base.exists(this._fullPath(path)); }
    get(path) {
        const entry = this._base.get(this._fullPath(path));
        return entry && new ScopedFileEntry(entry, this._root.scope);
    }
    getDir(path) {
        const entry = this._base.getDir(this._fullPath(path));
        return entry && new ScopedDirEntry(entry, this._root.scope);
    }
    visit(visitor) { return this._root.visit(visitor); }
    // Change content of host files.
    overwrite(path, content) {
        return this._base.overwrite(this._fullPath(path), content);
    }
    beginUpdate(path) {
        return this._base.beginUpdate(this._fullPath(path));
    }
    commitUpdate(record) { return this._base.commitUpdate(record); }
    // Structural methods.
    create(path, content) {
        return this._base.create(this._fullPath(path), content);
    }
    delete(path) { return this._base.delete(this._fullPath(path)); }
    rename(from, to) {
        return this._base.rename(this._fullPath(from), this._fullPath(to));
    }
    apply(action, strategy) {
        return this._base.apply(this._fullPathAction(action), strategy);
    }
    get actions() {
        const scopedActions = [];
        for (const action of this._base.actions) {
            if (!action.path.startsWith(this._root.scope + '/')) {
                continue;
            }
            if (action.kind !== 'r') {
                scopedActions.push({
                    ...action,
                    path: core_1.join(core_1.NormalizedRoot, core_1.relative(this._root.scope, action.path)),
                });
            }
            else if (action.to.startsWith(this._root.scope + '/')) {
                scopedActions.push({
                    ...action,
                    path: core_1.join(core_1.NormalizedRoot, core_1.relative(this._root.scope, action.path)),
                    to: core_1.join(core_1.NormalizedRoot, core_1.relative(this._root.scope, action.to)),
                });
            }
        }
        return scopedActions;
    }
    [interface_1.TreeSymbol]() {
        return this;
    }
    _fullPath(path) {
        return core_1.join(this._root.scope, core_1.normalize('/' + path));
    }
    _fullPathAction(action) {
        let fullPathAction;
        if (action.kind === 'r') {
            fullPathAction = {
                ...action,
                path: this._fullPath(action.path),
                to: this._fullPath(action.to),
            };
        }
        else {
            fullPathAction = {
                ...action,
                path: this._fullPath(action.path),
            };
        }
        return fullPathAction;
    }
}
exports.ScopedTree = ScopedTree;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = require("./interface");
class DelegateTree {
    constructor(_other) {
        this._other = _other;
    }
    branch() { return this._other.branch(); }
    merge(other, strategy) { this._other.merge(other, strategy); }
    get root() { return this._other.root; }
    // Readonly.
    read(path) { return this._other.read(path); }
    exists(path) { return this._other.exists(path); }
    get(path) { return this._other.get(path); }
    getDir(path) { return this._other.getDir(path); }
    visit(visitor) { return this._other.visit(visitor); }
    // Change content of host files.
    overwrite(path, content) {
        return this._other.overwrite(path, content);
    }
    beginUpdate(path) { return this._other.beginUpdate(path); }
    commitUpdate(record) { return this._other.commitUpdate(record); }
    // Structural methods.
    create(path, content) {
        return this._other.create(path, content);
    }
    delete(path) { return this._other.delete(path); }
    rename(from, to) { return this._other.rename(from, to); }
    apply(action, strategy) {
        return this._other.apply(action, strategy);
    }
    get actions() { return this._other.actions; }
    [interface_1.TreeSymbol]() {
        return this;
    }
}
exports.DelegateTree = DelegateTree;

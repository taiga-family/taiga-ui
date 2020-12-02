"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleFileEntry {
    constructor(_path, _content) {
        this._path = _path;
        this._content = _content;
    }
    get path() { return this._path; }
    get content() { return this._content; }
}
exports.SimpleFileEntry = SimpleFileEntry;
class LazyFileEntry {
    constructor(_path, _load) {
        this._path = _path;
        this._load = _load;
        this._content = null;
    }
    get path() { return this._path; }
    get content() { return this._content || (this._content = this._load(this._path)); }
}
exports.LazyFileEntry = LazyFileEntry;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Host that runs a method before calling its delegate. This is an abstract class and its actual
 * behaviour is entirely dependant of the subclass.
 */
class ResolverHost {
    constructor(_delegate) {
        this._delegate = _delegate;
    }
    get capabilities() { return this._delegate.capabilities; }
    write(path, content) {
        return this._delegate.write(this._resolve(path), content);
    }
    read(path) {
        return this._delegate.read(this._resolve(path));
    }
    delete(path) {
        return this._delegate.delete(this._resolve(path));
    }
    rename(from, to) {
        return this._delegate.rename(this._resolve(from), this._resolve(to));
    }
    list(path) {
        return this._delegate.list(this._resolve(path));
    }
    exists(path) {
        return this._delegate.exists(this._resolve(path));
    }
    isDirectory(path) {
        return this._delegate.isDirectory(this._resolve(path));
    }
    isFile(path) {
        return this._delegate.isFile(this._resolve(path));
    }
    // Some hosts may not support stat.
    stat(path) {
        return this._delegate.stat(this._resolve(path));
    }
    // Some hosts may not support watching.
    watch(path, options) {
        return this._delegate.watch(this._resolve(path), options);
    }
}
exports.ResolverHost = ResolverHost;

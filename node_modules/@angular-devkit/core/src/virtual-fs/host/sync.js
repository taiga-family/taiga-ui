"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exception_1 = require("../../exception");
class SynchronousDelegateExpectedException extends exception_1.BaseException {
    constructor() { super(`Expected a synchronous delegate but got an asynchronous one.`); }
}
exports.SynchronousDelegateExpectedException = SynchronousDelegateExpectedException;
/**
 * Implement a synchronous-only host interface (remove the Observable parts).
 */
class SyncDelegateHost {
    constructor(_delegate) {
        this._delegate = _delegate;
        if (!_delegate.capabilities.synchronous) {
            throw new SynchronousDelegateExpectedException();
        }
    }
    _doSyncCall(observable) {
        let completed = false;
        let result = undefined;
        let errorResult = undefined;
        observable.subscribe({
            next(x) { result = x; },
            error(err) { errorResult = err; },
            complete() { completed = true; },
        });
        if (errorResult !== undefined) {
            throw errorResult;
        }
        if (!completed) {
            throw new SynchronousDelegateExpectedException();
        }
        // The non-null operation is to work around `void` type. We don't allow to return undefined
        // but ResultT could be void, which is undefined in JavaScript, so this doesn't change the
        // behaviour.
        // tslint:disable-next-line:no-non-null-assertion
        return result;
    }
    get capabilities() {
        return this._delegate.capabilities;
    }
    get delegate() {
        return this._delegate;
    }
    write(path, content) {
        return this._doSyncCall(this._delegate.write(path, content));
    }
    read(path) {
        return this._doSyncCall(this._delegate.read(path));
    }
    delete(path) {
        return this._doSyncCall(this._delegate.delete(path));
    }
    rename(from, to) {
        return this._doSyncCall(this._delegate.rename(from, to));
    }
    list(path) {
        return this._doSyncCall(this._delegate.list(path));
    }
    exists(path) {
        return this._doSyncCall(this._delegate.exists(path));
    }
    isDirectory(path) {
        return this._doSyncCall(this._delegate.isDirectory(path));
    }
    isFile(path) {
        return this._doSyncCall(this._delegate.isFile(path));
    }
    // Some hosts may not support stat.
    stat(path) {
        const result = this._delegate.stat(path);
        if (result) {
            return this._doSyncCall(result);
        }
        else {
            return null;
        }
    }
    watch(path, options) {
        return this._delegate.watch(path, options);
    }
}
exports.SyncDelegateHost = SyncDelegateHost;

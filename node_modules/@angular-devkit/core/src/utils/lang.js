"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determine if the argument is shaped like a Promise
 */
// tslint:disable-next-line:no-any
function isPromise(obj) {
    // allow any Promise/A+ compliant thenable.
    // It's up to the caller to ensure that obj.then conforms to the spec
    return !!obj && typeof obj.then === 'function';
}
exports.isPromise = isPromise;
/**
 * Determine if the argument is an Observable
 * @deprecated as of 8.0; use rxjs' built-in version
 */
// tslint:disable-next-line:no-any
function isObservable(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }
    if (Symbol.observable && Symbol.observable in obj) {
        return true;
    }
    return typeof obj.subscribe === 'function';
}
exports.isObservable = isObservable;

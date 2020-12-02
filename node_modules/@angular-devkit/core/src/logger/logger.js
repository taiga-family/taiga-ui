"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const rxjs_1 = require("rxjs");
class Logger extends rxjs_1.Observable {
    constructor(name, parent = null) {
        super();
        this.name = name;
        this.parent = parent;
        this._subject = new rxjs_1.Subject();
        const path = [];
        let p = parent;
        while (p) {
            path.push(p.name);
            p = p.parent;
        }
        this._metadata = { name, path };
        this._observable = this._subject.asObservable();
        if (this.parent && this.parent._subject) {
            // When the parent completes, complete us as well.
            this.parent._subject.subscribe(undefined, undefined, () => this.complete());
        }
    }
    get _observable() { return this._obs; }
    set _observable(v) {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this._obs = v;
        if (this.parent) {
            this._subscription = this.subscribe((value) => {
                if (this.parent) {
                    this.parent._subject.next(value);
                }
            }, (error) => {
                if (this.parent) {
                    this.parent._subject.error(error);
                }
            }, () => {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                }
                this._subscription = null;
            });
        }
    }
    asApi() {
        return {
            createChild: (name) => this.createChild(name),
            log: (level, message, metadata) => {
                return this.log(level, message, metadata);
            },
            debug: (message, metadata) => this.debug(message, metadata),
            info: (message, metadata) => this.info(message, metadata),
            warn: (message, metadata) => this.warn(message, metadata),
            error: (message, metadata) => this.error(message, metadata),
            fatal: (message, metadata) => this.fatal(message, metadata),
        };
    }
    createChild(name) {
        return new this.constructor(name, this);
    }
    complete() {
        this._subject.complete();
    }
    log(level, message, metadata = {}) {
        const entry = Object.assign({}, metadata, this._metadata, {
            level, message, timestamp: +Date.now(),
        });
        this._subject.next(entry);
    }
    next(entry) {
        this._subject.next(entry);
    }
    debug(message, metadata = {}) {
        return this.log('debug', message, metadata);
    }
    info(message, metadata = {}) {
        return this.log('info', message, metadata);
    }
    warn(message, metadata = {}) {
        return this.log('warn', message, metadata);
    }
    error(message, metadata = {}) {
        return this.log('error', message, metadata);
    }
    fatal(message, metadata = {}) {
        return this.log('fatal', message, metadata);
    }
    toString() {
        return `<Logger(${this.name})>`;
    }
    lift(operator) {
        return this._observable.lift(operator);
    }
    subscribe(_observerOrNext, _error, _complete) {
        return this._observable.subscribe.apply(this._observable, arguments);
    }
    forEach(next, PromiseCtor) {
        return this._observable.forEach(next, PromiseCtor);
    }
}
exports.Logger = Logger;

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
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
// Host is used instead of ReadonlyHost due to most decorators only supporting Hosts
class WebpackInputHost {
    constructor(inputFileSystem) {
        this.inputFileSystem = inputFileSystem;
    }
    get capabilities() {
        return { synchronous: true };
    }
    write(_path, _content) {
        return rxjs_1.throwError(new Error('Not supported.'));
    }
    delete(_path) {
        return rxjs_1.throwError(new Error('Not supported.'));
    }
    rename(_from, _to) {
        return rxjs_1.throwError(new Error('Not supported.'));
    }
    read(path) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                const data = this.inputFileSystem.readFileSync(core_1.getSystemPath(path));
                obs.next(new Uint8Array(data).buffer);
                obs.complete();
            }
            catch (e) {
                obs.error(e);
            }
        });
    }
    list(path) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                // tslint:disable-next-line:no-any
                const names = this.inputFileSystem.readdirSync(core_1.getSystemPath(path));
                obs.next(names.map(name => core_1.fragment(name)));
                obs.complete();
            }
            catch (err) {
                obs.error(err);
            }
        });
    }
    exists(path) {
        return this.stat(path).pipe(operators_1.map(stats => stats != null));
    }
    isDirectory(path) {
        return this.stat(path).pipe(operators_1.map(stats => stats != null && stats.isDirectory()));
    }
    isFile(path) {
        return this.stat(path).pipe(operators_1.map(stats => stats != null && stats.isFile()));
    }
    stat(path) {
        return new rxjs_1.Observable(obs => {
            try {
                const stats = this.inputFileSystem.statSync(core_1.getSystemPath(path));
                obs.next(stats);
                obs.complete();
            }
            catch (e) {
                if (e.code === 'ENOENT') {
                    obs.next(null);
                    obs.complete();
                }
                else {
                    obs.error(e);
                }
            }
        });
    }
    watch(_path, _options) {
        return null;
    }
}
exports.WebpackInputHost = WebpackInputHost;

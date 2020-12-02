"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const fs = require("fs");
const path = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const src_1 = require("../src");
// This will only be initialized if the watch() method is called.
// Otherwise chokidar appears only in type positions, and shouldn't be referenced
// in the JavaScript output.
let FSWatcher;
function loadFSWatcher() {
    if (!FSWatcher) {
        try {
            // tslint:disable-next-line:no-implicit-dependencies
            FSWatcher = require('chokidar').FSWatcher;
        }
        catch (e) {
            if (e.code !== 'MODULE_NOT_FOUND') {
                throw new Error('As of angular-devkit version 8.0, the "chokidar" package ' +
                    'must be installed in order to use watch() features.');
            }
            throw e;
        }
    }
}
function _callFs(fn, ...args) {
    return new rxjs_1.Observable(obs => {
        fn(...args, (err, result) => {
            if (err) {
                obs.error(err);
            }
            else {
                obs.next(result);
                obs.complete();
            }
        });
    });
}
/**
 * An implementation of the Virtual FS using Node as the background. There are two versions; one
 * synchronous and one asynchronous.
 */
class NodeJsAsyncHost {
    get capabilities() {
        return { synchronous: false };
    }
    write(path, content) {
        return new rxjs_1.Observable(obs => {
            // Create folders if necessary.
            const _createDir = (path) => {
                if (fs.existsSync(src_1.getSystemPath(path))) {
                    return;
                }
                if (src_1.dirname(path) === path) {
                    throw new Error();
                }
                _createDir(src_1.dirname(path));
                fs.mkdirSync(src_1.getSystemPath(path));
            };
            _createDir(src_1.dirname(path));
            _callFs(fs.writeFile, src_1.getSystemPath(path), new Uint8Array(content)).subscribe(obs);
        });
    }
    read(path) {
        return _callFs(fs.readFile, src_1.getSystemPath(path)).pipe(operators_1.map(buffer => new Uint8Array(buffer).buffer));
    }
    delete(path) {
        return this.isDirectory(path).pipe(operators_1.mergeMap(isDirectory => {
            if (isDirectory) {
                const allFiles = [];
                const allDirs = [];
                const _recurseList = (path) => {
                    for (const fragment of fs.readdirSync(src_1.getSystemPath(path))) {
                        if (fs.statSync(src_1.getSystemPath(src_1.join(path, fragment))).isDirectory()) {
                            _recurseList(src_1.join(path, fragment));
                            allDirs.push(src_1.join(path, fragment));
                        }
                        else {
                            allFiles.push(src_1.join(path, fragment));
                        }
                    }
                };
                _recurseList(path);
                return rxjs_1.concat(rxjs_1.from(allFiles).pipe(operators_1.mergeMap(p => _callFs(fs.unlink, src_1.getSystemPath(p))), operators_1.ignoreElements()), rxjs_1.from(allDirs).pipe(operators_1.concatMap(p => _callFs(fs.rmdir, src_1.getSystemPath(p)))));
            }
            else {
                return _callFs(fs.unlink, src_1.getSystemPath(path));
            }
        }), operators_1.map(() => undefined));
    }
    rename(from, to) {
        return _callFs(fs.rename, src_1.getSystemPath(from), src_1.getSystemPath(to));
    }
    list(path) {
        return _callFs(fs.readdir, src_1.getSystemPath(path)).pipe(operators_1.map((names) => names.map(name => src_1.fragment(name))));
    }
    exists(path) {
        // Exists is a special case because it cannot error.
        return new rxjs_1.Observable(obs => {
            fs.exists(path, exists => {
                obs.next(exists);
                obs.complete();
            });
        });
    }
    isDirectory(path) {
        return _callFs(fs.stat, src_1.getSystemPath(path)).pipe(operators_1.map(stat => stat.isDirectory()));
    }
    isFile(path) {
        return _callFs(fs.stat, src_1.getSystemPath(path)).pipe(operators_1.map(stat => stat.isFile()));
    }
    // Some hosts may not support stat.
    stat(path) {
        return _callFs(fs.stat, src_1.getSystemPath(path));
    }
    // Some hosts may not support watching.
    watch(path, _options) {
        return new rxjs_1.Observable(obs => {
            loadFSWatcher();
            const watcher = new FSWatcher({ persistent: true }).add(src_1.getSystemPath(path));
            watcher
                .on('change', path => {
                obs.next({
                    path: src_1.normalize(path),
                    time: new Date(),
                    type: 0 /* Changed */,
                });
            })
                .on('add', path => {
                obs.next({
                    path: src_1.normalize(path),
                    time: new Date(),
                    type: 1 /* Created */,
                });
            })
                .on('unlink', path => {
                obs.next({
                    path: src_1.normalize(path),
                    time: new Date(),
                    type: 2 /* Deleted */,
                });
            });
            return () => watcher.close();
        }).pipe(operators_1.publish(), operators_1.refCount());
    }
}
exports.NodeJsAsyncHost = NodeJsAsyncHost;
/**
 * An implementation of the Virtual FS using Node as the backend, synchronously.
 */
class NodeJsSyncHost {
    get capabilities() {
        return { synchronous: true };
    }
    write(path, content) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                // Create folders if necessary.
                const _createDir = (path) => {
                    if (fs.existsSync(src_1.getSystemPath(path))) {
                        return;
                    }
                    _createDir(src_1.dirname(path));
                    fs.mkdirSync(src_1.getSystemPath(path));
                };
                _createDir(src_1.dirname(path));
                fs.writeFileSync(src_1.getSystemPath(path), new Uint8Array(content));
                obs.next();
                obs.complete();
            }
            catch (err) {
                obs.error(err);
            }
        });
    }
    read(path) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                const buffer = fs.readFileSync(src_1.getSystemPath(path));
                obs.next(new Uint8Array(buffer).buffer);
                obs.complete();
            }
            catch (err) {
                obs.error(err);
            }
        });
    }
    delete(path) {
        return this.isDirectory(path).pipe(operators_1.concatMap(isDir => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            if (isDir) {
                const dirPaths = fs.readdirSync(src_1.getSystemPath(path));
                const rmDirComplete = new rxjs_1.Observable((obs) => {
                    try {
                        fs.rmdirSync(src_1.getSystemPath(path));
                        obs.complete();
                    }
                    catch (e) {
                        obs.error(e);
                    }
                });
                return rxjs_1.concat(...dirPaths.map(name => this.delete(src_1.join(path, name))), rmDirComplete);
            }
            else {
                try {
                    fs.unlinkSync(src_1.getSystemPath(path));
                }
                catch (err) {
                    return rxjs_1.throwError(err);
                }
                return rxjs_1.of(undefined);
            }
        }));
    }
    rename(from, to) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                const toSystemPath = src_1.getSystemPath(to);
                if (!fs.existsSync(path.dirname(toSystemPath))) {
                    fs.mkdirSync(path.dirname(toSystemPath), { recursive: true });
                }
                fs.renameSync(src_1.getSystemPath(from), src_1.getSystemPath(to));
                obs.next();
                obs.complete();
            }
            catch (err) {
                obs.error(err);
            }
        });
    }
    list(path) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                const names = fs.readdirSync(src_1.getSystemPath(path));
                obs.next(names.map(name => src_1.fragment(name)));
                obs.complete();
            }
            catch (err) {
                obs.error(err);
            }
        });
    }
    exists(path) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                obs.next(fs.existsSync(src_1.getSystemPath(path)));
                obs.complete();
            }
            catch (err) {
                obs.error(err);
            }
        });
    }
    isDirectory(path) {
        // tslint:disable-next-line:no-non-null-assertion
        return this.stat(path).pipe(operators_1.map(stat => stat.isDirectory()));
    }
    isFile(path) {
        // tslint:disable-next-line:no-non-null-assertion
        return this.stat(path).pipe(operators_1.map(stat => stat.isFile()));
    }
    // Some hosts may not support stat.
    stat(path) {
        return new rxjs_1.Observable(obs => {
            // TODO: remove this try+catch when issue https://github.com/ReactiveX/rxjs/issues/3740 is
            // fixed.
            try {
                obs.next(fs.statSync(src_1.getSystemPath(path)));
                obs.complete();
            }
            catch (err) {
                obs.error(err);
            }
        });
    }
    // Some hosts may not support watching.
    watch(path, _options) {
        return new rxjs_1.Observable(obs => {
            const opts = { persistent: false };
            loadFSWatcher();
            const watcher = new FSWatcher(opts).add(src_1.getSystemPath(path));
            watcher
                .on('change', path => {
                obs.next({
                    path: src_1.normalize(path),
                    time: new Date(),
                    type: 0 /* Changed */,
                });
            })
                .on('add', path => {
                obs.next({
                    path: src_1.normalize(path),
                    time: new Date(),
                    type: 1 /* Created */,
                });
            })
                .on('unlink', path => {
                obs.next({
                    path: src_1.normalize(path),
                    time: new Date(),
                    type: 2 /* Deleted */,
                });
            });
            return () => watcher.close();
        }).pipe(operators_1.publish(), operators_1.refCount());
    }
}
exports.NodeJsSyncHost = NodeJsSyncHost;

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
const exception_1 = require("../../exception");
const path_1 = require("../path");
class SimpleMemoryHost {
    constructor() {
        this._cache = new Map();
        this._watchers = new Map();
        this._cache.set(path_1.normalize('/'), this._newDirStats());
    }
    _newDirStats() {
        return {
            inspect() { return '<Directory>'; },
            isFile() { return false; },
            isDirectory() { return true; },
            size: 0,
            atime: new Date(),
            ctime: new Date(),
            mtime: new Date(),
            birthtime: new Date(),
            content: null,
        };
    }
    _newFileStats(content, oldStats) {
        return {
            inspect() { return `<File size(${content.byteLength})>`; },
            isFile() { return true; },
            isDirectory() { return false; },
            size: content.byteLength,
            atime: oldStats ? oldStats.atime : new Date(),
            ctime: new Date(),
            mtime: new Date(),
            birthtime: oldStats ? oldStats.birthtime : new Date(),
            content,
        };
    }
    _toAbsolute(path) {
        return path_1.isAbsolute(path) ? path : path_1.normalize('/' + path);
    }
    _updateWatchers(path, type) {
        const time = new Date();
        let currentPath = path;
        let parent = null;
        if (this._watchers.size == 0) {
            // Nothing to do if there's no watchers.
            return;
        }
        const maybeWatcher = this._watchers.get(currentPath);
        if (maybeWatcher) {
            maybeWatcher.forEach(watcher => {
                const [options, subject] = watcher;
                subject.next({ path, time, type });
                if (!options.persistent && type == 2 /* Deleted */) {
                    subject.complete();
                    this._watchers.delete(currentPath);
                }
            });
        }
        do {
            currentPath = parent !== null ? parent : currentPath;
            parent = path_1.dirname(currentPath);
            const maybeWatcher = this._watchers.get(currentPath);
            if (maybeWatcher) {
                maybeWatcher.forEach(watcher => {
                    const [options, subject] = watcher;
                    if (!options.recursive) {
                        return;
                    }
                    subject.next({ path, time, type });
                    if (!options.persistent && type == 2 /* Deleted */) {
                        subject.complete();
                        this._watchers.delete(currentPath);
                    }
                });
            }
        } while (parent != currentPath);
    }
    get capabilities() {
        return { synchronous: true };
    }
    /**
     * List of protected methods that give direct access outside the observables to the cache
     * and internal states.
     */
    _write(path, content) {
        path = this._toAbsolute(path);
        const old = this._cache.get(path);
        if (old && old.isDirectory()) {
            throw new exception_1.PathIsDirectoryException(path);
        }
        // Update all directories. If we find a file we know it's an invalid write.
        const fragments = path_1.split(path);
        let curr = path_1.normalize('/');
        for (const fr of fragments) {
            curr = path_1.join(curr, fr);
            const maybeStats = this._cache.get(fr);
            if (maybeStats) {
                if (maybeStats.isFile()) {
                    throw new exception_1.PathIsFileException(curr);
                }
            }
            else {
                this._cache.set(curr, this._newDirStats());
            }
        }
        // Create the stats.
        const stats = this._newFileStats(content, old);
        this._cache.set(path, stats);
        this._updateWatchers(path, old ? 0 /* Changed */ : 1 /* Created */);
    }
    _read(path) {
        path = this._toAbsolute(path);
        const maybeStats = this._cache.get(path);
        if (!maybeStats) {
            throw new exception_1.FileDoesNotExistException(path);
        }
        else if (maybeStats.isDirectory()) {
            throw new exception_1.PathIsDirectoryException(path);
        }
        else if (!maybeStats.content) {
            throw new exception_1.PathIsDirectoryException(path);
        }
        else {
            return maybeStats.content;
        }
    }
    _delete(path) {
        path = this._toAbsolute(path);
        if (this._isDirectory(path)) {
            for (const [cachePath] of this._cache.entries()) {
                if (cachePath.startsWith(path + path_1.NormalizedSep) || cachePath === path) {
                    this._cache.delete(cachePath);
                }
            }
        }
        else {
            this._cache.delete(path);
        }
        this._updateWatchers(path, 2 /* Deleted */);
    }
    _rename(from, to) {
        from = this._toAbsolute(from);
        to = this._toAbsolute(to);
        if (!this._cache.has(from)) {
            throw new exception_1.FileDoesNotExistException(from);
        }
        else if (this._cache.has(to)) {
            throw new exception_1.FileAlreadyExistException(to);
        }
        if (this._isDirectory(from)) {
            for (const path of this._cache.keys()) {
                if (path.startsWith(from + path_1.NormalizedSep)) {
                    const content = this._cache.get(path);
                    if (content) {
                        // We don't need to clone or extract the content, since we're moving files.
                        this._cache.set(path_1.join(to, path_1.NormalizedSep, path.slice(from.length)), content);
                    }
                }
            }
        }
        else {
            const content = this._cache.get(from);
            if (content) {
                const fragments = path_1.split(to);
                const newDirectories = [];
                let curr = path_1.normalize('/');
                for (const fr of fragments) {
                    curr = path_1.join(curr, fr);
                    const maybeStats = this._cache.get(fr);
                    if (maybeStats) {
                        if (maybeStats.isFile()) {
                            throw new exception_1.PathIsFileException(curr);
                        }
                    }
                    else {
                        newDirectories.push(curr);
                    }
                }
                for (const newDirectory of newDirectories) {
                    this._cache.set(newDirectory, this._newDirStats());
                }
                this._cache.delete(from);
                this._cache.set(to, content);
            }
        }
        this._updateWatchers(from, 3 /* Renamed */);
    }
    _list(path) {
        path = this._toAbsolute(path);
        if (this._isFile(path)) {
            throw new exception_1.PathIsFileException(path);
        }
        const fragments = path_1.split(path);
        const result = new Set();
        if (path !== path_1.NormalizedRoot) {
            for (const p of this._cache.keys()) {
                if (p.startsWith(path + path_1.NormalizedSep)) {
                    result.add(path_1.split(p)[fragments.length]);
                }
            }
        }
        else {
            for (const p of this._cache.keys()) {
                if (p.startsWith(path_1.NormalizedSep) && p !== path_1.NormalizedRoot) {
                    result.add(path_1.split(p)[1]);
                }
            }
        }
        return [...result];
    }
    _exists(path) {
        return !!this._cache.get(this._toAbsolute(path));
    }
    _isDirectory(path) {
        const maybeStats = this._cache.get(this._toAbsolute(path));
        return maybeStats ? maybeStats.isDirectory() : false;
    }
    _isFile(path) {
        const maybeStats = this._cache.get(this._toAbsolute(path));
        return maybeStats ? maybeStats.isFile() : false;
    }
    _stat(path) {
        const maybeStats = this._cache.get(this._toAbsolute(path));
        if (!maybeStats) {
            return null;
        }
        else {
            return maybeStats;
        }
    }
    _watch(path, options) {
        path = this._toAbsolute(path);
        const subject = new rxjs_1.Subject();
        let maybeWatcherArray = this._watchers.get(path);
        if (!maybeWatcherArray) {
            maybeWatcherArray = [];
            this._watchers.set(path, maybeWatcherArray);
        }
        maybeWatcherArray.push([options || {}, subject]);
        return subject.asObservable();
    }
    write(path, content) {
        return new rxjs_1.Observable(obs => {
            this._write(path, content);
            obs.next();
            obs.complete();
        });
    }
    read(path) {
        return new rxjs_1.Observable(obs => {
            const content = this._read(path);
            obs.next(content);
            obs.complete();
        });
    }
    delete(path) {
        return new rxjs_1.Observable(obs => {
            this._delete(path);
            obs.next();
            obs.complete();
        });
    }
    rename(from, to) {
        return new rxjs_1.Observable(obs => {
            this._rename(from, to);
            obs.next();
            obs.complete();
        });
    }
    list(path) {
        return new rxjs_1.Observable(obs => {
            obs.next(this._list(path));
            obs.complete();
        });
    }
    exists(path) {
        return new rxjs_1.Observable(obs => {
            obs.next(this._exists(path));
            obs.complete();
        });
    }
    isDirectory(path) {
        return new rxjs_1.Observable(obs => {
            obs.next(this._isDirectory(path));
            obs.complete();
        });
    }
    isFile(path) {
        return new rxjs_1.Observable(obs => {
            obs.next(this._isFile(path));
            obs.complete();
        });
    }
    // Some hosts may not support stat.
    stat(path) {
        return new rxjs_1.Observable(obs => {
            obs.next(this._stat(path));
            obs.complete();
        });
    }
    watch(path, options) {
        return this._watch(path, options);
    }
    reset() {
        this._cache.clear();
        this._watchers.clear();
    }
}
exports.SimpleMemoryHost = SimpleMemoryHost;

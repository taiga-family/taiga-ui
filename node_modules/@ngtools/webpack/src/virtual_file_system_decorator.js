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
exports.NodeWatchFileSystem = require('webpack/lib/node/NodeWatchFileSystem');
// NOTE: @types/webpack InputFileSystem is missing some methods
class VirtualFileSystemDecorator {
    constructor(_inputFileSystem, _webpackCompilerHost) {
        this._inputFileSystem = _inputFileSystem;
        this._webpackCompilerHost = _webpackCompilerHost;
    }
    getWebpackCompilerHost() {
        return this._webpackCompilerHost;
    }
    getVirtualFilesPaths() {
        return this._webpackCompilerHost.getNgFactoryPaths();
    }
    stat(path, callback) {
        const result = this._webpackCompilerHost.stat(path);
        if (result) {
            // tslint:disable-next-line:no-any
            callback(null, result);
        }
        else {
            // tslint:disable-next-line:no-any
            callback(new core_1.FileDoesNotExistException(path), undefined);
        }
    }
    readdir(path, callback) {
        // tslint:disable-next-line:no-any
        this._inputFileSystem.readdir(path, callback);
    }
    readFile(path, callback) {
        try {
            // tslint:disable-next-line:no-any
            callback(null, this._webpackCompilerHost.readFileBuffer(path));
        }
        catch (e) {
            // tslint:disable-next-line:no-any
            callback(e, undefined);
        }
    }
    readJson(path, callback) {
        // tslint:disable-next-line:no-any
        this._inputFileSystem.readJson(path, callback);
    }
    readlink(path, callback) {
        this._inputFileSystem.readlink(path, callback);
    }
    statSync(path) {
        const stats = this._webpackCompilerHost.stat(path);
        if (stats === null) {
            throw new core_1.FileDoesNotExistException(path);
        }
        return stats;
    }
    readdirSync(path) {
        // tslint:disable-next-line:no-any
        return this._inputFileSystem.readdirSync(path);
    }
    readFileSync(path) {
        return this._webpackCompilerHost.readFileBuffer(path);
    }
    readJsonSync(path) {
        // tslint:disable-next-line:no-any
        return this._inputFileSystem.readJsonSync(path);
    }
    readlinkSync(path) {
        return this._inputFileSystem.readlinkSync(path);
    }
    purge(changes) {
        if (typeof changes === 'string') {
            this._webpackCompilerHost.invalidate(changes);
        }
        else if (Array.isArray(changes)) {
            changes.forEach((fileName) => this._webpackCompilerHost.invalidate(fileName));
        }
        if (this._inputFileSystem.purge) {
            // tslint:disable-next-line:no-any
            this._inputFileSystem.purge(changes);
        }
    }
}
exports.VirtualFileSystemDecorator = VirtualFileSystemDecorator;
class VirtualWatchFileSystemDecorator extends exports.NodeWatchFileSystem {
    constructor(_virtualInputFileSystem, _replacements) {
        super(_virtualInputFileSystem);
        this._virtualInputFileSystem = _virtualInputFileSystem;
        this._replacements = _replacements;
    }
    watch(files, dirs, missing, startTime, options, callback, // tslint:disable-line:no-any
    callbackUndelayed) {
        const reverseReplacements = new Map();
        const reverseTimestamps = (map) => {
            for (const entry of Array.from(map.entries())) {
                const original = reverseReplacements.get(entry[0]);
                if (original) {
                    map.set(original, entry[1]);
                    map.delete(entry[0]);
                }
            }
            return map;
        };
        const newCallbackUndelayed = (filename, timestamp) => {
            const original = reverseReplacements.get(filename);
            if (original) {
                this._virtualInputFileSystem.purge(original);
                callbackUndelayed(original, timestamp);
            }
            else {
                callbackUndelayed(filename, timestamp);
            }
        };
        const newCallback = (err, filesModified, contextModified, missingModified, fileTimestamps, contextTimestamps) => {
            // Update fileTimestamps with timestamps from virtual files.
            const virtualFilesStats = this._virtualInputFileSystem.getVirtualFilesPaths()
                .map((fileName) => ({
                path: fileName,
                mtime: +this._virtualInputFileSystem.statSync(fileName).mtime,
            }));
            virtualFilesStats.forEach(stats => fileTimestamps.set(stats.path, +stats.mtime));
            callback(err, filesModified.map(value => reverseReplacements.get(value) || value), contextModified.map(value => reverseReplacements.get(value) || value), missingModified.map(value => reverseReplacements.get(value) || value), reverseTimestamps(fileTimestamps), reverseTimestamps(contextTimestamps));
        };
        const mapReplacements = (original) => {
            if (!this._replacements) {
                return original;
            }
            const replacements = this._replacements;
            return original.map(file => {
                if (typeof replacements === 'function') {
                    const replacement = core_1.getSystemPath(replacements(core_1.normalize(file)));
                    if (replacement !== file) {
                        reverseReplacements.set(replacement, file);
                    }
                    return replacement;
                }
                else {
                    const replacement = replacements.get(core_1.normalize(file));
                    if (replacement) {
                        const fullReplacement = core_1.getSystemPath(replacement);
                        reverseReplacements.set(fullReplacement, file);
                        return fullReplacement;
                    }
                    else {
                        return file;
                    }
                }
            });
        };
        const watcher = super.watch(mapReplacements(files), mapReplacements(dirs), mapReplacements(missing), startTime, options, newCallback, newCallbackUndelayed);
        return {
            close: () => watcher.close(),
            pause: () => watcher.pause(),
            getFileTimestamps: () => reverseTimestamps(watcher.getFileTimestamps()),
            getContextTimestamps: () => reverseTimestamps(watcher.getContextTimestamps()),
        };
    }
}
exports.VirtualWatchFileSystemDecorator = VirtualWatchFileSystemDecorator;

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
const fs_1 = require("fs");
const ts = require("typescript");
const utils_1 = require("./utils");
const dev = Math.floor(Math.random() * 10000);
class WebpackCompilerHost {
    constructor(_options, basePath, host, cacheSourceFiles, directTemplateLoading = false, ngccProcessor, moduleResolutionCache) {
        this._options = _options;
        this.cacheSourceFiles = cacheSourceFiles;
        this.directTemplateLoading = directTemplateLoading;
        this.ngccProcessor = ngccProcessor;
        this.moduleResolutionCache = moduleResolutionCache;
        this._changedFiles = new Set();
        this._readResourceFiles = new Set();
        this._sourceFileCache = new Map();
        this._virtualFileExtensions = [
            '.js',
            '.js.map',
            '.ngfactory.js',
            '.ngfactory.js.map',
            '.ngsummary.json',
        ];
        this._virtualStyleFileExtensions = [
            '.shim.ngstyle.js',
            '.shim.ngstyle.js.map',
        ];
        this._syncHost = new core_1.virtualFs.SyncDelegateHost(host);
        this._innerMemoryHost = new core_1.virtualFs.SimpleMemoryHost();
        this._memoryHost = new core_1.virtualFs.SyncDelegateHost(this._innerMemoryHost);
        this._basePath = core_1.normalize(basePath);
    }
    get virtualFiles() {
        return [...this._memoryHost.delegate._cache.keys()];
    }
    reset() {
        this._innerMemoryHost.reset();
        this._changedFiles.clear();
        this._readResourceFiles.clear();
        this._sourceFileCache.clear();
        this._resourceLoader = undefined;
    }
    denormalizePath(path) {
        return core_1.getSystemPath(core_1.normalize(path));
    }
    resolve(path) {
        const p = core_1.normalize(path);
        if (core_1.isAbsolute(p)) {
            return p;
        }
        else {
            return core_1.join(this._basePath, p);
        }
    }
    resetChangedFileTracker() {
        this._changedFiles.clear();
    }
    getChangedFilePaths() {
        return [...this._changedFiles];
    }
    getNgFactoryPaths() {
        return (this.virtualFiles
            .filter(fileName => fileName.endsWith('.ngfactory.js') || fileName.endsWith('.ngstyle.js'))
            // These paths are used by the virtual file system decorator so we must denormalize them.
            .map(path => this.denormalizePath(path)));
    }
    invalidate(fileName) {
        const fullPath = this.resolve(fileName);
        this._sourceFileCache.delete(fullPath);
        if (this.ngccProcessor) {
            // Delete the ngcc processor cache using the TS-format file names.
            this.ngccProcessor.invalidate(utils_1.forwardSlashPath(fileName));
        }
        let exists = false;
        try {
            exists = this._syncHost.isFile(fullPath);
            if (exists) {
                this._changedFiles.add(utils_1.workaroundResolve(fullPath));
            }
        }
        catch (_a) { }
        // File doesn't exist anymore and is not a factory, so we should delete the related
        // virtual files.
        if (!exists &&
            fullPath.endsWith('.ts') &&
            !(fullPath.endsWith('.ngfactory.ts') || fullPath.endsWith('.shim.ngstyle.ts'))) {
            this._virtualFileExtensions.forEach(ext => {
                const virtualFile = (fullPath.slice(0, -3) + ext);
                if (this._memoryHost.exists(virtualFile)) {
                    this._memoryHost.delete(virtualFile);
                }
            });
        }
        if (fullPath.endsWith('.ts')) {
            return;
        }
        // In case resolveJsonModule and allowJs we also need to remove virtual emitted files
        // both if they exists or not.
        if ((fullPath.endsWith('.js') || fullPath.endsWith('.json')) &&
            !/(\.(ngfactory|ngstyle)\.js|ngsummary\.json)$/.test(fullPath)) {
            if (this._memoryHost.exists(fullPath)) {
                this._memoryHost.delete(fullPath);
            }
            return;
        }
        if (!exists) {
            // At this point we're only looking at resource files (html/css/scss/etc).
            // If the original was deleted, we should delete the virtual files too.
            // If the original wasn't deleted we should leave them to be overwritten, because webpack
            // might begin the loading process before our plugin has re-emitted them.
            for (const ext of this._virtualStyleFileExtensions) {
                const virtualFile = (fullPath + ext);
                if (this._memoryHost.exists(virtualFile)) {
                    this._memoryHost.delete(virtualFile);
                }
            }
        }
    }
    fileExists(fileName, delegate = true) {
        const p = this.resolve(fileName);
        if (this._memoryHost.isFile(p)) {
            return true;
        }
        if (!delegate) {
            return false;
        }
        let exists = false;
        try {
            exists = this._syncHost.isFile(p);
        }
        catch (_a) { }
        return exists;
    }
    readFile(fileName) {
        const filePath = this.resolve(fileName);
        try {
            let content;
            if (this._memoryHost.isFile(filePath)) {
                content = this._memoryHost.read(filePath);
            }
            else {
                content = this._syncHost.read(filePath);
            }
            // strip BOM
            return core_1.virtualFs.fileBufferToString(content).replace(/^\uFEFF/, '');
        }
        catch (_a) {
            return undefined;
        }
    }
    readFileBuffer(fileName) {
        const filePath = this.resolve(fileName);
        if (this._memoryHost.isFile(filePath)) {
            return Buffer.from(this._memoryHost.read(filePath));
        }
        else {
            const content = this._syncHost.read(filePath);
            return Buffer.from(content);
        }
    }
    _makeStats(stats) {
        return {
            isFile: () => stats.isFile(),
            isDirectory: () => stats.isDirectory(),
            isBlockDevice: () => (stats.isBlockDevice && stats.isBlockDevice()) || false,
            isCharacterDevice: () => (stats.isCharacterDevice && stats.isCharacterDevice()) || false,
            isFIFO: () => (stats.isFIFO && stats.isFIFO()) || false,
            isSymbolicLink: () => (stats.isSymbolicLink && stats.isSymbolicLink()) || false,
            isSocket: () => (stats.isSocket && stats.isSocket()) || false,
            dev: stats.dev === undefined ? dev : stats.dev,
            ino: stats.ino === undefined ? Math.floor(Math.random() * 100000) : stats.ino,
            mode: stats.mode === undefined ? parseInt('777', 8) : stats.mode,
            nlink: stats.nlink === undefined ? 1 : stats.nlink,
            uid: stats.uid || 0,
            gid: stats.gid || 0,
            rdev: stats.rdev || 0,
            size: stats.size,
            blksize: stats.blksize === undefined ? 512 : stats.blksize,
            blocks: stats.blocks === undefined ? Math.ceil(stats.size / 512) : stats.blocks,
            atime: stats.atime,
            atimeMs: stats.atime.getTime(),
            mtime: stats.mtime,
            mtimeMs: stats.mtime.getTime(),
            ctime: stats.ctime,
            ctimeMs: stats.ctime.getTime(),
            birthtime: stats.birthtime,
            birthtimeMs: stats.birthtime.getTime(),
        };
    }
    stat(path) {
        const p = this.resolve(path);
        let stats = null;
        try {
            stats = this._memoryHost.stat(p) || this._syncHost.stat(p);
        }
        catch (_a) { }
        if (!stats) {
            return null;
        }
        if (stats instanceof fs_1.Stats) {
            return stats;
        }
        return this._makeStats(stats);
    }
    directoryExists(directoryName) {
        const p = this.resolve(directoryName);
        try {
            return this._memoryHost.isDirectory(p) || this._syncHost.isDirectory(p);
        }
        catch (_a) {
            return false;
        }
    }
    getDirectories(path) {
        const p = this.resolve(path);
        let delegated;
        try {
            delegated = this._syncHost.list(p).filter(x => {
                try {
                    return this._syncHost.isDirectory(core_1.join(p, x));
                }
                catch (_a) {
                    return false;
                }
            });
        }
        catch (_a) {
            delegated = [];
        }
        let memory;
        try {
            memory = this._memoryHost.list(p).filter(x => {
                try {
                    return this._memoryHost.isDirectory(core_1.join(p, x));
                }
                catch (_a) {
                    return false;
                }
            });
        }
        catch (_b) {
            memory = [];
        }
        return [...new Set([...delegated, ...memory])];
    }
    getSourceFile(fileName, languageVersion, onError) {
        const p = this.resolve(fileName);
        try {
            const cached = this._sourceFileCache.get(p);
            if (cached) {
                return cached;
            }
            const content = this.readFile(fileName);
            if (content !== undefined) {
                const sf = ts.createSourceFile(utils_1.workaroundResolve(fileName), content, languageVersion, true);
                if (this.cacheSourceFiles) {
                    this._sourceFileCache.set(p, sf);
                }
                return sf;
            }
        }
        catch (e) {
            if (onError) {
                onError(e.message);
            }
        }
        return undefined;
    }
    getDefaultLibFileName(options) {
        return ts.createCompilerHost(options).getDefaultLibFileName(options);
    }
    // This is due to typescript CompilerHost interface being weird on writeFile. This shuts down
    // typings in WebStorm.
    get writeFile() {
        return (fileName, data, _writeByteOrderMark, onError, _sourceFiles) => {
            const p = this.resolve(fileName);
            try {
                this._memoryHost.write(p, core_1.virtualFs.stringToFileBuffer(data));
            }
            catch (e) {
                if (onError) {
                    onError(e.message);
                }
            }
        };
    }
    getCurrentDirectory() {
        return utils_1.workaroundResolve(this._basePath);
    }
    getCanonicalFileName(fileName) {
        const path = utils_1.workaroundResolve(this.resolve(fileName));
        return this.useCaseSensitiveFileNames() ? path : path.toLowerCase();
    }
    useCaseSensitiveFileNames() {
        return !process.platform.startsWith('win32');
    }
    getNewLine() {
        return '\n';
    }
    setResourceLoader(resourceLoader) {
        this._resourceLoader = resourceLoader;
    }
    readResource(fileName) {
        // These paths are meant to be used by the loader so we must denormalize them
        const denormalizedFileName = utils_1.workaroundResolve(fileName);
        this._readResourceFiles.add(denormalizedFileName);
        if (this.directTemplateLoading && (fileName.endsWith('.html') || fileName.endsWith('.svg'))) {
            return this.readFile(fileName);
        }
        if (this._resourceLoader) {
            return this._resourceLoader.get(denormalizedFileName);
        }
        else {
            return this.readFile(fileName);
        }
    }
    getModifiedResourceFiles() {
        const modifiedFiles = new Set();
        for (const changedFile of this._changedFiles) {
            const denormalizedFileName = utils_1.workaroundResolve(changedFile);
            if (this._readResourceFiles.has(denormalizedFileName)) {
                modifiedFiles.add(denormalizedFileName);
            }
            if (!this._resourceLoader) {
                continue;
            }
            for (const resourcePath of this._resourceLoader.getAffectedResources(denormalizedFileName)) {
                modifiedFiles.add(resourcePath);
            }
        }
        return modifiedFiles;
    }
    trace(message) {
        // tslint:disable-next-line: no-console
        console.log(message);
    }
    resolveModuleNames(moduleNames, containingFile) {
        return moduleNames.map(moduleName => {
            const { resolvedModule } = ts.resolveModuleName(moduleName, utils_1.workaroundResolve(containingFile), this._options, this, this.moduleResolutionCache);
            if (this._options.enableIvy && resolvedModule && this.ngccProcessor) {
                this.ngccProcessor.processModule(moduleName, resolvedModule);
            }
            return resolvedModule;
        });
    }
    resolveTypeReferenceDirectives(typeReferenceDirectiveNames, containingFile, redirectedReference) {
        return typeReferenceDirectiveNames.map(moduleName => {
            const { resolvedTypeReferenceDirective } = ts.resolveTypeReferenceDirective(moduleName, utils_1.workaroundResolve(containingFile), this._options, this, redirectedReference);
            if (this._options.enableIvy && resolvedTypeReferenceDirective && this.ngccProcessor) {
                this.ngccProcessor.processModule(moduleName, resolvedTypeReferenceDirective);
            }
            return resolvedTypeReferenceDirective;
        });
    }
}
exports.WebpackCompilerHost = WebpackCompilerHost;

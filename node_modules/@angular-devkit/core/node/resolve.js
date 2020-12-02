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
const src_1 = require("../src");
const fs_1 = require("./fs");
/**
 * Exception thrown when a module could not be resolved.
 * @deprecated since version 8. Use `MODULE_NOT_FOUND` Node error code instead.
 */
class ModuleNotFoundException extends src_1.BaseException {
    constructor(moduleName, basePath) {
        super(`Could not find module ${JSON.stringify(moduleName)} from ${JSON.stringify(basePath)}.`);
        this.moduleName = moduleName;
        this.basePath = basePath;
        this.code = 'MODULE_NOT_FOUND';
    }
}
exports.ModuleNotFoundException = ModuleNotFoundException;
/**
 * Returns a list of all the callers from the resolve() call.
 * @returns {string[]}
 * @private
 */
function _caller() {
    // see https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    const error = Error;
    const origPrepareStackTrace = error.prepareStackTrace;
    error.prepareStackTrace = (_, stack) => stack;
    const stack = (new Error()).stack;
    error.prepareStackTrace = origPrepareStackTrace;
    return stack ? stack.map(x => x.getFileName()).filter(x => !!x) : [];
}
/**
 * Get the global directory for node_modules. This is based on NPM code itself, and may be subject
 * to change, but is relatively stable.
 * @returns {string} The path to node_modules itself.
 * @private
 */
function _getGlobalNodeModules() {
    let globalPrefix;
    if (process.env.PREFIX) {
        globalPrefix = process.env.PREFIX;
    }
    else if (process.platform === 'win32') {
        // c:\node\node.exe --> prefix=c:\node\
        globalPrefix = path.dirname(process.execPath);
    }
    else {
        // /usr/local/bin/node --> prefix=/usr/local
        globalPrefix = path.dirname(path.dirname(process.execPath));
        // destdir only is respected on Unix
        const destdir = process.env.DESTDIR;
        if (destdir) {
            globalPrefix = path.join(destdir, globalPrefix);
        }
    }
    return (process.platform !== 'win32')
        ? path.resolve(globalPrefix || '', 'lib', 'node_modules')
        : path.resolve(globalPrefix || '', 'node_modules');
}
let _resolveHook = null;
/** @deprecated since version 8. Use `require.resolve` instead. */
function setResolveHook(hook) {
    _resolveHook = hook;
}
exports.setResolveHook = setResolveHook;
/**
 * Resolve a package using a logic similar to npm require.resolve, but with more options.
 * @param packageName The package name to resolve.
 * @param options A list of options. See documentation of those options.
 * @returns {string} Path to the index to include, or if `resolvePackageJson` option was
 *                   passed, a path to that file.
 * @throws {ModuleNotFoundException} If no module with that name was found anywhere.
 * @deprecated since version 8. Use `require.resolve` instead.
 */
function resolve(packageName, options) {
    if (_resolveHook) {
        const maybe = _resolveHook(packageName, options);
        if (maybe) {
            return maybe;
        }
    }
    const readFileSync = fs.readFileSync;
    const extensions = options.extensions || Object.keys(require.extensions);
    const basePath = options.basedir;
    options.paths = options.paths || [];
    if (/^(?:\.\.?(?:\/|$)|\/|([A-Za-z]:)?[\/\\])/.test(packageName)) {
        let res = path.resolve(basePath, packageName);
        if (packageName === '..' || packageName.slice(-1) === '/') {
            res += '/';
        }
        const m = loadAsFileSync(res) || loadAsDirectorySync(res);
        if (m) {
            return m;
        }
    }
    else {
        const n = loadNodeModulesSync(packageName, basePath);
        if (n) {
            return n;
        }
    }
    // Fallback to checking the local (callee) node modules.
    if (options.checkLocal) {
        const callers = _caller();
        for (const caller of callers) {
            const localDir = path.dirname(caller);
            if (localDir !== options.basedir) {
                try {
                    return resolve(packageName, {
                        ...options,
                        checkLocal: false,
                        checkGlobal: false,
                        basedir: localDir,
                    });
                }
                catch (e) {
                    // Just swap the basePath with the original call one.
                    if (!(e instanceof ModuleNotFoundException)) {
                        throw e;
                    }
                }
            }
        }
    }
    // Fallback to checking the global node modules.
    if (options.checkGlobal) {
        const globalDir = path.dirname(_getGlobalNodeModules());
        if (globalDir !== options.basedir) {
            try {
                return resolve(packageName, {
                    ...options,
                    checkLocal: false,
                    checkGlobal: false,
                    basedir: globalDir,
                });
            }
            catch (e) {
                // Just swap the basePath with the original call one.
                if (!(e instanceof ModuleNotFoundException)) {
                    throw e;
                }
            }
        }
    }
    throw new ModuleNotFoundException(packageName, basePath);
    function loadAsFileSync(x) {
        if (fs_1.isFile(x)) {
            return x;
        }
        return extensions.map(ex => x + ex).find(f => fs_1.isFile(f)) || null;
    }
    function loadAsDirectorySync(x) {
        const pkgfile = path.join(x, 'package.json');
        if (fs_1.isFile(pkgfile)) {
            if (options.resolvePackageJson) {
                return pkgfile;
            }
            try {
                const body = readFileSync(pkgfile, 'UTF8');
                const pkg = JSON.parse(body);
                if (pkg['main']) {
                    if (pkg['main'] === '.' || pkg['main'] === './') {
                        pkg['main'] = 'index';
                    }
                    const m = loadAsFileSync(path.resolve(x, pkg['main']));
                    if (m) {
                        return m;
                    }
                    const n = loadAsDirectorySync(path.resolve(x, pkg['main']));
                    if (n) {
                        return n;
                    }
                }
            }
            catch (_a) { }
        }
        return loadAsFileSync(path.join(x, '/index'));
    }
    function loadNodeModulesSync(x, start) {
        const dirs = nodeModulesPaths(start, options);
        for (const dir of dirs) {
            const m = loadAsFileSync(path.join(dir, x));
            if (m) {
                return m;
            }
            const n = loadAsDirectorySync(path.join(dir, x));
            if (n) {
                return n;
            }
        }
        return null;
    }
    function nodeModulesPaths(start, opts) {
        const modules = ['node_modules'];
        if (process.env.BAZEL_TARGET) {
            // When running test under Bazel, node_modules have to be resolved
            // differently. node_modules are installed in the `npm` workspace.
            // For more info, see `yarn_install` rule in WORKSPACE file.
            modules.push(path.join('npm', 'node_modules'));
        }
        // ensure that `start` is an absolute path at this point,
        // resolving against the process' current working directory
        let absoluteStart = path.resolve(start);
        if (opts && opts.preserveSymlinks === false) {
            try {
                absoluteStart = fs.realpathSync(absoluteStart);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    throw err;
                }
            }
        }
        let prefix = '/';
        if (/^([A-Za-z]:)/.test(absoluteStart)) {
            prefix = '';
        }
        else if (/^\\\\/.test(absoluteStart)) {
            prefix = '\\\\';
        }
        const paths = [absoluteStart];
        let parsed = path.parse(absoluteStart);
        while (parsed.dir !== paths[paths.length - 1]) {
            paths.push(parsed.dir);
            parsed = path.parse(parsed.dir);
        }
        const dirs = paths.reduce((dirs, aPath) => {
            return dirs.concat(modules.map(function (moduleDir) {
                return path.join(prefix, aPath, moduleDir);
            }));
        }, []);
        if (process.env.NG_TEMP_MODULES_DIR) {
            // When running from a temporary installations, node_modules have to be resolved
            // differently and they should be prefered over others.
            dirs.unshift(process.env.NG_TEMP_MODULES_DIR);
        }
        return opts && opts.paths ? dirs.concat(opts.paths) : dirs;
    }
}
exports.resolve = resolve;

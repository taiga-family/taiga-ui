"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ngcc_1 = require("@angular/compiler-cli/ngcc");
const fs_1 = require("fs");
const path = require("path");
const log = require("../utils/log");
const nodes_1 = require("../ng-package/nodes");
// Transform a package and its typings when NGTSC is resolving a module.
class NgccProcessor {
    constructor(compilerOptions, entryPoints) {
        this.compilerOptions = compilerOptions;
        this.entryPoints = entryPoints;
        this._processedModules = new Set();
        this._entryPointsUrl = this.entryPoints.map(({ url }) => nodes_1.ngUrl(url));
        const { baseUrl, paths } = this.compilerOptions;
        this._nodeModulesDirectory = this.findNodeModulesDirectory(baseUrl);
        if (baseUrl && paths) {
            this._pathMappings = {
                baseUrl,
                paths,
            };
        }
    }
    processModule(moduleName, resolvedModule) {
        const resolvedFileName = resolvedModule.resolvedFileName;
        if (!resolvedFileName ||
            moduleName.startsWith('.') ||
            this._processedModules.has(moduleName) ||
            this._entryPointsUrl.includes(nodes_1.ngUrl(moduleName))) {
            // Skip when module is unknown, relative, an entrypoint or already processed.
            return;
        }
        const packageJsonPath = this.tryResolvePackage(moduleName, resolvedFileName);
        if (!packageJsonPath) {
            // add it to processed so the second time round we skip this.
            this._processedModules.add(moduleName);
            return;
        }
        // If the package.json is read only we should skip calling NGCC.
        // With Bazel when running under sandbox the filesystem is read-only.
        try {
            fs_1.accessSync(packageJsonPath, fs_1.constants.W_OK);
        }
        catch (_a) {
            // add it to processed so the second time round we skip this.
            this._processedModules.add(moduleName);
            return;
        }
        ngcc_1.process({
            basePath: this._nodeModulesDirectory,
            targetEntryPointPath: path.dirname(packageJsonPath),
            compileAllFormats: false,
            propertiesToConsider: ['es2015', 'browser', 'module', 'main'],
            createNewEntryPointFormats: true,
            logger: this._logger,
            pathMappings: this._pathMappings,
        });
        this._processedModules.add(moduleName);
    }
    /**
     * Try resolve a package.json file from the resolved .d.ts file.
     */
    tryResolvePackage(moduleName, resolvedFileName) {
        try {
            return require.resolve(`${moduleName}/package.json`, {
                paths: [resolvedFileName],
            });
        }
        catch (_a) {
            // if it fails this might be a deep import which doesn't have a package.json
            // Ex: @angular/compiler/src/i18n/i18n_ast/package.json
            // or local libraries which don't reside in node_modules
            const packageJsonPath = path.resolve(resolvedFileName, '../package.json');
            return fs_1.existsSync(packageJsonPath) ? packageJsonPath : undefined;
        }
    }
    findNodeModulesDirectory(startPoint) {
        let current = startPoint;
        while (path.dirname(current) !== current) {
            const nodePath = path.join(current, 'node_modules');
            if (fs_1.existsSync(nodePath)) {
                return nodePath;
            }
            current = path.dirname(current);
        }
        throw new Error(`Cannot locate the 'node_modules' directory.`);
    }
}
exports.NgccProcessor = NgccProcessor;
class NgccLogger {
    constructor() {
        this.level = ngcc_1.LogLevel.info;
    }
    debug(...args) {
        log.debug(args.join(' '));
    }
    info(...args) {
        log.info(args.join(' '));
    }
    warn(...args) {
        log.warn(args.join(' '));
    }
    error(...args) {
        log.error(args.join(' '));
    }
}
//# sourceMappingURL=ngcc-processor.js.map
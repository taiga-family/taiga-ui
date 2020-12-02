"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
const transform_1 = require("../../graph/transform");
const path_1 = require("../../utils/path");
const rimraf_1 = require("../../utils/rimraf");
const log = require("../../utils/log");
const glob_1 = require("../../utils/glob");
const nodes_1 = require("../nodes");
const copy_1 = require("../../utils/copy");
exports.writePackageTransform = transform_1.transformFromPromise((graph) => __awaiter(void 0, void 0, void 0, function* () {
    const entryPoint = graph.find(nodes_1.isEntryPointInProgress());
    const ngEntryPoint = entryPoint.data.entryPoint;
    const ngPackageNode = graph.find(nodes_1.isPackage);
    const ngPackage = ngPackageNode.data;
    const { destinationFiles } = entryPoint.data;
    const ignorePaths = [
        '.gitkeep',
        '**/.DS_Store',
        '**/Thumbs.db',
        '**/node_modules/**',
        `${ngPackage.dest}/**`,
    ];
    // we don't want to copy `dist` and 'node_modules' declaration files but only files in source
    const declarationFiles = yield glob_1.globFiles(`${path.dirname(ngEntryPoint.entryFilePath)}/**/*.d.ts`, {
        ignore: ignorePaths,
        cache: ngPackageNode.cache.globCache,
    });
    if (declarationFiles.length) {
        // COPY SOURCE FILES TO DESTINATION
        log.info('Copying declaration files');
        yield Promise.all(declarationFiles.map((value) => {
            const relativePath = path.relative(ngEntryPoint.entryFilePath, value);
            const destination = path.resolve(destinationFiles.declarations, relativePath);
            return copy_1.copyFile(value, destination, { overwrite: true, dereference: true });
        }));
    }
    if (ngPackage.assets.length && !ngEntryPoint.isSecondaryEntryPoint) {
        const assets = ngPackage.assets.map((x) => path.join(ngPackage.src, x));
        const assetFiles = yield glob_1.globFiles(assets, {
            ignore: ignorePaths,
            cache: ngPackageNode.cache.globCache,
        });
        if (assetFiles.length) {
            // COPY ASSET FILES TO DESTINATION
            log.info('Copying assets');
            yield Promise.all(assetFiles.map((value) => {
                const relativePath = path.relative(ngPackage.src, value);
                const destination = path.resolve(ngPackage.dest, relativePath);
                return copy_1.copyFile(value, destination, { overwrite: true, dereference: true });
            }));
        }
    }
    // 6. WRITE PACKAGE.JSON
    log.info('Writing package metadata');
    const relativeUnixFromDestPath = (filePath) => path_1.ensureUnixPath(path.relative(ngEntryPoint.destinationPath, filePath));
    const isIvy = !!entryPoint.data.tsConfig.options.enableIvy;
    yield writePackageJson(ngEntryPoint, ngPackage, {
        main: relativeUnixFromDestPath(destinationFiles.umd),
        module: relativeUnixFromDestPath(destinationFiles.fesm5),
        es2015: relativeUnixFromDestPath(destinationFiles.fesm2015),
        esm5: relativeUnixFromDestPath(destinationFiles.esm5),
        esm2015: relativeUnixFromDestPath(destinationFiles.esm2015),
        fesm5: relativeUnixFromDestPath(destinationFiles.fesm5),
        fesm2015: relativeUnixFromDestPath(destinationFiles.fesm2015),
        typings: relativeUnixFromDestPath(destinationFiles.declarations),
        // Ivy doesn't generate metadata files
        metadata: isIvy ? undefined : relativeUnixFromDestPath(destinationFiles.metadata),
        // webpack v4+ specific flag to enable advanced optimizations and code splitting
        sideEffects: ngEntryPoint.sideEffects,
    }, isIvy);
    log.success(`Built ${ngEntryPoint.moduleId}`);
    return graph;
}));
/**
 * Creates and writes a `package.json` file of the entry point used by the `node_module`
 * resolution strategies.
 *
 * #### Example
 *
 * A consumer of the entry point depends on it by `import {..} from '@my/module/id';`.
 * The module id `@my/module/id` will be resolved to the `package.json` file that is written by
 * this build step.
 * The properties `main`, `module`, `typings` (and so on) in the `package.json` point to the
 * flattened JavaScript bundles, type definitions, (...).
 *
 * @param entryPoint An entry point of an Angular package / library
 * @param additionalProperties Additional properties, e.g. binary artefacts (bundle files), to merge into `package.json`
 */
function writePackageJson(entryPoint, pkg, additionalProperties, isIvy) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        log.debug('Writing package.json');
        // set additional properties
        const packageJson = Object.assign(Object.assign({}, entryPoint.packageJson), additionalProperties);
        // read tslib version from `@angular/compiler` so that our tslib
        // version at least matches that of angular if we use require('tslib').version
        // it will get what installed and not the minimum version nor if it is a `~` or `^`
        // this is only required for primary
        if (!entryPoint.isSecondaryEntryPoint) {
            if (!((_a = packageJson.peerDependencies) === null || _a === void 0 ? void 0 : _a.tslib) && !((_b = packageJson.dependencies) === null || _b === void 0 ? void 0 : _b.tslib)) {
                const { peerDependencies: angularPeerDependencies = {}, dependencies: angularDependencies = {}, } = require('@angular/compiler/package.json');
                const tsLibVersion = angularPeerDependencies.tslib || angularDependencies.tslib;
                if (tsLibVersion) {
                    packageJson.dependencies = Object.assign(Object.assign({}, packageJson.dependencies), { tslib: tsLibVersion });
                }
            }
            else if ((_c = packageJson.peerDependencies) === null || _c === void 0 ? void 0 : _c.tslib) {
                log.warn(`'tslib' is no longer recommanded to be used as a 'peerDependencies'. Moving it to 'dependencies'.`);
                packageJson.dependencies = Object.assign(Object.assign({}, (packageJson.dependencies || {})), { tslib: packageJson.peerDependencies.tslib });
                delete packageJson.peerDependencies.tslib;
            }
        }
        // Verify non-peerDependencies as they can easily lead to duplicate installs or version conflicts
        // in the node_modules folder of an application
        const whitelist = pkg.whitelistedNonPeerDependencies.map((value) => new RegExp(value));
        try {
            checkNonPeerDependencies(packageJson, 'dependencies', whitelist);
        }
        catch (e) {
            yield rimraf_1.rimraf(entryPoint.destinationPath);
            throw e;
        }
        // Removes scripts from package.json after build
        if (packageJson.scripts) {
            if (pkg.keepLifecycleScripts !== true) {
                log.info(`Removing scripts section in package.json as it's considered a potential security vulnerability.`);
                delete packageJson.scripts;
            }
            else {
                log.warn(`You enabled keepLifecycleScripts explicitly. The scripts section in package.json will be published to npm.`);
            }
        }
        if (isIvy && !entryPoint.isSecondaryEntryPoint) {
            const scripts = packageJson.scripts || (packageJson.scripts = {});
            scripts.prepublishOnly =
                'node --eval "console.error(\'' +
                    'ERROR: Trying to publish a package that has been compiled by Ivy. This is not allowed.\\n' +
                    'Please delete and rebuild the package, without compiling with Ivy, before attempting to publish.\\n' +
                    '\')" ' +
                    '&& exit 1';
        }
        // keep the dist package.json clean
        // this will not throw if ngPackage field does not exist
        delete packageJson.ngPackage;
        const packageJsonPropertiesToDelete = [
            'stylelint',
            'prettier',
            'browserslist',
            'devDependencies',
            'jest',
            'workspaces',
            'husky',
        ];
        for (const prop of packageJsonPropertiesToDelete) {
            if (prop in packageJson) {
                delete packageJson[prop];
                log.info(`Removing ${prop} section in package.json.`);
            }
        }
        packageJson.name = entryPoint.moduleId;
        // `outputJson()` creates intermediate directories, if they do not exist
        // -- https://github.com/jprichardson/node-fs-extra/blob/master/docs/outputJson.md
        yield fs.outputJson(path.join(entryPoint.destinationPath, 'package.json'), packageJson, {
            spaces: 2,
        });
    });
}
function checkNonPeerDependencies(packageJson, property, whitelist) {
    if (!packageJson[property]) {
        return;
    }
    for (const dep of Object.keys(packageJson[property])) {
        if (whitelist.find((regex) => regex.test(dep))) {
            log.debug(`Dependency ${dep} is whitelisted in '${property}'`);
        }
        else {
            log.warn(`Distributing npm packages with '${property}' is not recommended. Please consider adding ${dep} to 'peerDependencies' or remove it from '${property}'.`);
            throw new Error(`Dependency ${dep} must be explicitly whitelisted.`);
        }
    }
}
//# sourceMappingURL=write-package.transform.js.map
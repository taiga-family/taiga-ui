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
const ajv = require("ajv");
const fs_extra_1 = require("fs-extra");
const path = require("path");
const log = require("../utils/log");
const path_1 = require("../utils/path");
const entry_point_1 = require("./entry-point/entry-point");
const package_1 = require("./package");
const glob_1 = require("../utils/glob");
const ngPackageSchemaJson = require('../../ng-package.schema.json');
function formatSchemaValidationErrors(errors) {
    return errors
        .map(err => {
        let message = `Data path ${JSON.stringify(err.dataPath)} ${err.message}`;
        if (err.keyword === 'additionalProperties') {
            message += ` (${err.params.additionalProperty})`;
        }
        return message + '.';
    })
        .join('\n');
}
/**
 * Resolves a user's package by testing for 'package.json', 'ng-package.json', or 'ng-package.js'.
 *
 * @param folderPathOrFilePath A path pointing either to a file or a directory
 * @param isSecondary A boolean determining if this is a secondary package
 * @return The user's package
 */
function resolveUserPackage(folderPathOrFilePath, isSecondary = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const readConfigFile = (filePath) => __awaiter(this, void 0, void 0, function* () { return (fs_extra_1.pathExistsSync(filePath) ? Promise.resolve().then(() => require(filePath)) : undefined); });
        const fullPath = path.resolve(folderPathOrFilePath);
        const pathStats = yield fs_extra_1.lstat(fullPath);
        const basePath = pathStats.isDirectory() ? fullPath : path.dirname(fullPath);
        const packageJson = yield readConfigFile(path.join(basePath, 'package.json'));
        if (!packageJson && !isSecondary) {
            throw new Error(`Cannot discover package sources at ${folderPathOrFilePath} as 'package.json' was not found.`);
        }
        let ngPackageJson;
        if (packageJson && packageJson['ngPackage']) {
            // Read `ngPackage` from `package.json`
            ngPackageJson = Object.assign({}, packageJson['ngPackage']);
        }
        else if (pathStats.isDirectory()) {
            ngPackageJson = yield readConfigFile(path.join(basePath, 'ng-package.json'));
            if (!ngPackageJson) {
                ngPackageJson = yield readConfigFile(path.join(basePath, 'ng-package.js'));
            }
        }
        else {
            ngPackageJson = yield readConfigFile(fullPath);
        }
        if (ngPackageJson) {
            const _ajv = ajv({
                schemaId: 'auto',
                useDefaults: true,
            });
            const validate = _ajv.compile(ngPackageSchemaJson);
            const isValid = validate(ngPackageJson);
            if (!isValid) {
                throw new Error(`Configuration doesn\'t match the required schema.\n${formatSchemaValidationErrors(validate.errors)}`);
            }
            return {
                basePath,
                packageJson: packageJson || {},
                ngPackageJson,
            };
        }
        if (pathStats.isDirectory()) {
            // return even if it's undefined and use defaults when it's not a file
            return undefined;
        }
        if (pathStats.isFile()) {
            // a project file was specified but was in valid
            if (path.basename(folderPathOrFilePath) === 'package.json') {
                throw new Error(`Cannot read a package from 'package.json' without 'ngPackage' property.`);
            }
            throw new Error(`Trying to read a package from unsupported file extension. Path: ${folderPathOrFilePath}`);
        }
        throw new Error(`Cannot discover package sources at ${folderPathOrFilePath}`);
    });
}
/**
 * Scans `directoryPath` and sub-folders, looking for `package.json` files.
 * Similar to `find ${directoryPath} --name package.json --exec dirname {}`.
 *
 * @param directoryPath Path pointing to a directory
 * @param excludeFolder A sub-folder of `directoryPath` that is excluded from search results.
 */
function findSecondaryPackagesPaths(directoryPath, excludeFolder) {
    return __awaiter(this, void 0, void 0, function* () {
        const ignore = [
            '**/node_modules/**',
            '**/.git/**',
            `${path.resolve(directoryPath, excludeFolder)}/**`,
            `${directoryPath}/package.json`,
            `${directoryPath}/ng-package.json`,
        ];
        const filePaths = yield glob_1.globFiles(`${directoryPath}/**/{package,ng-package}.json`, {
            ignore,
            cwd: directoryPath,
        });
        return filePaths.map(path.dirname);
    });
}
/**
 * Reads a secondary entry point from it's package file.
 *
 * @param primaryDirectoryPath A path pointing to the directory of the primary entry point.
 * @param primary The primary entry point.
 */
function secondaryEntryPoint(primaryDirectoryPath, primary, { packageJson, ngPackageJson, basePath }) {
    if (path.resolve(basePath) === path.resolve(primaryDirectoryPath)) {
        log.error(`Cannot read secondary entry point. It's already a primary entry point. Path: ${basePath}`);
        throw new Error(`Secondary entry point is already a primary.`);
    }
    const relativeSourcePath = path.relative(primaryDirectoryPath, basePath);
    const secondaryModuleId = path_1.ensureUnixPath(`${primary.moduleId}/${relativeSourcePath}`);
    return new entry_point_1.NgEntryPoint(packageJson, ngPackageJson, basePath, {
        moduleId: secondaryModuleId,
        primaryDestinationPath: primary.destinationPath,
        destinationPath: path.join(primary.destinationPath, relativeSourcePath),
    });
}
function discoverPackages({ project }) {
    return __awaiter(this, void 0, void 0, function* () {
        project = path.isAbsolute(project) ? project : path.resolve(project);
        const { packageJson, ngPackageJson, basePath } = yield resolveUserPackage(project);
        const primary = new entry_point_1.NgEntryPoint(packageJson, ngPackageJson, basePath);
        log.debug(`Found primary entry point: ${primary.moduleId}`);
        const folderPaths = yield findSecondaryPackagesPaths(basePath, primary.$get('dest'));
        const secondaries = [];
        for (const folderPath of folderPaths) {
            const secondaryPackage = yield resolveUserPackage(folderPath, true);
            if (secondaryPackage) {
                secondaries.push(secondaryEntryPoint(basePath, primary, secondaryPackage));
            }
        }
        if (secondaries.length > 0) {
            log.debug(`Found secondary entry points: ${secondaries.map(e => e.moduleId).join(', ')}`);
        }
        return new package_1.NgPackage(basePath, primary, secondaries);
    });
}
exports.discoverPackages = discoverPackages;
//# sourceMappingURL=discover-packages.js.map
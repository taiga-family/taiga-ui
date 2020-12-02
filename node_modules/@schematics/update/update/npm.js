"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const os_1 = require("os");
const path = require("path");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const ini = require('ini');
const lockfile = require('@yarnpkg/lockfile');
const pacote = require('pacote');
const npmPackageJsonCache = new Map();
let npmrc;
function readOptions(logger, yarn = false, showPotentials = false) {
    const cwd = process.cwd();
    const baseFilename = yarn ? 'yarnrc' : 'npmrc';
    const dotFilename = '.' + baseFilename;
    let globalPrefix;
    if (process.env.PREFIX) {
        globalPrefix = process.env.PREFIX;
    }
    else {
        globalPrefix = path.dirname(process.execPath);
        if (process.platform !== 'win32') {
            globalPrefix = path.dirname(globalPrefix);
        }
    }
    const defaultConfigLocations = [
        path.join(globalPrefix, 'etc', baseFilename),
        path.join(os_1.homedir(), dotFilename),
    ];
    const projectConfigLocations = [
        path.join(cwd, dotFilename),
    ];
    const root = path.parse(cwd).root;
    for (let curDir = path.dirname(cwd); curDir && curDir !== root; curDir = path.dirname(curDir)) {
        projectConfigLocations.unshift(path.join(curDir, dotFilename));
    }
    if (showPotentials) {
        logger.info(`Locating potential ${baseFilename} files:`);
    }
    let options = {};
    for (const location of [...defaultConfigLocations, ...projectConfigLocations]) {
        if (fs_1.existsSync(location)) {
            if (showPotentials) {
                logger.info(`Trying '${location}'...found.`);
            }
            const data = fs_1.readFileSync(location, 'utf8');
            options = {
                ...options,
                ...(yarn ? lockfile.parse(data) : ini.parse(data)),
            };
            if (options.cafile) {
                const cafile = path.resolve(path.dirname(location), options.cafile);
                delete options.cafile;
                try {
                    options.ca = fs_1.readFileSync(cafile, 'utf8').replace(/\r?\n/, '\\n');
                }
                catch (_a) { }
            }
        }
        else if (showPotentials) {
            logger.info(`Trying '${location}'...not found.`);
        }
    }
    // Substitute any environment variable references
    for (const key in options) {
        if (typeof options[key] === 'string') {
            options[key] = options[key].replace(/\$\{([^\}]+)\}/, (_, name) => process.env[name] || '');
        }
    }
    return options;
}
/**
 * Get the NPM repository's package.json for a package. This is p
 * @param {string} packageName The package name to fetch.
 * @param {string} registryUrl The NPM Registry URL to use.
 * @param {LoggerApi} logger A logger instance to log debug information.
 * @returns An observable that will put the pacakge.json content.
 * @private
 */
function getNpmPackageJson(packageName, logger, options) {
    const cachedResponse = npmPackageJsonCache.get(packageName);
    if (cachedResponse) {
        return cachedResponse;
    }
    if (!npmrc) {
        try {
            npmrc = readOptions(logger, false, options && options.verbose);
        }
        catch (_a) { }
        if (options && options.usingYarn) {
            try {
                npmrc = { ...npmrc, ...readOptions(logger, true, options && options.verbose) };
            }
            catch (_b) { }
        }
    }
    const resultPromise = pacote.packument(packageName, {
        fullMetadata: true,
        ...npmrc,
        ...(options && options.registryUrl ? { registry: options.registryUrl } : {}),
    });
    // TODO: find some way to test this
    const response = rxjs_1.from(resultPromise).pipe(operators_1.shareReplay(), operators_1.catchError(err => {
        logger.warn(err.message || err);
        return rxjs_1.EMPTY;
    }));
    npmPackageJsonCache.set(packageName, response);
    return response;
}
exports.getNpmPackageJson = getNpmPackageJson;

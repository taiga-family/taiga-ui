"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const node_1 = require("@angular-devkit/core/node");
const fs_1 = require("fs");
const os = require("os");
const path = require("path");
const find_up_1 = require("./find-up");
function getSchemaLocation() {
    return path.join(__dirname, '../lib/config/schema.json');
}
exports.workspaceSchemaPath = getSchemaLocation();
const configNames = ['angular.json', '.angular.json'];
const globalFileName = '.angular-config.json';
function xdgConfigHome(home, configFile) {
    // https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
    const p = process.env['XDG_CONFIG_HOME'] || path.join(home, '.config', 'angular');
    return configFile ? path.join(p, configFile) : p;
}
function projectFilePath(projectPath) {
    // Find the configuration, either where specified, in the Angular CLI project
    // (if it's in node_modules) or from the current process.
    return (projectPath && find_up_1.findUp(configNames, projectPath))
        || find_up_1.findUp(configNames, process.cwd())
        || find_up_1.findUp(configNames, __dirname);
}
function globalFilePath() {
    const home = os.homedir();
    if (!home) {
        return null;
    }
    // follow XDG Base Directory spec
    // note that createGlobalSettings() will continue creating
    // global file in home directory, with this user will have
    // choice to move change its location to meet XDG convention
    const xdgConfig = xdgConfigHome(home, globalFileName);
    if (fs_1.existsSync(xdgConfig)) {
        return xdgConfig;
    }
    const p = path.join(home, globalFileName);
    if (fs_1.existsSync(p)) {
        return p;
    }
    return null;
}
const cachedWorkspaces = new Map();
async function getWorkspace(level = 'local') {
    const cached = cachedWorkspaces.get(level);
    if (cached != undefined) {
        return cached;
    }
    const configPath = level === 'local' ? projectFilePath() : globalFilePath();
    if (!configPath) {
        cachedWorkspaces.set(level, null);
        return null;
    }
    const root = core_1.normalize(path.dirname(configPath));
    const file = core_1.normalize(path.basename(configPath));
    const workspace = new core_1.experimental.workspace.Workspace(root, new node_1.NodeJsSyncHost());
    try {
        await workspace.loadWorkspaceFromHost(file).toPromise();
    }
    catch (error) {
        throw new Error(`Workspace config file cannot be loaded: ${configPath}`
            + `\n${error instanceof Error ? error.message : error}`);
    }
    cachedWorkspaces.set(level, workspace);
    return workspace;
}
exports.getWorkspace = getWorkspace;
function createGlobalSettings() {
    const home = os.homedir();
    if (!home) {
        throw new Error('No home directory found.');
    }
    const globalPath = path.join(home, globalFileName);
    fs_1.writeFileSync(globalPath, JSON.stringify({ version: 1 }));
    return globalPath;
}
exports.createGlobalSettings = createGlobalSettings;
function getWorkspaceRaw(level = 'local') {
    let configPath = level === 'local' ? projectFilePath() : globalFilePath();
    if (!configPath) {
        if (level === 'global') {
            configPath = createGlobalSettings();
        }
        else {
            return [null, null];
        }
    }
    let content = '';
    new node_1.NodeJsSyncHost().read(core_1.normalize(configPath))
        .subscribe(data => content = core_1.virtualFs.fileBufferToString(data));
    const ast = core_1.parseJsonAst(content, core_1.JsonParseMode.Loose);
    if (ast.kind != 'object') {
        throw new Error(`Invalid JSON file: ${configPath}`);
    }
    return [ast, configPath];
}
exports.getWorkspaceRaw = getWorkspaceRaw;
async function validateWorkspace(json) {
    const workspace = new core_1.experimental.workspace.Workspace(core_1.normalize('.'), new node_1.NodeJsSyncHost());
    await workspace.loadWorkspaceFromJson(json).toPromise();
    return true;
}
exports.validateWorkspace = validateWorkspace;
function getProjectByCwd(workspace) {
    try {
        return workspace.getProjectByPath(core_1.normalize(process.cwd()));
    }
    catch (e) {
        if (e instanceof core_1.experimental.workspace.AmbiguousProjectPathException) {
            return workspace.getDefaultProjectName();
        }
        throw e;
    }
}
exports.getProjectByCwd = getProjectByCwd;
async function getConfiguredPackageManager() {
    let workspace = await getWorkspace('local');
    if (workspace) {
        const project = getProjectByCwd(workspace);
        if (project && workspace.getProjectCli(project)) {
            const value = workspace.getProjectCli(project)['packageManager'];
            if (typeof value == 'string') {
                return value;
            }
        }
        if (workspace.getCli()) {
            const value = workspace.getCli()['packageManager'];
            if (typeof value == 'string') {
                return value;
            }
        }
    }
    workspace = await getWorkspace('global');
    if (workspace && workspace.getCli()) {
        const value = workspace.getCli()['packageManager'];
        if (typeof value == 'string') {
            return value;
        }
    }
    // Only check legacy if updated workspace is not found.
    if (!workspace) {
        const legacyPackageManager = getLegacyPackageManager();
        if (legacyPackageManager !== null) {
            return legacyPackageManager;
        }
    }
    return null;
}
exports.getConfiguredPackageManager = getConfiguredPackageManager;
function migrateLegacyGlobalConfig() {
    const homeDir = os.homedir();
    if (homeDir) {
        const legacyGlobalConfigPath = path.join(homeDir, '.angular-cli.json');
        if (fs_1.existsSync(legacyGlobalConfigPath)) {
            const content = fs_1.readFileSync(legacyGlobalConfigPath, 'utf-8');
            const legacy = core_1.parseJson(content, core_1.JsonParseMode.Loose);
            if (!core_1.isJsonObject(legacy)) {
                return false;
            }
            const cli = {};
            if (legacy.packageManager && typeof legacy.packageManager == 'string'
                && legacy.packageManager !== 'default') {
                cli['packageManager'] = legacy.packageManager;
            }
            if (core_1.isJsonObject(legacy.defaults)
                && core_1.isJsonObject(legacy.defaults.schematics)
                && typeof legacy.defaults.schematics.collection == 'string') {
                cli['defaultCollection'] = legacy.defaults.schematics.collection;
            }
            if (core_1.isJsonObject(legacy.warnings)) {
                const warnings = {};
                if (typeof legacy.warnings.versionMismatch == 'boolean') {
                    warnings['versionMismatch'] = legacy.warnings.versionMismatch;
                }
                if (Object.getOwnPropertyNames(warnings).length > 0) {
                    cli['warnings'] = warnings;
                }
            }
            if (Object.getOwnPropertyNames(cli).length > 0) {
                const globalPath = path.join(homeDir, globalFileName);
                fs_1.writeFileSync(globalPath, JSON.stringify({ version: 1, cli }, null, 2));
                return true;
            }
        }
    }
    return false;
}
exports.migrateLegacyGlobalConfig = migrateLegacyGlobalConfig;
// Fallback, check for packageManager in config file in v1.* global config.
function getLegacyPackageManager() {
    const homeDir = os.homedir();
    if (homeDir) {
        const legacyGlobalConfigPath = path.join(homeDir, '.angular-cli.json');
        if (fs_1.existsSync(legacyGlobalConfigPath)) {
            const content = fs_1.readFileSync(legacyGlobalConfigPath, 'utf-8');
            const legacy = core_1.parseJson(content, core_1.JsonParseMode.Loose);
            if (!core_1.isJsonObject(legacy)) {
                return null;
            }
            if (legacy.packageManager && typeof legacy.packageManager === 'string'
                && legacy.packageManager !== 'default') {
                return legacy.packageManager;
            }
        }
    }
    return null;
}
async function getSchematicDefaults(collection, schematic, project) {
    let result = {};
    const fullName = `${collection}:${schematic}`;
    let workspace = await getWorkspace('global');
    if (workspace && workspace.getSchematics()) {
        const schematicObject = workspace.getSchematics()[fullName];
        if (schematicObject) {
            result = { ...result, ...schematicObject };
        }
        const collectionObject = workspace.getSchematics()[collection];
        if (core_1.isJsonObject(collectionObject)) {
            result = { ...result, ...collectionObject[schematic] };
        }
    }
    workspace = await getWorkspace('local');
    if (workspace) {
        if (workspace.getSchematics()) {
            const schematicObject = workspace.getSchematics()[fullName];
            if (schematicObject) {
                result = { ...result, ...schematicObject };
            }
            const collectionObject = workspace.getSchematics()[collection];
            if (core_1.isJsonObject(collectionObject)) {
                result = { ...result, ...collectionObject[schematic] };
            }
        }
        project = project || getProjectByCwd(workspace);
        if (project && workspace.getProjectSchematics(project)) {
            const schematicObject = workspace.getProjectSchematics(project)[fullName];
            if (schematicObject) {
                result = { ...result, ...schematicObject };
            }
            const collectionObject = workspace.getProjectSchematics(project)[collection];
            if (core_1.isJsonObject(collectionObject)) {
                result = { ...result, ...collectionObject[schematic] };
            }
        }
    }
    return result;
}
exports.getSchematicDefaults = getSchematicDefaults;
async function isWarningEnabled(warning) {
    let workspace = await getWorkspace('local');
    if (workspace) {
        const project = getProjectByCwd(workspace);
        if (project && workspace.getProjectCli(project)) {
            const warnings = workspace.getProjectCli(project)['warnings'];
            if (core_1.isJsonObject(warnings)) {
                const value = warnings[warning];
                if (typeof value == 'boolean') {
                    return value;
                }
            }
        }
        if (workspace.getCli()) {
            const warnings = workspace.getCli()['warnings'];
            if (core_1.isJsonObject(warnings)) {
                const value = warnings[warning];
                if (typeof value == 'boolean') {
                    return value;
                }
            }
        }
    }
    workspace = await getWorkspace('global');
    if (workspace && workspace.getCli()) {
        const warnings = workspace.getCli()['warnings'];
        if (core_1.isJsonObject(warnings)) {
            const value = warnings[warning];
            if (typeof value == 'boolean') {
                return value;
            }
        }
    }
    return true;
}
exports.isWarningEnabled = isWarningEnabled;

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
const fs_1 = require("fs");
const uuid_1 = require("uuid");
const command_1 = require("../models/command");
const interface_1 = require("../models/interface");
const config_1 = require("../utilities/config");
function _validateBoolean(value) {
    if (('' + value).trim() === 'true') {
        return true;
    }
    else if (('' + value).trim() === 'false') {
        return false;
    }
    else {
        throw new Error(`Invalid value type; expected Boolean, received ${JSON.stringify(value)}.`);
    }
}
function _validateNumber(value) {
    const numberValue = Number(value);
    if (!Number.isFinite(numberValue)) {
        return numberValue;
    }
    throw new Error(`Invalid value type; expected Number, received ${JSON.stringify(value)}.`);
}
function _validateString(value) {
    return value;
}
function _validateAnalytics(value) {
    if (value === '') {
        // Disable analytics.
        return null;
    }
    else {
        return value;
    }
}
function _validateAnalyticsSharingUuid(value) {
    if (value == '') {
        return uuid_1.v4();
    }
    else {
        return value;
    }
}
function _validateAnalyticsSharingTracking(value) {
    if (!value.match(/^GA-\d+-\d+$/)) {
        throw new Error(`Invalid GA property ID: ${JSON.stringify(value)}.`);
    }
    return value;
}
const validCliPaths = new Map([
    ['cli.warnings.versionMismatch', _validateBoolean],
    ['cli.defaultCollection', _validateString],
    ['cli.packageManager', _validateString],
    ['cli.analytics', _validateAnalytics],
    ['cli.analyticsSharing.tracking', _validateAnalyticsSharingTracking],
    ['cli.analyticsSharing.uuid', _validateAnalyticsSharingUuid],
]);
/**
 * Splits a JSON path string into fragments. Fragments can be used to get the value referenced
 * by the path. For example, a path of "a[3].foo.bar[2]" would give you a fragment array of
 * ["a", 3, "foo", "bar", 2].
 * @param path The JSON string to parse.
 * @returns {(string|number)[]} The fragments for the string.
 * @private
 */
function parseJsonPath(path) {
    const fragments = (path || '').split(/\./g);
    const result = [];
    while (fragments.length > 0) {
        const fragment = fragments.shift();
        if (fragment == undefined) {
            break;
        }
        const match = fragment.match(/([^\[]+)((\[.*\])*)/);
        if (!match) {
            throw new Error('Invalid JSON path.');
        }
        result.push(match[1]);
        if (match[2]) {
            const indices = match[2]
                .slice(1, -1)
                .split('][')
                .map(x => (/^\d$/.test(x) ? +x : x.replace(/\"|\'/g, '')));
            result.push(...indices);
        }
    }
    return result.filter(fragment => fragment != null);
}
function getValueFromPath(root, path) {
    const fragments = parseJsonPath(path);
    try {
        return fragments.reduce((value, current) => {
            if (value == undefined || typeof value != 'object') {
                return undefined;
            }
            else if (typeof current == 'string' && !Array.isArray(value)) {
                return value[current];
            }
            else if (typeof current == 'number' && Array.isArray(value)) {
                return value[current];
            }
            else {
                return undefined;
            }
        }, root);
    }
    catch (_a) {
        return undefined;
    }
}
function setValueFromPath(root, path, newValue) {
    const fragments = parseJsonPath(path);
    try {
        return fragments.reduce((value, current, index) => {
            if (value == undefined || typeof value != 'object') {
                return undefined;
            }
            else if (typeof current == 'string' && !Array.isArray(value)) {
                if (index === fragments.length - 1) {
                    value[current] = newValue;
                }
                else if (value[current] == undefined) {
                    if (typeof fragments[index + 1] == 'number') {
                        value[current] = [];
                    }
                    else if (typeof fragments[index + 1] == 'string') {
                        value[current] = {};
                    }
                }
                return value[current];
            }
            else if (typeof current == 'number' && Array.isArray(value)) {
                if (index === fragments.length - 1) {
                    value[current] = newValue;
                }
                else if (value[current] == undefined) {
                    if (typeof fragments[index + 1] == 'number') {
                        value[current] = [];
                    }
                    else if (typeof fragments[index + 1] == 'string') {
                        value[current] = {};
                    }
                }
                return value[current];
            }
            else {
                return undefined;
            }
        }, root);
    }
    catch (_a) {
        return undefined;
    }
}
function normalizeValue(value, path) {
    const cliOptionType = validCliPaths.get(path);
    if (cliOptionType) {
        return cliOptionType('' + value);
    }
    if (typeof value === 'string') {
        try {
            return core_1.parseJson(value, core_1.JsonParseMode.Loose);
        }
        catch (e) {
            if (e instanceof core_1.InvalidJsonCharacterException && !value.startsWith('{')) {
                return value;
            }
            else {
                throw e;
            }
        }
    }
    return value;
}
class ConfigCommand extends command_1.Command {
    async run(options) {
        const level = options.global ? 'global' : 'local';
        if (!options.global) {
            await this.validateScope(interface_1.CommandScope.InProject);
        }
        let config = await config_1.getWorkspace(level);
        if (options.global && !config) {
            try {
                if (config_1.migrateLegacyGlobalConfig()) {
                    config = await config_1.getWorkspace(level);
                    this.logger.info(core_1.tags.oneLine `
            We found a global configuration that was used in Angular CLI 1.
            It has been automatically migrated.`);
                }
            }
            catch (_a) { }
        }
        if (options.value == undefined) {
            if (!config) {
                this.logger.error('No config found.');
                return 1;
            }
            const workspace = config
                ._workspace;
            return this.get(workspace, options);
        }
        else {
            return this.set(options);
        }
    }
    get(config, options) {
        let value;
        if (options.jsonPath) {
            if (options.jsonPath === 'cli.warnings.typescriptMismatch') {
                // NOTE: Remove this in 9.0.
                this.logger.warn('The "typescriptMismatch" warning has been removed in 8.0.');
                // Since there is no actual warning, this value is always false.
                this.logger.info('false');
                return 0;
            }
            value = getValueFromPath(config, options.jsonPath);
        }
        else {
            value = config;
        }
        if (value === undefined) {
            this.logger.error('Value cannot be found.');
            return 1;
        }
        else if (typeof value == 'object') {
            this.logger.info(JSON.stringify(value, null, 2));
        }
        else {
            this.logger.info(value.toString());
        }
        return 0;
    }
    async set(options) {
        if (!options.jsonPath || !options.jsonPath.trim()) {
            throw new Error('Invalid Path.');
        }
        if (options.jsonPath === 'cli.warnings.typescriptMismatch') {
            // NOTE: Remove this in 9.0.
            this.logger.warn('The "typescriptMismatch" warning has been removed in 8.0.');
            return 0;
        }
        if (options.global &&
            !options.jsonPath.startsWith('schematics.') &&
            !validCliPaths.has(options.jsonPath)) {
            throw new Error('Invalid Path.');
        }
        const [config, configPath] = config_1.getWorkspaceRaw(options.global ? 'global' : 'local');
        if (!config || !configPath) {
            this.logger.error('Confguration file cannot be found.');
            return 1;
        }
        // TODO: Modify & save without destroying comments
        const configValue = config.value;
        const value = normalizeValue(options.value || '', options.jsonPath);
        const result = setValueFromPath(configValue, options.jsonPath, value);
        if (result === undefined) {
            this.logger.error('Value cannot be found.');
            return 1;
        }
        try {
            await config_1.validateWorkspace(configValue);
        }
        catch (error) {
            this.logger.fatal(error.message);
            return 1;
        }
        const output = JSON.stringify(configValue, null, 2);
        fs_1.writeFileSync(configPath, output);
        return 0;
    }
}
exports.ConfigCommand = ConfigCommand;

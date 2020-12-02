/*
  @license
	Rollup.js v2.1.0
	Wed, 18 Mar 2020 05:17:01 GMT - commit f8bc01847155ccf69f9e772ee99fc0905848548f


	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

var rollup_js = require('./rollup.js');
var path = require('path');
var events = require('events');
var util = require('util');

const commandAliases = {
    c: 'config',
    d: 'dir',
    e: 'external',
    f: 'format',
    g: 'globals',
    h: 'help',
    i: 'input',
    m: 'sourcemap',
    n: 'name',
    o: 'file',
    p: 'plugin',
    v: 'version',
    w: 'watch'
};
function mergeOptions(config, rawCommandOptions = { external: [], globals: undefined }, defaultOnWarnHandler) {
    const command = getCommandOptions(rawCommandOptions);
    const inputOptions = rollup_js.parseInputOptions(config, command, defaultOnWarnHandler);
    const warn = inputOptions.onwarn;
    if (command.output) {
        Object.assign(command, command.output);
    }
    const outputOptionsArray = rollup_js.ensureArray(config.output);
    if (outputOptionsArray.length === 0)
        outputOptionsArray.push({});
    const outputOptions = outputOptionsArray.map(singleOutputOptions => rollup_js.parseOutputOptions(singleOutputOptions, warn, command));
    rollup_js.warnUnknownOptions(command, Object.keys(inputOptions).concat(Object.keys(outputOptions[0]).filter(option => option !== 'sourcemapPathTransform'), Object.keys(commandAliases), 'config', 'environment', 'plugin', 'silent', 'stdin'), 'CLI flags', warn, /^_$|output$|config/);
    return {
        inputOptions,
        outputOptions
    };
}
function getCommandOptions(rawCommandOptions) {
    const external = rawCommandOptions.external && typeof rawCommandOptions.external === 'string'
        ? rawCommandOptions.external.split(',')
        : [];
    return {
        ...rawCommandOptions,
        external,
        globals: typeof rawCommandOptions.globals === 'string'
            ? rawCommandOptions.globals.split(',').reduce((globals, globalDefinition) => {
                const [id, variableName] = globalDefinition.split(':');
                globals[id] = variableName;
                if (external.indexOf(id) === -1) {
                    external.push(id);
                }
                return globals;
            }, Object.create(null))
            : undefined
    };
}

exports.commandAliases = commandAliases;
exports.mergeOptions = mergeOptions;
exports.require$$0 = events;
exports.require$$1 = util;
exports.sysPath = path;
//# sourceMappingURL=_events_commonjs-external.js.map

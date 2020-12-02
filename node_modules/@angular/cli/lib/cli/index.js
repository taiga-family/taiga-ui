"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const node_1 = require("@angular-devkit/core/node");
const util_1 = require("util");
const command_runner_1 = require("../../models/command-runner");
const color_1 = require("../../utilities/color");
const config_1 = require("../../utilities/config");
const log_file_1 = require("../../utilities/log-file");
const project_1 = require("../../utilities/project");
const debugEnv = process.env['NG_DEBUG'];
const isDebug = debugEnv !== undefined &&
    debugEnv !== '0' &&
    debugEnv.toLowerCase() !== 'false';
// tslint:disable: no-console
async function default_1(options) {
    // This node version check ensures that the requirements of the project instance of the CLI are met
    const version = process.versions.node.split('.').map(part => Number(part));
    if (version[0] < 10 || version[0] === 11 || (version[0] === 10 && version[1] < 13)) {
        process.stderr.write(`Node.js version ${process.version} detected.\n` +
            'The Angular CLI requires a minimum Node.js version of either v10.13 or v12.0.\n\n' +
            'Please update your Node.js version or visit https://nodejs.org/ for additional instructions.\n');
        return 3;
    }
    const logger = node_1.createConsoleLogger(isDebug, process.stdout, process.stderr, {
        info: s => (color_1.supportsColor ? s : color_1.removeColor(s)),
        debug: s => (color_1.supportsColor ? s : color_1.removeColor(s)),
        warn: s => (color_1.supportsColor ? color_1.colors.bold.yellow(s) : color_1.removeColor(s)),
        error: s => (color_1.supportsColor ? color_1.colors.bold.red(s) : color_1.removeColor(s)),
        fatal: s => (color_1.supportsColor ? color_1.colors.bold.red(s) : color_1.removeColor(s)),
    });
    // Redirect console to logger
    console.log = function () {
        logger.info(util_1.format.apply(null, arguments));
    };
    console.info = function () {
        logger.info(util_1.format.apply(null, arguments));
    };
    console.warn = function () {
        logger.warn(util_1.format.apply(null, arguments));
    };
    console.error = function () {
        logger.error(util_1.format.apply(null, arguments));
    };
    let projectDetails = project_1.getWorkspaceDetails();
    if (projectDetails === null) {
        const [, localPath] = config_1.getWorkspaceRaw('local');
        if (localPath !== null) {
            logger.fatal(`An invalid configuration file was found ['${localPath}'].` +
                ' Please delete the file before running the command.');
            return 1;
        }
        projectDetails = { root: process.cwd() };
    }
    try {
        const maybeExitCode = await command_runner_1.runCommand(options.cliArgs, logger, projectDetails);
        if (typeof maybeExitCode === 'number') {
            console.assert(Number.isInteger(maybeExitCode));
            return maybeExitCode;
        }
        return 0;
    }
    catch (err) {
        if (err instanceof Error) {
            try {
                const logPath = log_file_1.writeErrorToLogFile(err);
                logger.fatal(`An unhandled exception occurred: ${err.message}\n` +
                    `See "${logPath}" for further details.`);
            }
            catch (e) {
                logger.fatal(`An unhandled exception occurred: ${err.message}\n` +
                    `Fatal error writing debug log file: ${e.message}`);
                if (err.stack) {
                    logger.fatal(err.stack);
                }
            }
            return 127;
        }
        else if (typeof err === 'string') {
            logger.fatal(err);
        }
        else if (typeof err === 'number') {
            // Log nothing.
        }
        else {
            logger.fatal('An unexpected error occurred: ' + JSON.stringify(err));
        }
        if (options.testing) {
            // tslint:disable-next-line: no-debugger
            debugger;
            throw err;
        }
        return 1;
    }
}
exports.default = default_1;

"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-global-tslint-disable no-any
const core_1 = require("@angular-devkit/core");
const path = require("path");
const color_1 = require("../utilities/color");
const config_1 = require("../utilities/config");
const interface_1 = require("./interface");
class Command {
    constructor(context, description, logger) {
        this.description = description;
        this.logger = logger;
        this.allowMissingWorkspace = false;
        this.workspace = context.workspace;
        this.analytics = context.analytics || new core_1.analytics.NoopAnalytics();
    }
    static setCommandMap(map) {
        this.commandMap = map;
    }
    async initialize(options) {
        return;
    }
    async printHelp(options) {
        await this.printHelpUsage();
        await this.printHelpOptions();
        return 0;
    }
    async printJsonHelp(_options) {
        this.logger.info(JSON.stringify(this.description));
        return 0;
    }
    async printHelpUsage() {
        this.logger.info(this.description.description);
        const name = this.description.name;
        const args = this.description.options.filter(x => x.positional !== undefined);
        const opts = this.description.options.filter(x => x.positional === undefined);
        const argDisplay = args && args.length > 0 ? ' ' + args.map(a => `<${a.name}>`).join(' ') : '';
        const optionsDisplay = opts && opts.length > 0 ? ` [options]` : ``;
        this.logger.info(`usage: ng ${name}${argDisplay}${optionsDisplay}`);
        this.logger.info('');
    }
    async printHelpSubcommand(subcommand) {
        this.logger.info(subcommand.description);
        await this.printHelpOptions(subcommand.options);
    }
    async printHelpOptions(options = this.description.options) {
        const args = options.filter(opt => opt.positional !== undefined);
        const opts = options.filter(opt => opt.positional === undefined);
        const formatDescription = (description) => `    ${description.replace(/\n/g, '\n    ')}`;
        if (args.length > 0) {
            this.logger.info(`arguments:`);
            args.forEach(o => {
                this.logger.info(`  ${color_1.colors.cyan(o.name)}`);
                if (o.description) {
                    this.logger.info(formatDescription(o.description));
                }
            });
        }
        if (options.length > 0) {
            if (args.length > 0) {
                this.logger.info('');
            }
            this.logger.info(`options:`);
            opts
                .filter(o => !o.hidden)
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(o => {
                const aliases = o.aliases && o.aliases.length > 0
                    ? '(' + o.aliases.map(a => `-${a}`).join(' ') + ')'
                    : '';
                this.logger.info(`  ${color_1.colors.cyan('--' + core_1.strings.dasherize(o.name))} ${aliases}`);
                if (o.description) {
                    this.logger.info(formatDescription(o.description));
                }
            });
        }
    }
    async validateScope(scope) {
        switch (scope === undefined ? this.description.scope : scope) {
            case interface_1.CommandScope.OutProject:
                if (this.workspace.configFile) {
                    this.logger.fatal(core_1.tags.oneLine `
            The ${this.description.name} command requires to be run outside of a project, but a
            project definition was found at "${path.join(this.workspace.root, this.workspace.configFile)}".
          `);
                    throw 1;
                }
                break;
            case interface_1.CommandScope.InProject:
                if (!this.workspace.configFile || (await config_1.getWorkspace('local')) === null) {
                    this.logger.fatal(core_1.tags.oneLine `
            The ${this.description.name} command requires to be run in an Angular project, but a
            project definition could not be found.
          `);
                    throw 1;
                }
                break;
            case interface_1.CommandScope.Everywhere:
                // Can't miss this.
                break;
        }
    }
    async reportAnalytics(paths, options, dimensions = [], metrics = []) {
        for (const option of this.description.options) {
            const ua = option.userAnalytics;
            const v = options[option.name];
            if (v !== undefined && !Array.isArray(v) && ua) {
                dimensions[ua] = v;
            }
        }
        this.analytics.pageview('/command/' + paths.join('/'), { dimensions, metrics });
    }
    async validateAndRun(options) {
        if (!(options.help === true || options.help === 'json' || options.help === 'JSON')) {
            await this.validateScope();
        }
        await this.initialize(options);
        if (options.help === true) {
            return this.printHelp(options);
        }
        else if (options.help === 'json' || options.help === 'JSON') {
            return this.printJsonHelp(options);
        }
        else {
            const startTime = +new Date();
            await this.reportAnalytics([this.description.name], options);
            const result = await this.run(options);
            const endTime = +new Date();
            this.analytics.timing(this.description.name, 'duration', endTime - startTime);
            return result;
        }
    }
}
exports.Command = Command;

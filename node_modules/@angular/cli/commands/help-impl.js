"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const command_1 = require("../models/command");
const color_1 = require("../utilities/color");
class HelpCommand extends command_1.Command {
    async run() {
        this.logger.info(`Available Commands:`);
        for (const cmd of Object.values(await command_1.Command.commandMap())) {
            if (cmd.hidden) {
                continue;
            }
            const aliasInfo = cmd.aliases.length > 0 ? ` (${cmd.aliases.join(', ')})` : '';
            this.logger.info(`  ${color_1.colors.cyan(cmd.name)}${aliasInfo} ${cmd.description}`);
        }
        this.logger.info(`\nFor more detailed help run "ng [command name] --help"`);
    }
}
exports.HelpCommand = HelpCommand;

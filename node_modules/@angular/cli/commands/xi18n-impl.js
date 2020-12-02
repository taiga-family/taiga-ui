"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const architect_command_1 = require("../models/architect-command");
class Xi18nCommand extends architect_command_1.ArchitectCommand {
    constructor() {
        super(...arguments);
        this.target = 'extract-i18n';
    }
    async run(options) {
        const version = process.version.substr(1).split('.');
        if (Number(version[0]) === 12 && Number(version[1]) === 0) {
            this.logger.error('Due to a defect in Node.js 12.0, the command is not supported on this Node.js version. '
                + 'Please upgrade to Node.js 12.1 or later.');
            return 1;
        }
        return this.runArchitectTarget(options);
    }
}
exports.Xi18nCommand = Xi18nCommand;

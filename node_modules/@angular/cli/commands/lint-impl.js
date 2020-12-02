"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const architect_command_1 = require("../models/architect-command");
class LintCommand extends architect_command_1.ArchitectCommand {
    constructor() {
        super(...arguments);
        this.target = 'lint';
        this.multiTarget = true;
    }
    async run(options) {
        return this.runArchitectTarget(options);
    }
}
exports.LintCommand = LintCommand;

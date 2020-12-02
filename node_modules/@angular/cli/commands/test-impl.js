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
class TestCommand extends architect_command_1.ArchitectCommand {
    constructor() {
        super(...arguments);
        this.target = 'test';
        this.multiTarget = true;
    }
    async run(options) {
        return this.runArchitectTarget(options);
    }
}
exports.TestCommand = TestCommand;

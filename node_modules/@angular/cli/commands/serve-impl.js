"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const architect_command_1 = require("../models/architect-command");
class ServeCommand extends architect_command_1.ArchitectCommand {
    constructor() {
        super(...arguments);
        this.target = 'serve';
    }
    validate(_options) {
        return true;
    }
    async run(options) {
        return this.runArchitectTarget(options);
    }
    async reportAnalytics(paths, options, dimensions = [], metrics = []) {
        if (options.buildEventLog !== undefined) {
            dimensions[core_1.analytics.NgCliAnalyticsDimensions.NgBuildBuildEventLog] = true;
        }
        return super.reportAnalytics(paths, options, dimensions, metrics);
    }
}
exports.ServeCommand = ServeCommand;

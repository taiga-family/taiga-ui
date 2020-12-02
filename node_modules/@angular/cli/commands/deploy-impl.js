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
const BuilderMissing = `

Cannot find "deploy" target for the specified project.

You should add a package that implements deployment capabilities for your
favorite platform.

For example:
  ng add @angular/fire
  ng add @azure/ng-deploy
  ng add @zeit/ng-deploy

Find more packages on npm https://www.npmjs.com/search?q=ng%20deploy
`;
class DeployCommand extends architect_command_1.ArchitectCommand {
    constructor() {
        super(...arguments);
        this.target = 'deploy';
        this.missingTargetError = BuilderMissing;
    }
    async run(options) {
        return this.runArchitectTarget(options);
    }
    async initialize(options) {
        if (!options.help) {
            return super.initialize(options);
        }
    }
    async reportAnalytics(paths, options, dimensions = [], metrics = []) {
        return super.reportAnalytics(paths, options, dimensions, metrics);
    }
}
exports.DeployCommand = DeployCommand;

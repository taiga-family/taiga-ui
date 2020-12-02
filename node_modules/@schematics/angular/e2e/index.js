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
const schematics_1 = require("@angular-devkit/schematics");
const paths_1 = require("../utility/paths");
const workspace_1 = require("../utility/workspace");
const workspace_models_1 = require("../utility/workspace-models");
function default_1(options) {
    return async (host) => {
        const appProject = options.relatedAppName;
        const workspace = await workspace_1.getWorkspace(host);
        const project = workspace.projects.get(appProject);
        if (!project) {
            throw new schematics_1.SchematicsException(`Project name "${appProject}" doesn't not exist.`);
        }
        const root = core_1.join(core_1.normalize(project.root), 'e2e');
        project.targets.add({
            name: 'e2e',
            builder: workspace_models_1.Builders.Protractor,
            options: {
                protractorConfig: `${root}/protractor.conf.js`,
                devServerTarget: `${options.relatedAppName}:serve`,
            },
            configurations: {
                production: {
                    devServerTarget: `${options.relatedAppName}:serve:production`,
                },
            },
        });
        const lintTarget = project.targets.get('lint');
        if (lintTarget && lintTarget.options && Array.isArray(lintTarget.options.tsConfig)) {
            lintTarget.options.tsConfig =
                lintTarget.options.tsConfig.concat(`${root}/tsconfig.json`);
        }
        return schematics_1.chain([
            workspace_1.updateWorkspace(workspace),
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files'), [
                schematics_1.applyTemplates({
                    utils: core_1.strings,
                    ...options,
                    relativePathToWorkspaceRoot: paths_1.relativePathToWorkspaceRoot(root),
                }),
                schematics_1.move(root),
            ])),
        ]);
    };
}
exports.default = default_1;

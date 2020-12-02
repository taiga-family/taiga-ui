"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
function applyLintFix(path = '/') {
    return (tree, context) => {
        // Find the closest tslint.json or tslint.yaml
        let dir = tree.getDir(path.substr(0, path.lastIndexOf('/')));
        do {
            if (dir.subfiles.some(f => f === 'tslint.json' || f === 'tslint.yaml')) {
                break;
            }
            dir = dir.parent;
        } while (dir !== null);
        if (dir === null) {
            throw new schematics_1.SchematicsException('Asked to run lint fixes, but could not find a tslint.json or tslint.yaml config file.');
        }
        // Only include files that have been touched.
        const files = tree.actions.reduce((acc, action) => {
            const path = action.path.substr(1); // Remove the starting '/'.
            if (path.endsWith('.ts') && dir && action.path.startsWith(dir.path)) {
                acc.add(path);
            }
            return acc;
        }, new Set());
        context.addTask(new tasks_1.TslintFixTask({
            ignoreErrors: true,
            tsConfigPath: 'tsconfig.json',
            files: [...files],
        }));
    };
}
exports.applyLintFix = applyLintFix;

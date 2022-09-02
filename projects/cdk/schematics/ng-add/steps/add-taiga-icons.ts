import type {JsonArray} from '@angular-devkit/core';
import type {Rule, Tree} from '@angular-devkit/schematics';
import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {getProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import type {Schema} from '../schema';

const ICON_ASSETS = {
    glob: '**/*',
    input: 'node_modules/@taiga-ui/icons/src',
    output: 'assets/taiga-ui/icons',
};

export function addTaigaIcons(options: Schema): Rule {
    return async (_: Tree) => {
        return addTaigaAssetsToAngularJson(options);
    };
}

export function addTaigaAssetsToAngularJson(options: Schema): Rule {
    return updateWorkspace(workspace => {
        const project = getProject(options, workspace);

        if (project) {
            const targetOptions = getProjectTargetOptions(project, 'build');
            const assets = targetOptions.assets as JsonArray | undefined;

            targetOptions.assets = assets ? [...assets, ICON_ASSETS] : [ICON_ASSETS];
        }
    });
}

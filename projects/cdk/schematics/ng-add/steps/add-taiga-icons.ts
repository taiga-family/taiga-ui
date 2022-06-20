import {JsonArray} from '@angular-devkit/core';
import {Rule, Tree} from '@angular-devkit/schematics';
import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {getProject} from '../../utils/get-project';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {Schema} from '../schema';

const ICON_ASSETS = {
    glob: '**/*',
    input: 'node_modules/@taiga-ui/icons/src',
    output: 'assets/taiga-ui/icons',
};

export function addTaigaIcons(options: Schema): Rule {
    return async (_: Tree) => {
        return addTaigaStylesToAngularJson(options);
    };
}

export function addTaigaStylesToAngularJson(options: Schema): Rule {
    return updateWorkspace(workspace => {
        const project = getProject(options, workspace);

        const targetOptions = getProjectTargetOptions(project, 'build');
        const assets = targetOptions.assets as JsonArray | undefined;

        if (!assets) {
            targetOptions.assets = [ICON_ASSETS];
        } else {
            targetOptions.assets = [...assets, ICON_ASSETS];
        }
    });
}

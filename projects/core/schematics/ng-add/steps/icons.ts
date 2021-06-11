import {JsonArray, workspaces} from '@angular-devkit/core';
import {Rule, SchematicsException, Tree} from '@angular-devkit/schematics';
import {getWorkspace, updateWorkspace} from '@schematics/angular/utility/workspace';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {Schema} from '../schema';

const ICON_ASSETS = {
    glob: '**/*',
    input: 'projects/icons/src',
    output: 'assets/taiga-ui/icons',
};

export function addTaigaIcons(options: Schema): Rule {
    return async (tree: Tree) => {
        const workspace = await getWorkspace(tree);
        const projectName =
            options.project || workspace.extensions.defaultProject!.toString();
        const project = workspace.projects.get(projectName);

        if (!project) {
            throw new SchematicsException(
                `Unable to find project '${projectName}' in the workspace`,
            );
        }

        return addTaigaStylesToAngularJson(workspace, project);
    };
}

export function addTaigaStylesToAngularJson(
    workspace: workspaces.WorkspaceDefinition,
    project: workspaces.ProjectDefinition,
): Rule {
    const targetOptions = getProjectTargetOptions(project, 'build');
    const assets = targetOptions.assets as JsonArray | undefined;

    if (!assets) {
        targetOptions.assets = [ICON_ASSETS];
    } else {
        targetOptions.assets = [...assets, ...[ICON_ASSETS]];
    }

    return updateWorkspace(workspace);
}

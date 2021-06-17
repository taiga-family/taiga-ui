import {workspaces} from '@angular-devkit/core';
import {SchematicsException, Tree} from '@angular-devkit/schematics';
import {getWorkspace} from '@schematics/angular/utility/workspace';
import {Schema} from '../ng-add/schema';

export async function getWorkspaceAndProject(
    options: Schema,
    tree: Tree,
): Promise<{
    project: workspaces.ProjectDefinition;
    workspace: workspaces.WorkspaceDefinition;
}> {
    const workspace = await getWorkspace(tree);
    const projectName =
        options.project || workspace.extensions.defaultProject!.toString();
    const project = workspace.projects.get(projectName);

    if (!project) {
        throw new SchematicsException(
            `Unable to find project '${projectName}' in the workspace`,
        );
    }

    return {project, workspace};
}

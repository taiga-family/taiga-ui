import {workspaces} from '@angular-devkit/core';
import {Schema} from '../ng-add/schema';

export function getProject(
    options: Schema,
    workspace: workspaces.WorkspaceDefinition,
): workspaces.ProjectDefinition | undefined {
    const projectName =
        options.project || workspace.extensions.defaultProject?.toString() || '';
    const project = workspace.projects.get(projectName);

    return project;
}

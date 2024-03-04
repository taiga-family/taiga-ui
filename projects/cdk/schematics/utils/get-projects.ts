import {type workspaces} from '@angular-devkit/core';

import {type TuiSchema} from '../ng-add/schema';

export function getProjects(
    options: TuiSchema,
    workspace: workspaces.WorkspaceDefinition,
): workspaces.ProjectDefinition[] {
    const projects = Array.from(workspace.projects.entries())
        .filter(([_, project]) => project.targets.get('build'))
        .map(([_, project]) => project);

    const nameFromContext =
        options.project || workspace.extensions.defaultProject?.toString() || '';
    const projectFromContext = workspace.projects.get(nameFromContext);

    return projectFromContext ? [projectFromContext] : projects;
}

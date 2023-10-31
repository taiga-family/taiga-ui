import {workspaces} from '@angular-devkit/core';

import {TuiSchema} from '../ng-add/schema';

export function getProjects(
    options: TuiSchema,
    workspace: workspaces.WorkspaceDefinition,
): workspaces.ProjectDefinition[] {
    const projects = Array.from(workspace.projects.entries())
        .filter(([_, project]) => project.targets.get(`build`))
        .map(([_, project]) => project);

    const nameFromContext =
        // eslint-disable-next-line @typescript-eslint/no-base-to-string
        options.project || workspace.extensions.defaultProject?.toString() || ``;
    const projectFromContext = workspace.projects.get(nameFromContext);

    return projectFromContext ? [projectFromContext] : projects;
}

import {Schema} from '../ng-add/schema';
import {ProjectDefinition, WorkspaceDefinition} from '@angular-devkit/core/src/workspace';

export function getProjects(
    options: Schema,
    workspace: WorkspaceDefinition,
): Array<ProjectDefinition> {
    const projectNames = Array.from(workspace.projects.entries())
        .filter(([_, project]) => project.targets.get('build'))
        .map(([name]) => name);

    const nameFromContext =
        options.project || workspace.extensions.defaultProject?.toString() || '';

    const names = nameFromContext ? [nameFromContext] : projectNames;

    return names.map(name => workspace.projects.get(name)).filter(isProject);
}

function isProject(value?: ProjectDefinition | undefined): value is ProjectDefinition {
    return value !== undefined;
}

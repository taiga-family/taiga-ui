import {TuiSchema} from '../ng-add/schema';
import {ProjectDefinition, WorkspaceDefinition} from '@angular-devkit/core/src/workspace';

export function getProjects(
    options: TuiSchema,
    workspace: WorkspaceDefinition,
): Array<ProjectDefinition> {
    const projects = Array.from(workspace.projects.entries())
        .filter(([_, project]) => project.targets.get('build'))
        .map(([_, project]) => project);

    const nameFromContext =
        options.project || workspace.extensions.defaultProject?.toString() || '';
    const projectFromContext = workspace.projects.get(nameFromContext);

    return projectFromContext ? [projectFromContext] : projects;
}

import {Schema} from '../ng-add/schema';
import {ProjectDefinition, WorkspaceDefinition} from '@angular-devkit/core/src/workspace';

export function getProject(
    options: Schema,
    workspace: WorkspaceDefinition,
): ProjectDefinition | undefined {
    const projectName =
        options.project || workspace.extensions.defaultProject?.toString() || '';
    return workspace.projects.get(projectName);
}

import type {Schema} from '../ng-add/schema';
import type {
    ProjectDefinition,
    WorkspaceDefinition,
} from '@angular-devkit/core/src/workspace';

export function getProject(
    options: Schema,
    workspace: WorkspaceDefinition,
): ProjectDefinition | undefined {
    const firstProjectName = Array.from(workspace.projects.keys())?.[0];

    const projectName =
        options.project ||
        workspace.extensions.defaultProject?.toString() ||
        firstProjectName ||
        '';
    return workspace.projects.get(projectName);
}

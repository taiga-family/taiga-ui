import {Schema} from '../ng-add/schema';
import {ProjectDefinition, WorkspaceDefinition} from '@angular-devkit/core/src/workspace';

export function getProject(
    options: Schema,
    workspace: WorkspaceDefinition,
): ProjectDefinition | undefined {
    const firstBuildableProjectName = Array.from(workspace.projects.entries()).find(
        ([_, project]) => project.targets.get('build'),
    )?.[0];

    const projectName =
        options.project ||
        workspace.extensions.defaultProject?.toString() ||
        firstBuildableProjectName ||
        '';
    return workspace.projects.get(projectName);
}

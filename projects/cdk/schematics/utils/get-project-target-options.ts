import {type JsonArray, type JsonObject, type workspaces} from '@angular-devkit/core';
import {SchematicsException} from '@angular-devkit/schematics';

export function getProjectTargetOptions(
    project: workspaces.ProjectDefinition,
    buildTarget: string,
): Record<string, JsonArray | JsonObject | boolean | number | string | null | undefined> {
    const buildTargetObject = project.targets?.get(buildTarget);

    if (buildTargetObject?.options) {
        return buildTargetObject.options;
    }

    throw new SchematicsException(
        `Cannot determine project target configuration for: ${buildTarget}.`,
    );
}

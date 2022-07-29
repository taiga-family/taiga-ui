import {Schema} from '../ng-add/schema';
import {Rule, SchematicContext} from '@angular-devkit/schematics';
import {getProject} from './get-project';
import {getProjectTargetOptions} from './get-project-target-options';
import {JsonArray} from '@angular-devkit/core';
import {updateWorkspace} from '@schematics/angular/utility/workspace';

export function addStylesToAngularJson(
    options: Schema,
    context: SchematicContext,
    taigaStyles: string[],
    filter?: (styles: JsonArray | undefined) => boolean,
): Rule {
    return updateWorkspace(workspace => {
        const project = getProject(options, workspace);

        if (!project) {
            context.logger.warn(
                `[WARNING]: Target project not found. Add styles ${taigaStyles.join(
                    ',',
                )} to angular.json manually.`,
            );
            return;
        }

        const targetOptions = getProjectTargetOptions(project, 'build');
        const styles = targetOptions.styles as JsonArray | undefined;

        if (filter && filter(styles)) {
            return;
        }

        targetOptions.styles = styles
            ? Array.from(new Set([...taigaStyles, ...styles]))
            : taigaStyles;
    });
}

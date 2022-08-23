import {Schema} from '../ng-add/schema';
import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getProject} from './get-project';
import {getProjectTargetOptions} from './get-project-target-options';
import {JsonArray} from '@angular-devkit/core';
import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {addPackageJsonDependency} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';

export function addStylesToAngularJson(
    options: Schema,
    context: SchematicContext,
    taigaStyles: string[],
    filter?: (styles: JsonArray | undefined) => boolean,
    stylesToReplace?: {from: string; to: string[]},
    tree?: Tree,
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

        if (!styles) {
            targetOptions.styles = taigaStyles;
            return;
        }

        if (
            tree &&
            stylesToReplace &&
            styles.find(style => style === stylesToReplace.from)
        ) {
            targetOptions.styles = Array.from(
                new Set([
                    ...taigaStyles,
                    ...stylesToReplace.to,
                    ...styles.filter(style => style !== stylesToReplace.from),
                ]),
            );

            addPackageJsonDependency(tree, {
                name: `@taiga-ui/styles`,
                version: TAIGA_VERSION,
            });

            context.addTask(new NodePackageInstallTask());
        } else {
            targetOptions.styles = Array.from(new Set([...taigaStyles, ...styles]));
        }
    });
}

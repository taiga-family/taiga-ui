import {TuiSchema} from '../ng-add/schema';
import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {getProjects} from './get-projects';
import {getProjectTargetOptions} from './get-project-target-options';
import {JsonArray} from '@angular-devkit/core';
import {getWorkspace, updateWorkspace} from '@schematics/angular/utility/workspace';
import {addPackageJsonDependency} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {Asset} from '../ng-update/interfaces/asset';

export async function isInvalidAngularJson(tree: Tree): Promise<boolean> {
    return (
        getWorkspace(tree)
            .then(() => false)
            /**
             * Possible error – "Invalid format version detected - Expected:[ 1 ] Found: [ 2 ]"
             * @see https://github.com/angular/angular-cli/blob/main/packages/angular_devkit/core/src/workspace/json/reader.ts#L67-L69
             */
            .catch(() => true)
    );
}

export function addStylesToAngularJson(
    options: TuiSchema,
    context: SchematicContext,
    taigaStyles: string[],
    filter?: (styles: JsonArray | undefined) => boolean,
    stylesToReplace?: {from: string; to: string[]},
    tree?: Tree,
): Rule {
    const MANUAL_MIGRATION_TIPS = `Add styles ${taigaStyles.join(
        ',',
    )} to angular.json manually.`;

    return updateWorkspace(workspace => {
        const projects = getProjects(options, workspace);

        if (!projects.length) {
            context.logger.warn(
                `[WARNING]: Target project not found. ${MANUAL_MIGRATION_TIPS}`,
            );
            return;
        }

        for (let project of projects) {
            let targetOptions;

            try {
                targetOptions = getProjectTargetOptions(project, 'build');
            } catch {
                context.logger.warn(
                    `[WARNING]: No buildable project was found. ${MANUAL_MIGRATION_TIPS}`,
                );
                return;
            }

            if (stylesToReplace && !hasTaigaIcons(targetOptions.assets as Asset[])) {
                return;
            }

            const styles = targetOptions.styles as JsonArray | undefined;

            if (filter && filter(styles)) {
                taigaStyles = [];
            }

            if (!styles && taigaStyles.length) {
                targetOptions.styles = taigaStyles;
            }

            if (
                stylesToReplace &&
                styles?.filter(style => style !== stylesToReplace.from)
            ) {
                targetOptions.styles = Array.from(
                    new Set([
                        ...taigaStyles,
                        ...stylesToReplace.to,
                        ...styles.filter(style => style !== stylesToReplace.from),
                    ]),
                );
            } else {
                targetOptions.styles = Array.from(
                    new Set([...taigaStyles, ...(styles || [])]),
                );
            }

            if (tree && stylesToReplace) {
                addPackageJsonDependency(tree, {
                    name: `@taiga-ui/styles`,
                    version: TAIGA_VERSION,
                });

                context.addTask(new NodePackageInstallTask());
            }
        }
    });
}

const hasTaigaIcons = (assets: Asset[]): boolean =>
    !!assets?.find(asset =>
        typeof asset === 'string'
            ? asset.includes('taiga-ui')
            : asset?.input?.includes('taiga-ui'),
    );

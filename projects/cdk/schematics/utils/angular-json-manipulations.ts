import type {JsonArray} from '@angular-devkit/core';
import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {NodePackageInstallTask} from '@angular-devkit/schematics/tasks';
import {getWorkspace, updateWorkspace} from '@schematics/angular/utility/workspace';
import {addPackageJsonDependency} from 'ng-morph';

import {tuiIsString} from '../../utils/miscellaneous/is-string';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import type {TuiSchema} from '../ng-add/schema';
import type {Asset} from '../ng-update/interfaces/asset';
import {getProjectTargetOptions} from './get-project-target-options';
import {getProjects} from './get-projects';

function hasTaigaIcons(assets: Asset[]): boolean {
    return !!assets?.find((asset) =>
        tuiIsString(asset)
            ? asset.includes('taiga-ui')
            : asset?.input?.includes('taiga-ui'),
    );
}

export async function isInvalidAngularJson(tree: Tree): Promise<boolean> {
    return (
        getWorkspace(tree)
            // eslint-disable-next-line no-restricted-syntax
            .then(() => false)
            /**
             * Possible error – "Invalid format version detected - Expected:[ 1 ] Found: [ 2 ]"
             * @see https://github.com/angular/angular-cli/blob/main/packages/angular_devkit/core/src/workspace/json/reader.ts#L67-L69
             */
            // eslint-disable-next-line no-restricted-syntax
            .catch(() => true)
    );
}

// eslint-disable-next-line @typescript-eslint/max-params,max-params
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

    return updateWorkspace((workspace) => {
        const projects = getProjects(options, workspace);

        if (!projects.length) {
            context.logger.warn(
                `[WARNING]: Target project not found. ${MANUAL_MIGRATION_TIPS}`,
            );

            return;
        }

        for (const project of projects) {
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

            if (filter?.(styles)) {
                taigaStyles = [];
            }

            if (!styles && taigaStyles.length) {
                targetOptions.styles = taigaStyles;
            }

            if (
                stylesToReplace &&
                styles?.filter((style) => style !== stylesToReplace.from)
            ) {
                const orderList = [
                    ...taigaStyles,
                    ...stylesToReplace.to,
                    ...styles.filter((style) => style !== stylesToReplace.from),
                ];

                targetOptions.styles = Array.from(new Set(orderList));
            } else {
                const orderList = [...taigaStyles, ...(styles || [])];

                targetOptions.styles = Array.from(new Set(orderList));
            }

            if (tree && stylesToReplace) {
                addPackageJsonDependency(tree, {
                    name: '@taiga-ui/styles',
                    version: TAIGA_VERSION,
                });

                context.addTask(new NodePackageInstallTask());
            }
        }
    });
}

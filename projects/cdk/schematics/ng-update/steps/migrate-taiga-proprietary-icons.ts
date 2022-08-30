import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {getProject} from '../../utils/get-project';
import {Schema} from '../../ng-add/schema';
import {getPackageJsonDependency, getSourceFiles} from 'ng-morph';
import {isInvalidAngularJson} from '../../utils/angular-json-manipulations';

const PROPRIETARY_TDS_ICON_ASSETS = {
    glob: '**/*',
    input: 'node_modules/@taiga-ui/proprietary-tds-icons/src',
    output: 'assets/taiga-ui/icons',
};

const MANUAL_MIGRATION_TIPS = `Add ${JSON.stringify(
    PROPRIETARY_TDS_ICON_ASSETS,
    null,
    4,
)} to angular.json manually`;

type Asset = string | {glob: string; input: string; ignore: string[]; output: string};

export function migrateTaigaProprietaryIcons(options: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        let proprietaryIcons: string | null = null;

        try {
            proprietaryIcons =
                getPackageJsonDependency(tree, '@taiga-ui/proprietary-icons')?.version ||
                null;
        } catch {
            // noop
        }

        if (await isInvalidAngularJson(tree)) {
            context.logger.warn(
                `[WARNING]: Schematics don't support this version of angular.json. ${MANUAL_MIGRATION_TIPS}`,
            );
            return;
        }

        return getSourceFiles('**/angular.json').length > 0
            ? updateWorkspace(workspace => {
                  if (proprietaryIcons === null) {
                      return;
                  }

                  const project = getProject(options, workspace);

                  if (!project) {
                      context.logger.warn(
                          `[WARNING]: Target project not found. ${MANUAL_MIGRATION_TIPS}`,
                      );
                      return;
                  }

                  const targetOptions = getProjectTargetOptions(project, 'build');

                  if (Array.isArray(targetOptions?.assets)) {
                      const tdsSrc = '@taiga-ui/proprietary-tds-icons/src';
                      const hasIcons = (targetOptions.assets as Asset[]).find(asset => {
                          return typeof asset === 'string'
                              ? asset.includes(tdsSrc)
                              : asset?.input?.includes(tdsSrc);
                      });

                      if (hasIcons) {
                          return;
                      }

                      targetOptions.assets.push(PROPRIETARY_TDS_ICON_ASSETS);
                  }
              })
            : () => {};
    };
}

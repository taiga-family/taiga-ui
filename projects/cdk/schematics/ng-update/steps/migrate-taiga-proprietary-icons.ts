import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {updateWorkspace} from '@schematics/angular/utility/workspace';
import {getProjectTargetOptions} from '../../utils/get-project-target-options';
import {getProject} from '../../utils/get-project';
import {Schema} from '../../ng-add/schema';
import {getPackageJsonDependency, getSourceFiles} from 'ng-morph';

const PROPRIETARY_TDS_ICON_ASSETS = {
    glob: '**/*',
    input: 'node_modules/@taiga-ui/proprietary-tds-icons/src',
    output: 'assets/taiga-ui/icons',
};

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

        return getSourceFiles('**/angular.json').length > 0
            ? updateWorkspace(workspace => {
                  if (proprietaryIcons === null) {
                      return;
                  }

                  const project = getProject(options, workspace);

                  if (!project) {
                      context.logger.warn(
                          `[WARNING]: Target project not found. Add ${JSON.stringify(
                              PROPRIETARY_TDS_ICON_ASSETS,
                              null,
                              4,
                          )} to angular.json manually`,
                      );
                      return;
                  }

                  const targetOptions = getProjectTargetOptions(project, 'build');

                  if (Array.isArray(targetOptions?.assets)) {
                      const hasIcons = targetOptions.assets.find(asset =>
                          (asset as any)?.input.includes(
                              '@taiga-ui/proprietary-tds-icons/src',
                          ),
                      );

                      if (hasIcons) {
                          return;
                      }

                      targetOptions.assets.push(PROPRIETARY_TDS_ICON_ASSETS);
                  }
              })
            : () => {};
    };
}

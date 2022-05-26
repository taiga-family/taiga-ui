import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {Schema} from '../ng-add/schema';
import {replaceEnums} from './steps/replace-enums';
import {renameTypes} from './steps/rename-types';
import {replaceConsts} from './steps/replace-const';
import {replaceDeepImports} from './steps/replace-deep-import';
import {showWarnings} from './steps/show-warnings';

export function updateToV3(_: Schema): Rule {
    return async (tree: Tree, context: SchematicContext) => {
        context.logger.info(`taiga packages will be updated to ${TAIGA_VERSION}`);

        setActiveProject(createProject(tree, '/', '**/**'));

        replaceDeepImports();
        replaceEnums();
        renameTypes();
        replaceConsts();
        showWarnings(context);

        saveActiveProject();
    };
}

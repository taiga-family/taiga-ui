import {SchematicContext, Tree} from '@angular-devkit/schematics';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';
import {TAIGA_VERSION} from '../ng-add/constants/versions';
import {Schema} from '../ng-add/schema';
import {replaceEnums} from './steps/replace-enums';

export function updateToV3(_: Schema) {
    return async (tree: Tree, context: SchematicContext) => {
        context.logger.info(`taiga packages will be updated to ${TAIGA_VERSION}`);

        setActiveProject(createProject(tree, '/', '**/**'));

        replaceEnums();

        saveActiveProject();
    };
}

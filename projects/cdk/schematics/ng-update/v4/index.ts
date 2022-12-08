// eslint-disable-next-line @typescript-eslint/naming-convention
import {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {saveActiveProject} from 'ng-morph';

import {TAIGA_VERSION} from '../../ng-add/constants/versions';
import {TuiSchema} from '../../ng-add/schema';
import {FINISH_SYMBOL, titleLog} from '../../utils/colored-log';
import {getFileSystem} from '../utils/get-file-system';

export function updateToV4(options: TuiSchema): Rule {
    return (tree: Tree, _: SchematicContext) => {
        const fileSystem = getFileSystem(tree);

        fileSystem.commitEdits();
        saveActiveProject();

        !options[`skip-logs`] &&
            titleLog(
                `${FINISH_SYMBOL} We migrated packages to @taiga-ui/*@${TAIGA_VERSION}\n`,
            );
    };
}

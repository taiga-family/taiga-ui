import {DevkitFileSystem} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {TuiSchema} from '../../../ng-add/schema';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';
import {setupProgressLogger} from '../../../utils/progress';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {getPathFromTemplateResource} from '../../../utils/templates/template-resource';
import {replaceAttrValues} from '../../utils/templates/replace-attr-values';
import {REPLACE_ATTR_VALUE} from '../constants/templates';

export function migrateIcons(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options[`skip-logs`] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates with icons...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

    componentWithTemplatesPaths.forEach(resource => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        !options[`skip-logs`] && progressLog(`icons migration`, true);

        replaceAttrValues({
            resource,
            fileSystem,
            recorder,
            replaceableItems: REPLACE_ATTR_VALUE,
        });
    });

    !options[`skip-logs`] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} icons migrated \n`);
}

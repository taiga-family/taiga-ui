import {
    type DevkitFileSystem,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
    type UpdateRecorder,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {saveAddedImports} from '../../../utils/add-import-to-closest-module';
import {setupProgressLogger} from '../../../utils/progress';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {getPathFromTemplateResource} from '../../../utils/templates/template-resource';
import {type TemplateResource} from '../../interfaces/template-resource';
import {
    addHTMLCommentTags,
    removeInputs,
    replaceAttrs,
    replaceAttrValues,
    replaceTags,
} from '../../utils/templates';
import {ATTR_WITH_VALUES_TO_REPLACE} from './constants/attr-with-values-to-replace';
import {ATTRS_TO_REPLACE} from './constants/attrs-to-replace';
import {HTML_COMMENTS} from './constants/html-comments';
import {INPUTS_TO_REMOVE} from './constants/inputs-to-remove';
import {TAGS_TO_REPLACE} from './constants/tags-to-replace';
import {migrateAccordionItem} from './templates/migrate-accordion';
import {migrateAvatarToDirective} from './templates/migrate-avatar';
import {migrateFieldError} from './templates/migrate-field-error';
import {migrateInputRange} from './templates/migrate-input-range';
import {migrateInputYear} from './templates/migrate-input-year';
import {migrateTuiNotification} from './templates/migrate-notification';
import {migrateRepeatTimes} from './templates/migrate-repeat-times';

export function getAction<T>({
    action,
    requiredData,
}: {
    action({
        resource,
        fileSystem,
        recorder,
        data,
    }: {
        fileSystem: DevkitFileSystem;
        recorder: UpdateRecorder;
        data: T;
        resource: TemplateResource;
    }): void;
    requiredData: T;
}) {
    return ({
        resource,
        fileSystem,
        recorder,
    }: {
        fileSystem: DevkitFileSystem;
        recorder: UpdateRecorder;
        resource: TemplateResource;
    }) => action({resource, fileSystem, recorder, data: requiredData});
}

export function migrateTemplates(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);

    const actions = [
        getAction({action: addHTMLCommentTags, requiredData: HTML_COMMENTS}),
        getAction({action: replaceTags, requiredData: TAGS_TO_REPLACE}),
        getAction({action: replaceAttrs, requiredData: ATTRS_TO_REPLACE}),
        getAction({action: replaceAttrValues, requiredData: ATTR_WITH_VALUES_TO_REPLACE}),
        getAction({action: removeInputs, requiredData: INPUTS_TO_REMOVE}),
        migrateInputYear,
        migrateInputRange,
        migrateAccordionItem,
        migrateAvatarToDirective,
        migrateTuiNotification,
        migrateRepeatTimes,
        migrateFieldError,
    ] as const;

    const progressLog = setupProgressLogger({total: componentWithTemplatesPaths.length});

    componentWithTemplatesPaths.forEach((resource) => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        actions.forEach((action, actionIndex) => {
            const isLastAction = actionIndex === actions.length - 1;

            !options['skip-logs'] && progressLog(action.name, isLastAction);
            action({resource, fileSystem, recorder});
        });
    });

    fileSystem.commitEdits();

    saveAddedImports(options);

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

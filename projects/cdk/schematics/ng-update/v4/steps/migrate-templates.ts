import type {DevkitFileSystem, UpdateRecorder} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import type {TuiSchema} from '../../../ng-add/schema';
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
import type {TemplateResource} from '../../interfaces/template-resource';
import {
    addHTMLCommentTags,
    removeInputs,
    replaceAttrs,
    replaceAttrValues,
    replaceTags,
} from '../../utils/templates';
import {replaceAttrsByDirective} from '../../utils/templates/replace-attrs-by-directives';
import {
    ATTR_WITH_VALUES_TO_REPLACE,
    ATTRS_TO_DIRECTIVE_REPLACE,
    ATTRS_TO_REPLACE,
    HTML_COMMENTS,
    INPUTS_TO_REMOVE,
    TAGS_TO_REPLACE,
} from './constants';
import {
    migrateAvatar,
    migrateBadge,
    migrateBadgedContent,
    migrateCheckbox,
    migrateExpandable,
    migrateLabeled,
    migrateMoney,
    migratePreventDefault,
    migrateProgressSegmented,
    migrateRadio,
    migrateThumbnailCard,
    migrateToggle,
} from './templates';

function getAction<T>({
    action,
    requiredData,
}: {
    action: ({
        resource,
        fileSystem,
        recorder,
        data,
    }: {
        fileSystem: DevkitFileSystem;
        recorder: UpdateRecorder;
        data: T;
        resource: TemplateResource;
    }) => void;
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
        getAction({
            action: replaceAttrsByDirective,
            requiredData: ATTRS_TO_DIRECTIVE_REPLACE,
        }),
        getAction({action: replaceTags, requiredData: TAGS_TO_REPLACE}),
        getAction({action: replaceAttrs, requiredData: ATTRS_TO_REPLACE}),
        getAction({action: replaceAttrValues, requiredData: ATTR_WITH_VALUES_TO_REPLACE}),
        getAction({action: removeInputs, requiredData: INPUTS_TO_REMOVE}),
        migrateBadge,
        migrateCheckbox,
        migrateRadio,
        migrateToggle,
        migrateAvatar,
        migrateExpandable,
        migrateBadgedContent,
        migratePreventDefault,
        migrateMoney,
        migrateLabeled,
        migrateProgressSegmented,
        migrateThumbnailCard,
    ] as const;

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

    componentWithTemplatesPaths.forEach(resource => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        actions.forEach((action, actionIndex) => {
            const isLastAction = actionIndex === actions.length - 1;

            !options['skip-logs'] && progressLog(action.name, isLastAction);
            action({resource, fileSystem, recorder});
        });
    });

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

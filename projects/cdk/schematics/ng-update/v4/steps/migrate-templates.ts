import type {DevkitFileSystem, UpdateRecorder} from 'ng-morph';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import type {TuiSchema} from '../../../ng-add/schema';
import {saveAddedImports} from '../../../utils/add-import-to-closest-module';
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
    migrateActiveZoneParent,
    migrateAvatar,
    migrateAxes,
    migrateBadge,
    migrateBadgedContent,
    migrateButtonAppearance,
    migrateCheckbox,
    migrateExpandable,
    migrateFilterPipe,
    migrateFocusable,
    migrateLabel,
    migrateLabeled,
    migrateMobileTabs,
    migrateMoney,
    migrateNotification,
    migrateOverscroll,
    migratePreventDefault,
    migrateProgressSegmented,
    migrateRadio,
    migrateThumbnailCard,
    migrateToggle,
} from './templates';
import {dropdownRefComment} from './templates/dropdown-ref-comment';
import {migrateBlocked} from './templates/migrate-blocked';
import {migrateNumberPrecision} from './templates/migrate-number-precision';

export function getAction<T>({
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
        dropdownRefComment,
        migrateAxes,
        migrateBadge,
        migrateCheckbox,
        migrateFocusable,
        migrateRadio,
        migrateToggle,
        migrateAvatar,
        migrateExpandable,
        migrateBadgedContent,
        migratePreventDefault,
        migrateMobileTabs,
        migrateMoney,
        migrateLabeled,
        migrateBlocked,
        migrateProgressSegmented,
        migrateThumbnailCard,
        migrateOverscroll,
        migrateButtonAppearance,
        migrateLabel,
        migrateNumberPrecision,
        migrateNotification,
        migrateFilterPipe,
        migrateActiveZoneParent,
    ] as const;

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

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

    saveAddedImports();

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

import {
    type DevkitFileSystem,
    getPackageJsonDependency,
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
import {migrateAmountCurrencyAlign} from './templates/migrate-amount-currency-align';
import {migrateAsyncPipes} from './templates/migrate-async-pipes';
import {migrateAvatarToDirective} from './templates/migrate-avatar';
import {migrateAxes} from './templates/migrate-axes';
import {migrateCalendarSheetSingle} from './templates/migrate-calendar-sheet-single';
import {migrateChartHint} from './templates/migrate-chart-hint';
import {migrateCloseable} from './templates/migrate-closeable';
import {migrateComboBox} from './templates/migrate-combo-box';
import {migrateDocDocumentation} from './templates/migrate-doc-documentation';
import {migrateFieldError} from './templates/migrate-field-error';
import {migrateFormatPhonePipe} from './templates/migrate-format-phone-pipe';
import {migrateHintOnLegacyControls} from './templates/migrate-hint-on-legacy-controls';
import {migrateInput} from './templates/migrate-input';
import {migrateInputDate} from './templates/migrate-input-date';
import {migrateInputDateMulti} from './templates/migrate-input-date-multi';
import {migrateInputDateRange} from './templates/migrate-input-date-range';
import {migrateInputMonth} from './templates/migrate-input-month';
import {migrateInputPassword} from './templates/migrate-input-password';
import {migrateInputPhone} from './templates/migrate-input-phone';
import {migrateInputPhoneInternational} from './templates/migrate-input-phone-international';
import {migrateInputTag} from './templates/migrate-input-tag';
import {migrateInputTime} from './templates/migrate-input-time';
import {migrateInputYear} from './templates/migrate-input-year';
import {migrateLegacyCustomContent} from './templates/migrate-legacy-custom-content';
import {migrateMultiSelect} from './templates/migrate-multi-select';
import {migrateTuiNotification} from './templates/migrate-notification';
import {migrateProprietaryTextfieldIcons} from './templates/migrate-proprietary-textfield-icons';
import {migrateRepeatTimes} from './templates/migrate-repeat-times';
import {migrateSelect} from './templates/migrate-select';
import {migrateSidebar} from './templates/migrate-sidebar';
import {migrateTagToChip} from './templates/migrate-tag';
import {migrateTextarea} from './templates/migrate-textarea';

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
    const hasProprietaryPackage = !!getPackageJsonDependency(
        fileSystem.tree,
        '@taiga-ui/proprietary',
    );

    const actions = [
        getAction({action: addHTMLCommentTags, requiredData: HTML_COMMENTS}),
        getAction({action: replaceTags, requiredData: TAGS_TO_REPLACE}),
        getAction({action: replaceAttrs, requiredData: ATTRS_TO_REPLACE}),
        getAction({action: replaceAttrValues, requiredData: ATTR_WITH_VALUES_TO_REPLACE}),
        getAction({action: removeInputs, requiredData: INPUTS_TO_REMOVE}),
        migrateInputPassword,
        migrateInputMonth,
        migrateInputDate,
        migrateInputTime,
        migrateInputPhoneInternational,
        migrateInputDateMulti,
        migrateInputTag,
        migrateInputYear,
        migrateInputPhone,
        migrateInputDateRange,
        migrateMultiSelect,
        migrateSelect,
        migrateComboBox,
        migrateAccordionItem,
        migrateAvatarToDirective,
        migrateTuiNotification,
        migrateRepeatTimes,
        migrateFieldError,
        migrateAmountCurrencyAlign,
        migrateAsyncPipes,
        migrateTagToChip,
        migrateAxes,
        migrateChartHint,
        migrateCalendarSheetSingle,
        migrateCloseable,
        migrateDocDocumentation,
        migrateSidebar,
        migrateFormatPhonePipe,
        ...(hasProprietaryPackage ? [migrateProprietaryTextfieldIcons] : []),
        migrateHintOnLegacyControls,
        migrateLegacyCustomContent,
        migrateInput,
        migrateTextarea,
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

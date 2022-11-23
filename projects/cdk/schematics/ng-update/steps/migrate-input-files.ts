import {
    createProject,
    DevkitFileSystem,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {ALL_TS_FILES} from '../../constants';
import {
    infoLog,
    PROCESSING_SYMBOL,
    processLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    successLog,
    SUCCESS_SYMBOL,
} from '../../utils/colored-log';
import {setupProgressLogger} from '../../utils/progress';
import {hasElementAttribute} from '../../utils/templates/elements';
import {getComponentTemplates} from '../../utils/templates/get-component-templates';
import {
    removeInputProperty,
    replaceInputProperty,
} from '../../utils/templates/ng-component-input-manipulations';
import {TemplateResource} from '../interfaces/template-resourse';

const LABEL_LINK_INPUTS_MIGRATION_METHOD_NAME = `tuiMigrationLabelLinkInputs`;

export function migrateInputFiles(fileSystem: DevkitFileSystem): void {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating input-files...`);
    processLog(`${SMALL_TAB_SYMBOL}${SMALL_TAB_SYMBOL}${PROCESSING_SYMBOL}InputFiles...`);

    migrateInputFilesComponent(fileSystem);

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} input-files migrated \n`);
}

function migrateInputFilesComponent(fileSystem: DevkitFileSystem): void {
    const templateResources = getComponentTemplates(ALL_TS_FILES);
    const COMPONENTS_WITH_LABEL_LINK_INPUTS = new Set<string>();

    let progressLog = setupProgressLogger({
        total: templateResources.length,
        prefix: '[replaceLabelLinkInputs]',
    });

    for (const templateResource of templateResources) {
        progressLog(templateResource.componentPath);
        replaceLabelLinkInputs(
            templateResource,
            fileSystem,
            COMPONENTS_WITH_LABEL_LINK_INPUTS,
        );
    }

    /**
     * We should update virtual file tree
     * otherwise all following ng-morph commands will overwrite all previous template manipulations
     * */
    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree));
}

function replaceLabelLinkInputs(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
    modifiedComponentStorage: Set<string>,
): void {
    const wasLabelInputModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-files',
        from: '[label]',
        to: '[content]',
        newValue: LABEL_LINK_INPUTS_MIGRATION_METHOD_NAME,
    });

    const wasLinkInputModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-files',
        from: '[link]',
        to: '[content]',
        newValue: LABEL_LINK_INPUTS_MIGRATION_METHOD_NAME,
        filterFn: element => !hasElementAttribute(element, '[label]'),
    });

    removeInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-files',
        inputProperty: '[link]',
        filterFn: element => hasElementAttribute(element, '[label]'),
    });

    if (wasLabelInputModified || wasLinkInputModified) {
        modifiedComponentStorage.add(templateResource.componentPath);
    }
}

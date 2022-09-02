import {
    addMethods,
    createProject,
    DevkitFileSystem,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {
    removeInputProperty,
    replaceInputProperty,
} from '../../../utils/templates/ng-component-input-manipulations';
import type {TemplateResource} from '../../interfaces/template-resourse';
import {getNgComponents} from '../../../utils/angular/ng-component';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {hasElementAttribute} from '../../../utils/templates/elements';
import {ALL_FILES, ALL_TS_FILES} from '../../../constants';
import {setupProgressLogger} from '../../../utils/progress';

export function migrateInputSlider(fileSystem: DevkitFileSystem): void {
    const templateResources = getComponentTemplates(ALL_TS_FILES);
    const COMPONENTS_WITH_MIN_MAX_LABELS = new Set<string>();

    let progressLog = setupProgressLogger({
        total: templateResources.length,
        prefix: '[replaceMinMaxLabels]',
    });

    for (const templateResource of templateResources) {
        progressLog(templateResource.componentPath);
        replaceMinMaxLabels(templateResource, fileSystem, COMPONENTS_WITH_MIN_MAX_LABELS);
    }

    /**
     * We should update virtual file tree
     * otherwise all following ng-morph commands will overwrite all previous template manipulations
     * */
    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, '/', ALL_FILES));

    progressLog = setupProgressLogger({
        total: COMPONENTS_WITH_MIN_MAX_LABELS.size,
        prefix: '[addMinMaxLabelMethod]',
    });

    for (const componentPath of Array.from(COMPONENTS_WITH_MIN_MAX_LABELS)) {
        progressLog(componentPath);
        addMinMaxLabelMethod(componentPath);
    }
}

const MIN_MAX_LABELS_MIGRATION_METHOD_NAME = 'tuiMigrationMinMaxLabel';

function replaceMinMaxLabels(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
    modifiedComponentStorage: Set<string>,
): void {
    const wasMaxLabelModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-slider',
        from: 'maxLabel',
        to: '[valueContent]',
        newValue: MIN_MAX_LABELS_MIGRATION_METHOD_NAME,
    });
    const wasMinLabelModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-slider',
        from: 'minLabel',
        to: '[valueContent]',
        newValue: MIN_MAX_LABELS_MIGRATION_METHOD_NAME,
        filterFn: element => !hasElementAttribute(element, 'maxLabel'),
    });

    removeInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-slider',
        inputProperty: 'minLabel',
        filterFn: element => hasElementAttribute(element, 'maxLabel'),
    });

    if (wasMaxLabelModified || wasMinLabelModified) {
        modifiedComponentStorage.add(templateResource.componentPath);
    }
}

function addMinMaxLabelMethod(componentPath: string): void {
    const [ngComponent] = getNgComponents(componentPath);

    if (ngComponent) {
        addUniqueImport(componentPath, 'TuiContextWithImplicit', '@taiga-ui/cdk');
        addMethods(ngComponent, {
            name: MIN_MAX_LABELS_MIGRATION_METHOD_NAME,
            returnType: 'string',
            parameters: [{name: 'context', type: 'TuiContextWithImplicit<number>'}],
            statements: [
                'const currentValue = context.$implicit;',
                'const maxValue = 100; // TODO: (Taiga UI migration) replace with the MAX value of the input',
                'const maxLabelText = "Max"; // TODO: (Taiga UI migration) replace with the required label',
                'const minValue = 0; // TODO: (Taiga UI migration) replace with the MIN value of the input',
                'const minLabelText = "Min"; // TODO: (Taiga UI migration) replace with the required label',
                'if (currentValue === maxValue) return maxLabelText;',
                'if (currentValue === minValue) return minLabelText;',
                'return String(currentValue);',
            ],
        });
    }
}

import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {TemplateResource} from '../../interfaces/template-resourse';
import {replaceInputProperty} from '../../../utils/templates/ng-component-input-manipulations';
import {
    addMethods,
    createProject,
    saveActiveProject,
    setActiveProject,
    DevkitFileSystem,
} from 'ng-morph';
import {getNgComponents} from '../../../utils/angular/ng-component';
import {addUniqueImport} from '../../../utils/add-unique-import';

const MIN_LABELS_MIGRATION_METHOD_NAME = 'tuiMigrationInputRangeMinLabel';
const MAX_LABELS_MIGRATION_METHOD_NAME = 'tuiMigrationInputRangeMaxLabel';

export function migrateInputRange(fileSystem: DevkitFileSystem): void {
    const templateResources = getComponentTemplates('**/**.ts');
    const COMPONENTS_WITH_MIN_LABELS = new Set<string>();
    const COMPONENTS_WITH_MAX_LABELS = new Set<string>();

    for (const templateResource of templateResources) {
        replaceMinLabel(templateResource, fileSystem, COMPONENTS_WITH_MIN_LABELS);
        replaceMaxLabel(templateResource, fileSystem, COMPONENTS_WITH_MAX_LABELS);
    }

    save(fileSystem);

    for (const componentPath of COMPONENTS_WITH_MIN_LABELS) {
        addMinMaxLabelMethod(componentPath, MIN_LABELS_MIGRATION_METHOD_NAME, [
            'const currentValue = context.$implicit;',
            'const minValue = 0; // TODO: (Taiga UI migration) replace with the MIN value of the input-range',
            'const minLabelText = "Min"; // TODO: (Taiga UI migration) replace with the required label',
            'if (currentValue === minValue) return minLabelText;',
            'return String(currentValue);',
        ]);
    }

    for (const componentPath of COMPONENTS_WITH_MAX_LABELS) {
        addMinMaxLabelMethod(componentPath, MAX_LABELS_MIGRATION_METHOD_NAME, [
            'const currentValue = context.$implicit;',
            'const maxValue = 100; // TODO: (Taiga UI migration) replace with the MAX value of the input',
            'const maxLabelText = "Max"; // TODO: (Taiga UI migration) replace with the required label',
            'if (currentValue === maxValue) return maxLabelText;',
            'return String(currentValue);',
        ]);
    }
}

function replaceMinLabel(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
    modifiedComponentStorage: Set<string>,
): void {
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-range',
        from: 'minLabel',
        to: '[leftValueContent]',
        newValue: MIN_LABELS_MIGRATION_METHOD_NAME,
    });

    if (wasModified) {
        modifiedComponentStorage.add(templateResource.componentPath);
    }
}

function replaceMaxLabel(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
    modifiedComponentStorage: Set<string>,
): void {
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-range',
        from: 'maxLabel',
        to: '[rightValueContent]',
        newValue: MAX_LABELS_MIGRATION_METHOD_NAME,
    });

    if (wasModified) {
        modifiedComponentStorage.add(templateResource.componentPath);
    }
}

function addMinMaxLabelMethod(
    componentPath: string,
    methodName: string,
    methodCode: string | string[],
): void {
    const [ngComponent] = getNgComponents(componentPath);

    if (ngComponent) {
        addUniqueImport(
            ngComponent.getSourceFile().getFilePath(),
            'TuiContextWithImplicit',
            '@taiga-ui/cdk',
        );

        addMethods(ngComponent, {
            name: methodName,
            returnType: 'string',
            parameters: [{name: 'context', type: 'TuiContextWithImplicit<number>'}],
            statements: methodCode,
        });
    }
}

/**
 * We should update virtual file tree after template manipulations
 * otherwise all following ng-morph commands will overwrite all previous template manipulations
 * */
function save(fileSystem: DevkitFileSystem) {
    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, '/', '**/**'));
}

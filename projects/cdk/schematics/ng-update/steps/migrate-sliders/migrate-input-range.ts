import {Tree} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {TemplateResource} from '../../interfaces/template-resourse';
import {replaceInputProperty} from '../../../utils/templates/ng-component-input-manipulations';
import {addMethods, createProject, saveActiveProject, setActiveProject} from 'ng-morph';
import {getNgComponents} from '../../../utils/angular/ng-component';
import {addUniqueImport} from '../../../utils/add-unique-import';

export function migrateInputRange(tree: Tree): void {
    const fileSystem = new DevkitFileSystem(tree);
    const templateResources = getComponentTemplates('**/**');

    for (const templateResource of templateResources) {
        replaceMinLabel(templateResource, fileSystem);
        replaceMaxLabel(templateResource, fileSystem);
    }
}

function replaceMinLabel(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
): void {
    const MIGRATION_VARIABLE_NAME = 'tuiMigrationInputRangeMinLabel';
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-range',
        from: 'minLabel',
        to: '[leftValueContent]',
        newValue: MIGRATION_VARIABLE_NAME,
    });

    save(fileSystem);

    if (wasModified) {
        addMinMaxLabelMethod(templateResource.componentPath, MIGRATION_VARIABLE_NAME, [
            'const currentValue = context.$implicit;',
            'const minValue = 0; // TODO replace with the MIN value of the input-range',
            'const minLabelText = "Min"; // TODO replace with the required label',
            'if (currentValue === minValue) return minLabelText;',
            'return String(currentValue);',
        ]);
    }
}

function replaceMaxLabel(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
): void {
    const MIGRATION_VARIABLE_NAME = 'tuiMigrationInputRangeMaxLabel';
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-range',
        from: 'maxLabel',
        to: '[rightValueContent]',
        newValue: MIGRATION_VARIABLE_NAME,
    });

    save(fileSystem);

    if (wasModified) {
        addMinMaxLabelMethod(templateResource.componentPath, MIGRATION_VARIABLE_NAME, [
            'const currentValue = context.$implicit;',
            'const maxValue = 100; // TODO replace with the MAX value of the input',
            'const maxLabelText = "Max"; // TODO replace with the required label',
            'if (currentValue === maxValue) return maxLabelText;',
            'return String(currentValue);',
        ]);
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

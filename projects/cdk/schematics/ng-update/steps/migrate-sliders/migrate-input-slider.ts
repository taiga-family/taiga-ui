import {Tree} from '@angular-devkit/schematics';
import {addMethods, createProject, saveActiveProject, setActiveProject} from 'ng-morph';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';

import {
    removeInputProperty,
    replaceInputProperty,
    replaceInputPropertyByDirective,
} from '../../../utils/templates/ng-component-input-manipulations';
import {TemplateResource} from '../../interfaces/template-resourse';
import {getNgComponents} from '../../../utils/angular/ng-component';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {hasElementAttribute} from '../../../utils/templates/elements';

export function migrateInputSlider(tree: Tree): void {
    const fileSystem = new DevkitFileSystem(tree);
    const templateResources = getComponentTemplates('**/**');

    for (const templateResource of templateResources) {
        replaceInputPropertyByDirective({
            templateResource,
            fileSystem,
            componentSelector: 'tui-input-slider',
            inputProperty: 'secondary',
            directive: 'tuiTextfieldCustomContent',
            directiveModule: {
                name: 'TuiTextfieldControllerModule',
                moduleSpecifier: '@taiga-ui/core',
            },
        });
        replaceInputPropertyByDirective({
            templateResource,
            fileSystem,
            componentSelector: 'tui-input-slider',
            inputProperty: 'size',
            directive: 'tuiTextfieldSize',
            directiveModule: {
                name: 'TuiTextfieldControllerModule',
                moduleSpecifier: '@taiga-ui/core',
            },
        });

        replaceMinMaxLabels(templateResource, fileSystem);
    }
}

function replaceMinMaxLabels(
    templateResource: TemplateResource,
    fileSystem: DevkitFileSystem,
): void {
    const wasMaxLabelModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-slider',
        from: 'maxLabel',
        to: '[valueContent]',
        newValue: 'tuiMigrationMinMaxLabel',
    });
    const wasMinLabelModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-slider',
        from: 'minLabel',
        to: '[valueContent]',
        newValue: 'tuiMigrationMinMaxLabel',
        filterFn: element => !hasElementAttribute(element, 'maxLabel'),
    });

    removeInputProperty({
        templateResource,
        fileSystem,
        componentSelector: 'tui-input-slider',
        inputProperty: 'minLabel',
        filterFn: element => hasElementAttribute(element, 'maxLabel'),
    });

    /**
     * We should update virtual file tree
     * otherwise all following ng-morph commands will overwrite all previous template manipulations
     * */
    fileSystem.commitEdits();
    saveActiveProject();
    setActiveProject(createProject(fileSystem.tree, '/', '**/**'));

    const [ngComponent] = getNgComponents(templateResource.componentPath);

    if ((wasMaxLabelModified || wasMinLabelModified) && ngComponent) {
        addUniqueImport(
            templateResource.componentPath,
            'TuiContextWithImplicit',
            '@taiga-ui/cdk',
        );
        addMethods(ngComponent, {
            name: 'tuiMigrationMinMaxLabel',
            returnType: 'string',
            parameters: [{name: 'context', type: 'TuiContextWithImplicit<number>'}],
            statements: [
                'const currentValue = context.$implicit;',
                'const maxValue = 100; // TODO replace with the MAX value of the input',
                'const maxLabelText = "Max"; // TODO replace with the required label',
                'const minValue = 0; // TODO replace with the MIN value of the input',
                'const minLabelText = "Min"; // TODO replace with the required label',
                'if (currentValue === maxValue) return maxLabelText;',
                'if (currentValue === minValue) return minLabelText;',
                'return String(currentValue);',
            ],
        });
    }
}

import {Tree} from '@angular-devkit/schematics';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {replaceInputPropertyByDirective} from '../../../utils/templates/ng-component-input-manipulations';

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
    }

    fileSystem.commitEdits();
}

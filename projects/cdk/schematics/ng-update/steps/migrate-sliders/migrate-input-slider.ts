import {Tree} from '@angular-devkit/schematics';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {addImportToNgModule} from 'ng-morph';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {findNgModule} from '../../../utils/angular/ng-module';
import {getNgComponents} from '../../../utils/angular/ng-component';
import {replaceInputProperty} from '../../../utils/templates/ng-component-input-manipulations';

export function migrateInputSlider(tree: Tree): void {
    replaceSecondaryByTextfieldCustomContent(tree);
}

function replaceSecondaryByTextfieldCustomContent(tree: Tree): void {
    const fileSystem = new DevkitFileSystem(tree);
    const templateResources = getComponentTemplates('**/**');

    for (const templateResource of templateResources) {
        const wasModified = replaceInputProperty({
            templateResource,
            fileSystem,
            componentSelector: 'tui-input-slider',
            from: 'secondary',
            to: 'tuiTextfieldCustomContent',
        });

        if (wasModified) {
            const [ngComponent] = getNgComponents(templateResource.componentPath);
            const ngModule = ngComponent ? findNgModule(ngComponent) : null;

            if (ngModule) {
                addImportToNgModule(ngModule, 'TuiTextfieldControllerModule', {
                    unique: true,
                });
                addUniqueImport(
                    ngModule.getSourceFile().getFilePath(),
                    'TuiTextfieldControllerModule',
                    '@taiga-ui/core',
                );
            }
        }
    }

    fileSystem.commitEdits();
}

import {Tree} from '@angular-devkit/schematics';
import {getComponentTemplates} from '../../utils/templates/get-component-templates';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {addImportToNgModule, arrayFlat} from 'ng-morph';
import {TemplateResource} from '../interfaces/template-resourse';
import {findAttributeOnElementWithTag} from '@angular/cdk/schematics';
import {addUniqueImport} from '../../utils/add-unique-import';
import {findNgModule} from '../../utils/angular/ng-module';
import {getNgComponents} from '../../utils/angular/ng-component';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../utils/templates/template-resource';

export function migrateSliders(tree: Tree): void {
    const fileSystem = new DevkitFileSystem(tree);
    const templateResources = getComponentTemplates('**/**');
    const filteredTemplates = templateResources.filter(templateRes =>
        hasPropsToBeReplacedByTextfieldController(
            templateRes,
            fileSystem,
            'tui-input-slider',
            'secondary',
        ),
    );

    const components = arrayFlat(
        filteredTemplates.map(templateRes => getNgComponents(templateRes.componentPath)),
    );
    const modulesWithComponentDeclaration = components
        .map(findNgModule)
        .filter(<T>(m: T | null): m is T => Boolean(m));

    for (const module of modulesWithComponentDeclaration) {
        addImportToNgModule(module, 'TuiTextfieldControllerModule', {unique: true});
        addUniqueImport(
            module.getSourceFile().getFilePath(),
            'TuiTextfieldControllerModule',
            '@taiga-ui/core',
        );
    }

    for (const template of filteredTemplates) {
        processTemplate(
            template,
            fileSystem,
            'secondary',
            'tuiTextfieldCustomContent',
            'tui-input-slider',
        );
        fileSystem.commitEdits();
    }
}

function hasPropsToBeReplacedByTextfieldController(
    templateRes: TemplateResource,
    fileSystem: DevkitFileSystem,
    tagName: string,
    propName: string,
): boolean {
    const template = getTemplateFromTemplateResource(templateRes, fileSystem);

    return !![
        ...findAttributeOnElementWithTag(template, propName, [tagName]),
        ...findAttributeOnElementWithTag(template, `[${propName}]`, [tagName]),
    ].length;
}

function processTemplate(
    templateRes: TemplateResource,
    fileSystem: DevkitFileSystem,
    fromPropName: string,
    toPropName: string,
    tagName: string,
) {
    const template = getTemplateFromTemplateResource(templateRes, fileSystem);
    const path = fileSystem.resolve(getPathFromTemplateResource(templateRes));
    const recorder = fileSystem.edit(path);
    const templateOffset = getTemplateOffset(templateRes);

    findAttributeOnElementWithTag(template, fromPropName, [tagName]).forEach(offset => {
        recorder.remove(offset + templateOffset, fromPropName.length);
        recorder.insertRight(offset + templateOffset, toPropName);
    });

    findAttributeOnElementWithTag(template, `[${fromPropName}]`, [tagName]).forEach(
        offset => {
            recorder.remove(offset + templateOffset, `[${fromPropName}]`.length);
            recorder.insertRight(offset + templateOffset, `[${toPropName}]`);
        },
    );
}

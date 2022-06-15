import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from './template-resource';
import {TemplateResource} from '../../ng-update/interfaces/template-resourse';
import {getNgComponents} from '../angular/ng-component';
import {findNgModule} from '../angular/ng-module';
import {addImportToNgModule} from 'ng-morph';
import {addUniqueImport} from '../add-unique-import';
import {findAttributeOnElementWithTag} from './elements';

/**
 * Replace component input property by new value
 * ___
 * Example:
 * 1. Before
 * ```html
 * <tui-input-slider secondary="123"></tui-input-slider>
 * ```
 * 2. Execute
 * ```ts
 * const wasModified = replaceInputProperty({
 *      templateResource,
 *      fileSystem,
 *      componentSelector: 'tui-input-slider',
 *      from: 'secondary',
 *      to: 'tuiTextfieldCustomContent',
 * });
 * ```
 * 3. After
 * ```html
 * <tui-input-slider tuiTextfieldCustomContent="123"></tui-input-slider>
 * ```
 * ___
 * @return true if something was changed
 */
export function replaceInputProperty({
    templateResource,
    fileSystem,
    componentSelector,
    from,
    to,
}: {
    templateResource: TemplateResource;
    fileSystem: DevkitFileSystem;
    componentSelector: string;
    from: string;
    to: string;
}): boolean {
    const template = getTemplateFromTemplateResource(templateResource, fileSystem);
    const path = fileSystem.resolve(getPathFromTemplateResource(templateResource));
    const recorder = fileSystem.edit(path);
    const templateOffset = getTemplateOffset(templateResource);

    const stringProperties = findAttributeOnElementWithTag(template, from, [
        componentSelector,
    ]);
    const propertyBindings = findAttributeOnElementWithTag(template, `[${from}]`, [
        componentSelector,
    ]);

    if (!stringProperties.length && !propertyBindings.length) {
        return false;
    }

    stringProperties.forEach(offset => {
        recorder.remove(offset + templateOffset, from.length);
        recorder.insertRight(offset + templateOffset, to);
    });

    propertyBindings.forEach(offset => {
        recorder.remove(offset + templateOffset, `[${from}]`.length);
        recorder.insertRight(offset + templateOffset, `[${to}]`);
    });

    return true;
}

export function replaceInputPropertyByDirective({
    templateResource,
    fileSystem,
    componentSelector,
    inputProperty,
    directive,
    directiveModule,
}: {
    templateResource: TemplateResource;
    fileSystem: DevkitFileSystem;
    componentSelector: string;
    inputProperty: string;
    directive: string;
    directiveModule?: {name: string; moduleSpecifier: string};
}): void {
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector,
        from: inputProperty,
        to: directive,
    });

    if (wasModified && directiveModule) {
        const [ngComponent] = getNgComponents(templateResource.componentPath);
        const ngModule = ngComponent ? findNgModule(ngComponent) : null;

        if (ngModule) {
            addImportToNgModule(ngModule, directiveModule.name, {
                unique: true,
            });
            addUniqueImport(
                ngModule.getSourceFile().getFilePath(),
                directiveModule.name,
                directiveModule.moduleSpecifier,
            );
        }
    }
}

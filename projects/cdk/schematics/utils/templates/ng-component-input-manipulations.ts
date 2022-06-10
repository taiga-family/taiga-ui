import {findAttributeOnElementWithTag} from '@angular/cdk/schematics';
import {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from './template-resource';
import {TemplateResource} from '../../ng-update/interfaces/template-resourse';

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

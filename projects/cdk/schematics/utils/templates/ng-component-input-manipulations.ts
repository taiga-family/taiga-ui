import type {DevkitFileSystem} from 'ng-morph/project/classes/devkit-file-system';
import type {Element} from 'parse5';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from './template-resource';
import type {TemplateResource} from '../../ng-update/interfaces/template-resourse';
import {
    findAttributeOnElementWithAttrs,
    findAttributeOnElementWithTag,
    findElementsWithAttribute,
} from './elements';
import {addImportToClosestModule} from '../add-import-to-closest-module';

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
    newValue = '',
    filterFn,
}: {
    templateResource: TemplateResource;
    fileSystem: DevkitFileSystem;
    componentSelector: string | string[];
    from: string;
    to: string;
    newValue?: string;
    filterFn?: (element: Element) => boolean;
}): boolean {
    const template = getTemplateFromTemplateResource(templateResource, fileSystem);
    const path = fileSystem.resolve(getPathFromTemplateResource(templateResource));
    const recorder = fileSystem.edit(path);
    const templateOffset = getTemplateOffset(templateResource);
    const selector = Array.isArray(componentSelector)
        ? componentSelector
        : [componentSelector];

    const stringProperties = [
        ...findAttributeOnElementWithTag(template, from, selector, filterFn),
        ...findAttributeOnElementWithAttrs(template, from, selector, filterFn),
    ].map(offset => templateOffset + offset);
    const propertyBindings = [
        ...findAttributeOnElementWithTag(template, `[${from}]`, selector, filterFn),
        ...findAttributeOnElementWithAttrs(template, `[${from}]`, selector, filterFn),
    ].map(offset => templateOffset + offset);
    const propertyValues = newValue
        ? getInputPropertyValueOffsets(template, from, selector).map(([start, end]) => [
              templateOffset + start,
              templateOffset + end,
          ])
        : [];

    if (!stringProperties.length && !propertyBindings.length) {
        return false;
    }

    stringProperties.forEach(offset => {
        recorder.remove(offset, from.length);
        recorder.insertRight(offset, to);
    });

    propertyBindings.forEach(offset => {
        recorder.remove(offset, `[${from}]`.length);
        recorder.insertRight(offset, to.startsWith('[') ? to : `[${to}]`);
    });

    propertyValues.forEach(([startOffset, endOffset]) => {
        recorder.remove(startOffset, endOffset - startOffset);
        recorder.insertRight(startOffset, newValue);
    });

    return true;
}

/**
 * @example
 * // 10 symbols before property `size` and string `size="s"` has 8-symbols length
 * const template = '<tui-card size="s"></tui-card>';
 *
 * getInputPropertyOffsets(template, 'size', ['tui-card']) // [[10, 18]]
 */
export function getInputPropertyOffsets(
    html: string,
    attrName: string,
    tags: string[],
    filterFn: (element: Element) => boolean = () => true,
): [number, number][] {
    return findElementsWithAttribute(html, attrName)
        .filter(
            element =>
                (tags.includes(element.tagName) || tags.includes('*')) &&
                filterFn(element),
        )
        .map((element: Element) => {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.[attrName.toLowerCase()] || {};

            return [startOffset, endOffset];
        });
}

/**
 * @example
 * // `<tui-card size="` has 16-symbols length
 * const template = '<tui-card size="xl"></tui-card>';
 *
 * getInputPropertyValueOffsets(template, 'size', ['tui-card']) // [ [16, 18] ]
 */
export function getInputPropertyValueOffsets(
    template: string,
    attrName: string,
    tags: string[],
): [number, number][] {
    const stringProperties: [number, number][] = getInputPropertyOffsets(
        template,
        attrName,
        tags,
    ).map(([start, end]) => [start + attrName.length + '="'.length, end - 1]);
    const propertyBindings: [number, number][] = getInputPropertyOffsets(
        template,
        `[${attrName}]`,
        tags,
    ).map(([start, end]) => [start + `[${attrName}]`.length + '="'.length, end - 1]);

    return [...stringProperties, ...propertyBindings];
}

export function replaceInputPropertyByDirective({
    templateResource,
    fileSystem,
    componentSelector,
    inputProperty,
    directive,
    directiveModule,
    filterFn,
}: {
    templateResource: TemplateResource;
    fileSystem: DevkitFileSystem;
    componentSelector: string | string[];
    inputProperty: string;
    directive: string;
    directiveModule?: {name: string; moduleSpecifier: string};
    filterFn?: (element: Element) => boolean;
}): void {
    const wasModified = replaceInputProperty({
        templateResource,
        fileSystem,
        componentSelector,
        from: inputProperty,
        to: directive,
        filterFn,
    });

    if (wasModified && directiveModule) {
        addImportToClosestModule(
            templateResource.componentPath,
            directiveModule.name,
            directiveModule.moduleSpecifier,
        );
    }
}

/**
 * After removing property from the tag (which uses multi lines inside template) it can leave redundant space.
 * It is not critical because html is valid even with this extra space.
 * TODO: Find a way to fix it
 */
export function removeInputProperty({
    templateResource,
    fileSystem,
    componentSelector,
    inputProperty,
    filterFn,
}: {
    templateResource: TemplateResource;
    fileSystem: DevkitFileSystem;
    componentSelector: string;
    inputProperty: string;
    filterFn?: (element: Element) => boolean;
}) {
    const template = getTemplateFromTemplateResource(templateResource, fileSystem);
    const templateOffset = getTemplateOffset(templateResource);

    const path = fileSystem.resolve(getPathFromTemplateResource(templateResource));
    const recorder = fileSystem.edit(path);

    const propertyOffsets = [
        ...getInputPropertyOffsets(
            template,
            inputProperty,
            [componentSelector],
            filterFn,
        ),
        ...getInputPropertyOffsets(
            template,
            `[${inputProperty}]`,
            [componentSelector],
            filterFn,
        ),
    ].map(([start, end]) => [templateOffset + start, templateOffset + end]);

    propertyOffsets.forEach(([start, end]) => {
        recorder.remove(start, end - start);
    });
}

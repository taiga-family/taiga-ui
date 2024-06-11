import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from '@taiga-ui/morph';
import type {Attribute} from 'parse5/dist/common/token';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../utils/remove-attrs';

function addModules(
    componentPath: string,
    modules: Array<{moduleName: string; moduleSpecifier: string}>,
): void {
    modules.forEach(({moduleName, moduleSpecifier}) => {
        addImportToClosestModule(componentPath, moduleName, moduleSpecifier);
    });
}

function getFallbackValue(
    textValue: string | undefined,
    fallbackValue: string | undefined,
): string {
    if (textValue) {
        return `(${textValue} | tuiInitials)`;
    }

    return textValue ? `(${textValue} | tuiInitials)` : fallbackValue || '';
}

function normalizeAttrValue(attrName: string, attrValue: string): string {
    return attrName.startsWith('[') ? attrValue : `'${attrValue}'`;
}

export function migrateAvatar({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsByTagName(template, 'tui-avatar');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        const avatarUrlAttr = attrs.find(
            attr => attr.name === '[avatarurl]' || attr.name === 'avatarurl',
        );
        const fallbackAttr = attrs.find(
            attr => attr.name === '[fallback]' || attr.name === 'fallback',
        );
        const textAttr = attrs.find(
            attr => attr.name === '[text]' || attr.name === 'text',
        );
        const roundedAttr = attrs.find(
            attr => attr.name === '[rounded]' || attr.name === 'rounded',
        );

        if ((!avatarUrlAttr && !textAttr) || !sourceCodeLocation) {
            return;
        }

        const urlAttrValue =
            avatarUrlAttr?.value &&
            normalizeAttrValue(avatarUrlAttr.name, avatarUrlAttr.value);
        const textAttrValue =
            textAttr?.value && normalizeAttrValue(textAttr.name, textAttr.value);
        const fallbackAttrValue =
            fallbackAttr?.value &&
            normalizeAttrValue(fallbackAttr.name, fallbackAttr.value);

        const insertTo =
            (sourceCodeLocation.startTag?.startOffset ?? 0) + '<tui-avatar'.length;

        if (!insertTo) {
            return;
        }

        const mainSrc =
            urlAttrValue || (textAttrValue ? `${textAttrValue} | tuiInitials` : '');
        const fallbackValue = urlAttrValue
            ? getFallbackValue(textAttrValue, fallbackAttrValue)
            : '';
        const fallbackSrc =
            urlAttrValue && fallbackValue
                ? `| tuiFallbackSrc : ${fallbackValue} | async`
                : '';

        recorder.insertRight(
            insertTo + templateOffset,
            ` [src]="${mainSrc}${fallbackSrc ? ` ${fallbackSrc}` : ''}"${
                !roundedAttr ? ' [round]="false"' : ''
            }`,
        );

        const attrsToRemove = [avatarUrlAttr, textAttr, fallbackAttr].filter(
            (attr): attr is Attribute => attr !== undefined,
        );

        const fallbackModule = !!((avatarUrlAttr && textAttrValue) || fallbackAttr);
        const initialsModule = !!textAttrValue;

        const modules = [
            ...(fallbackModule
                ? [{moduleName: 'TuiFallbackSrcPipe', moduleSpecifier: '@taiga-ui/core'}]
                : []),
            ...(initialsModule
                ? [{moduleName: 'TuiInitialsPipe', moduleSpecifier: '@taiga-ui/core'}]
                : []),
        ];

        addModules(resource.componentPath, modules);
        removeAttrs(attrsToRemove, sourceCodeLocation, recorder, templateOffset);
    });
}

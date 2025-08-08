import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type Attribute} from 'parse5/dist/common/token';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {normalizeAttrValue} from '../utils/normalize-attr-value';
import {removeAttrs} from '../utils/remove-attrs';
import {replaceSizeAttr} from './toggles/common';

const sizeMap: Record<string, string> = {
    xxs: 'xs',
    xs: 's',
    s: 'm',
    m: 'l',
    l: 'xl',
    xl: 'xxl',
    xxl: 'xxl',
};

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
    return textValue ? `(${textValue} | tuiInitials)` : fallbackValue || '';
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

    const avatarElements = findElementsByTagName(template, 'tui-avatar');
    const markerIconElements = findElementsByTagName(template, 'tui-marker-icon');

    [
        ...avatarElements.filter(
            ({attrs}) => findAttr(attrs, 'avatarurl') || findAttr(attrs, 'text'),
        ),
        ...markerIconElements,
    ].forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        replaceSizeAttr(attrs, sourceCodeLocation, recorder, templateOffset, sizeMap);
    });

    avatarElements.forEach(({attrs, sourceCodeLocation}) => {
        const avatarUrlAttr = findAttr(attrs, 'avatarurl');
        const fallbackAttr = findAttr(attrs, 'fallback');
        const textAttr = findAttr(attrs, 'text');
        const roundedAttr = findAttr(attrs, 'rounded');
        const autoColorAttr = findAttr(attrs, 'autoColor');

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
        const autoColorValue =
            autoColorAttr?.value &&
            normalizeAttrValue(autoColorAttr.name, autoColorAttr.value);

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
            }${autoColorValue === 'true' ? ` [style.background]="${textAttrValue} | tuiAutoColor"` : ''}`,
        );

        const attrsToRemove = [
            avatarUrlAttr,
            textAttr,
            fallbackAttr,
            autoColorAttr,
        ].filter((attr): attr is Attribute => attr !== undefined);

        const fallbackModule = !!((avatarUrlAttr && textAttrValue) || fallbackAttr);
        const initialsModule = !!textAttrValue;
        const autoColorModule = !!autoColorValue && autoColorValue === 'true';

        const modules = [
            ...(fallbackModule
                ? [{moduleName: 'TuiFallbackSrcPipe', moduleSpecifier: '@taiga-ui/core'}]
                : []),
            ...(initialsModule
                ? [{moduleName: 'TuiInitialsPipe', moduleSpecifier: '@taiga-ui/core'}]
                : []),
            ...(autoColorModule
                ? [{moduleName: 'TuiAutoColorPipe', moduleSpecifier: '@taiga-ui/core'}]
                : []),
        ];

        addModules(resource.componentPath, modules);
        removeAttrs(attrsToRemove, sourceCodeLocation, recorder, templateOffset);
    });
}

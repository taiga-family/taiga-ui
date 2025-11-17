import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type Attribute, type ElementLocation} from 'parse5/dist/common/token';

import {
    findElementsByTagName,
    findElementsWithAttribute,
} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {replaceTag} from '../../../utils/templates/replace-tag';
import {removeAttrs} from '../../../v4/steps/utils/remove-attrs';

export function migrateAvatarToDirective({
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
    const elementsWithAvatarAttribute = findElementsWithAttribute(template, 'tuiAvatar');
    const elementsWithBoundAvatarAttribute = findElementsWithAttribute(
        template,
        '[tuiAvatar]',
    );

    elementsWithBoundAvatarAttribute.forEach((element) => {
        const sourceCodeLocation = element.sourceCodeLocation;
        const tuiAvatarAttr = element.attrs.find(({name}) => name === '[tuiavatar]');
        const fallbackBinding = getFallbackBinding(tuiAvatarAttr?.value);

        if (!sourceCodeLocation?.startTag || !tuiAvatarAttr || !fallbackBinding) {
            return;
        }

        replaceAttribute(
            recorder,
            tuiAvatarAttr.name,
            `tuiAvatar="${fallbackBinding.fallback}"`,
            sourceCodeLocation,
            templateOffset,
        );

        recorder.insertRight(
            templateOffset + sourceCodeLocation.startTag.endOffset,
            `<img [src]="${fallbackBinding.source}" />`,
        );
    });

    elementsWithAvatarAttribute.forEach((element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        if (!sourceCodeLocation?.startTag) {
            return;
        }

        const srcAttr = getSrcAttr(element.attrs);
        const tuiAvatarAttr = findAttr(element.attrs, 'tuiAvatar');

        if (!srcAttr || tuiAvatarAttr?.value) {
            return;
        }

        replaceAttribute(
            recorder,
            tuiAvatarAttr?.name ?? 'tuiAvatar',
            getAvatarAttr(srcAttr),
            sourceCodeLocation,
            templateOffset,
        );

        removeAttrs([srcAttr], sourceCodeLocation, recorder, templateOffset);
    });

    avatarElements.forEach((element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        if (!sourceCodeLocation?.startTag) {
            return;
        }

        const srcAttr = getSrcAttr(element.attrs);
        const hasAvatarAttr = hasTuiAvatarAttr(element.attrs);
        const attrToAdd = hasAvatarAttr ? null : getAvatarAttr(srcAttr);

        replaceTag(recorder, sourceCodeLocation, 'tui-avatar', 'span', templateOffset, [
            ...(attrToAdd ? [attrToAdd] : []),
        ]);

        if (srcAttr) {
            removeAttrs([srcAttr], sourceCodeLocation, recorder, templateOffset);
        }
    });
}

function replaceAttribute(
    recorder: UpdateRecorder,
    attrName: string,
    attrToAdd: string,
    sourceCodeLocation: ElementLocation,
    templateOffset: number,
): void {
    const attrOffset = sourceCodeLocation.attrs?.[attrName];

    if (!attrOffset) {
        return;
    }

    const {startOffset, endOffset} = attrOffset;
    const offsetWithSpace = templateOffset + startOffset - 1;
    const lengthWithSpace = endOffset - startOffset + 1;

    recorder.remove(offsetWithSpace, lengthWithSpace);
    recorder.insertRight(offsetWithSpace, ` ${attrToAdd}`);
}

function hasTuiAvatarAttr(attrs: Attribute[]): boolean {
    return attrs.some(({name}) =>
        ['[(tuiavatar)]', '[tuiavatar]', 'bind-tuiavatar', 'tuiavatar'].includes(name),
    );
}

function getSrcAttr(attrs: Attribute[]): Attribute | undefined {
    return (
        findAttr(attrs, 'src') ??
        attrs.find(({name}) => name === 'bind-src' || name === '[(src)]')
    );
}

function getAvatarAttr(attr?: Attribute): string {
    if (!attr) {
        return 'tuiAvatar';
    }

    if (attr.name === 'src') {
        return attr.value ? `tuiAvatar="${attr.value}"` : 'tuiAvatar';
    }

    if (attr.name === '[src]' || attr.name === 'bind-src') {
        return attr.value ? `[tuiAvatar]="${attr.value}"` : '[tuiAvatar]';
    }

    if (attr.name === '[(src)]') {
        return attr.value ? `[(tuiAvatar)]="${attr.value}"` : '[(tuiAvatar)]';
    }

    return 'tuiAvatar';
}

function getFallbackBinding(value?: string): {source: string; fallback: string} | null {
    if (!value) {
        return null;
    }

    const fallbackBindingRegexp =
        /^(?<source>[^|]+?)\s*\|\s*tuiFallbackSrc\s*:\s*(['"])(?<fallback>[^'"]+)\2(?:\s*\|\s*async)?\s*$/;
    const match = fallbackBindingRegexp.exec(value);

    if (!match?.groups) {
        return null;
    }

    return {
        source: match.groups.source.trim(),
        fallback: match.groups.fallback,
    };
}

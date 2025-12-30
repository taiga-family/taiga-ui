import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes, type Token} from 'parse5';

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

type Attribute = Token.Attribute;

type Element = DefaultTreeAdapterTypes.Element;

type ElementLocation = Token.ElementLocation;

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

    elementsWithBoundAvatarAttribute.forEach((element: Element) => {
        const loc = element.sourceCodeLocation;

        if (!loc?.startTag) {
            return;
        }

        const tuiAvatarAttr = element.attrs.find((a) => a.name === '[tuiavatar]');
        const fallbackBinding = getFallbackBinding(tuiAvatarAttr?.value);

        if (!tuiAvatarAttr || !fallbackBinding) {
            return;
        }

        replaceAttribute(
            recorder,
            tuiAvatarAttr.name,
            `tuiAvatar="${fallbackBinding.fallback}"`,
            loc,
            templateOffset,
        );

        recorder.insertRight(
            templateOffset + loc.startTag.endOffset,
            `<img [src]="${fallbackBinding.source}" />`,
        );
    });

    elementsWithAvatarAttribute.forEach((element: Element) => {
        const loc = element.sourceCodeLocation;

        if (!loc?.startTag) {
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
            loc,
            templateOffset,
        );

        removeAttrs([srcAttr], loc, recorder, templateOffset);
    });

    avatarElements.forEach((element: Element) => {
        const loc = element.sourceCodeLocation;

        if (!loc?.startTag) {
            return;
        }

        const srcAttr = getSrcAttr(element.attrs);
        const hasAvatarAttr = hasTuiAvatarAttr(element.attrs);
        const attrToAdd = hasAvatarAttr ? null : getAvatarAttr(srcAttr);
        const raw = template.slice(loc.startTag.startOffset, loc.startTag.endOffset);
        const isSelfClosing = raw.trimEnd().endsWith('/>');

        if (isSelfClosing) {
            const start = loc.startTag;
            const startTagEnd = templateOffset + start.endOffset;

            recorder.remove(startTagEnd - 2, 2);
            recorder.insertRight(startTagEnd - 2, '>');
            recorder.insertRight(startTagEnd - 1, '</span>');
        }

        replaceTag(
            recorder,
            loc,
            'tui-avatar',
            'span',
            templateOffset,
            attrToAdd ? [attrToAdd] : [],
        );

        if (srcAttr) {
            removeAttrs([srcAttr], loc, recorder, templateOffset);
        }
    });
}

function replaceAttribute(
    recorder: UpdateRecorder,
    attrName: string,
    attrToAdd: string,
    loc: ElementLocation,
    templateOffset: number,
): void {
    const attrOffset = loc.attrs?.[attrName];

    if (!attrOffset) {
        return;
    }

    const {startOffset, endOffset} = attrOffset;

    recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    recorder.insertRight(templateOffset + startOffset - 1, ` ${attrToAdd}`);
}

function hasTuiAvatarAttr(attrs: Attribute[]): boolean {
    return attrs.some(({name}) =>
        ['[(tuiavatar)]', '[tuiavatar]', 'tuiavatar'].includes(name),
    );
}

function getSrcAttr(attrs: Attribute[]): Attribute | undefined {
    return (
        findAttr(attrs, 'src') ??
        attrs.find((a) => a.name === '[(src)]') ??
        attrs.find((a) => a.name === '[src]')
    );
}

function getAvatarAttr(attr?: Attribute): string {
    if (!attr) {
        return 'tuiAvatar';
    }

    const map: Record<string, (value?: string) => string> = {
        src: (value) => (value ? `tuiAvatar="${value}"` : 'tuiAvatar'),
        '[src]': (value) => (value ? `[tuiAvatar]="${value}"` : '[tuiAvatar]'),
        '[(src)]': (value) => (value ? `[(tuiAvatar)]="${value}"` : '[(tuiAvatar)]'),
    };

    const mapper = map[attr.name];

    return mapper?.(attr.value) ?? 'tuiAvatar';
}

function getFallbackBinding(value?: string): {source: string; fallback: string} | null {
    if (!value) {
        return null;
    }

    const fallbackRegExp =
        /^([^|]+?)\s*\|\s*tuiFallbackSrc\s*:\s*(['"])([^'"]+)\2(?:\s*\|\s*async)?\s*$/;

    const match = fallbackRegExp.exec(value);

    if (!match) {
        return null;
    }

    const [, source, , fallback] = match;

    return {
        source: source?.trim() ?? '',
        fallback: fallback ?? '',
    };
}

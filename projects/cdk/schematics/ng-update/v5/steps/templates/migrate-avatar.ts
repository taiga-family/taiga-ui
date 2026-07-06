import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes, type Token} from 'parse5';

import {TODO_MARK} from '../../../../utils/insert-todo';
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
import {removeAttrs} from '../../../utils/remove-attrs';
import {replaceTag} from '../../../utils/templates/replace-tag';

type Attribute = Token.Attribute;

type Element = DefaultTreeAdapterTypes.Element;

type ElementLocation = Token.ElementLocation;

const SAFE_RESOURCE_URL_TODO =
    'tuiAvatar accepts only a string (icon name or URL). If this value is a SafeResourceUrl or another non-string image source, render it via an inner <img> instead: <span tuiAvatar><img [src]="..." alt="" /></span>.';

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

        const tuiAvatarAttr = element.attrs.find(
            (a) => a.name === '[tuiAvatar]'.toLowerCase(),
        );

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

        maybeInsertSafeResourceUrlTodo(recorder, loc, templateOffset, srcAttr);

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

        if (!hasAvatarAttr) {
            maybeInsertSafeResourceUrlTodo(recorder, loc, templateOffset, srcAttr);
        }

        replaceTag(
            recorder,
            loc,
            'tui-avatar',
            'span',
            template,
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
        ['[(tuiAvatar)]', '[tuiAvatar]', 'tuiAvatar']
            .map((attr) => attr.toLowerCase())
            .includes(name),
    );
}

/**
 * A raw dynamic `[src]`/`[(src)]` becomes `[tuiAvatar]="..."`, which only accepts a
 * string. A `SafeResourceUrl` (or any non-string image) would break at build time, and
 * the bound type cannot be inferred from the template — so flag it with a TODO. Icon and
 * fallback bindings (`| tuiIcon`, `| tuiFallbackSrc`) are known-string flows and skipped.
 */
function maybeInsertSafeResourceUrlTodo(
    recorder: UpdateRecorder,
    loc: ElementLocation,
    templateOffset: number,
    srcAttr?: Attribute,
): void {
    if (!srcAttr || !isRawDynamicSrc(srcAttr)) {
        return;
    }

    recorder.insertLeft(
        templateOffset + loc.startOffset,
        `<!-- ${TODO_MARK} ${SAFE_RESOURCE_URL_TODO} -->\n`,
    );
}

function isRawDynamicSrc(attr: Attribute): boolean {
    const isBinding = attr.name === '[src]' || attr.name === '[(src)]';

    return isBinding && !/\|\s*(?:tuiIcon|tuiFallbackSrc)\b/.test(attr.value);
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
        /^([^|]*\S)\s*\|\s*tuiFallbackSrc\s*:\s*(['"])([^'"]+)\2(?:\s*\|\s*async)?\s*$/;

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

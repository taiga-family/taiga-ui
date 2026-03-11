import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {findElementsInTemplateByFn} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

// cspell:disable
const SIDEBAR_ATTR = '*tuisidebar';
const SIDEBAR_DIRECTION_ATTRS = new Set(['[tuisidebardirection]', 'tuisidebardirection']);
const SIDEBAR_AUTO_WIDTH_ATTRS = new Set([
    '[tuisidebarautowidth]',
    'tuisidebarautowidth',
]);
// cspell:enable

const AUTO_WIDTH_MIGRATION_COMMENT =
    '<!-- TODO: (Taiga UI migration) tuiSidebarAutoWidth has no equivalent in TuiDrawer, adjust layout manually -->\n';
const DYNAMIC_DIRECTION_MIGRATION_COMMENT =
    '<!-- TODO: (Taiga UI migration) Update direction variable values: left->start, right->end -->\n';

interface ParsedBinding {
    binding: string;
    direction: string | null;
    autoWidth: string | null;
}

interface MappedDirection {
    attr: string;
    isDynamic: boolean;
}

interface Replacement {
    startOffset: number;
    endOffset: number;
    replacement: string;
}

export function migrateSidebar({
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

    const elements = findElementsInTemplateByFn(template, (el) =>
        el.attrs?.some((attr) => attr.name === SIDEBAR_ATTR),
    );

    const replacements = elements
        .map((element) => buildReplacement(template, element))
        .filter((x): x is Replacement => Boolean(x))
        .sort((a, b) => b.startOffset - a.startOffset);

    replacements.forEach(({startOffset, endOffset, replacement}) => {
        recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        recorder.insertRight(templateOffset + startOffset, replacement);
    });
}

function buildReplacement(template: string, element: Element): Replacement | null {
    const loc = element.sourceCodeLocation;
    const startTag = loc?.startTag;

    if (!startTag) {
        return null;
    }

    const sidebarAttr = element.attrs.find((attr) => attr.name === SIDEBAR_ATTR);

    if (!sidebarAttr) {
        return null;
    }

    const parsed = parseBinding(sidebarAttr.value);
    const mappedDirection = mapDirection(parsed.direction);
    const hasAutoWidth = parsed.autoWidth !== null;

    const otherAttrs = element.attrs
        .filter(
            ({name}) =>
                name !== SIDEBAR_ATTR &&
                !SIDEBAR_DIRECTION_ATTRS.has(name) &&
                !SIDEBAR_AUTO_WIDTH_ATTRS.has(name),
        )
        .map(({name, value}) => (value ? `${name}="${value}"` : name));

    const tuiPopupAttr = `*tuiPopup="${parsed.binding}"`;
    const newAttrs = [
        tuiPopupAttr,
        ...otherAttrs,
        ...(mappedDirection ? [mappedDirection.attr] : []),
    ];
    const attrsStr = newAttrs.length > 0 ? ` ${newAttrs.join(' ')}` : '';

    const comments =
        (hasAutoWidth ? AUTO_WIDTH_MIGRATION_COMMENT : '') +
        (mappedDirection?.isDynamic ? DYNAMIC_DIRECTION_MIGRATION_COMMENT : '');

    const endTag = loc?.endTag;

    if (!endTag) {
        return {
            startOffset: startTag.startOffset,
            endOffset: startTag.endOffset,
            replacement: `${comments}<tui-drawer${attrsStr}></tui-drawer>`,
        };
    }

    const innerContent = template.slice(startTag.endOffset, endTag.startOffset);

    return {
        startOffset: startTag.startOffset,
        endOffset: endTag.endOffset,
        replacement: `${comments}<tui-drawer${attrsStr}>${innerContent}</tui-drawer>`,
    };
}

function parseBinding(value: string): ParsedBinding {
    const parts = value.split(';').map((s) => s.trim());
    const binding = parts[0]?.trim() ?? '';
    let direction: string | null = null;
    let autoWidth: string | null = null;

    for (const part of parts.slice(1)) {
        const colonIdx = part.indexOf(':');

        if (colonIdx === -1) {
            continue;
        }

        const key = part.slice(0, colonIdx).trim().toLowerCase();
        const val = part.slice(colonIdx + 1).trim();

        if (key === 'direction') {
            direction = val;
            // cspell:disable-next-line
        } else if (key === 'autowidth') {
            autoWidth = val;
        }
    }

    return {binding, direction, autoWidth};
}

function mapDirection(direction: string | null): MappedDirection | null {
    if (!direction) {
        return null;
    }

    if (direction === "'left'" || direction === '"left"') {
        return {attr: 'direction="start"', isDynamic: false};
    }

    if (direction === "'right'" || direction === '"right"') {
        return {attr: 'direction="end"', isDynamic: false};
    }

    return {attr: `[direction]="${direction}"`, isDynamic: true};
}

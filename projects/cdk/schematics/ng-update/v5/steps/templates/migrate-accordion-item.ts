import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

function formatBlock(content: string, indent: string): string {
    if (!content) {
        return '';
    }

    const lines = content.split('\n');
    const indented = lines.map((line) => `${indent}  ${line.trim()}`).join('\n');

    return `\n${indented}\n${indent}`;
}

function findContentTemplate(item: Element): Element | null {
    return (
        (item.childNodes?.find(
            (node: ChildNode) =>
                'tagName' in node &&
                node.tagName === 'ng-template' &&
                node.attrs?.some(
                    (attr) => attr.name === 'tuiAccordionItemContent'.toLowerCase(),
                ),
        ) as Element | null) ?? null
    );
}

export function migrateAccordionItem({
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
    const accordionItems = findElementsByTagName(template, 'tui-accordion-item');

    accordionItems
        .slice()
        .sort(
            (first, second) =>
                (second.sourceCodeLocation?.startOffset ?? 0) -
                (first.sourceCodeLocation?.startOffset ?? 0),
        )
        .forEach((item) => {
            const location = item.sourceCodeLocation;
            const startTag = location?.startTag;
            const endTag = location?.endTag;
            const contentTemplate = findContentTemplate(item);
            const contentLocation = contentTemplate?.sourceCodeLocation;

            if (
                !startTag ||
                !endTag ||
                !contentLocation?.startTag ||
                !contentLocation?.endTag
            ) {
                return;
            }

            const titleRaw = template
                .slice(startTag.endOffset, contentLocation.startTag.startOffset)
                .trim();
            const contentRaw = template
                .slice(
                    contentLocation.startTag.endOffset,
                    contentLocation.endTag.startOffset,
                )
                .trim();

            const lineStart = template.lastIndexOf('\n', startTag.startOffset - 1) + 1;
            const indent = template.slice(lineStart, startTag.startOffset);
            const formattedContent = formatBlock(contentRaw, indent);
            const button = `${indent}<button tuiAccordion>${titleRaw}</button>\n`;
            const expand = `${indent}<tui-expand>${formattedContent}</tui-expand>`;
            const replacement = `${button}${expand}`;

            recorder.remove(templateOffset + lineStart, endTag.endOffset - lineStart);
            recorder.insertRight(templateOffset + lineStart, replacement);
        });
}

import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';
import {replaceTag} from '../../../utils/templates/replace-tag';

type Element = DefaultTreeAdapterTypes.Element;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

const SELECT_MIGRATION_TODO =
    '<!-- TODO: (Taiga UI migration) tui-select was partially migrated. Complete migration manually. See examples: https://taiga-ui.dev/components/select -->\n';
const VALUE_CONTENT_ATTR = 'valueContent';
const CONTENT_ATTR = 'content';
const TEXTFIELD_LABEL_OUTSIDE_ATTR = 'tuiTextfieldLabelOutside';

export function migrateSelect({
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
    const elements = findElementsByTagName(template, 'tui-select');

    elements.forEach((element) => {
        const startOffset = element.sourceCodeLocation?.startOffset;

        if (typeof startOffset === 'number') {
            recorder.insertLeft(templateOffset + startOffset, SELECT_MIGRATION_TODO);
        }

        renameAttr(
            recorder,
            templateOffset,
            element,
            `[${VALUE_CONTENT_ATTR}]`,
            `[${CONTENT_ATTR}]`,
        );
        renameAttr(recorder, templateOffset, element, VALUE_CONTENT_ATTR, CONTENT_ATTR);
        removeAttr(
            recorder,
            templateOffset,
            element,
            `[${TEXTFIELD_LABEL_OUTSIDE_ATTR}]`,
            template,
        );
        removeAttr(
            recorder,
            templateOffset,
            element,
            TEXTFIELD_LABEL_OUTSIDE_ATTR,
            template,
        );

        const hasChevron = element.attrs.some(
            (attr) => attr.name === 'tuiChevron'.toLowerCase(),
        );

        replaceTag(
            recorder,
            element.sourceCodeLocation,
            'tui-select',
            'tui-textfield',
            template,
            templateOffset,
            hasChevron ? [] : ['tuiChevron'],
        );

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        inputs.forEach((input) => {
            input.attrs.forEach((attr) => {
                if (!/^tuitextfieldlegacy$|^tuitextfield$/i.test(attr.name)) {
                    return;
                }

                const {startOffset = 0, endOffset = 0} =
                    input.sourceCodeLocation?.attrs?.[attr.name] ?? {};

                recorder.remove(templateOffset + startOffset, endOffset - startOffset);
                recorder.insertRight(templateOffset + startOffset, 'tuiSelect');
            });
        });
    });
}

function renameAttr(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    from: string,
    to: string,
): void {
    const attrLocation = element.sourceCodeLocation?.attrs?.[from.toLowerCase()];

    if (!attrLocation) {
        return;
    }

    recorder.remove(templateOffset + attrLocation.startOffset, from.length);
    recorder.insertRight(templateOffset + attrLocation.startOffset, to);
}

function removeAttr(
    recorder: UpdateRecorder,
    templateOffset: number,
    element: Element,
    name: string,
    template: string,
): void {
    const attrLocation = element.sourceCodeLocation?.attrs?.[name.toLowerCase()];

    if (!attrLocation) {
        return;
    }

    const lineStart = template.lastIndexOf('\n', attrLocation.startOffset) + 1;
    const lineEnd = template.indexOf('\n', attrLocation.endOffset);
    const attrText = template.slice(attrLocation.startOffset, attrLocation.endOffset);
    const lineText = lineEnd === -1 ? '' : template.slice(lineStart, lineEnd);

    if (lineText.trim() === attrText.trim() && lineEnd !== -1) {
        recorder.remove(templateOffset + lineStart, lineEnd - lineStart + 1);

        return;
    }

    recorder.remove(
        templateOffset + attrLocation.startOffset - 1,
        attrLocation.endOffset - attrLocation.startOffset + 1,
    );
}

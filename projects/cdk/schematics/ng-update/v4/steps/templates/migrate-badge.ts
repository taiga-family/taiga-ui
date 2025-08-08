import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type Attribute, type ElementLocation} from 'parse5/dist/common/token';
import {type Element} from 'parse5/dist/tree-adapters/default';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {replaceSizeAttr} from './toggles/common';

const badgeSizeMap = {
    xs: 's',
    s: 'm',
    m: 'l',
    l: 'xl',
};

export function migrateBadge({
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

    const elements = findElementsByTagName(template, 'tui-badge');

    elements.forEach(({attrs, sourceCodeLocation, childNodes}) => {
        if (!sourceCodeLocation) {
            return;
        }

        replaceSizeAttr(
            attrs,
            sourceCodeLocation,
            recorder,
            templateOffset,
            badgeSizeMap,
        );

        const valueAttr = findAttr(attrs, 'value');

        // migration for icon-only badges
        if (!valueAttr) {
            addTodo(recorder, sourceCodeLocation, templateOffset);

            return;
        }

        const svg = (childNodes as Element[])?.find(
            (node) => node.nodeName === 'tui-svg',
        );

        if (svg) {
            migrateIcon({svg, sourceCodeLocation, recorder, templateOffset});
        }

        migrateBadgeValue({
            valueAttr,
            sourceCodeLocation,
            recorder,
            templateOffset,
        });
    });
}

function migrateIcon({
    svg,
    sourceCodeLocation,
    recorder,
    templateOffset,
}: {
    svg: Element;
    sourceCodeLocation: ElementLocation;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const src = findAttr(svg.attrs, 'src');
    const srcValue = src?.value;

    if (!srcValue) {
        return;
    }

    const insertTo = templateOffset + (sourceCodeLocation?.startTag?.endOffset || 0) - 1;

    recorder.insertRight(
        insertTo,
        `${src?.name === 'src' ? 'iconStart' : '[iconStart]'}="${srcValue}"`,
    );
    recorder.remove(
        svg.sourceCodeLocation?.startOffset || 0,
        (svg.sourceCodeLocation?.endOffset || 0) -
            (svg.sourceCodeLocation?.startOffset || 0),
    );
}

function migrateBadgeValue({
    valueAttr,
    sourceCodeLocation,
    recorder,
    templateOffset,
}: {
    valueAttr: Attribute;
    sourceCodeLocation: ElementLocation;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const attrValue = valueAttr?.value;
    const insertTo = sourceCodeLocation?.startTag?.endOffset ?? 0;
    const selfClosing = !sourceCodeLocation?.endTag;

    if (!attrValue || !insertTo) {
        return;
    }

    const closeTag = selfClosing ? '</tui-badge>' : '';

    recorder.insertRight(
        insertTo + templateOffset,
        valueAttr.name === 'value'
            ? `${attrValue}${closeTag}`
            : `{{ ${attrValue} }}${closeTag}`,
    );

    const attrOffset = sourceCodeLocation?.attrs?.[valueAttr.name];

    if (attrOffset) {
        const {startOffset, endOffset} = attrOffset;

        recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    }

    if (selfClosing) {
        recorder.remove((sourceCodeLocation.startTag?.endOffset ?? 2) - 2, 1);
    }
}

function addTodo(
    recorder: UpdateRecorder,
    sourceCodeLocation: ElementLocation,
    templateOffset: number,
): void {
    recorder.insertRight(
        templateOffset + (sourceCodeLocation?.startTag?.startOffset ?? 0),
        '<!-- TODO: (Taiga UI migration) use "<tui-icon>" with "tuiBadge" directive for icon-only badges instead -->\n',
    );
}

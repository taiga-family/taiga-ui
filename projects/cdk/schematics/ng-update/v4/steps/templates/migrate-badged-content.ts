import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Attribute, ElementLocation} from 'parse5/dist/common/token';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../utils/remove-attrs';

export function migrateBadgedContent({
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

    const elements = findElementsByTagName(template, 'tui-badged-content');

    elements.forEach(({attrs, sourceCodeLocation}) => {
        if (!sourceCodeLocation) {
            return;
        }

        const colorBottomAttr = findAttr(attrs, 'colorbottom');
        const colorTopAttr = findAttr(attrs, 'colortop');
        const contentBottomAttr = findAttr(attrs, 'contentbottom');
        const contentTopAttr = findAttr(attrs, 'contenttop');
        const sizeAttr = findAttr(attrs, 'size');
        const rounded = findAttr(attrs, 'rounded');

        const size = sizeAttr?.value || 'm';

        if (!contentBottomAttr) {
            migrateColor({
                attr: colorBottomAttr,
                sourceCodeLocation,
                recorder,
                templateOffset,
                slot: 'bottom',
            });
        }

        if (!contentTopAttr) {
            migrateColor({
                attr: colorTopAttr,
                sourceCodeLocation,
                recorder,
                templateOffset,
                slot: 'top',
            });
        }

        migrateContent({
            attr: contentTopAttr,
            colorAttr: colorTopAttr,
            sourceCodeLocation,
            recorder,
            templateOffset,
            slot: 'top',
            size,
        });

        migrateContent({
            attr: contentBottomAttr,
            colorAttr: colorBottomAttr,
            sourceCodeLocation,
            recorder,
            templateOffset,
            slot: 'bottom',
            size,
        });

        if (!rounded || rounded.value === 'true') {
            const insertTo = sourceCodeLocation.startTag?.endOffset ?? 0;

            recorder.insertRight(
                insertTo + templateOffset - 1,
                '[style.--tui-radius.%]="50"',
            );
        }

        const attrsToRemove = [
            colorBottomAttr,
            colorTopAttr,
            contentTopAttr,
            contentBottomAttr,
            sizeAttr,
            rounded,
        ].filter((attr): attr is Attribute => attr !== undefined);

        removeAttrs(attrsToRemove, sourceCodeLocation, recorder, templateOffset);
    });
}

function migrateColor({
    attr,
    sourceCodeLocation,
    recorder,
    templateOffset,
    slot,
}: {
    attr: Attribute | undefined;
    sourceCodeLocation: ElementLocation;
    recorder: UpdateRecorder;
    templateOffset: number;
    slot: 'bottom' | 'top';
}): void {
    if (!attr) {
        return;
    }

    const value = attr.value;
    const insertTo = sourceCodeLocation.startTag?.endOffset ?? 0;

    recorder.insertRight(
        insertTo + templateOffset + 1,
        `<tui-badge-notification
        size="xs"
        tuiSlot="${slot}"
        [style.color]="'${value}'"
    ></tui-badge-notification>\n`,
    );
}

function migrateContent({
    attr,
    colorAttr,
    sourceCodeLocation,
    recorder,
    templateOffset,
    slot,
    size,
}: {
    attr: Attribute | undefined;
    colorAttr: Attribute | undefined;
    sourceCodeLocation: ElementLocation;
    recorder: UpdateRecorder;
    templateOffset: number;
    slot: 'bottom' | 'top';
    size: string;
}): void {
    if (!attr) {
        return;
    }

    const value = attr.value;
    const colorAttrValue = colorAttr?.value;
    const insertTo = sourceCodeLocation.startTag?.endOffset ?? 0;

    if (value.startsWith('tuiIcon')) {
        recorder.insertRight(
            insertTo + templateOffset,
            `<tui-icon
        appearance="accent"
        icon="${value}"
        size="${size}"
        tuiBadge
        tuiSlot="${slot}"
        ${colorAttr ? `[style.color]="'${colorAttrValue}'"` : 'appearance="success"'}
    ></tui-icon>\n`,
        );
    } else if (Number.isNaN(Number(value))) {
        recorder.insertRight(
            templateOffset + (sourceCodeLocation?.startTag?.startOffset ?? 0),
            '<!-- Taiga migration TODO: contentTop and contentBottom inputs has been removed. Use ng-content, see taiga-ui.dev/components/badged-content  -->\n',
        );
    } else {
        recorder.insertRight(
            insertTo + templateOffset,
            `<tui-badge-notification
        size="${size}"
        tuiSlot="${slot}"
        ${colorAttr ? `[style.color]="'${colorAttrValue}'"` : ''}
    ></tui-badge-notification>\n`,
        );
    }
}

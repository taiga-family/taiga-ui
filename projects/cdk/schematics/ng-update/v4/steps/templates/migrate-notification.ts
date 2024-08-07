import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import {getPackageJsonDependency} from 'ng-morph';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {
    findElementsByTagNames,
    findElementsWithAttributeOnTag,
} from '../../../../utils/templates/elements';
import {findAttr} from '../../../../utils/templates/inputs';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';

export function migrateNotification({
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

    const elements = [
        ...findElementsByTagNames(template, ['tui-notification']),
        ...findElementsWithAttributeOnTag(template, ['tuiNotification'], ['button', 'a']),
    ];

    elements.forEach(({attrs, sourceCodeLocation, tagName, childNodes}) => {
        const sizeAttr = findAttr(attrs, 'size');
        const hasIconAttr = findAttr(attrs, 'hasIcon');
        const hideCloseAttr = findAttr(attrs, 'hideClose');
        const closeListener = findAttr(attrs, '(close)');

        const {startTag, endTag} = sourceCodeLocation || {};
        const hideCloseAttrLocation =
            sourceCodeLocation?.attrs?.[hideCloseAttr?.name || ''];
        const hasIconAttrLocation = sourceCodeLocation?.attrs?.[hasIconAttr?.name || ''];

        if (!sizeAttr) {
            recorder.insertRight(
                templateOffset + (startTag?.startOffset ?? 0) + `<${tagName}`.length,
                ' size="m"',
            );
        }

        if (closeListener) {
            const hasProprietaryPackages = !!getPackageJsonDependency(
                fileSystem.tree,
                '@taiga-ui/proprietary-core',
            );

            addImportToClosestModule(resource.componentPath, 'NgIf', '@angular/common');
            const ifCondition = hideCloseAttr ? ` *ngIf="!${hideCloseAttr.value}"` : '';
            const closeIconName = hasProprietaryPackages
                ? '@tui.pragmatic.small.cross'
                : '@tui.x';
            const closeButtonTemplate = ` <button${ifCondition} tuiIconButton iconStart="${closeIconName}"></button>`;

            recorder.insertRight(
                templateOffset + (endTag?.startOffset ?? 0),
                closeButtonTemplate,
            );

            if (hideCloseAttrLocation) {
                const {startOffset, endOffset} = hideCloseAttrLocation;

                recorder.remove(templateOffset + startOffset, endOffset - startOffset);
            }
        }

        if (hasIconAttr && hasIconAttrLocation) {
            const {startOffset, endOffset} = hasIconAttrLocation;
            const attrOffset = templateOffset + startOffset;
            const attrLength = endOffset - startOffset;

            switch (hasIconAttr.value) {
                case 'false':
                    recorder.remove(attrOffset, attrLength);
                    recorder.insertRight(attrOffset, 'icon=""');
                    break;
                case 'true':
                    recorder.remove(attrOffset, attrLength);
                    break;
                default:
                    recorder.insertLeft(
                        templateOffset + (startTag?.startOffset || 0),
                        '<!-- TODO: (Taiga UI migration) "hasIcon" is deleted. Use icon="" to hide icon. Or pass TUI_NOTIFICATION_DEFAULT_OPTIONS["icon"] to show it again. Learn more: https://taiga-ui.dev/components/notification -->\n',
                    );
            }
        }

        if (childNodes.length > 1 && startTag && endTag) {
            recorder.insertRight(templateOffset + startTag.endOffset, '<div>');
            recorder.insertLeft(templateOffset + endTag.startOffset, '</div>');
        }
    });
}

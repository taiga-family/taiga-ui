import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';

import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {replaceTag} from '../../../utils/templates/replace-tag';

const NOTIFICATION_ATTRIBUTE = [
    'tuinotification',
    '[tuinotification]',
    '[(tuinotification)]',
];

export function migrateTuiNotification({
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
    const notifications = findElementsByTagName(template, 'tui-notification');

    notifications.forEach((element) => {
        const location = element.sourceCodeLocation;
        const startTag = location?.startTag;

        if (!startTag) {
            return;
        }

        const attrsToAdd = element.attrs.some(({name}) =>
            NOTIFICATION_ATTRIBUTE.includes(name),
        )
            ? []
            : ['tuiNotification'];

        const raw = template.slice(startTag.startOffset, startTag.endOffset);
        const isSelfClosing = raw.trimEnd().endsWith('/>');

        if (isSelfClosing) {
            const old = template.slice(startTag.startOffset, startTag.endOffset);

            const attrs = element.attrs
                .map((attr) => (NOTIFICATION_ATTRIBUTE.includes(attr.name) ? null : attr))
                .filter(Boolean)
                .map((attr) => `${attr?.name}="${attr?.value ?? ''}"`)
                .join(' ');

            const extraAttr = element.attrs.some(({name}) =>
                NOTIFICATION_ATTRIBUTE.includes(name),
            )
                ? ''
                : ' tuiNotification';

            const newTag = `<div${extraAttr}${attrs ? ` ${attrs}` : ''}></div>`;

            recorder.remove(templateOffset + startTag.startOffset, old.length);
            recorder.insertRight(templateOffset + startTag.startOffset, newTag);

            return;
        }

        replaceTag(
            recorder,
            location,
            'tui-notification',
            'div',
            template,
            false,
            templateOffset,
            attrsToAdd,
        );
    });
}

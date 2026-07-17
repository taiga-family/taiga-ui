import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {TODO_MARK} from '../../../../utils/insert-todo';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../../../utils/remove-attrs';

type Element = DefaultTreeAdapterTypes.Element;

// parse5 lowercases attribute names, so match against lowercased forms.
const MONO_HANDLER_ATTRS = ['monoHandler', '[monoHandler]'].map((name) =>
    name.toLowerCase(),
);

const MONO_HANDLER_TODO =
    '`monoHandler` was removed from <tui-thumbnail-card> in v5. The payment-system logo now always renders from the configured icon set — control mono vs colored icons through TUI_PAYMENT_SYSTEM_ICONS (the `icons` field of TUI_THUMBNAIL_CARD_OPTIONS) instead. See https://taiga-ui.dev/components/thumbnail-card';

export function migrateThumbnailCardMonoHandler({
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

    findElementsByTagName(template, 'tui-thumbnail-card').forEach((element: Element) => {
        const loc = element.sourceCodeLocation;

        if (!loc?.startTag) {
            return;
        }

        const monoHandlerAttrs = element.attrs.filter((attr) =>
            MONO_HANDLER_ATTRS.includes(attr.name),
        );

        if (!monoHandlerAttrs.length) {
            return;
        }

        recorder.insertLeft(
            templateOffset + loc.startOffset,
            `<!-- ${TODO_MARK} ${MONO_HANDLER_TODO} -->\n`,
        );

        removeAttrs(monoHandlerAttrs, loc, recorder, templateOffset);
    });
}

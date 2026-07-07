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

/**
 * The legacy `<tui-tooltip>` component is removed in v5; its behavior now lives on the
 * `tui-icon[tuiTooltip]` directive. Each legacy input maps onto the directive/hint input
 * that `<tui-tooltip>` used to forward internally.
 */
const ATTR_RENAMES = new Map<string, string>([
    ['appearance', 'tuiHintAppearance'],
    ['content', 'tuiTooltip'],
    ['context', 'tuiHintContext'],
    ['describeId', 'tuiTooltipDescribe'],
    ['direction', 'tuiHintDirection'],
    ['hideDelay', 'tuiHintHideDelay'],
    ['showDelay', 'tuiHintShowDelay'],
]);

const RENAME_BY_LOWER = new Map(
    [...ATTR_RENAMES].flatMap(([from, to]) => [
        [from.toLowerCase(), to],
        [`[${from.toLowerCase()}]`, `[${to}]`],
    ]),
);

export function migrateTooltip({
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
    const elements = findElementsByTagName(template, 'tui-tooltip');

    elements.forEach((element: Element) => {
        for (const attr of element.attrs) {
            const newName = RENAME_BY_LOWER.get(attr.name.toLowerCase());

            if (!newName) {
                continue;
            }

            const loc = element.sourceCodeLocation?.attrs?.[attr.name];

            if (!loc) {
                continue;
            }

            const original = template.slice(loc.startOffset, loc.endOffset);
            const separatorIndex = original.indexOf('=');
            const rest = separatorIndex === -1 ? '' : original.slice(separatorIndex);

            recorder.remove(templateOffset + loc.startOffset, original.length);
            recorder.insertRight(templateOffset + loc.startOffset, `${newName}${rest}`);
        }

        replaceTag(
            recorder,
            element.sourceCodeLocation,
            'tui-tooltip',
            'tui-icon',
            template,
            templateOffset,
        );
    });
}

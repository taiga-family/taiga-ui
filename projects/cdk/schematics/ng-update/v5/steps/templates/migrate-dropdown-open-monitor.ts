import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../../../utils/remove-attrs';

type Element = DefaultTreeAdapterTypes.Element;

const MONITOR_ATTRS = ['tuiDropdownOpenMonitor', '[tuiDropdownOpenMonitor]'];

// parse5 lowercases attribute names, so match against lowercased forms.
const MONITOR_ATTRS_LOWER = MONITOR_ATTRS.map((name) => name.toLowerCase());

/**
 * `[tuiDropdownOpenMonitor]` was a selector-only compatibility shim bridging the legacy
 * and native dropdown open state. v5 dropdowns handle this natively (the schematic maps
 * `tuiDropdownOpen` -> `tuiDropdownAuto`), so the marker is redundant — drop it.
 */
export function migrateDropdownOpenMonitor({
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

    findElementsWithAttributeOnTag(template, MONITOR_ATTRS, ['*']).forEach(
        (element: Element) => {
            const loc = element.sourceCodeLocation;

            if (!loc?.startTag) {
                return;
            }

            const monitorAttrs = element.attrs.filter((attr) =>
                MONITOR_ATTRS_LOWER.includes(attr.name),
            );

            removeAttrs(monitorAttrs, loc, recorder, templateOffset);
        },
    );
}

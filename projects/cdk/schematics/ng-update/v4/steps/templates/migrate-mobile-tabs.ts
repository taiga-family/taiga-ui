import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Element} from 'parse5/dist/tree-adapters/default';

import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';
import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {replaceTag} from '../../../utils/templates';
import {removeAttrs} from '../utils/remove-attrs';

const TABS_TAG_NAME = 'tui-tabs';
const SEGMENTED_TAG_NAME = 'tui-segmented';
const TAB_ATTRIBUTE_NAME = 'tuiTab'.toLowerCase();
const MOBILE_TABS_ATTRIBUTE_NAME = 'tuiMobileTabs'.toLowerCase();

export function migrateMobileTabs({
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

    const elements = findElementsWithAttributeOnTag(
        template,
        [MOBILE_TABS_ATTRIBUTE_NAME],
        [TABS_TAG_NAME],
    );

    if (elements.length > 0) {
        addImportToClosestModule(resource.componentPath, 'TuiSegmented', '@taiga-ui/kit');
    }

    elements.forEach((element) => {
        replaceTag(
            recorder,
            element.sourceCodeLocation,
            TABS_TAG_NAME,
            SEGMENTED_TAG_NAME,
            templateOffset,
        );

        removeMobileTabsAttribute(element, recorder, templateOffset);

        element.childNodes
            .filter(isElement)
            .forEach((element) => removeTabAttribute(element, recorder, templateOffset));
    });
}

function removeTabAttribute(
    {attrs, sourceCodeLocation}: Element,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    const tabAttr = attrs.find((attr) => attr.name === TAB_ATTRIBUTE_NAME);

    if (!tabAttr || !sourceCodeLocation) {
        return;
    }

    removeAttrs([tabAttr], sourceCodeLocation, recorder, templateOffset);
}

function removeMobileTabsAttribute(
    {attrs, sourceCodeLocation}: Element,
    recorder: UpdateRecorder,
    templateOffset: number,
): void {
    const mobileTabsAttr = attrs.find((attr) => attr.name === MOBILE_TABS_ATTRIBUTE_NAME);

    if (!mobileTabsAttr || !sourceCodeLocation) {
        return;
    }

    removeAttrs([mobileTabsAttr], sourceCodeLocation, recorder, templateOffset);
}

function isElement(node: object): node is Element {
    return Boolean((node as Element).attrs);
}

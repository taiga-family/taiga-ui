import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {Element} from 'parse5/dist/tree-adapters/default';

import {replaceTag} from '../../../utils/templates';
import {removeAttrs} from '../utils/remove-attrs';
import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {addImportToClosestModule} from '../../../../utils/add-import-to-closest-module';

const TABS_TAG_NAME = 'tui-tabs';
const SEGMENTED_TAG_NAME = 'tui-segmented';
const TAB_ATTRIBUTE_NAME = 'tuiTab'.toLowerCase();
const MOBILE_TABS_ATTRIBUTE_NAME = 'tuiMobileTabs'.toLowerCase();

export function migrateMobileTas({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}) {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsWithAttributeOnTag(
        template,
        [MOBILE_TABS_ATTRIBUTE_NAME],
        [TABS_TAG_NAME],
    );

    elements.forEach((element) => {
        replaceTag(
            recorder,
            element.sourceCodeLocation,
            TABS_TAG_NAME,
            SEGMENTED_TAG_NAME,
            templateOffset,
        );

        removeMobileTabsAttribute(element, recorder, templateOffset);

        element.childNodes.forEach((element) =>
            removeTabAttribute(element, recorder, templateOffset),
        );
    });

    addImportToClosestModule(resource.componentPath, 'TuiSegmented', '@taiga-ui/kit');
}

function removeTabAttribute(
    {attrs, sourceCodeLocation}: Element,
    recorder: UpdateRecorder,
    templateOffset: number,
) {
    const tabAttr = attrs?.find((attr) => attr.name === TAB_ATTRIBUTE_NAME);

    if (!tabAttr || !sourceCodeLocation) {
        return;
    }

    removeAttrs([tabAttr], sourceCodeLocation, recorder, templateOffset);
}

function removeMobileTabsAttribute(
    {attrs, sourceCodeLocation}: Element,
    recorder: UpdateRecorder,
    templateOffset: number,
) {
    const mobileTabsAttr = attrs?.find(
        (attr) => attr.name === MOBILE_TABS_ATTRIBUTE_NAME,
    );

    if (!mobileTabsAttr || !sourceCodeLocation) {
        return;
    }

    removeAttrs([mobileTabsAttr], sourceCodeLocation, recorder, templateOffset);
}

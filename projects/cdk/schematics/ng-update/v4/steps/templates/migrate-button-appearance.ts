import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import type {ElementLocation} from 'parse5/dist/common/token';
import type {Element} from 'parse5/dist/tree-adapters/default';

import {findElementsWithDirective} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import type {TemplateResource} from '../../../interfaces';
import {removeAttrs} from '../utils/remove-attrs';

const tuiButtonSelectors = ['tuiButton', 'tuiIconButton'];

const appearanceInputName = 'appearance';
const appearanceInputNameDict = {
    [appearanceInputName]: true,
    [`[${appearanceInputName}]`]: true,
} as const;

export function migrateButtonAppearance({
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

    const elements = tuiButtonSelectors.flatMap((selector) =>
        findElementsWithDirective(template, selector).filter(
            ({sourceCodeLocation, attrs}) =>
                !!sourceCodeLocation &&
                attrs.some(({name}) => appearanceInputNameDict[name]),
        ),
    );

    if (!elements.length) {
        return;
    }

    const whiteBlockValue = 'whiteblock-active';

    elements.forEach(({attrs, sourceCodeLocation}: Element) => {
        const whiteBlockActiveAttr = attrs.find(
            ({value, name}) =>
                appearanceInputNameDict[name] &&
                (value === whiteBlockValue || value === `'${whiteBlockValue}'`),
        );

        if (whiteBlockActiveAttr) {
            removeAttrs(
                [whiteBlockActiveAttr],
                sourceCodeLocation as ElementLocation,
                recorder,
                templateOffset,
            );

            const {startOffset} = sourceCodeLocation?.attrs?.[
                whiteBlockActiveAttr.name
            ] || {startOffset: 0, endOffset: 0};

            recorder.insertLeft(
                startOffset + templateOffset,
                ` ${appearanceInputName}="whiteblock"`,
            );
            recorder.insertLeft(startOffset + templateOffset, ' data-mode="checked"');
        }
    });

    const elementWithConditionAppearance = elements.find(({attrs}: Element) =>
        attrs.some(
            ({name, value}) =>
                name === `[${appearanceInputName}]` && !value.trim().startsWith("'"),
        ),
    );

    if (elementWithConditionAppearance) {
        addTodo(recorder, templateOffset);
    }
}

function addTodo(recorder: UpdateRecorder, templateOffset: number): void {
    recorder.insertRight(
        templateOffset,
        '<!-- Taiga migration TODO: tuiButton "whiteblock-active" appearance is no longer available. Use \'appearance="whiteblock" data-mode="checked"\' -->\n',
    );
}

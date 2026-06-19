import {type UpdateRecorder} from '@angular-devkit/schematics';
import {type DevkitFileSystem} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {TODO_MARK} from '../../../../utils/insert-todo';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';
import {
    getControlStateAttrs,
    removeControlStateAttrs,
    stringifyControlStateAttrs,
} from '../../../utils/templates/control-state-attrs';
import {removeAttr} from '../../../utils/templates/remove-attr';
import {replaceTag} from '../../../utils/templates/replace-tag';

type TextNode = DefaultTreeAdapterTypes.TextNode;
type ChildNode = DefaultTreeAdapterTypes.ChildNode;
type Element = DefaultTreeAdapterTypes.Element;

// Attrs that move to <input tuiInputSlider>
const INPUT_ATTRS = new Set([
    '[min]',
    '[max]',
    'min',
    'max',
    '[quantum]'.toLowerCase(),
    'quantum',
]);

// Attrs that move to <input tuiSlider type="range">
const SLIDER_ATTRS = new Set([
    '[segments]'.toLowerCase(),
    'segments',
    '[keySteps]'.toLowerCase(),
    'keySteps'.toLowerCase(),
]);

// Attrs with no direct equivalent — leave a TODO comment
const TODO_ATTRS = new Set([
    '[steps]',
    'steps',
    '[valueContent]'.toLowerCase(),
    'valueContent'.toLowerCase(),
]);

const TODO_STEPS_MESSAGE =
    '[steps] has been removed. Use [step] on <input tuiSlider type="range"> instead, ' +
    'where step = (max - min) / steps. See https://taiga-ui.dev/components/input-slider';
const TODO_VALUE_CONTENT_MESSAGE =
    '[valueContent] has been removed. PolymorpheusContent is no longer supported for this input. ' +
    'See https://taiga-ui.dev/components/input-slider for alternatives.';

export function migrateInputSlider({
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
    const elements = findElementsByTagName(template, 'tui-input-slider');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-slider',
            'tui-textfield',
            template,
            templateOffset,
        );

        const {value: labelOutside, isBinding: labelOutsideIsBinding} = removeAttr(
            element,
            'tuiTextfieldLabelOutside',
            recorder,
            templateOffset,
        );

        const isLabelOutsideTrue =
            labelOutside === 'true' || (!labelOutsideIsBinding && labelOutside === '');

        const isDynamic =
            labelOutside !== null && !isLabelOutsideTrue && labelOutside !== 'false';

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const sliderAttrs = [...element.attrs].filter((attr) =>
            SLIDER_ATTRS.has(attr.name.toLowerCase()),
        );

        const todoAttrs = [...element.attrs].filter((attr) =>
            TODO_ATTRS.has(attr.name.toLowerCase()),
        );

        const controlStateAttrs = getControlStateAttrs(element);

        for (const attr of [
            ...controlAttrs,
            ...inputAttrs,
            ...sliderAttrs,
            ...todoAttrs,
        ]) {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.[attr.name] ?? {};

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        }

        removeControlStateAttrs(
            recorder,
            templateOffset,
            element,
            template,
            controlStateAttrs,
        );

        // Insert TODO comments for attrs with no direct equivalent
        if (todoAttrs.length > 0) {
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;
            const messages = todoAttrs
                .map((attr) => {
                    const name = attr.name.toLowerCase();

                    if (name === '[steps]' || name === 'steps') {
                        return `<!-- ${TODO_MARK} ${TODO_STEPS_MESSAGE} -->`;
                    }

                    return `<!-- ${TODO_MARK} ${TODO_VALUE_CONTENT_MESSAGE} -->`;
                })
                .join('\n');

            recorder.insertLeft(insertAt, `${messages}\n`);
        }

        const labelIndex = element.childNodes.findIndex(
            (node: ChildNode) =>
                node.nodeName === '#text' && (node as TextNode)?.value.trim(),
        );

        let placeholderAttr = '';

        if (labelIndex !== -1) {
            const labelNode = element.childNodes[labelIndex];
            const labelText = (labelNode as TextNode).value.trim();
            const labelTextStart =
                (labelNode?.sourceCodeLocation?.startOffset ?? 0) + templateOffset;
            const labelTextEnd =
                (labelNode?.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

            if (isLabelOutsideTrue) {
                recorder.remove(labelTextStart, labelTextEnd - labelTextStart);
                placeholderAttr = ` placeholder="${labelText}"`;
            } else if (!isDynamic) {
                recorder.insertRight(labelTextStart, '\n<label tuiLabel>');
                recorder.insertRight(labelTextEnd, '</label>\n');
            }
        }

        const insertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const baseAttrs = [...controlAttrs, ...inputAttrs].reduce((result, attr) => {
            const name = normalizeAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        const migrationAttrs = `${baseAttrs}${stringifyControlStateAttrs(controlStateAttrs)}`;

        const sliderAttrStr = sliderAttrs.reduce((result, attr) => {
            const name = normalizeSliderAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        if (inputs.length) {
            recorder.insertRight(
                insertOffset,
                `\n<input tuiSlider type="range"${sliderAttrStr} />\n`,
            );
        } else {
            recorder.insertRight(
                insertOffset,
                `\n<input tuiInputSlider${migrationAttrs}${placeholderAttr} />\n<input tuiSlider type="range"${sliderAttrStr} />\n`,
            );
        }

        for (const input of inputs) {
            input.attrs.forEach((attr) => {
                if (/^tuiTextfield$|^tuiTextfieldLegacy$/i.exec(attr.name)) {
                    const {startOffset = 0, endOffset = 0} =
                        input.sourceCodeLocation?.attrs?.[attr.name] ?? {};

                    recorder.remove(
                        templateOffset + startOffset,
                        endOffset - startOffset,
                    );

                    recorder.insertRight(
                        templateOffset + startOffset,
                        `tuiInputSlider${migrationAttrs}${placeholderAttr}`,
                    );
                }
            });
        }
    });
}

function normalizeAttrName(name: string): string {
    switch (name.toLowerCase()) {
        case '[formControl]'.toLowerCase():
            return '[formControl]';
        case '[ngModel]'.toLowerCase():
            return '[ngModel]';
        case '[(ngModel)]'.toLowerCase():
            return '[(ngModel)]';
        case 'formControl'.toLowerCase():
            return 'formControl';
        case 'formControlName'.toLowerCase():
            return 'formControlName';
        case 'ngModel'.toLowerCase():
            return 'ngModel';
        case '[quantum]'.toLowerCase():
            return '[quantum]';
        case 'quantum':
            return 'quantum';
        case '[min]':
            return '[min]';
        case '[max]':
            return '[max]';
        default:
            return name;
    }
}

function normalizeSliderAttrName(name: string): string {
    switch (name.toLowerCase()) {
        case '[segments]'.toLowerCase():
            return '[segments]';
        case 'segments':
            return 'segments';
        case '[keySteps]'.toLowerCase():
            return '[keySteps]';
        case 'keySteps'.toLowerCase():
            return 'keySteps';
        default:
            return name;
    }
}

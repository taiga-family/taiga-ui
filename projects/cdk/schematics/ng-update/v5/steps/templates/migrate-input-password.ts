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
import {removeAttr} from '../../../utils/templates/remove-attr';
import {replaceTag} from '../../../utils/templates/replace-tag';

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type TextNode = DefaultTreeAdapterTypes.TextNode;

type Element = DefaultTreeAdapterTypes.Element;

export function migrateInputPassword({
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
    const elements = findElementsByTagName(template, 'tui-input-password');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-password',
            'tui-textfield',
            template,
            templateOffset,
        );

        const attrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        for (const attr of attrs) {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.[attr.name] ?? {};

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
        }

        const {value: labelOutsideValue, isBinding: labelOutsideIsBinding} = removeAttr(
            element,
            'tuiTextfieldLabelOutside',
            recorder,
            templateOffset,
        );

        const isLabelOutsideTrue =
            labelOutsideValue === 'true' ||
            (!labelOutsideIsBinding && labelOutsideValue === '');

        const isDynamic =
            labelOutsideValue !== null &&
            labelOutsideValue !== 'true' &&
            labelOutsideValue !== 'false' &&
            labelOutsideValue !== '';

        // --- Handle label text ---
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

        // --- Build TODO comment ---
        const todoNotes: string[] = [];

        if (isDynamic) {
            todoNotes.push(
                `[tuiTextfieldLabelOutside]="${labelOutsideValue}" is dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for floating label or outside for static label.`,
            );
        }

        if (todoNotes.length > 0) {
            const startOffset = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;
            const todoComment = `<!-- ${TODO_MARK} tui-input-password migration:\n${todoNotes.map((n) => `     - ${n}`).join('\n')}\n-->\n`;

            recorder.insertLeft(startOffset, todoComment);
        }

        // --- Insert <input> and <tui-icon tuiPassword /> ---
        const insertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const migrationAttrs = attrs.reduce((result, attr) => {
            const name = attr.name
                .replace(/ngmodel/i, 'ngModel')
                .replace(/formcontrol/i, 'formControl')
                .replace(/formcontrolname/i, 'formControlName');

            return `${result} ${name}="${attr.value}"`;
        }, '');

        if (!inputs.length) {
            recorder.insertRight(
                insertOffset,
                `\n<input tuiInput type="password"${migrationAttrs}${placeholderAttr} />\n<tui-icon tuiPassword />\n`,
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
                        `tuiInput type="password"${migrationAttrs}${placeholderAttr}`,
                    );

                    const inputEndOffset =
                        (input.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

                    recorder.insertRight(inputEndOffset, '\n<tui-icon tuiPassword />\n');
                }
            });
        }
    });
}

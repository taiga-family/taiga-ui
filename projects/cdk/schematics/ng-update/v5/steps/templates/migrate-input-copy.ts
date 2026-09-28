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

// v4 message inputs with no v5 successor: the copied-confirmation hint is now baked
// into tuiCopy and is no longer configurable. parse5 lowercases attribute names, so
// map every lowercased form back to its canonical name for a readable TODO.
const NO_EQUIVALENT_ATTRS = new Map<string, string>(
    ['successMessage', 'messageDirection', 'messageAppearance'].flatMap((name) => [
        [name.toLowerCase(), name] as const,
        [`[${name.toLowerCase()}]`, name] as const,
    ]),
);

export function migrateInputCopy({
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
    const elements = findElementsByTagName(template, 'tui-input-copy');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-copy',
            'tui-textfield',
            template,
            templateOffset,
        );

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const noEquivalentAttrs = [...element.attrs].filter((attr) =>
            NO_EQUIVALENT_ATTRS.has(attr.name.toLowerCase()),
        );

        for (const attr of [...controlAttrs, ...noEquivalentAttrs]) {
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

        const todoNotes: string[] = [];

        if (isDynamic) {
            todoNotes.push(
                `[tuiTextfieldLabelOutside]="${labelOutsideValue}" is dynamic and cannot be migrated automatically. Use <label tuiLabel> inside <tui-textfield> for floating label or outside for static label.`,
            );
        }

        if (noEquivalentAttrs.length > 0) {
            const removedNames = [
                ...new Set(
                    noEquivalentAttrs
                        .map((attr) => NO_EQUIVALENT_ATTRS.get(attr.name.toLowerCase()))
                        .filter((name): name is string => Boolean(name)),
                ),
            ];

            todoNotes.push(
                `${removedNames.join(', ')} removed in v5. The copy confirmation hint is built into tuiCopy and is no longer configurable.`,
            );
        }

        if (todoNotes.length > 0) {
            const startOffset = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;
            const todoComment = `<!-- ${TODO_MARK} tui-input-copy migration:\n${todoNotes.map((note) => `     - ${note}`).join('\n')}\n-->\n`;

            recorder.insertLeft(startOffset, todoComment);
        }

        const migrationAttrs = controlAttrs.reduce((result, attr) => {
            const name = attr.name
                .replace(/ngmodel/i, 'ngModel')
                .replace(/formcontrol/i, 'formControl')
                .replace(/formcontrolname/i, 'formControlName');

            return `${result} ${name}="${attr.value}"`;
        }, '');

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        if (!inputs.length) {
            const insertOffset =
                (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

            recorder.insertRight(
                insertOffset,
                `\n<input tuiInput${migrationAttrs}${placeholderAttr} />\n<tui-icon tuiCopy />\n`,
            );

            return;
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
                        `tuiInput${migrationAttrs}${placeholderAttr}`,
                    );

                    const inputEndOffset =
                        (input.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

                    recorder.insertRight(inputEndOffset, '\n<tui-icon tuiCopy />\n');
                }
            });
        }
    });
}

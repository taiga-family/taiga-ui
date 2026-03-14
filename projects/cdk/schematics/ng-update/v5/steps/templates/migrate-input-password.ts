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

        const labelIndex = element.childNodes.findIndex(
            (node: ChildNode) =>
                node.nodeName === '#text' && (node as TextNode)?.value.trim(),
        );

        if (labelIndex !== -1) {
            const labelNode = element.childNodes[labelIndex];
            const labelTextStart =
                (labelNode?.sourceCodeLocation?.startOffset ?? 0) + templateOffset;
            const labelTextEnd =
                (labelNode?.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

            recorder.insertRight(labelTextStart, '\n<label tuiLabel>');
            recorder.insertRight(labelTextEnd, '</label>\n');
        }

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
                `\n<input tuiTextfield type="password"${migrationAttrs} />\n<tui-icon tuiPassword />\n`,
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
                        `tuiTextfield type="password"${migrationAttrs}`,
                    );

                    // Insert tui-icon tuiPassword after the input element
                    const inputEndOffset =
                        (input.sourceCodeLocation?.endOffset ?? 0) + templateOffset;

                    recorder.insertRight(inputEndOffset, '\n<tui-icon tuiPassword />\n');
                }
            });
        }
    });
}

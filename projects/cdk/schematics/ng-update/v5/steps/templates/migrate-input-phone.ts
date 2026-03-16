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
import {replaceTag} from '../../../utils/templates/replace-tag';

type TextNode = DefaultTreeAdapterTypes.TextNode;

type ChildNode = DefaultTreeAdapterTypes.ChildNode;

type Element = DefaultTreeAdapterTypes.Element;

const DOCS_LINK = 'https://taiga-ui.dev/components/input-phone';

/**
 * Attrs that move from <tui-input-phone> to <input tuiInputPhone> unchanged.
 */
const INPUT_ATTRS = new Set(['allowText'.toLowerCase()]);

/**
 * Attrs that have no direct v5 equivalent and need a TODO comment.
 * In v5 countryCode + phoneMaskAfterCountryCode are replaced by a single [mask] input.
 */
const NO_EQUIVALENT_ATTRS = new Set([
    'countryCode'.toLowerCase(),
    'phoneMaskAfterCountryCode'.toLowerCase(),
]);

export function migrateInputPhone({
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
    const elements = findElementsByTagName(template, 'tui-input-phone');

    elements.forEach((element: Element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-phone',
            'tui-textfield',
            template,
            templateOffset,
        );

        const controlAttrs = [...element.attrs].filter((attr) =>
            /formcontrol|ngmodel/.exec(attr.name.toLocaleLowerCase()),
        );

        const inputAttrs = [...element.attrs].filter((attr) =>
            INPUT_ATTRS.has(attr.name.toLowerCase()),
        );

        const noEquivalentAttrs = [...element.attrs].filter((attr) =>
            NO_EQUIVALENT_ATTRS.has(attr.name.toLowerCase()),
        );

        for (const attr of [...controlAttrs, ...inputAttrs, ...noEquivalentAttrs]) {
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

        const inputInsertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        const inputs = element.childNodes.filter(
            (node: ChildNode): node is Element => node.nodeName === 'input',
        );

        const migrationAttrs = [...controlAttrs, ...inputAttrs].reduce((result, attr) => {
            const name = normalizeAttrName(attr.name);

            return attr.value ? `${result} ${name}="${attr.value}"` : `${result} ${name}`;
        }, '');

        if (noEquivalentAttrs.length > 0) {
            const names = noEquivalentAttrs.map((a) => a.name).join(', ');
            const todoComment = [
                `<!-- ${TODO_MARK} tui-input-phone migration (see ${DOCS_LINK}):`,
                `     - ${names} have no direct v5 equivalent.`,
                '       In v5 both are replaced by a single [mask] input of type MaskitoOptions.',
                '       Replace with: <input tuiInputPhone [mask]="phoneOptions" /> where',
                "       phoneOptions = maskitoPhoneOptionsGenerator({countryIsoCode: 'RU', metadata}) from @maskito/phone. -->",
            ].join('\n');
            const insertAt = (sourceCodeLocation?.startOffset ?? 0) + templateOffset;

            recorder.insertLeft(insertAt, `${todoComment}\n`);
        }

        recorder.insertRight(
            inputInsertOffset,
            !inputs.length ? `\n<input tuiInputPhone${migrationAttrs} />\n` : '',
        );

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
                        `tuiInputPhone${migrationAttrs}`,
                    );
                }
            });
        }
    });
}

function normalizeAttrName(name: string): string {
    switch (name.toLowerCase()) {
        case '[allowText]'.toLowerCase():
            return '[allowText]';
        case '[formControl]'.toLowerCase():
            return '[formControl]';
        case '[ngModel]'.toLowerCase():
            return '[ngModel]';
        case 'allowText'.toLowerCase():
            return 'allowText';
        case 'formControl'.toLowerCase():
            return 'formControl';
        case 'formControlName'.toLowerCase():
            return 'formControlName';
        case 'ngModel'.toLowerCase():
            return 'ngModel';
        case '[(ngmodel)]':
            return '[(ngModel)]';
        default:
            return name;
    }
}

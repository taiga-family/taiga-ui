import {
    type DevkitFileSystem,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
    type UpdateRecorder,
} from 'ng-morph';
import {type Element, type TextNode} from 'parse5/dist/tree-adapters/default';

import {ALL_TS_FILES} from '../../../../constants/file-globs';
import {type TuiSchema} from '../../../../ng-add/schema';
import {setupProgressLogger} from '../../../../utils/progress';
import {findElementsByTagName} from '../../../../utils/templates/elements';
import {getComponentTemplates} from '../../../../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces/template-resource';
import {replaceTag} from '../../../utils/templates';

function migrateInputYear({
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
    const elements = findElementsByTagName(template, 'tui-input-year');

    elements.forEach((element) => {
        const sourceCodeLocation = element.sourceCodeLocation;

        replaceTag(
            recorder,
            sourceCodeLocation,
            'tui-input-year',
            'tui-textfield',
            templateOffset,
        );

        const labelIndex = element.childNodes.findIndex(
            (node) => node.nodeName === '#text' && (node as TextNode)?.value.trim(),
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

        const calendarInsertOffset =
            (sourceCodeLocation?.endTag?.startOffset ?? 0) + templateOffset;

        recorder.insertRight(
            calendarInsertOffset,
            '\n<tui-calendar-year *tuiTextfieldDropdown />\n',
        );

        element.childNodes
            .filter((node): node is Element => node.nodeName === 'input')
            .forEach((inputNode) => {
                inputNode.attrs.forEach((attr) => {
                    if (/^tuiTextfield$|^tuiTextfieldLegacy$/i.exec(attr.name)) {
                        const {startOffset = 0, endOffset = 0} =
                            inputNode.sourceCodeLocation?.attrs?.[attr.name] ?? {};

                        recorder.remove(
                            templateOffset + startOffset,
                            endOffset - startOffset,
                        );

                        recorder.insertRight(
                            templateOffset + startOffset,
                            'tuiInputYear',
                        );
                    }
                });
            });
    });
}

export function migrateInputYearTemplates(
    fileSystem: DevkitFileSystem,
    options: TuiSchema,
): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

    componentWithTemplatesPaths.forEach((resource) => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        !options['skip-logs'] && progressLog('tui-input-year migration', true);
        migrateInputYear({resource, fileSystem, recorder});
    });

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

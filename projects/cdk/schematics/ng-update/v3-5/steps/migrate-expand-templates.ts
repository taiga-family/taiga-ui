import {UpdateRecorder} from '@angular-devkit/schematics';
import {DevkitFileSystem} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {TuiSchema} from '../../../ng-add/schema';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';
import {setupProgressLogger} from '../../../utils/progress';
import {findElementsByFn, findElementsByTagName} from '../../../utils/templates/elements';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {TemplateResource} from '../../interfaces/template-resourse';

export function migrateExpandTemplates(
    fileSystem: DevkitFileSystem,
    options: TuiSchema,
): void {
    !options[`skip-logs`] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

    componentWithTemplatesPaths.forEach(resource => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        !options[`skip-logs`] && progressLog(`expand migration`, true);
        migrateExpand({resource, fileSystem, recorder});
    });

    !options[`skip-logs`] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

function migrateExpand({
    resource,
    recorder,
    fileSystem,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsByTagName(template, `tui-expand`);

    elements.forEach(element => {
        const templateElement = findElementsByFn(
            element.childNodes,
            el => el.tagName === `ng-template`,
        )[0];

        if (!templateElement) {
            return;
        }

        const tuiExpandAttr = templateElement.attrs.find(
            attr => attr.name === `tuiexpandcontent`,
        );

        const insertTo = templateElement?.sourceCodeLocation?.startTag.endOffset;

        if (!insertTo || tuiExpandAttr) {
            return;
        }

        recorder.insertRight(insertTo + templateOffset - 1, ` tuiExpandContent`);
    });
}

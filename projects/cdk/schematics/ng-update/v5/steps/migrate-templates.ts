import {
    type DevkitFileSystem,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
    type UpdateRecorder,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {saveAddedImports} from '../../../utils/add-import-to-closest-module';
import {setupProgressLogger} from '../../../utils/progress';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {getPathFromTemplateResource} from '../../../utils/templates/template-resource';
import {type TemplateResource} from '../../interfaces/template-resource';
import {addHTMLCommentTags} from '../../utils/templates';
import {HTML_COMMENTS} from './constants/html-comments';

export function getAction<T>({
    action,
    requiredData,
}: {
    action: ({
        resource,
        fileSystem,
        recorder,
        data,
    }: {
        fileSystem: DevkitFileSystem;
        recorder: UpdateRecorder;
        data: T;
        resource: TemplateResource;
    }) => void;
    requiredData: T;
}) {
    return ({
        resource,
        fileSystem,
        recorder,
    }: {
        fileSystem: DevkitFileSystem;
        recorder: UpdateRecorder;
        resource: TemplateResource;
    }) => action({resource, fileSystem, recorder, data: requiredData});
}

export function migrateTemplates(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);

    const actions = [
        getAction({action: addHTMLCommentTags, requiredData: HTML_COMMENTS}),
    ] as const;

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

    componentWithTemplatesPaths.forEach((resource) => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        actions.forEach((action, actionIndex) => {
            const isLastAction = actionIndex === actions.length - 1;

            !options['skip-logs'] && progressLog(action.name, isLastAction);
            action({resource, fileSystem, recorder});
        });
    });

    fileSystem.commitEdits();

    saveAddedImports(options);

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

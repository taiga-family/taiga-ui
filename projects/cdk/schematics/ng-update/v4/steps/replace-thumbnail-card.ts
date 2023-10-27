import {DevkitFileSystem, UpdateRecorder} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {TuiSchema} from '../../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {findAttributeOnElementWithTag} from '../../../utils/templates/elements';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {replaceIdentifier} from '../../steps/replace-identifier';
import {removeInputs} from '../../utils/templates/remove-inputs';
import {replaceTags} from '../../utils/templates/replace-tags';

export function replaceThumbnailCard(
    options: TuiSchema,
    fileSystem: DevkitFileSystem,
): void {
    replaceCardTemplate(options, fileSystem);
    replaceReferenceTypes(options);
    !options[`skip-logs`] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
}

function replaceCardTemplate(options: TuiSchema, fileSystem: DevkitFileSystem): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing <tui-card /> to <tui-thumbnail-card />`,
        );

    const templateResources = getComponentTemplates(ALL_TS_FILES);

    for (const resource of templateResources) {
        const template = getTemplateFromTemplateResource(resource, fileSystem);
        const templateOffset = getTemplateOffset(resource);
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        replaceTags({
            resource,
            recorder,
            fileSystem,
            replaceableItems: [{from: `tui-card`, to: `tui-thumbnail-card`}],
        });

        replaceCardInputs({template, recorder, templateOffset});
        removeInputs({
            resource,
            recorder,
            fileSystem,
            replaceableItems: [
                {inputName: `active`, tags: [`tui-card`, `tui-thumbnail-card`]},
            ],
        });
    }
}

function replaceCardInputs({
    template,
    recorder,
    templateOffset,
}: {
    template: string;
    recorder: UpdateRecorder;
    templateOffset: number;
}): void {
    const attrsToReplace = [
        {
            from: {
                attrName: `brandLogo`,
                withTagNames: [`tui-card`, `tui-thumbnail-card`],
            },
            to: {attrName: `iconLeft`},
        },
        {
            from: {
                attrName: `[brandLogo]`,
                withTagNames: [`tui-card`, `tui-thumbnail-card`],
            },
            to: {attrName: `[iconLeft]`},
        },
    ];

    for (const {from, to} of attrsToReplace) {
        const offsets = [
            ...findAttributeOnElementWithTag(
                template,
                from.attrName,
                from.withTagNames || [],
            ),
        ];

        offsets.forEach(offset => {
            recorder.remove(offset + templateOffset, from.attrName.length);
            recorder.insertRight(offset + templateOffset, to.attrName);
        });
    }
}

export function replaceReferenceTypes(options: TuiSchema): void {
    !options[`skip-logs`] &&
        infoLog(
            `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing TuiCard(Module|Component) to TuiThumbnailCard(Module|Component)`,
        );

    replaceIdentifier({
        from: {name: `TuiCardModule`, moduleSpecifier: `@taiga-ui/addon-commerce`},
        to: {name: `TuiThumbnailCardModule`, moduleSpecifier: `@taiga-ui/addon-commerce`},
    });

    replaceIdentifier({
        from: {name: `TuiCardComponent`, moduleSpecifier: `@taiga-ui/addon-commerce`},
        to: {
            name: `TuiThumbnailCardComponent`,
            moduleSpecifier: `@taiga-ui/addon-commerce`,
        },
    });
}

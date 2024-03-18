import type {UpdateRecorder} from '@angular-devkit/schematics';
import type {DevkitFileSystem} from 'ng-morph';
import {addProviderToComponent} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import type {TuiSchema} from '../../../ng-add/schema';
import {addImportToClosestModule} from '../../../utils/add-import-to-closest-module';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getNgComponents} from '../../../utils/angular/ng-component';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../../utils/colored-log';
import {TODO_MARK} from '../../../utils/insert-todo';
import {setupProgressLogger} from '../../../utils/progress';
import {
    findElementsByTagName,
    findElementsInTemplateByFn,
    findElementsWithAttribute,
    hasElementAttribute,
} from '../../../utils/templates/elements';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {replaceInputPropertyByDirective} from '../../../utils/templates/ng-component-input-manipulations';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import type {TemplateResource} from '../../interfaces/template-resource';
import {removeInputs} from '../../utils/templates/remove-inputs';
import {replaceAttrValues} from '../../utils/templates/replace-attr-values';
import {replaceAttrs} from '../../utils/templates/replace-attrs';
import {replaceTag} from '../../utils/templates/replace-tag';
import {replaceTags} from '../../utils/templates/replace-tags';
import {
    ATTR_TO_DIRECTIVE,
    ATTRS_TO_REPLACE,
    INPUTS_TO_REMOVE,
    REPLACE_ATTR_VALUE,
    TAGS_TO_REPLACE,
    TEMPLATE_COMMENTS,
    TRUTHY_BOOLEAN_INPUT_TO_HTML_BINARY_ATTRIBUTE,
} from '../constants/templates';
import {migratePolymorpheus} from './migrate-polymorpheus';
import {migrateTextfieldController} from './migrate-textfield-controller';

function replaceAttrsByDirective({
    resource,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    resource: TemplateResource;
}): void {
    ATTR_TO_DIRECTIVE.forEach(
        ({componentSelector, directiveModule, directive, inputProperty, filterFn}) => {
            replaceInputPropertyByDirective({
                componentSelector,
                directiveModule,
                directive,
                inputProperty,
                fileSystem,
                templateResource: resource,
                filterFn,
            });
        },
    );
}

function replaceV3Attrs({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    replaceAttrs({
        resource,
        recorder,
        fileSystem,
        data: ATTRS_TO_REPLACE,
    });
}

function replaceV3Tags({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    replaceTags({resource, recorder, fileSystem, data: TAGS_TO_REPLACE});
}

function addHTMLCommentTags({
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

    TEMPLATE_COMMENTS.forEach(({comment, tag, withAttr}) => {
        const elementStartOffsets = [
            ...findElementsWithAttribute(template, withAttr),
            ...findElementsWithAttribute(template, `[${withAttr}]`),
        ]
            .filter(el => el.tagName === tag)
            .map(el => (el.sourceCodeLocation?.startOffset || 0) + templateOffset);

        elementStartOffsets.forEach(offset => {
            recorder.insertRight(offset, `<!-- ${TODO_MARK} ${comment} -->\n`);
        });
    });
}

function replaceBreadcrumbs({
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

    const elements = findElementsByTagName(template, 'tui-breadcrumbs');

    elements.forEach(element => {
        const itemsAttr = element.attrs.find(attr => attr.name === '[items]');
        const itemsValue = itemsAttr?.value;
        const insertTo = element?.sourceCodeLocation?.startTag?.endOffset ?? 0;

        if (!itemsValue || !insertTo) {
            return;
        }

        // noinspection AngularMissingRequiredDirectiveInputBinding
        recorder.insertRight(
            insertTo + templateOffset,
            `
    <ng-container *ngFor="let item of ${itemsValue}">
        <a
            *tuiItem
            tuiLink
            [routerLink]="item.routerLink"
        >
            {{ item.caption }}
        </a>
    </ng-container>`,
        );

        const {startOffset = 0, endOffset = 0} =
            element.sourceCodeLocation?.attrs?.['[items]'] || {};

        recorder.remove(templateOffset + startOffset - 1, endOffset - startOffset + 1);
    });
}

function replaceFieldError({
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

    const elements = findElementsByTagName(template, 'tui-field-error');

    elements.forEach(element => {
        const orderAttr = element.attrs.find(attr => attr.name === '[order]');
        const orderVal = orderAttr?.value;

        if (orderAttr) {
            const {startOffset = 0, endOffset = 0} =
                element.sourceCodeLocation?.attrs?.['[order]'] || {};

            recorder.remove(
                templateOffset + startOffset - 1,
                endOffset - startOffset + 1,
            );
        }

        const input = `[error]="${orderVal ?? '[]'} | tuiFieldError | async"`;

        replaceTag(
            recorder,
            element.sourceCodeLocation,
            'tui-field-error',
            'tui-error',
            templateOffset,
            [input],
        );
    });

    if (elements.length) {
        addImportToClosestModule(
            resource.componentPath,
            'TuiErrorModule',
            '@taiga-ui/core',
        );
    }
}

function addEditorProviders({
    resource,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const elements = findElementsByTagName(template, 'tui-editor').filter(
        element => !hasElementAttribute(element, 'new'),
    );

    if (elements.length) {
        const componentPath = resource.componentPath;
        const componentClass = getNgComponents(componentPath);

        addProviderToComponent(
            componentClass[0],
            `{
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions
        }`,
            {unique: true},
        );

        addUniqueImport(componentPath, 'TUI_EDITOR_EXTENSIONS', '@taiga-ui/addon-editor');
        addUniqueImport(
            componentPath,
            'defaultEditorExtensions',
            '@taiga-ui/addon-editor',
        );
    }
}

// eslint-disable-next-line unicorn/no-unsafe-regex
const HIDE_SELECTED_PIPE_WITH_ARGS_REG = /\|\s*tuiHideSelected(\s*:\s*[^|'"]*)?/gi;

function migrateTuiHideSelectedPipe({
    resource,
    fileSystem,
    recorder,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elementsWithPipe = findElementsInTemplateByFn(template, el =>
        el.attrs?.some(attr => attr.value.match(HIDE_SELECTED_PIPE_WITH_ARGS_REG)),
    );

    elementsWithPipe.forEach(el => {
        const {name, value: oldValue} =
            el.attrs.find(attr => attr.value.match(HIDE_SELECTED_PIPE_WITH_ARGS_REG)) ||
            {};
        const attrLocations = el.sourceCodeLocation?.attrs;

        if (!name || !oldValue || !attrLocations) {
            return;
        }

        const newValue = oldValue.replaceAll(
            HIDE_SELECTED_PIPE_WITH_ARGS_REG,
            '| tuiHideSelected',
        );

        const {startOffset} = attrLocations[name];
        const valueOffset = templateOffset + startOffset + name.length + '="'.length;

        recorder.remove(valueOffset, oldValue.length);
        recorder.insertRight(valueOffset, newValue);
    });
}

function migrateBinaryAttributes({
    resource,
    fileSystem,
    recorder,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    TRUTHY_BOOLEAN_INPUT_TO_HTML_BINARY_ATTRIBUTE.forEach(attrName => {
        const elements = findElementsInTemplateByFn(template, el =>
            el.attrs?.some(
                attr =>
                    attr.value === 'true' && attr.name.includes(attrName.toLowerCase()),
            ),
        );

        elements.forEach(el => {
            const attrLocations = el.sourceCodeLocation?.attrs;

            if (!attrLocations) {
                return;
            }

            const {startOffset, endOffset} =
                attrLocations[`[${attrName.toLowerCase()}]`] ||
                attrLocations[attrName.toLowerCase()];

            recorder.remove(templateOffset + startOffset, endOffset - startOffset);
            recorder.insertRight(templateOffset + startOffset, attrName);
        });
    });
}

function addWarningForFormatNumberPipe({
    resource,
    fileSystem,
    recorder,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    if (template.match(/\|\s*tuiFormatNumber\s*:\s/gi)) {
        recorder.insertLeft(
            templateOffset && templateOffset + 1,
            `<!-- ${TODO_MARK} tuiFormatNumber pipe has new API. See https://taiga-ui.dev/pipes/format-number -->`,
        );
    }
}

function replaceInputValues({
    resource,
    recorder,
    fileSystem,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    replaceAttrValues({
        resource,
        recorder,
        fileSystem,
        data: REPLACE_ATTR_VALUE,
    });
}

function removeV3Inputs({
    resource,
    fileSystem,
    recorder,
}: {
    fileSystem: DevkitFileSystem;
    recorder: UpdateRecorder;
    resource: TemplateResource;
}): void {
    removeInputs({resource, recorder, fileSystem, data: INPUTS_TO_REMOVE});
}

export function migrateTemplates(fileSystem: DevkitFileSystem, options: TuiSchema): void {
    !options['skip-logs'] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);
    const actions = [
        replaceV3Tags,
        replaceV3Attrs,
        replaceAttrsByDirective,
        replaceBreadcrumbs,
        replaceFieldError,
        addHTMLCommentTags,
        addEditorProviders,
        migrateTuiHideSelectedPipe,
        removeV3Inputs,
        migratePolymorpheus,
        migrateTextfieldController,
        replaceInputValues,
        migrateBinaryAttributes,
        addWarningForFormatNumberPipe,
    ];

    const progressLog = setupProgressLogger({
        total: componentWithTemplatesPaths.length,
    });

    componentWithTemplatesPaths.forEach(resource => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);

        actions.forEach((action, actionIndex) => {
            const isLastAction = actionIndex === actions.length - 1;

            !options['skip-logs'] && progressLog(action.name, isLastAction);
            action({resource, fileSystem, recorder});
        });
    });

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

import {getComponentTemplates} from '../../utils/templates/get-component-templates';
import {UpdateRecorder} from '@angular-devkit/schematics';
import {
    ATTR_TO_DIRECTIVE,
    ATTRS_TO_REPLACE,
    INPUTS_TO_REMOVE,
    TAGS_TO_REPLACE,
    TEMPLATE_COMMENTS,
} from '../constants/templates';
import {
    findAttributeOnElementWithAttrs,
    findAttributeOnElementWithTag,
    findElementByFn,
    findElementsByTagName,
    findElementsWithAttribute,
    hasElementAttribute,
} from '../../utils/templates/elements';
import {addProviderToComponent, DevkitFileSystem} from 'ng-morph';
import {TemplateResource} from '../interfaces/template-resourse';
import {
    getInputPropertyOffsets,
    replaceInputPropertyByDirective,
} from '../../utils/templates/ng-component-input-manipulations';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../utils/templates/template-resource';
import {ElementLocation} from 'parse5';
import {getNgComponents} from '../../utils/angular/ng-component';
import {addUniqueImport} from '../../utils/add-unique-import';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';
import {ALL_TS_FILES} from '../../constants';
import {printProgress} from '../../utils/progress';

const START_TAG_OFFSET = 1;
const END_TAG_OFFSET = 2;

export function migrateTemplates(fileSystem: DevkitFileSystem): void {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} migrating templates...`);

    const componentWithTemplatesPaths = getComponentTemplates(ALL_TS_FILES);
    const actions = [
        replaceTags,
        replaceAttrs,
        replaceAttrsByDirective,
        replaceBreadcrumbs,
        replaceFieldError,
        addHTMLCommentTags,
        addEditorProviders,
        migrateTuiHideSelectedPipe,
        removeInputs,
    ];

    componentWithTemplatesPaths.forEach((resource, templateIndex, templates) => {
        const path = fileSystem.resolve(getPathFromTemplateResource(resource));
        const recorder = fileSystem.edit(path);
        const isLastTemplate = templateIndex === templates.length - 1;

        actions.forEach((action, actionIndex) => {
            const isLastAction = actionIndex === actions.length - 1;
            const progressLog = `${templateIndex + 1} / ${templates.length} (${
                action.name
            }...)`;

            printProgress(
                `${SMALL_TAB_SYMBOL.repeat(2)}${progressLog}`,
                isLastTemplate && isLastAction,
            );
            action({resource, fileSystem, recorder});
        });
    });

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} templates migrated \n`);
}

function replaceAttrsByDirective({
    resource,
    fileSystem,
}: {
    resource: TemplateResource;
    fileSystem: DevkitFileSystem;
}) {
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

function replaceAttrs({
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

    ATTRS_TO_REPLACE.forEach(({from, to}) => {
        const offsets = [
            ...findAttributeOnElementWithTag(
                template,
                from.attrName,
                from.withTagNames || [],
                from.filterFn,
            ),
            ...findAttributeOnElementWithAttrs(
                template,
                from.attrName,
                from.withAttrsNames || [],
                from.filterFn,
            ),
        ];

        offsets.forEach(offset => {
            recorder.remove(offset + templateOffset, from.attrName.length);
            recorder.insertRight(offset + templateOffset, to.attrName);
        });
    });
}

function replaceTags({
    resource,
    recorder,
    fileSystem,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}) {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    TAGS_TO_REPLACE.forEach(({from, to, addAttributes}) => {
        const elements = findElementsByTagName(template, from);

        elements.forEach(({sourceCodeLocation}) => {
            if (sourceCodeLocation) {
                replaceTag(
                    recorder,
                    sourceCodeLocation,
                    from,
                    to,
                    templateOffset,
                    addAttributes,
                );
            }
        });
    });
}

function addHTMLCommentTags({
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

    TEMPLATE_COMMENTS.forEach(({comment, tag, withAttr}) => {
        const elementStartOffsets = [
            ...findElementsWithAttribute(template, withAttr),
            ...findElementsWithAttribute(template, `[${withAttr}]`),
        ]
            .filter(el => el.tagName === tag)
            .map(el => (el.sourceCodeLocation?.startOffset || 0) + templateOffset);

        elementStartOffsets.forEach(offset => {
            recorder.insertRight(
                offset,
                `<!-- TODO: (Taiga UI migration) ${comment} -->\n`,
            );
        });
    });
}

function replaceBreadcrumbs({
    resource,
    recorder,
    fileSystem,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}) {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elements = findElementsByTagName(template, 'tui-breadcrumbs');

    elements.forEach(element => {
        const itemsAttr = element.attrs.find(attr => attr.name === '[items]');
        const itemsValue = itemsAttr?.value;
        const insertTo = element?.sourceCodeLocation?.startTag.endOffset;

        if (!itemsValue || !insertTo) {
            return;
        }

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
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}) {
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
            element.sourceCodeLocation!,
            'tui-field-error',
            'tui-error',
            templateOffset,
            [input],
        );
    });
}

function replaceTag(
    recorder: UpdateRecorder,
    sourceCodeLocation: ElementLocation,
    from: string,
    to: string,
    templateOffset = 0,
    addAttributes: string[] = [],
) {
    const startTagOffset = sourceCodeLocation.startTag.startOffset;
    const endTagOffset = sourceCodeLocation.endTag?.startOffset;

    if (endTagOffset) {
        recorder.remove(endTagOffset + templateOffset + END_TAG_OFFSET, from.length);
        recorder.insertRight(endTagOffset + templateOffset + END_TAG_OFFSET, to);
    }

    recorder.remove(startTagOffset + templateOffset + START_TAG_OFFSET, from.length);
    recorder.insertRight(
        startTagOffset + templateOffset + START_TAG_OFFSET,
        `${to} ${addAttributes.join(' ')}`,
    );
}

function addEditorProviders({
    resource,
    fileSystem,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
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

const HIDE_SELECTED_PIPE_WITH_ARGS_REG = /\|\s*tuiHideSelected(\s*:\s*[^|'"]*)?/gi;

function migrateTuiHideSelectedPipe({
    resource,
    fileSystem,
    recorder,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    const elementsWithPipe = findElementByFn(template, el =>
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

        const newValue = oldValue.replace(
            HIDE_SELECTED_PIPE_WITH_ARGS_REG,
            '| tuiHideSelected',
        );

        const {startOffset} = attrLocations[name];
        const valueOffset = templateOffset + startOffset + name.length + '="'.length;

        recorder.remove(valueOffset, oldValue.length);
        recorder.insertRight(valueOffset, newValue);
    });
}

function removeInputs({
    resource,
    fileSystem,
    recorder,
}: {
    resource: TemplateResource;
    recorder: UpdateRecorder;
    fileSystem: DevkitFileSystem;
}): void {
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const templateOffset = getTemplateOffset(resource);

    INPUTS_TO_REMOVE.forEach(({inputName, tags}) => {
        const offsets = [
            ...getInputPropertyOffsets(template, inputName, tags),
            ...getInputPropertyOffsets(template, `[${inputName}]`, tags),
        ];

        offsets.forEach(([start, end]) => {
            recorder.remove(start + templateOffset, end - start);
        });
    });
}

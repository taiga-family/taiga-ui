import {type UpdateRecorder} from '@angular-devkit/schematics';
import {
    type CallExpression,
    type DevkitFileSystem,
    getNgComponents,
    Node,
    type ObjectLiteralExpression,
} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {addUniqueImport} from '../../../../utils/add-unique-import';
import {TODO_MARK} from '../../../../utils/insert-todo';
import {pushToObjectArrayProperty} from '../../../../utils/push-to-array-property';
import {findElementsWithAttributeOnTag} from '../../../../utils/templates/elements';
import {
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../../utils/templates/template-resource';
import {type TemplateResource} from '../../../interfaces';

type Element = DefaultTreeAdapterTypes.Element;

const SELECTORS = ['tui-calendar-sheet', 'tui-mobile-calendar-sheet'];
const INPUT = 'single';
const PROVIDER_FN = 'tuiCalendarSheetOptionsProvider';
const TAIGA_CORE = '@taiga-ui/core';
const TODO_MESSAGE = `[single] binding removed: use ${PROVIDER_FN}({rangeMode: boolean}) in the component providers instead`;

interface FoundAttr {
    attrName: string;
    value: string;
    startOffset: number;
    endOffset: number;
    elementStart: number;
}

export function migrateCalendarSheetSingle({
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
    const elements = findElementsWithAttributeOnTag(
        template,
        [`[${INPUT}]`, INPUT],
        SELECTORS,
    );

    if (!elements.length) {
        return;
    }

    const found = elements
        .map((el) => findAttr(el))
        .filter((x): x is FoundAttr => x !== null)
        .sort((a, b) => b.startOffset - a.startOffset);

    if (!found.length) {
        return;
    }

    let needsProvider = false;

    found.forEach(({attrName, value, startOffset, endOffset, elementStart}) => {
        const isBinding = attrName === `[${INPUT}]`;
        const isStaticFalse = checkIsStaticFalse(value);
        const isDynamic = isBinding && !isStaticFalse && !checkIsStaticTrue(value);

        recorder.remove(templateOffset + startOffset, endOffset - startOffset);

        if (isStaticFalse) {
            needsProvider = true;
        } else if (isDynamic) {
            recorder.insertLeft(
                templateOffset + elementStart,
                `<!-- ${TODO_MARK} ${TODO_MESSAGE} -->\n`,
            );
        }
    });

    if (!needsProvider) {
        return;
    }

    const [component] = getNgComponents(resource.componentPath);

    if (!component) {
        return;
    }

    const decorator = component.getDecorator('Component');

    if (!decorator) {
        return;
    }

    const [metadata] = decorator.getArguments() as ObjectLiteralExpression[];

    if (!metadata || !Node.isObjectLiteralExpression(metadata)) {
        return;
    }

    const existingCall = findExistingProviderCall(metadata);

    if (existingCall) {
        const [arg] = existingCall.getArguments();

        if (arg && Node.isObjectLiteralExpression(arg)) {
            const rangeModeProperty = arg.getProperty('rangeMode');

            if (rangeModeProperty && Node.isPropertyAssignment(rangeModeProperty)) {
                rangeModeProperty.getInitializerOrThrow().replaceWithText('true');
            } else if (!rangeModeProperty) {
                arg.addPropertyAssignment({name: 'rangeMode', initializer: 'true'});
            }
        } else if (!arg) {
            existingCall.addArgument('{rangeMode: true}');
        }
    } else {
        pushToObjectArrayProperty(
            metadata,
            'providers',
            `${PROVIDER_FN}({rangeMode: true})`,
            {unique: true, forceToArray: true},
        );

        addUniqueImport(component.getSourceFile().getFilePath(), PROVIDER_FN, TAIGA_CORE);
    }
}

function findAttr(element: Element): FoundAttr | null {
    const attr =
        element.attrs.find((a) => a.name === `[${INPUT}]`) ||
        element.attrs.find((a) => a.name === INPUT);

    if (!attr) {
        return null;
    }

    const loc = element.sourceCodeLocation?.attrs?.[attr.name];
    const elementStart = element.sourceCodeLocation?.startTag?.startOffset;

    if (!loc || elementStart === undefined) {
        return null;
    }

    return {
        attrName: attr.name,
        value: attr.value,
        startOffset: loc.startOffset,
        endOffset: loc.endOffset,
        elementStart,
    };
}

function checkIsStaticFalse(value: string): boolean {
    return value === 'false' || value === "'false'" || value === '"false"';
}

function checkIsStaticTrue(value: string): boolean {
    return value === 'true' || value === "'true'" || value === '"true"' || value === '';
}

function findExistingProviderCall(
    metadata: ObjectLiteralExpression,
): CallExpression | null {
    const providersProperty = metadata.getProperty('providers');

    if (!providersProperty || !Node.isPropertyAssignment(providersProperty)) {
        return null;
    }

    const init = providersProperty.getInitializer();

    if (!Node.isArrayLiteralExpression(init)) {
        return null;
    }

    const call = init
        .getElements()
        .find(
            (el) =>
                Node.isCallExpression(el) && el.getExpression().getText() === PROVIDER_FN,
        );

    return call && Node.isCallExpression(call) ? call : null;
}

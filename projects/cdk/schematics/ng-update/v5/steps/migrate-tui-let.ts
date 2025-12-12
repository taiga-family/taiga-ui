import {findElementsWithAttribute} from '@angular/cdk/schematics';
import {type Tree, type UpdateRecorder} from '@angular-devkit/schematics';
import {createProject, errorLog, saveActiveProject, setActiveProject} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {ALL_FILES, ALL_TS_FILES} from '../../../constants/file-globs';
import {type TuiSchema} from '../../../ng-add/schema';
import {removeModule} from '../../../utils/remove-module';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {
    getPathFromTemplateResource,
    getTemplateFromTemplateResource,
    getTemplateOffset,
} from '../../../utils/templates/template-resource';
import {type TemplateResource} from '../../interfaces/template-resource';
import {getFileSystem} from '../../utils/get-file-system';

type Element = DefaultTreeAdapterTypes.Element;

const STRUCTURAL_ATTR = '*tuiLet';

export function tuiLetMigration(tree: Tree, options: TuiSchema): void {
    const fileSystem = getFileSystem(tree);
    const project = createProject(tree, '/', ALL_TS_FILES);

    setActiveProject(project);
    removeModule('TuiLet', '@taiga-ui/cdk');

    const resources = getComponentTemplates(ALL_FILES);

    for (const resource of resources) {
        migrateTemplate(resource, fileSystem, options);
    }

    fileSystem.commitEdits();
    saveActiveProject();
}

function migrateTemplate(
    resource: TemplateResource,
    fileSystem: ReturnType<typeof getFileSystem>,
    options: TuiSchema,
): void {
    const templatePath = fileSystem.resolve(getPathFromTemplateResource(resource));
    const template = getTemplateFromTemplateResource(resource, fileSystem);
    const recorder = fileSystem.edit(templatePath);
    const offset = getTemplateOffset(resource);

    const elements = findElementsWithAttribute(template, STRUCTURAL_ATTR);

    for (const element of elements) {
        migrateStructuralLet(element, template, recorder, offset, options);
    }
}

function migrateStructuralLet(
    element: Element,
    template: string,
    recorder: ReturnType<ReturnType<typeof getFileSystem>['edit']>,
    offset: number,
    options: TuiSchema,
): void {
    const attr = element.attrs.find((a) => a.name === STRUCTURAL_ATTR.toLowerCase());

    if (!attr) {
        return;
    }

    const {expr, key} = parseLetExpression(attr.value);

    if (!expr || !key) {
        return;
    }

    if (containsDuplicateLet(template, key)) {
        if (!options['skip-logs']) {
            errorLog(`The @let with key ${key} is already defined`);
        }

        return;
    }

    insertLetDeclaration({recorder, offset, element, template, expr, key});
    removeStructuralAttribute({recorder, offset, element, attr});
}

function parseLetExpression(value: string): {expr: string; key: string} {
    const [expr = '', key = ''] = value.split(' as ').map((v) => v.trim());

    return {expr, key};
}

function containsDuplicateLet(template: string, key: string): boolean {
    const pattern = new RegExp(String.raw`@let\s+${key}\s+=`);

    return pattern.test(template);
}

function insertLetDeclaration({
    recorder,
    element,
    key,
    expr,
    template,
    offset,
}: {
    recorder: UpdateRecorder;
    offset: number;
    element: Element;
    template: string;
    expr: string;
    key: string;
}): void {
    const loc = element.sourceCodeLocation!;
    const indent = computeIndent(template, loc.startOffset);
    const indentStr = ' '.repeat(indent);

    recorder.insertLeft(offset + loc.startOffset, `@let ${key} = ${expr};\n${indentStr}`);
}

function computeIndent(template: string, pos: number): number {
    const lastNewLine = template.lastIndexOf('\n', pos);

    return pos - (lastNewLine + 1);
}

function removeStructuralAttribute({
    recorder,
    offset,
    element,
    attr,
}: {
    recorder: UpdateRecorder;
    offset: number;
    element: Element;
    attr: {name: string; value: string};
}): void {
    const loc = element.sourceCodeLocation!;
    const attrLoc = loc.attrs?.[attr.name];

    const isPureNgContainer =
        element.tagName === 'ng-container' && element.attrs.length === 1;

    if (isPureNgContainer) {
        unwrapNgContainer(recorder, offset, element);

        return;
    }

    if (attrLoc) {
        recorder.remove(
            offset + attrLoc.startOffset - 1,
            attrLoc.endOffset - attrLoc.startOffset + 1,
        );
    }
}

function unwrapNgContainer(recorder: any, offset: number, element: Element): void {
    const loc = element.sourceCodeLocation!;
    const children = element.childNodes;

    if (!children.length) {
        recorder.remove(offset + loc.startOffset, loc.endOffset - loc.startOffset);

        return;
    }

    const first = children[0]!.sourceCodeLocation!;
    const last = children[children.length - 1]!.sourceCodeLocation!;

    recorder.remove(offset + loc.startOffset, first.startOffset - loc.startOffset);
    recorder.remove(offset + last.endOffset, loc.endOffset - last.endOffset);
}

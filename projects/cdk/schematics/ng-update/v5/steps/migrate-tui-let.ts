import {findElementsWithAttribute} from '@angular/cdk/schematics';
import {type Tree, type UpdateRecorder} from '@angular-devkit/schematics';
import {saveActiveProject} from 'ng-morph';
import {type DefaultTreeAdapterTypes} from 'parse5';

import {ALL_FILES} from '../../../constants/file-globs';
import {type TuiSchema} from '../../../ng-add/schema';
import {errorLog} from '../../../utils/colored-log';
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
    const resources = getComponentTemplates(ALL_FILES);

    for (const resource of resources) {
        migrateTemplate(resource, fileSystem, options);
    }

    fileSystem.commitEdits();

    getFileSystem(tree);
    removeModule('TuiLet', '@taiga-ui/cdk');
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

    // adoption-agency clones of nested formatting elements keep *tuiLet but have no source location
    if (!element.sourceCodeLocation) {
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

    // `*tuiLet="foo() as foo"` scopes the alias to the element, so the alias name
    // may repeat an identifier used in the expression. A plain `@let foo = foo()`
    // is self-referential, which Angular rejects (NG8016), so rename the `@let` and
    // update the alias references inside the element.
    const selfReferential = referencesIdentifier(expr, key);
    const letKey = selfReferential ? deriveSafeKey(template, key) : key;

    insertLetDeclaration({recorder, offset, element, template, expr, key: letKey});

    if (selfReferential) {
        renameAliasReferences({
            recorder,
            offset,
            element,
            attr,
            template,
            from: key,
            to: letKey,
        });
    }

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

function escapeRegExp(value: string): string {
    return value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

// `$` is a valid identifier character, so it must count as part of the word.
// Otherwise `foo` would falsely match inside `foo$` (the common
// `foo$ | async as foo` pattern) and be treated as a self-reference.
function identifierPattern(key: string, flags = ''): RegExp {
    return new RegExp(String.raw`(?<![\w$])${escapeRegExp(key)}(?![\w$])`, flags);
}

function referencesIdentifier(expr: string, key: string): boolean {
    return identifierPattern(key).test(expr);
}

function deriveSafeKey(template: string, key: string): string {
    let candidate = `${key}Value`;
    let counter = 2;

    while (containsDuplicateLet(template, candidate)) {
        candidate = `${key}Value${counter++}`;
    }

    return candidate;
}

function renameAliasReferences({
    recorder,
    offset,
    element,
    attr,
    template,
    from,
    to,
}: {
    recorder: UpdateRecorder;
    offset: number;
    element: Element;
    attr: {name: string; value: string};
    template: string;
    from: string;
    to: string;
}): void {
    const loc = element.sourceCodeLocation!;
    const attrLoc = loc.attrs?.[attr.name];
    const pattern = identifierPattern(from, 'g');

    for (let match = pattern.exec(template); match; match = pattern.exec(template)) {
        const index = match.index;

        if (index < loc.startOffset || index >= loc.endOffset) {
            continue;
        }

        // The alias itself lives inside the *tuiLet attribute, which is removed
        // separately — never rewrite anything within its range.
        if (attrLoc && index >= attrLoc.startOffset && index < attrLoc.endOffset) {
            continue;
        }

        recorder.remove(offset + index, from.length);
        recorder.insertRight(offset + index, to);
    }
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

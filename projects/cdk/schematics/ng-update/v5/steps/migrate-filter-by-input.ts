import {type Tree} from '@angular-devkit/schematics';
import {type ClassDeclaration, getSourceFiles, Node} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {type TemplateResource} from '../../interfaces/template-resource';

const FILTER_BY_INPUT_PIPE_RE = /\|\s*tuiFilterByInput:\s*(\w+)(\s*\(([^)]*)\))?/g;
const TUI_STRING_MATCHER_GENERIC_RE = /TuiStringMatcher<([^>]+)>/;

type MatcherKind = 'call-no-args' | 'call-with-args' | 'reference';

interface FilterPropDescriptor {
    readonly filterWithName: string;
    readonly generic: string;
    readonly kind: MatcherKind;
    readonly matcherName: string;
}

export function migrateFilterByInput(tree: Tree, _options: TuiSchema): void {
    for (const resource of getComponentTemplates(ALL_TS_FILES)) {
        migrateResource(resource, tree);
    }
}

function migrateResource(resource: TemplateResource, tree: Tree): void {
    const isExternal = 'templatePath' in resource;
    const templateText = isExternal
        ? (tree.read(resource.templatePath)?.toString() ?? '')
        : resource.template;

    if (!templateText) {
        return;
    }

    const matcherUsages = collectMatcherUsages(templateText);

    if (matcherUsages.size === 0) {
        return;
    }

    const [sourceFile] = getSourceFiles(resource.componentPath);

    if (!sourceFile) {
        return;
    }

    const componentClass = sourceFile
        .getClasses()
        .find((cls) => cls.getDecorator('Component'));

    if (!componentClass) {
        return;
    }

    const propsToAdd = buildFilterProps(matcherUsages, componentClass);

    if (propsToAdd.length === 0) {
        return;
    }

    const newTemplateText = replaceMatcherNames(templateText, propsToAdd);

    if (isExternal) {
        tree.overwrite(resource.templatePath, newTemplateText);
    } else {
        updateInlineTemplate(componentClass, newTemplateText);
    }

    addFilterWrapperProperties(componentClass, propsToAdd);
    addUniqueImport(resource.componentPath, 'TuiFilterByInputOptions', '@taiga-ui/core');
}

function collectMatcherUsages(templateText: string): Map<string, MatcherKind> {
    FILTER_BY_INPUT_PIPE_RE.lastIndex = 0;

    const usages = new Map<string, MatcherKind>();
    let match: RegExpExecArray | null;

    while ((match = FILTER_BY_INPUT_PIPE_RE.exec(templateText)) !== null) {
        const name = match[1]!;
        const callSuffix = match[2];
        const args = match[3];

        let kind: MatcherKind = 'reference';

        if (callSuffix !== undefined) {
            kind = args?.trim() ? 'call-with-args' : 'call-no-args';
        }

        if (!usages.has(name)) {
            usages.set(name, kind);
        }
    }

    return usages;
}

function buildFilterProps(
    matcherUsages: Map<string, MatcherKind>,
    componentClass: ClassDeclaration,
): FilterPropDescriptor[] {
    const result: FilterPropDescriptor[] = [];

    for (const [matcherName, kind] of matcherUsages) {
        const filterWithName = `filterWith${matcherName[0]!.toUpperCase()}${matcherName.slice(1)}`;

        if (componentClass.getProperty(filterWithName)) {
            continue;
        }

        const prop = componentClass.getProperty(matcherName);
        const typeText = prop?.getTypeNode()?.getText() ?? '';
        const genericMatch = TUI_STRING_MATCHER_GENERIC_RE.exec(typeText);
        const generic = genericMatch ? `<${genericMatch[1]}>` : '';

        result.push({filterWithName, matcherName, generic, kind});
    }

    return result;
}

function replaceMatcherNames(
    templateText: string,
    propsToAdd: FilterPropDescriptor[],
): string {
    return propsToAdd.reduce(
        (text, {filterWithName, matcherName}) =>
            text.replaceAll(
                new RegExp(String.raw`(\|\s*tuiFilterByInput:\s*)${matcherName}\b`, 'g'),
                `$1${filterWithName}`,
            ),
        templateText,
    );
}

function updateInlineTemplate(
    componentClass: ClassDeclaration,
    newTemplateText: string,
): void {
    const decorator = componentClass.getDecorator('Component')!;
    const [metadata] = decorator.getArguments();

    if (!Node.isObjectLiteralExpression(metadata)) {
        return;
    }

    const templateProp = metadata.getProperty('template');

    if (Node.isPropertyAssignment(templateProp)) {
        templateProp.getInitializer()?.replaceWithText(newTemplateText);
    }
}

function addFilterWrapperProperties(
    componentClass: ClassDeclaration,
    propsToAdd: FilterPropDescriptor[],
): void {
    const closeBrace = componentClass.getLastToken();

    if (!closeBrace) {
        return;
    }

    const indent = '    ';
    const propsText = `\n${propsToAdd.map((prop) => buildFilterPropLine(prop, indent)).join('\n')}\n`;

    closeBrace.getSourceFile().insertText(closeBrace.getStart(), propsText);
}

function buildFilterPropLine(
    {filterWithName, matcherName, generic, kind}: FilterPropDescriptor,
    indent: string,
): string {
    switch (kind) {
        case 'call-no-args':
            return `${indent}${filterWithName} = (): TuiFilterByInputOptions${generic}['filter'] => (items, query, stringify) => items.filter((item) => this.${matcherName}()(item, query, stringify));`;
        case 'call-with-args':
            return `${indent}${filterWithName} = (...args: any[]): TuiFilterByInputOptions${generic}['filter'] => (items, query, stringify) => items.filter((item) => this.${matcherName}(...args)(item, query, stringify));`;
        default:
            return `${indent}${filterWithName}: TuiFilterByInputOptions${generic}['filter'] = (items, query, stringify) => items.filter((item) => this.${matcherName}(item, query, stringify));`;
    }
}

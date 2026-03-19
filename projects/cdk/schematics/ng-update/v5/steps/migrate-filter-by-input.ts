import {type Tree} from '@angular-devkit/schematics';
import {type ClassDeclaration, getSourceFiles, Node} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getComponentTemplates} from '../../../utils/templates/get-component-templates';
import {type TemplateResource} from '../../interfaces/template-resource';

const FILTER_BY_INPUT_PIPE_RE = /\|\s*tuiFilterByInput:\s*(\w+)/g;
const TUI_STRING_MATCHER_GENERIC_RE = /TuiStringMatcher<([^>]+)>/;

interface FilterPropDescriptor {
    readonly filterWithName: string;
    readonly generic: string;
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

    const matcherNames = collectMatcherNames(templateText);

    if (matcherNames.size === 0) {
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

    const propsToAdd = buildFilterProps(matcherNames, componentClass);

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

function collectMatcherNames(templateText: string): Set<string> {
    FILTER_BY_INPUT_PIPE_RE.lastIndex = 0;

    const matcherNames = new Set<string>();
    let match: RegExpExecArray | null;

    while ((match = FILTER_BY_INPUT_PIPE_RE.exec(templateText)) !== null) {
        matcherNames.add(match[1]!);
    }

    return matcherNames;
}

function buildFilterProps(
    matcherNames: Set<string>,
    componentClass: ClassDeclaration,
): FilterPropDescriptor[] {
    const result: FilterPropDescriptor[] = [];

    for (const matcherName of matcherNames) {
        const filterWithName = `filterWith${matcherName[0]!.toUpperCase()}${matcherName.slice(1)}`;

        if (componentClass.getProperty(filterWithName)) {
            continue;
        }

        const prop = componentClass.getProperty(matcherName);
        const typeText = prop?.getTypeNode()?.getText() ?? '';
        const genericMatch = TUI_STRING_MATCHER_GENERIC_RE.exec(typeText);
        const generic = genericMatch ? `<${genericMatch[1]}>` : '';

        result.push({filterWithName, matcherName, generic});
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
    const propsText = `\n${propsToAdd
        .map(
            ({filterWithName, matcherName, generic}) =>
                `${indent}${filterWithName}: TuiFilterByInputOptions${generic}['filter'] = (items, query, stringify) => items.filter((item) => this.${matcherName}(item, query, stringify));`,
        )
        .join('\n')}\n`;

    closeBrace.getSourceFile().insertText(closeBrace.getStart(), propsText);
}

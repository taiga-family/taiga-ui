import * as path from 'node:path';

import {
    type ClassDeclaration,
    type Decorator,
    getClasses,
    Node,
    type ObjectLiteralExpression,
    type Pattern,
    type PropertyAssignment,
    type Query,
    type StructureType,
} from 'ng-morph';

import {type TemplateResource} from '../../ng-update/interfaces/template-resource';

function isStaticString(node?: Node): boolean {
    return (
        !!node &&
        (Node.isStringLiteral(node) || Node.isNoSubstitutionTemplateLiteral(node))
    );
}

function decoratorToTemplateResource(decorator: Decorator): TemplateResource | null {
    const [metadata] = decorator.getArguments() as ObjectLiteralExpression[];

    const templateUrl = metadata?.getProperty('templateUrl') as
        | PropertyAssignment
        | undefined;

    const template = metadata?.getProperty('template') as PropertyAssignment | undefined;
    const componentPath = decorator.getSourceFile().getFilePath();
    const templateUrlInitializer = templateUrl?.getInitializer();

    if (isStaticString(templateUrlInitializer)) {
        const templatePath = path.parse(
            templateUrlInitializer?.getText().replaceAll(/['"`]/g, '') || '',
        );

        return {
            componentPath,
            templatePath: getFullTemplatePath(templatePath, path.parse(componentPath)),
        };
    }

    return template
        ? {
              componentPath,
              template: template.getInitializer()?.getText() || '',
              offset: template.getInitializer()?.getStart() || 0,
          }
        : null;
}

function getFullTemplatePath(
    templatePath: path.ParsedPath,
    componentPath: path.ParsedPath,
): string {
    return path.join(
        componentPath.dir,
        templatePath.dir,
        `${templatePath.name}${templatePath.ext}`,
    );
}

export function getComponentTemplates(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): TemplateResource[] {
    return getClasses(pattern, query)
        .map((declaration) => declaration.getDecorator('Component'))
        .filter((decorator): decorator is Decorator => !!decorator)
        .map(decoratorToTemplateResource)
        .filter(<T>(x: T | null): x is T => Boolean(x));
}

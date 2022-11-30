import {
    ClassDeclaration,
    Decorator,
    getClasses,
    ObjectLiteralExpression,
    Pattern,
    PropertyAssignment,
    Query,
    StructureType,
} from 'ng-morph';
import * as path from 'path';

import {TemplateResource} from '../../ng-update/interfaces/template-resourse';

export function getComponentTemplates(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): TemplateResource[] {
    return getClasses(pattern, query)
        .map(declaration => declaration.getDecorator(`Component`))
        .filter((decorator): decorator is Decorator => !!decorator)
        .map(decoratorToTemplateResource)
        .filter(<T>(x: T | null): x is T => Boolean(x));
}

function decoratorToTemplateResource(decorator: Decorator): TemplateResource | null {
    const [metadata] = decorator.getArguments() as ObjectLiteralExpression[];

    const templateUrl = metadata.getProperty(`templateUrl`) as PropertyAssignment;
    const template = metadata.getProperty(`template`) as PropertyAssignment;
    const componentPath = decorator.getSourceFile().getFilePath();

    if (templateUrl) {
        const templatePath = path.parse(
            templateUrl?.getInitializer()?.getText().replace(/['"`]/g, ``) || ``,
        );

        return {
            componentPath,
            templatePath: getFullTemplatePath(templatePath, path.parse(componentPath)),
        };
    } else if (template) {
        return {
            componentPath,
            template: template.getInitializer()?.getText() || ``,
            offset: template.getInitializer()?.getStart() || 0,
        };
    }

    return null;
}

function getFullTemplatePath(
    templatePath: path.ParsedPath,
    componentPath: path.ParsedPath,
): string {
    return path.join(
        componentPath.dir,
        templatePath.dir,
        templatePath.name + templatePath.ext,
    );
}

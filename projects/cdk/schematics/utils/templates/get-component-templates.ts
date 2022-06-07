import {
    ClassDeclaration,
    Decorator,
    getClasses,
    ObjectLiteralExpression,
    Pattern,
    PropertyAssignment,
    Query,
} from 'ng-morph';
import * as path from 'path';
import {StructureType} from 'ng-morph/utils/types/structure-type';
import {TemplateResource} from '../../ng-update/interfaces/template-resourse';

export function getComponentTemplates(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): TemplateResource[] {
    return getClasses(pattern, query)
        .map(declaration => declaration.getDecorator('Component'))
        .filter((decorator): decorator is Decorator => !!decorator)
        .map(decoratorToTemplateResource);
}

function decoratorToTemplateResource(decorator: Decorator): TemplateResource {
    const [metadata] = decorator.getArguments() as ObjectLiteralExpression[];

    const templateUrl = metadata.getProperty('templateUrl') as PropertyAssignment;
    const template = metadata.getProperty('template') as PropertyAssignment;

    if (templateUrl) {
        const templatePath = path.parse(
            templateUrl?.getInitializer()?.getText().replace(/['"]/g, '') || '',
        );
        const componentPath = path.parse(decorator.getSourceFile().getFilePath());

        return {templatePath: getFullTemplatePath(templatePath, componentPath)};
    } else {
        return {
            template: template.getInitializer()?.getText() || '',
            offset: template.getInitializer()?.getStart() || 0,
            componentPath: decorator.getSourceFile().getFilePath(),
        };
    }
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

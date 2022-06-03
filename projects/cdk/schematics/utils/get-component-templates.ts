import {
    ClassDeclaration,
    Decorator,
    getClasses,
    Node,
    Pattern,
    PropertyAssignment,
    Query,
} from 'ng-morph';
import * as path from 'path';
import {StructureType} from 'ng-morph/utils/types/structure-type';

export function getComponentTemplates(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): string[] {
    return getClasses(pattern, query)
        .map(declaration => declaration.getDecorator('Component'))
        .filter((decorator): decorator is Decorator => !!decorator)
        .map(decorator => {
            const [metadata] = decorator.getArguments();

            if (!Node.isObjectLiteralExpression(metadata)) {
                return;
            }

            const url = metadata.getProperty('templateUrl') as PropertyAssignment;

            const templateUrl = path.parse(
                url?.getInitializer()?.getText().replace(/['"]/g, '') || '',
            );
            const componentUrl = path.parse(decorator.getSourceFile().getFilePath());

            return path.join(
                componentUrl.dir,
                templateUrl.dir,
                templateUrl.name + templateUrl.ext,
            );
        })
        .filter((str): str is string => !!str);
}

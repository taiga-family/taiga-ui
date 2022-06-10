import {ClassDeclaration, getClasses, Pattern, Query} from 'ng-morph';
import {StructureType} from 'ng-morph/utils/types/structure-type';

export function getNgComponents(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): ClassDeclaration[] {
    return getClasses(pattern, query).filter(
        declaration => !!declaration.getDecorator('Component'),
    );
}

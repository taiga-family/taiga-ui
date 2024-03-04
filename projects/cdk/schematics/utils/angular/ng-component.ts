import {
    type ClassDeclaration,
    getClasses,
    type Pattern,
    type Query,
    type StructureType,
} from 'ng-morph';

export function getNgComponents(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): ClassDeclaration[] {
    return getClasses(pattern, query).filter(
        declaration => !!declaration.getDecorator('Component'),
    );
}

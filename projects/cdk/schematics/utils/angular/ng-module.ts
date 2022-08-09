import {ClassDeclaration, getClasses, getImports, Pattern, Query} from 'ng-morph';
import {StructureType} from 'ng-morph/utils/types/structure-type';

export function getNgModules(
    pattern: Pattern,
    query?: Query<Omit<StructureType<ClassDeclaration>, 'kind'>>,
): ClassDeclaration[] {
    return getClasses(pattern, query).filter(
        declaration => !!declaration.getDecorator('NgModule'),
    );
}

/**
 * Find NgModule where the component was declared.
 */
export function findNgModule(ngComponent: ClassDeclaration): ClassDeclaration | null {
    const allNgModules = getNgModules('**/**.ts');
    return (
        allNgModules.find(module => {
            const moduleFile = module.getSourceFile();
            const imports = getImports(moduleFile.getFilePath(), {
                namedImports: ngComponent.getName(),
            });

            return imports.some(
                i => i.getModuleSpecifierSourceFile() === ngComponent.getSourceFile(),
            );
        }) || null
    );
}

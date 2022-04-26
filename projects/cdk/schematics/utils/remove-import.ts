import {ImportSpecifier} from 'ng-morph';

export function removeImport(specifier: ImportSpecifier): void {
    if (specifier.getImportDeclaration().getNamedImports().length === 1) {
        specifier.getImportDeclaration().remove();
    } else {
        specifier.remove();
    }
}

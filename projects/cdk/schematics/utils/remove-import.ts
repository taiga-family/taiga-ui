import {ImportSpecifier} from 'ng-morph';

export function removeImport(specifier: ImportSpecifier) {
    if (specifier.getImportDeclaration().getNamedImports().length === 1) {
        specifier.getImportDeclaration().remove();
    } else {
        specifier.remove();
    }
}

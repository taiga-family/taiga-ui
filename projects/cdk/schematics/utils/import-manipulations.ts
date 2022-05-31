import {ImportSpecifier} from 'ng-morph';

export function removeImport(specifier: ImportSpecifier): void {
    if (specifier.getImportDeclaration().getNamedImports().length === 1) {
        specifier.getImportDeclaration().remove();
    } else {
        specifier.remove();
    }
}

export function renameImport(specifier: ImportSpecifier, to: string, from: string): void {
    const namedImport = specifier
        .getImportDeclaration()
        .getNamedImports()
        .find(specifier => specifier.getName() === from);
    namedImport?.replaceWithText(to);
}

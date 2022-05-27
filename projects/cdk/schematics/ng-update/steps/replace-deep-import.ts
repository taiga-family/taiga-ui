import {editImports, getImports} from 'ng-morph';

const DEEP_REGEX = /(@taiga-ui\/\w+)\/.*/;

export function replaceDeepImports(): void {
    const deepImports = getImports('**/**').filter(imp =>
        DEEP_REGEX.test(imp.getModuleSpecifier().getLiteralValue()),
    );

    editImports(deepImports, deepImport => {
        const specifier = deepImport.moduleSpecifier.replace(DEEP_REGEX, '$1');
        return {moduleSpecifier: specifier};
    });
}

import {ClassDeclaration, pushToDecoratorArrayProperty} from 'ng-morph';

// TODO: delete after adding to ng-morph
export function addImportToComponent(
    classDeclaration: ClassDeclaration,
    moduleName: string,
    {unique = true}: {unique?: boolean} = {},
): void {
    pushToDecoratorArrayProperty(classDeclaration, 'Component', 'imports', moduleName, {
        unique,
        forceToArray: true,
    });
}

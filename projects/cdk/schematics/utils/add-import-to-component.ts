import {ClassDeclaration} from 'ng-morph';
import {pushToArrayProperty} from 'ng-morph/ng/helpers/push-to-array-property';

// TODO: delete after adding to ng-morph
export function addImportToComponent(
    classDeclaration: ClassDeclaration,
    moduleName: string,
    {unique = true}: {unique?: boolean} = {},
): void {
    pushToArrayProperty(classDeclaration, `Component`, `imports`, moduleName, {
        unique,
        forceToArray: true,
    });
}

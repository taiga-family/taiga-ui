import {saveActiveProject} from 'ng-morph';

import {getObjectLiteralCallArguments} from '../../../utils/get-object-literal-call-arrguments';

export function migrateGetClosestFocusable(): void {
    const args = getObjectLiteralCallArguments({
        names: ['tuiGetClosestFocusable'],
        moduleSpecifier: '@taiga-ui/cdk',
    });

    args.forEach((arg) => arg.getProperty('keyboard')?.remove());

    saveActiveProject();
}

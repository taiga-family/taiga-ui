import {Node, saveActiveProject} from 'ng-morph';

import {getNamedImportReferences} from '../../../utils/get-named-import-references';

export function migrateGetClosestFocusable(): void {
    const references = getNamedImportReferences(
        'tuiGetClosestFocusable',
        '@taiga-ui/cdk',
    );

    references.forEach((ref) => {
        if (ref.wasForgotten()) {
            return;
        }

        const parent = ref.getParent();

        if (!Node.isCallExpression(parent)) {
            return;
        }

        const [arg] = parent.getArguments();

        if (!Node.isObjectLiteralExpression(arg)) {
            return;
        }

        arg.getProperty('keyboard')?.remove();
    });

    saveActiveProject();
}

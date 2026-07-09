import {type Tree} from '@angular-devkit/schematics';
import {Node, saveActiveProject} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {infoLog} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';

const PROPERTY_RENAMES = new Map<string, Record<string, string>>([
    ['TuiHintDirective', {tuiHint: 'content'}],
    ['TuiHintManual', {tuiHintManual: 'visible'}],
]);

export function migrateHintDirectiveBinding(_: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Migrating tuiDirectiveBinding property names for hint directives...');
    }

    for (const [directive, renames] of PROPERTY_RENAMES) {
        for (const ref of getNamedImportReferences(directive, '@taiga-ui/core')) {
            if (ref.wasForgotten()) {
                continue;
            }

            const call = ref.getParent();

            const isDirectiveBindingCall =
                Node.isCallExpression(call) &&
                call.getExpression().getText() === 'tuiDirectiveBinding';

            if (!isDirectiveBindingCall) {
                continue;
            }

            const [firstArg, secondArg] = call.getArguments();

            if (firstArg !== ref || !secondArg || !Node.isStringLiteral(secondArg)) {
                continue;
            }

            const replacement = renames[secondArg.getLiteralValue()];

            if (replacement) {
                secondArg.replaceWithText(`'${replacement}'`);
            }
        }
    }

    saveActiveProject();
}

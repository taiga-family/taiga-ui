import {type Tree} from '@angular-devkit/schematics';
import {Node, saveActiveProject} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {infoLog} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';

const TAIGA_CORE = '@taiga-ui/core';
const ANGULAR_CORE = '@angular/core';
const LEGACY_FN = 'tuiDropdownOpen';
const DIRECTIVE = 'TuiDropdownOpen';

export function migrateDropdownOpen(_tree: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Migrating tuiDropdownOpen() to inject(TuiDropdownOpen).open...');
    }

    for (const ref of getNamedImportReferences(LEGACY_FN, TAIGA_CORE)) {
        if (ref.wasForgotten()) {
            continue;
        }

        const callExpression = getCallExpression(ref);

        if (!callExpression) {
            continue;
        }

        const filePath = ref.getSourceFile().getFilePath();

        callExpression.replaceWithText(`inject(${DIRECTIVE}).open`);

        addUniqueImport(filePath, DIRECTIVE, TAIGA_CORE);
        addUniqueImport(filePath, 'inject', ANGULAR_CORE);
    }

    for (const ref of getNamedImportReferences(LEGACY_FN, TAIGA_CORE)) {
        if (ref.wasForgotten()) {
            continue;
        }

        const parent = ref.getParent();

        if (Node.isImportSpecifier(parent)) {
            removeImport(parent);
        }
    }

    saveActiveProject();
}

function getCallExpression(ref: Node): Node | null {
    const parent = ref.getParent();

    return !parent ||
        !Node.isCallExpression(parent) ||
        parent.getExpression() !== ref ||
        parent.getArguments().length !== 0
        ? null
        : parent;
}

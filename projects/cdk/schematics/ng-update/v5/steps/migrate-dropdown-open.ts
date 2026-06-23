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

    const migratedFiles = new Set<string>();
    const refs = getNamedImportReferences(LEGACY_FN, TAIGA_CORE);

    for (const ref of refs) {
        if (ref.wasForgotten()) {
            continue;
        }

        const parent = ref.getParent();

        if (!parent || Node.isImportSpecifier(parent)) {
            continue;
        }

        const callExpression =
            Node.isCallExpression(parent) &&
            parent.getExpression() === ref &&
            parent.getArguments().length === 0;

        if (!callExpression) {
            continue;
        }

        parent.replaceWithText(`inject(${DIRECTIVE}).open`);
        migratedFiles.add(ref.getSourceFile().getFilePath());
    }

    for (const ref of getNamedImportReferences(LEGACY_FN, TAIGA_CORE)) {
        if (ref.wasForgotten()) {
            continue;
        }

        const parent = ref.getParent();
        const filePath = ref.getSourceFile().getFilePath();

        if (Node.isImportSpecifier(parent) && migratedFiles.has(filePath)) {
            removeImport(parent);
        }
    }

    for (const filePath of migratedFiles) {
        addUniqueImport(filePath, DIRECTIVE, TAIGA_CORE);
        addUniqueImport(filePath, 'inject', ANGULAR_CORE);
    }

    saveActiveProject();
}

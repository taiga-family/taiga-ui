import {type Tree} from '@angular-devkit/schematics';
import {Node, saveActiveProject} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {infoLog} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';

export function migrateDropdownOpen(_: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Migrating tuiDropdownOpen() to inject(TuiDropdownOpen).open...');
    }

    const migratedFiles = new Set<string>();
    const refs = getNamedImportReferences('tuiDropdownOpen', '@taiga-ui/core');

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

        parent.replaceWithText('inject(TuiDropdownOpen).open');
        migratedFiles.add(ref.getSourceFile().getFilePath());
    }

    for (const ref of getNamedImportReferences('tuiDropdownOpen', '@taiga-ui/core')) {
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
        addUniqueImport(filePath, 'TuiDropdownOpen', '@taiga-ui/core');
        addUniqueImport(filePath, 'inject', '@angular/core');
    }

    saveActiveProject();
}

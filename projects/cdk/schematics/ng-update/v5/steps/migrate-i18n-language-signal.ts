import {type Tree} from '@angular-devkit/schematics';
import {infoLog, Node, saveActiveProject} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';

const ANGULAR_CORE = '@angular/core';
const SIGNAL = 'signal';

/**
 * Migrates i18n language providers from of(TUI_*_LANGUAGE) to signal(TUI_*_LANGUAGE).
 *
 * Before:
 * {
 *   provide: TUI_LANGUAGE,
 *   useValue: of(TUI_ENGLISH_LANGUAGE),
 * }
 *
 * After:
 * {
 *   provide: TUI_LANGUAGE,
 *   useValue: signal(TUI_ENGLISH_LANGUAGE),
 * }
 */
export function migrateI18nLanguageSignal(tree: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Migrating i18n language providers to signal-based values...');
    }

    const refs = getNamedImportReferences('TUI_LANGUAGE', '@taiga-ui/i18n');

    for (const ref of refs) {
        if (ref.wasForgotten()) {
            continue;
        }

        const parent = ref.getParent();

        if (!parent || Node.isImportSpecifier(parent)) {
            continue;
        }

        // We are looking for { provide: TUI_LANGUAGE, useValue: of(...) }
        if (!Node.isPropertyAssignment(parent) || parent.getName() !== 'provide') {
            continue;
        }

        const objectLiteral = parent.getParent();

        if (!objectLiteral || !Node.isObjectLiteralExpression(objectLiteral)) {
            continue;
        }

        const useValueProp = objectLiteral.getProperty('useValue');

        if (!useValueProp || !Node.isPropertyAssignment(useValueProp)) {
            continue;
        }

        const initializer = useValueProp.getInitializer();

        if (!initializer || !Node.isCallExpression(initializer)) {
            continue;
        }

        const expression = initializer.getExpression();

        if (expression.getText() !== 'of') {
            continue;
        }

        const args = initializer.getArguments();

        if (args.length !== 1) {
            continue;
        }

        const argText = args[0]?.getText();

        if (argText?.startsWith('TUI_') && argText.endsWith('_LANGUAGE')) {
            useValueProp.setInitializer(`${SIGNAL}(${argText})`);
            addUniqueImport(ref.getSourceFile().getFilePath(), SIGNAL, ANGULAR_CORE);
        }
    }

    saveActiveProject();
}

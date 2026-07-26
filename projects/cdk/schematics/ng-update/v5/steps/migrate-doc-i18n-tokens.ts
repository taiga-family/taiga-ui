import {type Tree} from '@angular-devkit/schematics';
import {createProject, Node, saveActiveProject, setActiveProject} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants/file-globs';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {infoLog, titleLog} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {projectRoot} from '../../../utils/project-root';

const ANGULAR_CORE = '@angular/core';
const SIGNAL = 'signal';

const DOC_I18N_TOKENS = [
    'TUI_DOC_DEMO_TEXTS',
    'TUI_DOC_PREVIEW_TEXT',
    'TUI_DOC_MENU_TEXT',
    'TUI_DOC_SEARCH_TEXT',
    'TUI_DOC_SEE_ALSO_TEXT',
    'TUI_DOC_TOC_TEXT',
    'TUI_DOC_SOURCE_CODE_TEXT',
] as const;

/**
 * Migrates addon-doc i18n token providers from plain values to signal-wrapped values.
 *
 * These tokens changed their type from `string`/`[string, string, string]`
 * to `Signal<string>` in v5.
 *
 * Before:
 * { provide: TUI_DOC_SOURCE_CODE_TEXT, useValue: 'GitHub' }
 *
 * After:
 * { provide: TUI_DOC_SOURCE_CODE_TEXT, useValue: signal('GitHub') }
 */
export function migrateDocI18nTokens(tree: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Migrating addon-doc i18n token providers to signal-based values...');
    }

    const project = createProject(tree, projectRoot(), ALL_TS_FILES);

    setActiveProject(project);

    for (const tokenName of DOC_I18N_TOKENS) {
        const refs = getNamedImportReferences(tokenName, '@taiga-ui/addon-doc');

        for (const ref of refs) {
            if (ref.wasForgotten()) {
                continue;
            }

            const parent = ref.getParent();

            if (
                !parent ||
                Node.isImportSpecifier(parent) ||
                !Node.isPropertyAssignment(parent) ||
                parent.getName() !== 'provide'
            ) {
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

            if (!initializer) {
                continue;
            }

            const initText = initializer.getText();

            if (initText.startsWith(`${SIGNAL}(`)) {
                continue;
            }

            useValueProp.setInitializer(`${SIGNAL}(${initText})`);
            addUniqueImport(ref.getSourceFile().getFilePath(), SIGNAL, ANGULAR_CORE);
        }
    }

    saveActiveProject();

    if (!options['skip-logs']) {
        titleLog('addon-doc i18n token migration completed!');
    }
}

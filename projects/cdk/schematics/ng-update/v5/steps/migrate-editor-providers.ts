import {type Tree} from '@angular-devkit/schematics';
import {Node, saveActiveProject} from 'ng-morph';

import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {infoLog} from '../../../utils/colored-log';
import {getNamedImportReferences} from '../../../utils/get-named-import-references';
import {removeImport} from '../../../utils/import-manipulations';

const EDITOR = '@taiga-ui/editor';

const PROVIDE_TUI_EDITOR_WITH_PLUGINS = `provideTuiEditor({
    // You can disable these plugins
    // if you don't need them
    image: true,
    iframe: true,
    video: true,
    source: true,
    audio: true,
    details: true,
    detailsSummary: true,
    detailsContent: true,
})`;

export function migrateEditorProviders(_: Tree, options: TuiSchema): void {
    if (!options['skip-logs']) {
        infoLog('Migrating TUI_EDITOR_EXTENSIONS provider to provideTuiEditor()...');
    }

    const migratedFiles = new Set<string>();

    for (const ref of getNamedImportReferences('TUI_EDITOR_EXTENSIONS', EDITOR)) {
        if (ref.wasForgotten()) {
            continue;
        }

        const property = ref.getParent();

        const isProvideProperty =
            Node.isPropertyAssignment(property) && property.getName() === 'provide';

        if (!isProvideProperty) {
            continue;
        }

        const provider = property.getParent();

        if (!Node.isObjectLiteralExpression(provider)) {
            continue;
        }

        const hasExtraPlugins = !!provider.getProperty('useFactory');

        provider.replaceWithText(
            hasExtraPlugins ? PROVIDE_TUI_EDITOR_WITH_PLUGINS : 'provideTuiEditor()',
        );
        migratedFiles.add(ref.getSourceFile().getFilePath());
    }

    removeUnusedImport('TUI_EDITOR_EXTENSIONS', migratedFiles);
    removeUnusedImport('TUI_EDITOR_DEFAULT_EXTENSIONS', migratedFiles);

    for (const filePath of migratedFiles) {
        addUniqueImport(filePath, 'provideTuiEditor', EDITOR);
    }

    saveActiveProject();
}

function removeUnusedImport(name: string, files: ReadonlySet<string>): void {
    const refs = getNamedImportReferences(name, EDITOR).filter(
        (ref) => !ref.wasForgotten(),
    );

    for (const ref of refs) {
        const specifier = ref.getParent();
        const filePath = ref.getSourceFile().getFilePath();

        if (!Node.isImportSpecifier(specifier) || !files.has(filePath)) {
            continue;
        }

        const stillUsed = refs.some(
            (other) =>
                other.getSourceFile().getFilePath() === filePath &&
                !Node.isImportSpecifier(other.getParent()),
        );

        if (!stillUsed) {
            removeImport(specifier);
        }
    }
}

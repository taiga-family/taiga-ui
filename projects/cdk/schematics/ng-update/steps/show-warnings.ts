import {SchematicContext} from '@angular-devkit/schematics';
import {Node} from 'ng-morph';

import {MIGRATION_WARNINGS, MigrationWarning} from '../constants/warnings';
import {getNamedImportReferences} from '../../utils/get-named-import-references';

export function showWarnings(context: SchematicContext): void {
    MIGRATION_WARNINGS.forEach(warning => showWarning(warning, context));
}

function showWarning(
    {name, message, moduleSpecifier}: MigrationWarning,
    {logger}: SchematicContext,
): void {
    const references = getNamedImportReferences(name, moduleSpecifier);

    const referencesMeta = references.map(ref => {
        const sourceFile = ref.getSourceFile();

        return {
            sourceFile,
            filePath: sourceFile.getFilePath().toString(),
            isImport: Node.isImportSpecifier(ref.getParent()),
            startLinePos: ref.getStartLinePos(),
        } as const;
    });

    /**
     * We have to twice iterate array with refs because otherwise we get error:
     * > Attempted to get information from a node that was removed or forgotten.
     * See this {@link https://ts-morph.com/manipulation/#strongwarningstrong warning}
     */
    referencesMeta.forEach(({sourceFile, filePath, isImport, startLinePos}) => {
        logger.warn(`[WARNING] in ${filePath}: ${message}`);

        if (isImport) {
            sourceFile.insertText(startLinePos, `// TODO: ${message}\n`);
        }
    });
}

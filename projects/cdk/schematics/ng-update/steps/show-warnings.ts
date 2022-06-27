import {SchematicContext} from '@angular-devkit/schematics';
import {getImports} from 'ng-morph';

import {MIGRATION_WARNINGS, MigrationWarning} from '../constants/warnings';

export function showWarnings(context: SchematicContext): void {
    MIGRATION_WARNINGS.forEach(warning => showWarning(warning, context));
}

function showWarning(
    {name, message, moduleSpecifier = '**/**'}: MigrationWarning,
    {logger}: SchematicContext,
): void {
    const references = getImports('**/**', {
        moduleSpecifier,
        namedImports: [name],
    })
        .map(i =>
            i
                .getNamedImports()
                .find(namedImport => namedImport.getName() === name)
                ?.getNameNode(),
        )
        .filter(<T>(namedImport?: T): namedImport is T => Boolean(namedImport));

    const referencesMeta = references.map(ref => {
        const sourceFile = ref.getSourceFile();

        return {
            sourceFile,
            filePath: sourceFile.getFilePath().toString(),
            startLinePos: ref.getStartLinePos(),
        } as const;
    });

    /**
     * We have to twice iterate array with refs because otherwise we get error:
     * > Attempted to get information from a node that was removed or forgotten.
     * See this {@link https://ts-morph.com/manipulation/#strongwarningstrong warning}
     */
    referencesMeta.forEach(({sourceFile, filePath, startLinePos}) => {
        logger.warn(`[WARNING] in ${filePath}: ${message}`);
        sourceFile.insertText(startLinePos, `// TODO: (Taiga UI migration) ${message}\n`);
    });
}

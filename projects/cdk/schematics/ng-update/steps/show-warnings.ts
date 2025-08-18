import {type SchematicContext} from '@angular-devkit/schematics';
import {getImports} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';
import {type MigrationWarning} from '../interfaces/migration-warning';

function showWarning(
    {name, message, moduleSpecifier = '**/**'}: MigrationWarning,
    {logger}: SchematicContext,
): void {
    const references = getImports(ALL_TS_FILES, {
        moduleSpecifier,
        namedImports: [name],
    })
        .map((i) =>
            i
                .getNamedImports()
                .find((namedImport) => namedImport.getName() === name)
                ?.getNameNode(),
        )
        .filter(<T>(namedImport?: T): namedImport is T => Boolean(namedImport));

    const referencesMeta = references.map((ref) => {
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

export function showWarnings(
    context: SchematicContext,
    warnings: readonly MigrationWarning[],
): void {
    warnings.forEach((warning) => showWarning(warning, context));
}

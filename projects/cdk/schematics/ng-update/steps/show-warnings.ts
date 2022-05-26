import {MIGRATION_WARNINGS, MigrationWarning} from '../constants/warnings';
import {getNamedImportReferences} from '../../utils/get-named-import-references';
import {SchematicContext} from '@angular-devkit/schematics';

export function showWarnings(context: SchematicContext): void {
    for (let warning of MIGRATION_WARNINGS) {
        showWarning(warning, context);
    }
}

function showWarning(
    {name, message, moduleSpecifier}: MigrationWarning,
    {logger}: SchematicContext,
): void {
    const references = getNamedImportReferences(name, moduleSpecifier);

    for (let reference of references) {
        const file = reference.getSourceFile().getFilePath();
        const {line, column} = reference
            .getSourceFile()
            .getLineAndColumnAtPos(reference.getStart());

        logger.warn(`[WARNING]: in ${file} at line ${line}, col ${column}:  ${message}`);
    }
}

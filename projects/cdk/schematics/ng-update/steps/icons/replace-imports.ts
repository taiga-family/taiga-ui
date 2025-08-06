import {getImports, Node, SMALL_TAB_SYMBOL, SUCCESS_SYMBOL, successLog} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {type TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {removeImport} from '../../../utils/import-manipulations';
import {setupProgressLogger} from '../../../utils/progress';
import {type ReplacementIdentifier} from '../../interfaces/replacement-identifier';

export function replaceImports(
    replaceable: ReplacementIdentifier[],
    options: TuiSchema,
): void {
    const allImports = getImports(ALL_TS_FILES);
    const progressLog = setupProgressLogger({
        total: replaceable.length,
    });

    replaceable.forEach(({from, to}) => {
        const importDeclarations = allImports.filter(
            (declaration) =>
                !declaration.wasForgotten() &&
                declaration.getModuleSpecifierValue() === from.moduleSpecifier &&
                declaration
                    .getNamedImports()
                    .some((specifier) => specifier.getName() === from.name),
        );

        const namedImports = importDeclarations.map((declaration) =>
            declaration
                .getNamedImports()
                .find((specifier) => specifier.getName() === from.name),
        );

        namedImports.forEach((namedImport) => {
            if (Node.isImportSpecifier(namedImport) && !namedImport.wasForgotten()) {
                removeImport(namedImport);
                addUniqueImport(
                    namedImport.getSourceFile().getFilePath(),
                    to.namedImport || to.name,
                    to.moduleSpecifier,
                );
            }
        });

        !options['skip-logs'] && progressLog('replacing imports...', true);
    });

    !options['skip-logs'] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} imports replaced \n`);
}

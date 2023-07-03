import {getImports, Node} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants';
import {TuiSchema} from '../../../ng-add/schema';
import {addUniqueImport} from '../../../utils/add-unique-import';
import {SMALL_TAB_SYMBOL, SUCCESS_SYMBOL, successLog} from '../../../utils/colored-log';
import {removeImport} from '../../../utils/import-manipulations';
import {setupProgressLogger} from '../../../utils/progress';
import {ReplacementConst} from '../../interfaces/replacement-const';

export function replaceImports(
    replaceable: ReplacementConst[],
    options: TuiSchema,
): void {
    const allImports = getImports(ALL_TS_FILES);
    const progressLog = setupProgressLogger({
        total: replaceable.length,
    });

    replaceable.forEach(({from, to}) => {
        const importDeclarations = allImports.filter(
            declaration =>
                !declaration.wasForgotten() &&
                declaration.getModuleSpecifierValue() === from.moduleSpecifier &&
                declaration
                    .getNamedImports()
                    .some(specifier => specifier.getName() === from.name),
        );

        const namedImports = importDeclarations.map(declaration =>
            declaration
                .getNamedImports()
                .find(specifier => specifier.getName() === from.name),
        );

        namedImports.forEach(namedImport => {
            if (Node.isImportSpecifier(namedImport) && !namedImport.wasForgotten()) {
                removeImport(namedImport);
                addUniqueImport(
                    namedImport.getSourceFile().getFilePath(),
                    to.namedImport || to.name,
                    to.moduleSpecifier,
                );
            }
        });

        !options[`skip-logs`] && progressLog(`replacing imports...`, true);
    });

    !options[`skip-logs`] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} imports replaced \n`);
}

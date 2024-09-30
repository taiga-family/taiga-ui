import {
    FINISH_SYMBOL,
    getImports,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from 'ng-morph';

import {ALL_TS_FILES} from '../../../constants/file-globs';
import type {TuiSchema} from '../../../ng-add/schema';

export function dropUniversalMock(options: TuiSchema): void {
    const moduleSpecifier = '@ng-web-apis/universal/mocks';
    const imports = getImports(ALL_TS_FILES, {moduleSpecifier});

    if (imports.length) {
        !options['skip-logs'] &&
            infoLog(
                `${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} drop "${moduleSpecifier}" import`,
            );

        const match = new RegExp(
            `import\\s+[\\'\\"\`]${moduleSpecifier}[\\'\\"\`];`,
            'g',
        );

        imports.forEach((declaration) =>
            declaration
                .getSourceFile()
                .replaceWithText(
                    declaration.getSourceFile().getFullText().replaceAll(match, ''),
                ),
        );

        !options['skip-logs'] && titleLog(`${FINISH_SYMBOL} successfully migrated \n`);
    }
}

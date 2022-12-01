import {editImports, getImports} from 'ng-morph';

import {ALL_TS_FILES} from '../../constants';
import {TuiSchema} from '../../ng-add/schema';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';

const DEEP_REGEX = /(@taiga-ui\/\w+)\/.*/;

export function replaceDeepImports(options: TuiSchema): void {
    if (options[`skip-deep-imports`]) {
        return;
    }

    !options[`skip-logs`] &&
        infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing deep imports...`);

    const deepImports = getImports(ALL_TS_FILES).filter(imp =>
        DEEP_REGEX.test(imp.getModuleSpecifier().getLiteralValue()),
    );

    editImports(deepImports, deepImport => {
        const specifier = deepImport.moduleSpecifier.replace(DEEP_REGEX, `$1`);

        return {moduleSpecifier: specifier};
    });

    !options[`skip-logs`] &&
        successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} deep imports replaced \n`);
}

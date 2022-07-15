import {editImports, getImports} from 'ng-morph';
import {
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    SUCCESS_SYMBOL,
    successLog,
} from '../../utils/colored-log';

const DEEP_REGEX = /(@taiga-ui\/\w+)\/.*/;

export function replaceDeepImports(): void {
    infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing deep imports...`);

    const deepImports = getImports('**/**').filter(imp =>
        DEEP_REGEX.test(imp.getModuleSpecifier().getLiteralValue()),
    );

    editImports(deepImports, deepImport => {
        const specifier = deepImport.moduleSpecifier.replace(DEEP_REGEX, '$1');
        return {moduleSpecifier: specifier};
    });

    successLog(`${SMALL_TAB_SYMBOL}${SUCCESS_SYMBOL} deep imports replaced \n`);
}

import * as path from 'path';
import * as process from 'process';

import {getValueByFlag, hasFlag} from './shared/argv.utils';
import {checkImportWithSrc} from './shared/check-import-with-src';
import {checkIncorrectImports} from './shared/check-incorrect-imports';
import {checkPrivateExports} from './shared/check-private-exports';
import {checkRequireWithSrc} from './shared/check-require-with-src';

const pathToSearch = path.resolve(getValueByFlag(`--path`, `./dist`));

(async function main(): Promise<void> {
    try {
        await Promise.all([
            checkIncorrectImports(pathToSearch),
            checkImportWithSrc(pathToSearch),
            hasFlag(`--skip-check-private-exports`)
                ? Promise.resolve()
                : checkPrivateExports(pathToSearch),
            checkRequireWithSrc(pathToSearch),
        ]);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

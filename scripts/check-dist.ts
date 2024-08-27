import {resolve} from 'node:path';
import * as process from 'node:process';

import {getValueByFlag, hasFlag} from './shared/argv.utils';
import {checkImportWithSrc} from './shared/check-import-with-src';
import {checkIncorrectImports} from './shared/check-incorrect-imports';
import {checkPrivateExports} from './shared/check-private-exports';
import {checkRequireWithSrc} from './shared/check-require-with-src';

(async function main(): Promise<void> {
    const path = resolve(getValueByFlag('--path', './dist'));

    try {
        await Promise.all([
            checkIncorrectImports(path),
            checkImportWithSrc(path),
            hasFlag('--skip-check-private-exports')
                ? Promise.resolve()
                : checkPrivateExports(path),
            checkRequireWithSrc(path),
            checkIncorrectImports(
                resolve(path, 'cdk/schematics'),
                '@taiga-ui/cdk/schematics',
            ),
        ]);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

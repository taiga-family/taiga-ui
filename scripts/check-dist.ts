import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {exit} from 'node:process';

import {getValueByFlag, hasFlag} from './shared/argv.utils';
import {checkImportWithSrc} from './shared/check-import-with-src';
import {checkIncorrectImports} from './shared/check-incorrect-imports';
import {checkPrivateExports} from './shared/check-private-exports';
import {checkRequireWithSrc} from './shared/check-require-with-src';

(async function main(): Promise<void> {
    const path = resolve(getValueByFlag('--path', './dist'));

    try {
        checkGlobalStyles(path);

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
        exit(1);
    }
})();

function checkGlobalStyles(directory: string): void {
    for (const file of ['styles/taiga-ui-theme', 'addon-mobile/styles/taiga-ui-mobile']) {
        const source = resolve(directory, `${file}.less`);
        const output = resolve(directory, `${file}.css`);
        const expected = execFileSync(
            process.execPath,
            [
                require.resolve('less/bin/lessc'),
                `--include-path=${resolve('node_modules')}`,
                source,
            ],
            {encoding: 'utf8'},
        );

        if (readFileSync(output, 'utf8') !== expected) {
            throw new Error(`Generated CSS does not match ${source}`);
        }
    }
}

import * as path from 'path';
import * as process from 'process';

import {checkImportWithSrc} from './shared/check-import-with-src';
import {checkIncorrectImports} from './shared/check-incorrect-imports';
import {checkPrivateExports} from './shared/check-private-exports';
import {checkRequireWithSrc} from './shared/check-require-with-src';

const workingDir = process.argv.length > 2 ? process.argv[2] : './dist';
const pathToSearch = path.resolve(workingDir);

(async function main(): Promise<void> {
    try {
        await Promise.all([
            checkIncorrectImports(pathToSearch),
            checkImportWithSrc(pathToSearch),
            checkPrivateExports(pathToSearch),
            checkRequireWithSrc(pathToSearch),
        ]);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();

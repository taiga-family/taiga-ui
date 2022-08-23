import {execSync} from 'child_process';

import {getValueByFlag} from './shared/argv.utils';
import {infoLog} from '../projects/cdk/schematics/utils/colored-log';

const cwd = getValueByFlag<string>(`--cwd`, `./`);

(function main(): void {
    infoLog(`[cwd]: ${cwd}`);

    execSync(
        `
        husky install || echo 'skip error'
        ngcc --async || echo 'skip error'
        ts-node ${cwd}scripts/nx/decorate-angular-cli || echo 'skip error'
    `,
        {stdio: `inherit`},
    );
})();

import {infoLog} from '../projects/cdk/schematics/utils/colored-log';
import {getValueByFlag} from './shared/argv.utils';
import {execute} from './shared/execute';

const cwd = getValueByFlag<string>(`--cwd`, `./`);

(function main(): void {
    infoLog(`[cwd]: ${cwd}`);

    execute(
        `
        husky install || echo 'skip error'
        ngcc --async || echo 'skip error'
        ts-node ${cwd}scripts/nx/decorate-angular-cli
    `,
    );
})();

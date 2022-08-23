import {execSync} from 'child_process';
import {resolve} from 'path';

import {
    errorLog,
    infoLog,
    processLog,
    successLog,
} from '../projects/cdk/schematics/utils/colored-log';
import {getValueByFlag, hasFlag} from './shared/argv.utils';

const path = getValueByFlag<string>(`--path`, ``);
const dryRun = hasFlag(`--dry-run`);

(async function main(): Promise<void> {
    const packageJson = await import(resolve(path, `package.json`));

    infoLog(`name: ${packageJson.name}`);
    infoLog(`version: ${packageJson.version}`);

    if (versionExists()) {
        errorLog(`${packageJson.name}@${packageJson.version} is already published`);

        return;
    }

    const command = `npm publish ${path} ${makeAdditionalFlags()} --access public`;

    processLog(command);
    execSync(command, {stdio: `inherit`, encoding: `utf8`});
    successLog(`+${packageJson.name}@${packageJson.version} is published successfully`);

    function versionExists(): boolean {
        const versions: string[] = JSON.parse(
            execSync(
                `npm view ${packageJson.name} versions --json || echo "[]"`,
            ).toString(),
        );

        return versions.includes(packageJson.version);
    }

    function makeAdditionalFlags(): string {
        const tagNextFlag = packageJson?.version.includes(`rc`) ? `--tag next` : ``;
        const dryRunFlag = dryRun ? `--dry-run` : ``;

        return `${tagNextFlag} ${dryRunFlag}`.trim();
    }
})();

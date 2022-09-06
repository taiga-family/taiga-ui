import {execSync} from 'child_process';
import {resolve} from 'path';

import {
    infoLog,
    processLog,
    successLog,
} from '../projects/cdk/schematics/utils/colored-log';
import {getValueByFlag} from './shared/argv.utils';

const isDryRun =
    getValueByFlag<'true' | 'false' | 'undefined'>(`--dry-run`, `false`) === `true`;
const path = getValueByFlag<string>(`--path`, ``);
const dryRun = hasFlag(`--dry-run`);

(async function main(): Promise<void> {
    const packageJson = await import(resolve(path, `package.json`));

    if (versions.includes(packageJson.version) && !isDryRun) {
        errorLog(`${packageJson.name}@${packageJson.version} is already published`);

        return;
    }

    infoLog(`name: ${packageJson.name}`);
    infoLog(`version: ${packageJson.version}`);

    const dry = isDryRun ? `--dry-run` : ``;
    const tag = makeTag(packageJson.version, versions);
    const command = `npm publish ${path} ${tag} ${dry} --access public`;

    processLog(command);
    execSync(command, {stdio: `inherit`, encoding: `utf8`});
    successLog(`${packageJson.name}@${packageJson.version} is published now`);

    function versionExists(): boolean {
        const versions: string[] = JSON.parse(
            execSync(`npm view ${packageJson.name} versions --json`).toString(),
        );

        return versions.includes(packageJson.version);
    }

    function makeAdditionalFlags(): string {
        const tagNextFlag = packageJson?.version.includes(`rc`) ? `--tag next` : ``;
        const dryRunFlag = dryRun ? `--dry-run` : ``;

        return `${tagNextFlag} ${dryRunFlag}`.trim();
    }
})();

function getAllVersions(name: string): string[] {
    return JSON.parse(
        execSync(`npm view ${name} versions --json || echo "[]"`).toString(),
    );
}

function makeTag(version: string, versions: string[]): string {
    const currentMajor = parseInt(version);
    const maxMajorVersion = Math.max(...versions.map(x => parseInt(x)), currentMajor);
    const tagFlag = maxMajorVersion > currentMajor ? `--tag v${currentMajor}-lts` : ``;

    return version.includes(`rc`) ? `--tag next` : tagFlag;
}

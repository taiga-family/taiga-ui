import {execSync} from 'child_process';
import {resolve} from 'path';

import {
    errorLog,
    infoLog,
    processLog,
    successLog,
} from '../projects/cdk/schematics/utils/colored-log';
import {getValueByFlag} from './shared/argv.utils';
import {getAllVersions} from './shared/get-all-versions';
import {getLastMajorVersion} from './shared/get-last-major-version';

const isDryRun =
    getValueByFlag<'false' | 'true' | 'undefined'>(`--dry-run`, `false`) === `true`;
const path = getValueByFlag<string>(`--path`, ``);

(async function main(): Promise<void> {
    const packageJson = await import(resolve(path, `package.json`));
    const versions: string[] = getAllVersions(packageJson.name);

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
    successLog(`+${packageJson.name}@${packageJson.version} is published successfully`);
})();

function makeTag(version: string, versions: string[]): string {
    const currentMajor = parseInt(version, 10);
    const maxMajorVersion = getLastMajorVersion(versions, currentMajor);
    const tagFlag = maxMajorVersion > currentMajor ? `--tag v${currentMajor}-lts` : ``;

    return version.includes(`rc`) ? `--tag next` : tagFlag;
}

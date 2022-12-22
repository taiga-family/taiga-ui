import {resolve} from 'path';

import {
    errorLog,
    infoLog,
    successLog,
} from '../projects/cdk/schematics/utils/colored-log';
import {getValueByFlag} from './shared/argv.utils';
import {execute} from './shared/execute';
import {getAllVersions} from './shared/get-all-versions';
import {getLastMajorVersion} from './shared/get-last-major-version';

const isDryRun =
    getValueByFlag<'false' | 'true' | 'undefined'>(`--dry-run`, `false`) === `true`;
const path = getValueByFlag<string>(`--path`, ``);

(async function main(): Promise<void> {
    const packageJson = await import(resolve(path, `package.json`));
    const version = getValueByFlag<string>(`--customVersion`, packageJson.version);
    const versions: string[] = getAllVersions(packageJson.name);

    if (versions.includes(version) && !isDryRun) {
        errorLog(`${packageJson.name}@${version} is already published`);

        return;
    }

    infoLog(`name: ${packageJson.name}`);
    infoLog(`version: ${version}`);

    const dry = isDryRun ? `--dry-run` : ``;
    const tag = makeTag(version, versions);

    execute(
        `cd ${path} && npm version ${version} --allow-same-version --no-git-tag-version`,
    );

    execute(`npm publish ${path} ${tag} ${dry} --access public`);

    successLog(`+${packageJson.name}@${version} is published successfully`);
})();

function makeTag(version: string, versions: string[]): string {
    const customTag = getValueByFlag<string>(`--customTag`, ``);

    if (customTag !== ``) {
        return `--tag ${customTag}`;
    }

    const currentMajor = parseInt(version, 10);
    const maxMajorVersion = getLastMajorVersion(versions, currentMajor);
    const tagFlag = maxMajorVersion > currentMajor ? `--tag v${currentMajor}-lts` : ``;

    return version.includes(`rc`) ? `--tag next` : tagFlag;
}

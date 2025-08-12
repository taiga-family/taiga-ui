import {resolve} from 'node:path';

import {errorLog, infoLog, successLog} from 'ng-morph';

import {getValueByFlag} from './shared/argv.utils';
import {execute} from './shared/execute';
import {getAllTags} from './shared/get-all-tags';
import {getAllVersions} from './shared/get-all-versions';
import {parseVersion} from './shared/parse-version';

const isDryRun =
    getValueByFlag<'false' | 'true' | 'undefined'>('--dry-run', 'false') === 'true';
const path = getValueByFlag<string>('--path', '');

(async function main(): Promise<void> {
    const packageJson = await import(resolve(path, 'package.json'));
    const version = getValueByFlag<string>('--customVersion', packageJson.version);
    const versions: string[] = getAllVersions(packageJson.name);

    if (versions.includes(version) && !isDryRun) {
        errorLog(`${packageJson.name}@${version} is already published`);

        process.exit(1);
    }

    infoLog(`name: ${packageJson.name}`);
    infoLog(`version: ${version}`);

    const dry = isDryRun ? '--dry-run' : '';
    const tag = makeTag(version);

    execute(
        `cd ${path} && npm version ${version} --allow-same-version --no-git-tag-version`,
    );

    execute(`npm publish ${path} ${tag} ${dry} --access public`);

    successLog(`+${packageJson.name}@${version} is published successfully`);
})();

function makeTag(version: string): string {
    const customTag = getValueByFlag<string>('--customTag', '');

    if (customTag !== '') {
        return `--tag ${customTag}`;
    }

    if (version.includes('rc')) {
        return '--tag next --preid rc';
    }

    const currentMajor = parseVersion(version).major;
    const latestMajor = parseVersion(getAllTags('@taiga-ui/core').latest ?? '').major;
    const latestOrLTS = currentMajor >= latestMajor ? 'latest' : `v${currentMajor}-lts`;

    return `--tag ${latestOrLTS}`;
}

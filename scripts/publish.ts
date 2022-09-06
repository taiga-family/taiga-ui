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

(async function main(): Promise<void> {
    const packageJson = await import(resolve(path, `package.json`));
    const versions: string[] = getAllVersions(packageJson.name);

    infoLog(`name: ${packageJson.name}`);
    infoLog(`version: ${packageJson.version}`);

    if (versions.includes(packageJson.version)) {
        errorLog(`${packageJson.name}@${packageJson.version} is already published`);

        return;
    }

    const dry = hasFlag(`--dry-run`) ? `--dry-run` : ``;
    const tag = makeTag(packageJson.version, versions);
    const command = `npm publish ${path} ${tag} ${dry} --access public`;

    processLog(command);
    execSync(command, {stdio: `inherit`, encoding: `utf8`});
    successLog(`+${packageJson.name}@${packageJson.version} is published successfully`);
})();

function getAllVersions(name: string): string[] {
    const command = `npm view ${name} versions --json`;

    infoLog(`fetch: ${command}`);

    return JSON.parse(execSync(`${command} || echo "[]"`).toString());
}

function makeTag(version: string, versions: string[]): string {
    const currentMajor = parseInt(version);
    const maxMajorVersion = Math.max(...versions.map(x => parseInt(x)), currentMajor);
    const tagFlag = maxMajorVersion > currentMajor ? `--tag v${currentMajor}` : ``;

    return version.includes(`rc`) ? `--tag next` : tagFlag;
}

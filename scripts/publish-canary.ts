import {resolve} from 'path';

import {version} from '../package.json';
import {infoLog} from '../projects/cdk/schematics/utils/colored-log';
import {execute} from './shared/execute';
import {overwriteVersion} from './shared/overwrite-version';

(function main(): void {
    const type = `canary`;
    const commit = execute(`git rev-parse HEAD`, {}).slice(0, 7);
    const [major, minor, patch] = version.split(/[.-]/);

    // construct new version from base version x.y.z to become x.y.z-{type}.{shortSha}
    const newVersion = `${major}.${minor + 1}.${patch}-${type}.${commit}`;

    infoLog(`New dev version - ${newVersion}`);

    overwriteVersion(resolve(`./projects/cdk/constants/version.ts`), newVersion);

    execute(
        `npx nx run-many --target publish --all --customTag=${type} --customVersion=${newVersion}`,
    );
})();

import {execSync} from 'child_process';
import {resolve} from 'path';

import {version} from '../package.json';
import {overwriteVersion} from './shared/overwrite-version';
import {syncVersions} from './shared/sync-versions';

(function main(): void {
    syncVersions([`./projects`, `./package-lock.json`], version);
    overwriteVersion(resolve(`./projects/cdk/constants/version.ts`), version);
    execSync(`git add .`, {stdio: `inherit`});
})();

import {resolve} from 'path';

import {version} from '../package.json';
import {execute} from './shared/execute';
import {overwriteVersion} from './shared/overwrite-version';
import {syncVersions} from './shared/sync-versions';

(function main(): void {
    syncVersions([`./projects`, `./package-lock.json`], version);
    overwriteVersion(resolve(`./projects/cdk/constants/version.ts`), version);
    execute(`git add .`);
})();

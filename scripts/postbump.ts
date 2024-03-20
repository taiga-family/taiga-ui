import {resolve} from 'node:path';

import {version} from '../package.json';
import {execute} from './shared/execute';
import {IGNORABLE_TAIGA_PACKAGES} from './shared/ignorable-packages';
import {overwriteVersion} from './shared/overwrite-version';
import {syncVersions} from './shared/sync-versions';

(function main(): void {
    syncVersions(
        ['./projects', './package-lock.json'],
        version,
        IGNORABLE_TAIGA_PACKAGES,
    );
    overwriteVersion(resolve('./projects/cdk/constants/version.ts'), version);
    execute('git add .');
})();

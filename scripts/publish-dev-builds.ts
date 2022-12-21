import {execSync} from 'child_process';

import {version} from '../package.json';
import {infoLog} from '../projects/cdk/schematics/utils/colored-log';

(function main(): void {
    const commit = execSync(`git rev-parse HEAD`).toString().trim().slice(0, 7);
    const branch = execSync(`git symbolic-ref --short HEAD`).toString().trim();
    const [major, minor, patch] = version.split(/[.-]/);

    // construct new version from base version x.y.z to become x.y.z-{dev}.{shortSha}
    const newVersion = `${major}.${minor}.${patch}-dev.${branch}-${commit}`;

    infoLog(`New dev version - ${newVersion}`);

    execSync(
        `npx nx run-many --target publish --all --customTag=dev --customVersion=${newVersion}`,
        {stdio: `inherit`},
    );
})();

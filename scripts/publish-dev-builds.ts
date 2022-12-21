import {version} from '../package.json';
import {infoLog} from '../projects/cdk/schematics/utils/colored-log';
import {execute} from './shared/execute';

(function main(): void {
    const commit = execute(`git rev-parse HEAD`, {}).slice(0, 7);
    const branch = execute(`git symbolic-ref --short HEAD`, {});
    const [major, minor, patch] = version.split(/[.-]/);

    // construct new version from base version x.y.z to become x.y.z-{dev}.{shortSha}
    const newVersion = `${major}.${minor}.${patch}-dev.${branch}-${commit}`;

    infoLog(`New dev version - ${newVersion}`);

    execute(
        `npx nx run-many --target publish --all --customTag=dev --customVersion=${newVersion}`,
    );
})();

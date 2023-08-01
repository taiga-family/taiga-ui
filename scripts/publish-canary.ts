import {version} from '../package.json';
import {infoLog} from '../projects/cdk/schematics/utils/colored-log';
import {execute} from './shared/execute';

(function main(): void {
    const type = `canary`;
    const commit = execute(`git rev-parse HEAD`, {}).slice(0, 7);
    const [major, minor, patch] = version.split(/[.-]/);

    // construct new version from base version x.y.z to become x.y.z-{type}.{shortSha}
    const newVersion = `${major}.${minor}.${patch}-${type}.${commit}`;

    infoLog(`New dev version - ${newVersion}`);

    execute(
        `npx nx run-many --target publish --all --customTag=${type} --customVersion=${newVersion}`,
    );
})();

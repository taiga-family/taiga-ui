import {execSync} from 'child_process';

export function postBuildAllVersion(publishableVersions: Map<number, string>): void {
    const location = Array.from(publishableVersions.entries()).reduce(
        (location, [major]: [number, string]) => `${location},v${major}`,
        `next`,
    );

    execSync(
        `
        npm run exec -- ./scripts/postbuild-demo.ts \
              --path ./dist/demo/browser/ \
              --location ${location}`,
        {stdio: `inherit`},
    );
}

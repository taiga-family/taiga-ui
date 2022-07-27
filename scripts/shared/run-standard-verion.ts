import {CommonExecOptions, execSync} from 'child_process';

import {TuiReleaseMode} from './release-mode';

export function runStandardVersion(
    version: string,
    mode: TuiReleaseMode,
    enabledDryRun: boolean,
): void {
    const dryRun = enabledDryRun ? `--dry-run` : ``;
    const options: CommonExecOptions = {stdio: `inherit`};

    if (mode === `prerelease`) {
        execSync(
            `
            npm run release -- \
                --release-as ${version} ${dryRun} \
                --skip.changelog \
                --skip.tag
            `,
            options,
        );
    } else {
        execSync(`npm run release -- --release-as ${version}  ${dryRun}`, options);
    }
}

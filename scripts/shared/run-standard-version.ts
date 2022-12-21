import {execute} from './execute';
import {TuiReleaseMode} from './release-mode';

export function runStandardVersion(
    version: string,
    mode: TuiReleaseMode,
    enabledDryRun: boolean,
): void {
    const dryRun = enabledDryRun ? `--dry-run` : ``;

    if (mode === `prerelease`) {
        execute(
            `
            npm run release -- \
                --release-as ${version} ${dryRun} \
                --skip.changelog \
                --skip.tag
            `,
        );
    } else {
        execute(`npm run release -- --release-as ${version} ${dryRun}`);
    }
}

import {execute} from './execute';
import {type TuiReleaseMode} from './release-mode';

export function runStandardVersion(
    version: string,
    mode: TuiReleaseMode,
    enabledDryRun: boolean,
): void {
    const dryRun = enabledDryRun ? '--dry-run' : '';

    if (mode === 'prerelease') {
        execute(
            `
            npm run release -- \
                --prerelease=rc \
                --release-as ${version} ${dryRun} \
                --skip.changelog \
            `,
        );
    } else {
        execute(`npm run release -- --release-as ${version} ${dryRun}`);
    }
}

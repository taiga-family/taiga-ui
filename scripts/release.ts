import {version} from '../package.json';
import {infoLog} from '../projects/cdk/schematics/utils/colored-log';
import {getValueByFlag, hasFlag} from './shared/argv.utils';
import {bumpVersion} from './shared/bump-version';
import {checkChangelogBeforePush} from './shared/check-changelog-before-push';
import {gitCommitAndPush} from './shared/git-commit-and-push';
import {makeReleaseBranch} from './shared/make-release-branch';
import {TuiReleaseMode} from './shared/release-mode';
import {runStandardVersion} from './shared/run-standard-version';

const ci = hasFlag(`--ci-mode`);
const mode = getValueByFlag<TuiReleaseMode>(`--release-as`, `minor`);
const dryRun = getValueByFlag<'true' | 'false'>(`--dry-run`, `false`) === `true`;
const newVersion = bumpVersion(version, mode);

infoLog(JSON.stringify({ci, mode, newVersion, dryRun}, null, 4));

(async function main(): Promise<void> {
    if (ci) {
        runStandardVersion(newVersion, mode, dryRun);
    } else {
        makeReleaseBranch(newVersion);
        runStandardVersion(newVersion, mode, dryRun);
        await checkChangelogBeforePush();
        gitCommitAndPush(newVersion);
    }
})();

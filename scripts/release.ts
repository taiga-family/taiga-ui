import {version} from '../package.json';
import {getValueByFlag, hasFlag} from './shared/argv.utils';
import {bumpVersion} from './shared/bump-version';
import {checkChangelogBeforePush} from './shared/check-changelog-before-push';
import {checkPrettierChangesAndCommit} from './shared/check-prettier-changes-and-commit';
import {gitCommitAndPush} from './shared/git-commit-and-push';
import {makeReleaseBranch} from './shared/make-release-branch';
import {TuiReleaseMode} from './shared/release-mode';
import {runStandardVersion} from './shared/run-standard-verion';

const ci = hasFlag('--ci-mode');
const mode = getValueByFlag<TuiReleaseMode>('--release-as', 'minor');
const newVersion = bumpVersion(version, mode);

(async function main(): Promise<void> {
    if (ci) {
        runStandardVersion(newVersion);
        checkPrettierChangesAndCommit();
    } else {
        makeReleaseBranch(newVersion);
        runStandardVersion(newVersion);
        checkPrettierChangesAndCommit();
        await checkChangelogBeforePush();
        gitCommitAndPush(newVersion);
    }
})();

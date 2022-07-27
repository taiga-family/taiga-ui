import {execSync} from 'child_process';

export function makeReleaseBranch(newVersion: string): void {
    execSync(`git checkout main`, {stdio: `inherit`});
    execSync(`git pull`, {stdio: `inherit`});
    execSync(`git checkout -B release/${newVersion}`, {stdio: `inherit`});
}

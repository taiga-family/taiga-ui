import {execute} from './execute';

export function makeReleaseBranch(newVersion: string): void {
    // execute('git checkout main');
    // execute('git pull');
    execute(`git checkout -B release/${newVersion}`);
}

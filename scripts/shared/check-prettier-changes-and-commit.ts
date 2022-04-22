import {execSync} from 'child_process';

export function checkPrettierChangesAndCommit(): void {
    execSync(`prettier '**/*.{json,md}' --write`, {stdio: 'inherit'});
    execSync('git add .', {stdio: 'inherit'});
    execSync(`git commit -m 'chore: fix format by prettier' --no-verify`, {
        stdio: 'inherit',
    });
}

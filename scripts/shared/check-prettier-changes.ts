import {execSync} from 'child_process';

export function checkPrettierChanges(): void {
    execSync(`prettier '${pattern}' --write`, {stdio: 'inherit'});
    execSync('git add .', {stdio: 'inherit'});
}

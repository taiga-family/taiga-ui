import {execSync} from 'child_process';

export function runStandardVersion(newVersion: string): void {
    execSync(`npm run release -- --release-as ${newVersion}`, {stdio: 'inherit'});
}

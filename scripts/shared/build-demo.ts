import {execSync} from 'child_process';

export function buildCurrentVersion(): void {
    execSync(`nx build demo`, {stdio: `inherit`});
}

export function buildNextVersion(): void {
    execSync(`nx build --base-href /next/ --output-path dist/demo/browser/next`, {
        stdio: `inherit`,
    });
}

import {execSync} from 'child_process';

export function buildCurrentVersion(): void {
    execSync(`nx build demo --prod --configuration=production`, {stdio: `inherit`});
}

export function buildNextVersion(): void {
    execSync(
        `nx build demo --prod \
            --configuration=production \
            --base-href /next/ \
            --output-path dist/demo/browser/next`,
        {stdio: `inherit`},
    );
}

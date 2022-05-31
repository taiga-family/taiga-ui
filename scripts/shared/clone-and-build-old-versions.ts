import {execSync} from 'child_process';

const GIT_REPO = 'https://github.com/Tinkoff/taiga-ui.git';
const TARGET_CLONED_REPOS_DIR = 'taiga-ui-olds';

export function cloneAndBuildOldVersions(publishableVersions: Map<number, string>): void {
    for (const [major, full] of Array.from(publishableVersions.entries())) {
        const targetDir = `${TARGET_CLONED_REPOS_DIR}/v${major}`;

        console.info(
            '\x1b[32m%s\x1b[0m',
            '[cloning...]: ',
            `${GIT_REPO}@v${full} to ${targetDir}`,
        );

        execSync(
            `
            git config --global advice.detachedHead false # You are in 'detached HEAD' state
            git config --global http.postBuffer 157286400 # Fix problem LibreSSL SSL_read: SSL_ERROR_SYSCALL
            git clone --depth 1 --branch v${full} ${GIT_REPO} ${targetDir}
            cd ${targetDir} && npm ci --ignore-scripts --no-audit
            npx ng build demo --prod \
                --configuration=production \
                --base-href /v${major}/ \
                --deploy-url ./ \
                --output-path ../../dist/demo/browser/v${major}
                `,
            {stdio: 'inherit'},
        );
    }
}

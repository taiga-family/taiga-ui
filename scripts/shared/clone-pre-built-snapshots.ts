import {execSync} from 'child_process';

const GIT_REPO = 'https://github.com/Tinkoff/taiga-ui.git';
const BASE_SNAPSHOT_BRANCH_PREFIX = 'snapshots/v/';
const TARGET_CLONED_REPOS_DIR_PREFIX = 'dist/demo/browser';

export function clonePreBuiltSnapshots(publishableVersions: Map<number, string>): void {
    for (const [major, full] of Array.from(publishableVersions.entries())) {
        const targetDir = `${TARGET_CLONED_REPOS_DIR_PREFIX}/v${major}`;

        console.info(
            '\x1B[32m%s\x1B[0m',
            '[cloning...]: ',
            `${GIT_REPO}@v${full} to ${targetDir}`,
        );

        execSync(
            `
            git config --global advice.detachedHead false # You are in 'detached HEAD' state
            git config --global http.postBuffer 157286400 # Fix problem LibreSSL SSL_read: SSL_ERROR_SYSCALL
            git clone --depth 1 --branch ${BASE_SNAPSHOT_BRANCH_PREFIX}${major}.x ${GIT_REPO} ${targetDir}
            `,
            {stdio: 'inherit'},
        );
    }
}

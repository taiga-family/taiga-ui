import {execSync} from 'child_process';

import {TAIGA_VERSION} from '../../projects/cdk/schematics/ng-add/constants/versions';

function getAllSortedTags(): string[] {
    return execSync(
        'git for-each-ref --sort=v:refname --format "%(refname:strip=2)" refs/tags',
    )
        .toString()
        .split('\n')
        .map(cleanupVersion)
        .filter(Boolean);
}

function cleanupVersion(version: string): string {
    return version.replace(/[A-Za-z-]/g, '').replace(/[~^]/g, '');
}

/**
 * @example:
 * result -> Map(2) { 3 => '3.10.0', 2 => '2.47.0' } / if current version is v4+
 * result -> Map(1) { 2 => '2.47.0' } / if current version is v3+
 * result -> Map(0) {} / if current version is v2+
 *
 * We are ignoring v1.x snapshot
 */
export function makePublishableVersionsMap(): Map<number, string> {
    const sortedTags = getAllSortedTags();

    let publishableVersions: Map<number, string> = new Map();
    const lastMajorVersion = parseInt(cleanupVersion(TAIGA_VERSION));

    for (const fullVersion of sortedTags) {
        const majorVersion = parseInt(fullVersion);

        if (majorVersion !== lastMajorVersion && majorVersion > 1) {
            publishableVersions.set(majorVersion, fullVersion);
        }
    }

    publishableVersions = new Map([...publishableVersions].sort(([a], [b]) => b - a));

    console.info('\x1b[32m%s\x1b[0m', '[old last versions]:', publishableVersions);

    return publishableVersions;
}

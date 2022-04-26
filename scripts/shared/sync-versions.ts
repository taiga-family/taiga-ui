import {readFileSync, writeFileSync} from 'fs';
import {glob} from 'glob';

import {bumpTuiDeps} from './bump-tui-deps';

const INDENTATION = 4;

export function syncVersions(
    rootDir: string,
    version: string,
    ignores: string[] = [],
): void {
    glob(
        `${rootDir}/**/*(package.json|package-lock.json)`,
        {ignore: '**/node_modules/**'},
        (_: Error | null, files: string[]) => {
            files.forEach(file => {
                const packageJson = JSON.parse(readFileSync(file).toString());
                const {dependencies, peerDependencies, devDependencies} = packageJson;

                if (dependencies) {
                    bumpTuiDeps({deps: dependencies, version, ignores});
                }

                if (peerDependencies) {
                    bumpTuiDeps({
                        deps: peerDependencies,
                        version,
                        isPeerDependency: true,
                        ignores,
                    });
                }

                if (devDependencies) {
                    bumpTuiDeps({deps: devDependencies, version, ignores});
                }

                writeFileSync(
                    file,
                    `${JSON.stringify(
                        {
                            ...packageJson,
                            ...('version' in packageJson && {
                                version: version,
                            }),
                        },
                        null,
                        INDENTATION,
                    )}\n`,
                );
            });
        },
    );
}

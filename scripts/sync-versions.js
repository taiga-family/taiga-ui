const fs = require('fs');
const glob = require('glob');
const {version} = require('../package.json');

const INDENTATION = 4;

syncVersions('projects');

function syncVersions(root) {
    glob(
        root + '/**/*(package.json|package-lock.json)',
        {
            ignore: '**/node_modules/**',
        },
        (_, files) => {
            files.forEach(file => {
                const packageJson = JSON.parse(fs.readFileSync(file));
                const {dependencies, peerDependencies, devDependencies} = packageJson;

                if (dependencies) {
                    bumpTUIDeps({deps: dependencies, version});
                }

                if (peerDependencies) {
                    bumpTUIDeps({
                        deps: peerDependencies,
                        version,
                        isPeerDependency: true,
                    });
                }

                if (devDependencies) {
                    bumpTUIDeps({deps: devDependencies, version});
                }

                fs.writeFileSync(
                    file,
                    JSON.stringify(
                        {
                            ...packageJson,
                            ...('version' in packageJson && {
                                version: version,
                            }),
                        },
                        null,
                        INDENTATION,
                    ) + `\n`,
                );
            });
        },
    );
}

function bumpTUIDeps({deps, version, isPeerDependency}) {
    const prefix = isPeerDependency ? '>=' : '^';
    Object.keys(deps)
        .filter(key => !key.indexOf('@taiga-ui/'))
        .forEach(key => {
            deps[key] = `${prefix}${version}`;
        });
}

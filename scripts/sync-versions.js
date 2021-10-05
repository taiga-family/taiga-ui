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
                    bumpTUIDeps(dependencies, version);
                }

                if (peerDependencies) {
                    bumpTUIDeps(peerDependencies, version);
                }

                if (devDependencies) {
                    bumpTUIDeps(devDependencies, version);
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
                    ),
                );
            });
        },
    );
}

function bumpTUIDeps(deps, version) {
    Object.keys(deps)
        .filter(key => !key.indexOf('@taiga-ui/'))
        .forEach(key => {
            deps[key] = version;
        });
}

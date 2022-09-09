import {readFileSync, writeFileSync} from 'fs';
import {glob} from 'glob';

import {processLog, successLog} from '../../projects/cdk/schematics/utils/colored-log';
import {updatePackageJsonStructure} from './update-package-json-structure';

const INDENTATION = 4;

export function syncVersions(
    filesOrDirectories: string[],
    newVersion: string,
    ignores: string[] = [],
): void {
    const patterns = filesOrDirectories.map(pattern =>
        pattern.endsWith(`.json`)
            ? pattern
            : `${pattern}/**/*(package.json|package-lock.json)`,
    );

    const files = patterns
        .map(pattern => glob.sync(pattern, {ignore: `**/node_modules/**`}))
        .flatMap(files => files)
        .filter(file => !file.includes(`node_modules`));

    for (const file of files) {
        const originalJSON = `${JSON.stringify(
            JSON.parse(readFileSync(file).toString()),
            null,
            INDENTATION,
        )}`;
        const packageJson = JSON.parse(originalJSON);
        const prevVersion = packageJson.version;

        if (!prevVersion) {
            continue;
        }

        updatePackageJsonStructure({
            isPackageLockFile: file.endsWith(`-lock.json`),
            packageJson,
            prevVersion,
            newVersion,
            ignores,
        });

        const updatedJSON = `${JSON.stringify(packageJson, null, INDENTATION)}`;

        if (originalJSON !== updatedJSON) {
            writeFileSync(file, `${updatedJSON}\n`);
            successLog(`[synchronized]: ${file}`);
        } else {
            processLog(`[no changes]: ${file}`);
        }
    }
}

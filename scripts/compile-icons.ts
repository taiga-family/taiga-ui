import {unlinkSync} from 'fs';
import * as path from 'path';

import {
    convertAllCompileFileToAllFile,
    postPrettierFormat,
    prepareAllToCompileFile,
} from '../projects/icons/scripts';

(async function main(): Promise<void> {
    const projectPath = process.argv[2] || `projects/icons`;
    const iconsSrc = path.resolve(`${projectPath}/src/`);
    const allToCompilePath = path.resolve(`${projectPath}/all-to-compile.ts`);
    const resultAllFile = path.resolve(`${projectPath}/all.ts`);

    prepareAllToCompileFile(iconsSrc, allToCompilePath);

    await convertAllCompileFileToAllFile({
        from: allToCompilePath,
        to: resultAllFile,
    });

    postPrettierFormat(resultAllFile);

    try {
        unlinkSync(allToCompilePath);
    } catch (err) {
        console.error(`Cannot delete file ${allToCompilePath}: ${err.toString()}`);
    }
})();

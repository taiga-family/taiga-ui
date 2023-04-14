import {readdirSync, unlinkSync} from 'fs';
import * as path from 'path';

import {
    tuiConvertAllCompileFileToAllFile,
    tuiPostPrettierFormat,
    tuiPrepareAllToCompileFile,
} from '../projects/icons/scripts';

(async function main(): Promise<void> {
    const projectPath = process.argv[2] || `projects/icons`;
    const iconsSrc = path.resolve(`${projectPath}/src/`);
    const allToCompilePath = path.resolve(`${projectPath}/all-to-compile.ts`);
    const resultAllFile = path.resolve(`${projectPath}/all.ts`);
    const prettier = require(path.resolve(`./prettier.config.js`));

    tuiPrepareAllToCompileFile(iconsSrc, allToCompilePath);

    await tuiConvertAllCompileFileToAllFile({
        from: allToCompilePath,
        to: resultAllFile,
        include: `**/icons/src/**/*.svg`,
        prt2Options: {
            include: [`${projectPath}/**`],
            exclude: [`${projectPath}/**/*.svg`],
        },
    });

    tuiPostPrettierFormat({
        file: resultAllFile,
        config: {...prettier, parser: `typescript`},
    });

    const icons = readdirSync(iconsSrc)
        .filter(file => file.endsWith(`.svg`))
        .map(file => `${iconsSrc}/${file}`);

    for (const file of icons) {
        // @note: double format for pretty output new lines
        tuiPostPrettierFormat({file, config: {printWidth: 120, parser: `angular`}});
        tuiPostPrettierFormat({file, config: {...prettier, parser: `xml`}});
    }

    try {
        unlinkSync(allToCompilePath);
    } catch (err) {
        console.error(`Cannot delete file ${allToCompilePath}: ${String(err)}`);
    }
})();

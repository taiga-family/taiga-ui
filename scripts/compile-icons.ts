import {readdirSync, unlinkSync} from 'fs';
import * as path from 'path';
import {Config} from 'prettier';

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
    const config = require(require.resolve(`@taiga-ui/prettier-config`)) as Config;
    const svg = require(require.resolve(
        `@taiga-ui/prettier-config/options/svg`,
    )) as Config;

    tuiPrepareAllToCompileFile(iconsSrc, allToCompilePath);

    await tuiConvertAllCompileFileToAllFile({
        from: allToCompilePath,
        to: resultAllFile,
        include: `**/${projectPath}/src/**/*.svg`,
        prt2Options: {
            include: [`**/${projectPath}/**`],
            exclude: [`**/*.svg`],
        },
    });

    tuiPostPrettierFormat({
        file: resultAllFile,
        config: {...config, parser: `typescript`},
    });

    const icons = readdirSync(iconsSrc)
        .filter(file => file.endsWith(`.svg`))
        .map(file => `${iconsSrc}/${file}`);

    for (const file of icons) {
        tuiPostPrettierFormat({
            file,
            config: {...config, ...svg, parser: `angular`},
        });
        tuiPostPrettierFormat({
            file,
            config: {...config, ...svg, parser: `xml`},
        });
    }

    try {
        unlinkSync(allToCompilePath);
    } catch (err) {
        console.error(`Cannot delete file ${allToCompilePath}: ${String(err)}`);
    }
})();

import {readdirSync, unlinkSync, writeFileSync} from 'fs';
import {rollup} from 'rollup';
import {rollupSvgo} from './rollup-svgo';

const typescript = require('rollup-plugin-typescript2');
const projectPath = process.argv[2] || 'projects/icons';
const allToCompilePath = `${projectPath}/all-to-compile.ts`;
const iconsSrc = `${projectPath}/src/`;

const inputOptions = {
    input: allToCompilePath,
    output: {
        preferConst: true,
    },
    plugins: [
        typescript(),
        rollupSvgo({
            include: '**/*.svg',
            options: {
                plugins: [
                    {removeViewBox: false},
                    {collapseGroups: false},
                    {cleanupIDs: false},
                    {removeUnknownsAndDefaults: false},
                ],
            },
        }),
    ],
};

build();

async function build(): Promise<void> {
    prepareAllToCompileFile();

    const bundle = await rollup(inputOptions);

    await bundle.write({
        format: 'es',
        file: projectPath + '/all.ts',
    });

    deleteAllToCompileFile();
}

function prepareAllToCompileFile() {
    const icons = readdirSync(iconsSrc).filter(file => file.split('.').pop() === 'svg');

    const fileBody = `${icons.reduce((acc, fileName) => {
        return (
            acc +
            `import ${fileName.split('.')[0]} from './src/${
                fileName.split('.')[0]
            }.svg';\n`
        );
    }, '')}

    export {
        ${icons.reduce((acc, el) => {
            return acc + `${el.split('.')[0]},\n`;
        }, '')}
    };`;

    writeFileSync(allToCompilePath, fileBody);
}

function deleteAllToCompileFile() {
    unlinkSync(allToCompilePath);
}

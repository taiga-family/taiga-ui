// cspell:ignore lessc
import {execFileSync} from 'node:child_process';
import {mkdirSync} from 'node:fs';
import {basename, dirname, resolve} from 'node:path';

const [projectRoot, ...stylesheets] = process.argv.slice(2);

if (!projectRoot || !stylesheets.length) {
    throw new Error('Expected a project root and at least one LESS file');
}

for (const stylesheet of stylesheets) {
    if (!stylesheet.endsWith('.less')) {
        throw new Error(`Expected a LESS file: ${stylesheet}`);
    }

    const input = resolve(projectRoot, stylesheet);
    const output = resolve(
        'dist',
        basename(projectRoot),
        stylesheet.replace(/\.less$/, '.css'),
    );

    mkdirSync(dirname(output), {recursive: true});
    execFileSync(
        process.execPath,
        [
            require.resolve('less/bin/lessc'),
            `--include-path=${resolve('node_modules')}`,
            input,
            output,
        ],
        {stdio: 'inherit'},
    );
}

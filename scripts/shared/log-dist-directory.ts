import {readdirSync, statSync} from 'fs';

export function logDistDirectory(): void {
    const dir = 'dist/demo/browser/';

    console.info('\x1b[32m%s\x1b[0m', '[built]:', dir);

    readdirSync(dir)
        .filter(
            stat =>
                (statSync(`${dir}/${stat}`).isDirectory() && stat !== 'assets') ||
                stat.endsWith('.html'),
        )
        .forEach(stat => console.info('\x1b[35m%s\x1b[0m', `${dir}${stat}`));
}

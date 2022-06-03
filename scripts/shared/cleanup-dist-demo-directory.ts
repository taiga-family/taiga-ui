import {rmdirSync} from 'fs';

export function cleanupDistDemoDirectory(): void {
    try {
        console.info('\x1b[32m%s\x1b[0m', '[cleanup]:', 'dist/demo');
        rmdirSync('dist/demo', {recursive: true});
    } catch (err) {
        console.info('\x1b[35m%s\x1b[0m', err.message);
    }
}

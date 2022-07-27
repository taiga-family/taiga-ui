import {rmdirSync} from 'fs';

export function cleanupDistDemoDirectory(): void {
    try {
        console.info(`\x1B[32m%s\x1B[0m`, `[cleanup]:`, `dist/demo`);
        rmdirSync(`dist/demo`, {recursive: true});
    } catch (err) {
        console.info(`\x1B[35m%s\x1B[0m`, err.message);
    }
}

import {grepByPattern} from './grep-by-pattern';

export async function checkRequireWithSrc(path: string): Promise<void> | never {
    const result = await grepByPattern({
        includePattern: 'require(.*/src/.*)',
        excludePattern: 'taiga-ui-icons-scripts',
        path,
    });

    if (result.length > 0) {
        throw new Error(`There are problems with require(.../src/...) in:\n\n${result}`);
    }
}

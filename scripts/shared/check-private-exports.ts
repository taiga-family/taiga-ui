import {grepByPattern} from './grep-by-pattern';

export async function checkPrivateExports(path: string): Promise<void> | never {
    const result = await grepByPattern({
        includePattern: 'ɵ0',
        excludePattern: 'icons/src',
        path,
    });

    if (result.length > 0) {
        throw new Error(`There are problems with private exports in:\n\n${result}`);
    }
}

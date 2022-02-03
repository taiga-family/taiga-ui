import {grepByPattern} from './grep-by-pattern';

export async function checkRequireWithSrc(path: string): Promise<void> | never {
    const includePattern = 'require(.*/src/.*)';
    const result = await grepByPattern({
        excludePattern: 'taiga-ui-icons-scripts|browser',
        includePattern,
        path,
    });

    if (result.length > 0) {
        throw new Error(`There are problems with ${includePattern} in:\n\n${result}`);
    }
}

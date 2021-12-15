import {grepByPattern} from './grep-by-pattern';

export async function checkPrivateExports(path: string): Promise<void> | never {
    const includePattern = 'ɵ0';
    const result = await grepByPattern({
        excludePattern: 'icons/src|demo',
        includePattern,
        path,
    });

    if (result.length > 0) {
        throw new Error(
            `There are problems with private exports included ${includePattern} in:\n\n${result}`,
        );
    }
}

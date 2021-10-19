import {grepByPattern} from './grep-by-pattern';

export async function checkPrivateExports(path: string): Promise<void> | never {
    const result = await grepByPattern('ɵ0', path);
    const greppedIcons = result
        .trim()
        .split('\n')
        .every(path => path.includes('icons/src'));
    const hasError = result.length > 0 && !greppedIcons;

    if (hasError) {
        throw new Error(`There are problems with private exports in:\n\n${result}`);
    }
}

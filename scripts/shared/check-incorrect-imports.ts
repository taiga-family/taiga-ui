import {grepByPattern} from './grep-by-pattern';

export async function checkIncorrectImports(path: string): Promise<void> | never {
    const result = await grepByPattern({includePattern: 'import("../', path});

    if (result.length > 0) {
        throw new Error(`There are problems with imports in:\n\n${result}`);
    }
}

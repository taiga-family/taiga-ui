import {grepByPattern} from './grep-by-pattern';

export async function checkIncorrectImports(path: string): Promise<void> | never {
    const includePattern = 'import("../';
    const result = await grepByPattern({includePattern, path});

    if (result.length > 0) {
        throw new Error(`There are problems with ${includePattern} in:\n\n${result}`);
    }
}

import {grepByPattern} from './grep-by-pattern';

export async function checkImportWithSrc(path: string): Promise<void> | never {
    const result = await grepByPattern('import(.*/src/.*)', path);

    if (result.length > 0) {
        throw new Error(`There are problems with require(.../src/...) in:\n\n${result}`);
    }
}

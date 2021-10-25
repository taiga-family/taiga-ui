import {grepByPattern} from './grep-by-pattern';

export async function checkRequireWithSrc(path: string): Promise<void> | never {
    const result = await grepByPattern('require(.*/src/.*)', path);

    if (result.length > 0) {
        throw new Error(`There are problems with require(.../src/...) in:\n\n${result}`);
    }
}

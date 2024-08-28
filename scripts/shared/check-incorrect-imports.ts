import {TuiGrepException} from './grep.exception';
import {grepByPattern} from './grep-by-pattern';

export async function checkIncorrectImports(path: string, pattern = ''): Promise<void> {
    const includePattern = pattern || 'import("../';
    const result = await grepByPattern({includePattern, path});

    if (result.length > 0) {
        throw new TuiGrepException(includePattern, result);
    }
}

import {TuiGrepException} from './grep.exception';
import {grepByPattern} from './grep-by-pattern';

export async function checkIncorrectImports(path: string): Promise<void> {
    const includePattern = `import("../`;
    const result = await grepByPattern({includePattern, path});

    if (result.length > 0) {
        throw new TuiGrepException(includePattern, result);
    }
}

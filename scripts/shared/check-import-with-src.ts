import {TuiGrepException} from './grep.exception';
import {grepByPattern} from './grep-by-pattern';

export async function checkImportWithSrc(path: string): Promise<void> {
    const includePattern = `import(.*/src/.*)`;
    const result = await grepByPattern({
        includePattern,
        path,
        excludePattern: `demo|.map`,
    });

    if (result.length > 0) {
        throw new TuiGrepException(includePattern, result);
    }
}

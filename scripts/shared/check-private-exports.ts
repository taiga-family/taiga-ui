import {TuiGrepException} from './grep.exception';
import {grepByPattern} from './grep-by-pattern';

export async function checkPrivateExports(path: string): Promise<void> {
    const includePattern = `ɵ0`;
    const result = await grepByPattern({
        excludePattern: `icons/src|demo|.map`,
        includePattern,
        path,
    });

    if (result.length > 0) {
        throw new TuiGrepException(includePattern, result);
    }
}

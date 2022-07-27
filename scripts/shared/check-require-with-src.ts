import {TuiGrepException} from './grep.exception';
import {grepByPattern} from './grep-by-pattern';

export async function checkRequireWithSrc(path: string): Promise<void> {
    const includePattern = `require(.*/src/.*)`;
    const result = await grepByPattern({
        excludePattern: `taiga-ui-icons-scripts|browser|.map`,
        includePattern,
        path,
    });

    if (result.length > 0) {
        throw new TuiGrepException(includePattern, result);
    }
}

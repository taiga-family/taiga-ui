import * as child_process from 'child_process';
import * as util from 'util';

interface Options {
    path: string;
    includePattern: string;
    excludePattern?: string;
}

export async function grepByPattern(options: Options): Promise<any> {
    const {path, includePattern, excludePattern} = options;

    const exec = util.promisify(child_process.exec);
    let grep = `grep -iRl '${includePattern}' ${path}`;

    if (excludePattern) {
        grep += ` | grep -v '${excludePattern}'`;
    }

    console.info(`[TASK]: $ ${grep}`);

    /**
     * @note(splincode):
     * If `grep` didn't find anything, then it throws an error
     */
    return (await exec(`${grep} || true`)).stdout;
}

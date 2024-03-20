import * as child_process from 'node:child_process';
import * as util from 'node:util';

interface Options {
    excludePattern?: string;
    includePattern: string;
    path: string;
}

export async function grepByPattern(options: Options): Promise<string> {
    const {path, includePattern, excludePattern} = options;

    const exec = util.promisify(child_process.exec);
    let grep = `grep -niR --color=always '${includePattern}' ${path}`;

    if (excludePattern) {
        grep += ` | grep -vE '${excludePattern}'`;
    }

    console.info(`[TASK]: $ ${grep}`);

    /**
     * @note(splincode):
     * If `grep` didn't find anything, then it throws an error
     */
    return (await exec(`${grep} || true`)).stdout;
}

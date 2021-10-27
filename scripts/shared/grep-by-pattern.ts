import * as child_process from 'child_process';
import * as util from 'util';

export async function grepByPattern(pattern: string, path: string): Promise<any> {
    const exec = util.promisify(child_process.exec);
    const grep = `grep -iRl '${pattern}' ${path}`;

    // tslint:disable-next-line:no-console
    console.info(`[TASK]: $ ${grep}`);

    /**
     * @note(splincode):
     * If `grep` didn't find anything, then it throws an error
     */
    return (await exec(`${grep} || true`)).stdout;
}

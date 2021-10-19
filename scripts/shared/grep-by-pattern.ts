import {asyncExec} from './async-exec';

export function grepByPattern(pattern: string, path: string): Promise<string> {
    const grep = `grep -iRl '${pattern}' ${path}`;

    // tslint:disable-next-line:no-console
    console.info(`[TASK]: $ ${grep}`);

    /**
     * @note: If `grep` didn't find anything, then it throws an error
     */
    return asyncExec(`${grep} || true`);
}

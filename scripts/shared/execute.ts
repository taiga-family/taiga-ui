import type {CommonExecOptions} from 'node:child_process';
import {execSync} from 'node:child_process';

import {infoLog} from '../../projects/cdk/schematics/utils/colored-log';

export function execute(shell: string, options?: Partial<CommonExecOptions>): string {
    infoLog(`ᐅ ${shell}`);

    return execSync(
        shell,
        options ?? {
            stdio: 'inherit',
            encoding: 'utf8',
        },
    )
        ?.toString()
        .trim();
}

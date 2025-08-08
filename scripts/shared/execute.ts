import {type CommonExecOptions, execSync} from 'node:child_process';

import {infoLog} from 'ng-morph';

export function execute(shell: string, options?: Partial<CommonExecOptions>): string {
    infoLog(`ᐅ ${shell}`);

    const std = execSync(
        shell,
        options ?? {
            stdio: 'inherit',
            encoding: 'utf8',
        },
    ) as Buffer | undefined;

    return std?.toString().trim() ?? '';
}

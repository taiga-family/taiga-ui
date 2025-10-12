import {type CommonExecOptions, execSync} from 'node:child_process';

import {infoLog} from 'ng-morph';

export function execute(shell: string, options?: Partial<CommonExecOptions>): string {
    infoLog(`ᐅ ${shell}`);

    return String(
        execSync(
            shell,
            options ?? {
                stdio: 'inherit',
                encoding: 'utf8',
            },
        ),
    ).trim();
}

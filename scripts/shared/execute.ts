import {type CommonExecOptions, execSync} from 'node:child_process';

import {infoLog} from '../../projects/cdk/schematics/utils/colored-log';

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

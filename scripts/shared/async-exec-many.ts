import {asyncExec} from './async-exec';

/**
 * @note:
 * Safer execution of sequential shell commands
 * that are interrupted at the first error in the stderr
 */
export async function asyncExecMany(...scripts: string[]): Promise<void> | never {
    for (const script of scripts) {
        await asyncExec(script);
    }
}

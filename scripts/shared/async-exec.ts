import {ChildProcess, exec, ExecException} from 'child_process';

type Resolve = (value: string) => void;
type Reject = (value: unknown) => void;

export interface AsyncOptions {
    /**
     * If you want to use exec you can use the child process's streams to get your data.
     */
    output?: boolean;

    /**
     * The documentation also states that the default value of maxBuffer is 200KB.
     * 1024 * 200
     */
    maxBuffer?: number;

    /**
     * If "false", never shows colors.
     * If "true" then always shows colors, then only prints color codes for tty file descriptors.
     */
    color?: boolean;
}

const DEFAULT_ASYNC_OPTIONS: AsyncOptions = {
    output: true,
    color: true,
    maxBuffer: 1024 * 1024 * 8000, // ~8Gb
};

export function asyncExec(
    shell: string,
    {output, maxBuffer, color}: AsyncOptions = DEFAULT_ASYNC_OPTIONS,
): Promise<string> {
    return new Promise((resolve: Resolve, reject: Reject): void => {
        const env: NodeJS.ProcessEnv = {...process.env, FORCE_COLOR: color ? '1' : '0'};

        const child: ChildProcess = exec(
            shell,
            {maxBuffer, encoding: 'utf-8', env},
            (error: ExecException | null, stdout: string, stderr: string): void =>
                error ? reject(stderr) : resolve(stdout.trim()),
        );

        if (output) {
            child.stdout?.pipe(process.stdout);
            child.stderr?.pipe(process.stderr);
        }
    });
}

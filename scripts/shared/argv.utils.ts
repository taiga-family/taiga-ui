import process from 'process';

export function getValueByFlag<T extends string>(flag: string, fallback: T): T {
    return process.argv.includes(flag)
        ? (process.argv[process.argv.indexOf(flag) + 1] as T) ?? fallback
        : fallback;
}

export function hasFlag(flag: string): boolean {
    return process.argv.includes(flag);
}

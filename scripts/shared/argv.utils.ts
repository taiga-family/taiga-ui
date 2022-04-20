import process from 'process';

export function getValueByFlag(flag: string, fallback: string): string {
    return process.argv.includes(flag)
        ? process.argv[process.argv.indexOf(flag) + 1] ?? fallback
        : fallback;
}

export function hasFlag(flag: string): boolean {
    return process.argv.includes(flag);
}

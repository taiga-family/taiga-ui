import {round} from '@taiga-ui/cdk';

const BYTES_PER_KB = 1000;
const BYTES_PER_MB = 1000 * BYTES_PER_KB;

export function formatSize(
    units: [string, string, string],
    size?: number,
): string | null {
    if (size === undefined) {
        return null;
    }

    if (size < BYTES_PER_KB) {
        return `${size} ${units[0]}`;
    }

    if (size < BYTES_PER_MB) {
        return `${(size / BYTES_PER_KB).toFixed(0)} ${units[1]}`;
    }

    return `${round(size / BYTES_PER_MB, 2).toLocaleString('ru-RU')} ${units[2]}`;
}

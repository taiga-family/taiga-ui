import {round} from '@taiga-ui/cdk';

const BYTES_PER_KIB = 1024;
const BYTES_PER_MIB = 1024 * BYTES_PER_KIB;

/**
 * @deprecated: use {@link tuiFormatSize} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function formatSize(
    units: [string, string, string],
    size?: number,
): string | null {
    if (size === undefined) {
        return null;
    }

    if (size < BYTES_PER_KIB) {
        return `${size} ${units[0]}`;
    }

    if (size < BYTES_PER_MIB) {
        return `${(size / BYTES_PER_KIB).toFixed(0)} ${units[1]}`;
    }

    return `${round(size / BYTES_PER_MIB, 2).toLocaleString(`ru-RU`)} ${units[2]}`;
}

export const tuiFormatSize = formatSize;

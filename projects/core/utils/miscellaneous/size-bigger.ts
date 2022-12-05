import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core/types';

const SIZES = [`xxs`, `xs`, `s`, `m`, `l`, `xl`, `xxl`] as const;

/**
 * Compares size constants to determine if first size is bigger than the second
 *
 * @param size size that we need to compare
 * @param biggerThanSize size to compare with, 's' by default
 */
export function tuiSizeBigger(
    size: TuiSizeXXL | TuiSizeXXS,
    biggerThanSize: TuiSizeXXL | TuiSizeXXS = `s`,
): boolean {
    return SIZES.indexOf(size) > SIZES.indexOf(biggerThanSize);
}

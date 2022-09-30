import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core/types';

const SIZES: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [`xs`, `s`, `m`, `l`, `xl`, `xxl`];

/**
 * Compares size constants to determine if first size is bigger than the second
 *
 * @param size size that we need to compare
 * @param biggerThanSize size to compare with, 's' by default
 */
export function tuiSizeBigger(
    size: TuiSizeXS | TuiSizeXXL,
    biggerThanSize: TuiSizeXS | TuiSizeXXL = `s`,
): boolean {
    return SIZES.indexOf(size) > SIZES.indexOf(biggerThanSize);
}

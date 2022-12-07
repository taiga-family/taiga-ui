import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core/types';

const SIZES: Record<TuiSizeXXL | TuiSizeXXS, number> = {
    xxs: 0,
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
};

/**
 * Compares size constants to determine if first size is bigger than the second
 *
 * @param size size that we need to compare
 * @param biggerThanSize size to compare with, 's' by default
 */
export const tuiSizeBigger = (
    size: TuiSizeXXL | TuiSizeXXS,
    biggerThanSize: TuiSizeXXL | TuiSizeXXS = `s`,
): boolean => SIZES[size] > SIZES[biggerThanSize];

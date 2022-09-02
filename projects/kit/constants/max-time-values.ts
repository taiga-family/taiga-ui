import type {TuiTimeFormatParts} from '@taiga-ui/kit/types';

export const MAX_TIME_VALUES: Record<TuiTimeFormatParts, number> = {
    HH: 23,
    MM: 59,
    SS: 59,
    MS: 999,
};

import {TuiTimeFormatParts} from '@taiga-ui/kit/types';

export const TUI_MAX_TIME_VALUES: Record<TuiTimeFormatParts, number> = {
    HH: 23,
    MM: 59,
    SS: 59,
    MS: 999,
};

/**
 * @deprecated: use {@link TUI_MAX_TIME_VALUES}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const MAX_TIME_VALUES = TUI_MAX_TIME_VALUES;

import {TUI_MONTHS_IN_YEAR} from '@taiga-ui/cdk';

export const TUI_SCROLL_DEBOUNCE_TIME = 80;

/**
 * @deprecated: use {@link TUI_SCROLL_DEBOUNCE_TIME}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SCROLL_DEBOUNCE_TIME = TUI_SCROLL_DEBOUNCE_TIME;

export const TUI_YEARS_IN_ROW = 5;

/**
 * @deprecated: use {@link TUI_YEARS_IN_ROW}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const YEARS_IN_ROW = TUI_YEARS_IN_ROW;

export const TUI_STARTING_YEAR = 1900;

/**
 * @deprecated: use {@link TUI_STARTING_YEAR}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const STARTING_YEAR = TUI_STARTING_YEAR;

export const TUI_RANGE = 196;

/**
 * @deprecated: use {@link TUI_RANGE}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const RANGE = TUI_RANGE;

export const TUI_BUFFER = 500;

/**
 * @deprecated: use {@link TUI_BUFFER}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const BUFFER = TUI_BUFFER;

export const TUI_ANDROID_LABEL = 64;

/**
 * @deprecated: use {@link TUI_ANDROID_LABEL}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ANDROID_LABEL = TUI_ANDROID_LABEL;

export const TUI_ANDROID_WEEK = 48;

/**
 * @deprecated: use {@link TUI_ANDROID_WEEK}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ANDROID_WEEK = TUI_ANDROID_WEEK;

export const TUI_IOS_LABEL = 50;

/**
 * @deprecated: use {@link TUI_IOS_LABEL}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IOS_LABEL = TUI_IOS_LABEL;

export const TUI_IOS_WEEK = 50;

/**
 * @deprecated: use {@link TUI_IOS_WEEK}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IOS_WEEK = TUI_IOS_WEEK;

export const TUI_YEARLY_CYCLE = 28;

/**
 * @deprecated: use {@link TUI_YEARLY_CYCLE}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const YEARLY_CYCLE = TUI_YEARLY_CYCLE;

export const TUI_ANDROID_CYCLE = getCycle(TUI_ANDROID_LABEL, TUI_ANDROID_WEEK);

/**
 * @deprecated: use {@link TUI_ANDROID_CYCLE}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ANDROID_CYCLE = TUI_ANDROID_CYCLE;

export const TUI_IOS_CYCLE = getCycle(TUI_IOS_LABEL, TUI_IOS_WEEK);

/**
 * @deprecated: use {@link TUI_IOS_CYCLE}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IOS_CYCLE = TUI_IOS_CYCLE;

function getCycle(label: number, week: number): ReadonlyArray<readonly number[]> {
    return Array.from({length: TUI_YEARLY_CYCLE}, (_, i) =>
        Array.from(
            {length: TUI_MONTHS_IN_YEAR},
            (_, month) => label + weekCount(i, month) * week,
        ),
    );
}

function weekCount(year: number, month: number): number {
    const firstOfMonth = new Date(year + TUI_STARTING_YEAR, month, 1);
    const lastOfMonth = new Date(year + TUI_STARTING_YEAR, month + 1, 0);
    const days = lastOfMonth.getDate() + (firstOfMonth.getDay() || 7) - 1;

    return Math.ceil(days / 7);
}

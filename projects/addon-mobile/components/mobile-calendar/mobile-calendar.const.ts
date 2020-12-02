import {MONTHS_IN_YEAR} from '@taiga-ui/cdk';

export const SCROLL_DEBOUNCE_TIME = 80;
export const YEARS_IN_ROW = 5;
export const STARTING_YEAR = 1900;
export const RANGE = 196;
export const BUFFER = 500;
export const ANDROID_LABEL = 64;
export const ANDROID_WEEK = 48;
export const IOS_LABEL = 50;
export const IOS_WEEK = 50;
export const YEARLY_CYCLE = 28;
export const ANDROID_CYCLE = getCycle(ANDROID_LABEL, ANDROID_WEEK);
export const IOS_CYCLE = getCycle(IOS_LABEL, IOS_WEEK);

function getCycle(label: number, week: number): ReadonlyArray<ReadonlyArray<number>> {
    return Array.from({length: YEARLY_CYCLE}, (_, i) =>
        Array.from(
            {length: MONTHS_IN_YEAR},
            (_, month) => label + weekCount(i, month) * week,
        ),
    );
}

function weekCount(year: number, month: number): number {
    const firstOfMonth = new Date(year + STARTING_YEAR, month, 1);
    const lastOfMonth = new Date(year + STARTING_YEAR, month + 1, 0);
    const days = lastOfMonth.getDate() + (firstOfMonth.getDay() || 7) - 1;

    return Math.ceil(days / 7);
}

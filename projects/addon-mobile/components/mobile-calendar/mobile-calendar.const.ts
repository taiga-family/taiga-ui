import {MONTHS_IN_YEAR} from '@taiga-ui/cdk/date-time';

function getCycle(options: {
    label: number;
    week: number;
    yearCycle: number;
    startingYear: number;
}): ReadonlyArray<readonly number[]> {
    return Array.from({length: options.yearCycle}, (_, i) =>
        Array.from(
            {length: MONTHS_IN_YEAR},
            (_, month) =>
                options.label +
                weekCount({year: i, month, startingYear: options.startingYear}) *
                    options.week,
        ),
    );
}

function weekCount(options: {year: number; month: number; startingYear: number}): number {
    const firstOfMonth = new Date(options.year + options.startingYear, options.month, 1);
    const lastOfMonth = new Date(
        options.year + options.startingYear,
        options.month + 1,
        0,
    );
    const days = lastOfMonth.getDate() + (firstOfMonth.getDay() || 7) - 1;

    return Math.ceil(days / 7);
}

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

export const ANDROID_CYCLE = getCycle({
    label: ANDROID_LABEL,
    week: ANDROID_WEEK,
    yearCycle: YEARLY_CYCLE,
    startingYear: STARTING_YEAR,
});

export const IOS_CYCLE = getCycle({
    label: IOS_LABEL,
    week: IOS_WEEK,
    yearCycle: YEARLY_CYCLE,
    startingYear: STARTING_YEAR,
});

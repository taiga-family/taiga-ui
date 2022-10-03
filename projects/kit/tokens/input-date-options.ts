import {InjectionToken, ValueProvider} from '@angular/core';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';

export interface TuiInputDateOptions {
    readonly iconCalendar: string;
    readonly iconCalendarLarge: string;
    readonly min: TuiDay;
    readonly max: TuiDay;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS: TuiInputDateOptions = {
    iconCalendar: `tuiIconCalendar`,
    iconCalendarLarge: `tuiIconCalendarLarge`,
    min: TUI_FIRST_DAY,
    max: TUI_LAST_DAY,
};

export const TUI_INPUT_DATE_OPTIONS = new InjectionToken<TuiInputDateOptions>(
    `[TUI_INPUT_DATE_OPTIONS]: Default parameters for date input component`,
    {
        factory: () => TUI_INPUT_DATE_DEFAULT_OPTIONS,
    },
);

export const tuiInputDateOptionsProvider: (
    options: Partial<TuiInputDateOptions>,
) => ValueProvider = (options: Partial<TuiInputDateOptions>) => ({
    provide: TUI_INPUT_DATE_OPTIONS,
    useValue: {...TUI_INPUT_DATE_DEFAULT_OPTIONS, ...options},
});

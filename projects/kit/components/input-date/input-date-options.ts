import {InjectionToken, ValueProvider} from '@angular/core';

export interface TuiInputDateOptions {
    readonly iconCalendar: string;
    readonly iconCalendarLarge: string;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS: TuiInputDateOptions = {
    iconCalendar: `tuiIconCalendar`,
    iconCalendarLarge: `tuiIconCalendarLarge`,
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

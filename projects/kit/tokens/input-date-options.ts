import {InjectionToken, ValueProvider} from '@angular/core';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiContextWithImplicit, TuiDay} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputDateOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
    readonly min: TuiDay;
    readonly max: TuiDay;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS: TuiInputDateOptions = {
    icon: ({$implicit}) =>
        $implicit === `s` ? `tuiIconCalendar` : `tuiIconCalendarLarge`,
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

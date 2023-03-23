import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiContextWithImplicit, TuiDay} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY, TUI_LAST_DAY} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputDateOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeL | TuiSizeS>>;
    readonly min: TuiDay;
    readonly max: TuiDay;
    readonly nativePicker: boolean;
}

export const TUI_INPUT_DATE_DEFAULT_OPTIONS: TuiInputDateOptions = {
    icon: ({$implicit}) =>
        $implicit === `s` ? `tuiIconCalendar` : `tuiIconCalendarLarge`,
    min: TUI_FIRST_DAY,
    max: TUI_LAST_DAY,
    nativePicker: false,
};

/**
 * Default parameters for InputDate component
 */
export const TUI_INPUT_DATE_OPTIONS = new InjectionToken<TuiInputDateOptions>(
    `[TUI_INPUT_DATE_OPTIONS]`,
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

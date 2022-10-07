import {InjectionToken, ValueProvider} from '@angular/core';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiContextWithImplicit,
    TuiMonth,
} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export interface TuiInputMonthOptions {
    readonly icon: PolymorpheusContent<TuiContextWithImplicit<TuiSizeS | TuiSizeL>>;
    readonly min: TuiMonth;
    readonly max: TuiMonth;
}

export const TUI_INPUT_MONTH_DEFAULT_OPTIONS: TuiInputMonthOptions = {
    icon: ({$implicit}) =>
        $implicit === `s` ? `tuiIconCalendar` : `tuiIconCalendarLarge`,
    min: TUI_FIRST_DAY,
    max: TUI_LAST_DAY,
};

export const TUI_INPUT_MONTH_OPTIONS = new InjectionToken<TuiInputMonthOptions>(
    `[TUI_INPUT_MONTH_OPTIONS]: Default parameters for month input component`,
    {
        factory: () => TUI_INPUT_MONTH_DEFAULT_OPTIONS,
    },
);

export const tuiInputMonthOptionsProvider: (
    options: Partial<TuiInputMonthOptions>,
) => ValueProvider = (options: Partial<TuiInputMonthOptions>) => ({
    provide: TUI_INPUT_MONTH_OPTIONS,
    useValue: {...TUI_INPUT_MONTH_DEFAULT_OPTIONS, ...options},
});

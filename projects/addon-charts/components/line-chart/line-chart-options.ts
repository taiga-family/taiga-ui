import {InjectionToken, ValueProvider} from '@angular/core';

export interface TuiLineChartOptions {
    readonly dots: boolean;
    readonly filled: boolean;
    readonly smoothingFactor: number;
}

export const TUI_LINE_CHART_DEFAULT_OPTIONS: TuiLineChartOptions = {
    dots: false,
    filled: false,
    smoothingFactor: 0,
};

export const TUI_LINE_CHART_OPTIONS = new InjectionToken<TuiLineChartOptions>(
    `[TUI_LINE_CHART_OPTIONS]`,
    {
        factory: () => TUI_LINE_CHART_DEFAULT_OPTIONS,
    },
);

export const tuiLineChartOptionsProvider: (
    options: Partial<TuiLineChartOptions>,
) => ValueProvider = (options: Partial<TuiLineChartOptions>) => ({
    provide: TUI_LINE_CHART_OPTIONS,
    useValue: {...TUI_LINE_CHART_DEFAULT_OPTIONS, ...options},
});

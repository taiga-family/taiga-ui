import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';

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

export const TUI_LINE_CHART_OPTIONS = new InjectionToken('TUI_LINE_CHART_OPTIONS', {
    factory: () => TUI_LINE_CHART_DEFAULT_OPTIONS,
});

export function tuiLineChartOptionsProvider(
    options: Partial<TuiLineChartOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_LINE_CHART_OPTIONS,
        options,
        TUI_LINE_CHART_DEFAULT_OPTIONS,
    );
}

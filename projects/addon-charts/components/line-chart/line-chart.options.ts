import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';

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

export const TUI_LINE_CHART_OPTIONS = tuiCreateToken(TUI_LINE_CHART_DEFAULT_OPTIONS);

export function tuiLineChartOptionsProvider(
    options: Partial<TuiLineChartOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_LINE_CHART_OPTIONS,
        options,
        TUI_LINE_CHART_DEFAULT_OPTIONS,
    );
}

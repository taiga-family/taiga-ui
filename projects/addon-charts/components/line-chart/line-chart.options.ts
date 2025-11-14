import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

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

export const [TUI_LINE_CHART_OPTIONS, tuiLineChartOptionsProvider] = tuiCreateOptions(
    TUI_LINE_CHART_DEFAULT_OPTIONS,
);

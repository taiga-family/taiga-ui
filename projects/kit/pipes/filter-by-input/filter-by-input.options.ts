import {InjectionToken} from '@angular/core';

export interface TuiFilterByInputOptions {
    strictMode: boolean;
}

export const TUI_FILTER_BY_INPUT_OPTIONS = new InjectionToken<TuiFilterByInputOptions>(
    `[TUI_FILTER_BY_INPUT_OPTIONS]: Options for tuiFilterByInput pipe`,
    {factory: () => ({strictMode: true})},
);

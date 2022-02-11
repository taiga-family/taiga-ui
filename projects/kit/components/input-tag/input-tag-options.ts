import {InjectionToken} from '@angular/core';

export interface TuiInputTagOptions {
    readonly separator: string | RegExp;
}

export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    separator: ',',
};

export const TUI_INPUT_TAG_OPTIONS = new InjectionToken<TuiInputTagOptions>(
    'Default parameters for input-tag',
    {
        factory: () => TUI_INPUT_TAG_DEFAULT_OPTIONS,
    },
);

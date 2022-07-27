import {InjectionToken} from '@angular/core';

export interface TuiInputTagOptions {
    readonly separator: string | RegExp;
    readonly uniqueTags: boolean;
}

export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    separator: `,`,
    uniqueTags: true,
};

export const TUI_INPUT_TAG_OPTIONS = new InjectionToken<TuiInputTagOptions>(
    `Default parameters for input-tag`,
    {
        factory: () => TUI_INPUT_TAG_DEFAULT_OPTIONS,
    },
);

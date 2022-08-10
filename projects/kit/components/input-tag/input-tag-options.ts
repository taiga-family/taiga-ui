import {InjectionToken, ValueProvider} from '@angular/core';

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

export function tuiInputTagOptionsProvider(
    options: Partial<TuiInputTagOptions>,
): ValueProvider {
    return {
        provide: TUI_INPUT_TAG_OPTIONS,
        useValue: {...TUI_INPUT_TAG_DEFAULT_OPTIONS, ...options},
    };
}

import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiStatus} from '@taiga-ui/kit/types';

export interface TuiInputTagOptions {
    readonly separator: string | RegExp;
    readonly uniqueTags: boolean;
    readonly tagStatus: TuiStatus;
}

export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    separator: `,`,
    uniqueTags: true,
    tagStatus: `primary`,
};

export const TUI_INPUT_TAG_OPTIONS = new InjectionToken<TuiInputTagOptions>(
    `[TUI_INPUT_TAG_OPTIONS]: Default parameters for input-tag`,
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

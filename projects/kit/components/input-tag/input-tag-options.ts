import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiStatus} from '@taiga-ui/kit/types';

export interface TuiInputTagOptions {
    readonly separator: RegExp | string;
    readonly uniqueTags: boolean;
    readonly tagStatus: TuiStatus;
}

export const TUI_INPUT_TAG_DEFAULT_OPTIONS: TuiInputTagOptions = {
    separator: `,`,
    uniqueTags: true,
    tagStatus: `primary`,
};

/**
 * Default parameters for InputTag component
 */
export const TUI_INPUT_TAG_OPTIONS = new InjectionToken<TuiInputTagOptions>(
    `[TUI_INPUT_TAG_OPTIONS]`,
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

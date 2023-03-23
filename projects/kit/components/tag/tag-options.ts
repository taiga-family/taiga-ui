import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import type {TuiStatus} from '@taiga-ui/kit/types';

export interface TuiTagOptions {
    readonly size: TuiSizeL | TuiSizeS;
    readonly status: TuiStatus;
    readonly autoColor: boolean;
}

/** Default values for the tag options. */
export const TUI_TAG_DEFAULT_OPTIONS: TuiTagOptions = {
    size: `m`,
    status: `default`,
    autoColor: false,
};

/**
 * Default parameters for Tag component
 */
export const TUI_TAG_OPTIONS = new InjectionToken<TuiTagOptions>(`[TUI_TAG_OPTIONS]`, {
    factory: () => TUI_TAG_DEFAULT_OPTIONS,
});

export const tuiTagOptionsProvider: (options: Partial<TuiTagOptions>) => ValueProvider = (
    options: Partial<TuiTagOptions>,
) => ({
    provide: TUI_TAG_OPTIONS,
    useValue: {...TUI_TAG_DEFAULT_OPTIONS, ...options},
});

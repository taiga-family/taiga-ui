import type {Provider} from '@angular/core';
import {tuiCreateToken, type TuiPopover, tuiProvideOptions} from '@taiga-ui/cdk';
import {BehaviorSubject} from 'rxjs';

export interface TuiTableBarOptions {
    readonly adaptive?: boolean;
    readonly hasCloseButton?: boolean;
    readonly appearance?: string | 'dark' | 'light';
}

export const TUI_TABLE_BARS = tuiCreateToken(
    new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
);

export const TUI_TABLE_BAR_DEFAULT_OPTIONS: TuiTableBarOptions = {
    adaptive: true,
    hasCloseButton: true,
    appearance: 'dark',
};

/**
 * Default parameters for table bars dialog component
 */
export const TUI_TABLE_BAR_OPTIONS = tuiCreateToken(TUI_TABLE_BAR_DEFAULT_OPTIONS);

export function tuiTableBarOptionsProvider(
    options: Partial<TuiTableBarOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TABLE_BAR_OPTIONS,
        options,
        TUI_TABLE_BAR_DEFAULT_OPTIONS,
    );
}

import type {Provider} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {BehaviorSubject} from 'rxjs';

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 */
export interface TuiTableBarOptions {
    readonly adaptive?: boolean;
    readonly hasCloseButton?: boolean;
    readonly mode?: 'onDark' | 'onLight';
}

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 */
export const TUI_TABLE_BARS = tuiCreateToken(
    new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
);

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 */
export const TUI_TABLE_BAR_DEFAULT_OPTIONS: TuiTableBarOptions = {
    adaptive: true,
    hasCloseButton: true,
    mode: 'onDark',
};

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 */
export const TUI_TABLE_BAR_OPTIONS = tuiCreateToken(TUI_TABLE_BAR_DEFAULT_OPTIONS);

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 */
export function tuiTableBarOptionsProvider(
    options: Partial<TuiTableBarOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_TABLE_BAR_OPTIONS,
        options,
        TUI_TABLE_BAR_DEFAULT_OPTIONS,
    );
}

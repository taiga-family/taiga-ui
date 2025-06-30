import type {Provider} from '@angular/core';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {BehaviorSubject} from 'rxjs';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
export interface TuiTableBarOptions {
    readonly adaptive?: boolean;
    readonly hasCloseButton?: boolean;
    readonly mode?: 'onDark' | 'onLight';
}

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
export const TUI_TABLE_BARS = new InjectionToken('TUI_TABLE_BARS', {
    factory: () => new BehaviorSubject<ReadonlyArray<TuiPopover<any, any>>>([]),
});

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
export const TUI_TABLE_BAR_DEFAULT_OPTIONS: TuiTableBarOptions = {
    adaptive: true,
    hasCloseButton: true,
    mode: 'onDark',
};

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
 */
export const TUI_TABLE_BAR_OPTIONS = new InjectionToken('TUI_TABLE_BAR_OPTIONS', {
    factory: () => TUI_TABLE_BAR_DEFAULT_OPTIONS,
});

/**
 * @deprecated drop in v5.0 use {@link TuiActionBar}
 * https://taiga-ui.dev/components/actions-bar
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

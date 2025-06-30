import type {Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {TuiStatus} from '@taiga-ui/legacy/utils';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
export interface TuiTagOptions {
    readonly autoColor: boolean;
    readonly size: TuiSizeL | TuiSizeS;
    readonly status: TuiStatus;
}

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
export const TUI_TAG_DEFAULT_OPTIONS: TuiTagOptions = {
    size: 'm',
    status: 'default',
    autoColor: false,
};

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
export const TUI_TAG_OPTIONS = new InjectionToken('TUI_TAG_OPTIONS', {
    factory: () => TUI_TAG_DEFAULT_OPTIONS,
});

/**
 * @deprecated: drop in v5.0 use {@link TuiChip}
 * https://taiga-ui.dev/components/chip
 */
export function tuiTagOptionsProvider(options: Partial<TuiTagOptions>): Provider {
    return tuiProvideOptions(TUI_TAG_OPTIONS, options, TUI_TAG_DEFAULT_OPTIONS);
}

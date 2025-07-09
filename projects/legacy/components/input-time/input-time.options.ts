import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiTimeMode} from '@taiga-ui/cdk/date-time';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-time#options TuiInputTime} (from @taiga-ui/kit) instead
 */
export interface TuiInputTimeOptions {
    readonly icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    readonly itemSize: TuiSizeL | TuiSizeS;
    // TODO(v5): timeSegmentMaxValues: Partial<MaskitoTimeSegments<number>>
    readonly maxValues: Record<TuiTimeFormatParts, number>;
    readonly mode: TuiTimeMode;
    readonly nativePicker?: boolean;
}

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-time#options TuiInputTime} (from @taiga-ui/kit) instead
 */
export type TuiTimeFormatParts = 'HH' | 'MM' | 'MS' | 'SS';

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-time#options TuiInputTime} (from @taiga-ui/kit) instead
 */
export const MAX_TIME_VALUES: Record<TuiTimeFormatParts, number> = {
    HH: 23,
    MM: 59,
    SS: 59,
    MS: 999,
};

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-time#options TuiInputTime} (from @taiga-ui/kit) instead
 */
export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: () => '@tui.clock',
    mode: 'HH:MM',
    maxValues: MAX_TIME_VALUES, // TODO(v5): use empty object
    itemSize: 'm',
    nativePicker: false,
};

/**
 * TODO(v5): delete it
 * Default parameters for InputTime component
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-time#options TuiInputTime} (from @taiga-ui/kit) instead
 */
export const TUI_INPUT_TIME_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_INPUT_TIME_OPTIONS' : '',
    {
        factory: () => TUI_INPUT_TIME_DEFAULT_OPTIONS,
    },
);

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-time#options TuiInputTime} (from @taiga-ui/kit) instead
 */
export function tuiInputTimeOptionsProvider(
    options: Partial<TuiInputTimeOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_TIME_OPTIONS,
        options,
        TUI_INPUT_TIME_DEFAULT_OPTIONS,
    );
}

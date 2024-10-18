import type {Provider} from '@angular/core';
import type {TuiTimeMode} from '@taiga-ui/cdk/date-time';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

export interface TuiInputTimeOptions {
    readonly icon: PolymorpheusContent<TuiContext<TuiSizeL | TuiSizeS>>;
    readonly itemSize: TuiSizeL | TuiSizeS;
    // TODO(v5): timeSegmentMaxValues: Partial<MaskitoTimeSegments<number>>
    readonly maxValues: Record<TuiTimeFormatParts, number>;
    readonly mode: TuiTimeMode;
    readonly nativePicker?: boolean;
}

// TODO(v5): delete it
export type TuiTimeFormatParts = 'HH' | 'MM' | 'MS' | 'SS';

// TODO(v5): delete it
export const MAX_TIME_VALUES: Record<TuiTimeFormatParts, number> = {
    HH: 23,
    MM: 59,
    SS: 59,
    MS: 999,
};

export const TUI_INPUT_TIME_DEFAULT_OPTIONS: TuiInputTimeOptions = {
    icon: () => '@tui.clock',
    mode: 'HH:MM',
    maxValues: MAX_TIME_VALUES, // TODO(v5): use empty object
    itemSize: 'm',
    nativePicker: false,
};

/**
 * Default parameters for InputTime component
 */
export const TUI_INPUT_TIME_OPTIONS = tuiCreateToken(TUI_INPUT_TIME_DEFAULT_OPTIONS);

export function tuiInputTimeOptionsProvider(
    options: Partial<TuiInputTimeOptions>,
): Provider {
    return tuiProvideOptions(
        TUI_INPUT_TIME_OPTIONS,
        options,
        TUI_INPUT_TIME_DEFAULT_OPTIONS,
    );
}

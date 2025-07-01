import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import type {TuiSheet} from './sheet';
import {InjectionToken} from '@angular/core';

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export interface TuiSheetOptions<I = undefined, O = unknown> {
    readonly closeable: boolean;
    readonly data: I;
    readonly image: PolymorpheusContent<TuiSheet<O, I>>;
    readonly imageSlide: boolean;
    readonly initial: number;
    readonly offset: number;
    readonly overlay: boolean;
    readonly stops: readonly string[];
}

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_DEFAULT_OPTIONS: Omit<TuiSheetOptions, 'data'> = {
    image: '',
    imageSlide: true,
    stops: [],
    initial: 0,
    offset: 16,
    closeable: true,
    overlay: false,
};

/**
 * @deprecated: drop in v5.0 use {@link TuiSheetDialog}
 * https://taiga-ui.dev/components/sheet-dialog
 */
export const TUI_SHEET_OPTIONS = new InjectionToken<Omit<TuiSheetOptions, 'data'>>(
    ngDevMode ? 'TUI_SHEET_OPTIONS' : '',
    {
        factory: () => ({
            ...TUI_SHEET_DEFAULT_OPTIONS,
        }),
    },
);

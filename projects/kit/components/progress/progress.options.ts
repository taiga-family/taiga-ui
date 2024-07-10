import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core/types';

export interface TuiProgressOptions {
    readonly color: string | null;
    readonly size: TuiSizeXXL | TuiSizeXXS;
}

export const TUI_PROGRESS_DEFAULT_OPTIONS: TuiProgressOptions = {
    color: null,
    size: 'm',
};

export const TUI_PROGRESS_OPTIONS = tuiCreateToken(TUI_PROGRESS_DEFAULT_OPTIONS);

export function tuiProgressOptionsProvider(
    options: Partial<TuiProgressOptions>,
): Provider {
    return tuiProvideOptions(TUI_PROGRESS_OPTIONS, options, TUI_PROGRESS_DEFAULT_OPTIONS);
}

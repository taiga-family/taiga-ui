import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

export interface TuiCellOptions {
    readonly height: 'compact' | 'normal' | 'spacious';
    readonly size: TuiSizeL | TuiSizeS;
}

export const TUI_CELL_DEFAULT_OPTIONS = {height: 'normal', size: 'l'};

export const TUI_CELL_OPTIONS = tuiCreateToken(TUI_CELL_DEFAULT_OPTIONS);

export function tuiCellOptionsProvider(options: Partial<TuiCellOptions>): Provider {
    return tuiProvideOptions(TUI_CELL_OPTIONS, options, TUI_CELL_DEFAULT_OPTIONS);
}

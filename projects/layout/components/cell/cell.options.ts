import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiCellOptions {
    readonly height: 'compact' | 'normal' | 'spacious';
    readonly size: TuiSizeL | TuiSizeS;
}

export const [TUI_CELL_OPTIONS, tuiCellOptionsProvider] =
    tuiCreateOptions<TuiCellOptions>({height: 'normal', size: 'l'});

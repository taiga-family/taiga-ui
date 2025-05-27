import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

export interface TuiFormOptions {
    readonly size: TuiSizeL | TuiSizeS;
}

export const [TUI_FORM_OPTIONS, tuiFormOptionsProvider] =
    tuiCreateOptions<TuiFormOptions>({size: 'l'});

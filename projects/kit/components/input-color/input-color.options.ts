import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiHorizontalDirection} from '@taiga-ui/core/types';

export interface TuiInputColorOptions {
    readonly format: 'hex' | 'hexa';
    readonly align: TuiHorizontalDirection;
}

export const [TUI_INPUT_COLOR_OPTIONS, tuiInputColorOptionsProvider] =
    tuiCreateOptions<TuiInputColorOptions>({
        format: 'hex',
        align: 'start',
    });

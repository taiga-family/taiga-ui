import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';
import {type TuiSizeS} from '@taiga-ui/core/types';

export interface TuiRadioOptions {
    readonly appearance: TuiStringHandler<HTMLInputElement>;
    readonly size: TuiSizeS;
}

export const [TUI_RADIO_OPTIONS, tuiRadioOptionsProvider] =
    tuiCreateOptions<TuiRadioOptions>({
        size: 'm',
        appearance: ({checked}) => (checked ? 'primary' : 'outline-grayscale'),
    });

import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';

export interface TuiRadioOptions {
    readonly appearance: TuiStringHandler<HTMLInputElement>;
    readonly size: TuiSizeS;
}

export const TUI_RADIO_DEFAULT_OPTIONS: TuiRadioOptions = {
    size: 'm',
    appearance: ({checked}) => (checked ? 'primary' : 'whiteblock'),
};

export const TUI_RADIO_OPTIONS = tuiCreateToken(TUI_RADIO_DEFAULT_OPTIONS);

export function tuiRadioOptionsProvider(options: Partial<TuiRadioOptions>): Provider {
    return tuiProvideOptions(TUI_RADIO_OPTIONS, options, TUI_RADIO_DEFAULT_OPTIONS);
}

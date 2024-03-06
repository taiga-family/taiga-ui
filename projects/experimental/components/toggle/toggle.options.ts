import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';

export interface TuiToggleOptions {
    readonly showIcons: boolean;
    readonly size: TuiSizeS;
    readonly icon: TuiStringHandler<TuiSizeS> | string;
    readonly appearance: TuiStringHandler<HTMLInputElement>;
}

export const TUI_TOGGLE_DEFAULT_OPTIONS: TuiToggleOptions = {
    showIcons: true,
    size: 'm',
    icon: 'tuiIconCheck',
    appearance: el => (el.checked ? 'primary' : 'secondary'),
};

export const TUI_TOGGLE_OPTIONS = tuiCreateToken(TUI_TOGGLE_DEFAULT_OPTIONS);

export function tuiToggleOptionsProvider(options: Partial<TuiToggleOptions>): Provider {
    return tuiProvideOptions(TUI_TOGGLE_OPTIONS, options, TUI_TOGGLE_DEFAULT_OPTIONS);
}

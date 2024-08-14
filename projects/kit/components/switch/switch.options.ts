import type {Provider} from '@angular/core';
import type {TuiHandler, TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeS} from '@taiga-ui/core/types';

export interface TuiSwitchOptions<Icon extends string> {
    readonly showIcons: boolean;
    readonly size: TuiSizeS;
    readonly icon: Icon | TuiHandler<TuiSizeS, Icon>;
    readonly appearance: TuiStringHandler<HTMLInputElement>;
}

export const TUI_SWITCH_DEFAULT_OPTIONS: TuiSwitchOptions<string> = {
    showIcons: true,
    size: 'm',
    icon: '@tui.check',
    appearance: (el) => (el.checked ? 'primary' : 'secondary'),
};

export const TUI_SWITCH_OPTIONS = tuiCreateToken(TUI_SWITCH_DEFAULT_OPTIONS);

export function tuiSwitchOptionsProvider<Icon extends string>(
    options: Partial<TuiSwitchOptions<Icon>>,
): Provider {
    return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}

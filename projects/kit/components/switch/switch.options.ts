import type {Provider} from '@angular/core';
import type {TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeS} from '@taiga-ui/core/types';
import {InjectionToken} from '@angular/core';

export interface TuiSwitchOptions {
    readonly showIcons: boolean;
    readonly size: TuiSizeS;
    readonly icon: TuiStringHandler<TuiSizeS> | string;
    readonly appearance: TuiStringHandler<HTMLInputElement>;
}

export const TUI_SWITCH_DEFAULT_OPTIONS: TuiSwitchOptions = {
    showIcons: true,
    size: 'm',
    icon: '@tui.check',
    appearance: (el) => (el.checked ? 'primary' : 'secondary'),
};

export const TUI_SWITCH_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_SWITCH_OPTIONS' : '',
    {
        factory: () => TUI_SWITCH_DEFAULT_OPTIONS,
    },
);

export function tuiSwitchOptionsProvider(options: Partial<TuiSwitchOptions>): Provider {
    return tuiProvideOptions(TUI_SWITCH_OPTIONS, options, TUI_SWITCH_DEFAULT_OPTIONS);
}

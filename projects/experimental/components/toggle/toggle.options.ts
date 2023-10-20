import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions, TuiTypedMapper} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';

export interface TuiToggleOptions {
    readonly showIcons: boolean;
    readonly size: TuiSizeS;
    readonly icon: TuiTypedMapper<[TuiSizeS], string> | string;
}

export const TUI_TOGGLE_DEFAULT_OPTIONS: TuiToggleOptions = {
    showIcons: true,
    size: `m`,
    icon: `tuiIconCheck`,
};

export const TUI_TOGGLE_OPTIONS = tuiCreateToken(TUI_TOGGLE_DEFAULT_OPTIONS);

export function tuiToggleOptionsProvider(options: Partial<TuiToggleOptions>): Provider {
    return tuiProvideOptions(TUI_TOGGLE_OPTIONS, options, TUI_TOGGLE_DEFAULT_OPTIONS);
}

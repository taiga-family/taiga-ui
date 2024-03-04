import {type Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {type TuiOrientation, type TuiSizeL} from '@taiga-ui/core/types';

export interface TuiGroupOptions {
    readonly size: TuiSizeL;
    readonly collapsed: boolean;
    readonly rounded: boolean;
    readonly orientation: TuiOrientation;
}

export const TUI_GROUP_DEFAULT_OPTIONS: TuiGroupOptions = {
    size: 'm',
    collapsed: false,
    rounded: true,
    orientation: 'horizontal',
};

export const TUI_GROUP_OPTIONS = tuiCreateToken(TUI_GROUP_DEFAULT_OPTIONS);

export function tuiGroupOptionsProvider(options: Partial<TuiGroupOptions>): Provider {
    return tuiProvideOptions(TUI_GROUP_OPTIONS, options, TUI_GROUP_DEFAULT_OPTIONS);
}

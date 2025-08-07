import {InjectionToken, type Provider} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiOrientation, type TuiSizeL} from '@taiga-ui/core/types';

export interface TuiGroupOptions {
    readonly size: TuiSizeL;
    readonly collapsed: boolean;
    readonly rounded: boolean;
    readonly orientation: TuiOrientation;
}

export const TUI_GROUP_DEFAULT_OPTIONS: TuiGroupOptions = {
    size: 'l',
    collapsed: false,
    rounded: true,
    orientation: 'horizontal',
};

export const TUI_GROUP_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_GROUP_OPTIONS' : '',
    {
        factory: () => TUI_GROUP_DEFAULT_OPTIONS,
    },
);

export function tuiGroupOptionsProvider(options: Partial<TuiGroupOptions>): Provider {
    return tuiProvideOptions(TUI_GROUP_OPTIONS, options, TUI_GROUP_DEFAULT_OPTIONS);
}

import type {Provider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import {tuiProvideOptions} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiAppearanceOptions} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeS, TuiSizeXL} from '@taiga-ui/core/types';

export interface TuiBadgeOptions extends TuiAppearanceOptions {
    readonly size: TuiSizeS | TuiSizeXL;
}

export const TUI_BADGE_DEFAULT_OPTIONS: TuiBadgeOptions = {
    appearance: '',
    size: 'l',
};

export const TUI_BADGE_OPTIONS = new InjectionToken(
    ngDevMode ? 'TUI_BADGE_OPTIONS' : '',
    {
        factory: () => TUI_BADGE_DEFAULT_OPTIONS,
    },
);

export function tuiBadgeOptionsProvider(options: Partial<TuiBadgeOptions>): Provider {
    return tuiProvideOptions(TUI_BADGE_OPTIONS, options, TUI_BADGE_DEFAULT_OPTIONS);
}

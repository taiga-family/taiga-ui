import type {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import type {TuiAppearanceOptions, TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

export interface TuiAvatarOptions extends TuiAppearanceOptions {
    readonly appearance: string;
    readonly round: boolean;
    readonly size: TuiSizeXS | TuiSizeXXL;
}

export const TUI_AVATAR_DEFAULT_OPTIONS: TuiAvatarOptions = {
    appearance: '',
    round: true,
    size: 'l',
};

export const TUI_AVATAR_OPTIONS = tuiCreateToken(TUI_AVATAR_DEFAULT_OPTIONS);

export function tuiAvatarOptionsProvider(options: Partial<TuiAvatarOptions>): Provider {
    return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}

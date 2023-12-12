import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';
import {TuiAppearanceOptions} from '@taiga-ui/experimental/directives/appearance';

export interface TuiAvatarOptions extends TuiAppearanceOptions {
    readonly round: boolean;
    readonly size: TuiSizeXXL | TuiSizeXXS;
}

export const TUI_AVATAR_DEFAULT_OPTIONS: TuiAvatarOptions = {
    appearance: ``,
    round: true,
    size: `m`,
};

export const TUI_AVATAR_OPTIONS = tuiCreateToken(TUI_AVATAR_DEFAULT_OPTIONS);

export function tuiAvatarOptionsProvider(options: Partial<TuiAvatarOptions>): Provider {
    return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}

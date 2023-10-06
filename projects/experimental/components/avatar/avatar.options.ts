import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';

export interface TuiAvatarOptions {
    readonly round: boolean;
    readonly size: TuiSizeXXL | TuiSizeXXS;
}

export const TUI_AVATAR_DEFAULT_OPTIONS: TuiAvatarOptions = {
    round: true,
    size: `m`,
};

export const TUI_AVATAR_OPTIONS = tuiCreateToken(TUI_AVATAR_DEFAULT_OPTIONS);

export function tuiAvatarOptionsProvider(options: Partial<TuiAvatarOptions>): Provider {
    return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}

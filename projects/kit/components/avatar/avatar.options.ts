import {Provider} from '@angular/core';
import {tuiCreateToken, tuiProvideOptions} from '@taiga-ui/cdk';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';

export interface TuiAvatarOptions {
    readonly autoColor: boolean;
    readonly rounded: boolean;
    readonly size: TuiSizeXXL | TuiSizeXXS;
}

/** Default values for the avatar options. */
export const TUI_AVATAR_DEFAULT_OPTIONS: TuiAvatarOptions = {
    size: `m`,
    autoColor: false,
    rounded: false,
};

/**
 * Default parameters for avatar component
 */
export const TUI_AVATAR_OPTIONS = tuiCreateToken(TUI_AVATAR_DEFAULT_OPTIONS);

export function tuiAvatarOptionsProvider(options: Partial<TuiAvatarOptions>): Provider {
    return tuiProvideOptions(TUI_AVATAR_OPTIONS, options, TUI_AVATAR_DEFAULT_OPTIONS);
}

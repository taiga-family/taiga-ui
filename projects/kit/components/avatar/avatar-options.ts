import {InjectionToken, ValueProvider} from '@angular/core';
import {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';

export interface TuiAvatarOptions {
    readonly size: TuiSizeXXL | TuiSizeXXS;
    readonly autoColor: boolean;
    readonly rounded: boolean;
}

/** Default values for the avatar options. */
export const TUI_AVATAR_DEFAULT_OPTIONS: TuiAvatarOptions = {
    size: `m`,
    autoColor: false,
    rounded: false,
};

export const TUI_AVATAR_OPTIONS = new InjectionToken<TuiAvatarOptions>(
    `[TUI_AVATAR_OPTIONS]: Default parameters for avatar component`,
    {
        factory: () => TUI_AVATAR_DEFAULT_OPTIONS,
    },
);

export const tuiAvatarOptionsProvider: (
    options: Partial<TuiAvatarOptions>,
) => ValueProvider = (options: Partial<TuiAvatarOptions>) => ({
    provide: TUI_AVATAR_OPTIONS,
    useValue: {...TUI_AVATAR_DEFAULT_OPTIONS, ...options},
});

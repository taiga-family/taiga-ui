import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

export interface TuiAvatarOptions {
    readonly size: TuiSizeXS | TuiSizeXXL;
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
    `Default parameters for avatar component`,
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

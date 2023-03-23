import type {ValueProvider} from '@angular/core';
import {InjectionToken} from '@angular/core';
import type {TuiSizeXXL, TuiSizeXXS} from '@taiga-ui/core';

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

/**
 * Default parameters for avatar component
 */
export const TUI_AVATAR_OPTIONS = new InjectionToken<TuiAvatarOptions>(
    `[TUI_AVATAR_OPTIONS]`,
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

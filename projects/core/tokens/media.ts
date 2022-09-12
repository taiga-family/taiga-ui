import {InjectionToken} from '@angular/core';
import {TuiMedia} from '@taiga-ui/core/interfaces';

export const TUI_MEDIA = new InjectionToken<TuiMedia>(
    `[TUI_MEDIA]: Token for media constant`,
    {
        factory: () => ({
            mobile: 768,
            desktopSmall: 1024,
            desktopLarge: 1280,
        }),
    },
);

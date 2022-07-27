import {InjectionToken} from '@angular/core';

/** @deprecated use {@link TuiMobileTabsDirective} from @taiga-ui/addon-mobile */
export const TUI_MOBILE_AWARE = new InjectionToken<boolean>(
    `A flag enabling mobile-specific behavior for supporting components`,
    {
        factory: () => false,
    },
);

import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const TUI_IS_FIREFOX = new InjectionToken<boolean>(
    `[TUI_IS_FIREFOX]: Firefox browser engine detection`,
    {
        factory: () =>
            typeof (inject(WINDOW) as Window & {mozCancelFullScreen: unknown})
                ?.mozCancelFullScreen !== `undefined`,
    },
);

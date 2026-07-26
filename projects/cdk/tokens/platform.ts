import {inject, InjectionToken} from '@angular/core';
import {WA_IS_ANDROID, WA_IS_IOS} from '@ng-web-apis/platform';

export const TUI_PLATFORM = new InjectionToken<'android' | 'ios' | 'web'>(
    ngDevMode ? 'TUI_PLATFORM' : '',
    {
        factory: () => {
            if (inject(WA_IS_IOS)) {
                return 'ios';
            }

            return inject(WA_IS_ANDROID) ? 'android' : 'web';
        },
    },
);

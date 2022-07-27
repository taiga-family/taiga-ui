import {inject, InjectionToken} from '@angular/core';

import {TUI_IS_IOS} from './is-ios';
import {TUI_IS_MOBILE} from './is-mobile';

export const TUI_IS_ANDROID = new InjectionToken<boolean>(
    `Mobile browser that is not iOS (technically includes Windows Phone, Blackberry etc.)`,
    {
        factory: () => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS),
    },
);

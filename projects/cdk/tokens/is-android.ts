import {inject, InjectionToken} from '@angular/core';

import {TUI_IS_IOS} from './is-ios';
import {TUI_IS_MOBILE} from './is-mobile';

/**
 * Mobile browser that is not iOS (technically includes Windows Phone, Blackberry etc.)
 */
export const TUI_IS_ANDROID = new InjectionToken<boolean>(`[TUI_IS_ANDROID]`, {
    factory: () => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS),
});

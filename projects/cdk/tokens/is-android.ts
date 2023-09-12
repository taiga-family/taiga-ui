import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

import {TUI_IS_IOS} from './is-ios';
import {TUI_IS_MOBILE} from './is-mobile';

/**
 * Mobile browser that is not iOS (technically includes Windows Phone, Blackberry etc.)
 */
export const TUI_IS_ANDROID = tuiCreateTokenFromFactory(
    () => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS),
);

import {inject} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 */
export const TUI_TOUCH_SUPPORTED = tuiCreateTokenFromFactory(
    () => inject(WA_WINDOW).matchMedia('(any-pointer: coarse)').matches,
);

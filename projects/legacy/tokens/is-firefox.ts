import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';

/**
 * Firefox browser engine detection
 */
export const TUI_IS_FIREFOX = tuiCreateTokenFromFactory(
    () =>
        typeof (inject(WINDOW) as Window & {mozCancelFullScreen: unknown})
            ?.mozCancelFullScreen !== 'undefined',
);

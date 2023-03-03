import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {tuiIsIos} from '@taiga-ui/cdk/utils';

/**
 * iOS browser detection
 */
export const TUI_IS_IOS = new InjectionToken<boolean>(`[TUI_IS_IOS]`, {
    factory: () => tuiIsIos(inject(NAVIGATOR)),
});

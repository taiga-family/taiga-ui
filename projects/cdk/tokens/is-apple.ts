import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {tuiIsApple} from '@taiga-ui/cdk/utils';

/**
 * Apple(safari/webkit) detection
 */
export const TUI_IS_APPLE = new InjectionToken<boolean>(`[TUI_IS_APPLE]`, {
    factory: () => tuiIsApple(inject(NAVIGATOR)),
});

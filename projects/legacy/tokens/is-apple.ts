import {inject, InjectionToken} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {isApple} from '@ng-web-apis/platform';
/**
 * @deprecated: drop in v5.0
 * Apple(safari/webkit) detection
 */
export const TUI_IS_APPLE = new InjectionToken('TUI_IS_APPLE', {
    factory: () => isApple(inject(WA_NAVIGATOR)),
});

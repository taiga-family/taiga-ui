import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {isIos} from '@taiga-ui/cdk/utils';

export const TUI_IS_IOS = new InjectionToken<boolean>(`iOS browser detection`, {
    factory: () => isIos(inject(NAVIGATOR)),
});

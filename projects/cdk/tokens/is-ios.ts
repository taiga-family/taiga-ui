import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR, USER_AGENT} from '@ng-web-apis/common';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export const TUI_IS_IOS = new InjectionToken<boolean>('iOS browser detection', {
    factory: () =>
        IOS_REG_EXP.test(inject(USER_AGENT).toLowerCase()) ||
        (inject(USER_AGENT).toLowerCase().includes('apple') &&
            inject(NAVIGATOR).maxTouchPoints > 1),
});

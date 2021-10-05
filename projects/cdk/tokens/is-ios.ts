import {inject, InjectionToken} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export const TUI_IS_IOS = new InjectionToken<boolean>('iOS browser detection', {
    providedIn: 'root',
    factory: () => IOS_REG_EXP.test(inject(USER_AGENT).toLowerCase()),
});

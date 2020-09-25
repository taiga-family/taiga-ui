import {inject, InjectionToken} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {TUI_IS_MOBILE} from './is-mobile';

const IOS_REG_EXP = /ipad|iphone|ipod/;

export const TUI_IS_IOS = new InjectionToken<boolean>('iOS browser detection', {
    providedIn: 'root',
    factory: () =>
        inject(TUI_IS_MOBILE) && IOS_REG_EXP.test(inject(USER_AGENT).toLowerCase()),
});

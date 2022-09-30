import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {tuiIsIos} from '@taiga-ui/cdk/utils';

export const TUI_IS_IOS = new InjectionToken<boolean>(
    `[TUI_IS_IOS]: iOS browser detection`,
    {
        factory: () => tuiIsIos(inject(NAVIGATOR)),
    },
);

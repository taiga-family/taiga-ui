import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {tuiIsApple} from '@taiga-ui/cdk/utils';

export const TUI_IS_APPLE = new InjectionToken<boolean>(
    `[TUI_IS_APPLE]: Apple(safari/webkit) detection`,
    {factory: () => tuiIsApple(inject(NAVIGATOR))},
);

import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {isApple} from '@taiga-ui/cdk/utils';

export const TUI_IS_APPLE = new InjectionToken<boolean>(
    `Apple(safari/webkit) detection`,
    {factory: () => isApple(inject(NAVIGATOR))},
);

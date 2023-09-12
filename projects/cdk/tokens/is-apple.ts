import {inject} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory, tuiIsApple} from '@taiga-ui/cdk/utils';

/**
 * Apple(safari/webkit) detection
 */
export const TUI_IS_APPLE = tuiCreateTokenFromFactory(() =>
    tuiIsApple(inject(NAVIGATOR)),
);

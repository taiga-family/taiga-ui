import {inject} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk';
import {tuiIsApple} from '@taiga-ui/legacy/utils';

/**
 * Apple(safari/webkit) detection
 */
export const TUI_IS_APPLE = tuiCreateTokenFromFactory(() =>
    tuiIsApple(inject(NAVIGATOR)),
);

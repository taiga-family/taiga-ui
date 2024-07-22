import {inject} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiIsApple} from '@taiga-ui/legacy/utils';

/**
 * @deprecated: drop in v5.0
 * Apple(safari/webkit) detection
 */
export const TUI_IS_APPLE = tuiCreateTokenFromFactory(() =>
    tuiIsApple(inject(WA_NAVIGATOR)),
);

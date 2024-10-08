import {inject} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {isApple} from '@ng-web-apis/platform';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';

/**
 * @deprecated: drop in v5.0
 * Apple(safari/webkit) detection
 */
export const TUI_IS_APPLE = tuiCreateTokenFromFactory(() =>
    isApple(inject(WA_NAVIGATOR)),
);

import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

/**
 * Webkit browser engine detection
 */
export const TUI_IS_WEBKIT = tuiCreateTokenFromFactory(
    () =>
        !!(inject(WINDOW) as unknown as {webkitConvertPointFromNodeToPage?: unknown})
            ?.webkitConvertPointFromNodeToPage,
);

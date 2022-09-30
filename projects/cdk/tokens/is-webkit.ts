import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const TUI_IS_WEBKIT = new InjectionToken<boolean>(
    `[TUI_IS_WEBKIT]: Webkit browser engine detection`,
    {
        factory: () =>
            !!(inject(WINDOW) as unknown as {webkitConvertPointFromNodeToPage?: unknown})
                ?.webkitConvertPointFromNodeToPage,
    },
);

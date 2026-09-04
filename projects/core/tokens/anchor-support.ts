import {inject, InjectionToken} from '@angular/core';
import {WA_CSS} from '@ng-web-apis/common';

export const TUI_ANCHOR_SUPPORT = new InjectionToken<boolean>(
    ngDevMode ? 'TUI_ANCHOR_SUPPORT' : '',
    {factory: () => inject(WA_CSS).supports('anchor-name', '--my-anchor')},
);

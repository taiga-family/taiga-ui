import {inject, InjectionToken} from '@angular/core';
import {WA_CSS} from '@ng-web-apis/common';

export const TUI_TIMELINE_SUPPORT = new InjectionToken<boolean>(
    ngDevMode ? 'TUI_TIMELINE_SUPPORT' : '',
    {factory: () => inject(WA_CSS).supports('animation-timeline', '--name')},
);

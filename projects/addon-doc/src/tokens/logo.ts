import {InjectionToken} from '@angular/core';

export const TUI_DOC_LOGO = new InjectionToken<string>('Main logo', {
    factory: () => '',
});

import {InjectionToken, type Signal, signal} from '@angular/core';

export const TUI_DOC_COPY_PAGE = new InjectionToken<Signal<boolean>>(
    ngDevMode ? 'TUI_DOC_COPY_PAGE' : '',
    {factory: () => signal(false)},
);

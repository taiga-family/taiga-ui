import {type ElementRef, InjectionToken} from '@angular/core';

/**
 * @deprecated: remove in v6
 */
export const TUI_DROPDOWN_CONTEXT = new InjectionToken<Record<any, any>>(
    ngDevMode ? 'TUI_DROPDOWN_CONTEXT' : '',
);

export const TUI_DROPDOWN_HOST = new InjectionToken<ElementRef<Element>>(
    ngDevMode ? 'TUI_DROPDOWN_HOST' : '',
);

export const TUI_DROPDOWN_ANCHOR = new InjectionToken<ElementRef<HTMLElement>>(
    ngDevMode ? 'TUI_DROPDOWN_ANCHOR' : '',
);

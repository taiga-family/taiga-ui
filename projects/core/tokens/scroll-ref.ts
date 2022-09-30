import {ElementRef, InjectionToken} from '@angular/core';

export const TUI_SCROLL_REF = new InjectionToken<ElementRef<HTMLElement>>(
    `[TUI_SCROLL_REF]: Scrollable container`,
);

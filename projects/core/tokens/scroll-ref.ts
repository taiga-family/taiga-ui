import {DOCUMENT} from '@angular/common';
import {ElementRef, inject, InjectionToken} from '@angular/core';

/**
 * Scrollable container
 */
export const TUI_SCROLL_REF = new InjectionToken<ElementRef<HTMLElement>>(
    `[TUI_SCROLL_REF]`,
    {
        factory: () => new ElementRef(inject(DOCUMENT).documentElement),
    },
);

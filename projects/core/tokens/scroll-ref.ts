import type {ElementRef} from '@angular/core';
import {InjectionToken} from '@angular/core';

/**
 * Scrollable container
 */
export const TUI_SCROLL_REF = new InjectionToken<ElementRef<HTMLElement>>(
    `[TUI_SCROLL_REF]`,
);

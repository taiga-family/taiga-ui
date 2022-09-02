import type {ElementRef} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const TUI_SCROLL_REF = new InjectionToken<ElementRef<HTMLElement>>(
    `Scrollable container`,
);

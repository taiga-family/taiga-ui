import type {ElementRef} from '@angular/core';
import {InjectionToken} from '@angular/core';

export const TUI_ELEMENT_REF = new InjectionToken<ElementRef>(
    `ElementRef when you cannot use @Input for single time injection`,
);

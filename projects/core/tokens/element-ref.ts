import {ElementRef, InjectionToken} from '@angular/core';

export const TUI_ELEMENT_REF = new InjectionToken<ElementRef>(
    `[TUI_ELEMENT_REF]: ElementRef when you cannot use @Input for single time injection`,
);

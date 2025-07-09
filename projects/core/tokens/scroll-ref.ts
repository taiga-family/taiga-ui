import {DOCUMENT} from '@angular/common';
import {ElementRef, inject, InjectionToken} from '@angular/core';

export const TUI_SCROLL_REF = new InjectionToken(ngDevMode ? 'TUI_SCROLL_REF' : '', {
    factory: () => new ElementRef(inject(DOCUMENT).documentElement),
});

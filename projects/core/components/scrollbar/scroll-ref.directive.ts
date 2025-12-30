import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, inject, InjectionToken} from '@angular/core';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

export const SCROLL_REF_SELECTOR = '[tuiScrollRef]';
export const TUI_SCROLL_REF = new InjectionToken(ngDevMode ? 'TUI_SCROLL_REF' : '', {
    factory: () => new ElementRef(inject(DOCUMENT).documentElement),
});

@Directive({
    selector: '[tuiScrollRef]',
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
})
export class TuiScrollRef {}

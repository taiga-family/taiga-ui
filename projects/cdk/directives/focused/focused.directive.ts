import {Directive, ElementRef, inject, NgZone, Output} from '@angular/core';
import {tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {distinctUntilChanged, map, merge, Observable, skip, startWith} from 'rxjs';

/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
@Directive({
    selector: '[tuiFocusedChange]',
})
export class TuiFocusedDirective {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly zone = inject(NgZone);

    @Output()
    public readonly tuiFocusedChange: Observable<boolean>;

    constructor() {
        this.tuiFocusedChange = merge(
            tuiTypedFromEvent(this.el, 'focusin'),
            tuiTypedFromEvent(this.el, 'focusout'),
        ).pipe(
            map(() => tuiIsNativeFocused(this.el)),
            startWith(false),
            distinctUntilChanged(),
            skip(1),
            tuiZoneOptimized(this.zone),
        );
    }
}

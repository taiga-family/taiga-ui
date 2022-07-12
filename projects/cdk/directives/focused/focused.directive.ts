import {Directive, ElementRef, Inject, NgZone, Output} from '@angular/core';
import {tuiZoneOptimized, typedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiIsNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {merge, Observable} from 'rxjs';
import {distinctUntilChanged, map, skip, startWith} from 'rxjs/operators';

/**
 * Directive to monitor focus/blur status, works with focusIn/focus-out
 * instead of focus/blur to sync events order with Internet Explorer and
 * other focus related directives that require bubbling
 */
@Directive({
    selector: '[tuiFocusedChange]',
})
export class TuiFocusedDirective {
    @Output()
    readonly tuiFocusedChange: Observable<boolean>;

    constructor(
        @Inject(ElementRef)
        {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
    ) {
        this.tuiFocusedChange = merge(
            typedFromEvent(nativeElement, 'focusin'),
            typedFromEvent(nativeElement, 'focusout'),
        ).pipe(
            map(() => tuiIsNativeFocused(nativeElement)),
            startWith(false),
            distinctUntilChanged(),
            skip(1),
            tuiZoneOptimized(ngZone),
        );
    }
}

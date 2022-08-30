import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Input, NgZone} from '@angular/core';
import {
    tuiIsNativeFocused,
    tuiPure,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, Observable, of, timer} from 'rxjs';
import {
    debounce,
    distinctUntilChanged,
    map,
    skip,
    startWith,
    switchMap,
} from 'rxjs/operators';

import {TuiHintHoverDirective} from './hint-hover.directive';

@Directive({
    selector: `[tuiHintDescribe]`,
    providers: [tuiAsDriver(TuiHintDescribeDirective)],
})
export class TuiHintDescribeDirective extends TuiDriver {
    private readonly focus$ = tuiTypedFromEvent(this.documentRef, `keydown`, {
        capture: true,
    }).pipe(
        switchMap(() =>
            this.focused
                ? of(false)
                : merge(
                      tuiTypedFromEvent(this.documentRef, `keyup`),
                      tuiTypedFromEvent(this.element, `blur`),
                  ).pipe(map(() => this.focused)),
        ),
        debounce(visible => (visible ? timer(1000) : of(null))),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(this.ngZone),
    );

    private readonly stream$ = merge(this.hover$, this.focus$);

    @Input()
    tuiHintDescribe = ``;

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(TuiHintHoverDirective) private readonly hover$: Observable<boolean>,
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    private get focused(): boolean {
        return tuiIsNativeFocused(this.element);
    }

    @tuiPure
    private get element(): HTMLElement {
        return (
            this.documentRef.getElementById(this.tuiHintDescribe) ||
            this.elementRef.nativeElement
        );
    }
}

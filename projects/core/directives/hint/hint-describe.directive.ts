import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Input, NgZone} from '@angular/core';
import {
    tuiIsNativeFocused,
    tuiPure,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, of, timer} from 'rxjs';
import {
    debounce,
    distinctUntilChanged,
    map,
    skip,
    startWith,
    switchMap,
} from 'rxjs/operators';

@Directive({
    selector: '[tuiHintDescribe]',
    providers: [tuiAsDriver(TuiHintDescribeDirective)],
})
export class TuiHintDescribeDirective extends TuiDriver {
    private readonly stream$ = tuiTypedFromEvent(this.doc, 'keydown', {
        capture: true,
    }).pipe(
        switchMap(() =>
            this.focused
                ? of(false)
                : merge(
                      tuiTypedFromEvent(this.doc, 'keyup'),
                      tuiTypedFromEvent(this.element, 'blur'),
                  ).pipe(map(() => this.focused)),
        ),
        debounce(visible => (visible ? timer(1000) : of(null))),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(this.ngZone),
    );

    @Input()
    tuiHintDescribe: string | '' = '';

    readonly type = 'hint';

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    private get focused(): boolean {
        return tuiIsNativeFocused(this.element);
    }

    @tuiPure
    private get element(): HTMLElement {
        return this.doc.getElementById(this.tuiHintDescribe) || this.el.nativeElement;
    }
}

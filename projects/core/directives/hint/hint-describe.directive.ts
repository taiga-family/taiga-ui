import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, Inject, Input, NgZone, OnChanges} from '@angular/core';
import {
    tuiIfMap,
    tuiIsNativeFocused,
    tuiIsPresent,
    tuiPure,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/abstract';
import {merge, of, ReplaySubject, timer} from 'rxjs';
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
export class TuiHintDescribeDirective extends TuiDriver implements OnChanges {
    private readonly id$ = new ReplaySubject(1);

    private readonly stream$ = this.id$.pipe(
        tuiIfMap(
            () =>
                tuiTypedFromEvent(this.doc, 'keydown', {
                    capture: true,
                }),
            tuiIsPresent,
        ),
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
        tuiZoneOptimized(this.zone),
    );

    @Input()
    tuiHintDescribe: string | '' | null = '';

    readonly type = 'hint';

    constructor(
        @Inject(NgZone) private readonly zone: NgZone,
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    ngOnChanges(): void {
        this.id$.next(this.tuiHintDescribe);
    }

    private get focused(): boolean {
        return tuiIsNativeFocused(this.element);
    }

    @tuiPure
    private get element(): HTMLElement {
        return (
            this.doc.getElementById(this.tuiHintDescribe || '') || this.el.nativeElement
        );
    }
}

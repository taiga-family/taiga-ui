import {Directive, ElementRef, Inject, Input, OnInit} from '@angular/core';
import {PAGE_VISIBILITY} from '@ng-web-apis/common';
import {TuiDestroyService, typedFromEvent} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, interval, merge, Observable, of} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    mapTo,
    scan,
    shareReplay,
    startWith,
    switchMap,
    takeUntil,
    withLatestFrom,
} from 'rxjs/operators';

@Directive({
    selector: 'tui-carousel',
    exportAs: 'tui-carousel',
    providers: [TuiDestroyService],
})
export class TuiCarouselDirective extends Observable<number> implements OnInit {
    private readonly index$ = new BehaviorSubject<number>(NaN);

    private readonly duration$ = new BehaviorSubject(0);

    private readonly running$ = merge(
        typedFromEvent(this.elementRef.nativeElement, 'mouseenter').pipe(mapTo(false)),
        typedFromEvent(this.elementRef.nativeElement, 'mouseleave').pipe(mapTo(true)),
        this.visible$,
    ).pipe(takeUntil(this.destroy$), shareReplay(1));

    private readonly output$ = combineLatest([
        this.index$.pipe(filter(v => !isNaN(v))),
        this.duration$,
    ]).pipe(
        switchMap(([index, duration]) =>
            duration
                ? interval(duration).pipe(
                      withLatestFrom(this.running$),
                      filter(([_, running]) => running),
                      scan(acc => ++acc, index),
                      startWith(index),
                  )
                : of(index),
        ),
        distinctUntilChanged(),
    );

    @Input()
    set index(index: number) {
        this.index$.next(index);
    }

    @Input()
    set duration(duration: number) {
        this.duration$.next(duration);
    }

    // So that initial position is scrolled to instantly
    inited = false;

    constructor(
        @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(PAGE_VISIBILITY) private readonly visible$: Observable<boolean>,
    ) {
        super(subscriber => this.output$.subscribe(subscriber));
    }

    ngOnInit() {
        if (isNaN(this.index$.value)) {
            this.index$.next(0);
        }
    }

    prev() {
        this.index$.next(this.index$.value - 1);
    }

    next() {
        this.index$.next(this.index$.value + 1);
    }
}

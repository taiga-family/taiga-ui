import {Directive, ElementRef, inject, Input} from '@angular/core';
import {PAGE_VISIBILITY} from '@ng-web-apis/common';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    tuiIfMap,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, interval, map, merge, Observable} from 'rxjs';

@Directive({
    selector: 'tui-carousel',
})
export class TuiCarouselDirective extends Observable<unknown> {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly visible$ = inject(PAGE_VISIBILITY);
    private readonly duration$ = new BehaviorSubject(0);
    private readonly running$ = merge(
        tuiTypedFromEvent(this.el, 'mouseenter').pipe(map(ALWAYS_FALSE_HANDLER)),
        tuiTypedFromEvent(this.el, 'touchstart').pipe(map(ALWAYS_FALSE_HANDLER)),
        tuiTypedFromEvent(this.el, 'touchend').pipe(map(ALWAYS_TRUE_HANDLER)),
        tuiTypedFromEvent(this.el, 'mouseleave').pipe(map(ALWAYS_TRUE_HANDLER)),
        this.visible$,
    );

    private readonly output$ = combineLatest([this.duration$, this.running$]).pipe(
        tuiIfMap(
            ([duration]) => interval(duration),
            values => values.every(Boolean),
        ),
    );

    constructor() {
        super(subscriber => this.output$.subscribe(subscriber));
    }

    @Input()
    public set duration(duration: number) {
        this.duration$.next(duration);
    }

    @Input()
    public set index(_: number) {
        this.duration$.next(this.duration$.value);
    }
}

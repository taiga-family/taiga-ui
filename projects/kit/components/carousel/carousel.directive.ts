import {Directive, inject, Input} from '@angular/core';
import {PAGE_VISIBILITY} from '@ng-web-apis/common';
import {
    TUI_FALSE_HANDLER,
    TUI_TRUE_HANDLER,
    tuiIfMap,
    tuiInjectElement,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, interval, map, merge, Observable} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'tui-carousel:is(never)',
})
export class TuiCarouselDirective extends Observable<unknown> {
    private readonly el = tuiInjectElement();
    private readonly visible$ = inject(PAGE_VISIBILITY);
    private readonly duration$ = new BehaviorSubject(0);
    private readonly running$ = merge(
        tuiTypedFromEvent(this.el, 'mouseenter').pipe(map(TUI_FALSE_HANDLER)),
        tuiTypedFromEvent(this.el, 'touchstart').pipe(map(TUI_FALSE_HANDLER)),
        tuiTypedFromEvent(this.el, 'touchend').pipe(map(TUI_TRUE_HANDLER)),
        tuiTypedFromEvent(this.el, 'mouseleave').pipe(map(TUI_TRUE_HANDLER)),
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
        this.duration$.next(Number.isNaN(duration) ? this.duration$.value : duration);
    }
}

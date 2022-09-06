import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {PAGE_VISIBILITY} from '@ng-web-apis/common';
import {typedFromEvent} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, EMPTY, interval, merge, Observable} from 'rxjs';
import {mapTo, switchMap} from 'rxjs/operators';

@Directive({
    selector: `tui-carousel`,
})
export class TuiCarouselDirective extends Observable<unknown> {
    private readonly duration$ = new BehaviorSubject(0);

    private readonly running$ = merge(
        typedFromEvent(this.elementRef.nativeElement, `mouseenter`).pipe(mapTo(false)),
        typedFromEvent(this.elementRef.nativeElement, `touchstart`).pipe(mapTo(false)),
        typedFromEvent(this.elementRef.nativeElement, `touchend`).pipe(mapTo(true)),
        typedFromEvent(this.elementRef.nativeElement, `mouseleave`).pipe(mapTo(true)),
        this.visible$,
    );

    private readonly output$ = combineLatest([this.duration$, this.running$]).pipe(
        switchMap(([duration, running]) =>
            duration && running ? interval(duration) : EMPTY,
        ),
    );

    @Input()
    set duration(duration: number) {
        this.duration$.next(duration);
    }

    @Input()
    set index(_: number) {
        this.duration$.next(this.duration$.value);
    }

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(PAGE_VISIBILITY) private readonly visible$: Observable<boolean>,
    ) {
        super(subscriber => this.output$.subscribe(subscriber));
    }
}

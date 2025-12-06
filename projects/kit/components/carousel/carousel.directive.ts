import {isPlatformServer} from '@angular/common';
import {Directive, inject, input, NgZone, PLATFORM_ID} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {WA_PAGE_VISIBILITY} from '@ng-web-apis/common';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiIfMap, tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {combineLatest, EMPTY, filter, interval, map, merge, Observable} from 'rxjs';

@Directive()
export class TuiCarouselDirective extends Observable<unknown> {
    private readonly el = tuiInjectElement();
    private readonly platform = inject(PLATFORM_ID);
    private readonly visible$ = inject(WA_PAGE_VISIBILITY);
    private readonly zone = inject(NgZone);
    private readonly running$ = merge(
        tuiTypedFromEvent(this.el, 'mouseenter').pipe(map(TUI_FALSE_HANDLER)),
        tuiTypedFromEvent(this.el, 'touchstart').pipe(map(TUI_FALSE_HANDLER)),
        tuiTypedFromEvent(this.el, 'touchend').pipe(map(TUI_TRUE_HANDLER)),
        tuiTypedFromEvent(this.el, 'mouseleave').pipe(map(TUI_TRUE_HANDLER)),
        this.visible$,
    );

    public readonly duration = input(0);

    protected readonly duration$ = toObservable(this.duration).pipe(
        filter((val) => !Number.isNaN(val)),
    );

    protected readonly output$ = isPlatformServer(this.platform)
        ? EMPTY
        : combineLatest([this.duration$, this.running$]).pipe(
              tuiIfMap(
                  ([duration]) => interval(duration).pipe(tuiZoneOptimized(this.zone)),
                  (values) => values.every(Boolean),
              ),
          );

    constructor() {
        super((subscriber) => this.output$.subscribe(subscriber));
    }
}

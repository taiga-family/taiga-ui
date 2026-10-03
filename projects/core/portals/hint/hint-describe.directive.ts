import {DOCUMENT} from '@angular/common';
import {computed, Directive, inject, input} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {tuiIfMap, tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {
    distinctUntilChanged,
    fromEvent,
    map,
    of,
    race,
    shareReplay,
    skip,
    startWith,
    switchMap,
    take,
    timer,
} from 'rxjs';

@Directive({
    selector: '[tuiHintDescribe]',
    providers: [tuiAsDriver(TuiHintDescribe)],
})
export class TuiHintDescribe extends TuiDriver {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();

    protected readonly element = computed((id = this.id()) =>
        id ? this.doc.querySelector(`#${id}`) || this.el : this.el,
    );

    public readonly id = input<string | null | undefined>('', {alias: 'tuiHintDescribe'});
    public readonly type = 'hint';

    protected readonly stream$ = toObservable(this.id).pipe(
        distinctUntilChanged(),
        tuiIfMap(() => fromEvent(this.doc, 'keydown', {capture: true}), tuiIsPresent),
        switchMap(() =>
            this.focused
                ? of(false)
                : race(
                      tuiTypedFromEvent(this.element(), 'focus').pipe(
                          switchMap(() =>
                              tuiTypedFromEvent(this.element(), 'blur').pipe(
                                  map(() => false),
                                  startWith(true),
                                  take(2),
                              ),
                          ),
                      ),
                      tuiTypedFromEvent(this.doc, 'keyup').pipe(
                          map(() => false),
                          take(1),
                      ),
                  ),
        ),
        startWith(false),
        distinctUntilChanged(),
        tuiZoneOptimized(),
        shareReplay({bufferSize: 1, refCount: true}),
    );

    public readonly pending = toSignal(
        this.stream$.pipe(
            switchMap((visible) =>
                visible
                    ? timer(1000).pipe(
                          map(() => false),
                          startWith(true),
                      )
                    : of(false),
            ),
        ),
        {initialValue: false},
    );

    constructor() {
        super((subscriber) => this.stream$.pipe(skip(1)).subscribe(subscriber));
    }

    private get focused(): boolean {
        return tuiIsFocused(this.element());
    }
}

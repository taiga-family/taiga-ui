import {DOCUMENT} from '@angular/common';
import {computed, Directive, inject, input} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {tuiIfMap, tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {
    debounce,
    distinctUntilChanged,
    fromEvent,
    map,
    merge,
    of,
    skip,
    startWith,
    switchMap,
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

    // eslint-disable-next-line @typescript-eslint/member-ordering
    protected readonly stream$ = toObservable(this.id).pipe(
        distinctUntilChanged(),
        tuiIfMap(() => fromEvent(this.doc, 'keydown', {capture: true}), tuiIsPresent),
        switchMap(() =>
            this.focused
                ? of(false)
                : merge(
                      tuiTypedFromEvent(this.doc, 'keyup'),
                      tuiTypedFromEvent(this.element(), 'blur'),
                  ).pipe(map(() => this.focused)),
        ),
        debounce((visible) => (visible ? timer(1000) : of(null))),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(),
    );

    constructor() {
        super((subscriber) => this.stream$.subscribe(subscriber));
    }

    private get focused(): boolean {
        return tuiIsFocused(this.element());
    }
}

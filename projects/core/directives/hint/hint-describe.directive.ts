import {DOCUMENT} from '@angular/common';
import {Directive, inject, Input, NgZone} from '@angular/core';
import {
    tuiIfMap,
    tuiInjectElement,
    tuiIsNativeFocused,
    tuiIsPresent,
    tuiPure,
    tuiTypedFromEvent,
    tuiZoneOptimized,
} from '@taiga-ui/cdk';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {
    BehaviorSubject,
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
    standalone: true,
    selector: '[tuiHintDescribe]',
    providers: [tuiAsDriver(TuiHintDescribe)],
})
export class TuiHintDescribe extends TuiDriver {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly id$ = new BehaviorSubject('');
    private readonly stream$ = this.id$.pipe(
        distinctUntilChanged(),
        tuiIfMap(() => fromEvent(this.doc, 'keydown', {capture: true}), tuiIsPresent),
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
        tuiZoneOptimized(inject(NgZone)),
    );

    public readonly type = 'hint';

    constructor() {
        super(subscriber => this.stream$.subscribe(subscriber));
    }

    @Input()
    public set tuiHintDescribe(id: string | null | undefined) {
        this.id$.next(id || '');
    }

    @tuiPure
    private get element(): HTMLElement {
        return this.doc.getElementById(this.id$.value || '') || this.el;
    }

    private get focused(): boolean {
        return tuiIsNativeFocused(this.element);
    }
}

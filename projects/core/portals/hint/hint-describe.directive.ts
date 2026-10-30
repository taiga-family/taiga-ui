import {DOCUMENT} from '@angular/common';
import {computed, Directive, effect, inject, input, untracked} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TUI_ANIMATED, TUI_ENTER} from '@taiga-ui/cdk/directives/animated';
import {tuiIfMap, tuiTypedFromEvent, tuiZoneOptimized} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsFocused} from '@taiga-ui/cdk/utils/focus';
import {tuiGenerateId, tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiAsDriver, TuiDriver} from '@taiga-ui/core/classes';
import {
    distinctUntilChanged,
    fromEvent,
    map,
    merge,
    of,
    share,
    skip,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs';

import {TuiHintDirective} from './hint.directive';

const REVEAL_DELAY = 1000;

@Directive({
    selector: '[tuiHintDescribe]',
    providers: [tuiAsDriver(TuiHintDescribe)],
})
export class TuiHintDescribe extends TuiDriver {
    private readonly doc = inject(DOCUMENT);
    private readonly el = tuiInjectElement();
    private readonly hint = inject(TuiHintDirective, {self: true, optional: true});
    private readonly hintId = tuiGenerateId();
    private readonly popup = computed(
        (): HTMLElement | null => this.hint?.ref()?.location.nativeElement ?? null,
    );

    protected readonly element = computed((id = this.id()) =>
        id ? this.doc.querySelector(`#${id}`) || this.el : this.el,
    );

    public readonly id = input<string | null | undefined>('', {alias: 'tuiHintDescribe'});
    public readonly type = 'hint';

    protected readonly mounted$ = toObservable(this.id).pipe(
        distinctUntilChanged(),
        tuiIfMap(() => fromEvent(this.doc, 'keydown', {capture: true}), tuiIsPresent),
        switchMap(() =>
            this.focused
                ? of(false)
                : merge(
                      // keyup is too late for screen readers
                      tuiTypedFromEvent(this.element(), 'focus').pipe(
                          takeUntil(tuiTypedFromEvent(this.doc, 'keyup')),
                      ),
                      tuiTypedFromEvent(this.element(), 'blur'),
                  ).pipe(map(() => this.focused)),
        ),
        startWith(false),
        distinctUntilChanged(),
        skip(1),
        tuiZoneOptimized(),
        share(),
    );

    protected readonly mounted = toSignal(this.mounted$, {initialValue: false});

    protected readonly describedByEffect = effect((onCleanup) => {
        const popup = this.popup();
        const host = this.element();

        if (!popup) {
            return;
        }

        popup.id ||= this.hintId;
        host.setAttribute(
            'aria-describedby',
            [...getDescribedBy(host), popup.id].join(' '),
        );

        onCleanup(() => {
            const ids = getDescribedBy(host).filter((item) => item !== popup.id);

            if (ids.length) {
                host.setAttribute('aria-describedby', ids.join(' '));
            } else {
                host.removeAttribute('aria-describedby');
            }
        });
    });

    protected readonly visibilityEffect = effect((onCleanup) => {
        const popup = this.popup();

        if (!popup || !untracked(this.mounted)) {
            return;
        }

        popup.style.setProperty('visibility', 'hidden');

        const timeout = setTimeout(() => {
            popup.style.removeProperty('visibility');

            if (popup.classList.contains(TUI_ANIMATED)) {
                popup.classList.add(TUI_ENTER);
            }
        }, REVEAL_DELAY);

        onCleanup(() => clearTimeout(timeout));
    });

    constructor() {
        super((subscriber) => this.mounted$.subscribe(subscriber));
    }

    private get focused(): boolean {
        return tuiIsFocused(this.element());
    }
}

function getDescribedBy(element: Element): string[] {
    return element.getAttribute('aria-describedby')?.split(' ') ?? [];
}

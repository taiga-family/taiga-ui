import type {BooleanInput} from '@angular/cdk/coercion';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {DOCUMENT} from '@angular/common';
import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {combineLatest, filter, map, merge, tap} from 'rxjs';

const SLIDER_INTERACTION_KEYS = new Set([
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'End',
    'Home',
    'PageDown',
    'PageUp',
]);

/**
 * Native <input type='range' readonly> doesn't work.
 * This directive imitates this native behaviour.
 */
@Directive({
    standalone: true,
    selector: 'input[tuiSlider][readonly]',
    host: {
        '(keydown)': 'preventKeyboardInteraction($event)',
        '(mousedown)': 'preventEvent($event)',
    },
})
export class TuiSliderReadonly {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly doc = inject(DOCUMENT);

    private readonly start$ = tuiTypedFromEvent(this.el, 'touchstart', {passive: false});
    private readonly move$ = tuiTypedFromEvent(this.doc, 'touchmove', {passive: false});
    private readonly end$ = tuiTypedFromEvent(this.doc, 'touchend', {passive: true});
    private readonly preventMove$ = merge(
        this.start$.pipe(
            tap((e) => this.preventEvent(e)),
            map(TUI_TRUE_HANDLER),
        ),
        this.end$.pipe(map(TUI_FALSE_HANDLER)),
    );

    /**
     * @bad TODO think about another solution.
     * Keep in mind that preventing touch event (on slider) inside `@HostListener('touchstart')` doesn't work for mobile chrome.
     */
    protected readonly $ = combineLatest([this.move$, this.preventMove$])
        .pipe(
            filter(([_, shouldPreventMove]) => shouldPreventMove),
            takeUntilDestroyed(),
        )
        .subscribe(([event]) => this.preventEvent(event));

    @Input({transform: coerceBooleanProperty})
    public readonly: BooleanInput = true;

    protected preventEvent(event: Event): void {
        if (this.readonly && event.cancelable) {
            event.preventDefault();
        }
    }

    protected preventKeyboardInteraction(event: KeyboardEvent): void {
        if (SLIDER_INTERACTION_KEYS.has(event.key)) {
            this.preventEvent(event);
        }
    }
}

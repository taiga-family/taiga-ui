import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, HostListener, inject, Input} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    tuiCoerceBooleanProperty,
    TuiDestroyService,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {combineLatest, filter, map, merge, takeUntil, tap} from 'rxjs';

const SLIDER_INTERACTION_KEYS = new Set([
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
    'PageUp',
    'PageDown',
]);

/**
 * Native <input type='range' readonly> doesn't work.
 * This directive imitates this native behaviour.
 */
@Directive({
    selector: 'input[tuiSlider][readonly]',
    providers: [TuiDestroyService],
})
export class TuiSliderReadonlyDirective {
    private readonly el: HTMLInputElement = inject(ElementRef).nativeElement;
    private readonly doc = inject(DOCUMENT);

    @Input()
    readonly: boolean | string = true;

    constructor() {
        const touchStart$ = tuiTypedFromEvent(this.el, 'touchstart', {
            passive: false,
        });
        const touchMove$ = tuiTypedFromEvent(this.doc, 'touchmove', {
            passive: false,
        });
        const touchEnd$ = tuiTypedFromEvent(this.doc, 'touchend', {
            passive: true,
        });

        const shouldPreventMove$ = merge(
            touchStart$.pipe(
                tap(e => this.preventEvent(e)),
                map(ALWAYS_TRUE_HANDLER),
            ),
            touchEnd$.pipe(map(ALWAYS_FALSE_HANDLER)),
        );

        /**
         * @bad TODO think about another solution.
         * Keep in mind that preventing touch event (on slider) inside `@HostListener('touchstart')` doesn't work for mobile chrome.
         */
        combineLatest([touchMove$, shouldPreventMove$])
            .pipe(
                filter(([_, shouldPreventMove]) => shouldPreventMove),
                takeUntil(inject(TuiDestroyService, {self: true})),
            )
            .subscribe(([moveEvent]) => this.preventEvent(moveEvent));
    }

    @HostListener('mousedown', ['$event'])
    preventEvent(event: Event): void {
        if (event.cancelable && tuiCoerceBooleanProperty(this.readonly)) {
            event.preventDefault();
        }
    }

    @HostListener('keydown', ['$event'])
    preventKeyboardInteraction(event: KeyboardEvent): void {
        if (SLIDER_INTERACTION_KEYS.has(event.key)) {
            this.preventEvent(event);
        }
    }
}

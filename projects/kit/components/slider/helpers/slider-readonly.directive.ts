import {DOCUMENT} from '@angular/common';
import {Directive, ElementRef, HostListener, Inject, Input, Self} from '@angular/core';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    tuiCoerceBooleanProperty,
    TuiDestroyService,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {combineLatest, merge, Observable} from 'rxjs';
import {filter, map, takeUntil, tap} from 'rxjs/operators';

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
    @Input()
    readonly: boolean | string = true;

    constructor(
        @Inject(ElementRef) el: ElementRef<HTMLInputElement>,
        @Inject(DOCUMENT) doc: Document,
        @Self()
        @Inject(TuiDestroyService)
        destroy$: Observable<unknown>,
    ) {
        const touchStart$ = tuiTypedFromEvent(el.nativeElement, 'touchstart', {
            passive: false,
        });
        const touchMove$ = tuiTypedFromEvent(doc, 'touchmove', {
            passive: false,
        });
        const touchEnd$ = tuiTypedFromEvent(doc, 'touchend', {
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
                takeUntil(destroy$),
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

import {
    AfterViewInit,
    Directive,
    ElementRef,
    Inject,
    Input,
    NgZone,
    Optional,
    Renderer2,
    Self,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {POLLING_TIME} from '@taiga-ui/cdk/constants';
import {
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR, TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {setNativeFocused} from '@taiga-ui/cdk/utils/focus';
import {Observable, race, timer} from 'rxjs';
import {map, skipWhile, take, throttleTime} from 'rxjs/operators';

const TIMEOUT = 1000;
const NG_ANIMATION_SELECTOR = '.ng-animating';

// TODO: 3.0 change input name to tuiAutoFocus and handle empty string
// TODO: refactor on this whole thing in 3.0
@Directive({
    selector: '[tuiAutoFocus]',
})
export class TuiAutoFocusDirective implements AfterViewInit {
    @Input()
    autoFocus = true;

    constructor(
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        private readonly tuiFocusableComponent: TuiFocusableElementAccessor | null,
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
        @Inject(NgZone)
        private readonly ngZone: NgZone,
        @Inject(ElementRef)
        private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2)
        private readonly renderer: Renderer2,
    ) {}

    ngAfterViewInit(): void {
        if (!this.autoFocus) {
            return;
        }

        if (this.isTextFieldElement) {
            if (this.isIos) {
                this.ngZone.runOutsideAngular(() => this.iosWebkitAutofocus());
            } else {
                race(
                    timer(TIMEOUT),
                    this.animationFrame$.pipe(
                        throttleTime(POLLING_TIME),
                        map(() => this.element.closest(NG_ANIMATION_SELECTOR)),
                        skipWhile(Boolean),
                        take(1),
                    ),
                ).subscribe(() => setNativeFocused(this.element));
            }

            return;
        }

        setNativeFocused(this.element);
    }

    private get element(): TuiNativeFocusableElement {
        return (
            this.tuiFocusableComponent?.nativeFocusableElement ||
            this.elementRef.nativeElement
        );
    }

    private get isTextFieldElement(): boolean {
        return this.element.matches('input, textarea');
    }

    private iosWebkitAutofocus(): void {
        const fakeInput: HTMLElement = this.renderer.createElement('input');

        fakeInput.style.position = 'absolute';
        fakeInput.style.opacity = '0';
        fakeInput.style.height = '0';

        const blurHandler = (): void => setNativeFocused(fakeInput);
        const focusHandler = (): void => {
            setTimeout(() => {
                setNativeFocused(this.element);

                /**
                 * @note:
                 * We can't remove the element immediately, because it breaks flow
                 */
                setTimeout(() => {
                    fakeInput.removeEventListener('blur', blurHandler);
                    fakeInput.removeEventListener('focus', focusHandler);
                    fakeInput.remove();
                });
            });
        };

        /**
         * @note: ping-pong eager strategy hack
         * After creating an element and bringing it into DOM,
         * the browser automatically focuses on the invisible element.
         * And then, after focus is triggered, we try to focus on target element, and if we managed to refocus,
         * then we try to focus again on an invisible element, so that the keyboard slowly appears.
         * This ping pong allows the keyboard to not overlap the modal window.
         */
        fakeInput.addEventListener('blur', blurHandler, {once: true});
        fakeInput.addEventListener('focus', focusHandler);

        this.element.parentElement?.appendChild(fakeInput);

        setNativeFocused(fakeInput);
    }
}

import {
    Directive,
    ElementRef,
    Inject,
    NgZone,
    Optional,
    Renderer2,
    Self,
} from '@angular/core';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk/tokens';

import {AbstractTuiAutofocusHandler} from './abstract.handler';

@Directive()
export class TuiIosAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        tuiFocusableComponent: TuiFocusableElementAccessor | null,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2)
        private readonly renderer: Renderer2,
        @Inject(NgZone)
        private readonly ngZone: NgZone,
    ) {
        super(tuiFocusableComponent, elementRef);
    }

    setFocus(): void {
        if (this.isTextFieldElement) {
            this.ngZone.runOutsideAngular(() => this.iosWebkitAutofocus());
        } else {
            this.element.focus();
        }
    }

    private iosWebkitAutofocus(): void {
        const fakeInput: HTMLElement = this.renderer.createElement('input');

        fakeInput.style.position = 'absolute';
        fakeInput.style.opacity = '0';
        fakeInput.style.height = '0';

        const blurHandler = (): void => fakeInput.focus();
        const focusHandler = (): void => {
            setTimeout(() => {
                this.element.focus();

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

        fakeInput.focus();
    }
}

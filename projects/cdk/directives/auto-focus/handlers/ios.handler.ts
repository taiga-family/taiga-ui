import {
    Directive,
    ElementRef,
    Inject,
    NgZone,
    Optional,
    Renderer2,
    Self,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {TuiFocusableElementAccessor} from '@taiga-ui/cdk/interfaces';
import {TUI_FOCUSABLE_ITEM_ACCESSOR} from '@taiga-ui/cdk/tokens';
import {px} from '@taiga-ui/cdk/utils';

import {AbstractTuiAutofocusHandler} from './abstract.handler';

// @dynamic
@Directive()
export class TuiIosAutofocusHandler extends AbstractTuiAutofocusHandler {
    private elementFocusTimeoutId = 0;
    private fakeFocusTimeoutId = 0;

    constructor(
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        tuiFocusableComponent: TuiFocusableElementAccessor | null,
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(WINDOW) private readonly windowRef: Window,
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
        const fakeInput: HTMLInputElement = this.makeFakeInput();
        const duration = this.getDurationTimeBeforeFocus();

        const blurHandler = (): void => fakeInput.focus({preventScroll: true});
        const focusHandler = (): void => {
            clearTimeout(this.fakeFocusTimeoutId);

            this.fakeFocusTimeoutId = this.windowRef.setTimeout(() => {
                clearTimeout(this.elementFocusTimeoutId);

                fakeInput.removeEventListener('blur', blurHandler);
                fakeInput.removeEventListener('focus', focusHandler);

                this.elementFocusTimeoutId = this.windowRef.setTimeout(() => {
                    this.element.focus({preventScroll: false});
                    fakeInput.remove();
                }, duration);
            });
        };

        fakeInput.addEventListener('blur', blurHandler, {once: true});
        fakeInput.addEventListener('focus', focusHandler);

        if (this.insideDialog()) {
            this.windowRef.document.body.appendChild(fakeInput);
        } else {
            this.element.parentElement?.appendChild(fakeInput);
        }

        fakeInput.focus({preventScroll: true});
    }

    /**
     * @note:
     * emulate textfield position in layout with cursor
     * before focus to real textfield element
     */
    private makeFakeInput(): HTMLInputElement {
        const fakeInput: HTMLInputElement = this.renderer.createElement('input');

        fakeInput.style.height = px(this.element.clientHeight);
        fakeInput.style.width = px(this.element.clientWidth / 2);
        fakeInput.style.position = 'fixed';
        fakeInput.style.opacity = '0';
        fakeInput.style.fontSize = px(16); // disable possible auto zoom
        fakeInput.readOnly = true; // prevent keyboard for fake input

        // @note: emulate position cursor before focus to real textfield element
        fakeInput.style.top = px(this.element.getBoundingClientRect().top);
        fakeInput.style.left = px(this.element.getBoundingClientRect().left);

        return fakeInput;
    }

    private getDurationTimeBeforeFocus(): number {
        return (
            parseFloat(
                this.windowRef
                    .getComputedStyle(this.element)
                    .getPropertyValue('--tui-duration'),
            ) || 0
        );
    }

    /**
     * @note:
     * unfortunately, in older versions of iOS
     * there is a bug that the fake input cursor
     * will move along with the dialog animation
     * and then that dialog will be shaking
     */
    private insideDialog(): boolean {
        return !!this.element.closest('tui-dialog');
    }
}

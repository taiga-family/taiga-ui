import {type ElementRef, type NgZone, type Renderer2} from '@angular/core';
import {tuiIsPresent, tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';

import {type TuiAutofocusOptions} from '../autofocus.options';
import {AbstractTuiAutofocusHandler} from './abstract.handler';

const TEXTFIELD_ATTRS = [
    'type',
    'inputMode',
    'autocomplete',
    'accept',
    'min',
    'max',
    'step',
    'pattern',
    'size',
    'maxlength',
] as const;

export class TuiIosAutofocusHandler extends AbstractTuiAutofocusHandler {
    constructor(
        el: ElementRef<HTMLElement>,
        private readonly renderer: Renderer2,
        private readonly zone: NgZone,
        private readonly win: Window,
        options: TuiAutofocusOptions,
    ) {
        super(el, options);
    }

    public setFocus(): void {
        if (this.isTextFieldElement) {
            this.zone.runOutsideAngular(() => this.iosWebkitAutofocus());
        } else {
            this.element.focus({preventScroll: true});
        }
    }

    private iosWebkitAutofocus(): void {
        const fakeInput: HTMLInputElement = this.makeFakeInput();
        const duration = this.getDurationTimeBeforeFocus();
        let fakeFocusTimeoutId = 0;
        let elementFocusTimeoutId = 0;

        const blurHandler = (): void => fakeInput.focus({preventScroll: true});
        const focusHandler = (): void => {
            clearTimeout(fakeFocusTimeoutId);

            fakeFocusTimeoutId = this.win.setTimeout(() => {
                clearTimeout(elementFocusTimeoutId);

                fakeInput.removeEventListener('blur', blurHandler);
                fakeInput.removeEventListener('focus', focusHandler);

                elementFocusTimeoutId = this.win.setTimeout(() => {
                    this.element.focus({preventScroll: this.options.preventScroll});
                    fakeInput.remove();
                }, duration);
            });
        };

        fakeInput.addEventListener('blur', blurHandler, {once: true});
        fakeInput.addEventListener('focus', focusHandler);

        if (this.insideDialog()) {
            this.win.document.body.appendChild(fakeInput);
        } else {
            this.element.parentElement?.appendChild(fakeInput);
        }

        fakeInput.focus({preventScroll: true});
    }

    /**
     * @note:
     * emulate textfield position in layout with cursor
     * before focus to real textfield element
     *
     * required note:
     * [fakeInput.readOnly = true] ~
     * don't use {readOnly: true} value, it's doesn't work for emulate autofill
     *
     * [fakeInput.style.opacity = 0] ~
     * don't use {opacity: 0}, sometimes it's doesn't work for emulate real input
     *
     * [fakeInput.style.fontSize = 16px] ~
     * disable possible auto zoom
     *
     * [fakeInput.style.top/left] ~
     * emulate position cursor before focus to real textfield element
     */
    private makeFakeInput(): HTMLInputElement {
        const fakeInput: HTMLInputElement = this.renderer.createElement('input');
        const rect: DOMRect = this.element.getBoundingClientRect();

        this.patchFakeInputFromFocusableElement(fakeInput);

        fakeInput.style.height = tuiPx(rect.height);
        fakeInput.style.width = tuiPx(rect.width / 2);
        fakeInput.style.position = 'fixed';
        fakeInput.style.zIndex = '-99999999';
        fakeInput.style.caretColor = 'transparent';
        fakeInput.style.border = 'none';
        fakeInput.style.outline = 'none';
        fakeInput.style.color = 'transparent';
        fakeInput.style.background = 'transparent';
        fakeInput.style.cursor = 'none';
        fakeInput.style.fontSize = tuiPx(16);
        fakeInput.style.top = tuiPx(rect.top);
        fakeInput.style.left = tuiPx(rect.left);

        return fakeInput;
    }

    private getDurationTimeBeforeFocus(): number {
        return (
            parseFloat(
                this.win
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

    /**
     * @note:
     * inherit basic attributes values from real input
     * for help iOS detect what do you want see on keyboard,
     * for example [inputMode=numeric, autocomplete=cc-number]
     */
    private patchFakeInputFromFocusableElement(fakeInput: HTMLInputElement): void {
        TEXTFIELD_ATTRS.forEach((attr) => {
            const value = this.element.getAttribute(attr);

            if (tuiIsPresent(value)) {
                fakeInput.setAttribute(attr, value);
            }
        });
    }
}

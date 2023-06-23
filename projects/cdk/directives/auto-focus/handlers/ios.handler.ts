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
import {tuiIsPresent, tuiPx} from '@taiga-ui/cdk/utils';

import {AbstractTuiAutofocusHandler} from './abstract.handler';

const TEXTFIELD_ATTRS = [
    `type`,
    `inputMode`,
    `autocomplete`,
    `accept`,
    `min`,
    `max`,
    `step`,
    `pattern`,
    `size`,
    `maxlength`,
] as const;

@Directive()
export class TuiIosAutofocusHandler extends AbstractTuiAutofocusHandler {
    protected fakeEl?: HTMLInputElement;
    protected fakeFocusTimeoutId = 0;
    protected elementFocusTimeoutId = 0;

    constructor(
        @Optional()
        @Self()
        @Inject(TUI_FOCUSABLE_ITEM_ACCESSOR)
        focusable: TuiFocusableElementAccessor | null,
        @Inject(ElementRef) el: ElementRef<HTMLElement>,
        @Inject(Renderer2) private readonly renderer: Renderer2,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(WINDOW) private readonly win: Window,
    ) {
        super(focusable, el);
        this.patchCssStyles();
    }

    setFocus(): void {
        if (this.isTextFieldElement) {
            this.ngZone.runOutsideAngular(() => this.iosWebkitAutofocus());
        } else {
            this.element.focus();
        }
    }

    destroy(): void {
        this.fakeEl?.remove();
        clearTimeout(this.fakeFocusTimeoutId);
        clearTimeout(this.elementFocusTimeoutId);
    }

    private iosWebkitAutofocus(): void {
        this.destroy();

        this.fakeEl = this.makeFakeInput();

        const blurHandler = (): void => this.fakeEl?.focus({preventScroll: true});

        const inputHandler = (): void => {
            const value = this.fakeEl?.value;

            if (!value) {
                return;
            }

            (this.element as HTMLInputElement).value = value;
            this.element.dispatchEvent(new Event(`input`));
            this.fakeEl?.remove();
        };

        const localDestroyHandler = (): void => {
            this.fakeEl?.removeEventListener(`input`, inputHandler);
            this.fakeEl?.remove();

            this.element.removeEventListener(`blur`, localDestroyHandler);
            this.element.removeEventListener(`input`, localDestroyHandler);
        };

        const focusHandler = (): void => {
            clearTimeout(this.fakeFocusTimeoutId);

            this.fakeFocusTimeoutId = this.win.setTimeout(() => {
                clearTimeout(this.elementFocusTimeoutId);

                this.fakeEl?.removeEventListener(`blur`, blurHandler);
                this.fakeEl?.removeEventListener(`focus`, focusHandler);

                this.elementFocusTimeoutId = this.win.setTimeout(() => {
                    this.element.addEventListener(`blur`, localDestroyHandler);
                    this.element.focus({preventScroll: false});
                }, this.getDurationTimeBeforeFocus());
            });
        };

        this.fakeEl.addEventListener(`blur`, blurHandler, {once: true});
        this.fakeEl.addEventListener(`focus`, focusHandler);
        this.fakeEl.addEventListener(`input`, inputHandler);
        this.element.addEventListener(`input`, localDestroyHandler);

        if (this.insideDialog()) {
            this.win.document.body.appendChild(this.fakeEl);
        } else {
            this.element.parentElement?.appendChild(this.fakeEl);
        }

        this.fakeEl.focus({preventScroll: true});
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
        const fakeInput: HTMLInputElement = this.renderer.createElement(`input`);
        const rect: DOMRect = this.element.getBoundingClientRect();

        this.patchFakeInputFromFocusableElement(fakeInput);

        fakeInput.style.height = tuiPx(rect.height);
        fakeInput.style.width = tuiPx(rect.width / 2);
        fakeInput.style.position = `fixed`;
        fakeInput.style.zIndex = `-99999999`;
        fakeInput.style.caretColor = `transparent`;
        fakeInput.style.border = `none`;
        fakeInput.style.outline = `none`;
        fakeInput.style.color = `transparent`;
        fakeInput.style.background = `transparent`;
        fakeInput.style.cursor = `none`;
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
                    .getPropertyValue(`--tui-duration`),
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
        return !!this.element.closest(`tui-dialog`);
    }

    /**
     * @note:
     * This is necessary so that the viewport isn't recalculated
     * and then the dialogs don't shake.
     *
     * Also, we need to fixed height viewport,
     * so that when focusing the dialogs don't shake
     */
    private patchCssStyles(): void {
        const doc = this.win.document;

        for (const element of [doc.documentElement, doc.body]) {
            element.style.setProperty(`overflow`, `auto`);
            element.style.setProperty(`height`, `100%`);
        }
    }

    /**
     * @note:
     * inherit basic attributes values from real input
     * for help iOS detect what do you want see on keyboard,
     * for example [inputMode=numeric, autocomplete=cc-number]
     */
    private patchFakeInputFromFocusableElement(fakeInput: HTMLInputElement): void {
        TEXTFIELD_ATTRS.forEach(attr => {
            const value = this.element.getAttribute(attr);

            if (tuiIsPresent(value)) {
                fakeInput.setAttribute(attr, value);
            }
        });
    }
}

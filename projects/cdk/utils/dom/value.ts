import {coerceElement} from '@angular/cdk/coercion';
import {isPlatformBrowser} from '@angular/common';
import {
    DestroyRef,
    effect,
    type ElementRef,
    inject,
    INJECTOR,
    isSignal,
    PLATFORM_ID,
    type Signal,
    signal,
    untracked,
    type WritableSignal,
} from '@angular/core';
import {WA_WINDOW} from '@ng-web-apis/common';

type WithValue = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export function tuiValue(
    input:
        | ElementRef<WithValue>
        | Signal<ElementRef<WithValue> | undefined>
        | Signal<WithValue | undefined>
        | WithValue,
    injector = inject(INJECTOR),
): WritableSignal<string> {
    const win = injector.get<any>(WA_WINDOW);

    if (!win.tuiInputPatched && isPlatformBrowser(injector.get(PLATFORM_ID))) {
        win.tuiInputPatched = true;

        patch(win.HTMLInputElement.prototype);
        patch(win.HTMLTextAreaElement.prototype);
        patch(win.HTMLSelectElement.prototype);
    }

    let element = isSignal(input) ? undefined : coerceElement(input);
    let cleanup = (): void => {};

    const options = {injector};
    const value = signal(element?.value || '');
    const process = (el: WithValue): (() => void) => {
        const update = (): void => untracked(() => value.set(el.value));

        el.addEventListener('input', update, {capture: true});
        el.addEventListener('tui-input', update, {capture: true});

        return (): void => {
            el.removeEventListener('input', update, {capture: true});
            el.removeEventListener('tui-input', update, {capture: true});
        };
    };

    injector.get(DestroyRef).onDestroy(() => cleanup());

    if (isSignal(input)) {
        effect(() => {
            element = coerceElement(input());
            cleanup();

            if (element && !element.matches('select[multiple]')) {
                value.set(element.value);
                cleanup = process(element);
            }
        }, options);
    } else if (element && !element.matches('select[multiple]')) {
        cleanup = process(element);
    }

    effect(() => {
        const v = value();

        /**
         * select[multiple] elements have value of first selected option,
         * but there could be more, setting value resets other selected options
         */
        if (element?.matches('select[multiple]')) {
            return;
        }

        if (element?.matches(':focus') && 'selectionStart' in element) {
            const {selectionStart, selectionEnd} = element;

            /**
             * After programmatic updates of input's value, caret is automatically placed at the end –
             * revert to the previous position
             */
            element.value = v;
            element.setSelectionRange(selectionStart, selectionEnd);
        } else if (element) {
            element.value = v;
        }
    }, options);

    return value;
}

function patch(prototype: WithValue): void {
    const {set} = Object.getOwnPropertyDescriptor(prototype, 'value')!;

    Object.defineProperty(prototype, 'value', {
        set(this: WithValue, detail: string) {
            const value = this.value;
            const event = new CustomEvent('tui-input', {detail, bubbles: true});

            set!.call(this, detail);

            if (value !== detail) {
                this.dispatchEvent(event);
            }
        },
    });
}

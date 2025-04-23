import {coerceElement} from '@angular/cdk/coercion';
import {isPlatformBrowser} from '@angular/common';
import type {ElementRef, Signal, WritableSignal} from '@angular/core';
import {
    DestroyRef,
    effect,
    inject,
    INJECTOR,
    isSignal,
    PLATFORM_ID,
    signal,
} from '@angular/core';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';

type WithValue = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

let patched = false;

export function tuiValue(
    input:
        | ElementRef<WithValue>
        | Signal<ElementRef<WithValue> | undefined>
        | Signal<WithValue | undefined>
        | WithValue,
    injector = inject(INJECTOR),
): WritableSignal<string> {
    if (!patched && isPlatformBrowser(injector.get(PLATFORM_ID))) {
        patched = true;

        patch(HTMLInputElement.prototype);
        patch(HTMLTextAreaElement.prototype);
        patch(HTMLSelectElement.prototype);
    }

    let element = isSignal(input) ? undefined : coerceElement(input);
    let cleanup = (): void => {};

    const options = {injector, ...TUI_ALLOW_SIGNAL_WRITES};
    const value = signal(element?.value || '');
    const process = (el: WithValue): (() => void) => {
        const update = (): void => value.set(el.value);

        el.addEventListener('input', update);
        el.addEventListener('programmaticinput', update);

        return (): void => {
            el.removeEventListener('input', update);
            el.removeEventListener('programmaticinput', update);
        };
    };

    injector.get(DestroyRef).onDestroy(() => cleanup());

    if (isSignal(input)) {
        effect(() => {
            element = coerceElement(input());
            cleanup();

            if (element) {
                value.set(element.value);
                cleanup = process(element);
            }
        }, options);
    } else if (element) {
        cleanup = process(element);
    }

    effect(() => {
        const v = value();

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
            const event = new CustomEvent('programmaticinput', {detail, bubbles: true});

            set!.call(this, detail);

            if (value !== detail) {
                this.dispatchEvent(event);
            }
        },
    });
}

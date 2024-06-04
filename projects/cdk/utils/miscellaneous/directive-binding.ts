import type {ProviderToken, Signal, WritableSignal} from '@angular/core';
import {effect, inject, isSignal, signal} from '@angular/core';

export function tuiDirectiveBinding<T, G extends keyof T, R>(
    token: ProviderToken<T>,
    key: G,
    initial: T[G] extends WritableSignal<R> ? R | Signal<R> : Signal<T[G]> | T[G],
): WritableSignal<typeof initial> {
    const result: any = isSignal(initial) ? initial : signal(initial);
    const directive = inject(token, {self: true});

    effect(
        () => {
            const value: any = result();

            if (isSignal(directive[key])) {
                (directive[key] as WritableSignal<T[G]>).set(value);
            } else {
                directive[key] = value;
            }
        },
        {allowSignalWrites: true},
    );

    return result;
}

import type {ProviderToken, WritableSignal} from '@angular/core';
import {effect, inject, isSignal, signal} from '@angular/core';

export function tuiDirectiveBinding<T, G extends keyof T, R>(
    token: ProviderToken<T>,
    key: G,
    initial: T[G] extends WritableSignal<R> ? R : T[G],
): WritableSignal<typeof initial> {
    const result = signal(initial);
    const directive = inject(token);

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

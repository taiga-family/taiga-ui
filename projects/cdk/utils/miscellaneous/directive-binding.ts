import type {ProviderToken, Signal, WritableSignal} from '@angular/core';
import {effect, inject, isSignal, signal} from '@angular/core';

type SignalLikeTypeOf<T> = T extends Signal<infer R> ? R : T;

type SignalLike<T> = Signal<T> | T;

export function tuiDirectiveBinding<
    T,
    G extends keyof T,
    I extends SignalLike<SignalLikeTypeOf<T[G]>>,
>(
    token: ProviderToken<T>,
    key: G,
    initial: I,
): I extends Signal<any> ? I : WritableSignal<I> {
    const result: any = isSignal(initial) ? initial : signal(initial);
    const directive: any = inject(token, {self: true});
    const output = directive[`${key.toString()}Change`];

    effect(
        () => {
            const value: any = result();

            if (isSignal(directive[key])) {
                directive[key].set(value);
            } else {
                directive[key] = value;
            }

            directive.ngOnChanges?.({});
            output?.emit?.(value);
        },
        {allowSignalWrites: true},
    );

    return result;
}

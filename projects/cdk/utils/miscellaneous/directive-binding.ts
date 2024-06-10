import type {InjectOptions, ProviderToken, Signal, WritableSignal} from '@angular/core';
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
    options: InjectOptions = {self: true},
): I extends Signal<any> ? I : WritableSignal<I> {
    const result: any = isSignal(initial) ? initial : signal(initial);
    const directive: any = inject(token, options);
    const output = directive[`${key.toString()}Change`];

    // TODO: Figure out why effects are executed all the time and not just when result changes (check with Angular 18)
    let previous: any;

    effect(
        () => {
            const value: any = result();

            if (previous === value) {
                return;
            }

            if (isSignal(directive[key])) {
                directive[key].set(value);
            } else {
                directive[key] = value;
            }

            directive.ngOnChanges?.({});
            output?.emit?.(value);
            previous = value;
        },
        {allowSignalWrites: true},
    );

    return result;
}

import {
    effect,
    type EventEmitter,
    inject,
    type InjectOptions,
    isSignal,
    type OnChanges,
    type ProviderToken,
    type Signal,
    signal,
    type WritableSignal,
} from '@angular/core';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';

type SignalLikeTypeOf<T> = T extends Signal<infer R> ? R : T;

type SignalLike<T> = Signal<T> | T;

type Result<I> = I extends Signal<unknown> ? I : WritableSignal<I>;

type Directive<T, G extends keyof T> = Record<
    'ngOnChanges',
    OnChanges['ngOnChanges'] | undefined
> &
    Record<G, WritableSignal<unknown>> &
    Record<string, {emit?: EventEmitter<unknown>['emit']}> &
    T;

export function tuiDirectiveBinding<
    T,
    G extends keyof T,
    I extends SignalLike<SignalLikeTypeOf<T[G]>>,
>(
    token: ProviderToken<T>,
    key: G,
    initial: I,
    options: InjectOptions = {self: true},
): Result<I> {
    const result: Signal<unknown> = isSignal(initial) ? initial : signal(initial);
    const directive = inject(token, options) as Directive<T, G>;
    const output = directive?.[`${key.toString()}Change`];

    // TODO: Figure out why effects are executed all the time and not just when result changes (check with Angular 18)
    let previous: unknown;

    effect(() => {
        const value = result();

        if (previous === value) {
            return;
        }

        if (isSignal(directive[key])) {
            directive[key].set(value);
        } else {
            (directive as Record<G, unknown>)[key] = value;
        }

        directive.ngOnChanges?.({});
        output?.emit?.(value);
        previous = value;
    }, TUI_ALLOW_SIGNAL_WRITES);

    return result as Result<I>;
}

import type {InjectOptions, Signal, WritableSignal} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiAppearance} from './appearance.directive';

type A = string;

type S = TuiInteractiveState | null;

type F = boolean | null;

type M = string | readonly string[] | null;

export function tuiAppearance(
    value: A | WritableSignal<A>,
    options?: InjectOptions,
): WritableSignal<A>;
export function tuiAppearance(value: Signal<A>, options?: InjectOptions): Signal<A>;
export function tuiAppearance(value: A | Signal<A>, options?: InjectOptions): Signal<A> {
    return tuiDirectiveBinding(TuiAppearance, 'appearance', value, options);
}

export function tuiAppearanceState(
    value: S | WritableSignal<S>,
    options?: InjectOptions,
): WritableSignal<S>;
export function tuiAppearanceState(value: Signal<S>, options?: InjectOptions): Signal<S>;
export function tuiAppearanceState(
    value: S | Signal<S>,
    options?: InjectOptions,
): Signal<S> {
    return tuiDirectiveBinding(TuiAppearance, 'state', value, options);
}

export function tuiAppearanceFocus(
    value: F | WritableSignal<F>,
    options?: InjectOptions,
): WritableSignal<F>;
export function tuiAppearanceFocus(value: Signal<F>, options?: InjectOptions): Signal<F>;
export function tuiAppearanceFocus(
    value: F | Signal<F>,
    options?: InjectOptions,
): Signal<F> {
    return tuiDirectiveBinding(TuiAppearance, 'focus', value, options);
}

export function tuiAppearanceMode(
    value: M | WritableSignal<M>,
    options?: InjectOptions,
): WritableSignal<M>;
export function tuiAppearanceMode(value: Signal<M>, options?: InjectOptions): Signal<M>;
export function tuiAppearanceMode(
    value: M | Signal<M>,
    options?: InjectOptions,
): Signal<M> {
    return tuiDirectiveBinding(TuiAppearance, 'mode', value, options);
}

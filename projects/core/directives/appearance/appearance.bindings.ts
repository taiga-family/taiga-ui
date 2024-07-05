import type {Signal, WritableSignal} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiAppearance} from './appearance.directive';

type A = string;

type S = TuiInteractiveState | null;

type F = boolean | null;

export function tuiAppearance(value: A | WritableSignal<A>): WritableSignal<A>;
export function tuiAppearance(value: Signal<A>): Signal<A>;
export function tuiAppearance(value: A | Signal<A>): Signal<A> {
    return tuiDirectiveBinding(TuiAppearance, 'tuiAppearance', value);
}

export function tuiAppearanceState(value: S | WritableSignal<S>): WritableSignal<S>;
export function tuiAppearanceState(value: Signal<S>): Signal<S>;
export function tuiAppearanceState(value: S | Signal<S>): Signal<S> {
    return tuiDirectiveBinding(TuiAppearance, 'tuiAppearanceState', value);
}

export function tuiAppearanceFocus(value: F | WritableSignal<F>): WritableSignal<F>;
export function tuiAppearanceFocus(value: Signal<F>): Signal<F>;
export function tuiAppearanceFocus(value: F | Signal<F>): Signal<F> {
    return tuiDirectiveBinding(TuiAppearance, 'tuiAppearanceFocus', value);
}

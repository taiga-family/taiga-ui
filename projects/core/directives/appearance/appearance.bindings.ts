import {Signal, WritableSignal} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk';
import type {TuiInteractiveState} from '@taiga-ui/core/types';

import {TuiAppearance} from './appearance.directive';

type A = string;
type S = TuiInteractiveState | null;
type F = boolean | null;

export function tuiAppearance(value: WritableSignal<A> | A): WritableSignal<A>;
export function tuiAppearance(value: Signal<A>): Signal<A>;
export function tuiAppearance(value: Signal<A> | A): Signal<A> {
    return tuiDirectiveBinding(TuiAppearance, 'tuiAppearance', value);
}

export function tuiAppearanceState(value: WritableSignal<S> | S): WritableSignal<S>;
export function tuiAppearanceState(value: Signal<S>): Signal<S>;
export function tuiAppearanceState(value: Signal<S> | S): Signal<S> {
    return tuiDirectiveBinding(TuiAppearance, 'tuiAppearanceState', value);
}

export function tuiAppearanceFocus(value: WritableSignal<F> | F): WritableSignal<F>;
export function tuiAppearanceFocus(value: Signal<F>): Signal<F>;
export function tuiAppearanceFocus(value: Signal<F> | F): Signal<F> {
    return tuiDirectiveBinding(TuiAppearance, 'tuiAppearanceFocus', value);
}

import type {Signal, WritableSignal} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoOptions} from '@maskito/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils';

type M = MaskitoOptions | null;

export function tuiMaskito(options: M | WritableSignal<M>): WritableSignal<M>;
export function tuiMaskito(options: Signal<M>): Signal<M>;
export function tuiMaskito(options: M | Signal<M>): Signal<M> {
    return tuiDirectiveBinding(MaskitoDirective, 'options', options);
}

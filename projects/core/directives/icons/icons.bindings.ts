import {type InjectOptions, type Signal, type WritableSignal} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';

import {TuiIcons} from './icons.directive';

export function tuiIconStart(
    value: WritableSignal<string> | string,
    options?: InjectOptions,
): WritableSignal<string>;
export function tuiIconStart(
    value: Signal<string>,
    options?: InjectOptions,
): Signal<string>;
export function tuiIconStart(
    value: Signal<string> | string,
    options?: InjectOptions,
): Signal<string> {
    return tuiDirectiveBinding(TuiIcons, 'iconStart', value, options);
}

export function tuiIconEnd(
    value: WritableSignal<string> | string,
    options?: InjectOptions,
): WritableSignal<string>;
export function tuiIconEnd(
    value: Signal<string>,
    options?: InjectOptions,
): Signal<string>;
export function tuiIconEnd(
    value: Signal<string> | string,
    options: InjectOptions = {},
): Signal<string> {
    return tuiDirectiveBinding(TuiIcons, 'iconEnd', value, options);
}

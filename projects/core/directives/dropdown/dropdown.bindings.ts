import {type Signal, type WritableSignal} from '@angular/core';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownOpen} from './dropdown-open.directive';

type C = PolymorpheusContent;

export function tuiDropdown(value: C | WritableSignal<C>): WritableSignal<C>;
export function tuiDropdown(value: Signal<C>): Signal<C>;
export function tuiDropdown(value: C | Signal<C>): Signal<C> {
    return tuiDirectiveBinding(TuiDropdownDirective, 'tuiDropdown', value, {});
}

export function tuiDropdownEnabled(
    value: WritableSignal<boolean> | boolean,
): WritableSignal<boolean>;
export function tuiDropdownEnabled(value: Signal<boolean>): Signal<boolean>;
export function tuiDropdownEnabled(value: Signal<boolean> | boolean): Signal<boolean> {
    return tuiDirectiveBinding(TuiDropdownOpen, 'enabled', value, {});
}

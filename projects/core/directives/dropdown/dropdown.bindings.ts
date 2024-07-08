import type {Signal, WritableSignal} from '@angular/core';
import {inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownOpen} from './dropdown-open.directive';

type C = PolymorpheusContent;

export function tuiDropdown(value: C | WritableSignal<C>): WritableSignal<C>;
export function tuiDropdown(value: Signal<C>): Signal<C>;
export function tuiDropdown(value: C | Signal<C>): Signal<C> {
    return tuiDirectiveBinding(TuiDropdownDirective, 'tuiDropdown', value);
}

export function tuiDropdownOpen(): WritableSignal<boolean> {
    const open: WritableSignal<boolean> = tuiDirectiveBinding(
        TuiDropdownOpen,
        'tuiDropdownOpen',
        false,
    );

    inject(TuiDropdownOpen)
        .tuiDropdownOpenChange.pipe(takeUntilDestroyed())
        .subscribe((value) => open.set(value));

    return open;
}

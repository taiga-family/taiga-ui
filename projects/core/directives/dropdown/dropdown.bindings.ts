import {inject, Signal, WritableSignal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TuiDropdownDirective} from './dropdown.directive';
import {TuiDropdownOpen} from './dropdown-open.directive';

type C = PolymorpheusContent;

export function tuiDropdown(value: WritableSignal<C> | C): WritableSignal<C>;
export function tuiDropdown(value: Signal<C>): Signal<C>;
export function tuiDropdown(value: Signal<C> | C): Signal<C> {
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
        .subscribe(value => open.set(value));

    return open;
}

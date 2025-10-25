import {inject, type Signal, type WritableSignal} from '@angular/core';
import {outputToObservable, takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
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
    return tuiDirectiveBinding(TuiDropdownOpen, 'tuiDropdownEnabled', value, {});
}

export function tuiDropdownOpen(): WritableSignal<boolean> {
    const open: WritableSignal<boolean> = tuiDirectiveBinding(
        TuiDropdownOpen,
        'tuiDropdownOpen',
        false,
        {},
    );

    outputToObservable(inject(TuiDropdownOpen).tuiDropdownOpenChange)
        .pipe(takeUntilDestroyed())
        .subscribe((value) => open.set(value));

    return open;
}

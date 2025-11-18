import {inject, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';

export function tuiInjectValue<T>(): Signal<T> {
    const control =
        inject(TuiTextfieldComponent, {optional: true})?.control() ||
        inject(NgControl, {optional: true});

    return toSignal(tuiControlValue(control), {requireSync: true});
}

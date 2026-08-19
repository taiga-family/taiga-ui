import {computed, inject, type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';

export function tuiInjectValue<T>(): Signal<T> {
    const textfield = inject(TuiTextfieldComponent, {optional: true});
    const control = textfield?.control() || inject(NgControl, {optional: true});
    const fallback = toSignal<T>(tuiControlValue(control), {requireSync: true});

    return computed(() => {
        const cva = textfield?.child();

        return cva
            ? (cva.value() as T) // preferred for updateOn: 'blur' | 'submit'
            : fallback();
    });
}

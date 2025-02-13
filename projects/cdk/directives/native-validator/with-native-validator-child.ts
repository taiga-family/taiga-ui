import {ContentChild, Directive} from '@angular/core';
import type {AbstractControl, Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiNativeValidator} from './native-validator.directive';

@Directive({
    standalone: true,
    providers: [tuiProvide(NG_VALIDATORS, TuiWithChildNativeValidator, true)],
    host: {
        '(focusout)': 'control && validate(control)',
    },
})
export class TuiWithChildNativeValidator implements Validator {
    @ContentChild(TuiNativeValidator)
    protected child?: TuiNativeValidator;

    protected control?: AbstractControl;

    public validate(control: AbstractControl): null {
        this.control = control;

        return this.child?.validate(control) ?? null;
    }
}

import {Directive, forwardRef, type OnChanges} from '@angular/core';
import {NG_VALIDATORS, type Validator, Validators} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

@Directive({
    selector: '[tuiValidator]',
    inputs: ['validate: tuiValidator'],
    providers: [
        tuiProvide(
            NG_VALIDATORS,
            forwardRef(() => TuiValidator),
            true,
        ),
    ],
})
export class TuiValidator implements Validator, OnChanges {
    protected onChange = EMPTY_FUNCTION;

    public validate = Validators.nullValidator;

    public registerOnValidatorChange(onChange: (...args: any[]) => void): void {
        this.onChange = onChange;
    }

    public ngOnChanges(): void {
        this.onChange();
    }
}

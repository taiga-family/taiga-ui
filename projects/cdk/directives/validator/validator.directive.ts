import type {OnChanges} from '@angular/core';
import {Directive, Input} from '@angular/core';
import type {
    AbstractControl,
    ValidationErrors,
    Validator,
    ValidatorFn,
} from '@angular/forms';
import {NG_VALIDATORS, Validators} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils';

@Directive({
    standalone: true,
    selector: '[tuiValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiValidator, true)],
})
export class TuiValidator implements Validator, OnChanges {
    private onChange = EMPTY_FUNCTION;

    @Input()
    public tuiValidator: ValidatorFn = Validators.nullValidator;

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.tuiValidator(control);
    }

    public registerOnValidatorChange(onChange: (...args: any[]) => void): void {
        this.onChange = onChange;
    }

    public ngOnChanges(): void {
        this.onChange();
    }
}

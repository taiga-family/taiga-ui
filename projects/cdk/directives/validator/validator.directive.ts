import {Directive, forwardRef, Input, OnChanges, OnDestroy} from '@angular/core';
import {
    AbstractControl,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
    ValidatorFn,
} from '@angular/forms';
import {EMPTY_FUNCTION, EMPTY_VALIDATOR} from '@taiga-ui/cdk/constants';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';

@Directive({
    selector: '[tuiValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => TuiValidatorDirective),
            multi: true,
        },
    ],
})
export class TuiValidatorDirective implements Validator, OnChanges, OnDestroy {
    private onChange = EMPTY_FUNCTION;

    @Input()
    @tuiDefaultProp()
    tuiValidator: ValidatorFn = EMPTY_VALIDATOR;

    validate(control: AbstractControl): ValidationErrors | null {
        return this.tuiValidator(control);
    }

    registerOnValidatorChange(onChange: Function) {
        this.onChange = onChange;
    }

    ngOnChanges() {
        this.onChange();
    }

    ngOnDestroy() {
        this.tuiValidator = EMPTY_VALIDATOR;
        this.onChange();
    }
}

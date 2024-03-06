import type {OnChanges, OnDestroy} from '@angular/core';
import {Directive, forwardRef, Input} from '@angular/core';
import type {
    AbstractControl,
    ValidationErrors,
    Validator,
    ValidatorFn,
} from '@angular/forms';
import {NG_VALIDATORS, Validators} from '@angular/forms';
import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

@Directive({
    standalone: true,
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

    public ngOnDestroy(): void {
        this.tuiValidator = Validators.nullValidator;
        this.onChange();
    }
}

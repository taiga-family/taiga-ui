import {Directive, inject, input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    type AbstractControl,
    NG_VALIDATORS,
    type ValidationErrors,
    type Validator,
} from '@angular/forms';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_DEFAULT_ERROR_MESSAGE, TUI_VALIDATION_ERRORS} from '@taiga-ui/core/tokens';
import {isObservable} from 'rxjs';

import {tuiCreateUnfinishedValidator} from './unfinished.validator';

@Directive({
    selector: 'input[tuiUnfinishedValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiUnfinishedValidator, true)],
    host: {'(input)': 'refresh()'},
})
export class TuiUnfinishedValidator implements Validator {
    private readonly element = tuiInjectElement<HTMLInputElement>();
    private readonly default = inject(TUI_DEFAULT_ERROR_MESSAGE);
    private readonly error = inject(TUI_VALIDATION_ERRORS)['tuiUnfinished'];
    private readonly fallback = this.error ? signal(this.error) : this.default;
    private control: AbstractControl | null = null;
    private unfinished = false;

    private readonly message = isObservable(this.error)
        ? toSignal(this.error)
        : this.fallback;

    private readonly validator = tuiCreateUnfinishedValidator(
        this.element,
        () => this.tuiUnfinishedValidator() || this.message(),
    );

    public readonly tuiUnfinishedValidator = input('');

    public validate(control: AbstractControl): ValidationErrors | null {
        this.control = control;

        return this.validator(control);
    }

    public registerOnValidatorChange(onChange: () => void): void {
        this.onValidatorChange = onChange;
    }

    protected refresh(): void {
        const unfinished = this.control?.value === null && this.element.value !== '';

        if (unfinished === this.unfinished) {
            return;
        }

        this.unfinished = unfinished;
        this.onValidatorChange();
    }

    private onValidatorChange: () => void = () => {};
}

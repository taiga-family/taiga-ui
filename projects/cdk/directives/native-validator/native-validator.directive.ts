import {DestroyRef, Directive, inject, Input, NgZone} from '@angular/core';
import type {AbstractControl, Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {
    tuiTakeUntilDestroyed,
    tuiZonefree,
    tuiZonefreeScheduler,
} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiProvide} from '@taiga-ui/cdk/utils';
import {timer} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiNativeValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
    host: {
        '(focusout)': 'handleValidation()',
    },
})
export class TuiNativeValidator implements Validator {
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private control?: AbstractControl;

    @Input()
    public tuiNativeValidator = 'Invalid';

    public validate(control: AbstractControl): null {
        this.control = control;

        timer(0, tuiZonefreeScheduler(this.zone))
            .pipe(tuiZonefree(this.zone), tuiTakeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.handleValidation());

        return null;
    }

    protected handleValidation(): void {
        this.el.setCustomValidity?.(
            this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : '',
        );
    }
}

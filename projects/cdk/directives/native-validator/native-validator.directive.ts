import {DestroyRef, Directive, HostListener, inject, Input, NgZone} from '@angular/core';
import type {AbstractControl, Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiProvide} from '@taiga-ui/cdk/utils';
import {timer} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiNativeValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
})
export class TuiNativeValidator implements Validator {
    private readonly destroyRef = inject(DestroyRef);
    private readonly zone = inject(NgZone);
    private readonly host = tuiInjectElement<HTMLInputElement>();
    private control?: AbstractControl;

    @Input()
    public tuiNativeValidator = 'Invalid';

    public validate(control: AbstractControl): null {
        this.control = control;

        timer(0)
            .pipe(tuiZonefree(this.zone), tuiTakeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.handleValidation());

        return null;
    }

    @HostListener('blur')
    protected handleValidation(): void {
        this.el.setCustomValidity?.(
            this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : '',
        );
    }

    private get el(): HTMLInputElement {
        return this.host.querySelector('input,textarea,select') || this.host;
    }
}

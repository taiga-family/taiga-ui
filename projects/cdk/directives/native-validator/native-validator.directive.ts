import {Directive, ElementRef, HostListener, inject, Input, NgZone} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    standalone: true,
    selector: '[tuiNativeValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            useExisting: TuiNativeValidatorDirective,
        },
    ],
})
export class TuiNativeValidatorDirective implements Validator {
    private readonly el: HTMLInputElement = inject(ElementRef).nativeElement;
    private readonly zone = inject(NgZone);
    private control?: AbstractControl;

    @Input()
    tuiNativeValidator = 'Invalid';

    @HostListener('blur')
    handleValidation(): void {
        this.el.setCustomValidity(
            this.control?.touched && this.control?.invalid ? this.tuiNativeValidator : '',
        );
    }

    validate(control: AbstractControl): null {
        this.control = control;
        this.zone.runOutsideAngular(() => setTimeout(() => this.handleValidation()));

        return null;
    }
}

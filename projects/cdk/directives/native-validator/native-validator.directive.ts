import type {OnDestroy} from '@angular/core';
import {Directive, ElementRef, HostListener, inject, Input, NgZone} from '@angular/core';
import type {AbstractControl, Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiProvide} from '@taiga-ui/cdk/utils';
import {ReplaySubject, takeUntil, timer} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiNativeValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidatorDirective, true)],
})
export class TuiNativeValidatorDirective implements Validator, OnDestroy {
    private readonly zone = inject(NgZone);
    private readonly host: HTMLInputElement = inject(ElementRef).nativeElement;
    private control?: AbstractControl;
    private readonly destroy$ = new ReplaySubject<void>(1);

    @Input()
    public tuiNativeValidator = 'Invalid';

    public validate(control: AbstractControl): null {
        this.control = control;

        timer(0)
            .pipe(
                tuiZonefree(this.zone),
                // NOTE: takeUntilDestroyed and DestroyRef doesn't work,
                // NG0911: View has already been destroyed
                // https://github.com/angular/angular/issues/54527
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.handleValidation());

        return null;
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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

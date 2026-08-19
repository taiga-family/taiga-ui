import {DOCUMENT} from '@angular/common';
import {Directive, effect, inject, input} from '@angular/core';
import {type AbstractControl, NgControl} from '@angular/forms';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {delay, of, startWith, switchMap, timer} from 'rxjs';

@Directive({
    selector: '[tuiNativeValidator]',
    host: {'(focusout)': 'handleValidation()'},
})
export class TuiNativeValidator {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly doc = inject(DOCUMENT);
    private readonly ngControl = inject(NgControl, {self: true, optional: true});

    protected readonly sub = timer(0) // https://github.com/angular/angular/issues/54418
        .pipe(
            switchMap(() => this.control?.events?.pipe(startWith(null)) ?? of(null)),
            delay(0),
            tuiZonefree(),
            tuiTakeUntilDestroyed(),
        )
        .subscribe(() => this.handleValidation());

    /**
     * There is no `InteropNgControl.events` for signal forms
     * Their `InteropNgControl` state (getters `touched` / `invalid`) is backed by signals,
     * so the effect tracks it instead
     */
    protected readonly ref = effect(() => this.handleValidation());

    public readonly tuiNativeValidator = input('Invalid');
    public id = '';

    public get control(): AbstractControl | null {
        return this.ngControl?.control ?? null;
    }

    protected handleValidation(): void {
        const invalid = !!this.control?.touched && this.control?.invalid;

        // TODO: Replace with :has(:invalid) when supported
        this.el.closest('tui-textfield')?.classList.toggle('tui-invalid', invalid);
        this.el.setCustomValidity?.(invalid ? this.tuiNativeValidator() : '');
        this.el.setAttribute('aria-invalid', String(invalid));

        if (!this.id && invalid) {
            this.doc.dispatchEvent(new CustomEvent('tui-validator', {detail: this}));
            this.el.setAttribute('aria-describedby', this.id);
        }
    }
}

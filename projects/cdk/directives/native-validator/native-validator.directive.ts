import {DOCUMENT} from '@angular/common';
import {Directive, effect, inject, INJECTOR, input} from '@angular/core';
import {
    type AbstractControl,
    NG_VALIDATORS,
    NgControl,
    type Validator,
} from '@angular/forms';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {BehaviorSubject, delay, of, switchMap} from 'rxjs';

@Directive({
    selector: '[tuiNativeValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
    host: {'(focusout)': 'handleValidation()'},
})
export class TuiNativeValidator implements Validator {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly doc = inject(DOCUMENT);
    private readonly control$ = new BehaviorSubject<AbstractControl | null>(null);
    private readonly injector = inject(INJECTOR);

    protected readonly sub = this.control$
        .pipe(
            switchMap((control: any) => control?.events || of(null)),
            delay(0),
            tuiZonefree(),
            tuiTakeUntilDestroyed(),
        )
        .subscribe(() => this.handleValidation());

    /**
     * Signal forms never call `validate` => there is no `control.events` to subscribe to.
     * Their `InteropNgControl` state (getters `touched` / `invalid`) is backed by signals,
     * so the effect tracks it instead
     */
    protected readonly ref = effect(() => this.handleValidation());

    public readonly tuiNativeValidator = input('Invalid');
    public id = '';

    public get control(): AbstractControl | null {
        return (
            this.control$.value ??
            // `validate` method is never called in signal forms => this.control$.value is always null
            // https://github.com/angular/angular/issues/66232#issuecomment-5069162406
            this.injector.get(NgControl, null, {optional: true, self: true})?.control ??
            null
        );
    }

    public validate(control: AbstractControl): null {
        this.control$.next(control);

        return null;
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

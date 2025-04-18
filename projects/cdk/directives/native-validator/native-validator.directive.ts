import {Directive, Input} from '@angular/core';
import type {AbstractControl, Validator} from '@angular/forms';
import {NG_VALIDATORS} from '@angular/forms';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiProvide} from '@taiga-ui/cdk/utils';
import {BehaviorSubject, delay, of, switchMap} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiNativeValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
    host: {
        '(focusout)': 'handleValidation()',
    },
})
export class TuiNativeValidator implements Validator {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly control$ = new BehaviorSubject<AbstractControl | null>(null);

    protected readonly sub = this.control$
        .pipe(
            switchMap((control: any) => control?.events || of(null)),
            delay(0),
            tuiZonefree(),
            tuiTakeUntilDestroyed(),
        )
        .subscribe(() => this.handleValidation());

    @Input()
    public tuiNativeValidator = 'Invalid';

    public validate(control: AbstractControl): null {
        this.control$.next(control);

        return null;
    }

    protected handleValidation(): void {
        this.el.setCustomValidity?.(
            this.control$.value?.touched && this.control$.value?.invalid
                ? this.tuiNativeValidator
                : '',
        );
    }
}

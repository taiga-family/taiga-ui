import {Directive, Input} from '@angular/core';
import {type AbstractControl, NG_VALIDATORS, type Validator} from '@angular/forms';
import {tuiTakeUntilDestroyed, tuiZonefree} from '@taiga-ui/cdk/observables';
import {tuiInjectElement, tuiProvide} from '@taiga-ui/cdk/utils';
import {BehaviorSubject, delay, EMPTY, switchMap} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiNativeValidator]',
    providers: [tuiProvide(NG_VALIDATORS, TuiNativeValidator, true)],
    host: {'(focusout)': 'handle()'},
})
export class TuiNativeValidator implements Validator {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly control$ = new BehaviorSubject<AbstractControl | null>(null);

    protected readonly sub = this.control$
        .pipe(
            switchMap((control: any) => control?.events || EMPTY),
            delay(0),
            tuiZonefree(),
            tuiTakeUntilDestroyed(),
        )
        .subscribe(() => this.handle());

    @Input()
    public tuiNativeValidator = 'Invalid';

    public validate(control: AbstractControl): null {
        this.control$.next(control);

        return null;
    }

    protected handle(): void {
        const invalid = !!this.control$.value?.touched && this.control$.value?.invalid;

        // TODO: Replace with :has(:invalid) when supported
        this.el.closest('tui-textfield')?.classList.toggle('tui-invalid', invalid);
        this.el.setCustomValidity?.(invalid ? this.tuiNativeValidator : '');
    }
}

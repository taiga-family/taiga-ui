import {
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Self,
} from '@angular/core';
import {
    AbstractControl,
    FormArrayName,
    FormGroupDirective,
    FormGroupName,
    NgControl,
} from '@angular/forms';
import {tuiAssert, tuiRequiredSetter, TuiValidationError} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiHeightCollapse} from '@taiga-ui/core';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

// TODO: Refactor
// @dynamic
@Component({
    selector: 'tui-field-error',
    // @bad TODO: find a way to get 'touched' state change
    // https://github.com/angular/angular/issues/10887
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './field-error.template.html',
    styleUrls: ['./field-error.style.less'],
    animations: [tuiHeightCollapse, tuiFadeIn],
})
export class TuiFieldErrorComponent implements OnInit, OnDestroy {
    @Input()
    @tuiRequiredSetter()
    set order(value: ReadonlyArray<string>) {
        this.errorsOrder = value;
        this.updateErrorText();
    }

    private firstError: TuiValidationError | null = null;
    private errorsOrder: ReadonlyArray<string> = [];
    private destroy$ = new Subject<void>();

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        private ngControl: NgControl | null,
        @Optional()
        @Self()
        @Inject(FormArrayName)
        private formArrayName: FormArrayName | null,
        @Optional()
        @Self()
        @Inject(FormGroupName)
        private formGroupName: FormGroupName | null,
        @Optional()
        @Self()
        @Inject(FormGroupDirective)
        private formGroup: FormGroupDirective | null,
        @Inject(ChangeDetectorRef) private changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_VALIDATION_ERRORS)
        private readonly validationErrors: Record<string, PolymorpheusContent>,
    ) {
        tuiAssert.assert(
            !!this.ngControl,
            `NgControl not injected in ${this.constructor.name}!` +
                ' Use [(ngModel)] or [formControl] or formControlName for correct work.',
        );

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    ngOnInit() {
        const control = this.control;

        if (!control) {
            return;
        }

        // Temporary workaround until issue with async validators will be resolved.
        // https://github.com/angular/angular/issues/13200
        if (control.asyncValidator) {
            control.updateValueAndValidity();
        }

        this.updateErrorText();

        control.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.updateErrorText();
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    get computedError(): TuiValidationError | null {
        return this.invalid && this.touched && this.firstError ? this.firstError : null;
    }

    get invalid(): boolean {
        const control = this.control;

        return control && control.invalid !== null ? control.invalid : false;
    }

    get touched(): boolean {
        const control = this.control;

        return control && control.touched !== null ? control.touched : false;
    }

    get control(): AbstractControl | null {
        if (this.ngControl) {
            return this.ngControl.control;
        }

        if (this.formArrayName) {
            return this.formArrayName.control;
        }

        if (this.formGroupName) {
            return this.formGroupName.control;
        }

        if (this.formGroup) {
            return this.formGroup.control;
        }

        return null;
    }

    registerOnChange() {
        this.markForCheck();
    }

    registerOnTouched() {
        this.markForCheck();
    }

    setDisabledState() {
        this.markForCheck();
    }

    writeValue() {
        this.markForCheck();
    }

    private get firstErrorIdByOrder(): string | null {
        const firstErrorId =
            this.errorsOrder &&
            this.errorsOrder.find(errorId => !!this.controlErrors[errorId]);

        return firstErrorId || null;
    }

    private get firstErrorId(): string | null {
        const errorIds = Object.keys(this.controlErrors);

        return errorIds[0];
    }

    private get controlErrors(): {[key: string]: any} {
        const control = this.control;

        return (control && control.errors) || {};
    }

    private updateErrorText() {
        this.firstError = this.getErrorText();
    }

    private getErrorText(): TuiValidationError | null {
        const firstErrorId = this.firstErrorIdByOrder || this.firstErrorId;
        const firstError = firstErrorId && this.controlErrors[firstErrorId];

        // @bad TODO: Remove firstError.message check after everybody migrates to TuiValidationError
        if (
            firstError &&
            (firstError instanceof TuiValidationError ||
                typeof firstError.message === 'string')
        ) {
            return firstError;
        }

        return firstErrorId
            ? new TuiValidationError(this.validationErrors[firstErrorId], firstError)
            : null;
    }

    private markForCheck() {
        this.changeDetectorRef.markForCheck();
    }
}

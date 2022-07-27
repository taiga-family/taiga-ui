import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    Input,
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
import {tuiDefaultProp, tuiPure, TuiValidationError} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {EMPTY, isObservable, merge, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

const EMPTY_RECORD = {};
// @dynamic
@Component({
    selector: `tui-field-error`,
    // @bad TODO: find a way to get 'touched' state change
    // https://github.com/angular/angular/issues/10887
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: `./field-error.template.html`,
    styleUrls: [`./field-error.style.less`],
})
export class TuiFieldErrorComponent {
    @Input()
    @tuiDefaultProp()
    order: readonly string[] = [];

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        private readonly ngControl: NgControl | null,
        @Optional()
        @Self()
        @Inject(FormArrayName)
        private readonly formArrayName: FormArrayName | null,
        @Optional()
        @Self()
        @Inject(FormGroupName)
        private readonly formGroupName: FormGroupName | null,
        @Optional()
        @Self()
        @Inject(FormGroupDirective)
        private readonly formGroup: FormGroupDirective | null,
        @Inject(TUI_VALIDATION_ERRORS)
        private readonly validationErrors: Record<
            string,
            PolymorpheusContent | Observable<PolymorpheusContent>
        >,
    ) {
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    @tuiPure
    get change$(): Observable<unknown> {
        return merge(
            this.control?.valueChanges || EMPTY,
            this.control?.statusChanges || EMPTY,
        );
    }

    get computedError(): Observable<TuiValidationError | null> {
        return (this.invalid && this.touched && this.error) || of(null);
    }

    registerOnChange(): void {}

    registerOnTouched(): void {}

    setDisabledState(): void {}

    writeValue(): void {}

    private get error(): Observable<TuiValidationError | null> {
        const {errorId} = this;

        if (!errorId) {
            return of(null);
        }

        const firstError = this.controlErrors[errorId];
        const errorContent = this.validationErrors[errorId];

        return this.getError(firstError, errorContent);
    }

    private get invalid(): boolean {
        return !!this.control && this.control.invalid;
    }

    private get touched(): boolean {
        return !!this.control && this.control.touched;
    }

    private get control(): AbstractControl | null {
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

    private get errorId(): string {
        return this.getErrorId(this.order, this.controlErrors);
    }

    private get controlErrors(): Record<string, unknown> {
        return this.control?.errors || EMPTY_RECORD;
    }

    @tuiPure
    private getErrorId(
        order: readonly string[],
        controlErrors: Record<string, unknown>,
    ): string {
        const id = order?.find(errorId => controlErrors[errorId]);
        const fallback = Object.keys(controlErrors)[0];

        return id || fallback || ``;
    }

    @tuiPure
    private getError(
        firstError: any,
        errorContent?: PolymorpheusContent | Observable<PolymorpheusContent>,
    ): Observable<TuiValidationError> {
        if (firstError instanceof TuiValidationError) {
            return of(firstError);
        }

        if (errorContent === undefined && typeof firstError === `string`) {
            return of(new TuiValidationError(firstError));
        }

        if (isObservable(errorContent)) {
            return errorContent.pipe(
                map(error => new TuiValidationError(error || ``, firstError)),
            );
        }

        return of(new TuiValidationError(errorContent || ``, firstError));
    }
}

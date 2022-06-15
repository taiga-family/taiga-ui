import {Inject, Optional, Pipe, PipeTransform, Self} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormArrayName,
    FormGroupDirective,
    FormGroupName,
    NgControl,
} from '@angular/forms';
import {tuiPure, TuiValidationError} from '@taiga-ui/cdk';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {isObservable, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

const EMPTY_RECORD = {};

// @dynamic
@Pipe({
    name: 'tuiFieldError',
    pure: false,
})
export class TuiFieldErrorPipe implements PipeTransform, ControlValueAccessor {
    private order: readonly string[] = [];

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
        if (this.ngControl && !this.ngControl.valueAccessor) {
            this.ngControl.valueAccessor = this;
        }
    }

    transform(order: readonly string[]): Observable<TuiValidationError | null> {
        this.order = order;

        return this.computedError;
    }

    get computedError(): Observable<TuiValidationError | null> {
        return (this.invalid && this.touched && this.error) || of(null);
    }

    registerOnChange(): void {}

    registerOnTouched(): void {}

    setDisabledState(): void {}

    writeValue(): void {}

    private get error(): Observable<TuiValidationError> | null {
        const {errorId} = this;

        if (!errorId) {
            return null;
        }

        const firstError = this.controlErrors[errorId];
        const errorContent = this.validationErrors[errorId];

        return this.getError(firstError, errorContent);
    }

    private get invalid(): boolean {
        return !!this.control?.invalid;
    }

    private get touched(): boolean {
        return !!this.control?.touched;
    }

    private get control(): AbstractControl | null {
        return (
            this.ngControl?.control ||
            this.formArrayName?.control ||
            this.formGroupName?.control ||
            this.formGroup?.control ||
            null
        );
    }

    private get errorId(): string {
        return this.getErrorId(this.order, this.controlErrors);
    }

    private get controlErrors(): Record<string, any> {
        return this.control?.errors || EMPTY_RECORD;
    }

    @tuiPure
    private getErrorId(
        order: readonly string[],
        controlErrors: Record<string, any>,
    ): string {
        const id = order?.find(errorId => controlErrors[errorId]);
        const fallback = Object.keys(controlErrors)[0];

        return id || fallback || '';
    }

    @tuiPure
    private getError(
        firstError: any,
        errorContent?: PolymorpheusContent | Observable<PolymorpheusContent>,
    ): Observable<TuiValidationError> {
        if (firstError instanceof TuiValidationError) {
            return of(firstError);
        }

        if (errorContent === undefined && typeof firstError === 'string') {
            return of(new TuiValidationError(firstError));
        }

        if (isObservable(errorContent)) {
            return errorContent.pipe(
                map(error => new TuiValidationError(error || '', firstError)),
            );
        }

        return of(new TuiValidationError(errorContent || '', firstError));
    }
}

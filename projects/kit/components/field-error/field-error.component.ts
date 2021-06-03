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

const EMPTY_RECORD = {};

// @dynamic
@Component({
    selector: 'tui-field-error',
    // @bad TODO: find a way to get 'touched' state change
    // https://github.com/angular/angular/issues/10887
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './field-error.template.html',
    styleUrls: ['./field-error.style.less'],
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
        private readonly validationErrors: Record<string, PolymorpheusContent>,
    ) {
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }

    get computedError(): TuiValidationError | null {
        return (this.invalid && this.touched && this.error) || null;
    }

    registerOnChange() {}

    registerOnTouched() {}

    setDisabledState() {}

    writeValue() {}

    private get error(): TuiValidationError | null {
        const {errorId} = this;

        if (!errorId) {
            return null;
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

    private get controlErrors(): Record<string, any> {
        return (this.control && this.control.errors) || EMPTY_RECORD;
    }

    @tuiPure
    private getErrorId(
        order: readonly string[],
        controlErrors: Record<string, any>,
    ): string {
        const id = order && order.find(errorId => controlErrors[errorId]);
        const fallback = Object.keys(controlErrors)[0];

        return id || fallback || '';
    }

    @tuiPure
    private getError(
        firstError: any,
        errorContent?: PolymorpheusContent,
    ): TuiValidationError | null {
        if (firstError instanceof TuiValidationError) {
            return firstError;
        }

        return errorContent === undefined && typeof firstError === 'string'
            ? new TuiValidationError(firstError)
            : new TuiValidationError(errorContent || '', firstError);
    }
}

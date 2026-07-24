import {
    type InputSignal,
    type InputSignalWithTransform,
    type ModelSignal,
    type OutputRef,
} from '@angular/core';

/**
 * @deprecated use import {ValidationError} from '@angular/forms/signals'
 * Just temporary copy-pasted types until Taiga UI supports Angular <22
 * https://github.com/angular/angular/blob/main/packages/forms/signals/src/api/rules/validation/validation_errors.ts#L368
 * TODO: replace all usages `TuiSignalValidationError` by built-in Angular alternative
 */
export interface TuiSignalValidationError {
    readonly kind: string;
    readonly message?: string;
}

// TODO: delete
interface FormUiControl {
    readonly errors?:
        | InputSignal<readonly TuiSignalValidationError[]>
        | InputSignalWithTransform<readonly TuiSignalValidationError[], unknown>;

    readonly disabled?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown>;
    readonly readonly?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown>;
    readonly invalid?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown>;
    readonly pending?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown>;
    readonly touched?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown>;
    readonly dirty?: InputSignal<boolean> | InputSignalWithTransform<boolean, unknown>;

    readonly touch?: OutputRef<void>;

    focus?(options?: FocusOptions): void;
    reset?(): void;
}

/**
 * @deprecated use import {FormValueControl} from '@angular/forms/signals'
 * Just temporary copy-pasted types until Taiga UI supports Angular <22
 * https://github.com/angular/angular/blob/main/packages/forms/signals/src/api/control.ts
 * TODO: replace all usages `TuiFormValueControl` by built-in Angular alternative
 */
export interface TuiFormValueControl<TValue> extends FormUiControl {
    readonly value: ModelSignal<TValue>;
}

import {InputSignal, InputSignalWithTransform, ModelSignal, OutputRef} from "@angular/core";

interface ValidationError {
    readonly kind: string;
    readonly message?: string;
}

interface FormUiControl {
    readonly errors?:
        | InputSignal<readonly ValidationError[]>
        | InputSignalWithTransform<readonly ValidationError[], unknown>;
    
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
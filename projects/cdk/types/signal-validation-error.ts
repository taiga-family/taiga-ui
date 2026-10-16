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

/**
 * @deprecated use import {CompatValidationError} from '@angular/forms/signals'
 * Just temporary copy-pasted types until Taiga UI supports Angular <22
 * https://github.com/angular/angular/blob/f44bf0fe221288d03107cc78acfbe333a9a9b7b5/packages/forms/signals/src/compat/validation_errors.ts#L19
 * TODO: replace all usages `TuiCompatValidationError` by built-in Angular alternative
 */
export interface TuiCompatValidationError extends TuiSignalValidationError {
    /**
     * Signal forms wrap a reactive error into `CompatValidationError`
     * https://github.com/angular/angular/blob/f44bf0fe221288d03107cc78acfbe333a9a9b7b5/packages/forms/signals/src/compat/validation_errors.ts#L55-L65
     */
    readonly context?: unknown;
}

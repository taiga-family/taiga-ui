/**
 * @deprecated Use {@link AbstractTuiValueTransformer} instead
 */
export interface TuiControlValueTransformer<From, To = unknown> {
    readonly toControlValue: (componentValue: From) => To;
    readonly fromControlValue: (controlValue: To) => From;
}

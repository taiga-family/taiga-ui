/**
 * @deprecated Use {@link AbstractTuiValueTransformer} instead
 */
export interface TuiControlValueTransformer<From, To = unknown> {
    readonly fromControlValue: (controlValue: To) => From;
    readonly toControlValue: (componentValue: From) => To;
}

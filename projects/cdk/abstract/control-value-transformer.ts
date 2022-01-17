export abstract class AbstractTuiControlValueTransformer<From, To = unknown> {
    abstract toControlValue(componentValue: From): To;
    abstract fromControlValue(controlValue: To): From;
}

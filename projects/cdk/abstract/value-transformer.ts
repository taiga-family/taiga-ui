export abstract class AbstractTuiValueTransformer<From, To = unknown> {
    public abstract toControlValue(componentValue: From): To;
    public abstract fromControlValue(controlValue: To): From;
}

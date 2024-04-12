export abstract class TuiValueTransformer<From, To = unknown> {
    public abstract toControlValue(componentValue: From): To;
    public abstract fromControlValue(controlValue: To): From;
}

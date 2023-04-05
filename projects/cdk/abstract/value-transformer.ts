export abstract class AbstractTuiValueTransformer<From, To = unknown> {
    abstract toControlValue(componentValue: From): To;
    abstract fromControlValue(controlValue: To): From;
}

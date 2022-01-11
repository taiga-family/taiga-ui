export abstract class AbstractTuiControlValueTransformer<From, To = unknown> {
    abstract toOrigin(transformedValue: To): From;
    abstract transformValue(originValue: From): To;
}

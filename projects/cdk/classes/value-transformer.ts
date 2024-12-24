import type {FactoryProvider, ProviderToken} from '@angular/core';
import {inject} from '@angular/core';

export abstract class TuiValueTransformer<From, To = unknown> {
    public abstract toControlValue(componentValue: From): To;
    public abstract fromControlValue(controlValue: To): From;
}

export function tuiValueTransformerFrom<
    T extends {valueTransformer: TuiValueTransformer<unknown>},
>(token: ProviderToken<T>): FactoryProvider {
    return {
        provide: TuiValueTransformer,
        useFactory: () => inject(token).valueTransformer,
    };
}

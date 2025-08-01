import {Directive, type FactoryProvider, inject, type ProviderToken} from '@angular/core';
import {identity} from 'rxjs';

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

export class TuiNonNullableValueTransformer<T> extends TuiValueTransformer<T | null, T> {
    private prevValue!: T;

    public fromControlValue(value: T): T {
        this.prevValue = value;

        return value;
    }

    public toControlValue(value: T | null): T {
        this.prevValue = value ?? this.prevValue;

        return this.prevValue;
    }
}

@Directive({
    standalone: true,
    selector: '[tuiNonNullableValue]',
    providers: [{provide: TuiValueTransformer, useClass: TuiNonNullableValueTransformer}],
})
export class TuiNonNullableValueDirective {}

export const TUI_IDENTITY_VALUE_TRANSFORMER: TuiValueTransformer<any, any> = {
    fromControlValue: identity,
    toControlValue: identity,
};

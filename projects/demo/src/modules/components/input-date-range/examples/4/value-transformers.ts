import {AbstractTuiControlValueTransformer, TuiDay, TuiDayRange} from '@taiga-ui/cdk';

export class ExampleDateTransformer extends AbstractTuiControlValueTransformer<
    TuiDay | null,
    Date | null
> {
    toOrigin(transformedValue: Date | null): TuiDay | null {
        return transformedValue && TuiDay.fromLocalNativeDate(transformedValue);
    }

    transformValue(originValue: TuiDay | null): Date | null {
        return originValue && originValue.toLocalNativeDate();
    }
}

export function getExampleDateRangeTransformer(
    dateTransformer: ExampleDateTransformer | null,
) {
    if (!dateTransformer) {
        return null;
    }

    return new (class {
        toOrigin([transformedFrom, transformedTo]: [Date, Date]): TuiDayRange | null {
            const from = transformedFrom && dateTransformer.toOrigin(transformedFrom);
            const to = transformedTo && dateTransformer.toOrigin(transformedTo);

            return from && to && new TuiDayRange(from, to);
        }

        transformValue(originalValue: TuiDayRange | null): [Date, Date] | null {
            const from =
                originalValue && dateTransformer.transformValue(originalValue.from);
            const to = originalValue && dateTransformer.transformValue(originalValue.to);

            return from && to && [from, to];
        }
    })();
}

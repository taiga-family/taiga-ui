import {AbstractTuiControlValueTransformer, TuiDay, TuiDayRange} from '@taiga-ui/cdk';

export class ExampleDateTransformer extends AbstractTuiControlValueTransformer<
    TuiDay | null,
    Date | null
> {
    fromControlValue(controlValue: Date | null): TuiDay | null {
        return controlValue && TuiDay.fromLocalNativeDate(controlValue);
    }

    toControlValue(componentValue: TuiDay | null): Date | null {
        return componentValue && componentValue.toLocalNativeDate();
    }
}

class ExampleDateRangeTransformer extends AbstractTuiControlValueTransformer<
    TuiDayRange | null,
    [Date, Date] | null
> {
    constructor(
        private readonly dateTransformer: AbstractTuiControlValueTransformer<
            TuiDay | null,
            Date | null
        >,
    ) {
        super();
    }

    fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {
        const [transformedFrom, transformedTo] = controlValue || [null, null];
        const from =
            transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);
        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);

        return from && to && new TuiDayRange(from, to);
    }

    toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {
        const from =
            componentValue && this.dateTransformer.toControlValue(componentValue.from);
        const to =
            componentValue && this.dateTransformer.toControlValue(componentValue.to);

        return from && to && [from, to];
    }
}

export function getExampleDateRangeTransformer(
    dateTransformer: ExampleDateTransformer | null,
): AbstractTuiControlValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {
    if (!dateTransformer) {
        return null;
    }

    return new ExampleDateRangeTransformer(dateTransformer);
}

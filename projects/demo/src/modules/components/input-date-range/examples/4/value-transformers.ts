import {Injectable} from '@angular/core';
import type {TuiControlValueTransformer} from '@taiga-ui/cdk';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';

@Injectable()
export class ExampleDateTransformer
    implements TuiControlValueTransformer<TuiDay | null, Date | null>
{
    fromControlValue(controlValue: Date | null): TuiDay | null {
        return controlValue && TuiDay.fromLocalNativeDate(controlValue);
    }

    toControlValue(componentValue: TuiDay | null): Date | null {
        return componentValue?.toLocalNativeDate() || null;
    }
}

class ExampleDateRangeTransformer
    implements TuiControlValueTransformer<TuiDayRange | null, [Date, Date] | null>
{
    constructor(
        private readonly dateTransformer: TuiControlValueTransformer<
            TuiDay | null,
            Date | null
        >,
    ) {}

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
): TuiControlValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {
    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);
}

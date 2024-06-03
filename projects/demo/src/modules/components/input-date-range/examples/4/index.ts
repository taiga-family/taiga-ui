import {Component, Injectable} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange, TuiValueTransformer} from '@taiga-ui/cdk';
import {
    TUI_DATE_RANGE_VALUE_TRANSFORMER,
    TUI_DATE_VALUE_TRANSFORMER,
} from '@taiga-ui/kit';
import {TuiInputDateRangeModule} from '@taiga-ui/legacy';

class ExampleDateRangeTransformer extends TuiValueTransformer<
    TuiDayRange | null,
    [Date, Date] | null
> {
    constructor(
        private readonly dateTransformer: TuiValueTransformer<TuiDay | null, Date | null>,
    ) {
        super();
    }

    public fromControlValue(controlValue: [Date, Date] | null): TuiDayRange | null {
        const [transformedFrom, transformedTo] = controlValue || [null, null];
        const from =
            transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);
        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);

        return from && to && new TuiDayRange(from, to);
    }

    public toControlValue(componentValue: TuiDayRange | null): [Date, Date] | null {
        const from =
            componentValue && this.dateTransformer.toControlValue(componentValue.from);
        const to =
            componentValue && this.dateTransformer.toControlValue(componentValue.to);

        return from && to && [from, to];
    }
}

@Injectable()
export class ExampleDateTransformer extends TuiValueTransformer<
    TuiDay | null,
    Date | null
> {
    public fromControlValue(controlValue: Date | null): TuiDay | null {
        return controlValue && TuiDay.fromLocalNativeDate(controlValue);
    }

    public toControlValue(componentValue: TuiDay | null): Date | null {
        return componentValue?.toLocalNativeDate() || null;
    }
}

export function getExampleDateRangeTransformer(
    dateTransformer: ExampleDateTransformer | null,
): TuiValueTransformer<TuiDayRange | null, [Date, Date] | null> | null {
    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);
}

@Component({
    standalone: true,
    imports: [TuiInputDateRangeModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_VALUE_TRANSFORMER,
            useClass: ExampleDateTransformer,
        },
        {
            provide: TUI_DATE_RANGE_VALUE_TRANSFORMER,
            deps: [TUI_DATE_VALUE_TRANSFORMER],
            useFactory: getExampleDateRangeTransformer,
        },
    ],
})
export default class ExampleComponent {
    protected readonly control = new FormControl([
        new Date(2018, 2, 10),
        new Date(2018, 3, 20),
    ]);
}

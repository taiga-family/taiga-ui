import {Injectable} from '@angular/core';
import {TuiDay, TuiTime, TuiValueTransformer} from '@taiga-ui/cdk';

@Injectable()
export class ExampleDateTimeTransformer extends TuiValueTransformer<
    [TuiDay | null, TuiTime | null],
    string
> {
    private readonly separator = ', ';

    public fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {
        const [day, time = ''] = controlValue.split(this.separator);

        return day
            ? [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null]
            : [null, null];
    }

    public toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {
        return day
            ? day.toString() + (time ? `${this.separator}${time.toString()}` : '')
            : '';
    }
}

import {TuiControlValueTransformer, TuiDay, TuiTime} from '@taiga-ui/cdk';

export class ExampleDateTimeTransformer
    implements TuiControlValueTransformer<[TuiDay | null, TuiTime | null], string>
{
    private readonly separator = `, `;

    fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {
        const [day, time = ``] = controlValue.split(this.separator);

        return day
            ? [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null]
            : [null, null];
    }

    toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {
        return day
            ? day.toString() + (time ? `${this.separator}${time.toString()}` : ``)
            : ``;
    }
}

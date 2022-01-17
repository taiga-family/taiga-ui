import {AbstractTuiControlValueTransformer, TuiDay, TuiTime} from '@taiga-ui/cdk';

export class ExampleDateTimeTransformer extends AbstractTuiControlValueTransformer<
    [TuiDay | null, TuiTime | null],
    string
> {
    private readonly separator = ', ';

    fromControlValue(controlValue: string): [TuiDay | null, TuiTime | null] {
        const [day, time = ''] = controlValue.split(this.separator);

        if (!day) {
            return [null, null];
        }

        return [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null];
    }

    toControlValue([day, time]: [TuiDay | null, TuiTime | null]): string {
        if (!day) return '';

        return day.toString() + (time ? `${this.separator}${time.toString()}` : '');
    }
}

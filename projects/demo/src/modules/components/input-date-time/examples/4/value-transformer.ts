import {AbstractTuiControlValueTransformer, TuiDay, TuiTime} from '@taiga-ui/cdk';

const SEPARATOR = ', ';

export class ExampleDateTimeTransformer extends AbstractTuiControlValueTransformer<
    [TuiDay | null, TuiTime | null],
    string
> {
    toOrigin(transformedValue: string): [TuiDay | null, TuiTime | null] {
        const [day, time = ''] = transformedValue.split(SEPARATOR);

        if (!day) {
            return [null, null];
        }

        return [TuiDay.normalizeParse(day), time ? TuiTime.fromString(time) : null];
    }

    transformValue([day, time]: [TuiDay | null, TuiTime | null]): string {
        if (!day) return '';

        return day.toString() + (time ? `${SEPARATOR}${time.toString()}` : '');
    }
}

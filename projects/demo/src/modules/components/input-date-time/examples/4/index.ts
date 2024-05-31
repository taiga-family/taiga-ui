import {Component, Injectable} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime, TuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_DATE_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit';
import {TuiInputDateTimeModule} from '@taiga-ui/legacy';

@Injectable()
class ExampleDateTimeTransformer extends TuiValueTransformer<
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

@Component({
    standalone: true,
    imports: [TuiInputDateTimeModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_DATE_TIME_VALUE_TRANSFORMER,
            useClass: ExampleDateTimeTransformer,
        },
    ],
})
export default class ExampleComponent {
    protected readonly control = new FormControl('19.01.2022, 12:33');
}

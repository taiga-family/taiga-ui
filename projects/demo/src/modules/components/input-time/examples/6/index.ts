import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime, TuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_TIME_VALUE_TRANSFORMER, tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule} from '@taiga-ui/legacy';

class ExampleTimeTransformer extends TuiValueTransformer<TuiTime | null, string | null> {
    public fromControlValue(controlValue: string): TuiTime | null {
        return controlValue ? TuiTime.fromString(controlValue) : null;
    }

    public toControlValue(time: TuiTime | null): string {
        return time ? time.toString() : '';
    }
}

@Component({
    standalone: true,
    imports: [TuiInputTimeModule, ReactiveFormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_TIME_VALUE_TRANSFORMER,
            useClass: ExampleTimeTransformer,
        },
    ],
})
export default class Example {
    protected readonly control = new FormControl('');
    protected readonly items = tuiCreateTimePeriods();
}

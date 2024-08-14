import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {AbstractTuiValueTransformer, TuiTime} from '@taiga-ui/cdk';
import {TUI_TIME_VALUE_TRANSFORMER, tuiCreateTimePeriods} from '@taiga-ui/kit';

class ExampleTimeTransformer extends AbstractTuiValueTransformer<
    TuiTime | null,
    string | null
> {
    fromControlValue(controlValue: string): TuiTime | null {
        return controlValue ? TuiTime.fromString(controlValue) : null;
    }

    toControlValue(time: TuiTime | null): string {
        return time ? time.toString() : '';
    }
}

@Component({
    selector: 'tui-input-time-example-6',
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
export class TuiInputTimeExample6 {
    readonly control = new FormControl('');
    readonly items = tuiCreateTimePeriods();
}

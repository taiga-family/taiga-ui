import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';
import {TuiNamedDay} from '@taiga-ui/kit';

@Component({
    selector: `tui-input-date-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputDateExample3 {
    from: TuiDay | null = null;
    to: TuiDay | null = null;
    min = new TuiDay(2017, 9, 4);
    max = TuiDay.currentLocal();
    items = [
        new TuiNamedDay(
            TUI_LAST_DAY.append({year: -1}),
            `Until today`,
            TuiDay.currentLocal(),
        ),
    ];
}

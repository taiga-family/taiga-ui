import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';
import {TuiNamedDay} from '@taiga-ui/kit';

@Component({
    selector: 'tui-input-date-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputDateExample3 {
    protected from: TuiDay | null = null;
    protected to: TuiDay | null = null;
    protected min = new TuiDay(2017, 9, 4);
    protected max = TuiDay.currentLocal();
    protected items = [
        new TuiNamedDay(
            TUI_LAST_DAY.append({year: -1}),
            'Until today',
            TuiDay.currentLocal(),
        ),
    ];
}

import {Component} from '@angular/core';
import {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';
import {TuiNamedDay} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-date-example-3',
    templateUrl: './index.html',
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
            'Until today',
            TuiDay.currentLocal(),
        ),
    ];
}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateModule, TuiNamedDay} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiInputDateModule, FormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
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

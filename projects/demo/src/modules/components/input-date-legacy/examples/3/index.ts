import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiInputDateModule, TuiNamedDay} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected from: TuiDay | null = null;
    protected to: TuiDay | null = null;
    protected min = new TuiDay(2017, 9, 4);
    protected max = TuiDay.currentLocal();
    protected items = [new TuiNamedDay(TuiDay.currentLocal(), 'Until today')];
}

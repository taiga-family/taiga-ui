import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {type TuiMarkerHandler} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

const DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [FormsModule, TuiInputDateMulti],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 4), new TuiDay(2025, 6, 6)];

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.isWeekend ? [] : DOT;
}
`;export{a as default};

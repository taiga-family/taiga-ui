import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_ARRAY, TuiDay} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

const DOT: [string] = ['var(--tui-status-positive)'];

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 4), new TuiDay(2025, 6, 6)];

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.isWeekend ? EMPTY_ARRAY : DOT;
}

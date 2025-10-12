import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiMonth, type TuiTime} from '@taiga-ui/cdk';
import {type TuiMarkerHandler, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

const CHEAPEST_TICKET: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [FormsModule, TuiInputDateTime, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: [TuiDay, TuiTime] | null = null;

    protected readonly defaultActiveMonth = signal(new TuiMonth(2000, 0));

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.day % 5 === 0 ? CHEAPEST_TICKET : [];
}

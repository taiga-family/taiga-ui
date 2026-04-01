import"./chunk-HU6DUUP4.js";var a=`import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {type TuiMarkerHandler} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';

const CHEAPEST_TICKET: [string] = ['var(--tui-status-positive)'];

@Component({
    imports: [FormsModule, TuiInputDate],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected readonly defaultActiveMonth = signal(new TuiMonth(2000, 0));

    protected readonly markerHandler: TuiMarkerHandler = (day: TuiDay) =>
        day.day % 5 === 0 ? CHEAPEST_TICKET : [];
}
`;export{a as default};

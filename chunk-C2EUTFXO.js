import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime} from '@taiga-ui/kit';

const TODAY = TuiDay.currentLocal();

@Component({
    imports: [FormsModule, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: [TuiDay, TuiTime | null] | null = null;

    protected readonly min = [
        new TuiDay(TODAY.year, TODAY.month, 1),
        new TuiTime(0, 0),
    ] as const;

    protected readonly max = [
        this.min[0].append({month: 1, day: -1}),
        new TuiTime(23, 59),
    ] as const;

    protected readonly handler = ([day]: [TuiDay, TuiTime | null]): boolean =>
        day.daySame(TODAY);
}
`;export{o as default};

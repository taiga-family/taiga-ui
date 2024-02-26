import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-pie-chart-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPieChartExample2 {
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
}

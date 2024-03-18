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
    readonly value = [100, 200, 300, 400, 500];
    readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
}

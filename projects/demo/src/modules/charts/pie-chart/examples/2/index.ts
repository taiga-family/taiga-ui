import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-pie-chart-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiPieChartExample2 {
    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
}

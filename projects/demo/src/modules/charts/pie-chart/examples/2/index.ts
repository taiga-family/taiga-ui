import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-pie-chart-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiPieChartExample2 {
    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `Other`];
}

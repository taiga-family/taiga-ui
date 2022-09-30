import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiSum} from '@taiga-ui/cdk';

@Component({
    selector: `tui-ring-chart-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiRingChartExample2 {
    private readonly labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `other`];
    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly total = tuiSum(...this.value);

    index = NaN;

    get sum(): number {
        return isNaN(this.index) ? this.total : this.value[this.index];
    }

    get label(): string {
        return isNaN(this.index) ? `Total` : this.labels[this.index];
    }
}

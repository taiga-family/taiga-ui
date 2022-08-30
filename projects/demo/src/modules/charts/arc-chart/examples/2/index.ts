import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiSum} from '@taiga-ui/cdk';

@Component({
    selector: `tui-arc-chart-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiArcChartExample2 {
    private readonly labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `other`];
    readonly value = [13769, 12367, 10172, 3018, 2592];
    readonly sum = tuiSum(...this.value);

    getValue(index: number): number {
        return Number.isNaN(index) ? this.sum : this.value[index];
    }

    getLabel(index: number): string {
        return Number.isNaN(index) ? `Total` : this.labels[index];
    }
}
